const express = require('express');
const session = require('express-session');
const path = require('path');
const bcrypt = require('bcryptjs');
const Stripe = require('stripe');
const db = require('./db');

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '..', 'views'));
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
  secret: process.env.SESSION_SECRET || 'kindwell-secret-2026',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 7 * 24 * 60 * 60 * 1000 }
}));

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_placeholder');

// Stripe Price IDs (set in .env)
const PRICE_IDS = {
  tier1: process.env.STRIPE_PRICE_TIER1 || 'price_tier5',
  tier2: process.env.STRIPE_PRICE_TIER2 || 'price_tier10',
  tier3: process.env.STRIPE_PRICE_TIER3 || 'price_tier15'
};

// Middleware: attach user to req
app.use((req, res, next) => {
  res.locals.user = req.session.user || null;
  res.locals.tier = req.session.tier || 0;
  next();
});

// Middleware: track page views
app.use((req, res, next) => {
  if (!req.path.startsWith('/api') && !req.path.startsWith('/css') && !req.path.startsWith('/js') && !req.path.startsWith('/images')) {
    db.prepare('INSERT INTO page_views (user_id, path) VALUES (?, ?)').run(req.session.user?.id || null, req.path);
  }
  next();
});

// ==================== PAGES ====================

app.get('/', (req, res) => res.render('home'));
app.get('/about', (req, res) => res.render('about'));
app.get('/remedies', (req, res) => {
  const remedies = [
    { name: "Arnica Montana", use: "Bruises, trauma, soreness", img: "arnica" },
    { name: "Aconitum Napellus", use: "Sudden fear, anxiety, shock", img: "aconite" },
    { name: "Arsenicum Album", use: "Restlessness, perfectionism, food sensitivity", img: "arsenic" },
    { name: "Gelsemium", use: "Dizziness, nervous weakness, anticipation fear", img: "gelsemium" },
    { name: "Ignatia", use: "Grief, emotional upset, sighing", img: "ignatia" },
    { name: "Lachesis", use: "Hot flashes, talkativeness, jealousy", img: "lachesis" },
    { name: "Natrum Muriaticum", use: "Grief retention, shyness, sun sensitivity", img: "natmur" },
    { name: "Pulsilla", use: "Restlessness, flushes, mood swings", img: "pulsilla" },
    { name: "Silicea", use: "Weakness, sensitivity, abscesses", img: "silicea" },
    { name: "Staphysagria", use: "Resentment, suppressed anger, indignation", img: "staph" }
  ];
  res.render('remedies', { remedies });
});

app.get('/wellbeing', (req, res) => res.render('wellbeing'));
app.get('/stress-relief', (req, res) => res.render('stress-relief'));

app.get('/coaches', (req, res) => {
  const coaches = [
    { name: "Sarah Mitchell", specialty: "Homeopathic Counseling & Stress Management", status: "Not accepting new clients" },
    { name: "David Chen", specialty: "Natural Remedies & Wellness Coaching", status: "Not accepting new clients" },
    { name: "Emily Hartwell", specialty: "Mind-Body Integration & Breathwork", status: "Not accepting new clients" },
    { name: "James Redhawk", specialty: "Black Hills Herbal Traditions & Grounding", status: "Not accepting new clients" }
  ];
  res.render('coaches', { coaches });
});

app.get('/store', (req, res) => res.render('store'));
app.get('/subscribe', (req, res) => {
  if (req.session.user) {
    return res.redirect('/dashboard');
  }
  res.render('subscribe');
});
app.get('/legal', (req, res) => res.render('legal'));
app.get('/refund', (req, res) => res.render('refund'));
app.get('/privacy', (req, res) => res.render('privacy'));
app.get('/terms', (req, res) => res.render('terms'));
app.get('/contact', (req, res) => res.render('contact'));

// ==================== AUTH ====================

app.get('/login', (req, res) => {
  if (req.session.user) return res.redirect('/dashboard');
  res.render('login', { error: null });
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = db.prepare('SELECT * FROM users WHERE email = ?').get(email);
  
  if (!user || !bcrypt.compareSync(password, user.password_hash)) {
    db.prepare('INSERT INTO login_events (user_id, ip_address, success) VALUES (?, ?, 0)').run(user?.id || 0, req.ip);
    return res.render('login', { error: 'Invalid email or password' });
  }

  req.session.user = { id: user.id, email: user.email, name: user.name };
  req.session.tier = user.subscription_tier;
  db.prepare('UPDATE users SET last_login = CURRENT_TIMESTAMP WHERE id = ?').run(user.id);
  db.prepare('INSERT INTO login_events (user_id, ip_address, success) VALUES (?, ?, 1)').run(user.id, req.ip);
  res.redirect('/dashboard');
});

app.get('/register', (req, res) => {
  if (req.session.user) return res.redirect('/dashboard');
  res.render('register', { error: null });
});

app.post('/register', (req, res) => {
  const { name, email, password } = req.body;
  
  try {
    const hash = bcrypt.hashSync(password, 10);
    db.prepare('INSERT INTO users (name, email, password_hash) VALUES (?, ?, ?)').run(name, email, hash);
    res.redirect('/login');
  } catch (e) {
    if (e.message.includes('UNIQUE')) {
      return res.render('register', { error: 'Email already registered' });
    }
    res.render('register', { error: 'Registration failed. Please try again.' });
  }
});

app.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});

// ==================== DASHBOARD ====================

app.get('/dashboard', (req, res) => {
  if (!req.session.user) return res.redirect('/login');
  const user = db.prepare('SELECT * FROM users WHERE id = ?').get(req.session.user.id);
  const recentLogins = db.prepare(`
    SELECT le.* FROM login_events le 
    WHERE le.user_id = ? ORDER BY le.created_at DESC LIMIT 10
  `).all(req.session.user.id);
  res.render('dashboard', { user, recentLogins });
});

// ==================== MESSAGE BOARD ====================

app.get('/board', (req, res) => {
  if (!req.session.user) return res.redirect('/login');
  const tier = req.session.tier || 0;
  
  // Users can see messages up to their tier level
  const visibleLevel = tier + 1; // tier 0 sees level 1, tier 1 sees levels 1-2, etc.
  const messages = db.prepare(`
    SELECT m.*, u.name as author, 
      (SELECT COUNT(*) FROM replies WHERE message_id = m.id) as reply_count
    FROM messages m 
    JOIN users u ON m.user_id = u.id 
    WHERE m.tier_level <= ?
    ORDER BY m.created_at DESC LIMIT 50
  `).all(visibleLevel);

  // Can post at: tier 1 ($5) = level 2, tier 2 ($10) = level 3, tier 3 ($15) = level 4
  const canPost = tier >= 1;
  const postLevel = Math.min(tier + 1, 4);

  res.render('board', { messages, tier, canPost, postLevel, visibleLevel });
});

app.post('/board/post', (req, res) => {
  if (!req.session.user || req.session.tier < 1) return res.redirect('/subscribe');
  const { title, body } = req.body;
  const tier = req.session.tier;
  const level = Math.min(tier + 1, 4);
  
  db.prepare('INSERT INTO messages (user_id, title, body, tier_level) VALUES (?, ?, ?, ?)').run(
    req.session.user.id, title, body, level
  );
  res.redirect('/board');
});

app.get('/board/:id', (req, res) => {
  if (!req.session.user) return res.redirect('/login');
  const tier = req.session.tier || 0;
  const visibleLevel = tier + 1;
  
  const message = db.prepare(`
    SELECT m.*, u.name as author, u.id as author_id 
    FROM messages m JOIN users u ON m.user_id = u.id 
    WHERE m.id = ? AND m.tier_level <= ?
  `).get(req.params.id, visibleLevel);
  
  if (!message) return res.redirect('/board');
  
  const replies = db.prepare(`
    SELECT r.*, u.name as author FROM replies r 
    JOIN users u ON r.user_id = u.id 
    WHERE r.message_id = ? ORDER BY r.created_at ASC
  `).all(req.params.id);

  const canReply = tier >= 2; // $10+ can reply
  res.render('board-post', { message, replies, tier, canReply });
});

app.post('/board/:id/reply', (req, res) => {
  if (!req.session.user || req.session.tier < 2) return res.redirect('/subscribe');
  const { body } = req.body;
  db.prepare('INSERT INTO replies (message_id, user_id, body) VALUES (?, ?, ?)').run(
    req.params.id, req.session.user.id, body
  );
  res.redirect(`/board/${req.params.id}`);
});

// ==================== STRIPE ====================

app.post('/api/stripe/checkout', async (req, res) => {
  try {
    const { tier } = req.body; // 1, 2, or 3
    const priceId = [null, PRICE_IDS.tier1, PRICE_IDS.tier2, PRICE_IDS.tier3][tier];
    
    if (!priceId) return res.status(400).json({ error: 'Invalid tier' });

    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      customer_email: req.session.user?.email || req.body.email,
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${req.protocol}://${req.get('host')}/dashboard?sub=success`,
      cancel_url: `${req.protocol}://${req.get('host')}/subscribe?canceled=true`,
      metadata: { user_id: req.session.user?.id || '0', tier: String(tier) },
      client_reference_id: req.session.user?.email
    });

    res.json({ url: session.url });
  } catch (e) {
    console.error('Stripe checkout error:', e.message);
    res.status(500).json({ error: 'Payment setup failed. Please try again.' });
  }
});

app.post('/api/stripe/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
  let event;
  try {
    const sig = req.headers['stripe-signature'];
    event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET || 'whsec_placeholder');
  } catch (e) {
    return res.status(400).send(`Webhook Error: ${e.message}`);
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    const tier = parseInt(session.metadata?.tier || '1');
    const email = session.customer_email || session.client_reference_id;
    
    const user = db.prepare('SELECT * FROM users WHERE email = ?').get(email);
    if (user) {
      db.prepare('UPDATE users SET subscription_tier = ?, stripe_sub_id = ? WHERE id = ?').run(
        tier, session.subscription, user.id
      );
    }
  }

  if (event.type === 'customer.subscription.deleted') {
    const sub = event.data.object;
    db.prepare('UPDATE users SET subscription_tier = 0, stripe_sub_id = NULL WHERE stripe_sub_id = ?').run(sub.id);
  }

  res.json({ received: true });
});

// ==================== START ====================

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Kindwell running on port ${PORT}`));
