// src/services/email.js
// KindWell transactional email adapter, templates, and future delivery hooks.

import { randomUUID } from 'node:crypto';
import { getAppOrigin, normalizeLocale } from '../config.js';

export const EMAIL_FROM = Object.freeze({
  name: 'KindWell',
  email: 'noreply@kindwell.org'
});
export const EMAIL_FROM_DISPLAY = 'KindWell <noreply@kindwell.org>';
export const EMAIL_MODE = (typeof process !== 'undefined' && process.env?.EMAIL_MODE) || 'mock';
export const sentEmails = [];

/**
 * Which delivery path to use.
 *
 * `smtp` is the real one on the Node host — it needs a mailbox on the domain, since
 * the account has no mail service yet. `mock` captures messages in memory and is
 * what the app falls back to so sign-up and receipts never fail for want of a
 * mailbox.
 */
function getEmailMode(env = {}) {
  const configured = env.EMAIL_MODE
    || (typeof process !== 'undefined' && process.env?.EMAIL_MODE);
  if (configured) return configured;
  return hasSmtpConfig(env) ? 'smtp' : 'mock';
}

/** True when there is enough configuration to open an SMTP connection. */
export function hasSmtpConfig(env = {}) {
  const read = (key) => env[key] || (typeof process !== 'undefined' && process.env?.[key]);
  return Boolean(read('SMTP_HOST') && read('SMTP_USER') && read('SMTP_PASS'));
}

// Reused across sends: opening a fresh SMTP connection per email is slow and
// some providers rate-limit it.
let smtpTransport = null;

async function getSmtpTransport(env = {}) {
  if (smtpTransport) return smtpTransport;
  const read = (key) => env[key] || (typeof process !== 'undefined' && process.env?.[key]);
  const { default: nodemailer } = await import('nodemailer');
  const port = Number(read('SMTP_PORT') || 465);
  smtpTransport = nodemailer.createTransport({
    host: read('SMTP_HOST'),
    port,
    // 465 is implicit TLS; 587 starts plain and upgrades via STARTTLS.
    secure: read('SMTP_SECURE') ? read('SMTP_SECURE') !== 'false' : port === 465,
    auth: { user: read('SMTP_USER'), pass: read('SMTP_PASS') }
  });
  return smtpTransport;
}

function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function formatItems(items = []) {
  return items.map((item) => ({
    title: String(item.title || 'KindWell item'),
    quantity: Number(item.quantity || 1)
  }));
}

function itemText(items) {
  return items.map((item) => `- ${item.title} (x${item.quantity})`).join('\n');
}

function itemHtml(items) {
  return `<ul>${items.map((item) => `<li>${escapeHtml(item.title)} &times; ${item.quantity}</li>`).join('')}</ul>`;
}

function orderNumber(orderId) {
  return String(orderId || '').slice(-6);
}

function linkHtml(link, label) {
  return `<p><a href="${escapeHtml(link)}">${escapeHtml(label)}</a></p>`;
}

/**
 * Sends through SMTP when a mailbox is configured, or captures a local mock.
 * Real delivery never stores the message body or writes it to logs.
 */
export async function sendEmail({
  env = {},
  to,
  subject,
  html,
  text,
  locale = 'en'
}) {
  if (!to || !String(to).includes('@')) throw new Error('A valid recipient is required.');
  if (!subject || !text || !html) throw new Error('Transactional email content is incomplete.');

  const mode = getEmailMode(env);
  const normalizedLocale = normalizeLocale(locale);

  if (mode === 'mock') {
    const messageId = `msg_${randomUUID()}`;
    sentEmails.push({
      id: messageId,
      to: String(to),
      from: env.EMAIL_FROM || process.env?.EMAIL_FROM || EMAIL_FROM_DISPLAY,
      subject: String(subject),
      html: String(html),
      text: String(text),
      locale: normalizedLocale,
      sentAt: new Date().toISOString()
    });
    return { success: true, messageId, mocked: true };
  }

  if (mode === 'smtp') {
    const transport = await getSmtpTransport(env);
    const info = await transport.sendMail({
      from: env.EMAIL_FROM || process.env?.EMAIL_FROM || EMAIL_FROM_DISPLAY,
      to: String(to),
      subject: String(subject),
      text: String(text),
      html: String(html)
    });
    return {
      success: true,
      messageId: info?.messageId || null,
      mocked: false
    };
  }

  throw new Error(`Unsupported email delivery mode: ${mode}`);
}

/**
 * Claims a future provider event in D1 before delivery and records only metadata.
 * A sent event is idempotent; a failed event can be retried by a later provider retry.
 */
export async function sendIdempotentEmail({
  db,
  eventKey,
  eventType,
  provider,
  env = {},
  to,
  subject,
  html,
  text,
  locale = 'en'
}) {
  if (!db) throw new Error('D1 is required for idempotent transactional email delivery.');
  if (!eventKey) throw new Error('An event key is required for idempotent email delivery.');

  const now = new Date().toISOString();
  const claim = await db.prepare(`
    INSERT OR IGNORE INTO transactional_email_events
      (id, event_key, event_type, provider, recipient, status, created_at, updated_at)
    VALUES (?, ?, ?, ?, ?, 'pending', ?, ?)
  `).bind(
    `email_evt_${randomUUID()}`,
    eventKey,
    eventType || 'transactional',
    provider || 'unknown',
    String(to),
    now,
    now
  ).run();

  if (!claim.meta || claim.meta.changes !== 1) {
    const existing = await db.prepare(`
      SELECT status, provider_message_id
      FROM transactional_email_events
      WHERE event_key = ?
    `).bind(eventKey).first();
    if (existing?.status === 'failed') {
      await db.prepare(`
        UPDATE transactional_email_events
        SET status = 'pending', updated_at = ?
        WHERE event_key = ? AND status = 'failed'
      `).bind(now, eventKey).run();
    } else {
      return {
        success: true,
        duplicate: true,
        messageId: existing?.provider_message_id || null
      };
    }
  }

  try {
    const result = await sendEmail({ env, to, subject, html, text, locale });
    await db.prepare(`
      UPDATE transactional_email_events
      SET status = 'sent', provider_message_id = ?, sent_at = ?, updated_at = ?
      WHERE event_key = ?
    `).bind(result.messageId, new Date().toISOString(), new Date().toISOString(), eventKey).run();
    return { ...result, duplicate: false };
  } catch (error) {
    await db.prepare(`
      UPDATE transactional_email_events
      SET status = 'failed', updated_at = ?
      WHERE event_key = ?
    `).bind(new Date().toISOString(), eventKey).run();
    throw error;
  }
}

export const emailTemplates = {
  verification: {
    en: (name, link) => ({
      subject: 'A small welcome from KindWell — confirm your email',
      text: `Hello ${name},\n\nWe are glad you found your way to KindWell. Please confirm your email here:\n${link}\n\nOnce you are in, take things at your own pace.\n\nWarmly,\nThe KindWell Team`,
      html: `<p>Hello ${escapeHtml(name)},</p><p>We are glad you found your way to KindWell. Please confirm your email here:</p>${linkHtml(link, 'Confirm your email')}<p>Once you are in, take things at your own pace.</p><p>Warmly,<br>The KindWell Team</p>`
    }),
    es: (name, link) => ({
      subject: 'Una pequeña bienvenida de KindWell — confirma tu correo',
      text: `Hola ${name}:\n\nNos alegra que hayas llegado a KindWell. Confirma tu correo aquí:\n${link}\n\nDespués, puedes recorrer este espacio a tu propio ritmo.\n\nCon cariño,\nEl equipo de KindWell`,
      html: `<p>Hola ${escapeHtml(name)}:</p><p>Nos alegra que hayas llegado a KindWell. Confirma tu correo aquí:</p>${linkHtml(link, 'Confirmar mi correo')}<p>Después, puedes recorrer este espacio a tu propio ritmo.</p><p>Con cariño,<br>El equipo de KindWell</p>`
    }),
    'pt-BR': (name, link) => ({
      subject: 'Um carinho de boas-vindas do KindWell — confirme seu e-mail',
      text: `Olá, ${name}!\n\nQue bom ter você no KindWell. Confirme seu e-mail por aqui:\n${link}\n\nDepois, fique à vontade para conhecer tudo com calma.\n\nCom carinho,\nEquipe KindWell`,
      html: `<p>Olá, ${escapeHtml(name)}!</p><p>Que bom ter você no KindWell. Confirme seu e-mail por aqui:</p>${linkHtml(link, 'Confirmar meu e-mail')}<p>Depois, fique à vontade para conhecer tudo com calma.</p><p>Com carinho,<br>Equipe KindWell</p>`
    })
  },
  passwordReset: {
    en: (name, link) => ({
      subject: 'A quiet reset for your KindWell account',
      text: `Hello ${name},\n\nWe received a request to choose a new password for your KindWell account. You can do that here:\n${link}\n\nIf you did not make this request, you can let this email pass.\n\nWarmly,\nThe KindWell Team`,
      html: `<p>Hello ${escapeHtml(name)},</p><p>We received a request to choose a new password for your KindWell account.</p>${linkHtml(link, 'Choose a new password')}<p>If you did not make this request, you can let this email pass.</p><p>Warmly,<br>The KindWell Team</p>`
    }),
    es: (name, link) => ({
      subject: 'Un nuevo comienzo para tu cuenta de KindWell',
      text: `Hola ${name}:\n\nRecibimos una solicitud para elegir una nueva contraseña para tu cuenta de KindWell. Puedes hacerlo aquí:\n${link}\n\nSi no fuiste tú, puedes ignorar este correo.\n\nCon cariño,\nEl equipo de KindWell`,
      html: `<p>Hola ${escapeHtml(name)}:</p><p>Recibimos una solicitud para elegir una nueva contraseña para tu cuenta de KindWell.</p>${linkHtml(link, 'Elegir una nueva contraseña')}<p>Si no fuiste tú, puedes ignorar este correo.</p><p>Con cariño,<br>El equipo de KindWell</p>`
    }),
    'pt-BR': (name, link) => ({
      subject: 'Um novo começo para sua conta do KindWell',
      text: `Olá, ${name}!\n\nRecebemos um pedido para você escolher uma nova senha para sua conta do KindWell. É só acessar:\n${link}\n\nSe não foi você quem pediu, basta ignorar esta mensagem.\n\nCom carinho,\nEquipe KindWell`,
      html: `<p>Olá, ${escapeHtml(name)}!</p><p>Recebemos um pedido para você escolher uma nova senha para sua conta do KindWell.</p>${linkHtml(link, 'Escolher uma nova senha')}<p>Se não foi você quem pediu, basta ignorar esta mensagem.</p><p>Com carinho,<br>Equipe KindWell</p>`
    })
  },
  membershipActivation: {
    en: (name, tier, link) => ({
      subject: 'Your KindWell membership is ready',
      text: `Hello ${name},\n\nYour ${tier} membership is now ready. Thank you for making room for KindWell in your life.\n\nYou can visit your account here:\n${link}\n\nWarmly,\nThe KindWell Team`,
      html: `<p>Hello ${escapeHtml(name)},</p><p>Your <strong>${escapeHtml(tier)}</strong> membership is now ready. Thank you for making room for KindWell in your life.</p>${linkHtml(link, 'Visit your account')}<p>Warmly,<br>The KindWell Team</p>`
    }),
    es: (name, tier, link) => ({
      subject: 'Tu membresía de KindWell ya está lista',
      text: `Hola ${name}:\n\nTu membresía ${tier} ya está lista. Gracias por hacerle un espacio a KindWell en tu vida.\n\nPuedes visitar tu cuenta aquí:\n${link}\n\nCon cariño,\nEl equipo de KindWell`,
      html: `<p>Hola ${escapeHtml(name)}:</p><p>Tu membresía <strong>${escapeHtml(tier)}</strong> ya está lista. Gracias por hacerle un espacio a KindWell en tu vida.</p>${linkHtml(link, 'Visitar mi cuenta')}<p>Con cariño,<br>El equipo de KindWell</p>`
    }),
    'pt-BR': (name, tier, link) => ({
      subject: 'Sua assinatura do KindWell está pronta',
      text: `Olá, ${name}!\n\nSua assinatura ${tier} já está pronta. Obrigado por reservar um espaço para o KindWell na sua vida.\n\nVocê pode acessar sua conta aqui:\n${link}\n\nCom carinho,\nEquipe KindWell`,
      html: `<p>Olá, ${escapeHtml(name)}!</p><p>Sua assinatura <strong>${escapeHtml(tier)}</strong> já está pronta. Obrigado por reservar um espaço para o KindWell na sua vida.</p>${linkHtml(link, 'Acessar minha conta')}<p>Com carinho,<br>Equipe KindWell</p>`
    })
  },
  membershipChange: {
    en: (name, previousTier, nextTier, link) => ({
      subject: 'A new shape for your KindWell membership',
      text: `Hello ${name},\n\nYour KindWell membership is changing from ${previousTier} to ${nextTier}. Your account has the latest details here:\n${link}\n\nWarmly,\nThe KindWell Team`,
      html: `<p>Hello ${escapeHtml(name)},</p><p>Your KindWell membership is changing from <strong>${escapeHtml(previousTier)}</strong> to <strong>${escapeHtml(nextTier)}</strong>.</p>${linkHtml(link, 'See your membership details')}<p>Warmly,<br>The KindWell Team</p>`
    }),
    es: (name, previousTier, nextTier, link) => ({
      subject: 'Una nueva etapa para tu membresía de KindWell',
      text: `Hola ${name}:\n\nTu membresía de KindWell cambiará de ${previousTier} a ${nextTier}. Aquí encontrarás los detalles actualizados:\n${link}\n\nCon cariño,\nEl equipo de KindWell`,
      html: `<p>Hola ${escapeHtml(name)}:</p><p>Tu membresía de KindWell cambiará de <strong>${escapeHtml(previousTier)}</strong> a <strong>${escapeHtml(nextTier)}</strong>.</p>${linkHtml(link, 'Ver los detalles de mi membresía')}<p>Con cariño,<br>El equipo de KindWell</p>`
    }),
    'pt-BR': (name, previousTier, nextTier, link) => ({
      subject: 'Uma nova fase para sua assinatura do KindWell',
      text: `Olá, ${name}!\n\nSua assinatura do KindWell mudará de ${previousTier} para ${nextTier}. Os detalhes atualizados estão aqui:\n${link}\n\nCom carinho,\nEquipe KindWell`,
      html: `<p>Olá, ${escapeHtml(name)}!</p><p>Sua assinatura do KindWell mudará de <strong>${escapeHtml(previousTier)}</strong> para <strong>${escapeHtml(nextTier)}</strong>.</p>${linkHtml(link, 'Ver os detalhes da minha assinatura')}<p>Com carinho,<br>Equipe KindWell</p>`
    })
  },
  membershipCancellation: {
    en: (name, tier, link) => ({
      subject: 'Your KindWell membership is set to end',
      text: `Hello ${name},\n\nWe have noted the cancellation of your ${tier} KindWell membership. You can review your account details here:\n${link}\n\nThank you for spending this part of your journey with us.\n\nWarmly,\nThe KindWell Team`,
      html: `<p>Hello ${escapeHtml(name)},</p><p>We have noted the cancellation of your <strong>${escapeHtml(tier)}</strong> KindWell membership.</p>${linkHtml(link, 'Review your account')}<p>Thank you for spending this part of your journey with us.</p><p>Warmly,<br>The KindWell Team</p>`
    }),
    es: (name, tier, link) => ({
      subject: 'Tu membresía de KindWell está por terminar',
      text: `Hola ${name}:\n\nHemos registrado la cancelación de tu membresía ${tier} de KindWell. Puedes revisar los detalles de tu cuenta aquí:\n${link}\n\nGracias por compartir este tramo del camino con nosotros.\n\nCon cariño,\nEl equipo de KindWell`,
      html: `<p>Hola ${escapeHtml(name)}:</p><p>Hemos registrado la cancelación de tu membresía <strong>${escapeHtml(tier)}</strong> de KindWell.</p>${linkHtml(link, 'Revisar mi cuenta')}<p>Gracias por compartir este tramo del camino con nosotros.</p><p>Con cariño,<br>El equipo de KindWell</p>`
    }),
    'pt-BR': (name, tier, link) => ({
      subject: 'Sua assinatura do KindWell será encerrada',
      text: `Olá, ${name}!\n\nRegistramos o cancelamento da sua assinatura ${tier} do KindWell. Você pode conferir os detalhes da sua conta aqui:\n${link}\n\nObrigado por compartilhar este trecho da sua jornada com a gente.\n\nCom carinho,\nEquipe KindWell`,
      html: `<p>Olá, ${escapeHtml(name)}!</p><p>Registramos o cancelamento da sua assinatura <strong>${escapeHtml(tier)}</strong> do KindWell.</p>${linkHtml(link, 'Conferir minha conta')}<p>Obrigado por compartilhar este trecho da sua jornada com a gente.</p><p>Com carinho,<br>Equipe KindWell</p>`
    })
  },
  storeReceipt: {
    en: (name, orderId, items, total) => ({
      subject: `A little note about your KindWell order (#${orderNumber(orderId)})`,
      text: `Hello ${name},\n\nThank you for your KindWell order.\n\n${itemText(formatItems(items))}\n\nTotal: $${Number(total).toFixed(2)}\n\nWe hope it brings something useful to your day.\n\nWarmly,\nKindWell`,
      html: `<p>Hello ${escapeHtml(name)},</p><p>Thank you for your KindWell order.</p>${itemHtml(formatItems(items))}<p><strong>Total: $${Number(total).toFixed(2)}</strong></p><p>We hope it brings something useful to your day.</p><p>Warmly,<br>KindWell</p>`
    }),
    es: (name, orderId, items, total) => ({
      subject: `Una nota sobre tu pedido de KindWell (#${orderNumber(orderId)})`,
      text: `Hola ${name}:\n\nGracias por tu pedido en KindWell.\n\n${itemText(formatItems(items))}\n\nTotal: $${Number(total).toFixed(2)}\n\nOjalá te acompañe de una manera útil y amable.\n\nCon cariño,\nKindWell`,
      html: `<p>Hola ${escapeHtml(name)}:</p><p>Gracias por tu pedido en KindWell.</p>${itemHtml(formatItems(items))}<p><strong>Total: $${Number(total).toFixed(2)}</strong></p><p>Ojalá te acompañe de una manera útil y amable.</p><p>Con cariño,<br>KindWell</p>`
    }),
    'pt-BR': (name, orderId, items, total) => ({
      subject: `Um recado sobre seu pedido no KindWell (#${orderNumber(orderId)})`,
      text: `Olá, ${name}!\n\nObrigado pelo seu pedido no KindWell.\n\n${itemText(formatItems(items))}\n\nTotal: $${Number(total).toFixed(2)}\n\nEsperamos que ele seja útil e acolhedor no seu dia.\n\nCom carinho,\nKindWell`,
      html: `<p>Olá, ${escapeHtml(name)}!</p><p>Obrigado pelo seu pedido no KindWell.</p>${itemHtml(formatItems(items))}<p><strong>Total: $${Number(total).toFixed(2)}</strong></p><p>Esperamos que ele seja útil e acolhedor no seu dia.</p><p>Com carinho,<br>KindWell</p>`
    })
  },
  protectedDownload: {
    en: (name, title, link) => ({
      subject: 'Your KindWell download is ready',
      text: `Hello ${name},\n\nYour protected download, ${title}, is ready here:\n${link}\n\nThe link is personal and may expire for your protection.\n\nWarmly,\nKindWell`,
      html: `<p>Hello ${escapeHtml(name)},</p><p>Your protected download, <strong>${escapeHtml(title)}</strong>, is ready.</p>${linkHtml(link, 'Open your download')}<p>The link is personal and may expire for your protection.</p><p>Warmly,<br>KindWell</p>`
    }),
    es: (name, title, link) => ({
      subject: 'Tu descarga de KindWell está lista',
      text: `Hola ${name}:\n\nTu descarga protegida, ${title}, ya está lista:\n${link}\n\nEl enlace es personal y puede caducar para protegerte.\n\nCon cariño,\nKindWell`,
      html: `<p>Hola ${escapeHtml(name)}:</p><p>Tu descarga protegida, <strong>${escapeHtml(title)}</strong>, ya está lista.</p>${linkHtml(link, 'Abrir mi descarga')}<p>El enlace es personal y puede caducar para protegerte.</p><p>Con cariño,<br>KindWell</p>`
    }),
    'pt-BR': (name, title, link) => ({
      subject: 'Seu download do KindWell está pronto',
      text: `Olá, ${name}!\n\nSeu download protegido, ${title}, já está disponível:\n${link}\n\nO link é pessoal e pode expirar para sua proteção.\n\nCom carinho,\nKindWell`,
      html: `<p>Olá, ${escapeHtml(name)}!</p><p>Seu download protegido, <strong>${escapeHtml(title)}</strong>, já está disponível.</p>${linkHtml(link, 'Abrir meu download')}<p>O link é pessoal e pode expirar para sua proteção.</p><p>Com carinho,<br>KindWell</p>`
    })
  },
  physicalOrderReceived: {
    en: (name, orderId) => ({
      subject: `We received your KindWell order (#${orderNumber(orderId)})`,
      text: `Hello ${name},\n\nWe received your KindWell order (#${orderNumber(orderId)}). We will share another note when it begins its journey to you.\n\nWarmly,\nKindWell`,
      html: `<p>Hello ${escapeHtml(name)},</p><p>We received your KindWell order <strong>#${orderNumber(orderId)}</strong>.</p><p>We will share another note when it begins its journey to you.</p><p>Warmly,<br>KindWell</p>`
    }),
    es: (name, orderId) => ({
      subject: `Recibimos tu pedido de KindWell (#${orderNumber(orderId)})`,
      text: `Hola ${name}:\n\nRecibimos tu pedido de KindWell (#${orderNumber(orderId)}). Te avisaremos cuando comience su camino hacia ti.\n\nCon cariño,\nKindWell`,
      html: `<p>Hola ${escapeHtml(name)}:</p><p>Recibimos tu pedido de KindWell <strong>#${orderNumber(orderId)}</strong>.</p><p>Te avisaremos cuando comience su camino hacia ti.</p><p>Con cariño,<br>KindWell</p>`
    }),
    'pt-BR': (name, orderId) => ({
      subject: `Recebemos seu pedido no KindWell (#${orderNumber(orderId)})`,
      text: `Olá, ${name}!\n\nRecebemos seu pedido no KindWell (#${orderNumber(orderId)}). Avisaremos quando ele começar a seguir até você.\n\nCom carinho,\nKindWell`,
      html: `<p>Olá, ${escapeHtml(name)}!</p><p>Recebemos seu pedido no KindWell <strong>#${orderNumber(orderId)}</strong>.</p><p>Avisaremos quando ele começar a seguir até você.</p><p>Com carinho,<br>KindWell</p>`
    })
  },
  physicalOrderShipped: {
    en: (name, orderId, trackingLink) => ({
      subject: `Your KindWell order is on its way (#${orderNumber(orderId)})`,
      text: `Hello ${name},\n\nYour KindWell order (#${orderNumber(orderId)}) is on its way.\n\n${trackingLink ? `You can follow its progress here:\n${trackingLink}\n\n` : ''}Warmly,\nKindWell`,
      html: `<p>Hello ${escapeHtml(name)},</p><p>Your KindWell order <strong>#${orderNumber(orderId)}</strong> is on its way.</p>${trackingLink ? linkHtml(trackingLink, 'Follow your delivery') : ''}<p>Warmly,<br>KindWell</p>`
    }),
    es: (name, orderId, trackingLink) => ({
      subject: `Tu pedido de KindWell está en camino (#${orderNumber(orderId)})`,
      text: `Hola ${name}:\n\nTu pedido de KindWell (#${orderNumber(orderId)}) ya está en camino.\n\n${trackingLink ? `Puedes seguirlo aquí:\n${trackingLink}\n\n` : ''}Con cariño,\nKindWell`,
      html: `<p>Hola ${escapeHtml(name)}:</p><p>Tu pedido de KindWell <strong>#${orderNumber(orderId)}</strong> ya está en camino.</p>${trackingLink ? linkHtml(trackingLink, 'Seguir mi entrega') : ''}<p>Con cariño,<br>KindWell</p>`
    }),
    'pt-BR': (name, orderId, trackingLink) => ({
      subject: `Seu pedido do KindWell está a caminho (#${orderNumber(orderId)})`,
      text: `Olá, ${name}!\n\nSeu pedido do KindWell (#${orderNumber(orderId)}) está a caminho.\n\n${trackingLink ? `Você pode acompanhá-lo aqui:\n${trackingLink}\n\n` : ''}Com carinho,\nKindWell`,
      html: `<p>Olá, ${escapeHtml(name)}!</p><p>Seu pedido do KindWell <strong>#${orderNumber(orderId)}</strong> está a caminho.</p>${trackingLink ? linkHtml(trackingLink, 'Acompanhar minha entrega') : ''}<p>Com carinho,<br>KindWell</p>`
    })
  }
};

export function renderEmailTemplate(templateName, locale, values) {
  const selectedLocale = normalizeLocale(locale);
  const template = emailTemplates[templateName]?.[selectedLocale]
    || emailTemplates[templateName]?.en;
  if (!template) throw new Error(`Unknown transactional email template: ${templateName}`);
  return template(...values);
}

export async function sendTemplateEmail({ env = {}, to, templateName, locale = 'en', values = [] }) {
  const content = renderEmailTemplate(templateName, locale, values);
  return sendEmail({ env, to, ...content, locale });
}

async function sendFutureTemplateEmail({
  db,
  env = {},
  provider,
  eventKey,
  eventType,
  to,
  templateName,
  locale = 'en',
  values = []
}) {
  if (!provider || provider === 'mock' || provider.endsWith('_mock')) {
    return { success: true, skipped: true, reason: 'provider_not_live' };
  }
  const content = renderEmailTemplate(templateName, locale, values);
  return sendIdempotentEmail({
    db,
    env,
    provider,
    eventKey,
    eventType,
    to,
    ...content,
    locale
  });
}

export const sendMembershipActivationEmail = (args) => sendFutureTemplateEmail({
  ...args,
  eventType: 'membership_activation',
  templateName: 'membershipActivation',
  values: [args.name, args.tier, args.accountLink || `${getAppOrigin(args.env)}/account`]
});

export const sendMembershipChangeEmail = (args) => sendFutureTemplateEmail({
  ...args,
  eventType: 'membership_change',
  templateName: 'membershipChange',
  values: [args.name, args.previousTier, args.nextTier, args.accountLink || `${getAppOrigin(args.env)}/account`]
});

export const sendMembershipCancellationEmail = (args) => sendFutureTemplateEmail({
  ...args,
  eventType: 'membership_cancellation',
  templateName: 'membershipCancellation',
  values: [args.name, args.tier, args.accountLink || `${getAppOrigin(args.env)}/account`]
});

export const sendStoreReceiptEmail = (args) => sendFutureTemplateEmail({
  ...args,
  eventType: 'store_receipt',
  templateName: 'storeReceipt',
  values: [args.name, args.orderId, args.items, args.total]
});

export const sendProtectedDownloadEmail = (args) => sendFutureTemplateEmail({
  ...args,
  eventType: 'protected_download',
  templateName: 'protectedDownload',
  values: [args.name, args.title, args.downloadLink]
});

export const sendPhysicalOrderReceivedEmail = (args) => sendFutureTemplateEmail({
  ...args,
  eventType: 'physical_order_received',
  templateName: 'physicalOrderReceived',
  values: [args.name, args.orderId]
});

export const sendPhysicalOrderShippedEmail = (args) => sendFutureTemplateEmail({
  ...args,
  eventType: 'physical_order_shipped',
  templateName: 'physicalOrderShipped',
  values: [args.name, args.orderId, args.trackingLink]
});
