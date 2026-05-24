import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import test from 'node:test';

import { createMosirClient } from '../dist/index.js';

async function createSseTestServer() {
  const requests = [];

  const server = createServer((req, res) => {
    if (req.method !== 'POST' || req.url !== '/graphql') {
      res.statusCode = 404;
      res.end();
      return;
    }

    requests.push({
      headers: req.headers,
    });

    req.on('error', () => {
      res.destroy();
    });

    req.resume();

    res.writeHead(200, {
      'content-type': 'text/event-stream',
      'cache-control': 'no-cache',
      connection: 'keep-alive',
    });

    res.write(`event: next\ndata: ${JSON.stringify({ data: { ping: 'pong' } })}\n\n`);
    res.write('event: complete\n\n');
    res.end();
  });

  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));

  const address = server.address();
  if (!address || typeof address === 'string') {
    throw new Error('Unable to determine test server address.');
  }

  return {
    endpoint: `http://127.0.0.1:${address.port}/graphql`,
    requests,
    async close() {
      await new Promise((resolve, reject) => {
        server.close((error) => (error ? reject(error) : resolve()));
      });
    },
  };
}

test('graphql-sse smoke: subscription yields payload', async () => {
  const server = await createSseTestServer();
  const client = createMosirClient({ endpoint: server.endpoint });

  try {
    const iterator = client.subscribe('subscription Ping { ping }')[Symbol.asyncIterator]();

    const first = await iterator.next();
    assert.equal(first.done, false);
    assert.deepEqual(first.value, { ping: 'pong' });

    const second = await iterator.next();
    assert.equal(second.done, true);
  } finally {
    client.dispose();
    await server.close();
  }
});

test('graphql-sse smoke: subscription forwards auth and custom headers', async () => {
  const server = await createSseTestServer();
  const client = createMosirClient({
    endpoint: server.endpoint,
    token: 'test-token',
    headers: {
      'x-default-header': 'default',
    },
  });

  try {
    const iterator = client.subscribe('subscription Ping { ping }', undefined, {
      headers: {
        'x-subscription-header': 'custom',
      },
    })[Symbol.asyncIterator]();

    await iterator.next();

    const [request] = server.requests;
    assert.ok(request);
    assert.equal(request.headers.authorization, 'Bearer test-token');
    assert.equal(request.headers['x-default-header'], 'default');
    assert.equal(request.headers['x-subscription-header'], 'custom');
  } finally {
    client.dispose();
    await server.close();
  }
});
