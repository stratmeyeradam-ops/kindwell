import { test, describe, beforeEach } from 'node:test';
import assert from 'node:assert/strict';
import { createServer } from 'node:net';
import { createLocalD1, initSchema } from '../src/db/index.js';
import {
  emailTemplates,
  renderEmailTemplate,
  sendEmail,
  sendStoreReceiptEmail,
  sentEmails,
  hasSmtpConfig
} from '../src/services/email.js';

// A minimal SMTP server: enough of RFC 5321 for nodemailer to hand over one
// message, so the real transport path is exercised without the network.
async function startFakeSmtpServer() {
  const messages = [];
  const state = { authenticated: false };
  const sockets = new Set();
  const server = createServer((socket) => {
    sockets.add(socket);
    socket.on('close', () => sockets.delete(socket));
    let current = { from: null, to: [], data: '' };
    let inData = false;
    let buffer = '';
    socket.write('220 fake.smtp ESMTP\r\n');
    socket.on('data', (chunk) => {
      buffer += chunk.toString('utf8');
      let index;
      while ((index = buffer.indexOf('\r\n')) !== -1) {
        const line = buffer.slice(0, index);
        buffer = buffer.slice(index + 2);
        if (inData) {
          if (line === '.') {
            inData = false;
            messages.push(current);
            current = { from: null, to: [], data: '' };
            socket.write('250 OK queued\r\n');
          } else {
            current.data += `${line}\n`;
          }
          continue;
        }
        const upper = line.toUpperCase();
        if (upper.startsWith('EHLO')) socket.write('250-fake.smtp\r\n250 AUTH PLAIN LOGIN\r\n');
        else if (upper.startsWith('HELO')) socket.write('250 fake.smtp\r\n');
        else if (upper.startsWith('AUTH PLAIN')) { state.authenticated = true; socket.write('235 Authenticated\r\n'); }
        else if (upper.startsWith('MAIL FROM:')) { current.from = line.match(/<([^>]*)>/)?.[1]; socket.write('250 OK\r\n'); }
        else if (upper.startsWith('RCPT TO:')) { current.to.push(line.match(/<([^>]*)>/)?.[1]); socket.write('250 OK\r\n'); }
        else if (upper === 'DATA') { inData = true; socket.write('354 End with .\r\n'); }
        else if (upper === 'QUIT') { socket.end('221 Bye\r\n'); }
        else if (upper === 'RSET' || upper === 'NOOP') socket.write('250 OK\r\n');
        else socket.write('502 Not implemented\r\n');
      }
    });
  });
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  return {
    port: server.address().port,
    messages,
    get authenticated() { return state.authenticated; },
    close: () => new Promise((resolve) => {
      for (const socket of sockets) socket.destroy();
      server.close(resolve);
    })
  };
}

describe('KindWell transactional email', () => {
  let db;
  const env = {
    APP_ORIGIN: 'https://kindwell.org',
    EMAIL_MODE: 'mock'
  };

  beforeEach(async () => {
    db = createLocalD1(':memory:');
    await initSchema(db);
    sentEmails.length = 0;
  });

  test('with no EMAIL_MODE and no SMTP mailbox, delivery falls back to the in-memory mock', async () => {
    const result = await sendEmail({
      env: { APP_ORIGIN: env.APP_ORIGIN },
      to: 'member@example.com',
      subject: 'A KindWell note',
      text: 'A plain-text note.',
      html: '<p>A plain-text note.</p>',
      locale: 'en'
    });
    assert.equal(result.success, true);
    assert.equal(result.mocked, true);
    assert.equal(sentEmails.length, 1);
    assert.equal(sentEmails[0].from, 'KindWell <noreply@kindwell.org>');
    assert.equal(sentEmails[0].to, 'member@example.com');
  });

  test('SMTP is selected only when host, user and password are all configured', () => {
    assert.equal(hasSmtpConfig({}), false);
    assert.equal(hasSmtpConfig({ SMTP_HOST: 'smtp.hostinger.com', SMTP_USER: 'noreply@kindwell.org' }), false);
    assert.equal(hasSmtpConfig({ SMTP_HOST: 'smtp.hostinger.com', SMTP_USER: 'noreply@kindwell.org', SMTP_PASS: 'x' }), true);
  });

  test('retired and unknown delivery modes fail loudly instead of silently dropping mail', async () => {
    for (const mode of ['cloudflare', 'carrier-pigeon']) {
      await assert.rejects(
        () => sendEmail({
          env: { EMAIL_MODE: mode },
          to: 'member@example.com',
          subject: 's',
          text: 't',
          html: '<p>t</p>'
        }),
        /Unsupported email delivery mode/
      );
    }
    assert.equal(sentEmails.length, 0);
  });

  test('incomplete messages and invalid recipients are refused', async () => {
    await assert.rejects(() => sendEmail({ env, to: 'not-an-email', subject: 's', text: 't', html: 'h' }), /valid recipient/);
    await assert.rejects(() => sendEmail({ env, to: 'a@b.com', subject: 's', text: '', html: 'h' }), /incomplete/);
  });

  test('SMTP adapter delivers from the noreply sender through the configured mailbox', async () => {
    const smtp = await startFakeSmtpServer();
    try {
      const result = await sendEmail({
        env: {
          EMAIL_MODE: 'smtp',
          SMTP_HOST: '127.0.0.1',
          SMTP_PORT: String(smtp.port),
          SMTP_SECURE: 'false',
          SMTP_USER: 'noreply@kindwell.org',
          SMTP_PASS: 'mailbox-password'
        },
        to: 'member@example.com',
        subject: 'A KindWell note',
        text: 'A plain-text note.',
        html: '<p>A plain-text note.</p>',
        locale: 'en'
      });

      assert.equal(result.success, true);
      assert.equal(result.mocked, false);
      assert.equal(sentEmails.length, 0, 'real delivery is not captured in memory');
      assert.equal(smtp.messages.length, 1);
      assert.equal(smtp.messages[0].from, 'noreply@kindwell.org');
      assert.deepEqual(smtp.messages[0].to, ['member@example.com']);
      assert.match(smtp.messages[0].data, /Subject: A KindWell note/);
      assert.ok(smtp.authenticated, 'the mailbox credentials are used');
    } finally {
      await smtp.close();
    }
  });

  test('English, Spanish, and Brazilian Portuguese future templates render naturally', () => {
    const samples = {
      membershipActivation: ['Ari', 'Kind', 'https://example.com/account'],
      membershipChange: ['Ari', 'Kind', 'Steady', 'https://example.com/account'],
      membershipCancellation: ['Ari', 'Steady', 'https://example.com/account'],
      storeReceipt: ['Ari', 'order_123456', [{ title: 'Workbook', quantity: 1 }], 18],
      protectedDownload: ['Ari', 'Workbook', 'https://example.com/download'],
      physicalOrderReceived: ['Ari', 'order_123456'],
      physicalOrderShipped: ['Ari', 'order_123456', 'https://example.com/track']
    };

    for (const locale of ['en', 'es', 'pt-BR']) {
      for (const [templateName, values] of Object.entries(samples)) {
        const content = renderEmailTemplate(templateName, locale, values);
        assert.ok(content.subject);
        assert.ok(content.text);
        assert.ok(content.html);
        assert.doesNotMatch(`${content.subject} ${content.text} ${content.html}`, /mock|D1|entitlement|supplier mode|provider status/i);
      }
    }
    assert.match(emailTemplates.membershipActivation.es('Ana', 'Kind', 'https://example.com').text, /Ana/);
    assert.match(emailTemplates.membershipActivation['pt-BR']('Ana', 'Kind', 'https://example.com').text, /Ana/);
  });

  test('future provider notices are idempotent and mock provider events stay quiet', async () => {
    const args = {
      db,
      env,
      provider: 'stripe',
      eventKey: 'order:live-123:receipt',
      name: 'Ari',
      orderId: 'order_123456',
      items: [{ title: 'Workbook', quantity: 1 }],
      total: 18,
      to: 'member@example.com',
      locale: 'en'
    };

    const first = await sendStoreReceiptEmail(args);
    const second = await sendStoreReceiptEmail(args);
    assert.equal(first.success, true);
    assert.equal(second.duplicate, true);
    assert.equal(sentEmails.length, 1);

    const skipped = await sendStoreReceiptEmail({
      ...args,
      provider: 'stripe_mock',
      eventKey: 'order:mock-123:receipt'
    });
    assert.equal(skipped.skipped, true);
    assert.equal(sentEmails.length, 1);

    const event = await db.prepare('SELECT status, event_key FROM transactional_email_events WHERE event_key = ?')
      .bind(args.eventKey).first();
    assert.equal(event.status, 'sent');
  });
});
