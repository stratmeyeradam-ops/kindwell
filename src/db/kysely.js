// src/db/kysely.js
// A MySQL dialect config for better-auth.
//
// better-auth takes a database handle and infers a dialect from its shape. Our
// adapter deliberately mimics D1 (`prepare`/`bind`/`all`/`first`/`run`) so the
// rest of the app keeps working unchanged — but that same shape makes
// better-auth choose its D1 SQLite dialect, which then introspects
// `sqlite_master` and fails on MySQL. Declaring the dialect explicitly removes
// the guesswork.
//
// The pool built here is a **callback-style** mysql2 pool, not the promise
// wrapper the app uses: Kysely's MysqlDialect drives mysql2 through its callback
// API, and handing it a promise pool leaves it waiting on a callback that never
// fires — which presents as a request that hangs forever rather than an error.

import mysql from 'mysql2';
import { MysqlDialect } from 'kysely';

let cached = null;
let cachedKey = null;

/**
 * Build (or reuse) a better-auth database config from MySQL connection options.
 *
 * Cached per connection target so repeated calls do not open another pool.
 */
export function createKyselyMysql(connectionOptions) {
  if (!connectionOptions?.host) {
    throw new Error('createKyselyMysql requires MySQL connection options.');
  }
  const key = `${connectionOptions.host}/${connectionOptions.database}`;
  if (cached && cachedKey === key) return cached;

  const pool = mysql.createPool({
    ...connectionOptions,
    waitForConnections: true,
    connectionLimit: 5,
    queueLimit: 0
  });

  // Match SQLite's backslash handling, or stored JSON loses its escapes. See
  // src/db/mysql.js for the full explanation.
  pool.on('connection', (connection) => {
    connection.query("SET SESSION sql_mode = CONCAT(@@sql_mode, ',NO_BACKSLASH_ESCAPES')");
  });

  cached = { dialect: new MysqlDialect({ pool }), type: 'mysql' };
  cachedKey = key;
  return cached;
}

/** True when the handle carries the options needed to build a MySQL dialect. */
export function hasMysqlOptions(db) {
  return Boolean(db?.connectionOptions?.host && db?.connectionOptions?.database);
}
