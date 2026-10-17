// tests/seo-identity.test.js
import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { statSync, readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { createApp } from '../src/app.js';
import { generateSitemapXml, generateRobotsTxt } from '../src/services/sitemap.js';

describe('SEO, Verification Tags, Favicons & Identity', () => {
  const app = createApp();

  test('favicon.ico is NONZERO bytes and exists in public/', () => {
    const icoPath = join(process.cwd(), 'public/favicon.ico');
    assert.ok(existsSync(icoPath), 'public/favicon.ico must exist');
    const stats = statSync(icoPath);
    assert.ok(stats.size > 0, `favicon.ico must be nonzero (got ${stats.size} bytes)`);
    assert.ok(stats.size >= 1000, 'favicon.ico should contain multi-resolution icon frames');

    // Verify first 4 bytes are ICO header (0x0000 0x0001)
    const buf = readFileSync(icoPath);
    assert.equal(buf[0], 0);
    assert.equal(buf[1], 0);
    assert.equal(buf[2], 1);
    assert.equal(buf[3], 0);
  });

  test('all manifest and favicon stack assets physically exist on disk', () => {
    const manifestPath = join(process.cwd(), 'public/site.webmanifest');
    assert.ok(existsSync(manifestPath), 'site.webmanifest must exist');

    const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
    assert.ok(manifest.icons.length > 0);

    for (const icon of manifest.icons) {
      const localFile = join(process.cwd(), 'public', icon.src.replace(/^\//, ''));
      assert.ok(existsSync(localFile), `Manifest icon must exist on disk: ${icon.src}`);
      const stats = statSync(localFile);
      assert.ok(stats.size > 0, `Icon must be nonzero: ${icon.src}`);
    }
  });

  test('social OpenGraph image exists and is non-empty', () => {
    const ogPath = join(process.cwd(), 'public/assets/images/kindwell-og.png');
    assert.ok(existsSync(ogPath), 'kindwell-og.png must exist');
    const stats = statSync(ogPath);
    assert.ok(stats.size > 1000, 'kindwell-og.png must be a valid PNG');
  });

  test('robots.txt allows public routes and points to https://kindwell.org/sitemap.xml', async () => {
    const robots = generateRobotsTxt();
    assert.ok(robots.includes('User-agent: *'));
    assert.ok(robots.includes('Allow: /'));
    assert.ok(robots.includes('Sitemap: https://kindwell.org/sitemap.xml'));

    const res = await app.fetch(new Request('http://localhost/robots.txt'));
    assert.equal(res.status, 200);
    const text = await res.text();
    assert.ok(text.includes('Sitemap: https://kindwell.org/sitemap.xml'));
  });

  test('sitemap.xml lists all canonical public routes across EN, ES, and PT-BR with reciprocal hreflang', async () => {
    const xml = generateSitemapXml();
    assert.ok(xml.includes('<urlset'));
    assert.ok(xml.includes('https://kindwell.org/'));
    assert.ok(xml.includes('https://kindwell.org/es'));
    assert.ok(xml.includes('https://kindwell.org/pt-br'));
    assert.ok(xml.includes('https://kindwell.org/practices'));
    assert.ok(xml.includes('https://kindwell.org/remedies'));
    assert.ok(xml.includes('https://kindwell.org/courses'));
    assert.ok(xml.includes('https://kindwell.org/circle'));
    assert.ok(xml.includes('https://kindwell.org/store'));
    assert.ok(xml.includes('https://kindwell.org/providers'));
    assert.ok(xml.includes('hreflang="en"'));
    assert.ok(xml.includes('hreflang="es"'));
    assert.ok(xml.includes('hreflang="pt-BR"'));
    assert.ok(xml.includes('hreflang="x-default"'));

    const res = await app.fetch(new Request('http://localhost/sitemap.xml'));
    assert.equal(res.status, 200);
    assert.ok(res.headers.get('content-type').includes('xml'));
  });

  test('recovered verification values and AdSense publisher are present on public pages', async () => {
    const res = await app.fetch(new Request('http://localhost/'));
    const html = await res.text();

    assert.ok(html.includes('content="h-XxXsaNbfY2dWmueZFK5sQSuwXIFelBeB5ByCSWCCg"'), 'Google verification tag must be present');
    assert.ok(html.includes('content="79AA455B3A6A870379DCB6A9DEFF026C"'), 'Bing verification tag must be present');
    assert.ok(html.includes('content="a1d444bd168e3c86"'), 'Yandex verification tag must be present');
    assert.ok(html.includes('content="ca-pub-3415300754694996"'), 'AdSense publisher tag must be present');
  });

  test('canonical and hreflang links are correct on English, Spanish, and Portuguese routes', async () => {
    // English
    const enRes = await app.fetch(new Request('http://localhost/practices'));
    const enHtml = await enRes.text();
    assert.ok(enHtml.includes('<link rel="canonical" href="https://kindwell.org/practices">'));
    assert.ok(enHtml.includes('<link rel="alternate" hreflang="en" href="https://kindwell.org/practices">'));
    assert.ok(enHtml.includes('<link rel="alternate" hreflang="es" href="https://kindwell.org/es/practices">'));
    assert.ok(enHtml.includes('<link rel="alternate" hreflang="pt-BR" href="https://kindwell.org/pt-br/practices">'));

    // Spanish
    const esRes = await app.fetch(new Request('http://localhost/es/practices'));
    const esHtml = await esRes.text();
    assert.ok(esHtml.includes('<link rel="canonical" href="https://kindwell.org/es/practices">'));

    // Portuguese
    const ptRes = await app.fetch(new Request('http://localhost/pt-br/practices'));
    const ptHtml = await ptRes.text();
    assert.ok(ptHtml.includes('<link rel="canonical" href="https://kindwell.org/pt-br/practices">'));
  });

  test('clean URL redirects old .html extensions and double-slash canonical bugs', async () => {
    const r1 = await app.fetch(new Request('http://localhost/index.html'));
    assert.equal(r1.status, 301);
    assert.equal(r1.headers.get('location'), '/');

    const r2 = await app.fetch(new Request('http://localhost/providers//'));
    assert.equal(r2.status, 301);
    assert.equal(r2.headers.get('location'), '/providers');

    const r3 = await app.fetch(new Request('http://localhost/remedies.html'));
    assert.equal(r3.status, 301);
    assert.equal(r3.headers.get('location'), '/remedies');
  });
});
