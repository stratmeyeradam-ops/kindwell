// src/views/admin-orders.js
// /admin/orders — paid orders with their Printify hand-off status and a
// "Send to Printify" button for any that failed or were never sent.

import { renderLayout } from './layout.js';

const esc = (v) => String(v ?? '').replace(/[&<>"']/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));

const STATUS_LABEL = {
  sent: ['Sent to production', 'var(--mint)'],
  created: ['In Printify, awaiting approval', '#fff3d6'],
  failed: ['Failed — will retry', '#f8d9dc'],
  not_sent: ['Not sent (Printify not connected)', '#f8d9dc']
};

export function renderAdminOrdersPage({ orders = [], items = {}, user, flash = '' }) {
  const rows = orders.map((o) => {
    const merch = (items[o.id] || []).filter((i) => i.type === 'printify_merch');
    const digital = (items[o.id] || []).filter((i) => i.type === 'digital');
    const [label, bg] = STATUS_LABEL[o.printify_status] || (merch.length ? ['Pending', 'var(--stone)'] : ['Digital only', 'var(--stone)']);
    const canRetry = merch.length && o.printify_status !== 'sent' && o.printify_status !== 'created';
    const ship = o.shipping_json ? JSON.parse(o.shipping_json) : null;
    return `
      <tr>
        <td><strong>${esc(o.created_at?.slice(0, 16).replace('T', ' '))}</strong><br><span class="fine">${esc(o.id)}</span></td>
        <td>${esc(o.customer_name)}<br><span class="fine">${esc(o.customer_email)}</span>${ship ? `<br><span class="fine">${esc(ship.city)}, ${esc(ship.state)} ${esc(ship.postalCode)}</span>` : ''}</td>
        <td>${[...merch, ...digital].map((i) => `${esc(i.quantity)} × ${esc(i.name || i.product_id)}${i.variant_title && i.variant_title !== 'Standard' ? ` <span class="fine">(${esc(i.variant_title)})</span>` : ''}`).join('<br>')}</td>
        <td>$${Number(o.total || 0).toFixed(2)}<br><span class="fine">${esc(o.payment_provider)}</span></td>
        <td>
          <span class="status" style="background:${bg};">${esc(label)}</span>
          ${o.printify_order_id ? `<br><span class="fine">Printify ${esc(o.printify_order_id)}</span>` : ''}
          ${o.printify_error ? `<br><span class="fine" style="color:var(--danger);">${esc(o.printify_error)}</span>` : ''}
          ${o.printify_attempts ? `<br><span class="fine">${esc(o.printify_attempts)} attempt(s)</span>` : ''}
        </td>
        <td>${canRetry ? `
          <form method="POST" action="/admin/orders/${encodeURIComponent(o.id)}/printify">
            <button class="btn small" type="submit">Send to Printify</button>
          </form>` : ''}</td>
      </tr>`;
  }).join('');

  const bodyContent = `
  <section class="section" style="padding:48px 0 80px;">
    <div class="container">
      <p class="eyebrow">Admin</p>
      <h1 style="font-size:clamp(34px,4vw,48px);margin:8px 0 12px;">Orders</h1>
      <p class="muted" style="max-width:720px;">Every paid store order, newest first. Merch that could not reach Printify is retried automatically every 10 minutes (up to 6 tries); after that, use <strong>Send to Printify</strong>.</p>
      ${flash ? `<div class="notice" style="margin:20px 0;">${esc(flash)}</div>` : ''}
      ${orders.length ? `
      <div style="overflow:auto;margin-top:24px;">
        <table class="admin-table">
          <thead><tr><th>When</th><th>Customer</th><th>Items</th><th>Total</th><th>Printify</th><th></th></tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </div>` : '<div class="card empty" style="margin-top:24px;">No orders yet.</div>'}
    </div>
  </section>`;

  return renderLayout({ title: 'Orders — KindWell admin', description: 'KindWell order admin', path: '/admin/orders', locale: 'en', user, bodyContent, noindex: true });
}
