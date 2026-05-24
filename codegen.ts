import type { CodegenConfig } from '@graphql-codegen/cli';

const sharedConfig = {
  useTypeImports: true,
  enumsAsTypes: true,
  scalars: {
    DateTime: 'string',
    JSON: 'unknown',
    Emoji: 'string',
    Upload: 'File | Blob | string',
  },
} as const;

const config: CodegenConfig = {
  schema: './public.graphqls',
  documents: './public.operations.graphql',
  generates: {
    './src/generated/graphql.ts': {
      plugins: ['typescript', 'typescript-operations', 'typed-document-node'],
      config: {
        ...sharedConfig,
        documentMode: 'documentNode',
        documentNodeImport: '@graphql-typed-document-node/core#TypedDocumentNode',
      },
    },
    './src/generated/sdk.ts': {
      plugins: ['typescript-generic-sdk'],
      config: {
        ...sharedConfig,
        documentMode: 'external',
        importDocumentNodeExternallyFrom: './graphql',
        importOperationTypesFrom: './graphql',
        rawRequest: false,
      },
    },
  },
};

export default config;
