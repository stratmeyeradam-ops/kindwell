// tests/fixtures.js
// Test-only account factory. Inserts a user row directly into the Better Auth
// `user` table (the same shape better-auth's email sign-up writes) and mints a
// session for it, so service-level tests do not depend on the HTTP sign-in flow.

import { randomBytes } from 'node:crypto';
import { createSessionForUser } from '../src/auth/sessions.js';
import { getUserById } from '../src/auth/index.js';

/**
 * Creates a signed-in member. `password` is accepted and ignored so call sites
 * read naturally; password sign-in itself is exercised in tests/auth.test.js.
 */
export async function registerUser(db, { email, name = 'Member', locale = 'en', role = 'member', emailVerified = true } = {}) {
  const userId = `usr_${randomBytes(16).toString('hex')}`;
  const now = new Date().toISOString();
  await db.prepare(`
    INSERT INTO user (id, name, email, emailVerified, createdAt, updatedAt, role, tier, locale)
    VALUES (?, ?, ?, ?, ?, ?, ?, 'free', ?)
  `).bind(
    userId,
    name,
    String(email).trim().toLowerCase(),
    emailVerified ? 1 : 0,
    now,
    now,
    role,
    locale
  ).run();
  const session = await createSessionForUser(db, userId);
  return { user: await getUserById(db, userId), session };
}
