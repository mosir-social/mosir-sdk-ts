# mosir-sdk-ts

TypeScript SDK for the Mosir public GraphQL API.

## What this SDK provides

- generated TypeScript types from `public.graphqls`
- generated operation wrappers from `public.operations.graphql`
- optional Bearer token auth
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
pnpm add mosir-sdk-ts
```

## Quick start

### Anonymous/public requests

Only public data needs no token.

```ts
import { createMosirClient } from 'mosir-sdk-ts'

const client = createMosirClient({})

const post = await client.getPost({ postId: 'VLO8u7UXqclQ7byjfMEX0' })
console.log(post.getPost?.content)
```

### Authenticated requests

Use a token for authenticated operations such as notifications.

```ts
import { createMosirClient } from 'mosir-sdk-ts'

const client = createMosirClient({
  token: process.env.MOSIR_API_TOKEN,
})

const notifications = await client.getNotifications({ limit: 20 })
console.log(notifications.getNotifications.edges)
```

## Custom endpoint

```ts
import { createMosirClient } from 'mosir-sdk-ts'

const client = createMosirClient({
  token: process.env.MOSIR_API_TOKEN,
  endpoint: 'https://example.com/api/v1',
})
```

## Common usage examples

Both the generated PascalCase names and SDK-friendly camelCase aliases are available, but camelCase is preferred.

### Get a post

```ts
const client = createMosirClient({})

const post = await client.getPost({ postId: 'VLO8u7UXqclQ7byjfMEX0' })

console.log(post.getPost?.author.username)
console.log(post.getPost?.content)
```

### Get replies under a post

Replies are exposed as nested GraphQL fields on `Post`, so this is a good case for direct GraphQL usage:

```ts
const client = createMosirClient({})

const replies = await client.request(
  /* GraphQL */ `
    query GetPostReplies($postId: ID!, $limit: Int) {
      getPost(postId: $postId) {
        id
        commentsRecent(limit: $limit) {
          edges {
            id
            content
            createdAt
            author {
              id
              username
              displayName
            }
          }
          pageInfo {
            endCursor
            hasNextPage
            totalCount
          }
        }
      }
    }
  `,
  {
    postId: 'VLO8u7UXqclQ7byjfMEX0',
    limit: 3,
  },
)

console.log(replies.getPost?.commentsRecent.edges)
// one reply in this thread is: 47awwiLrfk5snCOxFFoXG
```

### Get notifications

```ts
const client = createMosirClient({
  token: process.env.MOSIR_API_TOKEN,
})

const notifications = await client.getNotifications({ limit: 20 })
console.log(notifications.getNotifications.edges)
```

### Fetch media bytes from a `Media` result

```ts
const client = createMosirClient({})
const post = await client.getPost({ postId: 'VLO8u7UXqclQ7byjfMEX0' })

const media = post.getPost?.attachments[0]?.media
if (media) {
  const response = await client.fetchMedia(media)
  const bytes = await response.arrayBuffer()
  console.log(bytes.byteLength)
}
```

### Fetch preview image for a post, profile, or collection

```ts
const client = createMosirClient({})

const previewUrl = client.getPreviewImageUrl('post', 'VLO8u7UXqclQ7byjfMEX0')
console.log(previewUrl)

const previewResponse = await client.fetchPreviewImage('post', 'VLO8u7UXqclQ7byjfMEX0')
const previewBytes = await previewResponse.arrayBuffer()
console.log(previewBytes.byteLength)
```

The same generated methods are also available under `client.sdk`:

```ts
const account = await client.sdk.getCurrentAccount()
```

## SSE subscriptions

Subscriptions let your app receive updates from Mosir in near real time without polling.
This SDK uses **SSE** (Server-Sent Events) for subscriptions by default.

A good example is a Discord bot:
- subscribe to `postCreatedByAuthor`
- when a creator publishes something new, format it
- send a message into a Discord channel

That way the bot reacts as soon as something changes, instead of repeatedly calling the API every few seconds.
SSE is especially useful for backend workers, bots, notification relays, and other long-running processes that want a simple one-way stream of events from the server.
For public subscriptions like `postCreatedByAuthor`, a token is not required.

Note: each SSE connection lasts at most 1 hour. In practice, network conditions may cause it to end earlier.
If you build a bot, worker, or relay process, make sure you implement reconnect logic.

```ts
const client = createMosirClient({})

const profile = await client.getAccountProfile({ username: 'leemiyinghao' })
const authorId = profile.getAccountProfile.id

for await (const event of client.postCreatedByAuthor({
  authorId,
  postType: 'POST',
})) {
  console.log(event.postCreatedByAuthor.id)
  console.log(event.postCreatedByAuthor.content)
}
```

You can also use the lower-level raw subscription API:

```ts
import { PostCreatedByAuthorDocument } from 'mosir-sdk-ts'

const client = createMosirClient({})

const profile = await client.getAccountProfile({ username: 'leemiyinghao' })
const authorId = profile.getAccountProfile.id

for await (const event of client.subscribe(PostCreatedByAuthorDocument, {
  authorId,
  postType: 'POST',
})) {
  console.log(event.postCreatedByAuthor.content)
}
```

## Raw GraphQL access

Authentication is optional. Pass `token` for authenticated operations, or omit it when accessing only public data.

### Typed document usage

```ts
import { createMosirClient, GetNotificationsDocument } from 'mosir-sdk-ts'

const client = createMosirClient({ token })

const data = await client.request(GetNotificationsDocument, {
  limit: 20,
})
```

Example real public post lookup against `https://beta.mosir.app/api/v1`:

```ts
const post = await client.getPost({ postId: 'VLO8u7UXqclQ7byjfMEX0' })

console.log(post.getPost)
// {
//   id: 'VLO8u7UXqclQ7byjfMEX0',
//   content: '**重力感應自動導航***（實驗性）*\n您現在可以不用手滑mosir。（手機限定）',
//   createdAt: '2026-03-31T16:01:24Z',
//   author: {
//     id: 'GBWfRinN_Ya65D3SJaNS4',
//     username: 'leemiyinghao',
//     displayName: 'catLee'
//   },
//   ...
// }
```

### Raw GraphQL string usage

```ts
const replies = await client.request(
  /* GraphQL */ `
    query GetPostReplies($postId: ID!, $limit: Int) {
      getPost(postId: $postId) {
        id
        commentsRecent(limit: $limit) {
          edges {
            id
            content
            createdAt
            author {
              username
              displayName
            }
          }
        }
      }
    }
  `,
  {
    postId: 'VLO8u7UXqclQ7byjfMEX0',
    limit: 3,
  },
)
```

## WebSocket usage

WebSocket transport is not bundled.
If you want it, use your own GraphQL WebSocket client against the same endpoint and reuse the exported generated documents and types from this package.

## Notes

- default endpoint: `https://beta.mosir.app/api/v1`
- `token` is optional for public data and required only for authenticated operations
- the same applies to subscriptions: public subscription data does not require a token
- media helpers are available through `selectMediaFile(...)` and `fetchMedia(...)`
- preview image helpers are available through `getPreviewImageUrl(...)` and `fetchPreviewImage(...)`
- subscriptions use SSE in this SDK
- direct GraphQL usage is supported through exported typed documents and `client.request(...)` / `client.subscribe(...)`

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
