// src/views/markdown.js
// The light Markdown KindWell's long-form content is written in: ### / ##
// headings, blank-line paragraphs, "- " and "1. " lists, **bold** and *italic*.
// Everything is HTML-escaped first, so content can never inject markup.

const escape = (s) => String(s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const inline = (s) => escape(s)
  .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
  .replace(/(^|[^*])\*(?!\s)(.+?)\*(?!\*)/g, '$1<em>$2</em>');

const H3 = 'font-family:var(--serif);font-size:20px;margin:24px 0 8px;color:var(--ink);';
const H2 = 'font-family:var(--serif);font-size:24px;margin:28px 0 12px;color:var(--ink);';
const LIST = 'padding-left:20px;margin:12px 0;';

export function markdownToHtml(md) {
  if (!md) return '';
  const out = [];
  let list = null; // { tag, items }
  let para = [];

  const flushPara = () => {
    if (para.length) out.push(`<p>${inline(para.join(' '))}</p>`);
    para = [];
  };
  const flushList = () => {
    if (list) out.push(`<${list.tag} style="${LIST}">${list.items.map((i) => `<li style="margin-bottom:6px;">${inline(i)}</li>`).join('')}</${list.tag}>`);
    list = null;
  };

  for (const raw of String(md).replace(/\r\n/g, '\n').split('\n')) {
    const line = raw.trim();
    const bullet = /^[-*]\s+(.*)$/.exec(line);
    const numbered = /^\d+[.)]\s+(.*)$/.exec(line);
    if (!line) { flushPara(); flushList(); continue; }
    if (line.startsWith('### ')) { flushPara(); flushList(); out.push(`<h3 style="${H3}">${inline(line.slice(4))}</h3>`); continue; }
    if (line.startsWith('## ')) { flushPara(); flushList(); out.push(`<h2 style="${H2}">${inline(line.slice(3))}</h2>`); continue; }
    if (bullet || numbered) {
      flushPara();
      const tag = bullet ? 'ul' : 'ol';
      if (list && list.tag !== tag) flushList();
      if (!list) list = { tag, items: [] };
      list.items.push((bullet || numbered)[1]);
      continue;
    }
    flushList();
    para.push(line);
  }
  flushPara();
  flushList();
  return out.join('\n');
}
