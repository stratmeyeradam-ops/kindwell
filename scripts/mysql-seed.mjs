// scripts/mysql-seed.mjs
// Load KindWell's seed data into MySQL.
//
// Two sources, applied in order:
//   1. src/db/seed.sql                                  — site content (practices,
//      remedies, courses, circle, quizzes, products, wellness letters…)
//   2. migrations/0004_kindwell_printify_catalog.sql    — the live Printify
//      catalog: products, translations and every variant with its retail price.
//
// Both were written for D1, so the SQLite-only upsert syntax is translated:
// `INSERT OR REPLACE` becomes `REPLACE`, and D1's `ON CONFLICT (…) DO UPDATE
// SET …` becomes a plain REPLACE (this runs against a fresh database, so the
// distinction between update and replace is immaterial).
//
// Usage: node scripts/mysql-seed.mjs

import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createPool } from 'mysql2/promise';

const root = dirname(dirname(fileURLToPath(import.meta.url)));

/** Translate D1 upsert syntax into MySQL for a whole script. */
export function toMysqlSeed(sql) {
  return String(sql)
    .replace(/\bINSERT\s+OR\s+REPLACE\s+INTO\b/gi, 'REPLACE INTO')
    .replace(/\bINSERT\s+OR\s+IGNORE\s+INTO\b/gi, 'INSERT IGNORE INTO')
    .replace(/\bINSERT\s+INTO\b/gi, 'REPLACE INTO')
    // Drop the D1 upsert tail: REPLACE already covers the conflict case.
    .replace(/\s+ON\s+CONFLICT\s*\([^)]*\)\s+DO\s+UPDATE\s+SET[\s\S]*?(?=;\s*(?:\r?\n|$))/gi, '');
}

async function main() {
  const pool = createPool({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT || 3306),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    multipleStatements: true,
    ssl: { rejectUnauthorized: false }
  });

  // Match SQLite's backslash handling, or every JSON blob in the seed loses its
  // escapes and stops parsing. See src/db/mysql.js for the full explanation.
  const core = pool.pool || pool;
  if (typeof core.on === 'function') {
    core.on('connection', (connection) => {
      connection.query("SET SESSION sql_mode = CONCAT(@@sql_mode, ',NO_BACKSLASH_ESCAPES')");
    });
  }

  const files = [
    join(root, 'src/db/seed.sql'),
    join(root, 'src/db/migrations/0004_kindwell_printify_catalog.sql')
  ];

  for (const file of files) {
    const raw = readFileSync(file, 'utf8');
    const sql = toMysqlSeed(raw);
    await pool.query(sql);
    const count = (sql.match(/REPLACE INTO/gi) || []).length;
    console.log(`[mysql-seed] applied ${file.split('/').pop()} (${count} rows)`);
  }

  const [rows] = await pool.query(
    'SELECT (SELECT COUNT(*) FROM products) AS products, (SELECT COUNT(*) FROM printify_product_variants) AS variants, (SELECT COUNT(*) FROM practices) AS practices'
  );
  console.log('[mysql-seed] totals:', JSON.stringify(rows[0]));
  await pool.end();
}

if (process.argv[1] && process.argv[1].endsWith('mysql-seed.mjs')) {
  main().catch((err) => {
    console.error('[mysql-seed] error:', err.message);
    process.exit(1);
  });
}
