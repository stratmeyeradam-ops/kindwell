import express from 'express';
import session from 'express-session';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import db from './db.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: process.env.SESSION_SECRET || 'kindwell-black-hills-secret',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 }
}));

// Load user on each request
app.use(async (req, res, next) => {
  req.user = null;
  if (req.session.userId) {
    try {
      const [rows] = await db.query('SELECT id, email, name, role, subscription_tier, stripe_sub_id FROM users WHERE id = ?', [req.session.userId]);
      req.user = rows[0] || null;
    } catch (e) { /* db not ready yet */ }
  }
  next();
});

// Routes
import authRoutes from './routes/auth.js';
import pageRoutes from './routes/pages.js';
import boardRoutes from './routes/board.js';
import stripeRoutes from './routes/stripe.js';
import storeRoutes from './routes/store.js';

app.use('/api/auth', authRoutes);
app.use('/api/stripe', stripeRoutes);
app.use('/api/board', boardRoutes);
app.use('/api/store', storeRoutes);
app.use('/', pageRoutes);

// Access logging
app.use((req, res, next) => {
  if (req.session?.userId && !req.url.startsWith('/api/')) {
    db.query('INSERT INTO access_log (user_id, page, ip) VALUES (?, ?, ?)', 
      [req.session.userId, req.url, req.ip]).catch(() => {});
  }
});

app.listen(PORT, () => {
  console.log(`Kindwell running on port ${PORT}`);
  console.log(`URL: ${process.env.APP_URL || 'http://localhost:' + PORT}`);
});

export default app;
