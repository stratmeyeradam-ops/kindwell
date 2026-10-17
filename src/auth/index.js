// src/auth/index.js
// Session and profile helpers on the Better Auth D1 schema.
// Sign-in is email + password via better-auth; direct session minting lives in ./sessions.js.

import { betterAuth } from 'better-auth';
import { createKyselyMysql, hasMysqlOptions } from '../db/kysely.js';
import { bearer } from 'better-auth/plugins';
import { getAppOrigin, normalizeLocale } from '../config.js';

const DEVELOPMENT_SECRET_WARNING = 'WARNING: KindWell is running with a development auth secret. Set BETTER_AUTH_SECRET (or SECRET, APP_SECRET, SESSION_SECRET) environment variable before going live.';

// Cache auth instances per db binding to prevent redundant instantiations
const authInstances = new WeakMap();

export function createAuth(db, env = {}) {
  if (db && authInstances.has(db)) {
    return authInstances.get(db);
  }

  const origin = getAppOrigin(env);
  let secret = env.BETTER_AUTH_SECRET
    || (typeof process !== 'undefined' && process.env?.BETTER_AUTH_SECRET)
    || (typeof process !== 'undefined' && process.env?.SECRET)
    || (typeof process !== 'undefined' && process.env?.AUTH_SECRET)
    || (typeof process !== 'undefined' && process.env?.SESSION_SECRET)
    || (typeof process !== 'undefined' && process.env?.APP_SECRET);

  if (!secret) {
    console.warn(DEVELOPMENT_SECRET_WARNING);
    secret = 'kindwell-dev-secret-do-not-use-in-production';
  }

  const auth = betterAuth({
    // better-auth infers its dialect from the database handle. Our adapter looks
    // like D1 (by design, so the rest of the app is unchanged), which would make
    // it introspect sqlite_master — so on MySQL it is handed an explicit dialect.
    database: hasMysqlOptions(db) ? createKyselyMysql(db.connectionOptions) : db,
    baseURL: origin,
    basePath: '/api/auth',
    secret,
    plugins: [bearer()],
    // Email + password sign-in. This is the only login now that the PayPal
    // OAuth flow is gone, so it must stay enabled: with it off nobody can sign
    // in and no membership can be started.
    emailAndPassword: {
      enabled: true,
      autoSignIn: true,
      minPasswordLength: 8
    },
    user: {
      additionalFields: {
        role: { type: 'string', defaultValue: 'member', input: false },
        tier: { type: 'string', defaultValue: 'free', input: false },
        locale: { type: 'string', defaultValue: 'en' }
      }
    }
  });

  if (db) {
    authInstances.set(db, auth);
  }

  return auth;
}


/**
 * Validates session token against Better Auth session table.
 */
export async function validateSession(db, token) {
  if (!token) return null;

  const now = new Date().toISOString();
  const row = await db.prepare(`
    SELECT s.id as session_id, s.token, s.expiresAt,
           u.id, u.email, u.name, u.role, u.tier, u.locale, u.emailVerified, u.createdAt
    FROM session s
    JOIN user u ON s.userId = u.id
    WHERE s.token = ? AND s.expiresAt > ?
  `).bind(token, now).first();

  if (!row) return null;

  return {
    session: {
      id: row.session_id,
      token: row.token,
      expiresAt: row.expiresAt
    },
    user: {
      id: row.id,
      email: row.email,
      name: row.name,
      role: row.role || 'member',
      tier: row.tier || 'free',
      locale: row.locale || 'en',
      emailVerified: Boolean(row.emailVerified),
      createdAt: row.createdAt
    }
  };
}

/**
 * Revokes a session.
 */
export async function destroySession(db, token) {
  if (!token) return;
  await db.prepare('DELETE FROM session WHERE token = ?').bind(token).run();
}

/**
 * Updates a user's preferred locale.
 */
export async function updateUserLocale(db, userId, locale) {
  if (!['en', 'es', 'pt-BR'].includes(locale)) return;
  const now = new Date().toISOString();
  await db.prepare('UPDATE user SET locale = ?, updatedAt = ? WHERE id = ?')
    .bind(locale, now, userId).run();
}

/**
 * Helper to fetch a sanitized user by ID from Better Auth table.
 */
export async function getUserById(db, userId) {
  const row = await db.prepare('SELECT id, name, email, emailVerified, role, tier, locale, createdAt, updatedAt FROM user WHERE id = ?')
    .bind(userId).first();

  if (!row) return null;

  return {
    id: row.id,
    name: row.name,
    email: row.email,
    role: row.role || 'member',
    tier: row.tier || 'free',
    locale: row.locale || 'en',
    emailVerified: Boolean(row.emailVerified),
    createdAt: row.createdAt
  };
}
