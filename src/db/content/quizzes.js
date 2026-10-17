// src/db/content/quizzes.js
// KindWell reflective self-check quizzes (10). Educational and reflective only —
// none of these are diagnostic tools. Every string exists in en, es and pt-BR.
//
// Shape per quiz:
//   { id, slug, tier_required, en/es/pt-BR: { title, subtitle, description },
//     questions: [{ id, sort, en/es/pt-BR: { question, options: JSON.stringify([{ label, tag }]) } }],
//     results: { [tag]: { practices: [practiceId...], en/es/pt-BR: { title, summary, recommendations: [] } } } }
//
// `results` is keyed by every tag the quiz uses. `practices` lists the KindWell
// practice ids named in the recommendations (arrive, orient, release, name, weather,
// next, kindly, friend, boundary, listen, grief, memory) so views can link them.

// Builds one question. `tags` is the tag for each option position; each locale is
// [questionText, [label1, label2, label3, label4]] in the same order as `tags`.
function q(id, sort, tags, en, es, pt) {
  const build = ([question, labels]) => {
    if (labels.length !== tags.length) throw new Error(`Option/tag mismatch in ${id}`);
    return {
      question,
      options: JSON.stringify(labels.map((label, i) => ({ label, tag: tags[i] })))
    };
  };
  return { id, sort, en: build(en), es: build(es), 'pt-BR': build(pt) };
}

// Builds one result profile. Each locale is [title, summary, [recommendations]].
function r(practices, en, es, pt) {
  const build = ([title, summary, recommendations]) => ({ title, summary, recommendations });
  return { practices, en: build(en), es: build(es), 'pt-BR': build(pt) };
}

// ---------------------------------------------------------------------------
// 1. What kind of rest do I need?
// ---------------------------------------------------------------------------
const quizRest = {
  id: 'quiz_rest',
  slug: 'what-kind-of-rest-do-i-need',
  tier_required: 'steady',
  en: {
    title: 'What Kind of Rest Do I Need?',
    subtitle: 'A gentle self-check on the different ways we restore.',
    description: 'Sleep is not the only way to recover. Notice whether your body, mind, senses, or emotions are asking for care right now. This is a reflective check-in, not a diagnostic tool — let it start a conversation with yourself, not settle one.'
  },
  es: {
    title: '¿Qué tipo de descanso necesito hoy?',
    subtitle: 'Una pausa reflexiva sobre las distintas formas de recuperarnos.',
    description: 'Dormir no es la única manera de reponer fuerzas. Observa si tu cuerpo, tu mente, tus sentidos o tus emociones están pidiendo un respiro. Es una reflexión personal, no una herramienta de diagnóstico: úsala para escucharte, no para ponerte etiquetas.'
  },
  'pt-BR': {
    title: 'De que tipo de descanso eu preciso hoje?',
    subtitle: 'Uma reflexão honesta sobre as diferentes formas de recuperação.',
    description: 'Dormir não é a única maneira de descansar. Veja se seu corpo, sua mente, seus sentidos ou suas emoções estão pedindo uma pausa. É uma reflexão pessoal, não uma ferramenta de diagnóstico: use-a para se escutar, não para se rotular.'
  },
  questions: [
    q('q_rest_1', 1, ['sensory', 'physical', 'mental', 'emotional'],
      ['When you imagine true relief right now, what does your body crave first?', [
        'Closing my eyes in complete silence without any screen or light',
        'Unclenched muscles, a warm blanket, and stretching out to sleep',
        'Not having to make a single decision or answer anyone for an hour',
        'An honest conversation where I do not have to put on a brave face'
      ]],
      ['Al imaginar un verdadero alivio en este momento, ¿qué te pide el cuerpo en primer lugar?', [
        'Cerrar los ojos en silencio total, lejos de pantallas o luces intensas',
        'Aflojar los músculos, una manta tibia y descansar el cuerpo',
        'No tener que tomar ninguna decisión ni responder mensajes por un rato',
        'Una conversación sincera donde no tenga que fingir que todo marcha bien'
      ]],
      ['Quando você pensa em alívio agora, o que seu corpo pede primeiro?', [
        'Fechar os olhos no silêncio, sem luzes nem notificações',
        'Soltar os músculos, uma coberta quentinha e relaxar o corpo',
        'Não ter que tomar decisões nem responder ninguém por uma hora',
        'Uma conversa sincera onde eu não precise parecer forte o tempo todo'
      ]]),
    q('q_rest_2', 2, ['sensory', 'physical', 'mental', 'emotional'],
      ['What has been the greatest source of fatigue for you over the last few days?', [
        'Constant sensory input, notifications, and visual clutter',
        'Physical exertion, poor sleep, or carrying physical tension',
        'Endless mental to-do lists, problem-solving, and tab-switching',
        'Managing other people’s feelings or keeping my own feelings bottled up'
      ]],
      ['¿Cuál ha sido la mayor fuente de cansancio para ti en los últimos días?', [
        'Estímulos continuos, alertas en el teléfono y ruido ambiental',
        'Tensión muscular, pocas horas de sueño o malestar físico',
        'Listas interminables de tareas y preocupaciones por resolver',
        'Atender las emociones de los demás o guardar en silencio lo que siento'
      ]],
      ['O que mais tem consumido sua energia nos últimos dias?', [
        'Estímulos visuais constantes, barulhos e notificações do celular',
        'Falta de sono, postura cansada ou tensão física acumulada',
        'Pensamentos acelerados e listas intermináveis de afazeres',
        'Cuidar das expectativas alheias e engolir os próprios sentimentos'
      ]]),
    q('q_rest_3', 3, ['sensory', 'physical', 'mental', 'emotional'],
      ['If a free afternoon suddenly opened up, what would sound most restoring?', [
        'A dim, quiet room with no music, no phone, and nothing to look at',
        'A long nap or a slow, warm bath',
        'Something with zero decisions — a familiar show or a walk with no destination',
        'Time with someone who lets me be exactly as I am'
      ]],
      ['Si de pronto tuvieras una tarde libre, ¿qué te sonaría más reparador?', [
        'Un cuarto en penumbra y silencio, sin música, sin teléfono y sin nada que mirar',
        'Una siesta larga o un baño tibio y sin prisa',
        'Algo que no exija decisiones: una serie conocida o caminar sin rumbo',
        'Estar con alguien que me deje ser tal como soy'
      ]],
      ['Se de repente você ganhasse uma tarde livre, o que pareceria mais restaurador?', [
        'Um quarto na penumbra e em silêncio, sem música, sem celular e sem nada para olhar',
        'Um cochilo longo ou um banho morno sem pressa',
        'Algo que não exija decisões: uma série conhecida ou uma caminhada sem destino',
        'Estar com alguém que me deixe ser exatamente quem eu sou'
      ]]),
    q('q_rest_4', 4, ['physical', 'mental', 'sensory', 'emotional'],
      ['Which of these has shown up most for you this week?', [
        'Heavy limbs, an aching back, yawning through the day',
        'Losing words, rereading the same line, trouble focusing',
        'Flinching at noise, irritation at bright light or busy spaces',
        'Tears close to the surface, or feeling flat and far away'
      ]],
      ['¿Cuál de estas señales ha aparecido más en ti esta semana?', [
        'Brazos y piernas pesados, dolor de espalda, bostezos todo el día',
        'Olvidar palabras, releer la misma línea, dificultad para concentrarme',
        'Sobresaltos con los ruidos, molestia con la luz fuerte o los lugares concurridos',
        'Lágrimas a flor de piel, o sentirme apagado y lejano'
      ]],
      ['Qual destes sinais mais apareceu para você nesta semana?', [
        'Corpo pesado, dor nas costas, bocejos o dia inteiro',
        'Esquecer palavras, reler a mesma frase, dificuldade de concentração',
        'Sobressaltos com barulho, incômodo com luz forte ou lugares cheios',
        'Choro à flor da pele, ou uma sensação de estar apagado e distante'
      ]]),
    q('q_rest_5', 5, ['mental', 'emotional', 'physical', 'sensory'],
      ['At the end of a hard day, which sentence sounds most like you?', [
        '“My brain will not stop running through tomorrow.”',
        '“I held it together for everyone and now I feel empty.”',
        '“I can barely keep my eyes open.”',
        '“If one more thing beeps or talks to me, I might snap.”'
      ]],
      ['Al final de un día difícil, ¿qué frase se parece más a ti?', [
        '“Mi cabeza no deja de repasar lo que viene mañana.”',
        '“Sostuve todo por los demás y ahora me siento vacío.”',
        '“Apenas puedo mantener los ojos abiertos.”',
        '“Si algo más suena o me habla, voy a explotar.”'
      ]],
      ['No fim de um dia difícil, qual frase mais combina com você?', [
        '“Minha cabeça não para de repassar o dia de amanhã.”',
        '“Segurei as pontas para todo mundo e agora me sinto vazio.”',
        '“Mal consigo manter os olhos abertos.”',
        '“Se mais alguma coisa apitar ou falar comigo, eu vou explodir.”'
      ]]),
    q('q_rest_6', 6, ['sensory', 'emotional', 'mental', 'physical'],
      ['What tends to drain you the fastest?', [
        'Crowded, loud, or visually busy places',
        'Conversations where I have to hide what I really feel',
        'Juggling many small decisions and constant interruptions',
        'Long hours on my feet, or long hours at a desk without moving'
      ]],
      ['¿Qué suele agotarte más rápido?', [
        'Lugares llenos de gente, ruidosos o visualmente saturados',
        'Conversaciones en las que debo esconder lo que siento de verdad',
        'Hacer malabares con muchas decisiones pequeñas e interrupciones',
        'Muchas horas de pie, o muchas horas frente al escritorio sin moverme'
      ]],
      ['O que costuma drenar sua energia mais rápido?', [
        'Lugares cheios, barulhentos ou visualmente carregados',
        'Conversas em que preciso esconder o que sinto de verdade',
        'Equilibrar muitas pequenas decisões e interrupções constantes',
        'Muitas horas em pé, ou muitas horas na mesa sem me mexer'
      ]]),
    q('q_rest_7', 7, ['physical', 'emotional', 'sensory', 'mental'],
      ['If someone offered you one gift right now, which would you choose?', [
        'A full night of uninterrupted sleep',
        'A friend who listens without trying to fix anything',
        'A quiet, softly lit place with no notifications',
        'Someone else making every decision for a day'
      ]],
      ['Si alguien te ofreciera un regalo ahora mismo, ¿cuál elegirías?', [
        'Una noche entera de sueño sin interrupciones',
        'Una amistad que escuche sin intentar arreglar nada',
        'Un lugar tranquilo, con luz suave y sin notificaciones',
        'Que otra persona tome todas las decisiones por un día'
      ]],
      ['Se alguém te oferecesse um presente agora, qual você escolheria?', [
        'Uma noite inteira de sono sem interrupções',
        'Uma amizade que escute sem tentar resolver nada',
        'Um lugar tranquilo, com luz suave e sem notificações',
        'Alguém tomando todas as decisões por mim durante um dia'
      ]]),
    q('q_rest_8', 8, ['mental', 'sensory', 'physical', 'emotional'],
      ['How does tiredness usually show up in your mood?', [
        'Scattered and foggy, like too many tabs are open',
        'Edgy, jumpy, and easily startled',
        'Slow and heavy, wanting to lie down anywhere',
        'Tender, easily hurt, or quietly lonely'
      ]],
      ['¿Cómo suele aparecer el cansancio en tu estado de ánimo?', [
        'Disperso y nublado, como si tuviera demasiadas pestañas abiertas',
        'Irritable, inquieto y fácil de sobresaltar',
        'Lento y pesado, con ganas de acostarme en cualquier parte',
        'Sensible, fácil de herir o con una soledad silenciosa'
      ]],
      ['Como o cansaço costuma aparecer no seu humor?', [
        'Disperso e enevoado, como se houvesse abas demais abertas',
        'Irritado, agitado e fácil de assustar',
        'Lento e pesado, com vontade de deitar em qualquer lugar',
        'Sensível, fácil de magoar ou com uma solidão silenciosa'
      ]]),
    q('q_rest_9', 9, ['sensory', 'physical', 'mental', 'emotional'],
      ['Which small act of rest feels most within reach today?', [
        'Five minutes with my eyes closed and my phone in another room',
        'Lying down and letting my shoulders drop',
        'Writing my to-do list on paper so my head can let go of it',
        'Sending an honest message to someone I trust'
      ]],
      ['¿Qué pequeño gesto de descanso sientes más a tu alcance hoy?', [
        'Cinco minutos con los ojos cerrados y el teléfono en otra habitación',
        'Acostarme y dejar caer los hombros',
        'Escribir mis pendientes en papel para que la cabeza pueda soltarlos',
        'Enviar un mensaje sincero a alguien de confianza'
      ]],
      ['Qual pequeno gesto de descanso parece mais possível hoje?', [
        'Cinco minutos de olhos fechados, com o celular em outro cômodo',
        'Deitar e deixar os ombros caírem',
        'Escrever minhas pendências no papel para a cabeça poder soltá-las',
        'Mandar uma mensagem sincera para alguém de confiança'
      ]])
  ],
  results: {
    physical: r(['release', 'arrive'],
      ['Your Body Is Asking for Real Rest',
        'Your answers point to a physical tiredness that willpower cannot solve. Your muscles, posture, and sleep are asking for genuine permission to slow down. This is not a failing — it is information, and it deserves to be honored without apology.',
        [
          'Try the practice “Unclench one thing” before bed or between tasks — jaw, shoulders, or hands are good places to start.',
          'Protect one stretch of lying-down rest this week, even twenty minutes, and treat it as an appointment.',
          'Notice one physical demand you could lighten or share this week, rather than pushing through it.',
          'If exhaustion or poor sleep has lasted for weeks, it is worth mentioning to a doctor or clinician.'
        ]],
      ['Tu cuerpo te pide descanso de verdad',
        'Tus respuestas muestran un cansancio físico que no se resuelve con fuerza de voluntad. Tus músculos, tu postura y tu sueño piden un permiso sincero para bajar el ritmo. No es un fracaso: es información, y merece ser respetada sin disculpas.',
        [
          'Prueba la práctica “Soltar un solo punto” antes de dormir o entre tareas; la mandíbula, los hombros o las manos son un buen comienzo.',
          'Reserva un momento para descansar acostado esta semana, aunque sean veinte minutos, y trátalo como una cita importante.',
          'Observa una exigencia física que puedas aligerar o compartir esta semana en lugar de aguantarla.',
          'Si el agotamiento o el mal dormir llevan semanas, vale la pena comentarlo con un médico o profesional de salud.'
        ]],
      ['Seu corpo está pedindo descanso de verdade',
        'Suas respostas revelam um cansaço físico que não se resolve com força de vontade. Seus músculos, sua postura e seu sono pedem uma permissão sincera para desacelerar. Isso não é fraqueza: é informação, e merece ser respeitada sem culpa.',
        [
          'Experimente a prática “Soltar um ponto de tensão” antes de dormir ou entre tarefas; mandíbula, ombros ou mãos são um bom começo.',
          'Reserve um momento para descansar deitado nesta semana, nem que sejam vinte minutos, e trate-o como um compromisso.',
          'Perceba uma exigência física que você possa aliviar ou dividir nesta semana, em vez de simplesmente aguentar.',
          'Se o esgotamento ou o sono ruim já duram semanas, vale conversar com um médico ou profissional de saúde.'
        ]]),
    mental: r(['next', 'weather'],
      ['Pausing the Endless Decision Machine',
        'Your fatigue seems rooted in continuous planning, deciding, and problem-solving. Carrying many open loops at once is genuinely tiring. The kindest move today may be giving yourself permission not to have every answer for the next hour.',
        [
          'Use “The next workable thing” to shrink a tangled day down to one doable step.',
          'Empty your head onto paper once a day — a list outside of you is lighter than a list inside you.',
          'Choose one “decision-free” window: same breakfast, same walk, no choices required.',
          'Try the “Emotional weather report” to notice what the busy mind might be covering for.'
        ]],
      ['Pausar la máquina de tomar decisiones',
        'Tu cansancio parece nacer de planificar, decidir y resolver sin parar. Sostener muchos asuntos abiertos a la vez agota de verdad. Quizá el gesto más amable hoy sea darte permiso de no tener todas las respuestas durante la próxima hora.',
        [
          'Usa “El próximo paso viable” para reducir un día enredado a un solo paso posible.',
          'Vacía la cabeza en un papel una vez al día: una lista fuera de ti pesa menos que una lista dentro.',
          'Elige un momento “sin decisiones”: el mismo desayuno, la misma caminata, nada que elegir.',
          'Prueba el “Informe del clima interior” para notar qué podría estar tapando la mente ocupada.'
        ]],
      ['Uma trégua para a mente atarefada',
        'Seu cansaço parece vir de planejar, decidir e resolver sem parar. Carregar muitos assuntos em aberto ao mesmo tempo cansa de verdade. Talvez o gesto mais gentil hoje seja se permitir não ter todas as respostas pela próxima hora.',
        [
          'Use “O próximo passo possível” para reduzir um dia embaralhado a um único passo viável.',
          'Esvazie a cabeça no papel uma vez por dia: uma lista fora de você pesa menos do que uma lista dentro.',
          'Escolha um momento “sem decisões”: o mesmo café da manhã, a mesma caminhada, nada para escolher.',
          'Experimente a “Previsão do tempo interior” para notar o que a mente ocupada pode estar encobrindo.'
        ]]),
    sensory: r(['arrive', 'release'],
      ['A Call for Sensory Quietness',
        'Your senses seem to have been carrying a great deal lately — screens, notifications, noise, and constant input. When everything is turned up, the most restoring kindness is often not doing more, but stepping into quiet so your eyes and ears can finally rest.',
        [
          'Try “Arrive in the room” slowly, choosing the softest sights and sounds around you.',
          'Create one low-input pocket each day: lights down, phone away, nothing playing.',
          'Turn off non-essential notifications for a week and notice how your body responds.',
          'Step outside for a few minutes and let your gaze rest on something far away.'
        ]],
      ['Una invitación al silencio sensorial',
        'Tus sentidos parecen haber cargado mucho últimamente: pantallas, avisos, ruido y estímulos constantes. Cuando todo está a todo volumen, el cuidado más reparador no suele ser hacer más, sino entrar en el silencio para que la vista y el oído por fin descansen.',
        [
          'Prueba “Llegar al espacio presente” con calma, eligiendo las imágenes y los sonidos más suaves a tu alrededor.',
          'Crea cada día un rincón de pocos estímulos: luces bajas, teléfono lejos, nada sonando.',
          'Desactiva las notificaciones no esenciales durante una semana y observa cómo responde tu cuerpo.',
          'Sal unos minutos al aire libre y deja que la mirada descanse en algo lejano.'
        ]],
      ['Um convite ao silêncio dos sentidos',
        'Seus sentidos parecem ter carregado muita coisa ultimamente: telas, avisos, barulho e estímulos constantes. Quando tudo está no volume máximo, o cuidado mais restaurador nem sempre é fazer mais, e sim entrar no silêncio para que olhos e ouvidos possam, enfim, descansar.',
        [
          'Experimente “Chegar ao espaço presente” com calma, escolhendo as imagens e os sons mais suaves ao seu redor.',
          'Crie todos os dias um cantinho de poucos estímulos: luz baixa, celular longe, nada tocando.',
          'Desative as notificações não essenciais por uma semana e observe como seu corpo reage.',
          'Saia alguns minutos ao ar livre e deixe o olhar descansar em algo distante.'
        ]]),
    emotional: r(['kindly', 'weather'],
      ['Making Space for Your Real Feelings',
        'Your answers suggest you have been carrying an emotional load — putting on a brave face, tending to other people’s feelings, or holding your own in. You are allowed to be honest about how heavy things have felt, and to set some of it down.',
        [
          'Try “The three-part kindness pause” when you notice yourself holding it together.',
          'Use the “Emotional weather report” to name what is actually here, without needing to fix it.',
          'Reach out to one person with whom you do not have to perform being fine.',
          'If heaviness has settled in for weeks, a counselor or therapist can be a steady place to bring it.'
        ]],
      ['Hacer espacio a lo que sientes de verdad',
        'Tus respuestas indican que has cargado un peso emocional: aparentar fortaleza, atender lo que sienten los demás o guardarte lo tuyo. Tienes derecho a reconocer con sinceridad lo pesado que ha sido, y a soltar una parte.',
        [
          'Prueba “La pausa de la ternura en tres tiempos” cuando notes que estás sosteniéndolo todo.',
          'Usa el “Informe del clima interior” para nombrar lo que hay, sin necesidad de arreglarlo.',
          'Busca a una persona con quien no tengas que fingir que estás bien.',
          'Si la pesadez lleva semanas instalada, un consejero o terapeuta puede ser un lugar firme para llevarla.'
        ]],
      ['Abrindo espaço para o que você sente de verdade',
        'Suas respostas indicam que você tem carregado um peso emocional: parecer forte, cuidar do que os outros sentem ou guardar o que é seu. Você tem o direito de reconhecer com sinceridade o quanto tem sido pesado, e de deixar uma parte no chão.',
        [
          'Experimente “A pausa da gentileza em três passos” quando perceber que está segurando tudo sozinho.',
          'Use a “Previsão do tempo interior” para nomear o que está aqui, sem precisar resolver.',
          'Procure uma pessoa com quem você não precise fingir que está tudo bem.',
          'Se o peso já se instalou há semanas, um psicólogo ou terapeuta pode ser um lugar firme para levá-lo.'
        ]])
  }
};

// ---------------------------------------------------------------------------
// 2. Self-compassion check-in
// ---------------------------------------------------------------------------
const quizCompassion = {
  id: 'quiz_compassion',
  slug: 'self-compassion-check-in',
  tier_required: 'steady',
  en: {
    title: 'Self-Compassion Check-In',
    subtitle: 'Reflecting on your inner conversation in moments of challenge.',
    description: 'Notice how you respond when you stumble, and discover simple tools to bring more warmth to yourself. This is a reflective check-in, not a diagnostic tool — there are no wrong answers, only honest ones.'
  },
  es: {
    title: 'Revisión de la autocompasión',
    subtitle: 'Cómo te hablas cuando las cosas no salen como esperabas.',
    description: 'Observa tus reacciones interiores ante el error y descubre prácticas suaves para tratarte con mayor paciencia. Es una reflexión personal, no una herramienta de diagnóstico: no hay respuestas equivocadas, solo respuestas sinceras.'
  },
  'pt-BR': {
    title: 'Check-in de autocompaixão',
    subtitle: 'Como anda sua conversa consigo mesmo nos momentos difíceis.',
    description: 'Perceba a maneira como você reage aos próprios tropeços e encontre formas gentis de se acolher. É uma reflexão pessoal, não uma ferramenta de diagnóstico: não existem respostas erradas, apenas respostas sinceras.'
  },
  questions: [
    q('q_comp_1', 1, ['critical', 'withdrawn', 'striving', 'compassionate'],
      ['When you make an unintentional mistake in front of others, what is your immediate reflex?', [
        'Harsh internal lecturing: “How could I have been so foolish?”',
        'Numbness or wanting to disappear completely from the room',
        'Instantly overcompensating — working twice as hard so no one remembers it',
        'A quiet breath acknowledging: “I am human, and mistakes happen to everyone.”'
      ]],
      ['Cuando cometes un error involuntario ante los demás, ¿cuál es tu primera reacción interna?', [
        'Reproches duros: “¿Cómo pude haber hecho semejante tontería?”',
        'Ganas de desaparecer del lugar y desconectarme por completo',
        'Compensar de inmediato, esforzándome el doble para que nadie lo recuerde',
        'Una respiración tranquila recordando: “Soy humano y esto le pasa a cualquiera.”'
      ]],
      ['Quando você comete um erro sem querer diante de outras pessoas, qual é seu primeiro reflexo?', [
        'Crítica dura: “Como fui capaz de errar nisso?”',
        'Vontade de sumir do ambiente e se fechar',
        'Compensar na hora, me esforçando em dobro para ninguém lembrar',
        'Uma pausa serena lembrando: “Errar faz parte da vida de todos nós.”'
      ]]),
    q('q_comp_2', 2, ['striving', 'compassionate', 'critical', 'withdrawn'],
      ['When you fall short of a goal you set for yourself, what usually happens next?', [
        'I raise the bar and promise myself I will try harder',
        'I feel the disappointment, then ask what I actually needed',
        'I replay it and list everything that is wrong with me',
        'I quietly drop the goal and try not to think about it'
      ]],
      ['Cuando no alcanzas una meta que te propusiste, ¿qué suele pasar después?', [
        'Subo la exigencia y me prometo esforzarme más',
        'Siento la decepción y luego me pregunto qué necesitaba de verdad',
        'Lo repaso una y otra vez y enumero todo lo que está mal en mí',
        'Abandono la meta en silencio y trato de no pensar en ella'
      ]],
      ['Quando você não alcança uma meta que definiu para si, o que costuma acontecer depois?', [
        'Aumento a exigência e prometo me esforçar mais',
        'Sinto a decepção e depois me pergunto do que eu realmente precisava',
        'Repasso tudo e faço uma lista do que há de errado comigo',
        'Desisto da meta em silêncio e tento não pensar nela'
      ]]),
    q('q_comp_3', 3, ['critical', 'compassionate', 'withdrawn', 'striving'],
      ['If a close friend spoke to you the way you speak to yourself, how would it feel?', [
        'Honestly, it would feel cruel',
        'Mostly supportive — I try to speak to myself like a friend',
        'Distant — I do not really talk to myself about how I am doing',
        'Demanding, like a coach who is never quite satisfied'
      ]],
      ['Si una amistad cercana te hablara como tú te hablas, ¿cómo se sentiría?', [
        'Sinceramente, se sentiría cruel',
        'Casi siempre de apoyo: intento hablarme como a un amigo',
        'Distante: en realidad no me pregunto cómo estoy',
        'Exigente, como un entrenador que nunca queda satisfecho'
      ]],
      ['Se um amigo próximo falasse com você do jeito que você fala consigo mesmo, como seria?', [
        'Sinceramente, pareceria cruel',
        'Quase sempre acolhedor: tento falar comigo como falaria com um amigo',
        'Distante: na verdade eu não me pergunto como estou',
        'Exigente, como um técnico que nunca fica satisfeito'
      ]]),
    q('q_comp_4', 4, ['withdrawn', 'striving', 'compassionate', 'critical'],
      ['When you are going through something painful, how do you tend to treat yourself?', [
        'I pull away from people and wait for it to pass on its own',
        'I keep busy so I do not have to feel it',
        'I let myself slow down and offer myself some comfort',
        'I tell myself I should be handling this better'
      ]],
      ['Cuando atraviesas algo doloroso, ¿cómo sueles tratarte?', [
        'Me alejo de la gente y espero a que pase solo',
        'Me mantengo ocupado para no tener que sentirlo',
        'Me permito bajar el ritmo y ofrecerme algo de consuelo',
        'Me digo que debería llevarlo mejor'
      ]],
      ['Quando você passa por algo doloroso, como costuma se tratar?', [
        'Me afasto das pessoas e espero passar sozinho',
        'Me mantenho ocupado para não precisar sentir',
        'Me permito desacelerar e me ofereço algum conforto',
        'Digo a mim mesmo que eu deveria estar lidando melhor com isso'
      ]]),
    q('q_comp_5', 5, ['compassionate', 'critical', 'striving', 'withdrawn'],
      ['When you notice a flaw or struggle in yourself, which thought is closest?', [
        '“Lots of people struggle with this. I am not alone in it.”',
        '“Everyone else seems to have this figured out except me.”',
        '“I just need to fix this before anyone notices.”',
        '“It is easier not to look at it too closely.”'
      ]],
      ['Cuando notas una falla o una dificultad en ti, ¿qué pensamiento se parece más al tuyo?', [
        '“Mucha gente vive esto. No estoy solo.”',
        '“Todos parecen tenerlo resuelto menos yo.”',
        '“Tengo que corregirlo antes de que alguien lo note.”',
        '“Es más fácil no mirarlo muy de cerca.”'
      ]],
      ['Quando você percebe uma falha ou dificuldade em si mesmo, qual pensamento está mais próximo?', [
        '“Muita gente passa por isso. Não estou sozinho.”',
        '“Todo mundo parece ter resolvido isso, menos eu.”',
        '“Preciso consertar isso antes que alguém perceba.”',
        '“É mais fácil não olhar muito de perto.”'
      ]]),
    q('q_comp_6', 6, ['critical', 'withdrawn', 'compassionate', 'striving'],
      ['How do you usually respond to a compliment?', [
        'I immediately think of reasons it is not really true',
        'I feel awkward and change the subject as fast as I can',
        'I let it land and say thank you',
        'I feel relieved for a moment, then worry about keeping it up'
      ]],
      ['¿Cómo sueles reaccionar ante un elogio?', [
        'Enseguida pienso en razones por las que no es del todo cierto',
        'Me incomodo y cambio de tema lo antes posible',
        'Dejo que llegue y doy las gracias',
        'Siento alivio un momento y luego me preocupa estar a la altura'
      ]],
      ['Como você costuma reagir a um elogio?', [
        'Logo penso em motivos pelos quais ele não é bem verdade',
        'Fico sem jeito e mudo de assunto o mais rápido possível',
        'Deixo o elogio chegar e agradeço',
        'Sinto alívio por um instante e depois me preocupo em manter o nível'
      ]]),
    q('q_comp_7', 7, ['striving', 'withdrawn', 'critical', 'compassionate'],
      ['When you are exhausted but there is still more to do, what do you usually tell yourself?', [
        '“Rest is for when everything is finished.”',
        'I do not tell myself anything — I just go numb and keep going',
        '“Other people manage. Stop being so weak.”',
        '“This is hard. What is the kindest next step?”'
      ]],
      ['Cuando estás agotado pero aún queda mucho por hacer, ¿qué te dices normalmente?', [
        '“El descanso es para cuando todo esté terminado.”',
        'No me digo nada: me desconecto y sigo adelante',
        '“Los demás pueden. Deja de ser tan débil.”',
        '“Esto es difícil. ¿Cuál es el siguiente paso más amable?”'
      ]],
      ['Quando você está exausto, mas ainda há muito a fazer, o que costuma dizer a si mesmo?', [
        '“Descanso é para quando tudo estiver pronto.”',
        'Não digo nada: fico no automático e sigo em frente',
        '“Os outros dão conta. Pare de ser tão fraco.”',
        '“Isso está difícil. Qual é o próximo passo mais gentil?”'
      ]]),
    q('q_comp_8', 8, ['withdrawn', 'compassionate', 'striving', 'critical'],
      ['Which of these would feel most healing to hear right now?', [
        '“You do not have to go through this alone.”',
        '“You are doing the best you can with what you have.”',
        '“You do not have to earn rest.”',
        '“You are not the sum of your mistakes.”'
      ]],
      ['¿Cuál de estas frases te haría más bien escuchar ahora?', [
        '“No tienes que pasar por esto a solas.”',
        '“Estás haciendo lo mejor que puedes con lo que tienes.”',
        '“No tienes que ganarte el descanso.”',
        '“No eres la suma de tus errores.”'
      ]],
      ['Qual destas frases faria mais bem ouvir agora?', [
        '“Você não precisa passar por isso sozinho.”',
        '“Você está fazendo o melhor que pode com o que tem.”',
        '“Você não precisa merecer o descanso.”',
        '“Você não é a soma dos seus erros.”'
      ]])
  ],
  results: {
    critical: r(['friend', 'kindly'],
      ['Softening a Harsh Inner Voice',
        'Your answers suggest a strong inner critic — one that probably learned somewhere that harshness keeps you safe or on track. It makes sense that it is there. It is also possible to hold high standards and still speak to yourself with warmth.',
        [
          'Try “Borrow a kinder voice”: ask what a trusted friend would say to you right now, and say it back to yourself.',
          'Use “The three-part kindness pause” — noticing the pain, remembering you are not alone, and offering yourself one kind word.',
          'When the critic speaks, simply name it: “That is the critic.” You do not have to argue, only notice.',
          'Write down one thing you handled well today, however small.'
        ]],
      ['Suavizar una voz interior dura',
        'Tus respuestas sugieren una voz crítica muy presente, que tal vez aprendió en algún momento que la dureza te mantiene a salvo o en el camino. Tiene sentido que esté ahí. También es posible tener expectativas altas y hablarte con calidez.',
        [
          'Prueba “Prestar una voz más comprensiva”: pregúntate qué te diría una amistad de confianza ahora y dítelo a ti mismo.',
          'Usa “La pausa de la ternura en tres tiempos”: reconocer el dolor, recordar que no estás solo y ofrecerte una palabra amable.',
          'Cuando aparezca la crítica, solo nómbrala: “Esa es la voz crítica.” No hace falta discutir, solo notar.',
          'Anota una cosa que manejaste bien hoy, por pequeña que sea.'
        ]],
      ['Suavizando uma voz interior dura',
        'Suas respostas sugerem uma voz crítica bem presente, que talvez tenha aprendido em algum momento que a dureza te mantém seguro ou no rumo. Faz sentido que ela exista. Também é possível ter padrões altos e ainda assim falar consigo com carinho.',
        [
          'Experimente “Adotar uma voz mais compreensiva”: pergunte o que um amigo de confiança diria agora e diga isso a si mesmo.',
          'Use “A pausa da gentileza em três passos”: reconhecer a dor, lembrar que você não está sozinho e oferecer a si uma palavra gentil.',
          'Quando a crítica aparecer, apenas dê nome a ela: “Essa é a voz crítica.” Não é preciso discutir, só perceber.',
          'Anote uma coisa que você fez bem hoje, por menor que seja.'
        ]]),
    withdrawn: r(['name', 'kindly'],
      ['Coming Back Toward Yourself',
        'Your answers suggest that when things hurt, you tend to go quiet, pull away, or go numb. That is often a way of protecting yourself when feelings seem too big. Gently, and at your own pace, it may help to turn back toward what you feel — and toward people who care.',
        [
          'Try “Name what is here” to acknowledge a feeling in a few simple words, without having to dive into it.',
          'Place a hand on your chest or arm during “The three-part kindness pause” — small physical warmth can help.',
          'Let one trusted person know, even briefly, that things have been hard.',
          'If numbness or withdrawal has lasted a while, a counselor can help you reconnect safely.'
        ]],
      ['Volver hacia ti',
        'Tus respuestas sugieren que, cuando algo duele, tiendes a callar, alejarte o desconectarte. A menudo es una forma de protegerte cuando las emociones parecen demasiado grandes. Con suavidad y a tu propio ritmo, puede ayudar volver hacia lo que sientes y hacia las personas que te quieren.',
        [
          'Prueba “Nombrar lo que está aquí” para reconocer una emoción con pocas palabras, sin tener que sumergirte en ella.',
          'Pon una mano en el pecho o en el brazo durante “La pausa de la ternura en tres tiempos”: un poco de calidez física ayuda.',
          'Cuéntale a una persona de confianza, aunque sea en pocas palabras, que las cosas han estado difíciles.',
          'Si la desconexión o el aislamiento llevan tiempo, un consejero puede ayudarte a reconectar de forma segura.'
        ]],
      ['Voltando para perto de si',
        'Suas respostas sugerem que, quando algo dói, você tende a se calar, se afastar ou ficar anestesiado. Muitas vezes é uma forma de proteção quando os sentimentos parecem grandes demais. Com delicadeza e no seu ritmo, pode ajudar voltar a olhar para o que você sente e para as pessoas que se importam com você.',
        [
          'Experimente “Nomear o que está presente” para reconhecer um sentimento em poucas palavras, sem precisar mergulhar nele.',
          'Coloque a mão no peito ou no braço durante “A pausa da gentileza em três passos”: um pouco de calor físico ajuda.',
          'Conte a uma pessoa de confiança, mesmo que brevemente, que as coisas têm estado difíceis.',
          'Se o distanciamento ou a anestesia emocional já duram um tempo, um psicólogo pode ajudar você a se reconectar com segurança.'
        ]]),
    striving: r(['next', 'friend'],
      ['Worth That Does Not Have to Be Earned',
        'Your answers suggest you often meet difficulty by trying harder — raising the bar, staying busy, fixing things before anyone notices. That drive has probably served you. It can also leave little room to rest or simply be human. You are allowed to be enough before the work is done.',
        [
          'Use “The next workable thing” to choose one sufficient step instead of the perfect plan.',
          'Try “Borrow a kinder voice” when you hear yourself say “I should have done more.”',
          'Schedule one pause this week that has no purpose except rest — and keep it.',
          'At the end of the day, write “Today was enough because…” and finish the sentence.'
        ]],
      ['Un valor que no hay que ganarse',
        'Tus respuestas sugieren que sueles enfrentar las dificultades esforzándote más: subir la exigencia, mantenerte ocupado, arreglar todo antes de que alguien lo note. Ese impulso probablemente te ha servido. También puede dejar poco espacio para descansar o simplemente ser humano. Puedes ser suficiente antes de terminar la tarea.',
        [
          'Usa “El próximo paso viable” para elegir un paso suficiente en lugar del plan perfecto.',
          'Prueba “Prestar una voz más comprensiva” cuando te escuches decir “debí haber hecho más”.',
          'Agenda una pausa esta semana sin otro propósito que descansar, y respétala.',
          'Al final del día, escribe “Hoy fue suficiente porque…” y completa la frase.'
        ]],
      ['Um valor que não precisa ser conquistado',
        'Suas respostas sugerem que você costuma enfrentar as dificuldades se esforçando mais: aumentando a exigência, se mantendo ocupado, consertando tudo antes que alguém perceba. Essa garra provavelmente já te ajudou. Mas ela também pode deixar pouco espaço para descansar ou simplesmente ser humano. Você pode ser suficiente antes de terminar o trabalho.',
        [
          'Use “O próximo passo possível” para escolher um passo suficiente em vez do plano perfeito.',
          'Experimente “Adotar uma voz mais compreensiva” quando se ouvir dizendo “eu devia ter feito mais”.',
          'Marque uma pausa nesta semana sem nenhum objetivo além de descansar, e cumpra.',
          'No fim do dia, escreva “Hoje foi suficiente porque…” e complete a frase.'
        ]]),
    compassionate: r(['kindly', 'listen'],
      ['A Warm Inner Ally',
        'Your answers suggest you already offer yourself a good deal of kindness when things are hard. Self-compassion researcher Kristin Neff describes three parts to it — kindness toward yourself, remembering your shared humanity, and mindful awareness of what you feel — and you seem to be practicing all three. This is a skill worth tending.',
        [
          'Keep “The three-part kindness pause” close for harder days, when the kind voice gets quieter.',
          'Notice which situations still pull you toward self-criticism — that is where your practice can grow.',
          'Try “Ask before fixing” to extend the same patience you give yourself to the people around you.',
          'Share what helps you with someone in the Circle; your steadiness may help another person land.'
        ]],
      ['Una aliada interior cálida',
        'Tus respuestas sugieren que ya te ofreces bastante amabilidad cuando las cosas se ponen difíciles. La investigadora Kristin Neff describe tres componentes de la autocompasión —amabilidad hacia uno mismo, reconocer nuestra humanidad compartida y atención plena a lo que sentimos— y pareces practicar los tres. Es una habilidad que vale la pena cuidar.',
        [
          'Ten a mano “La pausa de la ternura en tres tiempos” para los días más duros, cuando la voz amable se vuelve más baja.',
          'Observa qué situaciones todavía te empujan a la autocrítica: ahí puede crecer tu práctica.',
          'Prueba “Preguntar antes de resolver” para ofrecer a otros la misma paciencia que te das a ti.',
          'Comparte en el Círculo lo que te ayuda; tu serenidad puede ayudar a otra persona a encontrar tierra firme.'
        ]],
      ['Uma aliada interior acolhedora',
        'Suas respostas sugerem que você já se oferece bastante gentileza quando as coisas ficam difíceis. A pesquisadora Kristin Neff descreve três componentes da autocompaixão — gentileza consigo, reconhecimento da humanidade compartilhada e atenção plena ao que sentimos — e você parece praticar os três. É uma habilidade que vale a pena cultivar.',
        [
          'Mantenha “A pausa da gentileza em três passos” por perto para os dias mais duros, quando a voz gentil fica mais baixa.',
          'Perceba quais situações ainda te puxam para a autocrítica: é ali que sua prática pode crescer.',
          'Experimente “Perguntar antes de aconselhar” para oferecer aos outros a mesma paciência que você se dá.',
          'Compartilhe no Círculo o que te ajuda; sua serenidade pode ajudar outra pessoa a encontrar chão.'
        ]])
  }
};

// ---------------------------------------------------------------------------
// 3. Stress & overwhelm reflection
// ---------------------------------------------------------------------------
const quizStress = {
  id: 'quiz_stress',
  slug: 'stress-and-overwhelm-reflection',
  tier_required: 'steady',
  en: {
    title: 'Stress & Overwhelm Reflection',
    subtitle: 'Listening to the warning signals of your nervous system.',
    description: 'A non-clinical check on where stress tends to show up for you — in your body, your thoughts, your emotions, or your connection with others. This is a reflective tool, not a diagnosis. If you feel unsafe or overwhelmed to the point of crisis, please contact your local emergency number or a crisis line such as 988 in the US.'
  },
  es: {
    title: 'Reflexión sobre el estrés y la sobrecarga',
    subtitle: 'Escuchar las señales sutiles de tu cuerpo.',
    description: 'Un chequeo no clínico para reconocer dónde suele aparecer el estrés en ti: en el cuerpo, en los pensamientos, en las emociones o en tus vínculos. Es una herramienta de reflexión, no un diagnóstico. Si te sientes en peligro o desbordado hasta el punto de crisis, comunícate con tu número local de emergencias o con una línea de crisis como el 988 en EE. UU.'
  },
  'pt-BR': {
    title: 'Reflexão sobre estresse e sobrecarga',
    subtitle: 'Ouvindo os alertas gentis do seu corpo.',
    description: 'Uma reflexão educativa para perceber onde o estresse costuma aparecer em você: no corpo, nos pensamentos, nas emoções ou nos seus vínculos. É uma ferramenta de reflexão, não um diagnóstico. Se você se sentir em perigo ou sobrecarregado a ponto de crise, procure o número de emergência local ou uma linha de apoio em crise, como o 988 nos EUA.'
  },
  questions: [
    q('q_stress_1', 1, ['body_alarm', 'racing_mind', 'emotional_flood', 'shutdown'],
      ['When pressure builds, what do you usually notice first?', [
        'A tight chest, clenched jaw, or a stomach in knots',
        'Thoughts speeding up and jumping from worry to worry',
        'Feelings rising fast — irritation, tears, or panic',
        'A strange flatness, like someone turned the volume down on everything'
      ]],
      ['Cuando la presión aumenta, ¿qué es lo primero que sueles notar?', [
        'Opresión en el pecho, la mandíbula apretada o un nudo en el estómago',
        'Pensamientos que se aceleran y saltan de una preocupación a otra',
        'Emociones que suben rápido: irritación, llanto o pánico',
        'Una sensación extraña de apagamiento, como si alguien bajara el volumen de todo'
      ]],
      ['Quando a pressão aumenta, o que você costuma perceber primeiro?', [
        'Aperto no peito, mandíbula travada ou um nó no estômago',
        'Pensamentos acelerando e pulando de uma preocupação para outra',
        'Emoções subindo rápido: irritação, choro ou pânico',
        'Uma sensação estranha de apagamento, como se alguém abaixasse o volume de tudo'
      ]]),
    q('q_stress_2', 2, ['racing_mind', 'shutdown', 'body_alarm', 'emotional_flood'],
      ['How has your sleep been during stressful stretches?', [
        'I lie awake replaying conversations and planning tomorrow',
        'I sleep a lot but never feel rested — or I cannot get out of bed',
        'I wake up with a pounding heart or sore, tense muscles',
        'I wake up already on edge, as if bracing for bad news'
      ]],
      ['¿Cómo ha estado tu sueño en las temporadas de estrés?', [
        'Me quedo despierto repasando conversaciones y planeando el día siguiente',
        'Duermo mucho pero nunca descanso, o me cuesta salir de la cama',
        'Me despierto con el corazón acelerado o con los músculos tensos y adoloridos',
        'Me despierto ya en alerta, como preparándome para una mala noticia'
      ]],
      ['Como tem sido seu sono nos períodos de estresse?', [
        'Fico acordado repassando conversas e planejando o dia seguinte',
        'Durmo muito, mas nunca descanso, ou tenho dificuldade de sair da cama',
        'Acordo com o coração acelerado ou com os músculos tensos e doloridos',
        'Acordo já em alerta, como se estivesse me preparando para uma notícia ruim'
      ]]),
    q('q_stress_3', 3, ['emotional_flood', 'body_alarm', 'shutdown', 'racing_mind'],
      ['When a small thing goes wrong on a stressful day, what tends to happen?', [
        'It feels like the last straw — I snap or cry more than the moment calls for',
        'My body reacts before I do: heat in my face, shaking hands, a racing pulse',
        'I stop caring and just stare at it',
        'I start catastrophizing about everything else that could go wrong'
      ]],
      ['Cuando algo pequeño sale mal en un día estresante, ¿qué suele pasar?', [
        'Se siente como la gota que derrama el vaso: exploto o lloro más de lo que el momento pide',
        'El cuerpo reacciona antes que yo: calor en la cara, manos temblorosas, pulso acelerado',
        'Dejo de importarme y me quedo mirándolo sin hacer nada',
        'Empiezo a imaginar todo lo demás que podría salir mal'
      ]],
      ['Quando algo pequeno dá errado em um dia estressante, o que costuma acontecer?', [
        'Parece a gota d’água: explodo ou choro mais do que a situação pede',
        'O corpo reage antes de mim: rosto quente, mãos trêmulas, pulso acelerado',
        'Paro de me importar e fico só olhando, sem reação',
        'Começo a imaginar tudo o mais que pode dar errado'
      ]]),
    q('q_stress_4', 4, ['shutdown', 'emotional_flood', 'racing_mind', 'body_alarm'],
      ['How do you tend to act with people when you are overwhelmed?', [
        'I go quiet, cancel plans, and stop replying to messages',
        'I become short-tempered or tearful with people I love',
        'I am physically there, but my mind is somewhere else entirely',
        'I get restless and fidgety and cannot sit through a conversation'
      ]],
      ['¿Cómo sueles comportarte con los demás cuando estás desbordado?', [
        'Me callo, cancelo planes y dejo de responder mensajes',
        'Me vuelvo irritable o lloroso con las personas que quiero',
        'Estoy presente físicamente, pero mi mente está en otra parte',
        'Me pongo inquieto y no logro quedarme quieto en una conversación'
      ]],
      ['Como você costuma agir com as pessoas quando está sobrecarregado?', [
        'Fico quieto, cancelo planos e paro de responder mensagens',
        'Fico impaciente ou choroso com as pessoas que amo',
        'Estou ali fisicamente, mas minha cabeça está em outro lugar',
        'Fico inquieto e não consigo ficar parado numa conversa'
      ]]),
    q('q_stress_5', 5, ['body_alarm', 'racing_mind', 'shutdown', 'emotional_flood'],
      ['Which of these has been most familiar lately?', [
        'Headaches, a tight neck, or stomach trouble that comes and goes',
        'Trouble focusing because my thoughts keep looping',
        'Losing interest in things I usually enjoy',
        'Mood swings that surprise even me'
      ]],
      ['¿Cuál de estas experiencias te ha resultado más familiar últimamente?', [
        'Dolores de cabeza, cuello tenso o molestias de estómago que van y vienen',
        'Dificultad para concentrarme porque los pensamientos dan vueltas',
        'Perder el interés por cosas que normalmente disfruto',
        'Cambios de ánimo que hasta a mí me sorprenden'
      ]],
      ['Qual destas experiências tem sido mais familiar ultimamente?', [
        'Dores de cabeça, pescoço tenso ou desconforto no estômago que vai e volta',
        'Dificuldade de concentração porque os pensamentos ficam girando',
        'Perder o interesse por coisas de que normalmente gosto',
        'Mudanças de humor que surpreendem até a mim'
      ]]),
    q('q_stress_6', 6, ['racing_mind', 'body_alarm', 'emotional_flood', 'shutdown'],
      ['When you finally get a quiet moment, what happens?', [
        'My mind immediately fills it with lists and what-ifs',
        'I notice how tense and sore I have been holding myself',
        'Feelings I held back all day come rushing in',
        'I zone out on my phone or the TV and lose track of time'
      ]],
      ['Cuando por fin tienes un momento de calma, ¿qué sucede?', [
        'La mente lo llena enseguida con listas y “¿y si…?”',
        'Noto lo tenso y adolorido que he estado',
        'Llegan de golpe las emociones que contuve todo el día',
        'Me pierdo en el teléfono o la televisión y pierdo la noción del tiempo'
      ]],
      ['Quando você finalmente tem um momento de calma, o que acontece?', [
        'A mente logo o preenche com listas e “e se…?”',
        'Percebo o quanto estive tenso e dolorido',
        'Os sentimentos que segurei o dia todo chegam de uma vez',
        'Me perco no celular ou na TV e perco a noção do tempo'
      ]]),
    q('q_stress_7', 7, ['emotional_flood', 'shutdown', 'body_alarm', 'racing_mind'],
      ['Which phrase best describes how stress feels inside you?', [
        'A wave that knocks me over',
        'A fog that makes everything far away',
        'An engine that will not switch off',
        'A radio stuck between stations, all static and noise'
      ]],
      ['¿Qué imagen describe mejor cómo se siente el estrés dentro de ti?', [
        'Una ola que me derriba',
        'Una niebla que aleja todo',
        'Un motor que no se apaga',
        'Una radio atascada entre estaciones, pura estática y ruido'
      ]],
      ['Qual imagem descreve melhor como o estresse se sente dentro de você?', [
        'Uma onda que me derruba',
        'Uma neblina que deixa tudo distante',
        'Um motor que não desliga',
        'Um rádio preso entre estações, só chiado e barulho'
      ]]),
    q('q_stress_8', 8, ['body_alarm', 'emotional_flood', 'racing_mind', 'shutdown'],
      ['What would help most in the next ten minutes?', [
        'Moving, stretching, or shaking out the tension',
        'Letting myself cry or vent to someone safe',
        'Getting everything out of my head and onto paper',
        'A gentle nudge back into the world — a glass of water, fresh air, a kind voice'
      ]],
      ['¿Qué te ayudaría más en los próximos diez minutos?', [
        'Moverme, estirarme o sacudir la tensión',
        'Permitirme llorar o desahogarme con alguien de confianza',
        'Sacar todo de la cabeza y ponerlo en papel',
        'Un empujoncito suave de vuelta al mundo: un vaso de agua, aire fresco, una voz amable'
      ]],
      ['O que mais ajudaria nos próximos dez minutos?', [
        'Me mexer, alongar ou sacudir a tensão',
        'Me permitir chorar ou desabafar com alguém de confiança',
        'Tirar tudo da cabeça e colocar no papel',
        'Um empurrãozinho gentil de volta ao mundo: um copo d’água, ar fresco, uma voz gentil'
      ]])
  ],
  results: {
    body_alarm: r(['release', 'arrive'],
      ['Stress That Lives in the Body',
        'Your answers suggest stress shows up first as physical alarm — tight muscles, a racing heart, an unsettled stomach. Your body is doing its best to protect you. It often responds well to being met directly, through movement, breath, and release, rather than argued with.',
        [
          'Try “Unclench one thing” a few times a day, especially when you notice your jaw or shoulders rising.',
          'Use “Arrive in the room” when your heart is racing, to let your senses remind your body where you are.',
          'Add a few minutes of gentle movement — a walk, a stretch, shaking out your hands — after tense moments.',
          'If physical symptoms are frequent or worrying, check in with a doctor to rule out other causes.'
        ]],
      ['El estrés que vive en el cuerpo',
        'Tus respuestas sugieren que el estrés aparece primero como una alarma física: músculos tensos, corazón acelerado, estómago revuelto. Tu cuerpo hace lo posible por protegerte. Suele responder mejor cuando se le atiende de forma directa, con movimiento, respiración y soltura, en lugar de discutir con él.',
        [
          'Prueba “Soltar un solo punto” varias veces al día, sobre todo cuando notes que suben la mandíbula o los hombros.',
          'Usa “Llegar al espacio presente” cuando el corazón se acelere, para que los sentidos le recuerden al cuerpo dónde estás.',
          'Suma unos minutos de movimiento suave —caminar, estirarte, sacudir las manos— después de los momentos tensos.',
          'Si los síntomas físicos son frecuentes o te preocupan, consulta con un médico para descartar otras causas.'
        ]],
      ['O estresse que mora no corpo',
        'Suas respostas sugerem que o estresse aparece primeiro como um alarme físico: músculos tensos, coração acelerado, estômago embrulhado. Seu corpo está fazendo o possível para te proteger. Ele costuma responder melhor quando é acolhido diretamente, com movimento, respiração e relaxamento, em vez de ser contrariado.',
        [
          'Experimente “Soltar um ponto de tensão” algumas vezes por dia, principalmente quando notar a mandíbula ou os ombros subindo.',
          'Use “Chegar ao espaço presente” quando o coração acelerar, para que os sentidos lembrem ao corpo onde você está.',
          'Inclua alguns minutos de movimento suave — caminhar, alongar, sacudir as mãos — depois de momentos tensos.',
          'Se os sintomas físicos forem frequentes ou preocupantes, converse com um médico para descartar outras causas.'
        ]]),
    racing_mind: r(['next', 'orient'],
      ['A Mind That Will Not Switch Off',
        'Your answers suggest stress mostly lives in your thoughts — looping worries, planning, and imagining what could go wrong. A busy mind is usually trying to keep you safe by staying one step ahead. It may help to give it something smaller and more concrete to hold.',
        [
          'Use “The next workable thing” to turn a spiral of worries into one small, doable action.',
          'Try “Today, not then” when your thoughts race toward the future or replay the past.',
          'Set a short, daily “worry window” — ten minutes to write it all down, then close the notebook.',
          'If anxious thoughts are affecting your sleep, work, or relationships for weeks, a therapist can help.'
        ]],
      ['Una mente que no se apaga',
        'Tus respuestas sugieren que el estrés vive sobre todo en tus pensamientos: preocupaciones que dan vueltas, planes y escenarios de lo que podría salir mal. Una mente ocupada suele intentar protegerte adelantándose. Puede ayudar darle algo más pequeño y concreto que sostener.',
        [
          'Usa “El próximo paso viable” para convertir una espiral de preocupaciones en una acción pequeña y posible.',
          'Prueba “Hoy, no en aquel momento” cuando la mente corra hacia el futuro o repita el pasado.',
          'Define una breve “ventana de preocupación” diaria: diez minutos para escribirlo todo y luego cerrar el cuaderno.',
          'Si los pensamientos ansiosos afectan tu sueño, trabajo o relaciones durante semanas, un terapeuta puede ayudarte.'
        ]],
      ['Uma mente que não desliga',
        'Suas respostas sugerem que o estresse mora principalmente nos pensamentos: preocupações em círculo, planos e cenários do que pode dar errado. Uma mente agitada geralmente tenta te proteger ficando um passo à frente. Pode ajudar oferecer a ela algo menor e mais concreto para segurar.',
        [
          'Use “O próximo passo possível” para transformar uma espiral de preocupações em uma ação pequena e viável.',
          'Experimente “Hoje, não naquele tempo” quando os pensamentos correrem para o futuro ou repetirem o passado.',
          'Crie uma breve “janela de preocupação” diária: dez minutos para escrever tudo e depois fechar o caderno.',
          'Se pensamentos ansiosos afetam seu sono, trabalho ou relações há semanas, um terapeuta pode ajudar.'
        ]]),
    emotional_flood: r(['name', 'weather', 'kindly'],
      ['When Feelings Arrive All at Once',
        'Your answers suggest stress tends to flood you emotionally — feelings rising quickly and sometimes spilling over. This is not a character flaw; it is often a sign that you have been holding a lot for a long time. Naming what you feel can take some of the pressure off.',
        [
          'Try “Name what is here” in the moment — even one word, like “overwhelmed,” can steady you.',
          'Use the “Emotional weather report” daily so feelings have somewhere to go before they pile up.',
          'Offer yourself “The three-part kindness pause” after a hard moment, instead of criticism.',
          'If emotions feel unmanageable or frightening, reach out to a counselor — and in a crisis, your local emergency number or a line such as 988 in the US.'
        ]],
      ['Cuando las emociones llegan todas juntas',
        'Tus respuestas sugieren que el estrés tiende a desbordarte emocionalmente: emociones que suben rápido y a veces se derraman. No es un defecto de carácter; muchas veces es señal de que has sostenido mucho durante mucho tiempo. Nombrar lo que sientes puede aliviar parte de la presión.',
        [
          'Prueba “Nombrar lo que está aquí” en el momento: incluso una palabra, como “desbordado”, puede darte estabilidad.',
          'Usa el “Informe del clima interior” cada día para que las emociones tengan a dónde ir antes de acumularse.',
          'Ofrécete “La pausa de la ternura en tres tiempos” después de un momento difícil, en lugar de criticarte.',
          'Si las emociones se sienten inmanejables o te asustan, busca a un consejero; y en una crisis, tu número local de emergencias o una línea como el 988 en EE. UU.'
        ]],
      ['Quando os sentimentos chegam todos de uma vez',
        'Suas respostas sugerem que o estresse tende a te inundar emocionalmente: sentimentos subindo rápido e, às vezes, transbordando. Isso não é um defeito de caráter; muitas vezes é sinal de que você tem segurado muita coisa por muito tempo. Nomear o que sente pode aliviar parte da pressão.',
        [
          'Experimente “Nomear o que está presente” no momento: até uma palavra, como “sobrecarregado”, pode trazer estabilidade.',
          'Use a “Previsão do tempo interior” diariamente para que os sentimentos tenham para onde ir antes de se acumularem.',
          'Ofereça a si “A pausa da gentileza em três passos” depois de um momento difícil, em vez de se criticar.',
          'Se as emoções parecerem incontroláveis ou assustadoras, procure um psicólogo; e em uma crise, o número de emergência local ou uma linha como o 988 nos EUA.'
        ]]),
    shutdown: r(['arrive', 'name', 'next'],
      ['When Stress Turns the Lights Down',
        'Your answers suggest that under heavy stress you tend to go quiet, numb, or far away. Many people describe this as the nervous system hitting a kind of pause button when things feel like too much — sometimes described as dropping below your “window of tolerance.” It is protective, but it can also feel lonely.',
        [
          'Try “Arrive in the room” gently, to bring your senses back online one small step at a time.',
          'Use “Name what is here” — even “I feel far away” is a meaningful place to start.',
          'Choose “The next workable thing” at the smallest possible size: a glass of water, opening a curtain, one reply.',
          'If numbness, hopelessness, or withdrawal last for weeks, please talk with a doctor or therapist. If you ever feel unsafe, contact your local emergency number or a crisis line such as 988 in the US.'
        ]],
      ['Cuando el estrés baja las luces',
        'Tus respuestas sugieren que, bajo mucho estrés, tiendes a callar, desconectarte o sentirte lejos. Muchas personas lo describen como si el sistema nervioso pusiera pausa cuando todo es demasiado; a veces se habla de salir por debajo de la “ventana de tolerancia”. Es una forma de protección, pero también puede sentirse muy solitaria.',
        [
          'Prueba “Llegar al espacio presente” con suavidad, para que los sentidos se reactiven poco a poco.',
          'Usa “Nombrar lo que está aquí”: incluso “me siento lejos” es un punto de partida valioso.',
          'Elige “El próximo paso viable” en su versión más pequeña: un vaso de agua, abrir una cortina, responder un mensaje.',
          'Si la desconexión, la desesperanza o el aislamiento duran semanas, habla con un médico o terapeuta. Si alguna vez no te sientes a salvo, comunícate con tu número local de emergencias o con una línea de crisis como el 988 en EE. UU.'
        ]],
      ['Quando o estresse apaga as luzes',
        'Suas respostas sugerem que, sob muito estresse, você tende a se calar, ficar anestesiado ou distante. Muitas pessoas descrevem isso como o sistema nervoso apertando o botão de pausa quando tudo parece demais; às vezes se fala em sair por baixo da “janela de tolerância”. É uma forma de proteção, mas também pode ser bem solitária.',
        [
          'Experimente “Chegar ao espaço presente” com delicadeza, para que os sentidos voltem aos poucos.',
          'Use “Nomear o que está presente”: até “me sinto distante” é um ponto de partida valioso.',
          'Escolha “O próximo passo possível” no menor tamanho possível: um copo d’água, abrir uma cortina, responder uma mensagem.',
          'Se a anestesia, a desesperança ou o isolamento durarem semanas, converse com um médico ou terapeuta. Se em algum momento você não se sentir seguro, procure o número de emergência local ou uma linha de crise como o 988 nos EUA.'
        ]])
  }
};

// ---------------------------------------------------------------------------
// 4. Grounding style finder
// ---------------------------------------------------------------------------
const quizGrounding = {
  id: 'quiz_grounding',
  slug: 'grounding-style-finder',
  tier_required: 'steady',
  en: {
    title: 'Grounding Style Finder',
    subtitle: 'Discovering whether somatic, sensory, cognitive, or nature anchors serve you best.',
    description: 'Find out what kind of anchoring practice helps you land most reliably when life gets overwhelming. This is a reflective exploration of preferences, not a diagnostic tool — most people use a mix, and your style can shift from day to day.'
  },
  es: {
    title: 'Descubre tu estilo de enraizamiento',
    subtitle: 'Qué anclajes —somáticos, sensoriales, mentales o en la naturaleza— te ayudan mejor.',
    description: 'Conoce qué tipo de ejercicio de calma te ofrece mayor estabilidad cuando las cosas se complican. Es una exploración reflexiva de tus preferencias, no una herramienta de diagnóstico: la mayoría de las personas combina varios estilos, y el tuyo puede cambiar de un día a otro.'
  },
  'pt-BR': {
    title: 'Descubra seu estilo de aterramento',
    subtitle: 'Quais apoios — corporais, sensoriais, mentais ou na natureza — funcionam melhor para você.',
    description: 'Entenda qual prática de presença traz mais equilíbrio para o seu dia a dia. É uma exploração reflexiva das suas preferências, não uma ferramenta de diagnóstico: a maioria das pessoas mistura estilos, e o seu pode mudar de um dia para o outro.'
  },
  questions: [
    q('q_ground_1', 1, ['somatic', 'sensory_anchor', 'cognitive', 'nature'],
      ['When you feel unsteady, what has helped you land in the past?', [
        'Moving my body — walking, stretching, pressing my feet into the floor',
        'Holding something textured, sipping something warm, or smelling something familiar',
        'Talking myself through it or making a clear plan',
        'Getting outside, even just to a window or a doorstep'
      ]],
      ['Cuando te sientes inestable, ¿qué te ha ayudado a encontrar tierra firme antes?', [
        'Mover el cuerpo: caminar, estirarme, apoyar los pies con firmeza en el suelo',
        'Sostener algo con textura, tomar algo tibio u oler algo conocido',
        'Hablarme a mí mismo o armar un plan claro',
        'Salir al aire libre, aunque sea a una ventana o a la puerta'
      ]],
      ['Quando você se sente instável, o que já te ajudou a encontrar chão?', [
        'Mexer o corpo: caminhar, alongar, firmar os pés no chão',
        'Segurar algo com textura, tomar algo morno ou sentir um cheiro familiar',
        'Conversar comigo mesmo ou fazer um plano claro',
        'Ir para fora, nem que seja até a janela ou a porta'
      ]]),
    q('q_ground_2', 2, ['nature', 'cognitive', 'somatic', 'sensory_anchor'],
      ['Which place sounds most calming right now?', [
        'Under a tree, near water, or anywhere with open sky',
        'A tidy desk with a notebook and a clear list',
        'A yoga mat, a quiet floor, or a long path to walk',
        'A cozy corner with a soft blanket, candlelight, and tea'
      ]],
      ['¿Qué lugar te suena más calmante en este momento?', [
        'Bajo un árbol, cerca del agua o en cualquier sitio con cielo abierto',
        'Un escritorio ordenado con un cuaderno y una lista clara',
        'Una esterilla, un piso tranquilo o un camino largo para andar',
        'Un rincón acogedor con una manta suave, luz de vela y un té'
      ]],
      ['Qual lugar parece mais tranquilizador agora?', [
        'Debaixo de uma árvore, perto da água ou em qualquer lugar com céu aberto',
        'Uma mesa organizada com um caderno e uma lista clara',
        'Um tapetinho, um chão tranquilo ou um caminho longo para andar',
        'Um cantinho aconchegante com manta macia, luz de vela e chá'
      ]]),
    q('q_ground_3', 3, ['cognitive', 'somatic', 'nature', 'sensory_anchor'],
      ['When your thoughts are racing, what are you most drawn to?', [
        'Counting, listing, or naming things in categories',
        'Slow breathing or feeling the weight of my body in a chair',
        'Watching clouds, leaves, or moving water',
        'Cold water on my hands or a strong, pleasant scent'
      ]],
      ['Cuando tus pensamientos se aceleran, ¿qué te atrae más?', [
        'Contar, hacer listas o nombrar cosas por categorías',
        'Respirar despacio o sentir el peso del cuerpo en la silla',
        'Mirar las nubes, las hojas o el agua en movimiento',
        'Agua fría en las manos o un aroma intenso y agradable'
      ]],
      ['Quando seus pensamentos disparam, o que mais te atrai?', [
        'Contar, fazer listas ou nomear coisas por categorias',
        'Respirar devagar ou sentir o peso do corpo na cadeira',
        'Observar as nuvens, as folhas ou a água em movimento',
        'Água fria nas mãos ou um aroma forte e agradável'
      ]]),
    q('q_ground_4', 4, ['sensory_anchor', 'nature', 'cognitive', 'somatic'],
      ['Which object would you most like to keep in your pocket for hard moments?', [
        'A smooth stone or a small piece of soft fabric to touch',
        'A leaf, shell, or pinecone from a place I love',
        'A card with a steadying sentence written on it',
        'Nothing — I would rather use my breath and body'
      ]],
      ['¿Qué objeto te gustaría llevar en el bolsillo para los momentos difíciles?', [
        'Una piedra lisa o un trocito de tela suave para tocar',
        'Una hoja, una concha o una piña de un lugar que amo',
        'Una tarjeta con una frase que me dé calma',
        'Nada: prefiero usar la respiración y el cuerpo'
      ]],
      ['Que objeto você gostaria de levar no bolso para momentos difíceis?', [
        'Uma pedra lisa ou um pedacinho de tecido macio para tocar',
        'Uma folha, uma concha ou uma pinha de um lugar que eu amo',
        'Um cartão com uma frase que me acalma',
        'Nada: prefiro usar a respiração e o corpo'
      ]]),
    q('q_ground_5', 5, ['somatic', 'cognitive', 'sensory_anchor', 'nature'],
      ['After a stressful meeting or conversation, what helps you reset?', [
        'Shaking out my hands, rolling my shoulders, or taking a brisk walk',
        'Writing down what happened and what I will do next',
        'Washing my face, changing clothes, or making a warm drink',
        'Stepping outside and feeling the air on my skin'
      ]],
      ['Después de una reunión o conversación estresante, ¿qué te ayuda a reiniciarte?', [
        'Sacudir las manos, girar los hombros o dar una caminata enérgica',
        'Escribir lo que pasó y lo que haré después',
        'Lavarme la cara, cambiarme de ropa o prepararme una bebida tibia',
        'Salir y sentir el aire en la piel'
      ]],
      ['Depois de uma reunião ou conversa estressante, o que te ajuda a se reorganizar?', [
        'Sacudir as mãos, girar os ombros ou fazer uma caminhada rápida',
        'Anotar o que aconteceu e o que vou fazer a seguir',
        'Lavar o rosto, trocar de roupa ou preparar uma bebida morna',
        'Sair e sentir o ar na pele'
      ]]),
    q('q_ground_6', 6, ['nature', 'sensory_anchor', 'somatic', 'cognitive'],
      ['Which instruction sounds most appealing?', [
        '“Find something alive near you and watch it for one minute.”',
        '“Notice five things you can see and four you can touch.”',
        '“Press your feet into the floor and feel the ground press back.”',
        '“Tell yourself today’s date, where you are, and one fact about right now.”'
      ]],
      ['¿Qué instrucción te resulta más atractiva?', [
        '“Busca algo vivo cerca de ti y obsérvalo durante un minuto.”',
        '“Nota cinco cosas que puedas ver y cuatro que puedas tocar.”',
        '“Apoya los pies en el suelo y siente cómo el suelo te sostiene.”',
        '“Dite la fecha de hoy, dónde estás y un dato sobre este momento.”'
      ]],
      ['Qual instrução parece mais atraente?', [
        '“Encontre algo vivo perto de você e observe por um minuto.”',
        '“Perceba cinco coisas que você vê e quatro que pode tocar.”',
        '“Firme os pés no chão e sinta o chão te sustentando.”',
        '“Diga a si mesmo a data de hoje, onde você está e um fato sobre este momento.”'
      ]]),
    q('q_ground_7', 7, ['cognitive', 'nature', 'sensory_anchor', 'somatic'],
      ['What tends to make grounding practices feel hard for you?', [
        'Body-focused practices feel uncomfortable — I prefer something to think about',
        'Indoor practices feel stale — I need fresh air to settle',
        'Breathing exercises alone do not hold my attention — I need something to touch or taste',
        'Sitting still makes me more restless — I need to move'
      ]],
      ['¿Qué suele dificultarte las prácticas de enraizamiento?', [
        'Las prácticas centradas en el cuerpo me incomodan: prefiero algo en qué pensar',
        'Las prácticas en interiores me resultan pesadas: necesito aire fresco para calmarme',
        'Solo respirar no sostiene mi atención: necesito algo que tocar o saborear',
        'Quedarme quieto me inquieta más: necesito moverme'
      ]],
      ['O que costuma tornar as práticas de aterramento difíceis para você?', [
        'Práticas focadas no corpo me incomodam: prefiro algo para pensar',
        'Práticas em lugares fechados me cansam: preciso de ar fresco para me acalmar',
        'Só respirar não prende minha atenção: preciso de algo para tocar ou saborear',
        'Ficar parado me deixa mais inquieto: preciso me mexer'
      ]]),
    q('q_ground_8', 8, ['sensory_anchor', 'somatic', 'nature', 'cognitive'],
      ['Which memory feels most soothing to return to?', [
        'The smell of a favorite kitchen or the feel of a familiar sweater',
        'The tired, loose feeling after a long walk or a swim',
        'A sunrise, a forest path, or the sound of rain',
        'The relief of finally understanding something that had confused me'
      ]],
      ['¿A qué recuerdo te resulta más reconfortante volver?', [
        'El olor de una cocina querida o la sensación de un suéter conocido',
        'El cansancio suelto después de una caminata larga o de nadar',
        'Un amanecer, un sendero en el bosque o el sonido de la lluvia',
        'El alivio de por fin entender algo que me confundía'
      ]],
      ['A qual lembrança é mais reconfortante voltar?', [
        'O cheiro de uma cozinha querida ou a sensação de um suéter conhecido',
        'O cansaço solto depois de uma longa caminhada ou de nadar',
        'Um nascer do sol, uma trilha na mata ou o barulho da chuva',
        'O alívio de finalmente entender algo que me confundia'
      ]])
  ],
  results: {
    somatic: r(['release', 'arrive'],
      ['Grounded Through Movement and Body',
        'Your answers suggest you settle best by working with your body — moving, stretching, feeling your weight and your feet on the ground. For you, calm often comes from the outside in: when the body shifts, the mind tends to follow.',
        [
          'Try “Unclench one thing” as a quick reset between tasks.',
          'Pair “Arrive in the room” with slow walking, noticing each footstep as part of the practice.',
          'Keep a two-minute movement ritual ready for hard moments: shoulder rolls, a stretch, a few slow steps.',
          'If sitting still feels agitating, give yourself permission to ground while moving.'
        ]],
      ['Enraizamiento a través del cuerpo y el movimiento',
        'Tus respuestas sugieren que te calmas mejor trabajando con el cuerpo: moverte, estirarte, sentir tu peso y los pies en el suelo. Para ti, la calma suele llegar de afuera hacia adentro: cuando el cuerpo cambia, la mente tiende a seguirlo.',
        [
          'Prueba “Soltar un solo punto” como un reinicio rápido entre tareas.',
          'Combina “Llegar al espacio presente” con una caminata lenta, notando cada paso como parte de la práctica.',
          'Ten listo un ritual de movimiento de dos minutos para los momentos difíciles: girar los hombros, un estiramiento, unos pasos lentos.',
          'Si quedarte quieto te inquieta, date permiso de enraizarte en movimiento.'
        ]],
      ['Aterramento pelo corpo e pelo movimento',
        'Suas respostas sugerem que você se acalma melhor trabalhando com o corpo: se mexendo, alongando, sentindo seu peso e os pés no chão. Para você, a calma costuma vir de fora para dentro: quando o corpo muda, a mente tende a acompanhar.',
        [
          'Experimente “Soltar um ponto de tensão” como uma pausa rápida entre tarefas.',
          'Combine “Chegar ao espaço presente” com uma caminhada lenta, percebendo cada passo como parte da prática.',
          'Tenha pronto um ritual de movimento de dois minutos para os momentos difíceis: girar os ombros, um alongamento, alguns passos lentos.',
          'Se ficar parado te deixa agitado, permita-se aterrar em movimento.'
        ]]),
    sensory_anchor: r(['arrive', 'kindly'],
      ['Anchored by Your Senses',
        'Your answers suggest you land best through touch, taste, scent, and comfort — textures, warmth, familiar smells. Small sensory anchors can become a portable sense of home, ready whenever you need them.',
        [
          'Practice “Arrive in the room,” lingering longest on touch and scent.',
          'Build a small grounding kit: a smooth stone, a scent you love, a soft cloth, a favorite tea.',
          'Combine a warm drink with “The three-part kindness pause” as a daily ritual.',
          'Try cool water on your wrists or hands when feelings run high.'
        ]],
      ['Anclado en tus sentidos',
        'Tus respuestas sugieren que encuentras tierra firme a través del tacto, el gusto, el olfato y el confort: texturas, calidez, aromas conocidos. Los pequeños anclajes sensoriales pueden convertirse en una sensación de hogar que llevas contigo.',
        [
          'Practica “Llegar al espacio presente” deteniéndote más tiempo en el tacto y los aromas.',
          'Arma un pequeño kit de calma: una piedra lisa, un aroma que te guste, una tela suave, tu té favorito.',
          'Combina una bebida tibia con “La pausa de la ternura en tres tiempos” como ritual diario.',
          'Prueba agua fresca en las muñecas o las manos cuando las emociones suban.'
        ]],
      ['Ancorado nos seus sentidos',
        'Suas respostas sugerem que você encontra chão pelo tato, paladar, olfato e conforto: texturas, calor, cheiros conhecidos. Pequenas âncoras sensoriais podem virar uma sensação de casa que você leva consigo.',
        [
          'Pratique “Chegar ao espaço presente” demorando-se mais no tato e nos aromas.',
          'Monte um pequeno kit de calma: uma pedra lisa, um aroma que você ama, um tecido macio, seu chá favorito.',
          'Combine uma bebida morna com “A pausa da gentileza em três passos” como um ritual diário.',
          'Experimente água fresca nos pulsos ou nas mãos quando as emoções subirem.'
        ]]),
    cognitive: r(['orient', 'next', 'name'],
      ['Steadied by Clarity and Words',
        'Your answers suggest you settle best when your mind has something clear to hold — facts, lists, a plan, the right words. Orienting to what is true right now can quiet a lot of noise for you.',
        [
          'Use “Today, not then” to orient to the date, the place, and what is actually happening now.',
          'Try “The next workable thing” when a situation feels too big to think about.',
          'Practice “Name what is here” to put words to feelings, which often makes them easier to hold.',
          'Keep a short, steadying sentence on a card or in your phone for hard moments.'
        ]],
      ['Estabilidad a través de la claridad y las palabras',
        'Tus respuestas sugieren que te calmas mejor cuando la mente tiene algo claro que sostener: datos, listas, un plan, las palabras justas. Orientarte hacia lo que es cierto ahora puede silenciar mucho ruido.',
        [
          'Usa “Hoy, no en aquel momento” para orientarte en la fecha, el lugar y lo que realmente está pasando ahora.',
          'Prueba “El próximo paso viable” cuando una situación parezca demasiado grande para pensarla.',
          'Practica “Nombrar lo que está aquí” para ponerles palabras a las emociones, lo que a menudo las hace más llevaderas.',
          'Guarda una frase breve que te dé calma en una tarjeta o en el teléfono para los momentos difíciles.'
        ]],
      ['Estabilidade pela clareza e pelas palavras',
        'Suas respostas sugerem que você se acalma melhor quando a mente tem algo claro para segurar: fatos, listas, um plano, as palavras certas. Orientar-se pelo que é verdade agora pode silenciar muito barulho.',
        [
          'Use “Hoje, não naquele tempo” para se orientar pela data, pelo lugar e pelo que realmente está acontecendo agora.',
          'Experimente “O próximo passo possível” quando uma situação parecer grande demais para pensar.',
          'Pratique “Nomear o que está presente” para dar palavras aos sentimentos, o que muitas vezes os torna mais leves.',
          'Guarde uma frase curta que te acalme em um cartão ou no celular para os momentos difíceis.'
        ]]),
    nature: r(['arrive', 'weather'],
      ['Grounded by the Living World',
        'Your answers suggest you come back to yourself most easily outdoors — near trees, water, sky, or anything alive and growing. The natural world moves at a slower pace, and it seems to invite yours to slow down too.',
        [
          'Take “Arrive in the room” outside and let your five senses rest on natural things.',
          'Build in a daily “green minute”: a window, a plant, a patch of sky — even on busy days.',
          'Try the “Emotional weather report” while looking at the real weather, and notice what matches.',
          'Bring a small piece of nature indoors — a stone, a leaf, a plant — as a reminder.'
        ]],
      ['Enraizamiento en el mundo vivo',
        'Tus respuestas sugieren que vuelves a ti con más facilidad al aire libre: cerca de árboles, agua, cielo o cualquier cosa viva que crezca. La naturaleza se mueve a un ritmo más lento, y parece invitar al tuyo a bajar también.',
        [
          'Lleva “Llegar al espacio presente” afuera y deja que tus sentidos descansen en elementos naturales.',
          'Incluye un “minuto verde” diario: una ventana, una planta, un pedazo de cielo, incluso en los días ocupados.',
          'Prueba el “Informe del clima interior” mirando el clima real y observa qué coincide.',
          'Trae un pedacito de naturaleza a casa —una piedra, una hoja, una planta— como recordatorio.'
        ]],
      ['Aterramento no mundo vivo',
        'Suas respostas sugerem que você volta para si com mais facilidade ao ar livre: perto de árvores, água, céu ou qualquer coisa viva e crescendo. A natureza se move em um ritmo mais lento e parece convidar o seu a desacelerar também.',
        [
          'Leve “Chegar ao espaço presente” para fora e deixe seus sentidos descansarem em elementos naturais.',
          'Crie um “minuto verde” diário: uma janela, uma planta, um pedaço de céu, mesmo nos dias corridos.',
          'Experimente a “Previsão do tempo interior” olhando o tempo lá fora e perceba o que combina.',
          'Traga um pedacinho da natureza para dentro — uma pedra, uma folha, uma planta — como lembrete.'
        ]])
  }
};

// ---------------------------------------------------------------------------
// 5. Daily habits reflection
// ---------------------------------------------------------------------------
const quizHabits = {
  id: 'quiz_habits',
  slug: 'daily-habits-reflection',
  tier_required: 'steady',
  en: {
    title: 'Daily Habits Reflection',
    subtitle: 'Honoring small, sustainable rhythms over heroic overhauls.',
    description: 'Reflect on how your morning, midday, and evening rhythms currently support your peace — and where a small, kind adjustment might help most. This is a reflective check-in, not a diagnostic tool or a scorecard.'
  },
  es: {
    title: 'Reflexión sobre los hábitos cotidianos',
    subtitle: 'Valorar los pequeños ritmos sostenibles en lugar de cambios bruscos.',
    description: 'Examina con cariño cómo tus mañanas, mediodías y noches cuidan tu serenidad, y dónde un ajuste pequeño y amable podría ayudar más. Es una reflexión personal, no una herramienta de diagnóstico ni una calificación.'
  },
  'pt-BR': {
    title: 'Reflexão sobre hábitos cotidianos',
    subtitle: 'Pequenos passos constantes em vez de exigências heroicas.',
    description: 'Perceba como suas manhãs, tardes e noites apoiam o seu bem-estar, e onde um ajuste pequeno e gentil poderia ajudar mais. É uma reflexão pessoal, não uma ferramenta de diagnóstico nem uma nota.'
  },
  questions: [
    q('q_habit_1', 1, ['habit_morning', 'habit_midday', 'habit_evening', 'habit_all_or_nothing'],
      ['Which part of your day most often feels like it gets away from you?', [
        'The first hour — I wake up already rushing or reaching for my phone',
        'The middle — I work straight through without a real break',
        'The evening — I stay up later than I mean to',
        'All of it, depending on the week — some weeks are great, some fall apart'
      ]],
      ['¿Qué parte de tu día sientes que se te escapa con más frecuencia?', [
        'La primera hora: me despierto ya con prisa o buscando el teléfono',
        'El mediodía: trabajo de corrido sin una pausa real',
        'La noche: me acuesto más tarde de lo que quisiera',
        'Todo, según la semana: algunas van muy bien y otras se desarman'
      ]],
      ['Qual parte do seu dia mais costuma escapar do seu controle?', [
        'A primeira hora: acordo já correndo ou pegando o celular',
        'O meio do dia: trabalho direto sem uma pausa de verdade',
        'A noite: fico acordado até mais tarde do que gostaria',
        'Tudo, dependendo da semana: algumas vão muito bem, outras desmoronam'
      ]]),
    q('q_habit_2', 2, ['habit_all_or_nothing', 'habit_morning', 'habit_evening', 'habit_midday'],
      ['How do you usually start a new healthy habit?', [
        'All at once — a full new routine starting Monday',
        'By trying to wake up earlier to fit it in',
        'By promising myself I will do it tonight, after everything else',
        'By squeezing it into a lunch break that rarely happens'
      ]],
      ['¿Cómo sueles empezar un nuevo hábito saludable?', [
        'Todo de una vez: una rutina completa a partir del lunes',
        'Intentando levantarme más temprano para que quepa',
        'Prometiéndome hacerlo por la noche, después de todo lo demás',
        'Metiéndolo en una pausa de almuerzo que casi nunca llega'
      ]],
      ['Como você costuma começar um novo hábito saudável?', [
        'Tudo de uma vez: uma rotina completa a partir de segunda-feira',
        'Tentando acordar mais cedo para caber',
        'Prometendo fazer à noite, depois de todo o resto',
        'Encaixando no horário de almoço, que quase nunca acontece'
      ]]),
    q('q_habit_3', 3, ['habit_midday', 'habit_evening', 'habit_all_or_nothing', 'habit_morning'],
      ['What does your energy tend to look like in the afternoon?', [
        'A steep crash — I run on coffee or sugar to get through',
        'Fine, but I pay for it later with a restless, wired evening',
        'It depends entirely on whether I “stuck to the plan” that day',
        'Already low, because the morning started in a scramble'
      ]],
      ['¿Cómo suele estar tu energía por la tarde?', [
        'Cae de golpe: sigo a base de café o azúcar',
        'Bien, pero lo pago después con una noche inquieta y acelerada',
        'Depende por completo de si “cumplí el plan” ese día',
        'Ya está baja, porque la mañana empezó a las corridas'
      ]],
      ['Como costuma estar sua energia à tarde?', [
        'Despenca: sigo à base de café ou açúcar',
        'Bem, mas pago depois com uma noite inquieta e agitada',
        'Depende totalmente de eu ter “seguido o plano” naquele dia',
        'Já está baixa, porque a manhã começou na correria'
      ]]),
    q('q_habit_4', 4, ['habit_evening', 'habit_morning', 'habit_midday', 'habit_all_or_nothing'],
      ['Which moment would you most like to feel calmer?', [
        'The last hour before sleep',
        'The first ten minutes after waking',
        'The stretch between lunch and the end of the workday',
        'The moment I realize I have “fallen off” a routine again'
      ]],
      ['¿Qué momento te gustaría vivir con más calma?', [
        'La última hora antes de dormir',
        'Los primeros diez minutos después de despertar',
        'El tramo entre el almuerzo y el final de la jornada',
        'El momento en que me doy cuenta de que “abandoné” otra vez una rutina'
      ]],
      ['Qual momento você gostaria de viver com mais calma?', [
        'A última hora antes de dormir',
        'Os primeiros dez minutos depois de acordar',
        'O trecho entre o almoço e o fim do expediente',
        'O momento em que percebo que “larguei” uma rotina de novo'
      ]]),
    q('q_habit_5', 5, ['habit_morning', 'habit_all_or_nothing', 'habit_midday', 'habit_evening'],
      ['When you miss a day of something you meant to do, how do you respond?', [
        'I figure the day is ruined if the morning did not go right',
        'I tend to give up on the whole thing',
        'I barely notice — I was too busy to think about it',
        'I try to make up for it late at night'
      ]],
      ['Cuando te saltas un día de algo que pensabas hacer, ¿cómo reaccionas?', [
        'Siento que el día ya está perdido si la mañana no salió bien',
        'Suelo abandonarlo todo',
        'Casi ni lo noto: estaba demasiado ocupado para pensarlo',
        'Intento compensarlo tarde por la noche'
      ]],
      ['Quando você pula um dia de algo que pretendia fazer, como reage?', [
        'Acho que o dia já está perdido se a manhã não saiu bem',
        'Costumo desistir de tudo',
        'Mal percebo: estava ocupado demais para pensar nisso',
        'Tento compensar tarde da noite'
      ]]),
    q('q_habit_6', 6, ['habit_midday', 'habit_all_or_nothing', 'habit_morning', 'habit_evening'],
      ['Which statement feels most true right now?', [
        '“I forget to eat, drink water, or stand up until it is late.”',
        '“I am either completely on track or completely off.”',
        '“My mornings set the tone, and lately the tone has been stress.”',
        '“Evenings are my only time for me, so I stretch them too far.”'
      ]],
      ['¿Qué frase sientes más cierta ahora?', [
        '“Me olvido de comer, tomar agua o levantarme hasta que ya es tarde.”',
        '“O estoy completamente encaminado o completamente perdido.”',
        '“Mis mañanas marcan el tono, y últimamente el tono ha sido el estrés.”',
        '“Las noches son mi único tiempo para mí, así que las estiro demasiado.”'
      ]],
      ['Qual frase parece mais verdadeira agora?', [
        '“Esqueço de comer, beber água ou levantar até ficar tarde.”',
        '“Ou estou totalmente nos trilhos ou totalmente fora deles.”',
        '“Minhas manhãs dão o tom, e ultimamente o tom tem sido o estresse.”',
        '“As noites são meu único tempo para mim, então eu as estico demais.”'
      ]]),
    q('q_habit_7', 7, ['habit_evening', 'habit_midday', 'habit_morning', 'habit_all_or_nothing'],
      ['What usually happens with your phone or screens?', [
        'I scroll in bed long after I meant to put it down',
        'I eat lunch in front of a screen, still half working',
        'It is the first thing I look at, before my feet touch the floor',
        'I do strict “digital detoxes” that never last'
      ]],
      ['¿Qué suele pasar con tu teléfono o las pantallas?', [
        'Sigo mirando en la cama mucho después de haber querido dejarlo',
        'Almuerzo frente a una pantalla, todavía medio trabajando',
        'Es lo primero que miro, antes de poner los pies en el suelo',
        'Hago “desintoxicaciones digitales” estrictas que nunca duran'
      ]],
      ['O que costuma acontecer com seu celular ou as telas?', [
        'Fico rolando a tela na cama muito depois de querer largar',
        'Almoço na frente de uma tela, ainda meio trabalhando',
        'É a primeira coisa que olho, antes de colocar os pés no chão',
        'Faço “detox digitais” rígidos que nunca duram'
      ]]),
    q('q_habit_8', 8, ['habit_all_or_nothing', 'habit_evening', 'habit_morning', 'habit_midday'],
      ['If you could change just one small thing this week, what would it be?', [
        'Letting a “good enough” version of a habit count',
        'A simple wind-down ritual before bed',
        'Five quiet minutes before checking anything in the morning',
        'One real pause in the middle of the day'
      ]],
      ['Si pudieras cambiar solo una cosa pequeña esta semana, ¿cuál sería?', [
        'Permitir que una versión “suficientemente buena” de un hábito cuente',
        'Un ritual sencillo para relajarme antes de dormir',
        'Cinco minutos tranquilos antes de revisar cualquier cosa por la mañana',
        'Una pausa real en medio del día'
      ]],
      ['Se você pudesse mudar só uma coisa pequena nesta semana, qual seria?', [
        'Deixar que uma versão “boa o bastante” de um hábito valha',
        'Um ritual simples para desacelerar antes de dormir',
        'Cinco minutos tranquilos antes de checar qualquer coisa de manhã',
        'Uma pausa de verdade no meio do dia'
      ]])
  ],
  results: {
    habit_morning: r(['arrive', 'weather'],
      ['Tending Your First Hour',
        'Your answers suggest your mornings tend to start in a rush, and that rush can color the whole day. The good news: a morning anchor does not need to be long or perfect. A few intentional minutes can change the tone more than an elaborate routine.',
        [
          'Try “Arrive in the room” before you check your phone — two minutes, feet on the floor.',
          'Use the “Emotional weather report” with your first drink of the day to notice how you are actually arriving.',
          'Prepare one small thing the night before — clothes, a bag, the kettle — so the morning asks less of you.',
          'If you miss your morning anchor, let a midday version count too.'
        ]],
      ['Cuidar tu primera hora',
        'Tus respuestas sugieren que tus mañanas suelen empezar con prisa, y esa prisa puede teñir todo el día. La buena noticia: un ancla matutina no necesita ser larga ni perfecta. Unos minutos intencionales pueden cambiar el tono más que una rutina elaborada.',
        [
          'Prueba “Llegar al espacio presente” antes de mirar el teléfono: dos minutos, con los pies en el suelo.',
          'Usa el “Informe del clima interior” con tu primera bebida del día para notar cómo estás llegando de verdad.',
          'Prepara algo pequeño la noche anterior —la ropa, el bolso, la tetera— para que la mañana te pida menos.',
          'Si te saltas tu ancla matutina, deja que una versión al mediodía también cuente.'
        ]],
      ['Cuidando da sua primeira hora',
        'Suas respostas sugerem que suas manhãs costumam começar na correria, e essa pressa pode colorir o dia inteiro. A boa notícia: uma âncora matinal não precisa ser longa nem perfeita. Alguns minutos intencionais podem mudar o tom mais do que uma rotina elaborada.',
        [
          'Experimente “Chegar ao espaço presente” antes de olhar o celular: dois minutos, com os pés no chão.',
          'Use a “Previsão do tempo interior” com a primeira bebida do dia para perceber como você está chegando de verdade.',
          'Prepare algo pequeno na noite anterior — a roupa, a bolsa, a chaleira — para que a manhã exija menos de você.',
          'Se pular sua âncora matinal, deixe que uma versão no meio do dia também valha.'
        ]]),
    habit_midday: r(['release', 'next'],
      ['Reclaiming the Middle of the Day',
        'Your answers suggest the middle of your day tends to disappear into work and obligations, with little room to eat, move, or breathe. A short, protected midday pause can soften the afternoon crash and leave more of you for the evening.',
        [
          'Set a gentle reminder for one midday pause and use it for “Unclench one thing.”',
          'Eat at least one meal a day away from a screen, even if it is short.',
          'When the afternoon piles up, use “The next workable thing” instead of trying to hold the whole list.',
          'Stand, stretch, or step outside for two minutes between tasks.'
        ]],
      ['Recuperar el centro del día',
        'Tus respuestas sugieren que el mediodía suele desaparecer entre el trabajo y las obligaciones, con poco espacio para comer, moverte o respirar. Una pausa breve y protegida a mitad del día puede suavizar la caída de la tarde y dejar más de ti para la noche.',
        [
          'Pon un recordatorio amable para una pausa al mediodía y úsala para “Soltar un solo punto”.',
          'Come al menos una comida al día lejos de una pantalla, aunque sea breve.',
          'Cuando la tarde se acumule, usa “El próximo paso viable” en lugar de sostener toda la lista.',
          'Ponte de pie, estírate o sal dos minutos entre tareas.'
        ]],
      ['Recuperando o meio do dia',
        'Suas respostas sugerem que o meio do seu dia costuma sumir entre trabalho e obrigações, com pouco espaço para comer, se mexer ou respirar. Uma pausa curta e protegida no meio do dia pode suavizar a queda da tarde e deixar mais de você para a noite.',
        [
          'Coloque um lembrete gentil para uma pausa no meio do dia e use-a para “Soltar um ponto de tensão”.',
          'Faça pelo menos uma refeição por dia longe de telas, mesmo que seja rápida.',
          'Quando a tarde acumular, use “O próximo passo possível” em vez de segurar a lista inteira.',
          'Levante, alongue ou saia por dois minutos entre uma tarefa e outra.'
        ]]),
    habit_evening: r(['release', 'kindly'],
      ['A Softer Way into Night',
        'Your answers suggest evenings are where your rhythm most needs care — often because they are the only time that feels like yours. That makes sense. The aim is not to take that time away, but to make it restful as well as free.',
        [
          'Choose a simple wind-down cue — dimming lights, a warm drink, a book — at the same time each night.',
          'Try “Unclench one thing” in bed, moving slowly from jaw to shoulders to hands.',
          'Close the day with “The three-part kindness pause” instead of reviewing everything left undone.',
          'Charge your phone outside the bedroom for a few nights and notice what changes.'
        ]],
      ['Una entrada más suave a la noche',
        'Tus respuestas sugieren que las noches son donde tu ritmo más necesita cuidado, muchas veces porque son el único momento que sientes tuyo. Tiene sentido. La idea no es quitarte ese tiempo, sino hacerlo reparador además de libre.',
        [
          'Elige una señal sencilla para bajar el ritmo —luces tenues, una bebida tibia, un libro— a la misma hora cada noche.',
          'Prueba “Soltar un solo punto” en la cama, recorriendo despacio la mandíbula, los hombros y las manos.',
          'Cierra el día con “La pausa de la ternura en tres tiempos” en lugar de repasar todo lo pendiente.',
          'Carga el teléfono fuera del dormitorio unas cuantas noches y observa qué cambia.'
        ]],
      ['Uma entrada mais suave na noite',
        'Suas respostas sugerem que as noites são onde seu ritmo mais precisa de cuidado, muitas vezes porque são o único momento que parece seu. Faz sentido. A ideia não é tirar esse tempo de você, e sim torná-lo restaurador além de livre.',
        [
          'Escolha um sinal simples para desacelerar — luz baixa, uma bebida morna, um livro — no mesmo horário toda noite.',
          'Experimente “Soltar um ponto de tensão” na cama, passando devagar pela mandíbula, ombros e mãos.',
          'Feche o dia com “A pausa da gentileza em três passos” em vez de repassar tudo o que ficou por fazer.',
          'Carregue o celular fora do quarto por algumas noites e observe o que muda.'
        ]]),
    habit_all_or_nothing: r(['friend', 'next'],
      ['Letting “Good Enough” Count',
        'Your answers suggest an all-or-nothing pattern: big fresh starts, followed by a sense of failure when life gets in the way. The habits that last are usually smaller and more forgiving than we expect. Consistency grows from gentleness, not from pressure.',
        [
          'Shrink your habit to a two-minute version that still counts on hard days.',
          'When you miss a day, try “Borrow a kinder voice” and simply begin again the next day.',
          'Use “The next workable thing” to pick one habit at a time instead of a full overhaul.',
          'Track “days I showed up in any way” rather than perfect streaks.'
        ]],
      ['Dejar que lo “suficientemente bueno” cuente',
        'Tus respuestas sugieren un patrón de todo o nada: grandes comienzos seguidos de una sensación de fracaso cuando la vida se interpone. Los hábitos que perduran suelen ser más pequeños y más compasivos de lo que esperamos. La constancia nace de la amabilidad, no de la presión.',
        [
          'Reduce tu hábito a una versión de dos minutos que siga contando en los días difíciles.',
          'Cuando te saltes un día, prueba “Prestar una voz más comprensiva” y simplemente vuelve a empezar al día siguiente.',
          'Usa “El próximo paso viable” para elegir un hábito a la vez en lugar de cambiarlo todo.',
          'Registra los “días en que me presenté de alguna forma” en vez de rachas perfectas.'
        ]],
      ['Deixando o “bom o bastante” valer',
        'Suas respostas sugerem um padrão de tudo ou nada: grandes recomeços seguidos de uma sensação de fracasso quando a vida atrapalha. Os hábitos que duram costumam ser menores e mais generosos do que imaginamos. A constância nasce da gentileza, não da pressão.',
        [
          'Reduza seu hábito a uma versão de dois minutos que continue valendo nos dias difíceis.',
          'Quando pular um dia, experimente “Adotar uma voz mais compreensiva” e simplesmente recomece no dia seguinte.',
          'Use “O próximo passo possível” para escolher um hábito por vez, em vez de mudar tudo.',
          'Registre os “dias em que apareci de algum jeito” em vez de sequências perfeitas.'
        ]])
  }
};

// ---------------------------------------------------------------------------
// 6. Boundaries & energy check-in
// ---------------------------------------------------------------------------
const quizBoundaries = {
  id: 'quiz_boundaries',
  slug: 'boundaries-check-in',
  tier_required: 'steady',
  en: {
    title: 'Boundaries & Energy Check-In',
    subtitle: 'Noticing where your energy leaks and practicing clean, honest limits.',
    description: 'A thoughtful reflection on people-pleasing, over-explaining, and how to protect your peace with warm clarity. This is a reflective check-in, not a diagnostic tool — your patterns make sense, and they can change gently.'
  },
  es: {
    title: 'Revisión de límites y energía personal',
    subtitle: 'Identificar dónde se dispersa tu energía y cuidar tus espacios.',
    description: 'Una mirada sincera sobre la necesidad de complacer a otros, el exceso de explicaciones y cómo establecer límites con serenidad. Es una reflexión personal, no una herramienta de diagnóstico: tus patrones tienen sentido y pueden cambiar con suavidad.'
  },
  'pt-BR': {
    title: 'Check-in de limites e energia',
    subtitle: 'Percebendo onde sua energia escapa e cuidando do seu tempo.',
    description: 'Uma reflexão afetuosa sobre a dificuldade de dizer não, o excesso de explicações e como colocar limites claros com gentileza. É uma reflexão pessoal, não uma ferramenta de diagnóstico: seus padrões fazem sentido e podem mudar com delicadeza.'
  },
  questions: [
    q('q_bound_1', 1, ['pleaser', 'over_explainer', 'overextended', 'clear_limits'],
      ['When someone asks for a favor you do not have time for, what usually happens?', [
        'I say yes before I have even checked how I feel',
        'I say no, but with a long list of reasons and apologies',
        'I say yes and quietly add it to an already overflowing week',
        'I pause, check my capacity, and give an honest answer'
      ]],
      ['Cuando alguien te pide un favor para el que no tienes tiempo, ¿qué suele pasar?', [
        'Digo que sí antes de revisar siquiera cómo me siento',
        'Digo que no, pero con una larga lista de razones y disculpas',
        'Digo que sí y lo sumo en silencio a una semana ya desbordada',
        'Hago una pausa, reviso mi capacidad y respondo con sinceridad'
      ]],
      ['Quando alguém pede um favor para o qual você não tem tempo, o que costuma acontecer?', [
        'Digo sim antes mesmo de ver como me sinto',
        'Digo não, mas com uma longa lista de motivos e desculpas',
        'Digo sim e encaixo em silêncio numa semana já lotada',
        'Faço uma pausa, avalio minha capacidade e respondo com sinceridade'
      ]]),
    q('q_bound_2', 2, ['over_explainer', 'clear_limits', 'pleaser', 'overextended'],
      ['After you say no to something, how do you feel?', [
        'I keep replaying it and want to send one more message explaining myself',
        'A little uncomfortable, but mostly relieved',
        'Guilty — like I have let someone down',
        'I rarely say no, so I am not sure'
      ]],
      ['Después de decir que no a algo, ¿cómo te sientes?', [
        'Lo repaso una y otra vez y quiero mandar otro mensaje explicándome',
        'Un poco incómodo, pero sobre todo aliviado',
        'Culpable, como si hubiera decepcionado a alguien',
        'Casi nunca digo que no, así que no estoy seguro'
      ]],
      ['Depois de dizer não a algo, como você se sente?', [
        'Fico repassando e quero mandar mais uma mensagem me explicando',
        'Um pouco desconfortável, mas principalmente aliviado',
        'Culpado, como se tivesse decepcionado alguém',
        'Quase nunca digo não, então não tenho certeza'
      ]]),
    q('q_bound_3', 3, ['overextended', 'pleaser', 'clear_limits', 'over_explainer'],
      ['Which sentence best describes your calendar lately?', [
        'Full to the edges — there is no white space left',
        'Shaped mostly around what other people need from me',
        'Busy at times, but with some protected space for me',
        'Fine on paper, but every plan came with a long negotiation'
      ]],
      ['¿Qué frase describe mejor tu agenda últimamente?', [
        'Llena hasta el borde: no queda ningún espacio libre',
        'Organizada sobre todo según lo que otros necesitan de mí',
        'Ocupada a ratos, pero con algo de espacio protegido para mí',
        'Bien en el papel, pero cada plan vino con una larga negociación'
      ]],
      ['Qual frase descreve melhor sua agenda ultimamente?', [
        'Cheia até a borda: não sobra nenhum espaço livre',
        'Organizada principalmente em torno do que os outros precisam de mim',
        'Corrida às vezes, mas com algum espaço protegido para mim',
        'Tranquila no papel, mas cada plano veio com uma longa negociação'
      ]]),
    q('q_bound_4', 4, ['pleaser', 'clear_limits', 'over_explainer', 'overextended'],
      ['When someone is upset with you, what is your first instinct?', [
        'Fix it immediately, even if I do not think I did anything wrong',
        'Listen, take responsibility for my part, and leave the rest with them',
        'Explain my side in detail until they understand',
        'Absorb it and keep going, even though it drains me for days'
      ]],
      ['Cuando alguien se molesta contigo, ¿cuál es tu primer impulso?', [
        'Arreglarlo de inmediato, aunque no crea haber hecho nada malo',
        'Escuchar, hacerme cargo de mi parte y dejarle a la otra persona la suya',
        'Explicar mi punto de vista con detalle hasta que lo entienda',
        'Absorberlo y seguir adelante, aunque me agote durante días'
      ]],
      ['Quando alguém fica chateado com você, qual é seu primeiro impulso?', [
        'Resolver na hora, mesmo sem achar que fiz algo errado',
        'Escutar, assumir a minha parte e deixar a outra pessoa com a dela',
        'Explicar meu lado em detalhes até que ela entenda',
        'Absorver e seguir em frente, mesmo que isso me esgote por dias'
      ]]),
    q('q_bound_5', 5, ['over_explainer', 'overextended', 'clear_limits', 'pleaser'],
      ['How long are your “no, thank you” messages?', [
        'Several paragraphs, just to be safe',
        'I do not send them — I just try to fit everything in',
        'One or two kind, clear sentences',
        'I soften them so much that they sometimes turn into a “maybe”'
      ]],
      ['¿Qué tan largos son tus mensajes de “no, gracias”?', [
        'Varios párrafos, por si acaso',
        'No los envío: intento que todo me quepa',
        'Una o dos frases amables y claras',
        'Los suavizo tanto que a veces terminan siendo un “tal vez”'
      ]],
      ['Qual o tamanho das suas mensagens de “não, obrigado”?', [
        'Vários parágrafos, só por garantia',
        'Não mando: tento encaixar tudo',
        'Uma ou duas frases gentis e claras',
        'Suavizo tanto que às vezes viram um “talvez”'
      ]]),
    q('q_bound_6', 6, ['clear_limits', 'overextended', 'pleaser', 'over_explainer'],
      ['Where do you notice your energy leaking most?', [
        'Not much lately — I have been fairly protective of my time',
        'Too many commitments, and no recovery time between them',
        'Keeping everyone around me happy',
        'Justifying my choices, even small ones'
      ]],
      ['¿Dónde notas que tu energía se escapa más?', [
        'No mucho últimamente: he cuidado bastante mi tiempo',
        'Demasiados compromisos y ningún tiempo de recuperación entre ellos',
        'En mantener contentos a todos a mi alrededor',
        'En justificar mis decisiones, incluso las pequeñas'
      ]],
      ['Onde você percebe que sua energia mais escapa?', [
        'Não muito ultimamente: tenho cuidado bem do meu tempo',
        'Compromissos demais e nenhum tempo de recuperação entre eles',
        'Em manter todo mundo ao meu redor feliz',
        'Em justificar minhas escolhas, mesmo as pequenas'
      ]]),
    q('q_bound_7', 7, ['overextended', 'over_explainer', 'pleaser', 'clear_limits'],
      ['What tends to happen to your own needs in a busy week?', [
        'They go to the bottom of the list and stay there',
        'I feel I have to justify taking time for them',
        'I only meet them if nobody else needs anything',
        'I schedule them in, the same way I would for anyone else'
      ]],
      ['¿Qué suele pasar con tus propias necesidades en una semana ocupada?', [
        'Quedan al final de la lista y ahí se quedan',
        'Siento que debo justificar el tiempo que les dedico',
        'Solo las atiendo si nadie más necesita algo',
        'Las agendo, igual que lo haría por cualquier otra persona'
      ]],
      ['O que costuma acontecer com suas próprias necessidades numa semana corrida?', [
        'Vão para o fim da lista e ficam lá',
        'Sinto que preciso justificar o tempo que dedico a elas',
        'Só cuido delas se ninguém mais precisar de nada',
        'Coloco na agenda, como faria por qualquer outra pessoa'
      ]]),
    q('q_bound_8', 8, ['pleaser', 'over_explainer', 'clear_limits', 'overextended'],
      ['Which boundary sentence would be hardest for you to say?', [
        '“I am not able to help with that this time.”',
        '“No.” — with nothing added',
        'None of them feel too hard lately',
        '“I need to cancel — I do not have the energy this week.”'
      ]],
      ['¿Qué frase de límite te costaría más decir?', [
        '“Esta vez no puedo ayudarte con eso.”',
        '“No.”, sin agregar nada más',
        'Últimamente ninguna me resulta demasiado difícil',
        '“Necesito cancelar: esta semana no tengo energía.”'
      ]],
      ['Qual frase de limite seria mais difícil para você dizer?', [
        '“Desta vez não consigo ajudar com isso.”',
        '“Não.”, sem acrescentar nada',
        'Ultimamente nenhuma parece difícil demais',
        '“Preciso cancelar: não tenho energia esta semana.”'
      ]])
  ],
  results: {
    pleaser: r(['boundary', 'kindly'],
      ['Making Room for Your Own Yes',
        'Your answers suggest you often put other people’s comfort ahead of your own — saying yes quickly and feeling guilty when you do not. This usually comes from real care, and sometimes from an old sense that love must be earned. You can stay kind and still include yourself in the circle of care.',
        [
          'Practice “A clean boundary sentence” on something small and low-stakes this week.',
          'Before answering a request, pause and say, “Let me check and get back to you.”',
          'After you set a limit and feel guilty, try “The three-part kindness pause.”',
          'Notice that other people’s disappointment is something they can feel without it meaning you did wrong.'
        ]],
      ['Hacer espacio para tu propio sí',
        'Tus respuestas sugieren que a menudo pones la comodidad de los demás por delante de la tuya: dices que sí rápido y sientes culpa cuando no lo haces. Suele nacer de un cariño genuino y, a veces, de una vieja idea de que el amor hay que ganárselo. Puedes seguir siendo amable e incluirte a ti en el círculo de cuidado.',
        [
          'Practica “Un límite con serenidad” con algo pequeño y de poco riesgo esta semana.',
          'Antes de responder a un pedido, haz una pausa y di: “Déjame revisarlo y te aviso.”',
          'Cuando pongas un límite y sientas culpa, prueba “La pausa de la ternura en tres tiempos”.',
          'Recuerda que la decepción de otra persona es algo que puede sentir sin que signifique que hiciste algo mal.'
        ]],
      ['Abrindo espaço para o seu próprio sim',
        'Suas respostas sugerem que você costuma colocar o conforto dos outros à frente do seu: diz sim rápido e sente culpa quando não diz. Isso geralmente vem de um cuidado verdadeiro e, às vezes, de uma velha ideia de que o amor precisa ser conquistado. Você pode continuar sendo gentil e se incluir no círculo de cuidado.',
        [
          'Pratique “Um limite claro e sereno” com algo pequeno e de pouco risco nesta semana.',
          'Antes de responder a um pedido, faça uma pausa e diga: “Deixa eu ver e te respondo.”',
          'Depois de colocar um limite e sentir culpa, experimente “A pausa da gentileza em três passos”.',
          'Lembre-se de que a decepção de outra pessoa é algo que ela pode sentir sem que isso signifique que você errou.'
        ]]),
    over_explainer: r(['boundary', 'friend'],
      ['Your “No” Does Not Need a Defense',
        'Your answers suggest you can set limits, but often wrap them in long explanations, apologies, and follow-ups. Over-explaining can be a way of trying to avoid conflict or earn permission. A shorter, warmer “no” is often clearer — and kinder to everyone, including you.',
        [
          'Use “A clean boundary sentence” to trim your next “no” to one or two sentences.',
          'Write your reply, then remove every sentence that begins with “I just…” or “Sorry, but…”.',
          'When the urge to send a follow-up arrives, wait an hour and try “Borrow a kinder voice.”',
          'Remember: “No, thank you” is a complete answer.'
        ]],
      ['Tu “no” no necesita defensa',
        'Tus respuestas sugieren que sabes poner límites, pero a menudo los envuelves en largas explicaciones, disculpas y mensajes posteriores. Explicar de más puede ser una forma de evitar el conflicto o de pedir permiso. Un “no” más breve y cálido suele ser más claro, y más amable para todos, incluido tú.',
        [
          'Usa “Un límite con serenidad” para reducir tu próximo “no” a una o dos frases.',
          'Escribe tu respuesta y luego quita cada frase que empiece con “Es que solo…” o “Perdón, pero…”.',
          'Cuando aparezca el impulso de enviar otro mensaje, espera una hora y prueba “Prestar una voz más comprensiva”.',
          'Recuerda: “No, gracias” es una respuesta completa.'
        ]],
      ['Seu “não” não precisa de defesa',
        'Suas respostas sugerem que você consegue colocar limites, mas muitas vezes os envolve em longas explicações, desculpas e mensagens extras. Explicar demais pode ser uma forma de evitar conflito ou pedir permissão. Um “não” mais curto e caloroso costuma ser mais claro, e mais gentil com todos, inclusive com você.',
        [
          'Use “Um limite claro e sereno” para reduzir seu próximo “não” a uma ou duas frases.',
          'Escreva sua resposta e depois tire toda frase que comece com “É que só…” ou “Desculpa, mas…”.',
          'Quando vier a vontade de mandar mais uma mensagem, espere uma hora e experimente “Adotar uma voz mais compreensiva”.',
          'Lembre-se: “Não, obrigado” é uma resposta completa.'
        ]]),
    overextended: r(['next', 'release', 'boundary'],
      ['Carrying More Than One Person Can Hold',
        'Your answers suggest your energy is spread very thin — too many commitments and too little recovery in between. This is less about saying no to people and more about making honest room in your life. Something may need to be set down, even temporarily.',
        [
          'List your current commitments and use “The next workable thing” to choose one to pause, delegate, or shrink.',
          'Build one buffer of empty time into each day, even fifteen minutes.',
          'Use “Unclench one thing” between commitments to let your body register the transition.',
          'Practice “A clean boundary sentence” for the next new request before you add it.'
        ]],
      ['Cargar más de lo que una persona puede sostener',
        'Tus respuestas sugieren que tu energía está muy repartida: demasiados compromisos y muy poco tiempo de recuperación entre ellos. Se trata menos de decir que no a las personas y más de hacer un espacio honesto en tu vida. Quizá haga falta soltar algo, aunque sea por un tiempo.',
        [
          'Haz una lista de tus compromisos actuales y usa “El próximo paso viable” para elegir uno que pausar, delegar o reducir.',
          'Incluye un margen de tiempo libre cada día, aunque sean quince minutos.',
          'Usa “Soltar un solo punto” entre compromisos para que el cuerpo registre la transición.',
          'Practica “Un límite con serenidad” ante el próximo pedido antes de sumarlo.'
        ]],
      ['Carregando mais do que uma pessoa consegue sustentar',
        'Suas respostas sugerem que sua energia está muito dividida: compromissos demais e pouco tempo de recuperação entre eles. Isso tem menos a ver com dizer não às pessoas e mais com abrir um espaço honesto na sua vida. Talvez seja preciso largar algo, mesmo que por um tempo.',
        [
          'Liste seus compromissos atuais e use “O próximo passo possível” para escolher um para pausar, delegar ou reduzir.',
          'Reserve uma margem de tempo livre por dia, nem que sejam quinze minutos.',
          'Use “Soltar um ponto de tensão” entre compromissos para que o corpo registre a transição.',
          'Pratique “Um limite claro e sereno” diante do próximo pedido antes de aceitá-lo.'
        ]]),
    clear_limits: r(['listen', 'boundary'],
      ['Warm, Clear, and Steady',
        'Your answers suggest you already protect your energy with a good deal of clarity — checking your capacity, keeping limits simple, and letting others have their own feelings about them. That is a real skill, and one worth keeping well-tended.',
        [
          'Notice which relationships or situations still make limits harder — that is your growing edge.',
          'Keep “A clean boundary sentence” ready for high-pressure moments, when old habits return.',
          'Try “Ask before fixing” to offer care to others without taking on what is theirs to carry.',
          'Consider sharing what has helped you in the Circle; others may be learning what you already practice.'
        ]],
      ['Cálido, claro y estable',
        'Tus respuestas sugieren que ya cuidas tu energía con bastante claridad: revisas tu capacidad, mantienes los límites simples y permites que los demás sientan lo que sientan al respecto. Es una habilidad real, y vale la pena seguir cuidándola.',
        [
          'Observa qué relaciones o situaciones todavía te dificultan poner límites: ahí está tu terreno de crecimiento.',
          'Ten a mano “Un límite con serenidad” para los momentos de mucha presión, cuando vuelven los viejos hábitos.',
          'Prueba “Preguntar antes de resolver” para acompañar a otros sin cargar con lo que les corresponde.',
          'Considera compartir en el Círculo lo que te ha ayudado; otras personas pueden estar aprendiendo lo que tú ya practicas.'
        ]],
      ['Acolhedor, claro e estável',
        'Suas respostas sugerem que você já protege sua energia com bastante clareza: avalia sua capacidade, mantém os limites simples e deixa que os outros sintam o que sentirem sobre eles. É uma habilidade real, e vale a pena continuar cuidando dela.',
        [
          'Perceba quais relações ou situações ainda dificultam colocar limites: ali está o seu ponto de crescimento.',
          'Tenha à mão “Um limite claro e sereno” para momentos de muita pressão, quando velhos hábitos voltam.',
          'Experimente “Perguntar antes de aconselhar” para cuidar dos outros sem carregar o que cabe a eles.',
          'Considere compartilhar no Círculo o que te ajudou; outras pessoas podem estar aprendendo o que você já pratica.'
        ]])
  }
};

// ---------------------------------------------------------------------------
// 7. What support do I need right now? (new)
// ---------------------------------------------------------------------------
const quizSupport = {
  id: 'quiz_support',
  slug: 'what-support-do-i-need',
  tier_required: 'steady',
  en: {
    title: 'What Support Do I Need Right Now?',
    subtitle: 'Telling the difference between needing an ear, a hand, some space, or company.',
    description: 'When things are hard, it can be difficult to know what would actually help — and even harder to ask for it. This reflection helps you notice what kind of support you are reaching for, so you can ask for it more clearly. It is not a diagnostic tool and does not replace professional care. If you feel unsafe or in crisis, contact your local emergency number or a crisis line such as 988 in the US.'
  },
  es: {
    title: '¿Qué apoyo necesito ahora?',
    subtitle: 'Distinguir si necesitas que te escuchen, una mano, espacio o compañía.',
    description: 'Cuando las cosas se ponen difíciles, cuesta saber qué ayudaría de verdad, y todavía más pedirlo. Esta reflexión te ayuda a notar qué tipo de apoyo estás buscando, para que puedas pedirlo con más claridad. No es una herramienta de diagnóstico ni reemplaza la atención profesional. Si te sientes en peligro o en crisis, comunícate con tu número local de emergencias o con una línea de crisis como el 988 en EE. UU.'
  },
  'pt-BR': {
    title: 'De que apoio eu preciso agora?',
    subtitle: 'Diferenciando a necessidade de ser ouvido, de uma ajuda prática, de espaço ou de companhia.',
    description: 'Quando as coisas ficam difíceis, pode ser complicado saber o que realmente ajudaria, e mais ainda pedir. Esta reflexão ajuda você a perceber que tipo de apoio está buscando, para pedir com mais clareza. Não é uma ferramenta de diagnóstico e não substitui o cuidado profissional. Se você se sentir em perigo ou em crise, procure o número de emergência local ou uma linha de crise como o 988 nos EUA.'
  },
  questions: [
    q('q_support_1', 1, ['support_heard', 'support_practical', 'support_space', 'support_company'],
      ['If a kind friend knocked on your door right now, what would you most want from them?', [
        'To sit down and let me talk without interrupting',
        'To help me with something concrete — a meal, an errand, a task',
        'Honestly, to leave a note and let me be alone',
        'Just to be here — we would not even have to talk'
      ]],
      ['Si una amistad cariñosa tocara tu puerta ahora mismo, ¿qué querrías de ella?', [
        'Que se siente y me deje hablar sin interrumpir',
        'Que me ayude con algo concreto: una comida, un trámite, una tarea',
        'Sinceramente, que me deje una nota y me dé espacio',
        'Solo que esté aquí; ni siquiera tendríamos que hablar'
      ]],
      ['Se um amigo querido batesse na sua porta agora, o que você mais gostaria que ele fizesse?', [
        'Que sentasse e me deixasse falar sem interromper',
        'Que me ajudasse com algo concreto: uma refeição, um recado, uma tarefa',
        'Sinceramente, que deixasse um bilhete e me desse espaço',
        'Só que ficasse aqui; nem precisaríamos conversar'
      ]]),
    q('q_support_2', 2, ['support_practical', 'support_company', 'support_heard', 'support_space'],
      ['What feels heaviest right now?', [
        'The number of things that simply need to get done',
        'Feeling alone with it all',
        'Things I have not been able to say out loud to anyone',
        'Too many people needing something from me'
      ]],
      ['¿Qué es lo que más te pesa en este momento?', [
        'La cantidad de cosas que simplemente hay que hacer',
        'Sentirme a solas con todo',
        'Cosas que no he podido decirle en voz alta a nadie',
        'Demasiadas personas que necesitan algo de mí'
      ]],
      ['O que está pesando mais agora?', [
        'A quantidade de coisas que simplesmente precisam ser feitas',
        'Me sentir sozinho com tudo isso',
        'Coisas que ainda não consegui dizer em voz alta para ninguém',
        'Gente demais precisando de algo de mim'
      ]]),
    q('q_support_3', 3, ['support_space', 'support_heard', 'support_company', 'support_practical'],
      ['When people offer advice right now, how does it land?', [
        'It feels like one more thing I have to respond to',
        'I wish they would just listen first',
        'I do not mind — I am mostly glad they are around',
        'Welcome, if it is specific and actually useful'
      ]],
      ['Cuando la gente te da consejos en este momento, ¿cómo te llegan?', [
        'Se siente como una cosa más a la que tengo que responder',
        'Quisiera que primero me escucharan',
        'No me molesta: sobre todo me alegra que estén cerca',
        'Bienvenidos, si son concretos y realmente útiles'
      ]],
      ['Quando as pessoas te dão conselhos agora, como isso chega em você?', [
        'Parece mais uma coisa que preciso responder',
        'Eu queria que primeiro elas me escutassem',
        'Não me incomoda: fico feliz principalmente por estarem por perto',
        'Bem-vindos, se forem específicos e realmente úteis'
      ]]),
    q('q_support_4', 4, ['support_company', 'support_space', 'support_practical', 'support_heard'],
      ['Which evening sounds most supportive?', [
        'Watching a movie on the couch with someone I love',
        'A quiet night completely to myself, with no messages to answer',
        'Someone else cooking dinner and doing the dishes',
        'A long phone call where I can finally say how things really are'
      ]],
      ['¿Qué noche te suena más reconfortante?', [
        'Ver una película en el sillón con alguien que quiero',
        'Una noche tranquila solo para mí, sin mensajes que responder',
        'Que otra persona cocine la cena y lave los platos',
        'Una llamada larga en la que por fin pueda decir cómo están las cosas'
      ]],
      ['Qual noite parece mais acolhedora?', [
        'Assistir a um filme no sofá com alguém que eu amo',
        'Uma noite tranquila só para mim, sem mensagens para responder',
        'Alguém fazendo o jantar e lavando a louça',
        'Uma longa ligação em que eu finalmente possa dizer como as coisas estão'
      ]]),
    q('q_support_5', 5, ['support_heard', 'support_space', 'support_practical', 'support_company'],
      ['What has been hardest to ask for lately?', [
        'For someone to really listen without trying to fix it',
        'For time and quiet without people worrying about me',
        'For hands-on help — it feels like admitting I cannot cope',
        'For company — I do not want to be a burden'
      ]],
      ['¿Qué te ha costado más pedir últimamente?', [
        'Que alguien me escuche de verdad sin intentar arreglarlo',
        'Tiempo y silencio sin que la gente se preocupe por mí',
        'Ayuda práctica: siento que es admitir que no puedo',
        'Compañía: no quiero ser una carga'
      ]],
      ['O que tem sido mais difícil de pedir ultimamente?', [
        'Que alguém me escute de verdade sem tentar resolver',
        'Tempo e silêncio sem que as pessoas se preocupem comigo',
        'Ajuda prática: parece admitir que não estou dando conta',
        'Companhia: não quero ser um peso'
      ]]),
    q('q_support_6', 6, ['support_practical', 'support_heard', 'support_space', 'support_company'],
      ['Which sentence would feel most relieving to hear?', [
        '“I have taken care of that for you.”',
        '“Tell me everything. I am listening.”',
        '“Take all the time you need. I am here when you are ready.”',
        '“You are not alone in this. I am staying.”'
      ]],
      ['¿Qué frase te daría más alivio escuchar?', [
        '“Ya me encargué de eso por ti.”',
        '“Cuéntame todo. Te escucho.”',
        '“Tómate el tiempo que necesites. Aquí estoy cuando quieras.”',
        '“No estás solo en esto. Me quedo contigo.”'
      ]],
      ['Qual frase traria mais alívio ouvir?', [
        '“Já resolvi isso para você.”',
        '“Me conta tudo. Estou ouvindo.”',
        '“Leve o tempo que precisar. Estou aqui quando você quiser.”',
        '“Você não está sozinho nisso. Eu fico com você.”'
      ]]),
    q('q_support_7', 7, ['support_space', 'support_company', 'support_heard', 'support_practical'],
      ['How has your social energy been lately?', [
        'Low — even kind conversations feel tiring',
        'I miss people and feel a bit disconnected',
        'I am okay with people, but I feel unheard',
        'Fine — it is my to-do list that is overwhelming, not my relationships'
      ]],
      ['¿Cómo ha estado tu energía social últimamente?', [
        'Baja: hasta las conversaciones amables me cansan',
        'Extraño a la gente y me siento algo desconectado',
        'Estoy bien con los demás, pero siento que no me escuchan',
        'Bien: lo que me desborda es la lista de pendientes, no mis vínculos'
      ]],
      ['Como tem estado sua energia social ultimamente?', [
        'Baixa: até conversas gentis me cansam',
        'Sinto falta das pessoas e estou um pouco desconectado',
        'Estou bem com os outros, mas sinto que não sou ouvido',
        'Bem: o que me sobrecarrega é a lista de tarefas, não as relações'
      ]]),
    q('q_support_8', 8, ['support_company', 'support_practical', 'support_heard', 'support_space'],
      ['If you could send one honest text right now, what would it say?', [
        '“Could we spend some time together this week?”',
        '“Could you help me with something? I am stretched thin.”',
        '“Can I talk something through with you? I just need to be heard.”',
        '“I love you, and I need a few quiet days. I am okay.”'
      ]],
      ['Si pudieras enviar un mensaje sincero ahora mismo, ¿qué diría?', [
        '“¿Podemos pasar un rato juntos esta semana?”',
        '“¿Me ayudarías con algo? Estoy al límite.”',
        '“¿Puedo contarte algo? Solo necesito que me escuches.”',
        '“Te quiero y necesito unos días tranquilos. Estoy bien.”'
      ]],
      ['Se você pudesse mandar uma mensagem sincera agora, o que ela diria?', [
        '“Podemos passar um tempo juntos esta semana?”',
        '“Você me ajudaria com uma coisa? Estou no limite.”',
        '“Posso te contar uma coisa? Só preciso ser ouvido.”',
        '“Eu te amo e preciso de uns dias quietos. Estou bem.”'
      ]])
  ],
  results: {
    support_heard: r(['name', 'listen', 'weather'],
      ['You Need to Be Heard',
        'Your answers suggest what would help most right now is being listened to — fully, without advice, fixing, or rushing. Having someone simply receive what you are carrying can make it feel lighter and more real at the same time.',
        [
          'Tell someone directly: “I do not need advice. I just need you to listen.” The practice “Ask before fixing” can give you words for this.',
          'Use “Name what is here” first, so you have a few words ready for what you want to share.',
          'If no one feels safe to talk to, try writing an “Emotional weather report” as a letter to yourself.',
          'A counselor or therapist can offer a steady, dedicated place to be heard — and if you are ever in crisis, contact your local emergency number or a line such as 988 in the US.'
        ]],
      ['Necesitas que te escuchen',
        'Tus respuestas sugieren que lo que más te ayudaría ahora es que te escuchen: por completo, sin consejos, sin arreglos, sin prisa. Que alguien simplemente reciba lo que cargas puede hacerlo más liviano y más real a la vez.',
        [
          'Dilo con claridad: “No necesito consejos, solo que me escuches.” La práctica “Preguntar antes de resolver” puede darte palabras para esto.',
          'Usa primero “Nombrar lo que está aquí”, para tener algunas palabras listas sobre lo que quieres compartir.',
          'Si no sientes que haya alguien seguro con quien hablar, prueba escribir un “Informe del clima interior” como una carta para ti.',
          'Un consejero o terapeuta puede ofrecerte un espacio estable y dedicado para ser escuchado; y si alguna vez estás en crisis, comunícate con tu número local de emergencias o con una línea como el 988 en EE. UU.'
        ]],
      ['Você precisa ser ouvido',
        'Suas respostas sugerem que o que mais ajudaria agora é ser escutado: por inteiro, sem conselhos, sem soluções, sem pressa. Ter alguém que simplesmente receba o que você está carregando pode deixar tudo mais leve e mais real ao mesmo tempo.',
        [
          'Diga com clareza: “Não preciso de conselho, só que você me escute.” A prática “Perguntar antes de aconselhar” pode te dar palavras para isso.',
          'Use primeiro “Nomear o que está presente”, para ter algumas palavras prontas sobre o que quer compartilhar.',
          'Se não houver ninguém com quem pareça seguro conversar, experimente escrever uma “Previsão do tempo interior” como uma carta para si.',
          'Um psicólogo ou terapeuta pode oferecer um espaço estável e dedicado para você ser ouvido; e se estiver em crise, procure o número de emergência local ou uma linha como o 988 nos EUA.'
        ]]),
    support_practical: r(['next', 'boundary'],
      ['You Need a Practical Hand',
        'Your answers suggest the weight right now is mostly practical — too many tasks, not enough hours or energy. Asking for concrete help is not a sign of failure; it is a sensible response to a genuinely heavy load.',
        [
          'Use “The next workable thing” to sort what only you can do from what someone else could take on.',
          'Make specific asks: “Could you pick up groceries on Thursday?” is easier to say yes to than “Let me know if you can help.”',
          'Practice “A clean boundary sentence” to pause or decline new tasks while your plate is full.',
          'Look at what could simply be lowered for now — good enough meals, a less tidy house, a later deadline.'
        ]],
      ['Necesitas una mano práctica',
        'Tus respuestas sugieren que el peso ahora es sobre todo práctico: demasiadas tareas y pocas horas o energía. Pedir ayuda concreta no es señal de fracaso; es una respuesta sensata ante una carga realmente pesada.',
        [
          'Usa “El próximo paso viable” para separar lo que solo tú puedes hacer de lo que otra persona podría asumir.',
          'Haz pedidos específicos: “¿Podrías hacer las compras el jueves?” es más fácil de aceptar que “Avísame si puedes ayudar”.',
          'Practica “Un límite con serenidad” para pausar o rechazar nuevas tareas mientras tienes el plato lleno.',
          'Mira qué podrías simplemente bajar de nivel por ahora: comidas sencillas, una casa menos ordenada, un plazo más largo.'
        ]],
      ['Você precisa de uma ajuda prática',
        'Suas respostas sugerem que o peso agora é principalmente prático: tarefas demais e pouco tempo ou energia. Pedir ajuda concreta não é sinal de fracasso; é uma resposta sensata a uma carga realmente pesada.',
        [
          'Use “O próximo passo possível” para separar o que só você pode fazer do que outra pessoa poderia assumir.',
          'Faça pedidos específicos: “Você pode fazer o mercado na quinta?” é mais fácil de aceitar do que “Me avisa se puder ajudar”.',
          'Pratique “Um limite claro e sereno” para pausar ou recusar novas tarefas enquanto seu prato está cheio.',
          'Veja o que dá para simplesmente simplificar por enquanto: refeições básicas, uma casa menos arrumada, um prazo mais longo.'
        ]]),
    support_space: r(['boundary', 'release', 'arrive'],
      ['You Need Space to Breathe',
        'Your answers suggest you are asking for room — quiet, time alone, fewer demands. Needing space is not the same as pushing people away. It is often how a tired person refills enough to be able to connect again.',
        [
          'Use “A clean boundary sentence” to tell people you love that you need some quiet, and that you are okay.',
          'Protect a small daily window of true solitude — no messages, no one to take care of.',
          'Try “Unclench one thing” or “Arrive in the room” during that time, to let your body register the space.',
          'Check in with yourself gently: if solitude starts to feel like isolation or hopelessness, that is a sign to reach out — to a friend, a doctor, or a counselor.'
        ]],
      ['Necesitas espacio para respirar',
        'Tus respuestas sugieren que estás pidiendo espacio: silencio, tiempo a solas, menos exigencias. Necesitar espacio no es lo mismo que alejar a la gente. A menudo es la manera en que una persona cansada recupera lo suficiente para volver a conectar.',
        [
          'Usa “Un límite con serenidad” para decirles a las personas que quieres que necesitas algo de silencio y que estás bien.',
          'Protege un pequeño momento diario de verdadera soledad: sin mensajes y sin nadie a quien cuidar.',
          'Prueba “Soltar un solo punto” o “Llegar al espacio presente” en ese tiempo, para que el cuerpo registre el espacio.',
          'Revisa contigo con suavidad: si la soledad empieza a sentirse como aislamiento o desesperanza, es señal de buscar a alguien: una amistad, un médico o un consejero.'
        ]],
      ['Você precisa de espaço para respirar',
        'Suas respostas sugerem que você está pedindo espaço: silêncio, tempo sozinho, menos exigências. Precisar de espaço não é o mesmo que afastar as pessoas. Muitas vezes é assim que alguém cansado recupera o suficiente para voltar a se conectar.',
        [
          'Use “Um limite claro e sereno” para dizer a quem você ama que precisa de um pouco de silêncio e que está bem.',
          'Proteja um pequeno momento diário de solidão verdadeira: sem mensagens e sem ninguém de quem cuidar.',
          'Experimente “Soltar um ponto de tensão” ou “Chegar ao espaço presente” nesse tempo, para o corpo registrar o espaço.',
          'Observe-se com carinho: se a solidão começar a parecer isolamento ou desesperança, é sinal para buscar alguém — um amigo, um médico ou um psicólogo.'
        ]]),
    support_company: r(['kindly', 'memory'],
      ['You Need Company',
        'Your answers suggest you are longing for connection — not necessarily to talk things through, just to not be alone with them. Wanting company is not being a burden. Most people are glad to be asked, especially with a simple, specific invitation.',
        [
          'Send one small invitation this week: a walk, a coffee, a shared meal, a video call.',
          'Try “The three-part kindness pause,” especially the reminder that loneliness is part of the shared human experience.',
          'Visit the Circle’s Gentle Check-In space to be among people without having to explain much.',
          'If you are missing someone who has died or is far away, the practice “Continuing bond” may offer a way to feel accompanied.'
        ]],
      ['Necesitas compañía',
        'Tus respuestas sugieren que anhelas conexión; no necesariamente para hablar de todo, sino para no estar a solas con ello. Querer compañía no es ser una carga. La mayoría de las personas se alegra de que se lo pidan, sobre todo con una invitación sencilla y concreta.',
        [
          'Envía una invitación pequeña esta semana: una caminata, un café, una comida compartida, una videollamada.',
          'Prueba “La pausa de la ternura en tres tiempos”, sobre todo el recordatorio de que la soledad es parte de la experiencia humana compartida.',
          'Visita el espacio Pausa sincera del Círculo para estar entre personas sin tener que explicar demasiado.',
          'Si extrañas a alguien que falleció o que está lejos, la práctica “El lazo que permanece” puede ofrecerte una forma de sentirte acompañado.'
        ]],
      ['Você precisa de companhia',
        'Suas respostas sugerem que você sente falta de conexão; não necessariamente para conversar sobre tudo, mas para não ficar sozinho com isso. Querer companhia não é ser um peso. A maioria das pessoas fica feliz em ser chamada, principalmente com um convite simples e específico.',
        [
          'Mande um convite pequeno nesta semana: uma caminhada, um café, uma refeição juntos, uma chamada de vídeo.',
          'Experimente “A pausa da gentileza em três passos”, principalmente o lembrete de que a solidão faz parte da experiência humana compartilhada.',
          'Visite o espaço Check-in acolhedor do Círculo para estar entre pessoas sem precisar explicar muito.',
          'Se você sente falta de alguém que faleceu ou está longe, a prática “O vínculo que continua” pode oferecer uma forma de se sentir acompanhado.'
        ]])
  }
};

// ---------------------------------------------------------------------------
// 8. How I meet conflict (new)
// ---------------------------------------------------------------------------
const quizConflict = {
  id: 'quiz_conflict',
  slug: 'how-i-meet-conflict',
  tier_required: 'steady',
  en: {
    title: 'How I Meet Conflict',
    subtitle: 'Noticing whether you step back, smooth over, push back, or lean in.',
    description: 'Disagreement is part of every close relationship. This reflection helps you notice your usual first move when tension rises, with curiosity rather than judgment. It is not a diagnostic tool or a personality test — most of us move between patterns depending on who we are with. If a relationship involves fear, threats, or harm, please reach out to a qualified professional or your local emergency number.'
  },
  es: {
    title: 'Cómo enfrento los conflictos',
    subtitle: 'Notar si te alejas, suavizas, te defiendes o te acercas.',
    description: 'Los desacuerdos forman parte de toda relación cercana. Esta reflexión te ayuda a notar tu primer movimiento habitual cuando sube la tensión, con curiosidad y sin juicio. No es una herramienta de diagnóstico ni un test de personalidad: la mayoría pasamos de un patrón a otro según con quién estemos. Si una relación implica miedo, amenazas o daño, busca a un profesional calificado o comunícate con tu número local de emergencias.'
  },
  'pt-BR': {
    title: 'Como eu lido com conflitos',
    subtitle: 'Percebendo se você se afasta, apazigua, se defende ou se aproxima.',
    description: 'Discordâncias fazem parte de toda relação próxima. Esta reflexão ajuda você a perceber seu primeiro movimento habitual quando a tensão sobe, com curiosidade e sem julgamento. Não é uma ferramenta de diagnóstico nem um teste de personalidade: a maioria de nós transita entre padrões dependendo de com quem está. Se uma relação envolve medo, ameaças ou violência, procure um profissional qualificado ou o número de emergência local.'
  },
  questions: [
    q('q_conflict_1', 1, ['conflict_avoid', 'conflict_appease', 'conflict_defend', 'conflict_engage'],
      ['When you sense tension building with someone close to you, what do you usually do first?', [
        'Change the subject or find a reason to leave the room',
        'Try to make them feel better, even if I am the one who is upset',
        'Get ready to make my case',
        'Name it gently: “It feels like something is off between us.”'
      ]],
      ['Cuando sientes que crece la tensión con alguien cercano, ¿qué sueles hacer primero?', [
        'Cambiar de tema o buscar una excusa para salir de la habitación',
        'Intentar que la otra persona se sienta mejor, aunque quien esté molesto sea yo',
        'Prepararme para defender mi postura',
        'Nombrarlo con suavidad: “Siento que algo no está bien entre nosotros.”'
      ]],
      ['Quando você sente a tensão crescendo com alguém próximo, o que costuma fazer primeiro?', [
        'Mudar de assunto ou arranjar um motivo para sair do ambiente',
        'Tentar fazer a outra pessoa se sentir melhor, mesmo sendo eu quem está chateado',
        'Me preparar para defender meu ponto',
        'Nomear com delicadeza: “Sinto que tem algo estranho entre a gente.”'
      ]]),
    q('q_conflict_2', 2, ['conflict_defend', 'conflict_engage', 'conflict_avoid', 'conflict_appease'],
      ['In the middle of a disagreement, what is going on inside you?', [
        'I am mostly focused on proving I am right',
        'I am trying to understand what they need, and to say what I need',
        'I want it to be over as fast as possible',
        'I am scanning their face to see if they are still okay with me'
      ]],
      ['En medio de un desacuerdo, ¿qué pasa dentro de ti?', [
        'Me concentro sobre todo en demostrar que tengo razón',
        'Intento entender qué necesita la otra persona y decir lo que necesito yo',
        'Quiero que termine lo antes posible',
        'Observo su cara para ver si todavía está bien conmigo'
      ]],
      ['No meio de uma discussão, o que acontece dentro de você?', [
        'Fico focado principalmente em provar que estou certo',
        'Tento entender do que a outra pessoa precisa e dizer do que eu preciso',
        'Quero que acabe o mais rápido possível',
        'Fico observando o rosto dela para ver se ainda está tudo bem comigo'
      ]]),
    q('q_conflict_3', 3, ['conflict_appease', 'conflict_avoid', 'conflict_engage', 'conflict_defend'],
      ['After a disagreement, which is most common for you?', [
        'I apologize, even when I am not sure I was wrong',
        'We never really finish it — it just gets dropped',
        'We come back to it later, once we have both calmed down',
        'I keep going over what I should have said'
      ]],
      ['Después de un desacuerdo, ¿qué es lo más habitual en ti?', [
        'Pido perdón, aunque no esté seguro de haberme equivocado',
        'Nunca lo terminamos de hablar: simplemente queda ahí',
        'Volvemos al tema más tarde, cuando los dos estamos más tranquilos',
        'Sigo repasando lo que debería haber dicho'
      ]],
      ['Depois de uma discussão, o que é mais comum para você?', [
        'Peço desculpas, mesmo sem ter certeza de que errei',
        'Nunca terminamos de conversar: o assunto simplesmente morre',
        'Voltamos ao assunto mais tarde, quando os dois estão mais calmos',
        'Fico repassando o que eu deveria ter dito'
      ]]),
    q('q_conflict_4', 4, ['conflict_engage', 'conflict_defend', 'conflict_appease', 'conflict_avoid'],
      ['When someone gives you critical feedback, what is your first reaction?', [
        'I take a breath and ask what they mean',
        'I start explaining why they have misunderstood',
        'I agree right away so the moment passes smoothly',
        'I nod, say little, and feel it privately for a long time'
      ]],
      ['Cuando alguien te hace una crítica, ¿cuál es tu primera reacción?', [
        'Respiro y pregunto qué quiere decir',
        'Empiezo a explicar por qué no me entendió',
        'Le doy la razón enseguida para que el momento pase sin problemas',
        'Asiento, digo poco y lo siento en silencio durante mucho tiempo'
      ]],
      ['Quando alguém te faz uma crítica, qual é sua primeira reação?', [
        'Respiro e pergunto o que a pessoa quis dizer',
        'Começo a explicar por que ela me entendeu mal',
        'Concordo na hora para o momento passar sem atrito',
        'Balanço a cabeça, falo pouco e fico remoendo sozinho por muito tempo'
      ]]),
    q('q_conflict_5', 5, ['conflict_avoid', 'conflict_defend', 'conflict_engage', 'conflict_appease'],
      ['Which belief about conflict feels most familiar?', [
        '“If we talk about it, it will only get worse.”',
        '“If I do not stand my ground, I will be walked over.”',
        '“Conflict handled with care can bring people closer.”',
        '“Keeping the peace matters more than my own opinion.”'
      ]],
      ['¿Qué creencia sobre el conflicto te resulta más familiar?', [
        '“Si lo hablamos, solo va a empeorar.”',
        '“Si no me mantengo firme, me van a pasar por encima.”',
        '“Un conflicto tratado con cuidado puede acercar a las personas.”',
        '“Mantener la paz importa más que mi propia opinión.”'
      ]],
      ['Qual crença sobre conflito parece mais familiar?', [
        '“Se a gente conversar sobre isso, só vai piorar.”',
        '“Se eu não me impuser, vão passar por cima de mim.”',
        '“Um conflito tratado com cuidado pode aproximar as pessoas.”',
        '“Manter a paz importa mais do que a minha opinião.”'
      ]]),
    q('q_conflict_6', 6, ['conflict_defend', 'conflict_appease', 'conflict_avoid', 'conflict_engage'],
      ['What does your body tend to do when voices rise?', [
        'Heat rises in my chest and my words come out faster and sharper',
        'My stomach drops and I rush to calm everyone down',
        'I go still and quiet and feel far away',
        'I notice my pulse and try to slow down before I answer'
      ]],
      ['¿Qué suele hacer tu cuerpo cuando las voces suben de tono?', [
        'Me sube el calor al pecho y las palabras salen más rápidas y filosas',
        'Se me encoge el estómago y me apuro a calmar a todos',
        'Me quedo quieto y callado, y me siento lejos',
        'Noto mi pulso e intento bajar el ritmo antes de responder'
      ]],
      ['O que seu corpo costuma fazer quando as vozes se alteram?', [
        'O calor sobe no peito e as palavras saem mais rápidas e afiadas',
        'Meu estômago gela e corro para acalmar todo mundo',
        'Fico parado e quieto, e me sinto distante',
        'Percebo meu pulso e tento desacelerar antes de responder'
      ]]),
    q('q_conflict_7', 7, ['conflict_appease', 'conflict_engage', 'conflict_defend', 'conflict_avoid'],
      ['What do the people close to you sometimes say about how you handle disagreements?', [
        '“You always give in — I never know what you really think.”',
        '“I appreciate that we can talk things through.”',
        '“You can be hard to argue with.”',
        '“You shut down and I cannot reach you.”'
      ]],
      ['¿Qué te dicen a veces las personas cercanas sobre cómo manejas los desacuerdos?', [
        '“Siempre cedes; nunca sé qué piensas de verdad.”',
        '“Me gusta que podamos hablar las cosas.”',
        '“Es difícil discutir contigo.”',
        '“Te cierras y no logro llegar a ti.”'
      ]],
      ['O que as pessoas próximas às vezes dizem sobre como você lida com discordâncias?', [
        '“Você sempre cede; nunca sei o que você realmente pensa.”',
        '“Gosto que a gente consiga conversar sobre as coisas.”',
        '“É difícil discutir com você.”',
        '“Você se fecha e eu não consigo te alcançar.”'
      ]]),
    q('q_conflict_8', 8, ['conflict_engage', 'conflict_avoid', 'conflict_appease', 'conflict_defend'],
      ['Which skill would you most like to grow?', [
        'Staying steady when the other person is not',
        'Saying the hard thing instead of letting it slide',
        'Holding my own view without feeling I have to give it up',
        'Listening fully before I respond'
      ]],
      ['¿Qué habilidad te gustaría desarrollar más?', [
        'Mantener la calma cuando la otra persona no la tiene',
        'Decir lo difícil en lugar de dejarlo pasar',
        'Sostener mi punto de vista sin sentir que debo renunciar a él',
        'Escuchar por completo antes de responder'
      ]],
      ['Qual habilidade você mais gostaria de desenvolver?', [
        'Manter a calma quando a outra pessoa não está calma',
        'Dizer o que é difícil em vez de deixar passar',
        'Sustentar meu ponto de vista sem sentir que preciso abrir mão dele',
        'Escutar por inteiro antes de responder'
      ]])
  ],
  results: {
    conflict_avoid: r(['name', 'boundary', 'arrive'],
      ['Stepping Back to Stay Safe',
        'Your answers suggest you tend to step away from conflict — changing the subject, going quiet, or letting things drop. That instinct often grew for good reasons. The cost can be that important things go unsaid, and closeness quietly thins. Small, gentle steps toward honesty can make conflict feel less dangerous.',
        [
          'Use “Name what is here” before a hard conversation, so you know what you want to say.',
          'Try a soft opener such as “Can we talk about something that has been on my mind?”',
          'Practice “A clean boundary sentence” to ask for a pause instead of disappearing: “I need twenty minutes, then I will come back.”',
          'If your body freezes, “Arrive in the room” can help you return before you respond.'
        ]],
      ['Alejarte para sentirte a salvo',
        'Tus respuestas sugieren que tiendes a alejarte del conflicto: cambias de tema, te callas o dejas que las cosas pasen. Ese instinto suele haber nacido por buenas razones. El costo puede ser que cosas importantes queden sin decir y que la cercanía se debilite en silencio. Pequeños pasos suaves hacia la sinceridad pueden hacer que el conflicto se sienta menos peligroso.',
        [
          'Usa “Nombrar lo que está aquí” antes de una conversación difícil, para saber qué quieres decir.',
          'Prueba una apertura suave como: “¿Podemos hablar de algo que tengo en la cabeza?”',
          'Practica “Un límite con serenidad” para pedir una pausa en lugar de desaparecer: “Necesito veinte minutos y luego vuelvo.”',
          'Si el cuerpo se paraliza, “Llegar al espacio presente” puede ayudarte a volver antes de responder.'
        ]],
      ['Se afastando para se sentir seguro',
        'Suas respostas sugerem que você tende a se afastar do conflito: muda de assunto, fica em silêncio ou deixa as coisas morrerem. Esse instinto costuma ter surgido por bons motivos. O custo pode ser que coisas importantes fiquem sem ser ditas e que a proximidade se enfraqueça em silêncio. Pequenos passos gentis em direção à sinceridade podem tornar o conflito menos ameaçador.',
        [
          'Use “Nomear o que está presente” antes de uma conversa difícil, para saber o que você quer dizer.',
          'Experimente uma abertura suave como: “Podemos conversar sobre algo que está na minha cabeça?”',
          'Pratique “Um limite claro e sereno” para pedir uma pausa em vez de sumir: “Preciso de vinte minutos e depois eu volto.”',
          'Se o corpo travar, “Chegar ao espaço presente” pode ajudar você a voltar antes de responder.'
        ]]),
    conflict_appease: r(['boundary', 'friend', 'weather'],
      ['Keeping the Peace at Your Own Expense',
        'Your answers suggest you tend to smooth things over quickly — apologizing, agreeing, or focusing on the other person’s feelings before your own. That warmth is a gift. But relationships are also strengthened when your real view has room to exist alongside theirs.',
        [
          'Before agreeing, pause and ask yourself: “Do I actually agree, or do I just want this to be over?”',
          'Practice “A clean boundary sentence” to state your view simply, without apologizing for it.',
          'After a conflict, use “Borrow a kinder voice” if you notice yourself taking all the blame.',
          'Use the “Emotional weather report” to notice your own feelings, not just theirs.'
        ]],
      ['Mantener la paz a costa de ti',
        'Tus respuestas sugieren que tiendes a suavizar las cosas rápido: pedir perdón, darle la razón a la otra persona o atender sus emociones antes que las tuyas. Esa calidez es un regalo. Pero las relaciones también se fortalecen cuando tu verdadera opinión tiene espacio junto a la del otro.',
        [
          'Antes de estar de acuerdo, haz una pausa y pregúntate: “¿De verdad estoy de acuerdo, o solo quiero que esto termine?”',
          'Practica “Un límite con serenidad” para expresar tu opinión de forma simple, sin disculparte por ella.',
          'Después de un conflicto, usa “Prestar una voz más comprensiva” si notas que te estás cargando toda la culpa.',
          'Usa el “Informe del clima interior” para notar tus propias emociones, no solo las de la otra persona.'
        ]],
      ['Mantendo a paz às suas próprias custas',
        'Suas respostas sugerem que você tende a apaziguar as coisas rapidamente: pedindo desculpas, concordando ou cuidando dos sentimentos do outro antes dos seus. Esse calor humano é um presente. Mas as relações também se fortalecem quando sua opinião verdadeira tem espaço ao lado da do outro.',
        [
          'Antes de concordar, faça uma pausa e pergunte a si: “Eu concordo mesmo, ou só quero que isso acabe?”',
          'Pratique “Um limite claro e sereno” para dizer o que pensa de forma simples, sem pedir desculpas por isso.',
          'Depois de um conflito, use “Adotar uma voz mais compreensiva” se perceber que está assumindo toda a culpa.',
          'Use a “Previsão do tempo interior” para perceber os seus próprios sentimentos, não só os do outro.'
        ]]),
    conflict_defend: r(['listen', 'release', 'name'],
      ['Leading with Protection',
        'Your answers suggest that in conflict you tend to move quickly into making your case — explaining, correcting, standing your ground. Often this comes from a real need to be understood or treated fairly. Slowing down to listen first can help you get that need met more often, not less.',
        [
          'Try “Ask before fixing” in disagreements too: ask one curious question before giving your view.',
          'When heat rises, use “Unclench one thing” to let your body slow down before your words speed up.',
          'Use “Name what is here” to notice what lies under the urge to be right — hurt, fear, or feeling unseen.',
          'Some people find the four steps of nonviolent communication — observation, feeling, need, request — a helpful structure for hard talks.'
        ]],
      ['Responder desde la protección',
        'Tus respuestas sugieren que, en un conflicto, tiendes a pasar rápido a defender tu postura: explicar, corregir, mantenerte firme. A menudo esto nace de una necesidad real de ser comprendido o tratado con justicia. Bajar el ritmo para escuchar primero puede ayudarte a satisfacer esa necesidad con más frecuencia, no menos.',
        [
          'Prueba “Preguntar antes de resolver” también en los desacuerdos: haz una pregunta con curiosidad antes de dar tu opinión.',
          'Cuando suba el calor, usa “Soltar un solo punto” para que el cuerpo baje el ritmo antes de que se aceleren las palabras.',
          'Usa “Nombrar lo que está aquí” para notar qué hay debajo de la necesidad de tener razón: dolor, miedo o sentirte invisible.',
          'A algunas personas les resultan útiles los cuatro pasos de la comunicación no violenta —observación, sentimiento, necesidad y petición— como estructura para las conversaciones difíciles.'
        ]],
      ['Liderando pela proteção',
        'Suas respostas sugerem que, no conflito, você tende a partir rapidamente para defender seu ponto: explicando, corrigindo, se mantendo firme. Muitas vezes isso vem de uma necessidade real de ser compreendido ou tratado com justiça. Desacelerar para escutar primeiro pode ajudar essa necessidade a ser atendida com mais frequência, e não menos.',
        [
          'Experimente “Perguntar antes de aconselhar” também nas discussões: faça uma pergunta curiosa antes de dar sua opinião.',
          'Quando o calor subir, use “Soltar um ponto de tensão” para o corpo desacelerar antes que as palavras acelerem.',
          'Use “Nomear o que está presente” para perceber o que está por baixo da vontade de ter razão: mágoa, medo ou a sensação de não ser visto.',
          'Algumas pessoas acham úteis os quatro passos da comunicação não violenta — observação, sentimento, necessidade e pedido — como estrutura para conversas difíceis.'
        ]]),
    conflict_engage: r(['listen', 'weather'],
      ['Leaning In with Care',
        'Your answers suggest you tend to meet conflict with openness — naming tension, listening, and coming back to hard conversations once things have calmed down. That takes real steadiness. Even so, everyone has people or topics that pull them off balance, and it helps to know yours.',
        [
          'Notice which relationships still pull you toward old patterns — that is where to be gentle with yourself.',
          'Keep “Ask before fixing” close, so openness does not tip into problem-solving too soon.',
          'Use the “Emotional weather report” before important conversations to check your own capacity.',
          'Remember that engaging well also includes knowing when to pause and come back later.'
        ]],
      ['Acercarte con cuidado',
        'Tus respuestas sugieren que sueles enfrentar el conflicto con apertura: nombras la tensión, escuchas y vuelves a las conversaciones difíciles cuando las cosas se calman. Eso requiere una estabilidad real. Aun así, todos tenemos personas o temas que nos desequilibran, y ayuda conocer los tuyos.',
        [
          'Observa qué relaciones todavía te llevan a viejos patrones: ahí conviene ser amable contigo.',
          'Ten a mano “Preguntar antes de resolver”, para que la apertura no se convierta demasiado pronto en querer solucionar.',
          'Usa el “Informe del clima interior” antes de conversaciones importantes para revisar tu propia capacidad.',
          'Recuerda que involucrarte bien también incluye saber cuándo hacer una pausa y volver después.'
        ]],
      ['Aproximando-se com cuidado',
        'Suas respostas sugerem que você costuma encarar o conflito com abertura: nomeia a tensão, escuta e volta às conversas difíceis quando as coisas se acalmam. Isso exige uma estabilidade real. Mesmo assim, todos temos pessoas ou assuntos que nos tiram do eixo, e ajuda conhecer os seus.',
        [
          'Perceba quais relações ainda te puxam para velhos padrões: é ali que vale ser gentil consigo.',
          'Mantenha “Perguntar antes de aconselhar” por perto, para que a abertura não vire solução apressada.',
          'Use a “Previsão do tempo interior” antes de conversas importantes para checar sua própria capacidade.',
          'Lembre-se de que lidar bem com o conflito também inclui saber quando pausar e voltar depois.'
        ]])
  }
};


// ---------------------------------------------------------------------------
// 9. Rest vs. productivity (new)
// ---------------------------------------------------------------------------
const quizRestProductivity = {
  id: 'quiz_rest_productivity',
  slug: 'rest-and-productivity-reflection',
  tier_required: 'steady',
  en: {
    title: 'My Relationship with Rest and Doing',
    subtitle: 'Noticing whether rest feels earned, guilty, forced on you, or simply allowed.',
    description: 'Many of us carry quiet rules about when we are “allowed” to stop. This reflection helps you notice yours, so rest can become something you choose rather than something you have to deserve. It is a reflective check-in, not a diagnostic tool.'
  },
  es: {
    title: 'Mi relación con el descanso y el hacer',
    subtitle: 'Notar si el descanso se siente merecido, culpable, impuesto o simplemente permitido.',
    description: 'Muchos cargamos reglas silenciosas sobre cuándo “tenemos permiso” para parar. Esta reflexión te ayuda a notar las tuyas, para que el descanso sea algo que eliges y no algo que debes ganarte. Es una reflexión personal, no una herramienta de diagnóstico.'
  },
  'pt-BR': {
    title: 'Minha relação com o descanso e o fazer',
    subtitle: 'Percebendo se o descanso parece merecido, culpado, forçado ou simplesmente permitido.',
    description: 'Muitos de nós carregamos regras silenciosas sobre quando “podemos” parar. Esta reflexão ajuda você a perceber as suas, para que o descanso seja algo que você escolhe, e não algo que precisa merecer. É uma reflexão pessoal, não uma ferramenta de diagnóstico.'
  },
  questions: [
    q('q_doing_1', 1, ['rest_earned', 'rest_guilt', 'rest_crash', 'rest_permitted'],
      ['When do you usually let yourself rest?', [
        'Once everything on the list is done',
        'Whenever I can, but I feel guilty the whole time',
        'Only when my body forces me to — illness, exhaustion, or burnout',
        'Regularly, as a normal part of my day or week'
      ]],
      ['¿Cuándo te permites descansar normalmente?', [
        'Cuando todo lo de la lista está hecho',
        'Cuando puedo, pero me siento culpable todo el tiempo',
        'Solo cuando el cuerpo me obliga: enfermedad, agotamiento o desgaste',
        'Con regularidad, como parte normal de mi día o mi semana'
      ]],
      ['Quando você costuma se permitir descansar?', [
        'Quando tudo da lista estiver feito',
        'Sempre que posso, mas me sinto culpado o tempo todo',
        'Só quando o corpo me obriga: doença, exaustão ou esgotamento',
        'Com regularidade, como parte normal do meu dia ou da minha semana'
      ]]),
    q('q_doing_2', 2, ['rest_guilt', 'rest_permitted', 'rest_earned', 'rest_crash'],
      ['You have a free Sunday afternoon. What happens?', [
        'I lie down, then keep thinking about everything I should be doing',
        'I enjoy it — nothing needs to be accomplished',
        'I clean, organize, or catch up first, and rest if there is time left',
        'I barely move because the whole week has flattened me'
      ]],
      ['Tienes un domingo por la tarde libre. ¿Qué sucede?', [
        'Me acuesto y sigo pensando en todo lo que debería estar haciendo',
        'Lo disfruto: no hace falta lograr nada',
        'Primero limpio, ordeno o me pongo al día, y descanso si sobra tiempo',
        'Casi no me muevo porque la semana me dejó sin fuerzas'
      ]],
      ['Você tem uma tarde de domingo livre. O que acontece?', [
        'Deito, mas continuo pensando em tudo o que deveria estar fazendo',
        'Aproveito: não preciso realizar nada',
        'Primeiro limpo, organizo ou coloco as coisas em dia, e descanso se sobrar tempo',
        'Mal me mexo, porque a semana me deixou sem forças'
      ]]),
    q('q_doing_3', 3, ['rest_crash', 'rest_earned', 'rest_permitted', 'rest_guilt'],
      ['Which pattern best describes your energy over a typical month?', [
        'Push hard for weeks, then crash for days',
        'Steady work, with rest only as a reward for finishing',
        'Ups and downs, but with regular pauses built in',
        'Busy, with lots of small breaks that never quite feel restful'
      ]],
      ['¿Qué patrón describe mejor tu energía en un mes típico?', [
        'Me esfuerzo al máximo durante semanas y luego me derrumbo por días',
        'Trabajo constante, con descanso solo como premio por terminar',
        'Altibajos, pero con pausas regulares incluidas',
        'Ocupado, con muchas pausas pequeñas que nunca terminan de ser reparadoras'
      ]],
      ['Qual padrão descreve melhor sua energia em um mês típico?', [
        'Dou tudo por semanas e depois desabo por dias',
        'Trabalho constante, com descanso só como prêmio por terminar',
        'Altos e baixos, mas com pausas regulares incluídas',
        'Ocupado, com muitas pausas pequenas que nunca chegam a descansar'
      ]]),
    q('q_doing_4', 4, ['rest_permitted', 'rest_crash', 'rest_guilt', 'rest_earned'],
      ['How do you feel when someone asks, “What did you do this weekend?” and the answer is “nothing”?', [
        'Content — it was exactly what I needed',
        'Relieved, because I was too depleted to do anything else',
        'Slightly embarrassed, like I should have more to show for it',
        'Uneasy — I would rather have a productive answer'
      ]],
      ['¿Cómo te sientes cuando alguien pregunta “¿Qué hiciste el fin de semana?” y la respuesta es “nada”?', [
        'En paz: era justo lo que necesitaba',
        'Aliviado, porque estaba demasiado agotado para hacer otra cosa',
        'Un poco avergonzado, como si debiera tener algo que mostrar',
        'Incómodo: preferiría tener una respuesta productiva'
      ]],
      ['Como você se sente quando alguém pergunta “O que você fez no fim de semana?” e a resposta é “nada”?', [
        'Em paz: era exatamente o que eu precisava',
        'Aliviado, porque estava esgotado demais para fazer outra coisa',
        'Um pouco envergonhado, como se devesse ter algo para mostrar',
        'Desconfortável: preferiria ter uma resposta produtiva'
      ]]),
    q('q_doing_5', 5, ['rest_earned', 'rest_crash', 'rest_permitted', 'rest_guilt'],
      ['Which phrase sounds most like something you tell yourself?', [
        '“I will rest when I have earned it.”',
        '“I will keep going until I cannot.”',
        '“Rest is part of doing good work.”',
        '“I should not need this much rest.”'
      ]],
      ['¿Qué frase se parece más a algo que te dices?', [
        '“Descansaré cuando me lo haya ganado.”',
        '“Seguiré hasta que no pueda más.”',
        '“El descanso es parte de hacer bien las cosas.”',
        '“No debería necesitar tanto descanso.”'
      ]],
      ['Qual frase parece mais com algo que você diz a si mesmo?', [
        '“Vou descansar quando tiver merecido.”',
        '“Vou continuar até não aguentar mais.”',
        '“Descansar faz parte de fazer um bom trabalho.”',
        '“Eu não deveria precisar de tanto descanso.”'
      ]]),
    q('q_doing_6', 6, ['rest_guilt', 'rest_earned', 'rest_crash', 'rest_permitted'],
      ['Where do you think your beliefs about rest came from?', [
        'From people who seemed disappointed when I was not busy',
        'From being praised mostly for achievements and hard work',
        'From years of there simply being no time to stop',
        'I have gradually unlearned the idea that rest must be earned'
      ]],
      ['¿De dónde crees que vienen tus creencias sobre el descanso?', [
        'De personas que parecían decepcionadas cuando yo no estaba ocupado',
        'De haber recibido elogios sobre todo por logros y esfuerzo',
        'De años en los que simplemente no había tiempo para parar',
        'Poco a poco fui desaprendiendo la idea de que el descanso hay que ganárselo'
      ]],
      ['De onde você acha que vêm suas crenças sobre descanso?', [
        'De pessoas que pareciam decepcionadas quando eu não estava ocupado',
        'De ter sido elogiado principalmente por conquistas e esforço',
        'De anos em que simplesmente não havia tempo para parar',
        'Fui desaprendendo aos poucos a ideia de que o descanso precisa ser merecido'
      ]]),
    q('q_doing_7', 7, ['rest_crash', 'rest_guilt', 'rest_permitted', 'rest_earned'],
      ['How do you usually notice that you need a break?', [
        'I get sick, or completely run out of steam',
        'I notice early, but talk myself out of stopping',
        'I notice early signs — tension, irritability — and pause',
        'I notice, but finish the task first'
      ]],
      ['¿Cómo sueles darte cuenta de que necesitas una pausa?', [
        'Me enfermo o me quedo totalmente sin energía',
        'Lo noto pronto, pero me convenzo de no parar',
        'Noto las primeras señales —tensión, irritabilidad— y hago una pausa',
        'Lo noto, pero primero termino la tarea'
      ]],
      ['Como você costuma perceber que precisa de uma pausa?', [
        'Fico doente ou fico totalmente sem energia',
        'Percebo cedo, mas me convenço a não parar',
        'Percebo os primeiros sinais — tensão, irritação — e faço uma pausa',
        'Percebo, mas termino a tarefa primeiro'
      ]]),
    q('q_doing_8', 8, ['rest_permitted', 'rest_earned', 'rest_guilt', 'rest_crash'],
      ['What would you most like your relationship with rest to feel like?', [
        'Much like it does now — steady and unforced',
        'Free, without needing a reason or a reward',
        'Peaceful, without the guilt running in the background',
        'Regular, so I do not keep hitting a wall'
      ]],
      ['¿Cómo te gustaría que se sintiera tu relación con el descanso?', [
        'Más o menos como ahora: estable y sin forzar',
        'Libre, sin necesitar una razón ni un premio',
        'En paz, sin la culpa sonando de fondo',
        'Regular, para no seguir chocando contra la pared'
      ]],
      ['Como você gostaria que fosse sua relação com o descanso?', [
        'Mais ou menos como agora: estável e sem esforço',
        'Livre, sem precisar de motivo nem de recompensa',
        'Tranquila, sem a culpa tocando ao fundo',
        'Regular, para eu não continuar batendo no limite'
      ]])
  ],
  results: {
    rest_earned: r(['friend', 'release'],
      ['Rest as a Reward',
        'Your answers suggest rest is something you let yourself have only after the work is done. The trouble is that the work is rarely ever done. Rest does not have to be a prize for productivity — it is part of what makes a steady, sustainable life possible.',
        [
          'Schedule rest before the list is finished, and notice what the anxious part of you says about it.',
          'Try “Borrow a kinder voice” when you hear “You have not earned this yet.”',
          'Use “Unclench one thing” as a two-minute pause that asks nothing of you.',
          'Consider one small “unproductive” pleasure each week — something done purely because you enjoy it.'
        ]],
      ['El descanso como premio',
        'Tus respuestas sugieren que el descanso es algo que te permites solo cuando terminas el trabajo. El problema es que el trabajo casi nunca termina. El descanso no tiene que ser un premio a la productividad: es parte de lo que hace posible una vida estable y sostenible.',
        [
          'Agenda el descanso antes de terminar la lista y observa qué dice de eso tu parte ansiosa.',
          'Prueba “Prestar una voz más comprensiva” cuando escuches “Todavía no te lo has ganado”.',
          'Usa “Soltar un solo punto” como una pausa de dos minutos que no te exige nada.',
          'Regálate un placer “improductivo” cada semana: algo que hagas solo porque lo disfrutas.'
        ]],
      ['O descanso como prêmio',
        'Suas respostas sugerem que o descanso é algo que você só se permite depois de terminar o trabalho. O problema é que o trabalho quase nunca termina. Descansar não precisa ser um prêmio pela produtividade: é parte do que torna uma vida estável e sustentável possível.',
        [
          'Marque o descanso antes de terminar a lista e observe o que sua parte ansiosa diz sobre isso.',
          'Experimente “Adotar uma voz mais compreensiva” quando ouvir “Você ainda não mereceu”.',
          'Use “Soltar um ponto de tensão” como uma pausa de dois minutos que não exige nada de você.',
          'Permita-se um prazer “improdutivo” por semana: algo feito só porque você gosta.'
        ]]),
    rest_guilt: r(['kindly', 'name'],
      ['Rest with Guilt Running in the Background',
        'Your answers suggest you do rest — but guilt often comes along, whispering that you should be doing something else. That background hum can keep your body from fully settling. The rest is real; the aim is to let it land.',
        [
          'When guilt shows up during rest, try “Name what is here”: “There is guilt. I am resting anyway.”',
          'Use “The three-part kindness pause” to remind yourself that needing rest is part of being human.',
          'Put your phone and to-do list out of sight during rest, so they cannot tug at you.',
          'Try a short phrase you can return to, such as “This counts. I am allowed.”'
        ]],
      ['Descansar con la culpa de fondo',
        'Tus respuestas sugieren que sí descansas, pero la culpa suele acompañarte, susurrando que deberías estar haciendo otra cosa. Ese murmullo de fondo puede impedir que el cuerpo se relaje del todo. El descanso es real; la idea es dejar que llegue.',
        [
          'Cuando aparezca la culpa mientras descansas, prueba “Nombrar lo que está aquí”: “Hay culpa. Y descanso de todos modos.”',
          'Usa “La pausa de la ternura en tres tiempos” para recordar que necesitar descanso es parte de ser humano.',
          'Deja el teléfono y la lista de pendientes fuera de la vista mientras descansas, para que no te tiren.',
          'Prueba una frase breve a la que puedas volver, como: “Esto cuenta. Tengo permiso.”'
        ]],
      ['Descansar com a culpa ao fundo',
        'Suas respostas sugerem que você até descansa, mas a culpa costuma vir junto, sussurrando que você deveria estar fazendo outra coisa. Esse zumbido de fundo pode impedir o corpo de relaxar por completo. O descanso é real; a ideia é deixá-lo chegar.',
        [
          'Quando a culpa aparecer durante o descanso, experimente “Nomear o que está presente”: “Tem culpa aqui. E eu descanso mesmo assim.”',
          'Use “A pausa da gentileza em três passos” para lembrar que precisar de descanso faz parte de ser humano.',
          'Deixe o celular e a lista de tarefas fora de vista enquanto descansa, para que não fiquem te puxando.',
          'Experimente uma frase curta para retomar, como: “Isto conta. Eu tenho permissão.”'
        ]]),
    rest_crash: r(['release', 'next', 'weather'],
      ['Rest That Only Comes When You Crash',
        'Your answers suggest a push-and-crash rhythm: going hard until your body makes you stop. Crashes can feel like the only permission you get. Gentle, regular pauses — taken before you are empty — can help you avoid hitting the wall so often.',
        [
          'Use the “Emotional weather report” once a day to catch early signs of depletion.',
          'Try “Unclench one thing” at set times, whether or not you feel you need it.',
          'Use “The next workable thing” to lighten your load in the busy weeks, not just after them.',
          'If crashes include ongoing exhaustion, illness, or low mood, please check in with a doctor or counselor.'
        ]],
      ['Descanso que solo llega con el derrumbe',
        'Tus respuestas sugieren un ritmo de empujar y derrumbarte: seguir a toda máquina hasta que el cuerpo te obliga a parar. El derrumbe puede sentirse como el único permiso que tienes. Pausas suaves y regulares, tomadas antes de quedarte vacío, pueden ayudarte a no chocar tan seguido contra la pared.',
        [
          'Usa el “Informe del clima interior” una vez al día para notar las primeras señales de desgaste.',
          'Prueba “Soltar un solo punto” en horarios fijos, sientas o no que lo necesitas.',
          'Usa “El próximo paso viable” para aligerar la carga durante las semanas intensas, no solo después.',
          'Si los derrumbes incluyen agotamiento persistente, enfermedades o ánimo bajo, consulta con un médico o consejero.'
        ]],
      ['Descanso que só chega quando você desaba',
        'Suas respostas sugerem um ritmo de acelerar e desabar: ir com tudo até o corpo obrigar você a parar. Desabar pode parecer a única permissão que você tem. Pausas gentis e regulares, feitas antes de você se esvaziar, podem ajudar a não bater no limite com tanta frequência.',
        [
          'Use a “Previsão do tempo interior” uma vez por dia para perceber os primeiros sinais de desgaste.',
          'Experimente “Soltar um ponto de tensão” em horários fixos, sentindo ou não que precisa.',
          'Use “O próximo passo possível” para aliviar a carga durante as semanas intensas, não só depois delas.',
          'Se os colapsos incluem exaustão persistente, adoecimento ou humor baixo, procure um médico ou psicólogo.'
        ]]),
    rest_permitted: r(['kindly', 'listen'],
      ['Rest as a Natural Part of Life',
        'Your answers suggest you have a fairly kind relationship with rest — noticing early signs, pausing regularly, and letting “nothing” be enough. That is not always easy in a busy world, and it is worth protecting.',
        [
          'Notice what seasons or situations still push rest aside, and plan gently for them.',
          'Keep “The three-part kindness pause” as an anchor for weeks when old pressures return.',
          'Try “Ask before fixing” when someone close to you is struggling to rest — they may need permission more than advice.',
          'Share what helps you in the Circle; your example may help others loosen their own rules.'
        ]],
      ['El descanso como parte natural de la vida',
        'Tus respuestas sugieren que tienes una relación bastante amable con el descanso: notas las primeras señales, haces pausas con regularidad y permites que “nada” sea suficiente. No siempre es fácil en un mundo apurado, y vale la pena protegerlo.',
        [
          'Observa qué temporadas o situaciones todavía dejan el descanso de lado, y planifica con suavidad para ellas.',
          'Conserva “La pausa de la ternura en tres tiempos” como ancla para las semanas en que vuelven las viejas presiones.',
          'Prueba “Preguntar antes de resolver” cuando alguien cercano no logre descansar: quizá necesite permiso más que consejos.',
          'Comparte en el Círculo lo que te ayuda; tu ejemplo puede ayudar a otros a aflojar sus propias reglas.'
        ]],
      ['O descanso como parte natural da vida',
        'Suas respostas sugerem que você tem uma relação bem gentil com o descanso: percebe os primeiros sinais, faz pausas com regularidade e deixa que “nada” seja suficiente. Isso nem sempre é fácil num mundo apressado, e vale a pena proteger.',
        [
          'Perceba quais épocas ou situações ainda deixam o descanso de lado, e se planeje com carinho para elas.',
          'Mantenha “A pausa da gentileza em três passos” como âncora para as semanas em que as velhas pressões voltam.',
          'Experimente “Perguntar antes de aconselhar” quando alguém próximo não conseguir descansar: talvez precise mais de permissão do que de conselho.',
          'Compartilhe no Círculo o que te ajuda; seu exemplo pode ajudar outras pessoas a afrouxar as próprias regras.'
        ]])
  }
};

// ---------------------------------------------------------------------------
// 10. Caring for others, caring for myself (new)
// ---------------------------------------------------------------------------
const quizCareBalance = {
  id: 'quiz_care_balance',
  slug: 'caring-for-others-and-myself',
  tier_required: 'steady',
  en: {
    title: 'Caring for Others, Caring for Myself',
    subtitle: 'Looking honestly at how care flows out of you — and back in.',
    description: 'Whether you are a parent, partner, friend, professional helper, or family caregiver, care can quietly become a one-way street. This reflection helps you notice where your care is going and what you might need in return. It is not a diagnostic tool. If caregiving has left you exhausted or hopeless for a long stretch, a doctor, counselor, or local caregiver support service can help.'
  },
  es: {
    title: 'Cuidar de otros, cuidar de mí',
    subtitle: 'Mirar con sinceridad cómo sale de ti el cuidado, y cómo vuelve.',
    description: 'Ya seas madre o padre, pareja, amistad, profesional de la ayuda o cuidador de un familiar, el cuidado puede convertirse sin darnos cuenta en una calle de un solo sentido. Esta reflexión te ayuda a notar hacia dónde va tu cuidado y qué podrías necesitar a cambio. No es una herramienta de diagnóstico. Si cuidar de otros te ha dejado agotado o sin esperanza durante mucho tiempo, un médico, un consejero o un servicio local de apoyo a cuidadores pueden ayudarte.'
  },
  'pt-BR': {
    title: 'Cuidar dos outros, cuidar de mim',
    subtitle: 'Olhando com sinceridade como o cuidado sai de você, e como volta.',
    description: 'Seja você mãe ou pai, parceiro, amigo, profissional de ajuda ou cuidador de um familiar, o cuidado pode virar, sem percebermos, uma via de mão única. Esta reflexão ajuda você a perceber para onde vai o seu cuidado e do que você pode precisar em troca. Não é uma ferramenta de diagnóstico. Se cuidar dos outros te deixou exausto ou sem esperança por muito tempo, um médico, um psicólogo ou um serviço local de apoio a cuidadores podem ajudar.'
  },
  questions: [
    q('q_care_1', 1, ['care_overgiving', 'care_hidden_needs', 'care_receiving', 'care_reciprocal'],
      ['When someone you love needs help, what usually happens to your own plans?', [
        'They disappear — I drop everything, every time',
        'I help, and quietly hope someone notices I am struggling too',
        'I help gladly, but I would never ask for the same in return',
        'I help where I can and say honestly what I cannot do'
      ]],
      ['Cuando alguien que quieres necesita ayuda, ¿qué suele pasar con tus propios planes?', [
        'Desaparecen: lo dejo todo, siempre',
        'Ayudo y en silencio espero que alguien note que yo también estoy mal',
        'Ayudo con gusto, pero nunca pediría lo mismo a cambio',
        'Ayudo en lo que puedo y digo con sinceridad lo que no puedo hacer'
      ]],
      ['Quando alguém que você ama precisa de ajuda, o que costuma acontecer com seus próprios planos?', [
        'Somem: largo tudo, sempre',
        'Ajudo e, em silêncio, espero que alguém perceba que também estou mal',
        'Ajudo com prazer, mas nunca pediria o mesmo em troca',
        'Ajudo no que posso e digo com sinceridade o que não consigo fazer'
      ]]),
    q('q_care_2', 2, ['care_receiving', 'care_reciprocal', 'care_overgiving', 'care_hidden_needs'],
      ['How do you feel when someone offers to take care of you?', [
        'Uncomfortable — I would rather be the one helping',
        'Grateful, and I let them',
        'I do not have time to accept — there is too much to do',
        'Touched, but a little resentful that it took so long'
      ]],
      ['¿Cómo te sientes cuando alguien se ofrece a cuidarte?', [
        'Incómodo: prefiero ser yo quien ayuda',
        'Agradecido, y lo acepto',
        'No tengo tiempo para aceptarlo: hay demasiado por hacer',
        'Conmovido, pero con algo de resentimiento porque tardó tanto'
      ]],
      ['Como você se sente quando alguém se oferece para cuidar de você?', [
        'Desconfortável: prefiro ser quem ajuda',
        'Grato, e deixo a pessoa cuidar',
        'Não tenho tempo para aceitar: há coisa demais para fazer',
        'Tocado, mas com um pouco de ressentimento por ter demorado tanto'
      ]]),
    q('q_care_3', 3, ['care_hidden_needs', 'care_overgiving', 'care_reciprocal', 'care_receiving'],
      ['When you are having a hard time, who knows about it?', [
        'Almost no one — I drop hints, but I rarely say it directly',
        'No one — there is no room, because I am busy caring for everyone else',
        'One or two people I trust, because I tell them',
        'People know, but I steer the conversation back to them'
      ]],
      ['Cuando estás pasando un mal momento, ¿quién lo sabe?', [
        'Casi nadie: doy pistas, pero rara vez lo digo directamente',
        'Nadie: no hay espacio, porque estoy ocupado cuidando a todos los demás',
        'Una o dos personas de confianza, porque se lo cuento',
        'La gente lo sabe, pero vuelvo a llevar la conversación hacia ellos'
      ]],
      ['Quando você está passando por um momento difícil, quem fica sabendo?', [
        'Quase ninguém: dou pistas, mas raramente falo diretamente',
        'Ninguém: não sobra espaço, porque estou ocupado cuidando de todo mundo',
        'Uma ou duas pessoas de confiança, porque eu conto',
        'As pessoas sabem, mas eu levo a conversa de volta para elas'
      ]]),
    q('q_care_4', 4, ['care_reciprocal', 'care_receiving', 'care_hidden_needs', 'care_overgiving'],
      ['Which sentence best describes your closest relationships right now?', [
        'Care flows fairly evenly both ways',
        'I give more than I take, and I prefer it that way',
        'I give a lot, and I wish people would offer more without being asked',
        'I am running on empty from giving'
      ]],
      ['¿Qué frase describe mejor tus relaciones más cercanas en este momento?', [
        'El cuidado fluye de manera bastante pareja en ambos sentidos',
        'Doy más de lo que recibo, y lo prefiero así',
        'Doy mucho, y quisiera que los demás ofrecieran más sin que yo lo pida',
        'Estoy funcionando en reserva de tanto dar'
      ]],
      ['Qual frase descreve melhor suas relações mais próximas agora?', [
        'O cuidado circula de forma bem equilibrada nos dois sentidos',
        'Dou mais do que recebo, e prefiro assim',
        'Dou muito, e queria que as pessoas oferecessem mais sem eu precisar pedir',
        'Estou funcionando na reserva de tanto dar'
      ]]),
    q('q_care_5', 5, ['care_overgiving', 'care_receiving', 'care_reciprocal', 'care_hidden_needs'],
      ['What happens to your body when you have been caring for others for a long stretch?', [
        'Exhaustion, aches, and getting sick more often',
        'I do not notice until someone else points it out',
        'I feel tired, but I know when to take a break',
        'Tension builds, and it often comes out as irritability'
      ]],
      ['¿Qué le pasa a tu cuerpo cuando llevas mucho tiempo cuidando de otros?', [
        'Agotamiento, dolores y me enfermo con más frecuencia',
        'No lo noto hasta que alguien me lo señala',
        'Me canso, pero sé cuándo tomarme una pausa',
        'Se acumula la tensión y a menudo sale como irritabilidad'
      ]],
      ['O que acontece com seu corpo quando você passa muito tempo cuidando dos outros?', [
        'Exaustão, dores e fico doente com mais frequência',
        'Não percebo até alguém me apontar',
        'Fico cansado, mas sei quando fazer uma pausa',
        'A tensão se acumula e muitas vezes sai como irritação'
      ]]),
    q('q_care_6', 6, ['care_hidden_needs', 'care_reciprocal', 'care_overgiving', 'care_receiving'],
      ['Which thought comes up most often?', [
        '“If they really cared, they would notice without me saying anything.”',
        '“I can care for them and still take care of myself.”',
        '“If I stop, everything will fall apart.”',
        '“I do not want to be a bother.”'
      ]],
      ['¿Qué pensamiento aparece con más frecuencia?', [
        '“Si de verdad les importara, lo notarían sin que yo dijera nada.”',
        '“Puedo cuidar de ellos y también de mí.”',
        '“Si paro, todo se viene abajo.”',
        '“No quiero ser una molestia.”'
      ]],
      ['Qual pensamento aparece com mais frequência?', [
        '“Se realmente se importassem, perceberiam sem eu dizer nada.”',
        '“Posso cuidar deles e também de mim.”',
        '“Se eu parar, tudo desmorona.”',
        '“Não quero incomodar.”'
      ]]),
    q('q_care_7', 7, ['care_receiving', 'care_overgiving', 'care_hidden_needs', 'care_reciprocal'],
      ['If someone gave you a free hour of help, what would you most likely do?', [
        'Thank them and quietly give the hour back to someone else',
        'Use it to catch up on caring for others',
        'Feel relieved, but wish I had been asked what I actually needed',
        'Use it for something that restores me'
      ]],
      ['Si alguien te regalara una hora libre de ayuda, ¿qué harías probablemente?', [
        'Agradecerle y, en silencio, regalarle esa hora a otra persona',
        'Usarla para ponerme al día cuidando a los demás',
        'Sentir alivio, pero desear que me hubieran preguntado qué necesitaba de verdad',
        'Usarla en algo que me restaure'
      ]],
      ['Se alguém te desse uma hora livre de ajuda, o que você provavelmente faria?', [
        'Agradeceria e, em silêncio, daria essa hora para outra pessoa',
        'Usaria para colocar em dia o cuidado com os outros',
        'Sentiria alívio, mas queria que tivessem perguntado do que eu realmente precisava',
        'Usaria em algo que me restaura'
      ]]),
    q('q_care_8', 8, ['care_reciprocal', 'care_hidden_needs', 'care_receiving', 'care_overgiving'],
      ['Which invitation feels most important for you right now?', [
        'Keep tending the balance I have found',
        'Say what I need out loud, clearly and kindly',
        'Let someone take care of me, even a little',
        'Put something down before I burn out'
      ]],
      ['¿Qué invitación sientes más importante para ti ahora?', [
        'Seguir cuidando el equilibrio que encontré',
        'Decir en voz alta lo que necesito, con claridad y amabilidad',
        'Dejar que alguien me cuide, aunque sea un poco',
        'Soltar algo antes de quemarme'
      ]],
      ['Qual convite parece mais importante para você agora?', [
        'Continuar cuidando do equilíbrio que encontrei',
        'Dizer em voz alta do que preciso, com clareza e gentileza',
        'Deixar alguém cuidar de mim, nem que seja um pouco',
        'Largar algo antes de me esgotar'
      ]])
  ],
  results: {
    care_overgiving: r(['boundary', 'next', 'release'],
      ['Giving from an Empty Cup',
        'Your answers suggest you have been giving a great deal — often more than you have — and your body and energy may be showing the cost. Your care is real and valuable. It also needs to be sustainable, and that means you belong on your own list of people to care for.',
        [
          'Use “The next workable thing” to choose one caregiving task you could share, pause, or simplify this week.',
          'Practice “A clean boundary sentence” for the next request you do not have capacity for.',
          'Try “Unclench one thing” between caregiving moments to let your body reset.',
          'If you are caring for someone long-term, look into local caregiver support or respite services, and talk with a doctor if exhaustion persists.'
        ]],
      ['Dar desde una taza vacía',
        'Tus respuestas sugieren que has dado muchísimo, a menudo más de lo que tienes, y tu cuerpo y tu energía quizá estén mostrando el costo. Tu cuidado es real y valioso. También necesita ser sostenible, y eso significa que tú también perteneces a tu lista de personas a cuidar.',
        [
          'Usa “El próximo paso viable” para elegir una tarea de cuidado que puedas compartir, pausar o simplificar esta semana.',
          'Practica “Un límite con serenidad” ante el próximo pedido para el que no tengas capacidad.',
          'Prueba “Soltar un solo punto” entre momentos de cuidado para que tu cuerpo se reinicie.',
          'Si cuidas a alguien a largo plazo, busca servicios locales de apoyo o respiro para cuidadores, y consulta con un médico si el agotamiento persiste.'
        ]],
      ['Dando de um copo vazio',
        'Suas respostas sugerem que você tem dado muito, muitas vezes mais do que tem, e seu corpo e sua energia podem estar mostrando o custo. Seu cuidado é real e valioso. Ele também precisa ser sustentável, e isso significa que você também faz parte da sua lista de pessoas a cuidar.',
        [
          'Use “O próximo passo possível” para escolher uma tarefa de cuidado que você possa dividir, pausar ou simplificar nesta semana.',
          'Pratique “Um limite claro e sereno” diante do próximo pedido para o qual você não tenha capacidade.',
          'Experimente “Soltar um ponto de tensão” entre momentos de cuidado para o corpo se reorganizar.',
          'Se você cuida de alguém a longo prazo, procure serviços locais de apoio ou de descanso para cuidadores, e converse com um médico se o esgotamento persistir.'
        ]]),
    care_hidden_needs: r(['name', 'boundary', 'weather'],
      ['Needs That Go Unspoken',
        'Your answers suggest you have real needs that often go unsaid — hoping others will notice, and feeling hurt or resentful when they do not. That hope is very human. But most people, even loving ones, need to be told. Saying it clearly is not selfish; it is a way of letting people care for you well.',
        [
          'Use “Name what is here” to get clear on what you need before you ask.',
          'Use the “Emotional weather report” to notice resentment early — it often points to an unmet need.',
          'Try a simple, direct request: “Could you check in on me this week? It has been hard.”',
          'Practice “A clean boundary sentence” for the times you need to say “I cannot this time — I need rest too.”'
        ]],
      ['Necesidades que no se dicen',
        'Tus respuestas sugieren que tienes necesidades reales que a menudo quedan sin decir: esperas que los demás las noten y te duele o te molesta cuando no lo hacen. Esa esperanza es muy humana. Pero la mayoría de las personas, incluso las que nos quieren, necesitan que se lo digan. Decirlo con claridad no es egoísmo: es una forma de dejar que te cuiden bien.',
        [
          'Usa “Nombrar lo que está aquí” para tener claro qué necesitas antes de pedirlo.',
          'Usa el “Informe del clima interior” para notar pronto el resentimiento: a menudo señala una necesidad no atendida.',
          'Prueba un pedido simple y directo: “¿Podrías preguntarme cómo estoy esta semana? Ha sido difícil.”',
          'Practica “Un límite con serenidad” para las veces en que necesites decir “Esta vez no puedo: yo también necesito descansar”.'
        ]],
      ['Necessidades que não são ditas',
        'Suas respostas sugerem que você tem necessidades reais que muitas vezes ficam sem ser ditas: você espera que os outros percebam e se magoa ou se ressente quando isso não acontece. Essa esperança é muito humana. Mas a maioria das pessoas, mesmo as que nos amam, precisa ouvir. Dizer com clareza não é egoísmo; é uma forma de deixar que cuidem bem de você.',
        [
          'Use “Nomear o que está presente” para ter clareza do que você precisa antes de pedir.',
          'Use a “Previsão do tempo interior” para perceber o ressentimento cedo: ele muitas vezes aponta para uma necessidade não atendida.',
          'Experimente um pedido simples e direto: “Você pode me perguntar como estou nesta semana? Tem sido difícil.”',
          'Pratique “Um limite claro e sereno” para as vezes em que precisar dizer “Desta vez não consigo: eu também preciso descansar”.'
        ]]),
    care_receiving: r(['kindly', 'friend'],
      ['Learning to Let Care In',
        'Your answers suggest giving care comes naturally to you, but receiving it feels uncomfortable — like being a bother, or losing your footing as the helper. Letting others care for you is not weakness. It gives them the same gift you so often give.',
        [
          'The next time someone offers help, practice simply saying, “Thank you — yes.”',
          'Use “The three-part kindness pause” to remind yourself that everyone needs care sometimes.',
          'Try “Borrow a kinder voice”: what would you tell a friend who never let anyone help them?',
          'Start small — accept a coffee, a ride, or a listening ear, and notice how it feels.'
        ]],
      ['Aprender a dejar entrar el cuidado',
        'Tus respuestas sugieren que dar cuidado te sale con naturalidad, pero recibirlo te incomoda, como si fueras una molestia o perdieras tu lugar de quien ayuda. Dejar que otros te cuiden no es debilidad. Es darles el mismo regalo que tú das tan a menudo.',
        [
          'La próxima vez que alguien te ofrezca ayuda, practica decir simplemente: “Gracias, sí.”',
          'Usa “La pausa de la ternura en tres tiempos” para recordarte que todos necesitamos cuidado a veces.',
          'Prueba “Prestar una voz más comprensiva”: ¿qué le dirías a una amistad que nunca deja que nadie la ayude?',
          'Empieza por algo pequeño: acepta un café, que te lleven a algún lugar o que te escuchen, y observa cómo se siente.'
        ]],
      ['Aprendendo a deixar o cuidado entrar',
        'Suas respostas sugerem que cuidar vem naturalmente para você, mas receber cuidado incomoda, como se você fosse um incômodo ou perdesse seu lugar de quem ajuda. Deixar os outros cuidarem de você não é fraqueza. É oferecer a eles o mesmo presente que você oferece com tanta frequência.',
        [
          'Da próxima vez que alguém oferecer ajuda, pratique dizer simplesmente: “Obrigado, sim.”',
          'Use “A pausa da gentileza em três passos” para lembrar que todo mundo precisa de cuidado às vezes.',
          'Experimente “Adotar uma voz mais compreensiva”: o que você diria a um amigo que nunca deixa ninguém ajudá-lo?',
          'Comece pequeno: aceite um café, uma carona ou alguém que te escute, e perceba como é.'
        ]]),
    care_reciprocal: r(['listen', 'kindly'],
      ['Care That Flows Both Ways',
        'Your answers suggest you have found a healthy rhythm of giving and receiving — helping where you can, saying honestly what you cannot, and letting others support you too. That balance takes ongoing attention, especially when life gets demanding.',
        [
          'Notice early signs that the balance is tipping — tiredness, resentment, or going quiet.',
          'Keep practicing “Ask before fixing,” so your care stays responsive rather than automatic.',
          'Use “The three-part kindness pause” during demanding seasons, when giving naturally increases.',
          'Consider sharing what has helped you in the Circle — others may be looking for exactly this.'
        ]],
      ['Un cuidado que va y viene',
        'Tus respuestas sugieren que encontraste un ritmo sano entre dar y recibir: ayudas donde puedes, dices con sinceridad lo que no puedes y dejas que otros también te apoyen. Ese equilibrio requiere atención constante, sobre todo cuando la vida se vuelve exigente.',
        [
          'Observa las primeras señales de que el equilibrio se inclina: cansancio, resentimiento o quedarte en silencio.',
          'Sigue practicando “Preguntar antes de resolver”, para que tu cuidado siga siendo atento y no automático.',
          'Usa “La pausa de la ternura en tres tiempos” en las temporadas exigentes, cuando dar aumenta de forma natural.',
          'Considera compartir en el Círculo lo que te ha ayudado; otras personas pueden estar buscando justo eso.'
        ]],
      ['Um cuidado que vai e volta',
        'Suas respostas sugerem que você encontrou um ritmo saudável entre dar e receber: ajuda onde pode, diz com sinceridade o que não consegue e deixa que os outros também te apoiem. Esse equilíbrio pede atenção contínua, principalmente quando a vida fica exigente.',
        [
          'Perceba os primeiros sinais de que o equilíbrio está pendendo: cansaço, ressentimento ou se calar.',
          'Continue praticando “Perguntar antes de aconselhar”, para que seu cuidado siga atento e não automático.',
          'Use “A pausa da gentileza em três passos” nas épocas exigentes, quando o dar naturalmente aumenta.',
          'Considere compartilhar no Círculo o que te ajudou; outras pessoas podem estar procurando exatamente isso.'
        ]])
  }
};

// ---------------------------------------------------------------------------
export const QUIZZES = [
  quizRest,
  quizCompassion,
  quizStress,
  quizGrounding,
  quizHabits,
  quizBoundaries,
  quizSupport,
  quizConflict,
  quizRestProductivity,
  quizCareBalance
];
