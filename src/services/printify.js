// src/services/printify.js
// Printify API adapter, catalog mapping, and idempotent webhook handling.

import { createHash, createHmac, timingSafeEqual } from 'node:crypto';
import { sendPhysicalOrderReceivedEmail, sendPhysicalOrderShippedEmail } from './email.js';

export const PRINTIFY_API_BASE = 'https://api.printify.com/v1';
export const PRINTIFY_MODE = readProcessEnv('PRINTIFY_MODE') || 'mock';

function readProcessEnv(name) {
  return typeof process !== 'undefined' ? process.env?.[name] : undefined;
}

export function getPrintifyMode(env = {}) {
  return env.PRINTIFY_MODE || readProcessEnv('PRINTIFY_MODE') || (env.PRINTIFY_API_TOKEN || readProcessEnv('PRINTIFY_API_TOKEN') ? 'live' : 'mock');
}

function getToken(env = {}) {
  return env.PRINTIFY_API_TOKEN || readProcessEnv('PRINTIFY_API_TOKEN') || '';
}

function unwrapList(body) {
  if (Array.isArray(body)) return body;
  return Array.isArray(body?.data) ? body.data : [];
}

function pathForShop(shopId, suffix) {
  if (!shopId) throw new Error('PRINTIFY_SHOP_ID is required.');
  return `/shops/${encodeURIComponent(String(shopId))}${suffix}`;
}

export class PrintifyApiError extends Error {
  constructor(message, { status = 0, code = 'PRINTIFY_API_ERROR', details = null } = {}) {
    super(message);
    this.name = 'PrintifyApiError';
    this.status = status;
    this.code = code;
    this.details = details;
  }
}

export function createPrintifyClient(env = {}, { fetchImpl = globalThis.fetch, baseUrl = PRINTIFY_API_BASE } = {}) {
  const token = getToken(env);
  if (typeof fetchImpl !== 'function') throw new Error('A fetch implementation is required.');

  async function request(path, { method = 'GET', body, query } = {}) {
    if (!token) {
      throw new PrintifyApiError('Printify API token is not configured.', { code: 'PRINTIFY_TOKEN_MISSING' });
    }

    const normalizedBase = baseUrl.replace(/\/+$/, '');
    const normalizedPath = path.startsWith('/') ? path : `/${path}`;
    const url = new URL(`${normalizedBase}${normalizedPath}`);
    for (const [key, value] of Object.entries(query || {})) {
      if (value !== undefined && value !== null) url.searchParams.set(key, String(value));
    }

    const headers = {
      Authorization: `Bearer ${token}`,
      'User-Agent': 'KindWell/2.0'
    };
    if (body !== undefined) headers['Content-Type'] = 'application/json';

    const response = await fetchImpl(url, {
      method,
      headers,
      body: body === undefined ? undefined : JSON.stringify(body)
    });
    const raw = await response.text();
    let payload = null;
    if (raw) {
      try {
        payload = JSON.parse(raw);
      } catch {
        payload = { raw: raw.slice(0, 500) };
      }
    }

    if (!response.ok) {
      throw new PrintifyApiError(
        payload?.message || payload?.error || `Printify API request failed (${response.status}).`,
        { status: response.status, details: payload }
      );
    }
    return payload;
  }

  return Object.freeze({
    request,
    listShops: () => request('/shops.json'),
    listProducts: (shopId, options = {}) => request(pathForShop(shopId, '/products.json'), { query: { limit: 50, ...options } }),
    getProduct: (shopId, productId) => request(pathForShop(shopId, `/products/${encodeURIComponent(String(productId))}.json`)),
    listBlueprints: () => request('/catalog/blueprints.json'),
    getBlueprint: (blueprintId) => request(`/catalog/blueprints/${encodeURIComponent(String(blueprintId))}.json`),
    listPrintProviders: (blueprintId) => request(`/catalog/blueprints/${encodeURIComponent(String(blueprintId))}/print_providers.json`),
    listVariants: (blueprintId, providerId, options = {}) => request(
      `/catalog/blueprints/${encodeURIComponent(String(blueprintId))}/print_providers/${encodeURIComponent(String(providerId))}/variants.json`,
      { query: options }
    ),
    getShipping: (blueprintId, providerId) => request(
      `/catalog/blueprints/${encodeURIComponent(String(blueprintId))}/print_providers/${encodeURIComponent(String(providerId))}/shipping.json`
    ),
    listOrders: (shopId, options = {}) => request(pathForShop(shopId, '/orders.json'), { query: { limit: 10, ...options } }),
    getOrder: (shopId, orderId) => request(pathForShop(shopId, `/orders/${encodeURIComponent(String(orderId))}.json`)),
    createOrder: (shopId, order) => {
      assertPrintifyOrderCreationAllowed(env);
      return request(pathForShop(shopId, '/orders.json'), { method: 'POST', body: order });
    },
    sendToProduction: (shopId, orderId) => {
      assertPrintifyProductionAllowed(env);
      return request(pathForShop(shopId, `/orders/${encodeURIComponent(String(orderId))}/send_to_production.json`), { method: 'POST' });
    },
    cancelOrder: (shopId, orderId) => request(
      pathForShop(shopId, `/orders/${encodeURIComponent(String(orderId))}/cancel.json`),
      { method: 'POST' }
    ),
    listWebhooks: (shopId, options = {}) => request(pathForShop(shopId, '/webhooks.json'), { query: { limit: 100, ...options } }),
    createWebhook: (shopId, webhook) => request(pathForShop(shopId, '/webhooks.json'), { method: 'POST', body: webhook }),
    updateWebhook: (shopId, webhookId, webhook) => request(
      pathForShop(shopId, `/webhooks/${encodeURIComponent(String(webhookId))}.json`),
      { method: 'PUT', body: webhook }
    ),
    deleteWebhook: (shopId, webhookId) => request(
      pathForShop(shopId, `/webhooks/${encodeURIComponent(String(webhookId))}.json`),
      { method: 'DELETE' }
    )
  });
}

export const APPROVAL_MODES = ['manual', 'threshold', 'auto'];
export const DEFAULT_AUTO_PRODUCTION_MAX_TOTAL = 75;

// How captured orders reach the printer:
//   manual    — never auto-produce; every order waits for a human in Printify.
//   threshold — auto-produce at or below PRINTIFY_AUTO_PRODUCTION_MAX_TOTAL.
//   auto      — auto-produce everything.
// Anything unrecognised falls back to the safest mode.
export function getPrintifyApprovalMode(env = {}) {
  const raw = String(env.PRINTIFY_ORDER_APPROVAL || 'auto').toLowerCase();
  return APPROVAL_MODES.includes(raw) ? raw : 'auto';
}

export function getAutoProductionMaxTotal(env = {}) {
  const raw = env.PRINTIFY_AUTO_PRODUCTION_MAX_TOTAL;
  if (raw === undefined || raw === null || String(raw).trim() === '') {
    return DEFAULT_AUTO_PRODUCTION_MAX_TOTAL;
  }
  const parsed = Number(raw);
  if (!Number.isFinite(parsed) || parsed < 0) return DEFAULT_AUTO_PRODUCTION_MAX_TOTAL;
  return parsed;
}

// Creating a draft order in Printify is safe and reversible, so it only needs a
// live shop and an operator who has not explicitly switched it off. Sending that
// order to production spends money, so it carries the extra gate below.
export function assertPrintifyOrderCreationAllowed(env = {}) {
  if (getPrintifyMode(env) !== 'live') {
    throw new Error('Printify order creation is disabled outside live mode.');
  }
  if (String(env.PRINTIFY_ALLOW_ORDER_CREATION ?? 'true').toLowerCase() !== 'true') {
    throw new Error('Printify order creation is disabled by safety configuration.');
  }
}

export function assertPrintifyProductionAllowed(env = {}) {
  assertPrintifyOrderCreationAllowed(env);
  if (String(env.PRINTIFY_PRODUCTION_ENABLED ?? 'true').toLowerCase() !== 'true') {
    throw new Error('Printify production submission is disabled.');
  }
}

// Threshold fulfilment decision. A missing or unparseable total is always held
// for review rather than waved through.
export function shouldAutoSendToProduction(env = {}, orderTotal) {
  if (String(env.PRINTIFY_PRODUCTION_ENABLED ?? 'true').toLowerCase() !== 'true') return false;
  const mode = getPrintifyApprovalMode(env);
  if (mode === 'manual') return false;
  if (mode === 'auto') return true;
  // Number(null) and Number('') are both 0, which would sail under any threshold.
  // An order we cannot price is an order we do not print.
  if (orderTotal === null || orderTotal === undefined || String(orderTotal).trim() === '') return false;
  const total = Number(orderTotal);
  if (!Number.isFinite(total) || total < 0) return false;
  return total <= getAutoProductionMaxTotal(env);
}

export function findKindWellShop(shops) {
  const matches = unwrapList(shops).filter((shop) => /kindwell/i.test(`${shop.title || ''} ${shop.sales_channel || ''}`));
  if (matches.length > 1) throw new Error('More than one Printify shop matches KindWell.');
  return matches[0] || null;
}

function activeVariants(product) {
  return (product?.variants || []).filter((variant) => variant?.is_enabled !== false);
}

export async function syncPrintifyCatalog(db, {
  shopId,
  products,
  mappings = {},
  now = new Date().toISOString()
} = {}) {
  if (!shopId) throw new Error('A Printify shop ID is required for catalog sync.');
  const remoteProducts = unwrapList(products);
  const synced = [];
  const skipped = [];

  for (const remote of remoteProducts) {
    const localProductId = mappings[String(remote.id)];
    if (!localProductId || remote.visible === false) {
      skipped.push({ printifyProductId: String(remote.id), reason: !localProductId ? 'unmapped' : 'hidden' });
      continue;
    }

    const local = await db.prepare('SELECT id, type FROM products WHERE id = ? AND is_active = 1')
      .bind(localProductId).first();
    if (!local || local.type !== 'printify_merch') {
      skipped.push({ printifyProductId: String(remote.id), reason: 'local_product_not_active_merch' });
      continue;
    }

    const variants = activeVariants(remote);
    if (variants.length === 0) {
      skipped.push({ printifyProductId: String(remote.id), reason: 'no_active_variants' });
      continue;
    }

    await db.prepare('DELETE FROM printify_product_variants WHERE product_id = ?').bind(localProductId).run();
    for (const variant of variants) {
      await db.prepare(`
        INSERT INTO printify_product_variants (
          product_id, printify_product_id, blueprint_id, print_provider_id,
          variant_id, title, is_available, production_cost, retail_price, shipping_json, updated_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).bind(
        localProductId,
        String(remote.id),
        remote.blueprint_id || null,
        remote.print_provider_id || null,
        Number(variant.id),
        String(variant.title || `Variant ${variant.id}`),
        variant.is_enabled === false ? 0 : 1,
        variant.cost == null ? null : Number(variant.cost) / 100,
        variant.price == null ? null : Number(variant.price) / 100,
        null,
        now
      ).run();
    }

    await db.prepare('UPDATE products SET printify_product_id = ?, printify_synced_at = ? WHERE id = ?')
      .bind(String(remote.id), now, localProductId).run();
    synced.push({ localProductId, printifyProductId: String(remote.id), variantCount: variants.length });
  }

  return { shopId: String(shopId), synced, skipped };
}

export async function attachShippingToVariant(db, {
  productId,
  variantId,
  shipping,
  now = new Date().toISOString()
} = {}) {
  await db.prepare(`
    UPDATE printify_product_variants
    SET shipping_json = ?, updated_at = ?
    WHERE product_id = ? AND variant_id = ?
  `).bind(JSON.stringify(shipping || {}), now, productId, Number(variantId)).run();
}

export function verifyPrintifyWebhookSignature(rawBody, signature, secret) {
  if (!secret || !signature) return false;
  const expectedHex = createHmac('sha256', secret).update(rawBody).digest('hex');
  const expectedBase64 = createHmac('sha256', secret).update(rawBody).digest('base64');
  const received = String(signature).replace(/^sha256=/i, '').trim();
  const candidates = [expectedHex, expectedBase64];
  return candidates.some((candidate) => {
    const left = Buffer.from(candidate);
    const right = Buffer.from(received);
    return left.length === right.length && timingSafeEqual(left, right);
  });
}

function eventIdFor(payload) {
  return String(payload?.id || payload?.event_id || payload?.data?.id || '').trim();
}

function orderDataFor(payload) {
  return payload?.resource?.data || payload?.data || payload?.order || payload;
}

function topicFor(payload) {
  return String(payload?.topic || payload?.type || payload?.event || 'unknown');
}

function orderStatusFor(payload, order) {
  return String(order?.status || payload?.status || '').toLowerCase();
}

function trackingFor(order) {
  const shipment = order?.shipments?.[0] || order?.shipment || {};
  return {
    number: shipment.number || shipment.tracking_number || order?.tracking_number || null,
    url: shipment.url || shipment.tracking_url || order?.tracking_url || null
  };
}

export async function handlePrintifyWebhook(db, payload, {
  env = {},
  sendEmail = async () => ({ success: true, skipped: true, reason: 'email_not_configured' }),
  now = new Date().toISOString()
} = {}) {
  const eventId = eventIdFor(payload);
  if (!eventId) throw new Error('Printify webhook event ID is required.');
  const topic = topicFor(payload);
  const order = orderDataFor(payload);
  const printifyOrderId = order?.id || payload?.order_id || null;
  const rawPayload = JSON.stringify(payload);
  const payloadHash = createHash('sha256').update(rawPayload).digest('hex');

  const claim = await db.prepare(`
    INSERT OR IGNORE INTO printify_webhook_events
      (event_id, topic, printify_order_id, payload_hash, processed_at)
    VALUES (?, ?, ?, ?, ?)
  `).bind(eventId, topic, printifyOrderId, payloadHash, now).run();
  if (!claim.meta || claim.meta.changes !== 1) {
    return { processed: false, duplicate: true, eventId };
  }

  try {
    const status = orderStatusFor(payload, order);
    const tracking = trackingFor(order);
    const fulfillmentStatus = status === 'canceled' || status === 'cancelled'
      ? 'canceled'
      : (status === 'failed' ? 'failed' : (
        status === 'delivered' || status === 'fulfilled'
          ? 'fulfilled'
          : (status === 'shipped' || status === 'in_transit' ? 'shipped' : 'processing')
      ));

    if (printifyOrderId) {
      await db.prepare(`
        UPDATE orders
        SET printify_status = ?, fulfillment_status = ?, tracking_number = ?, tracking_url = ?, updated_at = ?
        WHERE printify_order_id = ?
      `).bind(
        status || null,
        fulfillmentStatus,
        tracking.number,
        tracking.url,
        now,
        String(printifyOrderId)
      ).run();
    }

    const provider = getPrintifyMode(env) === 'live' ? 'printify' : 'printify_mock';
    const normalizedTopic = topic.toLowerCase();
    const recipient = order?.address_to?.email || order?.customer?.email;
    if (recipient && /order:created|order.created|order_received/.test(normalizedTopic) && printifyOrderId) {
      await sendEmail({
        db,
        env,
        provider,
        eventKey: `printify:${eventId}:received`,
        eventType: 'printify_order_received',
        to: recipient,
        name: order?.address_to?.first_name || 'there',
        orderId: printifyOrderId
      });
    }
    if (recipient && tracking.number && /ship|fulfill|order:updated|order.updated/.test(normalizedTopic)) {
      await sendEmail({
        db,
        env,
        provider,
        eventKey: `printify:${eventId}:shipped`,
        eventType: 'printify_order_shipped',
        to: recipient,
        name: order?.address_to?.first_name || 'there',
        orderId: printifyOrderId,
        trackingLink: tracking.url
      });
    }

    return { processed: true, duplicate: false, eventId, printifyOrderId, topic, status, tracking };
  } catch (error) {
    throw error;
  }
}

export { unwrapList };
