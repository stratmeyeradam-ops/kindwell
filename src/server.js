const express = require('express');
const session = require('express-session');
const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const Stripe = require('stripe');
const db = require('./db');

// Resolve paths relative to this file (works everywhere)
const ROOT = path.join(__dirname, '..');
const VIEWS = path.join(ROOT, 'views');
const PUBLIC = path.join(ROOT, 'public');

const app = express();
app.set('view engine', 'ejs');
app.set('views', VIEWS);
app.use(express.static(PUBLIC));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
  secret: process.env.SESSION_SECRET || 'kindwell-secret-2026',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 7 * 24 * 60 * 60 * 1000 }
}));

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_placeholder');
const PRICE_IDS = {
  tier1: process.env.STRIPE_PRICE_TIER1 || 'price_tier5',
  tier2: process.env.STRIPE_PRICE_TIER2 || 'price_tier10',
  tier3: process.env.STRIPE_PRICE_TIER3 || 'price_tier15'
};

// Health check (for debugging)
app.get('/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    cwd: process.cwd(),
    views: VIEWS,
    viewsExist: fs.existsSync(VIEWS),
    publicExists: fs.existsSync(PUBLIC),
    db: 'connected'
  });
});

app.use((req, res, next) => {
  res.locals.user = req.session.user || null;
  res.locals.tier = req.session.tier || 0;
  next();
});

// Pages
app.get('/', (req, res) => res.render('home'));
app.get('/about', (req, res) => res.render('about'));
app.get('/remedies', (req, res) => {
  const remedies = [
    { name: "Arnica Montana", use: "Bruises, trauma, soreness" },
    { name: "Aconitum Napellus", use: "Sudden fear, anxiety, shock" },
    { name: "Arsenicum Album", use: "Restlessness, perfectionism, food sensitivity" },
    { name: "Gelsemium", use: "Dizziness, nervous weakness, anticipation fear" },
    { name: "Ignatia", use: "Grief, emotional upset, sighing" },
    { name: "Lachesis", use: "Hot flashes, talkativeness, jealousy" },
    { name: "Natrum Muriaticum", use: "Grief retention, shyness, sun sensitivity" },
    { name: "Pulsilla", use: "Restlessness, flushes, mood swings" },
    { name: "Silicea", use: "Weakness, sensitivity, abscesses" },
    { name: "Staphysagria", use: "Resentment, suppressed anger, indignation" }
  ];
  res.render('remedies', { remedies });
});
app.get('/wellbeing', (req, res) => res.render('wellbeing'));
app.get('/stress-relief', (req, res) => res.render('stress-relief'));
app.get('/coaches', (req, res) => {
  const coaches = [
    { name: "Sarah Mitchell", specialty: "Homeopathic Counseling & Stress Management" },
    { name: "David Chen", specialty: "Natural Remedies & Wellness Coaching" },
    { name: "Emily Hartwell", specialty: "Mind-Body Integration & Breathwork" },
    { name: "James Redhawk", specialty: "Black Hills Herbal Traditions & Grounding" }
  ];
  res.render('coaches', { coaches });
});
app.get('/store', (req, res) => res.render('store'));
app.get('/subscribe', (req, res) => { if (req.session.user) return res.redirect('/dashboard'); res.render('subscribe'); });
app.get('/legal', (req, res) => res.render('legal'));
app.get('/refund', (req, res) => res.render('refund'));
app.get('/privacy', (req, res) => res.render('privacy'));
app.get('/terms', (req, res) => res.render('terms'));
app.get('/contact', (req, res) => res.render('contact'));

// Auth
app.get('/login', (req, res) => { if (req.session.user) return res.redirect('/dashboard'); res.render('login', { error: null }); });
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
app.get('/register', (req, res) => { if (req.session.user) return res.redirect('/dashboard'); res.render('register', { error: null }); });
app.post('/register', (req, res) => {
  const { name, email, password } = req.body;
  try {
    const hash = bcrypt.hashSync(password, 10);
    db.prepare('INSERT INTO users (name, email, password_hash) VALUES (?, ?, ?)').run(name, email, hash);
    res.redirect('/login');
  } catch (e) {
    res.render('register', { error: e.message.includes('UNIQUE') ? 'Email already registered' : 'Registration failed.' });
  }
});
app.get('/logout', (req, res) => { req.session.destroy(); res.redirect('/'); });

// Dashboard
app.get('/dashboard', (req, res) => {
  if (!req.session.user) return res.redirect('/login');
  const user = db.prepare('SELECT * FROM users WHERE id = ?').get(req.session.user.id);
  const recentLogins = db.prepare('SELECT * FROM login_events WHERE user_id = ? ORDER BY created_at DESC LIMIT 10').all(req.session.user.id);
  res.render('dashboard', { user, recentLogins });
});

// Board
app.get('/board', (req, res) => {
  if (!req.session.user) return res.redirect('/login');
  const tier = req.session.tier || 0;
  const visibleLevel = tier + 1;
  const messages = db.prepare('SELECT m.*, u.name as author, (SELECT COUNT(*) FROM replies WHERE message_id = m.id) as reply_count FROM messages m JOIN users u ON m.user_id = u.id WHERE m.tier_level <= ? ORDER BY m.created_at DESC LIMIT 50').all(visibleLevel);
  res.render('board', { messages, tier, canPost: tier >= 1, visibleLevel });
});
app.post('/board/post', (req, res) => {
  if (!req.session.user || req.session.tier < 1) return res.redirect('/subscribe');
  db.prepare('INSERT INTO messages (user_id, title, body, tier_level) VALUES (?, ?, ?, ?)').run(req.session.user.id, req.body.title, req.body.body, Math.min(req.session.tier + 1, 4));
  res.redirect('/board');
});
app.get('/board/:id', (req, res) => {
  if (!req.session.user) return res.redirect('/login');
  const tier = req.session.tier || 0;
  const message = db.prepare('SELECT m.*, u.name as author FROM messages m JOIN users u ON m.user_id = u.id WHERE m.id = ? AND m.tier_level <= ?').get(req.params.id, tier + 1);
  if (!message) return res.redirect('/board');
  const replies = db.prepare('SELECT r.*, u.name as author FROM replies r JOIN users u ON r.user_id = u.id WHERE r.message_id = ? ORDER BY r.created_at ASC').all(req.params.id);
  res.render('board-post', { message, replies, tier, canReply: tier >= 2 });
});
app.post('/board/:id/reply', (req, res) => {
  if (!req.session.user || req.session.tier < 2) return res.redirect('/subscribe');
  db.prepare('INSERT INTO replies (message_id, user_id, body) VALUES (?, ?, ?)').run(req.params.id, req.session.user.id, req.body.body);
  res.redirect(`/board/${req.params.id}`);
});

// Stripe
app.post('/api/stripe/checkout', async (req, res) => {
  try {
    const priceId = [null, PRICE_IDS.tier1, PRICE_IDS.tier2, PRICE_IDS.tier3][req.body.tier];
    if (!priceId) return res.status(400).json({ error: 'Invalid tier' });
    const sess = await stripe.checkout.sessions.create({
      mode: 'subscription',
      customer_email: req.session.user?.email || req.body.email,
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${req.protocol}://${req.get('host')}/dashboard?sub=success`,
      cancel_url: `${req.protocol}://${req.get('host')}/subscribe?canceled=true`,
      metadata: { user_id: String(req.session.user?.id || '0'), tier: String(req.body.tier) }
    });
    res.json({ url: sess.url });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/api/stripe/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
  let event;
  try { event = stripe.webhooks.constructEvent(req.body, req.headers['stripe-signature'], process.env.STRIPE_WEBHOOK_SECRET || 'whsec_x'); }
  catch (e) { return res.status(400).send('Webhook Error'); }
  if (event.type === 'checkout.session.completed') {
    const s = event.data.object;
    const user = db.prepare('SELECT * FROM users WHERE email = ?').get(s.customer_email);
    if (user) db.prepare('UPDATE users SET subscription_tier = ?, stripe_sub_id = ? WHERE id = ?').run(parseInt(s.metadata?.tier||'1'), s.subscription, user.id);
  }
  if (event.type === 'customer.subscription.deleted') {
    db.prepare('UPDATE users SET subscription_tier = 0 WHERE stripe_sub_id = ?').run(event.data.object.id);
  }
  res.json({ received: true });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('ERROR:', err.message, err.stack?.split('\n')[1]);
  res.status(500).send(`<pre>${err.message}</pre>`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Kindwell on :${PORT} | views: ${VIEWS} | exists: ${fs.existsSync(VIEWS)}`));
