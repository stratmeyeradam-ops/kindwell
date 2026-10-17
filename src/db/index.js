// src/db/index.js
// Universal D1 interface adapter for Cloudflare Worker runtime and local Node.js (node:sqlite)

import { readFileSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

// Safe module resolution supporting both Node.js ESM and Cloudflare Worker bundle validation
const require = createRequire((typeof import.meta !== 'undefined' && import.meta.url) ? import.meta.url : ('file://' + process.cwd() + '/'));
const __filename = (typeof import.meta !== 'undefined' && import.meta.url) ? fileURLToPath(import.meta.url) : '';
const __dirname = __filename ? dirname(__filename) : join(process.cwd(), 'src/db');

/**
 * Creates a D1-compatible database wrapper around Node's built-in sqlite.
 * (Used in local development / testing when env.DB is absent).
 */
export function createLocalD1(dbPath = ':memory:') {
  const { DatabaseSync } = require('node:sqlite');

  if (dbPath !== ':memory:') {
    const dir = dirname(dbPath);
    if (!existsSync(dir)) {
      mkdirSync(dir, { recursive: true });
    }
  }

  const rawDb = new DatabaseSync(dbPath);

  // Enable foreign keys and WAL mode
  try {
    rawDb.exec('PRAGMA foreign_keys = ON;');
    if (dbPath !== ':memory:') {
      rawDb.exec('PRAGMA journal_mode = WAL;');
    }
  } catch (e) {
    // ignore in memory
  }

  class PreparedStatement {
    constructor(db, sql, params = []) {
      this.db = db;
      this.sql = sql;
      this.params = params;
    }

    bind(...params) {
      return new PreparedStatement(this.db, this.sql, params);
    }

    async all() {
      try {
        const stmt = this.db.prepare(this.sql);
        const results = stmt.all(...this.params);
        return {
          results,
          success: true,
          meta: {
            changes: 0,
            last_row_id: 0,
            duration: 0
          }
        };
      } catch (err) {
        throw new Error(`D1 query error in [${this.sql}]: ${err.message}`);
      }
    }

    async first(col) {
      try {
        const stmt = this.db.prepare(this.sql);
        const row = stmt.get(...this.params);
        if (!row) return null;
        if (col) return row[col];
        return row;
      } catch (err) {
        throw new Error(`D1 query error in [${this.sql}]: ${err.message}`);
      }
    }

    async run() {
      try {
        const stmt = this.db.prepare(this.sql);
        const info = stmt.run(...this.params);
        return {
          success: true,
          meta: {
            changes: info.changes,
            last_row_id: info.lastInsertRowid
          }
        };
      } catch (err) {
        throw new Error(`D1 run error in [${this.sql}]: ${err.message}`);
      }
    }
  }

  const d1 = {
    _raw: rawDb,
    prepare(sql) {
      return new PreparedStatement(rawDb, sql);
    },
    async batch(statements) {
      const results = [];
      rawDb.exec('BEGIN TRANSACTION;');
      try {
        for (const stmt of statements) {
          const res = await stmt.all();
          results.push(res);
        }
        rawDb.exec('COMMIT;');
        return results;
      } catch (err) {
        rawDb.exec('ROLLBACK;');
        throw err;
      }
    },
    async exec(sql) {
      rawDb.exec(sql);
      return { count: 1, duration: 0 };
    }
  };

  return d1;
}

/**
 * Initializes the database with the schema.
 */
export async function initSchema(d1) {
  const schemaPath = join(__dirname, 'schema.sql');
  const sql = readFileSync(schemaPath, 'utf8');
  await d1.exec(sql);
  await addMissingColumns(d1);
}

// CREATE TABLE IF NOT EXISTS never alters an existing table, so columns added
// after a database was first created are added here.
const ADDED_COLUMNS = {
  orders: { printify_attempts: 'INTEGER DEFAULT 0', printify_error: 'TEXT', shipping_json: 'TEXT' },
  order_items: { printify_product_id: 'TEXT', printify_variant_id: 'INTEGER' }
};
async function addMissingColumns(d1) {
  for (const [table, columns] of Object.entries(ADDED_COLUMNS)) {
    const info = await d1.prepare(`PRAGMA table_info(${table})`).all();
    const have = new Set((info?.results || []).map((c) => c.name));
    for (const [name, type] of Object.entries(columns)) {
      if (!have.has(name)) await d1.exec(`ALTER TABLE ${table} ADD COLUMN ${name} ${type};`);
    }
  }
}
