// src/services/fulfilment.js
// Sends paid merch orders to Printify, safely and repeatably.
//
// Ported from the methspace store:
//   - The order is always saved first (a paying customer never loses their
//     order because Printify was down). Printify happens afterwards.
//   - The Printify order id is saved BEFORE the send-to-production call, so a
//     retry finishes the same Printify order instead of creating a second one.
//   - Failed hand-offs are retried automatically (retryFailedPrintifyOrders,
//     every 10 minutes from server.js, up to MAX_ATTEMPTS), then wait on the
//     /admin/orders page for a manual retry.

import {
  createPrintifyClient,
  getPrintifyMode,
  shouldAutoSendToProduction
} from './printify.js';

export const MAX_ATTEMPTS = 6;

function readEnv(env, key) {
  return env?.[key] ?? (typeof process !== 'undefined' ? process.env?.[key] : undefined);
}

function printifyConnected(env) {
  return getPrintifyMode(env) === 'live'
    && String(readEnv(env, 'PRINTIFY_ALLOW_ORDER_CREATION') ?? 'true').toLowerCase() === 'true'
    && Boolean(readEnv(env, 'PRINTIFY_SHOP_ID'))
    && Boolean(readEnv(env, 'PRINTIFY_API_TOKEN'));
}

/** Carriers reject an empty last name, so a one-word name is sent as both. */
export function splitName(name) {
  const parts = String(name || '').trim().split(/\s+/).filter(Boolean);
  if (parts.length < 2) return { first: parts[0] || 'Customer', last: parts[0] || 'Customer' };
  return { first: parts.slice(0, -1).join(' '), last: parts.at(-1) };
}

async function setStatus(db, orderId, fields) {
  const keys = Object.keys(fields);
  await db.prepare(`UPDATE orders SET ${keys.map((k) => `${k} = ?`).join(', ')}, updated_at = ? WHERE id = ?`)
    .bind(...keys.map((k) => fields[k]), new Date().toISOString(), orderId).run();
}

/**
 * Hand one order's merch to Printify. Never throws: the outcome is written to
 * the order (printify_status: created | sent | failed | not_sent) and returned.
 */
export async function sendOrderToPrintify(db, env, orderId, { client = null } = {}) {
  const order = await db.prepare('SELECT * FROM orders WHERE id = ?').bind(orderId).first();
  if (!order) return { status: 'missing' };
  if (order.printify_status === 'sent') return { status: 'sent', printifyOrderId: order.printify_order_id };

  const items = (await db.prepare(`
    SELECT oi.quantity, oi.printify_variant_id, COALESCE(oi.printify_product_id, p.printify_product_id) AS printify_product_id, oi.product_id
    FROM order_items oi JOIN products p ON p.id = oi.product_id
    WHERE oi.order_id = ? AND p.type = 'printify_merch'
  `).bind(orderId).all())?.results || [];
  if (!items.length) return { status: 'no_merch' };

  if (!client && !printifyConnected(env)) {
    await setStatus(db, orderId, { printify_status: 'not_sent', printify_error: 'Printify is not connected (needs PRINTIFY_MODE=live, PRINTIFY_ALLOW_ORDER_CREATION=true, token and shop id).' });
    return { status: 'not_sent' };
  }

  await setStatus(db, orderId, { printify_attempts: (order.printify_attempts || 0) + 1 });
  const shopId = readEnv(env, 'PRINTIFY_SHOP_ID');
  try {
    const printify = client || createPrintifyClient({
      PRINTIFY_MODE: 'live',
      PRINTIFY_API_TOKEN: readEnv(env, 'PRINTIFY_API_TOKEN'),
      PRINTIFY_ALLOW_ORDER_CREATION: readEnv(env, 'PRINTIFY_ALLOW_ORDER_CREATION'),
      PRINTIFY_PRODUCTION_ENABLED: readEnv(env, 'PRINTIFY_PRODUCTION_ENABLED')
    });

    let printifyOrderId = order.printify_order_id;
    if (!printifyOrderId) {
      const missing = items.find((i) => !i.printify_product_id || !i.printify_variant_id);
      if (missing) throw new Error(`${missing.product_id} has no Printify product/variant linked.`);
      const ship = JSON.parse(order.shipping_json || '{}');
      if (!ship.street || !ship.city || !ship.postalCode) throw new Error('The order has no complete shipping address.');
      const { first, last } = splitName(order.customer_name);
      const created = await printify.createOrder(shopId, {
        external_id: order.id,
        line_items: items.map((i) => ({
          product_id: i.printify_product_id,
          variant_id: Number(i.printify_variant_id),
          quantity: i.quantity,
          external_id: `${order.id}:${i.product_id}`
        })),
        shipping_method: 1,
        send_shipping_notification: false,
        address_to: {
          first_name: first,
          last_name: last,
          email: order.customer_email,
          phone: ship.phone || '',
          country: ship.country || 'US',
          region: ship.state || '',
          address1: ship.street,
          address2: ship.address2 || '',
          city: ship.city,
          zip: ship.postalCode
        }
      });
      printifyOrderId = created?.id;
      if (!printifyOrderId) throw new Error('Printify did not return an order id.');
      // Saved before production, so a retry never creates a second Printify order.
      await setStatus(db, orderId, { printify_order_id: printifyOrderId, printify_status: 'created', printify_error: null });
    }

    if (shouldAutoSendToProduction({
      PRINTIFY_PRODUCTION_ENABLED: readEnv(env, 'PRINTIFY_PRODUCTION_ENABLED'),
      PRINTIFY_ORDER_APPROVAL: readEnv(env, 'PRINTIFY_ORDER_APPROVAL'),
      PRINTIFY_AUTO_PRODUCTION_MAX_TOTAL: readEnv(env, 'PRINTIFY_AUTO_PRODUCTION_MAX_TOTAL')
    }, order.total)) {
      await printify.sendToProduction(shopId, printifyOrderId);
      await setStatus(db, orderId, { printify_status: 'sent', printify_error: null, fulfillment_status: 'processing' });
      return { status: 'sent', printifyOrderId };
    }
    // Created and waiting for approval in Printify (manual / over-threshold).
    return { status: 'created', printifyOrderId };
  } catch (error) {
    console.error('[printify] order', orderId, error.message);
    await setStatus(db, orderId, { printify_status: 'failed', printify_error: String(error.message).slice(0, 500) });
    return { status: 'failed', error: error.message };
  }
}

/** Retry paid orders whose hand-off failed, up to MAX_ATTEMPTS each. */
export async function retryFailedPrintifyOrders(db, env) {
  if (!printifyConnected(env)) return { retried: 0 };
  const rows = (await db.prepare(`
    SELECT id FROM orders
    WHERE payment_status = 'completed' AND printify_status = 'failed' AND COALESCE(printify_attempts, 0) < ?
  `).bind(MAX_ATTEMPTS).all())?.results || [];
  for (const row of rows) await sendOrderToPrintify(db, env, row.id);
  return { retried: rows.length };
}
