// src/config.js
// Runtime configuration shared by Worker and local application code.

export const DEFAULT_APP_ORIGIN = 'http://localhost:8787';
export const SUPPORTED_LOCALES = ['en', 'es', 'pt-BR'];

export function normalizeLocale(locale) {
  return SUPPORTED_LOCALES.includes(locale) ? locale : 'en';
}

export function getAppOrigin(env = {}) {
  const configuredOrigin = env.APP_ORIGIN
    || env.BETTER_AUTH_URL
    || (typeof process !== 'undefined' && process.env?.APP_ORIGIN)
    || (typeof process !== 'undefined' && process.env?.BETTER_AUTH_URL)
    || DEFAULT_APP_ORIGIN;

  try {
    return new URL(configuredOrigin).origin;
  } catch {
    return DEFAULT_APP_ORIGIN;
  }
}
