import type { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { GraphQLClient, type RequestDocument } from 'graphql-request';
import { createClient as createSseClient, type Client as SseClient } from 'graphql-sse';
import {
  getOperationAST,
  parse,
  print,
  type DocumentNode,
  type OperationTypeNode,
} from 'graphql';

import { getSdk, type Requester, type Sdk } from './generated/sdk';

export const DEFAULT_ENDPOINT = 'https://beta.mosir.app/api/v1';

export interface MosirClientOptions {
  token?: string;
  endpoint?: string;
  headers?: HeadersInit;
  fetch?: typeof fetch;
}

export interface MosirRequestOptions {
  headers?: HeadersInit;
  signal?: AbortSignal;
}

export type MosirDocument<
  TResult = unknown,
  TVariables extends object = Record<string, unknown>,
> = RequestDocument | TypedDocumentNode<TResult, TVariables>;

export interface MosirBaseClient {
  readonly endpoint: string;
  readonly token?: string;
  request<TResult, TVariables extends object = Record<string, unknown>>(
    document: MosirDocument<TResult, TVariables>,
    variables?: TVariables,
    options?: MosirRequestOptions,
  ): Promise<TResult>;
  subscribe<TResult, TVariables extends object = Record<string, unknown>>(
    document: MosirDocument<TResult, TVariables>,
    variables?: TVariables,
    options?: MosirRequestOptions,
  ): AsyncIterable<TResult>;
  execute<TResult, TVariables extends object = Record<string, unknown>>(
    document: MosirDocument<TResult, TVariables>,
    variables?: TVariables,
    options?: MosirRequestOptions,
  ): Promise<TResult> | AsyncIterable<TResult>;
  sdk: SdkRequester;
  dispose(): void;
}

export type MosirClient = MosirBaseClient & Sdk;
export type SdkRequester = Sdk;

export function createMosirClient(options: MosirClientOptions): MosirClient {
  const endpoint = options.endpoint ?? DEFAULT_ENDPOINT;
  const transport = new MosirTransport(options, endpoint);

  const requester: Requester<MosirRequestOptions> = (document, variables, requestOptions) =>
    transport.execute(document, variables as Record<string, unknown> | undefined, requestOptions);

  const sdk = getSdk(requester);

  return Object.assign(
    {
      endpoint,
      token: options.token,
      request: transport.request.bind(transport),
      subscribe: transport.subscribe.bind(transport),
      execute: transport.execute.bind(transport),
      sdk,
      dispose: transport.dispose.bind(transport),
    },
    sdk,
  ) as MosirClient;
}

class MosirTransport {
  private readonly endpoint: string;
  private readonly token?: string;
  private readonly graphQLClient: GraphQLClient;
  private readonly defaultHeaders?: HeadersInit;
  private readonly fetchImplementation?: typeof fetch;
  private readonly sseClient: SseClient;

  constructor(options: MosirClientOptions, endpoint: string) {
    this.endpoint = endpoint;
    this.token = options.token;
    this.defaultHeaders = options.headers;
    this.fetchImplementation = options.fetch;
    this.graphQLClient = new GraphQLClient(endpoint, {
      fetch: options.fetch,
    });
    this.sseClient = this.createSseClient();
  }

  async request<TResult, TVariables extends object = Record<string, unknown>>(
    document: MosirDocument<TResult, TVariables>,
    variables?: TVariables,
    options?: MosirRequestOptions,
  ): Promise<TResult> {
    const operationType = getOperationType(document);

    if (operationType === 'subscription') {
      throw new Error('Use subscribe(...) for subscription operations.');
    }

    const requestOptions: {
      document: MosirDocument<TResult, TVariables>;
      variables?: TVariables;
      signal?: AbortSignal;
      requestHeaders: Headers;
    } = {
      document,
      signal: options?.signal,
      requestHeaders: mergeHeaders(this.authHeaders, this.defaultHeaders, options?.headers),
    };

    if (variables !== undefined) {
      requestOptions.variables = variables;
    }

    return this.graphQLClient.request<TResult, TVariables>(requestOptions as never);
  }

  subscribe<TResult, TVariables extends object = Record<string, unknown>>(
    document: MosirDocument<TResult, TVariables>,
    variables?: TVariables,
    options?: MosirRequestOptions,
  ): AsyncIterable<TResult> {
    const operationType = getOperationType(document);

    if (operationType !== 'subscription') {
      throw new Error('Use request(...) for query and mutation operations.');
    }

    const request = {
      query: toQueryString(document),
      variables: variables as Record<string, unknown> | undefined,
      operationName: getOperationName(document),
    };

    const client = options?.headers ? this.createSseClient(options.headers) : this.sseClient;

    return wrapSubscriptionIterator<TResult>(client.iterate<TResult>(request), () => {
      if (client !== this.sseClient) {
        client.dispose();
      }
    });
  }

  execute<TResult, TVariables extends object = Record<string, unknown>>(
    document: MosirDocument<TResult, TVariables>,
    variables?: TVariables,
    options?: MosirRequestOptions,
  ): Promise<TResult> | AsyncIterable<TResult> {
    const operationType = getOperationType(document);
    return operationType === 'subscription'
      ? this.subscribe(document, variables, options)
      : this.request(document, variables, options);
  }

  dispose(): void {
    this.sseClient.dispose();
  }

  private createSseClient(extraHeaders?: HeadersInit): SseClient {
    return createSseClient({
      url: this.endpoint,
      fetchFn: this.fetchImplementation,
      headers: async () =>
        headersToRecord(mergeHeaders(this.authHeaders, this.defaultHeaders, extraHeaders)),
    });
  }

  private get authHeaders(): HeadersInit | undefined {
    if (!this.token) {
      return undefined;
    }

    return {
      Authorization: `Bearer ${this.token}`,
    };
  }
}

async function* wrapSubscriptionIterator<TResult>(
  iterator: AsyncIterableIterator<{
    data?: TResult | null;
    errors?: ReadonlyArray<{ message: string }>;
  }>,
  onFinally: () => void,
): AsyncIterable<TResult> {
  try {
    for await (const result of iterator) {
      if (result.errors?.length) {
        throw new Error(result.errors.map((error) => error.message).join('\n'));
      }

      if (result.data != null) {
        yield result.data;
      }
    }
  } finally {
    onFinally();
  }
}

function getOperationType(document: RequestDocument): OperationTypeNode {
  const operation = getOperationAST(toDocumentNode(document), getOperationName(document));

  if (!operation) {
    throw new Error('Unable to resolve GraphQL operation type. Provide a single named operation document.');
  }

  return operation.operation;
}

function getOperationName(document: RequestDocument): string | undefined {
  const operation = getOperationAST(toDocumentNode(document), undefined);
  return operation?.name?.value;
}

function toDocumentNode(document: RequestDocument): DocumentNode {
  if (typeof document === 'string' || document instanceof String) {
    return parse(String(document));
  }

  return document as DocumentNode;
}

function toQueryString(document: RequestDocument): string {
  if (typeof document === 'string' || document instanceof String) {
    return String(document);
  }

  return print(document as DocumentNode);
}

function mergeHeaders(...headersList: Array<HeadersInit | undefined>): Headers {
  const headers = new Headers();

  for (const headerSet of headersList) {
    if (!headerSet) {
      continue;
    }

    const normalized = new Headers(headerSet);
    normalized.forEach((value, key) => {
      headers.set(key, value);
    });
  }

  return headers;
}

function headersToRecord(headers: Headers): Record<string, string> {
  return Object.fromEntries(headers.entries());
}
