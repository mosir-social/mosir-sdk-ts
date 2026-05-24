Working on packaging graphql for public SDK.
public.graphql is a public graphql schema for mosir public API.
We use pnpm internally for dependency management, bun for runtime.
should build as javascript with d.ts.
I will publish onto npm later, you only need to prepare for it.
Write README.md.
default endpoint is beta.mosir.app/api/v1. allow change endpoint.
SSE is prefer over websocket, but developer can use both of them.
I like graphql-request, but I am not sure if that support graphql-SSE. might need to use urql.
I want to provide wrapped method that be able to direct called without mess around Graphql, but if developer what to handle graphql directly, they can.
use codegen so we don't need to write wrapped method for each query/mutation/subscription manually.
auth is by add API token at Bearer header. this should be pack into initialize of the wrapper.
