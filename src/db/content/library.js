// src/db/content/library.js
// Additional library content for KindWell: 12 Practices, 8 Remedies,
// 4 Reiki / contemplative articles, 3 monthly member wellness letters.
// Shapes match src/db/content-data.js (practices, remedies) and
// src/db/seed.js sections 4 (reikiArticles) and 11 (letters).

export const EXTRA_PRACTICES = [
  {
    id: 'soles',
    category: 'Grounding',
    duration: 2,
    slug: 'feet-on-the-floor',
    is_premium: 0,
    en: {
      title: 'Feet on the floor',
      subtitle: 'Grounding Through the Soles',
      description: 'A 2-minute anchor that uses the simple weight of your feet to bring you back to now.',
      steps: JSON.stringify([
        'Place both feet flat on the floor, shoes on or off, wherever you are.',
        'Press your heels down gently, then release. Notice the floor pressing back.',
        'Rock your weight slowly from toes to heels three times.',
        'Let your attention rest in the soles of your feet for five slow breaths.',
        'Say quietly to yourself: “The ground is holding me right now.”'
      ]),
      why_it_helps: 'Gives a busy mind one concrete, steady sensation to rest on, helping the body register support and stability.'
    },
    es: {
      title: 'Los pies en el suelo',
      subtitle: 'Enraizamiento a través de las plantas de los pies',
      description: 'Un ancla de 2 minutos que usa el peso sencillo de tus pies para regresar al ahora.',
      steps: JSON.stringify([
        'Apoya ambos pies en el suelo, con o sin zapatos, donde sea que estés.',
        'Presiona suavemente los talones hacia abajo y luego suelta. Nota cómo el suelo te sostiene.',
        'Balancea el peso despacio de las puntas a los talones tres veces.',
        'Deja que tu atención descanse en las plantas de los pies durante cinco respiraciones lentas.',
        'Dite en voz baja: “El suelo me sostiene en este momento.”'
      ]),
      why_it_helps: 'Ofrece a una mente acelerada una sensación concreta y estable donde apoyarse, ayudando al cuerpo a reconocer sostén y firmeza.'
    },
    'pt-BR': {
      title: 'Pés no chão',
      subtitle: 'Aterramento pelas solas dos pés',
      description: 'Uma âncora de 2 minutos que usa o simples peso dos pés para trazer você de volta ao agora.',
      steps: JSON.stringify([
        'Apoie os dois pés no chão, de sapato ou descalço, onde você estiver.',
        'Pressione os calcanhares suavemente e depois solte. Perceba o chão devolvendo o apoio.',
        'Balance o peso devagar das pontas dos pés para os calcanhares três vezes.',
        'Deixe a atenção repousar nas solas dos pés por cinco respirações lentas.',
        'Diga baixinho para si: “O chão está me sustentando agora.”'
      ]),
      why_it_helps: 'Oferece à mente agitada uma sensação concreta e estável para repousar, ajudando o corpo a reconhecer apoio e firmeza.'
    }
  },
  {
    id: 'look-around',
    category: 'Grounding',
    duration: 3,
    slug: 'let-your-eyes-wander',
    is_premium: 0,
    en: {
      title: 'Let your eyes wander',
      subtitle: 'Slow Visual Orienting',
      description: 'A 3-minute practice of looking around the room slowly, the way a settled animal surveys a safe place.',
      steps: JSON.stringify([
        'Let your head and neck turn slowly, as if you had all the time in the world.',
        'Allow your eyes to land on whatever draws them: a color, a shape, a patch of light.',
        'Stay with that one thing for a breath or two, simply noticing it.',
        'Move on when you are ready, and let your gaze find the next thing.',
        'Notice any small shift: a sigh, a swallow, shoulders lowering. Let it happen.'
      ]),
      why_it_helps: 'Unhurried looking tells the nervous system there is time to explore, which is a signal of safety rather than threat.'
    },
    es: {
      title: 'Deja que tu mirada pasee',
      subtitle: 'Orientación visual lenta',
      description: 'Una práctica de 3 minutos para recorrer el lugar con la mirada, sin prisa, como quien observa un espacio seguro.',
      steps: JSON.stringify([
        'Permite que la cabeza y el cuello giren despacio, como si tuvieras todo el tiempo del mundo.',
        'Deja que los ojos se posen en lo que les llame la atención: un color, una forma, un rayo de luz.',
        'Quédate con eso durante una o dos respiraciones, solo observándolo.',
        'Cuando estés listo o lista, deja que la mirada busque lo siguiente.',
        'Nota cualquier cambio pequeño: un suspiro, tragar saliva, los hombros que bajan. Permítelo.'
      ]),
      why_it_helps: 'Mirar sin prisa le indica al sistema nervioso que hay tiempo para explorar, una señal de seguridad y no de amenaza.'
    },
    'pt-BR': {
      title: 'Deixe o olhar passear',
      subtitle: 'Orientação visual lenta',
      description: 'Uma prática de 3 minutos para percorrer o ambiente com o olhar, sem pressa, como quem observa um lugar seguro.',
      steps: JSON.stringify([
        'Deixe a cabeça e o pescoço girarem devagar, como se você tivesse todo o tempo do mundo.',
        'Permita que os olhos pousem no que chamar a atenção: uma cor, uma forma, um pouco de luz.',
        'Fique com essa coisa por uma ou duas respirações, apenas observando.',
        'Quando quiser, deixe o olhar encontrar a próxima.',
        'Perceba qualquer pequena mudança: um suspiro, engolir, os ombros descendo. Deixe acontecer.'
      ]),
      why_it_helps: 'Olhar sem pressa sinaliza ao sistema nervoso que há tempo para explorar, um sinal de segurança e não de ameaça.'
    }
  },
  {
    id: 'window',
    category: 'Grounding',
    duration: 7,
    slug: 'know-your-window',
    is_premium: 1,
    en: {
      title: 'Know your window',
      subtitle: 'Mapping Your Window of Tolerance',
      description: 'A reflective check-in to notice whether you are inside your window, revved up above it, or shut down below it.',
      steps: JSON.stringify([
        'Picture a window with a top edge and a bottom edge. Inside it, you can think, feel, and respond.',
        'Above the top edge is “too much”: racing, irritable, on edge. Write two signs that tell you you are there.',
        'Below the bottom edge is “too little”: numb, foggy, far away. Write two signs for that too.',
        'Now ask: where am I right now? Above, inside, or below? There is no wrong answer.',
        'If above, try a longer exhale or feet on the floor. If below, try gentle movement, cool water, or naming five colors.',
        'Note one thing that tends to widen your window over time, such as sleep, food, or a trusted voice.'
      ]),
      why_it_helps: 'The window of tolerance, a framework described by Dan Siegel, gives you a map instead of a judgment: you are not failing, you are simply outside your window and can take steps back in. If you often find yourself far outside it, a trauma-informed therapist can help.'
    },
    es: {
      title: 'Conoce tu ventana',
      subtitle: 'Explorar tu ventana de tolerancia',
      description: 'Una revisión reflexiva para notar si estás dentro de tu ventana, acelerado por encima de ella o apagado por debajo.',
      steps: JSON.stringify([
        'Imagina una ventana con un borde superior y uno inferior. Dentro de ella puedes pensar, sentir y responder.',
        'Por encima del borde está el “demasiado”: aceleración, irritabilidad, alerta. Escribe dos señales que te indiquen que estás ahí.',
        'Por debajo está el “muy poco”: entumecimiento, niebla, desconexión. Escribe también dos señales.',
        'Pregúntate: ¿dónde estoy ahora? ¿Arriba, dentro o abajo? No hay respuestas equivocadas.',
        'Si estás arriba, prueba una exhalación larga o los pies en el suelo. Si estás abajo, prueba moverte suavemente, agua fresca o nombrar cinco colores.',
        'Anota algo que suele ampliar tu ventana con el tiempo, como dormir, comer bien o una voz de confianza.'
      ]),
      why_it_helps: 'La ventana de tolerancia, un marco descrito por Dan Siegel, te ofrece un mapa en lugar de un juicio: no estás fallando, simplemente estás fuera de tu ventana y puedes dar pasos para volver. Si te encuentras fuera de ella con frecuencia, una terapeuta con enfoque en trauma puede acompañarte.'
    },
    'pt-BR': {
      title: 'Conheça sua janela',
      subtitle: 'Mapeando sua janela de tolerância',
      description: 'Um momento de reflexão para perceber se você está dentro da sua janela, acelerado acima dela ou desligado abaixo dela.',
      steps: JSON.stringify([
        'Imagine uma janela com uma borda superior e uma inferior. Dentro dela, você consegue pensar, sentir e responder.',
        'Acima da borda está o “demais”: agitação, irritação, tensão. Anote dois sinais que mostram que você está ali.',
        'Abaixo da borda está o “de menos”: dormência, névoa, distância. Anote dois sinais também.',
        'Pergunte-se: onde estou agora? Acima, dentro ou abaixo? Não existe resposta errada.',
        'Se estiver acima, experimente uma expiração longa ou os pés no chão. Se estiver abaixo, experimente se mexer com suavidade, água fresca ou nomear cinco cores.',
        'Anote algo que costuma ampliar sua janela com o tempo, como sono, alimentação ou uma voz de confiança.'
      ]),
      why_it_helps: 'A janela de tolerância, um conceito descrito por Dan Siegel, oferece um mapa em vez de um julgamento: você não está falhando, apenas saiu da sua janela e pode dar passos para voltar. Se isso acontece com frequência, um terapeuta com abordagem informada pelo trauma pode ajudar.'
    }
  },
  {
    id: 'wave',
    category: 'Emotions',
    duration: 5,
    slug: 'ride-the-wave',
    is_premium: 0,
    en: {
      title: 'Ride the wave',
      subtitle: 'Letting a Feeling Rise and Fall',
      description: 'A 5-minute practice for staying with a strong emotion long enough to notice that it moves.',
      steps: JSON.stringify([
        'Name the feeling in one or two words, as simply as you can.',
        'Find where it lives in your body: chest, throat, stomach, hands.',
        'Picture it as a wave. Notice whether it is building, cresting, or easing right now.',
        'Breathe slowly and watch the sensation without trying to push it away or act on it.',
        'Every minute or so, check again: has it changed shape, size, or temperature?',
        'When it softens even slightly, thank yourself for staying.'
      ]),
      why_it_helps: 'Emotions tend to peak and pass when we stop fighting them. Practicing this builds trust that you can feel something intensely and still be okay.'
    },
    es: {
      title: 'Surfear la ola',
      subtitle: 'Dejar que una emoción suba y baje',
      description: 'Una práctica de 5 minutos para quedarte con una emoción intensa el tiempo suficiente para notar que se mueve.',
      steps: JSON.stringify([
        'Nombra la emoción con una o dos palabras, de la forma más sencilla posible.',
        'Encuentra dónde vive en tu cuerpo: pecho, garganta, estómago, manos.',
        'Imagínala como una ola. Nota si ahora está creciendo, en su punto más alto o bajando.',
        'Respira despacio y observa la sensación sin intentar apartarla ni actuar desde ella.',
        'Cada minuto, vuelve a revisar: ¿cambió de forma, tamaño o temperatura?',
        'Cuando se suavice aunque sea un poco, agradécete por haberte quedado.'
      ]),
      why_it_helps: 'Las emociones suelen alcanzar su punto máximo y luego pasar cuando dejamos de pelear con ellas. Practicarlo construye la confianza de que puedes sentir algo con intensidad y seguir a salvo.'
    },
    'pt-BR': {
      title: 'Surfar a onda',
      subtitle: 'Deixar um sentimento subir e descer',
      description: 'Uma prática de 5 minutos para ficar com uma emoção forte tempo suficiente para perceber que ela se move.',
      steps: JSON.stringify([
        'Dê nome ao sentimento em uma ou duas palavras, do jeito mais simples possível.',
        'Encontre onde ele mora no corpo: peito, garganta, estômago, mãos.',
        'Imagine-o como uma onda. Perceba se agora ela está crescendo, no pico ou diminuindo.',
        'Respire devagar e observe a sensação sem tentar afastá-la nem agir por impulso.',
        'A cada minuto, confira de novo: ela mudou de forma, tamanho ou temperatura?',
        'Quando suavizar, mesmo que um pouco, agradeça a si mesmo por ter ficado.'
      ]),
      why_it_helps: 'As emoções costumam atingir o pico e passar quando paramos de lutar contra elas. Praticar isso cria a confiança de que você pode sentir algo intenso e continuar bem.'
    }
  },
  {
    id: 'accept',
    category: 'Emotions',
    duration: 7,
    slug: 'this-is-what-is',
    is_premium: 1,
    en: {
      title: 'This is what is',
      subtitle: 'A Practice in Radical Acceptance',
      description: 'A gentle way to stop arguing with a reality you cannot change today, so your energy can go where it helps.',
      steps: JSON.stringify([
        'Name the situation you keep pushing against, in one plain sentence.',
        'Notice the “it shouldn’t be this way” thoughts, and the tightness that comes with them.',
        'Soften your hands, palms open or upward, and let your face relax.',
        'Say slowly: “This is what is happening. I don’t have to like it to accept that it is real.”',
        'Notice any grief or anger underneath. Let it be there without needing to fix it.',
        'Ask: “Given that this is real, what is one thing within my reach today?”'
      ]),
      why_it_helps: 'Radical acceptance, a skill from Marsha Linehan’s Dialectical Behavior Therapy (DBT), is not approval or giving up. It reduces the extra suffering that comes from fighting what already is, and frees attention for wise action.'
    },
    es: {
      title: 'Esto es lo que es',
      subtitle: 'Una práctica de aceptación radical',
      description: 'Una forma amable de dejar de discutir con una realidad que hoy no puedes cambiar, para que tu energía vaya adonde sí ayuda.',
      steps: JSON.stringify([
        'Nombra en una frase sencilla la situación contra la que sigues empujando.',
        'Observa los pensamientos de “no debería ser así” y la tensión que los acompaña.',
        'Suaviza las manos, con las palmas abiertas o hacia arriba, y deja que el rostro se relaje.',
        'Di despacio: “Esto es lo que está pasando. No necesito que me guste para aceptar que es real.”',
        'Nota si hay tristeza o enojo debajo. Permite que estén ahí sin tener que resolverlos.',
        'Pregúntate: “Si esto es real, ¿qué es algo que está a mi alcance hoy?”'
      ]),
      why_it_helps: 'La aceptación radical, una habilidad de la Terapia Dialéctica Conductual (DBT) de Marsha Linehan, no es aprobar ni rendirse. Reduce el sufrimiento adicional de pelear con lo que ya es y libera atención para actuar con sabiduría.'
    },
    'pt-BR': {
      title: 'Isto é o que é',
      subtitle: 'Uma prática de aceitação radical',
      description: 'Um jeito gentil de parar de brigar com uma realidade que você não pode mudar hoje, para que sua energia vá para onde ajuda.',
      steps: JSON.stringify([
        'Dê nome, em uma frase simples, à situação contra a qual você continua empurrando.',
        'Perceba os pensamentos de “não deveria ser assim” e a tensão que vem junto.',
        'Suavize as mãos, com as palmas abertas ou para cima, e deixe o rosto relaxar.',
        'Diga devagar: “Isto é o que está acontecendo. Não preciso gostar para aceitar que é real.”',
        'Perceba se há tristeza ou raiva por baixo. Deixe que estejam ali sem precisar resolver.',
        'Pergunte-se: “Se isto é real, o que está ao meu alcance hoje?”'
      ]),
      why_it_helps: 'A aceitação radical, uma habilidade da Terapia Comportamental Dialética (DBT) de Marsha Linehan, não é aprovação nem desistência. Ela reduz o sofrimento extra de lutar contra o que já é e libera atenção para uma ação sábia.'
    }
  },
  {
    id: 'body-map',
    category: 'Emotions',
    duration: 5,
    slug: 'where-does-it-live',
    is_premium: 1,
    en: {
      title: 'Where does it live?',
      subtitle: 'Mapping Emotion in the Body',
      description: 'A curious, unhurried scan that helps you notice feelings as physical sensations before they become stories.',
      steps: JSON.stringify([
        'Sit comfortably and take three ordinary breaths.',
        'Move your attention slowly from the top of your head down to your feet.',
        'Pause wherever you notice something: heat, pressure, flutter, heaviness, emptiness.',
        'Describe it with texture words instead of feeling words, such as “tight and warm” or “hollow and cool.”',
        'Ask the sensation gently: “If you had a name, what would it be?” Accept whatever comes, or nothing.',
        'Rest a hand on that area for a few breaths before you finish.'
      ]),
      why_it_helps: 'Emotions often show up in the body before we have words for them. Noticing them as sensations builds emotional awareness and makes them feel more workable.'
    },
    es: {
      title: '¿Dónde vive esto?',
      subtitle: 'Mapear la emoción en el cuerpo',
      description: 'Un recorrido curioso y sin prisa para notar las emociones como sensaciones físicas antes de que se conviertan en historias.',
      steps: JSON.stringify([
        'Siéntate con comodidad y haz tres respiraciones normales.',
        'Lleva la atención despacio desde la coronilla hasta los pies.',
        'Detente donde notes algo: calor, presión, cosquilleo, pesadez, vacío.',
        'Descríbelo con palabras de textura en lugar de palabras de emoción, como “apretado y tibio” o “hueco y fresco”.',
        'Pregúntale con suavidad a la sensación: “Si tuvieras un nombre, ¿cuál sería?” Acepta lo que llegue, o nada.',
        'Apoya una mano en esa zona durante algunas respiraciones antes de terminar.'
      ]),
      why_it_helps: 'Las emociones suelen aparecer en el cuerpo antes de que tengamos palabras para ellas. Notarlas como sensaciones desarrolla la conciencia emocional y las vuelve más manejables.'
    },
    'pt-BR': {
      title: 'Onde isso mora?',
      subtitle: 'Mapeando a emoção no corpo',
      description: 'Uma varredura curiosa e sem pressa para perceber os sentimentos como sensações físicas antes que virem histórias.',
      steps: JSON.stringify([
        'Sente-se confortavelmente e faça três respirações comuns.',
        'Leve a atenção devagar do topo da cabeça até os pés.',
        'Pare onde perceber algo: calor, pressão, formigamento, peso, vazio.',
        'Descreva com palavras de textura em vez de palavras de emoção, como “apertado e morno” ou “oco e fresco”.',
        'Pergunte com gentileza à sensação: “Se você tivesse um nome, qual seria?” Aceite o que vier, ou nada.',
        'Descanse uma mão sobre essa região por algumas respirações antes de terminar.'
      ]),
      why_it_helps: 'As emoções muitas vezes aparecem no corpo antes de termos palavras para elas. Percebê-las como sensações amplia a consciência emocional e as torna mais manejáveis.'
    }
  },
  {
    id: 'hand-heart',
    category: 'Self-Compassion',
    duration: 2,
    slug: 'a-hand-on-the-heart',
    is_premium: 0,
    en: {
      title: 'A hand on the heart',
      subtitle: 'Soothing Touch',
      description: 'A 2-minute gesture of warmth you can offer yourself anywhere, even in a meeting or on a bus.',
      steps: JSON.stringify([
        'Place one hand over your heart, or wherever feels comforting: cheek, arm, belly.',
        'Feel the warmth and gentle pressure of your own hand.',
        'Breathe a little more slowly, letting your chest rise under your palm.',
        'If it helps, add a quiet phrase: “I’m here. This is hard. I’m with you.”',
        'Stay for as long as you like, then let your hand rest back in your lap.'
      ]),
      why_it_helps: 'Warm, gentle touch is one of the simplest ways to signal care to the body. It pairs kindness with a physical sensation, which can make self-compassion feel more real than words alone.'
    },
    es: {
      title: 'Una mano en el corazón',
      subtitle: 'Contacto que calma',
      description: 'Un gesto de calidez de 2 minutos que puedes ofrecerte en cualquier lugar, incluso en una reunión o en el autobús.',
      steps: JSON.stringify([
        'Coloca una mano sobre el corazón, o donde te resulte reconfortante: la mejilla, el brazo, el vientre.',
        'Siente el calor y la presión suave de tu propia mano.',
        'Respira un poco más lento, dejando que el pecho se eleve bajo tu palma.',
        'Si te ayuda, añade una frase en silencio: “Estoy aquí. Esto es difícil. Te acompaño.”',
        'Quédate el tiempo que quieras y luego deja que la mano descanse en tu regazo.'
      ]),
      why_it_helps: 'El contacto cálido y suave es una de las formas más simples de transmitirle cuidado al cuerpo. Une la amabilidad con una sensación física, lo que puede hacer que la autocompasión se sienta más real que solo con palabras.'
    },
    'pt-BR': {
      title: 'Uma mão no coração',
      subtitle: 'Toque que acalma',
      description: 'Um gesto de carinho de 2 minutos que você pode oferecer a si mesmo em qualquer lugar, até numa reunião ou no ônibus.',
      steps: JSON.stringify([
        'Coloque uma mão sobre o coração, ou onde for reconfortante: rosto, braço, barriga.',
        'Sinta o calor e a pressão suave da sua própria mão.',
        'Respire um pouco mais devagar, deixando o peito subir sob a palma.',
        'Se ajudar, acrescente uma frase em silêncio: “Estou aqui. Isso é difícil. Estou com você.”',
        'Fique o tempo que quiser e depois deixe a mão descansar no colo.'
      ]),
      why_it_helps: 'O toque morno e suave é uma das formas mais simples de sinalizar cuidado ao corpo. Ele une gentileza a uma sensação física, o que pode tornar a autocompaixão mais real do que só palavras.'
    }
  },
  {
    id: 'kind-letter',
    category: 'Self-Compassion',
    duration: 15,
    slug: 'a-letter-from-the-kind-side',
    is_premium: 1,
    en: {
      title: 'A letter from the kind side',
      subtitle: 'Self-Compassionate Letter Writing',
      description: 'A 15-minute writing practice where the wisest, warmest part of you writes to the part that is struggling.',
      steps: JSON.stringify([
        'Choose one thing you have been hard on yourself about lately.',
        'Imagine someone who loves you without conditions: a friend, a grandparent, a kind teacher, or a wise version of you.',
        'Write a short letter from their point of view, beginning with “Dear…” and your name.',
        'Let the letter acknowledge how hard this has been, and remind you that struggling is part of being human.',
        'Include one gentle suggestion for the week ahead, offered as care, not criticism.',
        'Put the letter away and read it again tomorrow, slowly.'
      ]),
      why_it_helps: 'Writing from a kinder perspective draws on all three components of self-compassion described by Kristin Neff: mindfulness, common humanity, and self-kindness. It gives the inner critic some company.'
    },
    es: {
      title: 'Una carta desde la parte amable',
      subtitle: 'Escritura compasiva hacia uno mismo',
      description: 'Una práctica de escritura de 15 minutos en la que tu parte más sabia y cálida le escribe a la parte que está sufriendo.',
      steps: JSON.stringify([
        'Elige algo por lo que te hayas juzgado con dureza últimamente.',
        'Imagina a alguien que te quiere sin condiciones: una amistad, una abuela, un maestro amable o una versión sabia de ti.',
        'Escribe una carta breve desde su mirada, comenzando con “Querido/a…” y tu nombre.',
        'Deja que la carta reconozca lo difícil que ha sido y te recuerde que tener dificultades es parte de ser humano.',
        'Incluye una sugerencia amable para la semana, ofrecida como cuidado y no como crítica.',
        'Guarda la carta y vuelve a leerla mañana, con calma.'
      ]),
      why_it_helps: 'Escribir desde una mirada más amable reúne los tres componentes de la autocompasión descritos por Kristin Neff: atención plena, humanidad compartida y amabilidad con uno mismo. Le da compañía a la voz crítica.'
    },
    'pt-BR': {
      title: 'Uma carta do lado gentil',
      subtitle: 'Escrita autocompassiva',
      description: 'Uma prática de escrita de 15 minutos em que a parte mais sábia e calorosa de você escreve para a parte que está sofrendo.',
      steps: JSON.stringify([
        'Escolha algo pelo qual você tem se cobrado duramente nos últimos tempos.',
        'Imagine alguém que ama você sem condições: um amigo, uma avó, um professor gentil ou uma versão sábia de você.',
        'Escreva uma carta curta a partir do olhar dessa pessoa, começando com “Querido/a…” e seu nome.',
        'Deixe a carta reconhecer o quanto isso tem sido difícil e lembrar que ter dificuldades faz parte de ser humano.',
        'Inclua uma sugestão gentil para a semana, oferecida como cuidado e não como crítica.',
        'Guarde a carta e leia de novo amanhã, com calma.'
      ]),
      why_it_helps: 'Escrever a partir de um olhar mais gentil reúne os três componentes da autocompaixão descritos por Kristin Neff: atenção plena, humanidade compartilhada e gentileza consigo. Isso faz companhia à voz crítica.'
    }
  },
  {
    id: 'nvc-request',
    category: 'Relationships',
    duration: 10,
    slug: 'observe-feel-need-request',
    is_premium: 1,
    en: {
      title: 'Observe, feel, need, request',
      subtitle: 'Preparing a Nonviolent Communication Message',
      description: 'A 10-minute way to prepare for a difficult conversation so you can speak honestly without blame.',
      steps: JSON.stringify([
        'Observation: write what happened as a camera would record it, without interpretation. (“When the dishes stayed in the sink for three days…”)',
        'Feeling: name what you felt, using feeling words rather than judgments. (“…I felt tired and discouraged…”)',
        'Need: name the underlying need or value. (“…because I need shared care for our home…”)',
        'Request: ask for one specific, doable action, open to a “no.” (“…would you be willing to wash them tonight?”)',
        'Read it aloud once. Soften any word that sounds like a verdict on the other person.',
        'Before the conversation, take three slow breaths and remember you are hoping for connection, not victory.'
      ]),
      why_it_helps: 'Nonviolent Communication, developed by Marshall Rosenberg, separates what happened from our stories about it. This makes it easier for the other person to hear you and less likely that the conversation turns into defense and attack.'
    },
    es: {
      title: 'Observar, sentir, necesitar, pedir',
      subtitle: 'Preparar un mensaje de Comunicación No Violenta',
      description: 'Una forma de 10 minutos para prepararte para una conversación difícil y hablar con honestidad sin culpar.',
      steps: JSON.stringify([
        'Observación: escribe lo que pasó como lo registraría una cámara, sin interpretaciones. (“Cuando los platos se quedaron en el fregadero tres días…”)',
        'Sentimiento: nombra lo que sentiste con palabras de emoción, no con juicios. (“…me sentí cansada y desanimada…”)',
        'Necesidad: nombra la necesidad o el valor de fondo. (“…porque necesito que cuidemos juntos la casa…”)',
        'Petición: pide una acción concreta y posible, abierta a un “no”. (“…¿estarías dispuesto a lavarlos esta noche?”)',
        'Léelo en voz alta una vez. Suaviza cualquier palabra que suene a veredicto sobre la otra persona.',
        'Antes de conversar, respira tres veces despacio y recuerda que buscas conexión, no ganar.'
      ]),
      why_it_helps: 'La Comunicación No Violenta, desarrollada por Marshall Rosenberg, separa lo que ocurrió de las historias que nos contamos. Así es más fácil que la otra persona te escuche y menos probable que la conversación se convierta en ataque y defensa.'
    },
    'pt-BR': {
      title: 'Observar, sentir, precisar, pedir',
      subtitle: 'Preparando uma mensagem de Comunicação Não Violenta',
      description: 'Um jeito de 10 minutos para se preparar para uma conversa difícil e falar com honestidade sem culpar.',
      steps: JSON.stringify([
        'Observação: escreva o que aconteceu como uma câmera registraria, sem interpretação. (“Quando a louça ficou na pia por três dias…”)',
        'Sentimento: diga o que você sentiu com palavras de emoção, não de julgamento. (“…me senti cansada e desanimada…”)',
        'Necessidade: nomeie a necessidade ou o valor por trás. (“…porque preciso que a gente cuide da casa juntos…”)',
        'Pedido: peça uma ação específica e possível, aberta a um “não”. (“…você toparia lavar hoje à noite?”)',
        'Leia em voz alta uma vez. Suavize qualquer palavra que soe como um veredito sobre a outra pessoa.',
        'Antes da conversa, respire devagar três vezes e lembre que você busca conexão, não vitória.'
      ]),
      why_it_helps: 'A Comunicação Não Violenta, desenvolvida por Marshall Rosenberg, separa o que aconteceu das histórias que contamos sobre isso. Assim fica mais fácil a outra pessoa ouvir você e menos provável que a conversa vire ataque e defesa.'
    }
  },
  {
    id: 'repair',
    category: 'Relationships',
    duration: 7,
    slug: 'a-small-repair',
    is_premium: 1,
    en: {
      title: 'A small repair',
      subtitle: 'Returning After a Rupture',
      description: 'A short practice for reaching back toward someone after a sharp word, a missed moment, or a quiet distance.',
      steps: JSON.stringify([
        'Wait until your body has settled enough that you can speak slowly.',
        'Name your part only, in one sentence, without explaining or defending. (“I was short with you this morning.”)',
        'Acknowledge the likely impact. (“That probably felt dismissive.”)',
        'Offer what you wish you had done, or what you will try next time.',
        'Ask an open question: “Is there anything you’d like me to know?” Then listen without correcting.',
        'Let the repair be enough, even if it feels unfinished. Connection often returns in stages.'
      ]),
      why_it_helps: 'Every close relationship has ruptures. What tends to build trust is not avoiding them but returning to repair. Small, prompt repairs keep minor hurts from hardening into distance.'
    },
    es: {
      title: 'Una pequeña reparación',
      subtitle: 'Volver después de una ruptura',
      description: 'Una práctica breve para acercarte de nuevo a alguien después de una palabra dura, un momento perdido o una distancia silenciosa.',
      steps: JSON.stringify([
        'Espera a que tu cuerpo se calme lo suficiente para hablar despacio.',
        'Nombra solo tu parte, en una frase, sin explicar ni defenderte. (“Esta mañana te hablé con brusquedad.”)',
        'Reconoce el posible impacto. (“Seguramente te hizo sentir que no me importabas.”)',
        'Ofrece lo que te hubiera gustado hacer, o lo que intentarás la próxima vez.',
        'Haz una pregunta abierta: “¿Hay algo que quieras que sepa?” Luego escucha sin corregir.',
        'Deja que la reparación sea suficiente, aunque se sienta incompleta. La conexión suele volver por etapas.'
      ]),
      why_it_helps: 'Toda relación cercana tiene rupturas. Lo que suele construir confianza no es evitarlas, sino volver a repararlas. Las reparaciones pequeñas y oportunas evitan que las heridas menores se conviertan en distancia.'
    },
    'pt-BR': {
      title: 'Um pequeno reparo',
      subtitle: 'Voltar depois de uma ruptura',
      description: 'Uma prática curta para se reaproximar de alguém depois de uma palavra ríspida, um momento perdido ou uma distância silenciosa.',
      steps: JSON.stringify([
        'Espere até o corpo se acalmar o suficiente para você conseguir falar devagar.',
        'Nomeie apenas a sua parte, em uma frase, sem explicar nem se defender. (“Fui grosseiro com você hoje de manhã.”)',
        'Reconheça o provável impacto. (“Isso deve ter parecido que eu não me importava.”)',
        'Ofereça o que você gostaria de ter feito, ou o que vai tentar da próxima vez.',
        'Faça uma pergunta aberta: “Tem algo que você queira que eu saiba?” Depois ouça sem corrigir.',
        'Deixe o reparo ser suficiente, mesmo que pareça inacabado. A conexão costuma voltar aos poucos.'
      ]),
      why_it_helps: 'Todo relacionamento próximo tem rupturas. O que costuma construir confiança não é evitá-las, mas voltar para repará-las. Reparos pequenos e rápidos impedem que mágoas menores virem distância.'
    }
  },
  {
    id: 'say-their-name',
    category: 'Grief',
    duration: 5,
    slug: 'light-a-candle-say-a-name',
    is_premium: 1,
    en: {
      title: 'Light a candle, say a name',
      subtitle: 'A Small Remembrance Ritual',
      description: 'A 5-minute ritual for marking a loss out loud, on an anniversary, a hard day, or any ordinary evening.',
      steps: JSON.stringify([
        'Light a candle, or choose any small light: a lamp, a phone screen dimmed low.',
        'Say the name of the person, animal, or life you are missing, out loud if you can.',
        'Speak or write one specific memory: a phrase they used, a smell, a habit.',
        'Let whatever feeling arrives be welcome here, including laughter or numbness.',
        'Say, “You mattered. You still matter to me.”',
        'Let the candle burn a little while longer (never unattended), or turn off the light when you are ready.'
      ]),
      why_it_helps: 'Grief often goes unspoken in daily life. A small, repeatable ritual gives it a place and a voice. If grief feels unbearable or you have thoughts of harming yourself, please reach out to your local emergency number or a crisis line such as 988 in the US.'
    },
    es: {
      title: 'Encender una vela, decir un nombre',
      subtitle: 'Un pequeño ritual de recuerdo',
      description: 'Un ritual de 5 minutos para honrar una pérdida en voz alta, en un aniversario, un día difícil o cualquier tarde común.',
      steps: JSON.stringify([
        'Enciende una vela o elige cualquier luz pequeña: una lámpara, la pantalla del teléfono con poco brillo.',
        'Di el nombre de la persona, el animal o la etapa de vida que extrañas, en voz alta si puedes.',
        'Cuenta o escribe un recuerdo concreto: una frase que decía, un aroma, una costumbre.',
        'Permite que cualquier emoción que llegue sea bienvenida, incluso la risa o el entumecimiento.',
        'Di: “Fuiste importante. Sigues siendo importante para mí.”',
        'Deja que la vela arda un poco más (nunca sin supervisión) o apaga la luz cuando estés listo o lista.'
      ]),
      why_it_helps: 'El duelo muchas veces queda en silencio en la vida diaria. Un ritual pequeño y repetible le da un lugar y una voz. Si el dolor se vuelve insoportable o tienes pensamientos de hacerte daño, comunícate con tu número local de emergencias o con una línea de crisis, como el 988 en Estados Unidos.'
    },
    'pt-BR': {
      title: 'Acender uma vela, dizer um nome',
      subtitle: 'Um pequeno ritual de lembrança',
      description: 'Um ritual de 5 minutos para marcar uma perda em voz alta, num aniversário, num dia difícil ou numa noite qualquer.',
      steps: JSON.stringify([
        'Acenda uma vela ou escolha qualquer luz pequena: um abajur, a tela do celular com pouco brilho.',
        'Diga o nome da pessoa, do animal ou da fase da vida de que você sente falta, em voz alta se puder.',
        'Conte ou escreva uma lembrança específica: uma frase que ela dizia, um cheiro, um hábito.',
        'Deixe que qualquer sentimento que venha seja bem-vindo, inclusive riso ou dormência.',
        'Diga: “Você foi importante. Você ainda é importante para mim.”',
        'Deixe a vela queimar mais um pouco (nunca sem supervisão) ou apague a luz quando se sentir pronto.'
      ]),
      why_it_helps: 'O luto muitas vezes fica em silêncio no dia a dia. Um ritual pequeno e repetível dá a ele um lugar e uma voz. Se a dor ficar insuportável ou surgirem pensamentos de se machucar, procure o número local de emergência ou uma linha de crise, como o 988 nos EUA.'
    }
  },
  {
    id: 'grief-waves',
    category: 'Grief',
    duration: 5,
    slug: 'when-grief-comes-in-waves',
    is_premium: 1,
    en: {
      title: 'When grief comes in waves',
      subtitle: 'Moving Between Loss and Daily Life',
      description: 'A gentle check-in for days when grief ambushes you, and days when you feel guilty for feeling okay.',
      steps: JSON.stringify([
        'Notice which way you are facing right now: toward the loss, or toward daily life.',
        'If you are facing the loss, give it ten minutes of full attention: a photo, a memory, tears if they come.',
        'Then gently turn toward something ordinary: a glass of water, a small task, a walk to the window.',
        'If you are facing daily life, notice any guilt about it. Remind yourself that resting from grief is not forgetting.',
        'Before you finish, ask: “What would help me carry this today?” and choose one small thing.'
      ]),
      why_it_helps: 'Grief researchers Margaret Stroebe and Henk Schut described healthy grieving as an oscillation between facing loss and attending to life. Both directions are part of mourning, and moving between them is not a sign that you are doing it wrong.'
    },
    es: {
      title: 'Cuando el duelo llega en olas',
      subtitle: 'Moverse entre la pérdida y la vida diaria',
      description: 'Una revisión suave para los días en que el duelo te sorprende y para los días en que sientes culpa por estar bien.',
      steps: JSON.stringify([
        'Nota hacia dónde miras ahora: hacia la pérdida o hacia la vida cotidiana.',
        'Si miras hacia la pérdida, dale diez minutos de atención plena: una foto, un recuerdo, lágrimas si llegan.',
        'Luego gira suavemente hacia algo cotidiano: un vaso de agua, una tarea pequeña, asomarte a la ventana.',
        'Si miras hacia la vida diaria, nota si hay culpa. Recuerda que descansar del duelo no es olvidar.',
        'Antes de terminar, pregúntate: “¿Qué me ayudaría a llevar esto hoy?” y elige algo pequeño.'
      ]),
      why_it_helps: 'Las investigadoras del duelo Margaret Stroebe y Henk Schut describieron el duelo saludable como una oscilación entre enfrentar la pérdida y atender la vida. Ambas direcciones son parte del proceso, y moverse entre ellas no significa que lo estés haciendo mal.'
    },
    'pt-BR': {
      title: 'Quando o luto vem em ondas',
      subtitle: 'Mover-se entre a perda e a vida diária',
      description: 'Um momento gentil para os dias em que o luto pega você de surpresa e para os dias em que você sente culpa por estar bem.',
      steps: JSON.stringify([
        'Perceba para onde você está voltado agora: para a perda ou para a vida cotidiana.',
        'Se estiver voltado para a perda, dê a ela dez minutos de atenção inteira: uma foto, uma lembrança, lágrimas se vierem.',
        'Depois, vire-se com suavidade para algo comum: um copo d’água, uma pequena tarefa, ir até a janela.',
        'Se estiver voltado para a vida diária, perceba se há culpa. Lembre que descansar do luto não é esquecer.',
        'Antes de terminar, pergunte: “O que me ajudaria a carregar isso hoje?” e escolha uma coisa pequena.'
      ]),
      why_it_helps: 'Os pesquisadores do luto Margaret Stroebe e Henk Schut descreveram o luto saudável como uma oscilação entre encarar a perda e cuidar da vida. As duas direções fazem parte do processo, e transitar entre elas não significa que você está fazendo errado.'
    }
  }
];

export const EXTRA_REMEDIES = [
  {
    id: 'scattered-focus',
    category: 'Vitality',
    slug: 'scattered-focus-mental-fog',
    en: {
      title: 'Scattered focus and mental fog',
      summary: 'Traditional aromatic herbs, daylight, and movement breaks for days when your thoughts feel cloudy or hard to gather.',
      allies: JSON.stringify(['Rosemary (Salvia rosmarinus), traditionally used as a culinary and aromatic herb for clarity', 'Peppermint (Mentha × piperita) tea or aroma', 'Green tea (Camellia sinensis), gently caffeinated']),
      somatic: JSON.stringify(['Step outside for five minutes of daylight between tasks', 'Work in short blocks with a one-minute stretch in between', 'Drink a full glass of water before reaching for another coffee']),
      cautions: JSON.stringify(['Green tea contains caffeine; keep it earlier in the day if you are sensitive', 'Concentrated rosemary and peppermint essential oils are not for internal use and should be diluted on skin', 'Follow the product label or a qualified herbalist, and consult a clinician if you take regular medications']),
      pregnancy: 'Culinary amounts of rosemary and mint are commonly used in food; avoid concentrated extracts and essential oils and speak with your midwife or physician first.',
      escalation: JSON.stringify(['Sudden confusion, trouble speaking, or weakness on one side of the body (call your local emergency number)', 'Memory or focus changes that are new and steadily worsening', 'Fog that follows a head injury or comes with severe headache'])
    },
    es: {
      title: 'Mente dispersa y niebla mental',
      summary: 'Hierbas aromáticas tradicionales, luz natural y pausas de movimiento para los días en que los pensamientos se sienten nublados.',
      allies: JSON.stringify(['Romero (Salvia rosmarinus), usado tradicionalmente en la cocina y como aroma para despejar', 'Menta piperita (Mentha × piperita) en infusión o aroma', 'Té verde (Camellia sinensis), con cafeína suave']),
      somatic: JSON.stringify(['Salir cinco minutos a la luz del día entre tareas', 'Trabajar en bloques cortos con un minuto de estiramiento entre ellos', 'Tomar un vaso de agua completo antes de otro café']),
      cautions: JSON.stringify(['El té verde contiene cafeína; tómalo temprano si eres sensible', 'Los aceites esenciales concentrados de romero y menta no se ingieren y deben diluirse sobre la piel', 'Sigue la etiqueta del producto o la guía de un herbolario calificado, y consulta a un profesional de salud si tomas medicamentos']),
      pregnancy: 'El romero y la menta en cantidades culinarias son de uso común; evita extractos concentrados y aceites esenciales y consulta primero con tu partera o médico.',
      escalation: JSON.stringify(['Confusión repentina, dificultad para hablar o debilidad de un lado del cuerpo (llama a tu número local de emergencias)', 'Cambios de memoria o concentración nuevos y que empeoran', 'Niebla mental después de un golpe en la cabeza o con dolor de cabeza intenso'])
    },
    'pt-BR': {
      title: 'Foco disperso e névoa mental',
      summary: 'Ervas aromáticas tradicionais, luz do dia e pausas de movimento para os dias em que os pensamentos parecem nublados.',
      allies: JSON.stringify(['Alecrim (Salvia rosmarinus), tradicionalmente usado na culinária e como aroma para clareza', 'Hortelã-pimenta (Mentha × piperita) em chá ou aroma', 'Chá verde (Camellia sinensis), com cafeína suave']),
      somatic: JSON.stringify(['Sair cinco minutos para a luz do dia entre tarefas', 'Trabalhar em blocos curtos com um minuto de alongamento entre eles', 'Beber um copo cheio de água antes de outro café']),
      cautions: JSON.stringify(['O chá verde contém cafeína; prefira tomar cedo se você for sensível', 'Óleos essenciais concentrados de alecrim e hortelã não devem ser ingeridos e precisam ser diluídos na pele', 'Siga o rótulo do produto ou um herbalista qualificado, e consulte um profissional de saúde se usar medicamentos']),
      pregnancy: 'Alecrim e hortelã em quantidades culinárias são de uso comum; evite extratos concentrados e óleos essenciais e converse antes com sua obstetra ou parteira.',
      escalation: JSON.stringify(['Confusão repentina, dificuldade para falar ou fraqueza de um lado do corpo (ligue para o número local de emergência)', 'Mudanças de memória ou foco novas e que pioram', 'Névoa mental depois de uma pancada na cabeça ou com dor de cabeça intensa'])
    }
  },
  {
    id: 'dry-throat',
    category: 'Immunity',
    slug: 'dry-scratchy-throat',
    en: {
      title: 'Dry, scratchy throat',
      summary: 'Soothing warm drinks, moist air, and traditional demulcent herbs for a throat irritated by dry air, talking, or seasonal change.',
      allies: JSON.stringify(['Honey in warm water or tea (not for children under one year)', 'Marshmallow root (Althaea officinalis), a traditional soothing demulcent', 'Licorice root (Glycyrrhiza glabra) tea — see cautions', 'Sage (Salvia officinalis) as a traditional gargle']),
      somatic: JSON.stringify(['Sip warm (not hot) liquids through the day', 'Breathe steam from a bowl of warm water or a shower for a few minutes', 'Rest your voice and use a humidifier or a bowl of water near a heater at night']),
      cautions: JSON.stringify(['Never give honey to infants under 12 months', 'Licorice root can raise blood pressure and interact with heart, blood pressure, and diuretic medications; avoid regular use without a clinician’s advice', 'Marshmallow root may slow absorption of medications taken at the same time; separate them by a few hours', 'Follow the product label or a qualified herbalist']),
      pregnancy: 'Honey and warm fluids are generally well tolerated; avoid licorice root and medicinal amounts of sage in pregnancy and check other herbs with your midwife or physician.',
      escalation: JSON.stringify(['Difficulty breathing or swallowing, or drooling (seek emergency care)', 'High fever, or a sore throat lasting more than a week', 'White patches, a swollen neck, or a rash alongside the sore throat'])
    },
    es: {
      title: 'Garganta seca e irritada',
      summary: 'Bebidas tibias, aire húmedo y hierbas emolientes tradicionales para una garganta irritada por el aire seco, el uso de la voz o el cambio de estación.',
      allies: JSON.stringify(['Miel en agua tibia o infusión (no para menores de un año)', 'Raíz de malvavisco (Althaea officinalis), emoliente tradicional', 'Infusión de raíz de regaliz (Glycyrrhiza glabra) — ver precauciones', 'Salvia (Salvia officinalis) en gárgaras tradicionales']),
      somatic: JSON.stringify(['Beber líquidos tibios (no calientes) a lo largo del día', 'Respirar vapor de un recipiente con agua tibia o de la ducha durante unos minutos', 'Descansar la voz y usar un humidificador o un recipiente con agua cerca de la calefacción por la noche']),
      cautions: JSON.stringify(['Nunca dar miel a bebés menores de 12 meses', 'La raíz de regaliz puede elevar la presión arterial e interactuar con medicamentos para el corazón, la presión y diuréticos; evita su uso regular sin consejo profesional', 'La raíz de malvavisco puede retrasar la absorción de medicamentos tomados al mismo tiempo; sepáralos unas horas', 'Sigue la etiqueta del producto o la guía de un herbolario calificado']),
      pregnancy: 'La miel y los líquidos tibios suelen tolerarse bien; evita la raíz de regaliz y la salvia en cantidades medicinales durante el embarazo y consulta otras hierbas con tu partera o médico.',
      escalation: JSON.stringify(['Dificultad para respirar o tragar, o babeo (busca atención de emergencia)', 'Fiebre alta o dolor de garganta que dura más de una semana', 'Placas blancas, cuello inflamado o sarpullido junto con el dolor'])
    },
    'pt-BR': {
      title: 'Garganta seca e arranhando',
      summary: 'Bebidas mornas, ar úmido e ervas emolientes tradicionais para uma garganta irritada pelo ar seco, pelo uso da voz ou pela mudança de estação.',
      allies: JSON.stringify(['Mel em água morna ou chá (não para crianças menores de um ano)', 'Raiz de malvaísco (Althaea officinalis), emoliente tradicional', 'Chá de raiz de alcaçuz (Glycyrrhiza glabra) — ver cuidados', 'Sálvia (Salvia officinalis) em gargarejo tradicional']),
      somatic: JSON.stringify(['Tomar líquidos mornos (não quentes) ao longo do dia', 'Respirar vapor de uma tigela com água morna ou do chuveiro por alguns minutos', 'Descansar a voz e usar umidificador ou uma bacia com água no quarto à noite']),
      cautions: JSON.stringify(['Nunca dar mel a bebês menores de 12 meses', 'A raiz de alcaçuz pode elevar a pressão arterial e interagir com remédios para coração, pressão e diuréticos; evite uso regular sem orientação profissional', 'O malvaísco pode atrasar a absorção de medicamentos tomados ao mesmo tempo; separe por algumas horas', 'Siga o rótulo do produto ou um herbalista qualificado']),
      pregnancy: 'Mel e líquidos mornos costumam ser bem tolerados; evite alcaçuz e sálvia em quantidades medicinais na gestação e confirme outras ervas com sua obstetra ou parteira.',
      escalation: JSON.stringify(['Dificuldade para respirar ou engolir, ou salivação excessiva (procure atendimento de emergência)', 'Febre alta ou dor de garganta por mais de uma semana', 'Placas brancas, pescoço inchado ou manchas na pele junto com a dor'])
    }
  },
  {
    id: 'screen-eyes',
    category: 'Physical Ergonomics',
    slug: 'tired-eyes-screen-strain',
    en: {
      title: 'Tired eyes and screen strain',
      summary: 'Simple resting habits, warm compresses, and traditional soothing plants for eyes that feel dry, heavy, or strained after long screen days.',
      allies: JSON.stringify(['Warm compress with a clean cloth (plain water)', 'Cooled chamomile tea bags as a traditional resting compress over closed lids', 'Cucumber slices as a cool, simple rest for the eye area']),
      somatic: JSON.stringify(['Every 20 minutes, look at something about 20 feet (6 meters) away for 20 seconds', 'Blink slowly and fully ten times, then close your eyes for a breath or two', 'Lower screen brightness to match the room and place the screen slightly below eye level']),
      cautions: JSON.stringify(['Keep herbal compresses outside the eye itself; never put homemade liquids in the eyes', 'Skip chamomile compresses if you are allergic to ragweed, daisies, or related plants', 'Existing contact lens or eye conditions should be discussed with an eye care professional']),
      pregnancy: 'Warm compresses and resting habits are appropriate throughout pregnancy; new vision changes in pregnancy should always be reported to your clinician promptly.',
      escalation: JSON.stringify(['Sudden vision loss, flashes of light, or a curtain over your vision (seek emergency care)', 'Eye pain, redness with discharge, or light sensitivity that does not settle', 'Persistent blurred vision or frequent headaches, which may call for an eye exam'])
    },
    es: {
      title: 'Ojos cansados por las pantallas',
      summary: 'Hábitos de descanso, compresas tibias y plantas tradicionales calmantes para ojos secos, pesados o forzados tras días largos frente a pantallas.',
      allies: JSON.stringify(['Compresa tibia con un paño limpio (solo agua)', 'Bolsitas de manzanilla frías como compresa tradicional sobre los párpados cerrados', 'Rodajas de pepino como descanso fresco y sencillo para la zona de los ojos']),
      somatic: JSON.stringify(['Cada 20 minutos, mira algo a unos 6 metros de distancia durante 20 segundos', 'Parpadea despacio y por completo diez veces, luego cierra los ojos una o dos respiraciones', 'Baja el brillo de la pantalla al nivel de la habitación y colócala un poco por debajo de la altura de los ojos']),
      cautions: JSON.stringify(['Mantén las compresas de hierbas fuera del ojo; nunca pongas líquidos caseros dentro de los ojos', 'Evita la manzanilla si tienes alergia a la ambrosía, las margaritas o plantas similares', 'Si usas lentes de contacto o tienes alguna condición ocular, consulta con un profesional de la visión']),
      pregnancy: 'Las compresas tibias y los hábitos de descanso son adecuados durante el embarazo; cualquier cambio nuevo en la visión debe comunicarse pronto a tu médico.',
      escalation: JSON.stringify(['Pérdida repentina de visión, destellos de luz o una sombra como cortina (busca atención de emergencia)', 'Dolor ocular, enrojecimiento con secreción o sensibilidad a la luz que no mejora', 'Visión borrosa persistente o dolores de cabeza frecuentes, que pueden requerir un examen visual'])
    },
    'pt-BR': {
      title: 'Olhos cansados de tela',
      summary: 'Hábitos de descanso, compressas mornas e plantas tradicionais calmantes para olhos secos, pesados ou forçados depois de longos dias de tela.',
      allies: JSON.stringify(['Compressa morna com pano limpo (só água)', 'Saquinhos de camomila frios como compressa tradicional sobre as pálpebras fechadas', 'Rodelas de pepino como descanso fresco e simples para a região dos olhos']),
      somatic: JSON.stringify(['A cada 20 minutos, olhe para algo a uns 6 metros de distância por 20 segundos', 'Pisque devagar e por completo dez vezes, depois feche os olhos por uma ou duas respirações', 'Diminua o brilho da tela para combinar com o ambiente e posicione-a um pouco abaixo da altura dos olhos']),
      cautions: JSON.stringify(['Mantenha as compressas de ervas fora do olho; nunca coloque líquidos caseiros dentro dos olhos', 'Evite a camomila se tiver alergia a ambrósia, margaridas ou plantas da mesma família', 'Se usar lentes de contato ou tiver alguma condição ocular, converse com um oftalmologista']),
      pregnancy: 'Compressas mornas e hábitos de descanso são adequados durante a gestação; qualquer mudança nova na visão deve ser comunicada logo à sua equipe de saúde.',
      escalation: JSON.stringify(['Perda repentina de visão, flashes de luz ou sombra como uma cortina (procure atendimento de emergência)', 'Dor nos olhos, vermelhidão com secreção ou sensibilidade à luz que não passa', 'Visão embaçada persistente ou dores de cabeça frequentes, que podem pedir um exame de vista'])
    }
  },
  {
    id: 'cold-hands-feet',
    category: 'Vitality',
    slug: 'cold-hands-and-feet',
    en: {
      title: 'Always-cold hands and feet',
      summary: 'Warming foods, traditional circulatory spices, and gentle movement for bodies that run chilly at the edges.',
      allies: JSON.stringify(['Fresh ginger (Zingiber officinale) tea, a traditional warming spice', 'Cinnamon (Cinnamomum verum) in food and warm drinks', 'Warm, cooked meals and soups over cold, raw foods on chilly days']),
      somatic: JSON.stringify(['Circle your wrists and ankles ten times each way', 'Warm foot soak for ten minutes before bed, then dry and cover your feet', 'Stand up and walk for a few minutes every hour you sit']),
      cautions: JSON.stringify(['Ginger in larger amounts may interact with blood thinners; consult a clinician if you take anticoagulants', 'Check water temperature with your hand or elbow first, especially if you have reduced sensation in your feet or diabetes', 'Follow the product label or a qualified herbalist for any supplement']),
      pregnancy: 'Culinary ginger and cinnamon are commonly used in food; discuss concentrated supplements with your midwife or physician.',
      escalation: JSON.stringify(['Fingers or toes turning white or blue with numbness or pain', 'Sores on the feet or hands that heal slowly', 'Coldness together with unusual tiredness, weight changes, or hair loss, which may deserve a check-up'])
    },
    es: {
      title: 'Manos y pies siempre fríos',
      summary: 'Alimentos que abrigan, especias tradicionales para la circulación y movimiento suave para cuerpos que sienten frío en las extremidades.',
      allies: JSON.stringify(['Infusión de jengibre fresco (Zingiber officinale), especia tradicional que da calor', 'Canela (Cinnamomum verum) en comidas y bebidas calientes', 'Comidas y sopas calientes en lugar de alimentos fríos y crudos en días frescos']),
      somatic: JSON.stringify(['Gira muñecas y tobillos diez veces en cada dirección', 'Baño de pies tibio de diez minutos antes de dormir; luego sécalos y abrígalos', 'Levántate y camina unos minutos por cada hora sentado']),
      cautions: JSON.stringify(['El jengibre en cantidades grandes puede interactuar con anticoagulantes; consulta si los tomas', 'Revisa la temperatura del agua con la mano o el codo, especialmente si tienes poca sensibilidad en los pies o diabetes', 'Sigue la etiqueta del producto o la guía de un herbolario calificado para cualquier suplemento']),
      pregnancy: 'El jengibre y la canela en cantidades culinarias son de uso común; consulta los suplementos concentrados con tu partera o médico.',
      escalation: JSON.stringify(['Dedos que se ponen blancos o azulados con entumecimiento o dolor', 'Heridas en pies o manos que tardan en sanar', 'Frío acompañado de cansancio inusual, cambios de peso o caída del cabello, que puede merecer un chequeo'])
    },
    'pt-BR': {
      title: 'Mãos e pés sempre frios',
      summary: 'Alimentos que aquecem, especiarias tradicionais para a circulação e movimento suave para corpos que sentem frio nas extremidades.',
      allies: JSON.stringify(['Chá de gengibre fresco (Zingiber officinale), especiaria tradicional que aquece', 'Canela (Cinnamomum verum) em comidas e bebidas quentes', 'Refeições e sopas quentes em vez de alimentos frios e crus nos dias frescos']),
      somatic: JSON.stringify(['Gire punhos e tornozelos dez vezes para cada lado', 'Escalda-pés morno de dez minutos antes de dormir; depois seque e agasalhe os pés', 'Levante e caminhe alguns minutos a cada hora sentado']),
      cautions: JSON.stringify(['Gengibre em grandes quantidades pode interagir com anticoagulantes; consulte seu médico se usar esses remédios', 'Teste a temperatura da água com a mão ou o cotovelo, principalmente se tiver pouca sensibilidade nos pés ou diabetes', 'Siga o rótulo do produto ou um herbalista qualificado para qualquer suplemento']),
      pregnancy: 'Gengibre e canela em quantidades culinárias são de uso comum; converse sobre suplementos concentrados com sua obstetra ou parteira.',
      escalation: JSON.stringify(['Dedos que ficam brancos ou arroxeados com dormência ou dor', 'Feridas nos pés ou mãos que demoram a cicatrizar', 'Frio junto com cansaço incomum, mudanças de peso ou queda de cabelo, o que pode pedir um check-up'])
    }
  },
  {
    id: 'queasy',
    category: 'Digestion',
    slug: 'queasy-unsettled-stomach',
    en: {
      title: 'Queasy, unsettled stomach',
      summary: 'Traditional settling herbs, fresh air, and slow breathing for mild nausea from travel, stress, or an off day.',
      allies: JSON.stringify(['Ginger (Zingiber officinale), a long-standing traditional ally for queasiness', 'Peppermint (Mentha × piperita) tea or its aroma', 'Plain crackers, toast, or rice in small amounts']),
      somatic: JSON.stringify(['Fresh air and a fixed point on the horizon when traveling', 'Slow breathing: in through the nose, a long exhale through gently pursed lips', 'Small sips of water or weak tea rather than large gulps']),
      cautions: JSON.stringify(['Peppermint can worsen reflux or heartburn in some people', 'Ginger in larger amounts may interact with blood thinners', 'Follow the product label or a qualified herbalist, and consult a clinician before combining with medications']),
      pregnancy: 'Nausea in pregnancy is common but should be discussed with your midwife or physician, who can advise on ginger and other options. Seek care promptly if you cannot keep fluids down.',
      escalation: JSON.stringify(['Unable to keep fluids down for more than a day, or signs of dehydration', 'Vomiting blood or material that looks like coffee grounds', 'Severe abdominal pain, high fever, or nausea after a head injury (seek urgent care)'])
    },
    es: {
      title: 'Náuseas y estómago revuelto',
      summary: 'Hierbas tradicionales que asientan, aire fresco y respiración lenta para náuseas leves por viajes, estrés o un mal día.',
      allies: JSON.stringify(['Jengibre (Zingiber officinale), aliado tradicional para el estómago revuelto', 'Infusión o aroma de menta piperita (Mentha × piperita)', 'Galletas simples, pan tostado o arroz en porciones pequeñas']),
      somatic: JSON.stringify(['Aire fresco y la mirada fija en el horizonte al viajar', 'Respiración lenta: inhalar por la nariz y exhalar largo por los labios entreabiertos', 'Pequeños sorbos de agua o té suave en lugar de tragos grandes']),
      cautions: JSON.stringify(['La menta puede empeorar el reflujo o la acidez en algunas personas', 'El jengibre en cantidades grandes puede interactuar con anticoagulantes', 'Sigue la etiqueta del producto o la guía de un herbolario calificado, y consulta antes de combinarlo con medicamentos']),
      pregnancy: 'Las náuseas en el embarazo son frecuentes, pero conviene hablarlas con tu partera o médico, quien puede orientarte sobre el jengibre y otras opciones. Busca atención pronto si no toleras líquidos.',
      escalation: JSON.stringify(['No poder retener líquidos por más de un día o señales de deshidratación', 'Vómito con sangre o con aspecto de café molido', 'Dolor abdominal intenso, fiebre alta o náuseas tras un golpe en la cabeza (busca atención urgente)'])
    },
    'pt-BR': {
      title: 'Enjoo e estômago embrulhado',
      summary: 'Ervas tradicionais que acalmam, ar fresco e respiração lenta para enjoos leves por viagem, estresse ou um dia difícil.',
      allies: JSON.stringify(['Gengibre (Zingiber officinale), aliado tradicional contra o enjoo', 'Chá ou aroma de hortelã-pimenta (Mentha × piperita)', 'Biscoito de água e sal, torrada ou arroz em pequenas porções']),
      somatic: JSON.stringify(['Ar fresco e o olhar fixo no horizonte durante viagens', 'Respiração lenta: inspirar pelo nariz e expirar longamente pelos lábios entreabertos', 'Pequenos goles de água ou chá fraco em vez de goles grandes']),
      cautions: JSON.stringify(['A hortelã pode piorar o refluxo ou a azia em algumas pessoas', 'Gengibre em grandes quantidades pode interagir com anticoagulantes', 'Siga o rótulo do produto ou um herbalista qualificado, e consulte um profissional antes de combinar com medicamentos']),
      pregnancy: 'O enjoo na gestação é comum, mas deve ser conversado com sua obstetra ou parteira, que pode orientar sobre o gengibre e outras opções. Procure atendimento logo se não conseguir manter líquidos.',
      escalation: JSON.stringify(['Não conseguir manter líquidos por mais de um dia ou sinais de desidratação', 'Vômito com sangue ou com aspecto de borra de café', 'Dor abdominal forte, febre alta ou enjoo depois de uma pancada na cabeça (procure atendimento urgente)'])
    }
  },
  {
    id: 'post-effort-soreness',
    category: 'Somatic Aches',
    slug: 'sore-muscles-after-effort',
    en: {
      title: 'Sore muscles after effort',
      summary: 'Warm soaks, gentle movement, and traditional topical plants for the ordinary ache after gardening, moving house, or a new workout.',
      allies: JSON.stringify(['Arnica (Arnica montana) as a topical gel or cream on unbroken skin only', 'Warm bath with Epsom salts (magnesium sulfate), a traditional soak', 'Turmeric (Curcuma longa) and ginger in everyday cooking']),
      somatic: JSON.stringify(['Easy walking or gentle stretching the day after, rather than complete stillness', 'Warmth on stiff areas for 15 to 20 minutes', 'Extra water and an unhurried night of sleep']),
      cautions: JSON.stringify(['Arnica is for external use only; never apply to broken skin and never swallow herbal arnica', 'Stop any topical product that causes redness, itching, or rash', 'Turmeric supplements can interact with blood thinners and some diabetes medications; consult a clinician', 'Follow the product label or a qualified herbalist']),
      pregnancy: 'Warm (not hot) baths and gentle movement are usually fine; avoid very hot soaks and check topical arnica and any supplements with your midwife or physician.',
      escalation: JSON.stringify(['Severe pain, swelling, or dark (cola-colored) urine after intense exercise (seek urgent care)', 'Pain that is sharp, localized to a joint, or follows a fall or pop', 'Soreness that has not eased after a week'])
    },
    es: {
      title: 'Músculos adoloridos después del esfuerzo',
      summary: 'Baños tibios, movimiento suave y plantas tradicionales de uso tópico para el dolor habitual tras jardinería, una mudanza o un ejercicio nuevo.',
      allies: JSON.stringify(['Árnica (Arnica montana) en gel o crema, solo sobre piel sana', 'Baño tibio con sales de Epsom (sulfato de magnesio), un remojo tradicional', 'Cúrcuma (Curcuma longa) y jengibre en la cocina diaria']),
      somatic: JSON.stringify(['Caminar tranquilo o estirar suavemente al día siguiente en lugar de quedarte completamente quieto', 'Calor sobre las zonas rígidas durante 15 a 20 minutos', 'Más agua y una noche de sueño sin prisa']),
      cautions: JSON.stringify(['El árnica es solo de uso externo; nunca en heridas abiertas y nunca ingerir árnica herbal', 'Suspende cualquier producto tópico que cause enrojecimiento, picazón o sarpullido', 'Los suplementos de cúrcuma pueden interactuar con anticoagulantes y algunos medicamentos para la diabetes; consulta a un profesional', 'Sigue la etiqueta del producto o la guía de un herbolario calificado']),
      pregnancy: 'Los baños tibios (no calientes) y el movimiento suave suelen ser adecuados; evita remojos muy calientes y consulta el árnica tópica y cualquier suplemento con tu partera o médico.',
      escalation: JSON.stringify(['Dolor intenso, hinchazón u orina oscura (color refresco de cola) tras ejercicio intenso (busca atención urgente)', 'Dolor agudo, localizado en una articulación o tras una caída o un chasquido', 'Dolor que no mejora después de una semana'])
    },
    'pt-BR': {
      title: 'Músculos doloridos depois do esforço',
      summary: 'Banhos mornos, movimento suave e plantas tradicionais de uso tópico para a dor comum depois de jardinagem, mudança de casa ou um treino novo.',
      allies: JSON.stringify(['Arnica (Arnica montana) em gel ou creme, somente sobre pele íntegra', 'Banho morno com sal de Epsom (sulfato de magnésio), um banho tradicional', 'Cúrcuma / açafrão-da-terra (Curcuma longa) e gengibre na cozinha do dia a dia']),
      somatic: JSON.stringify(['Caminhada leve ou alongamento suave no dia seguinte, em vez de ficar totalmente parado', 'Calor sobre as áreas rígidas por 15 a 20 minutos', 'Mais água e uma noite de sono sem pressa']),
      cautions: JSON.stringify(['A arnica é só para uso externo; nunca em feridas abertas e nunca ingerir arnica herbal', 'Suspenda qualquer produto tópico que cause vermelhidão, coceira ou manchas', 'Suplementos de cúrcuma podem interagir com anticoagulantes e alguns remédios para diabetes; consulte um profissional', 'Siga o rótulo do produto ou um herbalista qualificado']),
      pregnancy: 'Banhos mornos (não quentes) e movimento suave costumam ser adequados; evite banhos muito quentes e confirme a arnica tópica e qualquer suplemento com sua obstetra ou parteira.',
      escalation: JSON.stringify(['Dor forte, inchaço ou urina escura (cor de refrigerante de cola) depois de exercício intenso (procure atendimento urgente)', 'Dor aguda, localizada numa articulação ou depois de uma queda ou estalo', 'Dor que não melhora depois de uma semana'])
    }
  },
  {
    id: 'lonely-heartsore',
    category: 'Mood',
    slug: 'lonely-heartsore',
    en: {
      title: 'Lonely and heartsore',
      summary: 'Warm rituals, traditional heart-centered herbs, and small steps toward connection for seasons of loneliness or heartbreak.',
      allies: JSON.stringify(['Rose (Rosa spp.) petal tea, traditionally associated with comfort and the heart', 'Hawthorn (Crataegus spp.) — see cautions', 'Linden / lime blossom (Tilia spp.) as a gentle evening tea']),
      somatic: JSON.stringify(['Hand on the heart with slow breathing for two minutes', 'Send one low-pressure message to someone, with no expectation of a reply', 'Spend time in a shared public place, like a library, café, or park, without needing to talk']),
      cautions: JSON.stringify(['Hawthorn can interact with heart medications, including blood pressure drugs and digoxin; use only with a clinician’s approval if you take these', 'Avoid rose or linden if you are allergic to them', 'Follow the product label or a qualified herbalist']),
      pregnancy: 'Avoid hawthorn in pregnancy; gentle rose petal tea in food amounts is commonly used, but check with your midwife or physician. Emotional support during pregnancy is worth asking for.',
      escalation: JSON.stringify(['Thoughts of suicide or self-harm (call your local emergency number or a crisis line such as 988 in the US)', 'Loneliness or sadness that has lasted more than two weeks and affects sleep, eating, or daily care', 'Withdrawing from everyone, or feeling that nothing will ever change'])
    },
    es: {
      title: 'Soledad y corazón dolido',
      summary: 'Rituales cálidos, hierbas tradicionales asociadas al corazón y pequeños pasos hacia la conexión en épocas de soledad o desamor.',
      allies: JSON.stringify(['Infusión de pétalos de rosa (Rosa spp.), asociada tradicionalmente al consuelo y al corazón', 'Espino blanco (Crataegus spp.) — ver precauciones', 'Flor de tilo (Tilia spp.) como infusión suave de la tarde']),
      somatic: JSON.stringify(['Mano en el corazón con respiración lenta durante dos minutos', 'Enviar un mensaje sencillo a alguien, sin esperar respuesta', 'Pasar tiempo en un lugar público compartido, como una biblioteca, un café o un parque, sin necesidad de conversar']),
      cautions: JSON.stringify(['El espino blanco puede interactuar con medicamentos para el corazón, incluidos los de presión arterial y la digoxina; úsalo solo con aprobación profesional si los tomas', 'Evita la rosa o el tilo si tienes alergia', 'Sigue la etiqueta del producto o la guía de un herbolario calificado']),
      pregnancy: 'Evita el espino blanco en el embarazo; la infusión suave de pétalos de rosa es de uso común, pero consulta con tu partera o médico. Pedir apoyo emocional durante el embarazo vale la pena.',
      escalation: JSON.stringify(['Pensamientos de suicidio o de hacerte daño (comunícate con tu número local de emergencias o con una línea de crisis, como el 988 en Estados Unidos)', 'Soledad o tristeza por más de dos semanas que afecta el sueño, la alimentación o el cuidado diario', 'Alejarte de todas las personas o sentir que nada va a cambiar'])
    },
    'pt-BR': {
      title: 'Solidão e coração apertado',
      summary: 'Rituais acolhedores, ervas tradicionalmente ligadas ao coração e pequenos passos em direção à conexão em fases de solidão ou desilusão.',
      allies: JSON.stringify(['Chá de pétalas de rosa (Rosa spp.), tradicionalmente associado ao conforto e ao coração', 'Espinheiro-branco (Crataegus spp.) — ver cuidados', 'Flor de tília (Tilia spp.) como chá suave ao anoitecer']),
      somatic: JSON.stringify(['Mão no coração com respiração lenta por dois minutos', 'Enviar uma mensagem simples para alguém, sem esperar resposta', 'Passar um tempo num lugar público compartilhado, como biblioteca, café ou praça, sem precisar conversar']),
      cautions: JSON.stringify(['O espinheiro-branco pode interagir com remédios para o coração, incluindo os de pressão e a digoxina; use só com aprovação profissional se você toma esses medicamentos', 'Evite rosa ou tília se tiver alergia', 'Siga o rótulo do produto ou um herbalista qualificado']),
      pregnancy: 'Evite espinheiro-branco na gestação; o chá suave de pétalas de rosa é de uso comum, mas confirme com sua obstetra ou parteira. Pedir apoio emocional na gravidez vale a pena.',
      escalation: JSON.stringify(['Pensamentos de suicídio ou de se machucar (procure o número local de emergência ou uma linha de crise, como o 988 nos EUA)', 'Solidão ou tristeza por mais de duas semanas que afeta o sono, a alimentação ou o autocuidado', 'Afastar-se de todos ou sentir que nada vai mudar'])
    }
  },
  {
    id: 'hot-flashes',
    category: 'Women’s Health',
    slug: 'hot-flashes-night-sweats',
    en: {
      title: 'Hot flashes and night sweats',
      summary: 'Cooling rituals, layered comfort, and traditionally used plants for the heat waves of perimenopause and menopause.',
      allies: JSON.stringify(['Sage (Salvia officinalis), traditionally used as a cooling tea', 'Flaxseed (Linum usitatissimum) in food', 'Cooling foods and drinks: cucumber, mint water, room-temperature herbal teas']),
      somatic: JSON.stringify(['Slow, steady breathing when a flash begins: in for 4, out for 6', 'Layered clothing and a cool, dark bedroom with a fan', 'Notice personal triggers such as alcohol, spicy food, hot drinks, or stress, and adjust gently']),
      cautions: JSON.stringify(['Sage in medicinal amounts is not for long-term use and should be avoided with seizure disorders', 'Herbs with estrogen-like traditions (such as red clover or black cohosh) should only be used with a clinician’s guidance, especially with a history of hormone-sensitive cancer, liver concerns, or blood clots', 'Follow the product label or a qualified herbalist, and consult a clinician about all options, including medical ones']),
      pregnancy: 'Not applicable in pregnancy. If hot flashes occur with a possible pregnancy, speak with your clinician.',
      escalation: JSON.stringify(['Any bleeding after menopause (12 months without a period)', 'Night sweats with unexplained weight loss, fever, or swollen glands', 'Heat, racing heart, or mood changes that feel severe or are disrupting daily life'])
    },
    es: {
      title: 'Bochornos y sudores nocturnos',
      summary: 'Rituales refrescantes, comodidad en capas y plantas de uso tradicional para las oleadas de calor de la perimenopausia y la menopausia.',
      allies: JSON.stringify(['Salvia (Salvia officinalis), usada tradicionalmente en infusión refrescante', 'Linaza (Linum usitatissimum) en las comidas', 'Alimentos y bebidas frescos: pepino, agua con menta, infusiones a temperatura ambiente']),
      somatic: JSON.stringify(['Respiración lenta y constante cuando empieza el bochorno: inhala en 4, exhala en 6', 'Ropa en capas y una habitación fresca y oscura con ventilador', 'Observar los propios detonantes, como el alcohol, la comida picante, las bebidas calientes o el estrés, y ajustar con suavidad']),
      cautions: JSON.stringify(['La salvia en cantidades medicinales no es para uso prolongado y debe evitarse con trastornos convulsivos', 'Las hierbas con tradición estrogénica (como el trébol rojo o la cimicífuga) solo deben usarse con guía profesional, sobre todo con antecedentes de cáncer hormonodependiente, problemas hepáticos o coágulos', 'Sigue la etiqueta del producto o la guía de un herbolario calificado, y consulta con un profesional sobre todas las opciones, incluidas las médicas']),
      pregnancy: 'No aplica durante el embarazo. Si hay bochornos y un posible embarazo, consulta con tu médico.',
      escalation: JSON.stringify(['Cualquier sangrado después de la menopausia (12 meses sin menstruación)', 'Sudores nocturnos con pérdida de peso inexplicable, fiebre o ganglios inflamados', 'Calor, palpitaciones o cambios de ánimo intensos que alteran la vida diaria'])
    },
    'pt-BR': {
      title: 'Fogachos e suores noturnos',
      summary: 'Rituais refrescantes, conforto em camadas e plantas de uso tradicional para as ondas de calor da perimenopausa e da menopausa.',
      allies: JSON.stringify(['Sálvia (Salvia officinalis), tradicionalmente usada como chá refrescante', 'Linhaça (Linum usitatissimum) na alimentação', 'Alimentos e bebidas frescos: pepino, água com hortelã, chás em temperatura ambiente']),
      somatic: JSON.stringify(['Respiração lenta e constante quando o calor começar: inspire em 4, expire em 6', 'Roupas em camadas e um quarto fresco e escuro com ventilador', 'Perceber os próprios gatilhos, como álcool, comida apimentada, bebidas quentes ou estresse, e ajustar com gentileza']),
      cautions: JSON.stringify(['A sálvia em quantidades medicinais não é para uso prolongado e deve ser evitada em quadros convulsivos', 'Ervas com tradição estrogênica (como trevo-vermelho ou cimicífuga) só devem ser usadas com orientação profissional, principalmente com histórico de câncer hormônio-dependente, problemas no fígado ou trombose', 'Siga o rótulo do produto ou um herbalista qualificado, e converse com um profissional sobre todas as opções, inclusive as médicas']),
      pregnancy: 'Não se aplica na gestação. Se houver fogachos e possibilidade de gravidez, converse com sua equipe de saúde.',
      escalation: JSON.stringify(['Qualquer sangramento depois da menopausa (12 meses sem menstruar)', 'Suores noturnos com perda de peso sem explicação, febre ou ínguas', 'Calor, coração acelerado ou mudanças de humor intensas que atrapalham a rotina'])
    }
  }
];

// Shape matches reikiArticles in seed.js section 4. The seeder inserts one row
// per locale with id = a.id + '_' + locale (e.g. 'reiki-precepts_en').
export const EXTRA_REIKI_ARTICLES = [
  {
    id: 'reiki-precepts',
    slug: 'living-the-five-precepts',
    sort_order: 3,
    en: {
      title: 'Living the Five Precepts: Just for Today',
      summary: 'A gentle, practical look at the Gokai, the five everyday principles at the heart of Usui Reiki, and how to live them one day at a time.',
      content: `### Why the precepts matter

When people first hear about Reiki, they often imagine something that happens on a treatment table. Yet Mikao Usui placed a short set of everyday principles at the heart of his teaching. They are known in Japanese as the *Gokai*, and they were traditionally recited morning and evening, often seated with palms together in *gassho*.

The version most often shared in English begins with the words "Just for today." That opening is quietly radical. It does not ask you to become a permanently calm, grateful, endlessly kind person. It asks for something much smaller and more possible: this one day. And then, tomorrow, this one day again.

### The five precepts

- Just for today, do not be angry.
- Just for today, do not worry.
- Be grateful.
- Do your work honestly.
- Be kind to others.

Translations vary, and you may meet slightly different wording in different lineages. What follows is not an official commentary, only an invitation to explore how each line might live inside an ordinary life.

### Just for today, do not be angry

This line is easy to misread as "never feel anger," which would be neither possible nor healthy. Anger often carries important information: a boundary has been crossed, something unfair has happened, a need is going unmet.

A gentler reading might be: *just for today, do not let anger run the whole house.* Notice the heat when it arrives. Feel where it lives in your body. Ask what it is protecting. Then choose, as best you can, how you want to act. Sometimes that means speaking up clearly. Sometimes it means waiting until your breath has slowed.

### Just for today, do not worry

Worry is the mind's attempt to feel prepared for the future by rehearsing it. It is usually well-meaning and rarely as helpful as it promises to be.

The precept does not ask you to stop caring. It invites you to come back, again and again, to what is actually in front of you. One practical way to do this: when you catch yourself spinning, name the worry in one sentence, then ask, "Is there one thing I can do about this today?" If there is, do it or schedule it. If there is not, let your hands rest on your belly and feel three breaths. The worry may return. You can return too.

### Be grateful

Gratitude practice can feel forced, especially in hard seasons. It helps to keep it small and specific. Not "I am grateful for my life," but "I am grateful the tea was warm this morning," or "I am grateful my friend remembered to check in."

Gratitude in this sense is not a demand to feel happy. It is a practice of noticing what is *also* true alongside the difficulty. Pain and warmth can sit in the same day.

### Do your work honestly

Some translations say "work hard," others "be diligent" or "earn your living honestly." Many teachers understand this line as being less about productivity and more about integrity: doing what you do with sincerity, and including your inner work in that.

Honest work might mean finishing a small task with care rather than rushing it. It might mean being truthful about your limits. For people who already push too hard, doing your work honestly can include admitting that you need rest.

### Be kind to others

Kindness in the precepts is often read as extending to all living beings, and many practitioners include themselves in that circle. Kindness is not the same as pleasing everyone or abandoning your boundaries. A clear, warm "no" can be a kind act.

Try choosing one person each day, perhaps even someone you find difficult, and silently wishing them well: *may you be at ease.* Notice what happens in your own body when you do.

### A simple daily practice

1. **Morning:** Sit comfortably, bring your palms together at your chest, and read the five lines slowly, aloud or silently.
2. **Choose one:** Pick the precept that feels most alive for you today. Write it on a small card or in your phone.
3. **Midday pause:** Stop once in the middle of the day. Take one breath and recall your chosen line. No scoring, no grading.
4. **Evening:** Read the precepts again. Notice, without judgment, one moment when you lived your chosen line and one moment when you did not.
5. **Close:** Rest your hands on your heart and let the day be complete, just as it was.

### A note on perfection

The precepts are not a test you can fail. The phrase "just for today" contains its own forgiveness. If you were angry, worried, ungrateful, careless, or unkind today, you are human, and tomorrow is another today.

### Keeping it in perspective

The Gokai are a contemplative practice for everyday life. They are not a treatment for anxiety, depression, or difficulties with anger. If your feelings are overwhelming or affecting your safety or relationships, please reach out to a licensed professional. If you are in crisis, contact your local emergency number or a crisis line such as 988 in the US.`
    },
    es: {
      title: 'Vivir los cinco principios: solo por hoy',
      summary: 'Una mirada amable y práctica al Gokai, los cinco principios cotidianos del Reiki Usui, y a cómo vivirlos un día a la vez.',
      content: `### Por qué importan los principios

Cuando alguien escucha hablar de Reiki por primera vez, suele imaginar algo que sucede sobre una camilla. Sin embargo, Mikao Usui puso en el centro de su enseñanza un breve conjunto de principios para la vida diaria. En japonés se conocen como *Gokai*, y tradicionalmente se recitaban por la mañana y por la noche, a menudo sentados con las palmas unidas en *gassho*.

La versión más difundida comienza con las palabras "Solo por hoy". Ese comienzo es discretamente radical. No te pide que te conviertas en una persona siempre serena, agradecida e infinitamente amable. Te pide algo mucho más pequeño y posible: este único día. Y mañana, de nuevo, este único día.

### Los cinco principios

- Solo por hoy, no te enojes.
- Solo por hoy, no te preocupes.
- Sé agradecido.
- Trabaja con honestidad.
- Sé amable con los demás.

Las traducciones varían y es posible que encuentres palabras algo distintas según el linaje. Lo que sigue no es un comentario oficial, sino una invitación a explorar cómo puede vivir cada frase dentro de una vida común.

### Solo por hoy, no te enojes

Es fácil leer esta frase como "nunca sientas enojo", lo cual no sería posible ni saludable. El enojo suele traer información importante: se cruzó un límite, ocurrió algo injusto, hay una necesidad sin atender.

Una lectura más amable podría ser: *solo por hoy, no dejes que el enojo gobierne toda la casa.* Nota el calor cuando llega. Siente dónde vive en tu cuerpo. Pregúntate qué está protegiendo. Luego elige, como mejor puedas, cómo quieres actuar. A veces eso significa hablar con claridad. A veces significa esperar a que la respiración se calme.

### Solo por hoy, no te preocupes

La preocupación es el intento de la mente de sentirse preparada para el futuro ensayándolo. Suele tener buena intención y rara vez es tan útil como promete.

El principio no te pide que dejes de interesarte. Te invita a volver, una y otra vez, a lo que realmente tienes delante. Una forma práctica: cuando notes que estás dando vueltas, nombra la preocupación en una frase y pregúntate: "¿Hay algo que pueda hacer al respecto hoy?" Si lo hay, hazlo o agéndalo. Si no, apoya las manos en el vientre y siente tres respiraciones. La preocupación puede volver. Tú también puedes volver.

### Sé agradecido

La gratitud puede sentirse forzada, sobre todo en épocas difíciles. Ayuda mantenerla pequeña y concreta. No "agradezco mi vida", sino "agradezco que el té estuviera caliente esta mañana" o "agradezco que mi amiga se acordara de escribirme".

En este sentido, la gratitud no es una exigencia de sentirse feliz. Es la práctica de notar lo que *también* es verdad junto a la dificultad. El dolor y la calidez pueden convivir en el mismo día.

### Trabaja con honestidad

Algunas traducciones dicen "trabaja duro", otras "sé diligente" o "gánate la vida honestamente". Muchos maestros entienden esta frase menos como productividad y más como integridad: hacer lo que haces con sinceridad, incluido tu trabajo interior.

Trabajar con honestidad puede significar terminar una tarea pequeña con cuidado en lugar de apurarla. Puede significar ser sincero sobre tus límites. Para quienes ya se exigen demasiado, trabajar con honestidad puede incluir reconocer que necesitan descansar.

### Sé amable con los demás

La amabilidad en los principios suele entenderse como algo que se extiende a todos los seres vivos, y muchas personas que practican se incluyen a sí mismas en ese círculo. Ser amable no es complacer a todos ni abandonar tus límites. Un "no" claro y cálido puede ser un acto de amabilidad.

Prueba elegir a una persona cada día, quizá incluso a alguien que te resulte difícil, y desearle bien en silencio: *que estés en calma.* Observa qué sucede en tu propio cuerpo al hacerlo.

### Una práctica diaria sencilla

1. **Por la mañana:** Siéntate con comodidad, une las palmas frente al pecho y lee las cinco frases despacio, en voz alta o en silencio.
2. **Elige una:** Escoge el principio que hoy se sienta más vivo para ti. Escríbelo en una tarjeta o en tu teléfono.
3. **Pausa del mediodía:** Detente una vez a mitad del día. Respira una vez y recuerda tu frase. Sin puntajes ni calificaciones.
4. **Por la noche:** Vuelve a leer los principios. Nota, sin juzgar, un momento en que viviste tu frase y otro en que no.
5. **Cierre:** Apoya las manos en el corazón y deja que el día quede completo, tal como fue.

### Sobre la perfección

Los principios no son un examen que puedas reprobar. La expresión "solo por hoy" contiene su propio perdón. Si hoy sentiste enojo, preocupación, falta de gratitud, descuido o poca amabilidad, eres humano, y mañana será otro hoy.

### Mantener la perspectiva

El Gokai es una práctica contemplativa para la vida diaria. No es un tratamiento para la ansiedad, la depresión ni las dificultades con el enojo. Si tus emociones te desbordan o afectan tu seguridad o tus relaciones, busca a un profesional de salud con licencia. Si estás en crisis, comunícate con tu número local de emergencias o con una línea de crisis, como el 988 en Estados Unidos.`
    },
    'pt-BR': {
      title: 'Vivendo os cinco princípios: só por hoje',
      summary: 'Um olhar gentil e prático sobre o Gokai, os cinco princípios cotidianos do Reiki Usui, e sobre como vivê-los um dia de cada vez.',
      content: `### Por que os princípios importam

Quando alguém ouve falar de Reiki pela primeira vez, costuma imaginar algo que acontece numa maca. Mas Mikao Usui colocou no centro do seu ensinamento um pequeno conjunto de princípios para a vida diária. Em japonês, eles são chamados de *Gokai* e, tradicionalmente, eram recitados de manhã e à noite, muitas vezes com as mãos unidas em *gassho*.

A versão mais conhecida começa com as palavras "Só por hoje". Esse começo é discretamente radical. Ele não pede que você se torne uma pessoa sempre calma, grata e infinitamente gentil. Pede algo muito menor e mais possível: este único dia. E amanhã, de novo, este único dia.

### Os cinco princípios

- Só por hoje, não se zangue.
- Só por hoje, não se preocupe.
- Seja grato.
- Trabalhe com honestidade.
- Seja gentil com os outros.

As traduções variam, e você pode encontrar palavras um pouco diferentes conforme a linhagem. O que vem a seguir não é um comentário oficial, apenas um convite para explorar como cada frase pode viver dentro de uma vida comum.

### Só por hoje, não se zangue

É fácil ler esta frase como "nunca sinta raiva", o que não seria possível nem saudável. A raiva muitas vezes traz informações importantes: um limite foi ultrapassado, algo injusto aconteceu, uma necessidade não está sendo atendida.

Uma leitura mais gentil poderia ser: *só por hoje, não deixe a raiva comandar a casa inteira.* Perceba o calor quando ele chegar. Sinta onde ele mora no corpo. Pergunte o que ele está protegendo. Depois escolha, do melhor jeito possível, como quer agir. Às vezes isso significa falar com clareza. Às vezes significa esperar a respiração desacelerar.

### Só por hoje, não se preocupe

A preocupação é a tentativa da mente de se sentir preparada para o futuro ensaiando-o. Costuma ter boa intenção e raramente é tão útil quanto promete.

O princípio não pede que você deixe de se importar. Ele convida você a voltar, de novo e de novo, para o que está de fato à sua frente. Um jeito prático: quando perceber que está girando em círculos, dê nome à preocupação em uma frase e pergunte: "Existe algo que eu possa fazer sobre isso hoje?" Se existir, faça ou coloque na agenda. Se não, descanse as mãos na barriga e sinta três respirações. A preocupação pode voltar. Você também pode voltar.

### Seja grato

A gratidão pode parecer forçada, principalmente em fases difíceis. Ajuda mantê-la pequena e específica. Não "sou grato pela minha vida", mas "sou grato porque o chá estava quentinho hoje de manhã" ou "sou grato porque minha amiga lembrou de mandar mensagem".

Nesse sentido, gratidão não é uma exigência de se sentir feliz. É a prática de perceber o que *também* é verdade ao lado da dificuldade. Dor e aconchego podem caber no mesmo dia.

### Trabalhe com honestidade

Algumas traduções dizem "trabalhe duro", outras "seja diligente" ou "ganhe a vida honestamente". Muitos professores entendem esta frase menos como produtividade e mais como integridade: fazer o que você faz com sinceridade, incluindo seu trabalho interior.

Trabalhar com honestidade pode significar terminar uma pequena tarefa com cuidado em vez de correr com ela. Pode significar ser sincero sobre seus limites. Para quem já se cobra demais, trabalhar com honestidade pode incluir admitir que precisa descansar.

### Seja gentil com os outros

A gentileza nos princípios costuma ser entendida como algo que se estende a todos os seres vivos, e muitos praticantes incluem a si mesmos nesse círculo. Ser gentil não é agradar a todos nem abandonar seus limites. Um "não" claro e caloroso pode ser um ato de gentileza.

Experimente escolher uma pessoa por dia, talvez até alguém com quem você tenha dificuldade, e desejar-lhe o bem em silêncio: *que você fique em paz.* Perceba o que acontece no seu próprio corpo quando faz isso.

### Uma prática diária simples

1. **De manhã:** Sente-se confortavelmente, junte as mãos diante do peito e leia as cinco frases devagar, em voz alta ou em silêncio.
2. **Escolha uma:** Escolha o princípio que parece mais vivo para você hoje. Anote num cartão ou no celular.
3. **Pausa do meio-dia:** Pare uma vez no meio do dia. Respire uma vez e lembre da sua frase. Sem notas, sem avaliação.
4. **À noite:** Leia os princípios de novo. Perceba, sem julgamento, um momento em que você viveu sua frase e um em que não viveu.
5. **Encerramento:** Descanse as mãos no coração e deixe o dia ficar completo, do jeito que foi.

### Sobre a perfeição

Os princípios não são uma prova em que você pode ser reprovado. A expressão "só por hoje" já traz o seu próprio perdão. Se hoje você sentiu raiva, preocupação, ingratidão, descuido ou pouca gentileza, você é humano, e amanhã será outro hoje.

### Mantendo a perspectiva

O Gokai é uma prática contemplativa para o dia a dia. Não é tratamento para ansiedade, depressão ou dificuldades com a raiva. Se seus sentimentos estiverem transbordando ou afetando sua segurança ou seus relacionamentos, procure um profissional de saúde habilitado. Se estiver em crise, procure o número local de emergência ou uma linha de crise, como o 988 nos EUA.`
    }
  },
  {
    id: 'reiki-receiving',
    slug: 'receiving-reiki-consent-and-comfort',
    sort_order: 4,
    en: {
      title: 'Receiving Reiki Well: Consent, Comfort, and Good Questions',
      summary: 'What to ask before booking a session, how consent works on the table, and how to trust your own experience afterward.',
      content: `### Before you book

Receiving Reiki can be a quietly restful experience. Like any hands-on or close-presence practice, it goes best when you feel informed, respected, and free to choose. This article is not a recommendation of any particular practitioner. It is a set of questions and expectations to help you decide what feels right for you.

### What Reiki is, and what it is not

Reiki is a Japanese contemplative practice in which a practitioner rests their hands lightly on or just above the body while the recipient rests. People often describe the experience as calming or deeply restful. It is a complementary practice: it does not diagnose, treat, or cure illness, and it should never replace care from a doctor, therapist, or other licensed professional. A trustworthy practitioner will tell you the same.

### Questions worth asking

- **How did you train, and with whom?** Reiki training is not regulated in most places, so lineages and course lengths vary widely. A good practitioner will answer openly and without inflated claims.
- **What happens in a session?** Ask how long it lasts, whether you stay clothed (you should), and whether you will be lying down or seated.
- **Do you use touch?** Many practitioners offer both light touch and hands-off options. You get to choose.
- **How do you handle health concerns?** Listen for respect toward medical care. Be cautious of anyone who promises cures, tells you to stop medication, or discourages you from seeing a doctor.
- **What does it cost?** Clear pricing is a good sign. Pressure to buy a long series of sessions up front is not.

### Consent is ongoing

Consent is not a single form you sign at the beginning. It continues throughout the session. You can:

- Ask for no touch at all, or no touch on certain areas.
- Ask the practitioner to tell you before their hands move.
- Change your mind halfway through.
- Ask to pause, sit up, open your eyes, or end early.

A respectful practitioner will not touch the chest, groin, or buttocks, and will welcome your preferences without asking you to justify them. If something feels wrong, you are allowed to stop the session and leave. You do not owe anyone an explanation for protecting your comfort.

### Making yourself comfortable

- Wear soft, comfortable clothing.
- Mention any area that is painful, injured, or sensitive, and any position that is hard for you, such as lying flat.
- Ask for a pillow under your knees, a blanket, or the lights lowered.
- If silence feels uncomfortable, ask for soft music or occasional check-ins.
- If lying down feels too exposed, a seated session is a perfectly good option.

### What you might notice

Some people feel warmth, tingling, heaviness, or a deep sense of rest. Some fall asleep. Some feel emotional, and some feel nothing in particular. All of these are ordinary experiences. You do not need a special sensation for the time to have been worthwhile. It can simply be an hour where someone offers you calm attention and you are allowed to do nothing at all.

If strong emotions arise, that is okay too. You can let them move, ask for a pause, or talk about them afterward. A Reiki practitioner is not a therapist, so if a session stirs up something heavy that stays with you, consider speaking with a licensed counselor.

### After the session

Drink some water, move slowly, and give yourself a few quiet minutes before driving or returning to busy tasks. Notice how you feel over the next day or two, without needing to interpret it.

Then ask yourself a few honest questions:

- Did I feel safe?
- Did I feel respected?
- Did I feel pressured to book more or believe anything?

Your answers matter more than anyone's claims about what the session did.

### When to seek other care first

If you have new, severe, or unexplained symptoms, see a doctor before or alongside any complementary practice. If you are struggling emotionally and feel unsafe, contact your local emergency number or a crisis line such as 988 in the US. Reiki can sit alongside good care; it is never a replacement for it.

### Trust your own experience

Choosing care is an act of self-respect. The right practitioner will leave you feeling more like yourself, not more dependent on them. You can always try a single session first, bring a friend to wait nearby, or simply choose self-practice at home instead. There is no wrong way to take care of yourself here.`
    },
    es: {
      title: 'Recibir Reiki con cuidado: consentimiento, comodidad y buenas preguntas',
      summary: 'Qué preguntar antes de reservar una sesión, cómo funciona el consentimiento en la camilla y cómo confiar en tu propia experiencia después.',
      content: `### Antes de reservar

Recibir Reiki puede ser una experiencia de descanso profundo y tranquilo. Como cualquier práctica de contacto o presencia cercana, funciona mejor cuando te sientes informado, respetado y libre de elegir. Este artículo no recomienda a ningún practicante en particular. Es un conjunto de preguntas y expectativas para ayudarte a decidir qué se siente bien para ti.

### Qué es el Reiki y qué no es

El Reiki es una práctica contemplativa japonesa en la que una persona apoya las manos suavemente sobre el cuerpo, o justo por encima, mientras quien recibe descansa. Muchas personas describen la experiencia como calmante o muy reparadora. Es una práctica complementaria: no diagnostica, no trata ni cura enfermedades, y nunca debe reemplazar la atención de un médico, terapeuta u otro profesional con licencia. Un practicante confiable te dirá lo mismo.

### Preguntas que vale la pena hacer

- **¿Cómo te formaste y con quién?** En la mayoría de los lugares la formación en Reiki no está regulada, por lo que los linajes y la duración de los cursos varían mucho. Un buen practicante responderá con apertura y sin promesas exageradas.
- **¿Qué ocurre en una sesión?** Pregunta cuánto dura, si permanecerás vestido (deberías) y si estarás acostado o sentado.
- **¿Usas el contacto físico?** Muchos practicantes ofrecen contacto ligero y también opciones sin tocar. Tú eliges.
- **¿Cómo manejas los temas de salud?** Presta atención al respeto hacia la atención médica. Desconfía de quien prometa curas, te diga que dejes tus medicamentos o te desanime de ver a un médico.
- **¿Cuánto cuesta?** Un precio claro es buena señal. La presión para comprar una larga serie de sesiones por adelantado no lo es.

### El consentimiento es continuo

El consentimiento no es un formulario que firmas al comienzo. Continúa durante toda la sesión. Puedes:

- Pedir que no haya contacto físico, o que no se toquen ciertas zonas.
- Pedir que te avisen antes de mover las manos.
- Cambiar de opinión a mitad de la sesión.
- Pedir una pausa, sentarte, abrir los ojos o terminar antes.

Un practicante respetuoso no toca el pecho, la zona genital ni los glúteos, y recibe tus preferencias sin pedirte que las justifiques. Si algo se siente mal, puedes detener la sesión e irte. No le debes explicaciones a nadie por proteger tu comodidad.

### Ponerte cómodo

- Usa ropa suave y cómoda.
- Menciona cualquier zona con dolor, lesión o sensibilidad, y cualquier postura que te cueste, como estar boca arriba.
- Pide una almohada bajo las rodillas, una manta o que bajen las luces.
- Si el silencio te incomoda, pide música suave o que te pregunten de vez en cuando cómo estás.
- Si acostarte te hace sentir demasiado expuesto, una sesión sentado es una opción perfectamente válida.

### Lo que podrías notar

Algunas personas sienten calor, hormigueo, pesadez o un descanso profundo. Algunas se duermen. Algunas se emocionan y otras no sienten nada en particular. Todas son experiencias comunes. No necesitas una sensación especial para que el tiempo haya valido la pena. Puede ser simplemente una hora en la que alguien te ofrece atención tranquila y tú tienes permiso para no hacer nada.

Si surgen emociones fuertes, también está bien. Puedes dejarlas fluir, pedir una pausa o hablar de ellas después. Un practicante de Reiki no es terapeuta, así que si una sesión remueve algo pesado que se queda contigo, considera hablar con un profesional de salud mental con licencia.

### Después de la sesión

Toma agua, muévete despacio y date unos minutos de calma antes de manejar o volver a tareas exigentes. Observa cómo te sientes durante el día o los dos días siguientes, sin necesidad de interpretarlo.

Luego hazte algunas preguntas honestas:

- ¿Me sentí seguro?
- ¿Me sentí respetado?
- ¿Sentí presión para reservar más sesiones o para creer algo?

Tus respuestas importan más que lo que cualquiera diga sobre lo que hizo la sesión.

### Cuándo buscar otra atención primero

Si tienes síntomas nuevos, intensos o sin explicación, consulta a un médico antes o junto con cualquier práctica complementaria. Si estás pasando por un momento emocional difícil y no te sientes a salvo, comunícate con tu número local de emergencias o con una línea de crisis, como el 988 en Estados Unidos. El Reiki puede acompañar una buena atención; nunca la reemplaza.

### Confía en tu propia experiencia

Elegir cuidarte es un acto de respeto hacia ti. El practicante adecuado te dejará sintiéndote más tú, no más dependiente de él. Siempre puedes probar primero una sola sesión, llevar a alguien de confianza que espere cerca o simplemente elegir la autopráctica en casa. Aquí no hay una forma equivocada de cuidarte.`
    },
    'pt-BR': {
      title: 'Receber Reiki com cuidado: consentimento, conforto e boas perguntas',
      summary: 'O que perguntar antes de marcar uma sessão, como funciona o consentimento na maca e como confiar na sua própria experiência depois.',
      content: `### Antes de marcar

Receber Reiki pode ser uma experiência de descanso profundo e tranquilo. Como qualquer prática de toque ou presença próxima, ela funciona melhor quando você se sente informado, respeitado e livre para escolher. Este artigo não recomenda nenhum praticante específico. É um conjunto de perguntas e expectativas para ajudar você a decidir o que faz sentido para você.

### O que o Reiki é, e o que não é

O Reiki é uma prática contemplativa japonesa em que uma pessoa apoia as mãos suavemente sobre o corpo, ou logo acima dele, enquanto quem recebe descansa. Muitas pessoas descrevem a experiência como calmante ou profundamente restauradora. É uma prática complementar: não diagnostica, não trata nem cura doenças, e nunca deve substituir o cuidado de um médico, terapeuta ou outro profissional habilitado. Um praticante confiável dirá o mesmo.

### Perguntas que vale a pena fazer

- **Como e com quem você se formou?** Na maioria dos lugares a formação em Reiki não é regulamentada, então linhagens e duração dos cursos variam muito. Um bom praticante responde com abertura e sem promessas exageradas.
- **O que acontece numa sessão?** Pergunte quanto tempo dura, se você fica vestido (deveria) e se ficará deitado ou sentado.
- **Você usa toque?** Muitos praticantes oferecem toque leve e também opções sem toque. Você escolhe.
- **Como você lida com questões de saúde?** Observe se há respeito pelo cuidado médico. Desconfie de quem promete cura, manda parar medicamentos ou desencoraja você de ir ao médico.
- **Quanto custa?** Preço claro é um bom sinal. Pressão para comprar um pacote longo de sessões logo de início, não.

### O consentimento é contínuo

Consentimento não é um formulário que você assina no começo. Ele continua durante toda a sessão. Você pode:

- Pedir que não haja toque nenhum, ou que certas áreas não sejam tocadas.
- Pedir que o praticante avise antes de mover as mãos.
- Mudar de ideia no meio da sessão.
- Pedir uma pausa, sentar, abrir os olhos ou encerrar antes.

Um praticante respeitoso não toca o peito, a região genital nem os glúteos, e acolhe suas preferências sem pedir justificativa. Se algo parecer errado, você pode interromper a sessão e ir embora. Você não deve explicação a ninguém por proteger o seu conforto.

### Deixando-se confortável

- Use roupas macias e confortáveis.
- Avise sobre qualquer área com dor, lesão ou sensibilidade, e qualquer posição difícil para você, como ficar deitado de barriga para cima.
- Peça um travesseiro sob os joelhos, uma manta ou luzes mais baixas.
- Se o silêncio incomodar, peça música suave ou que perguntem de vez em quando como você está.
- Se ficar deitado parecer exposto demais, uma sessão sentado é uma ótima opção.

### O que você pode perceber

Algumas pessoas sentem calor, formigamento, peso ou um descanso profundo. Algumas dormem. Algumas se emocionam, e outras não sentem nada em especial. Tudo isso é comum. Você não precisa ter uma sensação especial para que o tempo tenha valido a pena. Pode ser simplesmente uma hora em que alguém oferece atenção tranquila e você tem permissão para não fazer nada.

Se surgirem emoções fortes, tudo bem também. Você pode deixá-las passar, pedir uma pausa ou conversar sobre elas depois. Um praticante de Reiki não é terapeuta; então, se uma sessão mexer com algo pesado que continue com você, considere conversar com um psicólogo ou outro profissional habilitado.

### Depois da sessão

Beba água, mova-se devagar e dê a si mesmo alguns minutos de calma antes de dirigir ou voltar a tarefas agitadas. Observe como você se sente nos próximos um ou dois dias, sem precisar interpretar.

Depois, faça a si mesmo algumas perguntas honestas:

- Eu me senti seguro?
- Eu me senti respeitado?
- Senti pressão para marcar mais sessões ou para acreditar em algo?

Suas respostas importam mais do que qualquer afirmação sobre o que a sessão fez.

### Quando buscar outro cuidado primeiro

Se você tem sintomas novos, fortes ou sem explicação, procure um médico antes ou junto com qualquer prática complementar. Se estiver passando por um momento emocional difícil e não se sentir seguro, procure o número local de emergência ou uma linha de crise, como o 988 nos EUA. O Reiki pode caminhar ao lado de um bom cuidado; nunca o substitui.

### Confie na sua própria experiência

Escolher se cuidar é um ato de respeito por si. O praticante certo vai deixar você se sentindo mais você mesmo, e não mais dependente dele. Você sempre pode experimentar uma única sessão primeiro, levar alguém de confiança para esperar por perto ou simplesmente escolher a autoprática em casa. Não existe jeito errado de se cuidar aqui.`
    }
  },
  {
    id: 'reiki-hara-breath',
    slug: 'breath-and-the-hara',
    sort_order: 5,
    en: {
      title: 'Breath and the Hara: Joshin Kokyu Ho for Everyday Calm',
      summary: 'A simple, grounded introduction to a traditional Japanese breathing practice that gathers attention in the lower belly.',
      content: `### Coming home to the belly

In many Japanese arts, from martial arts to calligraphy to the tea ceremony, attention is often gathered in the *hara*, the lower belly. A point a few finger-widths below the navel is called the *tanden* (in Chinese traditions, the *dantian*). It is described as a centre of stability: when attention rests there, the body tends to feel more settled and upright.

Several Japanese-style Reiki lineages teach a short sequence of exercises called *Hatsurei Ho*. One part of it is *Joshin Kokyu Ho*, often translated as "the breathing method for purifying the spirit," or more simply, "the breath that settles the mind." You do not need any training or belief to explore a simplified version. At its heart, it is a slow, attentive breath with your attention resting low in the body.

### Why the belly?

When we are stressed, breath tends to rise into the chest and become shallow and quick. Bringing awareness down into the belly can gently invite a slower, fuller breath. Longer, softer exhales are widely associated with the body's rest-and-digest state. You don't need to force anything. Simply resting your attention lower is often enough to change the rhythm.

There is also something symbolic here. The head is where we plan, rehearse, and worry. The belly is closer to the ground, to the pelvis, to the legs that carry us. Bringing attention down can feel like stepping off a busy street into a quiet room.

### A simple practice (about ten minutes)

1. **Settle.** Sit on a chair with both feet on the floor, or on a cushion with your hips a little higher than your knees. Let your spine be upright but not stiff.
2. **Hands.** Rest your hands in your lap, palms up, or place them gently on your lower belly.
3. **Arrive.** Take a few ordinary breaths. Notice the chair, the floor, the air on your skin.
4. **Breathe in.** Through your nose, breathe in slowly and imagine the breath travelling all the way down to the tanden, a little below your navel. Let the belly soften and expand.
5. **Pause lightly.** At the top of the inhale, rest for a moment without holding tightly.
6. **Breathe out.** Exhale slowly through the nose or softly parted lips. Some teachers invite you to imagine the breath spreading outward through the whole body, to your fingertips and toes, and gently beyond the skin.
7. **Continue.** Repeat for five to ten minutes. When your mind wanders, and it will, simply return to the belly.
8. **Close.** Bring your palms together at your chest in *gassho*, take one more breath, and notice how you feel.

### If breath focus is hard for you

For some people, paying close attention to breathing brings up anxiety, especially people living with asthma, panic, or a history of trauma. That is a normal response, not a failure. You can:

- Keep your eyes open with your gaze resting softly on the floor.
- Rest your attention on your hands or feet instead of the breath.
- Breathe naturally without trying to slow down.
- Stop at any time.

Practices like this should feel like an invitation, never an obligation. If any exercise makes you feel dizzy or lightheaded, stop and breathe normally.

### Bringing it into the day

You don't need ten quiet minutes for this to be useful. Try:

- Three belly breaths before opening your email.
- One slow breath into the hara while you wait for the kettle to boil.
- Resting a hand on your lower belly during a difficult conversation, as a private reminder to slow down.

Over time, the belly can become a place you know how to return to, the way you know the way home in the dark.

### A gentle reflection

After practicing for a week, you might ask yourself:

- When during the day do I notice my breath rising into my chest?
- What helps me come back down?
- What changes, if anything, when I return to the hara?

Write down whatever you notice. There is no right answer, and "nothing much" is a perfectly honest one.

### Keeping perspective

Joshin Kokyu Ho is a contemplative practice. It is not a medical breathing therapy and does not treat respiratory, heart, or anxiety conditions. If you have a breathing or heart condition, check with your clinician before practicing extended breath exercises. If you ever feel chest pain or cannot catch your breath, seek medical help immediately.`
    },
    es: {
      title: 'La respiración y el hara: Joshin Kokyu Ho para la calma cotidiana',
      summary: 'Una introducción sencilla y práctica a una respiración tradicional japonesa que reúne la atención en la parte baja del vientre.',
      content: `### Volver al vientre

En muchas artes japonesas, desde las artes marciales hasta la caligrafía y la ceremonia del té, la atención suele reunirse en el *hara*, la parte baja del vientre. Un punto situado unos dedos por debajo del ombligo se llama *tanden* (en las tradiciones chinas, *dantian*). Se describe como un centro de estabilidad: cuando la atención descansa ahí, el cuerpo tiende a sentirse más asentado y erguido.

Varios linajes de Reiki de estilo japonés enseñan una breve secuencia de ejercicios llamada *Hatsurei Ho*. Una de sus partes es *Joshin Kokyu Ho*, que suele traducirse como "método de respiración para purificar el espíritu" o, de forma más sencilla, "la respiración que serena la mente". No necesitas formación ni creencias particulares para explorar una versión simplificada. En esencia, es una respiración lenta y atenta con la atención apoyada en la parte baja del cuerpo.

### ¿Por qué el vientre?

Cuando estamos estresados, la respiración tiende a subir al pecho y volverse corta y rápida. Llevar la conciencia hacia el vientre puede invitar con suavidad a una respiración más lenta y amplia. Las exhalaciones largas y suaves suelen asociarse con el estado de descanso y digestión del cuerpo. No hace falta forzar nada. Muchas veces basta con apoyar la atención más abajo para que el ritmo cambie.

También hay algo simbólico. La cabeza es donde planeamos, ensayamos y nos preocupamos. El vientre está más cerca del suelo, de la pelvis, de las piernas que nos sostienen. Bajar la atención puede sentirse como salir de una calle ruidosa y entrar en una habitación tranquila.

### Una práctica sencilla (unos diez minutos)

1. **Acomódate.** Siéntate en una silla con ambos pies en el suelo, o sobre un cojín con la cadera un poco más alta que las rodillas. Deja la columna erguida pero sin rigidez.
2. **Manos.** Apoya las manos en el regazo con las palmas hacia arriba, o colócalas suavemente sobre la parte baja del vientre.
3. **Llega.** Haz algunas respiraciones normales. Nota la silla, el suelo, el aire sobre la piel.
4. **Inhala.** Por la nariz, inhala despacio e imagina que el aire viaja hasta el tanden, un poco por debajo del ombligo. Deja que el vientre se suavice y se expanda.
5. **Pausa ligera.** Al final de la inhalación, descansa un instante sin retener con fuerza.
6. **Exhala.** Suelta el aire despacio por la nariz o por los labios entreabiertos. Algunos maestros invitan a imaginar que la respiración se expande por todo el cuerpo, hasta las yemas de los dedos de manos y pies, y suavemente más allá de la piel.
7. **Continúa.** Repite durante cinco a diez minutos. Cuando la mente se distraiga, y lo hará, simplemente vuelve al vientre.
8. **Cierre.** Une las palmas frente al pecho en *gassho*, haz una respiración más y observa cómo te sientes.

### Si enfocarte en la respiración te cuesta

Para algunas personas, prestar mucha atención a la respiración despierta ansiedad, en especial para quienes viven con asma, pánico o antecedentes de trauma. Es una respuesta normal, no un fracaso. Puedes:

- Mantener los ojos abiertos con la mirada suave sobre el suelo.
- Apoyar la atención en las manos o los pies en lugar de la respiración.
- Respirar con naturalidad sin intentar ir más lento.
- Detenerte en cualquier momento.

Prácticas como esta deben sentirse como una invitación, nunca como una obligación. Si algún ejercicio te provoca mareo, detente y respira con normalidad.

### Llevarlo al día a día

No necesitas diez minutos de silencio para que esto sea útil. Prueba:

- Tres respiraciones al vientre antes de abrir tu correo.
- Una respiración lenta hacia el hara mientras esperas que hierva el agua.
- Apoyar una mano en la parte baja del vientre durante una conversación difícil, como recordatorio privado para ir más despacio.

Con el tiempo, el vientre puede convertirse en un lugar al que sabes volver, como quien conoce el camino a casa en la oscuridad.

### Una reflexión suave

Después de practicar durante una semana, puedes preguntarte:

- ¿En qué momentos del día noto que la respiración sube al pecho?
- ¿Qué me ayuda a volver a bajar?
- ¿Qué cambia, si algo cambia, cuando regreso al hara?

Escribe lo que notes. No hay una respuesta correcta, y "no mucho" es una respuesta perfectamente honesta.

### Mantener la perspectiva

Joshin Kokyu Ho es una práctica contemplativa. No es una terapia respiratoria médica y no trata condiciones respiratorias, cardíacas ni de ansiedad. Si tienes alguna condición respiratoria o cardíaca, consulta con tu médico antes de practicar ejercicios de respiración prolongados. Si alguna vez sientes dolor en el pecho o no logras recuperar el aliento, busca atención médica de inmediato.`
    },
    'pt-BR': {
      title: 'A respiração e o hara: Joshin Kokyu Ho para a calma do dia a dia',
      summary: 'Uma introdução simples e prática a uma respiração tradicional japonesa que reúne a atenção no baixo ventre.',
      content: `### Voltar para a barriga

Em muitas artes japonesas, das artes marciais à caligrafia e à cerimônia do chá, a atenção costuma se reunir no *hara*, o baixo ventre. Um ponto alguns dedos abaixo do umbigo é chamado de *tanden* (nas tradições chinesas, *dantian*). Ele é descrito como um centro de estabilidade: quando a atenção repousa ali, o corpo tende a se sentir mais assentado e ereto.

Várias linhagens de Reiki de estilo japonês ensinam uma curta sequência de exercícios chamada *Hatsurei Ho*. Uma de suas partes é o *Joshin Kokyu Ho*, muitas vezes traduzido como "método de respiração para purificar o espírito" ou, de forma mais simples, "a respiração que acalma a mente". Você não precisa de formação nem de crenças específicas para explorar uma versão simplificada. Em essência, é uma respiração lenta e atenta, com a atenção repousando na parte baixa do corpo.

### Por que a barriga?

Quando estamos estressados, a respiração tende a subir para o peito e ficar curta e rápida. Levar a consciência para a barriga pode convidar, com suavidade, a uma respiração mais lenta e ampla. Expirações longas e suaves costumam ser associadas ao estado de descanso e digestão do corpo. Não é preciso forçar nada. Muitas vezes, basta repousar a atenção mais embaixo para o ritmo mudar.

Também há algo simbólico aqui. A cabeça é onde planejamos, ensaiamos e nos preocupamos. A barriga está mais perto do chão, da pelve, das pernas que nos carregam. Levar a atenção para baixo pode parecer sair de uma rua barulhenta e entrar num quarto silencioso.

### Uma prática simples (cerca de dez minutos)

1. **Acomode-se.** Sente-se numa cadeira com os dois pés no chão, ou numa almofada com o quadril um pouco mais alto que os joelhos. Deixe a coluna ereta, mas sem rigidez.
2. **Mãos.** Descanse as mãos no colo com as palmas para cima, ou coloque-as suavemente no baixo ventre.
3. **Chegue.** Faça algumas respirações comuns. Perceba a cadeira, o chão, o ar na pele.
4. **Inspire.** Pelo nariz, inspire devagar e imagine o ar descendo até o tanden, um pouco abaixo do umbigo. Deixe a barriga se soltar e expandir.
5. **Pausa leve.** No fim da inspiração, descanse por um instante sem prender com força.
6. **Expire.** Solte o ar devagar pelo nariz ou pelos lábios entreabertos. Alguns professores convidam a imaginar a respiração se espalhando por todo o corpo, até as pontas dos dedos das mãos e dos pés, e suavemente para além da pele.
7. **Continue.** Repita por cinco a dez minutos. Quando a mente se distrair, e ela vai, apenas volte para a barriga.
8. **Encerramento.** Junte as mãos diante do peito em *gassho*, faça mais uma respiração e perceba como você se sente.

### Se focar na respiração for difícil

Para algumas pessoas, prestar muita atenção à respiração desperta ansiedade, especialmente para quem convive com asma, pânico ou histórico de trauma. Essa é uma reação normal, não um fracasso. Você pode:

- Manter os olhos abertos, com o olhar suave pousado no chão.
- Repousar a atenção nas mãos ou nos pés em vez da respiração.
- Respirar naturalmente, sem tentar desacelerar.
- Parar a qualquer momento.

Práticas como esta devem ser um convite, nunca uma obrigação. Se algum exercício causar tontura, pare e respire normalmente.

### Levando para o dia a dia

Você não precisa de dez minutos de silêncio para isso ser útil. Experimente:

- Três respirações na barriga antes de abrir o e-mail.
- Uma respiração lenta até o hara enquanto espera a água ferver.
- Descansar uma mão no baixo ventre durante uma conversa difícil, como um lembrete particular para desacelerar.

Com o tempo, a barriga pode se tornar um lugar para onde você sabe voltar, como quem conhece o caminho de casa no escuro.

### Uma reflexão gentil

Depois de praticar por uma semana, você pode se perguntar:

- Em que momentos do dia percebo a respiração subindo para o peito?
- O que me ajuda a voltar para baixo?
- O que muda, se é que muda algo, quando volto ao hara?

Anote o que perceber. Não existe resposta certa, e "quase nada" é uma resposta perfeitamente honesta.

### Mantendo a perspectiva

O Joshin Kokyu Ho é uma prática contemplativa. Não é uma terapia respiratória médica e não trata condições respiratórias, cardíacas ou de ansiedade. Se você tem alguma condição respiratória ou cardíaca, converse com seu médico antes de fazer exercícios de respiração prolongados. Se sentir dor no peito ou não conseguir recuperar o fôlego, procure atendimento médico imediatamente.`
    }
  },
  {
    id: 'reiki-hard-seasons',
    slug: 'stillness-in-hard-seasons',
    sort_order: 6,
    en: {
      title: 'Stillness in Hard Seasons: Contemplative Care Alongside Grief, Illness, and Worry',
      summary: 'How Reiki, meditation, and simple ritual can offer companionship in difficult times, without adding pressure or replacing real-world care.',
      content: `### When life is heavy

There are seasons when the ordinary supports of life feel thin: a diagnosis, a death, a long illness in someone we love, a lost job, a relationship ending. In these seasons, many people turn to spiritual and contemplative practices, including Reiki, meditation, prayer, and ritual, looking for somewhere to rest.

These practices can offer real comfort. They can also be misunderstood, or even misused, in ways that add pressure at the exact moment we need gentleness. This article is an invitation to use contemplative care wisely in hard seasons: as companionship, not as a test or a cure.

### What contemplative care can offer

- **A pause.** Even ten minutes of stillness can create a small space between you and the storm.
- **Presence.** Many people describe feeling less alone when they rest a hand on their heart, sit in silence, or receive calm, kind attention from another person.
- **Meaning and ritual.** Lighting a candle, saying a name, or reciting a familiar phrase can give shape to feelings that are otherwise shapeless.
- **Connection to something larger.** For some, this is God or the sacred. For others, it is nature, ancestors, or the simple fact of being one human among many who have suffered and endured.

### What it cannot do

Contemplative practices do not cure illness, reverse loss, or fix what is broken. They are not a substitute for medical treatment, grief support, or therapy. Be cautious with any message, from others or from your own mind, that suggests:

- If you had practiced harder, you would not be sick.
- If you had enough faith or "high enough vibration," this would not have happened.
- Feeling sad, angry, or afraid means you are doing it wrong.

Ideas like these can deepen shame at a time when you most need care. Illness and loss are part of every human life, including the lives of the most devoted practitioners.

### Practices for heavy days

These are small on purpose. On hard days, small is enough.

1. **Hands where it hurts.** Rest one hand on your heart and one on your belly, or wherever you feel the heaviness. Breathe. You don't need to change anything; you are simply keeping yourself company.
2. **One sentence of truth.** Say or write: "Right now, this is what is hard: ..." Naming it plainly can bring a little steadiness.
3. **Just for today.** Borrow the opening words of the Reiki precepts. "Just for today, I will rest when I can." "Just for today, I will let someone help."
4. **Sitting with, not fixing.** If you are caring for someone who is ill or grieving, try simply sitting with them for a few minutes, with no advice and no need to fill the silence.
5. **Close the day kindly.** Before sleep, name one moment that was bearable, and one person or thing that helped, however small.

### Spiritual questions are welcome

Hard seasons often bring big questions: *Why did this happen? Where is the meaning? What do I believe now?* It is okay not to have answers. It is okay if your beliefs are shifting, or if you feel angry at God, the universe, or life itself. Anger and doubt have a long history inside many spiritual traditions; they are not signs that you have lost your way.

You might find it helpful to talk with a trusted spiritual companion, chaplain, or faith leader, or with a friend who can listen without rushing you toward a neat conclusion. Some questions can be held open for a long time.

### When to seek more support

Contemplative practice works best alongside other forms of care. Please reach out to a doctor, counselor, or grief support service if:

- Your sadness, fear, or numbness has lasted for weeks and is affecting sleep, eating, or daily life.
- You are relying on alcohol or other substances to get through the day.
- You feel unable to care for yourself or the people who depend on you.

If you are thinking about ending your life or harming yourself, please contact your local emergency number or a crisis line such as 988 in the US right away. You deserve immediate, human support.

### A closing thought

In hard seasons, the most spiritual thing you can do may also be the simplest: breathe, rest, accept help, and be gentle with yourself. Stillness does not have to solve anything. It can simply remind you that, even now, you are here, and you are not alone.`
    },
    es: {
      title: 'Quietud en tiempos difíciles: cuidado contemplativo en el duelo, la enfermedad y la preocupación',
      summary: 'Cómo el Reiki, la meditación y los rituales sencillos pueden acompañar en momentos difíciles, sin añadir presión ni reemplazar la atención necesaria.',
      content: `### Cuando la vida pesa

Hay épocas en que los apoyos habituales de la vida se sienten frágiles: un diagnóstico, una muerte, la enfermedad prolongada de alguien que amamos, la pérdida de un trabajo, el fin de una relación. En esos momentos, muchas personas se acercan a prácticas espirituales y contemplativas, como el Reiki, la meditación, la oración o los rituales, buscando un lugar donde descansar.

Estas prácticas pueden ofrecer un consuelo real. También pueden malinterpretarse, o incluso usarse mal, de maneras que añaden presión justo cuando más necesitamos suavidad. Este artículo es una invitación a usar el cuidado contemplativo con sabiduría en tiempos difíciles: como compañía, no como examen ni como cura.

### Lo que el cuidado contemplativo puede ofrecer

- **Una pausa.** Incluso diez minutos de quietud pueden abrir un pequeño espacio entre tú y la tormenta.
- **Presencia.** Muchas personas dicen sentirse menos solas cuando apoyan una mano en el corazón, se sientan en silencio o reciben la atención tranquila y amable de otra persona.
- **Sentido y ritual.** Encender una vela, decir un nombre o repetir una frase conocida puede darle forma a emociones que de otro modo no la tienen.
- **Conexión con algo más grande.** Para algunas personas es Dios o lo sagrado. Para otras, la naturaleza, los ancestros o el simple hecho de ser un ser humano entre muchos que han sufrido y han seguido adelante.

### Lo que no puede hacer

Las prácticas contemplativas no curan enfermedades, no revierten pérdidas ni arreglan lo que se rompió. No sustituyen el tratamiento médico, el acompañamiento en el duelo ni la terapia. Desconfía de cualquier mensaje, venga de otros o de tu propia mente, que sugiera:

- Que si hubieras practicado más, no estarías enfermo.
- Que si tuvieras suficiente fe o una "vibración lo bastante alta", esto no habría pasado.
- Que sentir tristeza, enojo o miedo significa que lo estás haciendo mal.

Ideas como estas pueden profundizar la vergüenza justo cuando más necesitas cuidado. La enfermedad y la pérdida forman parte de toda vida humana, incluso de la vida de quienes practican con mayor devoción.

### Prácticas para días pesados

Son pequeñas a propósito. En los días difíciles, lo pequeño es suficiente.

1. **Las manos donde duele.** Apoya una mano en el corazón y otra en el vientre, o donde sientas el peso. Respira. No necesitas cambiar nada; simplemente te estás haciendo compañía.
2. **Una frase de verdad.** Di o escribe: "En este momento, lo difícil es: ..." Nombrarlo con sencillez puede traer un poco de estabilidad.
3. **Solo por hoy.** Toma prestadas las primeras palabras de los principios del Reiki. "Solo por hoy, descansaré cuando pueda." "Solo por hoy, dejaré que alguien me ayude."
4. **Acompañar, no arreglar.** Si cuidas a alguien que está enfermo o en duelo, prueba simplemente sentarte a su lado unos minutos, sin consejos y sin necesidad de llenar el silencio.
5. **Cerrar el día con amabilidad.** Antes de dormir, nombra un momento que fue soportable y una persona o cosa que ayudó, por pequeña que sea.

### Las preguntas espirituales son bienvenidas

Los tiempos difíciles suelen traer grandes preguntas: *¿Por qué pasó esto? ¿Dónde está el sentido? ¿En qué creo ahora?* Está bien no tener respuestas. Está bien si tus creencias están cambiando, o si sientes enojo con Dios, con el universo o con la vida misma. El enojo y la duda tienen una larga historia dentro de muchas tradiciones espirituales; no son señales de que te hayas perdido.

Puede ayudarte conversar con un acompañante espiritual de confianza, un capellán o un líder de tu comunidad de fe, o con una amistad que sepa escuchar sin apurarte hacia una conclusión cerrada. Algunas preguntas pueden quedar abiertas por mucho tiempo.

### Cuándo buscar más apoyo

La práctica contemplativa funciona mejor junto con otras formas de cuidado. Busca a un médico, un profesional de salud mental o un servicio de acompañamiento en el duelo si:

- La tristeza, el miedo o el entumecimiento duran semanas y afectan tu sueño, tu alimentación o tu vida diaria.
- Dependes del alcohol u otras sustancias para atravesar el día.
- Sientes que no puedes cuidarte a ti o a las personas que dependen de ti.

Si estás pensando en quitarte la vida o en hacerte daño, comunícate de inmediato con tu número local de emergencias o con una línea de crisis, como el 988 en Estados Unidos. Mereces apoyo humano inmediato.

### Una última reflexión

En tiempos difíciles, lo más espiritual que puedes hacer quizá sea también lo más sencillo: respirar, descansar, aceptar ayuda y tratarte con suavidad. La quietud no tiene que resolver nada. Puede simplemente recordarte que, incluso ahora, estás aquí y no estás solo.`
    },
    'pt-BR': {
      title: 'Quietude em tempos difíceis: cuidado contemplativo no luto, na doença e na preocupação',
      summary: 'Como o Reiki, a meditação e rituais simples podem fazer companhia em momentos difíceis, sem aumentar a pressão nem substituir o cuidado necessário.',
      content: `### Quando a vida pesa

Há fases em que os apoios comuns da vida parecem frágeis: um diagnóstico, uma morte, a doença longa de alguém que amamos, a perda de um emprego, o fim de um relacionamento. Nesses momentos, muitas pessoas buscam práticas espirituais e contemplativas, como o Reiki, a meditação, a oração ou os rituais, procurando um lugar para descansar.

Essas práticas podem oferecer um conforto real. Também podem ser mal compreendidas, ou até mal usadas, de formas que aumentam a pressão justamente quando mais precisamos de delicadeza. Este artigo é um convite a usar o cuidado contemplativo com sabedoria em tempos difíceis: como companhia, não como prova nem como cura.

### O que o cuidado contemplativo pode oferecer

- **Uma pausa.** Mesmo dez minutos de quietude podem abrir um pequeno espaço entre você e a tempestade.
- **Presença.** Muitas pessoas contam que se sentem menos sozinhas quando descansam a mão no coração, ficam em silêncio ou recebem a atenção calma e gentil de outra pessoa.
- **Sentido e ritual.** Acender uma vela, dizer um nome ou repetir uma frase conhecida pode dar forma a sentimentos que, de outro jeito, ficariam sem forma.
- **Conexão com algo maior.** Para alguns, é Deus ou o sagrado. Para outros, é a natureza, os antepassados ou o simples fato de ser um ser humano entre muitos que sofreram e seguiram em frente.

### O que ele não pode fazer

Práticas contemplativas não curam doenças, não desfazem perdas nem consertam o que se quebrou. Não substituem tratamento médico, apoio no luto ou terapia. Desconfie de qualquer mensagem, vinda dos outros ou da sua própria mente, que sugira:

- Que, se você tivesse praticado mais, não estaria doente.
- Que, se tivesse fé suficiente ou uma "vibração alta o bastante", isso não teria acontecido.
- Que sentir tristeza, raiva ou medo significa que você está fazendo errado.

Ideias assim podem aprofundar a vergonha justamente quando você mais precisa de cuidado. Doença e perda fazem parte de toda vida humana, inclusive da vida dos praticantes mais dedicados.

### Práticas para dias pesados

Elas são pequenas de propósito. Em dias difíceis, pequeno é suficiente.

1. **As mãos onde dói.** Descanse uma mão no coração e outra na barriga, ou onde sentir o peso. Respire. Você não precisa mudar nada; está apenas fazendo companhia a si mesmo.
2. **Uma frase de verdade.** Diga ou escreva: "Agora, o que está difícil é: ..." Nomear com simplicidade pode trazer um pouco de firmeza.
3. **Só por hoje.** Pegue emprestadas as primeiras palavras dos princípios do Reiki. "Só por hoje, vou descansar quando puder." "Só por hoje, vou deixar alguém me ajudar."
4. **Estar junto, não consertar.** Se você cuida de alguém doente ou enlutado, experimente apenas sentar ao lado dessa pessoa por alguns minutos, sem conselhos e sem precisar preencher o silêncio.
5. **Encerrar o dia com gentileza.** Antes de dormir, nomeie um momento que foi suportável e uma pessoa ou coisa que ajudou, por menor que seja.

### Perguntas espirituais são bem-vindas

Tempos difíceis costumam trazer grandes perguntas: *Por que isso aconteceu? Onde está o sentido? No que eu acredito agora?* Tudo bem não ter respostas. Tudo bem se suas crenças estiverem mudando, ou se você sentir raiva de Deus, do universo ou da própria vida. Raiva e dúvida têm uma longa história dentro de muitas tradições espirituais; não são sinais de que você se perdeu.

Pode ajudar conversar com um acompanhante espiritual de confiança, um capelão ou uma liderança da sua comunidade de fé, ou com um amigo que saiba ouvir sem apressar você rumo a uma conclusão arrumadinha. Algumas perguntas podem ficar abertas por muito tempo.

### Quando buscar mais apoio

A prática contemplativa funciona melhor junto com outras formas de cuidado. Procure um médico, um psicólogo ou um serviço de apoio ao luto se:

- A tristeza, o medo ou a dormência duram semanas e afetam seu sono, sua alimentação ou sua rotina.
- Você está dependendo de álcool ou outras substâncias para atravessar o dia.
- Você sente que não consegue cuidar de si ou das pessoas que dependem de você.

Se estiver pensando em tirar a própria vida ou em se machucar, procure imediatamente o número local de emergência ou uma linha de crise, como o 988 nos EUA. Você merece apoio humano imediato.

### Um pensamento final

Em tempos difíceis, a coisa mais espiritual que você pode fazer talvez seja também a mais simples: respirar, descansar, aceitar ajuda e ser gentil consigo. A quietude não precisa resolver nada. Ela pode apenas lembrar que, mesmo agora, você está aqui, e não está sozinho.`
    }
  }
];

// Shape matches the flat, per-locale `letters` array in seed.js section 11.
// Continues after 'letter_sept_2026' (September 2026).
export const EXTRA_WELLNESS_LETTERS = [
  {
    id: 'letter_oct_2026',
    slug: 'shorter-days-october-2026',
    locale: 'en',
    title: 'Making Friends with Shorter Days',
    publish_date: '2026-10-01',
    summary: 'Letting the evenings come earlier, lowering the lights on purpose, and finding warmth in small rituals.',
    content: 'Dear Friend,\n\nIn many places, October is the month when evenings arrive before we are ready for them. It is easy to treat the early dark as something to push through: more coffee, more screens, more hurry to finish before the light is gone.\n\nThis month, we invite you to try the opposite. Let the evening be a signal instead of an interruption. When the sky dims, dim a lamp too. Put the kettle on. Pull on the soft sweater. Let your body notice that the day is turning toward rest.\n\nYou might choose one small evening ritual and repeat it all month: a cup of tea in the same chair, three slow breaths at the window, a hand on your heart before sleep. Nothing grand. Just something your body can learn to recognize as “we are safe, we can slow down now.”\n\nIf the darker months tend to weigh heavily on your mood, you are not alone, and it is worth mentioning to your doctor. Gentle care and good support can go together.\n\nWarmly,\nThe KindWell Team'
  },
  {
    id: 'letter_oct_2026_es',
    slug: 'shorter-days-october-2026',
    locale: 'es',
    title: 'Hacer las paces con los cambios de luz',
    publish_date: '2026-10-01',
    summary: 'Dejar que la tarde llegue a su ritmo, bajar las luces a propósito y encontrar calidez en pequeños rituales.',
    content: 'Querida comunidad:\n\nOctubre trae cambios de luz y de ritmo, estemos donde estemos. Es fácil tratar esos cambios como algo que hay que aguantar: más café, más pantallas, más prisa por terminar pendientes.\n\nEste mes te invitamos a probar lo contrario. Deja que la caída de la tarde sea una señal y no una interrupción. Cuando el cielo cambie de color, baja también la intensidad de una lámpara. Pon agua a calentar. Ponte algo suave. Permite que tu cuerpo note que el día se inclina hacia el descanso.\n\nPuedes elegir un pequeño ritual para la tarde y repetirlo todo el mes: una taza de té en la misma silla, tres respiraciones lentas junto a la ventana, una mano en el corazón antes de dormir. Nada grandioso. Solo algo que tu cuerpo pueda aprender a reconocer como “estamos a salvo, ya podemos bajar el ritmo”.\n\nSi los cambios de estación suelen afectar tu ánimo, no estás solo ni sola, y vale la pena comentarlo con tu médico. El cuidado amable y el buen acompañamiento pueden ir de la mano.\n\nCon afecto,\nEl equipo de KindWell'
  },
  {
    id: 'letter_oct_2026_pt',
    slug: 'shorter-days-october-2026',
    locale: 'pt-BR',
    title: 'Fazendo as pazes com o ritmo da luz',
    publish_date: '2026-10-01',
    summary: 'Deixar o fim de tarde chegar no seu tempo, diminuir as luzes de propósito e encontrar aconchego em pequenos rituais.',
    content: 'Querido amigo, querida amiga:\n\nOutubro traz mudanças de luz e de ritmo, onde quer que a gente esteja. É fácil tratar essas mudanças como algo a ser atravessado na marra: mais café, mais telas, mais pressa para dar conta de tudo.\n\nEste mês, convidamos você a experimentar o contrário. Deixe o fim de tarde ser um sinal, e não uma interrupção. Quando o céu mudar de cor, diminua também a luz de um abajur. Coloque a água para ferver. Vista algo macio. Permita que o corpo perceba que o dia está se voltando para o descanso.\n\nVocê pode escolher um pequeno ritual para o fim do dia e repeti-lo o mês inteiro: uma xícara de chá na mesma poltrona, três respirações lentas na janela, uma mão no coração antes de dormir. Nada grandioso. Só algo que o corpo possa aprender a reconhecer como “estamos seguros, já podemos desacelerar”.\n\nSe as mudanças de estação costumam pesar no seu humor, você não está sozinho, e vale a pena conversar com seu médico. Cuidado gentil e bom acompanhamento podem andar juntos.\n\nCom carinho,\nEquipe KindWell'
  },
  {
    id: 'letter_nov_2026',
    slug: 'the-practice-of-enough-november-2026',
    locale: 'en',
    title: 'The Practice of Enough',
    publish_date: '2026-11-01',
    summary: 'Gratitude without pressure, noticing what is already sufficient, and letting “enough” be a place to rest.',
    content: 'Dear Friend,\n\nNovember often arrives carrying the word “gratitude,” sometimes with a gentle glow and sometimes with a quiet sense of obligation. If you have ever felt that you should be more grateful than you are, this letter is for you.\n\nThis month, instead of gratitude as a performance, we invite you to try the practice of enough. At the end of each day, finish this sentence: “Today, this was enough.” It might be the soup you made. The one email you answered. The walk around the block. The fact that you got through a day that asked a lot of you.\n\n“Enough” is not the same as giving up on hopes or dreams. It is a place to set your bag down for a moment. From there, the next step often feels lighter.\n\nIf gratitude feels impossible right now because you are grieving or struggling, please know that is not a failing. You are welcome here exactly as you are, and the Circle is a good place to say so out loud.\n\nWith care,\nThe KindWell Team'
  },
  {
    id: 'letter_nov_2026_es',
    slug: 'the-practice-of-enough-november-2026',
    locale: 'es',
    title: 'La práctica de lo suficiente',
    publish_date: '2026-11-01',
    summary: 'Gratitud sin presión, notar lo que ya alcanza y dejar que “lo suficiente” sea un lugar para descansar.',
    content: 'Querida comunidad:\n\nA veces la palabra “gratitud” llega con un brillo cálido y otras veces con una sensación silenciosa de obligación. Si alguna vez sentiste que deberías estar más agradecido o agradecida de lo que estás, esta carta es para ti.\n\nEste mes, en lugar de la gratitud como una actuación, te invitamos a probar la práctica de lo suficiente. Al final de cada día, completa esta frase: “Hoy, esto fue suficiente.” Puede ser la sopa que preparaste. El único correo que respondiste. La vuelta a la manzana. El hecho de haber atravesado un día que te pidió mucho.\n\n“Suficiente” no significa renunciar a tus deseos o sueños. Es un lugar donde dejar la mochila un momento. Desde ahí, el siguiente paso suele sentirse más ligero.\n\nSi ahora la gratitud te parece imposible porque estás en duelo o atravesando algo difícil, eso no es un fracaso. Aquí eres bienvenido o bienvenida tal como estás, y el Círculo es un buen lugar para decirlo en voz alta.\n\nCon cariño,\nEl equipo de KindWell'
  },
  {
    id: 'letter_nov_2026_pt',
    slug: 'the-practice-of-enough-november-2026',
    locale: 'pt-BR',
    title: 'A prática do suficiente',
    publish_date: '2026-11-01',
    summary: 'Gratidão sem cobrança, perceber o que já basta e deixar o “suficiente” ser um lugar de descanso.',
    content: 'Querido amigo, querida amiga:\n\nÀs vezes a palavra “gratidão” chega com um brilho acolhedor e, outras vezes, com uma sensação silenciosa de obrigação. Se você já sentiu que deveria estar mais grato do que está, esta carta é para você.\n\nEste mês, em vez da gratidão como uma apresentação, convidamos você a experimentar a prática do suficiente. No fim de cada dia, complete a frase: “Hoje, isto foi suficiente.” Pode ser a sopa que você fez. O único e-mail que respondeu. A volta no quarteirão. O fato de ter atravessado um dia que pediu muito de você.\n\n“Suficiente” não é desistir dos seus desejos e sonhos. É um lugar para pousar a mochila por um instante. Dali, o próximo passo costuma ficar mais leve.\n\nSe a gratidão parece impossível agora porque você está de luto ou passando por algo difícil, isso não é uma falha. Você é bem-vindo aqui do jeito que está, e o Círculo é um bom lugar para dizer isso em voz alta.\n\nCom carinho,\nEquipe KindWell'
  },
  {
    id: 'letter_dec_2026',
    slug: 'a-quiet-light-december-2026',
    locale: 'en',
    title: 'A Quiet Light in December',
    publish_date: '2026-12-01',
    summary: 'Holding both celebration and grief, protecting your energy through a busy season, and keeping one small light for yourself.',
    content: 'Dear Friend,\n\nDecember can be bright and full, and it can also be tender. Gatherings may bring joy, and they may also bring empty chairs, complicated family dynamics, money worries, or simple exhaustion. Often, it is all of these at once.\n\nThis month, we invite you to keep one quiet light for yourself. It can be literal: a candle, a string of lights, a lamp by the bed. Let it be a reminder that you are allowed to have a small, calm place in the middle of a loud season.\n\nA few gentle permissions for the weeks ahead:\n\n- You can leave early.\n- You can say “not this year.”\n- You can miss someone and still enjoy the cookies.\n- You can rest before you have earned it.\n\nIf this season is especially hard for you, please reach out, to a friend, to the Circle, or to a professional. If you are ever in crisis, contact your local emergency number or a crisis line such as 988 in the US.\n\nThank you for being part of KindWell this year. We are glad you are here.\n\nWarmly,\nThe KindWell Team'
  },
  {
    id: 'letter_dec_2026_es',
    slug: 'a-quiet-light-december-2026',
    locale: 'es',
    title: 'Una luz tranquila en diciembre',
    publish_date: '2026-12-01',
    summary: 'Sostener a la vez la celebración y el duelo, cuidar tu energía en una temporada intensa y guardar una pequeña luz para ti.',
    content: 'Querida comunidad:\n\nDiciembre puede ser luminoso y lleno, y también puede ser un mes sensible. Las reuniones pueden traer alegría, pero también sillas vacías, dinámicas familiares complicadas, preocupaciones de dinero o simple cansancio. Muchas veces, todo eso a la vez.\n\nEste mes te invitamos a guardar una luz tranquila para ti. Puede ser literal: una vela, una guirnalda de luces, una lámpara junto a la cama. Que sea un recordatorio de que tienes permiso para tener un lugar pequeño y sereno en medio de una temporada ruidosa.\n\nAlgunos permisos amables para las próximas semanas:\n\n- Puedes irte temprano.\n- Puedes decir “este año no”.\n- Puedes extrañar a alguien y aun así disfrutar la comida.\n- Puedes descansar antes de “ganártelo”.\n\nSi esta temporada es especialmente difícil para ti, busca apoyo: una amistad, el Círculo o un profesional. Si en algún momento estás en crisis, comunícate con tu número local de emergencias o con una línea de crisis, como el 988 en Estados Unidos.\n\nGracias por ser parte de KindWell este año. Nos alegra que estés aquí.\n\nCon afecto,\nEl equipo de KindWell'
  },
  {
    id: 'letter_dec_2026_pt',
    slug: 'a-quiet-light-december-2026',
    locale: 'pt-BR',
    title: 'Uma luz tranquila em dezembro',
    publish_date: '2026-12-01',
    summary: 'Acolher ao mesmo tempo a celebração e o luto, proteger sua energia numa época agitada e guardar uma pequena luz para você.',
    content: 'Querido amigo, querida amiga:\n\nDezembro pode ser luminoso e cheio, e também pode ser um mês sensível. Os encontros podem trazer alegria, mas também cadeiras vazias, dinâmicas familiares complicadas, preocupações com dinheiro ou simplesmente cansaço. Muitas vezes, tudo isso ao mesmo tempo.\n\nEste mês, convidamos você a guardar uma luz tranquila para si. Pode ser literal: uma vela, um pisca-pisca, um abajur ao lado da cama. Que ela lembre que você tem permissão para ter um lugar pequeno e sereno no meio de uma época barulhenta.\n\nAlgumas permissões gentis para as próximas semanas:\n\n- Você pode ir embora mais cedo.\n- Você pode dizer “este ano, não”.\n- Você pode sentir saudade de alguém e ainda assim aproveitar a ceia.\n- Você pode descansar antes de “merecer”.\n\nSe esta época estiver especialmente difícil para você, procure apoio: um amigo, o Círculo ou um profissional. Se estiver em crise, procure o número local de emergência ou uma linha de crise, como o 988 nos EUA.\n\nObrigado por fazer parte da KindWell este ano. Ficamos felizes por você estar aqui.\n\nCom carinho,\nEquipe KindWell'
  }
];
