# mosir-sdk-ts

TypeScript SDK for the Mosir public GraphQL API.

## What this SDK provides

- generated TypeScript types from `public.graphqls`
- generated operation wrappers from `public.operations.graphql`
- built-in Bearer token auth
- default endpoint: `https://beta.mosir.app/api/v1`
- SSE subscription support out of the box
- raw GraphQL access for developers who want direct control
- dual package output: ESM + CJS

## Transport choice

This SDK uses:

- `graphql-request` for queries and mutations
- `graphql-sse` for subscriptions

This keeps the package small while still supporting the preferred subscription transport.
WebSocket support is intentionally not bundled. If you want WebSocket subscriptions, use your own GraphQL/WebSocket client with the exported generated documents and types.

## Install

```bash
pnpm add mosir-sdk-ts graphql
```

## Quick start

```ts
import { createMosirClient } from 'mosir-sdk-ts'

const client = createMosirClient({
  token: process.env.MOSIR_API_TOKEN!,
})

const account = await client.GetCurrentAccount()
console.log(account.getCurrentAccount.username)
```

## Custom endpoint

```ts
import { createMosirClient } from 'mosir-sdk-ts'

const client = createMosirClient({
  token: process.env.MOSIR_API_TOKEN!,
  endpoint: 'https://example.com/api/v1',
})
```

## Wrapped operations

All curated public operations are generated as callable methods.

```ts
const client = createMosirClient({ token })

const post = await client.GetPost({ postId: 'post_123' })
const feed = await client.GetFeedPosts({ limit: 20 })
```

The same methods are also available under `client.sdk`:

```ts
const account = await client.sdk.GetCurrentAccount()
```

## SSE subscriptions

```ts
const client = createMosirClient({ token })

for await (const event of client.PostUpdated({ postId: 'post_123' })) {
  console.log(event.postUpdated.id)
}
```

You can also use the lower-level raw subscription API:

```ts
import { PostUpdatedDocument } from 'mosir-sdk-ts'

const client = createMosirClient({ token })

for await (const event of client.subscribe(PostUpdatedDocument, { postId: 'post_123' })) {
  console.log(event.postUpdated.content)
}
```

## Raw GraphQL access

Use generated typed documents directly:

```ts
import { createMosirClient, GetNotificationsDocument } from 'mosir-sdk-ts'

const client = createMosirClient({ token })

const data = await client.request(GetNotificationsDocument, {
  limit: 20,
})
```

You can also pass a raw GraphQL string:

```ts
const data = await client.request(
  /* GraphQL */ `
    query GetUnreadNotificationCount {
      getUnreadNotificationCount
    }
  `,
)
```

## WebSocket usage

WebSocket transport is not bundled.
If you want it, use your own GraphQL WebSocket client against the same endpoint and reuse the exported generated documents/types from this package.

## Development

### Install

```bash
task install
```

### Generate code

```bash
task codegen
```

### Typecheck

```bash
task typecheck
```

### Build

```bash
task build
```

### Full check

```bash
task check
```

## Repo artifacts

- `public.graphqls` — copied public schema artifact
- `public.operations.graphql` — copied curated operation document
- `src/generated/graphql.ts` — generated GraphQL types and typed documents
- `src/generated/sdk.ts` — generated operation wrapper methods
