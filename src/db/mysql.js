// src/db/mysql.js
// MySQL adapter exposing the same interface the app already uses against D1.
//
// The application and its seeds were written against D1's
// `prepare(sql).bind(...).first()/all()/run()` shape. Rather than rewrite every
// call site, this adapts MySQL to that shape — including the two SQLite-isms
// the codebase actually uses: `INSERT OR IGNORE` and `INSERT OR REPLACE`.
//
// The MySQL database itself is created and migrated by scripts/mysql-schema.mjs
// (derived from the canonical D1 schema in src/db/schema.sql).

import { createPool } from 'mysql2/promise';

/** Rewrite the SQLite-specific SQL the app and seeds use into MySQL. */
export function toMysqlSql(sql) {
  return String(sql)
    .replace(/\bINSERT\s+OR\s+IGNORE\s+INTO\b/gi, 'INSERT IGNORE INTO')
    .replace(/\bINSERT\s+OR\s+REPLACE\s+INTO\b/gi, 'REPLACE INTO');
}

/**
 * mysql2 rejects `undefined` bindings and does not understand booleans, while
 * the D1-era call sites pass both freely.
 */
function normalizeParams(params) {
  return params.map((value) => {
    if (value === undefined) return null;
    if (typeof value === 'boolean') return value ? 1 : 0;
    return value;
  });
}

function isResultSetHeader(rows) {
  return rows && !Array.isArray(rows) && typeof rows.affectedRows === 'number';
}

/**
 * Create a D1-shaped database handle backed by a MySQL connection pool.
 */
export function createMysqlDb({
  host,
  port = 3306,
  user,
  password,
  database,
  connectionLimit = 10,
  ssl = true
} = {}) {
  if (!host || !user || !database) {
    throw new Error('MySQL configuration requires host, user and database.');
  }

  const pool = createPool({
    host,
    port: Number(port),
    user,
    password,
    database,
    waitForConnections: true,
    connectionLimit,
    queueLimit: 0,
    charset: 'utf8mb4_general_ci',
    // MySQL hands DECIMAL back as a string to preserve precision, but the app
    // treats money as a number everywhere (`price.toFixed(...)` in the views).
    // Without this every DECIMAL column is a string and views throw.
    decimalNumbers: true,
    // the Node host terminates TLS for remote connections; loopback is plain.
    ssl: ssl ? { rejectUnauthorized: false } : undefined
  });

  // SQLite (and D1) treat a backslash as an ordinary character, but MySQL uses
  // it as an escape — so any stored JSON, which the app round-trips through
  // string columns, silently loses its escapes and stops parsing. Disabling
  // backslash escapes per connection makes the two engines agree, on reads and
  // writes alike. It has to be per connection: sql_mode is a session variable.
  const core = pool.pool || pool;
  if (typeof core.on === 'function') {
    core.on('connection', (connection) => {
      connection.query("SET SESSION sql_mode = CONCAT(@@sql_mode, ',NO_BACKSLASH_ESCAPES')");
    });
  }

  class PreparedStatement {
    constructor(sql, params = []) {
      this.sql = sql;
      this.params = params;
    }

    bind(...params) {
      return new PreparedStatement(this.sql, params);
    }

    async all() {
      const [rows] = await pool.query(toMysqlSql(this.sql), normalizeParams(this.params));
      if (isResultSetHeader(rows)) {
        return { results: [], success: true, meta: { changes: rows.affectedRows, last_row_id: rows.insertId } };
      }
      return { results: rows, success: true, meta: { changes: 0, last_row_id: 0 } };
    }

    async first(col) {
      const [rows] = await pool.query(toMysqlSql(this.sql), normalizeParams(this.params));
      const row = Array.isArray(rows) ? rows[0] : null;
      if (!row) return null;
      return col ? row[col] : row;
    }

    async run() {
      const [rows] = await pool.query(toMysqlSql(this.sql), normalizeParams(this.params));
      return {
        success: true,
        meta: {
          changes: isResultSetHeader(rows) ? rows.affectedRows : 0,
          last_row_id: isResultSetHeader(rows) ? rows.insertId : 0
        }
      };
    }
  }

  const db = {
    // Exposed so libraries that want their own dialect (better-auth, via Kysely)
    // can build one over the same pool instead of guessing from the D1 shape.
    pool,
    // Kysely's MySQL dialect needs a callback-style mysql2 pool, which cannot be
    // derived from the promise wrapper — so the connection options travel too,
    // and src/db/kysely.js builds its own pool from them.
    connectionOptions: {
      host,
      port: Number(port),
      user,
      password,
      database,
      charset: 'utf8mb4_general_ci',
      decimalNumbers: true,
      ssl: ssl ? { rejectUnauthorized: false } : undefined
    },
    _pool: pool,
    prepare(sql) {
      return new PreparedStatement(sql);
    },
    async batch(statements) {
      const results = [];
      const connection = await pool.getConnection();
      try {
        await connection.beginTransaction();
        for (const statement of statements) {
          const [rows] = await connection.query(toMysqlSql(statement.sql), normalizeParams(statement.params));
          results.push({
            results: Array.isArray(rows) ? rows : [],
            success: true,
            meta: {
              changes: isResultSetHeader(rows) ? rows.affectedRows : 0,
              last_row_id: isResultSetHeader(rows) ? rows.insertId : 0
            }
          });
        }
        await connection.commit();
        return results;
      } catch (err) {
        await connection.rollback();
        throw err;
      } finally {
        connection.release();
      }
    },
    async exec(sql) {
      // Multi-statement scripts (schema, seeds) need one round trip each.
      const statements = String(sql)
        .split(/;\s*(?:\r?\n|$)/)
        .map((s) => s.trim())
        .filter((s) => s && !s.startsWith('--'));
      for (const statement of statements) {
        await pool.query(toMysqlSql(statement));
      }
      return { count: statements.length, duration: 0 };
    },
    async end() {
      await pool.end();
    }
  };

  return db;
}

/** True when the process has enough configuration to reach MySQL. */
export function hasMysqlConfig(env = process.env) {
  return Boolean(env.DB_HOST && env.DB_USER && env.DB_NAME);
}
