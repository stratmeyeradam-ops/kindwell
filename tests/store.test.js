// tests/store.test.js
import { test, describe, beforeEach } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createLocalD1, initSchema } from '../src/db/index.js';
import { seedDatabase } from '../src/db/seed.js';
import { registerUser } from './fixtures.js';
import { activateSubscription, TIERS } from '../src/services/memberships.js';
import {
  listStoreProducts,
  getProductBySlug,
  calculateTax,
  calculateShipping,
  processOrder,
  verifyAndConsumeDownload,
  PRINTIFY_MODE
} from '../src/services/store.js';
import { createApp } from '../src/app.js';
import { priceStoreItem, fulfillStoreSession, storeOrderIdForSession } from '../src/services/store-checkout.js';

const readJson = (name) => JSON.parse(readFileSync(new URL(`../src/db/catalog/${name}`, import.meta.url), 'utf8'));
const catalogProducts = readJson('products.json');
const catalogText = readJson('product-translations.json');
const catalogVariants = readJson('printify-variants.json');

describe('Curated merch store (Stripe checkout, Printify fulfilment)', () => {
  let db;
  let freeUser;
  let supportedUser;

  beforeEach(async () => {
    db = createLocalD1(':memory:');
    await initSchema(db);
    await seedDatabase(db);

    const u1 = await registerUser(db, { email: 'free_shopper@kindwell.org', name: 'Free Shopper' });
    freeUser = u1.user;

    const u2 = await registerUser(db, { email: 'sup_shopper@kindwell.org', name: 'Supported Shopper' });
    await activateSubscription(db, { userId: u2.user.id, tier: TIERS.SUPPORTED });
    supportedUser = await db.prepare('SELECT * FROM users WHERE id = ?').bind(u2.user.id).first();
  });

  test('PRINTIFY_MODE is mock in local environment', () => {
    assert.equal(PRINTIFY_MODE, 'mock');
  });

  test('listStoreProducts returns the printed merch and the digital workbooks', async () => {
    const products = await listStoreProducts(db, { locale: 'en' });
    const merch = products.filter((p) => p.type === 'printify_merch');
    const digital = products.filter((p) => p.type === 'digital');
    const liveCatalogue = catalogProducts.filter((p) => p.type !== 'digital');
    assert.equal(merch.length, 8);
    assert.equal(liveCatalogue.length, 8);
    assert.deepEqual(merch.map((p) => p.id).sort(), liveCatalogue.map((p) => p.id).sort());

    // Digital deliverables are sold and must carry the file key that
    // /api/download serves, or a paid buyer receives nothing.
    const digitalCatalogue = catalogProducts.filter((p) => p.type === 'digital');
    assert.equal(digital.length, digitalCatalogue.length);
    assert.ok(digital.length > 0, 'the digital workbooks are for sale');
    for (const p of digital) {
      const source = digitalCatalogue.find((c) => c.id === p.id);
      assert.equal(p.price, source.price, `${p.id} price`);
      assert.equal(p.member_price, Math.round(source.price * 0.85 * 100) / 100, `${p.id} member price is 15% off`);
      assert.equal(p.digital_file_key, source.digital_file_key, `${p.id} points at its deliverable`);
      assert.ok(p.digital_file_key, `${p.id} has a deliverable to serve`);
    }

    const variantCount = merch.reduce((sum, p) => sum + p.variants.length, 0);
    assert.equal(variantCount, 43);
    assert.equal(variantCount, catalogVariants.filter((v) => v.is_available).length);
    assert.ok(merch.every((p) => p.variants.length > 0), 'every merch product is buyable in some variant');

    for (const p of merch) {
      const source = liveCatalogue.find((c) => c.id === p.id);
      assert.equal(p.price, source.price);
      assert.equal(p.member_price, Math.round(source.price * 0.85 * 100) / 100, `${p.id} member price is 15% off`);
      const en = catalogText.find((t) => t.product_id === p.id && t.locale === 'en');
      assert.equal(p.name, en.name, `${p.id} uses its catalogue name`);
    }

    const mug = merch.find((p) => p.id === 'prod_mug');
    assert.equal(mug.name, 'KindWell Ceramic Mug: Breathe, Steep, Notice, Care');
    assert.equal(mug.price, 12.99);
    assert.equal(mug.member_price, 11.04);
  });

  test('the catalogue is translated into Spanish and Brazilian Portuguese', async () => {
    const expected = catalogProducts.length;
    for (const locale of ['es', 'pt-BR']) {
      const products = await listStoreProducts(db, { locale });
      assert.equal(products.length, expected, `${locale} lists every product`);
      assert.ok(products.every((p) => p.name && p.description));
    }
  });

  test('garment variants sort by colour, then in wearing order', async () => {
    const tee = await getProductBySlug(db, 'kindwell-unisex-tee-gentle-depth', 'en');
    assert.ok(tee);
    const products = await listStoreProducts(db, { locale: 'en' });
    const listed = products.find((p) => p.id === 'prod_tee');
    const sizes = ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL'];
    const rank = (title) => sizes.indexOf(title.split(' / ').find((part) => sizes.includes(part)));
    for (let i = 1; i < listed.variants.length; i += 1) {
      const prev = listed.variants[i - 1].title.split(' / ').filter((x) => !sizes.includes(x)).join(' / ');
      const next = listed.variants[i].title.split(' / ').filter((x) => !sizes.includes(x)).join(' / ');
      if (prev === next) assert.ok(rank(listed.variants[i - 1].title) < rank(listed.variants[i].title), listed.variants.map((v) => v.title).join(', '));
    }
  });

  test('digital workbooks stay for sale, keep their file key, and produce a download entitlement', async () => {
    // The workbook is a real product again: it must survive a reseed, stay
    // buyable, and hand the buyer a working download.
    for (const id of ['prod_workbook', 'prod_tracker', 'prod_practice_cards', 'prod_sheets']) {
      const row = await db.prepare('SELECT is_active, digital_file_key FROM products WHERE id = ?').bind(id).first();
      assert.ok(row, `${id} exists in the catalogue`);
      assert.equal(row.is_active, 1, `${id} is for sale`);
      assert.ok(row.digital_file_key, `${id} points at a deliverable`);
    }

    const products = await listStoreProducts(db, { locale: 'en' });
    assert.ok(products.some((p) => p.id === 'prod_workbook'), 'the workbook is listed');

    const detail = await getProductBySlug(db, 'self-compassion-workbook', 'en');
    assert.ok(detail, 'the workbook has a detail page');

    const order = await processOrder(db, {
      customerEmail: 'guest@example.com',
      customerName: 'Guest Buyer',
      items: [{ productId: 'prod_workbook', quantity: 1 }]
    });
    assert.equal(order.success, true);
    assert.ok(order.downloadLinks?.length, 'a digital buyer gets a download link');
    assert.match(order.downloadLinks[0].url, /\/api\/download\/dl_/);

    // The entitlement resolves to a real, unexpired download record.
    const token = order.downloadLinks[0].url.split('/').pop();
    const record = await db.prepare(
      'SELECT user_id, download_count, max_downloads FROM digital_downloads WHERE token = ?'
    ).bind(token).first();
    assert.ok(record, 'the download token exists');
    assert.equal(record.download_count, 0);
    assert.ok(record.max_downloads > 0, 'downloads are limited');
  });

  test('a product that left the catalogue is retired and cannot be bought', async () => {
    // A database carried over from before the migration still holds a stale row.
    const legacy = createLocalD1(':memory:');
    await initSchema(legacy);
    await legacy.prepare(`
      INSERT INTO products (id, slug, type, price, member_price, currency, image_url, is_active, created_at)
      VALUES ('prod_retired_thing', 'retired-thing', 'digital', 9, 7.65, 'USD', '/x.webp', 1, ?)
    `).bind(new Date().toISOString()).run();
    await legacy.prepare(`
      INSERT INTO product_translations (product_id, locale, name, tagline, description, details)
      VALUES ('prod_retired_thing', 'en', 'Retired Thing', 't', 'd', '[]')
    `).run();
    await seedDatabase(legacy);

    const row = await legacy.prepare('SELECT is_active FROM products WHERE id = ?').bind('prod_retired_thing').first();
    assert.equal(row.is_active, 0, 'reseeding retires products that left the catalogue');

    const products = await listStoreProducts(legacy, { locale: 'en' });
    assert.ok(!products.some((p) => p.id === 'prod_retired_thing'));
    assert.equal(await getProductBySlug(legacy, 'retired-thing', 'en'), null);
    await assert.rejects(
      () => processOrder(legacy, {
        customerEmail: 'guest@example.com',
        customerName: 'Guest Buyer',
        items: [{ productId: 'prod_retired_thing', quantity: 1 }]
      }),
      /Product not found/
    );
  });

  test('tax calculation delegates to configuration-driven tax rules', () => {
    assert.equal(calculateTax(100, { state: 'OR', country: 'US' }), 0.00); // OR is configured exempt
    assert.equal(calculateTax(100, { state: 'UNCONFIGURED', country: 'US' }), 0.00); // Unconfigured returns 0.00
  });

  test('shipping calculation: nothing physical ships free, physical charges base + increment', () => {
    assert.equal(calculateShipping([]), 0.00);

    const physicalItems = [{ type: 'printify_merch', quantity: 1 }];
    assert.equal(calculateShipping(physicalItems), 4.50);

    const multiPhysical = [{ type: 'printify_merch', quantity: 3 }];
    assert.equal(calculateShipping(multiPhysical), 7.50); // 4.50 + 2 * 1.50

    assert.equal(calculateShipping(physicalItems, { destinationCountry: 'CA' }), 12.00);
  });

  test('order processing applies the 15% member discount and issues no download tokens', async () => {
    const freeOrder = await processOrder(db, {
      user: freeUser,
      customerEmail: 'free_shopper@kindwell.org',
      customerName: 'Free Shopper',
      items: [{ productId: 'prod_mug', quantity: 1 }],
      shippingAddress: { state: 'OR', country: 'US' }
    });
    assert.equal(freeOrder.subtotal, 12.99);
    assert.deepEqual(freeOrder.downloadLinks, []);

    const supOrder = await processOrder(db, {
      user: supportedUser,
      customerEmail: 'sup_shopper@kindwell.org',
      customerName: 'Supported Shopper',
      items: [{ productId: 'prod_mug', quantity: 2 }],
      shippingAddress: { state: 'OR', country: 'US' }
    });
    assert.equal(supOrder.subtotal, 22.08); // 2 x 11.04 (12.99 * 0.85)
    const orderRow = await db.prepare('SELECT discount FROM orders WHERE id = ?').bind(supOrder.orderId).first();
    assert.equal(orderRow.discount, 0.15);

    const items = await db.prepare('SELECT * FROM order_items WHERE order_id = ?').bind(supOrder.orderId).all();
    assert.equal(items.results.length, 1);
    assert.equal(items.results[0].download_token, null);
    const { count } = await db.prepare('SELECT COUNT(*) as count FROM digital_downloads').first();
    assert.equal(count, 0);
  });

  test('processOrder charges shipping on merch orders', {}, async () => {
    const order = await processOrder(db, {
      user: freeUser,
      customerEmail: 'free_shopper@kindwell.org',
      customerName: 'Free Shopper',
      items: [{ productId: 'prod_mug', quantity: 1 }],
      shippingAddress: { state: 'OR', country: 'US' }
    });
    assert.equal(order.shipping, 4.50);
    assert.equal(order.total, 17.49);
  });

  test('orders are validated before anything is written', async () => {
    const base = { customerEmail: 'a@b.com', customerName: 'A', items: [{ productId: 'prod_mug', quantity: 1 }] };
    await assert.rejects(() => processOrder(db, { ...base, customerEmail: 'nope' }), /valid email/);
    await assert.rejects(() => processOrder(db, { ...base, customerName: '  ' }), /name/);
    await assert.rejects(() => processOrder(db, { ...base, items: [] }), /empty/);
    await assert.rejects(() => processOrder(db, { ...base, items: [{ productId: 'prod_nope' }] }), /Product not found/);
    const { count } = await db.prepare('SELECT COUNT(*) as count FROM orders').first();
    assert.equal(count, 0);
  });

  test('the protected download route refuses tokens it did not issue', async () => {
    await assert.rejects(() => verifyAndConsumeDownload(db, 'dl_made_up'), /invalid or has expired/);
    await assert.rejects(() => verifyAndConsumeDownload(db, ''), /required/);

    const app = createApp(db);
    const res = await app.request('/api/download/dl_made_up', {}, {});
    assert.equal(res.status, 403);
    assert.notEqual(res.headers.get('content-type'), 'application/pdf');
  });

  test('store checkout prices items server-side, including variant price and member discount', async () => {
    const variant = await db.prepare(
      "SELECT variant_id, retail_price FROM printify_product_variants WHERE product_id = 'prod_pillow' AND is_available = 1 ORDER BY retail_price DESC LIMIT 1"
    ).first();
    const priced = await priceStoreItem(db, { productId: 'prod_pillow', variantId: variant.variant_id });
    assert.equal(priced.unitPrice, variant.retail_price, 'the variant retail price is charged');

    const member = await registerUser(db, { email: 'store-member@example.com' });
    await activateSubscription(db, { userId: member.user.id, tier: TIERS.SUPPORTED });
    const memberRow = await db.prepare('SELECT * FROM user WHERE id = ?').bind(member.user.id).first();
    const discounted = await priceStoreItem(db, { productId: 'prod_pillow', variantId: variant.variant_id, user: memberRow });
    assert.ok(discounted.unitPrice < priced.unitPrice, 'Supported members get the store discount');

    await assert.rejects(() => priceStoreItem(db, { productId: 'prod_pillow', variantId: 999999999 }), /not available/);
    await assert.rejects(() => priceStoreItem(db, { productId: 'prod_nope' }), /no longer available/);
  });

  test('the store checkout refuses to start when Stripe is not configured', async () => {
    const app = createApp(db);
    const res = await app.request('/api/store/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ productId: 'prod_workbook', locale: 'en' }).toString()
    }, {});
    assert.equal(res.status, 302);
    assert.match(decodeURIComponent(res.headers.get('location')), /not switched on/);
  });

  test('a paid Stripe store session becomes exactly one order with download tokens', async () => {
    const session = {
      id: 'cs_test_kindwell_1',
      amount_subtotal: 1800, amount_total: 1980, total_details: { amount_tax: 180, amount_shipping: 0 },
      payment_status: 'paid',
      payment_intent: 'pi_test_1',
      customer_details: { email: 'buyer@example.com', name: 'Pat Buyer' },
      metadata: { kind: 'store', product_id: 'prod_workbook', variant_id: '', quantity: '1', unit_price: '18.00', user_id: '', locale: 'en' }
    };
    const [first, simultaneous] = await Promise.all([fulfillStoreSession({ APP_ORIGIN: 'https://kindwell.org' }, db, session), fulfillStoreSession({ APP_ORIGIN: 'https://kindwell.org' }, db, session)]);
    assert.equal(first.orderId, simultaneous.orderId);
    assert.equal(first.orderId, storeOrderIdForSession(session.id));
    assert.equal(first.downloadLinks.length, 1);
    assert.match(first.downloadLinks[0].url, /^https:\/\/kindwell\.org\/api\/download\/dl_/);

    const again = await fulfillStoreSession({ APP_ORIGIN: 'https://kindwell.org' }, db, session);
    assert.equal(again.downloadLinks.length, 1);
    const { count } = await db.prepare('SELECT COUNT(*) as count FROM orders').first();
    assert.equal(count, 1, 'a repeated webhook or page reload does not create a second order');
    const order = await db.prepare('SELECT * FROM orders WHERE id = ?').bind(first.orderId).first();
    assert.equal(order.payment_provider, 'stripe');
    assert.equal(order.stripe_session_id, session.id);
    assert.equal(order.total, 19.8);
    assert.equal(order.tax, 1.8);

    assert.equal(await fulfillStoreSession({}, db, { ...session, id: 'cs_test_unpaid', payment_status: 'unpaid' }), null);
    assert.equal(await fulfillStoreSession({}, db, { ...session, id: 'cs_test_member', metadata: { tier: 'kind' } }), null);
  });

  test('merch paid for but not yet sent to Printify stays pending, never "fulfilled"', async () => {
    const result = await processOrder(db, {
      customerEmail: 'merch@example.com', customerName: 'Merch Buyer',
      items: [{ productId: 'prod_mug', quantity: 1 }],
      shippingAddress: { country: 'US', state: 'SD', street: '1 Main', city: 'Rapid City', postalCode: '57701' }
    });
    const order = await db.prepare('SELECT fulfillment_status FROM orders WHERE id = ?').bind(result.orderId).first();
    assert.equal(order.fulfillment_status, 'pending');
  });
});
