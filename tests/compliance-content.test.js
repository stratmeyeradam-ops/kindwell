// tests/compliance-content.test.js
import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { createApp } from '../src/app.js';

describe('Health Claim Boundaries & Customer-Facing Copy QA', () => {
  const app = createApp();

  test('no prohibited claims or pseudo-diagnoses (e.g. "adrenal fatigue") appear on remedies or store', async () => {
    const resRemedies = await app.fetch(new Request('http://localhost/remedies'));
    const htmlRemedies = (await resRemedies.text()).toLowerCase();

    assert.ok(!htmlRemedies.includes('adrenal fatigue'), 'Must not use adrenal fatigue as diagnosis');
    assert.ok(!htmlRemedies.includes('cure anxiety'), 'Must not claim to cure anxiety');
    assert.ok(!htmlRemedies.includes('cure depression'), 'Must not claim to cure depression');
    assert.ok(!htmlRemedies.includes('regulate cortisol'), 'Must not promise cortisol regulation');

    const resStore = await app.fetch(new Request('http://localhost/store'));
    const htmlStore = (await resStore.text()).toLowerCase();
    assert.ok(!htmlStore.includes('adrenal fatigue'));
  });

  test('crisis lifelines (988) and escalation cautions are clearly present across health pages', async () => {
    const res = await app.fetch(new Request('http://localhost/remedies'));
    const html = await res.text();
    assert.ok(html.includes('988'), 'Crisis lifeline 988 must be cited');
    assert.ok(html.includes('pharmacist') || html.includes('clinician'), 'Must advise consulting medical professionals');

    const dirRes = await app.fetch(new Request('http://localhost/providers'));
    const dirHtml = await dirRes.text();
    assert.ok(dirHtml.includes('988 Suicide & Crisis Lifeline'));
    assert.ok(dirHtml.includes('Crisis Text Line'));
  });

  test('practitioner section does NOT contain fabricated practitioner Sarah M and displays natural availability copy', async () => {
    const res = await app.fetch(new Request('http://localhost/practitioners'));
    const html = await res.text();

    assert.ok(!html.includes('Sarah M.'), 'Must not contain fabricated practitioner Sarah M.');
    assert.ok(!html.includes('Sarah'), 'Must not contain Sarah in practitioner copy');
    assert.ok(html.includes('Individual spiritual support is not currently available for new clients') || html.includes('not currently available for new clients'));
    assert.ok(!html.includes('owner_availability_status'), 'Must not leak schema field names');
    assert.ok(!html.includes('placeholder profile'), 'Must not leak placeholder terminology');
  });

  test('provider directory clearly separates licensed clinicians from spiritual companions', async () => {
    const res = await app.fetch(new Request('http://localhost/providers'));
    const html = await res.text();

    assert.ok(html.includes('American Psychological Association'));
    assert.ok(html.includes('Open Path Psychotherapy Collective'));
    assert.ok(html.includes('Psychology Today'));
  });

  test('customer-facing copy does NOT leak internal specification / engineering terminology', async () => {
    const testPaths = ['/', '/es', '/pt-br', '/practices', '/remedies', '/courses', '/circle', '/store', '/pricing', '/about'];

    const forbiddenTerms = [
      'daily affirmation engine',
      'entitlement architecture',
      'd1-backed',
      'server-authoritative',
      'structured crystal/mineral education section',
      'future non-printify supplier',
      'production integration dependencies',
      'tier_gate',
      'moderation_status',
      'paypal_mode'
    ];

    for (const path of testPaths) {
      const res = await app.fetch(new Request('http://localhost' + path));
      const html = (await res.text()).toLowerCase();

      for (const term of forbiddenTerms) {
        assert.ok(
          !html.includes(term),
          `Path ${path} must not contain internal term "${term}"`
        );
      }
    }
  });

  test('Spanish and Brazilian Portuguese pages render natural, fluent language', async () => {
    // Check Spanish home
    const esRes = await app.fetch(new Request('http://localhost/es'));
    const esHtml = await esRes.text();
    assert.ok(esHtml.includes('Un lugar más firme donde aterrizar'));
    assert.ok(esHtml.includes('Prácticas para la vida cotidiana'));
    assert.ok(!esHtml.includes('Daily Affirmation Engine'));

    // Check Portuguese home
    const ptRes = await app.fetch(new Request('http://localhost/pt-br'));
    const ptHtml = await ptRes.text();
    assert.ok(ptHtml.includes('Um pouso mais sereno e seguro'));
    assert.ok(ptHtml.includes('Práticas para a vida real'));
    assert.ok(!ptHtml.includes('Daily Affirmation Engine'));
  });
});
