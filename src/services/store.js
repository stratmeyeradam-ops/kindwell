// src/services/store.js
// Curated store architecture: protected downloads, Printify fulfillment, tax, and shipping.

import { randomBytes } from 'node:crypto';
import { getStoreDiscountRate } from './memberships.js';
import { calculateOrderTax } from './tax.js';
import { getPrintifyMode } from './printify.js';
import { sendOrderToPrintify } from './fulfilment.js';

export { PRINTIFY_MODE } from './printify.js';
export { calculateOrderTax } from './tax.js';
/**
 * Lists active products in the store for a locale.
 */
// Garment sizes in wearing order; anything else (colours, scents, dimensions)
// sorts alphabetically, so "Army / S, M, L, XL, 2XL" reads the way a shopper expects.
const SIZE_ORDER = ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL'];
function sortVariants(rows) {
  const key = (title) => {
    const parts = String(title).split(' / ');
    const size = parts.find((part) => SIZE_ORDER.includes(part));
    const rest = parts.filter((part) => part !== size).join(' / ');
    return { rest, rank: size ? SIZE_ORDER.indexOf(size) : -1 };
  };
  return [...rows].sort((a, b) => {
    const ka = key(a.title);
    const kb = key(b.title);
    return ka.rest.localeCompare(kb.rest, undefined, { numeric: true }) || ka.rank - kb.rank;
  });
}

export async function listStoreProducts(db, { locale = 'en', type = null, env = {} } = {}) {
  let query = `
    SELECT p.id, p.slug, p.type, p.price, p.member_price, p.currency, p.image_url,
           p.digital_file_key,
           pt.name, pt.tagline, pt.description, pt.details
    FROM products p
    JOIN product_translations pt ON p.id = pt.product_id AND pt.locale = ?
    WHERE p.is_active = 1
  `;
  const params = [locale];

  if (type) {
    query += ' AND p.type = ?';
    params.push(type);
  }

  query += ' ORDER BY p.created_at ASC';

  const rows = await db.prepare(query).bind(...params).all();
  const products = [];
  for (const row of rows.results) {
    const variants = await db.prepare(`
      SELECT variant_id as id, title, is_available, production_cost, retail_price, shipping_json
      FROM printify_product_variants
      WHERE product_id = ? AND is_available = 1
      ORDER BY title ASC
    `).bind(row.id).all();
    if (row.type === 'printify_merch' && getPrintifyMode(env) === 'live' && variants.results.length === 0) continue;
    products.push({
      ...row,
      details: JSON.parse(row.details || '[]'),
      variants: sortVariants(variants.results).map((variant) => ({
        id: variant.id,
        title: variant.title,
        productionCost: variant.production_cost,
        retailPrice: variant.retail_price,
        shipping: JSON.parse(variant.shipping_json || '{}')
      }))
    });
  }
  return products;
}

/**
 * Fetches a single product by slug.
 */
export async function getProductBySlug(db, slug, locale = 'en', env = {}) {
  const row = await db.prepare(`
    SELECT p.id, p.slug, p.type, p.price, p.member_price, p.currency, p.image_url,
           p.digital_file_key,
           pt.name, pt.tagline, pt.description, pt.details
    FROM products p
    JOIN product_translations pt ON p.id = pt.product_id AND pt.locale = ?
    WHERE p.slug = ? AND p.is_active = 1
  `).bind(locale, slug).first();

  if (!row) return null;
  const variants = await db.prepare(`
    SELECT variant_id as id, title, is_available, production_cost, retail_price, shipping_json
    FROM printify_product_variants
    WHERE product_id = ? AND is_available = 1
    ORDER BY title ASC
  `).bind(row.id).all();
  if (row.type === 'printify_merch' && getPrintifyMode(env) === 'live' && variants.results.length === 0) return null;

  return {
    ...row,
    details: JSON.parse(row.details || '[]'),
    variants: variants.results.map((variant) => ({
      id: variant.id,
      title: variant.title,
      productionCost: variant.production_cost,
      retailPrice: variant.retail_price,
      shipping: JSON.parse(variant.shipping_json || '{}')
    }))
  };
}

/**
 * Configuration-driven tax calculation delegating to tax.js.
 */
export function calculateTax(subtotal, { state = 'OR', country = 'US' } = {}) {
  return calculateOrderTax([{ totalPrice: subtotal, type: 'merch' }], { state, country });
}

/**
 * Calculates shipping quotes for physical Printify items.
 *
 * Callers pass order items keyed by `productType`; accept either key so a merch
 * order is never quoted $0 shipping.
 */
const PHYSICAL_TYPES = ['printify_merch', 'direct_wellness'];

export function calculateShipping(items, { destinationCountry = 'US' } = {}) {
  const typeOf = (item) => item.type || item.productType;
  const hasPhysical = items.some(i => PHYSICAL_TYPES.includes(typeOf(i)));
  if (!hasPhysical) return 0.00;

  // Base shipping $4.50 + $1.50 per additional physical item
  const physicalCount = items
    .filter(i => PHYSICAL_TYPES.includes(typeOf(i)))
    .reduce((sum, i) => sum + (i.quantity || 1), 0);

  const baseRate = destinationCountry === 'US' ? 4.50 : 12.00;
  const additionalRate = destinationCountry === 'US' ? 1.50 : 3.50;

  return Math.round((baseRate + (physicalCount - 1) * additionalRate) * 100) / 100;
}

/**
 * Creates an order, handles member discounts, mocks Printify fulfillment, and issues digital download tokens.
 */
export async function processOrder(db, {
  user = null,
  customerEmail,
  customerName,
  items, // array of { productId, quantity, variantTitle, variantId }
  shippingAddress = { country: 'US', state: 'OR', street: '', city: '', postalCode: '' },
  locale = 'en',
  env = {},
  orderId: presetOrderId = null,
  paymentProvider = 'stripe',
  stripeSessionId = null,
  stripePaymentIntentId = null,
  paidTotals = null
}) {
  if (!customerEmail || !customerEmail.includes('@')) {
    throw new Error('Please provide a valid email address for your order confirmation.');
  }
  if (!customerName || customerName.trim().length === 0) {
    throw new Error('Please provide your name.');
  }
  if (!items || items.length === 0) {
    throw new Error('Your cart is empty.');
  }

  const printifyLive = getPrintifyMode(env) === 'live';
  const discountRate = getStoreDiscountRate(user);
  let subtotal = 0;
  const orderItemsData = [];
  const populatedItems = [];

  for (const item of items) {
    const product = await db.prepare('SELECT * FROM products WHERE id = ? AND is_active = 1')
      .bind(item.productId).first();

    if (!product) {
      throw new Error(`Product not found: ${item.productId}`);
    }

    const qty = Math.max(1, parseInt(item.quantity, 10) || 1);
    // A server-side caller (Stripe fulfilment) passes the exact price it charged.
    const unitPrice = Number.isFinite(item.unitPrice) && item.unitPrice > 0
      ? item.unitPrice
      : (discountRate > 0 ? product.member_price : product.price);
    const itemTotal = Math.round(unitPrice * qty * 100) / 100;
    const printifyProduct = product.type === 'printify_merch'
      ? await db.prepare(`
          SELECT printify_product_id
          FROM products
          WHERE id = ? AND printify_product_id IS NOT NULL
        `).bind(product.id).first()
      : null;
    let printifyVariant = null;
    if (product.type === 'printify_merch') {
      if (item.variantId) {
        printifyVariant = await db.prepare(`
          SELECT variant_id, title
          FROM printify_product_variants
          WHERE product_id = ? AND variant_id = ? AND is_available = 1
        `).bind(product.id, Number(item.variantId)).first();
      } else if (item.variantTitle) {
        printifyVariant = await db.prepare(`
          SELECT variant_id, title
          FROM printify_product_variants
          WHERE product_id = ? AND title = ? AND is_available = 1
        `).bind(product.id, item.variantTitle).first();
      } else {
        printifyVariant = await db.prepare(`
          SELECT variant_id, title
          FROM printify_product_variants
          WHERE product_id = ? AND is_available = 1
          ORDER BY title ASC LIMIT 1
        `).bind(product.id).first();
      }
      if (printifyLive && (!printifyProduct?.printify_product_id || !printifyVariant)) {
        throw new Error('This merchandise item is not available for ordering yet.');
      }
    }

    subtotal += itemTotal;
    orderItemsData.push({
      productId: product.id,
      variantTitle: printifyVariant?.title || item.variantTitle || 'Standard',
      quantity: qty,
      unitPrice,
      totalPrice: itemTotal,
      downloadToken: product.type === 'digital' ? 'dl_' + randomBytes(24).toString('hex') : null,
      productType: product.type,
      printifyProductId: printifyProduct?.printify_product_id || null,
      printifyVariantId: printifyVariant?.variant_id || null
    });
    populatedItems.push({ ...product, quantity: qty, unitPrice, totalPrice: itemTotal });
  }

  subtotal = Math.round(subtotal * 100) / 100;
  const tax = paidTotals?.tax ?? calculateOrderTax(orderItemsData, { state: shippingAddress.state, country: shippingAddress.country });
  const shipping = paidTotals?.shipping ?? calculateShipping(orderItemsData, { destinationCountry: shippingAddress.country });
  const total = paidTotals?.total ?? Math.round((subtotal + tax + shipping) * 100) / 100;
  const orderId = presetOrderId || 'ord_' + randomBytes(12).toString('hex');
  const now = new Date();
  const nowIso = now.toISOString();
  const downloadExpires = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000).toISOString();
  const physicalItems = orderItemsData.filter((item) => item.productType === 'printify_merch');

  // Merch that did not reach Printify (mock mode, or manual approval) still needs
  // shipping, so it stays pending rather than being reported as fulfilled.
  const fulfillmentStatus = physicalItems.length > 0 ? 'pending' : 'fulfilled';
  await db.prepare(`
    INSERT INTO orders (
      id, user_id, customer_email, customer_name, subtotal, discount, tax, shipping, total,
      currency, payment_status, payment_provider, fulfillment_status, printify_order_id,
      printify_status, stripe_session_id, stripe_payment_intent_id, shipping_json, tracking_number, tracking_url, created_at, updated_at
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 'USD', 'completed', ?, ?, NULL, NULL, ?, ?, ?, NULL, NULL, ?, ?)
  `).bind(
    orderId,
    user?.id || null,
    customerEmail.trim(),
    customerName.trim(),
    subtotal,
    discountRate,
    tax,
    shipping,
    total,
    paymentProvider,
    fulfillmentStatus,
    stripeSessionId,
    stripePaymentIntentId,
    physicalItems.length > 0 ? JSON.stringify(shippingAddress) : null,
    nowIso,
    nowIso
  ).run();

  const downloadLinks = [];
  for (const oi of orderItemsData) {
    const orderItemId = 'oi_' + randomBytes(12).toString('hex');
    await db.prepare(`
      INSERT INTO order_items (
        id, order_id, product_id, variant_title, quantity, unit_price, total_price,
        download_token, download_expires_at, printify_product_id, printify_variant_id
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(
      orderItemId,
      orderId,
      oi.productId,
      oi.variantTitle,
      oi.quantity,
      oi.unitPrice,
      oi.totalPrice,
      oi.downloadToken,
      oi.downloadToken ? downloadExpires : null,
      oi.printifyProductId,
      oi.printifyVariantId
    ).run();

    if (oi.downloadToken) {
      await db.prepare(`
        INSERT INTO digital_downloads (
          token, order_item_id, product_id, user_id, download_count, max_downloads, expires_at, created_at
        ) VALUES (?, ?, ?, ?, 0, 10, ?, ?)
      `).bind(oi.downloadToken, orderItemId, oi.productId, user?.id || null, downloadExpires, nowIso).run();

      const prod = populatedItems.find((p) => p.id === oi.productId);
      downloadLinks.push({
        title: prod?.slug?.replace(/-/g, ' ') || 'Digital Guide',
        url: `${env.APP_ORIGIN || (typeof process !== 'undefined' ? process.env?.APP_ORIGIN : '') || 'https://kindwell.org'}/api/download/${oi.downloadToken}`
      });
    }
  }

  // Saved first; Printify second. A Printify outage marks the order "failed"
  // for automatic retry instead of losing a paid order.
  let printifyOrderId = null;
  if (physicalItems.length > 0) {
    const handoff = await sendOrderToPrintify(db, env, orderId);
    printifyOrderId = handoff.printifyOrderId || null;
  }

  return {
    success: true,
    orderId,
    printifyOrderId,
    subtotal,
    tax,
    shipping,
    total,
    downloadLinks
  };
}

/**
 * Validates a digital download token and increments the consumption counter.
 */
export async function verifyAndConsumeDownload(db, token) {
  if (!token) throw new Error('Download token is required.');

  const now = new Date().toISOString();
  const record = await db.prepare(`
    SELECT dd.token, dd.download_count, dd.max_downloads, dd.expires_at,
           p.id as product_id, p.slug, p.digital_file_key
    FROM digital_downloads dd
    JOIN products p ON dd.product_id = p.id
    WHERE dd.token = ? AND dd.expires_at > ?
  `).bind(token, now).first();

  if (!record) {
    throw new Error('This download link is invalid or has expired. Please contact support@kindwell.org for assistance.');
  }

  if (record.download_count >= record.max_downloads) {
    throw new Error('This download limit has been reached. Please contact support@kindwell.org.');
  }

  // Increment download count
  await db.prepare('UPDATE digital_downloads SET download_count = download_count + 1 WHERE token = ?')
    .bind(token).run();

  return {
    isValid: true,
    slug: record.slug,
    fileKey: record.digital_file_key,
    digitalFileKey: record.digital_file_key,
    remainingDownloads: record.max_downloads - (record.download_count + 1)
  };
}
