// src/views/layout.js
// Universal Generation 2 layout template for KindWell

import { ui } from '../locales/ui-strings.js';

export function renderLayout({
  title,
  description,
  path = '', // clean path, e.g. '/practices'
  locale = 'en',
  user = null,
  bodyContent = '',
  structuredData = null,
  ogType = 'website',
  ogImage = '/assets/images/kindwell-og.png'
}) {
  const t = ui[locale] || ui.en;

  // Build clean localized path base
  const prefix = locale === 'en' ? '' : (locale === 'es' ? '/es' : '/pt-br');
  const cleanPath = path.startsWith('/') ? path : (path ? '/' + path : '');
  const currentCanonical = `https://kindwell.org${prefix}${cleanPath === '/' && prefix ? '' : cleanPath}`;

  // Reciprocal hreflang URLs
  const enUrl = `https://kindwell.org${cleanPath}`;
  const esUrl = `https://kindwell.org/es${cleanPath === '/' ? '' : cleanPath}`;
  const ptUrl = `https://kindwell.org/pt-br${cleanPath === '/' ? '' : cleanPath}`;

  const langPrefix = prefix;

  // JSON-LD structured data
  const defaultSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://kindwell.org/#organization',
        'name': 'KindWell',
        'url': 'https://kindwell.org',
        'logo': 'https://kindwell.org/icon-512x512.png',
        'description': t.tagline
      },
      {
        '@type': 'WebSite',
        '@id': 'https://kindwell.org/#website',
        'url': 'https://kindwell.org',
        'name': 'KindWell',
        'publisher': { '@id': 'https://kindwell.org/#organization' },
        'inLanguage': locale
      },
      ...(structuredData ? [structuredData] : [])
    ]
  };

  return `<!doctype html>
<html lang="${locale}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeHtml(description)}">
  <link rel="canonical" href="${currentCanonical}">

  <!-- Reciprocal Hreflang -->
  <link rel="alternate" hreflang="en" href="${enUrl}">
  <link rel="alternate" hreflang="es" href="${esUrl}">
  <link rel="alternate" hreflang="pt-BR" href="${ptUrl}">
  <link rel="alternate" hreflang="x-default" href="${enUrl}">

  <!-- Search Engine Verification (Recovered Values) -->
  <meta name="google-site-verification" content="h-XxXsaNbfY2dWmueZFK5sQSuwXIFelBeB5ByCSWCCg">
  <meta name="msvalidate.01" content="79AA455B3A6A870379DCB6A9DEFF026C">
  <meta name="yandex-verification" content="a1d444bd168e3c86">
  <meta name="google-adsense-account" content="ca-pub-3415300754694996">

  <!-- Open Graph -->
  <meta property="og:type" content="${ogType}">
  <meta property="og:site_name" content="KindWell">
  <meta property="og:title" content="${escapeHtml(title)}">
  <meta property="og:description" content="${escapeHtml(description)}">
  <meta property="og:url" content="${currentCanonical}">
  <meta property="og:image" content="https://kindwell.org${ogImage}">

  <!-- Twitter Cards -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escapeHtml(title)}">
  <meta name="twitter:description" content="${escapeHtml(description)}">
  <meta name="twitter:image" content="https://kindwell.org${ogImage}">

  <!-- Authoritative Favicon Stack -->
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png">
  <link rel="icon" type="image/x-icon" href="/favicon.ico">
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
  <link rel="manifest" href="/site.webmanifest">

  <!-- Generation 2 Authoritative Stylesheet -->
  <link rel="stylesheet" href="/assets/styles.css">

  <!-- Google tag (GA4) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-W9TWGGR66F"></script>
  <script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-W9TWGGR66F');</script>

  <!-- JSON-LD -->
  <script type="application/ld+json">
  ${JSON.stringify(defaultSchema)}
  </script>
</head>
<body>
  <a class="skip" href="#main-content">${t.skipToContent}</a>

  <!-- Crisis Banner (Gentle, supportive, non-intrusive) -->
  <div class="crisis-bar" role="complementary" aria-label="Crisis Support Information">
    <span>${t.crisisPrompt} <strong><a href="tel:988" style="text-decoration:underline;">${t.crisisLifeline}</a></strong> ${t.crisisSuffix}</span>
    <a href="${langPrefix}/providers" style="text-decoration:underline;margin-left:8px;">${t.nav.providers} &rarr;</a>
  </div>

  <!-- Main Navigation Header -->
  <header class="nav-wrap" role="banner">
    <div class="container nav-content">
      <a class="logo" href="${langPrefix || '/'}" aria-label="KindWell Home">
        <span class="logo-mark" aria-hidden="true">♥</span>
        KindWell
      </a>

      <nav class="main-nav" id="main-menu" role="navigation" aria-label="Primary Navigation">
        <a href="${langPrefix || '/'}" ${cleanPath === '' || cleanPath === '/' ? 'class="active"' : ''}>${t.nav.home}</a>
        <a href="${langPrefix}/practices" ${cleanPath.startsWith('/practices') ? 'class="active"' : ''}>${t.nav.practices}</a>
        <a href="${langPrefix}/remedies" ${cleanPath.startsWith('/remedies') ? 'class="active"' : ''}>${t.nav.remedies}</a>
        <a href="${langPrefix}/black-hills" ${cleanPath.startsWith('/black-hills') ? 'class="active"' : ''}>${t.nav.blackHills}</a>
        <a href="${langPrefix}/homeopathy" ${cleanPath.startsWith('/homeopathy') ? 'class="active"' : ''}>${t.nav.homeopathy}</a>
        <a href="${langPrefix}/courses" ${cleanPath.startsWith('/courses') ? 'class="active"' : ''}>${t.nav.courses}</a>
        <a href="${langPrefix}/circle" ${cleanPath.startsWith('/circle') ? 'class="active"' : ''}>${t.nav.circle}</a>
        <a href="${langPrefix}/quiz" ${cleanPath.startsWith('/quiz') ? 'class="active"' : ''}>${t.nav.quizzes}</a>
        <a href="${langPrefix}/store" ${cleanPath.startsWith('/store') ? 'class="active"' : ''}>${t.nav.store}</a>
        <a href="${langPrefix}/pricing" ${cleanPath.startsWith('/pricing') ? 'class="active"' : ''}>${t.nav.pricing}</a>
        <a href="${langPrefix}/about" ${cleanPath.startsWith('/about') ? 'class="active"' : ''}>${t.nav.about}</a>
        <a class="nav-account" href="${langPrefix}/account">${user ? t.nav.account : t.nav.signIn}</a>
      </nav>

      <div class="nav-actions">
        <!-- Language Switcher -->
        <div class="lang-switch" style="display:inline-flex;gap:6px;font-size:13px;font-weight:600;margin-right:12px;">
          <a href="${enUrl}" ${locale === 'en' ? 'style="text-decoration:underline;color:var(--deep);"' : 'style="opacity:0.7;"'} title="English">EN</a>
          <span style="opacity:0.4;">|</span>
          <a href="${esUrl}" ${locale === 'es' ? 'style="text-decoration:underline;color:var(--deep);"' : 'style="opacity:0.7;"'} title="Español">ES</a>
          <span style="opacity:0.4;">|</span>
          <a href="${ptUrl}" ${locale === 'pt-BR' ? 'style="text-decoration:underline;color:var(--deep);"' : 'style="opacity:0.7;"'} title="Português (Brasil)">PT</a>
        </div>

        ${user ? `
          <a class="btn small" href="${langPrefix}/account">${t.nav.account}</a>
        ` : `
          <a class="btn small outline" href="${langPrefix}/account">${t.nav.signIn}</a>
        `}
        <button class="mobile-toggle" aria-expanded="false" aria-controls="main-menu" aria-label="Toggle menu" onclick="document.getElementById('main-menu').classList.toggle('open');">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </header>

  <!-- Page Body -->
  <main id="main-content">
    ${bodyContent}
  </main>

  <!-- Clean Generation 2 Footer -->
  <footer class="site-footer" role="contentinfo">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-col" style="grid-column: span 1;">
          <a class="logo" href="${langPrefix || '/'}" style="color:var(--paper);">
            <span class="logo-mark" aria-hidden="true" style="color:var(--gold);">♥</span>
            KindWell
          </a>
          <p class="tagline" style="color:var(--paper);opacity:0.85;margin-top:12px;font-size:14px;line-height:1.6;">
            ${t.footer.aboutKindwell}
          </p>
          <div style="margin-top:16px;font-size:13px;opacity:0.75;color:var(--paper);">
            ${t.footer.affiliateNote}
          </div>
        </div>

        <div class="footer-col">
          <h4 style="color:var(--paper);font-family:var(--serif);font-size:18px;margin-bottom:12px;">${t.footer.explore}</h4>
          <ul style="list-style:none;padding:0;margin:0;line-height:2.2;font-size:14px;opacity:0.85;">
            <li><a href="${langPrefix}/practices">${t.nav.practices}</a></li>
            <li><a href="${langPrefix}/remedies">${t.nav.remedies}</a></li>
            <li><a href="${langPrefix}/black-hills">${t.nav.blackHills}</a></li>
            <li><a href="${langPrefix}/homeopathy">${t.nav.homeopathy}</a></li>
            <li><a href="${langPrefix}/reiki">${t.nav.reiki}</a></li>
            <li><a href="${langPrefix}/crystals">${t.nav.crystals}</a></li>
            <li><a href="${langPrefix}/courses">${t.nav.courses}</a></li>
            <li><a href="${langPrefix}/quiz">${t.nav.quizzes}</a></li>
            <li><a href="${langPrefix}/store">${t.nav.store}</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4 style="color:var(--paper);font-family:var(--serif);font-size:18px;margin-bottom:12px;">${t.footer.community}</h4>
          <ul style="list-style:none;padding:0;margin:0;line-height:2.2;font-size:14px;opacity:0.85;">
            <li><a href="${langPrefix}/circle">${t.nav.circle}</a></li>
            <li><a href="${langPrefix}/pricing">${t.nav.pricing}</a></li>
            <li><a href="${langPrefix}/practitioners">${t.nav.practitioners}</a></li>
            <li><a href="${langPrefix}/providers">${t.nav.providers}</a></li>
            <li><a href="${langPrefix}/account">${t.nav.account}</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4 style="color:var(--paper);font-family:var(--serif);font-size:18px;margin-bottom:12px;">${t.footer.trust}</h4>
          <ul style="list-style:none;padding:0;margin:0;line-height:2.2;font-size:14px;opacity:0.85;">
            <li><a href="${langPrefix}/about">${t.nav.about}</a></li>
            <li><a href="${langPrefix}/editorial">${t.footer.editorial}</a></li>
            <li><a href="${langPrefix}/boundaries">${t.footer.boundaries}</a></li>
            <li><a href="${langPrefix}/standards">${t.footer.standards}</a></li>
            <li><a href="${langPrefix}/contact">${t.footer.contact}</a></li>
            <li><a href="${langPrefix}/privacy">${t.footer.privacy}</a></li>
            <li><a href="${langPrefix}/terms">${t.footer.terms}</a></li>
            <li><a href="${langPrefix}/refund">${t.footer.refund}</a></li>
          </ul>
        </div>
      </div>

      <div style="border-top:1px solid rgba(255,255,255,0.15);margin-top:40px;padding-top:24px;text-align:center;font-size:13px;opacity:0.75;color:var(--paper);">
        &copy; ${new Date().getFullYear()} ${t.footer.copyright}
      </div>
    </div>
  </footer>
</body>
</html>`;
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
