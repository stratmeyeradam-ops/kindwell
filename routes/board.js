import { Router } from 'express';
import db from '../db.js';

const router = Router();

const TIER_LEVELS = { free: 1, bronze: 2, silver: 3, gold: 3 };
const WRITE_LEVELS = { free: 0, bronze: 0, silver: 2, gold: 3 };

// List posts (filtered by user tier)
router.get('/', async (req, res) => {
  try {
    const userLevel = TIER_LEVELS[req.user?.role] || 1;
    const [posts] = await db.query(
      'SELECT p.id, p.title, p.body, p.level, p.created_at, u.name as author FROM posts p LEFT JOIN users u ON p.author_id = u.id WHERE p.level <= ? ORDER BY p.created_at DESC LIMIT 100',
      [userLevel]
    );
    res.json({ posts });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// Create post
router.post('/', async (req, res) => {
  try {
    if (!req.user) return res.status(401).json({ error: 'Must be logged in' });
    const writeLevel = WRITE_LEVELS[req.user.role] || 0;
    if (writeLevel === 0) return res.status(403).json({ error: 'Your tier does not allow posting' });
    const { title, body, level } = req.body;
    if (!title || !body) return res.status(400).json({ error: 'Title and body required' });
    const postLevel = Math.min(Number(level) || 1, writeLevel);
    await db.query('INSERT INTO posts (title, body, level, author_id) VALUES (?, ?, ?, ?)', [title, body, postLevel, req.user.id]);
    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// Get single post
router.get('/:id', async (req, res) => {
  try {
    const userLevel = TIER_LEVELS[req.user?.role] || 1;
    const [rows] = await db.query(
      'SELECT p.*, u.name as author FROM posts p LEFT JOIN users u ON p.author_id = u.id WHERE p.id = ? AND p.level <= ?',
      [req.params.id, userLevel]
    );
    if (!rows.length) return res.status(404).json({ error: 'Not found or insufficient access' });
    res.json({ post: rows[0] });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

export default router;
