import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { createHmac } from 'node:crypto';
import { createLocalD1, initSchema } from '../src/db/index.js';
import { seedDatabase } from '../src/db/seed.js';
import { renderStorePage } from '../src/views/store.js';
import {
  createPrintifyClient,
  findKindWellShop,
  syncPrintifyCatalog,
  assertPrintifyOrderCreationAllowed,
  shouldAutoSendToProduction,
  getPrintifyApprovalMode,
  getAutoProductionMaxTotal,
  verifyPrintifyWebhookSignature,
  handlePrintifyWebhook
} from '../src/services/printify.js';

const env = {
  PRINTIFY_MODE: 'live',
  PRINTIFY_API_TOKEN: 'test-token',
  PRINTIFY_SHOP_ID: '12345',
  PRINTIFY_ORDER_APPROVAL: 'manual',
  PRINTIFY_ALLOW_ORDER_CREATION: 'false',
  PRINTIFY_PRODUCTION_ENABLED: 'false'
};

function jsonResponse(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json' }
  });
}

describe('Printify API integration', () => {
  test('client authenticates reads without exposing the token', async () => {
    const calls = [];
    const client = createPrintifyClient(env, {
      fetchImpl: async (url, options) => {
        calls.push({ url: String(url), options });
        return jsonResponse([{ id: 12345, title: 'KindWell Store', sales_channel: 'API' }]);
      }
    });

    const shops = await client.listShops();
    assert.equal(shops[0].title, 'KindWell Store');
    assert.match(calls[0].options.headers.Authorization, /^Bearer /);
    assert.equal(calls[0].options.headers['User-Agent'], 'KindWell/2.0');
    assert.equal(calls[0].options.headers.Authorization.includes('test-token'), true);
  });

  test('shop resolution selects the sole KindWell shop', () => {
    assert.deepEqual(findKindWellShop([
      { id: 1, title: 'Other Shop', sales_channel: 'API' },
      { id: 42, title: 'KindWell Store', sales_channel: 'API' }
    ]), { id: 42, title: 'KindWell Store', sales_channel: 'API' });
    assert.equal(findKindWellShop([{ id: 1, title: 'Other Shop' }]), null);
    assert.throws(() => findKindWellShop([
      { id: 1, title: 'KindWell US' },
      { id: 2, title: 'KindWell EU' }
    ]), /more than one/i);
  });

  test('catalog sync maps only active genuine variants', async () => {
    const db = createLocalD1(':memory:');
    await initSchema(db);
    await seedDatabase(db);

    const result = await syncPrintifyCatalog(db, {
      shopId: 42,
      mappings: { 'remote-mug': 'prod_mug' },
      products: [
        {
          id: 'remote-mug',
          title: 'KindWell Mug',
          visible: true,
          blueprint_id: 19,
          print_provider_id: 29,
          variants: [
            { id: 100, title: 'White / 11oz', is_enabled: true, cost: 899, price: 1299 },
            { id: 101, title: 'Black / 11oz', is_enabled: false, cost: 999, price: 1399 }
          ]
        },
        { id: 'unmapped', title: 'Unmapped', visible: true, variants: [] }
      ]
    });

    assert.deepEqual(result.synced, [{ localProductId: 'prod_mug', printifyProductId: 'remote-mug', variantCount: 1 }]);
    assert.equal(result.skipped.length, 1);
    const variant = await db.prepare('SELECT * FROM printify_product_variants WHERE product_id = ?').bind('prod_mug').first();
    assert.equal(variant.variant_id, 100);
    assert.equal(variant.production_cost, 8.99);
    assert.equal(variant.retail_price, 12.99);
    const product = await db.prepare('SELECT printify_product_id FROM products WHERE id = ?').bind('prod_mug').first();
    assert.equal(product.printify_product_id, 'remote-mug');
  });

  test('order creation respects live mode and the operator kill switch', async () => {
    assert.throws(() => assertPrintifyOrderCreationAllowed({ PRINTIFY_MODE: 'mock' }), /disabled outside live/i);
    assert.throws(() => assertPrintifyOrderCreationAllowed(env), /disabled by safety/i);
    assert.doesNotThrow(() => assertPrintifyOrderCreationAllowed({ ...env, PRINTIFY_ALLOW_ORDER_CREATION: 'true' }));
    const client = createPrintifyClient(env, { fetchImpl: async () => jsonResponse({ id: 'draft-order' }) });
    assert.throws(() => client.createOrder('12345', {}), /disabled by safety/i);
    assert.throws(() => client.sendToProduction('12345', 'order-1'), /disabled by safety/i);
  });

  test('enabling production no longer breaks order creation', async () => {
    // The previous contract threw whenever PRINTIFY_PRODUCTION_ENABLED was true,
    // making it impossible to ever fulfil an order. Guard against that regression.
    const liveEnv = { ...env, PRINTIFY_ALLOW_ORDER_CREATION: 'true', PRINTIFY_PRODUCTION_ENABLED: 'true' };
    assert.doesNotThrow(() => assertPrintifyOrderCreationAllowed(liveEnv));
    const client = createPrintifyClient(liveEnv, { fetchImpl: async () => jsonResponse({ id: 'draft-order' }) });
    assert.doesNotThrow(() => client.createOrder('12345', {}));
  });

  test('threshold fulfilment auto-produces at or below the configured total', () => {
    const liveEnv = {
      ...env,
      PRINTIFY_ALLOW_ORDER_CREATION: 'true',
      PRINTIFY_PRODUCTION_ENABLED: 'true',
      PRINTIFY_ORDER_APPROVAL: 'threshold',
      PRINTIFY_AUTO_PRODUCTION_MAX_TOTAL: '75'
    };
    assert.equal(shouldAutoSendToProduction(liveEnv, 42.99), true);
    assert.equal(shouldAutoSendToProduction(liveEnv, 75), true, 'boundary is inclusive');
    assert.equal(shouldAutoSendToProduction(liveEnv, 75.01), false);
    assert.equal(shouldAutoSendToProduction(liveEnv, 250), false);
  });

  test('threshold fulfilment holds anything it cannot price or is told to hold', () => {
    const liveEnv = {
      ...env,
      PRINTIFY_ALLOW_ORDER_CREATION: 'true',
      PRINTIFY_PRODUCTION_ENABLED: 'true',
      PRINTIFY_ORDER_APPROVAL: 'threshold'
    };
    assert.equal(shouldAutoSendToProduction(liveEnv, null), false);
    assert.equal(shouldAutoSendToProduction(liveEnv, 'not-a-number'), false);
    assert.equal(shouldAutoSendToProduction(liveEnv, -5), false);
    assert.equal(shouldAutoSendToProduction({ ...liveEnv, PRINTIFY_ORDER_APPROVAL: 'manual' }, 1), false);
    assert.equal(shouldAutoSendToProduction({ ...liveEnv, PRINTIFY_PRODUCTION_ENABLED: 'false' }, 1), false);
    assert.equal(shouldAutoSendToProduction({ ...liveEnv, PRINTIFY_ORDER_APPROVAL: 'auto' }, 9999), true);
  });

  test('approval mode and threshold fall back safely on bad configuration', () => {
    assert.equal(getPrintifyApprovalMode({}), 'auto');
    assert.equal(getPrintifyApprovalMode({ PRINTIFY_ORDER_APPROVAL: 'nonsense' }), 'auto');
    assert.equal(getPrintifyApprovalMode({ PRINTIFY_ORDER_APPROVAL: 'THRESHOLD' }), 'threshold');
    assert.equal(getAutoProductionMaxTotal({}), 75);
    assert.equal(getAutoProductionMaxTotal({ PRINTIFY_AUTO_PRODUCTION_MAX_TOTAL: '' }), 75);
    assert.equal(getAutoProductionMaxTotal({ PRINTIFY_AUTO_PRODUCTION_MAX_TOTAL: 'abc' }), 75);
    assert.equal(getAutoProductionMaxTotal({ PRINTIFY_AUTO_PRODUCTION_MAX_TOTAL: '120' }), 120);
  });

  test('webhook signatures and event processing are idempotent', async () => {
    const db = createLocalD1(':memory:');
    await initSchema(db);
    await db.prepare(`
      INSERT INTO orders (
        id, customer_email, customer_name, subtotal, total, payment_status, payment_provider,
        fulfillment_status, printify_order_id, created_at
      ) VALUES ('local-1', 'buyer@example.com', 'Buyer', 20, 20, 'completed', 'paypal_mock', 'pending', 'print-1', ?)
    `).bind(new Date().toISOString()).run();

    const payload = {
      id: 'event-1',
      type: 'order:updated',
      data: {
        id: 'print-1',
        status: 'fulfilled',
        shipments: [{ number: 'TRACK-1', url: 'https://carrier.example/track/TRACK-1' }],
        address_to: { email: 'buyer@example.com', first_name: 'Buyer' }
      }
    };
    const raw = JSON.stringify(payload);
    const signature = createHmac('sha256', 'secret').update(raw).digest('hex');
    assert.equal(verifyPrintifyWebhookSignature(raw, `sha256=${signature}`, 'secret'), true);
    assert.equal(verifyPrintifyWebhookSignature(raw, signature.slice(1), 'secret'), false);

    const emails = [];
    const first = await handlePrintifyWebhook(db, payload, {
      env: { PRINTIFY_MODE: 'live' },
      sendEmail: async (args) => {
        emails.push(args);
        return { success: true };
      }
    });
    const duplicate = await handlePrintifyWebhook(db, payload, {
      env: { PRINTIFY_MODE: 'live' },
      sendEmail: async () => {
        throw new Error('duplicate event sent an email');
      }
    });

    assert.equal(first.processed, true);
    assert.equal(duplicate.duplicate, true);
    assert.equal(emails.length, 1);
    assert.equal(emails[0].trackingLink, 'https://carrier.example/track/TRACK-1');
    const order = await db.prepare('SELECT printify_status, fulfillment_status, tracking_number FROM orders WHERE id = ?').bind('local-1').first();
    assert.equal(order.printify_status, 'fulfilled');
    assert.equal(order.fulfillment_status, 'fulfilled');
  });

  test('customer storefront copy contains no supplier identifiers', async () => {
    const db = createLocalD1(':memory:');
    await initSchema(db);
    await seedDatabase(db);
    const html = await renderStorePage(db, { locale: 'en', env: { PRINTIFY_MODE: 'mock' } });
    assert.doesNotMatch(html, /printify|blueprint|print provider|supplier/i);
    assert.match(html, /KindWell Ceramic Mug: Breathe, Steep, Notice, Care/);
    assert.match(html, /KindWell Organic Tote: Carry What Matters/);
  });
});
