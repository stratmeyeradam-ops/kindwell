// src/services/circle.js
// KindWell Circle community spaces, discussions, and gentle moderation

import { randomBytes } from 'node:crypto';
import { canReadCircle, canPostInCircle } from './memberships.js';

/**
 * Lists the four community spaces for a locale.
 */
export async function listCircleSpaces(db, locale = 'en') {
  const rows = await db.prepare(`
    SELECT s.id, s.slug, s.sort_order, s.icon,
           st.name, st.description
    FROM circle_spaces s
    JOIN circle_space_translations st ON s.id = st.space_id AND st.locale = ?
    ORDER BY s.sort_order ASC
  `).bind(locale).all();
  return rows.results;
}

/**
 * Fetches a single space by its slug.
 */
export async function getCircleSpaceBySlug(db, slug, locale = 'en') {
  return await db.prepare(`
    SELECT s.id, s.slug, s.sort_order, s.icon,
           st.name, st.description
    FROM circle_spaces s
    JOIN circle_space_translations st ON s.id = st.space_id AND st.locale = ?
    WHERE s.slug = ?
  `).bind(locale, slug).first();
}

/**
 * Lists discussion threads in a space.
 */
// Pinned starter threads are seeded once per language by this account.
export const TEAM_USER_ID = 'user_kindwell_team';

export async function listThreads(db, spaceId, { limit = 20, offset = 0, locale = 'en' } = {}) {
  const rows = await db.prepare(`
    SELECT t.id, t.space_id, t.title, t.body, t.locale, t.created_at, t.updated_at,
           u.name as author_name, u.tier as author_tier,
           (SELECT count(*) FROM circle_posts p WHERE p.thread_id = t.id AND p.moderation_status = 'approved') as reply_count
    FROM circle_threads t
    JOIN user u ON t.user_id = u.id
    WHERE t.space_id = ? AND t.moderation_status = 'approved'
      -- Members' threads show in every language; the team's pinned starters
      -- exist once per language, so show only the reader's copy.
      AND (t.user_id != ? OR t.locale = ?)
    ORDER BY (t.user_id = ?) DESC, t.updated_at DESC
    LIMIT ? OFFSET ?
  `).bind(spaceId, TEAM_USER_ID, locale, TEAM_USER_ID, limit, offset).all();
  return rows.results;
}

/**
 * Fetches a thread with all its replies.
 */
export async function getThreadWithPosts(db, threadId) {
  const thread = await db.prepare(`
    SELECT t.id, t.space_id, t.title, t.body, t.locale, t.created_at,
           u.name as author_name, u.tier as author_tier
    FROM circle_threads t
    JOIN user u ON t.user_id = u.id
    WHERE t.id = ? AND t.moderation_status = 'approved'
  `).bind(threadId).first();

  if (!thread) return null;

  const posts = await db.prepare(`
    SELECT p.id, p.body, p.created_at,
           u.name as author_name, u.tier as author_tier
    FROM circle_posts p
    JOIN users u ON p.user_id = u.id
    WHERE p.thread_id = ? AND p.moderation_status = 'approved'
    ORDER BY p.created_at ASC
  `).bind(threadId).all();

  thread.posts = posts.results;
  return thread;
}

/**
 * Creates a new discussion thread in a Circle space.
 * Entitlement: Supported ($20/mo) members only.
 */
export async function createThread(db, user, { spaceId, title, body, locale = 'en' }) {
  if (!user) {
    throw new Error('Please sign in to participate in the Circle.');
  }

  if (!canPostInCircle(user)) {
    throw new Error('Posting and replying in the KindWell Circle is a benefit of our Supported ($20/mo) membership. Steady members have read-only access.');
  }

  if (!title || title.trim().length < 3) {
    throw new Error('Please enter a descriptive title for your post.');
  }
  if (!body || body.trim().length < 10) {
    throw new Error('Please write a few sentences to share what is on your mind.');
  }

  const threadId = 'th_' + randomBytes(12).toString('hex');
  const now = new Date().toISOString();

  await db.prepare(`
    INSERT INTO circle_threads (id, space_id, user_id, title, body, locale, moderation_status, created_at, updated_at)
    VALUES (?, ?, ?, ?, ?, ?, 'approved', ?, ?)
  `).bind(threadId, spaceId, user.id, title.trim(), body.trim(), locale, now, now).run();

  return {
    id: threadId,
    spaceId,
    userId: user.id,
    title: title.trim(),
    body: body.trim(),
    locale,
    createdAt: now
  };
}

/**
 * Creates a reply in an existing thread.
 * Entitlement: Supported ($20/mo) members only.
 */
export async function createReply(db, user, { threadId, body }) {
  if (!user) {
    throw new Error('Please sign in to reply.');
  }

  if (!canPostInCircle(user)) {
    throw new Error('Posting and replying in the KindWell Circle is a benefit of our Supported ($20/mo) membership.');
  }

  if (!body || body.trim().length < 2) {
    throw new Error('Please write a reply before submitting.');
  }

  const postId = 'post_' + randomBytes(12).toString('hex');
  const now = new Date().toISOString();

  await db.prepare(`
    INSERT INTO circle_posts (id, thread_id, user_id, body, moderation_status, created_at)
    VALUES (?, ?, ?, ?, 'approved', ?)
  `).bind(postId, threadId, user.id, body.trim(), now).run();

  // Update thread's updated_at timestamp
  await db.prepare('UPDATE circle_threads SET updated_at = ? WHERE id = ?')
    .bind(now, threadId).run();

  return {
    id: postId,
    threadId,
    userId: user.id,
    body: body.trim(),
    createdAt: now
  };
}

/**
 * Lists pending reports for moderator review.
 */
export async function listPendingReports(db, { limit = 50, offset = 0 } = {}) {
  const rows = await db.prepare(`
    SELECT r.id, r.reporter_id, r.thread_id, r.post_id, r.reason, r.status, r.created_at,
           u.name as reporter_name, u.email as reporter_email,
           t.title as thread_title, t.body as thread_body,
           p.body as post_body,
           (SELECT name FROM user WHERE id = t.user_id) as thread_author_name,
           (SELECT name FROM user WHERE id = p.user_id) as post_author_name
    FROM circle_reports r
    JOIN user u ON r.reporter_id = u.id
    LEFT JOIN circle_threads t ON r.thread_id = t.id
    LEFT JOIN circle_posts p ON r.post_id = p.id
    WHERE r.status = 'pending'
    ORDER BY r.created_at DESC
    LIMIT ? OFFSET ?
  `).bind(limit, offset).all();
  return rows.results;
}

/**
 * Reviews a report and takes moderation action.
 * Actions: 'dismiss' (report unfounded), 'hide_thread' (remove thread), 'hide_post' (remove post).
 */
export async function reviewReport(db, moderatorId, reportId, action, note = '') {
  const report = await db.prepare(`
    SELECT id, status, thread_id, post_id
    FROM circle_reports
    WHERE id = ?
  `).bind(reportId).first();

  if (!report) throw new Error('Report not found.');
  if (report.status !== 'pending') throw new Error('Report already reviewed.');

  const now = new Date().toISOString();

  // Update report status
  await db.prepare(`
    UPDATE circle_reports
    SET status = 'reviewed', reviewed_by = ?, reviewed_at = ?, action = ?, note = ?
    WHERE id = ?
  `).bind(moderatorId, now, action, note.trim(), reportId).run();

  // Take content action
  if (action === 'hide_thread' && report.thread_id) {
    await db.prepare(`
      UPDATE circle_threads
      SET moderation_status = 'hidden', updated_at = ?
      WHERE id = ?
    `).bind(now, report.thread_id).run();
  } else if (action === 'hide_post' && report.post_id) {
    await db.prepare(`
      UPDATE circle_posts
      SET moderation_status = 'hidden', updated_at = ?
      WHERE id = ?
    `).bind(now, report.post_id).run();
  }

  return { success: true, reportId, action, reviewed: true };
}

/**
 * Reports content for moderator review.
 */
export async function reportContent(db, user, { threadId = null, postId = null, reason }) {
  if (!user) throw new Error('Please sign in to report content.');
  if (!reason || reason.trim().length < 3) {
    throw new Error('Please provide a brief reason for reporting this post.');
  }

  const reportId = 'rep_' + randomBytes(12).toString('hex');
  const now = new Date().toISOString();

  // reporter_name / reporter_email are NOT NULL in the schema: snapshot them at
  // report time so moderation history survives a later profile change.
  await db.prepare(`
    INSERT INTO circle_reports (
      id, reporter_id, reporter_name, reporter_email, thread_id, post_id, reason, status, created_at
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, 'pending', ?)
  `).bind(
    reportId,
    user.id,
    user.name || 'Member',
    user.email || '',
    threadId,
    postId,
    reason.trim(),
    now
  ).run();

  return { success: true, reportId };
}
