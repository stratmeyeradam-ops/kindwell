// Portable Node.js server.
import { fileURLToPath } from 'node:url';
import { randomBytes } from 'node:crypto';
import { mkdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs';
import { serve } from '@hono/node-server';
import { createApp } from './app.js';
import { createRuntimeEnv } from './db/runtime.js';
import { openPersistentDb, defaultDbPath } from './db/persistent.js';
import { retryFailedPrintifyOrders } from './services/fulfilment.js';

// Static files are resolved from the working directory; make it the app root
// whatever directory starts the process.
process.chdir(fileURLToPath(new URL('..', import.meta.url)));

// Usually a TCP port; keep it as given if the platform hands over anything else.
const rawPort = process.env.PORT || '3000';
const port = /^\d+$/.test(rawPort) ? Number(rawPort) : rawPort;

async function main() {
  // Build the environment once, up front: a bad database should fail loudly at
  // boot rather than on a visitor's first request.
  process.env.APP_ORIGIN ||= `http://localhost:${port}`;
  if (!process.env.BETTER_AUTH_SECRET) {
    mkdirSync('.data', { recursive: true });
    const secretPath = '.data/auth-secret';
    if (!existsSync(secretPath)) writeFileSync(secretPath, randomBytes(48).toString('hex'), { mode: 0o600, flag: 'wx' });
    process.env.BETTER_AUTH_SECRET = readFileSync(secretPath, 'utf8').trim();
  }
  const env = createRuntimeEnv();
  if (!env.DB) {
    // No MySQL configured: the SQLite file on the account's disk.
    env.DB = await openPersistentDb(defaultDbPath(env));
    console.log(`[kindwell] sqlite: ${defaultDbPath(env)}`);
  }
  const app = createApp();
  // Behind Caddy on the VPS, HOST=127.0.0.1 keeps the app off the public interface.
  const server = serve({ fetch: app.fetch, port, ...(process.env.HOST ? { hostname: process.env.HOST } : {}) });
  console.log(`[kindwell] listening on ${port}, origin ${env.APP_ORIGIN || '(unset)'}`);

  // Paid orders whose merch did not reach Printify (outage, rate limit) are
  // retried every 10 minutes, up to 6 tries; then they wait in /admin/orders.
  setInterval(() => {
    retryFailedPrintifyOrders(env.DB, env).catch((e) => console.error('[printify] retry:', e.message));
  }, 10 * 60_000).unref();

  for (const signal of ['SIGINT', 'SIGTERM']) {
    process.on(signal, () => {
      console.log(`[kindwell] received ${signal}, shutting down`);
      server.close(() => process.exit(0));
    });
  }
}

main().catch((error) => {
  console.error('[kindwell] failed to start:', error);
  process.exit(1);
});
