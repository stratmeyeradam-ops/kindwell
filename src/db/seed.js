// src/db/seed.js
// Comprehensive seed data loader for KindWell D1 database

import { readFileSync } from 'node:fs';
import { practices, remedies, crystals } from './content-data.js';
import { QUIZZES } from './content/quizzes.js';
import { COURSES_A } from './content/courses-a.js';
import { COURSES_B } from './content/courses-b.js';
import { EXTRA_PRACTICES, EXTRA_REMEDIES, EXTRA_REIKI_ARTICLES, EXTRA_WELLNESS_LETTERS } from './content/library.js';
import { EXTRA_CIRCLE_SPACES, CIRCLE_STARTERS } from './content/circle.js';
import { LOCAL_CIRCLE_SPACES, LOCAL_CIRCLE_STARTERS } from './content/circle-local.js';

const catalogDir = new URL('./catalog/', import.meta.url);
function readCatalog(name) {
  return JSON.parse(readFileSync(new URL(name, catalogDir), 'utf8'));
}

export async function seedDatabase(db) {
  const now = new Date().toISOString();

  // 1. Seed Practices
  for (const p of [...practices, ...EXTRA_PRACTICES]) {
    await db.prepare(`
      INSERT OR REPLACE INTO practices (id, category, duration_minutes, slug, is_premium, created_at)
      VALUES (?, ?, ?, ?, ?, ?)
    `).bind(p.id, p.category, p.duration, p.slug, p.is_premium, now).run();

    for (const locale of ['en', 'es', 'pt-BR']) {
      const t = p[locale];
      if (t) {
        await db.prepare(`
          INSERT OR REPLACE INTO practice_translations (
            practice_id, locale, title, subtitle, description, steps, why_it_helps
          ) VALUES (?, ?, ?, ?, ?, ?, ?)
        `).bind(p.id, locale, t.title, t.subtitle, t.description, t.steps, t.why_it_helps).run();
      }
    }
  }

  // 2. Seed Remedies
  for (const r of [...remedies, ...EXTRA_REMEDIES]) {
    await db.prepare(`
      INSERT OR REPLACE INTO remedies (id, category, slug, created_at)
      VALUES (?, ?, ?, ?)
    `).bind(r.id, r.category, r.slug, now).run();

    for (const locale of ['en', 'es', 'pt-BR']) {
      const t = r[locale];
      if (t) {
        await db.prepare(`
          INSERT OR REPLACE INTO remedy_translations (
            remedy_id, locale, title, summary, botanical_allies, somatic_approaches, cautions, pregnancy_warning, escalation_flags
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        `).bind(r.id, locale, t.title, t.summary, t.allies, t.somatic, t.cautions, t.pregnancy, t.escalation).run();
      }
    }
  }

  // 3. Seed Crystals
  for (const c of crystals) {
    for (const locale of ['en', 'es', 'pt-BR']) {
      const t = c[locale];
      if (t) {
        await db.prepare(`
          INSERT OR REPLACE INTO crystals (
            id, slug, name, locale, spiritual_association, traditions, appearance, care_instructions, mohs_hardness, reflection_practice, safety_notes
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `).bind(c.id, c.slug, t.name, locale, t.spiritual, t.traditions, t.appearance, t.care, c.mohs, t.reflection, t.safety).run();
      }
    }
  }

  // 4. Seed Reiki Educational Articles
  const reikiArticles = [
    {
      id: 'reiki-foundations',
      slug: 'understanding-reiki-traditions',
      sort_order: 1,
      en: {
        title: 'Understanding Reiki: History, Presence, and Quiet Care',
        summary: 'An honest look at what Reiki is, its roots with Mikao Usui, and how gentle presence supports wellness.',
        content: `### What Reiki is and how it began\n\nReiki is a Japanese tradition of spiritual and meditative healing founded by Mikao Usui in Japan in the early 1920s. The word itself brings together *rei* (sacred, subtle, or spiritual) and *ki* (vital life energy).\n\nAt its core, Reiki is not a medical procedure or a pharmaceutical intervention. It is an art of quiet presence, respectful touch or near-body placement, and mindful centering. Through deep personal grounding and clear ethical boundaries, the practitioner offers a steady, calm, and supportive space where the recipient's nervous system can shift into deep relaxation.\n\n### The five principles of Usui Reiki (Gokai)\n\n1. Just for today, do not be angry.\n2. Just for today, do not worry.\n3. Be filled with gratitude.\n4. Devote yourself to your work.\n5. Be kind to all people.\n\n### What to expect in a session\n\nYou remain fully clothed, resting comfortably on a massage table or seated in a quiet chair. The practitioner places their hands gently on or slightly above traditional energy centers. Many report feeling gentle warmth or simply a profound sense of deep, peaceful rest.\n\n### Ethical and medical boundaries\n\nReiki is an educational and complementary practice; it is never a substitute for medical evaluation, psychiatric care, or prescription medications.`
      },
      es: {
        title: 'Comprender el Reiki: Tradición, presencia y serenidad',
        summary: 'Una mirada sincera sobre el Reiki, sus orígenes con Mikao Usui y el valor del acompañamiento respetuoso.',
        content: `### Qué es el Reiki y sus orígenes\n\nEl Reiki es una tradición de origen japonés desarrollada a comienzos de la década de 1920 por Mikao Usui. Su nombre une dos ideas: *rei* (lo sutil, sagrado o universal) y *ki* (la energía vital que sostiene la vida).\n\nLejos de promesas milagrosas, el Reiki tradicional es una práctica meditativa y de acompañamiento. A través del silencio, la respiración y la imposición suave de manos, el practicante brinda un entorno seguro donde la persona puede descansar profundamente y permitir que su sistema nervioso recupere el equilibrio.\n\n### Los cinco principios cotidianos (Gokai)\n\n1. Solo por hoy, no te enojes.\n2. Solo por hoy, no te preocupes.\n3. Vive con gratitud.\n4. Trabaja con dedicación y honestidad.\n5. Sé amable con los demás.\n\n### Límites claros y éticos\n\nEl Reiki en KindWell es un complemento de bienestar y reflexión espiritual. No sustituye la atención médica ni psicológica, no emite diagnósticos ni modifica tratamientos prescritos por profesionales de la salud.`
      },
      'pt-BR': {
        title: 'Compreendendo o Reiki: História, presença e acolhimento',
        summary: 'Uma reflexão honesta sobre o Reiki, suas raízes com Mikao Usui e o descanso profundo que ele proporciona.',
        content: `### O que é o Reiki e como nasceu essa tradição\n\nO Reiki é uma prática contemplativa de origem japonesa sistematizada por Mikao Usui no início do século XX. O termo reúne *rei* (dimensão espiritual e sutil) e *ki* (energia vital que permeia a existência).\n\nNão se trata de um procedimento médico, mas de uma prática de presença consciente e toque suave. O objetivo é criar um espaço sereno onde o corpo e a mente possam desacelerar, ativando as respostas naturais de relaxamento e recuperação.\n\n### Os cinco princípios diários (Gokai)\n\n1. Só por hoje, não se zangue.\n2. Só por hoje, não se preocupe.\n3. Seja grato.\n4. Dedique-se com integridade ao seu dia.\n5. Seja gentil com todos.\n\n### Ética e responsabilidade\n\nO Reiki é uma ferramenta de suporte integrativo e bem-estar. Jamais substitui consultas médicas, tratamentos psiquiátricos ou terapias necessárias para a saúde física e mental.`
      }
    },
    {
      id: 'reiki-self-practice',
      slug: 'reiki-self-practice-and-meditation',
      sort_order: 2,
      en: {
        title: 'Self-Practice & Daily Contemplation',
        summary: 'How to bring gentle touch, mindful breath, and compassionate stillness into your own daily life.',
        content: `### The gift of self-treatment\n\nOne of the most practical and grounding aspects of traditional Reiki is self-practice (*Jiko Joka Ho*). You do not need professional certification to place your own warm hands over your chest, breathe with quiet intention, and offer yourself unconditional acceptance.\n\n### A simple 10-minute self-practice ritual\n\n1. **Gassho (Centering):** Bring your palms together at heart level. Take three steady breaths.\n2. **Head & Temples:** Rest your palms gently over your closed eyes or at the temples.\n3. **Heart & Solar Center:** Place one hand on your heart and one on your upper belly.\n4. **Closing Gratitude:** Return hands to prayer position, acknowledging the quiet stillness you cultivated.`
      },
      es: {
        title: 'Práctica personal y meditación cotidiana',
        summary: 'Cómo integrar el tacto suave, la respiración atenta y la calma en tu propia rutina diaria.',
        content: `### El valor de cuidarse a uno mismo\n\nEl aspecto más accesible del Reiki es la autopráctica. No necesitas títulos para apoyar tus propias manos sobre el pecho, respirar con cariño y regalarte unos minutos de silencio.\n\n### Ritual de diez minutos para el hogar\n\n1. **Centramiento:** Junta las palmas a la altura del corazón y respira tres veces con tranquilidad.\n2. **Ojos y rostro:** Apoya suavemente las manos sobre los ojos o la frente.\n3. **Pecho y abdomen:** Coloca una mano en el corazón y otra en el vientre.\n4. **Cierre:** Da las gracias por este instante de quietud y regresa a tus actividades con serenidad.`
      },
      'pt-BR': {
        title: 'Autocuidado e meditação diária',
        summary: 'Como incorporar o toque suave, a respiração consciente e a paz à sua própria rotina.',
        content: `### O valor do autocuidado na prática pessoal\n\nA essência mais bonita do Reiki está na possibilidade de cuidar de si. Você pode descansar as próprias mãos sobre o peito e respirar com afeto sem precisar de nenhuma técnica complicada.\n\n### Um ritual simples de 10 minutos\n\n1. **Centralização:** Junte as mãos diante do coração e faça três respirações calmas.\n2. **Rosto e têmporas:** Acomode as palmas suavemente sobre os olhos.\n3. **Peito e respiração:** Uma mão no peito e outra no abdômen, acompanhando o ritmo do corpo.\n4. **Finalização:** Agradeça pelo momento de pausa e retome o dia com mais leveza.`
      }
    }
  ];

  for (const a of [...reikiArticles, ...EXTRA_REIKI_ARTICLES]) {
    for (const locale of ['en', 'es', 'pt-BR']) {
      const t = a[locale];
      if (t) {
        await db.prepare(`
          INSERT OR REPLACE INTO reiki_articles (
            id, slug, locale, title, summary, content, sort_order, created_at
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        `).bind(a.id + '_' + locale, a.slug, locale, t.title, t.summary, t.content, a.sort_order, now).run();
      }
    }
  }

  // 5. Seed Daily Affirmations (30 days)
  const today = new Date();
  const affTemplates = [
    {
      en: {
        aff: 'You do not have to solve everything today.',
        ref: 'Notice the weight of trying to figure out the next ten years in the next ten minutes. Put that down for a little while. Today only asks you to live today.',
        prompt: 'What is one question you can comfortably leave unanswered until tomorrow?'
      },
      es: {
        aff: 'No tienes que resolverlo todo el día de hoy.',
        ref: 'Observa el cansancio de querer solucionar los próximos años en los próximos diez minutos. Suelta esa carga un momento; hoy solo te pide vivir el presente.',
        prompt: '¿Qué asunto pendiente puedes dejar descansar en paz hasta mañana?'
      },
      'pt-BR': {
        aff: 'Você não precisa resolver tudo hoje.',
        ref: 'Repare no peso de tentar solucionar o futuro inteiro nos próximos minutos. Coloque essa mala no chão por um instante. O dia de hoje pede apenas que você viva o agora.',
        prompt: 'Qual pergunta você pode deixar em aberto até amanhã com tranquilidade?'
      }
    },
    {
      en: {
        aff: 'Gentle doesn’t mean shallow.',
        ref: 'Gentleness takes immense strength: the courage to pause, the wisdom to refrain from harsh words, and the patience to let healing unfold in its own time.',
        prompt: 'Where in your life would a little more gentleness actually create more resilience?'
      },
      es: {
        aff: 'La ternura no es debilidad.',
        ref: 'Ser suave requiere gran valentía: la fortaleza de hacer una pausa, de evitar juicios duros y la paciencia de permitir que las cosas maduren a su ritmo.',
        prompt: '¿En qué situación de tu vida una mirada más comprensiva te daría mayor paz?'
      },
      'pt-BR': {
        aff: 'A gentileza não é superficial.',
        ref: 'Ser gentil exige uma coragem profunda: a firmeza de pausar, a sabedoria de não reagir com aspereza e a paciência com o próprio ritmo de crescimento.',
        prompt: 'Em qual parte da sua rotina um pouco mais de ternura traria mais serenidade?'
      }
    },
    {
      en: {
        aff: 'A steadier place to land.',
        ref: 'When the world is loud and demanding, your breath is a quiet sanctuary that is always available to you right where you sit.',
        prompt: 'What physical anchor helps you feel supported when your thoughts feel scattered?'
      },
      es: {
        aff: 'Un lugar más firme donde aterrizar.',
        ref: 'Cuando el entorno es ruidoso y exigente, tu respiración es un refugio discreto que siempre está disponible justo donde estás.',
        prompt: '¿Qué apoyo físico te ayuda a sentir estabilidad cuando la mente está dispersa?'
      },
      'pt-BR': {
        aff: 'Um pouso mais sereno e seguro.',
        ref: 'Quando o mundo ao redor parecer agitado demais, sua respiração é um refúgio simples e sempre presente no lugar onde você está.',
        prompt: 'Que detalhe ao seu redor ajuda a trazer firmeza quando a mente se perde em preocupações?'
      }
    }
  ];

  for (let i = 0; i < 30; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i - 5);
    const dateStr = d.toISOString().split('T')[0];
    const item = affTemplates[i % affTemplates.length];

    for (const locale of ['en', 'es', 'pt-BR']) {
      const t = item[locale];
      const affId = `aff_${dateStr}_${locale}`;
      await db.prepare(`
        INSERT OR REPLACE INTO affirmations (
          id, date, locale, affirmation, reflection, journal_prompt, grounding_practice_id, is_member_only, created_at
        ) VALUES (?, ?, ?, ?, ?, ?, 'arrive', 0, ?)
      `).bind(affId, dateStr, locale, t.aff, t.ref, t.prompt, now).run();
    }
  }

  // 6. Seed Courses (3 Courses with Modules and Lessons)
  const courses = [
    {
      id: 'course_compassion',
      slug: 'self-compassion-and-kindness',
      is_premium: 1,
      level: 'All levels',
      hours: 3.0,
      en: {
        title: 'Self-Compassion & Kindness Practices',
        subtitle: 'Replacing harsh self-judgment with grounded, honest care you can actually use.',
        description: 'A structured 4-module journey into mindful presence, the universal nature of human difficulty, and practical ways to speak kindly to yourself in moments of crisis.',
        outcomes: JSON.stringify(['Master the three-part kindness pause in high-stress moments', 'Dismantle the myth that self-criticism leads to success', 'Cultivate emotional containers that prevent overwhelm'])
      },
      es: {
        title: 'Prácticas de autocompasión y bondad',
        subtitle: 'Sustituir el diálogo interno severo por un cuidado sincero y aplicable a la vida real.',
        description: 'Un recorrido en cuatro módulos para cultivar la presencia plena, comprender la fragilidad humana compartida y tratarse con paciencia durante los momentos difíciles.',
        outcomes: JSON.stringify(['Integrar la pausa de autocompasión en situaciones tensas', 'Comprender por qué la autocrítica constante agota tu energía', 'Crear espacios de descanso emocional en el día a día'])
      },
      'pt-BR': {
        title: 'Práticas de autocompaixão e gentileza',
        subtitle: 'Transformando a autocrítica dura em um apoio sincero e realizável no cotidiano.',
        description: 'Uma jornada em quatro etapas para desenvolver presença, acolher as dificuldades humanas e falar consigo mesmo com respeito e paciência.',
        outcomes: JSON.stringify(['Aprender a pausa da gentileza para momentos de sobrecarga', 'Perceber que a autocrítica não é a chave para o crescimento', 'Construir hábitos diários de cuidado e respeito pelo seu corpo'])
      },
      modules: [
        {
          id: 'mod_comp_1',
          slug: 'understanding-the-inner-voice',
          sort: 1,
          en: { title: 'Understanding the Inner Voice', description: 'Examining why the human brain defaults to self-criticism and how to shift awareness.' },
          es: { title: 'Comprender la voz interior', description: 'Por qué la mente tiende a la autocrítica y cómo abrir espacio a la serenidad.' },
          'pt-BR': { title: 'Compreendendo o diálogo interno', description: 'Por que nossa mente costuma ser dura e como cultivar mais afeto.' },
          lessons: [
            {
              id: 'les_comp_1',
              slug: 'arrival-and-honest-inquiry',
              duration: 15,
              sort: 1,
              en: {
                title: 'Arrival & Honest Inquiry',
                content: 'Welcome to this exploration. We begin not by trying to banish our critical thoughts, but by noticing the tone in which we speak to ourselves when things go wrong.',
                prompt: 'What words do you most frequently tell yourself when you make an everyday mistake?'
              },
              es: {
                title: 'Llegada e indagación sincera',
                content: 'Te damos la bienvenida. Comenzamos no luchando contra los pensamientos autocríticos, sino reconociendo el tono con el que nos hablamos cuando algo sale mal.',
                prompt: '¿Qué sueles decirte cuando cometes una pequeña equivocación en el día?'
              },
              'pt-BR': {
                title: 'Chegada e escuta honesta',
                content: 'Boas-vindas a este aprendizado. Começamos sem forçar a positividade, apenas prestando atenção em como nos tratamos nos dias difíceis.',
                prompt: 'Quais frases costumam surgir na sua cabeça diante de um pequeno erro cotidiano?'
              }
            },
            {
              id: 'les_comp_2',
              slug: 'the-three-components-of-care',
              duration: 20,
              sort: 2,
              en: {
                title: 'The Three Components of Compassion',
                content: 'Dr. Kristin Neff’s pioneering research identifies three core pillars: Mindfulness, Common Humanity, and Self-Kindness.',
                prompt: 'Which of these three pillars feels most foreign or difficult for you right now?'
              },
              es: {
                title: 'Los tres pilares de la compasión',
                content: 'La investigación contemporánea destaca tres pilares: Presencia consciente, Humanidad compartida y Amabilidad sincera.',
                prompt: '¿Cuál de estos tres elementos te resulta más difícil de practicar hoy?'
              },
              'pt-BR': {
                title: 'Os três pilares do cuidado',
                content: 'Estudos sobre autocompaixão identificam três eixos essenciais: Atenção plena, Humanidade compartilhada e Gentileza prática.',
                prompt: 'Qual desses três aspectos é o maior desafio para você hoje?'
              }
            }
          ]
        }
      ]
    },
    {
      id: 'course_acceptance',
      slug: 'radical-acceptance-foundations',
      is_premium: 1,
      level: 'All levels',
      hours: 2.5,
      en: {
        title: 'Radical Acceptance Foundations',
        subtitle: 'Ending the exhaustion of fighting reality as it is right now.',
        description: 'Learn the life-changing practice of acknowledging reality without approval or surrender, opening the door to genuine healing and effective choice.',
        outcomes: JSON.stringify(['Distinguish acceptance from resignation or giving up', 'Recognize bodily indicators of bracing and resistance', 'Reclaim the energy currently spent arguing with what has already happened'])
      },
      es: {
        title: 'Fundamentos de la aceptación radical',
        subtitle: 'Terminar con el desgaste de luchar contra lo que ya es una realidad.',
        description: 'Aprende a reconocer el presente con honestidad sin resignarte, abriendo camino a decisiones más conscientes y serenas.',
        outcomes: JSON.stringify(['Diferenciar la aceptación lúcida de la resignación pasiva', 'Detectar la tensión física asociada a la negación', 'Recuperar la energía que se gasta resistiendo lo inevitable'])
      },
      'pt-BR': {
        title: 'Fundamentos da aceitação consciente',
        subtitle: 'Encerrando o cansaço de lutar contra os fatos como eles são agora.',
        description: 'Descubra a prática transformadora de reconhecer a realidade presente para, então, escolher caminhos mais saudáveis e possíveis.',
        outcomes: JSON.stringify(['Diferenciar aceitação genuína de resignação sem esperança', 'Perceber como a resistência consome energia do corpo', 'Direcionar sua força para o que realmente está ao seu alcance'])
      },
      modules: [
        {
          id: 'mod_acc_1',
          slug: 'what-acceptance-is-and-is-not',
          sort: 1,
          en: { title: 'What Acceptance Is and Is Not', description: 'Clearing misconceptions about acceptance, resignation, and moral agreement.' },
          es: { title: 'Qué es y qué no es la aceptación', description: 'Aclarar ideas erróneas sobre la aceptación, el abandono y la resignación.' },
          'pt-BR': { title: 'O que aceitação é e o que não é', description: 'Desfazendo mitos sobre aceitação, conformismo e resignação.' },
          lessons: [
            {
              id: 'les_acc_1',
              slug: 'acknowledging-the-facts',
              duration: 15,
              sort: 1,
              en: {
                title: 'Acknowledging the Facts of Today',
                content: 'Acceptance does not mean you approve of what happened. It means you stop exhausting yourself by denying what has already occurred.',
                prompt: 'What fact about your current reality have you been resisting or trying to deny?'
              },
              es: {
                title: 'Reconocer la realidad presente',
                content: 'Aceptar no significa estar de acuerdo con lo sucedido, sino dejar de desgastarte negando lo que ya forma parte de los hechos.',
                prompt: '¿Qué hecho de tu vida presente te ha costado más reconocer?'
              },
              'pt-BR': {
                title: 'Reconhecendo a realidade presente',
                content: 'Aceitar não significa aprovar o que aconteceu, mas parar de se esgotar brigando contra o que já se consolidou.',
                prompt: 'Qual aspecto da sua realidade atual você tem resistido em aceitar?'
              }
            }
          ]
        }
      ]
    },
    {
      id: 'course_spiritual',
      slug: 'spiritual-reflection-contemplative-support',
      is_premium: 1,
      level: 'All levels',
      hours: 3.5,
      en: {
        title: 'Spiritual Reflection & Contemplative Support',
        subtitle: 'Presence, listening, meaning-making, and deep ethical care across beliefs.',
        description: 'Explore ancient contemplative traditions, scripture and prayer in a grounded wellness context, and the sacred craft of companioning others through life’s deep seasons.',
        outcomes: JSON.stringify(['Establish a repeatable daily contemplative silence rhythm', 'Integrate faith traditions with somatic and emotional health', 'Hold quiet, non-judgmental space for friends and family'])
      },
      es: {
        title: 'Reflexión espiritual y acompañamiento contemplativo',
        subtitle: 'Presencia, escucha profunda y cuidado ético en las distintas etapas de la vida.',
        description: 'Explora tradiciones contemplativas milenarias, la oración sincera y el arte de acompañar a otros en momentos de búsqueda o transición espiritual.',
        outcomes: JSON.stringify(['Establecer un momento diario de silencio y recogimiento', 'Integrar la vida de fe con el bienestar físico y emocional', 'Ofrecer una presencia comprensiva sin imponer dogmas'])
      },
      'pt-BR': {
        title: 'Reflexão espiritual e cuidado contemplativo',
        subtitle: 'Presença, escuta acolhedora e sentido para a caminhada.',
        description: 'Explore caminhos de oração, quietude e acolhimento espiritual com respeito, profundidade e equilíbrio emocional.',
        outcomes: JSON.stringify(['Criar um ritmo diário de oração e silêncio reparador', 'Unir a espiritualidade com o cuidado com a saúde mental', 'Acolher amigos e familiares com respeito e empatia'])
      },
      modules: [
        {
          id: 'mod_spir_1',
          slug: 'the-sacred-pause',
          sort: 1,
          en: { title: 'The Sacred Pause: Silence & Breath', description: 'Entering the quiet sanctuary where stillness becomes prayer.' },
          es: { title: 'La pausa sagrada: Silencio y aliento', description: 'Entrar en el refugio tranquilo donde la quietud se vuelve oración.' },
          'pt-BR': { title: 'A pausa sagrada: Silêncio e respiração', description: 'Entrando no refúgio tranquilo onde a quietude se transforma em oração.' },
          lessons: [
            {
              id: 'les_spir_1',
              slug: 'the-tradition-of-hesychia',
              duration: 20,
              sort: 1,
              en: {
                title: 'The Practice of Stillness and Gentle Arrival',
                content: 'Across centuries, contemplative traditions have recognized that God and peace are met not in frantic striving, but in the quiet stillness where the soul rests.',
                prompt: 'What happens in your body when you allow yourself five minutes of completely quiet rest?'
              },
              es: {
                title: 'La práctica del silencio y el descanso interior',
                content: 'A lo largo de los siglos, la tradición contemplativa nos recuerda que la paz se encuentra en la quietud profunda donde el alma reposa con confianza.',
                prompt: '¿Qué experimenta tu cuerpo cuando le regalas cinco minutos de silencio absoluto?'
              },
              'pt-BR': {
                title: 'A prática da quietude e o descanso da alma',
                content: 'Ao longo dos séculos, tradições contemplativas mostram que a serenidade se revela quando silenciamos o excesso de ruído e descansamos na presença.',
                prompt: 'O que o seu corpo sente quando você se permite cinco minutos de silêncio e repouso?'
              }
            }
          ]
        }
      ]
    }
  ];

  // The full courses (src/db/content/courses-*.js) supersede the inline drafts
  // above; they keep the draft ids, so existing enrollments stay attached.
  for (const c of [...COURSES_A, ...COURSES_B]) {
    await db.prepare(`
      INSERT OR REPLACE INTO courses (id, slug, is_premium, level, estimated_hours, created_at)
      VALUES (?, ?, ?, ?, ?, ?)
    `).bind(c.id, c.slug, c.is_premium, c.level, c.hours, now).run();

    for (const locale of ['en', 'es', 'pt-BR']) {
      const t = c[locale];
      await db.prepare(`
        INSERT OR REPLACE INTO course_translations (course_id, locale, title, subtitle, description, learning_outcomes)
        VALUES (?, ?, ?, ?, ?, ?)
      `).bind(c.id, locale, t.title, t.subtitle, t.description, t.outcomes).run();
    }

    if (c.modules) {
      for (const m of c.modules) {
        await db.prepare(`
          INSERT OR REPLACE INTO modules (id, course_id, sort_order, slug)
          VALUES (?, ?, ?, ?)
        `).bind(m.id, c.id, m.sort, m.slug).run();

        for (const locale of ['en', 'es', 'pt-BR']) {
          const t = m[locale];
          await db.prepare(`
            INSERT OR REPLACE INTO module_translations (module_id, locale, title, description)
            VALUES (?, ?, ?, ?)
          `).bind(m.id, locale, t.title, t.description).run();
        }

        if (m.lessons) {
          for (const l of m.lessons) {
            await db.prepare(`
              INSERT OR REPLACE INTO lessons (id, module_id, sort_order, slug, duration_minutes)
              VALUES (?, ?, ?, ?, ?)
            `).bind(l.id, m.id, l.sort, l.slug, l.duration).run();

            for (const locale of ['en', 'es', 'pt-BR']) {
              const t = l[locale];
              await db.prepare(`
                INSERT OR REPLACE INTO lesson_translations (lesson_id, locale, title, content, reflection_prompt, worksheet_reference)
                VALUES (?, ?, ?, ?, ?, ?)
              `).bind(l.id, locale, t.title, t.content, t.prompt, null).run();
            }
          }
        }
      }
    }
  }

  // 7. Seed Quizzes (6 Reflective Self-Assessments)
  const quizzes = [
    {
      id: 'quiz_rest',
      slug: 'what-kind-of-rest-do-i-need',
      tier_required: 'steady',
      en: {
        title: 'What Kind of Rest Do I Need?',
        subtitle: 'A gentle self-check on the 7 distinct types of human restoration.',
        description: 'Sleep is not the only way to recover. Discover whether your body, mind, senses, emotions, or spirit are asking for care right now.'
      },
      es: {
        title: '¿Qué tipo de descanso necesito hoy?',
        subtitle: 'Una pausa reflexiva sobre las siete formas de recuperación personal.',
        description: 'Dormir no es la única manera de reponer fuerzas. Descubre si tu mente, tus sentidos, tu cuerpo o tu espíritu están pidiendo un respiro.'
      },
      'pt-BR': {
        title: 'De que tipo de descanso eu preciso hoje?',
        subtitle: 'Uma reflexão honesta sobre as diferentes formas de recuperação.',
        description: 'Dormir não é a única maneira de descansar. Veja se sua mente, suas emoções, seus sentidos ou seu espírito estão pedindo uma pausa.'
      },
      questions: [
        {
          id: 'q_rest_1',
          sort: 1,
          en: {
            question: 'When you imagine true relief right now, what does your body crave first?',
            options: JSON.stringify([
              { label: 'Closing my eyes in complete silence without any screen or light', tag: 'sensory' },
              { label: 'Unclenched muscles, a warm blanket, and stretching out to sleep', tag: 'physical' },
              { label: 'Not having to make a single decision or answer anyone for an hour', tag: 'mental' },
              { label: 'An honest conversation where I do not have to put on a brave face', tag: 'emotional' }
            ])
          },
          es: {
            question: 'Al imaginar un verdadero alivio en este momento, ¿qué te pide el cuerpo en primer lugar?',
            options: JSON.stringify([
              { label: 'Cerrar los ojos en silencio total, lejos de pantallas o luces intensas', tag: 'sensory' },
              { label: 'Aflojar los músculos, una manta tibia y descansar el cuerpo', tag: 'physical' },
              { label: 'No tener que tomar ninguna decisión ni responder mensajes por un rato', tag: 'mental' },
              { label: 'Una conversación sincera donde no tenga que fingir que todo marcha bien', tag: 'emotional' }
            ])
          },
          'pt-BR': {
            question: 'Quando você pensa em alívio agora, o que seu corpo pede primeiro?',
            options: JSON.stringify([
              { label: 'Fechar os olhos no silêncio, sem luzes nem notificações', tag: 'sensory' },
              { label: 'Soltar os músculos, uma coberta quentinha e relaxar o corpo', tag: 'physical' },
              { label: 'Não ter que tomar decisões nem responder ninguém por uma hora', tag: 'mental' },
              { label: 'Uma conversa sincera onde eu não precise parecer forte o tempo todo', tag: 'emotional' }
            ])
          }
        },
        {
          id: 'q_rest_2',
          sort: 2,
          en: {
            question: 'What has been the greatest source of fatigue for you over the last few days?',
            options: JSON.stringify([
              { label: 'Constant sensory input, notifications, and visual clutter', tag: 'sensory' },
              { label: 'Physical exertion, poor sleep, or carrying physical tension', tag: 'physical' },
              { label: 'Endless mental to-do lists, problem-solving, and tab-switching', tag: 'mental' },
              { label: 'Managing other people’s feelings or keeping my own feelings bottled up', tag: 'emotional' }
            ])
          },
          es: {
            question: '¿Cuál ha sido la mayor fuente de cansancio para ti en los últimos días?',
            options: JSON.stringify([
              { label: 'Estímulos continuos, alertas en el teléfono y ruido ambiental', tag: 'sensory' },
              { label: 'Tensión muscular, pocas horas de sueño o malestar físico', tag: 'physical' },
              { label: 'Listas interminables de tareas y preocupaciones por resolver', tag: 'mental' },
              { label: 'Atender las emociones de los demás o guardar en silencio lo que siento', tag: 'emotional' }
            ])
          },
          'pt-BR': {
            question: 'O que mais tem consumido sua energia nos últimos dias?',
            options: JSON.stringify([
              { label: 'Estímulos visuais constantes, barulhos e notificações do celular', tag: 'sensory' },
              { label: 'Falta de sono, postura cansada ou tensão física acumulada', tag: 'physical' },
              { label: 'Pensamentos acelerados e listas intermináveis de afazeres', tag: 'mental' },
              { label: 'Cuidar das expectativas alheias e engolir os próprios sentimentos', tag: 'emotional' }
            ])
          }
        }
      ]
    },
    {
      id: 'quiz_compassion',
      slug: 'self-compassion-check-in',
      tier_required: 'steady',
      en: {
        title: 'Self-Compassion Check-In',
        subtitle: 'Reflecting on your inner conversation in moments of challenge.',
        description: 'Notice how you respond when you stumble, and discover simple somatic tools to bring more warmth to yourself.'
      },
      es: {
        title: 'Revisión de la autocompasión',
        subtitle: 'Cómo te hablas cuando las cosas no salen como esperabas.',
        description: 'Observa tus reacciones interiores ante el error y descubre prácticas suaves para tratarte con mayor paciencia.'
      },
      'pt-BR': {
        title: 'Check-in de autocompaixão',
        subtitle: 'Como anda sua conversa consigo mesmo nos momentos difíceis.',
        description: 'Perceba a maneira como você reage aos próprios tropeços e encontre formas gentis de se acolher.'
      },
      questions: [
        {
          id: 'q_comp_1',
          sort: 1,
          en: {
            question: 'When you make an unintentional mistake in front of others, what is your immediate reflex?',
            options: JSON.stringify([
              { label: 'Harsh internal lecturing: "How could I have been so foolish?"', tag: 'critical' },
              { label: 'Numbness or wanting to disappear completely from the room', tag: 'withdrawn' },
              { label: 'A quiet breath acknowledging: "I am human, and mistakes happen to everyone."', tag: 'compassionate' }
            ])
          },
          es: {
            question: 'Cuando cometes un error involuntario ante los demás, ¿cuál es tu primera reacción interna?',
            options: JSON.stringify([
              { label: 'Reproches duros: "¿Cómo pude haber hecho semejante tontería?"', tag: 'critical' },
              { label: 'Ganas de desaparecer del lugar y desconectarme por completo', tag: 'withdrawn' },
              { label: 'Una respiración tranquila recordando: "Soy humano y esto le pasa a cualquiera."', tag: 'compassionate' }
            ])
          },
          'pt-BR': {
            question: 'Quando você comete um erro sem querer diante de outras pessoas, qual é seu primeiro reflexo?',
            options: JSON.stringify([
              { label: 'Crítica dura: "Como fui capaz de errar nisso?"', tag: 'critical' },
              { label: 'Vontade de sumir do ambiente e se fechar', tag: 'withdrawn' },
              { label: 'Uma pausa serena lembrando: "Errar faz parte da vida de todos nós."', tag: 'compassionate' }
            ])
          }
        }
      ]
    },
    {
      id: 'quiz_stress',
      slug: 'stress-and-overwhelm-reflection',
      tier_required: 'steady',
      en: {
        title: 'Stress & Overwhelm Reflection',
        subtitle: 'Listening to the warning signals of your nervous system.',
        description: 'A non-clinical check on the physical, emotional, and relational signals of an overstressed body.'
      },
      es: {
        title: 'Reflexión sobre el estrés y la sobrecarga',
        subtitle: 'Escuchar las señales sutiles de tu cuerpo.',
        description: 'Un chequeo no clínico para reconocer cuándo el cuerpo está pidiendo una pausa urgente.'
      },
      'pt-BR': {
        title: 'Reflexão sobre estresse e sobrecarga',
        subtitle: 'Ouvindo os alertas gentis do seu corpo.',
        description: 'Uma reflexão educativa para identificar onde a tensão está acumulada e encontrar alívio.'
      },
      questions: []
    },
    {
      id: 'quiz_grounding',
      slug: 'grounding-style-finder',
      tier_required: 'steady',
      en: {
        title: 'Grounding Style Finder',
        subtitle: 'Discovering whether somatic, sensory, cognitive, or nature anchors serve you best.',
        description: 'Find out what kind of anchoring practice helps you land most reliably when life gets overwhelming.'
      },
      es: {
        title: 'Descubre tu estilo de enraizamiento',
        subtitle: 'Qué anclajes —somáticos, sensoriales o en la naturaleza— te ayudan mejor.',
        description: 'Conoce qué tipo de ejercicio de calma te ofrece mayor estabilidad cuando las cosas se complican.'
      },
      'pt-BR': {
        title: 'Descubra seu estilo de aterramento',
        subtitle: 'Quais apoios — corporais, sensoriais ou na natureza — funcionam melhor para você.',
        description: 'Entenda qual prática de presença traz mais equilíbrio para o seu dia a dia.'
      },
      questions: []
    },
    {
      id: 'quiz_habits',
      slug: 'daily-habits-reflection',
      tier_required: 'steady',
      en: {
        title: 'Daily Habits Reflection',
        subtitle: 'Honoring small, sustainable rhythms over heroic overhauls.',
        description: 'Reflect on how your morning, midday, and twilight rhythms currently support your peace.'
      },
      es: {
        title: 'Reflexión sobre los hábitos cotidianos',
        subtitle: 'Valorar los pequeños ritmos sostenibles en lugar de cambios bruscos.',
        description: 'Examina con cariño cómo tus momentos de la mañana y de la tarde cuidan tu serenidad.'
      },
      'pt-BR': {
        title: 'Reflexão sobre hábitos cotidianos',
        subtitle: 'Pequenos passos constantes em vez de exigências heroicas.',
        description: 'Perceba como seus momentos de pausa pela manhã e ao entardecer apoiam o seu bem-estar.'
      },
      questions: []
    },
    {
      id: 'quiz_boundaries',
      slug: 'boundaries-check-in',
      tier_required: 'steady',
      en: {
        title: 'Boundaries & Energy Check-In',
        subtitle: 'Noticing where your energy leaks and practicing clean, honest limits.',
        description: 'A thoughtful reflection on people-pleasing, over-explaining, and how to protect your peace with warm clarity.'
      },
      es: {
        title: 'Revisión de límites y energía personal',
        subtitle: 'Identificar dónde se dispersa tu energía y cuidar tus espacios.',
        description: 'Una mirada sincera sobre la necesidad de complacer a otros y cómo establecer límites con serenidad.'
      },
      'pt-BR': {
        title: 'Check-in de limites e energia',
        subtitle: 'Percebendo onde sua energia escapa e cuidando do seu tempo.',
        description: 'Uma reflexão afetuosa sobre a dificuldade de dizer não e como colocar limites claros com gentileza.'
      },
      questions: []
    }
  ];

  // The full quiz set (src/db/content/quizzes.js) supersedes the inline drafts above.
  for (const q of QUIZZES) {
    await db.prepare(`
      INSERT OR REPLACE INTO quizzes (id, slug, tier_required, created_at)
      VALUES (?, ?, ?, ?)
    `).bind(q.id, q.slug, q.tier_required, now).run();

    for (const locale of ['en', 'es', 'pt-BR']) {
      const t = q[locale];
      await db.prepare(`
        INSERT OR REPLACE INTO quiz_translations (quiz_id, locale, title, subtitle, description)
        VALUES (?, ?, ?, ?, ?)
      `).bind(q.id, locale, t.title, t.subtitle, t.description).run();
    }

    if (q.questions) {
      // Question ids changed between drafts; clear this quiz's old questions first.
      await db.prepare('DELETE FROM quiz_questions WHERE quiz_id = ?').bind(q.id).run();
      for (const ques of q.questions) {
        for (const locale of ['en', 'es', 'pt-BR']) {
          const t = ques[locale];
          if (t) {
            await db.prepare(`
              INSERT OR REPLACE INTO quiz_questions (id, quiz_id, sort_order, locale, question, options)
              VALUES (?, ?, ?, ?, ?, ?)
            `).bind(ques.id + '_' + locale, q.id, ques.sort, locale, t.question, t.options).run();
          }
        }
      }
    }
  }

  // 8. Seed KindWell Circle Spaces
  const spaces = [
    {
      id: 'gentle-check-in',
      slug: 'gentle-check-in',
      sort: 1,
      icon: '🌿',
      en: { name: 'Gentle Check-In', description: 'A quiet, unhurried space to say how you are actually doing today without having to perform or explain.' },
      es: { name: 'Pausa sincera', description: 'Un espacio tranquilo para compartir cómo te encuentras hoy, sin apariencias ni justificaciones.' },
      'pt-BR': { name: 'Check-in acolhedor', description: 'Um cantinho tranquilo para contar como você está de verdade hoje, sem cobranças nem filtros.' }
    },
    {
      id: 'practice-together',
      slug: 'practice-together',
      sort: 2,
      icon: '🕯️',
      en: { name: 'Practice Together', description: 'Sharing notes, questions, and reflections on our 12 grounding, emotion, and boundary practices.' },
      es: { name: 'Practicar en compañía', description: 'Reflexiones y experiencias compartidas sobre los ejercicios de enraizamiento y calma.' },
      'pt-BR': { name: 'Praticar juntos', description: 'Trocas de experiências sobre os exercícios de respiração, limites e serenidade.' }
    },
    {
      id: 'being-with-it',
      slug: 'being-with-it',
      sort: 3,
      icon: '🌧️',
      en: { name: 'Being With It', description: 'Holding space for grief, sorrow, transitions, and the questions that don’t have neat answers.' },
      es: { name: 'Acompañar lo difícil', description: 'Un lugar respetuoso para el dolor, los duelos y las etapas de incertidumbre en la vida.' },
      'pt-BR': { name: 'Estar presente com a dor', description: 'Espaço de respeito para o luto, as saudades e as dúvidas que não têm respostas fáceis.' }
    },
    {
      id: 'quiet-wins',
      slug: 'quiet-wins',
      sort: 4,
      icon: '✨',
      en: { name: 'Quiet Wins', description: 'Celebrating tiny, ordinary victories: saying a clean no, taking a slow breath, stepping outside.' },
      es: { name: 'Pequeñas victorias', description: 'Celebrar los avances cotidianos: poner un límite amable, respirar con calma, descansar.' },
      'pt-BR': { name: 'Pequenas vitórias', description: 'Reconhecendo as conquistas sutis do dia a dia: dizer um não honesto, respirar fundo e pausar.' }
    }
  ];

  for (const s of [...spaces, ...EXTRA_CIRCLE_SPACES, ...LOCAL_CIRCLE_SPACES]) {
    await db.prepare(`
      INSERT OR REPLACE INTO circle_spaces (id, slug, sort_order, icon)
      VALUES (?, ?, ?, ?)
    `).bind(s.id, s.slug, s.sort, s.icon).run();

    for (const locale of ['en', 'es', 'pt-BR']) {
      const t = s[locale];
      await db.prepare(`
        INSERT OR REPLACE INTO circle_space_translations (space_id, locale, name, description)
        VALUES (?, ?, ?, ?)
      `).bind(s.id, locale, t.name, t.description).run();
    }
  }

  // 8b. Circle starter threads — pinned welcome and prompt posts from the
  // KindWell team, one per language, so no space opens empty. Upserted so a
  // re-seed refreshes the wording without touching members' replies.
  const teamUserId = 'user_kindwell_team';
  const nowMs = Date.now();
  await db.prepare(`
    INSERT INTO user (id, name, email, emailVerified, createdAt, updatedAt, role, tier, locale)
    VALUES (?, 'KindWell team', 'team@kindwell.org', 1, ?, ?, 'moderator', 'supported', 'en')
    ON CONFLICT(id) DO NOTHING
  `).bind(teamUserId, nowMs, nowMs).run();
  for (const t of [...CIRCLE_STARTERS, ...LOCAL_CIRCLE_STARTERS]) {
    for (const locale of ['en', 'es', 'pt-BR']) {
      const text = t[locale];
      if (!text) continue;
      // Sort order becomes a created_at offset, so starters list in order.
      const created = new Date(Date.UTC(2026, 8, 1, 12, 0, 60 - (t.sort || 0))).toISOString();
      await db.prepare(`
        INSERT INTO circle_threads (id, space_id, user_id, title, body, locale, moderation_status, created_at, updated_at)
        VALUES (?, ?, ?, ?, ?, ?, 'approved', ?, ?)
        ON CONFLICT(id) DO UPDATE SET title = excluded.title, body = excluded.body
      `).bind(`${t.id}_${locale}`, t.space_id, teamUserId, text.title, text.body, locale, created, created).run();
    }
  }

  // 9. Practitioner System Architecture (Real schema & future network - no fabricated practitioner)
  // Seeded list intentionally empty until actual practitioner profiles are supplied.

  // 10. Seed Store Products
  //
  // The real catalogue: the Printify merch KindWell sells, with its size/colour
  // variants and the the Node host store variant each one is bought through
  // (src/db/catalog/*.json, refreshed by scripts/hostinger-catalog.mjs), plus
  // the digital workbooks and trackers members download after purchase.
  // Digital rows must carry digital_file_key: it is what /api/download serves.
  const catalogProducts = readCatalog('products.json');
  const catalogText = readCatalog('product-translations.json');
  const catalogVariants = readCatalog('printify-variants.json');


  for (const p of catalogProducts) {
    await db.prepare(`
      INSERT OR REPLACE INTO products (
        id, slug, type, price, member_price, currency, image_url, is_active,
        digital_file_key, printify_blueprint_id, printify_print_provider_id,
        printify_product_id, created_at
      ) VALUES (?, ?, ?, ?, ?, 'USD', ?, 1, ?, ?, ?, ?, ?)
    `).bind(
      p.id, p.slug, p.type, p.price, Math.round(p.price * 0.85 * 100) / 100, p.image_url,
      p.digital_file_key ?? null,
      p.printify_blueprint_id, p.printify_print_provider_id, p.printify_product_id, p.created_at || now
    ).run();
    for (const t of catalogText.filter((row) => row.product_id === p.id)) {
      await db.prepare(`
        INSERT OR REPLACE INTO product_translations (product_id, locale, name, tagline, description, details)
        VALUES (?, ?, ?, ?, ?, ?)
      `).bind(p.id, t.locale, t.name, t.tagline, t.description, t.details).run();
    }
  }
  for (const v of catalogVariants) {
    await db.prepare(`
      INSERT OR REPLACE INTO printify_product_variants (
        product_id, printify_product_id, blueprint_id, print_provider_id, variant_id, title,
        is_available, production_cost, retail_price, shipping_json, hostinger_variant_id, updated_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(
      v.product_id, v.printify_product_id, v.blueprint_id, v.print_provider_id, v.variant_id, v.title,
      v.is_available, v.production_cost, v.retail_price, v.shipping_json,
      null, now
    ).run();
  }
  // Anything no longer in the catalogue (the retired PDFs, old mock items) stops being sold.
  const liveIds = catalogProducts.map((p) => p.id);
  await db.prepare(`UPDATE products SET is_active = 0 WHERE id NOT IN (${liveIds.map(() => '?').join(', ')})`)
    .bind(...liveIds).run();

  // 11. Seed Member Wellness Letters
  const letters = [
    {
      id: 'letter_sept_2026',
      slug: 'gentle-arrivals-september-2026',
      locale: 'en',
      title: 'A Gentle Arrival into Autumn',
      publish_date: '2026-09-01',
      summary: 'Noticing the transition of seasons, honoring bodily exhaustion, and making space for rest.',
      content: 'Dear Friend,\n\nSeptember always brings an unspoken expectation to accelerate: back to school, back to deadlines, back to urgency. But notice how nature does the exact opposite: leaves quietly deepen in tone, shadows lengthen, and the air turns crisp and restful.\n\nThis month, our invitation to you is simple: let yourself arrive where you already are. You do not need to leap ahead into autumn. Breathe with the turn of the leaves.\n\nWarmly,\nThe KindWell Team'
    },
    {
      id: 'letter_sept_2026_es',
      slug: 'gentle-arrivals-september-2026',
      locale: 'es',
      title: 'Llegar con calma al cambio de estación',
      publish_date: '2026-09-01',
      summary: 'Acompañar las transiciones, escuchar el cansancio y darse permiso para reposar.',
      content: 'Querida comunidad:\n\nCada cambio de época suele traer una presión silenciosa de acelerar el paso. Sin embargo, los árboles nos enseñan algo muy distinto: maduran sus hojas, sueltan lo que ya cumplió su ciclo y se preparan para descansar.\n\nEste mes, nuestra invitación es sencilla: habita el lugar donde ya te encuentras. No necesitas adelantarte al futuro. Respira hondo y permite que cada día encuentre su propio cauce.\n\nCon afecto,\nEl equipo de KindWell'
    },
    {
      id: 'letter_sept_2026_pt',
      slug: 'gentle-arrivals-september-2026',
      locale: 'pt-BR',
      title: 'Chegar com serenidade à nova estação',
      publish_date: '2026-09-01',
      summary: 'Perceber as mudanças da natureza, respeitar o ritmo do corpo e abrir espaço para o descanso.',
      content: 'Querido amigo, querida amiga:\n\nAs mudanças de estação costumam vir acompanhadas de pressa e expectativas. Mas a natureza segue um caminho diferente: desacelera, colore os galhos com tons serenos e acolhe o repouso.\n\nNossa mensagem deste mês é um convite: permita-se estar onde você está agora. Não tenha pressa de antecipar o amanhã. Respire com calma e cuide do que é possível hoje.\n\nCom carinho,\nEquipe KindWell'
    }
  ];

  for (const l of [...letters, ...EXTRA_WELLNESS_LETTERS]) {
    await db.prepare(`
      INSERT OR REPLACE INTO wellness_letters (
        id, slug, locale, title, publish_date, summary, content, created_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(l.id, l.slug, l.locale, l.title, l.publish_date, l.summary, l.content, now).run();
  }

  return { success: true };
}
