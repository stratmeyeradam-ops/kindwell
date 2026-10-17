// src/db/runtime.js
// The Node runtime's environment object.
//
// On Cloudflare this object arrived as the Worker `env` binding. On the Node host
// there is no such binding — configuration comes from environment variables —
// so this assembles an equivalent object once per process and hands it to the
// Hono context as `c.env`, keeping every existing `c.env.X` call site working.
//
// `DB` is the one binding that is not a plain string: it becomes a MySQL-backed
// adapter with the D1 interface the app was written against.

import { createMysqlDb, hasMysqlConfig } from './mysql.js';

let cached = null;

export function createRuntimeEnv(processEnv = process.env) {
  if (cached) return cached;

  const env = { ...processEnv };

  if (hasMysqlConfig(processEnv)) {
    env.DB = createMysqlDb({
      host: processEnv.DB_HOST,
      port: processEnv.DB_PORT || 3306,
      user: processEnv.DB_USER,
      password: processEnv.DB_PASSWORD,
      database: processEnv.DB_NAME,
      // the Node host serves MySQL over the loopback for co-located apps, where
      // there is no TLS to negotiate.
      ssl: String(processEnv.DB_SSL ?? 'true').toLowerCase() !== 'false'
    });
  }

  cached = env;
  return env;
}

/** Test seam: drop the memoised environment. */
export function resetRuntimeEnv() {
  cached = null;
}
