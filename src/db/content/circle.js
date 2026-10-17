// src/db/content/circle.js
// Additional KindWell Circle spaces and pinned starter threads.
// EXTRA_CIRCLE_SPACES matches the `spaces` shape in seed.js section 8.
// CIRCLE_STARTERS: 3 starter threads for each of the 8 spaces (4 existing + 4 new),
// written as from the "KindWell team". Shape: { id, space_id, sort, en: {title, body}, es, 'pt-BR' }.
// circle_threads has one locale per row, so the seeder should insert one row per
// locale (e.g. id + '_' + locale) with a system "KindWell team" user as user_id.

export const EXTRA_CIRCLE_SPACES = [
  {
    id: 'caring-for-someone',
    slug: 'caring-for-someone',
    sort: 5,
    icon: '🤲',
    en: { name: 'Caring for Someone', description: 'For those looking after a parent, partner, child, or friend: a place to set down the weight for a moment and be cared for too.' },
    es: { name: 'Cuidar a alguien', description: 'Para quienes cuidan a una madre, un padre, una pareja, un hijo o una amistad: un lugar para soltar el peso un momento y recibir cuidado también.' },
    'pt-BR': { name: 'Cuidando de alguém', description: 'Para quem cuida de pai, mãe, companheiro, filho ou amigo: um lugar para pousar o peso por um instante e ser cuidado também.' }
  },
  {
    id: 'rest-and-burnout',
    slug: 'rest-and-burnout',
    sort: 6,
    icon: '🌙',
    en: { name: 'Rest & Burnout', description: 'Honest talk about exhaustion, overwork, and learning to rest without guilt, one small permission at a time.' },
    es: { name: 'Descanso y agotamiento', description: 'Conversaciones honestas sobre el cansancio, la sobrecarga y aprender a descansar sin culpa, un pequeño permiso a la vez.' },
    'pt-BR': { name: 'Descanso e esgotamento', description: 'Conversas sinceras sobre cansaço, sobrecarga e aprender a descansar sem culpa, uma pequena permissão de cada vez.' }
  },
  {
    id: 'spiritual-questions',
    slug: 'spiritual-questions',
    sort: 7,
    icon: '🕊️',
    en: { name: 'Spiritual Questions', description: 'A respectful space for meaning, faith, doubt, and wonder, welcoming every tradition and none.' },
    es: { name: 'Preguntas espirituales', description: 'Un espacio respetuoso para el sentido, la fe, la duda y el asombro, abierto a todas las tradiciones y también a quienes no siguen ninguna.' },
    'pt-BR': { name: 'Perguntas espirituais', description: 'Um espaço respeitoso para sentido, fé, dúvida e encantamento, aberto a todas as tradições e também a quem não segue nenhuma.' }
  },
  {
    id: 'small-practices',
    slug: 'small-practices',
    sort: 8,
    icon: '🌱',
    en: { name: 'Small Practices', description: 'Tiny everyday rituals that help: the morning cup, the evening walk, the one song that resets you. Share yours and borrow freely.' },
    es: { name: 'Pequeñas prácticas', description: 'Rituales cotidianos y diminutos que ayudan: la taza de la mañana, la caminata de la tarde, esa canción que te reinicia. Comparte los tuyos y toma prestados los demás.' },
    'pt-BR': { name: 'Pequenas práticas', description: 'Rituais pequenos do dia a dia que ajudam: o café da manhã, a caminhada do fim de tarde, aquela música que reorganiza tudo. Compartilhe os seus e pegue emprestado à vontade.' }
  }
];

// Short community guidelines, included in each space's welcome thread.
const GUIDELINES = {
  en: `**A few gentle guidelines**

- Speak from your own experience, and assume good intent.
- Offer advice only when someone asks for it.
- No diagnosing, medical advice, or selling.
- Keep others’ stories private, here and everywhere else.
- If a post worries you, use Report and our team will take a look.

The Circle is a peer space, not a crisis service. If you are in danger, please contact your local emergency number or a crisis line such as 988 in the US.`,
  es: `**Algunas pautas amables**

- Habla desde tu propia experiencia y asume buena intención.
- Ofrece consejos solo cuando alguien los pida.
- Sin diagnósticos, consejos médicos ni ventas.
- Cuida la privacidad de las historias de otras personas, aquí y en cualquier otro lugar.
- Si una publicación te preocupa, usa Reportar y nuestro equipo la revisará.

El Círculo es un espacio entre pares, no un servicio de crisis. Si estás en peligro, comunícate con tu número local de emergencias o con una línea de crisis, como el 988 en Estados Unidos.`,
  'pt-BR': `**Algumas diretrizes gentis**

- Fale a partir da sua própria experiência e presuma boa intenção.
- Ofereça conselhos só quando alguém pedir.
- Sem diagnósticos, conselhos médicos ou vendas.
- Preserve a privacidade das histórias dos outros, aqui e em qualquer lugar.
- Se uma publicação preocupar você, use Denunciar e nossa equipe vai verificar.

O Círculo é um espaço entre pares, não um serviço de crise. Se você estiver em perigo, procure o número local de emergência ou uma linha de crise, como o 988 nos EUA.`
};

export const CIRCLE_STARTERS = [
  // ── Gentle Check-In ───────────────────────────────────────────
  {
    id: 'starter_gentle-check-in_welcome',
    space_id: 'gentle-check-in',
    sort: 1,
    en: {
      title: 'Welcome to Gentle Check-In (start here)',
      body: `Welcome. This is the quietest room in the Circle: a place to say how you are actually doing, without polishing it first.

You do not need a reason to post, and you do not need to have a good day to belong here. “Tired and okay” is a perfectly good check-in. So is “not great.”

${GUIDELINES.en}

If you are reading along for now, you are welcome too. When you feel ready, reply below with a hello.`
    },
    es: {
      title: 'Bienvenida a Pausa sincera (empieza aquí)',
      body: `Te damos la bienvenida. Este es el rincón más tranquilo del Círculo: un lugar para contar cómo estás de verdad, sin tener que pulirlo antes.

No necesitas un motivo para publicar ni tener un buen día para pertenecer aquí. “Cansada, pero bien” es una respuesta perfectamente válida. “No muy bien” también.

${GUIDELINES.es}

Si por ahora prefieres solo leer, también eres bienvenido o bienvenida. Cuando te sientas listo o lista, responde abajo con un saludo.`
    },
    'pt-BR': {
      title: 'Boas-vindas ao Check-in acolhedor (comece aqui)',
      body: `Que bom ter você aqui. Este é o cantinho mais tranquilo do Círculo: um lugar para contar como você está de verdade, sem precisar arrumar nada antes.

Você não precisa de um motivo para postar nem de um dia bom para fazer parte. “Cansado, mas ok” é um ótimo check-in. “Não muito bem” também.

${GUIDELINES['pt-BR']}

Se por enquanto você prefere só ler, é bem-vindo também. Quando se sentir pronto, deixe um oi aqui embaixo.`
    }
  },
  {
    id: 'starter_gentle-check-in_one-word',
    space_id: 'gentle-check-in',
    sort: 2,
    en: {
      title: 'How are you, really? (one word is enough)',
      body: `Sometimes the most honest answer fits in a single word.

This thread is for exactly that. Reply with one word, or a few, that describe how you are arriving today. Heavy. Hopeful. Scattered. Numb. Grateful. Sore. All of it.

No one needs to fix anything here, and you do not need to explain. If you would like to say a little more, you are welcome to. If you would like others to simply read and hold it, you can add “just listening, please.”

We will be reading too. Thank you for showing up as you are.`
    },
    es: {
      title: '¿Cómo estás de verdad? (una palabra basta)',
      body: `A veces la respuesta más honesta cabe en una sola palabra.

Este hilo es justo para eso. Responde con una palabra, o unas pocas, que describan cómo llegas hoy. Pesadez. Esperanza. Dispersión. Entumecimiento. Gratitud. Dolor. Todo junto.

Nadie necesita arreglar nada aquí, y no tienes que dar explicaciones. Si quieres contar un poco más, puedes hacerlo. Si prefieres que las demás personas solo lean y te acompañen, puedes añadir “solo escucha, por favor”.

Nosotros también estaremos leyendo. Gracias por venir tal como estás.`
    },
    'pt-BR': {
      title: 'Como você está de verdade? (uma palavra basta)',
      body: `Às vezes a resposta mais honesta cabe numa palavra só.

Este tópico é exatamente para isso. Responda com uma palavra, ou algumas, que descrevam como você está chegando hoje. Pesado. Esperançoso. Disperso. Anestesiado. Grato. Dolorido. Tudo junto.

Ninguém precisa consertar nada aqui, e você não precisa explicar. Se quiser contar um pouco mais, fique à vontade. Se preferir que os outros apenas leiam e acolham, pode escrever “só escuta, por favor”.

Nós também vamos estar lendo. Obrigado por vir do jeito que você está.`
    }
  },
  {
    id: 'starter_gentle-check-in_body-needs',
    space_id: 'gentle-check-in',
    sort: 3,
    en: {
      title: 'What does your body need today?',
      body: `Our minds often answer “how are you?” with a to-do list. Our bodies tend to be more direct.

Take a breath and ask yourself quietly: *what does my body need right now?* Maybe water. A stretch. A nap you will not get until later. A cry. Warmth. Food that is not eaten standing up.

Reply with what you noticed, and, if it is possible, one small way you could offer it to yourself today. It does not have to happen perfectly. Even naming it is a kind of care.

If you notice something that worries you physically, please check in with a doctor. This thread is for noticing, not diagnosing.`
    },
    es: {
      title: '¿Qué necesita tu cuerpo hoy?',
      body: `La mente suele responder al “¿cómo estás?” con una lista de pendientes. El cuerpo tiende a ser más directo.

Respira y pregúntate en silencio: *¿qué necesita mi cuerpo ahora?* Quizá agua. Estirarse. Una siesta que no llegará hasta más tarde. Llorar. Calor. Comer algo sin estar de pie.

Responde con lo que notaste y, si es posible, una forma pequeña en que podrías ofrecértelo hoy. No tiene que salir perfecto. Incluso nombrarlo ya es una forma de cuidado.

Si notas algo físico que te preocupa, consulta con un médico. Este hilo es para observar, no para diagnosticar.`
    },
    'pt-BR': {
      title: 'Do que o seu corpo precisa hoje?',
      body: `A mente costuma responder ao “como você está?” com uma lista de tarefas. O corpo tende a ser mais direto.

Respire e pergunte em silêncio: *do que meu corpo precisa agora?* Talvez água. Um alongamento. Um cochilo que só vai rolar mais tarde. Chorar. Calor. Comer algo sem ser em pé.

Responda com o que você percebeu e, se for possível, um jeito pequeno de oferecer isso a si mesmo hoje. Não precisa sair perfeito. Só nomear já é uma forma de cuidado.

Se perceber algo físico que preocupa você, procure um médico. Este tópico é para perceber, não para diagnosticar.`
    }
  },

  // ── Practice Together ─────────────────────────────────────────
  {
    id: 'starter_practice-together_welcome',
    space_id: 'practice-together',
    sort: 1,
    en: {
      title: 'Welcome to Practice Together (start here)',
      body: `This space is for sharing what happens when you actually try the practices in the KindWell library: what helped, what felt awkward, what you changed to make it yours.

Practice is personal. Something that settles one person may feel uncomfortable to another, and that is useful information, not failure. Share your experience, and let others have theirs.

${GUIDELINES.en}

To begin, reply with the name of one practice you have tried and one word for how it felt.`
    },
    es: {
      title: 'Bienvenida a Practicar en compañía (empieza aquí)',
      body: `Este espacio es para compartir lo que pasa cuando realmente pruebas las prácticas de la biblioteca de KindWell: qué te ayudó, qué se sintió raro, qué cambiaste para hacerlo tuyo.

La práctica es personal. Algo que calma a una persona puede incomodar a otra, y eso es información útil, no un fracaso. Comparte tu experiencia y deja que las demás personas tengan la suya.

${GUIDELINES.es}

Para empezar, responde con el nombre de una práctica que hayas probado y una palabra sobre cómo se sintió.`
    },
    'pt-BR': {
      title: 'Boas-vindas ao Praticar juntos (comece aqui)',
      body: `Este espaço é para compartilhar o que acontece quando você realmente experimenta as práticas da biblioteca KindWell: o que ajudou, o que pareceu estranho, o que você mudou para deixar do seu jeito.

Prática é algo pessoal. O que acalma uma pessoa pode incomodar outra, e isso é informação útil, não fracasso. Compartilhe sua experiência e deixe os outros terem a deles.

${GUIDELINES['pt-BR']}

Para começar, responda com o nome de uma prática que você experimentou e uma palavra sobre como foi.`
    }
  },
  {
    id: 'starter_practice-together_this-week',
    space_id: 'practice-together',
    sort: 2,
    en: {
      title: 'Which practice are you trying this week?',
      body: `A practice tends to grow roots when we return to it more than once. This thread is a gentle way to keep each other company.

Reply with:

- The practice you are choosing for this week.
- When you plan to try it (with your morning coffee, on the bus, before bed).
- One thing that might get in the way, if you already know.

Then, if you like, come back later in the week and reply to your own post with how it went. Missed a day or five? That is part of practicing too. Just start again.`
    },
    es: {
      title: '¿Qué práctica vas a probar esta semana?',
      body: `Una práctica suele echar raíces cuando volvemos a ella más de una vez. Este hilo es una forma amable de acompañarnos.

Responde con:

- La práctica que eliges para esta semana.
- Cuándo piensas hacerla (con el café de la mañana, en el autobús, antes de dormir).
- Algo que podría dificultarlo, si ya lo sabes.

Después, si quieres, vuelve más adelante en la semana y responde a tu propio mensaje contando cómo te fue. ¿Te saltaste un día, o cinco? Eso también es parte de practicar. Simplemente vuelve a empezar.`
    },
    'pt-BR': {
      title: 'Qual prática você vai experimentar esta semana?',
      body: `Uma prática costuma criar raízes quando voltamos a ela mais de uma vez. Este tópico é um jeito gentil de fazermos companhia uns aos outros.

Responda com:

- A prática que você escolheu para esta semana.
- Quando pretende fazer (com o café da manhã, no ônibus, antes de dormir).
- Algo que pode atrapalhar, se você já souber.

Depois, se quiser, volte mais para o fim da semana e responda à sua própria mensagem contando como foi. Pulou um dia, ou cinco? Isso também faz parte de praticar. É só recomeçar.`
    }
  },
  {
    id: 'starter_practice-together_didnt-work',
    space_id: 'practice-together',
    sort: 3,
    en: {
      title: 'When a practice didn’t work for you',
      body: `Not every practice fits every person or every day. Breath focus can make some people more anxious. Body scans can feel like too much. A practice that helped last month can feel flat this month.

This thread is a safe place to say so. Tell us:

- Which practice did not land for you, and what happened?
- Did you adapt it in any way that helped?

Honest notes like these help all of us, including our team, understand how to offer practices more gently. And if a practice ever brings up something overwhelming, it is always okay to stop, and it may be worth talking with a licensed therapist.`
    },
    es: {
      title: 'Cuando una práctica no funcionó para ti',
      body: `No todas las prácticas sirven para todas las personas ni para todos los días. Enfocarse en la respiración puede aumentar la ansiedad en algunas personas. Un recorrido por el cuerpo puede sentirse demasiado. Una práctica que ayudó el mes pasado puede sentirse vacía este mes.

Este hilo es un lugar seguro para decirlo. Cuéntanos:

- ¿Qué práctica no te funcionó y qué pasó?
- ¿La adaptaste de alguna manera que te ayudara?

Comentarios honestos como estos nos ayudan a todos, incluido nuestro equipo, a ofrecer las prácticas con más cuidado. Y si alguna vez una práctica despierta algo abrumador, siempre está bien detenerse, y puede valer la pena hablarlo con un terapeuta con licencia.`
    },
    'pt-BR': {
      title: 'Quando uma prática não funcionou para você',
      body: `Nem toda prática serve para toda pessoa ou para todo dia. Focar na respiração pode deixar algumas pessoas mais ansiosas. Uma varredura corporal pode parecer demais. Uma prática que ajudou no mês passado pode parecer sem graça neste mês.

Este tópico é um lugar seguro para dizer isso. Conte para a gente:

- Qual prática não funcionou para você, e o que aconteceu?
- Você adaptou de algum jeito que ajudou?

Relatos sinceros assim ajudam todo mundo, inclusive nossa equipe, a oferecer as práticas com mais cuidado. E se alguma prática despertar algo avassalador, sempre é ok parar, e pode valer a pena conversar com um psicólogo ou terapeuta habilitado.`
    }
  },

  // ── Being With It ─────────────────────────────────────────────
  {
    id: 'starter_being-with-it_welcome',
    space_id: 'being-with-it',
    sort: 1,
    en: {
      title: 'Welcome to Being With It (please read first)',
      body: `This space is for the things that do not have neat answers: grief, loss, illness, endings, and long seasons of uncertainty.

Here, we do not rush anyone toward feeling better. We do not say “everything happens for a reason.” We sit with each other, and we let what is true be spoken.

${GUIDELINES.en}

If your grief is making daily life very hard, a grief counselor or support group can offer the kind of ongoing care a peer space cannot. You are welcome here either way.`
    },
    es: {
      title: 'Bienvenida a Acompañar lo difícil (lee esto primero)',
      body: `Este espacio es para lo que no tiene respuestas sencillas: el duelo, las pérdidas, la enfermedad, los finales y las largas épocas de incertidumbre.

Aquí no apuramos a nadie a sentirse mejor. No decimos “todo pasa por algo”. Nos acompañamos y dejamos que lo verdadero pueda decirse.

${GUIDELINES.es}

Si el duelo está haciendo muy difícil tu vida diaria, un acompañamiento profesional en duelo o un grupo de apoyo pueden ofrecerte el cuidado continuo que un espacio entre pares no puede dar. De cualquier forma, aquí eres bienvenido o bienvenida.`
    },
    'pt-BR': {
      title: 'Boas-vindas ao Estar presente com a dor (leia primeiro)',
      body: `Este espaço é para o que não tem respostas fáceis: luto, perdas, doença, finais e longas fases de incerteza.

Aqui, não apressamos ninguém a se sentir melhor. Não dizemos “tudo acontece por um motivo”. Fazemos companhia uns aos outros e deixamos que o que é verdadeiro possa ser dito.

${GUIDELINES['pt-BR']}

Se o luto estiver tornando a rotina muito difícil, um acompanhamento profissional para o luto ou um grupo de apoio pode oferecer o cuidado contínuo que um espaço entre pares não consegue. De todo jeito, você é bem-vindo aqui.`
    }
  },
  {
    id: 'starter_being-with-it_say-their-name',
    space_id: 'being-with-it',
    sort: 2,
    en: {
      title: 'Say their name',
      body: `So often, after a loss, the people around us stop saying the name. This thread is a place to say it.

If you would like, reply with the name of someone you are missing: a person, an animal, a friendship, a version of your life that ended. You can add a memory, a detail, or a single word about them. Or just the name.

Everyone who reads here is invited to respond gently, perhaps with “I’m holding [name] with you,” and nothing more.

There is no time limit on missing someone. Whether the loss was last week or thirty years ago, it belongs here.`
    },
    es: {
      title: 'Di su nombre',
      body: `Muchas veces, después de una pérdida, las personas a nuestro alrededor dejan de decir el nombre. Este hilo es un lugar para decirlo.

Si quieres, responde con el nombre de quien extrañas: una persona, un animal, una amistad, una etapa de tu vida que terminó. Puedes añadir un recuerdo, un detalle o una sola palabra. O solo el nombre.

Quienes lean aquí están invitados a responder con suavidad, quizá con “Acompaño a [nombre] contigo”, y nada más.

Extrañar a alguien no tiene fecha límite. Ya sea que la pérdida haya sido la semana pasada o hace treinta años, tiene lugar aquí.`
    },
    'pt-BR': {
      title: 'Diga o nome',
      body: `Muitas vezes, depois de uma perda, as pessoas ao redor param de dizer o nome. Este tópico é um lugar para dizê-lo.

Se quiser, responda com o nome de quem você sente falta: uma pessoa, um animal, uma amizade, uma fase da vida que terminou. Pode acrescentar uma lembrança, um detalhe ou uma única palavra. Ou só o nome.

Quem ler aqui está convidado a responder com delicadeza, talvez com “Estou guardando [nome] com você”, e nada mais.

Não existe prazo para sentir saudade. Seja uma perda da semana passada ou de trinta anos atrás, ela tem lugar aqui.`
    }
  },
  {
    id: 'starter_being-with-it_what-helps',
    space_id: 'being-with-it',
    sort: 3,
    en: {
      title: 'What helps, even a little?',
      body: `In hard seasons, “what helps” is rarely big. It might be the friend who drops off soup without asking questions. A certain song. Sleeping with the light on. Walking the same route every morning. Being allowed to not talk about it.

Share one small thing that has helped you, even for an hour. Others may find something to borrow, and there is no pressure to try anything.

Please keep in mind that what helps one person may not fit another, so offer ideas as “this helped me” rather than “you should.”

If nothing is helping right now, you can say that here too. You will not be alone with it.`
    },
    es: {
      title: '¿Qué ayuda, aunque sea un poco?',
      body: `En épocas difíciles, lo que ayuda rara vez es grande. Puede ser la amiga que deja una sopa sin hacer preguntas. Una canción. Dormir con la luz encendida. Caminar el mismo recorrido cada mañana. Que te permitan no hablar del tema.

Comparte algo pequeño que te haya ayudado, aunque sea por una hora. Otras personas quizá encuentren algo para tomar prestado, sin ninguna presión de probarlo.

Recuerda que lo que ayuda a una persona puede no servirle a otra, así que ofrece ideas como “a mí me ayudó” en lugar de “deberías”.

Si ahora mismo nada te está ayudando, también puedes decirlo aquí. No te quedarás a solas con eso.`
    },
    'pt-BR': {
      title: 'O que ajuda, nem que seja um pouco?',
      body: `Em fases difíceis, o que ajuda raramente é grande. Pode ser a amiga que deixa uma sopa sem fazer perguntas. Uma música. Dormir com a luz acesa. Fazer o mesmo caminho toda manhã. Ter permissão para não falar sobre o assunto.

Compartilhe uma coisa pequena que ajudou você, nem que tenha sido por uma hora. Outras pessoas podem encontrar algo para pegar emprestado, sem nenhuma pressão para experimentar.

Lembre que o que ajuda uma pessoa pode não servir para outra, então ofereça ideias como “isso me ajudou” em vez de “você deveria”.

Se nada estiver ajudando agora, você também pode dizer isso aqui. Você não vai ficar sozinho com isso.`
    }
  },

  // ── Quiet Wins ────────────────────────────────────────────────
  {
    id: 'starter_quiet-wins_welcome',
    space_id: 'quiet-wins',
    sort: 1,
    en: {
      title: 'Welcome to Quiet Wins (start here)',
      body: `This is where we celebrate the victories that rarely make it into conversation: getting out of bed on a hard day, sending the difficult email, saying a kind no, drinking a glass of water, pausing before reacting.

No win is too small here. In fact, small is the point.

${GUIDELINES.en}

One more guideline just for this space: please cheer rather than compare. Everyone’s “hard” looks different. Reply below with a hello and one tiny thing you are proud of today.`
    },
    es: {
      title: 'Bienvenida a Pequeñas victorias (empieza aquí)',
      body: `Aquí celebramos las victorias que casi nunca llegan a las conversaciones: levantarte de la cama en un día difícil, enviar ese correo complicado, decir un “no” amable, tomar un vaso de agua, hacer una pausa antes de reaccionar.

Aquí ninguna victoria es demasiado pequeña. De hecho, lo pequeño es justamente la idea.

${GUIDELINES.es}

Una pauta más, solo para este espacio: por favor, celebra en lugar de comparar. Lo “difícil” se ve distinto para cada persona. Responde abajo con un saludo y algo pequeño de lo que te sientas orgulloso u orgullosa hoy.`
    },
    'pt-BR': {
      title: 'Boas-vindas às Pequenas vitórias (comece aqui)',
      body: `Aqui celebramos as vitórias que quase nunca aparecem nas conversas: sair da cama num dia difícil, mandar aquele e-mail complicado, dizer um não gentil, beber um copo d’água, pausar antes de reagir.

Nenhuma vitória é pequena demais aqui. Na verdade, o pequeno é justamente a ideia.

${GUIDELINES['pt-BR']}

Mais uma diretriz, só para este espaço: por favor, comemore em vez de comparar. O “difícil” de cada pessoa é diferente. Responda aqui embaixo com um oi e uma coisinha da qual você se orgulha hoje.`
    }
  },
  {
    id: 'starter_quiet-wins_this-week',
    space_id: 'quiet-wins',
    sort: 2,
    en: {
      title: 'Share a tiny win from this week',
      body: `Let’s make a running list of the good, small, ordinary things.

Reply with one win from this week. A few examples, to get us started:

- I asked for help instead of pretending I was fine.
- I took a real lunch break.
- I noticed my shoulders creeping up and let them drop.
- I went outside for five minutes.

When you read someone else’s win, consider leaving a short reply. Being witnessed is part of what makes a quiet win feel real.

We will add ours too.`
    },
    es: {
      title: 'Comparte una pequeña victoria de esta semana',
      body: `Armemos una lista viva de cosas buenas, pequeñas y cotidianas.

Responde con una victoria de esta semana. Algunos ejemplos para empezar:

- Pedí ayuda en lugar de fingir que estaba bien.
- Me tomé un descanso real para almorzar.
- Noté que los hombros se me subían y los dejé bajar.
- Salí afuera cinco minutos.

Cuando leas la victoria de otra persona, considera dejar una respuesta breve. Sentirse visto es parte de lo que hace que una pequeña victoria se sienta real.

Nosotros también sumaremos las nuestras.`
    },
    'pt-BR': {
      title: 'Compartilhe uma pequena vitória desta semana',
      body: `Vamos montar uma lista viva de coisas boas, pequenas e comuns.

Responda com uma vitória desta semana. Alguns exemplos para começar:

- Pedi ajuda em vez de fingir que estava tudo bem.
- Fiz uma pausa de verdade para almoçar.
- Percebi os ombros subindo e deixei que descessem.
- Saí de casa por cinco minutos.

Quando ler a vitória de outra pessoa, que tal deixar uma resposta curtinha? Ser visto faz parte do que torna uma pequena vitória real.

A gente também vai somar as nossas.`
    }
  },
  {
    id: 'starter_quiet-wins_invisible',
    space_id: 'quiet-wins',
    sort: 3,
    en: {
      title: 'A win no one else would notice',
      body: `Some of the most meaningful progress is invisible from the outside. Nobody else knows that you did not send the angry text, or that you went to the appointment you had been avoiding, or that you let yourself rest without apologizing.

This thread is for those. Share a win that only you would know about, and tell us, if you like, why it mattered.

You do not have to explain the backstory. “This was a big deal for me” is enough.

We see you. Consider this your small, quiet round of applause.`
    },
    es: {
      title: 'Una victoria que nadie más notaría',
      body: `Parte del progreso más significativo es invisible desde afuera. Nadie más sabe que no enviaste ese mensaje con enojo, que fuiste a la cita que venías evitando o que te permitiste descansar sin pedir disculpas.

Este hilo es para eso. Comparte una victoria que solo tú conocerías y, si quieres, cuéntanos por qué fue importante.

No necesitas explicar toda la historia. “Esto fue muy importante para mí” es suficiente.

Te vemos. Considera esto tu pequeño y silencioso aplauso.`
    },
    'pt-BR': {
      title: 'Uma vitória que ninguém mais perceberia',
      body: `Parte do progresso mais significativo é invisível de fora. Ninguém mais sabe que você não mandou aquela mensagem com raiva, que foi à consulta que vinha adiando ou que se permitiu descansar sem pedir desculpas.

Este tópico é para isso. Compartilhe uma vitória que só você conheceria e, se quiser, conte por que ela foi importante.

Você não precisa explicar toda a história. “Isso foi muito importante para mim” basta.

A gente vê você. Considere isto sua pequena e silenciosa salva de palmas.`
    }
  },

  // ── Caring for Someone ────────────────────────────────────────
  {
    id: 'starter_caring-for-someone_welcome',
    space_id: 'caring-for-someone',
    sort: 1,
    en: {
      title: 'Welcome to Caring for Someone (start here)',
      body: `If you are looking after someone, whether a parent, partner, child, friend, or neighbor, this space is for you. Caring can be full of love and also exhausting, lonely, and complicated. All of that is welcome here.

You do not have to be a “good” caregiver to post. You can be tired, resentful, tender, and devoted in the same breath.

${GUIDELINES.en}

Please remember that medical questions about the person you care for belong with their care team. Here, we care for the carer. Say hello below when you are ready.`
    },
    es: {
      title: 'Bienvenida a Cuidar a alguien (empieza aquí)',
      body: `Si cuidas a alguien, ya sea tu madre o tu padre, tu pareja, un hijo, una amistad o un vecino, este espacio es para ti. Cuidar puede estar lleno de amor y, al mismo tiempo, ser agotador, solitario y complicado. Todo eso tiene lugar aquí.

No necesitas ser un cuidador “ejemplar” para publicar. Puedes sentir cansancio, resentimiento, ternura y entrega al mismo tiempo.

${GUIDELINES.es}

Recuerda que las preguntas médicas sobre la persona que cuidas corresponden a su equipo de salud. Aquí cuidamos a quien cuida. Saluda abajo cuando te sientas listo o lista.`
    },
    'pt-BR': {
      title: 'Boas-vindas ao Cuidando de alguém (comece aqui)',
      body: `Se você cuida de alguém, seja mãe, pai, companheiro, filho, amigo ou vizinho, este espaço é para você. Cuidar pode ser cheio de amor e, ao mesmo tempo, exaustivo, solitário e complicado. Tudo isso é bem-vindo aqui.

Você não precisa ser um cuidador “exemplar” para postar. Dá para sentir cansaço, ressentimento, ternura e dedicação ao mesmo tempo.

${GUIDELINES['pt-BR']}

Lembre que dúvidas médicas sobre a pessoa de quem você cuida são para a equipe de saúde dela. Aqui, cuidamos de quem cuida. Deixe um oi aqui embaixo quando se sentir pronto.`
    }
  },
  {
    id: 'starter_caring-for-someone_introduce',
    space_id: 'caring-for-someone',
    sort: 2,
    en: {
      title: 'Who are you caring for? Introduce yourself',
      body: `Caregiving can make us feel invisible. Let’s start by seeing each other.

If you would like, share:

- Who you are caring for (a first name or simply “my mom,” “my partner”).
- How long you have been in this role.
- One thing about it that people outside rarely understand.

Share only what feels comfortable, and please protect the privacy of the person you care for by leaving out identifying details.

When you read someone else’s introduction, a simple “I hear you” can mean a great deal.`
    },
    es: {
      title: '¿A quién cuidas? Preséntate',
      body: `Cuidar puede hacernos sentir invisibles. Empecemos por vernos.

Si quieres, comparte:

- A quién cuidas (un nombre de pila o simplemente “mi mamá”, “mi pareja”).
- Hace cuánto tiempo estás en este rol.
- Algo de esta experiencia que las personas de afuera casi nunca entienden.

Comparte solo lo que te resulte cómodo, y por favor protege la privacidad de la persona que cuidas omitiendo datos que puedan identificarla.

Cuando leas la presentación de alguien más, un simple “te escucho” puede significar mucho.`
    },
    'pt-BR': {
      title: 'De quem você cuida? Apresente-se',
      body: `Cuidar pode fazer a gente se sentir invisível. Vamos começar nos enxergando.

Se quiser, compartilhe:

- De quem você cuida (um primeiro nome ou só “minha mãe”, “meu companheiro”).
- Há quanto tempo você está nesse papel.
- Algo dessa experiência que quem está de fora raramente entende.

Compartilhe só o que for confortável e, por favor, proteja a privacidade da pessoa de quem você cuida deixando de fora detalhes que possam identificá-la.

Quando ler a apresentação de outra pessoa, um simples “estou ouvindo você” pode significar muito.`
    }
  },
  {
    id: 'starter_caring-for-someone_refill',
    space_id: 'caring-for-someone',
    sort: 3,
    en: {
      title: 'How do you refill your own cup?',
      body: `“Take care of yourself” is easy advice to give and hard advice to follow when someone else depends on you.

So let’s make it concrete and small. What is one thing, five minutes or less, that gives you a little of yourself back? Sitting in the car before going inside. A song in the shower. A text to a friend who gets it. A few breaths with your hand on your heart.

Share yours below, and feel free to borrow from others.

If you are running on empty for weeks at a time, please consider reaching out to your doctor, a counselor, or local caregiver support services. Needing help is not a failure of love.`
    },
    es: {
      title: '¿Cómo recargas tu propia energía?',
      body: `“Cuídate” es un consejo fácil de dar y difícil de seguir cuando alguien depende de ti.

Así que hagámoslo concreto y pequeño. ¿Qué es algo, de cinco minutos o menos, que te devuelve un poco de ti? Quedarte sentado en el auto antes de entrar. Una canción en la ducha. Un mensaje a una amistad que te entiende. Algunas respiraciones con la mano en el corazón.

Comparte lo tuyo abajo y siéntete libre de tomar ideas de los demás.

Si llevas semanas funcionando sin reservas, considera hablar con tu médico, un profesional de salud mental o los servicios locales de apoyo a cuidadores. Necesitar ayuda no es una falta de amor.`
    },
    'pt-BR': {
      title: 'Como você recarrega a sua própria energia?',
      body: `“Cuide-se” é um conselho fácil de dar e difícil de seguir quando alguém depende de você.

Então vamos deixar isso concreto e pequeno. Qual é uma coisa, de cinco minutos ou menos, que devolve um pouquinho de você a você? Ficar sentado no carro antes de entrar em casa. Uma música no banho. Uma mensagem para um amigo que entende. Algumas respirações com a mão no coração.

Compartilhe a sua aqui embaixo e fique à vontade para pegar ideias dos outros.

Se você está funcionando no vazio há semanas, considere procurar seu médico, um psicólogo ou serviços locais de apoio a cuidadores. Precisar de ajuda não é falta de amor.`
    }
  },

  // ── Rest & Burnout ────────────────────────────────────────────
  {
    id: 'starter_rest-and-burnout_welcome',
    space_id: 'rest-and-burnout',
    sort: 1,
    en: {
      title: 'Welcome to Rest & Burnout (start here)',
      body: `This space is for anyone running low: worn down by work, caregiving, money stress, or simply too many seasons in a row without a real break.

Here, rest is not something you earn. It is something you need. We share honestly about exhaustion and practice giving ourselves small permissions to slow down.

${GUIDELINES.en}

Burnout can overlap with depression, anxiety, or physical health problems. If exhaustion has lasted a long time or is getting worse, please talk with a doctor or licensed counselor. Say hello below when you are ready.`
    },
    es: {
      title: 'Bienvenida a Descanso y agotamiento (empieza aquí)',
      body: `Este espacio es para cualquier persona que esté al límite: desgastada por el trabajo, los cuidados, las preocupaciones económicas o simplemente demasiadas temporadas seguidas sin un descanso real.

Aquí el descanso no es algo que se gana. Es algo que se necesita. Hablamos con honestidad sobre el cansancio y practicamos darnos pequeños permisos para bajar el ritmo.

${GUIDELINES.es}

El agotamiento puede superponerse con la depresión, la ansiedad o problemas de salud física. Si el cansancio lleva mucho tiempo o está empeorando, habla con un médico o con un profesional de salud mental. Saluda abajo cuando te sientas listo o lista.`
    },
    'pt-BR': {
      title: 'Boas-vindas ao Descanso e esgotamento (comece aqui)',
      body: `Este espaço é para quem está no limite: desgastado pelo trabalho, pelos cuidados com alguém, pelas preocupações com dinheiro ou simplesmente por muitas temporadas seguidas sem uma pausa de verdade.

Aqui, descanso não é algo que se conquista. É algo de que se precisa. Falamos com sinceridade sobre o cansaço e praticamos nos dar pequenas permissões para desacelerar.

${GUIDELINES['pt-BR']}

O esgotamento pode se misturar com depressão, ansiedade ou problemas de saúde física. Se o cansaço já dura muito tempo ou está piorando, converse com um médico ou psicólogo. Deixe um oi aqui embaixo quando se sentir pronto.`
    }
  },
  {
    id: 'starter_rest-and-burnout_what-rest-looks-like',
    space_id: 'rest-and-burnout',
    sort: 2,
    en: {
      title: 'What does rest actually look like for you?',
      body: `Rest is not one thing. For some people it is sleep. For others it is quiet, or play, or being around people who ask nothing of them, or doing something with their hands, or lying in the grass doing absolutely nothing.

Many of us were never taught what restores us, so we default to scrolling and call it rest.

Reply with one kind of rest that genuinely refills you, and one kind that looks like rest but leaves you more tired.

There are no right answers. Knowing your own recipe is the beginning of being able to offer it to yourself.`
    },
    es: {
      title: '¿Cómo se ve el descanso de verdad para ti?',
      body: `El descanso no es una sola cosa. Para algunas personas es dormir. Para otras es el silencio, el juego, estar con gente que no les pide nada, hacer algo con las manos o tirarse en el pasto sin hacer absolutamente nada.

A muchos nunca nos enseñaron qué nos restaura, así que terminamos deslizando la pantalla y llamándolo descanso.

Responde con un tipo de descanso que de verdad te recargue y otro que parece descanso pero te deja más cansado o cansada.

No hay respuestas correctas. Conocer tu propia receta es el comienzo para poder ofrecértela.`
    },
    'pt-BR': {
      title: 'Como é o descanso de verdade para você?',
      body: `Descanso não é uma coisa só. Para algumas pessoas, é dormir. Para outras, é silêncio, brincar, estar com gente que não pede nada, fazer algo com as mãos ou deitar na grama sem fazer absolutamente nada.

Muitos de nós nunca aprendemos o que nos restaura, então acabamos rolando a tela e chamando isso de descanso.

Responda com um tipo de descanso que realmente recarrega você e outro que parece descanso, mas deixa você mais cansado.

Não existem respostas certas. Conhecer a sua própria receita é o começo para conseguir oferecê-la a si mesmo.`
    }
  },
  {
    id: 'starter_rest-and-burnout_putting-down',
    space_id: 'rest-and-burnout',
    sort: 3,
    en: {
      title: 'One thing you are putting down this week',
      body: `When we are burning out, adding more self-care to the list can feel like one more job. Sometimes the kinder move is subtraction.

This week, what is one thing you can put down, even partly? A commitment you can decline. A standard you can lower. A chore that can wait. A worry you can hand to someone else for a while.

Share it below. Saying it out loud to others can make it easier to actually let it go.

If putting anything down feels impossible right now, tell us that too. Sometimes naming the weight is the first step toward sharing it.`
    },
    es: {
      title: 'Algo que vas a soltar esta semana',
      body: `Cuando estamos al borde del agotamiento, sumar más autocuidado a la lista puede sentirse como una tarea más. A veces lo más amable es restar.

Esta semana, ¿qué es algo que puedes soltar, aunque sea en parte? Un compromiso que puedes rechazar. Una exigencia que puedes bajar. Una tarea que puede esperar. Una preocupación que puedes dejar en manos de otra persona por un tiempo.

Compártelo abajo. Decirlo en voz alta ante otras personas puede hacer más fácil soltarlo de verdad.

Si ahora mismo soltar cualquier cosa te parece imposible, cuéntanoslo también. A veces nombrar el peso es el primer paso para compartirlo.`
    },
    'pt-BR': {
      title: 'Uma coisa que você vai soltar esta semana',
      body: `Quando estamos à beira do esgotamento, acrescentar mais autocuidado à lista pode parecer só mais uma tarefa. Às vezes, o gesto mais gentil é tirar algo.

Esta semana, o que você pode soltar, mesmo que em parte? Um compromisso que pode recusar. Uma exigência que pode baixar. Uma tarefa que pode esperar. Uma preocupação que pode deixar com outra pessoa por um tempo.

Compartilhe aqui embaixo. Dizer em voz alta para outras pessoas pode facilitar soltar de verdade.

Se agora soltar qualquer coisa parece impossível, conte isso também. Às vezes, nomear o peso é o primeiro passo para dividi-lo.`
    }
  },

  // ── Spiritual Questions ───────────────────────────────────────
  {
    id: 'starter_spiritual-questions_welcome',
    space_id: 'spiritual-questions',
    sort: 1,
    en: {
      title: 'Welcome to Spiritual Questions (start here)',
      body: `This is a space for meaning, faith, doubt, wonder, and the questions that keep us up at night. People here come from many traditions, from no tradition, and from somewhere in between.

What unites us is curiosity and respect. You are welcome to share what you believe and how you practice. Please do not try to convert, correct, or rank anyone else’s path.

${GUIDELINES.en}

Say hello below, and if you like, share one word for where you are spiritually right now: searching, rooted, unsure, angry, curious, at peace.`
    },
    es: {
      title: 'Bienvenida a Preguntas espirituales (empieza aquí)',
      body: `Este es un espacio para el sentido, la fe, la duda, el asombro y las preguntas que nos quitan el sueño. Aquí hay personas de muchas tradiciones, de ninguna tradición y de algún punto intermedio.

Lo que nos une es la curiosidad y el respeto. Puedes compartir lo que crees y cómo practicas. Por favor, no intentes convertir, corregir ni jerarquizar el camino de nadie.

${GUIDELINES.es}

Saluda abajo y, si quieres, comparte una palabra sobre dónde estás espiritualmente ahora: buscando, con raíces, con dudas, con enojo, con curiosidad, en paz.`
    },
    'pt-BR': {
      title: 'Boas-vindas às Perguntas espirituais (comece aqui)',
      body: `Este é um espaço para sentido, fé, dúvida, encantamento e as perguntas que tiram nosso sono. Aqui há pessoas de muitas tradições, de nenhuma tradição e de algum lugar no meio do caminho.

O que nos une é curiosidade e respeito. Você pode compartilhar no que acredita e como pratica. Por favor, não tente converter, corrigir ou colocar em ranking o caminho de ninguém.

${GUIDELINES['pt-BR']}

Deixe um oi aqui embaixo e, se quiser, compartilhe uma palavra sobre onde você está espiritualmente agora: buscando, enraizado, em dúvida, com raiva, curioso, em paz.`
    }
  },
  {
    id: 'starter_spiritual-questions_sacred',
    space_id: 'spiritual-questions',
    sort: 2,
    en: {
      title: 'Where do you find a sense of the sacred?',
      body: `For some of us, the sacred lives in prayer, scripture, or a place of worship. For others, it shows up in a forest, a piece of music, a newborn’s hand, a quiet kitchen at dawn, or the silence after a good conversation.

Where do you feel it, even briefly? What happens in you when you do?

There is no need to use religious language unless it is yours. “Something bigger than me,” “a sense of awe,” or “a moment when everything felt okay” are all welcome ways to describe it.

Reading how others experience the sacred can widen our own sense of where to look.`
    },
    es: {
      title: '¿Dónde encuentras un sentido de lo sagrado?',
      body: `Para algunas personas, lo sagrado vive en la oración, en los textos sagrados o en un lugar de culto. Para otras aparece en un bosque, en una pieza de música, en la mano de un recién nacido, en una cocina tranquila al amanecer o en el silencio después de una buena conversación.

¿Dónde lo sientes, aunque sea por un momento? ¿Qué pasa dentro de ti cuando ocurre?

No hace falta usar lenguaje religioso si no es el tuyo. “Algo más grande que yo”, “una sensación de asombro” o “un momento en que todo se sintió bien” son formas bienvenidas de describirlo.

Leer cómo otras personas viven lo sagrado puede ampliar nuestra idea de dónde buscar.`
    },
    'pt-BR': {
      title: 'Onde você encontra um sentido do sagrado?',
      body: `Para alguns de nós, o sagrado vive na oração, nos textos sagrados ou num lugar de culto. Para outros, ele aparece numa floresta, numa música, na mãozinha de um recém-nascido, numa cozinha silenciosa ao amanhecer ou no silêncio depois de uma boa conversa.

Onde você sente isso, mesmo que por um instante? O que acontece em você quando sente?

Não precisa usar linguagem religiosa se ela não for a sua. “Algo maior do que eu”, “uma sensação de encantamento” ou “um momento em que tudo pareceu bem” são jeitos bem-vindos de descrever.

Ler como outras pessoas vivem o sagrado pode ampliar nossa ideia de onde procurar.`
    }
  },
  {
    id: 'starter_spiritual-questions_carrying',
    space_id: 'spiritual-questions',
    sort: 3,
    en: {
      title: 'A question you are carrying',
      body: `Some questions do not want quick answers. *Why do good people suffer? What happens after we die? Is there a purpose to my life? Can I still believe after what happened?*

This thread is a place to set down a question you are carrying, not to have it solved, but to have it heard.

If you reply to someone else’s question, please share from your own experience (“what has helped me hold this is…”) rather than offering the answer.

If a spiritual struggle is bringing up deep distress, a trusted chaplain, faith leader, spiritual director, or licensed counselor can walk alongside you more closely than a forum can.`
    },
    es: {
      title: 'Una pregunta que llevas contigo',
      body: `Algunas preguntas no quieren respuestas rápidas. *¿Por qué sufren las buenas personas? ¿Qué pasa después de morir? ¿Tiene un propósito mi vida? ¿Puedo seguir creyendo después de lo que pasó?*

Este hilo es un lugar para dejar una pregunta que llevas contigo, no para resolverla, sino para que sea escuchada.

Si respondes a la pregunta de otra persona, comparte desde tu propia experiencia (“lo que me ha ayudado a sostener esto es…”) en lugar de ofrecer la respuesta.

Si una lucha espiritual te está causando un malestar profundo, un capellán, un líder de tu comunidad de fe, un acompañante espiritual o un profesional de salud mental con licencia pueden acompañarte más de cerca que un foro.`
    },
    'pt-BR': {
      title: 'Uma pergunta que você carrega',
      body: `Algumas perguntas não querem respostas rápidas. *Por que pessoas boas sofrem? O que acontece depois que morremos? Minha vida tem um propósito? Ainda consigo acreditar depois do que aconteceu?*

Este tópico é um lugar para pousar uma pergunta que você carrega, não para resolvê-la, mas para que ela seja ouvida.

Se responder à pergunta de outra pessoa, compartilhe a partir da sua experiência (“o que tem me ajudado a sustentar isso é…”) em vez de oferecer a resposta.

Se uma luta espiritual estiver trazendo sofrimento profundo, um capelão, uma liderança da sua comunidade de fé, um acompanhante espiritual ou um psicólogo habilitado podem caminhar ao seu lado mais de perto do que um fórum.`
    }
  },

  // ── Small Practices ───────────────────────────────────────────
  {
    id: 'starter_small-practices_welcome',
    space_id: 'small-practices',
    sort: 1,
    en: {
      title: 'Welcome to Small Practices (start here)',
      body: `Not every helpful practice comes from a library. Many of the things that keep us steady are tiny, homemade rituals: the first sip of coffee on the porch, a certain playlist on the drive home, watering plants, a two-minute tidy before bed.

This space is for swapping those. Share what works for you, and borrow freely from others.

${GUIDELINES.en}

One note: please do not recommend supplements, medications, or products here. Stick to things anyone could try with what they already have. Say hello below with one small ritual that is part of your day.`
    },
    es: {
      title: 'Bienvenida a Pequeñas prácticas (empieza aquí)',
      body: `No todas las prácticas útiles vienen de una biblioteca. Muchas de las cosas que nos sostienen son rituales diminutos y caseros: el primer sorbo de café en el patio, cierta lista de canciones de regreso a casa, regar las plantas, ordenar dos minutos antes de dormir.

Este espacio es para intercambiarlos. Comparte lo que te funciona y toma prestado libremente de los demás.

${GUIDELINES.es}

Una nota: por favor, no recomiendes suplementos, medicamentos ni productos aquí. Quedémonos con cosas que cualquiera pueda probar con lo que ya tiene. Saluda abajo con un pequeño ritual que forme parte de tu día.`
    },
    'pt-BR': {
      title: 'Boas-vindas às Pequenas práticas (comece aqui)',
      body: `Nem toda prática que ajuda vem de uma biblioteca. Muitas das coisas que nos mantêm firmes são rituais pequenos e caseiros: o primeiro gole de café na varanda, aquela playlist na volta para casa, regar as plantas, uma arrumadinha de dois minutos antes de dormir.

Este espaço é para trocar esses rituais. Compartilhe o que funciona para você e pegue emprestado dos outros à vontade.

${GUIDELINES['pt-BR']}

Um lembrete: por favor, não recomende suplementos, medicamentos ou produtos aqui. Vamos ficar com coisas que qualquer pessoa possa experimentar com o que já tem. Deixe um oi aqui embaixo com um pequeno ritual que faz parte do seu dia.`
    }
  },
  {
    id: 'starter_small-practices_tiniest',
    space_id: 'small-practices',
    sort: 2,
    en: {
      title: 'Your tiniest daily ritual',
      body: `What is the smallest thing you do each day that makes it a little better? Think under two minutes.

Some examples from around the team:

- Opening a window first thing, even in winter, for three breaths of fresh air.
- Putting the phone in another room during the first cup of tea.
- Saying “thank you, feet” when taking off shoes at night.
- Stepping outside to look at the sky before starting work.

Reply with yours. The sillier and more specific, the better. Small practices are easy to start, easy to keep, and easy to share.`
    },
    es: {
      title: 'Tu ritual diario más pequeño',
      body: `¿Qué es lo más pequeño que haces cada día y que lo mejora un poco? Piensa en menos de dos minutos.

Algunos ejemplos del equipo:

- Abrir una ventana apenas te levantas, incluso con frío, para respirar tres veces aire fresco.
- Dejar el teléfono en otra habitación durante la primera taza de té.
- Decir “gracias, pies” al quitarte los zapatos por la noche.
- Salir a mirar el cielo antes de empezar a trabajar.

Responde con el tuyo. Cuanto más curioso y específico, mejor. Las pequeñas prácticas son fáciles de empezar, fáciles de mantener y fáciles de compartir.`
    },
    'pt-BR': {
      title: 'Seu menor ritual diário',
      body: `Qual é a menor coisa que você faz todo dia e que deixa o dia um pouco melhor? Pense em menos de dois minutos.

Alguns exemplos da equipe:

- Abrir a janela logo ao acordar, mesmo no frio, para três respirações de ar fresco.
- Deixar o celular em outro cômodo durante a primeira xícara de chá.
- Dizer “obrigado, pés” ao tirar os sapatos à noite.
- Sair para olhar o céu antes de começar a trabalhar.

Responda com o seu. Quanto mais curioso e específico, melhor. Pequenas práticas são fáceis de começar, fáceis de manter e fáceis de compartilhar.`
    }
  },
  {
    id: 'starter_small-practices_learned-from',
    space_id: 'small-practices',
    sort: 3,
    en: {
      title: 'A small practice you learned from someone',
      body: `Many of our best habits are inherited. A grandmother who always hummed while cooking. A friend who writes three good things on a sticky note. A coach who taught you to shake out your hands before something scary.

Share a small practice you picked up from someone else, and, if you like, a word about who they were to you.

This thread is a way of passing on quiet wisdom, and of honoring the people who shaped how we care for ourselves.

If the person you learned from is no longer here, you are welcome to mention that too. Their practice lives on in yours.`
    },
    es: {
      title: 'Una pequeña práctica que aprendiste de alguien',
      body: `Muchos de nuestros mejores hábitos son heredados. Una abuela que siempre tarareaba mientras cocinaba. Una amiga que anota tres cosas buenas en un papelito. Un entrenador que te enseñó a sacudir las manos antes de algo que te daba miedo.

Comparte una pequeña práctica que aprendiste de otra persona y, si quieres, unas palabras sobre quién fue para ti.

Este hilo es una forma de transmitir sabiduría silenciosa y de honrar a quienes dieron forma a la manera en que nos cuidamos.

Si la persona de quien aprendiste ya no está, también puedes mencionarlo. Su práctica sigue viva en la tuya.`
    },
    'pt-BR': {
      title: 'Uma pequena prática que você aprendeu com alguém',
      body: `Muitos dos nossos melhores hábitos são herdados. Uma avó que sempre cantarolava enquanto cozinhava. Uma amiga que anota três coisas boas num post-it. Um treinador que ensinou você a sacudir as mãos antes de algo assustador.

Compartilhe uma pequena prática que você aprendeu com outra pessoa e, se quiser, algumas palavras sobre quem ela foi para você.

Este tópico é um jeito de passar adiante uma sabedoria silenciosa e de honrar as pessoas que moldaram a forma como cuidamos de nós.

Se a pessoa com quem você aprendeu já não está aqui, você pode mencionar isso também. A prática dela continua viva na sua.`
    }
  }
];
