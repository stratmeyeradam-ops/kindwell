import { Router } from 'express';
import db from '../db.js';
const router = Router();

function layout(title, body, user) {
  const nav = '<nav class="navbar"><div class="nav-inner"><a href="/" class="logo">Kindwell</a><div class="nav-links"><a href="/">Home</a><a href="/remedies">Remedies</a><a href="/wellbeing">Well-Being</a><a href="/coaches">Coaches</a><a href="/board">Community</a><a href="/store">Store</a><a href="/subscribe" class="nav-cta">Subscribe</a>' + (user ? '<a href="/account">Account</a>' : '<a href="/login">Sign In</a>') + '</div></div></nav>';
  const footer = '<footer class="footer"><div class="footer-inner"><div><h3>Kindwell</h3><p>Natural homeopathic well-being in the Black Hills</p></div><div><h4>Pages</h4><a href="/legal">Legal</a><br/><a href="/refund">Refund Policy</a><br/><a href="/about">About</a></div><div><h4>Contact</h4><p>Black Hills, South Dakota</p><p>hello@kindwell.org</p></div></div><p class="copyright">&copy; 2026 Kindwell. All rights reserved.</p></footer>';
  return '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width, initial-scale=1.0"/><title>' + title + ' | Kindwell</title><link rel="stylesheet" href="/css/style.css"/></head><body>' + nav + '<main class="main-content">' + body + '</main>' + footer + '<script src="/js/main.js"></script></body></html>';
}

router.get('/', (req, res) => {
  const c = '<section class="hero"><div class="hero-content"><h1>Natural Well-Being in the Black Hills</h1><p>Homeopathic remedies, stress relief, and community support rooted in nature.</p><div class="hero-actions"><a href="/subscribe" class="btn btn-primary">Start Your Journey</a><a href="/remedies" class="btn btn-secondary">Explore Remedies</a></div></div></section><section class="features"><div class="feature-card"><div class="feature-icon">&#x1F33F;</div><h3>Homeopathic Remedies</h3><p>Gentle, natural remedies for body and mind.</p></div><div class="feature-card"><div class="feature-icon">&#x1F9D8;</div><h3>Stress Relief</h3><p>Evidence-informed techniques for managing stress and daily overwhelm.</p></div><div class="feature-card"><div class="feature-icon">&#x1F465;</div><h3>Community Board</h3><p>Connect with others on the wellness journey.</p></div></section>';
  res.send(layout('Home', c, req.user));
});

router.get('/remedies', (req, res) => {
  const c = '<section class="page-header"><h1>Homeopathic Remedies</h1><p>Gentle natural healing for body and mind</p></section><div class="content-grid"><article class="info-card"><h3>Arsenicum Album</h3><p>For anxiety, restlessness, and digestive upset. Often indicated when worry is accompanied by a need for order and cleanliness.</p></article><article class="info-card"><h3>Arnica Montana</h3><p>The classic remedy for physical trauma, bruising, and recovery after injury or surgery.</p></article><article class="info-card"><h3>Gelsemium</h3><p>For nervous exhaustion, dread before events, and weakness with trembling. The "paralysis" remedy.</p></article><article class="info-card"><h3>Lachesis</h3><p>For hot flashes, talkativeness, and intense emotions. Often used in menopause.</p></article><article class="info-card"><h3>Ignatia</h3><p>The grief remedy. For emotional shock, sighing, and lump-in-throat after loss.</p></article><article class="info-card"><h3>Pulmonaria</h3><p>For respiratory support, cough with relief from cold air, and general lung comfort.</p></article></div>';
  res.send(layout('Remedies', c, req.user));
});

router.get('/wellbeing', (req, res) => {
  const c = '<section class="page-header"><h1>Well-Being & Stress Relief</h1><p>Practical approaches to everyday wellness</p></section><div class="content-grid"><article class="info-card"><h3>Breathing for Balance</h3><p>Diaphragmatic breathing to reduce acute stress in under two minutes.</p></article><article class="info-card"><h3>Nature Immersion</h3><p>The Black Hills offer restorative landscapes. Time in pine forests lowers cortisol significantly.</p></article><article class="info-card"><h3>Sleep Hygiene</h3><p>Consistent rhythm, reduced evening stimulation, gentle homeopathic support for restlessness.</p></article><article class="info-card"><h3>Nutrition & Gentleness</h3><p>Whole foods, adequate hydration, reducing inflammatory triggers as part of broader wellness.</p></article><article class="info-card"><h3>Movement as Medicine</h3><p>Walking in nature, gentle stretching, and yoga as powerful anti-stress tools.</p></article><article class="info-card"><h3>Mindful Connection</h3><p>Social connection is one of the strongest predictors of long-term health.</p></article></div>';
  res.send(layout('Well-Being', c, req.user));
});

router.get('/coaches', (req, res) => {
  const c = '<section class="page-header"><h1>Our Coaches</h1><p>Experienced guides in natural wellness</p></section><div class="notice-bar">Our coaches are not currently accepting new clients. Join the community board to stay informed.</div><div class="coaches-grid"><div class="coach-card"><div class="coach-avatar">&#x1F332;</div><h3>Sarah M.</h3><p class="coach-specialty">Stress & Anxiety Coaching</p><p class="coach-status">Not accepting new clients</p></div><div class="coach-card"><div class="coach-avatar">&#x1F33F;</div><h3>David K.</h3><p class="coach-specialty">Holistic Wellness & Nutrition</p><p class="coach-status">Not accepting new clients</p></div><div class="coach-card"><div class="coach-avatar">&#x1F9D8;</div><h3>Emily R.</h3><p class="coach-specialty">Mindfulness & Sleep Coaching</p><p class="coach-status">Not accepting new clients</p></div></div>';
  res.send(layout('Coaches', c, req.user));
});

router.get('/board', (req, res) => {
  const c = '<section class="page-header"><h1>Community Board</h1><p>Connect, share, and grow together</p></section><div id="board-app"><div class="board-controls"><button class="btn btn-primary" id="new-post-btn">New Post</button><span class="tier-badge" id="tier-display"></span></div><div id="post-form" class="post-form hidden"><input type="text" id="post-title" placeholder="Title"/><textarea id="post-body" rows="4" placeholder="Share your thoughts..."></textarea><select id="post-level"><option value="1">Level 1 - General</option><option value="2">Level 2 - Deeper</option><option value="3">Level 3 - Inner Circle</option></select><button class="btn btn-primary" id="submit-post">Post</button></div><div id="posts-list" class="posts-list"><p>Loading posts...</p></div></div>';
  res.send(layout('Community', c, req.user));
});

router.get('/store', (req, res) => {
  const c = '<section class="page-header"><h1>Kindwell Store</h1><p>Natural homeopathic products, sourced with care</p></section><div id="store-app"><div id="products-grid" class="products-grid"><p>Loading products...</p></div></div>';
  res.send(layout('Store', c, req.user));
});

router.get('/subscribe', (req, res) => {
  const cancelled = req.query.canceled ? '<div class="notice-bar">Your subscription was canceled. Try again anytime.</div>' : '';
  const c = cancelled + '<section class="page-header"><h1>Subscribe</h1><p>Unlock deeper content and community access</p></section><div class="pricing-grid"><div class="price-card"><h3>Bronze</h3><div class="price">$5<span>/mo</span></div><ul><li>&#10003; Additional remedy info</li><li>&#10003; View Level 2 board posts</li><li>&#10003; Community membership</li></ul><button class="btn btn-primary subscribe-btn" data-tier="bronze">Choose Bronze</button></div><div class="price-card featured"><div class="badge">Most Popular</div><h3>Silver</h3><div class="price">$10<span>/mo</span></div><ul><li>&#10003; Everything in Bronze</li><li>&#10003; Full information access</li><li>&#10003; Write to Level 2 board</li><li>&#10003; Priority support</li></ul><button class="btn btn-primary subscribe-btn" data-tier="silver">Choose Silver</button></div><div class="price-card"><h3>Gold</h3><div class="price">$15<span>/mo</span></div><ul><li>&#10003; Everything in Silver</li><li>&#10003; Full writable access</li><li>&#10003; Inner Circle participation</li><li>&#10003; Direct coach Q&A</li></ul><button class="btn btn-primary subscribe-btn" data-tier="gold">Choose Gold</button></div></div>';
  res.send(layout('Subscribe', c, req.user));
});

router.get('/legal', (req, res) => {
  const c = '<section class="page-header"><h1>Legal</h1></section><div class="legal-content"><h2>Terms of Service</h2><p>By accessing kindwell.org you agree to use this site for informational and wellness purposes only. Content is not a substitute for professional medical advice, diagnosis, or treatment.</p><h2>Privacy Policy</h2><p>We collect the minimum data necessary: email, name, and subscription status. We do not sell your data.</p><h2>Homeopathic Disclaimer</h2><p>Always consult a qualified healthcare provider before beginning any new remedy protocol, especially if pregnant, nursing, or taking medications.</p><h2>Cookie Policy</h2><p>We use session cookies for login state only. No third-party tracking.</p></div>';
  res.send(layout('Legal', c, req.user));
});

router.get('/refund', (req, res) => {
  const c = '<section class="page-header"><h1>Refund Policy</h1></section><div class="legal-content"><p>We want you to feel confident in your subscription.</p><h2>30-Day Guarantee</h2><p>If not satisfied within the first 30 days, contact hello@kindwell.org for a full refund - no questions asked.</p><h2>Ongoing Subscriptions</h2><p>Cancel anytime from your account. Active until end of billing period. No partial refunds.</p><h2>Store Purchases</h2><p>Return within 14 days in original condition for full refund. Contact us to arrange return shipping.</p><h2>Contact</h2><p><strong>hello@kindwell.org</strong></p></div>';
  res.send(layout('Refund Policy', c, req.user));
});

router.get('/about', (req, res) => {
  const c = '<section class="page-header"><h1>About Kindwell</h1></section><div class="legal-content"><p>Kindwell is a natural well-being community rooted in the Black Hills of South Dakota. We believe in gentle, informed approaches to health - homeopathic remedies, stress relief techniques, and the healing power of community.</p><p>Our name reflects our core value: kindness. Kindness to yourself, to your body, and to the people around you.</p><p>We are not a medical practice. We are a space for learning, connection, and natural self-care in one of the most beautiful landscapes in America.</p></div>';
  res.send(layout('About', c, req.user));
});

router.get('/login', (req, res) => {
  const c = '<section class="auth-section"><h1>Welcome Back</h1><form id="login-form" class="auth-form"><input type="email" name="email" placeholder="Email" required/><input type="password" name="password" placeholder="Password" required/><button type="submit" class="btn btn-primary">Sign In</button></form><p>No account? <a href="/register">Register</a></p></section>';
  res.send(layout('Sign In', c, req.user));
});

router.get('/register', (req, res) => {
  const c = '<section class="auth-section"><h1>Create Account</h1><form id="register-form" class="auth-form"><input type="text" name="name" placeholder="Your name"/><input type="email" name="email" placeholder="Email" required/><input type="password" name="password" placeholder="Password (min 8 chars)" required minlength="8"/><button type="submit" class="btn btn-primary">Register</button></form><p>Already have an account? <a href="/login">Sign In</a></p></section>';
  res.send(layout('Register', c, req.user));
});

router.get('/account', (req, res) => {
  if (!req.user) return res.redirect('/login');
  const ok = req.query.sub === 'success' ? '<div class="notice-bar success">Subscription active! Welcome to Kindwell.</div>' : '';
  const c = ok + '<section class="page-header"><h1>My Account</h1></section><div class="account-content"><div class="account-info"><h3>' + req.user.name + '</h3><p>' + req.user.email + '</p><p>Tier: <span class="tier-badge">' + (req.user.subscription_tier || 'Free') + '</span></p></div><div class="account-actions"><a href="/subscribe" class="btn btn-secondary">Manage Subscription</a><button id="logout-btn" class="btn btn-outline">Sign Out</button></div></div>';
  res.send(layout('Account', c, req.user));
});

export default router;
