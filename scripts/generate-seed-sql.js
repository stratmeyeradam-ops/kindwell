// scripts/generate-seed-sql.js
// Generates clean SQL insert statements from verified seed data

import { writeFileSync } from 'node:fs';
import { createLocalD1, initSchema } from '../src/db/index.js';
import { seedDatabase } from '../src/db/seed.js';

const db = createLocalD1(':memory:');
await initSchema(db);
await seedDatabase(db);

const tables = [
  'practices',
  'practice_translations',
  'remedies',
  'remedy_translations',
  'reiki_articles',
  'crystals',
  'affirmations',
  'courses',
  'course_translations',
  'modules',
  'module_translations',
  'lessons',
  'lesson_translations',
  'quizzes',
  'quiz_translations',
  'quiz_questions',
  'circle_spaces',
  'circle_space_translations',
  'products',
  'product_translations',
  'wellness_letters'
];

let sql = '-- KindWell Production Seed Data\n-- Generated from verified application data\n\n';

for (const tableName of tables) {
  const rowsRes = await db.prepare(`SELECT * FROM ${tableName}`).all();
  const rows = rowsRes.results;
  if (rows.length === 0) continue;

  sql += `-- Table: ${tableName} (${rows.length} rows)\n`;

  for (const row of rows) {
    const keys = Object.keys(row);
    const escapedValues = keys.map(k => {
      const val = row[k];
      if (val === null || val === undefined) return 'NULL';
      if (typeof val === 'number') return val;
      if (typeof val === 'boolean') return val ? 1 : 0;
      return `'${val.toString().replace(/'/g, "''")}'`;
    });

    sql += `INSERT OR REPLACE INTO ${tableName} (${keys.join(', ')}) VALUES (${escapedValues.join(', ')});\n`;
  }

  sql += '\n';
}

writeFileSync('src/db/seed.sql', sql, 'utf8');
console.log('src/db/seed.sql generated successfully! Byte size:', sql.length);
