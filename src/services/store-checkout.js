// src/services/store-checkout.js
// Store sales through Stripe Checkout, fulfilled through Printify.
//
//   1. createStoreCheckout prices the item server-side (never from the client),
//      and opens a one-time-payment Checkout Session. Merch sessions collect a
//      shipping address and charge the same shipping quote the order records.
//   2. fulfillStoreSession runs when Stripe reports the session paid — from the
//      webhook or the success page, whichever arrives first. It is idempotent:
//      the order id is derived from the session id, so a second call returns
//      the existing order instead of charging Printify twice.

import { createStripeClient, StripeConfigError } from './stripe.js';
import { getStoreDiscountRate } from './memberships.js';
import { calculateShipping, processOrder } from './store.js';

const SHIPPABLE = ['printify_merch', 'direct_wellness'];

export function storeOrderIdForSession(sessionId) {
  return `ord_${String(sessionId).replace(/[^A-Za-z0-9_]/g, '')}`;
}

/** The unit price we charge and record: variant retail price when known, less any member discount. */
export async function priceStoreItem(db, { productId, variantId = null, user = null }) {
  const product = await db.prepare('SELECT * FROM products WHERE id = ? AND is_active = 1').bind(productId).first();
  if (!product) throw new Error('That item is no longer available.');

  let variant = null;
  if (product.type === 'printify_merch') {
    variant = variantId
      ? await db.prepare(`SELECT variant_id, title, retail_price FROM printify_product_variants
          WHERE product_id = ? AND variant_id = ? AND is_available = 1`).bind(product.id, Number(variantId)).first()
      : await db.prepare(`SELECT variant_id, title, retail_price FROM printify_product_variants
          WHERE product_id = ? AND is_available = 1 ORDER BY title ASC LIMIT 1`).bind(product.id).first();
    if (!variant) throw new Error('That size or colour is not available.');
  }

  const base = variant?.retail_price || product.price;
  const rate = getStoreDiscountRate(user);
  const unitPrice = Math.round(base * (1 - rate) * 100) / 100;
  return { product, variant, unitPrice };
}

export async function createStoreCheckout(env, db, { user = null, productId, variantId = null, quantity = 1, locale = 'en', origin }) {
  const qty = Math.min(10, Math.max(1, parseInt(quantity, 10) || 1));
  const { product, variant, unitPrice } = await priceStoreItem(db, { productId, variantId, user });
  const name = (await db.prepare('SELECT name FROM product_translations WHERE product_id = ? AND locale = ?')
    .bind(product.id, locale).first())?.name || product.slug.replace(/-/g, ' ');
  const shippable = SHIPPABLE.includes(product.type);
  const prefix = locale === 'en' ? '' : (locale === 'es' ? '/es' : '/pt-br');
  const shipping = shippable ? calculateShipping([{ type: product.type, quantity: qty }], { destinationCountry: 'US' }) : 0;

  const stripe = createStripeClient(env);
  return stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: [{
      quantity: qty,
      price_data: {
        currency: 'usd',
        unit_amount: Math.round(unitPrice * 100),
        product_data: { name: variant ? `${name} — ${variant.title}` : name }
      }
    }],
    customer_email: user?.email || undefined,
    client_reference_id: user?.id || undefined,
    ...(shippable ? {
      shipping_address_collection: { allowed_countries: ['US'] },
      shipping_options: [{
        shipping_rate_data: {
          type: 'fixed_amount',
          display_name: 'Standard shipping',
          fixed_amount: { amount: Math.round(shipping * 100), currency: 'usd' }
        }
      }],
      phone_number_collection: { enabled: true }
    } : {}),
    metadata: {
      kind: 'store',
      product_id: product.id,
      variant_id: variant ? String(variant.variant_id) : '',
      variant_title: variant?.title || '',
      quantity: String(qty),
      unit_price: unitPrice.toFixed(2),
      user_id: user?.id || '',
      locale
    },
    success_url: `${origin}/store/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}${prefix}/store?canceled=true`
  });
}

/**
 * Record a paid store session as an order, send merch to Printify, and issue
 * download tokens. Safe to call more than once for the same session.
 */
const inFlightOrders = new WeakMap();
export async function fulfillStoreSession(env, db, session) {
  let running = inFlightOrders.get(db);
  if (!running) { running = new Map(); inFlightOrders.set(db, running); }
  const key = session?.id;
  if (running.has(key)) return running.get(key);
  const work = fulfillPaidStoreSession(env, db, session);
  running.set(key, work);
  try { return await work; } finally { running.delete(key); }
}
async function fulfillPaidStoreSession(env, db, session) {
  if (session?.metadata?.kind !== 'store') return null;
  if (session.payment_status !== 'paid') return null;

  const orderId = storeOrderIdForSession(session.id);
  const existing = await db.prepare('SELECT * FROM orders WHERE id = ?').bind(orderId).first();
  if (existing) return { ...existing, downloadLinks: await downloadLinksFor(env, db, orderId) };

  const m = session.metadata;
  const user = m.user_id
    ? await db.prepare('SELECT * FROM user WHERE id = ?').bind(m.user_id).first()
    : null;
  const details = session.customer_details || {};
  const ship = session.shipping_details || session.collected_information?.shipping_details || null;
  const addr = ship?.address || details.address || {};

  const result = await processOrder(db, {
    user,
    orderId,
    paymentProvider: 'stripe',
    stripeSessionId: session.id,
    stripePaymentIntentId: typeof session.payment_intent === 'string' ? session.payment_intent : session.payment_intent?.id || null,
    customerEmail: details.email || user?.email || '',
    customerName: ship?.name || details.name || user?.name || 'KindWell customer',
    items: [{
      productId: m.product_id,
      variantId: m.variant_id || null,
      variantTitle: m.variant_title || null,
      quantity: Number(m.quantity) || 1,
      unitPrice: Number(m.unit_price)
    }],
    shippingAddress: {
      country: addr.country || 'US',
      state: addr.state || '',
      street: addr.line1 || '',
      address2: addr.line2 || '',
      city: addr.city || '',
      postalCode: addr.postal_code || '',
      phone: details.phone || ''
    },
    paidTotals: Number.isFinite(session.amount_total) ? {
      total: session.amount_total / 100,
      subtotal: (session.amount_subtotal ?? session.amount_total) / 100,
      tax: (session.total_details?.amount_tax || 0) / 100,
      shipping: (session.total_details?.amount_shipping || 0) / 100
    } : null,
    locale: m.locale || 'en',
    env
  });
  return { ...result, total: result.total };
}

async function downloadLinksFor(env, db, orderId) {
  const origin = env.APP_ORIGIN || (typeof process !== 'undefined' ? process.env?.APP_ORIGIN : '') || 'https://kindwell.org';
  const rows = await db.prepare(`
    SELECT oi.download_token, p.slug FROM order_items oi JOIN products p ON p.id = oi.product_id
    WHERE oi.order_id = ? AND oi.download_token IS NOT NULL
  `).bind(orderId).all();
  return (rows?.results || []).map((r) => ({ title: r.slug.replace(/-/g, ' '), url: `${origin}/api/download/${r.download_token}` }));
}

export async function retrieveStoreSession(env, sessionId) {
  if (!/^cs_[A-Za-z0-9_]+$/.test(String(sessionId || ''))) throw new StripeConfigError('Invalid checkout session.');
  return createStripeClient(env).checkout.sessions.retrieve(sessionId);
}
