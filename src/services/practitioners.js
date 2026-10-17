// src/services/practitioners.js
// Truthful practitioner directory and contemplative care network for KindWell

/**
 * Lists all active practitioners for a given locale.
 */
export async function listPractitioners(db, locale = 'en') {
  const rows = await db.prepare(`
    SELECT p.id, p.name, p.slug, p.is_owner, p.photo_url, p.modality, p.credentials,
           p.location, p.is_remote, p.is_in_person, p.accepting_clients,
           p.availability_note, p.booking_url,
           pt.modality_display, pt.bio, pt.approach, pt.availability_text
    FROM practitioners p
    JOIN practitioner_translations pt ON p.id = pt.practitioner_id AND pt.locale = ?
    ORDER BY p.sort_order ASC
  `).bind(locale).all();

  return rows.results.map(r => ({
    id: r.id,
    name: r.name,
    slug: r.slug,
    isOwner: Boolean(r.is_owner),
    photoUrl: r.photo_url,
    credentials: r.credentials,
    location: r.location,
    isRemote: Boolean(r.is_remote),
    isInPerson: Boolean(r.is_in_person),
    acceptingClients: Boolean(r.accepting_clients),
    availabilityNote: r.availability_note,
    bookingUrl: r.booking_url,
    modalityDisplay: r.modality_display,
    bio: r.bio,
    approach: r.approach,
    availabilityText: r.availability_text
  }));
}

/**
 * Fetches a single practitioner by their URL slug.
 */
export async function getPractitionerBySlug(db, slug, locale = 'en') {
  const r = await db.prepare(`
    SELECT p.id, p.name, p.slug, p.is_owner, p.photo_url, p.modality, p.credentials,
           p.location, p.is_remote, p.is_in_person, p.accepting_clients,
           p.availability_note, p.booking_url,
           pt.modality_display, pt.bio, pt.approach, pt.availability_text
    FROM practitioners p
    JOIN practitioner_translations pt ON p.id = pt.practitioner_id AND pt.locale = ?
    WHERE p.slug = ?
  `).bind(locale, slug).first();

  if (!r) return null;

  return {
    id: r.id,
    name: r.name,
    slug: r.slug,
    isOwner: Boolean(r.is_owner),
    photoUrl: r.photo_url,
    credentials: r.credentials,
    location: r.location,
    isRemote: Boolean(r.is_remote),
    isInPerson: Boolean(r.is_in_person),
    acceptingClients: Boolean(r.accepting_clients),
    availabilityNote: r.availability_note,
    bookingUrl: r.booking_url,
    modalityDisplay: r.modality_display,
    bio: r.bio,
    approach: r.approach,
    availabilityText: r.availability_text
  };
}

/**
 * Information on KindWell's network standards, future modalities, and ethical guardrails.
 */
export function getPractitionerNetworkStandards(locale = 'en') {
  const content = {
    en: {
      headline: 'Our approach to companion care',
      lead: 'KindWell supports whole-person wellness through grounded, non-clinical companion care. We clearly distinguish between licensed clinical mental health therapy and spiritual, somatic, or energetic care.',
      modalities: [
        { name: 'Spiritual Counseling & Direction', desc: 'Contemplative listening, faith transitions, discernment, and prayerful companionship.' },
        { name: 'Reiki & Subtle Energy Education', desc: 'Mindful presence, deep relaxation, and gentle touch traditions.' },
        { name: 'Grief Companionship', desc: 'Unhurried holding of space for sorrow, bereavement, and life transitions without pressure to fix.' },
        { name: 'Meditation & Breath Mentorship', desc: 'Accessible, somatic mindfulness tools tailored for everyday nervous system health.' },
        { name: 'Holistic & Traditional Wellness', desc: 'Educating on herbs, teas, circadian rhythms, and restorative lifestyle habits.' }
      ],
      ethicalPledge: 'All practitioners affiliated with KindWell commit to strict ethical boundaries: never diagnosing illness, never advising clients to alter medical prescriptions, and actively referring to licensed clinicians or crisis support whenever indicated.',
      onboardingNote: 'We are thoughtfully building our network of ethical, compassionate companions. If you are an experienced practitioner aligned with our values, we welcome an introductory conversation.'
    },
    es: {
      headline: 'Nuestro enfoque de acompañamiento',
      lead: 'En KindWell entendemos el bienestar como un proceso integral y no clínico. Diferenciamos con absoluta claridad la psicoterapia profesional de los espacios de escucha espiritual, somática o energética.',
      modalities: [
        { name: 'Acompañamiento y discernimiento espiritual', desc: 'Escucha atenta, oración compartida y apoyo en momentos de cambio de vida.' },
        { name: 'Tradición y práctica de Reiki', desc: 'Silencio, relajación profunda y cuidado respetuoso mediante la presencia.' },
        { name: 'Acompañamiento en el duelo', desc: 'Espacios compasivos para transitar la pérdida sin prisa ni juicios.' },
        { name: 'Guía de meditación y respiración', desc: 'Ejercicios sencillos para cultivar la calma en el sistema nervioso.' },
        { name: 'Bienestar natural y botánico', desc: 'Plantas tradicionales, infusiones y descanso consciente.' }
      ],
      ethicalPledge: 'Todo acompañante en KindWell suscribe un código ético firme: no emitir diagnósticos médicos, no modificar tratamientos farmacológicos y derivar siempre a profesionales de la salud mental ante cualquier signo de alerta.',
      onboardingNote: 'Estamos conformando gradualmente una red de acompañantes éticos y compasivos. Si ejerces una de estas disciplinas con vocación de servicio, nos encantará conocerte.'
    },
    'pt-BR': {
      headline: 'Nossa visão sobre o cuidado integrativo',
      lead: 'O KindWell apoia o bem-estar de forma integral e não clínica. Deixamos sempre muito nítida a diferença entre a psicoterapia clínica e o acompanhamento contemplativo, corporal ou energético.',
      modalities: [
        { name: 'Direção e escuta espiritual', desc: 'Acolhimento sereno, oração e apoio em momentos de decisão ou transição.' },
        { name: 'Tradição e práticas de Reiki', desc: 'Presença tranquila, relaxamento profundo e toque afetuoso.' },
        { name: 'Acolhimento no luto', desc: 'Espaço seguro para elaborar perdas e saudades no seu próprio ritmo.' },
        { name: 'Orientação em meditação e respiração', desc: 'Práticas somáticas simples para acalmar o corpo na rotina.' },
        { name: 'Saberes tradicionais e botânicos', desc: 'Uso de chás caseiros, respeito ao ciclo do sono e hábitos saudáveis.' }
      ],
      ethicalPledge: 'Todos os profissionais que colaboram com o KindWell seguem limites éticos rigorosos: não realizam diagnósticos clínicos, não interferem em prescrições médicas e orientam a busca por atendimento especializado sempre que necessário.',
      onboardingNote: 'Estamos construindo uma rede afetuosa de cuidadores e praticantes éticos. Se você atua com essa sensibilidade, teremos alegria em conversar.'
    }
  };

  return content[locale] || content.en;
}
