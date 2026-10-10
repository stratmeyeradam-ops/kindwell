import { Router } from 'express';
import bcrypt from 'bcryptjs';
import db from '../db.js';

const router = Router();

// Register
router.post('/register', async (req, res) => {
  try {
    const { email, password, name } = req.body;
    if (!email || !password) return res.status(400).json({ error: 'Email and password required' });
    
    const hash = await bcrypt.hash(password, 12);
    const [existing] = await db.query('SELECT id FROM users WHERE email = ?', [email]);
    if (existing.length) return res.status(409).json({ error: 'Email already registered' });
    
    await db.query('INSERT INTO users (email, password_hash, name, role) VALUES (?, ?, ?, ?)', 
      [email, hash, name || email.split('@')[0], 'free']);
    
    const [rows] = await db.query('SELECT id FROM users WHERE email = ?', [email]);
    req.session.userId = rows[0].id;
    res.json({ ok: true, userId: rows[0].id });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
    if (!rows.length) return res.status(401).json({ error: 'Invalid credentials' });
    
    const user = rows[0];
    const valid = await bcrypt.compare(password, user.password_hash);
    if (!valid) return res.status(401).json({ error: 'Invalid credentials' });
    
    req.session.userId = user.id;
    res.json({ ok: true, name: user.name, role: user.role });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// Logout
router.post('/logout', (req, res) => {
  req.session.destroy(() => res.json({ ok: true }));
});

// Check status
router.get('/status', (req, res) => {
  if (!req.user) return res.json({ logged: false });
  res.json({ logged: true, name: req.user.name, role: req.user.role, tier: req.user.subscription_tier });
});

export default router;
