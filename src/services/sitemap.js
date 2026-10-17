// src/services/sitemap.js
// Dynamic trilingual sitemap and robots.txt generator for KindWell

export function generateSitemapXml() {
  const publicRoutes = [
    '',
    '/practices',
    '/remedies',
    '/homeopathy',
    '/black-hills',
    '/reiki',
    '/crystals',
    '/courses',
    '/courses/self-compassion-and-kindness',
    '/courses/radical-acceptance-foundations',
    '/courses/spiritual-reflection-contemplative-support',
    '/quiz',
    '/quiz/what-kind-of-rest-do-i-need',
    '/quiz/self-compassion-check-in',
    '/quiz/stress-and-overwhelm-reflection',
    '/quiz/grounding-style-finder',
    '/quiz/daily-habits-reflection',
    '/quiz/boundaries-check-in',
    '/circle',
    '/circle/gentle-check-in',
    '/circle/practice-together',
    '/circle/being-with-it',
    '/circle/quiet-wins',
    '/store',
    '/practitioners',
    '/providers',
    '/pricing',
    '/about',
    '/editorial',
    '/boundaries',
    '/standards',
    '/contact',
    '/privacy',
    '/terms',
    '/refund'
  ];

  const todayStr = new Date().toISOString().split('T')[0];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n`;

  for (const r of publicRoutes) {
    const enUrl = `https://kindwell.org${r}`;
    const esUrl = `https://kindwell.org/es${r}`;
    const ptUrl = `https://kindwell.org/pt-br${r}`;

    // EN entry
    xml += `  <url>\n`;
    xml += `    <loc>${enUrl}</loc>\n`;
    xml += `    <lastmod>${todayStr}</lastmod>\n`;
    xml += `    <changefreq>weekly</changefreq>\n`;
    xml += `    <priority>${r === '' ? '1.0' : '0.8'}</priority>\n`;
    xml += `    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}"/>\n`;
    xml += `    <xhtml:link rel="alternate" hreflang="es" href="${esUrl}"/>\n`;
    xml += `    <xhtml:link rel="alternate" hreflang="pt-BR" href="${ptUrl}"/>\n`;
    xml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${enUrl}"/>\n`;
    xml += `  </url>\n`;

    // ES entry
    xml += `  <url>\n`;
    xml += `    <loc>${esUrl}</loc>\n`;
    xml += `    <lastmod>${todayStr}</lastmod>\n`;
    xml += `    <changefreq>weekly</changefreq>\n`;
    xml += `    <priority>${r === '' ? '0.9' : '0.8'}</priority>\n`;
    xml += `    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}"/>\n`;
    xml += `    <xhtml:link rel="alternate" hreflang="es" href="${esUrl}"/>\n`;
    xml += `    <xhtml:link rel="alternate" hreflang="pt-BR" href="${ptUrl}"/>\n`;
    xml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${enUrl}"/>\n`;
    xml += `  </url>\n`;

    // PT entry
    xml += `  <url>\n`;
    xml += `    <loc>${ptUrl}</loc>\n`;
    xml += `    <lastmod>${todayStr}</lastmod>\n`;
    xml += `    <changefreq>weekly</changefreq>\n`;
    xml += `    <priority>${r === '' ? '0.9' : '0.8'}</priority>\n`;
    xml += `    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}"/>\n`;
    xml += `    <xhtml:link rel="alternate" hreflang="es" href="${esUrl}"/>\n`;
    xml += `    <xhtml:link rel="alternate" hreflang="pt-BR" href="${ptUrl}"/>\n`;
    xml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${enUrl}"/>\n`;
    xml += `  </url>\n`;
  }

  xml += `</urlset>`;
  return xml;
}

export function generateRobotsTxt() {
  return `User-agent: *
Allow: /
Allow: /assets/
Allow: /es/
Allow: /pt-br/
Disallow: /api/
Disallow: /account
Disallow: /admin
Disallow: /store/checkout/
Disallow: /store/order-success

Sitemap: https://kindwell.org/sitemap.xml
`;
}
