// src/auth/sessions.js
// Direct session minting on the Better Auth `session` table.
//
// Normal sign-in goes through better-auth (email + password, see ./index.js),
// which creates its own session rows. This helper exists for trusted server-side
// callers — tests and operator tooling — that need a session for a known user
// without a password round trip.

import { randomBytes } from 'node:crypto';

export const SESSION_TTL_MS = 30 * 24 * 60 * 60 * 1000;

/**
 * Mints a KindWell session row. Timestamps are ISO strings because that is what
 * validateSession compares against, despite the INTEGER column declaration.
 */
export async function createSessionForUser(db, userId, { now = new Date().toISOString() } = {}) {
  const token = `sess_${randomBytes(32).toString('hex')}`;
  const expiresAt = new Date(Date.parse(now) + SESSION_TTL_MS).toISOString();
  await db.prepare(`
    INSERT INTO session (id, expiresAt, token, createdAt, updatedAt, userId)
    VALUES (?, ?, ?, ?, ?, ?)
  `).bind(`ses_${randomBytes(16).toString('hex')}`, expiresAt, token, now, now, userId).run();
  return { token, expiresAt };
}
