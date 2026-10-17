// tests/circle.test.js
import { test, describe, beforeEach } from 'node:test';
import assert from 'node:assert/strict';
import { createLocalD1, initSchema } from '../src/db/index.js';
import { seedDatabase } from '../src/db/seed.js';
import { registerUser } from './fixtures.js';
import { activateSubscription, TIERS } from '../src/services/memberships.js';
import {
  listCircleSpaces,
  getCircleSpaceBySlug,
  listThreads,
  getThreadWithPosts,
  createThread,
  createReply,
  reportContent
} from '../src/services/circle.js';
import { EXTRA_CIRCLE_SPACES, CIRCLE_STARTERS } from '../src/db/content/circle.js';
import { LOCAL_CIRCLE_SPACES } from '../src/db/content/circle-local.js';

describe('KindWell Circle Community & Gating', () => {
  let db;
  let freeUser;
  let steadyUser;
  let supportedUser;

  beforeEach(async () => {
    db = createLocalD1(':memory:');
    await initSchema(db);
    await seedDatabase(db);

    const u1 = await registerUser(db, { email: 'free@kindwell.org', name: 'Free Member' });
    freeUser = u1.user;

    const u2 = await registerUser(db, { email: 'steady@kindwell.org', name: 'Steady Member' });
    await activateSubscription(db, { userId: u2.user.id, tier: TIERS.STEADY });
    steadyUser = await db.prepare('SELECT * FROM users WHERE id = ?').bind(u2.user.id).first();

    const u3 = await registerUser(db, { email: 'supported@kindwell.org', name: 'Supported Member' });
    await activateSubscription(db, { userId: u3.user.id, tier: TIERS.SUPPORTED });
    supportedUser = await db.prepare('SELECT * FROM users WHERE id = ?').bind(u3.user.id).first();
  });

  test('the 4 recovered Circle spaces plus the content spaces exist across all locales', async () => {
    const expected = 4 + EXTRA_CIRCLE_SPACES.length + LOCAL_CIRCLE_SPACES.length;
    const enSpaces = await listCircleSpaces(db, 'en');
    assert.equal(enSpaces.length, expected);
    for (const slug of ['gentle-check-in', 'practice-together', 'being-with-it', 'quiet-wins']) {
      assert.ok(enSpaces.some(s => s.slug === slug), `recovered space ${slug} is kept`);
    }
    for (const space of [...EXTRA_CIRCLE_SPACES, ...LOCAL_CIRCLE_SPACES]) {
      assert.ok(enSpaces.some(s => s.slug === space.slug), `content space ${space.slug} is seeded`);
    }

    for (const locale of ['es', 'pt-BR']) {
      const spaces = await listCircleSpaces(db, locale);
      assert.equal(spaces.length, expected, `${locale} lists every space`);
    }
  });

  test('every space opens with the team starters, in the reader\'s language only', async () => {
    for (const locale of ['en', 'es', 'pt-BR']) {
      const threads = await listThreads(db, 'gentle-check-in', { locale });
      const expected = CIRCLE_STARTERS.filter((t) => t.space_id === 'gentle-check-in' && t[locale]).length;
      assert.ok(expected > 0);
      assert.equal(threads.length, expected, `${locale} shows one copy of each starter`);
      assert.ok(threads.every((t) => t.locale === locale));
    }
  });

  test('a member thread shows in every language, below the pinned starters', async () => {
    const thread = await createThread(db, supportedUser, {
      spaceId: 'gentle-check-in',
      title: 'Checking in from the porch',
      body: 'A slow cup of tea this morning.'
    });
    for (const locale of ['en', 'es']) {
      const threads = await listThreads(db, 'gentle-check-in', { locale });
      const starters = CIRCLE_STARTERS.filter((t) => t.space_id === 'gentle-check-in' && t[locale]).length;
      assert.equal(threads.length, starters + 1);
      assert.equal(threads[starters].id, thread.id, `${locale} lists the member thread right after the pinned starters`);
    }
  });

  test('Free user cannot post in Circle', async () => {
    await assert.rejects(
      async () => {
        await createThread(db, freeUser, {
          spaceId: 'gentle-check-in',
          title: 'Hello',
          body: 'Checking in from free tier'
        });
      },
      /Supported/
    );
  });

  test('Steady ($10) user cannot post in Circle (read-only entitlement)', async () => {
    await assert.rejects(
      async () => {
        await createThread(db, steadyUser, {
          spaceId: 'gentle-check-in',
          title: 'Steady post attempt',
          body: 'Trying to post with Steady tier'
        });
      },
      /Supported/
    );
  });

  test('Supported ($20) user can create threads and reply', async () => {
    const thread = await createThread(db, supportedUser, {
      spaceId: 'gentle-check-in',
      title: 'Taking five slow minutes today',
      body: 'Allowing my breath to settle after a hectic morning at work.'
    });

    assert.ok(thread.id.startsWith('th_'));
    assert.equal(thread.title, 'Taking five slow minutes today');

    // Add reply
    const reply = await createReply(db, supportedUser, {
      threadId: thread.id,
      body: 'Breathing with you in that calm space.'
    });

    assert.ok(reply.id.startsWith('post_'));

    // Fetch thread with posts
    const full = await getThreadWithPosts(db, thread.id);
    assert.equal(full.title, 'Taking five slow minutes today');
    assert.equal(full.author_name, 'Supported Member');
    assert.equal(full.posts.length, 1);
    assert.equal(full.posts[0].body, 'Breathing with you in that calm space.');
  });

  test('reporting content creates report in circle_reports', async () => {
    const thread = await createThread(db, supportedUser, {
      spaceId: 'gentle-check-in',
      title: 'A post to report',
      body: 'Testing the reporting functionality.'
    });

    const rep = await reportContent(db, freeUser, {
      threadId: thread.id,
      reason: 'Inappropriate commercial advertising'
    });

    assert.ok(rep.success);
    assert.ok(rep.reportId.startsWith('rep_'));

    const row = await db.prepare('SELECT * FROM circle_reports WHERE id = ?').bind(rep.reportId).first();
    assert.equal(row.reason, 'Inappropriate commercial advertising');
    assert.equal(row.status, 'pending');
  });
});
