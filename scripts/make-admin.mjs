// Give an existing KindWell account admin access (for /admin/orders).
// The person signs up on the site first, then on the server:
//   DB_PATH=/var/lib/kindwell/app.db node scripts/make-admin.mjs you@example.com
import { openPersistentDb, defaultDbPath } from '../src/db/persistent.js';

const email = String(process.argv[2] || '').trim().toLowerCase();
if (!email.includes('@')) { console.error('Usage: node scripts/make-admin.mjs <email>'); process.exit(1); }
const db = await openPersistentDb(defaultDbPath());
const user = await db.prepare('SELECT id, email FROM user WHERE lower(email) = ?').bind(email).first();
if (!user) { console.error(`No account for ${email}. Sign up on the site first.`); process.exit(1); }
await db.prepare("UPDATE user SET role = 'admin' WHERE id = ?").bind(user.id).run();
console.log(`${user.email} is now an admin.`);
process.exit(0);
