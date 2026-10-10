import { Router } from 'express';

const router = Router();

// Hostinger Ecommerce Storefront API (public, no auth needed)
const STOREFRONT_BASE = process.env.HOSTINGER_STOREFRONT_URL || 'https://api-ecommerce.hostinger.com/v2';
const SALES_CHANNEL_ID = process.env.HOSTINGER_SALES_CHANNEL_ID || '';

// List products from Hostinger store
router.get('/products', async (req, res) => {
  try {
    if (!SALES_CHANNEL_ID) return res.json({ products: [], message: 'Store not configured yet' });
    
    const resp = await fetch(`${STOREFRONT_BASE}/channels/${SALES_CHANNEL_ID}/products?limit=50`);
    const data = await resp.json();
    res.json({ products: data.data || [] });
  } catch (e) {
    res.status(500).json({ error: 'Store fetch failed' });
  }
});

// Product detail
router.get('/products/:id', async (req, res) => {
  try {
    if (!SALES_CHANNEL_ID) return res.status(404).json({ error: 'Store not configured' });
    const resp = await fetch(`${STOREFRONT_BASE}/channels/${SALES_CHANNEL_ID}/products/${req.params.id}`);
    const data = await resp.json();
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// Checkout - creates a checkout session on Hostinger
router.post('/checkout', async (req, res) => {
  try {
    if (!SALES_CHANNEL_ID) return res.status(400).json({ error: 'Store not configured' });
    
    const { items, email } = req.body; // items: [{ variant_id, quantity }]
    
    const resp = await fetch(`${STOREFRONT_BASE}/channels/${SALES_CHANNEL_ID}/checkout`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        items,
        email,
        success_url: `${process.env.APP_URL || 'http://localhost:3000'}/store?order=success`,
        cancel_url: `${process.env.APP_URL || 'http://localhost:3000'}/store?order=canceled`
      })
    });
    const data = await resp.json();
    res.json({ url: data.url });
  } catch (e) {
    res.status(500).json({ error: 'Checkout failed' });
  }
});

export default router;
