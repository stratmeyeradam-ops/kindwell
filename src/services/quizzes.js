// src/services/quizzes.js
// Reflective self-assessments and personalized wellness recommendations

import { randomBytes } from 'node:crypto';
import { QUIZZES } from '../db/content/quizzes.js';

/**
 * Lists all quizzes available for a locale.
 */
export async function listQuizzes(db, locale = 'en') {
  const query = `
    SELECT q.id, q.slug, q.tier_required,
           qt.title, qt.subtitle, qt.description
    FROM quizzes q
    JOIN quiz_translations qt ON q.id = qt.quiz_id AND qt.locale = ?
    ORDER BY q.created_at ASC
  `;
  const rows = await db.prepare(query).bind(locale).all();
  return rows.results;
}

/**
 * Fetches a quiz with its localized questions.
 */
export async function getQuizBySlug(db, slug, locale = 'en') {
  const quiz = await db.prepare(`
    SELECT q.id, q.slug, q.tier_required,
           qt.title, qt.subtitle, qt.description
    FROM quizzes q
    JOIN quiz_translations qt ON q.id = qt.quiz_id AND qt.locale = ?
    WHERE q.slug = ?
  `).bind(locale, slug).first();

  if (!quiz) return null;

  const questionsRes = await db.prepare(`
    SELECT id, sort_order, question, options
    FROM quiz_questions
    WHERE quiz_id = ? AND locale = ?
    ORDER BY sort_order ASC
  `).bind(quiz.id, locale).all();

  quiz.questions = questionsRes.results.map(q => ({
    ...q,
    options: JSON.parse(q.options || '[]')
  }));

  return quiz;
}

/**
 * Evaluates quiz answers, generating compassionate reflections and actionable next steps.
 * Avoids mechanical labels or clinical diagnoses.
 */
export async function submitQuizAnswers(db, { quizId, userId = null, answers, locale = 'en' }) {
  // Count frequency of selected tags
  const tagCounts = {};
  for (const item of answers) {
    if (item.tag) {
      tagCounts[item.tag] = (tagCounts[item.tag] || 0) + 1;
    }
  }

  // Determine the primary area calling for care
  let primaryNeed = 'sensory';
  let highestCount = 0;
  for (const [tag, count] of Object.entries(tagCounts)) {
    if (count > highestCount) {
      highestCount = count;
      primaryNeed = tag;
    }
  }

  const resultProfiles = {
    sensory: {
      en: {
        theme: 'A Call for Sensory Quietness',
        reflection: 'Your responses suggest that your senses have been carrying a great deal of stimulation lately — notifications, bright screens, ambient noise, and constant input. When the nervous system is saturated, the most restorative kindness is not doing more self-care, but stepping back into quiet spaces where your senses can naturally rest.',
        practices: ['arrive', 'release'],
        remedies: ['anxious-wired-restless', 'tension-headaches'],
        courses: ['self-compassion-and-kindness']
      },
      es: {
        theme: 'Una invitación al silencio sensorial',
        reflection: 'Tus respuestas reflejan que tus sentidos han recibido demasiados estímulos últimamente: pantallas continuas, avisos y ruido ambiental. Cuando el cuerpo se satura de información, el mejor cuidado no es hacer más cosas, sino regalarte pequeños momentos de silencio donde la vista y el oído puedan descansar.',
        practices: ['arrive', 'release'],
        remedies: ['anxious-wired-restless', 'tension-headaches'],
        courses: ['self-compassion-and-kindness']
      },
      'pt-BR': {
        theme: 'Um convite ao silêncio dos sentidos',
        reflection: 'Suas respostas indicam que seus sentidos têm absorvido muitos estímulos nos últimos tempos: telas brilhantes, avisos e barulhos da rotina. Quando o sistema nervoso fica sobrecarregado, o maior carinho é criar pausas simples de silêncio para que seus olhos e sua mente possam descansar.',
        practices: ['arrive', 'release'],
        remedies: ['anxious-wired-restless', 'tension-headaches'],
        courses: ['self-compassion-and-kindness']
      }
    },
    physical: {
      en: {
        theme: 'Your Body is Asking for Real Rest',
        reflection: 'Your answers reflect a physical tiredness that cannot be solved by willpower. Your muscles, posture, and sleep cycles are asking for genuine permission to slow down. Consider this an invitation to honor your physical limits without apology.',
        practices: ['release', 'orient'],
        remedies: ['trouble-falling-staying-asleep', 'low-grade-inflammation-achiness'],
        courses: ['radical-acceptance-foundations']
      },
      es: {
        theme: 'Tu cuerpo te pide descanso sincero',
        reflection: 'Tus respuestas muestran un cansancio corporal real que no se resuelve con fuerza de voluntad. Tu postura, tus músculos y tus ritmos de sueño están pidiendo una tregua honesta. Acoge este momento como una oportunidad para respetar tus límites físicos sin culpa.',
        practices: ['release', 'orient'],
        remedies: ['trouble-falling-staying-asleep', 'low-grade-inflammation-achiness'],
        courses: ['radical-acceptance-foundations']
      },
      'pt-BR': {
        theme: 'Seu corpo está pedindo descanso de verdade',
        reflection: 'Suas respostas revelam um cansaço físico que não se resolve apenas com esforço. Sua postura, seus músculos e suas noites de sono estão pedindo um respiro sincero. Trate esse momento como um convite para respeitar seu ritmo sem culpa.',
        practices: ['release', 'orient'],
        remedies: ['trouble-falling-staying-asleep', 'low-grade-inflammation-achiness'],
        courses: ['radical-acceptance-foundations']
      }
    },
    mental: {
      en: {
        theme: 'Pausing the Endless Decision Machine',
        reflection: 'Your fatigue seems rooted in continuous decision-making, planning, and mental problem-solving. Carrying multiple open loops exhausts the prefrontal cortex. The most effective medicine today is giving yourself permission not to have an answer for the next hour.',
        practices: ['next', 'weather'],
        remedies: ['stress-overwhelm', 'anxious-wired-restless'],
        courses: ['radical-acceptance-foundations']
      },
      es: {
        theme: 'Pausar la máquina de tomar decisiones',
        reflection: 'Tu agotamiento parece originarse en la constante necesidad de resolver asuntos, planificar y anticipar problemas. Sostener tantas preocupaciones abiertas cansa profundamente la mente. El paso más saludable hoy es darte permiso de no tener todas las respuestas resueltas.',
        practices: ['next', 'weather'],
        remedies: ['stress-overwhelm', 'anxious-wired-restless'],
        courses: ['radical-acceptance-foundations']
      },
      'pt-BR': {
        theme: 'Uma trégua para a mente atarefada',
        reflection: 'Seu cansaço tem raízes no excesso de decisões, planejamentos e problemas para resolver. Manter a mente sempre alerta desgasta a energia vital. A atitude mais generosa hoje é se permitir não ter todas as respostas prontas para a próxima hora.',
        practices: ['next', 'weather'],
        remedies: ['stress-overwhelm', 'anxious-wired-restless'],
        courses: ['radical-acceptance-foundations']
      }
    },
    emotional: {
      en: {
        theme: 'Making Space for Your Real Feelings',
        reflection: 'Your answers suggest you have been carrying emotional burdens — perhaps putting on a brave face, managing other people’s feelings, or swallowing your own grief. You are allowed to be honest about how heavy things have felt.',
        practices: ['kindly', 'grief'],
        remedies: ['low-mood-grief-flatness', 'stress-overwhelm'],
        courses: ['self-compassion-and-kindness']
      },
      es: {
        theme: 'Hacer espacio a lo que sientes de verdad',
        reflection: 'Tus respuestas indican que has estado cargando un peso emocional significativo, tal vez intentando parecer fuerte o cuidando de los demás a costa de ti. Tienes pleno derecho a reconocer con sinceridad lo difícil que ha sido este tiempo.',
        practices: ['kindly', 'grief'],
        remedies: ['low-mood-grief-flatness', 'stress-overwhelm'],
        courses: ['self-compassion-and-kindness']
      },
      'pt-BR': {
        theme: 'Abrindo espaço para seus sentimentos verdadeiros',
        reflection: 'Suas respostas mostram que você tem carregado um peso emocional grande, muitas vezes tentando parecer forte para os outros. Você tem todo o direito de reconhecer que as coisas têm sido desafiadoras e acolher o seu cansaço.',
        practices: ['kindly', 'grief'],
        remedies: ['low-mood-grief-flatness', 'stress-overwhelm'],
        courses: ['self-compassion-and-kindness']
      }
    }
  };

  // Each quiz carries its own results (src/db/content/quizzes.js). The inline
  // profiles above are the original rest-quiz set, kept only as a fallback.
  const quizResults = QUIZZES.find((q) => q.id === quizId)?.results;
  const own = quizResults?.[primaryNeed] || (quizResults && Object.values(quizResults)[0]);
  const ownText = own && (own[locale] || own.en);
  const profile = ownText
    ? {
        theme: ownText.title,
        reflection: ownText.summary,
        tips: ownText.recommendations || [],
        practices: own.practices || [],
        remedies: [],
        courses: []
      }
    : (resultProfiles[primaryNeed]?.[locale] || resultProfiles[primaryNeed]?.en || resultProfiles.sensory.en);

  const resultId = 'res_' + randomBytes(12).toString('hex');
  const now = new Date().toISOString();

  const recommendations = {
    tips: profile.tips || [],
    practices: profile.practices,
    remedies: profile.remedies,
    courses: profile.courses
  };

  await db.prepare(`
    INSERT INTO quiz_results (id, quiz_id, user_id, answers, result_profile, recommendations, created_at)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `).bind(resultId, quizId, userId, JSON.stringify(answers), primaryNeed, JSON.stringify(recommendations), now).run();

  return {
    id: resultId,
    theme: profile.theme,
    reflection: profile.reflection,
    primaryNeed,
    recommendations
  };
}
