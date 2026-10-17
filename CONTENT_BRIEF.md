# KindWell content build — brief for content agents

Project: /run/media/ais/Storage/kindwell.org. KindWell is a warm, grounded, NON-clinical wellbeing membership site ("A steadier place to land"): practices, remedies, reiki, courses, reflective quizzes, and a member community ("the Circle"). Trilingual: every string exists in `en`, `es` (neutral Latin American Spanish), and `pt-BR` (Brazilian Portuguese). Read `src/db/seed.js` and `src/db/content-data.js` first — match their voice, object shapes, and the existing translations' register exactly.

## Memberships (for deciding what goes where)
Kind $5/mo · Steady $10/mo · Supported $15/mo. Gating already in code:
- Kind: favorites, monthly wellness letters.
- Steady: quizzes, full practices, deep spiritual content, worksheets, read the Circle, course intros.
- Supported: full courses, post in the Circle.
So: course first lessons are the "intro" (Steady); full courses are Supported.

## Hard content rules
- Educational and reflective only. Never diagnose, never claim to treat or cure, never replace licensed care. Where relevant, point to qualified help; mental-health topics include a gentle "when to seek support" note (crisis lines: say "your local emergency number or a crisis line such as 988 in the US" — no other invented numbers).
- Herbal/remedy content: traditional-use framing only, common safety cautions (pregnancy, medications, allergies, consult a clinician). No dosing beyond "follow the product label / a qualified herbalist".
- No fabricated research citations, statistics, testimonials, practitioners, or credentials. You may reference well-known named frameworks accurately (e.g. Kristin Neff's three components of self-compassion; Marsha Linehan's radical acceptance in DBT; window of tolerance; nonviolent communication) without fake numbers.
- Rich text fields use the same light Markdown the reiki articles use: `### Heading`, blank-line paragraphs, `- ` bullet lists, `**bold**`. No HTML.
- Keep all existing ids that are listed as existing. New ids: lowercase with underscores/hyphens, unique, prefixed like the existing ones.

## Output
Each agent writes ONLY its assigned file(s) under `src/db/content/` as an ES module (`export const ...`). Do not edit seed.js, views, services, or other agents' files. When done run `node -e "import('./src/db/content/<file>.js').then(m=>console.log(Object.keys(m)))"` from the project root to prove it parses, and report counts (items × languages) plus anything you were unsure about.
