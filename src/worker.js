// src/worker.js
// Cloudflare Worker entry point for kindwell-app

import { createApp } from './app.js';
import { reconcilePayPal } from './services/reconciliation.js';

let appInstance = null;

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    if (url.hostname === 'www.kindwell.org') {
      const target = `https://kindwell.org${url.pathname}${url.search}`;
      return Response.redirect(target, 301);
    }
    if (!appInstance) {
      appInstance = createApp();
    }
    return appInstance.fetch(request, env, ctx);
  },

  // Independent second path to payment completion. A buyer who approves at
  // PayPal and closes the tab never hits the return URL, and no webhook can
  // capture on their behalf — so we ask PayPal what happened and finish it.
  async scheduled(event, env, ctx) {
    if (!env.DB) return;
    try {
      const summary = await reconcilePayPal(env.DB, env);
      console.log('PayPal reconciliation:', JSON.stringify(summary));
    } catch (error) {
      console.error('PayPal reconciliation failed:', error.message);
    }
  }
};
