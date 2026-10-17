// src/views/store.js
// Curated store view for digital downloads, physical merchandise, and order confirmation

import { renderLayout } from './layout.js';
import { getPrintifyMode } from '../services/printify.js';
import { ui } from '../locales/ui-strings.js';
import { listStoreProducts, getProductBySlug } from '../services/store.js';
import { hasTier, TIERS } from '../services/memberships.js';

export async function renderStorePage(db, { locale = 'en', user = null, env = {} } = {}) {
  const t = ui[locale] || ui.en;
  const prefix = locale === 'en' ? '' : (locale === 'es' ? '/es' : '/pt-br');

  const allProducts = await listStoreProducts(db, { locale, env });
  const digitalProducts = allProducts.filter(p => p.type === 'digital');
  const merchProducts = allProducts.filter(p => p.type === 'printify_merch');

  const isSupportedMember = hasTier(user, TIERS.SUPPORTED);
  const pfyLive = getPrintifyMode(env) === 'live' && String(env.PRINTIFY_ALLOW_ORDER_CREATION ?? 'true') !== 'false';
  // Payment is taken by the storefront, so there is no local checkout mode left.
  const titles = {
    en: 'Curated Store: Digital Downloads & Gentle Provisions — KindWell',
    es: 'Tienda KindWell: Cuadernos de trabajo y papelería consciente',
    'pt-BR': 'Loja KindWell: Materiais digitais e itens de cuidado'
  };

  const descriptions = {
    en: 'Printable self-compassion workbooks, practice cards, linen journals, and organic merchandise designed to support daily gentleness.',
    es: 'Cuadernos de trabajo descargables, tarjetas de presencia en el cuerpo y objetos cuidados para una vida más serena.',
    'pt-BR': 'Cadernos de exercícios em PDF, cartões de respiração e itens aconchegantes para a sua rotina.'
  };

  const storeCopy = {
    en: {
      physicalLabel: 'Printed to Order',
      physicalHeading: 'KindWell Physical Goods',
      physicalIntro: 'Thoughtful goods for tea, notes, layers, walls, and the corners you make your own.',
      order: 'Order item',
      from: 'From ',
      variant: 'Available finish or size',
      checkout: 'Complete order',
      address: 'Street address',
      city: 'City',
      postalCode: 'Postal code'
    },
    es: {
      physicalLabel: 'Hecho bajo pedido',
      physicalHeading: 'Objetos físicos de KindWell',
      physicalIntro: 'Objetos elegidos para el té, las notas, las capas, las paredes y los rincones que haces tuyos.',
      order: 'Pedir artículo',
      from: 'Desde ',
      variant: 'Acabado o talla disponible',
      checkout: 'Completar pedido',
      address: 'Dirección',
      city: 'Ciudad',
      postalCode: 'Código postal'
    },
    'pt-BR': {
      physicalLabel: 'Feito sob demanda',
      physicalHeading: 'Objetos físicos KindWell',
      physicalIntro: 'Objetos escolhidos para chá, anotações, camadas, paredes e os cantos que são seus.',
      order: 'Pedir item',
      from: 'A partir de ',
      variant: 'Acabamento ou tamanho disponível',
      checkout: 'Concluir pedido',
      address: 'Endereço',
      city: 'Cidade',
      postalCode: 'CEP'
    }
  };
  const copy = storeCopy[locale] || storeCopy.en;

  const bodyContent = `
  <section class="section hero" style="padding:40px 0 60px;background:var(--cream);border-bottom:1px solid var(--line);">
    <div class="container" style="display:grid;grid-template-columns:repeat(auto-fit, minmax(min(100%, 340px), 1fr));gap:40px;align-items:center;">
     <div>
      <p class="breadcrumb" style="font-size:13px;color:var(--muted);margin-bottom:12px;">
        <a href="${prefix || '/'}" style="text-decoration:underline;">${t.nav.home}</a> / ${t.nav.store}
      </p>
      <h1 style="font-family:var(--serif);font-size:clamp(36px, 4.5vw, 48px);color:var(--ink);margin:0 0 16px;line-height:1.2;">
        Tools for quiet days.
      </h1>
      <p class="lead" style="font-size:18px;line-height:1.6;color:var(--muted);margin:0 0 20px;">
        ${descriptions[locale] || descriptions.en}
      </p>
     </div>
     <img src="/assets/store-editorial.webp" alt="" style="width:100%;border-radius:var(--radius);box-shadow:var(--shadow);object-fit:cover;aspect-ratio:3/2;">
    </div>
  </section>

  <!-- Store Section 1: Digital Downloads -->
  <section class="section" style="padding:60px 0 40px;">
    <div class="container">
      <div style="margin-bottom:32px;">
        <span class="pill" style="background:var(--mint);color:var(--deep);font-size:12px;font-weight:700;padding:4px 12px;border-radius:20px;text-transform:uppercase;">Immediate Access</span>
        <h2 style="font-family:var(--serif);font-size:32px;color:var(--ink);margin:8px 0 6px;">Digital Downloads & Printable Guides</h2>
        <p style="font-size:16px;color:var(--muted);margin:0;">High-resolution printable companion workbooks, habit trackers, and grounding cards.</p>
      </div>

      <div class="grid grid-3" style="display:grid;grid-template-columns:repeat(auto-fit, minmax(280px, 1fr));gap:28px;">
        ${digitalProducts.map(p => `
          <article class="card product-card" style="background:var(--paper);border-radius:var(--radius);padding:32px;box-shadow:var(--shadow);border:1px solid var(--line);display:flex;flex-direction:column;justify-content:space-between;">
            <div>
              <div style="border-radius:18px;overflow:hidden;margin-bottom:20px;background:var(--cream);border:1px solid var(--line);">
                <img src="${p.image_url}" alt="${p.name}" width="600" height="400" style="width:100%;height:180px;object-fit:cover;">
              </div>
              <h3 style="font-family:var(--serif);font-size:22px;color:var(--ink);margin:0 0 6px;line-height:1.25;">${p.name}</h3>
              <p style="font-size:14px;font-weight:600;color:var(--deep);margin:0 0 12px;">${p.tagline}</p>
              <p style="font-size:14px;color:var(--muted);line-height:1.5;margin:0 0 16px;">${p.description}</p>
              <ul style="margin:0 0 20px;padding-left:18px;font-size:13px;line-height:1.6;color:var(--muted);">
                ${p.details.map(d => `<li>${d}</li>`).join('')}
              </ul>
            </div>

            <div style="border-top:1px solid var(--line);padding-top:18px;display:flex;justify-content:space-between;align-items:center;">
              <div>
                ${isSupportedMember ? `
                  <div style="font-size:22px;font-weight:700;color:var(--ink);">$${p.member_price.toFixed(2)}</div>
                  <span style="font-size:12px;color:var(--muted);text-decoration:line-through;">$${p.price.toFixed(2)}</span>
                ` : `
                  <div style="font-size:22px;font-weight:700;color:var(--ink);">$${p.price.toFixed(2)}</div>
                  <span style="font-size:12px;color:var(--deep);">$${p.member_price.toFixed(2)} with Supported</span>
                `}
              </div>
              <a href="${({"prod_mug":"https://buy.stripe.com/14A7sK3XV1oB4QJ8iU0kE0g","prod_journal":"https://buy.stripe.com/eVqfZgfGD4ANfvn9mY0kE0h","prod_tee":"https://buy.stripe.com/14A00icur7MZ5UNbv60kE0i","prod_candle":"https://buy.stripe.com/dRm8wOdyv2sF4QJ42E0kE0j","prod_crewneck":"https://buy.stripe.com/cNieVc3XVffrcjb42E0kE0k","prod_tote":"https://buy.stripe.com/4gM8wO7a7d7j3MF56I0kE0l","prod_wall_print":"https://buy.stripe.com/28E5kCgKHc3fcjb56I0kE0m","prod_pillow":"https://buy.stripe.com/5kQ3cu8eb7MZab3ar20kE0n"})[p.id] || ("/api/store/checkout?productId=" + encodeURIComponent(p.id))}" class="btn small">
                Buy now
              </a>
            </div>
          </article>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- Store Section 2: Physical Merchandise -->
  <section class="section" style="background:var(--paper);padding:60px 0 80px;border-top:1px solid var(--line);">
    <div class="container">
      <div style="margin-bottom:32px;">
        <span class="pill" style="background:var(--lav);color:var(--lav-deep);font-size:12px;font-weight:700;padding:4px 12px;border-radius:20px;text-transform:uppercase;">${copy.physicalLabel}</span>
        <h2 style="font-family:var(--serif);font-size:32px;color:var(--ink);margin:8px 0 6px;">${copy.physicalHeading}</h2>
        <p style="font-size:16px;color:var(--muted);margin:0;">${copy.physicalIntro}</p>
      </div>

      <div class="grid grid-3" style="display:grid;grid-template-columns:repeat(auto-fit, minmax(280px, 1fr));gap:28px;">
        ${merchProducts.map((p) => {
          const hasPriceRange = new Set((p.variants || []).map((variant) => variant.retailPrice)).size > 1;
          const priceLead = hasPriceRange ? copy.from : '';
          return `
          <article class="card product-card" style="background:var(--cream);border-radius:var(--radius);padding:32px;box-shadow:var(--shadow);border:1px solid var(--line);display:flex;flex-direction:column;justify-content:space-between;">
              <div style="border-radius:18px;overflow:hidden;margin-bottom:20px;background:var(--paper);border:1px solid var(--line);">
                <img src="${p.type === 'printify_merch' ? `/api/store/product-image/${p.id}` : p.image_url}" alt="${p.name}" width="600" height="400" style="width:100%;height:180px;object-fit:cover;">
              </div>
              <h3 style="font-family:var(--serif);font-size:22px;color:var(--ink);margin:0 0 6px;line-height:1.25;">${p.name}</h3>
              <p style="font-size:14px;font-weight:600;color:var(--deep);margin:0 0 12px;">${p.tagline}</p>
              <p style="font-size:14px;color:var(--muted);line-height:1.5;margin:0 0 16px;">${p.description}</p>
              <ul style="margin:0 0 20px;padding-left:18px;font-size:13px;line-height:1.6;color:var(--muted);">
                ${p.details.map(d => `<li>${d}</li>`).join('')}
              </ul>
            </div>

            <div style="border-top:1px solid var(--line);padding-top:18px;display:flex;justify-content:space-between;align-items:center;">
              <div>
                ${isSupportedMember ? `
                  <div style="font-size:22px;font-weight:700;color:var(--ink);">${priceLead}$${p.member_price.toFixed(2)}</div>
                  <span style="font-size:12px;color:var(--muted);text-decoration:line-through;">$${p.price.toFixed(2)}</span>
                ` : `
                  <div style="font-size:22px;font-weight:700;color:var(--ink);">${priceLead}$${p.price.toFixed(2)}</div>
                  <span style="font-size:12px;color:var(--deep);">$${p.member_price.toFixed(2)} with Supported</span>
                `}
              </div>
              ${pfyLive ? `
                <a href="${({"prod_mug":"https://buy.stripe.com/14A7sK3XV1oB4QJ8iU0kE0g","prod_journal":"https://buy.stripe.com/eVqfZgfGD4ANfvn9mY0kE0h","prod_tee":"https://buy.stripe.com/14A00icur7MZ5UNbv60kE0i","prod_candle":"https://buy.stripe.com/dRm8wOdyv2sF4QJ42E0kE0j","prod_crewneck":"https://buy.stripe.com/cNieVc3XVffrcjb42E0kE0k","prod_tote":"https://buy.stripe.com/4gM8wO7a7d7j3MF56I0kE0l","prod_wall_print":"https://buy.stripe.com/28E5kCgKHc3fcjb56I0kE0m","prod_pillow":"https://buy.stripe.com/5kQ3cu8eb7MZab3ar20kE0n"})[p.id] || ("/api/store/checkout?productId=" + encodeURIComponent(p.id))}" class="btn small">${copy.order}</a>
              ` : `
                <span style="font-size:13px;color:var(--muted);font-weight:600;">${locale === 'es' ? 'Próximamente' : (locale === 'pt-BR' ? 'Em breve' : 'Coming soon')}</span>
              `}
            </div>
          </article>
        `;
        }).join('')}
      </div>
    </div>
  </section>

  <!-- Checkout Modal -->
  <div id="checkout-modal" style="display:none;position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(28,46,38,0.5);backdrop-filter:blur(4px);z-index:1000;align-items:center;justify-content:center;padding:20px;">
    <div style="background:var(--paper);border-radius:var(--radius);max-width:500px;width:100%;padding:36px;box-shadow:var(--shadow);border:1px solid var(--line);position:relative;">
      <button onclick="document.getElementById('checkout-modal').style.display='none';" style="position:absolute;top:20px;right:20px;background:none;border:none;font-size:24px;cursor:pointer;color:var(--muted);">&times;</button>
      <h3 style="font-family:var(--serif);font-size:24px;color:var(--ink);margin:0 0 6px;" id="modal-product-name">Complete Order</h3>
      <div style="font-size:18px;font-weight:700;color:var(--deep);margin-bottom:20px;" id="modal-product-price">$0.00</div>

      <form id="checkout-form" method="POST" action="/api/store/checkout" style="display:flex;flex-direction:column;gap:14px;" onsubmit="handleCheckoutSubmit(event)">
        <input type="hidden" name="productId" id="modal-product-id">
        <input type="hidden" name="variantId" id="modal-variant-id">
        <input type="hidden" name="quantity" value="1">
        <input type="hidden" name="locale" value="${locale}">

        <div id="modal-variant-field" style="display:none;">
          <label for="modal-variant-title" style="font-size:13px;font-weight:600;display:block;margin-bottom:4px;">${copy.variant || 'Available finish or size'}</label>
          <select name="variantTitle" id="modal-variant-title" style="width:100%;border-radius:10px;border:1px solid var(--line);padding:10px;background:var(--cream);"></select>
        </div>

        <div style="border-top:1px solid var(--line);padding-top:16px;margin-top:10px;font-size:13px;color:var(--muted);">
          Payment and shipping details are entered on Stripe's secure checkout. Merch is printed and shipped by our print partner.
        </div>

        <div id="checkout-error" style="display:none;font-size:13px;color:var(--danger);margin-top:8px;"></div>

        <button type="submit" id="checkout-submit-btn" class="btn" style="width:100%;margin-top:8px;">
          Continue to checkout &rarr;
        </button>
      </form>
    </div>
  </div>

  <script>
    const variantChoices = ${JSON.stringify(Object.fromEntries(merchProducts.map((p) => [
      p.id,
      (p.variants || []).map((variant) => ({ id: variant.id, title: variant.title }))
    ])))};

    function openCheckoutModal(id, name, price) {
      document.getElementById('modal-product-id').value = id;
      document.getElementById('modal-product-name').textContent = name;
      document.getElementById('modal-product-price').textContent = '$' + Number(price).toFixed(2);
      const variantField = document.getElementById('modal-variant-field');
      const variantSelect = document.getElementById('modal-variant-title');
      const choices = variantChoices[id] || [];
      variantSelect.replaceChildren(...choices.map((choice) => {
        const option = document.createElement('option');
        option.value = choice.id;
        option.textContent = choice.title;
        return option;
      }));
      variantField.style.display = choices.length ? 'block' : 'none';
      document.getElementById('modal-variant-id').value = choices.length ? choices[0].id : '';
      const err = document.getElementById('checkout-error');
      if (err) err.style.display = 'none';
      const modal = document.getElementById('checkout-modal');
      modal.style.display = 'flex';
    }

    // Payment happens on Stripe Checkout, so there is nothing to fetch here: the
    // server prices the item and the browser follows the redirect.
    function handleCheckoutSubmit(event) {
      const pId = document.getElementById('modal-product-id').value;
      const choices = variantChoices[pId] || [];
      if (choices.length > 0) {
        const variantSelect = document.getElementById('modal-variant-title');
        const variantId = variantSelect.value || document.getElementById('modal-variant-id').value;
        if (!variantId) {
          event.preventDefault();
          const err = document.getElementById('checkout-error');
          err.textContent = 'Please select an option.';
          err.style.display = 'block';
          return;
        }
        document.getElementById('modal-variant-id').value = variantId;
      }
    }
  </script>
  `;

  return renderLayout({
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
    path: '/store',
    locale,
    user,
    bodyContent
  });
}

export function renderOrderSuccessPage({ order = null, locale = 'en', user = null }) {
  const t = ui[locale] || ui.en;
  const prefix = locale === 'en' ? '' : (locale === 'es' ? '/es' : '/pt-br');
  // Stripe can return the buyer before the order is recorded (e.g. a delayed
  // payment method). Render what is actually known
  // rather than crashing on a missing order.
  const confirmed = Boolean(order) && typeof order.total === 'number';

  const bodyContent = `
  <section class="section" style="padding:60px 0 80px;">
    <div class="container" style="max-width:720px;text-align:center;">
      <span class="pill" style="background:var(--mint);color:var(--deep);font-size:13px;font-weight:700;padding:6px 18px;border-radius:20px;margin-bottom:16px;display:inline-block;">
        Order Confirmed
      </span>
      <h1 style="font-family:var(--serif);font-size:38px;color:var(--ink);margin:0 0 12px;">
        Thank you for your order.
      </h1>
      <p style="font-size:16px;color:var(--muted);margin:0 auto 32px;line-height:1.6;">
        ${confirmed
          ? `Your order is recorded. Total: $${order.total.toFixed(2)}.`
          : 'Your payment has been received and is being confirmed — this page will update shortly, and your receipt is on its way by email.'}
      </p>

      ${confirmed && order.downloadLinks && order.downloadLinks.length > 0 ? `
        <div style="background:var(--paper);border-radius:var(--radius);padding:36px;box-shadow:var(--shadow);border:2px solid var(--sage);text-align:left;margin-bottom:32px;">
          <h3 style="font-family:var(--serif);font-size:22px;color:var(--ink);margin:0 0 16px;">Your Protected Digital Downloads</h3>
          <p style="font-size:14px;color:var(--muted);margin-bottom:20px;">
            Click below to access your high-resolution files. Links remain valid for 30 days:
          </p>
          <div style="display:flex;flex-direction:column;gap:12px;">
            ${order.downloadLinks.map(dl => `
              <a href="${dl.url}" class="btn" style="text-align:center;padding:12px 20px;">
                Download ${dl.title} &darr;
              </a>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <a class="btn text" href="${prefix}/store">&larr; Return to KindWell store</a>
    </div>
  </section>
  `;

  return renderLayout({
    title: 'Order Confirmation — KindWell',
    description: 'Your KindWell order has been processed.',
    path: '/store/order-success',
    locale,
    user,
    bodyContent
  });
}
