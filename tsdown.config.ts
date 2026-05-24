import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  sourcemap: true,
  clean: true,
  target: 'es2022',
  platform: 'neutral',
  hash: false,
  external: [
    'graphql',
    'graphql-request',
    'graphql-sse',
    '@graphql-typed-document-node/core',
  ],
  outDir: 'dist',
});
