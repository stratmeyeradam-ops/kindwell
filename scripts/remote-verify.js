// scripts/remote-verify.js
// Remote verification test against workers.dev candidate

const CANDIDATE_URL = 'https://kindwell-app.adamstratmeyer.workers.dev';

async function verifyRoutes() {
  console.log('Testing remote routes on:', CANDIDATE_URL);

  const routes = [
    { path: '/', expected: 200, type: 'text/html' },
    { path: '/es', expected: 200, type: 'text/html' },
    { path: '/pt-br', expected: 200, type: 'text/html' },
    { path: '/about', expected: 200, type: 'text/html' },
    { path: '/practices', expected: 200, type: 'text/html' },
    { path: '/remedies', expected: 200, type: 'text/html' },
    { path: '/reiki', expected: 200, type: 'text/html' },
    { path: '/crystals', expected: 200, type: 'text/html' },
    { path: '/courses', expected: 200, type: 'text/html' },
    { path: '/quiz', expected: 200, type: 'text/html' },
    { path: '/circle', expected: 200, type: 'text/html' },
    { path: '/pricing', expected: 200, type: 'text/html' },
    { path: '/store', expected: 200, type: 'text/html' },
    { path: '/practitioners', expected: 200, type: 'text/html' },
    { path: '/providers', expected: 200, type: 'text/html' },
    { path: '/account', expected: 200, type: 'text/html' },
    { path: '/api/health', expected: 200, type: 'application/json' },
    { path: '/sitemap.xml', expected: 200, type: 'xml' },
    { path: '/robots.txt', expected: 200, type: 'text/plain' },
    { path: '/site.webmanifest', expected: 200, type: 'json' },
    { path: '/favicon.ico', expected: 200, type: 'icon' },
    { path: '/favicon.svg', expected: 200, type: 'svg' },
    { path: '/favicon-48x48.png', expected: 200, type: 'png' },
    { path: '/apple-touch-icon.png', expected: 200, type: 'png' },
    { path: '/icon-192x192.png', expected: 200, type: 'png' },
    { path: '/icon-512x512.png', expected: 200, type: 'png' }
  ];

  const results = [];
  for (const r of routes) {
    const res = await fetch(CANDIDATE_URL + r.path, { redirect: 'manual' });
    const contentType = res.headers.get('content-type') || '';
    const okStatus = res.status === r.expected;
    const okType = contentType.includes(r.type);
    let size = 0;

    if (r.path === '/favicon.ico') {
      const buf = await res.arrayBuffer();
      size = buf.byteLength;
    }

    results.push({
      path: r.path,
      status: res.status,
      expected: r.expected,
      contentType,
      ok: okStatus,
      size
    });

    console.log(`${r.path}: status=${res.status} (${okStatus ? 'OK' : 'FAIL'}) content-type=${contentType} ${size ? 'size=' + size : ''}`);
  }

  // Verify health check response
  const healthRes = await fetch(CANDIDATE_URL + '/api/health');
  const healthJson = await healthRes.json();
  console.log('Health JSON:', healthJson);

  // Check homepage content for Sarah M or internal phrases
  const homeRes = await fetch(CANDIDATE_URL + '/');
  const homeHtml = await homeRes.text();
  console.log('Homepage verification:', {
    hasSarahM: homeHtml.includes('Sarah M'),
    hasSarah: homeHtml.includes('Sarah'),
    hasGoogleTag: homeHtml.includes('h-XxXsaNbfY2dWmueZFK5sQSuwXIFelBeB5ByCSWCCg'),
    hasBingTag: homeHtml.includes('79AA455B3A6A870379DCB6A9DEFF026C'),
    hasAdSense: homeHtml.includes('ca-pub-3415300754694996'),
    hasFaviconIco: homeHtml.includes('/favicon.ico'),
    canonical: homeHtml.match(/<link rel="canonical" href="([^"]+)">/)?.[1]
  });

  // Check practitioners page for Sarah M or internal phrases
  const pracRes = await fetch(CANDIDATE_URL + '/practitioners');
  const pracHtml = await pracRes.text();
  console.log('Practitioners page verification:', {
    hasSarahM: pracHtml.includes('Sarah M'),
    hasSarah: pracHtml.includes('Sarah'),
    hasNaturalAvailability: pracHtml.includes('Individual spiritual support is not currently available for new clients'),
    hasInternalStatusField: pracHtml.includes('owner_availability_status')
  });

  return results;
}

verifyRoutes().catch(console.error);
