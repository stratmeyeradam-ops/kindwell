import { fileURLToPath } from 'node:url';
import { join } from 'node:path';
import { createLocalD1, initSchema } from './index.js';
import { seedDatabase } from './seed.js';

export function defaultDbPath(env = process.env) {
  return env.DB_PATH || fileURLToPath(new URL('../../data/app.db', import.meta.url));
}

/**
 * Open the database, create any missing tables, and refresh seeded content.
 *
 * The seed uses INSERT OR REPLACE, which SQLite performs as delete + insert.
 * With foreign keys enforced, that delete would cascade: re-seeding a course
 * would wipe its enrollments and lesson progress, and re-seeding a circle space
 * would wipe every thread in it. Foreign keys are therefore switched off for
 * the seed (the rows come back with the same ids, so every reference stays
 * valid) and back on afterwards.
 *
 * Multiple app processes may start at once; BEGIN IMMEDIATE makes them
 * take turns instead of seeding over each other.
 */
export async function openPersistentDb(path = defaultDbPath()) {
  const db = createLocalD1(path);
  const raw = db._raw;
  raw.exec('PRAGMA busy_timeout = 10000;');
  await initSchema(db);

  raw.exec('PRAGMA foreign_keys = OFF;');
  raw.exec('BEGIN IMMEDIATE;');
  try {
    await seedDatabase(db);
    raw.exec('COMMIT;');
  } catch (error) {
    raw.exec('ROLLBACK;');
    throw error;
  } finally {
    raw.exec('PRAGMA foreign_keys = ON;');
  }
  return db;
}
