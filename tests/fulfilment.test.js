// tests/fulfilment.test.js
import { test, describe, beforeEach } from 'node:test';
import assert from 'node:assert/strict';
import { createLocalD1, initSchema } from '../src/db/index.js';
import { seedDatabase } from '../src/db/seed.js';
import { processOrder } from '../src/services/store.js';
import { sendOrderToPrintify, splitName, retryFailedPrintifyOrders } from '../src/services/fulfilment.js';

const LIVE = {
  PRINTIFY_MODE: 'live', PRINTIFY_ALLOW_ORDER_CREATION: 'true', PRINTIFY_SHOP_ID: 'shop_1',
  PRINTIFY_API_TOKEN: 'tok', PRINTIFY_PRODUCTION_ENABLED: 'true', PRINTIFY_ORDER_APPROVAL: 'auto'
};
const ADDRESS = { country: 'US', state: 'SD', street: '1 Main St', city: 'Rapid City', postalCode: '57701' };

function fakePrintify({ failCreate = 0, failProduction = 0 } = {}) {
  const calls = { create: 0, production: 0 };
  return {
    calls,
    createOrder: async () => { calls.create += 1; if (calls.create <= failCreate) throw new Error('Printify 503'); return { id: `pf_${calls.create}` }; },
    sendToProduction: async () => { calls.production += 1; if (calls.production <= failProduction) throw new Error('Printify 429'); return {}; }
  };
}

describe('Printify hand-off (save first, retry safely)', () => {
  let db;
  beforeEach(async () => {
    db = createLocalD1(':memory:');
    await initSchema(db);
    await seedDatabase(db);
  });

  async function merchOrder(name = 'Pat Buyer') {
    const variant = await db.prepare("SELECT variant_id FROM printify_product_variants WHERE product_id = 'prod_mug' LIMIT 1").first();
    return processOrder(db, {
      customerEmail: 'pat@example.com', customerName: name,
      items: [{ productId: 'prod_mug', variantId: variant.variant_id, quantity: 1 }],
      shippingAddress: ADDRESS
    });
  }

  test('a paid order is saved even when Printify is not connected', async () => {
    const result = await merchOrder();
    const order = await db.prepare('SELECT * FROM orders WHERE id = ?').bind(result.orderId).first();
    assert.equal(order.payment_status, 'completed');
    assert.equal(order.printify_status, 'not_sent');
    assert.equal(order.fulfillment_status, 'pending');
    assert.deepEqual(JSON.parse(order.shipping_json).city, 'Rapid City');
  });

  test('a Printify outage marks the order failed, and a retry succeeds', async () => {
    const { orderId } = await merchOrder();
    const client = fakePrintify({ failCreate: 1 });
    const first = await sendOrderToPrintify(db, LIVE, orderId, { client });
    assert.equal(first.status, 'failed');
    let order = await db.prepare('SELECT * FROM orders WHERE id = ?').bind(orderId).first();
    assert.equal(order.printify_status, 'failed');
    assert.match(order.printify_error, /503/);
    assert.equal(order.printify_attempts, 1);

    const second = await sendOrderToPrintify(db, LIVE, orderId, { client });
    assert.equal(second.status, 'sent');
    order = await db.prepare('SELECT * FROM orders WHERE id = ?').bind(orderId).first();
    assert.equal(order.printify_status, 'sent');
    assert.equal(order.printify_attempts, 2);
  });

  test('a retry after a failed production call never creates a second Printify order', async () => {
    const { orderId } = await merchOrder();
    const client = fakePrintify({ failProduction: 1 });
    assert.equal((await sendOrderToPrintify(db, LIVE, orderId, { client })).status, 'failed');
    assert.equal((await sendOrderToPrintify(db, LIVE, orderId, { client })).status, 'sent');
    assert.equal(client.calls.create, 1, 'the saved Printify order id is reused');
    assert.equal(client.calls.production, 2);
    assert.equal((await sendOrderToPrintify(db, LIVE, orderId, { client })).status, 'sent');
    assert.equal(client.calls.production, 2, 'an already-sent order is left alone');
  });

  test('manual approval leaves the order created in Printify, not sent', async () => {
    const { orderId } = await merchOrder();
    const client = fakePrintify();
    const result = await sendOrderToPrintify(db, { ...LIVE, PRINTIFY_ORDER_APPROVAL: 'manual' }, orderId, { client });
    assert.equal(result.status, 'created');
    assert.equal(client.calls.production, 0);
  });

  test('automatic retries skip everything when Printify is not connected', async () => {
    await merchOrder();
    assert.deepEqual(await retryFailedPrintifyOrders(db, {}), { retried: 0 });
  });

  test('one-word names are sent as first and last name', () => {
    assert.deepEqual(splitName('Cher'), { first: 'Cher', last: 'Cher' });
    assert.deepEqual(splitName('Mary Ann Smith'), { first: 'Mary Ann', last: 'Smith' });
    assert.deepEqual(splitName(''), { first: 'Customer', last: 'Customer' });
  });
});
