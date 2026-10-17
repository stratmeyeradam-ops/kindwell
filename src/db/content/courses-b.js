// src/db/content/courses-b.js
// KindWell courses (batch B): Spiritual Reflection, Supporting Others, Personality Patterns.
// Shape matches the `courses` array in src/db/seed.js ("6. Seed Courses").
// Educational and reflective only. Not clinical care.

export const COURSES_B = [];

// ---------------------------------------------------------------------------
// 1. Spiritual Reflection & Contemplative Support (existing course, expanded)
// ---------------------------------------------------------------------------
const courseSpiritual = {
  id: 'course_spiritual',
  slug: 'spiritual-reflection-contemplative-support',
  is_premium: 1,
  level: 'All levels',
  hours: 4.0,
  en: {
    title: 'Spiritual Reflection & Contemplative Support',
    subtitle: 'Presence, listening, meaning-making, and deep ethical care across beliefs.',
    description: 'Draw on contemplative practices from many traditions, and from none, to build a rhythm of quiet, sit honestly with questions of meaning and loss, and learn the careful craft of companioning others through life’s deep seasons without imposing your own beliefs.',
    outcomes: JSON.stringify(['Establish a repeatable daily rhythm of silence or reflection that fits your beliefs', 'Hold questions of meaning, doubt, and grief without rushing to answers', 'Offer quiet, consent-based, non-judgmental presence to friends and family', 'Recognize the limits of a non-clinical role and know when to refer'])
  },
  es: {
    title: 'Reflexión espiritual y acompañamiento contemplativo',
    subtitle: 'Presencia, escucha profunda y cuidado ético en las distintas etapas de la vida.',
    description: 'Inspírate en prácticas contemplativas de muchas tradiciones, y también en caminos no religiosos, para crear un ritmo de silencio, acoger con honestidad las preguntas sobre el sentido y la pérdida, y aprender el arte cuidadoso de acompañar a otras personas sin imponer tus propias creencias.',
    outcomes: JSON.stringify(['Establecer un momento diario de silencio o reflexión acorde con tus creencias', 'Sostener preguntas sobre el sentido, la duda y el duelo sin apresurar respuestas', 'Ofrecer una presencia comprensiva, respetuosa y basada en el consentimiento', 'Reconocer los límites de un rol no clínico y saber cuándo derivar'])
  },
  'pt-BR': {
    title: 'Reflexão espiritual e cuidado contemplativo',
    subtitle: 'Presença, escuta acolhedora e sentido para a caminhada.',
    description: 'Inspire-se em práticas contemplativas de muitas tradições, e também em caminhos não religiosos, para criar um ritmo de quietude, acolher com honestidade as perguntas sobre sentido e perda, e aprender a arte cuidadosa de acompanhar outras pessoas sem impor as suas próprias crenças.',
    outcomes: JSON.stringify(['Criar um ritmo diário de silêncio ou reflexão que combine com as suas crenças', 'Sustentar perguntas sobre sentido, dúvida e luto sem pressa por respostas', 'Acolher amigos e familiares com presença respeitosa e baseada em consentimento', 'Reconhecer os limites de um papel não clínico e saber quando encaminhar'])
  },
  modules: []
};
COURSES_B.push(courseSpiritual);

courseSpiritual.modules.push({
  id: 'mod_spir_1',
  slug: 'the-sacred-pause',
  sort: 1,
  en: { title: 'The Sacred Pause: Silence & Breath', description: 'Entering a quiet place where stillness can become prayer, meditation, or simple rest, whatever your beliefs.' },
  es: { title: 'La pausa sagrada: Silencio y aliento', description: 'Entrar en un refugio tranquilo donde la quietud puede volverse oración, meditación o simple descanso, sean cuales sean tus creencias.' },
  'pt-BR': { title: 'A pausa sagrada: Silêncio e respiração', description: 'Entrando em um refúgio tranquilo onde a quietude pode ser oração, meditação ou simples descanso, sejam quais forem as suas crenças.' },
  lessons: [
    {
      id: 'les_spir_1',
      slug: 'the-tradition-of-hesychia',
      duration: 20,
      sort: 1,
      en: {
        title: 'The Practice of Stillness and Gentle Arrival',
        content: `### Welcome, whatever you believe

This course is for people of faith, people between faiths, people who describe themselves as spiritual but not religious, and people who hold no religious belief at all. You will not be asked to adopt anyone’s theology, including ours. Throughout the course, use whatever words fit you: God, the sacred, the divine, nature, love, life, or simply "what matters most."

### An old and widely shared practice

Across centuries and cultures, people have found that something important happens when we stop striving for a moment and become still. Early Christian monastics in the Eastern tradition called this *hesychia*, a word for inner stillness or quiet. Zen practitioners sit in *zazen*. Quaker meetings gather in expectant silence. Jewish tradition keeps the Sabbath as a sanctuary in time. Many Muslims describe the pause before prayer as a gathering of the heart. Secular mindfulness teachers invite simple, non-judging attention to the present moment.

These practices differ in their meaning and purpose, and it is worth respecting those differences rather than blending them into one. What they share is a recognition that peace is rarely found in frantic effort. It is more often met when we loosen our grip and let ourselves arrive where we already are.

### Arrival before anything else

Many of us come to quiet already tired, distracted, or tense. That is normal. Stillness is not a performance, and there is no way to fail at it. If your mind wanders a hundred times, you have simply had a hundred chances to come back.

Gentle arrival means letting your body land first. Feel the weight of your body on the chair or floor. Let your shoulders drop a little. Notice the room around you. Only then, if you wish, turn toward prayer, meditation, or rest.

### Practice: five minutes of arrival

- Find a place where you are unlikely to be interrupted for five minutes. Set a gentle timer.
- Sit or lie in a way that feels supported. Let your eyes close or soften your gaze toward the floor.
- Notice three points of contact between your body and the surface beneath you.
- If you have a sacred word, name, or short phrase, you may repeat it slowly. If not, simply rest your attention on the sensation of sitting.
- When thoughts arrive, notice them kindly and return to your body or your word.
- When the timer sounds, pause before moving. Notice one thing that is different, even slightly.

If stillness brings up distress rather than rest, open your eyes, move your body, and look around the room. You can always return another day, or try the practice with a trusted person nearby.`,
        prompt: 'What happens in your body when you allow yourself five minutes of completely quiet rest? What words, if any, feel right for naming what you turn toward in stillness?'
      },
      es: {
        title: 'La práctica del silencio y el descanso interior',
        content: `### Bienvenida, sea cual sea tu creencia

Este curso es para personas de fe, para quienes están entre una tradición y otra, para quienes se consideran espirituales pero no religiosas y para quienes no tienen ninguna creencia religiosa. No se te pedirá adoptar ninguna teología, tampoco la nuestra. A lo largo del curso, usa las palabras que te resulten propias: Dios, lo sagrado, lo divino, la naturaleza, el amor, la vida o simplemente "lo que más importa".

### Una práctica antigua y compartida

A lo largo de los siglos y en muchas culturas, las personas han descubierto que algo importante sucede cuando dejamos de esforzarnos por un momento y nos quedamos en calma. Los primeros monjes cristianos de la tradición oriental llamaron a esto *hesychia*, una palabra para la quietud interior. En el zen se practica *zazen*, la meditación sentada. Las reuniones cuáqueras se congregan en un silencio atento. La tradición judía guarda el Shabat como un santuario en el tiempo. Muchas personas musulmanas describen la pausa antes de la oración como un recogimiento del corazón. Los maestros de mindfulness laico invitan a una atención sencilla y sin juicio al momento presente.

Estas prácticas tienen significados y propósitos distintos, y vale la pena respetar esas diferencias en lugar de mezclarlas en una sola. Lo que comparten es el reconocimiento de que la paz rara vez llega con el esfuerzo frenético. Se encuentra más a menudo cuando aflojamos el control y nos permitimos llegar a donde ya estamos.

### Llegar antes que nada

Muchas veces llegamos al silencio cansados, distraídos o tensos. Es completamente normal. La quietud no es una actuación y no hay forma de hacerlo mal. Si tu mente se distrae cien veces, simplemente has tenido cien oportunidades de volver.

Llegar con suavidad significa dejar que el cuerpo aterrice primero. Siente el peso de tu cuerpo sobre la silla o el suelo. Deja que los hombros bajen un poco. Observa el espacio a tu alrededor. Solo entonces, si lo deseas, dirígete a la oración, la meditación o el descanso.

### Práctica: cinco minutos para llegar

- Busca un lugar donde nadie te interrumpa durante cinco minutos. Programa un temporizador suave.
- Siéntate o recuéstate en una postura que te sostenga. Cierra los ojos o baja la mirada hacia el suelo.
- Nota tres puntos de contacto entre tu cuerpo y la superficie que te sostiene.
- Si tienes una palabra, un nombre o una frase sagrada, puedes repetirla despacio. Si no, deja que tu atención descanse en la sensación de estar sentado.
- Cuando lleguen pensamientos, obsérvalos con amabilidad y vuelve a tu cuerpo o a tu palabra.
- Cuando suene el temporizador, haz una pausa antes de moverte. Nota una cosa que haya cambiado, aunque sea levemente.

Si el silencio te trae angustia en lugar de descanso, abre los ojos, mueve el cuerpo y mira a tu alrededor. Siempre puedes volver otro día o intentar la práctica con una persona de confianza cerca.`,
        prompt: '¿Qué experimenta tu cuerpo cuando le regalas cinco minutos de silencio absoluto? ¿Qué palabras, si alguna, sientes adecuadas para nombrar aquello hacia lo que te diriges en la quietud?'
      },
      'pt-BR': {
        title: 'A prática da quietude e o descanso da alma',
        content: `### Boas-vindas, seja qual for a sua crença

Este curso é para pessoas de fé, para quem está entre tradições, para quem se considera espiritualizado mas não religioso e para quem não tem nenhuma crença religiosa. Você não será convidado a adotar nenhuma teologia, nem mesmo a nossa. Ao longo do curso, use as palavras que fizerem sentido para você: Deus, o sagrado, o divino, a natureza, o amor, a vida ou simplesmente "aquilo que mais importa".

### Uma prática antiga e compartilhada

Ao longo dos séculos e em muitas culturas, as pessoas perceberam que algo importante acontece quando paramos de nos esforçar por um momento e ficamos quietos. Os primeiros monges cristãos da tradição oriental chamaram isso de *hesychia*, uma palavra para quietude interior. No zen, pratica-se o *zazen*, a meditação sentada. As reuniões quacres se reúnem em um silêncio atento. A tradição judaica guarda o Shabat como um santuário no tempo. Muitos muçulmanos descrevem a pausa antes da oração como um recolhimento do coração. Professores de mindfulness laico convidam a uma atenção simples e sem julgamento ao momento presente.

Essas práticas têm significados e propósitos diferentes, e vale a pena respeitar essas diferenças em vez de misturá-las em uma só. O que elas compartilham é o reconhecimento de que a paz raramente chega pelo esforço frenético. Ela costuma aparecer quando afrouxamos o controle e nos permitimos chegar onde já estamos.

### Chegar antes de tudo

Muitas vezes chegamos ao silêncio cansados, distraídos ou tensos. Isso é normal. A quietude não é uma apresentação e não existe jeito de errar. Se a sua mente se distrair cem vezes, você simplesmente teve cem oportunidades de voltar.

Chegar com gentileza significa deixar o corpo pousar primeiro. Sinta o peso do corpo na cadeira ou no chão. Deixe os ombros descerem um pouco. Observe o ambiente ao seu redor. Só então, se quiser, volte-se para a oração, a meditação ou o descanso.

### Prática: cinco minutos de chegada

- Encontre um lugar onde ninguém vá interromper você por cinco minutos. Programe um alarme suave.
- Sente-se ou deite-se em uma posição que ofereça apoio. Feche os olhos ou suavize o olhar em direção ao chão.
- Perceba três pontos de contato entre o seu corpo e a superfície que o sustenta.
- Se você tem uma palavra, um nome ou uma frase sagrada, pode repeti-la devagar. Se não, deixe a atenção descansar na sensação de estar sentado.
- Quando os pensamentos chegarem, observe-os com gentileza e volte para o corpo ou para a sua palavra.
- Quando o alarme tocar, faça uma pausa antes de se mexer. Perceba uma coisa que mudou, mesmo que pouco.

Se o silêncio trouxer angústia em vez de descanso, abra os olhos, movimente o corpo e olhe ao redor. Você sempre pode voltar outro dia ou experimentar a prática com uma pessoa de confiança por perto.`,
        prompt: 'O que o seu corpo sente quando você se permite cinco minutos de silêncio e repouso? Que palavras, se houver alguma, parecem certas para nomear aquilo para o qual você se volta na quietude?'
      }
    },
    {
      id: 'les_spir_2',
      slug: 'breath-as-an-anchor',
      duration: 20,
      sort: 2,
      en: {
        title: 'Breath as an Anchor',
        content: `### The breath is always with you

Breath is one of the few things that is both automatic and responsive to our attention. It keeps going whether we notice it or not, yet it often softens and slows when we turn toward it with care. That quality has made breath a natural anchor for contemplative practice in many places.

Several traditions link breath and spirit in their very language. The Hebrew *ruach* and the Greek *pneuma* can mean breath, wind, or spirit. In Sanskrit, *prana* refers to breath and life energy. Many prayer practices, from the Jesus Prayer to repeated names of God in Sufi *dhikr*, have been paired with the rhythm of breathing. Buddhist teaching includes mindfulness of breathing as a foundational practice. For people without a religious frame, the breath can simply be a steady, bodily reminder that you are alive and here.

### Attention, not control

A common misunderstanding is that contemplative breathing means breathing "correctly." In most traditions, the invitation is gentler: notice the breath as it is. You might feel it at the nostrils, in the chest, or in the belly. You might notice it is shallow, quick, or uneven. None of this is wrong.

If you choose to slow the breath, keep it comfortable. A slightly longer exhale than inhale is often experienced as calming. Avoid forcing deep breaths, holding your breath for long periods, or anything that makes you dizzy. If you live with a respiratory or heart condition, or if focusing on breath increases anxiety, you can use another anchor instead, such as the feeling of your feet on the floor or the sounds around you.

### Pairing breath with a word

Some people find it helpful to pair the breath with a short phrase. This could be sacred language from your tradition, a line of poetry, or two simple words such as "here" on the in-breath and "now" on the out-breath. The phrase is not a spell or a test. It is a thread that helps attention return when it drifts.

### Practice: breath and phrase

- Sit comfortably and take a few natural breaths without changing anything.
- Notice where you feel the breath most clearly. Rest your attention there.
- Choose a short phrase with two parts, one for breathing in and one for breathing out. Examples: "Held / and loved," "Peace / be with me," "Here / now," or a phrase from your own tradition.
- Continue for three to ten minutes, returning to the breath and phrase whenever you notice your mind has wandered.
- Close by letting go of the phrase and breathing naturally for a few moments.

Keep a note of which phrases feel steadying and which feel empty. Your anchor can change over time, and that is part of the practice.`,
        prompt: 'Where in your body do you feel your breath most clearly today? Which short phrase, sacred or simple, might you pair with it, and why does that phrase matter to you?'
      },
      es: {
        title: 'El aliento como ancla',
        content: `### El aliento siempre te acompaña

La respiración es una de las pocas cosas que es a la vez automática y sensible a nuestra atención. Sigue su curso aunque no la notemos, pero a menudo se suaviza y se hace más lenta cuando la miramos con cuidado. Esa cualidad ha convertido al aliento en un ancla natural para la práctica contemplativa en muchos lugares.

Varias tradiciones vinculan aliento y espíritu en su propio idioma. El hebreo *ruaj* y el griego *pneuma* pueden significar aliento, viento o espíritu. En sánscrito, *prana* se refiere a la respiración y a la energía vital. Muchas prácticas de oración, desde la Oración de Jesús hasta la repetición de los nombres de Dios en el *dhikr* sufí, se han acompañado del ritmo de la respiración. La enseñanza budista incluye la atención a la respiración como práctica fundamental. Para quienes no tienen un marco religioso, el aliento puede ser simplemente un recordatorio corporal y constante de que estás vivo y presente.

### Atención, no control

Un malentendido frecuente es pensar que la respiración contemplativa consiste en respirar "correctamente". En la mayoría de las tradiciones, la invitación es más amable: observar el aliento tal como es. Tal vez lo sientas en la nariz, en el pecho o en el abdomen. Tal vez notes que es superficial, rápido o irregular. Nada de eso está mal.

Si decides hacer más lenta la respiración, que sea cómodo. Una exhalación un poco más larga que la inhalación suele sentirse tranquilizadora. Evita forzar respiraciones profundas, retener el aire por mucho tiempo o cualquier cosa que te maree. Si vives con una condición respiratoria o cardíaca, o si concentrarte en la respiración aumenta tu ansiedad, puedes usar otra ancla, como la sensación de los pies en el suelo o los sonidos a tu alrededor.

### Unir el aliento con una palabra

A algunas personas les ayuda acompañar la respiración con una frase breve. Puede ser un lenguaje sagrado de tu tradición, un verso de poesía o dos palabras sencillas como "aquí" al inhalar y "ahora" al exhalar. La frase no es un conjuro ni una prueba. Es un hilo que ayuda a que la atención regrese cuando se dispersa.

### Práctica: aliento y frase

- Siéntate con comodidad y respira con naturalidad unas cuantas veces sin cambiar nada.
- Nota dónde sientes la respiración con más claridad. Deja que tu atención descanse ahí.
- Elige una frase corta con dos partes, una para inhalar y otra para exhalar. Por ejemplo: "Sostenido / y amado", "Paz / conmigo", "Aquí / ahora" o una frase de tu propia tradición.
- Continúa entre tres y diez minutos, regresando al aliento y a la frase cada vez que notes que tu mente se fue.
- Termina soltando la frase y respirando con naturalidad unos momentos.

Anota qué frases te dan estabilidad y cuáles se sienten vacías. Tu ancla puede cambiar con el tiempo, y eso también forma parte de la práctica.`,
        prompt: '¿En qué parte de tu cuerpo sientes hoy la respiración con más claridad? ¿Qué frase breve, sagrada o sencilla, podrías unir a ella y por qué es importante para ti?'
      },
      'pt-BR': {
        title: 'A respiração como âncora',
        content: `### A respiração está sempre com você

A respiração é uma das poucas coisas que são ao mesmo tempo automáticas e sensíveis à nossa atenção. Ela continua mesmo quando não a percebemos, mas muitas vezes se suaviza e desacelera quando olhamos para ela com cuidado. Essa qualidade fez da respiração uma âncora natural para a prática contemplativa em muitos lugares.

Várias tradições ligam respiração e espírito na própria língua. O hebraico *ruach* e o grego *pneuma* podem significar sopro, vento ou espírito. Em sânscrito, *prana* se refere à respiração e à energia vital. Muitas práticas de oração, da Oração de Jesus à repetição dos nomes de Deus no *dhikr* sufi, foram associadas ao ritmo da respiração. O ensinamento budista inclui a atenção à respiração como prática fundamental. Para quem não tem um referencial religioso, a respiração pode ser simplesmente um lembrete corporal e constante de que você está vivo e presente.

### Atenção, não controle

Um mal-entendido comum é achar que a respiração contemplativa significa respirar "do jeito certo". Na maioria das tradições, o convite é mais gentil: perceber a respiração como ela é. Talvez você a sinta nas narinas, no peito ou na barriga. Talvez perceba que está curta, rápida ou irregular. Nada disso está errado.

Se escolher desacelerar a respiração, faça isso com conforto. Uma expiração um pouco mais longa que a inspiração costuma ser sentida como tranquilizadora. Evite forçar respirações profundas, prender o ar por muito tempo ou qualquer coisa que cause tontura. Se você convive com alguma condição respiratória ou cardíaca, ou se focar na respiração aumenta a ansiedade, pode usar outra âncora, como a sensação dos pés no chão ou os sons ao redor.

### Unindo respiração e palavra

Algumas pessoas acham útil acompanhar a respiração com uma frase curta. Pode ser uma linguagem sagrada da sua tradição, um verso de poesia ou duas palavras simples, como "aqui" ao inspirar e "agora" ao expirar. A frase não é um feitiço nem um teste. É um fio que ajuda a atenção a voltar quando ela se dispersa.

### Prática: respiração e frase

- Sente-se com conforto e respire naturalmente algumas vezes, sem mudar nada.
- Perceba onde você sente a respiração com mais clareza. Deixe a atenção descansar ali.
- Escolha uma frase curta com duas partes, uma para inspirar e outra para expirar. Exemplos: "Sustentado / e amado", "Paz / comigo", "Aqui / agora" ou uma frase da sua própria tradição.
- Continue de três a dez minutos, voltando à respiração e à frase sempre que perceber que a mente se distraiu.
- Termine soltando a frase e respirando naturalmente por alguns instantes.

Anote quais frases trazem estabilidade e quais parecem vazias. A sua âncora pode mudar com o tempo, e isso também faz parte da prática.`,
        prompt: 'Em que parte do corpo você sente a respiração com mais clareza hoje? Que frase curta, sagrada ou simples, você poderia unir a ela, e por que essa frase importa para você?'
      }
    },
    {
      id: 'les_spir_3',
      slug: 'a-daily-rhythm-of-quiet',
      duration: 20,
      sort: 3,
      en: {
        title: 'Building a Daily Rhythm of Quiet',
        content: `### Rhythm over intensity

Many contemplative communities organize life around a rhythm rather than occasional peak experiences. Monastic communities pray at set hours. Observant Muslims pray at intervals through the day. Many Jewish and Christian households mark mornings and evenings with short prayers or blessings. Secular practitioners might keep a morning journal or an evening walk. The shared insight is that small, repeated moments shape a life more reliably than rare, dramatic ones.

A daily rhythm of quiet does not need to be long. Five honest minutes, kept most days, can matter more than an hour you dread and avoid.

### Designing a rhythm that fits your real life

A rhythm that ignores your circumstances will not last. Caregivers, shift workers, parents of young children, and people living with illness or pain all need rhythms that bend. Consider:

- **When** you are most likely to have a few undisturbed minutes. For some, this is before others wake; for others, it is in the car before walking into work, or right before sleep.
- **Where** you can anchor the practice. A particular chair, a window, a candle, a prayer mat, or a spot in a park can act as a quiet cue.
- **What** the practice will be. Silence, a written prayer, a sacred text, a breath phrase, a gratitude list, or a few lines of journaling.
- **How** you will return after missing days. Plan for this in advance so a gap does not turn into giving up.

### Bookends and small doorways

One simple structure is to use bookends: a brief practice to begin the day and another to close it. In the morning, you might set an intention or offer a short prayer. In the evening, you might review the day gently, noticing moments of gratitude, moments you fell short, and anything you want to set down before sleep. Some traditions call this kind of evening review an examen; many people practice something similar without any religious framing.

Between the bookends, look for small doorways: the pause before a meal, the moment you wash your hands, the few seconds while a kettle boils. Each can become a thirty-second return to presence.

### Practice: sketch your rhythm

- Write down one morning practice of two to ten minutes that you could realistically keep.
- Write down one evening practice of two to ten minutes.
- Choose two small doorways during the day for a thirty-second pause.
- Decide on a kind sentence you will say to yourself when you miss a day, such as "I can begin again now."
- Try this rhythm for one week, then adjust anything that feels forced.

A rule of life is meant to support you, not to become another source of pressure. If the rhythm starts to feel like a test you keep failing, make it smaller.`,
        prompt: 'What is one morning and one evening practice you could keep on most days, even during a hard week? What will you say to yourself on the days you miss it?'
      },
      es: {
        title: 'Crear un ritmo diario de quietud',
        content: `### Ritmo antes que intensidad

Muchas comunidades contemplativas organizan la vida en torno a un ritmo y no a experiencias intensas ocasionales. Las comunidades monásticas rezan en horas fijas. Las personas musulmanas practicantes oran en distintos momentos del día. Muchos hogares judíos y cristianos marcan la mañana y la noche con oraciones o bendiciones breves. Quienes practican desde un enfoque laico pueden llevar un diario matutino o dar un paseo al atardecer. La intuición compartida es que los momentos pequeños y repetidos moldean una vida con más fuerza que los momentos raros y dramáticos.

Un ritmo diario de quietud no necesita ser largo. Cinco minutos sinceros, sostenidos la mayoría de los días, pueden importar más que una hora que temes y terminas evitando.

### Diseñar un ritmo que se ajuste a tu vida real

Un ritmo que ignora tus circunstancias no durará. Quienes cuidan a otras personas, trabajan por turnos, crían a niños pequeños o viven con enfermedad o dolor necesitan ritmos flexibles. Considera:

- **Cuándo** es más probable que tengas unos minutos sin interrupciones. Para algunas personas es antes de que los demás despierten; para otras, en el auto antes de entrar al trabajo o justo antes de dormir.
- **Dónde** puedes anclar la práctica. Una silla, una ventana, una vela, una alfombra de oración o un rincón en un parque pueden funcionar como una señal tranquila.
- **Qué** será la práctica. Silencio, una oración escrita, un texto sagrado, una frase con la respiración, una lista de gratitud o unas líneas en un diario.
- **Cómo** volverás después de los días que faltes. Planéalo con anticipación para que una pausa no se convierta en abandono.

### Extremos del día y pequeñas puertas

Una estructura sencilla es usar dos extremos: una práctica breve para comenzar el día y otra para cerrarlo. Por la mañana, puedes fijar una intención u ofrecer una oración corta. Por la noche, puedes repasar el día con suavidad, notando momentos de gratitud, momentos en que no estuviste a la altura y lo que quieres soltar antes de dormir. Algunas tradiciones llaman a este repaso nocturno examen; muchas personas practican algo parecido sin ningún marco religioso.

Entre ambos extremos, busca pequeñas puertas: la pausa antes de comer, el momento de lavarte las manos, los segundos mientras hierve el agua. Cada una puede ser un regreso de treinta segundos a la presencia.

### Práctica: dibuja tu ritmo

- Escribe una práctica matutina de dos a diez minutos que puedas sostener de forma realista.
- Escribe una práctica nocturna de dos a diez minutos.
- Elige dos pequeñas puertas durante el día para una pausa de treinta segundos.
- Decide una frase amable que te dirás cuando faltes un día, como "Puedo empezar de nuevo ahora".
- Prueba este ritmo durante una semana y luego ajusta lo que se sienta forzado.

Una regla de vida existe para sostenerte, no para convertirse en otra fuente de presión. Si el ritmo empieza a sentirse como un examen que repruebas, hazlo más pequeño.`,
        prompt: '¿Qué práctica matutina y qué práctica nocturna podrías sostener la mayoría de los días, incluso en una semana difícil? ¿Qué te dirás los días en que no lo logres?'
      },
      'pt-BR': {
        title: 'Construindo um ritmo diário de quietude',
        content: `### Ritmo antes de intensidade

Muitas comunidades contemplativas organizam a vida em torno de um ritmo, e não de experiências intensas ocasionais. Comunidades monásticas rezam em horários fixos. Muçulmanos praticantes oram em diferentes momentos do dia. Muitos lares judaicos e cristãos marcam a manhã e a noite com orações ou bênçãos curtas. Quem pratica de forma laica pode manter um diário pela manhã ou uma caminhada ao entardecer. A percepção compartilhada é que momentos pequenos e repetidos moldam uma vida com mais consistência do que momentos raros e dramáticos.

Um ritmo diário de quietude não precisa ser longo. Cinco minutos sinceros, mantidos na maioria dos dias, podem valer mais do que uma hora que você teme e acaba evitando.

### Desenhando um ritmo que caiba na vida real

Um ritmo que ignora as suas circunstâncias não vai durar. Quem cuida de outras pessoas, trabalha em turnos, cria filhos pequenos ou convive com doença ou dor precisa de ritmos flexíveis. Considere:

- **Quando** é mais provável ter alguns minutos sem interrupção. Para algumas pessoas, é antes de os outros acordarem; para outras, no carro antes de entrar no trabalho ou logo antes de dormir.
- **Onde** você pode ancorar a prática. Uma cadeira, uma janela, uma vela, um tapete de oração ou um cantinho em uma praça podem funcionar como um sinal tranquilo.
- **O que** será a prática. Silêncio, uma oração escrita, um texto sagrado, uma frase com a respiração, uma lista de gratidão ou algumas linhas em um diário.
- **Como** você vai voltar depois dos dias em que falhar. Planeje isso com antecedência para que uma pausa não vire desistência.

### As pontas do dia e pequenas portas

Uma estrutura simples é usar as duas pontas do dia: uma prática breve para começar e outra para encerrar. De manhã, você pode definir uma intenção ou fazer uma oração curta. À noite, pode rever o dia com gentileza, percebendo momentos de gratidão, momentos em que não agiu como gostaria e o que deseja deixar de lado antes de dormir. Algumas tradições chamam essa revisão noturna de exame; muitas pessoas praticam algo parecido sem nenhum referencial religioso.

Entre as duas pontas, procure pequenas portas: a pausa antes de uma refeição, o momento de lavar as mãos, os segundos enquanto a água ferve. Cada uma pode ser um retorno de trinta segundos à presença.

### Prática: esboce o seu ritmo

- Escreva uma prática matinal de dois a dez minutos que você consiga manter de forma realista.
- Escreva uma prática noturna de dois a dez minutos.
- Escolha duas pequenas portas ao longo do dia para uma pausa de trinta segundos.
- Defina uma frase gentil que você dirá a si mesmo quando falhar um dia, como "Posso recomeçar agora".
- Experimente esse ritmo por uma semana e depois ajuste o que parecer forçado.

Uma regra de vida existe para apoiar você, não para virar mais uma fonte de pressão. Se o ritmo começar a parecer uma prova em que você sempre é reprovado, faça-o menor.`,
        prompt: 'Qual prática matinal e qual prática noturna você conseguiria manter na maioria dos dias, mesmo em uma semana difícil? O que você vai dizer a si mesmo nos dias em que não conseguir?'
      }
    }
  ]
});

courseSpiritual.modules.push({
  id: 'mod_spir_2',
  slug: 'meaning-belief-and-honest-questions',
  sort: 2,
  en: { title: 'Meaning, Belief & Honest Questions', description: 'Exploring what gives life meaning, asking questions that open rather than steer, and making room for doubt and change.' },
  es: { title: 'Sentido, creencias y preguntas sinceras', description: 'Explorar lo que da sentido a la vida, hacer preguntas que abren en lugar de dirigir y dar espacio a la duda y al cambio.' },
  'pt-BR': { title: 'Sentido, crenças e perguntas honestas', description: 'Explorando o que dá sentido à vida, fazendo perguntas que abrem em vez de conduzir e abrindo espaço para a dúvida e a mudança.' },
  lessons: [
    {
      id: 'les_spir_4',
      slug: 'many-paths-to-meaning',
      duration: 20,
      sort: 1,
      en: {
        title: 'Many Paths to Meaning',
        content: `### Meaning is personal and shared

Questions of meaning tend to surface in ordinary and extraordinary moments alike: after a birth or a death, during illness, at the end of a relationship, or on an unremarkable Tuesday when life suddenly feels thin. People answer these questions in very different ways. Some find meaning through relationship with God or the divine, through scripture, prayer, and community. Some find it in nature, art, service, or the sense of belonging to something larger than themselves. Some find it in family, craft, justice, or simply in loving the people in front of them.

None of these paths is presented here as more correct than another. What matters for this course is that meaning is real to the person who holds it, and that it can be explored with honesty and respect.

### Beliefs, values, and practices

It can help to notice three layers of spiritual or meaning-centered life:

- **Beliefs**: what you hold to be true about life, death, the sacred, or the nature of things. These may be clear, uncertain, or changing.
- **Values**: what you care about and want your life to express, such as honesty, compassion, courage, faithfulness, or justice.
- **Practices**: what you actually do, such as prayer, meditation, worship, time in nature, acts of service, or rituals of remembrance.

Sometimes these layers line up comfortably. Sometimes they pull apart. A person may keep attending a place of worship out of love for the community while privately questioning its teachings. Another may hold no religious beliefs yet feel most alive when serving others. Noticing these layers can reduce confusion and self-judgment.

### Sources of meaning in hard seasons

When life is painful, familiar sources of meaning may feel distant. That does not necessarily mean they are gone. Many people describe a quieter kind of meaning in difficult times: caring for one person well, getting through one more day, noticing a small beauty, or keeping faith with a commitment. Meaning does not have to be large to be real.

### Practice: a meaning map

- Draw a small circle in the center of a page and write your name inside it.
- Around it, write the people, places, practices, beliefs, and values that give your life meaning. Include small things.
- Circle the ones that feel strong right now. Mark with a dot the ones that feel distant.
- Choose one distant source and write one small way you might reconnect with it this week.
- Choose one strong source and write a sentence of thanks for it, addressed to whomever or whatever feels right.

If this exercise brings up grief or emptiness, go gently. Noticing that meaning feels distant is itself honest and worth honoring.`,
        prompt: 'Which sources of meaning feel strong in your life right now, and which feel far away? What is one small way you might tend a source that feels distant?'
      },
      es: {
        title: 'Muchos caminos hacia el sentido',
        content: `### El sentido es personal y compartido

Las preguntas sobre el sentido suelen aparecer tanto en momentos ordinarios como extraordinarios: después de un nacimiento o una muerte, durante una enfermedad, al terminar una relación o en un martes cualquiera en que la vida de repente se siente vacía. Las personas responden a estas preguntas de maneras muy distintas. Algunas encuentran sentido en su relación con Dios o lo divino, en las escrituras, la oración y la comunidad. Otras lo encuentran en la naturaleza, el arte, el servicio o la sensación de pertenecer a algo más grande. Otras, en la familia, el oficio, la justicia o simplemente en amar a las personas que tienen enfrente.

Aquí ninguno de estos caminos se presenta como más correcto que otro. Lo importante en este curso es que el sentido es real para quien lo vive y que puede explorarse con honestidad y respeto.

### Creencias, valores y prácticas

Puede ayudar distinguir tres capas de la vida espiritual o centrada en el sentido:

- **Creencias**: lo que consideras verdadero sobre la vida, la muerte, lo sagrado o la naturaleza de las cosas. Pueden ser claras, inciertas o cambiantes.
- **Valores**: lo que te importa y quieres que tu vida exprese, como la honestidad, la compasión, la valentía, la fidelidad o la justicia.
- **Prácticas**: lo que realmente haces, como orar, meditar, participar en un culto, pasar tiempo en la naturaleza, servir a otros o realizar rituales de memoria.

A veces estas capas encajan con comodidad. A veces se separan. Una persona puede seguir asistiendo a su lugar de culto por amor a la comunidad mientras cuestiona en privado sus enseñanzas. Otra puede no tener creencias religiosas y, aun así, sentirse más viva cuando sirve a los demás. Notar estas capas puede reducir la confusión y el juicio hacia uno mismo.

### Fuentes de sentido en temporadas difíciles

Cuando la vida duele, las fuentes habituales de sentido pueden sentirse lejanas. Eso no significa necesariamente que hayan desaparecido. Muchas personas describen un sentido más silencioso en los tiempos difíciles: cuidar bien de una persona, atravesar un día más, notar una pequeña belleza o mantenerse fiel a un compromiso. El sentido no tiene que ser grande para ser real.

### Práctica: un mapa de sentido

- Dibuja un pequeño círculo en el centro de una hoja y escribe tu nombre dentro.
- Alrededor, escribe las personas, lugares, prácticas, creencias y valores que dan sentido a tu vida. Incluye cosas pequeñas.
- Encierra en un círculo las que se sienten fuertes ahora. Marca con un punto las que se sienten lejanas.
- Elige una fuente lejana y escribe una pequeña forma de reconectar con ella esta semana.
- Elige una fuente fuerte y escribe una frase de agradecimiento, dirigida a quien o a lo que sientas adecuado.

Si este ejercicio despierta tristeza o vacío, ve con suavidad. Notar que el sentido se siente lejano ya es un acto honesto que merece respeto.`,
        prompt: '¿Qué fuentes de sentido se sienten fuertes en tu vida ahora y cuáles se sienten lejanas? ¿Qué pequeño gesto podrías tener con una fuente que sientes distante?'
      },
      'pt-BR': {
        title: 'Muitos caminhos para o sentido',
        content: `### O sentido é pessoal e compartilhado

Perguntas sobre sentido costumam surgir tanto em momentos comuns quanto extraordinários: depois de um nascimento ou de uma morte, durante uma doença, no fim de um relacionamento ou em uma terça-feira qualquer em que a vida de repente parece rasa. As pessoas respondem a essas perguntas de maneiras muito diferentes. Algumas encontram sentido na relação com Deus ou com o divino, nas escrituras, na oração e na comunidade. Outras o encontram na natureza, na arte, no serviço ou na sensação de pertencer a algo maior. Outras, na família, no ofício, na justiça ou simplesmente em amar as pessoas à sua frente.

Nenhum desses caminhos é apresentado aqui como mais correto que outro. O que importa neste curso é que o sentido é real para quem o vive e que pode ser explorado com honestidade e respeito.

### Crenças, valores e práticas

Pode ajudar perceber três camadas da vida espiritual ou centrada no sentido:

- **Crenças**: o que você considera verdadeiro sobre a vida, a morte, o sagrado ou a natureza das coisas. Elas podem ser claras, incertas ou estar em mudança.
- **Valores**: aquilo que importa para você e que você deseja que a sua vida expresse, como honestidade, compaixão, coragem, fidelidade ou justiça.
- **Práticas**: o que você de fato faz, como orar, meditar, participar de cultos, passar tempo na natureza, servir aos outros ou realizar rituais de memória.

Às vezes essas camadas se encaixam com conforto. Às vezes se afastam. Uma pessoa pode continuar frequentando a sua comunidade religiosa por amor às pessoas enquanto questiona, em silêncio, os seus ensinamentos. Outra pode não ter crenças religiosas e, ainda assim, sentir-se mais viva quando serve aos outros. Perceber essas camadas pode diminuir a confusão e o autojulgamento.

### Fontes de sentido em fases difíceis

Quando a vida dói, as fontes habituais de sentido podem parecer distantes. Isso não significa necessariamente que desapareceram. Muitas pessoas descrevem um sentido mais silencioso nos tempos difíceis: cuidar bem de uma pessoa, atravessar mais um dia, notar uma pequena beleza ou manter-se fiel a um compromisso. O sentido não precisa ser grande para ser real.

### Prática: um mapa de sentido

- Desenhe um pequeno círculo no centro de uma folha e escreva o seu nome dentro dele.
- Ao redor, escreva as pessoas, lugares, práticas, crenças e valores que dão sentido à sua vida. Inclua coisas pequenas.
- Circule as que parecem fortes agora. Marque com um ponto as que parecem distantes.
- Escolha uma fonte distante e escreva uma pequena forma de se reconectar com ela nesta semana.
- Escolha uma fonte forte e escreva uma frase de gratidão, dirigida a quem ou ao que parecer adequado.

Se este exercício despertar tristeza ou vazio, vá com calma. Perceber que o sentido está distante já é um ato honesto que merece respeito.`,
        prompt: 'Quais fontes de sentido parecem fortes na sua vida agora e quais parecem distantes? Que pequeno gesto você poderia ter com uma fonte que parece longe?'
      }
    },
    {
      id: 'les_spir_5',
      slug: 'questions-that-open',
      duration: 20,
      sort: 2,
      en: {
        title: 'Questions That Open Rather Than Steer',
        content: `### The power of a good question

In contemplative life, questions often matter more than answers. A good question can invite someone, including yourself, to look more deeply without being told what to find. A poor question, even a well-meant one, can quietly steer a person toward the answer the asker prefers.

Consider the difference between "Don’t you think God has a plan for this?" and "What are you making of all this right now?" The first carries an assumption and asks for agreement. The second leaves room for faith, doubt, anger, confusion, or silence.

### Qualities of an opening question

Opening questions tend to be:

- **Open-ended**: they cannot be answered with yes or no. They often begin with "what," "how," or "where."
- **Non-leading**: they do not hint at a preferred answer or assume a belief the person has not expressed.
- **Curious rather than clever**: the goal is understanding, not demonstrating insight.
- **Paced**: one question at a time, followed by enough silence for a real answer to form.
- **Optional**: the person can decline to answer, and that choice is respected.

"Why" questions can be useful but sometimes feel like demands for justification. "What was that like?" is often gentler than "Why did you do that?"

### Asking yourself

These same qualities apply when you reflect privately. Many of us question ourselves in a cross-examining tone: "Why can’t you just trust?" or "What’s wrong with you?" Contemplative questioning invites a kinder, more spacious tone: "What am I longing for right now?" "Where do I sense something sacred, or simply good, in this day?" "What am I afraid to admit, even to myself?"

Some traditions offer questions that have been asked for centuries. Others invite you to discover your own. Either way, you can let a question stay with you for days without forcing it to resolve. Living with a question is a practice in its own right.

### Practice: writing three opening questions

- Think of a theme that matters to you now, such as hope, loss, calling, forgiveness, or belonging.
- Write three questions about it that are open-ended and do not assume a particular belief.
- Read each question aloud and ask: does this leave room for any honest answer, including "I don’t know"?
- Revise any question that nudges toward a specific answer.
- Choose one question to carry with you this week. Return to it in a quiet moment each day and notice what emerges, without pressure to conclude.

Examples to adapt: "What gives you strength when things are hard?" "What do you most want to be true right now?" "Where have you felt most at peace, and what was present there?"`,
        prompt: 'Write three non-leading questions about meaning or hope. Which one would you most like someone to ask you, and why?'
      },
      es: {
        title: 'Preguntas que abren en lugar de dirigir',
        content: `### El poder de una buena pregunta

En la vida contemplativa, las preguntas a menudo importan más que las respuestas. Una buena pregunta puede invitar a alguien, incluso a ti, a mirar más profundo sin que nadie le diga qué debe encontrar. Una pregunta poco cuidadosa, aunque tenga buena intención, puede empujar en silencio a la persona hacia la respuesta que prefiere quien pregunta.

Piensa en la diferencia entre "¿No crees que Dios tiene un plan para esto?" y "¿Qué sentido le estás dando a todo esto ahora?". La primera carga con una suposición y pide acuerdo. La segunda deja espacio para la fe, la duda, el enojo, la confusión o el silencio.

### Cualidades de una pregunta que abre

Las preguntas que abren suelen ser:

- **Abiertas**: no se responden con sí o no. A menudo empiezan con "qué", "cómo" o "dónde".
- **No dirigidas**: no sugieren una respuesta preferida ni suponen una creencia que la persona no ha expresado.
- **Curiosas, no ingeniosas**: el objetivo es comprender, no demostrar sabiduría.
- **Pausadas**: una pregunta a la vez, seguida del silencio suficiente para que se forme una respuesta real.
- **Opcionales**: la persona puede decidir no responder, y esa decisión se respeta.

Las preguntas con "por qué" pueden ser útiles, pero a veces se sienten como una exigencia de justificación. "¿Cómo fue eso para ti?" suele ser más amable que "¿Por qué hiciste eso?".

### Preguntarte a ti

Estas mismas cualidades sirven cuando reflexionas en privado. Muchas personas se interrogan en un tono de acusación: "¿Por qué no puedes simplemente confiar?" o "¿Qué te pasa?". El cuestionamiento contemplativo invita a un tono más amable y amplio: "¿Qué anhelo en este momento?", "¿Dónde percibo algo sagrado, o simplemente bueno, en este día?", "¿Qué me da miedo admitir, incluso ante mí?".

Algunas tradiciones ofrecen preguntas que se han hecho durante siglos. Otras te invitan a descubrir las tuyas. En cualquier caso, puedes dejar que una pregunta te acompañe varios días sin obligarla a resolverse. Vivir con una pregunta es una práctica en sí misma.

### Práctica: escribir tres preguntas que abren

- Piensa en un tema que te importe ahora, como la esperanza, la pérdida, la vocación, el perdón o la pertenencia.
- Escribe tres preguntas sobre ese tema que sean abiertas y no supongan una creencia concreta.
- Lee cada pregunta en voz alta y pregúntate: ¿deja espacio para cualquier respuesta sincera, incluso "no lo sé"?
- Reescribe cualquier pregunta que empuje hacia una respuesta específica.
- Elige una pregunta para llevar contigo esta semana. Vuelve a ella en un momento tranquilo cada día y observa lo que surge, sin presión por concluir.

Ejemplos para adaptar: "¿Qué te da fuerza cuando las cosas son difíciles?", "¿Qué te gustaría que fuera verdad en este momento?", "¿Dónde has sentido más paz y qué estaba presente ahí?".`,
        prompt: 'Escribe tres preguntas no dirigidas sobre el sentido o la esperanza. ¿Cuál te gustaría que alguien te hiciera a ti y por qué?'
      },
      'pt-BR': {
        title: 'Perguntas que abrem em vez de conduzir',
        content: `### O poder de uma boa pergunta

Na vida contemplativa, as perguntas muitas vezes importam mais do que as respostas. Uma boa pergunta pode convidar alguém, inclusive você, a olhar mais fundo sem que ninguém diga o que deve ser encontrado. Uma pergunta descuidada, mesmo bem-intencionada, pode empurrar a pessoa silenciosamente para a resposta que quem pergunta prefere.

Pense na diferença entre "Você não acha que Deus tem um plano para isso?" e "Como você está entendendo tudo isso agora?". A primeira carrega uma suposição e pede concordância. A segunda deixa espaço para fé, dúvida, raiva, confusão ou silêncio.

### Qualidades de uma pergunta que abre

Perguntas que abrem costumam ser:

- **Abertas**: não podem ser respondidas com sim ou não. Muitas vezes começam com "o que", "como" ou "onde".
- **Não indutivas**: não sugerem uma resposta preferida nem pressupõem uma crença que a pessoa não expressou.
- **Curiosas, não espertas**: o objetivo é compreender, não demonstrar sabedoria.
- **Com ritmo**: uma pergunta de cada vez, seguida de silêncio suficiente para que uma resposta real se forme.
- **Opcionais**: a pessoa pode escolher não responder, e essa escolha é respeitada.

Perguntas com "por que" podem ser úteis, mas às vezes soam como uma exigência de justificativa. "Como foi isso para você?" costuma ser mais gentil do que "Por que você fez isso?".

### Perguntando a si mesmo

Essas mesmas qualidades valem quando você reflete em particular. Muitas pessoas se interrogam em tom de acusação: "Por que você não consegue simplesmente confiar?" ou "Qual é o seu problema?". O questionamento contemplativo convida a um tom mais gentil e espaçoso: "Pelo que eu anseio agora?", "Onde percebo algo sagrado, ou simplesmente bom, neste dia?", "O que tenho medo de admitir, até para mim mesmo?".

Algumas tradições oferecem perguntas feitas há séculos. Outras convidam você a descobrir as suas. De qualquer forma, você pode deixar uma pergunta acompanhar você por vários dias sem forçá-la a se resolver. Viver com uma pergunta é uma prática em si.

### Prática: escrevendo três perguntas que abrem

- Pense em um tema que importa para você agora, como esperança, perda, vocação, perdão ou pertencimento.
- Escreva três perguntas sobre esse tema que sejam abertas e não pressuponham uma crença específica.
- Leia cada pergunta em voz alta e pergunte-se: ela deixa espaço para qualquer resposta honesta, inclusive "não sei"?
- Reescreva qualquer pergunta que empurre para uma resposta específica.
- Escolha uma pergunta para levar com você nesta semana. Volte a ela em um momento tranquilo a cada dia e observe o que surge, sem pressa de concluir.

Exemplos para adaptar: "O que dá força a você quando as coisas estão difíceis?", "O que você mais gostaria que fosse verdade agora?", "Onde você sentiu mais paz e o que estava presente ali?".`,
        prompt: 'Escreva três perguntas não indutivas sobre sentido ou esperança. Qual delas você mais gostaria que alguém fizesse a você, e por quê?'
      }
    },
    {
      id: 'les_spir_6',
      slug: 'when-belief-shifts',
      duration: 25,
      sort: 3,
      en: {
        title: 'When Belief Shifts: Doubt, Change & Spiritual Distress',
        content: `### Belief is rarely static

Over a lifetime, many people find their beliefs deepening, loosening, changing shape, or falling away. Some move toward faith after years without it. Some leave a tradition they were raised in. Some stay within a community while their understanding shifts in quiet ways. Many religious traditions have their own language for seasons of doubt or spiritual dryness, and a number of well-known spiritual writers have described long periods when the sacred felt absent.

Doubt is not a failure of character. It can be a sign of honesty, growth, grief, or simply a changing life. It can also be painful, especially when it touches family, community, identity, or a sense of safety.

### Common experiences in times of change

People navigating shifting belief often describe:

- **Loneliness**, especially if their community or family does not share the change.
- **Grief** for a lost certainty, a lost community, or a lost version of themselves.
- **Fear**, sometimes deeply rooted, about what change might mean.
- **Relief or freedom**, sometimes mixed with guilt about feeling relieved.
- **Anger**, particularly if they experienced harm, control, or exclusion within a religious setting.

All of these are understandable. None needs to be resolved quickly.

### When spirituality has been a source of harm

For some people, religious or spiritual settings have been places of pain: shaming, coercion, exclusion because of identity, or abuse. If this is part of your story, it deserves to be taken seriously. You do not have to forgive quickly, return to anything, or give up your own sense of the sacred if it still matters to you. Healing from this kind of harm often goes better with support from a qualified counselor or therapist, ideally one who respects both your experience and your autonomy around belief.

### Practice: honoring where you are

- Write one sentence that describes your current relationship with belief or meaning, as honestly as you can. There is no right answer.
- List what you miss, if anything, from an earlier season.
- List what you have gained, if anything, from the change.
- Name one person or community with whom you could be honest about this, even partially.
- Write a short statement of permission to yourself, such as "I am allowed to not know yet."

### When to seek support

If questions of belief are accompanied by persistent hopelessness, inability to function day to day, thoughts of harming yourself, or overwhelming fear, please reach out to a qualified mental health professional. If you are in immediate danger, contact your local emergency number or a crisis line such as 988 in the US. Spiritual reflection can accompany professional care; it is not a substitute for it.`,
        prompt: 'How would you honestly describe your relationship with belief or meaning right now? What would you like to give yourself permission to feel, question, or keep?'
      },
      es: {
        title: 'Cuando las creencias cambian: duda, transformación y malestar espiritual',
        content: `### Las creencias rara vez son estáticas

A lo largo de la vida, muchas personas sienten que sus creencias se profundizan, se aflojan, cambian de forma o desaparecen. Algunas se acercan a la fe después de años sin ella. Otras dejan la tradición en la que crecieron. Otras permanecen en su comunidad mientras su comprensión cambia de maneras silenciosas. Muchas tradiciones religiosas tienen su propio lenguaje para las temporadas de duda o sequedad espiritual, y varios escritores espirituales conocidos han descrito largos periodos en los que lo sagrado se sentía ausente.

La duda no es una falla de carácter. Puede ser señal de honestidad, crecimiento, duelo o simplemente de una vida que cambia. También puede doler, sobre todo cuando toca a la familia, la comunidad, la identidad o la sensación de seguridad.

### Experiencias comunes en tiempos de cambio

Quienes atraviesan cambios en sus creencias suelen describir:

- **Soledad**, en especial si su comunidad o familia no comparte el cambio.
- **Duelo** por una certeza perdida, una comunidad perdida o una versión anterior de sí mismos.
- **Miedo**, a veces muy arraigado, sobre lo que el cambio podría significar.
- **Alivio o libertad**, a veces mezclados con culpa por sentir alivio.
- **Enojo**, en particular si vivieron daño, control o exclusión en un entorno religioso.

Todo esto es comprensible. Nada de esto necesita resolverse con prisa.

### Cuando la espiritualidad ha causado daño

Para algunas personas, los espacios religiosos o espirituales han sido lugares de dolor: vergüenza, coerción, exclusión por su identidad o abuso. Si esto forma parte de tu historia, merece tomarse en serio. No tienes que perdonar rápido, regresar a nada ni renunciar a tu propio sentido de lo sagrado si todavía te importa. Sanar este tipo de daño suele ser más llevadero con el apoyo de un consejero o terapeuta calificado, idealmente alguien que respete tu experiencia y tu libertad en materia de creencias.

### Práctica: honrar dónde estás

- Escribe una frase que describa tu relación actual con las creencias o el sentido, con la mayor honestidad posible. No hay respuesta correcta.
- Enumera lo que extrañas, si hay algo, de una etapa anterior.
- Enumera lo que has ganado, si hay algo, con el cambio.
- Nombra a una persona o comunidad con la que podrías ser honesto sobre esto, aunque sea en parte.
- Escribe una breve frase de permiso para ti, como "Tengo permiso para no saber todavía".

### Cuándo buscar apoyo

Si las preguntas sobre tus creencias vienen acompañadas de desesperanza persistente, dificultad para funcionar en el día a día, pensamientos de hacerte daño o un miedo abrumador, busca a un profesional de salud mental calificado. Si estás en peligro inmediato, comunícate con tu número local de emergencias o con una línea de crisis como el 988 en Estados Unidos. La reflexión espiritual puede acompañar la atención profesional; no la reemplaza.`,
        prompt: '¿Cómo describirías con honestidad tu relación actual con las creencias o el sentido? ¿Qué te gustaría darte permiso de sentir, cuestionar o conservar?'
      },
      'pt-BR': {
        title: 'Quando a crença muda: dúvida, transformação e sofrimento espiritual',
        content: `### A crença raramente é estática

Ao longo da vida, muitas pessoas percebem suas crenças se aprofundando, se afrouxando, mudando de forma ou desaparecendo. Algumas se aproximam da fé depois de anos sem ela. Outras deixam a tradição em que foram criadas. Outras permanecem na comunidade enquanto a sua compreensão muda de maneiras silenciosas. Muitas tradições religiosas têm a sua própria linguagem para fases de dúvida ou aridez espiritual, e vários escritores espirituais conhecidos descreveram longos períodos em que o sagrado parecia ausente.

A dúvida não é uma falha de caráter. Pode ser sinal de honestidade, crescimento, luto ou simplesmente de uma vida que está mudando. Também pode doer, especialmente quando toca a família, a comunidade, a identidade ou a sensação de segurança.

### Experiências comuns em tempos de mudança

Quem atravessa mudanças de crença costuma descrever:

- **Solidão**, principalmente se a comunidade ou a família não compartilha a mudança.
- **Luto** por uma certeza perdida, uma comunidade perdida ou uma versão anterior de si mesmo.
- **Medo**, às vezes profundamente enraizado, sobre o que a mudança pode significar.
- **Alívio ou liberdade**, às vezes misturados com culpa por sentir alívio.
- **Raiva**, especialmente se houve dano, controle ou exclusão em um ambiente religioso.

Tudo isso é compreensível. Nada disso precisa ser resolvido com pressa.

### Quando a espiritualidade foi fonte de dano

Para algumas pessoas, espaços religiosos ou espirituais foram lugares de dor: humilhação, coerção, exclusão por causa da identidade ou abuso. Se isso faz parte da sua história, merece ser levado a sério. Você não precisa perdoar rápido, voltar para nada nem abrir mão do seu próprio senso de sagrado se ele ainda for importante. Curar esse tipo de dano costuma ser mais possível com o apoio de um conselheiro ou terapeuta qualificado, de preferência alguém que respeite tanto a sua experiência quanto a sua liberdade de crença.

### Prática: honrando onde você está

- Escreva uma frase que descreva a sua relação atual com a crença ou com o sentido, da forma mais honesta possível. Não existe resposta certa.
- Liste o que você sente falta, se houver algo, de uma fase anterior.
- Liste o que você ganhou, se houver algo, com a mudança.
- Nomeie uma pessoa ou comunidade com quem você poderia ser honesto sobre isso, mesmo que em parte.
- Escreva uma frase curta de permissão para si mesmo, como "Tenho permissão para ainda não saber".

### Quando buscar apoio

Se as perguntas sobre crença vierem acompanhadas de desesperança persistente, dificuldade de dar conta do dia a dia, pensamentos de se machucar ou medo avassalador, procure um profissional de saúde mental qualificado. Se você estiver em perigo imediato, ligue para o número de emergência local ou para uma linha de crise como o 988 nos Estados Unidos. A reflexão espiritual pode acompanhar o cuidado profissional; ela não o substitui.`,
        prompt: 'Como você descreveria com honestidade a sua relação atual com a crença ou com o sentido? O que você gostaria de se dar permissão para sentir, questionar ou manter?'
      }
    }
  ]
});

courseSpiritual.modules.push({
  id: 'mod_spir_3',
  slug: 'grief-loss-and-seasons-of-change',
  sort: 3,
  en: { title: 'Grief, Loss & Seasons of Change', description: 'Witnessing loss honestly, avoiding spiritual bypassing, and using ritual and silence to mark life’s transitions.' },
  es: { title: 'Duelo, pérdida y etapas de cambio', description: 'Acompañar la pérdida con honestidad, evitar el atajo espiritual y usar el ritual y el silencio para marcar las transiciones de la vida.' },
  'pt-BR': { title: 'Luto, perda e fases de mudança', description: 'Testemunhar a perda com honestidade, evitar o atalho espiritual e usar o ritual e o silêncio para marcar as transições da vida.' },
  lessons: [
    {
      id: 'les_spir_7',
      slug: 'witnessing-loss',
      duration: 20,
      sort: 1,
      en: {
        title: 'Witnessing Loss Before Finding Meaning',
        content: `### Grief takes many forms

Grief is the natural response to losing something or someone that mattered. It follows death, but it also follows divorce, estrangement, illness, migration, infertility, job loss, the end of a dream, or a change in faith. Some losses are publicly recognized and supported. Others are quieter and may go unacknowledged by the people around us, which can make them feel even heavier.

Grief does not follow a tidy sequence. Many people move back and forth between sorrow, numbness, anger, guilt, relief, longing, and moments of ordinary life. Well-known models of grief were never meant to be strict checklists, and it is common to feel that your own grief does not fit any of them.

### Witness first

One of the central teachings of this course is simple: witness loss before trying to find meaning in it. When someone is grieving, including you, the first need is usually not an explanation. It is to have the loss seen and acknowledged as real.

Meaning may come later. For some people it arrives through faith, through love that continues, through a changed sense of priorities, or through honoring the one who is gone. For others, a loss remains senseless, and that honest recognition is its own kind of integrity. Neither response is more spiritual than the other.

### What witnessing looks like

Witnessing loss can include:

- Saying the name of the person or thing that was lost.
- Allowing tears, silence, or anger without trying to shorten them.
- Remembering specific details, not only general statements.
- Acknowledging that life has changed, rather than insisting it will return to normal.
- Staying present with grief over time, since it often continues long after others stop asking.

Many traditions support this through mourning periods, memorial gatherings, prayers for the dead, anniversaries, and practices of remembrance. People without a tradition can create their own ways of marking loss.

### Practice: a witnessing letter

- Choose a loss you are carrying, large or small, recent or long ago.
- Write a short letter that begins "I want to name..." and describe what was lost in specific detail.
- Include what you miss, what you wish had been different, and anything you did not get to say.
- Do not try to find a lesson or a silver lining. Simply let the letter witness what happened.
- When you finish, sit quietly for a few breaths. If you wish, offer a prayer, a blessing, or a simple "I remember."

### When to seek support

Grief can be intense without being a problem that needs fixing. If grief leaves you unable to function for a long period, or you have thoughts of harming yourself, please reach out to a qualified professional. In an emergency, contact your local emergency number or a crisis line such as 988 in the US.`,
        prompt: 'What loss, large or small, is asking to be witnessed in your life right now? What would it mean to name it fully before looking for any meaning in it?'
      },
      es: {
        title: 'Acompañar la pérdida antes de buscarle sentido',
        content: `### El duelo tiene muchas formas

El duelo es la respuesta natural a perder algo o a alguien que importaba. Llega después de una muerte, pero también tras un divorcio, un distanciamiento, una enfermedad, una migración, la infertilidad, la pérdida de un empleo, el final de un sueño o un cambio en la fe. Algunas pérdidas se reconocen y acompañan públicamente. Otras son más silenciosas y quienes nos rodean pueden no notarlas, lo que las vuelve aún más pesadas.

El duelo no sigue una secuencia ordenada. Muchas personas van y vienen entre la tristeza, el adormecimiento, el enojo, la culpa, el alivio, la añoranza y momentos de vida cotidiana. Los modelos conocidos del duelo nunca fueron pensados como listas rígidas, y es común sentir que tu propio duelo no encaja en ninguno.

### Primero, acompañar

Una de las enseñanzas centrales de este curso es sencilla: acompaña la pérdida antes de intentar encontrarle sentido. Cuando alguien está en duelo, incluido tú, la primera necesidad casi nunca es una explicación. Es que la pérdida sea vista y reconocida como real.

El sentido puede llegar después. Para algunas personas llega a través de la fe, del amor que continúa, de un cambio en las prioridades o de honrar a quien ya no está. Para otras, una pérdida sigue sin tener sentido, y ese reconocimiento honesto también es una forma de integridad. Ninguna de las dos respuestas es más espiritual que la otra.

### Cómo se ve acompañar

Acompañar la pérdida puede incluir:

- Decir el nombre de la persona o de aquello que se perdió.
- Permitir las lágrimas, el silencio o el enojo sin intentar acortarlos.
- Recordar detalles concretos, no solo frases generales.
- Reconocer que la vida ha cambiado, en lugar de insistir en que volverá a la normalidad.
- Permanecer presente en el duelo a lo largo del tiempo, porque suele continuar mucho después de que los demás dejan de preguntar.

Muchas tradiciones sostienen esto con periodos de luto, reuniones de memoria, oraciones por los difuntos, aniversarios y prácticas de recuerdo. Quienes no tienen una tradición pueden crear sus propias formas de marcar la pérdida.

### Práctica: una carta de testimonio

- Elige una pérdida que estés cargando, grande o pequeña, reciente o antigua.
- Escribe una carta breve que comience con "Quiero nombrar..." y describe con detalle lo que se perdió.
- Incluye lo que extrañas, lo que desearías que hubiera sido distinto y lo que no alcanzaste a decir.
- No intentes encontrar una lección ni un lado positivo. Deja que la carta simplemente sea testigo de lo que ocurrió.
- Al terminar, quédate en silencio algunas respiraciones. Si lo deseas, ofrece una oración, una bendición o un sencillo "Te recuerdo".

### Cuándo buscar apoyo

El duelo puede ser intenso sin ser un problema que haya que arreglar. Si el duelo te impide funcionar durante un periodo largo o tienes pensamientos de hacerte daño, busca a un profesional calificado. En una emergencia, comunícate con tu número local de emergencias o con una línea de crisis como el 988 en Estados Unidos.`,
        prompt: '¿Qué pérdida, grande o pequeña, pide ser reconocida en tu vida ahora? ¿Qué significaría nombrarla por completo antes de buscarle algún sentido?'
      },
      'pt-BR': {
        title: 'Testemunhar a perda antes de buscar sentido',
        content: `### O luto tem muitas formas

O luto é a resposta natural a perder algo ou alguém que importava. Ele vem depois de uma morte, mas também depois de um divórcio, um afastamento, uma doença, uma migração, a infertilidade, a perda de um emprego, o fim de um sonho ou uma mudança na fé. Algumas perdas são reconhecidas e acolhidas publicamente. Outras são mais silenciosas e podem passar despercebidas por quem está ao redor, o que as torna ainda mais pesadas.

O luto não segue uma sequência organizada. Muitas pessoas vão e voltam entre tristeza, entorpecimento, raiva, culpa, alívio, saudade e momentos de vida comum. Os modelos conhecidos de luto nunca foram pensados como listas rígidas, e é comum sentir que o seu próprio luto não se encaixa em nenhum deles.

### Primeiro, testemunhar

Um dos ensinamentos centrais deste curso é simples: testemunhe a perda antes de tentar encontrar sentido nela. Quando alguém está de luto, inclusive você, a primeira necessidade quase nunca é uma explicação. É que a perda seja vista e reconhecida como real.

O sentido pode vir depois. Para algumas pessoas, ele chega pela fé, pelo amor que continua, por uma mudança de prioridades ou pela forma de honrar quem se foi. Para outras, uma perda continua sem sentido, e esse reconhecimento honesto também é uma forma de integridade. Nenhuma das duas respostas é mais espiritual que a outra.

### Como é testemunhar

Testemunhar a perda pode incluir:

- Dizer o nome da pessoa ou daquilo que foi perdido.
- Permitir lágrimas, silêncio ou raiva sem tentar encurtá-los.
- Lembrar detalhes específicos, não só frases gerais.
- Reconhecer que a vida mudou, em vez de insistir que tudo voltará ao normal.
- Continuar presente no luto ao longo do tempo, já que ele costuma durar muito depois de os outros pararem de perguntar.

Muitas tradições sustentam isso com períodos de luto, encontros de memória, orações pelos mortos, aniversários e práticas de lembrança. Quem não tem uma tradição pode criar as suas próprias formas de marcar a perda.

### Prática: uma carta de testemunho

- Escolha uma perda que você está carregando, grande ou pequena, recente ou antiga.
- Escreva uma carta curta que comece com "Quero nomear..." e descreva em detalhes o que foi perdido.
- Inclua do que você sente falta, o que gostaria que tivesse sido diferente e o que não conseguiu dizer.
- Não tente encontrar uma lição ou um lado bom. Deixe a carta simplesmente testemunhar o que aconteceu.
- Ao terminar, fique em silêncio por algumas respirações. Se quiser, faça uma oração, uma bênção ou um simples "Eu me lembro".

### Quando buscar apoio

O luto pode ser intenso sem ser um problema a ser consertado. Se o luto impedir você de dar conta da vida por um longo período, ou se surgirem pensamentos de se machucar, procure um profissional qualificado. Em uma emergência, ligue para o número de emergência local ou para uma linha de crise como o 988 nos Estados Unidos.`,
        prompt: 'Que perda, grande ou pequena, está pedindo para ser testemunhada na sua vida agora? O que significaria nomeá-la por inteiro antes de buscar qualquer sentido nela?'
      }
    },
    {
      id: 'les_spir_8',
      slug: 'beyond-spiritual-bypassing',
      duration: 20,
      sort: 2,
      en: {
        title: 'Beyond Spiritual Bypassing',
        content: `### What spiritual bypassing means

The psychologist John Welwood coined the phrase "spiritual bypassing" to describe using spiritual ideas or practices to avoid facing painful feelings, unresolved wounds, or practical needs. It is not unique to any one tradition. It can show up in religious language, in wellness culture, or in secular positivity.

Bypassing is usually well-intended. People reach for spiritual phrases because they want to comfort, because they feel helpless, or because they were taught that certain emotions are unspiritual. The effect, however, can be that the person in pain feels unseen, rushed, or even blamed.

### Common forms of bypassing

You may recognize some of these phrases, whether you have heard them or said them:

- "Everything happens for a reason."
- "They’re in a better place, so you shouldn’t be sad."
- "Just pray more" or "just think positive."
- "God never gives us more than we can handle."
- "Anger is a low vibration; let it go."
- "At least..." followed by any comparison that minimizes the loss.

Some of these phrases reflect beliefs that are deeply meaningful to certain people. The problem is not the belief itself. It is using the belief to skip over someone’s real experience, or insisting they adopt it on your timeline.

### Turning toward instead

The alternative to bypassing is not abandoning faith or hope. It is letting spiritual life include the full range of human experience. Many sacred texts contain laments, protests, and cries of abandonment alongside praise. Many contemplative teachers encourage bringing anger, fear, and doubt into prayer or meditation rather than hiding them.

Turning toward sounds more like:

- "This is really hard, and I’m here."
- "You don’t have to feel any particular way about this."
- "I don’t know why this happened. I’m so sorry it did."
- "Would it help to talk, pray, or just sit together?"

### Practice: rewriting a bypass

- Recall a time someone offered you a spiritual phrase that did not help, or a time you offered one to someone else.
- Write down the phrase as you remember it.
- Underneath, write what the person in pain may have actually needed in that moment.
- Write a new response that acknowledges the pain first. If faith language is welcome, it can follow, gently and by invitation.
- Notice any places in your own inner life where you use spiritual ideas to avoid a feeling. Choose one feeling you are willing to let be present this week.

This is not about getting everything right. It is about noticing, with kindness, when comfort becomes a way of looking away.`,
        prompt: 'What phrase could you use to replace a spiritual bypass you have heard or said? Where in your own life might you be using an idea to avoid a feeling?'
      },
      es: {
        title: 'Más allá del atajo espiritual',
        content: `### Qué es el atajo espiritual

El psicólogo John Welwood acuñó la expresión en inglés "spiritual bypassing", que suele traducirse como atajo o evasión espiritual, para describir el uso de ideas o prácticas espirituales para evitar sentimientos dolorosos, heridas no resueltas o necesidades prácticas. No es exclusivo de ninguna tradición. Puede aparecer en el lenguaje religioso, en la cultura del bienestar o en la positividad laica.

El atajo espiritual suele tener buena intención. Las personas recurren a frases espirituales porque quieren consolar, porque se sienten impotentes o porque aprendieron que ciertas emociones no son espirituales. Sin embargo, el efecto puede ser que quien sufre se sienta invisible, apresurado o incluso culpado.

### Formas comunes del atajo espiritual

Quizá reconozcas algunas de estas frases, ya sea porque las escuchaste o porque las dijiste:

- "Todo pasa por algo."
- "Está en un lugar mejor, así que no deberías estar triste."
- "Solo reza más" o "solo piensa en positivo."
- "Dios no nos da más de lo que podemos soportar."
- "El enojo es una vibración baja; suéltalo."
- "Por lo menos..." seguido de cualquier comparación que minimice la pérdida.

Algunas de estas frases reflejan creencias profundamente valiosas para ciertas personas. El problema no es la creencia en sí. Es usarla para saltarse la experiencia real de alguien, o insistir en que la adopte en tus tiempos.

### Mejor, acercarse

La alternativa al atajo no es abandonar la fe o la esperanza. Es permitir que la vida espiritual incluya toda la gama de la experiencia humana. Muchos textos sagrados contienen lamentos, protestas y gritos de abandono junto a la alabanza. Muchos maestros contemplativos animan a llevar el enojo, el miedo y la duda a la oración o a la meditación en lugar de esconderlos.

Acercarse suena más bien así:

- "Esto es muy difícil y aquí estoy."
- "No tienes que sentirte de ninguna manera en particular."
- "No sé por qué pasó esto. Lamento muchísimo que haya pasado."
- "¿Te ayudaría hablar, rezar o simplemente estar juntos en silencio?"

### Práctica: reescribir un atajo

- Recuerda una ocasión en que alguien te ofreció una frase espiritual que no te ayudó, o en que tú se la ofreciste a otra persona.
- Escribe la frase tal como la recuerdas.
- Debajo, escribe lo que la persona que sufría quizá necesitaba realmente en ese momento.
- Escribe una respuesta nueva que reconozca primero el dolor. Si el lenguaje de fe es bienvenido, puede venir después, con suavidad y por invitación.
- Observa los lugares de tu propia vida interior donde usas ideas espirituales para evitar un sentimiento. Elige un sentimiento que estés dispuesto a dejar estar presente esta semana.

No se trata de hacerlo todo bien. Se trata de notar, con amabilidad, cuándo el consuelo se convierte en una forma de mirar hacia otro lado.`,
        prompt: '¿Qué frase podrías usar para reemplazar un atajo espiritual que escuchaste o dijiste? ¿En qué parte de tu vida podrías estar usando una idea para evitar un sentimiento?'
      },
      'pt-BR': {
        title: 'Além do atalho espiritual',
        content: `### O que é o atalho espiritual

O psicólogo John Welwood criou a expressão em inglês "spiritual bypassing", muitas vezes traduzida como atalho ou desvio espiritual, para descrever o uso de ideias ou práticas espirituais para evitar sentimentos dolorosos, feridas não resolvidas ou necessidades práticas. Isso não é exclusivo de nenhuma tradição. Pode aparecer na linguagem religiosa, na cultura do bem-estar ou na positividade laica.

O atalho espiritual costuma ter boa intenção. As pessoas recorrem a frases espirituais porque querem consolar, porque se sentem impotentes ou porque aprenderam que certas emoções não são espirituais. O efeito, porém, pode ser que quem sofre se sinta invisível, apressado ou até culpado.

### Formas comuns de atalho espiritual

Talvez você reconheça algumas destas frases, seja por tê-las ouvido ou dito:

- "Tudo acontece por um motivo."
- "Ele está em um lugar melhor, então você não deveria ficar triste."
- "É só rezar mais" ou "é só pensar positivo."
- "Deus não dá um fardo maior do que podemos carregar."
- "Raiva é uma vibração baixa; deixe para lá."
- "Pelo menos..." seguido de qualquer comparação que diminua a perda.

Algumas dessas frases refletem crenças profundamente significativas para certas pessoas. O problema não é a crença em si. É usá-la para pular a experiência real de alguém, ou insistir que a pessoa a adote no seu tempo.

### Em vez disso, aproximar-se

A alternativa ao atalho não é abandonar a fé ou a esperança. É permitir que a vida espiritual inclua toda a amplitude da experiência humana. Muitos textos sagrados contêm lamentos, protestos e gritos de abandono ao lado do louvor. Muitos mestres contemplativos incentivam levar a raiva, o medo e a dúvida para a oração ou a meditação, em vez de escondê-los.

Aproximar-se soa mais assim:

- "Isso é muito difícil, e eu estou aqui."
- "Você não precisa sentir nada de um jeito específico."
- "Não sei por que isso aconteceu. Sinto muito que tenha acontecido."
- "Ajudaria conversar, rezar ou só ficarmos juntos em silêncio?"

### Prática: reescrevendo um atalho

- Lembre-se de uma vez em que alguém ofereceu a você uma frase espiritual que não ajudou, ou em que você ofereceu uma a outra pessoa.
- Escreva a frase como você se lembra dela.
- Logo abaixo, escreva o que a pessoa que sofria talvez realmente precisasse naquele momento.
- Escreva uma nova resposta que reconheça a dor primeiro. Se a linguagem de fé for bem-vinda, ela pode vir depois, com delicadeza e por convite.
- Observe os lugares da sua vida interior onde você usa ideias espirituais para evitar um sentimento. Escolha um sentimento que você esteja disposto a deixar presente nesta semana.

Não se trata de acertar tudo. Trata-se de perceber, com gentileza, quando o consolo vira uma forma de olhar para o outro lado.`,
        prompt: 'Que frase você poderia usar para substituir um atalho espiritual que ouviu ou disse? Em que parte da sua vida você pode estar usando uma ideia para evitar um sentimento?'
      }
    },
    {
      id: 'les_spir_9',
      slug: 'ritual-and-marking-transitions',
      duration: 20,
      sort: 3,
      en: {
        title: 'Ritual, Silence & Marking Transitions',
        content: `### Why ritual matters

Humans have always marked important transitions with ritual: births, coming of age, marriages, deaths, new homes, recoveries, departures. Rituals give shape to experiences that are too large for ordinary words. They can gather a community, make an inner change visible, and offer a sense of continuity with those who came before.

Religious traditions carry rich ritual inheritances: candles lit in memory, prayers said at set times, water used for blessing or cleansing, shared meals, pilgrimages, and silent vigils. People without religious affiliation also create meaningful rituals, such as planting a tree, writing and releasing a letter, walking a familiar route in remembrance, or gathering friends to share stories.

### Small rituals for everyday transitions

Not every transition is dramatic. Starting a new job, ending a long project, children leaving home, recovering from illness, or stepping away from a role can all benefit from a moment of intentional marking. A simple ritual might take five minutes and involve only you.

Effective personal rituals often include:

- **A threshold**: a clear beginning, such as lighting a candle, stepping outside, or sitting in a particular place.
- **An acknowledgment**: naming what is ending, what is beginning, or both.
- **A symbolic action**: writing, placing an object, pouring water, speaking a blessing, or keeping silence together.
- **A closing**: a clear end, such as extinguishing the candle or saying a closing word.

### Silence as ritual

Sometimes the most fitting ritual is shared silence. A minute of silence in memory, a pause before a meal, or quiet sitting with someone who is grieving can communicate respect more fully than words. Silence also leaves room for each person to hold their own beliefs without anyone needing to agree.

### Consent and inclusivity

When a ritual involves other people, especially people who may hold different beliefs, ask before including prayer, sacred texts, or religious symbols. Offer options: "Would you like me to say a prayer, or would you prefer a moment of silence?" This simple question honors everyone present.

### Practice: design a small ritual

- Choose a transition in your life that has not been marked, recent or long past.
- Decide on a threshold that will signal the beginning of the ritual.
- Write one or two sentences that name what is ending and what may be beginning.
- Choose one symbolic action that feels meaningful and safe.
- Decide how you will close the ritual.
- Carry it out, alone or with someone you trust, and afterward jot down anything you noticed.

A ritual does not need to be elaborate to be real. Sincerity matters more than form.`,
        prompt: 'Which transition in your life has gone unmarked? What simple threshold, action, and closing might help you honor it?'
      },
      es: {
        title: 'Ritual, silencio y el paso por las transiciones',
        content: `### Por qué importa el ritual

Los seres humanos siempre han marcado las transiciones importantes con rituales: nacimientos, paso a la adultez, matrimonios, muertes, nuevos hogares, recuperaciones, despedidas. Los rituales dan forma a experiencias demasiado grandes para las palabras comunes. Pueden reunir a una comunidad, hacer visible un cambio interior y ofrecer un sentido de continuidad con quienes vinieron antes.

Las tradiciones religiosas guardan una rica herencia ritual: velas encendidas en memoria, oraciones a horas fijas, agua para bendecir o purificar, comidas compartidas, peregrinaciones y vigilias en silencio. Las personas sin afiliación religiosa también crean rituales significativos, como plantar un árbol, escribir una carta y dejarla ir, recorrer un camino conocido en memoria de alguien o reunir a amigos para compartir historias.

### Pequeños rituales para transiciones cotidianas

No toda transición es dramática. Empezar un trabajo nuevo, terminar un proyecto largo, ver a los hijos irse de casa, recuperarse de una enfermedad o dejar un rol pueden beneficiarse de un momento para marcarlos con intención. Un ritual sencillo puede durar cinco minutos e incluirte solo a ti.

Los rituales personales que funcionan suelen incluir:

- **Un umbral**: un inicio claro, como encender una vela, salir al aire libre o sentarte en un lugar específico.
- **Un reconocimiento**: nombrar lo que termina, lo que comienza o ambas cosas.
- **Una acción simbólica**: escribir, colocar un objeto, verter agua, pronunciar una bendición o guardar silencio juntos.
- **Un cierre**: un final claro, como apagar la vela o decir una palabra de cierre.

### El silencio como ritual

A veces el ritual más adecuado es el silencio compartido. Un minuto de silencio en memoria de alguien, una pausa antes de comer o sentarse en calma junto a una persona en duelo pueden comunicar respeto con más plenitud que las palabras. El silencio también deja espacio para que cada persona sostenga sus propias creencias sin que nadie tenga que estar de acuerdo.

### Consentimiento e inclusión

Cuando un ritual incluye a otras personas, en especial a quienes pueden tener creencias distintas, pregunta antes de incluir oraciones, textos sagrados o símbolos religiosos. Ofrece opciones: "¿Te gustaría que dijera una oración o prefieres un momento de silencio?". Esta sencilla pregunta honra a todas las personas presentes.

### Práctica: diseña un pequeño ritual

- Elige una transición de tu vida que no haya sido marcada, reciente o lejana.
- Decide un umbral que indique el inicio del ritual.
- Escribe una o dos frases que nombren lo que termina y lo que tal vez comienza.
- Elige una acción simbólica que se sienta significativa y segura.
- Decide cómo cerrarás el ritual.
- Llévalo a cabo, a solas o con alguien de confianza, y después anota lo que hayas notado.

Un ritual no necesita ser elaborado para ser real. La sinceridad importa más que la forma.`,
        prompt: '¿Qué transición de tu vida ha quedado sin marcar? ¿Qué umbral, acción y cierre sencillos podrían ayudarte a honrarla?'
      },
      'pt-BR': {
        title: 'Ritual, silêncio e a passagem pelas transições',
        content: `### Por que o ritual importa

Os seres humanos sempre marcaram transições importantes com rituais: nascimentos, passagem para a vida adulta, casamentos, mortes, casas novas, recuperações, despedidas. Os rituais dão forma a experiências grandes demais para as palavras comuns. Eles podem reunir uma comunidade, tornar visível uma mudança interior e oferecer um senso de continuidade com quem veio antes.

As tradições religiosas guardam uma rica herança ritual: velas acesas em memória, orações em horários fixos, água usada para abençoar ou purificar, refeições compartilhadas, peregrinações e vigílias silenciosas. Pessoas sem afiliação religiosa também criam rituais significativos, como plantar uma árvore, escrever uma carta e deixá-la ir, percorrer um caminho conhecido em memória de alguém ou reunir amigos para compartilhar histórias.

### Pequenos rituais para transições do dia a dia

Nem toda transição é dramática. Começar um novo trabalho, encerrar um projeto longo, ver os filhos saírem de casa, recuperar-se de uma doença ou deixar um papel podem se beneficiar de um momento marcado com intenção. Um ritual simples pode durar cinco minutos e envolver apenas você.

Rituais pessoais que funcionam costumam incluir:

- **Um limiar**: um início claro, como acender uma vela, sair ao ar livre ou sentar-se em um lugar específico.
- **Um reconhecimento**: nomear o que termina, o que começa ou ambos.
- **Uma ação simbólica**: escrever, colocar um objeto em algum lugar, derramar água, dizer uma bênção ou fazer silêncio juntos.
- **Um encerramento**: um fim claro, como apagar a vela ou dizer uma palavra final.

### O silêncio como ritual

Às vezes o ritual mais adequado é o silêncio compartilhado. Um minuto de silêncio em memória de alguém, uma pausa antes da refeição ou sentar-se em quietude ao lado de alguém de luto podem comunicar respeito mais plenamente do que palavras. O silêncio também deixa espaço para que cada pessoa mantenha as suas próprias crenças sem que ninguém precise concordar.

### Consentimento e inclusão

Quando um ritual envolve outras pessoas, especialmente quem pode ter crenças diferentes, pergunte antes de incluir orações, textos sagrados ou símbolos religiosos. Ofereça opções: "Você gostaria que eu fizesse uma oração ou prefere um momento de silêncio?". Essa pergunta simples honra todas as pessoas presentes.

### Prática: crie um pequeno ritual

- Escolha uma transição da sua vida que não foi marcada, recente ou antiga.
- Defina um limiar que sinalize o início do ritual.
- Escreva uma ou duas frases que nomeiem o que está terminando e o que talvez esteja começando.
- Escolha uma ação simbólica que pareça significativa e segura.
- Decida como vai encerrar o ritual.
- Realize-o, sozinho ou com alguém de confiança, e depois anote o que percebeu.

Um ritual não precisa ser elaborado para ser real. A sinceridade importa mais do que a forma.`,
        prompt: 'Qual transição da sua vida ficou sem ser marcada? Que limiar, ação e encerramento simples poderiam ajudar você a honrá-la?'
      }
    }
  ]
});

courseSpiritual.modules.push({
  id: 'mod_spir_4',
  slug: 'companioning-others-with-care',
  sort: 4,
  en: { title: 'Companioning Others with Care', description: 'Offering presence across beliefs, asking consent, respecting power and privacy, and knowing the edge of a non-clinical role.' },
  es: { title: 'Acompañar a otros con cuidado', description: 'Ofrecer presencia más allá de las creencias, pedir consentimiento, cuidar el poder y la privacidad y reconocer los límites de un rol no clínico.' },
  'pt-BR': { title: 'Acompanhando outras pessoas com cuidado', description: 'Oferecer presença entre diferentes crenças, pedir consentimento, cuidar do poder e da privacidade e reconhecer os limites de um papel não clínico.' },
  lessons: [
    {
      id: 'les_spir_10',
      slug: 'presence-before-answers',
      duration: 20,
      sort: 1,
      en: {
        title: 'Presence Before Answers: Listening Across Beliefs',
        content: `### The gift of attention

When someone shares a spiritual struggle, a loss, or a question about meaning, the most valuable thing you can usually offer is attention. Not advice, not a theological explanation, not a story about your own experience, at least not at first. Attention before interpretation. Presence before answers.

This can be surprisingly difficult. Many of us feel anxious in the face of someone else’s pain and want to resolve it quickly. We may also feel a strong pull to share what has helped us, especially if our own faith or philosophy has been a lifeline. Those impulses come from care. The practice is to notice them and let them wait.

### Let the person set the language

People describe their inner lives in very different words. One person talks about God’s will, another about the universe, another about luck, fate, energy, or simply "how things are." When you companion someone, reflect their framework without translating it into yours.

If a friend says, "I feel like God has gone silent," you might respond, "It sounds like that silence is really painful for you." You would avoid reframing it as "Maybe you’re just depressed" or "Maybe the universe is teaching you something." Staying within their language communicates respect and helps them feel understood.

### Setting down assumptions

Listening across beliefs asks us to notice our assumptions and set them down, at least for the length of the conversation. Common assumptions include:

- That the other person believes what their family or community believes.
- That a religious person must find comfort in faith.
- That a non-religious person has no spiritual needs.
- That doubt is a problem to be solved.
- That your own path would work for them.

### Practice: a listening round

- Invite a trusted friend to talk for ten minutes about something that gives them meaning or something they are wondering about.
- Your role is only to listen, reflect back what you hear in their own words, and ask one or two open questions.
- Avoid offering advice, stories about yourself, or your own beliefs during this time.
- Afterward, ask your friend what it was like to be listened to in this way.
- Then reflect privately: which assumptions surfaced for you? When did you most want to speak?

### A note on your own needs

Companioning others can stir your own grief or questions. That is a sign of your humanity, not a failure. Make sure you also have somewhere to bring what you carry, whether that is a friend, a spiritual director, a faith leader, a peer group, or a counselor.`,
        prompt: 'What helps you leave room before responding when someone shares something deep? Which assumptions about other people’s beliefs do you need to set down?'
      },
      es: {
        title: 'Presencia antes que respuestas: escuchar más allá de las creencias',
        content: `### El regalo de la atención

Cuando alguien comparte una lucha espiritual, una pérdida o una pregunta sobre el sentido, lo más valioso que puedes ofrecer suele ser tu atención. No un consejo, no una explicación teológica, no una historia sobre tu propia experiencia, al menos no al principio. Atención antes que interpretación. Presencia antes que respuestas.

Esto puede ser sorprendentemente difícil. Muchas personas sentimos ansiedad ante el dolor ajeno y queremos resolverlo rápido. También podemos sentir un fuerte impulso de compartir lo que nos ha ayudado, sobre todo si nuestra fe o filosofía ha sido un salvavidas. Esos impulsos nacen del cariño. La práctica consiste en notarlos y dejar que esperen.

### Deja que la persona elija el lenguaje

Las personas describen su vida interior con palabras muy distintas. Una habla de la voluntad de Dios, otra del universo, otra de la suerte, el destino, la energía o simplemente de "cómo son las cosas". Cuando acompañas a alguien, refleja su marco sin traducirlo al tuyo.

Si una amiga dice: "Siento que Dios se ha quedado en silencio", podrías responder: "Parece que ese silencio te duele mucho". Evitarías reformularlo como "Tal vez solo estás deprimida" o "Tal vez el universo te está enseñando algo". Mantenerte dentro de su lenguaje comunica respeto y le ayuda a sentirse comprendida.

### Dejar a un lado las suposiciones

Escuchar más allá de las creencias nos pide notar nuestras suposiciones y dejarlas a un lado, al menos durante la conversación. Algunas suposiciones comunes son:

- Que la otra persona cree lo mismo que su familia o su comunidad.
- Que una persona religiosa necesariamente encuentra consuelo en la fe.
- Que una persona no religiosa no tiene necesidades espirituales.
- Que la duda es un problema que hay que resolver.
- Que tu propio camino le funcionaría también.

### Práctica: una ronda de escucha

- Invita a una amistad de confianza a hablar durante diez minutos sobre algo que le da sentido o algo que se está preguntando.
- Tu papel es solo escuchar, reflejar lo que oyes con sus propias palabras y hacer una o dos preguntas abiertas.
- Evita dar consejos, contar historias sobre ti o compartir tus propias creencias durante ese tiempo.
- Después, pregúntale cómo se sintió ser escuchada de esta manera.
- Luego reflexiona en privado: ¿qué suposiciones aparecieron en ti? ¿En qué momento sentiste más ganas de hablar?

### Una nota sobre tus propias necesidades

Acompañar a otras personas puede despertar tu propio duelo o tus propias preguntas. Eso es señal de tu humanidad, no un fracaso. Asegúrate de tener también un lugar donde llevar lo que cargas, ya sea una amistad, un acompañante espiritual, un líder de tu comunidad de fe, un grupo de pares o un consejero.`,
        prompt: '¿Qué te ayuda a dejar espacio antes de responder cuando alguien comparte algo profundo? ¿Qué suposiciones sobre las creencias de los demás necesitas dejar a un lado?'
      },
      'pt-BR': {
        title: 'Presença antes de respostas: escutando entre diferentes crenças',
        content: `### O presente da atenção

Quando alguém compartilha uma luta espiritual, uma perda ou uma pergunta sobre sentido, o mais valioso que você pode oferecer geralmente é atenção. Não um conselho, não uma explicação teológica, não uma história sobre a sua própria experiência, pelo menos não no início. Atenção antes de interpretação. Presença antes de respostas.

Isso pode ser surpreendentemente difícil. Muitos de nós ficamos ansiosos diante da dor alheia e queremos resolvê-la rápido. Também podemos sentir um forte impulso de compartilhar o que nos ajudou, principalmente se a nossa fé ou filosofia foi uma tábua de salvação. Esses impulsos nascem do cuidado. A prática é percebê-los e deixá-los esperar.

### Deixe a pessoa escolher a linguagem

As pessoas descrevem a vida interior com palavras muito diferentes. Uma fala da vontade de Deus, outra do universo, outra de sorte, destino, energia ou simplesmente de "como as coisas são". Quando você acompanha alguém, reflita o referencial da pessoa sem traduzi-lo para o seu.

Se uma amiga diz "Sinto que Deus ficou em silêncio", você pode responder "Parece que esse silêncio está doendo muito em você". Você evitaria reformular como "Talvez você só esteja deprimida" ou "Talvez o universo esteja ensinando algo". Permanecer dentro da linguagem dela comunica respeito e a ajuda a se sentir compreendida.

### Deixando as suposições de lado

Escutar entre diferentes crenças pede que percebamos as nossas suposições e as deixemos de lado, pelo menos durante a conversa. Suposições comuns incluem:

- Que a outra pessoa acredita no mesmo que a família ou a comunidade dela.
- Que uma pessoa religiosa necessariamente encontra consolo na fé.
- Que uma pessoa não religiosa não tem necessidades espirituais.
- Que a dúvida é um problema a ser resolvido.
- Que o seu próprio caminho funcionaria para ela.

### Prática: uma rodada de escuta

- Convide um amigo de confiança para falar por dez minutos sobre algo que dá sentido à vida dele ou algo sobre o qual ele está se perguntando.
- O seu papel é apenas escutar, devolver o que ouviu com as próprias palavras dele e fazer uma ou duas perguntas abertas.
- Evite dar conselhos, contar histórias sobre você ou compartilhar as suas crenças durante esse tempo.
- Depois, pergunte ao seu amigo como foi ser escutado dessa forma.
- Em seguida, reflita em particular: que suposições apareceram em você? Em que momento você mais quis falar?

### Uma nota sobre as suas próprias necessidades

Acompanhar outras pessoas pode despertar o seu próprio luto ou as suas próprias perguntas. Isso é sinal da sua humanidade, não um fracasso. Garanta que você também tenha um lugar para levar o que carrega, seja um amigo, um acompanhante espiritual, uma liderança da sua comunidade de fé, um grupo de apoio ou um terapeuta.`,
        prompt: 'O que ajuda você a deixar espaço antes de responder quando alguém compartilha algo profundo? Quais suposições sobre as crenças dos outros você precisa deixar de lado?'
      }
    },
    {
      id: 'les_spir_11',
      slug: 'consent-ethics-and-power',
      duration: 20,
      sort: 2,
      en: {
        title: 'Consent, Ethics & Power',
        content: `### Care creates influence

Whenever we support someone during a vulnerable time, we gain a kind of influence. A grieving friend may remember our words for years. A person questioning their faith may be unusually open to suggestion. Someone who feels alone may come to rely on us heavily. This influence is not bad in itself, but it carries responsibility.

Ethical spiritual companionship protects the other person’s freedom: their freedom to believe or not believe, to practice or not practice, to accept or decline help, and to make their own choices about their life.

### Ask before offering

A simple principle guides much of this lesson: ask permission before prayer, silence, touch, sacred texts, or ritual. Even when you share a tradition with someone, do not assume what they want in a particular moment.

Clear, easy-to-decline invitations might sound like:

- "Would it be welcome if I said a short prayer, or would you rather we just sit together?"
- "I have a reading that means a lot to me. Would you like to hear it, or is now not the time?"
- "Would a hand on your shoulder be okay?"
- "Is it all right if I check in with you about this next week?"

Make "no" as easy to say as "yes." If someone hesitates, treat that as a no for now.

### No proselytizing

Supporting someone in a vulnerable moment is not an opportunity to recruit them to your beliefs, your community, or your practices. This applies whether you are religious, spiritual, or secular. If someone asks about your beliefs, you can share honestly and briefly, then return the focus to them.

### Privacy and confidentiality

What people share in moments of spiritual struggle is often deeply personal. Keep it private unless there is a safety concern. Avoid sharing someone’s story, even as a prayer request or an example, without their clear permission.

### Avoiding dependency

Healthy support helps people strengthen their own resources and connections. Watch for signs that someone is relying on you alone, or that you are enjoying being needed in ways that do not serve them. Encourage a wider circle of support: friends, community, and qualified professionals when needed.

### Practice: a power check

- Think of someone you support, formally or informally.
- List the ways you might hold influence in that relationship: age, role, knowledge, faith leadership, their dependence on you, or their vulnerability right now.
- Write one sentence you could use to ask consent before offering a spiritual practice.
- Write one step you could take to widen their circle of support.
- Notice any places where you might be overstepping, and consider how to adjust with kindness.`,
        prompt: 'Where could power or influence be overlooked in the ways you support others? How will you ask permission clearly and make it easy for someone to say no?'
      },
      es: {
        title: 'Consentimiento, ética y poder',
        content: `### El cuidado genera influencia

Siempre que acompañamos a alguien en un momento vulnerable, adquirimos cierta influencia. Un amigo en duelo puede recordar nuestras palabras durante años. Una persona que cuestiona su fe puede estar especialmente abierta a sugerencias. Alguien que se siente solo puede llegar a depender mucho de nosotros. Esta influencia no es mala en sí misma, pero conlleva responsabilidad.

El acompañamiento espiritual ético protege la libertad de la otra persona: su libertad de creer o no creer, de practicar o no, de aceptar o rechazar ayuda y de tomar sus propias decisiones sobre su vida.

### Preguntar antes de ofrecer

Un principio sencillo guía gran parte de esta lección: pide permiso antes de ofrecer oración, silencio, contacto físico, textos sagrados o rituales. Incluso cuando compartes la misma tradición con alguien, no des por hecho lo que quiere en un momento determinado.

Las invitaciones claras y fáciles de rechazar pueden sonar así:

- "¿Te gustaría que dijera una oración breve o prefieres que simplemente estemos juntos?"
- "Tengo una lectura que significa mucho para mí. ¿Te gustaría escucharla o no es el momento?"
- "¿Está bien si pongo mi mano en tu hombro?"
- "¿Te parece bien si te pregunto cómo sigues la próxima semana?"

Haz que decir "no" sea tan fácil como decir "sí". Si alguien duda, tómalo como un no por ahora.

### Sin proselitismo

Acompañar a alguien en un momento vulnerable no es una oportunidad para atraerle a tus creencias, tu comunidad o tus prácticas. Esto aplica tanto si eres religioso como espiritual o laico. Si alguien te pregunta por tus creencias, puedes compartir con honestidad y brevedad, y luego volver a centrar la atención en esa persona.

### Privacidad y confidencialidad

Lo que las personas comparten en momentos de lucha espiritual suele ser muy íntimo. Mantenlo en privado, salvo que haya un riesgo para la seguridad. Evita contar la historia de alguien, incluso como petición de oración o como ejemplo, sin su permiso claro.

### Evitar la dependencia

El apoyo sano ayuda a las personas a fortalecer sus propios recursos y vínculos. Presta atención a señales de que alguien depende solo de ti, o de que disfrutas sentirte necesario de maneras que no le sirven. Anima a ampliar su red de apoyo: amistades, comunidad y profesionales calificados cuando haga falta.

### Práctica: revisar el poder

- Piensa en alguien a quien acompañas, de manera formal o informal.
- Enumera las formas en que podrías tener influencia en esa relación: edad, rol, conocimiento, liderazgo en la fe, su dependencia de ti o su vulnerabilidad actual.
- Escribe una frase que podrías usar para pedir consentimiento antes de ofrecer una práctica espiritual.
- Escribe un paso que podrías dar para ampliar su red de apoyo.
- Observa si en algún lugar podrías estar sobrepasando límites y piensa cómo ajustarlo con amabilidad.`,
        prompt: '¿Dónde podría pasarse por alto el poder o la influencia en tu manera de acompañar a otros? ¿Cómo pedirás permiso con claridad y harás que sea fácil decir que no?'
      },
      'pt-BR': {
        title: 'Consentimento, ética e poder',
        content: `### O cuidado gera influência

Sempre que apoiamos alguém em um momento vulnerável, ganhamos um tipo de influência. Um amigo de luto pode lembrar das nossas palavras por anos. Uma pessoa que questiona a sua fé pode estar especialmente aberta a sugestões. Alguém que se sente sozinho pode passar a depender muito de nós. Essa influência não é ruim em si, mas traz responsabilidade.

O acompanhamento espiritual ético protege a liberdade da outra pessoa: a liberdade de crer ou não crer, de praticar ou não praticar, de aceitar ou recusar ajuda e de tomar as próprias decisões sobre a sua vida.

### Pergunte antes de oferecer

Um princípio simples orienta grande parte desta lição: peça permissão antes de oferecer oração, silêncio, toque, textos sagrados ou rituais. Mesmo quando você compartilha a mesma tradição com alguém, não presuma o que a pessoa quer em um determinado momento.

Convites claros e fáceis de recusar podem soar assim:

- "Seria bom se eu fizesse uma oração curta, ou você prefere que a gente só fique junto?"
- "Tenho uma leitura que significa muito para mim. Você gostaria de ouvir, ou não é o momento?"
- "Tudo bem se eu colocar a mão no seu ombro?"
- "Posso perguntar como você está na semana que vem?"

Faça com que dizer "não" seja tão fácil quanto dizer "sim". Se alguém hesitar, considere isso um não, por enquanto.

### Sem proselitismo

Apoiar alguém em um momento vulnerável não é uma oportunidade para atraí-lo para as suas crenças, a sua comunidade ou as suas práticas. Isso vale para quem é religioso, espiritualizado ou laico. Se alguém perguntar sobre as suas crenças, você pode compartilhar com honestidade e brevidade, e depois voltar o foco para a pessoa.

### Privacidade e confidencialidade

O que as pessoas compartilham em momentos de luta espiritual costuma ser muito íntimo. Guarde em sigilo, a menos que haja uma preocupação com a segurança. Evite contar a história de alguém, mesmo como pedido de oração ou como exemplo, sem permissão clara.

### Evitando a dependência

O apoio saudável ajuda as pessoas a fortalecer os próprios recursos e vínculos. Observe sinais de que alguém está dependendo só de você, ou de que você está gostando de ser necessário de formas que não ajudam a pessoa. Incentive uma rede de apoio mais ampla: amigos, comunidade e profissionais qualificados quando necessário.

### Prática: checando o poder

- Pense em alguém que você apoia, de forma formal ou informal.
- Liste as maneiras pelas quais você pode ter influência nessa relação: idade, papel, conhecimento, liderança religiosa, a dependência da pessoa em relação a você ou a vulnerabilidade dela agora.
- Escreva uma frase que você poderia usar para pedir consentimento antes de oferecer uma prática espiritual.
- Escreva um passo que você poderia dar para ampliar a rede de apoio dessa pessoa.
- Observe se há lugares em que você pode estar ultrapassando limites e pense em como ajustar com gentileza.`,
        prompt: 'Onde o poder ou a influência podem estar passando despercebidos na forma como você apoia os outros? Como você vai pedir permissão com clareza e tornar fácil para alguém dizer não?'
      }
    },
    {
      id: 'les_spir_12',
      slug: 'limits-referral-and-a-rule-of-practice',
      duration: 25,
      sort: 3,
      en: {
        title: 'Knowing Your Limits & Writing a Rule of Practice',
        content: `### The edge of a non-clinical role

Spiritual companionship, whether offered as a friend, family member, volunteer, or community member, is valuable. It is also different from counseling, therapy, medical care, or crisis intervention. Knowing the edge of your role protects both you and the person you support.

Some situations call for more than presence and reflection. Consider encouraging professional help, and helping the person connect with it, when you notice:

- Talk of suicide, self-harm, or wanting to disappear.
- Threats of violence toward others, or signs that someone is being harmed.
- Confusion, hearing or seeing things others do not, or a sudden and severe change in behavior.
- Heavy substance use or signs of overdose.
- Grief or distress that has kept someone from functioning for a long time.
- Physical symptoms that may need medical attention.

### In a crisis

If someone is in immediate danger, contact your local emergency number or a crisis line such as 988 in the US. It is okay, and often kind, to ask directly: "Are you thinking about ending your life?" Asking clearly shows you are willing to hear the answer. Stay with the person if it is safe to do so while help is arranged.

### Referral is an act of care

Suggesting professional support is not abandoning someone or admitting failure. You can continue to be present as a friend while a counselor, doctor, chaplain, or other qualified person offers what you cannot. Many people appreciate practical help, such as finding a phone number, sitting with them while they make a call, or offering a ride to an appointment.

### A rule of practice

Many contemplative traditions use a "rule," a short set of commitments that shapes how a person lives and serves. You can write your own rule for how you will companion others. It might include commitments to:

- **Consent**: asking before offering prayer, touch, texts, or ritual.
- **Humility**: remembering you do not have all the answers.
- **Confidentiality**: keeping what is shared private unless safety is at risk.
- **Support for yourself**: having your own place to process what you carry, such as a mentor, spiritual director, or peer group.
- **Referral**: knowing when and how to connect someone with qualified help.

### Practice: write your rule

- Write five short commitments that will make your support safer and kinder.
- List the crisis and referral resources you will keep ready, including your local emergency number and a crisis line.
- Name one person you can turn to when supporting someone feels heavy.
- Close the course gently: name one thing you want to carry forward, one thing you are setting down for now, and one source of support you can contact if needed.`,
        prompt: 'Write five commitments that make your support of others safer. Which crisis and referral resources will you keep ready, and who supports you?'
      },
      es: {
        title: 'Reconocer tus límites y escribir una regla de práctica',
        content: `### El borde de un rol no clínico

El acompañamiento espiritual, ya sea como amigo, familiar, voluntario o miembro de una comunidad, es valioso. También es distinto de la consejería, la psicoterapia, la atención médica o la intervención en crisis. Conocer el borde de tu rol te protege a ti y a la persona que acompañas.

Algunas situaciones requieren algo más que presencia y reflexión. Considera animar a la persona a buscar ayuda profesional, y ayudarle a conectar con ella, cuando notes:

- Que habla de suicidio, de hacerse daño o de querer desaparecer.
- Amenazas de violencia hacia otros o señales de que alguien está siendo dañado.
- Confusión, que escucha o ve cosas que los demás no perciben, o un cambio de conducta repentino y fuerte.
- Consumo intenso de sustancias o señales de sobredosis.
- Un duelo o malestar que le ha impedido funcionar durante mucho tiempo.
- Síntomas físicos que podrían necesitar atención médica.

### En una crisis

Si alguien está en peligro inmediato, comunícate con tu número local de emergencias o con una línea de crisis como el 988 en Estados Unidos. Está bien, y a menudo es un acto de cuidado, preguntar directamente: "¿Estás pensando en quitarte la vida?". Preguntar con claridad muestra que estás dispuesto a escuchar la respuesta. Si es seguro, quédate con la persona mientras se organiza la ayuda.

### Derivar es un acto de cuidado

Sugerir apoyo profesional no es abandonar a alguien ni admitir un fracaso. Puedes seguir presente como amigo mientras un consejero, médico, capellán u otra persona calificada ofrece lo que tú no puedes. Muchas personas agradecen la ayuda práctica, como buscar un número de teléfono, acompañarlas mientras hacen una llamada u ofrecerles transporte a una cita.

### Una regla de práctica

Muchas tradiciones contemplativas usan una "regla", un conjunto breve de compromisos que da forma a cómo vive y sirve una persona. Puedes escribir tu propia regla sobre cómo acompañarás a otros. Podría incluir compromisos de:

- **Consentimiento**: preguntar antes de ofrecer oración, contacto, textos o rituales.
- **Humildad**: recordar que no tienes todas las respuestas.
- **Confidencialidad**: mantener en privado lo que se comparte, salvo que la seguridad esté en riesgo.
- **Apoyo para ti**: tener tu propio espacio para procesar lo que cargas, como un mentor, un acompañante espiritual o un grupo de pares.
- **Derivación**: saber cuándo y cómo conectar a alguien con ayuda calificada.

### Práctica: escribe tu regla

- Escribe cinco compromisos breves que harán tu acompañamiento más seguro y amable.
- Anota los recursos de crisis y derivación que tendrás a mano, incluido tu número local de emergencias y una línea de crisis.
- Nombra a una persona a quien puedas acudir cuando acompañar a alguien se sienta pesado.
- Cierra el curso con suavidad: nombra algo que quieras llevar contigo, algo que dejas a un lado por ahora y una fuente de apoyo a la que puedas recurrir si lo necesitas.`,
        prompt: 'Escribe cinco compromisos que hagan más seguro tu acompañamiento. ¿Qué recursos de crisis y derivación tendrás a mano y quién te acompaña a ti?'
      },
      'pt-BR': {
        title: 'Reconhecendo os seus limites e escrevendo uma regra de prática',
        content: `### O limite de um papel não clínico

O acompanhamento espiritual, oferecido como amigo, familiar, voluntário ou membro de uma comunidade, é valioso. Ele também é diferente de aconselhamento, psicoterapia, cuidado médico ou intervenção em crise. Conhecer o limite do seu papel protege você e a pessoa que você apoia.

Algumas situações pedem mais do que presença e reflexão. Considere incentivar a busca por ajuda profissional, e ajudar a pessoa a se conectar com ela, quando perceber:

- Falas sobre suicídio, automutilação ou vontade de desaparecer.
- Ameaças de violência contra outras pessoas ou sinais de que alguém está sendo machucado.
- Confusão, ouvir ou ver coisas que os outros não percebem, ou uma mudança de comportamento repentina e intensa.
- Uso pesado de substâncias ou sinais de overdose.
- Luto ou sofrimento que impede a pessoa de dar conta da vida há muito tempo.
- Sintomas físicos que podem precisar de atenção médica.

### Em uma crise

Se alguém estiver em perigo imediato, ligue para o número de emergência local ou para uma linha de crise como o 988 nos Estados Unidos. Tudo bem, e muitas vezes é um gesto de cuidado, perguntar diretamente: "Você está pensando em tirar a própria vida?". Perguntar com clareza mostra que você está disposto a ouvir a resposta. Se for seguro, fique com a pessoa enquanto a ajuda é providenciada.

### Encaminhar é um ato de cuidado

Sugerir apoio profissional não é abandonar alguém nem admitir fracasso. Você pode continuar presente como amigo enquanto um terapeuta, médico, capelão ou outra pessoa qualificada oferece o que você não pode. Muitas pessoas agradecem ajuda prática, como encontrar um número de telefone, ficar ao lado enquanto fazem uma ligação ou oferecer uma carona até uma consulta.

### Uma regra de prática

Muitas tradições contemplativas usam uma "regra", um conjunto curto de compromissos que molda o modo como uma pessoa vive e serve. Você pode escrever a sua própria regra sobre como vai acompanhar os outros. Ela pode incluir compromissos com:

- **Consentimento**: perguntar antes de oferecer oração, toque, textos ou rituais.
- **Humildade**: lembrar que você não tem todas as respostas.
- **Confidencialidade**: manter em sigilo o que foi compartilhado, a menos que haja risco à segurança.
- **Apoio para você**: ter o seu próprio espaço para processar o que carrega, como um mentor, um acompanhante espiritual ou um grupo de apoio.
- **Encaminhamento**: saber quando e como conectar alguém a uma ajuda qualificada.

### Prática: escreva a sua regra

- Escreva cinco compromissos curtos que tornarão o seu apoio mais seguro e gentil.
- Anote os recursos de crise e de encaminhamento que você vai manter à mão, incluindo o número de emergência local e uma linha de crise.
- Nomeie uma pessoa a quem você pode recorrer quando apoiar alguém ficar pesado.
- Encerre o curso com delicadeza: nomeie algo que você quer levar adiante, algo que está deixando de lado por enquanto e uma fonte de apoio que pode procurar se precisar.`,
        prompt: 'Escreva cinco compromissos que tornem o seu apoio aos outros mais seguro. Quais recursos de crise e de encaminhamento você vai manter à mão, e quem apoia você?'
      }
    }
  ]
});

// ---------------------------------------------------------------------------
// 2. Supporting Others (new)
// ---------------------------------------------------------------------------
const courseSupporting = {
  id: 'course_supporting_others',
  slug: 'supporting-others',
  is_premium: 1,
  level: 'All levels',
  hours: 4.0,
  en: {
    title: 'Supporting Someone Who Is Struggling',
    subtitle: 'How to be there for a friend or family member without losing yourself.',
    description: 'A practical, compassionate guide for anyone walking alongside a person in emotional pain: listening without fixing, validating with honesty, respecting choice, keeping healthy boundaries, recognizing a crisis, and knowing when and how to encourage professional help.',
    outcomes: JSON.stringify(['Listen with open questions, reflections, and silence instead of rushing to fix', 'Validate someone’s experience while staying honest', 'Set boundaries that protect both you and the person you support', 'Recognize warning signs and encourage professional help with care'])
  },
  es: {
    title: 'Acompañar a alguien que está pasando por un momento difícil',
    subtitle: 'Cómo estar presente para un amigo o familiar sin perderte en el camino.',
    description: 'Una guía práctica y compasiva para quienes acompañan a una persona con dolor emocional: escuchar sin querer arreglar, validar con honestidad, respetar sus decisiones, sostener límites sanos, reconocer una crisis y saber cuándo y cómo animar a buscar ayuda profesional.',
    outcomes: JSON.stringify(['Escuchar con preguntas abiertas, reflejos y silencio en lugar de apresurarte a resolver', 'Validar la experiencia de alguien sin dejar de ser honesto', 'Establecer límites que te protejan a ti y a la persona que acompañas', 'Reconocer señales de alerta y animar a buscar ayuda profesional con cuidado'])
  },
  'pt-BR': {
    title: 'Apoiando alguém que está passando por um momento difícil',
    subtitle: 'Como estar presente para um amigo ou familiar sem se perder no caminho.',
    description: 'Um guia prático e compassivo para quem caminha ao lado de uma pessoa em sofrimento emocional: escutar sem querer consertar, validar com honestidade, respeitar escolhas, manter limites saudáveis, reconhecer uma crise e saber quando e como incentivar a busca por ajuda profissional.',
    outcomes: JSON.stringify(['Escutar com perguntas abertas, reflexões e silêncio em vez de correr para resolver', 'Validar a experiência de alguém sem deixar de ser honesto', 'Estabelecer limites que protejam você e a pessoa que você apoia', 'Reconhecer sinais de alerta e incentivar a ajuda profissional com cuidado'])
  },
  modules: []
};
COURSES_B.push(courseSupporting);

courseSupporting.modules.push({
  id: 'mod_supp_1',
  slug: 'listening-without-fixing',
  sort: 1,
  en: { title: 'Listening Without Fixing', description: 'What support really means, why we rush to solutions, and the core skills of open questions, reflections, summaries, and silence.' },
  es: { title: 'Escuchar sin querer arreglar', description: 'Qué significa realmente apoyar, por qué nos apresuramos a dar soluciones y las habilidades básicas de preguntas abiertas, reflejos, resúmenes y silencio.' },
  'pt-BR': { title: 'Escutar sem querer consertar', description: 'O que apoiar realmente significa, por que corremos para as soluções e as habilidades básicas de perguntas abertas, reflexões, resumos e silêncio.' },
  lessons: [
    {
      id: 'les_supp_1',
      slug: 'showing-up-when-someone-struggles',
      duration: 15,
      sort: 1,
      en: {
        title: 'Showing Up: What Support Really Means',
        content: `### You do not have to be an expert

When someone you care about is struggling, it is common to feel unsure, helpless, or afraid of saying the wrong thing. Many people hold back because they believe they need special training to help. The truth is gentler: most of what helps a struggling person is ordinary human care, offered steadily. Showing up, listening, and staying connected matter a great deal.

This course is for friends, partners, parents, adult children, colleagues, and neighbors. It is not training to become a counselor, and it will not ask you to diagnose or treat anyone. It will help you be a steadier, kinder presence, and recognize when more help is needed.

### What support is, and what it is not

Support **is**:

- Being present, in person or by message, in a way that says "you are not alone."
- Listening to understand, not just to respond.
- Respecting the other person as the expert on their own life.
- Offering practical help when it is wanted.
- Encouraging connection with other people and, when needed, qualified professionals.

Support **is not**:

- Solving the person’s problems for them.
- Carrying their whole burden on your own.
- Making them feel better on your timeline.
- Agreeing with every conclusion they reach.
- Replacing medical or mental health care.

### Small acts count

People who have come through hard times often remember small gestures: a text that said "thinking of you, no need to reply," a meal left at the door, a walk, a friend who kept inviting them even when they kept saying no. You do not need to find perfect words. Consistency and warmth often matter more than eloquence.

### Practice: your support starting point

- Think of someone in your life who may be struggling right now. You do not need to write their name.
- Write down what you have noticed that makes you think they are having a hard time.
- Write down what you already do well as a support person, such as being reliable, funny, calm, or practical.
- Write down what worries you most about supporting them.
- Choose one small, low-pressure way to reach out this week, such as a short message, an invitation, or an offer of practical help.

### A note for you

If supporting someone has become overwhelming, you are not failing. Later in this course we will explore capacity, boundaries, and caring for yourself. For now, notice how you are feeling, and remember that your wellbeing matters too.`,
        prompt: 'Who in your life might be struggling right now, and what small, low-pressure way could you reach out to them this week? What worries you most about supporting them?'
      },
      es: {
        title: 'Estar presente: qué significa realmente apoyar',
        content: `### No necesitas ser experto

Cuando alguien que quieres está pasando por un momento difícil, es común sentir inseguridad, impotencia o miedo de decir algo equivocado. Muchas personas se contienen porque creen que necesitan una formación especial para ayudar. La verdad es más amable: la mayor parte de lo que ayuda a una persona que sufre es el cuidado humano de todos los días, ofrecido con constancia. Estar presente, escuchar y mantener el contacto importan muchísimo.

Este curso es para amistades, parejas, madres y padres, hijos adultos, compañeros de trabajo y vecinos. No es una formación para convertirte en consejero y no te pedirá diagnosticar ni tratar a nadie. Te ayudará a ser una presencia más estable y amable, y a reconocer cuándo hace falta más ayuda.

### Qué es apoyar y qué no lo es

Apoyar **es**:

- Estar presente, en persona o por mensaje, de una forma que diga "no estás solo".
- Escuchar para comprender, no solo para responder.
- Respetar a la otra persona como la experta en su propia vida.
- Ofrecer ayuda práctica cuando sea bienvenida.
- Animar la conexión con otras personas y, cuando haga falta, con profesionales calificados.

Apoyar **no es**:

- Resolverle los problemas a la otra persona.
- Cargar tú solo con todo su peso.
- Lograr que se sienta mejor en tus tiempos.
- Estar de acuerdo con todas sus conclusiones.
- Sustituir la atención médica o de salud mental.

### Los pequeños gestos cuentan

Las personas que han atravesado tiempos difíciles suelen recordar gestos pequeños: un mensaje que decía "pienso en ti, no hace falta que respondas", una comida dejada en la puerta, una caminata, una amiga que siguió invitándolas aunque siempre decían que no. No necesitas encontrar las palabras perfectas. La constancia y la calidez suelen importar más que la elocuencia.

### Práctica: tu punto de partida

- Piensa en alguien de tu vida que quizá esté pasando por un momento difícil. No necesitas escribir su nombre.
- Anota lo que has notado que te hace pensar que está sufriendo.
- Anota lo que ya haces bien como apoyo, por ejemplo ser confiable, divertido, tranquilo o práctico.
- Anota lo que más te preocupa de acompañarle.
- Elige una forma pequeña y sin presión de acercarte esta semana, como un mensaje breve, una invitación o un ofrecimiento de ayuda práctica.

### Una nota para ti

Si acompañar a alguien se ha vuelto abrumador, no estás fallando. Más adelante en este curso exploraremos la capacidad, los límites y el cuidado de ti mismo. Por ahora, observa cómo te sientes y recuerda que tu bienestar también importa.`,
        prompt: '¿Quién en tu vida podría estar pasando por un momento difícil y qué forma pequeña y sin presión podrías usar para acercarte esta semana? ¿Qué es lo que más te preocupa de acompañarle?'
      },
      'pt-BR': {
        title: 'Estar presente: o que apoiar realmente significa',
        content: `### Você não precisa ser especialista

Quando alguém de quem você gosta está sofrendo, é comum sentir insegurança, impotência ou medo de dizer a coisa errada. Muitas pessoas se retraem porque acreditam que precisam de um treinamento especial para ajudar. A verdade é mais gentil: a maior parte do que ajuda uma pessoa em sofrimento é o cuidado humano comum, oferecido com constância. Aparecer, escutar e manter o contato fazem muita diferença.

Este curso é para amigos, parceiros, mães e pais, filhos adultos, colegas de trabalho e vizinhos. Não é uma formação para se tornar terapeuta e não vai pedir que você diagnostique ou trate ninguém. Ele vai ajudar você a ser uma presença mais estável e gentil, e a reconhecer quando é preciso mais ajuda.

### O que é apoio e o que não é

Apoiar **é**:

- Estar presente, pessoalmente ou por mensagem, de um jeito que diga "você não está sozinho".
- Escutar para compreender, não só para responder.
- Respeitar a outra pessoa como especialista na própria vida.
- Oferecer ajuda prática quando ela for bem-vinda.
- Incentivar a conexão com outras pessoas e, quando necessário, com profissionais qualificados.

Apoiar **não é**:

- Resolver os problemas da pessoa por ela.
- Carregar sozinho todo o peso dela.
- Fazer a pessoa se sentir melhor no seu tempo.
- Concordar com todas as conclusões dela.
- Substituir o cuidado médico ou de saúde mental.

### Pequenos gestos contam

Quem já atravessou tempos difíceis costuma lembrar de gestos pequenos: uma mensagem dizendo "pensando em você, não precisa responder", uma refeição deixada na porta, uma caminhada, uma amiga que continuou convidando mesmo quando a resposta era sempre não. Você não precisa encontrar as palavras perfeitas. Constância e carinho costumam importar mais do que eloquência.

### Prática: o seu ponto de partida

- Pense em alguém da sua vida que talvez esteja passando por um momento difícil. Não é preciso escrever o nome.
- Anote o que você percebeu que faz você pensar que essa pessoa está sofrendo.
- Anote o que você já faz bem como apoio, como ser confiável, bem-humorado, calmo ou prático.
- Anote o que mais preocupa você em apoiar essa pessoa.
- Escolha uma forma pequena e sem pressão de se aproximar nesta semana, como uma mensagem curta, um convite ou uma oferta de ajuda prática.

### Uma nota para você

Se apoiar alguém se tornou esmagador, você não está falhando. Mais adiante neste curso vamos explorar capacidade, limites e autocuidado. Por enquanto, perceba como você está se sentindo e lembre-se de que o seu bem-estar também importa.`,
        prompt: 'Quem na sua vida pode estar passando por um momento difícil, e que forma pequena e sem pressão você poderia usar para se aproximar nesta semana? O que mais preocupa você em apoiar essa pessoa?'
      }
    },
    {
      id: 'les_supp_2',
      slug: 'the-urge-to-fix',
      duration: 20,
      sort: 2,
      en: {
        title: 'The Urge to Fix',
        content: `### Why we rush toward solutions

When someone we love is in pain, many of us feel an almost physical pull to make it stop. We offer advice, suggest resources, point out the bright side, or share how we handled something similar. These responses come from care. Often, though, they also come from our own discomfort. Sitting with someone else’s distress is hard, and fixing can feel like relief for both people.

The difficulty is that premature solutions can leave the other person feeling unheard. They may think, "You don’t understand," or "You just want me to stop talking about this." Some people stop sharing altogether.

### What fixing can sound like

Fixing is not always obvious. It can sound like:

- "Have you tried..." or "You should just..."
- "Look on the bright side."
- "At least it’s not..."
- "When that happened to me, I..."
- "Don’t worry, it’ll all work out."
- Changing the subject to something more cheerful.

None of these are forbidden. Advice and perspective can be helpful later, when the person feels understood and asks for them. The problem is timing and assumption.

### What listening offers instead

When you listen without fixing, you communicate: "Your experience matters. I can handle hearing it. You are not too much." That message alone can ease some of the loneliness of pain. It also helps the person think more clearly, because they have space to put their experience into words.

A useful question to hold is: "Does this person want to be heard, helped, or hugged?" You can even ask directly: "Would it help more if I just listened, or would you like some ideas?"

### Practice: noticing your fixing reflex

- Recall a recent conversation where someone shared something difficult with you.
- Write down what you said in the first minute. Was it listening, reassuring, advising, or relating it to yourself?
- Notice what you were feeling in your body at that moment, such as tension, worry, or impatience.
- Write down one sentence you could have said to simply reflect what they were going through.
- In your next supportive conversation, try to wait until the person has spoken for a few minutes before offering any suggestions. Notice what happens.

### Be gentle with yourself

Everyone slips into fixing sometimes. You can repair it in the moment: "I just jumped to advice. Can I back up and hear more about how you’re feeling?" People usually appreciate this kind of honesty.`,
        prompt: 'When do you tend to rush toward solutions, and what are you feeling in those moments? What might you say instead to help someone feel heard?'
      },
      es: {
        title: 'El impulso de arreglar',
        content: `### Por qué corremos hacia las soluciones

Cuando alguien que queremos sufre, muchas personas sentimos un impulso casi físico de hacer que el dolor se detenga. Damos consejos, sugerimos recursos, señalamos el lado positivo o contamos cómo resolvimos algo parecido. Estas respuestas nacen del cariño. Sin embargo, a menudo también nacen de nuestra propia incomodidad. Sostener el malestar de otra persona es difícil, y arreglar puede sentirse como un alivio para ambos.

El problema es que las soluciones prematuras pueden dejar a la otra persona sintiéndose no escuchada. Puede pensar: "No me entiendes" o "Solo quieres que deje de hablar de esto". Algunas personas dejan de compartir por completo.

### Cómo suena el arreglar

El impulso de arreglar no siempre es evidente. Puede sonar así:

- "¿Ya probaste...?" o "Deberías simplemente..."
- "Mira el lado bueno."
- "Por lo menos no es..."
- "Cuando a mí me pasó eso, yo..."
- "No te preocupes, todo va a salir bien."
- Cambiar de tema hacia algo más alegre.

Nada de esto está prohibido. Los consejos y otras perspectivas pueden ayudar más adelante, cuando la persona se siente comprendida y los pide. El problema está en el momento y en las suposiciones.

### Lo que ofrece la escucha

Cuando escuchas sin arreglar, comunicas: "Tu experiencia importa. Puedo escucharla. No eres demasiado". Ese mensaje por sí solo puede aliviar parte de la soledad del dolor. También ayuda a la persona a pensar con más claridad, porque tiene espacio para poner su experiencia en palabras.

Una pregunta útil para tener presente es: "¿Esta persona quiere ser escuchada, ayudada o abrazada?". Incluso puedes preguntarlo directamente: "¿Te ayudaría más que solo te escuche o te gustaría que te diera algunas ideas?".

### Práctica: notar tu reflejo de arreglar

- Recuerda una conversación reciente en la que alguien te contó algo difícil.
- Escribe lo que dijiste en el primer minuto. ¿Fue escuchar, tranquilizar, aconsejar o relacionarlo contigo?
- Observa lo que sentías en tu cuerpo en ese momento, como tensión, preocupación o impaciencia.
- Escribe una frase que podrías haber dicho para simplemente reflejar lo que estaba viviendo.
- En tu próxima conversación de apoyo, intenta esperar a que la persona hable durante unos minutos antes de ofrecer sugerencias. Observa qué sucede.

### Sé amable contigo

Todas las personas caemos a veces en el impulso de arreglar. Puedes repararlo en el momento: "Acabo de saltar a darte consejos. ¿Puedo retroceder y escuchar más sobre cómo te sientes?". La gente suele agradecer este tipo de honestidad.`,
        prompt: '¿En qué momentos tiendes a apresurarte hacia las soluciones y qué sientes en esos momentos? ¿Qué podrías decir en su lugar para que alguien se sienta escuchado?'
      },
      'pt-BR': {
        title: 'O impulso de consertar',
        content: `### Por que corremos para as soluções

Quando alguém que amamos está sofrendo, muitos de nós sentimos um impulso quase físico de fazer a dor parar. Damos conselhos, sugerimos recursos, apontamos o lado bom ou contamos como lidamos com algo parecido. Essas respostas nascem do cuidado. Muitas vezes, porém, também nascem do nosso próprio desconforto. Ficar com o sofrimento de outra pessoa é difícil, e consertar pode parecer um alívio para os dois.

O problema é que soluções prematuras podem deixar a outra pessoa se sentindo não ouvida. Ela pode pensar "Você não entende" ou "Você só quer que eu pare de falar disso". Algumas pessoas deixam de compartilhar completamente.

### Como soa o consertar

O impulso de consertar nem sempre é óbvio. Ele pode soar assim:

- "Você já tentou..." ou "É só você..."
- "Olhe pelo lado bom."
- "Pelo menos não é..."
- "Quando isso aconteceu comigo, eu..."
- "Não se preocupe, vai dar tudo certo."
- Mudar de assunto para algo mais alegre.

Nada disso é proibido. Conselhos e outras perspectivas podem ajudar mais tarde, quando a pessoa se sente compreendida e pede por eles. O problema está no momento e nas suposições.

### O que a escuta oferece

Quando você escuta sem consertar, comunica: "A sua experiência importa. Eu consigo ouvir isso. Você não é demais". Só essa mensagem já pode aliviar parte da solidão da dor. Ela também ajuda a pessoa a pensar com mais clareza, porque há espaço para colocar a experiência em palavras.

Uma pergunta útil para ter em mente é: "Essa pessoa quer ser ouvida, ajudada ou abraçada?". Você pode até perguntar diretamente: "Ajudaria mais se eu só escutasse, ou você gostaria de algumas ideias?".

### Prática: percebendo o seu reflexo de consertar

- Lembre-se de uma conversa recente em que alguém contou algo difícil para você.
- Escreva o que você disse no primeiro minuto. Foi escuta, tranquilização, conselho ou algo sobre você?
- Observe o que você sentia no corpo naquele momento, como tensão, preocupação ou impaciência.
- Escreva uma frase que você poderia ter dito para simplesmente refletir o que a pessoa estava vivendo.
- Na sua próxima conversa de apoio, tente esperar a pessoa falar por alguns minutos antes de oferecer qualquer sugestão. Observe o que acontece.

### Seja gentil consigo mesmo

Todo mundo às vezes cai no impulso de consertar. Você pode reparar isso na hora: "Acabei de pular para os conselhos. Posso voltar um pouco e ouvir mais sobre como você está se sentindo?". As pessoas costumam valorizar esse tipo de honestidade.`,
        prompt: 'Em que momentos você costuma correr para as soluções, e o que sente nesses momentos? O que você poderia dizer em vez disso para ajudar alguém a se sentir ouvido?'
      }
    },
    {
      id: 'les_supp_3',
      slug: 'open-questions-reflections-and-silence',
      duration: 20,
      sort: 3,
      en: {
        title: 'Open Questions, Reflections & Silence',
        content: `### Four simple listening tools

You do not need a script to listen well, but a few simple tools can make a real difference. Many counseling approaches, including motivational interviewing, emphasize a similar set of skills. You can use them in everyday conversations with friends and family.

- **Open questions** invite the person to say more. They usually begin with "what" or "how" and cannot be answered with a simple yes or no. "How have things been at home lately?" opens more space than "Is everything okay?"
- **Reflections** repeat back the heart of what you heard, in your own words or theirs. "It sounds like you’ve been carrying this mostly on your own." Reflections show you are following and give the person a chance to correct you.
- **Summaries** gather several points together, especially after someone has talked for a while. "So work has been piling up, you’re not sleeping well, and you feel like you can’t tell anyone at the office. Did I get that right?"
- **Silence** gives the person room to think and feel. Many of us rush to fill pauses. A few seconds of quiet often leads to the most important thing being said.

### Reflecting feelings, not just facts

A particularly helpful form of reflection names the feeling underneath the story. If a friend describes a tense family dinner, you might reflect: "That sounds exhausting," or "It sounds like you felt pretty alone at that table." You do not need to guess perfectly. If you are off, they will usually tell you, and that correction helps both of you understand.

### Avoiding interrogation

Questions are useful, but too many in a row can feel like an interview. A good rhythm is to follow a question with a reflection or two before asking another. Let the person lead where the conversation goes.

### Practice: a listening conversation

- The next time someone shares something with you, aim to use at least two open questions, three reflections, and one summary.
- Allow at least one pause of five seconds or more without filling it.
- Afterward, jot down which tool felt most natural and which felt awkward.
- Notice whether the other person said more, or said something different, than you expected.
- Practice one of these tools in a low-stakes conversation each day this week, such as with a colleague or a neighbor.

### Remember the purpose

These tools are not techniques for managing people. They are ways of expressing genuine interest and respect. If they begin to feel mechanical, slow down and return to curiosity: what is it really like to be this person, right now?`,
        prompt: 'Which of the four listening tools feels most natural to you, and which feels hardest? What happens in you during a silence in conversation?'
      },
      es: {
        title: 'Preguntas abiertas, reflejos y silencio',
        content: `### Cuatro herramientas sencillas de escucha

No necesitas un guion para escuchar bien, pero algunas herramientas sencillas pueden marcar una gran diferencia. Muchos enfoques de consejería, incluida la entrevista motivacional, destacan un conjunto de habilidades parecido. Puedes usarlas en conversaciones cotidianas con amistades y familiares.

- **Preguntas abiertas**: invitan a la persona a contar más. Suelen empezar con "qué" o "cómo" y no se responden con un simple sí o no. "¿Cómo han estado las cosas en casa últimamente?" abre más espacio que "¿Todo bien?".
- **Reflejos**: devuelven lo esencial de lo que escuchaste, con tus palabras o con las suyas. "Parece que has estado cargando con esto casi en soledad". Los reflejos muestran que estás siguiendo la conversación y le dan a la persona la oportunidad de corregirte.
- **Resúmenes**: reúnen varios puntos, sobre todo después de que alguien habló un buen rato. "Entonces, el trabajo se ha acumulado, no estás durmiendo bien y sientes que no puedes contárselo a nadie en la oficina. ¿Lo entendí bien?".
- **Silencio**: da espacio para pensar y sentir. Muchas personas nos apresuramos a llenar las pausas. Unos segundos de silencio a menudo permiten que se diga lo más importante.

### Reflejar sentimientos, no solo hechos

Una forma de reflejo especialmente útil nombra el sentimiento que hay debajo de la historia. Si una amiga describe una cena familiar tensa, podrías reflejar: "Suena agotador" o "Parece que te sentiste bastante sola en esa mesa". No necesitas adivinar a la perfección. Si te equivocas, normalmente te lo dirá, y esa corrección ayuda a que ambos comprendan mejor.

### Evitar el interrogatorio

Las preguntas son útiles, pero muchas seguidas pueden sentirse como una entrevista. Un buen ritmo es acompañar una pregunta con uno o dos reflejos antes de hacer otra. Deja que la persona guíe hacia dónde va la conversación.

### Práctica: una conversación de escucha

- La próxima vez que alguien te cuente algo, intenta usar al menos dos preguntas abiertas, tres reflejos y un resumen.
- Permite al menos una pausa de cinco segundos o más sin llenarla.
- Después, anota qué herramienta te resultó más natural y cuál te pareció incómoda.
- Observa si la otra persona dijo más, o algo distinto, de lo que esperabas.
- Practica una de estas herramientas en una conversación sin mucha carga cada día de esta semana, por ejemplo con un colega o un vecino.

### Recuerda el propósito

Estas herramientas no son técnicas para manejar a las personas. Son formas de expresar interés y respeto genuinos. Si empiezan a sentirse mecánicas, ve más despacio y vuelve a la curiosidad: ¿cómo es realmente ser esta persona, ahora mismo?`,
        prompt: '¿Cuál de las cuatro herramientas de escucha te resulta más natural y cuál más difícil? ¿Qué sucede en ti durante un silencio en una conversación?'
      },
      'pt-BR': {
        title: 'Perguntas abertas, reflexões e silêncio',
        content: `### Quatro ferramentas simples de escuta

Você não precisa de um roteiro para escutar bem, mas algumas ferramentas simples podem fazer uma grande diferença. Muitas abordagens de aconselhamento, incluindo a entrevista motivacional, destacam um conjunto de habilidades parecido. Você pode usá-las em conversas do dia a dia com amigos e familiares.

- **Perguntas abertas**: convidam a pessoa a contar mais. Geralmente começam com "o que" ou "como" e não podem ser respondidas com um simples sim ou não. "Como as coisas têm estado em casa ultimamente?" abre mais espaço do que "Está tudo bem?".
- **Reflexões**: devolvem o essencial do que você ouviu, com as suas palavras ou com as dela. "Parece que você tem carregado isso praticamente sozinho". As reflexões mostram que você está acompanhando e dão à pessoa a chance de corrigir você.
- **Resumos**: reúnem vários pontos, principalmente depois que alguém falou por um tempo. "Então o trabalho está se acumulando, você não está dormindo bem e sente que não pode contar para ninguém no escritório. Entendi certo?".
- **Silêncio**: dá espaço para pensar e sentir. Muitos de nós corremos para preencher as pausas. Alguns segundos de quietude muitas vezes permitem que a coisa mais importante seja dita.

### Refletir sentimentos, não só fatos

Uma forma de reflexão especialmente útil nomeia o sentimento que está por baixo da história. Se uma amiga descreve um jantar de família tenso, você pode refletir: "Parece exaustivo" ou "Parece que você se sentiu bem sozinha naquela mesa". Você não precisa acertar perfeitamente. Se errar, ela geralmente vai dizer, e essa correção ajuda os dois a entender melhor.

### Evitando o interrogatório

Perguntas são úteis, mas muitas seguidas podem parecer uma entrevista. Um bom ritmo é acompanhar uma pergunta com uma ou duas reflexões antes de fazer outra. Deixe a pessoa conduzir para onde a conversa vai.

### Prática: uma conversa de escuta

- Na próxima vez que alguém contar algo para você, tente usar pelo menos duas perguntas abertas, três reflexões e um resumo.
- Permita pelo menos uma pausa de cinco segundos ou mais sem preenchê-la.
- Depois, anote qual ferramenta pareceu mais natural e qual pareceu estranha.
- Observe se a outra pessoa falou mais, ou algo diferente, do que você esperava.
- Pratique uma dessas ferramentas em uma conversa tranquila todos os dias desta semana, por exemplo com um colega ou um vizinho.

### Lembre-se do propósito

Essas ferramentas não são técnicas para manipular pessoas. São formas de expressar interesse e respeito genuínos. Se começarem a parecer mecânicas, desacelere e volte à curiosidade: como é realmente ser essa pessoa, agora?`,
        prompt: 'Qual das quatro ferramentas de escuta parece mais natural para você, e qual parece mais difícil? O que acontece dentro de você durante um silêncio em uma conversa?'
      }
    }
  ]
});

courseSupporting.modules.push({
  id: 'mod_supp_2',
  slug: 'validation-and-choice',
  sort: 2,
  en: { title: 'Validation, Honesty & Choice', description: 'Recognizing someone’s experience without endorsing every conclusion, returning choice to them, and finding words that help.' },
  es: { title: 'Validación, honestidad y decisión', description: 'Reconocer la experiencia de alguien sin respaldar todas sus conclusiones, devolverle la capacidad de decidir y encontrar palabras que ayuden.' },
  'pt-BR': { title: 'Validação, honestidade e escolha', description: 'Reconhecer a experiência de alguém sem endossar todas as conclusões, devolver a escolha à pessoa e encontrar palavras que ajudem.' },
  lessons: [
    {
      id: 'les_supp_4',
      slug: 'validation-with-integrity',
      duration: 20,
      sort: 1,
      en: {
        title: 'Validation with Integrity',
        content: `### What validation means

To validate someone is to recognize that their inner experience makes sense given what they are going through. It communicates: "Of course you feel this way. Your reaction is understandable." Validation is one of the most powerful forms of support, and one of the most misunderstood.

Validation is **not** the same as agreement. You can validate that someone feels furious at a coworker without agreeing that the coworker is a terrible person. You can validate that someone feels hopeless without agreeing that things are hopeless. You can validate someone’s pain without endorsing an action they are considering that could hurt them or others.

Marsha Linehan’s work in dialectical behavior therapy (DBT) helped popularize the idea that validation and encouraging change can go together. People are often more open to new perspectives once they feel their current experience has been understood.

### Validating feelings, not every conclusion

A helpful distinction is between the **feeling** and the **story** or **conclusion** attached to it.

- Feeling: "I’m so ashamed."
- Conclusion: "Everyone would be better off without me."

You can fully validate the shame ("It makes sense that you feel ashamed after what happened; that is such a painful feeling") while not agreeing with the conclusion. In fact, a statement like the second one is a warning sign, and later in this course you will learn how to respond directly to it.

### Honest validation sounds like

- "That sounds really painful."
- "It makes sense that you’d feel that way, given everything."
- "I can see why you’re so frustrated."
- "I don’t see it quite the same way, but I can tell how much this is hurting you."
- "You’re not overreacting. This is a lot."

### What to avoid

Invalidation often happens unintentionally. Watch for minimizing ("It’s not that bad"), comparing ("Other people have it worse"), rushing ("You need to move on"), or judging ("You shouldn’t feel that way"). Also avoid false validation, such as agreeing with something you do not believe just to keep the peace. People can usually sense when agreement is not genuine.

### Practice: writing a validating response

- Think of a situation where someone shared a feeling you found hard to accept, or a conclusion you disagreed with.
- Write down what they said, separating the feeling from the conclusion if you can.
- Write a response that validates the feeling honestly.
- If needed, add a gentle, honest sentence about the conclusion, without arguing.
- Read it aloud. Does it sound like you? Would it help the person feel understood?`,
        prompt: 'Write a validating response to a difficult feeling someone has shared with you, one that stays honest about where you stand. What makes validation hard for you?'
      },
      es: {
        title: 'Validar con integridad',
        content: `### Qué significa validar

Validar a alguien es reconocer que su experiencia interior tiene sentido dado lo que está viviendo. Comunica: "Claro que te sientes así. Tu reacción es comprensible". La validación es una de las formas de apoyo más poderosas y también una de las más malentendidas.

Validar **no** es lo mismo que estar de acuerdo. Puedes validar que alguien siente mucha rabia hacia un compañero de trabajo sin estar de acuerdo en que ese compañero es una persona terrible. Puedes validar que alguien se siente sin esperanza sin estar de acuerdo en que la situación no tiene salida. Puedes validar el dolor de alguien sin respaldar una acción que esté considerando y que podría dañarle a sí mismo o a otras personas.

El trabajo de Marsha Linehan en la terapia dialéctica conductual (DBT) ayudó a difundir la idea de que la validación y el impulso al cambio pueden ir juntos. Las personas suelen estar más abiertas a nuevas perspectivas cuando sienten que su experiencia actual ha sido comprendida.

### Validar sentimientos, no todas las conclusiones

Una distinción útil es la que existe entre el **sentimiento** y la **historia** o **conclusión** que lo acompaña.

- Sentimiento: "Siento tanta vergüenza."
- Conclusión: "Todos estarían mejor sin mí."

Puedes validar por completo la vergüenza ("Tiene sentido que sientas vergüenza después de lo que pasó; es un sentimiento muy doloroso") sin estar de acuerdo con la conclusión. De hecho, una frase como la segunda es una señal de alerta, y más adelante en este curso aprenderás a responder a ella de manera directa.

### Una validación honesta suena así

- "Eso suena muy doloroso."
- "Tiene sentido que te sientas así, con todo lo que ha pasado."
- "Entiendo por qué estás tan frustrado."
- "No lo veo exactamente igual, pero me doy cuenta de cuánto te está doliendo."
- "No estás exagerando. Es mucho."

### Qué evitar

La invalidación suele ocurrir sin querer. Presta atención a minimizar ("No es para tanto"), comparar ("Otros la pasan peor"), apresurar ("Tienes que superarlo") o juzgar ("No deberías sentirte así"). Evita también la falsa validación, como decir que estás de acuerdo con algo que no crees solo para evitar conflictos. Las personas suelen notar cuando el acuerdo no es genuino.

### Práctica: escribir una respuesta que valide

- Piensa en una situación en la que alguien compartió un sentimiento que te costó aceptar o una conclusión con la que no estabas de acuerdo.
- Escribe lo que dijo, separando el sentimiento de la conclusión si puedes.
- Escribe una respuesta que valide el sentimiento con honestidad.
- Si hace falta, agrega una frase amable y honesta sobre la conclusión, sin discutir.
- Léela en voz alta. ¿Suena a ti? ¿Ayudaría a la persona a sentirse comprendida?`,
        prompt: 'Escribe una respuesta que valide un sentimiento difícil que alguien te haya compartido, sin dejar de ser honesto sobre tu postura. ¿Qué hace que validar te resulte difícil?'
      },
      'pt-BR': {
        title: 'Validar com integridade',
        content: `### O que significa validar

Validar alguém é reconhecer que a experiência interior da pessoa faz sentido diante do que ela está vivendo. Isso comunica: "É claro que você se sente assim. A sua reação é compreensível". A validação é uma das formas de apoio mais poderosas e também uma das mais mal compreendidas.

Validar **não** é o mesmo que concordar. Você pode validar que alguém está furioso com um colega de trabalho sem concordar que o colega é uma pessoa terrível. Pode validar que alguém se sente sem esperança sem concordar que a situação não tem saída. Pode validar a dor de alguém sem apoiar uma atitude que a pessoa está considerando e que poderia machucá-la ou machucar outras pessoas.

O trabalho de Marsha Linehan na terapia comportamental dialética (DBT) ajudou a popularizar a ideia de que validação e incentivo à mudança podem caminhar juntos. As pessoas costumam ficar mais abertas a novas perspectivas depois de sentirem que a sua experiência atual foi compreendida.

### Validar sentimentos, não todas as conclusões

Uma distinção útil é entre o **sentimento** e a **história** ou **conclusão** ligada a ele.

- Sentimento: "Estou com tanta vergonha."
- Conclusão: "Todo mundo ficaria melhor sem mim."

Você pode validar totalmente a vergonha ("Faz sentido você sentir vergonha depois do que aconteceu; é um sentimento muito doloroso") sem concordar com a conclusão. Na verdade, uma frase como a segunda é um sinal de alerta, e mais adiante neste curso você vai aprender a responder diretamente a ela.

### Uma validação honesta soa assim

- "Isso parece muito doloroso."
- "Faz sentido você se sentir assim, com tudo o que aconteceu."
- "Consigo entender por que você está tão frustrado."
- "Eu não vejo exatamente do mesmo jeito, mas percebo o quanto isso está machucando você."
- "Você não está exagerando. É muita coisa."

### O que evitar

A invalidação costuma acontecer sem querer. Fique atento a minimizar ("Não é tão grave assim"), comparar ("Tem gente em situação pior"), apressar ("Você precisa seguir em frente") ou julgar ("Você não deveria se sentir assim"). Evite também a falsa validação, como concordar com algo em que você não acredita só para manter a paz. As pessoas geralmente percebem quando a concordância não é genuína.

### Prática: escrevendo uma resposta que valida

- Pense em uma situação em que alguém compartilhou um sentimento que foi difícil para você aceitar ou uma conclusão da qual você discordava.
- Escreva o que a pessoa disse, separando o sentimento da conclusão, se possível.
- Escreva uma resposta que valide o sentimento com honestidade.
- Se necessário, acrescente uma frase gentil e honesta sobre a conclusão, sem discutir.
- Leia em voz alta. Soa como você? Ajudaria a pessoa a se sentir compreendida?`,
        prompt: 'Escreva uma resposta que valide um sentimento difícil que alguém compartilhou com você, sem deixar de ser honesto sobre a sua posição. O que torna a validação difícil para você?'
      }
    },
    {
      id: 'les_supp_5',
      slug: 'respecting-autonomy-and-choice',
      duration: 20,
      sort: 2,
      en: {
        title: 'Respecting Autonomy & Choice',
        content: `### The person is the expert on their life

When we care about someone, it can be tempting to take charge: to decide what they should do, make calls on their behalf, or push them toward the choice we think is best. Sometimes this comes from love and sometimes from fear. Either way, it can leave the other person feeling powerless at a time when they may already feel out of control.

Respecting autonomy means recognizing that a competent adult has the right to make decisions about their own life, including decisions you would not make. Your role is to support, inform, and offer options, not to take over.

### Returning choice

Many small shifts in language can return choice to the other person:

- Instead of "You need to call a therapist," try "Would it help to talk about some options, like a counselor or your doctor?"
- Instead of "Here’s what you should do," try "What feels possible for you right now?"
- Instead of arranging something without asking, try "I could help you look into that, if you want. Would that be useful?"
- Instead of "Why won’t you just...?" try "What makes that step feel hard?"

Offering two or three options, rather than one directive, also helps people feel they are choosing rather than complying.

### When autonomy has limits

Respecting autonomy does not mean ignoring danger. If someone is at immediate risk of serious harm to themselves or others, or is unable to make safe decisions because of a medical emergency, safety comes first. In those situations, contacting emergency services is appropriate even if the person does not want you to. We will explore this in Module 4.

Autonomy also applies differently to children and to adults whose capacity is significantly affected. For most everyday situations with adults, however, the guiding principle is: support their choice, share your honest perspective, and stay connected.

### Holding your own feelings

Watching someone make a choice you disagree with can be painful. You might feel worried, frustrated, or helpless. These feelings are valid. You can express them honestly once, kindly, without repeating them as pressure: "I care about you, and I’m worried about this. It’s your decision, and I’m here either way."

### Practice: rewriting directives into choices

- Think of advice you have recently given, or want to give, to someone you support.
- Write it down as you would naturally say it.
- Rewrite it as a question or a set of options that returns the choice to them.
- Write one sentence that expresses your honest concern without pressure.
- Notice how each version feels to say, and how it might feel to hear.`,
        prompt: 'How can you return choice to someone you support, even when you have strong opinions about what they should do? What feelings come up when you let go of control?'
      },
      es: {
        title: 'Respetar la autonomía y la capacidad de decidir',
        content: `### La persona es la experta en su vida

Cuando nos importa alguien, puede ser tentador tomar el control: decidir lo que debería hacer, hacer llamadas en su nombre o empujarle hacia la opción que creemos mejor. A veces esto nace del amor y a veces del miedo. En cualquier caso, puede hacer que la otra persona se sienta impotente en un momento en que quizá ya siente que ha perdido el control.

Respetar la autonomía significa reconocer que una persona adulta y capaz tiene derecho a tomar decisiones sobre su propia vida, incluidas decisiones que tú no tomarías. Tu papel es apoyar, informar y ofrecer opciones, no tomar el mando.

### Devolver la decisión

Muchos pequeños cambios en el lenguaje pueden devolverle la decisión a la otra persona:

- En lugar de "Tienes que llamar a un terapeuta", prueba "¿Te ayudaría hablar de algunas opciones, como un consejero o tu médico?".
- En lugar de "Esto es lo que deberías hacer", prueba "¿Qué te parece posible en este momento?".
- En lugar de organizar algo sin preguntar, prueba "Podría ayudarte a buscar información, si quieres. ¿Te serviría?".
- En lugar de "¿Por qué no simplemente...?", prueba "¿Qué hace que ese paso se sienta difícil?".

Ofrecer dos o tres opciones, en lugar de una sola indicación, también ayuda a que las personas sientan que eligen y no que obedecen.

### Cuando la autonomía tiene límites

Respetar la autonomía no significa ignorar el peligro. Si alguien está en riesgo inmediato de causarse un daño grave o de dañar a otros, o no puede tomar decisiones seguras por una emergencia médica, la seguridad va primero. En esas situaciones es apropiado contactar a los servicios de emergencia aunque la persona no quiera. Lo exploraremos en el Módulo 4.

La autonomía también funciona de manera distinta con niños y con adultos cuya capacidad está muy afectada. Sin embargo, en la mayoría de las situaciones cotidianas con adultos, el principio guía es: apoya su decisión, comparte tu perspectiva honesta y mantente cerca.

### Sostener tus propios sentimientos

Ver a alguien tomar una decisión con la que no estás de acuerdo puede doler. Tal vez sientas preocupación, frustración o impotencia. Estos sentimientos son válidos. Puedes expresarlos con honestidad una vez, con amabilidad, sin repetirlos como presión: "Me importas y esto me preocupa. Es tu decisión y aquí estoy de todas formas".

### Práctica: convertir indicaciones en opciones

- Piensa en un consejo que hayas dado recientemente, o que quieras dar, a alguien que acompañas.
- Escríbelo tal como lo dirías de forma natural.
- Reescríbelo como una pregunta o un conjunto de opciones que le devuelva la decisión.
- Escribe una frase que exprese tu preocupación honesta sin presionar.
- Observa cómo se siente decir cada versión y cómo podría sentirse escucharla.`,
        prompt: '¿Cómo puedes devolverle la decisión a alguien que acompañas, incluso cuando tienes opiniones firmes sobre lo que debería hacer? ¿Qué sentimientos aparecen cuando sueltas el control?'
      },
      'pt-BR': {
        title: 'Respeitando a autonomia e a escolha',
        content: `### A pessoa é especialista na própria vida

Quando nos importamos com alguém, pode ser tentador assumir o controle: decidir o que a pessoa deve fazer, fazer ligações em nome dela ou empurrá-la para a escolha que achamos melhor. Às vezes isso nasce do amor, às vezes do medo. De qualquer forma, pode deixar a outra pessoa se sentindo impotente em um momento em que ela talvez já sinta que perdeu o controle.

Respeitar a autonomia significa reconhecer que um adulto capaz tem o direito de tomar decisões sobre a própria vida, inclusive decisões que você não tomaria. O seu papel é apoiar, informar e oferecer opções, não assumir o comando.

### Devolvendo a escolha

Muitas pequenas mudanças na linguagem podem devolver a escolha à outra pessoa:

- Em vez de "Você precisa ligar para um terapeuta", experimente "Ajudaria conversar sobre algumas opções, como um psicólogo ou o seu médico?".
- Em vez de "Isto é o que você deveria fazer", experimente "O que parece possível para você agora?".
- Em vez de organizar algo sem perguntar, experimente "Posso ajudar você a pesquisar isso, se quiser. Seria útil?".
- Em vez de "Por que você não simplesmente...?", experimente "O que faz esse passo parecer difícil?".

Oferecer duas ou três opções, em vez de uma única orientação, também ajuda as pessoas a sentir que estão escolhendo, e não apenas obedecendo.

### Quando a autonomia tem limites

Respeitar a autonomia não significa ignorar o perigo. Se alguém está em risco imediato de causar um dano grave a si mesmo ou a outras pessoas, ou não consegue tomar decisões seguras por causa de uma emergência médica, a segurança vem primeiro. Nessas situações, é apropriado acionar os serviços de emergência mesmo que a pessoa não queira. Vamos explorar isso no Módulo 4.

A autonomia também funciona de modo diferente com crianças e com adultos cuja capacidade está muito afetada. Na maioria das situações do dia a dia com adultos, porém, o princípio orientador é: apoie a escolha da pessoa, compartilhe a sua perspectiva honesta e continue por perto.

### Acolhendo os seus próprios sentimentos

Ver alguém fazer uma escolha da qual você discorda pode doer. Você pode sentir preocupação, frustração ou impotência. Esses sentimentos são válidos. Você pode expressá-los com honestidade uma vez, com gentileza, sem repeti-los como pressão: "Eu me importo com você e estou preocupado com isso. A decisão é sua, e estou aqui de qualquer jeito".

### Prática: transformando orientações em escolhas

- Pense em um conselho que você deu recentemente, ou quer dar, a alguém que você apoia.
- Escreva do jeito que você diria naturalmente.
- Reescreva como uma pergunta ou um conjunto de opções que devolva a escolha à pessoa.
- Escreva uma frase que expresse a sua preocupação honesta sem pressionar.
- Observe como é dizer cada versão e como poderia ser ouvi-la.`,
        prompt: 'Como você pode devolver a escolha a alguém que apoia, mesmo quando tem opiniões fortes sobre o que a pessoa deveria fazer? Que sentimentos surgem quando você solta o controle?'
      }
    },
    {
      id: 'les_supp_6',
      slug: 'words-that-help',
      duration: 20,
      sort: 3,
      en: {
        title: 'What to Say, and What to Skip',
        content: `### There are no perfect words

People often avoid reaching out because they are afraid of saying the wrong thing. It helps to remember that sincerity matters more than polish. A clumsy "I don’t know what to say, but I care about you" is usually far more comforting than silence.

That said, some phrases tend to help, and others tend to hurt, even when well-intended.

### Phrases that often help

- "I’m really glad you told me."
- "That sounds so hard. I’m here."
- "You don’t have to go through this alone."
- "I don’t know exactly what you’re feeling, but I want to understand."
- "Would you like to talk about it, or would you rather do something to take your mind off it?"
- "Is there anything practical I can help with this week?"
- "I’ll check in with you on Thursday. No pressure to reply."

### Phrases that often hurt

- "I know exactly how you feel." Even if you have been through something similar, their experience is their own.
- "Everything happens for a reason." This can feel dismissive of real pain.
- "You just need to..." Simple solutions can imply the person has not tried.
- "Other people have it worse." Comparison rarely comforts.
- "Just be positive" or "Cheer up." Emotions do not respond well to commands.
- "You were fine yesterday." This can make someone feel their struggle is not believed.

### Beyond words

Support is not only verbal. Consider practical help: bringing food, helping with errands, offering a ride, sitting together in silence, or doing something ordinary together, like watching a film or taking a walk. For some people, especially those who find it hard to talk about emotions, side-by-side activity is the most comfortable way to connect.

Be specific with offers. "Let me know if you need anything" puts the burden on the struggling person to ask. "Can I bring dinner on Tuesday?" is easier to accept.

### Messages over time

Support often matters most in the weeks and months after a crisis, when others have moved on. A short message on a hard anniversary, or a simple "still thinking of you," can mean a great deal.

### Practice: building your phrase bank

- Write three phrases from the helpful list, or your own versions, that sound natural in your voice.
- Write down one phrase you have used that you now want to retire, and why.
- Write two specific offers of practical help you could make to someone you support.
- Set a reminder to check in with them in one or two weeks.
- Notice how it feels to have words ready. Often, preparation eases the fear of reaching out.`,
        prompt: 'Which phrases feel natural in your own voice when someone is hurting? What specific, practical offer could you make to someone you care about this week?'
      },
      es: {
        title: 'Qué decir y qué evitar',
        content: `### No existen palabras perfectas

Muchas personas evitan acercarse porque temen decir algo equivocado. Ayuda recordar que la sinceridad importa más que la perfección. Un torpe "No sé qué decir, pero me importas" suele consolar mucho más que el silencio.

Aun así, algunas frases suelen ayudar y otras suelen doler, incluso con buena intención.

### Frases que suelen ayudar

- "Me alegra mucho que me lo hayas contado."
- "Suena muy difícil. Aquí estoy."
- "No tienes que pasar por esto a solas."
- "No sé exactamente lo que sientes, pero quiero entenderlo."
- "¿Te gustaría hablar de ello o prefieres que hagamos algo para distraernos?"
- "¿Hay algo práctico en lo que pueda ayudarte esta semana?"
- "Te escribo el jueves para saber cómo sigues. No tienes que responder."

### Frases que suelen doler

- "Sé exactamente cómo te sientes." Aunque hayas vivido algo parecido, su experiencia es solo suya.
- "Todo pasa por algo." Puede sentirse como una forma de restar importancia al dolor real.
- "Solo tienes que..." Las soluciones simples pueden dar a entender que la persona no lo ha intentado.
- "Hay gente que está peor." Las comparaciones rara vez consuelan.
- "Solo sé positivo" o "Anímate." Las emociones no responden bien a las órdenes.
- "Ayer estabas bien." Esto puede hacer que alguien sienta que no se cree en su malestar.

### Más allá de las palabras

El apoyo no es solo verbal. Piensa en ayuda práctica: llevar comida, hacer mandados, ofrecer transporte, sentarse juntos en silencio o hacer algo cotidiano juntos, como ver una película o dar un paseo. Para algunas personas, sobre todo quienes encuentran difícil hablar de emociones, compartir una actividad lado a lado es la forma más cómoda de conectar.

Sé específico con tus ofrecimientos. "Avísame si necesitas algo" deja en la persona que sufre la carga de pedir. "¿Puedo llevarte la cena el martes?" es más fácil de aceptar.

### Mensajes a lo largo del tiempo

El apoyo suele importar más en las semanas y meses posteriores a una crisis, cuando los demás ya siguieron con su vida. Un mensaje breve en un aniversario difícil o un sencillo "sigo pensando en ti" puede significar muchísimo.

### Práctica: tu banco de frases

- Escribe tres frases de la lista de ayuda, o tus propias versiones, que suenen naturales con tu voz.
- Escribe una frase que hayas usado y que ahora quieras dejar de usar, y por qué.
- Escribe dos ofrecimientos concretos de ayuda práctica que podrías hacer a alguien que acompañas.
- Pon un recordatorio para escribirle en una o dos semanas.
- Observa cómo se siente tener palabras preparadas. A menudo, prepararse alivia el miedo a acercarse.`,
        prompt: '¿Qué frases se sienten naturales con tu propia voz cuando alguien está sufriendo? ¿Qué ofrecimiento concreto y práctico podrías hacer esta semana a alguien que te importa?'
      },
      'pt-BR': {
        title: 'O que dizer e o que evitar',
        content: `### Não existem palavras perfeitas

Muitas pessoas evitam se aproximar por medo de dizer a coisa errada. Ajuda lembrar que a sinceridade importa mais do que a perfeição. Um desajeitado "Não sei o que dizer, mas eu me importo com você" costuma confortar muito mais do que o silêncio.

Ainda assim, algumas frases costumam ajudar e outras costumam machucar, mesmo com boa intenção.

### Frases que costumam ajudar

- "Fico muito feliz que você me contou."
- "Isso parece muito difícil. Estou aqui."
- "Você não precisa passar por isso sozinho."
- "Não sei exatamente o que você está sentindo, mas quero entender."
- "Você gostaria de conversar sobre isso ou prefere que a gente faça algo para distrair?"
- "Tem alguma coisa prática em que eu possa ajudar nesta semana?"
- "Vou te mandar uma mensagem na quinta para saber como você está. Não precisa responder."

### Frases que costumam machucar

- "Sei exatamente como você se sente." Mesmo que você tenha vivido algo parecido, a experiência é só da pessoa.
- "Tudo acontece por um motivo." Pode soar como desvalorizar uma dor real.
- "É só você..." Soluções simples podem dar a entender que a pessoa não tentou.
- "Tem gente em situação pior." Comparações raramente confortam.
- "Pense positivo" ou "Anime-se." Emoções não respondem bem a ordens.
- "Ontem você estava bem." Isso pode fazer alguém sentir que o seu sofrimento não é levado a sério.

### Além das palavras

O apoio não é só verbal. Pense em ajuda prática: levar comida, ajudar com tarefas, oferecer uma carona, sentar junto em silêncio ou fazer algo comum juntos, como assistir a um filme ou caminhar. Para algumas pessoas, principalmente as que têm dificuldade de falar sobre emoções, fazer uma atividade lado a lado é a forma mais confortável de se conectar.

Seja específico nas ofertas. "Me avise se precisar de alguma coisa" coloca em quem está sofrendo o peso de pedir. "Posso levar o jantar na terça?" é mais fácil de aceitar.

### Mensagens ao longo do tempo

O apoio costuma importar mais nas semanas e meses depois de uma crise, quando os outros já seguiram em frente. Uma mensagem curta em uma data difícil, ou um simples "continuo pensando em você", pode significar muito.

### Prática: o seu banco de frases

- Escreva três frases da lista das que ajudam, ou versões suas, que soem naturais na sua voz.
- Escreva uma frase que você já usou e que agora quer aposentar, e por quê.
- Escreva duas ofertas específicas de ajuda prática que você poderia fazer a alguém que apoia.
- Crie um lembrete para mandar uma mensagem para essa pessoa daqui a uma ou duas semanas.
- Observe como é ter palavras prontas. Muitas vezes, a preparação alivia o medo de se aproximar.`,
        prompt: 'Quais frases soam naturais na sua própria voz quando alguém está sofrendo? Que oferta específica e prática você poderia fazer a alguém de quem gosta nesta semana?'
      }
    }
  ]
});

courseSupporting.modules.push({
  id: 'mod_supp_3',
  slug: 'boundaries-and-capacity',
  sort: 3,
  en: { title: 'Boundaries & Capacity', description: 'Knowing what you can realistically offer, setting boundaries that protect both people, and caring for yourself while you care.' },
  es: { title: 'Límites y capacidad', description: 'Saber lo que puedes ofrecer de forma realista, poner límites que protejan a ambas personas y cuidarte mientras cuidas.' },
  'pt-BR': { title: 'Limites e capacidade', description: 'Saber o que você pode oferecer de forma realista, estabelecer limites que protejam as duas pessoas e cuidar de si enquanto cuida.' },
  lessons: [
    {
      id: 'les_supp_7',
      slug: 'knowing-your-capacity',
      duration: 20,
      sort: 1,
      en: {
        title: 'Knowing Your Capacity',
        content: `### Care is not unlimited

Every person has limits on their time, energy, emotional bandwidth, and resources. Those limits change with health, work, family responsibilities, and what else is happening in life. Acknowledging your capacity is not selfish. It is what allows you to keep showing up over time instead of burning out and disappearing.

People who support others sometimes believe they should be available at all hours and able to handle anything. This belief, however loving, often leads to exhaustion, resentment, and eventually less support for everyone.

### Signs you may be stretched too thin

- You feel dread when you see a message from the person you support.
- You are losing sleep, skipping meals, or neglecting your own health.
- You feel irritable, numb, or tearful more often than usual.
- Your other relationships or responsibilities are suffering.
- You feel you are the only one who can help, and you are afraid of what will happen if you step back.
- You have stopped doing things that restore you.

These signs do not mean you have failed. They mean it is time to reassess what you are offering and how.

### Mapping what you can offer

It can help to get specific. Capacity has several dimensions:

- **Time**: How many hours a week can you realistically give?
- **Availability**: Which times of day or days of the week are you able to respond?
- **Kind of help**: Are you best at listening, practical tasks, distraction and fun, or helping find resources?
- **Duration**: Is this a short-term crisis or a long-term situation? Your approach may need to differ.
- **Emotional load**: Which topics are you able to hold, and which feel too close to your own experiences?

### The wider circle

No one should be anyone’s only support. A healthier pattern involves several people and resources: friends, family members, faith or community groups, peer support, and professionals. Part of good support is gently helping the person widen that circle so the weight is shared.

### Practice: your capacity map

- Draw a simple table with the headings: Time, Availability, Kind of help, Duration, Emotional load.
- Fill in honest answers for your current situation with the person you support.
- Circle any area where you are giving more than is sustainable.
- List at least two other people or resources who could share some of the load.
- Write one sentence you might use to communicate a realistic limit, such as "I can talk most evenings until 9, but I need to sleep after that."

Knowing your capacity is the foundation for the next lesson, where we will explore how to communicate boundaries clearly and kindly.`,
        prompt: 'What can you realistically offer the person you support in terms of time, availability, and kind of help? Where are you giving more than you can sustain?'
      },
      es: {
        title: 'Conocer tu capacidad',
        content: `### El cuidado no es ilimitado

Toda persona tiene límites de tiempo, energía, capacidad emocional y recursos. Esos límites cambian según la salud, el trabajo, las responsabilidades familiares y lo que esté pasando en la vida. Reconocer tu capacidad no es egoísmo. Es lo que te permite seguir presente a lo largo del tiempo en lugar de agotarte y desaparecer.

Quienes acompañan a otros a veces creen que deberían estar disponibles a todas horas y poder con todo. Esa creencia, por amorosa que sea, suele llevar al agotamiento, al resentimiento y, al final, a menos apoyo para todos.

### Señales de que quizá estás al límite

- Sientes temor cuando ves un mensaje de la persona que acompañas.
- Estás perdiendo sueño, saltándote comidas o descuidando tu propia salud.
- Te sientes irritable, adormecido o con ganas de llorar más a menudo de lo habitual.
- Tus otras relaciones o responsabilidades se están resintiendo.
- Sientes que eres el único que puede ayudar y temes lo que pasará si das un paso atrás.
- Has dejado de hacer las cosas que te recargan.

Estas señales no significan que hayas fallado. Significan que es momento de revisar lo que ofreces y cómo lo ofreces.

### Mapear lo que puedes ofrecer

Puede ayudar ser específico. La capacidad tiene varias dimensiones:

- **Tiempo**: ¿Cuántas horas a la semana puedes dar de forma realista?
- **Disponibilidad**: ¿En qué horarios o días de la semana puedes responder?
- **Tipo de ayuda**: ¿Se te da mejor escuchar, resolver tareas prácticas, distraer y divertir o ayudar a buscar recursos?
- **Duración**: ¿Es una crisis breve o una situación prolongada? Tu enfoque quizá deba ser distinto.
- **Carga emocional**: ¿Qué temas puedes sostener y cuáles se sienten demasiado cercanos a tus propias experiencias?

### El círculo más amplio

Nadie debería ser el único apoyo de otra persona. Un patrón más sano incluye a varias personas y recursos: amistades, familiares, grupos de fe o comunitarios, apoyo entre pares y profesionales. Parte de un buen acompañamiento es ayudar con suavidad a que la persona amplíe ese círculo para que el peso se comparta.

### Práctica: tu mapa de capacidad

- Dibuja una tabla sencilla con estos títulos: Tiempo, Disponibilidad, Tipo de ayuda, Duración, Carga emocional.
- Completa respuestas honestas sobre tu situación actual con la persona que acompañas.
- Encierra en un círculo cualquier área en la que estés dando más de lo sostenible.
- Anota al menos dos personas o recursos que podrían compartir parte de la carga.
- Escribe una frase que podrías usar para comunicar un límite realista, como "Puedo hablar la mayoría de las noches hasta las 9, pero después necesito dormir".

Conocer tu capacidad es la base de la próxima lección, en la que exploraremos cómo comunicar límites con claridad y amabilidad.`,
        prompt: '¿Qué puedes ofrecer de forma realista a la persona que acompañas en cuanto a tiempo, disponibilidad y tipo de ayuda? ¿Dónde estás dando más de lo que puedes sostener?'
      },
      'pt-BR': {
        title: 'Conhecendo a sua capacidade',
        content: `### O cuidado não é ilimitado

Toda pessoa tem limites de tempo, energia, disponibilidade emocional e recursos. Esses limites mudam conforme a saúde, o trabalho, as responsabilidades familiares e o que mais está acontecendo na vida. Reconhecer a sua capacidade não é egoísmo. É o que permite continuar presente ao longo do tempo, em vez de se esgotar e desaparecer.

Quem apoia outras pessoas às vezes acredita que deveria estar disponível a qualquer hora e dar conta de tudo. Essa crença, por mais amorosa que seja, costuma levar à exaustão, ao ressentimento e, no fim, a menos apoio para todos.

### Sinais de que você pode estar sobrecarregado

- Você sente um aperto ao ver uma mensagem da pessoa que apoia.
- Você está perdendo sono, pulando refeições ou deixando a própria saúde de lado.
- Você se sente irritado, anestesiado ou com vontade de chorar mais do que o normal.
- As suas outras relações ou responsabilidades estão sendo prejudicadas.
- Você sente que é o único que pode ajudar e tem medo do que vai acontecer se der um passo atrás.
- Você parou de fazer as coisas que renovam as suas energias.

Esses sinais não significam que você falhou. Significam que é hora de rever o que você está oferecendo e de que forma.

### Mapeando o que você pode oferecer

Pode ajudar ser específico. A capacidade tem várias dimensões:

- **Tempo**: Quantas horas por semana você consegue dar de forma realista?
- **Disponibilidade**: Em quais horários ou dias da semana você consegue responder?
- **Tipo de ajuda**: Você é melhor escutando, resolvendo tarefas práticas, distraindo e divertindo ou ajudando a encontrar recursos?
- **Duração**: É uma crise curta ou uma situação de longo prazo? A sua abordagem talvez precise ser diferente.
- **Carga emocional**: Quais assuntos você consegue sustentar e quais parecem próximos demais das suas próprias experiências?

### O círculo mais amplo

Ninguém deveria ser o único apoio de outra pessoa. Um padrão mais saudável envolve várias pessoas e recursos: amigos, familiares, grupos religiosos ou comunitários, apoio entre pares e profissionais. Parte de um bom apoio é ajudar a pessoa, com delicadeza, a ampliar esse círculo para que o peso seja compartilhado.

### Prática: o seu mapa de capacidade

- Desenhe uma tabela simples com os títulos: Tempo, Disponibilidade, Tipo de ajuda, Duração, Carga emocional.
- Preencha com respostas honestas sobre a sua situação atual com a pessoa que você apoia.
- Circule qualquer área em que você esteja dando mais do que é sustentável.
- Liste pelo menos duas outras pessoas ou recursos que poderiam dividir parte da carga.
- Escreva uma frase que você poderia usar para comunicar um limite realista, como "Consigo conversar na maioria das noites até as 21h, mas depois disso preciso dormir".

Conhecer a sua capacidade é a base da próxima lição, em que vamos explorar como comunicar limites com clareza e gentileza.`,
        prompt: 'O que você consegue oferecer de forma realista à pessoa que apoia em termos de tempo, disponibilidade e tipo de ajuda? Onde você está dando mais do que consegue sustentar?'
      }
    },
    {
      id: 'les_supp_8',
      slug: 'boundaries-that-protect-both-people',
      duration: 20,
      sort: 2,
      en: {
        title: 'Boundaries That Protect Both People',
        content: `### What a boundary is

A boundary is a clear statement of what you can and cannot offer, and what you will do to take care of yourself. Boundaries are not punishments or ultimatums. They are information that helps a relationship stay honest and sustainable.

Good boundaries protect both people. They protect you from exhaustion and resentment. They also protect the person you support from relying on something that cannot last, and from the hurt of a supporter who suddenly pulls away without explanation.

### A simple structure

A helpful boundary often includes three parts:

- **What I can offer**: "I can talk on the phone a couple of evenings a week."
- **For how long, or when**: "Usually between 7 and 9."
- **What else is needed**: "I think it would also help to have someone else to talk to, like a counselor or a support group. I’d be glad to help you look."

For example: "I really want to be here for you. I can check in with you every Sunday and Wednesday evening. I can’t be available overnight, and I think having a counselor would give you support I can’t. Could we look for someone together?"

### Speaking with warmth

Boundaries land better when they are spoken with care. Lead with your commitment to the relationship, keep it brief, and avoid over-explaining or apologizing repeatedly. You do not need the other person’s agreement for your boundary to be valid, though you can listen to their feelings about it.

If the person reacts with hurt or anger, you can validate that feeling without abandoning the boundary: "I understand this is disappointing. I still care about you, and this is what I can do."

### Boundaries around safety

Some boundaries relate to safety. You might say you will not keep a secret if someone’s life is at risk, or that you will call emergency services if you believe someone is in immediate danger. It can be kind to say this in advance, so it does not feel like betrayal later: "I will always want to help you stay safe, and that means if I’m ever really worried about your life, I will call for help."

### Practice: drafting a boundary

- Choose one area where you need a clearer boundary with someone you support.
- Write what you can offer, when, and what else is needed, using the three-part structure.
- Add an opening sentence that affirms your care for them.
- Read it aloud several times until it feels natural rather than rehearsed.
- Consider when and how you might share it, ideally at a calm moment rather than during a crisis.

Boundaries often need adjusting over time. Revisit them as circumstances change.`,
        prompt: 'What boundary would protect both you and the person you support? How could you say it with warmth, using what you can offer, when, and what else is needed?'
      },
      es: {
        title: 'Límites que protegen a ambas personas',
        content: `### Qué es un límite

Un límite es una declaración clara de lo que puedes y no puedes ofrecer, y de lo que harás para cuidarte. Los límites no son castigos ni ultimátums. Son información que ayuda a que una relación siga siendo honesta y sostenible.

Los buenos límites protegen a ambas personas. A ti te protegen del agotamiento y el resentimiento. A la persona que acompañas la protegen de depender de algo que no puede durar, y del dolor de ver que quien la apoya se aleja de repente sin explicación.

### Una estructura sencilla

Un límite útil suele incluir tres partes:

- **Lo que puedo ofrecer**: "Puedo hablar por teléfono un par de noches a la semana."
- **Por cuánto tiempo o cuándo**: "Normalmente entre las 7 y las 9."
- **Qué más hace falta**: "Creo que también te ayudaría tener a otra persona con quien hablar, como un consejero o un grupo de apoyo. Con gusto te ayudo a buscar."

Por ejemplo: "De verdad quiero estar presente para ti. Puedo escribirte cada domingo y miércoles por la noche. No puedo estar disponible de madrugada, y creo que un consejero te daría un apoyo que yo no puedo darte. ¿Buscamos a alguien juntos?"

### Hablar con calidez

Los límites se reciben mejor cuando se expresan con cariño. Empieza por tu compromiso con la relación, sé breve y evita explicar de más o disculparte una y otra vez. Tu límite es válido aunque la otra persona no esté de acuerdo, aunque sí puedes escuchar lo que siente al respecto.

Si la persona reacciona con dolor o enojo, puedes validar ese sentimiento sin abandonar el límite: "Entiendo que esto te decepcione. Me sigues importando, y esto es lo que puedo hacer".

### Límites relacionados con la seguridad

Algunos límites tienen que ver con la seguridad. Podrías decir que no guardarás un secreto si la vida de alguien corre peligro, o que llamarás a los servicios de emergencia si crees que alguien está en peligro inmediato. Puede ser amable decirlo por adelantado, para que después no se sienta como una traición: "Siempre voy a querer ayudarte a estar a salvo, y eso significa que si alguna vez me preocupa de verdad tu vida, voy a pedir ayuda".

### Práctica: redactar un límite

- Elige un área en la que necesites un límite más claro con alguien que acompañas.
- Escribe lo que puedes ofrecer, cuándo y qué más hace falta, usando la estructura de tres partes.
- Agrega una frase inicial que afirme tu cariño por esa persona.
- Léelo en voz alta varias veces hasta que suene natural y no ensayado.
- Piensa cuándo y cómo podrías compartirlo, idealmente en un momento de calma y no en plena crisis.

Los límites suelen necesitar ajustes con el tiempo. Revísalos a medida que cambian las circunstancias.`,
        prompt: '¿Qué límite te protegería a ti y a la persona que acompañas? ¿Cómo podrías decirlo con calidez, usando lo que puedes ofrecer, cuándo y qué más hace falta?'
      },
      'pt-BR': {
        title: 'Limites que protegem as duas pessoas',
        content: `### O que é um limite

Um limite é uma afirmação clara do que você pode e não pode oferecer, e do que você vai fazer para cuidar de si. Limites não são punições nem ultimatos. São informações que ajudam uma relação a continuar honesta e sustentável.

Bons limites protegem as duas pessoas. Eles protegem você da exaustão e do ressentimento. Também protegem a pessoa que você apoia de depender de algo que não pode durar, e da dor de ver quem a apoia se afastar de repente, sem explicação.

### Uma estrutura simples

Um limite útil costuma ter três partes:

- **O que eu posso oferecer**: "Posso conversar por telefone duas noites por semana."
- **Por quanto tempo ou quando**: "Geralmente entre as 19h e as 21h."
- **O que mais é necessário**: "Acho que também ajudaria você ter outra pessoa para conversar, como um psicólogo ou um grupo de apoio. Fico feliz em ajudar a procurar."

Por exemplo: "Quero muito estar presente para você. Posso falar com você todo domingo e quarta à noite. Não consigo estar disponível de madrugada, e acho que um psicólogo daria a você um apoio que eu não consigo dar. Podemos procurar alguém juntos?"

### Falando com carinho

Limites são mais bem recebidos quando ditos com cuidado. Comece pelo seu compromisso com a relação, seja breve e evite explicar demais ou pedir desculpas repetidamente. O seu limite é válido mesmo sem a concordância da outra pessoa, embora você possa escutar o que ela sente a respeito.

Se a pessoa reagir com mágoa ou raiva, você pode validar esse sentimento sem abandonar o limite: "Entendo que isso seja decepcionante. Eu continuo me importando com você, e isto é o que eu consigo fazer".

### Limites ligados à segurança

Alguns limites têm a ver com segurança. Você pode dizer que não vai guardar um segredo se a vida de alguém estiver em risco, ou que vai ligar para os serviços de emergência se acreditar que alguém está em perigo imediato. Pode ser gentil dizer isso com antecedência, para que depois não pareça uma traição: "Sempre vou querer ajudar você a ficar em segurança, e isso significa que, se algum dia eu estiver realmente preocupado com a sua vida, vou pedir ajuda".

### Prática: rascunhando um limite

- Escolha uma área em que você precisa de um limite mais claro com alguém que apoia.
- Escreva o que você pode oferecer, quando e o que mais é necessário, usando a estrutura de três partes.
- Acrescente uma frase inicial que afirme o seu carinho pela pessoa.
- Leia em voz alta várias vezes até soar natural, e não ensaiado.
- Pense em quando e como compartilhar, de preferência em um momento de calma, e não no meio de uma crise.

Limites costumam precisar de ajustes com o tempo. Revise-os conforme as circunstâncias mudarem.`,
        prompt: 'Que limite protegeria você e a pessoa que você apoia? Como você poderia dizê-lo com carinho, usando o que pode oferecer, quando e o que mais é necessário?'
      }
    },
    {
      id: 'les_supp_9',
      slug: 'caring-for-the-carer',
      duration: 20,
      sort: 3,
      en: {
        title: 'Caring for Yourself While You Care',
        content: `### Supporters need support too

Caring for someone who is struggling can be meaningful, and it can also be heavy. Many supporters carry worry into their sleep, feel guilty when they enjoy themselves, or quietly absorb the other person’s distress. Over time, this can lead to what is often called caregiver strain or compassion fatigue: a sense of emotional depletion, reduced empathy, and exhaustion.

Taking care of yourself is not a luxury or a betrayal of the person you support. It is part of supporting them well.

### Settling your own nervous system

After a hard conversation, your body may stay on alert: a racing heart, tight shoulders, a busy mind. Before moving on to the rest of your day, it helps to give your body a chance to settle. Simple ways include:

- Taking a few slow breaths with a slightly longer exhale.
- Stepping outside or changing rooms.
- Moving your body: stretching, shaking out your hands, walking.
- Naming what you feel: "I’m worried and sad after that call."
- Doing something grounding and ordinary, like making tea or washing dishes.

### Protecting what restores you

Make a short list of the activities and relationships that restore you, and protect some time for them each week, even when things are hard. This might include rest, time outdoors, creative work, prayer or meditation, exercise, or time with people who make you laugh. When you are supporting someone through a long difficulty, these are not optional extras.

### Having your own person

You need somewhere to bring what you carry. This could be a friend, partner, faith leader, support group for family members, or your own counselor. When sharing about the person you support, protect their privacy by focusing on your own experience and leaving out identifying details where possible.

### Guilt and grief

Supporters often feel guilty for setting limits, for feeling frustrated, or for having a good day while someone they love suffers. These feelings are common and human. You may also grieve how the person or relationship has changed. Allow yourself to feel these things without judging them.

### Practice: a supporter’s care plan

- Write down three signs that tell you your own stress is rising.
- List three quick ways to settle your body after a hard conversation.
- List three activities or relationships that restore you, and schedule at least one this week.
- Name one person you can talk to about how supporting someone is affecting you.
- If you notice persistent low mood, anxiety, or exhaustion in yourself, consider speaking with a doctor or counselor. Your wellbeing matters in its own right.`,
        prompt: 'What are the signs that your own stress is rising while supporting someone? Who can you talk to, and what will you protect time for this week?'
      },
      es: {
        title: 'Cuidarte mientras cuidas',
        content: `### Quienes acompañan también necesitan apoyo

Cuidar a alguien que está pasando por un momento difícil puede ser muy significativo y también muy pesado. Muchas personas que acompañan llevan la preocupación hasta la cama, se sienten culpables cuando disfrutan o absorben en silencio el malestar del otro. Con el tiempo, esto puede llevar a lo que a menudo se llama desgaste del cuidador o fatiga por compasión: una sensación de vacío emocional, menos empatía y agotamiento.

Cuidarte no es un lujo ni una traición a la persona que acompañas. Es parte de acompañarla bien.

### Calmar tu propio sistema nervioso

Después de una conversación difícil, tu cuerpo puede quedarse en alerta: el corazón acelerado, los hombros tensos, la mente ocupada. Antes de seguir con el resto del día, ayuda darle al cuerpo la oportunidad de calmarse. Algunas formas sencillas:

- Respirar despacio unas cuantas veces, con una exhalación un poco más larga.
- Salir al aire libre o cambiar de habitación.
- Mover el cuerpo: estirarte, sacudir las manos, caminar.
- Nombrar lo que sientes: "Estoy preocupado y triste después de esa llamada".
- Hacer algo cotidiano que te centre, como preparar un té o lavar los platos.

### Proteger lo que te recarga

Haz una lista breve de las actividades y relaciones que te recargan y protege tiempo para ellas cada semana, incluso cuando las cosas estén difíciles. Puede incluir descanso, tiempo al aire libre, trabajo creativo, oración o meditación, ejercicio o estar con personas que te hacen reír. Cuando acompañas a alguien durante una dificultad larga, esto no es opcional.

### Tener tu propia persona

Necesitas un lugar donde llevar lo que cargas. Puede ser una amistad, tu pareja, un líder de tu comunidad de fe, un grupo de apoyo para familiares o tu propio consejero. Cuando hables de la persona que acompañas, protege su privacidad centrándote en tu propia experiencia y omitiendo los detalles que puedan identificarla.

### Culpa y duelo

Quienes acompañan suelen sentir culpa por poner límites, por sentirse frustrados o por tener un buen día mientras alguien que quieren sufre. Estos sentimientos son comunes y humanos. También puedes sentir duelo por cómo ha cambiado la persona o la relación. Permítete sentir todo esto sin juzgarlo.

### Práctica: un plan de cuidado para quien acompaña

- Escribe tres señales que te indiquen que tu propio estrés está aumentando.
- Anota tres formas rápidas de calmar tu cuerpo después de una conversación difícil.
- Anota tres actividades o relaciones que te recargan y agenda al menos una esta semana.
- Nombra a una persona con quien puedas hablar sobre cómo te está afectando acompañar a alguien.
- Si notas en ti bajo estado de ánimo persistente, ansiedad o agotamiento, considera hablar con un médico o consejero. Tu bienestar importa por sí mismo.`,
        prompt: '¿Cuáles son las señales de que tu propio estrés está aumentando mientras acompañas a alguien? ¿Con quién puedes hablar y para qué protegerás tiempo esta semana?'
      },
      'pt-BR': {
        title: 'Cuidando de si enquanto cuida',
        content: `### Quem apoia também precisa de apoio

Cuidar de alguém que está passando por um momento difícil pode ser muito significativo e também muito pesado. Muitas pessoas que apoiam levam a preocupação para a cama, sentem culpa quando se divertem ou absorvem em silêncio o sofrimento do outro. Com o tempo, isso pode levar ao que muitas vezes se chama de sobrecarga do cuidador ou fadiga por compaixão: uma sensação de esgotamento emocional, menos empatia e cansaço.

Cuidar de si não é luxo nem traição à pessoa que você apoia. É parte de apoiá-la bem.

### Acalmando o seu próprio sistema nervoso

Depois de uma conversa difícil, o seu corpo pode continuar em alerta: coração acelerado, ombros tensos, mente agitada. Antes de seguir com o resto do dia, ajuda dar ao corpo a chance de se acalmar. Algumas formas simples:

- Respirar devagar algumas vezes, com a expiração um pouco mais longa.
- Sair ao ar livre ou mudar de cômodo.
- Movimentar o corpo: alongar, sacudir as mãos, caminhar.
- Nomear o que você sente: "Estou preocupado e triste depois dessa ligação".
- Fazer algo comum que traga os pés para o chão, como preparar um chá ou lavar a louça.

### Protegendo o que renova você

Faça uma lista curta das atividades e relações que renovam as suas energias e reserve um tempo para elas toda semana, mesmo quando as coisas estiverem difíceis. Pode incluir descanso, tempo ao ar livre, trabalho criativo, oração ou meditação, exercício ou estar com pessoas que fazem você rir. Quando você apoia alguém durante uma dificuldade longa, isso não é opcional.

### Tendo a sua própria pessoa

Você precisa de um lugar para levar o que carrega. Pode ser um amigo, parceiro, uma liderança religiosa, um grupo de apoio para familiares ou o seu próprio terapeuta. Ao falar sobre a pessoa que você apoia, proteja a privacidade dela focando na sua própria experiência e deixando de fora detalhes que possam identificá-la.

### Culpa e luto

Quem apoia costuma sentir culpa por estabelecer limites, por se sentir frustrado ou por ter um bom dia enquanto alguém que ama está sofrendo. Esses sentimentos são comuns e humanos. Você também pode sentir luto pela forma como a pessoa ou a relação mudou. Permita-se sentir tudo isso sem se julgar.

### Prática: um plano de cuidado para quem apoia

- Escreva três sinais que mostram que o seu próprio estresse está aumentando.
- Liste três formas rápidas de acalmar o corpo depois de uma conversa difícil.
- Liste três atividades ou relações que renovam você e agende pelo menos uma nesta semana.
- Nomeie uma pessoa com quem você possa conversar sobre como apoiar alguém está afetando você.
- Se perceber em si mesmo desânimo persistente, ansiedade ou exaustão, considere conversar com um médico ou terapeuta. O seu bem-estar importa por si só.`,
        prompt: 'Quais são os sinais de que o seu próprio estresse está aumentando enquanto você apoia alguém? Com quem você pode conversar, e para o que vai reservar tempo nesta semana?'
      }
    }
  ]
});

courseSupporting.modules.push({
  id: 'mod_supp_4',
  slug: 'professional-help-and-crisis',
  sort: 4,
  en: { title: 'Professional Help, Crisis & Follow-Up', description: 'When and how to encourage professional help, how to recognize and respond to a crisis, and how to stay steady for the long haul.' },
  es: { title: 'Ayuda profesional, crisis y seguimiento', description: 'Cuándo y cómo animar a buscar ayuda profesional, cómo reconocer y responder a una crisis y cómo mantenerte firme a largo plazo.' },
  'pt-BR': { title: 'Ajuda profissional, crise e acompanhamento', description: 'Quando e como incentivar a busca por ajuda profissional, como reconhecer e responder a uma crise e como se manter firme a longo prazo.' },
  lessons: [
    {
      id: 'les_supp_10',
      slug: 'encouraging-professional-help',
      duration: 20,
      sort: 1,
      en: {
        title: 'When and How to Encourage Professional Help',
        content: `### Why professional help matters

Friends and family offer something irreplaceable: love, history, and everyday presence. Qualified professionals offer something different: training, assessment, treatment options, and a confidential space outside the person’s daily relationships. The two work best together. Encouraging professional help is not a sign that your support has failed. It is often one of the most caring things you can do.

### Signs it may be time

Consider gently encouraging professional support when you notice:

- Distress that has lasted for several weeks and is not easing.
- Difficulty with daily functioning: work, school, sleep, eating, hygiene, or relationships.
- Withdrawal from people and activities the person used to enjoy.
- Heavy or increasing use of alcohol or other substances to cope.
- Intense mood swings, panic, or feeling out of touch with reality.
- Talk of hopelessness, being a burden, or not wanting to be alive. (This last one calls for a direct response, covered in the next lesson.)

You do not need to be certain. Noticing a pattern and caring enough to mention it is enough.

### How to bring it up

Timing and tone matter. Choose a calm, private moment rather than the middle of an argument or crisis. Lead with care and specific observations, not labels.

- "I’ve noticed you haven’t been sleeping much and you seem really worn down. I care about you, and I wonder if talking to someone might help."
- "You’ve been carrying a lot for a long time. Have you ever thought about seeing a counselor or talking to your doctor about how you’ve been feeling?"
- "I’m always here to listen, and I also think you deserve support from someone who is trained in this."

Avoid diagnosing ("I think you have depression") or framing help as a demand. Offer options and let the person choose.

### Reducing barriers

People often hesitate because of cost, stigma, not knowing where to start, past bad experiences, or cultural and family beliefs about asking for help. You can help by:

- Listening to their concerns without dismissing them.
- Offering practical help: researching options, helping them write down what to say, sitting with them during a call, or offering a ride.
- Mentioning a range of options, such as a primary care doctor, counselors, community clinics, faith-based counselors, peer support groups, or employee assistance programs where available.
- Normalizing it: "Lots of people see someone when life gets heavy."

### Practice: planning the conversation

- Write down two or three specific things you have noticed.
- Write an opening sentence that leads with care.
- List a few professional options available in your area that you could mention.
- Write down one practical offer to make the next step easier.
- Plan how you will respond if they say no: accept it for now, stay connected, and leave the door open.`,
        prompt: 'What have you noticed that makes you think someone you care about might benefit from professional help? How could you raise it with care, and what practical support could you offer?'
      },
      es: {
        title: 'Cuándo y cómo animar a buscar ayuda profesional',
        content: `### Por qué importa la ayuda profesional

Las amistades y la familia ofrecen algo insustituible: amor, historia compartida y presencia cotidiana. Los profesionales calificados ofrecen algo distinto: formación, evaluación, opciones de tratamiento y un espacio confidencial fuera de las relaciones diarias de la persona. Ambas cosas funcionan mejor juntas. Animar a alguien a buscar ayuda profesional no significa que tu apoyo haya fallado. A menudo es una de las cosas más amorosas que puedes hacer.

### Señales de que puede ser el momento

Considera animar con suavidad a buscar apoyo profesional cuando notes:

- Un malestar que dura varias semanas y no disminuye.
- Dificultad para funcionar en el día a día: trabajo, estudios, sueño, alimentación, higiene o relaciones.
- Aislamiento de personas y actividades que antes disfrutaba.
- Consumo intenso o creciente de alcohol u otras sustancias para sobrellevar la situación.
- Cambios de ánimo muy intensos, pánico o sensación de desconexión con la realidad.
- Expresiones de desesperanza, de ser una carga o de no querer vivir. (Esto último requiere una respuesta directa, que veremos en la próxima lección.)

No necesitas estar seguro. Notar un patrón y preocuparte lo suficiente como para mencionarlo es suficiente.

### Cómo sacar el tema

El momento y el tono importan. Elige un momento tranquilo y privado, no en medio de una discusión o una crisis. Empieza por tu cariño y por observaciones concretas, no por etiquetas.

- "He notado que no estás durmiendo mucho y te veo muy agotada. Me importas y me pregunto si hablar con alguien podría ayudarte."
- "Llevas mucho tiempo cargando con muchas cosas. ¿Alguna vez has pensado en ver a un consejero o hablar con tu médico sobre cómo te has sentido?"
- "Siempre voy a estar aquí para escucharte, y también creo que mereces el apoyo de alguien que tenga formación en esto."

Evita diagnosticar ("Creo que tienes depresión") o plantear la ayuda como una exigencia. Ofrece opciones y deja que la persona elija.

### Reducir las barreras

Las personas suelen dudar por el costo, el estigma, no saber por dónde empezar, malas experiencias anteriores o creencias culturales y familiares sobre pedir ayuda. Puedes ayudar si:

- Escuchas sus preocupaciones sin descartarlas.
- Ofreces ayuda práctica: buscar opciones, ayudarle a escribir lo que quiere decir, acompañarle durante una llamada u ofrecerle transporte.
- Mencionas distintas opciones, como un médico de cabecera, consejeros, clínicas comunitarias, consejeros de su comunidad de fe, grupos de apoyo entre pares o programas de asistencia al empleado cuando existan.
- Lo normalizas: "Mucha gente busca a alguien cuando la vida se pone pesada".

### Práctica: planear la conversación

- Escribe dos o tres cosas concretas que hayas notado.
- Escribe una frase inicial que empiece por tu cariño.
- Anota algunas opciones profesionales disponibles en tu zona que podrías mencionar.
- Escribe un ofrecimiento práctico para facilitar el siguiente paso.
- Planea cómo responderás si dice que no: acéptalo por ahora, mantente cerca y deja la puerta abierta.`,
        prompt: '¿Qué has notado que te hace pensar que alguien que te importa podría beneficiarse de ayuda profesional? ¿Cómo podrías sacar el tema con cuidado y qué apoyo práctico podrías ofrecer?'
      },
      'pt-BR': {
        title: 'Quando e como incentivar a busca por ajuda profissional',
        content: `### Por que a ajuda profissional importa

Amigos e familiares oferecem algo insubstituível: amor, história compartilhada e presença no dia a dia. Profissionais qualificados oferecem algo diferente: formação, avaliação, opções de tratamento e um espaço confidencial fora das relações cotidianas da pessoa. As duas coisas funcionam melhor juntas. Incentivar a busca por ajuda profissional não é sinal de que o seu apoio falhou. Muitas vezes, é uma das coisas mais cuidadosas que você pode fazer.

### Sinais de que pode ser a hora

Considere incentivar com delicadeza a busca por apoio profissional quando perceber:

- Um sofrimento que dura várias semanas e não diminui.
- Dificuldade de dar conta do dia a dia: trabalho, estudos, sono, alimentação, higiene ou relações.
- Afastamento de pessoas e atividades de que a pessoa gostava.
- Uso pesado ou crescente de álcool ou outras substâncias para lidar com a situação.
- Mudanças de humor intensas, pânico ou sensação de estar desconectado da realidade.
- Falas sobre desesperança, sobre ser um peso ou sobre não querer viver. (Este último ponto pede uma resposta direta, que veremos na próxima lição.)

Você não precisa ter certeza. Perceber um padrão e se importar o suficiente para mencioná-lo já basta.

### Como tocar no assunto

O momento e o tom importam. Escolha um momento calmo e reservado, e não o meio de uma discussão ou de uma crise. Comece pelo carinho e por observações específicas, não por rótulos.

- "Percebi que você não tem dormido muito e parece muito cansada. Eu me importo com você e fico pensando se conversar com alguém poderia ajudar."
- "Você está carregando muita coisa há muito tempo. Já pensou em procurar um psicólogo ou conversar com o seu médico sobre como tem se sentido?"
- "Vou estar sempre aqui para escutar, e também acho que você merece o apoio de alguém preparado para isso."

Evite diagnosticar ("Acho que você está com depressão") ou apresentar a ajuda como uma exigência. Ofereça opções e deixe a pessoa escolher.

### Reduzindo as barreiras

As pessoas costumam hesitar por causa do custo, do estigma, de não saber por onde começar, de experiências ruins no passado ou de crenças culturais e familiares sobre pedir ajuda. Você pode ajudar se:

- Escutar as preocupações sem desmerecê-las.
- Oferecer ajuda prática: pesquisar opções, ajudar a anotar o que dizer, ficar junto durante uma ligação ou oferecer uma carona.
- Mencionar diferentes opções, como um clínico geral, psicólogos, serviços públicos de saúde da região, conselheiros da comunidade religiosa, grupos de apoio entre pares ou programas de apoio ao funcionário, quando existirem.
- Normalizar: "Muita gente procura alguém quando a vida fica pesada".

### Prática: planejando a conversa

- Escreva duas ou três coisas específicas que você percebeu.
- Escreva uma frase de abertura que comece pelo carinho.
- Liste algumas opções profissionais disponíveis na sua região que você poderia mencionar.
- Escreva uma oferta prática para facilitar o próximo passo.
- Planeje como vai responder se a pessoa disser não: aceite por enquanto, continue por perto e deixe a porta aberta.`,
        prompt: 'O que você percebeu que faz você pensar que alguém de quem gosta poderia se beneficiar de ajuda profissional? Como você poderia tocar no assunto com cuidado, e que apoio prático poderia oferecer?'
      }
    },
    {
      id: 'les_supp_11',
      slug: 'recognizing-a-crisis',
      duration: 25,
      sort: 2,
      en: {
        title: 'Recognizing and Responding to a Crisis',
        content: `### When presence is not enough

Most of this course focuses on everyday support. Sometimes, though, a situation becomes an emergency. Knowing how to recognize and respond to a crisis can help you act quickly and calmly. This lesson is educational and does not replace crisis training, but it can help you prepare.

### Possible warning signs

Take these seriously, especially if they are new, increasing, or appear together:

- Talking about wanting to die, being a burden, or having no reason to live.
- Looking for ways to end their life, or talking about a specific plan.
- Giving away possessions, saying goodbye, or putting affairs in order unexpectedly.
- Sudden calm after a period of deep distress, which can sometimes signal a decision has been made.
- Threats of violence toward others.
- Signs of overdose, such as unresponsiveness, very slow or stopped breathing, or blue lips.
- Severe confusion, or being unable to recognize what is real.
- A medical emergency, such as chest pain or a serious injury.

### Ask directly

If you are worried someone may be thinking about suicide, ask clearly: "Are you thinking about killing yourself?" or "Are you thinking about ending your life?" Asking directly does not put the idea in someone’s head. Many people feel relief when someone finally asks. A direct question shows you are able to hear the answer.

If they say yes, stay calm, thank them for telling you, and listen. Avoid arguing, lecturing, or promising to keep it secret.

### Steps to take

- **If there is immediate danger**, contact your local emergency number or a crisis line such as 988 in the US. If it is safe, stay with the person until help arrives.
- **Stay with them** or arrange for someone else to be with them if you cannot.
- **Help create distance from means**, if you can do so safely, such as medications, weapons, or other items they have mentioned.
- **Connect them with support**: a crisis line, their doctor or counselor, or an emergency department. Offer to make the call together.
- **Do not handle it alone**. Involve other trusted people as appropriate.

Your own safety matters too. If someone is threatening violence, keep yourself safe and contact emergency services.

### Practice: preparing your crisis card

- Save your local emergency number and a crisis line in your phone. In the US, 988 is available by call or text.
- Write down any local crisis services, and the nearest emergency department.
- Practice saying the direct question aloud in private, so it feels possible to say if needed.
- Write down two people you could call for help if you were supporting someone in crisis.
- Keep this information somewhere easy to find.

After a crisis, reach out for support for yourself as well. Responding to an emergency can be deeply affecting.`,
        prompt: 'Which crisis contacts will you save, and where will you keep them? What feels hardest about asking someone directly whether they are thinking about ending their life?'
      },
      es: {
        title: 'Reconocer y responder a una crisis',
        content: `### Cuando la presencia no basta

La mayor parte de este curso se centra en el apoyo cotidiano. Sin embargo, a veces una situación se convierte en una emergencia. Saber reconocer y responder a una crisis puede ayudarte a actuar con rapidez y calma. Esta lección es educativa y no reemplaza una formación en crisis, pero puede ayudarte a prepararte.

### Posibles señales de alerta

Tómalas en serio, sobre todo si son nuevas, van en aumento o aparecen juntas:

- Hablar de querer morir, de ser una carga o de no tener razones para vivir.
- Buscar formas de quitarse la vida o hablar de un plan concreto.
- Regalar sus pertenencias, despedirse u ordenar sus asuntos de manera inesperada.
- Una calma repentina después de un periodo de gran angustia, que a veces puede indicar que se tomó una decisión.
- Amenazas de violencia hacia otras personas.
- Señales de sobredosis, como no responder, respiración muy lenta o detenida, o labios azulados.
- Confusión grave o incapacidad de reconocer lo que es real.
- Una emergencia médica, como dolor en el pecho o una lesión grave.

### Pregunta directamente

Si te preocupa que alguien esté pensando en el suicidio, pregúntalo con claridad: "¿Estás pensando en suicidarte?" o "¿Estás pensando en quitarte la vida?". Preguntar directamente no pone la idea en la cabeza de nadie. Muchas personas sienten alivio cuando por fin alguien pregunta. Una pregunta directa muestra que eres capaz de escuchar la respuesta.

Si responde que sí, mantén la calma, agradécele que te lo haya contado y escucha. Evita discutir, sermonear o prometer que guardarás el secreto.

### Pasos a seguir

- **Si hay peligro inmediato**, comunícate con tu número local de emergencias o con una línea de crisis como el 988 en Estados Unidos. Si es seguro, quédate con la persona hasta que llegue la ayuda.
- **Quédate con ella** o busca que otra persona la acompañe si tú no puedes.
- **Ayuda a poner distancia con los medios**, si puedes hacerlo de forma segura, como medicamentos, armas u otros objetos que haya mencionado.
- **Conéctala con apoyo**: una línea de crisis, su médico o consejero o un servicio de urgencias. Ofrece hacer la llamada juntos.
- **No lo enfrentes a solas**. Involucra a otras personas de confianza según corresponda.

Tu propia seguridad también importa. Si alguien amenaza con violencia, ponte a salvo y comunícate con los servicios de emergencia.

### Práctica: prepara tu tarjeta de crisis

- Guarda en tu teléfono tu número local de emergencias y una línea de crisis. En Estados Unidos, el 988 está disponible por llamada o mensaje de texto.
- Anota los servicios de crisis de tu zona y el servicio de urgencias más cercano.
- Practica en privado decir la pregunta directa en voz alta, para que te resulte posible decirla si hace falta.
- Anota dos personas a quienes podrías llamar para pedir ayuda si estuvieras acompañando a alguien en crisis.
- Guarda esta información en un lugar fácil de encontrar.

Después de una crisis, busca también apoyo para ti. Responder a una emergencia puede afectarte profundamente.`,
        prompt: '¿Qué contactos de crisis guardarás y dónde los tendrás? ¿Qué te resulta más difícil de preguntarle directamente a alguien si está pensando en quitarse la vida?'
      },
      'pt-BR': {
        title: 'Reconhecendo e respondendo a uma crise',
        content: `### Quando a presença não basta

A maior parte deste curso trata do apoio no dia a dia. Às vezes, porém, uma situação se torna uma emergência. Saber reconhecer e responder a uma crise pode ajudar você a agir com rapidez e calma. Esta lição é educativa e não substitui um treinamento em crise, mas pode ajudar você a se preparar.

### Possíveis sinais de alerta

Leve estes sinais a sério, principalmente se forem novos, estiverem aumentando ou aparecerem juntos:

- Falar em querer morrer, em ser um peso ou em não ter motivo para viver.
- Procurar formas de tirar a própria vida ou falar sobre um plano específico.
- Doar pertences, despedir-se ou organizar assuntos pessoais de forma inesperada.
- Uma calma repentina depois de um período de grande sofrimento, o que às vezes pode indicar que uma decisão foi tomada.
- Ameaças de violência contra outras pessoas.
- Sinais de overdose, como não responder, respiração muito lenta ou parada, ou lábios arroxeados.
- Confusão grave ou incapacidade de reconhecer o que é real.
- Uma emergência médica, como dor no peito ou um ferimento grave.

### Pergunte diretamente

Se você está preocupado que alguém esteja pensando em suicídio, pergunte com clareza: "Você está pensando em se matar?" ou "Você está pensando em tirar a própria vida?". Perguntar diretamente não coloca a ideia na cabeça de ninguém. Muitas pessoas sentem alívio quando, enfim, alguém pergunta. Uma pergunta direta mostra que você é capaz de ouvir a resposta.

Se a pessoa disser que sim, mantenha a calma, agradeça por ela ter contado e escute. Evite discutir, dar sermão ou prometer guardar segredo.

### Passos a seguir

- **Se houver perigo imediato**, ligue para o número de emergência local ou para uma linha de crise como o 988 nos Estados Unidos. Se for seguro, fique com a pessoa até a ajuda chegar.
- **Fique com ela** ou providencie que outra pessoa fique, se você não puder.
- **Ajude a afastar os meios**, se puder fazer isso com segurança, como medicamentos, armas ou outros objetos que ela tenha mencionado.
- **Conecte a pessoa com apoio**: uma linha de crise, o médico ou terapeuta dela ou um pronto-socorro. Ofereça-se para fazer a ligação juntos.
- **Não enfrente isso sozinho**. Envolva outras pessoas de confiança quando for apropriado.

A sua própria segurança também importa. Se alguém estiver ameaçando violência, proteja-se e acione os serviços de emergência.

### Prática: preparando o seu cartão de crise

- Salve no celular o número de emergência local e uma linha de crise. Nos Estados Unidos, o 988 está disponível por ligação ou mensagem de texto.
- Anote os serviços de crise da sua região e o pronto-socorro mais próximo.
- Pratique em particular dizer a pergunta direta em voz alta, para que pareça possível dizê-la se for necessário.
- Anote duas pessoas para quem você poderia ligar pedindo ajuda se estivesse apoiando alguém em crise.
- Guarde essas informações em um lugar fácil de encontrar.

Depois de uma crise, procure apoio para você também. Responder a uma emergência pode afetar você profundamente.`,
        prompt: 'Quais contatos de crise você vai salvar, e onde vai guardá-los? O que parece mais difícil em perguntar diretamente a alguém se ele está pensando em tirar a própria vida?'
      }
    },
    {
      id: 'les_supp_12',
      slug: 'after-the-conversation',
      duration: 20,
      sort: 3,
      en: {
        title: 'After the Conversation: Follow-Up & the Long Haul',
        content: `### Support is a relationship, not a single moment

A meaningful conversation can be a turning point, but lasting support happens over time. What you do in the days and weeks afterward often matters as much as what you said in the moment. Many people say that the hardest part of struggling is when others stop checking in.

### Agreeing on follow-up

Before a supportive conversation ends, it can help to agree on what happens next. This gives the person something steady to hold onto and gives you clarity about your role.

- "Can I check in with you on Friday to see how you’re doing?"
- "Would you like me to text you after your appointment?"
- "What would be a helpful way for me to stay in touch this week?"

Keep your follow-up realistic. A short message you can reliably send is better than an ambitious plan you cannot keep. If you promise to check in, do it. Reliability builds trust.

### Regulating yourself afterward

Supportive conversations can leave you stirred up. Take a few minutes to settle your own nervous system before moving on. You might breathe slowly, move your body, step outside, or write down what you are feeling. If you are carrying worry, bring it to your own support person.

### Staying with the long haul

Some struggles resolve in weeks. Others last months or years, or come and go. In long-term situations:

- Keep your expectations flexible. Progress is often uneven.
- Keep doing ordinary things together, not only talking about problems.
- Revisit your boundaries and capacity from time to time.
- Encourage the person’s wider circle of support and professional care.
- Notice and celebrate small steps without pressuring them to be "better."
- Remember hard dates, such as anniversaries of a loss, and reach out.

### When things do not go as hoped

Sometimes a person declines help, stops responding, or makes choices that worry you. You cannot control another adult’s path. You can stay kind, keep the door open, and continue to care for yourself. If safety concerns arise, return to the crisis steps from the previous lesson.

### Practice: closing the course

- Write down a realistic next check-in with someone you support: when, how, and what you will say.
- Write one thing you will do to settle yourself after supportive conversations.
- Review your capacity map and boundary from Module 3. Does anything need adjusting?
- Confirm your crisis contacts are saved.
- Close gently: name one thing you want to carry forward, one thing you are setting down for now, and one source of support you can contact if needed.

Thank you for taking the time to learn how to be there for others. Your care matters.`,
        prompt: 'What is a realistic next check-in with someone you support? What will help you stay steady and kind to yourself over the long haul?'
      },
      es: {
        title: 'Después de la conversación: seguimiento y el largo plazo',
        content: `### El apoyo es una relación, no un solo momento

Una conversación significativa puede ser un punto de inflexión, pero el apoyo duradero se construye con el tiempo. Lo que haces en los días y semanas siguientes suele importar tanto como lo que dijiste en el momento. Muchas personas cuentan que lo más difícil de pasar por un mal momento es cuando los demás dejan de preguntar.

### Acordar el seguimiento

Antes de que termine una conversación de apoyo, puede ayudar acordar qué pasará después. Esto le da a la persona algo estable a lo que aferrarse y a ti te da claridad sobre tu papel.

- "¿Te parece si te escribo el viernes para saber cómo estás?"
- "¿Quieres que te mande un mensaje después de tu cita?"
- "¿Qué forma de mantenernos en contacto esta semana te ayudaría?"

Que tu seguimiento sea realista. Un mensaje breve que puedes enviar con constancia es mejor que un plan ambicioso que no podrás cumplir. Si prometes escribir, hazlo. La confiabilidad construye confianza.

### Regularte después

Las conversaciones de apoyo pueden dejarte removido. Tómate unos minutos para calmar tu sistema nervioso antes de seguir. Puedes respirar despacio, mover el cuerpo, salir al aire libre o escribir lo que sientes. Si te queda preocupación, llévala a tu propia persona de apoyo.

### Sostener el largo plazo

Algunas dificultades se resuelven en semanas. Otras duran meses o años, o van y vienen. En situaciones prolongadas:

- Mantén expectativas flexibles. El progreso suele ser irregular.
- Sigan haciendo cosas cotidianas juntos, no solo hablar de problemas.
- Revisa de vez en cuando tus límites y tu capacidad.
- Anima a la persona a sostener su red de apoyo más amplia y la atención profesional.
- Nota y celebra los pequeños pasos sin presionarla para que esté "mejor".
- Recuerda las fechas difíciles, como el aniversario de una pérdida, y acércate.

### Cuando las cosas no salen como esperabas

A veces una persona rechaza la ayuda, deja de responder o toma decisiones que te preocupan. No puedes controlar el camino de otra persona adulta. Puedes seguir siendo amable, dejar la puerta abierta y seguir cuidándote. Si surgen preocupaciones de seguridad, vuelve a los pasos de crisis de la lección anterior.

### Práctica: cerrar el curso

- Escribe un próximo contacto realista con alguien que acompañas: cuándo, cómo y qué le dirás.
- Escribe algo que harás para calmarte después de las conversaciones de apoyo.
- Revisa tu mapa de capacidad y tu límite del Módulo 3. ¿Hay algo que ajustar?
- Confirma que tus contactos de crisis estén guardados.
- Cierra con suavidad: nombra algo que quieras llevar contigo, algo que dejas a un lado por ahora y una fuente de apoyo a la que puedas recurrir si lo necesitas.

Gracias por dedicar tiempo a aprender a estar presente para los demás. Tu cuidado importa.`,
        prompt: '¿Cuál es un próximo contacto realista con alguien que acompañas? ¿Qué te ayudará a mantenerte estable y ser amable contigo a largo plazo?'
      },
      'pt-BR': {
        title: 'Depois da conversa: acompanhamento e o longo prazo',
        content: `### Apoio é uma relação, não um único momento

Uma conversa significativa pode ser um ponto de virada, mas o apoio duradouro acontece ao longo do tempo. O que você faz nos dias e semanas seguintes muitas vezes importa tanto quanto o que disse no momento. Muitas pessoas contam que a parte mais difícil de passar por um momento ruim é quando os outros param de perguntar.

### Combinando o acompanhamento

Antes de uma conversa de apoio terminar, pode ajudar combinar o que vem a seguir. Isso dá à pessoa algo estável em que se apoiar e dá a você clareza sobre o seu papel.

- "Posso te mandar uma mensagem na sexta para saber como você está?"
- "Você quer que eu te escreva depois da sua consulta?"
- "Qual seria uma forma útil de a gente manter contato nesta semana?"

Mantenha o acompanhamento realista. Uma mensagem curta que você consegue mandar com constância é melhor do que um plano ambicioso que você não vai conseguir cumprir. Se prometer entrar em contato, faça isso. Ser confiável constrói confiança.

### Regulando-se depois

Conversas de apoio podem deixar você mexido. Tire alguns minutos para acalmar o seu sistema nervoso antes de seguir em frente. Você pode respirar devagar, movimentar o corpo, sair ao ar livre ou escrever o que está sentindo. Se ficar alguma preocupação, leve-a para a sua própria pessoa de apoio.

### Sustentando o longo prazo

Algumas dificuldades se resolvem em semanas. Outras duram meses ou anos, ou vão e voltam. Em situações de longo prazo:

- Mantenha expectativas flexíveis. O progresso costuma ser irregular.
- Continuem fazendo coisas comuns juntos, não só conversando sobre problemas.
- Revise os seus limites e a sua capacidade de tempos em tempos.
- Incentive a rede de apoio mais ampla da pessoa e o cuidado profissional.
- Perceba e celebre pequenos passos sem pressionar a pessoa a estar "melhor".
- Lembre-se de datas difíceis, como o aniversário de uma perda, e entre em contato.

### Quando as coisas não saem como você esperava

Às vezes a pessoa recusa ajuda, para de responder ou faz escolhas que preocupam você. Você não pode controlar o caminho de outro adulto. Pode continuar sendo gentil, deixar a porta aberta e continuar cuidando de si. Se surgirem preocupações com a segurança, volte aos passos de crise da lição anterior.

### Prática: encerrando o curso

- Escreva um próximo contato realista com alguém que você apoia: quando, como e o que vai dizer.
- Escreva uma coisa que você vai fazer para se acalmar depois de conversas de apoio.
- Revise o seu mapa de capacidade e o seu limite do Módulo 3. Algo precisa de ajuste?
- Confirme que os seus contatos de crise estão salvos.
- Encerre com delicadeza: nomeie algo que você quer levar adiante, algo que está deixando de lado por enquanto e uma fonte de apoio que pode procurar se precisar.

Obrigado por dedicar tempo a aprender a estar presente para os outros. O seu cuidado importa.`,
        prompt: 'Qual é um próximo contato realista com alguém que você apoia? O que vai ajudar você a se manter firme e gentil consigo mesmo a longo prazo?'
      }
    }
  ]
});

// ---------------------------------------------------------------------------
// 3. Personality Patterns (new)
// ---------------------------------------------------------------------------
const coursePersonality = {
  id: 'course_personality_patterns',
  slug: 'personality-patterns',
  is_premium: 1,
  level: 'All levels',
  hours: 4.0,
  en: {
    title: 'Understanding Personality Patterns',
    subtitle: 'Getting curious about how you react and relate, without putting yourself in a box.',
    description: 'A reflective, non-diagnostic course on the recurring patterns in how we respond to stress, seek connection, protect ourselves, and repair. Instead of types and labels, you will map triggers and protective strategies, explore shame and defensiveness, and practice more flexible, curious ways of relating.',
    outcomes: JSON.stringify(['Describe your recurring patterns with curiosity rather than labels', 'Map triggers, protective responses, and their short- and long-term effects', 'Own your impact without collapsing into shame', 'Recognize when self-reflection is not enough and qualified support is needed'])
  },
  es: {
    title: 'Comprender los patrones de personalidad',
    subtitle: 'Mirar con curiosidad cómo reaccionas y te relacionas, sin encerrarte en una caja.',
    description: 'Un curso reflexivo y no diagnóstico sobre los patrones que se repiten en cómo respondemos al estrés, buscamos conexión, nos protegemos y reparamos. En lugar de tipos y etiquetas, mapearás detonantes y estrategias de protección, explorarás la vergüenza y la actitud defensiva, y practicarás formas más flexibles y curiosas de relacionarte.',
    outcomes: JSON.stringify(['Describir tus patrones recurrentes con curiosidad en lugar de etiquetas', 'Mapear detonantes, respuestas de protección y sus efectos a corto y largo plazo', 'Hacerte cargo de tu impacto sin hundirte en la vergüenza', 'Reconocer cuándo la reflexión personal no basta y hace falta apoyo calificado'])
  },
  'pt-BR': {
    title: 'Compreendendo padrões de personalidade',
    subtitle: 'Olhar com curiosidade para como você reage e se relaciona, sem se colocar em uma caixa.',
    description: 'Um curso reflexivo e não diagnóstico sobre os padrões que se repetem na forma como respondemos ao estresse, buscamos conexão, nos protegemos e reparamos. Em vez de tipos e rótulos, você vai mapear gatilhos e estratégias de proteção, explorar a vergonha e a defensividade, e praticar formas mais flexíveis e curiosas de se relacionar.',
    outcomes: JSON.stringify(['Descrever os seus padrões recorrentes com curiosidade, e não com rótulos', 'Mapear gatilhos, respostas de proteção e os seus efeitos a curto e longo prazo', 'Assumir o seu impacto sem afundar na vergonha', 'Reconhecer quando a autorreflexão não basta e é preciso apoio qualificado'])
  },
  modules: []
};
COURSES_B.push(coursePersonality);

coursePersonality.modules.push({
  id: 'mod_pers_1',
  slug: 'patterns-not-boxes',
  sort: 1,
  en: { title: 'Patterns, Not Boxes', description: 'Describing repetition without turning a person into a label, noticing what repeats, and understanding the many influences that shape us.' },
  es: { title: 'Patrones, no cajas', description: 'Describir lo que se repite sin convertir a una persona en una etiqueta, observar lo que vuelve a aparecer y comprender las muchas influencias que nos forman.' },
  'pt-BR': { title: 'Padrões, não caixas', description: 'Descrever a repetição sem transformar uma pessoa em um rótulo, perceber o que se repete e compreender as muitas influências que nos moldam.' },
  lessons: [
    {
      id: 'les_pers_1',
      slug: 'patterns-not-boxes',
      duration: 20,
      sort: 1,
      en: {
        title: 'Patterns, Not Boxes',
        content: `### Why we love labels, and their limits

Personality quizzes, type systems, and labels are everywhere. They can be fun, and sometimes they give us useful language: "Oh, that’s why I need time alone after a party." But labels also have limits. They can flatten a complex person into a single category, suggest that we cannot change, or become an excuse ("That’s just how I am"). Some popular type systems have little scientific support, even when they feel accurate.

This course takes a different approach. Instead of asking "What type am I?", we ask "What patterns do I notice in how I react and relate, and what are they trying to do for me?"

### What we mean by a pattern

A pattern is a way of feeling, thinking, or acting that tends to repeat, especially in similar situations. For example:

- Going quiet and withdrawing when someone is upset with you.
- Taking on extra work whenever you feel anxious about being valued.
- Making a joke when conversations get emotional.
- Needing to have the last word in a disagreement.
- Apologizing quickly, even when you are not sure you did anything wrong.

Patterns are not character flaws. Most of them developed for good reasons and have helped us at some point. They can also become rigid, showing up automatically even when they no longer fit the situation.

### Describing without labeling

A helpful skill is to describe behavior rather than label a person. Compare:

- Label: "I’m a people-pleaser."
- Description: "When I sense someone is disappointed, I often say yes to things I don’t have time for."

The description is more specific, less shaming, and more workable. It points to a situation, a response, and a possible choice point.

### A note on diagnosis

This course is educational and reflective. It does not diagnose personality disorders or any other condition, and it should not be used to diagnose others. If you are concerned about persistent patterns that cause significant distress or difficulty, a qualified mental health professional can offer a proper assessment. We will return to this in the final module.

### Practice: from label to description

- Write down one label you often use about yourself, such as "I’m too sensitive" or "I’m a control freak."
- Now describe the specific behavior behind the label. When does it happen? What do you do? What happens next?
- Notice how the description feels compared to the label.
- Write one sentence of curiosity about the pattern, such as "I wonder what this pattern is trying to protect."
- Choose one pattern you want to understand with more curiosity over the course of these lessons.`,
        prompt: 'Which label do you often use about yourself, and how would you describe the specific pattern behind it? Which pattern do you want to understand with more curiosity?'
      },
      es: {
        title: 'Patrones, no cajas',
        content: `### Por qué nos gustan las etiquetas y cuáles son sus límites

Los tests de personalidad, los sistemas de tipos y las etiquetas están por todas partes. Pueden ser divertidos y a veces nos dan un lenguaje útil: "Ah, por eso necesito tiempo a solas después de una fiesta". Pero las etiquetas también tienen límites. Pueden reducir a una persona compleja a una sola categoría, sugerir que no podemos cambiar o convertirse en una excusa ("Así soy yo"). Algunos sistemas de tipos populares tienen poco respaldo científico, aunque se sientan acertados.

Este curso propone otro enfoque. En lugar de preguntar "¿Qué tipo soy?", preguntamos "¿Qué patrones noto en cómo reacciono y me relaciono, y qué intentan hacer por mí?".

### Qué entendemos por patrón

Un patrón es una forma de sentir, pensar o actuar que tiende a repetirse, sobre todo en situaciones parecidas. Por ejemplo:

- Quedarte en silencio y alejarte cuando alguien está molesto contigo.
- Asumir trabajo extra cada vez que te preocupa no ser valorado.
- Hacer una broma cuando las conversaciones se vuelven emotivas.
- Necesitar tener la última palabra en un desacuerdo.
- Pedir perdón rápidamente, incluso cuando no estás seguro de haber hecho algo mal.

Los patrones no son defectos de carácter. La mayoría surgió por buenas razones y nos ayudó en algún momento. También pueden volverse rígidos y aparecer de forma automática aunque ya no encajen con la situación.

### Describir sin etiquetar

Una habilidad útil es describir la conducta en lugar de etiquetar a la persona. Compara:

- Etiqueta: "Soy complaciente."
- Descripción: "Cuando percibo que alguien está decepcionado, a menudo digo que sí a cosas para las que no tengo tiempo."

La descripción es más específica, menos avergonzante y más manejable. Señala una situación, una respuesta y un posible punto de elección.

### Una nota sobre el diagnóstico

Este curso es educativo y reflexivo. No diagnostica trastornos de la personalidad ni ninguna otra condición, y no debe usarse para diagnosticar a otras personas. Si te preocupan patrones persistentes que causan un malestar o dificultades importantes, un profesional de salud mental calificado puede ofrecer una evaluación adecuada. Volveremos a esto en el último módulo.

### Práctica: de la etiqueta a la descripción

- Escribe una etiqueta que uses a menudo sobre ti, como "Soy demasiado sensible" o "Soy un controlador".
- Ahora describe la conducta concreta detrás de esa etiqueta. ¿Cuándo sucede? ¿Qué haces? ¿Qué pasa después?
- Observa cómo se siente la descripción en comparación con la etiqueta.
- Escribe una frase de curiosidad sobre el patrón, como "Me pregunto qué intenta proteger este patrón".
- Elige un patrón que quieras comprender con más curiosidad a lo largo de estas lecciones.`,
        prompt: '¿Qué etiqueta usas a menudo sobre ti y cómo describirías el patrón concreto que hay detrás? ¿Qué patrón quieres comprender con más curiosidad?'
      },
      'pt-BR': {
        title: 'Padrões, não caixas',
        content: `### Por que gostamos de rótulos, e os seus limites

Testes de personalidade, sistemas de tipos e rótulos estão por toda parte. Eles podem ser divertidos e às vezes nos dão uma linguagem útil: "Ah, é por isso que preciso de um tempo sozinho depois de uma festa". Mas os rótulos também têm limites. Eles podem achatar uma pessoa complexa em uma única categoria, sugerir que não podemos mudar ou virar uma desculpa ("Eu sou assim mesmo"). Alguns sistemas de tipos populares têm pouco respaldo científico, mesmo quando parecem certeiros.

Este curso propõe outro caminho. Em vez de perguntar "Que tipo eu sou?", perguntamos "Que padrões eu percebo na forma como reajo e me relaciono, e o que eles estão tentando fazer por mim?".

### O que entendemos por padrão

Um padrão é uma forma de sentir, pensar ou agir que tende a se repetir, principalmente em situações parecidas. Por exemplo:

- Ficar em silêncio e se afastar quando alguém está chateado com você.
- Assumir trabalho extra sempre que você se sente inseguro sobre ser valorizado.
- Fazer uma piada quando as conversas ficam emotivas.
- Precisar ter a última palavra em um desentendimento.
- Pedir desculpas rapidamente, mesmo sem ter certeza de ter feito algo errado.

Padrões não são defeitos de caráter. A maioria surgiu por bons motivos e nos ajudou em algum momento. Eles também podem ficar rígidos, aparecendo de forma automática mesmo quando já não combinam com a situação.

### Descrever sem rotular

Uma habilidade útil é descrever o comportamento em vez de rotular a pessoa. Compare:

- Rótulo: "Eu sou do tipo que agrada todo mundo."
- Descrição: "Quando percebo que alguém está decepcionado, muitas vezes digo sim para coisas para as quais não tenho tempo."

A descrição é mais específica, traz menos vergonha e é mais fácil de trabalhar. Ela aponta uma situação, uma resposta e um possível ponto de escolha.

### Uma nota sobre diagnóstico

Este curso é educativo e reflexivo. Ele não diagnostica transtornos de personalidade nem qualquer outra condição, e não deve ser usado para diagnosticar outras pessoas. Se você se preocupa com padrões persistentes que causam sofrimento ou dificuldades importantes, um profissional de saúde mental qualificado pode oferecer uma avaliação adequada. Voltaremos a isso no último módulo.

### Prática: do rótulo à descrição

- Escreva um rótulo que você costuma usar sobre si mesmo, como "Sou sensível demais" ou "Sou controlador".
- Agora descreva o comportamento específico por trás do rótulo. Quando acontece? O que você faz? O que acontece depois?
- Perceba como a descrição soa em comparação com o rótulo.
- Escreva uma frase de curiosidade sobre o padrão, como "Fico me perguntando o que esse padrão está tentando proteger".
- Escolha um padrão que você quer compreender com mais curiosidade ao longo destas lições.`,
        prompt: 'Que rótulo você costuma usar sobre si mesmo, e como descreveria o padrão específico por trás dele? Que padrão você quer compreender com mais curiosidade?'
      }
    },
    {
      id: 'les_pers_2',
      slug: 'noticing-what-repeats',
      duration: 20,
      sort: 2,
      en: {
        title: 'Noticing What Repeats',
        content: `### Patterns hide in plain sight

Because patterns are automatic, we often do not notice them while they are happening. We see them afterward, sometimes much later: "Why did I say that again?" or "This is the third job where I’ve felt invisible." Becoming more aware of patterns starts with gentle, consistent observation.

### Where patterns tend to show up

Patterns often become visible in:

- **Moments of stress**: deadlines, conflict, uncertainty, feeling criticized.
- **Close relationships**: partners, family members, close friends, where more is at stake.
- **Transitions**: new jobs, moves, breakups, becoming a parent.
- **Repeated situations**: the same kind of argument, the same feeling at family gatherings, the same point in a project where you tend to stall.

You might also notice patterns through feedback from people who know you well, though it is worth weighing that feedback thoughtfully rather than accepting it wholesale.

### The observation loop

A simple way to track patterns is to notice four elements:

- **Situation**: What was happening? Who was there?
- **Inner experience**: What did you feel in your body? What emotions and thoughts came up?
- **Response**: What did you do or say, or not do?
- **Outcome**: What happened next, for you and for others?

Over time, you may see the same inner experience leading to the same response across different situations. That repetition is the pattern.

### Curiosity, not criticism

It is easy to turn observation into self-criticism: "There I go again, ruining everything." Try instead to observe like a kind scientist or a caring friend. Imagine you are gathering information about someone you care about, because you are.

Useful phrases include: "Interesting, I did that again," or "I notice that when I feel left out, I get very busy."

### Practice: a one-week pattern log

- Each evening for a week, note one moment that stood out: a time you reacted strongly, felt uncomfortable, or did something you later wondered about.
- For each moment, write a few words for the situation, inner experience, response, and outcome.
- Keep it short. Two or three minutes is enough.
- At the end of the week, read through your notes. Look for repeated feelings, responses, or situations.
- Circle one repetition that seems worth exploring further.

If tracking your reactions increases distress or brings up painful memories, it is okay to pause, simplify the exercise, or explore it with the support of a counselor.`,
        prompt: 'Looking back at the past week or month, what reaction or situation seems to repeat? What do you notice about the feelings that come just before it?'
      },
      es: {
        title: 'Observar lo que se repite',
        content: `### Los patrones se esconden a plena vista

Como los patrones son automáticos, a menudo no los notamos mientras ocurren. Los vemos después, a veces mucho más tarde: "¿Por qué volví a decir eso?" o "Este es el tercer trabajo en el que me siento invisible". Tomar más conciencia de los patrones empieza con una observación amable y constante.

### Dónde suelen aparecer los patrones

Los patrones suelen hacerse visibles en:

- **Momentos de estrés**: fechas límite, conflictos, incertidumbre, sentirse criticado.
- **Relaciones cercanas**: pareja, familiares, amistades íntimas, donde hay más en juego.
- **Transiciones**: trabajos nuevos, mudanzas, rupturas, convertirse en madre o padre.
- **Situaciones repetidas**: el mismo tipo de discusión, la misma sensación en las reuniones familiares, el mismo punto de un proyecto en el que tiendes a estancarte.

También puedes notar patrones a través de comentarios de personas que te conocen bien, aunque vale la pena considerarlos con cuidado en lugar de aceptarlos por completo.

### El ciclo de observación

Una forma sencilla de seguir los patrones es observar cuatro elementos:

- **Situación**: ¿Qué estaba pasando? ¿Quién estaba ahí?
- **Experiencia interior**: ¿Qué sentiste en el cuerpo? ¿Qué emociones y pensamientos surgieron?
- **Respuesta**: ¿Qué hiciste o dijiste, o qué dejaste de hacer?
- **Resultado**: ¿Qué pasó después, para ti y para los demás?

Con el tiempo, quizá veas que la misma experiencia interior lleva a la misma respuesta en situaciones distintas. Esa repetición es el patrón.

### Curiosidad, no crítica

Es fácil convertir la observación en autocrítica: "Otra vez lo estoy arruinando todo". Intenta en cambio observar como una científica amable o un amigo que te quiere. Imagina que estás reuniendo información sobre alguien que te importa, porque así es.

Algunas frases útiles son: "Qué interesante, lo volví a hacer" o "Noto que cuando me siento excluido, me pongo muy ocupado".

### Práctica: un registro de patrones de una semana

- Cada noche durante una semana, anota un momento que te haya llamado la atención: una vez en que reaccionaste con fuerza, te sentiste incómodo o hiciste algo que después te hizo preguntarte por qué.
- Para cada momento, escribe unas palabras sobre la situación, la experiencia interior, la respuesta y el resultado.
- Que sea breve. Dos o tres minutos bastan.
- Al final de la semana, lee tus notas. Busca sentimientos, respuestas o situaciones que se repitan.
- Encierra en un círculo una repetición que valga la pena explorar más.

Si registrar tus reacciones aumenta tu malestar o despierta recuerdos dolorosos, está bien hacer una pausa, simplificar el ejercicio o explorarlo con el apoyo de un consejero.`,
        prompt: 'Mirando la última semana o el último mes, ¿qué reacción o situación parece repetirse? ¿Qué notas en los sentimientos que aparecen justo antes?'
      },
      'pt-BR': {
        title: 'Percebendo o que se repete',
        content: `### Os padrões se escondem à vista

Como os padrões são automáticos, muitas vezes não os percebemos enquanto estão acontecendo. Nós os vemos depois, às vezes muito tempo depois: "Por que eu disse isso de novo?" ou "Este é o terceiro emprego em que me sinto invisível". Ter mais consciência dos padrões começa com uma observação gentil e constante.

### Onde os padrões costumam aparecer

Os padrões costumam ficar visíveis em:

- **Momentos de estresse**: prazos, conflitos, incerteza, sentir-se criticado.
- **Relações próximas**: parceiros, familiares, amigos íntimos, onde há mais em jogo.
- **Transições**: empregos novos, mudanças de casa, términos, tornar-se mãe ou pai.
- **Situações repetidas**: o mesmo tipo de briga, a mesma sensação nos encontros de família, o mesmo ponto de um projeto em que você costuma travar.

Você também pode perceber padrões por meio de comentários de pessoas que conhecem você bem, embora valha a pena pesar esses comentários com cuidado em vez de aceitá-los por inteiro.

### O ciclo de observação

Uma forma simples de acompanhar padrões é observar quatro elementos:

- **Situação**: O que estava acontecendo? Quem estava lá?
- **Experiência interna**: O que você sentiu no corpo? Que emoções e pensamentos surgiram?
- **Resposta**: O que você fez ou disse, ou deixou de fazer?
- **Resultado**: O que aconteceu depois, para você e para os outros?

Com o tempo, você pode perceber que a mesma experiência interna leva à mesma resposta em situações diferentes. Essa repetição é o padrão.

### Curiosidade, não crítica

É fácil transformar a observação em autocrítica: "Lá vou eu de novo, estragando tudo". Tente, em vez disso, observar como uma cientista gentil ou um amigo que gosta de você. Imagine que você está reunindo informações sobre alguém de quem gosta, porque é isso mesmo.

Frases úteis incluem: "Interessante, fiz isso de novo" ou "Percebo que, quando me sinto excluído, fico muito ocupado".

### Prática: um registro de padrões de uma semana

- Toda noite, durante uma semana, anote um momento que chamou a sua atenção: uma vez em que você reagiu com força, se sentiu desconfortável ou fez algo que depois deixou você se perguntando por quê.
- Para cada momento, escreva algumas palavras sobre a situação, a experiência interna, a resposta e o resultado.
- Seja breve. Dois ou três minutos são suficientes.
- No fim da semana, leia as suas anotações. Procure sentimentos, respostas ou situações que se repetem.
- Circule uma repetição que pareça valer a pena explorar mais.

Se registrar as suas reações aumentar o sofrimento ou trouxer lembranças dolorosas, tudo bem fazer uma pausa, simplificar o exercício ou explorá-lo com o apoio de um terapeuta.`,
        prompt: 'Olhando para a última semana ou o último mês, que reação ou situação parece se repetir? O que você percebe nos sentimentos que surgem logo antes?'
      }
    },
    {
      id: 'les_pers_3',
      slug: 'temperament-history-and-context',
      duration: 20,
      sort: 3,
      en: {
        title: 'Temperament, History & Context',
        content: `### Many threads, one person

Our patterns do not come from a single source. They are woven from many threads, and understanding those threads can soften self-judgment and open more room for change. Rather than asking "What is wrong with me?", we can ask "What shaped me, and what shapes me now?"

### Temperament

People differ from early in life in things like sensitivity to stimulation, activity level, how quickly they approach or hesitate with new things, and how intensely they react. These tendencies, often called temperament, are not destiny, but they influence how we experience the world. A person who is naturally sensitive to noise and conflict may develop different patterns than someone who finds intensity energizing. Neither is better.

### History

Our experiences, especially in childhood and in significant relationships, teach us what to expect from others and how to stay safe or connected. If expressing needs led to warmth, we may learn to express them freely. If it led to criticism, conflict, or being ignored, we may learn to hide them. Painful or frightening experiences can leave especially strong imprints. These lessons made sense in their original context, even if they fit less well now.

### Culture and community

Family culture, cultural background, religion, gender expectations, class, and community norms all shape which behaviors are praised and which are discouraged. What one family calls "respectful," another might call "distant." What one culture calls "direct," another might call "rude." Understanding these influences helps us see patterns as adaptations, not defects.

### Current context

Our present circumstances matter too. Chronic stress, lack of sleep, illness, pain, financial strain, discrimination, caregiving demands, and major life changes can all intensify patterns. Someone who is usually patient may become irritable under prolonged stress. Noticing context helps you respond to yourself with fairness.

### Holding it all together

None of these threads removes responsibility for how we treat ourselves and others. Understanding where a pattern comes from is not the same as excusing its impact. It does, however, allow us to approach change with compassion instead of contempt.

### Practice: tracing the threads

- Choose the pattern you identified in the first lesson, or one from your pattern log.
- Write a sentence or two about how your temperament might play a role.
- Write about any past experiences that may have taught you this response. Keep it brief if this feels tender.
- Note any cultural or family messages connected to the pattern.
- Note how your current circumstances might be intensifying it.
- End with a sentence that begins "It makes sense that I..." and complete it with compassion.

If this exercise brings up difficult memories, it is okay to stop. Exploring painful history is often best done with a qualified therapist.`,
        prompt: 'What threads of temperament, history, culture, and current circumstances might be woven into one of your patterns? Complete the sentence: "It makes sense that I..."'
      },
      es: {
        title: 'Temperamento, historia y contexto',
        content: `### Muchos hilos, una persona

Nuestros patrones no provienen de una sola fuente. Están tejidos con muchos hilos, y comprender esos hilos puede suavizar el juicio hacia uno mismo y abrir más espacio al cambio. En lugar de preguntar "¿Qué me pasa?", podemos preguntar "¿Qué me formó y qué me influye ahora?".

### Temperamento

Desde muy temprano en la vida, las personas se diferencian en aspectos como la sensibilidad a los estímulos, el nivel de actividad, la rapidez con que se acercan a lo nuevo o dudan ante ello, y la intensidad con que reaccionan. Estas tendencias, a menudo llamadas temperamento, no son un destino, pero influyen en cómo vivimos el mundo. Una persona naturalmente sensible al ruido y al conflicto puede desarrollar patrones distintos a los de alguien a quien la intensidad le da energía. Ninguna es mejor.

### Historia

Nuestras experiencias, sobre todo en la infancia y en relaciones significativas, nos enseñan qué esperar de los demás y cómo mantenernos a salvo o conectados. Si expresar necesidades traía calidez, quizá aprendimos a expresarlas con libertad. Si traía crítica, conflicto o indiferencia, quizá aprendimos a ocultarlas. Las experiencias dolorosas o aterradoras pueden dejar huellas especialmente fuertes. Esas lecciones tenían sentido en su contexto original, aunque ahora encajen peor.

### Cultura y comunidad

La cultura familiar, el origen cultural, la religión, las expectativas de género, la clase social y las normas de la comunidad influyen en qué conductas se elogian y cuáles se desaniman. Lo que una familia llama "respetuoso", otra podría llamarlo "distante". Lo que una cultura llama "directo", otra podría llamarlo "grosero". Comprender estas influencias nos ayuda a ver los patrones como adaptaciones, no como defectos.

### Contexto actual

Nuestras circunstancias presentes también importan. El estrés crónico, la falta de sueño, la enfermedad, el dolor, las dificultades económicas, la discriminación, las exigencias del cuidado de otros y los grandes cambios de vida pueden intensificar los patrones. Alguien normalmente paciente puede volverse irritable bajo un estrés prolongado. Notar el contexto te ayuda a responderte con justicia.

### Sostenerlo todo junto

Ninguno de estos hilos elimina la responsabilidad por cómo nos tratamos y tratamos a los demás. Comprender de dónde viene un patrón no es lo mismo que justificar su impacto. Sin embargo, nos permite abordar el cambio con compasión en lugar de desprecio.

### Práctica: seguir los hilos

- Elige el patrón que identificaste en la primera lección o uno de tu registro de patrones.
- Escribe una o dos frases sobre cómo podría influir tu temperamento.
- Escribe sobre experiencias pasadas que quizá te enseñaron esta respuesta. Sé breve si se siente delicado.
- Anota los mensajes culturales o familiares relacionados con el patrón.
- Anota cómo tus circunstancias actuales podrían estar intensificándolo.
- Termina con una frase que empiece con "Tiene sentido que yo..." y complétala con compasión.

Si este ejercicio despierta recuerdos difíciles, está bien detenerte. Explorar una historia dolorosa suele ser mejor con un terapeuta calificado.`,
        prompt: '¿Qué hilos de temperamento, historia, cultura y circunstancias actuales podrían estar tejidos en uno de tus patrones? Completa la frase: "Tiene sentido que yo..."'
      },
      'pt-BR': {
        title: 'Temperamento, história e contexto',
        content: `### Muitos fios, uma pessoa

Os nossos padrões não vêm de uma única fonte. Eles são tecidos com muitos fios, e compreender esses fios pode suavizar o autojulgamento e abrir mais espaço para a mudança. Em vez de perguntar "O que há de errado comigo?", podemos perguntar "O que me formou, e o que me influencia agora?".

### Temperamento

Desde cedo na vida, as pessoas diferem em aspectos como sensibilidade a estímulos, nível de atividade, rapidez com que se aproximam do novo ou hesitam diante dele, e intensidade das reações. Essas tendências, muitas vezes chamadas de temperamento, não são destino, mas influenciam como vivemos o mundo. Uma pessoa naturalmente sensível a barulho e conflito pode desenvolver padrões diferentes dos de alguém que se sente energizado pela intensidade. Nenhuma é melhor.

### História

As nossas experiências, especialmente na infância e em relações importantes, nos ensinam o que esperar dos outros e como nos manter seguros ou conectados. Se expressar necessidades trazia carinho, talvez tenhamos aprendido a expressá-las com liberdade. Se trazia crítica, conflito ou indiferença, talvez tenhamos aprendido a escondê-las. Experiências dolorosas ou assustadoras podem deixar marcas especialmente fortes. Essas lições faziam sentido no contexto original, mesmo que hoje se encaixem menos.

### Cultura e comunidade

A cultura familiar, a origem cultural, a religião, as expectativas de gênero, a classe social e as normas da comunidade influenciam quais comportamentos são elogiados e quais são desencorajados. O que uma família chama de "respeitoso", outra pode chamar de "distante". O que uma cultura chama de "direto", outra pode chamar de "grosseiro". Compreender essas influências ajuda a ver os padrões como adaptações, não como defeitos.

### Contexto atual

As circunstâncias presentes também importam. Estresse crônico, falta de sono, doença, dor, aperto financeiro, discriminação, demandas de cuidado com outras pessoas e grandes mudanças de vida podem intensificar os padrões. Alguém normalmente paciente pode ficar irritado sob estresse prolongado. Perceber o contexto ajuda você a responder a si mesmo com justiça.

### Segurando tudo junto

Nenhum desses fios elimina a responsabilidade pela forma como tratamos a nós mesmos e aos outros. Entender de onde vem um padrão não é o mesmo que desculpar o seu impacto. Mas isso nos permite abordar a mudança com compaixão, e não com desprezo.

### Prática: seguindo os fios

- Escolha o padrão que você identificou na primeira lição ou um do seu registro de padrões.
- Escreva uma ou duas frases sobre como o seu temperamento pode influenciar.
- Escreva sobre experiências passadas que talvez tenham ensinado essa resposta. Seja breve se isso parecer delicado.
- Anote mensagens culturais ou familiares ligadas ao padrão.
- Anote como as suas circunstâncias atuais podem estar intensificando o padrão.
- Termine com uma frase que comece com "Faz sentido que eu..." e complete-a com compaixão.

Se este exercício trouxer lembranças difíceis, tudo bem parar. Explorar uma história dolorosa costuma ser melhor com um terapeuta qualificado.`,
        prompt: 'Que fios de temperamento, história, cultura e circunstâncias atuais podem estar tecidos em um dos seus padrões? Complete a frase: "Faz sentido que eu..."'
      }
    }
  ]
});

coursePersonality.modules.push({
  id: 'mod_pers_2',
  slug: 'triggers-and-protection',
  sort: 2,
  en: { title: 'Triggers & Protection', description: 'Understanding how many difficult strategies began as attempts to stay safe or connected, and weighing their short- and long-term effects.' },
  es: { title: 'Detonantes y protección', description: 'Comprender cómo muchas estrategias difíciles nacieron como intentos de mantenernos a salvo o conectados, y sopesar sus efectos a corto y largo plazo.' },
  'pt-BR': { title: 'Gatilhos e proteção', description: 'Compreender como muitas estratégias difíceis começaram como tentativas de nos manter seguros ou conectados, e pesar os seus efeitos a curto e longo prazo.' },
  lessons: [
    {
      id: 'les_pers_4',
      slug: 'triggers-and-protective-strategies',
      duration: 20,
      sort: 1,
      en: {
        title: 'Triggers & Protective Strategies',
        content: `### What a trigger is

In everyday language, a trigger is anything that sets off a strong reaction that seems bigger than the present moment calls for. It might be a tone of voice, a delayed reply, a certain facial expression, being interrupted, a smell, a place, or a type of criticism. The reaction often arrives fast, before thought has a chance to catch up.

Triggers usually touch something tender: an old fear of being abandoned, dismissed, controlled, humiliated, or not good enough. The present situation echoes something from the past, and the body responds as though the old danger has returned.

### Protection, not malfunction

When we are triggered, we tend to reach for a protective strategy. Some common ones:

- **Withdrawing**: going quiet, leaving the room, becoming unreachable.
- **Pleasing**: agreeing, apologizing, smoothing things over at any cost.
- **Controlling**: taking charge, planning obsessively, micromanaging.
- **Attacking**: criticizing, blaming, raising your voice.
- **Numbing**: scrolling, overworking, eating, drinking, or shutting feelings off.
- **Performing**: becoming extra competent, funny, or impressive.

It is tempting to judge these strategies as bad habits. A more useful view is that most of them began as intelligent attempts to stay safe or stay connected. A child who learned to go quiet when a parent was angry was protecting themselves. An adult who overprepares for every meeting may be protecting against old experiences of being shamed for mistakes.

### Why this view helps

When we see a strategy as protective, we can approach it with respect rather than contempt. We can ask: "What is this part of me trying to prevent?" That question often reveals a need, such as safety, belonging, respect, or rest, that can be met in other ways too.

This does not mean every protective strategy is harmless. Some cause real hurt to ourselves or to others. Understanding the protection is the first step toward choosing something that meets the need with less cost.

### Practice: meeting your protector

- Recall a recent moment when you reacted more strongly than you expected.
- Write down what set it off, as specifically as you can.
- Name the protective strategy you reached for, using the list above or your own words.
- Ask: "What was this strategy trying to protect me from?" Write whatever comes, without censoring.
- Ask: "What did I need in that moment?" Examples: reassurance, space, respect, clarity, rest.
- Write one sentence of thanks to the protective part of you, even if you want to change how it works.

If a trigger connects to trauma and brings intense distress, flashbacks, or panic, please consider working with a trauma-informed therapist rather than exploring it alone.`,
        prompt: 'Think of a recent moment when you were triggered. What protective strategy did you reach for, and what might it have been trying to protect you from?'
      },
      es: {
        title: 'Detonantes y estrategias de protección',
        content: `### Qué es un detonante

En el lenguaje cotidiano, un detonante es cualquier cosa que provoca una reacción fuerte que parece más grande de lo que el momento presente requiere. Puede ser un tono de voz, una respuesta que tarda, cierta expresión en el rostro, que te interrumpan, un olor, un lugar o un tipo de crítica. La reacción suele llegar rápido, antes de que el pensamiento alcance a ponerse al día.

Los detonantes suelen tocar algo sensible: un viejo miedo a ser abandonado, ignorado, controlado, humillado o a no ser suficiente. La situación presente hace eco de algo del pasado y el cuerpo responde como si el viejo peligro hubiera vuelto.

### Protección, no falla

Cuando algo nos detona, tendemos a recurrir a una estrategia de protección. Algunas comunes:

- **Retirarse**: quedarse en silencio, salir de la habitación, volverse inalcanzable.
- **Complacer**: estar de acuerdo, pedir perdón, suavizar las cosas a cualquier costo.
- **Controlar**: tomar el mando, planificar de forma obsesiva, supervisar cada detalle.
- **Atacar**: criticar, culpar, levantar la voz.
- **Adormecerse**: pasar el rato en el celular, trabajar de más, comer, beber o apagar los sentimientos.
- **Actuar un papel**: volverse especialmente competente, gracioso o impresionante.

Es tentador juzgar estas estrategias como malos hábitos. Una mirada más útil es que la mayoría comenzó como un intento inteligente de mantenernos a salvo o conectados. Un niño que aprendió a quedarse callado cuando su madre o su padre se enojaba se estaba protegiendo. Un adulto que se prepara en exceso para cada reunión quizá se protege de viejas experiencias de humillación por cometer errores.

### Por qué ayuda esta mirada

Cuando vemos una estrategia como protectora, podemos acercarnos a ella con respeto y no con desprecio. Podemos preguntar: "¿Qué intenta evitar esta parte de mí?". Esa pregunta suele revelar una necesidad, como seguridad, pertenencia, respeto o descanso, que también puede atenderse de otras maneras.

Esto no significa que toda estrategia de protección sea inofensiva. Algunas causan un daño real a uno mismo o a otras personas. Comprender la protección es el primer paso para elegir algo que atienda la necesidad con un costo menor.

### Práctica: conocer a tu protector

- Recuerda un momento reciente en el que reaccionaste con más fuerza de la que esperabas.
- Escribe qué lo detonó, de la forma más específica posible.
- Nombra la estrategia de protección a la que recurriste, usando la lista anterior o tus propias palabras.
- Pregúntate: "¿De qué intentaba protegerme esta estrategia?". Escribe lo que surja, sin censurarte.
- Pregúntate: "¿Qué necesitaba en ese momento?". Por ejemplo: tranquilidad, espacio, respeto, claridad, descanso.
- Escribe una frase de agradecimiento a esa parte protectora de ti, aunque quieras cambiar su forma de actuar.

Si un detonante está ligado a un trauma y trae angustia intensa, recuerdos vívidos o pánico, considera trabajar con un terapeuta informado en trauma en lugar de explorarlo a solas.`,
        prompt: 'Piensa en un momento reciente en que algo te detonó. ¿A qué estrategia de protección recurriste y de qué podría haber intentado protegerte?'
      },
      'pt-BR': {
        title: 'Gatilhos e estratégias de proteção',
        content: `### O que é um gatilho

Na linguagem do dia a dia, um gatilho é qualquer coisa que dispara uma reação forte que parece maior do que o momento presente pede. Pode ser um tom de voz, uma resposta que demora, uma certa expressão no rosto, ser interrompido, um cheiro, um lugar ou um tipo de crítica. A reação costuma chegar rápido, antes que o pensamento consiga acompanhar.

Os gatilhos geralmente tocam em algo sensível: um medo antigo de ser abandonado, ignorado, controlado, humilhado ou de não ser suficiente. A situação presente ecoa algo do passado, e o corpo reage como se o antigo perigo tivesse voltado.

### Proteção, não defeito

Quando algo nos aciona, tendemos a recorrer a uma estratégia de proteção. Algumas comuns:

- **Recolher-se**: ficar em silêncio, sair do ambiente, ficar inalcançável.
- **Agradar**: concordar, pedir desculpas, aliviar o clima a qualquer custo.
- **Controlar**: assumir o comando, planejar de forma obsessiva, supervisionar cada detalhe.
- **Atacar**: criticar, culpar, levantar a voz.
- **Anestesiar-se**: rolar a tela do celular, trabalhar demais, comer, beber ou desligar os sentimentos.
- **Performar**: ficar extremamente competente, engraçado ou impressionante.

É tentador julgar essas estratégias como maus hábitos. Um olhar mais útil é perceber que a maioria começou como uma tentativa inteligente de se manter seguro ou conectado. Uma criança que aprendeu a ficar quieta quando o pai ou a mãe estava com raiva estava se protegendo. Um adulto que se prepara demais para cada reunião talvez esteja se protegendo de experiências antigas de ser humilhado por errar.

### Por que esse olhar ajuda

Quando vemos uma estratégia como protetora, podemos nos aproximar dela com respeito, e não com desprezo. Podemos perguntar: "O que esta parte de mim está tentando evitar?". Essa pergunta muitas vezes revela uma necessidade, como segurança, pertencimento, respeito ou descanso, que também pode ser atendida de outras formas.

Isso não significa que toda estratégia de proteção seja inofensiva. Algumas causam dano real a nós mesmos ou aos outros. Compreender a proteção é o primeiro passo para escolher algo que atenda à necessidade com um custo menor.

### Prática: conhecendo o seu protetor

- Lembre-se de um momento recente em que você reagiu com mais força do que esperava.
- Escreva o que disparou a reação, da forma mais específica possível.
- Nomeie a estratégia de proteção que você usou, com a lista acima ou com as suas próprias palavras.
- Pergunte-se: "Do que essa estratégia estava tentando me proteger?". Escreva o que vier, sem censura.
- Pergunte-se: "Do que eu precisava naquele momento?". Exemplos: segurança, espaço, respeito, clareza, descanso.
- Escreva uma frase de agradecimento a essa parte protetora de você, mesmo que queira mudar a forma como ela age.

Se um gatilho estiver ligado a um trauma e trouxer sofrimento intenso, lembranças invasivas ou pânico, considere trabalhar com um terapeuta com formação em trauma em vez de explorar isso sozinho.`,
        prompt: 'Pense em um momento recente em que algo acionou você. Que estratégia de proteção você usou, e do que ela pode ter tentado proteger você?'
      }
    },
    {
      id: 'les_pers_5',
      slug: 'short-term-relief-long-term-cost',
      duration: 20,
      sort: 2,
      en: {
        title: 'Short-Term Relief, Long-Term Cost',
        content: `### Why patterns persist

If a pattern causes problems, why does it keep happening? Often because it works, at least in the short term. Protective strategies usually bring quick relief: the tension drops, the conflict ends, the scary feeling fades. That relief is powerful, and it teaches the brain to reach for the same strategy next time.

The costs, meanwhile, tend to arrive later and more quietly. They may show up as loneliness, resentment, exhaustion, missed opportunities, or strained relationships. Because the costs are delayed, it can be hard to connect them to the pattern that produced them.

### An example

Imagine someone who avoids conflict by agreeing to whatever others want.

- **Short-term effect**: The tension disappears. Everyone seems happy. They feel safe.
- **Long-term effect**: Their own needs go unmet. Resentment builds. Others do not really know them. Eventually they may withdraw or explode.

Or imagine someone who responds to feeling criticized by criticizing back.

- **Short-term effect**: They feel strong rather than small. The vulnerable feeling is pushed away.
- **Long-term effect**: Conversations escalate. People become guarded around them. The original concern never gets addressed.

Neither person is bad. Both are using a strategy that trades long-term wellbeing for short-term safety.

### Holding both sides fairly

This lesson is not about condemning your strategies. It is about seeing the whole picture. Sometimes a protective strategy is still the wisest choice, for example, withdrawing from someone who is genuinely unsafe. Other times, the strategy is protecting against a danger that is no longer present, and the costs outweigh the benefits.

Honest mapping allows you to decide, rather than react.

### Practice: mapping a pattern

Use this simple four-part map for one pattern you have been exploring:

- **Trigger**: What sets the pattern in motion? Be specific.
- **Protective response**: What do you do, think, or feel?
- **Short-term effects**: What relief or benefit does it bring right away? Be generous here; the benefits are real.
- **Long-term effects**: What does it cost you or others over weeks, months, or years?

Then add two more lines:

- **The need underneath**: What were you really needing?
- **One alternative**: What is one small, different response you could experiment with next time, one that might meet the same need with less cost?

Keep the alternative modest. Patterns loosen through small experiments repeated over time, not through dramatic resolutions.`,
        prompt: 'Map one of your patterns: the trigger, the protective response, and its short- and long-term effects. What small experiment could meet the same need with less cost?'
      },
      es: {
        title: 'Alivio a corto plazo, costo a largo plazo',
        content: `### Por qué los patrones persisten

Si un patrón causa problemas, ¿por qué sigue ocurriendo? A menudo porque funciona, al menos a corto plazo. Las estrategias de protección suelen traer un alivio rápido: la tensión baja, el conflicto termina, la sensación de miedo se desvanece. Ese alivio es poderoso y le enseña al cerebro a recurrir a la misma estrategia la próxima vez.

Los costos, en cambio, suelen llegar después y de forma más silenciosa. Pueden aparecer como soledad, resentimiento, agotamiento, oportunidades perdidas o relaciones tensas. Como los costos se retrasan, puede ser difícil relacionarlos con el patrón que los produjo.

### Un ejemplo

Imagina a alguien que evita los conflictos aceptando lo que los demás quieren.

- **Efecto a corto plazo**: La tensión desaparece. Todos parecen contentos. Se siente a salvo.
- **Efecto a largo plazo**: Sus propias necesidades quedan sin atender. El resentimiento crece. Los demás no llegan a conocerle de verdad. Con el tiempo, puede alejarse o estallar.

O imagina a alguien que responde a sentirse criticado criticando de vuelta.

- **Efecto a corto plazo**: Se siente fuerte en lugar de pequeño. La sensación de vulnerabilidad queda a un lado.
- **Efecto a largo plazo**: Las conversaciones escalan. Las personas se ponen a la defensiva a su alrededor. La preocupación original nunca se aborda.

Ninguna de estas personas es mala. Ambas usan una estrategia que cambia bienestar a largo plazo por seguridad a corto plazo.

### Mirar ambos lados con justicia

Esta lección no busca condenar tus estrategias. Busca ver el panorama completo. A veces una estrategia de protección sigue siendo la opción más sabia, por ejemplo, alejarse de alguien que realmente no es seguro. Otras veces, la estrategia protege de un peligro que ya no está presente y los costos superan los beneficios.

Un mapa honesto te permite decidir en lugar de reaccionar.

### Práctica: mapear un patrón

Usa este mapa sencillo de cuatro partes para un patrón que hayas estado explorando:

- **Detonante**: ¿Qué pone en marcha el patrón? Sé específico.
- **Respuesta de protección**: ¿Qué haces, piensas o sientes?
- **Efectos a corto plazo**: ¿Qué alivio o beneficio trae de inmediato? Sé generoso aquí; los beneficios son reales.
- **Efectos a largo plazo**: ¿Qué te cuesta a ti o a otros en semanas, meses o años?

Luego agrega dos líneas más:

- **La necesidad de fondo**: ¿Qué necesitabas realmente?
- **Una alternativa**: ¿Qué respuesta pequeña y distinta podrías probar la próxima vez, que quizá atienda la misma necesidad con un costo menor?

Que la alternativa sea modesta. Los patrones se aflojan con pequeños experimentos repetidos a lo largo del tiempo, no con propósitos dramáticos.`,
        prompt: 'Mapea uno de tus patrones: el detonante, la respuesta de protección y sus efectos a corto y largo plazo. ¿Qué pequeño experimento podría atender la misma necesidad con un costo menor?'
      },
      'pt-BR': {
        title: 'Alívio a curto prazo, custo a longo prazo',
        content: `### Por que os padrões persistem

Se um padrão causa problemas, por que ele continua acontecendo? Muitas vezes porque funciona, pelo menos a curto prazo. As estratégias de proteção costumam trazer alívio rápido: a tensão diminui, o conflito termina, a sensação de medo passa. Esse alívio é poderoso e ensina o cérebro a recorrer à mesma estratégia da próxima vez.

Os custos, por outro lado, costumam chegar depois e de forma mais silenciosa. Eles podem aparecer como solidão, ressentimento, exaustão, oportunidades perdidas ou relações desgastadas. Como os custos demoram, pode ser difícil ligá-los ao padrão que os produziu.

### Um exemplo

Imagine alguém que evita conflitos concordando com tudo o que os outros querem.

- **Efeito a curto prazo**: A tensão desaparece. Todos parecem satisfeitos. A pessoa se sente segura.
- **Efeito a longo prazo**: As próprias necessidades ficam sem atenção. O ressentimento cresce. Os outros não chegam a conhecê-la de verdade. Com o tempo, ela pode se afastar ou explodir.

Ou imagine alguém que responde a se sentir criticado criticando de volta.

- **Efeito a curto prazo**: A pessoa se sente forte em vez de pequena. A sensação de vulnerabilidade é afastada.
- **Efeito a longo prazo**: As conversas escalam. As pessoas ficam na defensiva perto dela. A preocupação original nunca é tratada.

Nenhuma dessas pessoas é má. As duas estão usando uma estratégia que troca bem-estar a longo prazo por segurança a curto prazo.

### Olhando os dois lados com justiça

Esta lição não é para condenar as suas estratégias. É para ver o quadro completo. Às vezes, uma estratégia de proteção continua sendo a escolha mais sábia, por exemplo, afastar-se de alguém que realmente não é seguro. Outras vezes, a estratégia protege contra um perigo que já não existe, e os custos superam os benefícios.

Um mapa honesto permite que você decida, em vez de reagir.

### Prática: mapeando um padrão

Use este mapa simples de quatro partes para um padrão que você tem explorado:

- **Gatilho**: O que coloca o padrão em movimento? Seja específico.
- **Resposta de proteção**: O que você faz, pensa ou sente?
- **Efeitos a curto prazo**: Que alívio ou benefício ela traz na hora? Seja generoso aqui; os benefícios são reais.
- **Efeitos a longo prazo**: O que ela custa para você ou para os outros ao longo de semanas, meses ou anos?

Depois, acrescente mais duas linhas:

- **A necessidade por baixo**: Do que você realmente precisava?
- **Uma alternativa**: Que resposta pequena e diferente você poderia experimentar da próxima vez, algo que talvez atenda à mesma necessidade com um custo menor?

Mantenha a alternativa modesta. Os padrões se afrouxam com pequenos experimentos repetidos ao longo do tempo, não com resoluções dramáticas.`,
        prompt: 'Mapeie um dos seus padrões: o gatilho, a resposta de proteção e os seus efeitos a curto e longo prazo. Que pequeno experimento poderia atender à mesma necessidade com um custo menor?'
      }
    },
    {
      id: 'les_pers_6',
      slug: 'your-window-of-tolerance',
      duration: 20,
      sort: 3,
      en: {
        title: 'Your Window of Tolerance',
        content: `### A helpful map of arousal

The psychiatrist Dan Siegel described a concept called the "window of tolerance": a zone of arousal in which we can feel emotions, think clearly, and respond flexibly. Inside the window, we may feel stressed or sad, but we can still stay present, listen, and choose our responses.

When stress pushes us outside the window, patterns tend to take over.

- **Above the window (hyperarousal)**: feeling flooded, panicky, angry, restless, or on high alert. Heart racing, thoughts speeding, urges to fight or flee.
- **Below the window (hypoarousal)**: feeling numb, flat, foggy, disconnected, or shut down. Low energy, difficulty speaking or thinking, wanting to disappear.

Many protective strategies are attempts to cope with being outside the window. Attacking and controlling often happen above it. Withdrawing and numbing often happen below it, though everyone is different.

### Why this matters for patterns

When you are outside your window, it is very hard to use new skills or make thoughtful choices. That is not a failure of willpower; it is how nervous systems work under threat. This is why "just stay calm" rarely helps. A more realistic goal is to notice when you are leaving the window and take steps to return before trying to solve anything.

### Your window can change

The width of the window varies between people and over time. Sleep, health, stress, support, past experiences, and practice all affect it. Many people find their window widens gradually with regular grounding practices and supportive relationships.

### Ways to return to the window

If you are above the window, practices that settle and slow may help:

- A slower breath with a longer exhale.
- Feeling your feet on the floor and naming what you see around you.
- Stepping away briefly: "I need ten minutes, and then I want to come back to this."
- Cool water on your hands or face.

If you are below the window, practices that gently activate may help:

- Standing up, stretching, or walking.
- Noticing colors, textures, and sounds in the room.
- Holding something with a distinct texture or temperature.
- Talking to someone safe, even briefly.

### Practice: mapping your window

- Draw three horizontal bands on a page: above, inside, and below the window.
- In each band, write the body sensations, thoughts, and behaviors you notice when you are in that zone.
- Mark which of your protective patterns tend to appear above and which below.
- List two practices that help you return from above, and two that help you return from below.
- Next time you notice a pattern starting, first ask: "Where am I in my window?"

If you often find yourself far outside your window, or stuck there for long periods, a qualified therapist can help you build more capacity safely.`,
        prompt: 'What do you notice in your body, thoughts, and behavior when you move above or below your window of tolerance? What helps you return?'
      },
      es: {
        title: 'Tu ventana de tolerancia',
        content: `### Un mapa útil de la activación

El psiquiatra Dan Siegel describió un concepto llamado "ventana de tolerancia": una zona de activación en la que podemos sentir emociones, pensar con claridad y responder con flexibilidad. Dentro de la ventana podemos sentirnos estresados o tristes, pero aun así seguimos presentes, podemos escuchar y elegir nuestras respuestas.

Cuando el estrés nos empuja fuera de la ventana, los patrones tienden a tomar el control.

- **Por encima de la ventana (hiperactivación)**: sentirse desbordado, con pánico, enojado, inquieto o en alerta máxima. El corazón acelerado, los pensamientos rápidos, ganas de pelear o huir.
- **Por debajo de la ventana (hipoactivación)**: sentirse adormecido, apagado, nublado, desconectado o bloqueado. Poca energía, dificultad para hablar o pensar, ganas de desaparecer.

Muchas estrategias de protección son intentos de lidiar con estar fuera de la ventana. Atacar y controlar suelen darse por encima. Retirarse y adormecerse suelen darse por debajo, aunque cada persona es distinta.

### Por qué esto importa para los patrones

Cuando estás fuera de tu ventana, es muy difícil usar habilidades nuevas o tomar decisiones pensadas. No es falta de voluntad; así funciona el sistema nervioso ante una amenaza. Por eso "solo cálmate" rara vez ayuda. Una meta más realista es notar cuándo estás saliendo de la ventana y dar pasos para volver antes de intentar resolver algo.

### Tu ventana puede cambiar

El ancho de la ventana varía entre personas y a lo largo del tiempo. El sueño, la salud, el estrés, el apoyo, las experiencias pasadas y la práctica influyen en ella. Muchas personas notan que su ventana se amplía poco a poco con prácticas regulares de enraizamiento y relaciones que las sostienen.

### Formas de volver a la ventana

Si estás por encima de la ventana, pueden ayudar prácticas que calman y desaceleran:

- Una respiración más lenta con una exhalación más larga.
- Sentir los pies en el suelo y nombrar lo que ves a tu alrededor.
- Alejarte un momento: "Necesito diez minutos y luego quiero volver a esto".
- Agua fresca en las manos o la cara.

Si estás por debajo de la ventana, pueden ayudar prácticas que activan con suavidad:

- Ponerte de pie, estirarte o caminar.
- Notar colores, texturas y sonidos en la habitación.
- Sostener algo con una textura o temperatura marcada.
- Hablar con alguien de confianza, aunque sea brevemente.

### Práctica: mapear tu ventana

- Dibuja tres franjas horizontales en una hoja: por encima, dentro y por debajo de la ventana.
- En cada franja, escribe las sensaciones corporales, los pensamientos y las conductas que notas cuando estás en esa zona.
- Marca cuáles de tus patrones de protección suelen aparecer por encima y cuáles por debajo.
- Anota dos prácticas que te ayuden a volver desde arriba y dos que te ayuden a volver desde abajo.
- La próxima vez que notes que un patrón empieza, pregúntate primero: "¿Dónde estoy en mi ventana?".

Si con frecuencia te encuentras muy fuera de tu ventana, o atrapado ahí durante largos periodos, un terapeuta calificado puede ayudarte a ampliar tu capacidad de forma segura.`,
        prompt: '¿Qué notas en tu cuerpo, tus pensamientos y tu conducta cuando te mueves por encima o por debajo de tu ventana de tolerancia? ¿Qué te ayuda a volver?'
      },
      'pt-BR': {
        title: 'A sua janela de tolerância',
        content: `### Um mapa útil da ativação

O psiquiatra Dan Siegel descreveu um conceito chamado "janela de tolerância": uma faixa de ativação em que conseguimos sentir emoções, pensar com clareza e responder com flexibilidade. Dentro da janela, podemos estar estressados ou tristes, mas ainda conseguimos ficar presentes, escutar e escolher as nossas respostas.

Quando o estresse nos empurra para fora da janela, os padrões tendem a assumir o controle.

- **Acima da janela (hiperativação)**: sentir-se inundado, em pânico, com raiva, inquieto ou em alerta máximo. Coração acelerado, pensamentos correndo, vontade de brigar ou fugir.
- **Abaixo da janela (hipoativação)**: sentir-se anestesiado, apagado, confuso, desconectado ou travado. Pouca energia, dificuldade de falar ou pensar, vontade de desaparecer.

Muitas estratégias de proteção são tentativas de lidar com estar fora da janela. Atacar e controlar costumam acontecer acima dela. Recolher-se e anestesiar-se costumam acontecer abaixo, embora cada pessoa seja diferente.

### Por que isso importa para os padrões

Quando você está fora da sua janela, é muito difícil usar habilidades novas ou fazer escolhas pensadas. Isso não é falta de força de vontade; é assim que o sistema nervoso funciona diante de uma ameaça. É por isso que "só fique calmo" raramente ajuda. Uma meta mais realista é perceber quando você está saindo da janela e dar passos para voltar antes de tentar resolver qualquer coisa.

### A sua janela pode mudar

A largura da janela varia entre as pessoas e ao longo do tempo. Sono, saúde, estresse, apoio, experiências passadas e prática influenciam nela. Muitas pessoas percebem que a janela se amplia aos poucos com práticas regulares de aterramento e relações que acolhem.

### Formas de voltar para a janela

Se você está acima da janela, práticas que acalmam e desaceleram podem ajudar:

- Uma respiração mais lenta, com a expiração mais longa.
- Sentir os pés no chão e nomear o que você vê ao redor.
- Afastar-se por um momento: "Preciso de dez minutos, e depois quero voltar a este assunto".
- Água fresca nas mãos ou no rosto.

Se você está abaixo da janela, práticas que ativam com suavidade podem ajudar:

- Levantar-se, alongar-se ou caminhar.
- Perceber cores, texturas e sons no ambiente.
- Segurar algo com textura ou temperatura marcante.
- Conversar com alguém de confiança, mesmo que rapidamente.

### Prática: mapeando a sua janela

- Desenhe três faixas horizontais em uma folha: acima, dentro e abaixo da janela.
- Em cada faixa, escreva as sensações do corpo, os pensamentos e os comportamentos que você percebe quando está naquela zona.
- Marque quais dos seus padrões de proteção costumam aparecer acima e quais aparecem abaixo.
- Liste duas práticas que ajudam você a voltar de cima e duas que ajudam a voltar de baixo.
- Da próxima vez que perceber um padrão começando, pergunte-se primeiro: "Onde estou na minha janela?".

Se você com frequência se encontra muito fora da sua janela, ou preso ali por longos períodos, um terapeuta qualificado pode ajudar você a ampliar a sua capacidade com segurança.`,
        prompt: 'O que você percebe no corpo, nos pensamentos e no comportamento quando se move para acima ou abaixo da sua janela de tolerância? O que ajuda você a voltar?'
      }
    }
  ]
});

coursePersonality.modules.push({
  id: 'mod_pers_3',
  slug: 'how-we-connect',
  sort: 3,
  en: { title: 'How We Connect, Defend & Repair', description: 'Noticing how you seek reassurance, distance, and independence, understanding shame and defensiveness, and learning the art of repair.' },
  es: { title: 'Cómo nos conectamos, defendemos y reparamos', description: 'Observar cómo buscas tranquilidad, distancia e independencia, comprender la vergüenza y la actitud defensiva, y aprender el arte de reparar.' },
  'pt-BR': { title: 'Como nos conectamos, nos defendemos e reparamos', description: 'Perceber como você busca segurança, distância e independência, compreender a vergonha e a defensividade e aprender a arte de reparar.' },
  lessons: [
    {
      id: 'les_pers_7',
      slug: 'connection-patterns',
      duration: 20,
      sort: 1,
      en: {
        title: 'Reassurance, Distance & Independence',
        content: `### We all need closeness and space

Every person needs both connection and autonomy: to feel close to others and to feel like themselves. How we balance these needs, especially under stress, is one of the most important patterns in our relationships.

Attachment research, which began with the work of John Bowlby and Mary Ainsworth, explored how early relationships shape our expectations of closeness. Popular culture has turned some of this research into quick labels. In this course we avoid labeling people with "styles" and instead notice tendencies that can shift across relationships and over time.

### Common connection patterns under stress

When a relationship feels uncertain or strained, people often lean toward one or more of these responses:

- **Seeking reassurance**: checking in often, asking "Are we okay?", reading into delays or changes in tone, finding it hard to settle until connection feels restored.
- **Creating distance**: needing space, going quiet, focusing on tasks, feeling crowded by emotional conversations.
- **Emphasizing independence**: preferring not to need anyone, handling things alone, feeling uncomfortable accepting help.
- **Moving between both**: wanting closeness and then feeling overwhelmed by it, or pulling away and then feeling anxious about the distance.

None of these is wrong. Each makes sense as a way of managing vulnerability. Each also has costs when it becomes rigid. And many relationships develop a dance: one person reaches for reassurance, the other pulls back, which prompts more reaching, which prompts more distance.

### What helps you feel secure

Rather than asking "What is my attachment style?", a more useful question is: "What conditions help me feel secure enough to stay present?" For some people, it is regular, predictable contact. For others, it is permission to take space without it being seen as rejection. Many need both, at different times.

Knowing your conditions for security lets you ask for them clearly, instead of relying on protective strategies to get them indirectly.

### Practice: your connection map

- Think of two or three important relationships: a partner, a friend, a family member, a colleague.
- For each, note what you tend to do when the relationship feels uncertain. Do you reach, withdraw, go it alone, or move between?
- Notice whether your pattern differs across relationships. What might explain the difference?
- Write down three conditions that help you feel secure enough to stay present, such as "knowing when we will talk next" or "being able to take an evening to myself without guilt."
- Choose one relationship where you could share one of these conditions, gently and clearly.

Relationships in which you feel unsafe, controlled, or harmed are different. If you are experiencing abuse, please reach out to a qualified support service or your local emergency number.`,
        prompt: 'When a relationship feels uncertain, do you tend to reach for reassurance, create distance, go it alone, or move between these? What conditions help you feel secure enough to stay present?'
      },
      es: {
        title: 'Tranquilidad, distancia e independencia',
        content: `### Todos necesitamos cercanía y espacio

Toda persona necesita tanto conexión como autonomía: sentirse cerca de otros y sentirse ella misma. Cómo equilibramos estas necesidades, sobre todo bajo estrés, es uno de los patrones más importantes de nuestras relaciones.

La investigación sobre el apego, que comenzó con el trabajo de John Bowlby y Mary Ainsworth, exploró cómo las primeras relaciones moldean nuestras expectativas sobre la cercanía. La cultura popular ha convertido parte de esta investigación en etiquetas rápidas. En este curso evitamos etiquetar a las personas con "estilos" y, en cambio, observamos tendencias que pueden variar entre relaciones y a lo largo del tiempo.

### Patrones de conexión comunes bajo estrés

Cuando una relación se siente incierta o tensa, las personas suelen inclinarse por una o varias de estas respuestas:

- **Buscar tranquilidad**: escribir a menudo, preguntar "¿Estamos bien?", interpretar demoras o cambios de tono, costar calmarse hasta sentir que la conexión se restableció.
- **Crear distancia**: necesitar espacio, quedarse en silencio, concentrarse en tareas, sentirse agobiado por las conversaciones emotivas.
- **Enfatizar la independencia**: preferir no necesitar a nadie, resolver todo a solas, sentirse incómodo al aceptar ayuda.
- **Moverse entre ambos**: desear cercanía y luego sentirse abrumado por ella, o alejarse y luego sentir ansiedad por la distancia.

Ninguna de estas respuestas está mal. Cada una tiene sentido como forma de manejar la vulnerabilidad. Cada una también tiene costos cuando se vuelve rígida. Y muchas relaciones desarrollan una especie de baile: una persona busca tranquilidad, la otra se aleja, lo que provoca más búsqueda, que a su vez provoca más distancia.

### Qué te ayuda a sentirte seguro

En lugar de preguntar "¿Cuál es mi estilo de apego?", una pregunta más útil es: "¿Qué condiciones me ayudan a sentirme lo bastante seguro como para seguir presente?". Para algunas personas es un contacto regular y predecible. Para otras, es tener permiso de tomar espacio sin que se vea como rechazo. Muchas necesitan ambas cosas en distintos momentos.

Conocer tus condiciones de seguridad te permite pedirlas con claridad, en lugar de depender de estrategias de protección para conseguirlas de forma indirecta.

### Práctica: tu mapa de conexión

- Piensa en dos o tres relaciones importantes: pareja, amistad, familiar, colega.
- Para cada una, anota qué sueles hacer cuando la relación se siente incierta. ¿Buscas, te alejas, lo resuelves a solas o te mueves entre ambas cosas?
- Observa si tu patrón cambia según la relación. ¿Qué podría explicar la diferencia?
- Escribe tres condiciones que te ayuden a sentirte lo bastante seguro como para seguir presente, como "saber cuándo volveremos a hablar" o "poder tomar una tarde para mí sin culpa".
- Elige una relación en la que podrías compartir una de estas condiciones, con suavidad y claridad.

Las relaciones en las que te sientes inseguro, controlado o dañado son distintas. Si estás viviendo abuso, busca un servicio de apoyo calificado o comunícate con tu número local de emergencias.`,
        prompt: 'Cuando una relación se siente incierta, ¿tiendes a buscar tranquilidad, crear distancia, resolverlo a solas o moverte entre estas opciones? ¿Qué condiciones te ayudan a sentirte lo bastante seguro como para seguir presente?'
      },
      'pt-BR': {
        title: 'Segurança, distância e independência',
        content: `### Todos precisamos de proximidade e de espaço

Toda pessoa precisa tanto de conexão quanto de autonomia: sentir-se próxima dos outros e sentir-se ela mesma. A forma como equilibramos essas necessidades, principalmente sob estresse, é um dos padrões mais importantes das nossas relações.

A pesquisa sobre apego, que começou com o trabalho de John Bowlby e Mary Ainsworth, explorou como as primeiras relações moldam as nossas expectativas sobre proximidade. A cultura popular transformou parte dessa pesquisa em rótulos rápidos. Neste curso, evitamos rotular as pessoas com "estilos" e, em vez disso, observamos tendências que podem variar entre relações e ao longo do tempo.

### Padrões de conexão comuns sob estresse

Quando uma relação parece incerta ou tensa, as pessoas costumam se inclinar para uma ou mais destas respostas:

- **Buscar segurança**: mandar mensagens com frequência, perguntar "Está tudo bem entre nós?", interpretar demoras ou mudanças de tom, ter dificuldade de se acalmar até sentir que a conexão voltou.
- **Criar distância**: precisar de espaço, ficar em silêncio, focar em tarefas, sentir-se sufocado por conversas emotivas.
- **Enfatizar a independência**: preferir não precisar de ninguém, resolver tudo sozinho, sentir-se desconfortável ao aceitar ajuda.
- **Oscilar entre os dois**: querer proximidade e depois se sentir sobrecarregado por ela, ou se afastar e depois sentir ansiedade com a distância.

Nenhuma dessas respostas é errada. Cada uma faz sentido como forma de lidar com a vulnerabilidade. Cada uma também tem custos quando fica rígida. E muitas relações desenvolvem uma espécie de dança: uma pessoa busca segurança, a outra se afasta, o que provoca mais busca, que provoca mais distância.

### O que ajuda você a se sentir seguro

Em vez de perguntar "Qual é o meu estilo de apego?", uma pergunta mais útil é: "Que condições me ajudam a me sentir seguro o suficiente para continuar presente?". Para algumas pessoas, é um contato regular e previsível. Para outras, é ter permissão para tirar um tempo sem que isso seja visto como rejeição. Muitas precisam das duas coisas, em momentos diferentes.

Conhecer as suas condições de segurança permite pedi-las com clareza, em vez de depender de estratégias de proteção para consegui-las de forma indireta.

### Prática: o seu mapa de conexão

- Pense em duas ou três relações importantes: parceiro, amigo, familiar, colega.
- Para cada uma, anote o que você costuma fazer quando a relação parece incerta. Você busca, se afasta, resolve sozinho ou oscila?
- Observe se o seu padrão muda conforme a relação. O que poderia explicar a diferença?
- Escreva três condições que ajudam você a se sentir seguro o suficiente para continuar presente, como "saber quando vamos conversar de novo" ou "poder tirar uma noite para mim sem culpa".
- Escolha uma relação em que você poderia compartilhar uma dessas condições, com delicadeza e clareza.

Relações em que você se sente inseguro, controlado ou machucado são diferentes. Se você está vivendo uma situação de abuso, procure um serviço de apoio qualificado ou ligue para o número de emergência local.`,
        prompt: 'Quando uma relação parece incerta, você tende a buscar segurança, criar distância, resolver sozinho ou oscilar entre essas opções? Que condições ajudam você a se sentir seguro o suficiente para continuar presente?'
      }
    },
    {
      id: 'les_pers_8',
      slug: 'shame-and-defensiveness',
      duration: 20,
      sort: 2,
      en: {
        title: 'Shame & Defensiveness',
        content: `### The feeling underneath

Defensiveness is one of the most common patterns in human relationships. When someone points out a mistake, expresses hurt, or offers criticism, many of us reflexively explain, justify, counterattack, minimize, or shut down. Often, what drives this reaction is not arrogance but shame: a painful sense that we are not just someone who did something wrong, but someone who is wrong.

Researchers and clinicians often distinguish shame from guilt. Guilt says, "I did something bad." Shame says, "I am bad." Guilt can motivate repair. Shame tends to motivate hiding, defending, or attacking, because it feels unbearable.

### How defensiveness protects

Defensiveness guards a vulnerable place. If feedback feels like proof that we are fundamentally unworthy, then resisting it makes sense as self-protection. The trouble is that defensiveness still causes impact. The other person may feel unheard, dismissed, or blamed, and the original issue remains unresolved.

Common defensive moves include:

- Explaining intentions before acknowledging impact: "I didn’t mean it that way."
- Counter-complaining: "Well, you do that too."
- Minimizing: "It wasn’t a big deal."
- Collapsing: "I’m a terrible person. I ruin everything." This can look like accountability, but it often shifts attention to our own pain and leaves the other person comforting us.

### Owning impact without collapsing

The goal is a middle path: taking responsibility for impact while holding onto your basic worth. This often sounds like:

- "You’re right that I interrupted you. I’m sorry. I want to hear what you were saying."
- "I can see that my comment hurt. That wasn’t my intention, and I understand the impact was real."
- "I need a moment to take this in, but I want to understand. Can you tell me more?"

Self-compassion helps here. Kristin Neff describes self-compassion as combining mindfulness, a sense of common humanity, and self-kindness. Remembering that all humans make mistakes can make it easier to face our own without being crushed by them.

### Practice: rewriting a defensive moment

- Recall a time you felt defensive when someone raised a concern.
- Write down what you said or wanted to say.
- Name the vulnerable feeling underneath: embarrassment, fear of rejection, feeling incompetent, or something else.
- Write a kind sentence to yourself about that feeling, such as "Everyone gets this wrong sometimes. I can learn from this and still be okay."
- Now write a response that owns the impact without collapsing into shame.
- Practice the first few words out loud, such as "You’re right that..." or "I can see that..."`,
        prompt: 'Write language that owns your impact in a recent situation without collapsing into shame. What vulnerable feeling might your defensiveness be protecting?'
      },
      es: {
        title: 'Vergüenza y actitud defensiva',
        content: `### El sentimiento que hay debajo

La actitud defensiva es uno de los patrones más comunes en las relaciones humanas. Cuando alguien señala un error, expresa que se sintió herido o hace una crítica, muchas personas explicamos, justificamos, contraatacamos, minimizamos o nos cerramos de forma automática. A menudo, lo que impulsa esta reacción no es la arrogancia sino la vergüenza: la sensación dolorosa de que no solo hicimos algo mal, sino de que somos algo que está mal.

Investigadores y profesionales clínicos suelen distinguir entre vergüenza y culpa. La culpa dice: "Hice algo malo". La vergüenza dice: "Soy malo". La culpa puede impulsar la reparación. La vergüenza tiende a impulsar a esconderse, defenderse o atacar, porque se siente insoportable.

### Cómo protege la actitud defensiva

La actitud defensiva cuida un lugar vulnerable. Si un comentario se siente como prueba de que no valemos nada en el fondo, resistirlo tiene sentido como autoprotección. El problema es que la actitud defensiva igual causa impacto. La otra persona puede sentirse no escuchada, descartada o culpada, y el tema original queda sin resolver.

Algunos movimientos defensivos comunes son:

- Explicar las intenciones antes de reconocer el impacto: "No lo dije con esa intención."
- Responder con otra queja: "Bueno, tú también lo haces."
- Minimizar: "No fue para tanto."
- Derrumbarse: "Soy una persona horrible. Lo arruino todo." Esto puede parecer responsabilidad, pero a menudo desplaza la atención hacia nuestro propio dolor y deja a la otra persona consolándonos.

### Hacerse cargo del impacto sin derrumbarse

La meta es un camino intermedio: asumir la responsabilidad por el impacto sin soltar tu valor básico. A menudo suena así:

- "Tienes razón, te interrumpí. Lo siento. Quiero escuchar lo que estabas diciendo."
- "Veo que mi comentario te dolió. No era mi intención, y entiendo que el impacto fue real."
- "Necesito un momento para asimilar esto, pero quiero entender. ¿Me cuentas más?"

La autocompasión ayuda aquí. Kristin Neff describe la autocompasión como la combinación de atención plena, sentido de humanidad compartida y amabilidad hacia uno mismo. Recordar que todos los seres humanos cometemos errores puede hacer más fácil enfrentar los propios sin que nos aplasten.

### Práctica: reescribir un momento defensivo

- Recuerda una vez en que te pusiste a la defensiva cuando alguien planteó una preocupación.
- Escribe lo que dijiste o lo que quisiste decir.
- Nombra el sentimiento vulnerable que había debajo: vergüenza, miedo al rechazo, sentirte incompetente u otro.
- Escribe una frase amable para ti sobre ese sentimiento, como "Todos nos equivocamos a veces. Puedo aprender de esto y seguir estando bien".
- Ahora escribe una respuesta que se haga cargo del impacto sin hundirte en la vergüenza.
- Practica en voz alta las primeras palabras, como "Tienes razón en que..." o "Veo que...".`,
        prompt: 'Escribe palabras que se hagan cargo de tu impacto en una situación reciente sin hundirte en la vergüenza. ¿Qué sentimiento vulnerable podría estar protegiendo tu actitud defensiva?'
      },
      'pt-BR': {
        title: 'Vergonha e defensividade',
        content: `### O sentimento por baixo

A defensividade é um dos padrões mais comuns nas relações humanas. Quando alguém aponta um erro, diz que se magoou ou faz uma crítica, muitos de nós explicamos, justificamos, contra-atacamos, minimizamos ou nos fechamos de forma automática. Muitas vezes, o que move essa reação não é arrogância, mas vergonha: a sensação dolorosa de que não apenas fizemos algo errado, mas de que somos errados.

Pesquisadores e profissionais clínicos costumam diferenciar vergonha de culpa. A culpa diz: "Eu fiz algo ruim". A vergonha diz: "Eu sou ruim". A culpa pode motivar a reparação. A vergonha tende a motivar esconder-se, defender-se ou atacar, porque parece insuportável.

### Como a defensividade protege

A defensividade guarda um lugar vulnerável. Se um comentário parece prova de que, no fundo, não temos valor, resistir a ele faz sentido como autoproteção. O problema é que a defensividade continua causando impacto. A outra pessoa pode se sentir não ouvida, desconsiderada ou culpada, e a questão original fica sem solução.

Movimentos defensivos comuns incluem:

- Explicar as intenções antes de reconhecer o impacto: "Não foi isso que eu quis dizer."
- Responder com outra reclamação: "Bom, você também faz isso."
- Minimizar: "Não foi nada demais."
- Desmoronar: "Sou uma pessoa horrível. Estrago tudo." Isso pode parecer responsabilidade, mas muitas vezes desloca a atenção para a nossa própria dor e deixa a outra pessoa nos consolando.

### Assumir o impacto sem desmoronar

O objetivo é um caminho do meio: assumir a responsabilidade pelo impacto sem abrir mão do seu valor básico. Muitas vezes isso soa assim:

- "Você tem razão, eu interrompi você. Desculpe. Quero ouvir o que você estava dizendo."
- "Percebo que o meu comentário magoou você. Não era a minha intenção, e entendo que o impacto foi real."
- "Preciso de um momento para absorver isso, mas quero entender. Você pode me contar mais?"

A autocompaixão ajuda aqui. Kristin Neff descreve a autocompaixão como a combinação de atenção plena, senso de humanidade compartilhada e gentileza consigo mesmo. Lembrar que todo ser humano erra pode facilitar encarar os próprios erros sem ser esmagado por eles.

### Prática: reescrevendo um momento defensivo

- Lembre-se de uma vez em que você ficou na defensiva quando alguém levantou uma preocupação.
- Escreva o que você disse ou quis dizer.
- Nomeie o sentimento vulnerável por baixo: constrangimento, medo de rejeição, sensação de incompetência ou outro.
- Escreva uma frase gentil para si mesmo sobre esse sentimento, como "Todo mundo erra às vezes. Posso aprender com isso e continuar bem".
- Agora escreva uma resposta que assuma o impacto sem afundar na vergonha.
- Pratique em voz alta as primeiras palavras, como "Você tem razão em que..." ou "Percebo que...".`,
        prompt: 'Escreva palavras que assumam o seu impacto em uma situação recente sem afundar na vergonha. Que sentimento vulnerável a sua defensividade pode estar protegendo?'
      }
    },
    {
      id: 'les_pers_9',
      slug: 'the-art-of-repair',
      duration: 20,
      sort: 3,
      en: {
        title: 'The Art of Repair',
        content: `### Ruptures are normal

No relationship is free of misunderstanding, hurt, or conflict. Even caring, well-intentioned people snap at each other, forget important things, or misread one another. What distinguishes steadier relationships is often not the absence of rupture but the presence of repair: the willingness to come back, acknowledge what happened, and reconnect.

Repair is itself a pattern, one that can be learned and strengthened. For people who grew up in homes where conflict was never repaired, or where apologies were used as weapons, this may take deliberate practice.

### What repair can include

Repair does not have to be elaborate. It often involves some of these elements:

- **Returning**: coming back to the person after a rupture, even briefly. "Can we talk about earlier?"
- **Acknowledging**: naming what happened and its impact, without excessive self-defense. "I was short with you, and I think that stung."
- **Taking responsibility for your part**: without taking responsibility for everything. "I’m sorry I raised my voice."
- **Listening**: inviting the other person’s experience. "How was that for you?"
- **Reconnecting**: a gesture of warmth or a plan for next time. "I’d like to handle it differently. Could we try pausing when things heat up?"

### Timing matters

Trying to repair while either person is still far outside their window of tolerance often backfires. It is okay to say, "I want to sort this out, and I need some time to calm down first. Can we talk tonight?" The key is to actually return.

### When repair is not safe

Repair assumes a relationship in which both people are reasonably safe. If someone is abusive, threatening, or consistently disrespects your boundaries, repair may not be appropriate. Protecting your safety comes first. Support from a qualified professional or an advocacy service can help you think through these situations.

### Receiving repair

Repair also involves receiving. When someone reaches out after a rupture, you do not have to pretend everything is fine, but you can acknowledge the effort. "Thank you for coming back to this. I’m still a bit hurt, but I appreciate it."

### Practice: planning a repair

- Think of a recent rupture, large or small, that has not been fully repaired.
- Write down what happened, as neutrally as you can.
- Write down your part in it, and only your part.
- Draft a short opening that returns to the person and acknowledges the impact.
- Write one question you could ask to hear their experience.
- Write one small idea for handling it differently next time.
- Decide whether and when it would be safe and helpful to reach out.`,
        prompt: 'Which rupture in your life is still waiting for repair? What would it sound like to return, acknowledge your part, and listen?'
      },
      es: {
        title: 'El arte de reparar',
        content: `### Las rupturas son normales

Ninguna relación está libre de malentendidos, heridas o conflictos. Incluso las personas cariñosas y bienintencionadas se responden mal, olvidan cosas importantes o se malinterpretan. Lo que distingue a las relaciones más estables a menudo no es la ausencia de rupturas, sino la presencia de reparación: la disposición a volver, reconocer lo que pasó y reconectar.

La reparación es en sí misma un patrón, uno que se puede aprender y fortalecer. Para quienes crecieron en hogares donde los conflictos nunca se reparaban, o donde las disculpas se usaban como armas, esto puede requerir una práctica intencional.

### Qué puede incluir la reparación

Reparar no tiene que ser complicado. A menudo incluye algunos de estos elementos:

- **Volver**: acercarte de nuevo a la persona después de una ruptura, aunque sea brevemente. "¿Podemos hablar de lo de antes?"
- **Reconocer**: nombrar lo que pasó y su impacto, sin defenderte en exceso. "Te respondí de mala manera y creo que te dolió."
- **Hacerte cargo de tu parte**: sin cargar con todo. "Perdón por haber levantado la voz."
- **Escuchar**: invitar la experiencia de la otra persona. "¿Cómo fue eso para ti?"
- **Reconectar**: un gesto de calidez o un plan para la próxima vez. "Me gustaría manejarlo distinto. ¿Podríamos intentar hacer una pausa cuando las cosas se calienten?"

### El momento importa

Intentar reparar mientras alguno de los dos sigue muy fuera de su ventana de tolerancia suele salir mal. Está bien decir: "Quiero que resolvamos esto y primero necesito un rato para calmarme. ¿Hablamos esta noche?". Lo importante es volver de verdad.

### Cuando reparar no es seguro

La reparación supone una relación en la que ambas personas están razonablemente a salvo. Si alguien es abusivo, amenazante o irrespeta tus límites de forma constante, quizá reparar no sea lo adecuado. Proteger tu seguridad es lo primero. El apoyo de un profesional calificado o de un servicio de acompañamiento puede ayudarte a pensar estas situaciones.

### Recibir la reparación

Reparar también implica recibir. Cuando alguien se acerca después de una ruptura, no tienes que fingir que todo está bien, pero puedes reconocer el esfuerzo. "Gracias por volver a hablar de esto. Todavía me duele un poco, pero lo valoro."

### Práctica: planear una reparación

- Piensa en una ruptura reciente, grande o pequeña, que no se haya reparado del todo.
- Escribe lo que pasó, de la forma más neutral posible.
- Escribe tu parte en lo ocurrido, y solo tu parte.
- Redacta una apertura breve que vuelva a la persona y reconozca el impacto.
- Escribe una pregunta que podrías hacer para escuchar su experiencia.
- Escribe una idea pequeña para manejarlo distinto la próxima vez.
- Decide si sería seguro y útil acercarte, y cuándo.`,
        prompt: '¿Qué ruptura de tu vida sigue esperando una reparación? ¿Cómo sonaría volver, reconocer tu parte y escuchar?'
      },
      'pt-BR': {
        title: 'A arte de reparar',
        content: `### Rupturas são normais

Nenhuma relação está livre de mal-entendidos, mágoas ou conflitos. Mesmo pessoas carinhosas e bem-intencionadas respondem mal umas às outras, esquecem coisas importantes ou se interpretam errado. O que diferencia as relações mais estáveis muitas vezes não é a ausência de rupturas, mas a presença de reparação: a disposição de voltar, reconhecer o que aconteceu e se reconectar.

A reparação é, ela mesma, um padrão, que pode ser aprendido e fortalecido. Para quem cresceu em lares onde os conflitos nunca eram reparados, ou onde pedidos de desculpa eram usados como arma, isso pode exigir prática intencional.

### O que a reparação pode incluir

Reparar não precisa ser elaborado. Muitas vezes envolve alguns destes elementos:

- **Voltar**: procurar a pessoa de novo depois de uma ruptura, mesmo que rapidamente. "Podemos conversar sobre mais cedo?"
- **Reconhecer**: nomear o que aconteceu e o seu impacto, sem se defender em excesso. "Fui ríspido com você, e acho que isso machucou."
- **Assumir a sua parte**: sem assumir a responsabilidade por tudo. "Desculpe por ter levantado a voz."
- **Escutar**: convidar a experiência da outra pessoa. "Como foi isso para você?"
- **Reconectar**: um gesto de carinho ou um plano para a próxima vez. "Eu gostaria de lidar com isso de outro jeito. Podemos tentar fazer uma pausa quando o clima esquentar?"

### O momento importa

Tentar reparar enquanto uma das pessoas ainda está muito fora da sua janela de tolerância costuma dar errado. Tudo bem dizer: "Quero resolver isso, e primeiro preciso de um tempo para me acalmar. Podemos conversar à noite?". O essencial é realmente voltar.

### Quando reparar não é seguro

A reparação pressupõe uma relação em que as duas pessoas estão razoavelmente seguras. Se alguém é abusivo, ameaçador ou desrespeita os seus limites de forma constante, a reparação talvez não seja adequada. Proteger a sua segurança vem primeiro. O apoio de um profissional qualificado ou de um serviço especializado pode ajudar você a pensar nessas situações.

### Recebendo a reparação

Reparar também envolve receber. Quando alguém procura você depois de uma ruptura, você não precisa fingir que está tudo bem, mas pode reconhecer o esforço. "Obrigado por voltar a este assunto. Ainda estou um pouco magoado, mas valorizo isso."

### Prática: planejando uma reparação

- Pense em uma ruptura recente, grande ou pequena, que ainda não foi totalmente reparada.
- Escreva o que aconteceu, da forma mais neutra possível.
- Escreva a sua parte no que aconteceu, e apenas a sua parte.
- Rascunhe uma abertura curta que volte à pessoa e reconheça o impacto.
- Escreva uma pergunta que você poderia fazer para ouvir a experiência dela.
- Escreva uma pequena ideia para lidar com isso de outro jeito da próxima vez.
- Decida se seria seguro e útil procurar a pessoa, e quando.`,
        prompt: 'Que ruptura na sua vida ainda está esperando reparação? Como soaria voltar, reconhecer a sua parte e escutar?'
      }
    }
  ]
});

coursePersonality.modules.push({
  id: 'mod_pers_4',
  slug: 'growing-flexibility',
  sort: 4,
  en: { title: 'Growing Flexibility', description: 'Balancing clear limits with openness, replacing certainty about motives with curiosity, and knowing when to seek qualified support.' },
  es: { title: 'Cultivar la flexibilidad', description: 'Equilibrar límites claros con apertura, cambiar la certeza sobre los motivos ajenos por curiosidad y saber cuándo buscar apoyo calificado.' },
  'pt-BR': { title: 'Cultivando a flexibilidade', description: 'Equilibrar limites claros com abertura, trocar a certeza sobre os motivos dos outros por curiosidade e saber quando buscar apoio qualificado.' },
  lessons: [
    {
      id: 'les_pers_10',
      slug: 'boundaries-and-flexibility',
      duration: 20,
      sort: 1,
      en: {
        title: 'Boundaries & Flexibility',
        content: `### Two qualities that work together

Healthy patterns tend to combine two qualities that can seem opposite: clear limits and genuine flexibility. Limits help us protect our time, energy, values, and safety. Flexibility helps us respond to new information, adapt to other people’s needs, and change our minds when it makes sense.

When either quality is missing, patterns can become strained:

- **Too rigid**: holding onto rules, routines, or positions even when they no longer serve anyone. Difficulty compromising. Treating every request as a threat.
- **Too porous**: saying yes when you mean no, absorbing others’ moods, losing track of your own needs, changing your views to avoid conflict.

Most people are rigid in some areas and porous in others. You might hold firm boundaries at work but find it very hard to say no to family, or the reverse.

### Firmness is not harshness

Some people avoid boundaries because they associate them with coldness or conflict. But a boundary can be warm: "I love spending time with you, and I need to leave by nine tonight." Firmness is about clarity and follow-through, not volume or anger.

### Flexibility is not collapse

Likewise, flexibility does not mean abandoning yourself. It means being willing to consider new information and adjust when it serves your values. A flexible person might say, "I hadn’t thought about it that way. Let me reconsider." They can also say, "I’ve thought about it, and I’m still going to say no."

### A useful question

When you are unsure whether to hold firm or bend, ask: "What would I choose here if I were acting from my values rather than from fear?" Fear might push you to cling rigidly to control, or to give in to avoid disapproval. Values tend to point toward a response that respects both you and the other person.

### Practice: finding your balance

- Draw two columns on a page: "Where I need more firmness" and "Where I need more flexibility."
- In the first column, list situations or relationships where you tend to say yes when you mean no, or lose track of your needs.
- In the second column, list situations where you tend to hold on too tightly, resist compromise, or react to requests as threats.
- Choose one item from each column.
- For the firmness item, write a warm, clear boundary you could state.
- For the flexibility item, write one small way you could loosen your grip, such as asking a question before saying no, or trying someone else’s approach once.
- Notice what feelings arise as you imagine each change. Those feelings may point to the protective patterns you explored earlier.`,
        prompt: 'Where in your life do you need more firmness, and where do you need more flexibility? What would you choose if you were acting from your values rather than from fear?'
      },
      es: {
        title: 'Límites y flexibilidad',
        content: `### Dos cualidades que funcionan juntas

Los patrones sanos suelen combinar dos cualidades que pueden parecer opuestas: límites claros y flexibilidad genuina. Los límites nos ayudan a proteger nuestro tiempo, energía, valores y seguridad. La flexibilidad nos ayuda a responder a información nueva, adaptarnos a las necesidades de otras personas y cambiar de opinión cuando tiene sentido.

Cuando falta alguna de estas cualidades, los patrones pueden tensarse:

- **Demasiado rígido**: aferrarse a reglas, rutinas o posturas aunque ya no le sirvan a nadie. Dificultad para ceder. Tratar cada petición como una amenaza.
- **Demasiado permeable**: decir que sí cuando quieres decir que no, absorber el estado de ánimo de otros, perder de vista tus propias necesidades, cambiar de opinión para evitar conflictos.

La mayoría de las personas somos rígidas en algunas áreas y permeables en otras. Quizá tienes límites firmes en el trabajo pero te cuesta mucho decir que no a tu familia, o al revés.

### Firmeza no es dureza

Algunas personas evitan los límites porque los asocian con frialdad o conflicto. Pero un límite puede ser cálido: "Me encanta pasar tiempo contigo y esta noche necesito irme a las nueve". La firmeza tiene que ver con la claridad y la coherencia, no con el volumen ni con el enojo.

### Flexibilidad no es derrumbarse

Del mismo modo, la flexibilidad no significa abandonarte. Significa estar dispuesto a considerar información nueva y ajustar cuando eso sirve a tus valores. Una persona flexible puede decir: "No lo había pensado así. Déjame reconsiderarlo". También puede decir: "Lo pensé y aun así voy a decir que no".

### Una pregunta útil

Cuando no sabes si mantenerte firme o ceder, pregúntate: "¿Qué elegiría aquí si actuara desde mis valores y no desde el miedo?". El miedo puede empujarte a aferrarte al control de forma rígida o a ceder para evitar la desaprobación. Los valores suelen señalar una respuesta que respeta tanto a ti como a la otra persona.

### Práctica: encontrar tu equilibrio

- Dibuja dos columnas en una hoja: "Dónde necesito más firmeza" y "Dónde necesito más flexibilidad".
- En la primera columna, anota situaciones o relaciones en las que tiendes a decir que sí cuando quieres decir que no, o pierdes de vista tus necesidades.
- En la segunda columna, anota situaciones en las que tiendes a aferrarte demasiado, resistirte a ceder o reaccionar a las peticiones como amenazas.
- Elige un elemento de cada columna.
- Para el de firmeza, escribe un límite cálido y claro que podrías expresar.
- Para el de flexibilidad, escribe una forma pequeña de aflojar, como hacer una pregunta antes de decir que no o probar una vez la manera de otra persona.
- Observa qué sentimientos surgen al imaginar cada cambio. Esos sentimientos pueden señalar los patrones de protección que exploraste antes.`,
        prompt: '¿En qué parte de tu vida necesitas más firmeza y en cuál más flexibilidad? ¿Qué elegirías si actuaras desde tus valores y no desde el miedo?'
      },
      'pt-BR': {
        title: 'Limites e flexibilidade',
        content: `### Duas qualidades que funcionam juntas

Padrões saudáveis costumam combinar duas qualidades que podem parecer opostas: limites claros e flexibilidade genuína. Os limites nos ajudam a proteger o nosso tempo, energia, valores e segurança. A flexibilidade nos ajuda a responder a informações novas, a nos adaptar às necessidades dos outros e a mudar de ideia quando faz sentido.

Quando falta uma dessas qualidades, os padrões podem ficar tensos:

- **Rígido demais**: apegar-se a regras, rotinas ou posições mesmo quando já não servem a ninguém. Dificuldade de ceder. Tratar todo pedido como uma ameaça.
- **Permeável demais**: dizer sim quando quer dizer não, absorver o humor dos outros, perder de vista as próprias necessidades, mudar de opinião para evitar conflito.

A maioria das pessoas é rígida em algumas áreas e permeável em outras. Talvez você tenha limites firmes no trabalho, mas ache muito difícil dizer não para a família, ou o contrário.

### Firmeza não é dureza

Algumas pessoas evitam limites porque os associam a frieza ou conflito. Mas um limite pode ser caloroso: "Adoro passar tempo com você, e hoje preciso ir embora às nove". Firmeza tem a ver com clareza e coerência, não com volume ou raiva.

### Flexibilidade não é desmoronar

Da mesma forma, flexibilidade não significa abandonar a si mesmo. Significa estar disposto a considerar informações novas e ajustar quando isso serve aos seus valores. Uma pessoa flexível pode dizer: "Eu não tinha pensado por esse lado. Deixe-me reconsiderar". Ela também pode dizer: "Pensei no assunto e continuo dizendo não".

### Uma pergunta útil

Quando você não sabe se deve se manter firme ou ceder, pergunte-se: "O que eu escolheria aqui se estivesse agindo a partir dos meus valores, e não do medo?". O medo pode empurrar você a se agarrar ao controle de forma rígida ou a ceder para evitar desaprovação. Os valores costumam apontar para uma resposta que respeita tanto você quanto a outra pessoa.

### Prática: encontrando o seu equilíbrio

- Desenhe duas colunas em uma folha: "Onde preciso de mais firmeza" e "Onde preciso de mais flexibilidade".
- Na primeira coluna, liste situações ou relações em que você costuma dizer sim quando quer dizer não, ou perde de vista as suas necessidades.
- Na segunda coluna, liste situações em que você costuma se agarrar demais, resistir a ceder ou reagir a pedidos como ameaças.
- Escolha um item de cada coluna.
- Para o item de firmeza, escreva um limite caloroso e claro que você poderia expressar.
- Para o item de flexibilidade, escreva uma pequena forma de afrouxar, como fazer uma pergunta antes de dizer não ou experimentar uma vez o jeito de outra pessoa.
- Observe que sentimentos surgem ao imaginar cada mudança. Esses sentimentos podem apontar para os padrões de proteção que você explorou antes.`,
        prompt: 'Em que parte da sua vida você precisa de mais firmeza, e em qual precisa de mais flexibilidade? O que você escolheria se estivesse agindo a partir dos seus valores, e não do medo?'
      }
    },
    {
      id: 'les_pers_11',
      slug: 'curious-relationships',
      duration: 20,
      sort: 2,
      en: {
        title: 'Replacing Certainty with Curiosity',
        content: `### The stories we tell about others

When someone behaves in a way that affects us, the mind quickly fills in an explanation. A friend does not reply: "They’re annoyed with me." A colleague interrupts: "They think I’m incompetent." A partner seems distant: "They’re losing interest." These stories arrive fast and often feel like facts.

Some of these stories are accurate. Many are not. They tend to be shaped by our own patterns, fears, and past experiences more than by the other person’s actual motives. When we act on them with certainty, we may respond to a situation that exists only in our heads.

### Mind-reading and its costs

Assuming we know what someone else is thinking or intending is sometimes called mind-reading. It can lead to:

- Reacting defensively to criticism that was never intended.
- Withdrawing from people who actually care about us.
- Escalating conflicts based on misunderstood intentions.
- Missing what the other person really needs or feels.

Many relationship difficulties come less from what people actually do and more from the meanings assigned to it.

### Curiosity as a practice

The alternative is curiosity: holding our interpretations lightly and gathering more information before concluding. This does not mean ignoring genuine red flags or pretending hurtful behavior is fine. It means distinguishing between what we observed and what we assumed.

A helpful sequence, inspired by nonviolent communication as developed by Marshall Rosenberg, is to separate:

- **Observation**: what actually happened, as a camera might record it. "You didn’t reply to my message yesterday."
- **Interpretation**: the story you are telling yourself. "I’m worried you’re upset with me."
- **Question**: an open, respectful inquiry. "Is everything okay between us?"

### Respectful questions

Turning an assumption into a question can sound like:

- "I noticed you were quiet at dinner. How are you doing?"
- "When you said that in the meeting, I wasn’t sure what you meant. Could you say more?"
- "I might be reading too much into this, but I’m wondering if something’s wrong."

These questions invite the other person to share their reality rather than defend against yours.

### Practice: from assumption to question

- Think of a current situation in which you are fairly certain about someone’s motives.
- Write down the observation: only what you saw or heard.
- Write down the story or interpretation you have added.
- List two or three other possible explanations, even if they seem less likely.
- Write a respectful, open question you could ask to learn more.
- Notice how your body feels holding the certainty versus holding the question.

Curiosity is not naivety. It is a commitment to evidence and to the other person’s inner life.`,
        prompt: 'Turn one assumption you are holding about someone into a respectful question. What other explanations might be possible?'
      },
      es: {
        title: 'Cambiar la certeza por curiosidad',
        content: `### Las historias que contamos sobre los demás

Cuando alguien se comporta de una forma que nos afecta, la mente rellena rápidamente una explicación. Una amiga no responde: "Está molesta conmigo". Un colega interrumpe: "Cree que soy incompetente". Tu pareja parece distante: "Está perdiendo el interés". Estas historias llegan rápido y a menudo se sienten como hechos.

Algunas de estas historias son acertadas. Muchas no lo son. Suelen estar moldeadas por nuestros propios patrones, miedos y experiencias pasadas más que por los motivos reales de la otra persona. Cuando actuamos sobre ellas con certeza, quizá respondamos a una situación que solo existe en nuestra cabeza.

### Leer la mente y sus costos

Suponer que sabemos lo que otra persona piensa o pretende se llama a veces leer la mente. Puede llevar a:

- Reaccionar a la defensiva ante una crítica que nunca existió.
- Alejarnos de personas que en realidad nos quieren.
- Escalar conflictos a partir de intenciones malinterpretadas.
- Perder de vista lo que la otra persona realmente necesita o siente.

Muchas dificultades en las relaciones provienen menos de lo que las personas hacen y más de los significados que les asignamos.

### La curiosidad como práctica

La alternativa es la curiosidad: sostener nuestras interpretaciones con ligereza y reunir más información antes de concluir. Esto no significa ignorar señales de alarma reales ni fingir que una conducta dañina está bien. Significa distinguir entre lo que observamos y lo que supusimos.

Una secuencia útil, inspirada en la comunicación no violenta desarrollada por Marshall Rosenberg, consiste en separar:

- **Observación**: lo que realmente pasó, como lo registraría una cámara. "Ayer no respondiste mi mensaje."
- **Interpretación**: la historia que te estás contando. "Me preocupa que estés molesto conmigo."
- **Pregunta**: una consulta abierta y respetuosa. "¿Está todo bien entre nosotros?"

### Preguntas respetuosas

Convertir una suposición en una pregunta puede sonar así:

- "Noté que estuviste callado en la cena. ¿Cómo estás?"
- "Cuando dijiste eso en la reunión, no me quedó claro a qué te referías. ¿Podrías explicarme más?"
- "Quizá estoy interpretando de más, pero me pregunto si pasa algo."

Estas preguntas invitan a la otra persona a compartir su realidad en lugar de defenderse de la tuya.

### Práctica: de la suposición a la pregunta

- Piensa en una situación actual en la que estés bastante seguro de los motivos de alguien.
- Escribe la observación: solo lo que viste u oíste.
- Escribe la historia o interpretación que agregaste.
- Anota dos o tres explicaciones posibles distintas, aunque parezcan menos probables.
- Escribe una pregunta respetuosa y abierta que podrías hacer para saber más.
- Observa cómo se siente tu cuerpo al sostener la certeza frente a sostener la pregunta.

La curiosidad no es ingenuidad. Es un compromiso con la evidencia y con la vida interior de la otra persona.`,
        prompt: 'Convierte una suposición que tengas sobre alguien en una pregunta respetuosa. ¿Qué otras explicaciones podrían ser posibles?'
      },
      'pt-BR': {
        title: 'Trocando a certeza pela curiosidade',
        content: `### As histórias que contamos sobre os outros

Quando alguém age de um jeito que nos afeta, a mente rapidamente preenche uma explicação. Uma amiga não responde: "Ela está chateada comigo". Um colega interrompe: "Ele acha que sou incompetente". O parceiro parece distante: "Está perdendo o interesse". Essas histórias chegam rápido e muitas vezes parecem fatos.

Algumas dessas histórias são corretas. Muitas não são. Elas costumam ser moldadas pelos nossos próprios padrões, medos e experiências passadas mais do que pelos motivos reais da outra pessoa. Quando agimos a partir delas com certeza, podemos estar respondendo a uma situação que só existe na nossa cabeça.

### Ler mentes e os seus custos

Supor que sabemos o que outra pessoa pensa ou pretende às vezes é chamado de leitura de mente. Isso pode levar a:

- Reagir na defensiva a uma crítica que nunca foi feita.
- Afastar-se de pessoas que na verdade se importam conosco.
- Escalar conflitos a partir de intenções mal interpretadas.
- Deixar de perceber o que a outra pessoa realmente precisa ou sente.

Muitas dificuldades nas relações vêm menos do que as pessoas fazem e mais dos significados que atribuímos a isso.

### A curiosidade como prática

A alternativa é a curiosidade: segurar as nossas interpretações com leveza e reunir mais informações antes de concluir. Isso não significa ignorar sinais de alerta reais ou fingir que um comportamento que machuca está tudo bem. Significa distinguir entre o que observamos e o que supusemos.

Uma sequência útil, inspirada na comunicação não violenta desenvolvida por Marshall Rosenberg, é separar:

- **Observação**: o que de fato aconteceu, como uma câmera registraria. "Você não respondeu a minha mensagem ontem."
- **Interpretação**: a história que você está contando para si mesmo. "Fico preocupado que você esteja chateado comigo."
- **Pergunta**: uma investigação aberta e respeitosa. "Está tudo bem entre nós?"

### Perguntas respeitosas

Transformar uma suposição em pergunta pode soar assim:

- "Percebi que você ficou quieto no jantar. Como você está?"
- "Quando você disse aquilo na reunião, não entendi bem o que quis dizer. Pode explicar melhor?"
- "Talvez eu esteja interpretando demais, mas fiquei pensando se aconteceu alguma coisa."

Essas perguntas convidam a outra pessoa a compartilhar a realidade dela, em vez de se defender da sua.

### Prática: da suposição à pergunta

- Pense em uma situação atual em que você tem bastante certeza sobre os motivos de alguém.
- Escreva a observação: apenas o que você viu ou ouviu.
- Escreva a história ou interpretação que você acrescentou.
- Liste duas ou três outras explicações possíveis, mesmo que pareçam menos prováveis.
- Escreva uma pergunta aberta e respeitosa que você poderia fazer para saber mais.
- Observe como o seu corpo se sente ao segurar a certeza em comparação com segurar a pergunta.

Curiosidade não é ingenuidade. É um compromisso com as evidências e com a vida interior da outra pessoa.`,
        prompt: 'Transforme uma suposição que você tem sobre alguém em uma pergunta respeitosa. Que outras explicações poderiam ser possíveis?'
      }
    },
    {
      id: 'les_pers_12',
      slug: 'when-to-seek-help-and-moving-forward',
      duration: 25,
      sort: 3,
      en: {
        title: 'When to Seek Support & Carrying It Forward',
        content: `### The value and limits of self-study

Reflecting on your patterns can bring real insight, relief, and change. Many people find that simply noticing, naming, and getting curious loosens old reactions. At the same time, self-study has limits. Some patterns are deeply rooted, connected to painful experiences, or entangled with mental health conditions that benefit from qualified assessment and care.

Seeking professional help is not a sign that you failed at self-reflection. It is often the wisest next step.

### Signs that more support may help

Consider reaching out to a qualified mental health professional, such as a licensed therapist, counselor, psychologist, or psychiatrist, if you notice:

- **Persistent distress**: patterns that cause ongoing pain for weeks or months despite your efforts.
- **Impairment**: difficulty keeping up with work, study, relationships, or daily care.
- **Repeating harm**: relationships that repeatedly end in painful ways, or patterns that hurt others.
- **Intense or confusing experiences**: extreme mood shifts, feeling detached from yourself or reality, or reactions that feel out of control.
- **Trauma-related symptoms**: flashbacks, nightmares, being constantly on guard, or avoiding reminders of past events.
- **Substance use** that is increasing or being used to cope with emotions.

A qualified professional can offer an assessment, which this course does not and cannot provide. If a diagnosis is relevant, it should come from someone trained to make it, not from a quiz, a label, or self-study.

### In a crisis

If you are having thoughts of harming yourself or someone else, or you feel unsafe, contact your local emergency number or a crisis line such as 988 in the US right away. You deserve immediate support.

### Finding the right fit

Therapy works best when there is a good fit between you and the therapist. It is okay to ask about their approach, experience with your concerns, and cultural understanding. It is also okay to try someone else if the first person does not feel right. Primary care doctors, community clinics, employee assistance programs, and trusted people in your life can help you find options.

### Carrying it forward

Over this course you have explored patterns rather than boxes, traced their threads, mapped triggers and protections, noticed your window of tolerance, looked at connection, shame, and repair, and practiced firmness, flexibility, and curiosity. Change in patterns tends to be gradual and uneven. Old reactions will still show up. What changes is how quickly you notice, how kindly you respond, and how often you choose something new.

### Practice: closing reflection

- Write down the pattern you most want to keep working with.
- Name one practice from this course that helped most, and when you will use it next.
- Write down what support beyond self-study might be appropriate for you, if any.
- Close gently: name one thing you want to carry forward, one thing you are setting down for now, and one source of support you can contact if needed.`,
        prompt: 'What support beyond self-study might be appropriate for you? Name one thing you want to carry forward, one thing you are setting down, and one source of support you can contact.'
      },
      es: {
        title: 'Cuándo buscar apoyo y cómo seguir adelante',
        content: `### El valor y los límites del estudio personal

Reflexionar sobre tus patrones puede traer comprensión, alivio y cambios reales. Muchas personas descubren que simplemente notar, nombrar y sentir curiosidad afloja reacciones antiguas. Al mismo tiempo, el estudio personal tiene límites. Algunos patrones están muy arraigados, conectados con experiencias dolorosas o entrelazados con condiciones de salud mental que se benefician de una evaluación y una atención calificadas.

Buscar ayuda profesional no significa que hayas fracasado en la reflexión personal. A menudo es el siguiente paso más sabio.

### Señales de que más apoyo podría ayudar

Considera acudir a un profesional de salud mental calificado, como un terapeuta, consejero, psicólogo o psiquiatra con licencia, si notas:

- **Malestar persistente**: patrones que causan dolor continuo durante semanas o meses a pesar de tus esfuerzos.
- **Deterioro**: dificultad para cumplir con el trabajo, los estudios, las relaciones o el cuidado diario.
- **Daño que se repite**: relaciones que terminan una y otra vez de forma dolorosa, o patrones que hieren a otras personas.
- **Experiencias intensas o confusas**: cambios de ánimo extremos, sentirte desconectado de ti o de la realidad, o reacciones que se sienten fuera de control.
- **Síntomas relacionados con trauma**: recuerdos intrusivos, pesadillas, estar siempre en guardia o evitar lo que recuerda hechos pasados.
- **Consumo de sustancias** que va en aumento o que se usa para manejar las emociones.

Un profesional calificado puede ofrecer una evaluación, algo que este curso no ofrece ni puede ofrecer. Si un diagnóstico es pertinente, debe venir de alguien formado para hacerlo, no de un test, una etiqueta o el estudio personal.

### En una crisis

Si tienes pensamientos de hacerte daño o de dañar a otra persona, o te sientes en peligro, comunícate de inmediato con tu número local de emergencias o con una línea de crisis como el 988 en Estados Unidos. Mereces apoyo inmediato.

### Encontrar a la persona adecuada

La terapia funciona mejor cuando hay una buena sintonía entre tú y quien te acompaña. Está bien preguntar por su enfoque, su experiencia con lo que te preocupa y su comprensión cultural. También está bien probar con otra persona si la primera no te resulta adecuada. Los médicos de cabecera, las clínicas comunitarias, los programas de asistencia al empleado y las personas de confianza pueden ayudarte a encontrar opciones.

### Seguir adelante

A lo largo de este curso exploraste patrones en lugar de cajas, seguiste sus hilos, mapeaste detonantes y protecciones, observaste tu ventana de tolerancia, miraste la conexión, la vergüenza y la reparación, y practicaste la firmeza, la flexibilidad y la curiosidad. El cambio en los patrones suele ser gradual e irregular. Las viejas reacciones seguirán apareciendo. Lo que cambia es qué tan rápido las notas, con cuánta amabilidad respondes y con qué frecuencia eliges algo nuevo.

### Práctica: reflexión de cierre

- Escribe el patrón con el que más quieres seguir trabajando.
- Nombra una práctica de este curso que te haya ayudado más y cuándo la usarás la próxima vez.
- Escribe qué apoyo más allá del estudio personal podría ser adecuado para ti, si lo hay.
- Cierra con suavidad: nombra algo que quieras llevar contigo, algo que dejas a un lado por ahora y una fuente de apoyo a la que puedas recurrir si lo necesitas.`,
        prompt: '¿Qué apoyo más allá del estudio personal podría ser adecuado para ti? Nombra algo que quieras llevar contigo, algo que dejas a un lado y una fuente de apoyo a la que puedas recurrir.'
      },
      'pt-BR': {
        title: 'Quando buscar apoio e como seguir adiante',
        content: `### O valor e os limites do estudo pessoal

Refletir sobre os seus padrões pode trazer compreensão, alívio e mudanças reais. Muitas pessoas descobrem que simplesmente perceber, nomear e ter curiosidade afrouxa reações antigas. Ao mesmo tempo, o estudo pessoal tem limites. Alguns padrões são profundamente enraizados, ligados a experiências dolorosas ou entrelaçados com condições de saúde mental que se beneficiam de avaliação e cuidado qualificados.

Buscar ajuda profissional não é sinal de que você falhou na autorreflexão. Muitas vezes, é o próximo passo mais sábio.

### Sinais de que mais apoio pode ajudar

Considere procurar um profissional de saúde mental qualificado, como um psicólogo, terapeuta, conselheiro ou psiquiatra habilitado, se perceber:

- **Sofrimento persistente**: padrões que causam dor contínua por semanas ou meses, apesar dos seus esforços.
- **Prejuízo**: dificuldade de dar conta do trabalho, dos estudos, das relações ou dos cuidados diários.
- **Dano que se repete**: relações que terminam repetidamente de forma dolorosa, ou padrões que machucam outras pessoas.
- **Experiências intensas ou confusas**: mudanças extremas de humor, sensação de estar desconectado de si ou da realidade, ou reações que parecem fora de controle.
- **Sintomas ligados a trauma**: lembranças invasivas, pesadelos, estar sempre em alerta ou evitar o que lembra acontecimentos passados.
- **Uso de substâncias** que está aumentando ou sendo usado para lidar com as emoções.

Um profissional qualificado pode oferecer uma avaliação, algo que este curso não oferece nem pode oferecer. Se um diagnóstico for relevante, ele deve vir de alguém preparado para fazê-lo, e não de um teste, de um rótulo ou do estudo pessoal.

### Em uma crise

Se você está tendo pensamentos de se machucar ou de machucar outra pessoa, ou se sente em perigo, ligue imediatamente para o número de emergência local ou para uma linha de crise como o 988 nos Estados Unidos. Você merece apoio imediato.

### Encontrando a pessoa certa

A terapia funciona melhor quando há uma boa sintonia entre você e o profissional. Tudo bem perguntar sobre a abordagem, a experiência com as suas questões e a compreensão cultural dele. Também tudo bem procurar outra pessoa se a primeira não parecer adequada. Clínicos gerais, serviços públicos de saúde, programas de apoio ao funcionário e pessoas de confiança podem ajudar você a encontrar opções.

### Seguindo adiante

Ao longo deste curso, você explorou padrões em vez de caixas, seguiu os seus fios, mapeou gatilhos e proteções, percebeu a sua janela de tolerância, olhou para a conexão, a vergonha e a reparação, e praticou firmeza, flexibilidade e curiosidade. A mudança nos padrões costuma ser gradual e irregular. As reações antigas ainda vão aparecer. O que muda é a rapidez com que você as percebe, a gentileza com que responde e a frequência com que escolhe algo novo.

### Prática: reflexão de encerramento

- Escreva o padrão com o qual você mais quer continuar trabalhando.
- Nomeie uma prática deste curso que mais ajudou e quando você vai usá-la de novo.
- Escreva que apoio além do estudo pessoal pode ser adequado para você, se houver.
- Encerre com delicadeza: nomeie algo que você quer levar adiante, algo que está deixando de lado por enquanto e uma fonte de apoio que pode procurar se precisar.`,
        prompt: 'Que apoio além do estudo pessoal pode ser adequado para você? Nomeie algo que você quer levar adiante, algo que está deixando de lado e uma fonte de apoio que pode procurar.'
      }
    }
  ]
});
