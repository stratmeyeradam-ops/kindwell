// src/db/content/courses-a.js
// Full course content (part A): Self-Compassion, Radical Acceptance, Trauma-Informed Presence.
// Shape matches the `courses` array in src/db/seed.js ("6. Seed Courses").
// Educational and reflective only — not clinical care.

// ---------------------------------------------------------------------------
// COURSE 1 — Self-Compassion & Kindness Practices
// ---------------------------------------------------------------------------

const MOD_COMP_1 = {
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
        content: `### Welcome

Welcome to this exploration. We begin not by trying to banish our critical thoughts, but by noticing the tone in which we speak to ourselves when things go wrong.

Most of us have a running commentary in the background of our days. When we forget an appointment, snap at someone we love, or miss a deadline, that commentary often sharpens. It may sound like "You always do this," "What is wrong with you?" or simply a wordless tightening in the chest. For many people this voice is so familiar that it no longer registers as a voice at all. It just feels like the truth.

### How to move through this course

This is an educational course, not therapy. Move slowly. Write only what feels useful and safe. You can skip any prompt, adapt the language to fit your life, or come back later. Completion is not the same thing as healing, and insight does not need to be forced. If any exercise increases distress, stop, orient to the room around you, and return another day.

### Noticing before changing

The first skill in self-compassion is not kindness. It is noticing. We cannot soften a tone we have never really heard. So in this first lesson, the only task is to become a little more curious about the way you address yourself in ordinary moments.

Curiosity is different from analysis. You do not need to figure out why the voice is harsh or fix it today. You are simply collecting honest observations, the way a naturalist might quietly watch a bird without trying to catch it.

### A short practice: the tone check

For the next few days, try this whenever something small goes wrong:

- Pause for one breath and ask, "What did I just say to myself?"
- Notice the words, if there are any, and the tone: sharp, cold, mocking, anxious, tired.
- Notice where you feel it in your body: jaw, shoulders, stomach, throat.
- Write down a word or two if you can. No commentary, no correction.
- Let yourself go back to your day.

### What you may discover

Some people find their inner voice is harshest about work; others about their bodies, their parenting, or their relationships. Some notice that the voice is quiet most of the time and then becomes loud when they are tired or hungry. All of this is useful information. It tells you where care is most needed.

There is nothing to be ashamed of in what you find. A critical inner voice is extremely common, and it usually developed for understandable reasons. In the coming lessons we will look at where it comes from and what it may be trying to do for you. For now, let this lesson be an arrival: you are here, you are paying attention, and that is enough to begin.`,
        prompt: 'What words do you most frequently tell yourself when you make an everyday mistake?'
      },
      es: {
        title: 'Llegada e indagación sincera',
        content: `### Bienvenida

Te damos la bienvenida. Comenzamos no luchando contra los pensamientos autocríticos, sino reconociendo el tono con el que nos hablamos cuando algo sale mal.

La mayoría de las personas tenemos un comentario interno que acompaña el día. Cuando olvidamos una cita, le respondemos mal a alguien querido o se nos pasa una fecha de entrega, ese comentario suele volverse más filoso. Puede sonar como "Siempre haces lo mismo", "¿Qué te pasa?" o, simplemente, como un nudo sin palabras en el pecho. Para muchas personas esa voz es tan conocida que ya ni siquiera parece una voz. Se siente, sin más, como la verdad.

### Cómo recorrer este curso

Este es un curso educativo, no una terapia. Avanza con calma. Escribe solo lo que te resulte útil y seguro. Puedes saltarte cualquier pregunta, adaptar el lenguaje a tu vida o volver más adelante. Terminar un curso no es lo mismo que sanar, y la comprensión no necesita forzarse. Si algún ejercicio aumenta tu malestar, detente, mira a tu alrededor para ubicarte en el lugar donde estás y retómalo otro día.

### Observar antes de cambiar

La primera habilidad de la autocompasión no es la amabilidad, sino la observación. No podemos suavizar un tono que nunca hemos escuchado con atención. Por eso, en esta primera lección, la única tarea es sentir un poco más de curiosidad por la forma en que te hablas en los momentos cotidianos.

La curiosidad es distinta del análisis. No necesitas descubrir por qué la voz es dura ni corregirla hoy. Solo vas a reunir observaciones sinceras, como quien observa un pájaro en silencio sin intentar atraparlo.

### Una práctica breve: revisar el tono

Durante los próximos días, prueba esto cada vez que algo pequeño salga mal:

- Haz una pausa de una respiración y pregúntate: "¿Qué me acabo de decir?".
- Observa las palabras, si las hay, y el tono: cortante, frío, burlón, ansioso, cansado.
- Nota en qué parte del cuerpo lo sientes: la mandíbula, los hombros, el estómago, la garganta.
- Si puedes, anota una o dos palabras. Sin comentarios ni correcciones.
- Luego vuelve a tu día.

### Lo que podrías descubrir

Algunas personas notan que su voz interior es más dura con el trabajo; otras, con el cuerpo, la crianza o las relaciones. Hay quienes perciben que la voz está en silencio casi todo el tiempo y se vuelve intensa cuando hay cansancio o hambre. Todo esto es información valiosa: te muestra dónde se necesita más cuidado.

No hay nada de qué avergonzarse en lo que encuentres. Una voz interior crítica es muy común y, por lo general, se formó por razones comprensibles. En las próximas lecciones veremos de dónde viene y qué podría estar intentando hacer por ti. Por ahora, deja que esta lección sea una llegada: estás aquí, estás prestando atención, y eso basta para comenzar.`,
        prompt: '¿Qué sueles decirte cuando cometes una pequeña equivocación en el día?'
      },
      'pt-BR': {
        title: 'Chegada e escuta honesta',
        content: `### Boas-vindas

Boas-vindas a este aprendizado. Começamos sem forçar a positividade, apenas prestando atenção em como nos tratamos nos dias difíceis.

A maioria de nós carrega um comentário interno que acompanha o dia. Quando esquecemos um compromisso, respondemos mal a alguém que amamos ou perdemos um prazo, esse comentário costuma ficar mais afiado. Pode soar como "Você sempre faz isso", "Qual é o seu problema?" ou apenas como um aperto sem palavras no peito. Para muita gente, essa voz é tão familiar que nem parece mais uma voz. Parece simplesmente a verdade.

### Como percorrer este curso

Este é um curso educativo, não uma terapia. Vá devagar. Escreva apenas o que parecer útil e seguro. Você pode pular qualquer pergunta, adaptar a linguagem à sua realidade ou voltar depois. Concluir um curso não é o mesmo que se curar, e a compreensão não precisa ser forçada. Se algum exercício aumentar o seu desconforto, pare, observe o ambiente ao seu redor para se localizar no presente e retome em outro dia.

### Perceber antes de mudar

A primeira habilidade da autocompaixão não é a gentileza. É a percepção. Não conseguimos suavizar um tom que nunca escutamos de verdade. Por isso, nesta primeira lição, a única tarefa é ficar um pouco mais curioso sobre a forma como você fala consigo nos momentos comuns.

Curiosidade é diferente de análise. Você não precisa descobrir por que a voz é dura nem consertá-la hoje. Está apenas reunindo observações honestas, como quem observa um pássaro em silêncio, sem tentar pegá-lo.

### Uma prática breve: checar o tom

Nos próximos dias, experimente isto sempre que algo pequeno der errado:

- Faça uma pausa de uma respiração e pergunte: "O que eu acabei de me dizer?"
- Observe as palavras, se houver, e o tom: cortante, frio, irônico, ansioso, cansado.
- Perceba onde isso aparece no corpo: mandíbula, ombros, estômago, garganta.
- Se puder, anote uma ou duas palavras. Sem comentários, sem correções.
- Depois, volte para o seu dia.

### O que você pode descobrir

Algumas pessoas percebem que a voz interna é mais dura com o trabalho; outras, com o corpo, com a forma de cuidar dos filhos ou com os relacionamentos. Há quem note que a voz fica quieta quase o tempo todo e se torna alta quando há cansaço ou fome. Tudo isso é informação valiosa: mostra onde o cuidado é mais necessário.

Não há nada de vergonhoso no que você encontrar. Uma voz interna crítica é muito comum e, em geral, se formou por motivos compreensíveis. Nas próximas lições, vamos olhar de onde ela vem e o que talvez esteja tentando fazer por você. Por enquanto, deixe esta lição ser uma chegada: você está aqui, está prestando atenção, e isso basta para começar.`,
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
        content: `### A simple, useful map

Dr. Kristin Neff's pioneering research identifies three core pillars: Mindfulness, Common Humanity, and Self-Kindness. Together they describe what it looks like to treat yourself, in a hard moment, the way you might treat a good friend. Each pillar also has an opposite that most of us know well.

### 1. Mindfulness (instead of over-identification)

Mindfulness here means turning toward pain with balanced attention. You notice, "This is hard right now," without pretending it is fine and without getting swept into a story where the difficulty becomes your whole identity.

The opposite is over-identification: a single mistake becomes "I am a failure," and a painful feeling fills the entire sky. Mindfulness creates a little room between you and the storm, enough room to respond instead of simply react.

### 2. Common humanity (instead of isolation)

When we struggle, many of us feel as though we are the only ones who get it wrong. Common humanity is the recognition that imperfection, loss, and difficulty are part of being human. Other people have felt exactly this kind of embarrassment, grief, or fear.

The opposite is isolation, the sense that something is uniquely wrong with you. Remembering common humanity does not shrink your pain. It simply places you back inside the human family, where you have always belonged.

### 3. Self-kindness (instead of self-judgment)

Self-kindness is the active part: offering yourself warmth, patience, and practical help. It might be a supportive sentence, a hand on your chest, a glass of water, or permission to stop for the night.

The opposite is self-judgment: harshness, name-calling, or a cold refusal to acknowledge that you are hurting. Self-kindness is not the same as indulgence. Sometimes the kindest thing is to go to bed early, make the difficult phone call, or tell the truth.

### Why all three matter

The pillars support each other. Mindfulness without kindness can feel clinical. Kindness without mindfulness can skip over what is actually hurting. And without common humanity, even kind words can feel like a private secret you are keeping about your own inadequacy. Practiced together, they form a steady, honest kind of care.

### Practice: the three pillars inventory

Think of a recent moment of difficulty, something mild to moderate, not the hardest thing in your life. Then gently ask:

- **Mindfulness:** Could I name what I was feeling without exaggerating or minimizing it?
- **Common humanity:** Did I feel alone in it, or did I remember that others struggle like this too?
- **Self-kindness:** What did I actually say or do for myself afterward?
- Notice which pillar was easiest and which was hardest. There is no score.

Most people find one pillar comes more naturally than the others. That is not a flaw; it is simply your starting point.`,
        prompt: 'Which of these three pillars feels most foreign or difficult for you right now?'
      },
      es: {
        title: 'Los tres pilares de la compasión',
        content: `### Un mapa sencillo y útil

La investigación contemporánea destaca tres pilares: Presencia consciente, Humanidad compartida y Amabilidad sincera. Este modelo, propuesto por la investigadora Kristin Neff, describe cómo se ve tratarte en un momento difícil como tratarías a una buena amiga o a un buen amigo. Cada pilar tiene además un opuesto que casi todos conocemos bien.

### 1. Presencia consciente (en lugar de sobreidentificación)

Aquí, la presencia consciente significa mirar el dolor con una atención equilibrada. Reconoces: "Esto es difícil ahora mismo", sin fingir que todo está bien y sin quedar atrapado en una historia donde la dificultad se convierte en toda tu identidad.

Su opuesto es la sobreidentificación: un solo error se vuelve "soy un fracaso", y una emoción dolorosa ocupa todo el cielo. La presencia consciente abre un pequeño espacio entre tú y la tormenta, el suficiente para responder en lugar de solo reaccionar.

### 2. Humanidad compartida (en lugar de aislamiento)

Cuando atravesamos dificultades, muchas personas sentimos que somos las únicas que se equivocan. La humanidad compartida es reconocer que la imperfección, la pérdida y el sufrimiento forman parte de la vida humana. Otras personas han sentido exactamente esta vergüenza, este duelo o este miedo.

Su opuesto es el aislamiento: la sensación de que hay algo especialmente defectuoso en ti. Recordar la humanidad compartida no achica tu dolor. Simplemente te devuelve a la gran familia humana, a la que siempre has pertenecido.

### 3. Amabilidad sincera (en lugar de juicio severo)

La amabilidad es la parte activa: ofrecerte calidez, paciencia y ayuda concreta. Puede ser una frase de apoyo, una mano sobre el pecho, un vaso de agua o el permiso de parar por hoy.

Su opuesto es el juicio severo: la dureza, los insultos o la negativa fría a reconocer que estás sufriendo. La amabilidad no es lo mismo que la complacencia. A veces lo más amable es acostarte temprano, hacer esa llamada difícil o decir la verdad.

### Por qué importan los tres

Los pilares se sostienen entre sí. La presencia sin amabilidad puede sentirse fría. La amabilidad sin presencia puede pasar por alto lo que realmente duele. Y sin humanidad compartida, incluso las palabras amables pueden sentirse como un secreto que guardas sobre tu propia insuficiencia. Juntos, forman un cuidado firme y honesto.

### Práctica: inventario de los tres pilares

Piensa en un momento difícil reciente, algo leve o moderado, no lo más duro de tu vida. Luego pregúntate con suavidad:

- **Presencia consciente:** ¿Pude nombrar lo que sentía sin exagerarlo ni minimizarlo?
- **Humanidad compartida:** ¿Me sentí en soledad, o recordé que otras personas también pasan por esto?
- **Amabilidad sincera:** ¿Qué me dije o qué hice por mí después?
- Observa qué pilar te resultó más fácil y cuál más difícil. No hay puntaje.

A la mayoría de las personas un pilar les sale con más naturalidad que los otros. No es un defecto; es simplemente tu punto de partida.`,
        prompt: '¿Cuál de estos tres elementos te resulta más difícil de practicar hoy?'
      },
      'pt-BR': {
        title: 'Os três pilares do cuidado',
        content: `### Um mapa simples e útil

Estudos sobre autocompaixão identificam três eixos essenciais: Atenção plena, Humanidade compartilhada e Gentileza prática. Esse modelo, proposto pela pesquisadora Kristin Neff, descreve como é tratar a si mesmo, num momento difícil, do jeito que você trataria um bom amigo. Cada eixo também tem um oposto que quase todos nós conhecemos bem.

### 1. Atenção plena (em vez de superidentificação)

Aqui, atenção plena significa se voltar para a dor com um olhar equilibrado. Você reconhece: "Isto está difícil agora", sem fingir que está tudo bem e sem se perder numa história em que a dificuldade vira toda a sua identidade.

O oposto é a superidentificação: um único erro vira "eu sou um fracasso", e um sentimento doloroso ocupa o céu inteiro. A atenção plena cria um pequeno espaço entre você e a tempestade, o suficiente para responder em vez de apenas reagir.

### 2. Humanidade compartilhada (em vez de isolamento)

Quando passamos por dificuldades, muitos de nós sentimos que somos os únicos que erram. A humanidade compartilhada é o reconhecimento de que imperfeição, perda e sofrimento fazem parte da condição humana. Outras pessoas já sentiram exatamente essa vergonha, esse luto ou esse medo.

O oposto é o isolamento: a sensação de que existe algo especialmente errado com você. Lembrar da humanidade compartilhada não diminui a sua dor. Apenas coloca você de volta na grande família humana, à qual você sempre pertenceu.

### 3. Gentileza prática (em vez de autojulgamento)

A gentileza é a parte ativa: oferecer a si mesmo calor, paciência e ajuda concreta. Pode ser uma frase de apoio, uma mão sobre o peito, um copo de água ou a permissão para parar por hoje.

O oposto é o autojulgamento: dureza, xingamentos ou a recusa fria em reconhecer que você está sofrendo. Gentileza não é o mesmo que complacência. Às vezes, o mais gentil é ir dormir cedo, fazer aquela ligação difícil ou dizer a verdade.

### Por que os três importam

Os eixos se sustentam mutuamente. Atenção sem gentileza pode soar fria. Gentileza sem atenção pode pular o que realmente dói. E, sem a humanidade compartilhada, até palavras gentis podem parecer um segredo que você guarda sobre a própria insuficiência. Praticados juntos, eles formam um cuidado firme e honesto.

### Prática: inventário dos três pilares

Pense num momento difícil recente, algo leve ou moderado, não a coisa mais pesada da sua vida. Depois, pergunte com delicadeza:

- **Atenção plena:** Consegui nomear o que eu sentia sem exagerar nem minimizar?
- **Humanidade compartilhada:** Eu me senti sozinho, ou lembrei que outras pessoas também passam por isso?
- **Gentileza prática:** O que eu realmente disse ou fiz por mim depois?
- Perceba qual eixo foi mais fácil e qual foi mais difícil. Não existe nota.

Para a maioria das pessoas, um dos eixos vem com mais naturalidade que os outros. Isso não é um defeito; é apenas o seu ponto de partida.`,
        prompt: 'Qual desses três aspectos é o maior desafio para você hoje?'
      }
    },
    {
      id: 'les_comp_3',
      slug: 'where-the-critic-comes-from',
      duration: 20,
      sort: 3,
      en: {
        title: 'Where the Critic Comes From',
        content: `### A voice with a history

Very few people choose their inner critic. It tends to form early, assembled from the tones we heard from caregivers, teachers, coaches, siblings, faith communities, and the wider culture. Sometimes it borrows exact phrases. Sometimes it borrows only a feeling: the sense that love, safety, or belonging depended on getting things right.

Asking "Whose voice does my harshest script resemble?" is not about blaming anyone. Many of the people who shaped us were doing their best with what they had. The point is to recognize that the critic is learned, and what is learned can slowly be relearned.

### What the critic may be trying to do

It can help to assume the critic has a job. Often that job is protection. A harsh voice may be trying to:

- Keep you from being rejected by catching mistakes before others do.
- Motivate you by fear because fear once seemed to work.
- Maintain a sense of control when life felt unpredictable.
- Keep you small so you would not be disappointed.

Seeing this protective intention does not mean agreeing with the method. You can thank a smoke alarm for caring about fire and still take the batteries out when it goes off every time you make toast.

### The motivation myth

Many people fear that if they stop criticizing themselves, they will stop trying. This is one of the most common objections to self-compassion. Yet think about how you would coach a child learning to ride a bike. Would constant insults make them more likely to get back on after a fall, or less?

Self-compassion is not the absence of standards. It is a steadier foundation for pursuing them. When failure is not also a verdict on your worth, it becomes safer to look at what went wrong, learn from it, and try again.

### Practice: meeting the critic

Choose a quiet moment and a mild example. Then try the following on paper:

- Write down one sentence your critic often says, word for word.
- Next to it, write whose tone it reminds you of, if anyone. It is fine to leave this blank.
- Ask: "What are you afraid would happen if you stopped saying this?"
- Write the fear underneath. Often it is rejection, failure, or being seen as lazy.
- Then write one sentence that honors the same concern in a kinder tone. For example: "You care about doing this well. Let's check it once more and then rest."

### A gentle note

If exploring your critic brings up painful memories, you do not have to go further alone. It is okay to pause here. Talking with a trusted person or a licensed counselor can help. If you ever feel unsafe or overwhelmed, contact your local emergency number or a crisis line such as 988 in the US.`,
        prompt: 'Whose voice does your harshest inner script resemble, and what do you think it has been trying to protect you from?'
      },
      es: {
        title: 'De dónde viene la voz crítica',
        content: `### Una voz con historia

Muy pocas personas eligen a su crítico interior. Suele formarse temprano, a partir de los tonos que escuchamos de quienes nos cuidaron, docentes, entrenadores, hermanos, comunidades de fe y la cultura en general. A veces toma frases exactas. Otras veces solo toma una sensación: la idea de que el cariño, la seguridad o la pertenencia dependían de hacer las cosas bien.

Preguntarte "¿A quién se parece mi voz más dura?" no se trata de culpar a nadie. Muchas de las personas que nos formaron hicieron lo mejor que pudieron con lo que tenían. El objetivo es reconocer que la voz crítica es aprendida, y lo aprendido puede irse transformando poco a poco.

### Qué podría estar intentando hacer

Puede ayudar suponer que la voz crítica tiene una función. Muchas veces esa función es proteger. Una voz severa puede estar intentando:

- Evitar que te rechacen, detectando errores antes que los demás.
- Motivarte con miedo, porque en algún momento pareció funcionar.
- Mantener una sensación de control cuando la vida era impredecible.
- Hacer que te mantengas en un lugar pequeño para no sufrir decepciones.

Ver esta intención protectora no significa estar de acuerdo con el método. Puedes agradecerle a una alarma de humo que se preocupe por el fuego y, aun así, quitarle las pilas si suena cada vez que tuestas pan.

### El mito de la motivación

Muchas personas temen que, si dejan de criticarse, dejarán de esforzarse. Es una de las objeciones más comunes a la autocompasión. Pero piensa en cómo acompañarías a una niña o un niño que aprende a andar en bicicleta. ¿Los insultos constantes harían más probable que vuelva a subirse después de una caída, o menos?

La autocompasión no es la ausencia de metas o exigencias. Es una base más firme para perseguirlas. Cuando un error no es también un veredicto sobre tu valor, se vuelve más seguro mirar qué salió mal, aprender e intentarlo de nuevo.

### Práctica: conocer a la voz crítica

Elige un momento tranquilo y un ejemplo leve. Luego prueba lo siguiente por escrito:

- Anota una frase que tu voz crítica dice a menudo, palabra por palabra.
- Al lado, escribe a quién te recuerda su tono, si es que te recuerda a alguien. Puedes dejarlo en blanco.
- Pregúntale: "¿Qué temes que pase si dejo de decirme esto?".
- Escribe el miedo debajo. A menudo es el rechazo, el fracaso o que te vean como una persona perezosa.
- Luego escribe una frase que respete la misma preocupación con un tono más amable. Por ejemplo: "Te importa hacerlo bien. Revisémoslo una vez más y después descansemos".

### Una nota con cuidado

Si explorar tu voz crítica despierta recuerdos dolorosos, no tienes que seguir en soledad. Está bien hacer una pausa aquí. Hablar con una persona de confianza o con un profesional de salud mental con licencia puede ayudar. Si en algún momento te sientes en peligro o desbordado, comunícate con tu número local de emergencias o con una línea de crisis, como el 988 en Estados Unidos.`,
        prompt: '¿A quién se parece tu guion interior más duro y de qué crees que ha intentado protegerte?'
      },
      'pt-BR': {
        title: 'De onde vem a voz crítica',
        content: `### Uma voz com história

Pouquíssimas pessoas escolhem a própria voz crítica. Ela costuma se formar cedo, a partir dos tons que ouvimos de quem cuidou de nós, de professores, treinadores, irmãos, comunidades de fé e da cultura em geral. Às vezes ela pega frases exatas. Outras vezes pega apenas uma sensação: a ideia de que o afeto, a segurança ou o pertencimento dependiam de acertar.

Perguntar "Com a voz de quem o meu roteiro mais duro se parece?" não é sobre culpar alguém. Muitas das pessoas que nos formaram fizeram o melhor que podiam com o que tinham. O objetivo é reconhecer que a voz crítica foi aprendida, e o que foi aprendido pode, aos poucos, ser reaprendido.

### O que ela pode estar tentando fazer

Pode ajudar imaginar que a voz crítica tem uma função. Muitas vezes, essa função é proteger. Uma voz dura pode estar tentando:

- Evitar que você seja rejeitado, apontando erros antes que os outros vejam.
- Motivar você pelo medo, porque um dia isso pareceu funcionar.
- Manter uma sensação de controle quando a vida parecia imprevisível.
- Manter você pequeno para que não se decepcione.

Perceber essa intenção protetora não significa concordar com o método. Você pode agradecer a um alarme de fumaça por se preocupar com incêndios e, ainda assim, tirar as pilhas se ele dispara toda vez que você faz uma torrada.

### O mito da motivação

Muitas pessoas temem que, se pararem de se criticar, vão parar de se esforçar. Essa é uma das objeções mais comuns à autocompaixão. Mas pense em como você ajudaria uma criança a aprender a andar de bicicleta. Xingamentos constantes a deixariam mais disposta a subir de novo depois de uma queda, ou menos?

Autocompaixão não é ausência de padrões. É uma base mais firme para buscá-los. Quando um erro não é também um veredito sobre o seu valor, fica mais seguro olhar o que deu errado, aprender e tentar de novo.

### Prática: conhecendo a voz crítica

Escolha um momento tranquilo e um exemplo leve. Depois, experimente isto no papel:

- Escreva uma frase que a sua voz crítica costuma dizer, palavra por palavra.
- Ao lado, anote de quem é o tom que ela lembra, se lembrar alguém. Tudo bem deixar em branco.
- Pergunte: "O que você tem medo que aconteça se eu parar de dizer isso?"
- Escreva o medo logo abaixo. Muitas vezes é rejeição, fracasso ou ser visto como preguiçoso.
- Então escreva uma frase que respeite a mesma preocupação com um tom mais gentil. Por exemplo: "Você se importa em fazer isso bem. Vamos revisar mais uma vez e depois descansar."

### Um lembrete cuidadoso

Se explorar a sua voz crítica trouxer lembranças dolorosas, você não precisa seguir sozinho. Tudo bem parar aqui. Conversar com uma pessoa de confiança ou com um profissional de saúde mental habilitado pode ajudar. Se em algum momento você se sentir em risco ou sobrecarregado, procure o número de emergência local ou uma linha de apoio em crise, como o 988 nos Estados Unidos.`,
        prompt: 'Com a voz de quem o seu roteiro interno mais duro se parece, e do que você acha que ele tem tentado proteger você?'
      }
    }
  ]
};

const MOD_COMP_2 = {
  id: 'mod_comp_2',
  slug: 'the-three-part-pause',
  sort: 2,
  en: { title: 'The Three-Part Pause', description: 'Naming pain, remembering common humanity, and offering one useful kindness in real time.' },
  es: { title: 'La pausa en tres pasos', description: 'Nombrar el dolor, recordar la humanidad compartida y ofrecerte una amabilidad útil en el momento.' },
  'pt-BR': { title: 'A pausa em três passos', description: 'Nomear a dor, lembrar da humanidade compartilhada e oferecer uma gentileza útil na hora.' },
  lessons: [
    {
      id: 'les_comp_4',
      slug: 'naming-the-hard-moment',
      duration: 20,
      sort: 1,
      en: {
        title: 'Naming the Hard Moment',
        content: `### The first step of the pause

The three-part pause is a short, portable practice built on the three pillars you met in Module 1. It can take less than a minute. The first step is the simplest and, for many people, the hardest: acknowledging that this moment is difficult.

It sounds obvious, yet most of us skip it. We move straight to fixing, blaming, distracting, or pushing through. We may not even register that we are hurting until hours later, when we notice a headache, a short temper, or a sudden craving to scroll.

### Why naming helps

Putting a simple word to an experience, such as "stress," "embarrassment," or "grief," can create a little distance from it. The feeling is still there, but you are now standing beside it rather than inside it. Naming is a form of mindfulness: it neither exaggerates nor dismisses.

The words do not need to be precise or poetic. "This is hard." "Ouch." "I'm really stressed right now." "This hurts." Any honest phrase that fits will do. What matters is that it is true for you. If "suffering" feels too dramatic, do not use it.

### Common ways we avoid naming

You might notice yourself:

- Minimizing: "It's nothing, other people have it worse."
- Catastrophizing: "This always happens, my life is ruined."
- Explaining: building a long case for why the feeling is or is not justified.
- Moving on so quickly that the feeling has nowhere to land.

None of these are wrong; they are habits. The invitation is simply to add one honest sentence before whatever comes next.

### Practice: one honest sentence

Try this several times this week, starting with small frustrations rather than big wounds:

- When you notice tension, irritation, or sadness, pause for one breath.
- Silently name what is here in a few plain words: "This is frustrating," "I feel left out," "I'm scared."
- If it helps, add the location: "...and I feel it in my throat."
- Let the sentence be enough for now. You do not need to solve anything yet.

### Pacing yourself

If naming a feeling makes it grow larger rather than more manageable, slow down. Look around the room, name a few neutral objects you can see, and feel your feet on the floor. You can return to the practice with a milder situation later. Self-compassion is built gradually, and it is always okay to take smaller steps.`,
        prompt: 'What plain, honest phrase could you use to name a hard moment, one that sounds true rather than dramatic or dismissive?'
      },
      es: {
        title: 'Nombrar el momento difícil',
        content: `### El primer paso de la pausa

La pausa en tres pasos es una práctica breve y portátil que se apoya en los tres pilares que conociste en el Módulo 1. Puede tomar menos de un minuto. El primer paso es el más sencillo y, para muchas personas, el más difícil: reconocer que este momento es difícil.

Parece obvio, pero la mayoría lo saltamos. Pasamos directo a resolver, culpar, distraernos o seguir adelante a la fuerza. Quizá ni siquiera notamos que estamos sufriendo hasta horas después, cuando aparece un dolor de cabeza, poca paciencia o unas ganas repentinas de mirar el celular sin parar.

### Por qué ayuda nombrar

Ponerle una palabra sencilla a una experiencia, como "estrés", "vergüenza" o "tristeza", puede crear un poco de distancia. La emoción sigue ahí, pero ahora estás a su lado y no atrapado dentro de ella. Nombrar es una forma de presencia consciente: no exagera ni descarta.

Las palabras no tienen que ser precisas ni poéticas. "Esto es difícil." "Auch." "Estoy con mucho estrés ahora." "Esto duele." Cualquier frase honesta que encaje sirve. Lo importante es que sea verdadera para ti. Si "sufrimiento" te suena demasiado dramático, no la uses.

### Formas comunes de evitar nombrar

Tal vez notes que:

- Minimizas: "No es nada, otras personas están peor".
- Catastrofizas: "Siempre me pasa lo mismo, mi vida es un desastre".
- Explicas: armas un largo argumento sobre si la emoción está justificada o no.
- Sigues de largo tan rápido que la emoción no tiene dónde aterrizar.

Nada de esto está mal; son hábitos. La invitación es simplemente agregar una frase honesta antes de lo que venga después.

### Práctica: una frase honesta

Prueba esto varias veces durante la semana, empezando por pequeñas frustraciones y no por heridas grandes:

- Cuando notes tensión, irritación o tristeza, haz una pausa de una respiración.
- Nombra en silencio lo que está presente con pocas palabras sencillas: "Esto me frustra", "Me siento fuera", "Tengo miedo".
- Si te ayuda, agrega el lugar: "...y lo siento en la garganta".
- Deja que esa frase sea suficiente por ahora. Todavía no necesitas resolver nada.

### Ir a tu ritmo

Si nombrar una emoción la hace crecer en lugar de volverla más manejable, baja el ritmo. Mira a tu alrededor, nombra algunos objetos neutros que puedas ver y siente tus pies apoyados en el piso. Puedes volver a la práctica más adelante con una situación más leve. La autocompasión se construye de a poco, y siempre está bien dar pasos más pequeños.`,
        prompt: '¿Qué frase sencilla y honesta podrías usar para nombrar un momento difícil, una que suene verdadera y no dramática ni minimizadora?'
      },
      'pt-BR': {
        title: 'Nomeando o momento difícil',
        content: `### O primeiro passo da pausa

A pausa em três passos é uma prática curta e portátil, construída sobre os três pilares que você conheceu no Módulo 1. Ela pode levar menos de um minuto. O primeiro passo é o mais simples e, para muita gente, o mais difícil: reconhecer que este momento é difícil.

Parece óbvio, mas a maioria de nós pula essa etapa. Vamos direto para consertar, culpar, nos distrair ou seguir no automático. Talvez nem percebamos que estamos sofrendo até horas depois, quando surge uma dor de cabeça, a paciência curta ou uma vontade repentina de rolar a tela do celular.

### Por que nomear ajuda

Dar uma palavra simples a uma experiência, como "estresse", "vergonha" ou "tristeza", pode criar um pouco de distância. O sentimento continua ali, mas agora você está ao lado dele, e não preso dentro dele. Nomear é uma forma de atenção plena: não exagera nem descarta.

As palavras não precisam ser precisas nem poéticas. "Isto está difícil." "Ai." "Estou muito estressado agora." "Isto dói." Qualquer frase honesta que sirva já basta. O que importa é que seja verdadeira para você. Se "sofrimento" parecer dramático demais, não use.

### Jeitos comuns de evitar nomear

Talvez você perceba que:

- Minimiza: "Não é nada, tem gente em situação pior."
- Catastrofiza: "Isso sempre acontece, minha vida está arruinada."
- Explica: monta um longo argumento sobre se o sentimento é justificado ou não.
- Segue em frente tão rápido que o sentimento não tem onde pousar.

Nada disso é errado; são hábitos. O convite é apenas acrescentar uma frase honesta antes do que vier depois.

### Prática: uma frase honesta

Experimente isto várias vezes nesta semana, começando por pequenas frustrações e não por grandes feridas:

- Quando perceber tensão, irritação ou tristeza, faça uma pausa de uma respiração.
- Nomeie em silêncio o que está presente com poucas palavras simples: "Isto é frustrante", "Estou me sentindo de fora", "Estou com medo".
- Se ajudar, acrescente o lugar: "...e sinto isso na garganta."
- Deixe essa frase ser suficiente por agora. Você ainda não precisa resolver nada.

### No seu ritmo

Se nomear um sentimento fizer com que ele cresça em vez de ficar mais manejável, diminua o ritmo. Olhe ao redor, nomeie alguns objetos neutros que você consegue ver e sinta os pés apoiados no chão. Você pode voltar à prática depois, com uma situação mais leve. A autocompaixão é construída aos poucos, e sempre está tudo bem dar passos menores.`,
        prompt: 'Que frase simples e honesta você poderia usar para nomear um momento difícil, uma que soe verdadeira e não dramática nem minimizadora?'
      }
    },
    {
      id: 'les_comp_5',
      slug: 'you-are-not-the-only-one',
      duration: 20,
      sort: 2,
      en: {
        title: 'You Are Not the Only One',
        content: `### The second step of the pause

Once you have named the hard moment, the second step is to remember that difficulty is part of being human. This is common humanity in action. It is a quiet reminder that you have not been singled out, that your struggle connects you to others rather than separating you from them.

### Why isolation hurts so much

Pain is hard enough on its own. What often makes it unbearable is the feeling that it proves something about us: that we are uniquely broken, behind, or unlovable. Shame in particular tends to whisper, "Everyone else has figured this out. Only you are like this." That story isolates us at the exact moment we most need connection.

Common humanity does not argue with your pain or tell you it is small. It simply widens the frame. Right now, many other people are also making mistakes at work, lying awake worrying about a child, feeling awkward after a conversation, or grieving someone they love.

### Honest, not generic

Phrases like "everyone goes through this" can sometimes feel dismissive, especially if someone else says them to you. The key is to use language that feels true in your situation. You might try:

- "Other people feel this way too."
- "This is part of being a person who cares."
- "Many parents, workers, friends, and partners know this feeling."
- "I'm not alone in finding this hard."

If your situation involves real injustice or harm, common humanity does not mean pretending it is ordinary. It can mean remembering that others have faced similar things, and that support, solidarity, and help exist.

### Practice: widening the circle

The next time you name a hard moment, try adding a second sentence:

- Name it first: "This is really embarrassing."
- Then connect: "Lots of people have said the wrong thing in a meeting."
- If you like, picture people you do not know who might be feeling something similar today.
- Notice any shift in your body, even a small one: a longer breath, a softer jaw.

### Reaching toward real people

Common humanity is also something you can practice with others. Telling a trusted friend, "I've been struggling with this," often opens the door for them to say, "Me too." You do not have to share everything with everyone. Choose people who have earned your trust, and start small.

If you notice that you feel isolated most of the time, or that no one in your life feels safe to talk to, that is worth taking seriously. A counselor, support group, or community organization can be a good next step.`,
        prompt: 'When you are struggling, what story does isolation tell you, and what would be a more honest sentence that connects you to others?'
      },
      es: {
        title: 'No eres la única persona',
        content: `### El segundo paso de la pausa

Una vez que nombraste el momento difícil, el segundo paso es recordar que la dificultad forma parte de la vida humana. Esta es la humanidad compartida en acción. Es un recordatorio silencioso de que no te eligieron a ti en particular, de que tu dificultad te conecta con otras personas en lugar de separarte de ellas.

### Por qué duele tanto el aislamiento

El dolor ya es difícil de por sí. Lo que muchas veces lo vuelve insoportable es la sensación de que demuestra algo sobre nosotros: que tenemos un defecto único, que vamos atrasados o que no merecemos cariño. La vergüenza, en especial, suele susurrar: "Todos los demás ya lo resolvieron. Solo tú eres así". Esa historia nos aísla justo cuando más necesitamos conexión.

La humanidad compartida no discute con tu dolor ni te dice que es pequeño. Simplemente amplía el marco. En este momento, muchas otras personas también se equivocan en el trabajo, no pueden dormir por la preocupación por un hijo, se sienten incómodas después de una conversación o lloran a alguien que aman.

### Honesto, no genérico

Frases como "a todos nos pasa" pueden sonar despectivas, sobre todo si otra persona te las dice. La clave es usar un lenguaje que se sienta verdadero en tu situación. Podrías probar:

- "Otras personas también se sienten así".
- "Esto es parte de ser alguien a quien le importan las cosas".
- "Muchas madres, padres, trabajadores, amistades y parejas conocen esta sensación".
- "No soy la única persona a la que esto le cuesta".

Si tu situación implica una injusticia o un daño real, la humanidad compartida no significa fingir que es algo común. Puede significar recordar que otras personas han enfrentado cosas similares y que existen el apoyo, la solidaridad y la ayuda.

### Práctica: ampliar el círculo

La próxima vez que nombres un momento difícil, prueba agregar una segunda frase:

- Primero nómbralo: "Esto me da mucha vergüenza".
- Luego conecta: "Mucha gente ha dicho algo fuera de lugar en una reunión".
- Si quieres, imagina a personas que no conoces que quizá sienten algo parecido hoy.
- Observa cualquier cambio en tu cuerpo, aunque sea pequeño: una respiración más larga, una mandíbula más suelta.

### Acercarte a personas reales

La humanidad compartida también se puede practicar con otras personas. Decirle a alguien de confianza "He estado con dificultades con esto" muchas veces abre la puerta para que responda "Yo también". No necesitas contarle todo a todo el mundo. Elige a quienes se han ganado tu confianza y empieza de a poco.

Si notas que te sientes en aislamiento la mayor parte del tiempo, o que no hay nadie en tu vida con quien te sientas seguro para hablar, vale la pena tomarlo en serio. Un consejero, un grupo de apoyo o una organización comunitaria pueden ser un buen siguiente paso.`,
        prompt: 'Cuando atraviesas dificultades, ¿qué historia te cuenta el aislamiento y qué frase más honesta podría conectarte con otras personas?'
      },
      'pt-BR': {
        title: 'Você não é o único',
        content: `### O segundo passo da pausa

Depois de nomear o momento difícil, o segundo passo é lembrar que a dificuldade faz parte de ser humano. Essa é a humanidade compartilhada em ação. É um lembrete silencioso de que você não foi escolhido a dedo, de que a sua luta conecta você aos outros em vez de separar.

### Por que o isolamento dói tanto

A dor já é difícil por si só. O que muitas vezes a torna insuportável é a sensação de que ela prova algo sobre nós: que temos um defeito único, que estamos atrasados ou que não merecemos amor. A vergonha, em especial, costuma sussurrar: "Todo mundo já resolveu isso. Só você é assim." Essa história nos isola justamente quando mais precisamos de conexão.

A humanidade compartilhada não discute com a sua dor nem diz que ela é pequena. Ela apenas amplia a moldura. Agora mesmo, muitas outras pessoas também estão errando no trabalho, perdendo o sono de preocupação com um filho, se sentindo sem graça depois de uma conversa ou sentindo a falta de alguém que amam.

### Honesto, não genérico

Frases como "todo mundo passa por isso" podem soar como pouco caso, principalmente quando vêm de outra pessoa. O segredo é usar uma linguagem que pareça verdadeira na sua situação. Você pode experimentar:

- "Outras pessoas também se sentem assim."
- "Isso faz parte de ser alguém que se importa."
- "Muitas mães, pais, trabalhadores, amigos e casais conhecem essa sensação."
- "Não sou o único que acha isso difícil."

Se a sua situação envolve uma injustiça ou um dano real, a humanidade compartilhada não significa fingir que é algo comum. Pode significar lembrar que outras pessoas enfrentaram coisas parecidas e que existem apoio, solidariedade e ajuda.

### Prática: ampliando o círculo

Da próxima vez que nomear um momento difícil, experimente acrescentar uma segunda frase:

- Primeiro nomeie: "Isto é muito constrangedor."
- Depois conecte: "Muita gente já falou a coisa errada numa reunião."
- Se quiser, imagine pessoas que você não conhece e que talvez estejam sentindo algo parecido hoje.
- Perceba qualquer mudança no corpo, mesmo pequena: uma respiração mais longa, a mandíbula mais solta.

### Chegando perto de pessoas reais

A humanidade compartilhada também pode ser praticada com os outros. Dizer a alguém de confiança "Tenho passado por um momento difícil com isso" muitas vezes abre a porta para ouvir "Eu também". Você não precisa contar tudo para todo mundo. Escolha pessoas que conquistaram a sua confiança e comece aos poucos.

Se perceber que se sente isolado na maior parte do tempo, ou que não há ninguém na sua vida com quem se sinta seguro para conversar, vale a pena levar isso a sério. Um profissional de apoio psicológico, um grupo de apoio ou uma organização comunitária podem ser um bom próximo passo.`,
        prompt: 'Quando você está passando por dificuldades, que história o isolamento conta, e que frase mais honesta poderia conectar você aos outros?'
      }
    },
    {
      id: 'les_comp_6',
      slug: 'kindness-that-sounds-honest',
      duration: 20,
      sort: 3,
      en: {
        title: 'Kindness That Sounds Honest',
        content: `### The third step of the pause

The final step of the pause is to offer yourself one useful kindness. This is where many people get stuck, because the kind words they try feel false. "I am perfect just as I am" can ring hollow on a day when you have clearly made a mess. Sugary affirmations often provoke the inner critic rather than soothing it.

The goal is not to feel wonderful. It is to find a supportive sentence or action that sounds honest rather than sugary: something you can actually believe.

### What honest kindness sounds like

Honest kindness usually acknowledges reality and offers support at the same time. For example:

- "This is hard, and I'm doing what I can."
- "I made a mistake. I can take care of it tomorrow."
- "Of course I'm upset. This mattered to me."
- "I don't have to figure it all out tonight."
- "May I be patient with myself while I learn."

Notice that none of these claim everything is fine. They simply stay on your side.

### The friend test

If you are unsure what to say, imagine a close friend came to you with the exact same situation. What would you say to them? What tone would you use? Most people discover they already know how to be kind. They have just never pointed that skill inward. Try borrowing the words you would offer a friend and speaking them to yourself, even if it feels awkward at first.

### Kindness can be an action

Sometimes words are not the most useful kindness. You might:

- Place a hand on your chest, cheek, or arm as a gesture of comfort.
- Drink some water or eat something nourishing.
- Step outside for two minutes of fresh air.
- Send a short message to someone who cares about you.
- Give yourself permission to stop for the day.

### Practice: the full pause

Now put the three steps together. The next time you notice a difficult moment:

- **Name it:** "This is a moment of stress."
- **Connect:** "Other people feel this too."
- **Offer kindness:** "What do I need right now?" Then give yourself one honest sentence or small act of care.

It may feel mechanical at first. That is normal. Like any new habit, the pause becomes more natural with repetition. Over time, many people find that the steps blend into a single, quiet turning toward themselves.

### When kindness feels hard

For some people, especially those who have experienced harsh or unsafe relationships, receiving kindness, even from themselves, can stir up grief or discomfort. If this happens, go slowly. Start with small actions rather than words, and consider exploring this with a qualified counselor.`,
        prompt: 'What supportive sentence sounds honest to you rather than sugary, something you could actually believe on a hard day?'
      },
      es: {
        title: 'Una amabilidad que suene honesta',
        content: `### El tercer paso de la pausa

El último paso de la pausa es ofrecerte una amabilidad útil. Aquí es donde muchas personas se traban, porque las palabras amables que intentan decirse suenan falsas. "Soy perfecto tal como soy" puede sonar vacío un día en que claramente algo salió mal. Las afirmaciones demasiado dulces muchas veces provocan a la voz crítica en lugar de calmarla.

La meta no es sentirte de maravilla. Es encontrar una frase o una acción de apoyo que suene honesta y no empalagosa: algo que realmente puedas creer.

### Cómo suena una amabilidad honesta

La amabilidad honesta suele reconocer la realidad y ofrecer apoyo al mismo tiempo. Por ejemplo:

- "Esto es difícil, y estoy haciendo lo que puedo".
- "Me equivoqué. Puedo ocuparme de eso mañana".
- "Claro que me siento mal. Esto me importaba".
- "No tengo que resolverlo todo esta noche".
- "Que pueda tenerme paciencia mientras aprendo".

Observa que ninguna afirma que todo está bien. Simplemente se mantienen de tu lado.

### La prueba de la amistad

Si no sabes qué decirte, imagina que una amiga o un amigo cercano llega con exactamente la misma situación. ¿Qué le dirías? ¿Qué tono usarías? La mayoría de las personas descubre que ya sabe ser amable. Solo nunca dirigió esa habilidad hacia sí misma. Prueba tomar prestadas las palabras que le ofrecerías a esa persona y decírtelas, aunque al principio te resulte incómodo.

### La amabilidad también puede ser una acción

A veces las palabras no son la forma más útil de amabilidad. Podrías:

- Poner una mano sobre el pecho, la mejilla o el brazo como gesto de consuelo.
- Tomar agua o comer algo nutritivo.
- Salir dos minutos a tomar aire fresco.
- Enviar un mensaje breve a alguien que te quiere.
- Darte permiso para terminar el día.

### Práctica: la pausa completa

Ahora une los tres pasos. La próxima vez que notes un momento difícil:

- **Nómbralo:** "Este es un momento de estrés".
- **Conecta:** "Otras personas también sienten esto".
- **Ofrece amabilidad:** "¿Qué necesito ahora?". Luego date una frase honesta o un pequeño gesto de cuidado.

Al principio puede sentirse mecánico. Es normal. Como cualquier hábito nuevo, la pausa se vuelve más natural con la repetición. Con el tiempo, muchas personas notan que los pasos se funden en un solo gesto silencioso de volverse hacia sí mismas.

### Cuando la amabilidad cuesta

Para algunas personas, sobre todo quienes vivieron relaciones duras o inseguras, recibir amabilidad, incluso de sí mismas, puede despertar tristeza o incomodidad. Si te pasa, ve despacio. Empieza con pequeñas acciones en lugar de palabras y considera explorarlo con un profesional de salud mental calificado.`,
        prompt: '¿Qué frase de apoyo te suena honesta y no empalagosa, algo que realmente podrías creer en un día difícil?'
      },
      'pt-BR': {
        title: 'Uma gentileza que soe honesta',
        content: `### O terceiro passo da pausa

O último passo da pausa é oferecer a si mesmo uma gentileza útil. É aqui que muita gente trava, porque as palavras gentis que tenta dizer soam falsas. "Eu sou perfeito do jeito que sou" pode soar vazio num dia em que você claramente fez uma bagunça. Afirmações açucaradas muitas vezes provocam a voz crítica em vez de acalmá-la.

O objetivo não é se sentir maravilhosamente bem. É encontrar uma frase ou atitude de apoio que soe honesta, e não melosa: algo em que você realmente consiga acreditar.

### Como soa uma gentileza honesta

A gentileza honesta costuma reconhecer a realidade e oferecer apoio ao mesmo tempo. Por exemplo:

- "Isto está difícil, e eu estou fazendo o que posso."
- "Eu errei. Posso cuidar disso amanhã."
- "É claro que estou chateado. Isso era importante para mim."
- "Não preciso resolver tudo hoje à noite."
- "Que eu possa ter paciência comigo enquanto aprendo."

Perceba que nenhuma delas afirma que está tudo bem. Elas simplesmente ficam do seu lado.

### O teste do amigo

Se não souber o que dizer, imagine que um amigo próximo chegasse até você com exatamente a mesma situação. O que você diria? Que tom usaria? A maioria das pessoas descobre que já sabe ser gentil. Só nunca voltou essa habilidade para si. Experimente pegar emprestadas as palavras que você ofereceria a um amigo e dizê-las a si mesmo, mesmo que no início pareça estranho.

### Gentileza também pode ser ação

Às vezes, palavras não são a forma mais útil de gentileza. Você pode:

- Colocar a mão sobre o peito, o rosto ou o braço como um gesto de conforto.
- Beber água ou comer algo nutritivo.
- Sair por dois minutos para tomar um ar.
- Mandar uma mensagem curta para alguém que gosta de você.
- Dar a si mesmo permissão para encerrar o dia.

### Prática: a pausa completa

Agora junte os três passos. Da próxima vez que perceber um momento difícil:

- **Nomeie:** "Este é um momento de estresse."
- **Conecte:** "Outras pessoas também sentem isso."
- **Ofereça gentileza:** "Do que eu preciso agora?" Depois, ofereça a si mesmo uma frase honesta ou um pequeno gesto de cuidado.

No começo, pode parecer mecânico. É normal. Como todo hábito novo, a pausa fica mais natural com a repetição. Com o tempo, muitas pessoas percebem que os passos se fundem num único gesto silencioso de se voltar para si.

### Quando a gentileza é difícil

Para algumas pessoas, especialmente quem viveu relações duras ou inseguras, receber gentileza, mesmo de si mesmas, pode despertar tristeza ou desconforto. Se isso acontecer, vá devagar. Comece com pequenas ações em vez de palavras e considere explorar isso com um profissional de saúde mental qualificado.`,
        prompt: 'Que frase de apoio soa honesta para você, e não melosa, algo em que você realmente conseguiria acreditar num dia difícil?'
      }
    }
  ]
};

const MOD_COMP_3 = {
  id: 'mod_comp_3',
  slug: 'kindness-with-accountability',
  sort: 3,
  en: { title: 'Kindness with Accountability', description: 'Compassion that tells the truth, names impact without humiliation, and supports repair.' },
  es: { title: 'Amabilidad con responsabilidad', description: 'Una compasión que dice la verdad, reconoce el impacto sin humillar y acompaña la reparación.' },
  'pt-BR': { title: 'Gentileza com responsabilidade', description: 'Uma compaixão que fala a verdade, reconhece o impacto sem humilhar e apoia a reparação.' },
  lessons: [
    {
      id: 'les_comp_7',
      slug: 'compassion-is-not-letting-yourself-off',
      duration: 20,
      sort: 1,
      en: {
        title: 'Compassion Is Not Letting Yourself Off the Hook',
        content: `### A common worry

As people begin practicing self-compassion, a fair question often appears: "If I am kind to myself about my mistakes, won't I stop taking them seriously?" It is a thoughtful concern, especially for anyone who has been hurt by someone who excused their own behavior too easily.

Self-compassion, practiced honestly, is not a way to avoid responsibility. It is a way to make responsibility bearable. Compassion tells the truth and supports repair.

### Two kinds of harshness

When we do something that hurts others or falls short of our values, many of us swing between two unhelpful poles:

- **Self-attack:** "I'm a terrible person. I ruin everything." This feels like taking responsibility, but it often turns the focus toward our own pain and away from the person affected.
- **Self-defense:** "It wasn't that bad. They overreacted. Anyone would have done it." This protects us from shame but blocks learning and repair.

Both of these are, in a way, attempts to escape the discomfort of simply looking at what happened. Self-compassion offers a third path: staying present with the truth without collapsing or defending.

### The steady middle

From a compassionate stance, you might say: "I did something that caused harm. I feel bad about it, and that makes sense because I care. I'm a person who can make mistakes and also make things right." This holds both your worth and your impact in view at the same time.

People sometimes find that when they are not busy punishing themselves, they have more energy for what actually matters: listening, apologizing, changing a habit, or repairing trust.

### Standards without cruelty

You can keep high standards and still speak to yourself with respect. Think of the best teacher, coach, or mentor you ever had. They probably expected a lot from you. They probably also believed in you, pointed out specific things to improve, and did not humiliate you in the process. That is the model here.

### Practice: the honest mirror

Choose a small, recent situation where you fell short of your own values, not the heaviest one you carry. Then write:

- What happened, in plain, factual language.
- Who was affected and how, as best you understand it.
- What you feel about it now (regret, embarrassment, sadness).
- What that feeling tells you about what you value.
- One thing you could do, if anything, to learn from it or make it right.

Notice whether you drift toward self-attack or self-defense as you write. If you do, gently return to the facts and to what you care about.`,
        prompt: 'When you fall short of your values, do you tend toward self-attack or self-defense, and what would the steady middle sound like?'
      },
      es: {
        title: 'La compasión no es desentenderse',
        content: `### Una preocupación común

Cuando las personas comienzan a practicar la autocompasión, suele aparecer una pregunta razonable: "Si soy amable conmigo frente a mis errores, ¿no dejaré de tomármelos en serio?". Es una inquietud válida, sobre todo para quienes han sido lastimados por alguien que justificaba su propio comportamiento con demasiada facilidad.

La autocompasión, practicada con honestidad, no es una forma de evitar la responsabilidad. Es una forma de volverla sostenible. La compasión dice la verdad y acompaña la reparación.

### Dos tipos de dureza

Cuando hacemos algo que lastima a otras personas o que no está a la altura de nuestros valores, muchos oscilamos entre dos polos poco útiles:

- **Autoataque:** "Soy una persona horrible. Arruino todo". Parece que estamos asumiendo la responsabilidad, pero muchas veces desvía la atención hacia nuestro propio dolor y la aleja de la persona afectada.
- **Autodefensa:** "No fue para tanto. Exageraron. Cualquiera lo habría hecho". Nos protege de la vergüenza, pero bloquea el aprendizaje y la reparación.

Ambos son, de algún modo, intentos de escapar de la incomodidad de simplemente mirar lo que pasó. La autocompasión ofrece un tercer camino: quedarse presente con la verdad sin derrumbarse ni defenderse.

### El punto medio firme

Desde una postura compasiva, podrías decir: "Hice algo que causó daño. Me siento mal y eso tiene sentido, porque me importa. Soy una persona que puede equivocarse y también reparar". Esta frase sostiene al mismo tiempo tu valor y el impacto de tus actos.

Algunas personas descubren que, cuando no están ocupadas castigándose, tienen más energía para lo que de verdad importa: escuchar, pedir disculpas, cambiar un hábito o reconstruir la confianza.

### Exigencia sin crueldad

Puedes mantener una exigencia alta y, aun así, hablarte con respeto. Piensa en la mejor maestra, entrenador o mentor que hayas tenido. Probablemente esperaba mucho de ti. Probablemente también creía en ti, te señalaba aspectos concretos para mejorar y no te humillaba en el proceso. Ese es el modelo.

### Práctica: el espejo honesto

Elige una situación pequeña y reciente en la que no estuviste a la altura de tus valores, no la más pesada que cargas. Luego escribe:

- Qué pasó, con un lenguaje sencillo y basado en hechos.
- Quién se vio afectado y de qué manera, según lo que entiendes.
- Qué sientes ahora al respecto (arrepentimiento, vergüenza, tristeza).
- Qué te dice ese sentimiento sobre lo que valoras.
- Algo que podrías hacer, si corresponde, para aprender o reparar.

Observa si, mientras escribes, te deslizas hacia el autoataque o la autodefensa. Si ocurre, vuelve con suavidad a los hechos y a lo que te importa.`,
        prompt: 'Cuando no estás a la altura de tus valores, ¿tiendes al autoataque o a la autodefensa, y cómo sonaría el punto medio firme?'
      },
      'pt-BR': {
        title: 'Compaixão não é se eximir',
        content: `### Uma preocupação comum

Quando as pessoas começam a praticar a autocompaixão, costuma surgir uma pergunta justa: "Se eu for gentil comigo diante dos meus erros, não vou deixar de levá-los a sério?" É uma preocupação válida, especialmente para quem já foi ferido por alguém que justificava o próprio comportamento com facilidade demais.

A autocompaixão, praticada com honestidade, não é um jeito de fugir da responsabilidade. É um jeito de tornar a responsabilidade suportável. A compaixão fala a verdade e apoia a reparação.

### Dois tipos de dureza

Quando fazemos algo que machuca outras pessoas ou que fica aquém dos nossos valores, muitos de nós oscilamos entre dois polos pouco úteis:

- **Autoataque:** "Sou uma pessoa horrível. Estrago tudo." Parece que estamos assumindo a responsabilidade, mas muitas vezes isso desvia o foco para a nossa própria dor e o afasta da pessoa afetada.
- **Autodefesa:** "Não foi tão grave. Exageraram. Qualquer um teria feito isso." Isso nos protege da vergonha, mas bloqueia o aprendizado e a reparação.

Os dois são, de certa forma, tentativas de escapar do desconforto de simplesmente olhar para o que aconteceu. A autocompaixão oferece um terceiro caminho: permanecer presente diante da verdade sem desmoronar e sem se defender.

### O meio-termo firme

A partir de uma postura compassiva, você poderia dizer: "Fiz algo que causou dano. Estou me sentindo mal, e isso faz sentido, porque eu me importo. Sou uma pessoa que pode errar e também consertar." Essa frase mantém à vista, ao mesmo tempo, o seu valor e o impacto das suas ações.

Algumas pessoas percebem que, quando não estão ocupadas se punindo, têm mais energia para o que realmente importa: escutar, pedir desculpas, mudar um hábito ou reconstruir a confiança.

### Exigência sem crueldade

Você pode manter padrões altos e, mesmo assim, falar consigo com respeito. Pense no melhor professor, treinador ou mentor que você já teve. Provavelmente ele esperava muito de você. Provavelmente também acreditava em você, apontava pontos específicos para melhorar e não humilhava você no processo. Esse é o modelo aqui.

### Prática: o espelho honesto

Escolha uma situação pequena e recente em que você ficou aquém dos seus valores, não a mais pesada que você carrega. Depois escreva:

- O que aconteceu, em linguagem simples e factual.
- Quem foi afetado e de que forma, pelo que você entende.
- O que você sente agora sobre isso (arrependimento, vergonha, tristeza).
- O que esse sentimento diz sobre aquilo que você valoriza.
- Algo que você poderia fazer, se couber, para aprender ou reparar.

Perceba se, enquanto escreve, você escorrega para o autoataque ou para a autodefesa. Se isso acontecer, volte com delicadeza aos fatos e ao que importa para você.`,
        prompt: 'Quando você fica aquém dos seus valores, tende ao autoataque ou à autodefesa, e como soaria o meio-termo firme?'
      }
    },
    {
      id: 'les_comp_8',
      slug: 'naming-impact-without-humiliation',
      duration: 20,
      sort: 2,
      en: {
        title: 'Naming Impact Without Humiliation',
        content: `### Guilt and shame are not the same

A helpful distinction for this module is the difference between guilt and shame. Guilt says, "I did something wrong." Shame says, "I am something wrong." Guilt is about behavior, which can change. Shame is about identity, which feels fixed.

Guilt, in moderate doses, can be a useful signal. It points to a value we care about and nudges us toward repair. Shame, by contrast, tends to make us want to hide, withdraw, or lash out. It is very difficult to apologize well while drowning in shame, because all of our energy goes into surviving the feeling.

### Separating the act from the person

Naming impact without humiliation means describing what you did and how it affected others, without turning that description into a verdict on your entire self. Compare:

- "I'm so selfish, I always ruin everything." (shame)
- "I canceled on my friend at the last minute, and she was hurt because she had planned around it." (impact)

The second sentence is actually more accountable. It is specific. It centers the other person. And it points toward what could be different next time.

### The body of shame

Shame often shows up physically: a hot face, a sinking stomach, the urge to look away or make yourself smaller. When you notice these sensations, it can help to pause the story and care for the body first. A slow breath, feet on the floor, or a hand on your chest can bring you back to a steadier place from which you can think more clearly.

### Practice: rewriting the sentence

Take a situation where you feel guilt or shame about something you did. Then:

- Write the harshest version of the sentence your mind offers.
- Underline any words that describe who you are rather than what you did ("stupid," "selfish," "failure," "always," "never").
- Rewrite the sentence using only the specific action and its specific impact.
- Add a line of common humanity: "People who care sometimes get this wrong."
- Add a line of intention: "Next time I'd like to..."

Read both versions aloud if you can. Notice which one makes you want to hide and which one makes it possible to take a next step.

### A gentle reminder

Everyone carries some shame. If shame feels constant, overwhelming, or connected to experiences that were not your fault, please know that it is not a personal failing. It may be worth exploring with a licensed therapist or counselor, who can offer a kind of support that a course cannot.`,
        prompt: 'How can you name the impact of something you did without humiliating yourself? Try rewriting one harsh sentence as a specific, factual one.'
      },
      es: {
        title: 'Reconocer el impacto sin humillarte',
        content: `### La culpa y la vergüenza no son lo mismo

Una distinción útil para este módulo es la diferencia entre culpa y vergüenza. La culpa dice: "Hice algo mal". La vergüenza dice: "Soy algo malo". La culpa habla de una conducta, que puede cambiar. La vergüenza habla de la identidad, que se siente inamovible.

La culpa, en dosis moderadas, puede ser una señal útil. Señala un valor que nos importa y nos impulsa a reparar. La vergüenza, en cambio, suele hacernos querer escondernos, alejarnos o atacar. Es muy difícil pedir disculpas de verdad mientras nos ahogamos en vergüenza, porque toda nuestra energía se va en sobrevivir a esa sensación.

### Separar el acto de la persona

Reconocer el impacto sin humillarte significa describir lo que hiciste y cómo afectó a otras personas, sin convertir esa descripción en un veredicto sobre todo tu ser. Compara:

- "Soy tan egoísta, siempre lo arruino todo". (vergüenza)
- "Cancelé a mi amiga a último momento y se sintió herida porque había organizado su día en torno a eso". (impacto)

La segunda frase, en realidad, es más responsable. Es específica. Pone a la otra persona en el centro. Y señala qué podría ser distinto la próxima vez.

### La vergüenza en el cuerpo

La vergüenza suele aparecer en el cuerpo: la cara caliente, un hundimiento en el estómago, las ganas de mirar hacia otro lado o de hacerte pequeño. Cuando notes estas sensaciones, puede ayudar pausar la historia y cuidar primero el cuerpo. Una respiración lenta, los pies apoyados en el piso o una mano sobre el pecho pueden devolverte a un lugar más estable desde el cual pensar con más claridad.

### Práctica: reescribir la frase

Toma una situación en la que sientas culpa o vergüenza por algo que hiciste. Luego:

- Escribe la versión más dura de la frase que te ofrece tu mente.
- Subraya las palabras que describen quién eres en lugar de lo que hiciste ("tonto", "egoísta", "fracaso", "siempre", "nunca").
- Reescribe la frase usando solo la acción específica y su impacto específico.
- Agrega una línea de humanidad compartida: "Las personas a quienes les importa también se equivocan a veces".
- Agrega una línea de intención: "La próxima vez me gustaría...".

Si puedes, lee ambas versiones en voz alta. Observa cuál te da ganas de esconderte y cuál hace posible dar un siguiente paso.

### Un recordatorio amable

Todas las personas cargamos algo de vergüenza. Si la vergüenza se siente constante, abrumadora o ligada a experiencias que no fueron tu culpa, recuerda que no es una falla personal. Puede valer la pena explorarlo con un terapeuta o consejero con licencia, que puede ofrecer un tipo de apoyo que un curso no puede dar.`,
        prompt: '¿Cómo puedes reconocer el impacto de algo que hiciste sin humillarte? Prueba reescribir una frase dura como una frase específica y basada en hechos.'
      },
      'pt-BR': {
        title: 'Reconhecendo o impacto sem se humilhar',
        content: `### Culpa e vergonha não são a mesma coisa

Uma distinção útil para este módulo é a diferença entre culpa e vergonha. A culpa diz: "Eu fiz algo errado." A vergonha diz: "Eu sou algo errado." A culpa fala de um comportamento, que pode mudar. A vergonha fala da identidade, que parece fixa.

A culpa, em doses moderadas, pode ser um sinal útil. Ela aponta para um valor que nos importa e nos empurra para a reparação. A vergonha, ao contrário, costuma nos fazer querer esconder, se afastar ou atacar. É muito difícil pedir desculpas de verdade enquanto nos afogamos em vergonha, porque toda a nossa energia vai para sobreviver ao sentimento.

### Separando o ato da pessoa

Reconhecer o impacto sem se humilhar significa descrever o que você fez e como isso afetou os outros, sem transformar essa descrição num veredito sobre quem você é por inteiro. Compare:

- "Sou tão egoísta, sempre estrago tudo." (vergonha)
- "Desmarquei com a minha amiga em cima da hora, e ela ficou magoada porque tinha organizado o dia em função disso." (impacto)

A segunda frase, na verdade, é mais responsável. É específica. Coloca a outra pessoa no centro. E aponta o que poderia ser diferente da próxima vez.

### A vergonha no corpo

A vergonha muitas vezes aparece no corpo: o rosto quente, um afundamento no estômago, a vontade de desviar o olhar ou de ficar menor. Quando perceber essas sensações, pode ajudar pausar a história e cuidar primeiro do corpo. Uma respiração lenta, os pés apoiados no chão ou uma mão sobre o peito podem trazer você de volta a um lugar mais estável, de onde é possível pensar com mais clareza.

### Prática: reescrevendo a frase

Pegue uma situação em que você sente culpa ou vergonha por algo que fez. Depois:

- Escreva a versão mais dura da frase que a sua mente oferece.
- Sublinhe as palavras que descrevem quem você é, e não o que você fez ("burro", "egoísta", "fracasso", "sempre", "nunca").
- Reescreva a frase usando apenas a ação específica e o impacto específico.
- Acrescente uma linha de humanidade compartilhada: "Pessoas que se importam às vezes erram nisso."
- Acrescente uma linha de intenção: "Da próxima vez, eu gostaria de..."

Se puder, leia as duas versões em voz alta. Perceba qual delas dá vontade de se esconder e qual torna possível dar um próximo passo.

### Um lembrete gentil

Todo mundo carrega alguma vergonha. Se a vergonha parece constante, avassaladora ou ligada a experiências que não foram culpa sua, saiba que isso não é uma falha pessoal. Pode valer a pena explorar isso com um psicólogo ou terapeuta habilitado, que pode oferecer um tipo de apoio que um curso não consegue.`,
        prompt: 'Como você pode reconhecer o impacto de algo que fez sem se humilhar? Experimente reescrever uma frase dura como uma frase específica e factual.'
      }
    },
    {
      id: 'les_comp_9',
      slug: 'repair-and-making-amends',
      duration: 20,
      sort: 3,
      en: {
        title: 'Repair and Making Amends',
        content: `### From feeling to action

Self-compassion does not stop at feeling better. When we have caused harm, one of the kindest things we can do for ourselves and for others is to take a concrete step toward repair. Repair turns regret into something useful. It also helps shame loosen its grip, because we are no longer only thinking about what happened; we are doing something about it.

### What a meaningful apology includes

There is no perfect script, but sincere apologies often share a few elements:

- **Naming what happened** specifically, without minimizing: "I spoke over you in the meeting."
- **Acknowledging impact:** "I imagine that felt dismissive, especially since you'd prepared."
- **Taking responsibility** without piling on excuses: "That was my choice, and I'm sorry."
- **Offering repair or change:** "Next time I'll wait until you've finished. Is there anything you'd like me to do now?"
- **Listening** to their response, even if it is uncomfortable.

Notice what is not on the list: long explanations of your intentions, requests for immediate forgiveness, or extended descriptions of how bad you feel. These tend to shift attention back to you.

### When repair is not possible

Sometimes the person is no longer in your life, or contacting them would not be welcome or safe. Sometimes the harm cannot be undone. In those cases, repair can take other forms: changing the pattern going forward, contributing to others in a related way, writing a letter you do not send, or simply living in closer alignment with the value you broke. It is also important to respect other people's boundaries. An apology is an offering, not a demand for a response.

### Repairing with yourself

Many of us also owe ourselves some repair: for promises broken to our own bodies, for years of harsh self-talk, for ignoring our needs. You can apply the same steps inward: name what happened, acknowledge its impact on you, take responsibility gently, and choose one small change.

### Practice: planning one repair

Choose a situation where a small repair might be possible and appropriate:

- Write down what happened and who was affected.
- Draft a short apology using the elements above. Keep it brief.
- Read it back and remove any excuses or requests for reassurance.
- Decide whether, when, and how to offer it. It is okay to wait until you feel steady.
- Afterward, whatever the response, offer yourself a sentence of kindness for having tried.

Repair takes courage. Doing it imperfectly is still doing it.`,
        prompt: 'Is there a small repair, with someone else or with yourself, that feels possible and appropriate right now? What would the first step be?'
      },
      es: {
        title: 'Reparar y enmendar',
        content: `### Del sentimiento a la acción

La autocompasión no se detiene en sentirse mejor. Cuando causamos daño, una de las cosas más amables que podemos hacer, por nosotros y por los demás, es dar un paso concreto hacia la reparación. Reparar convierte el arrepentimiento en algo útil. También ayuda a que la vergüenza afloje, porque ya no solo pensamos en lo que pasó: estamos haciendo algo al respecto.

### Qué incluye una disculpa significativa

No existe un guion perfecto, pero las disculpas sinceras suelen compartir algunos elementos:

- **Nombrar lo que pasó** de forma específica, sin minimizar: "Te interrumpí en la reunión".
- **Reconocer el impacto:** "Imagino que se sintió como una falta de respeto, sobre todo porque te habías preparado".
- **Asumir la responsabilidad** sin acumular excusas: "Fue mi decisión y lo siento".
- **Ofrecer reparación o cambio:** "La próxima vez esperaré a que termines. ¿Hay algo que te gustaría que hiciera ahora?".
- **Escuchar** la respuesta, aunque resulte incómoda.

Observa lo que no está en la lista: largas explicaciones sobre tus intenciones, pedir perdón inmediato o descripciones extensas de lo mal que te sientes. Todo eso suele volver a poner la atención en ti.

### Cuando no es posible reparar

A veces la persona ya no está en tu vida, o contactarla no sería bienvenido ni seguro. A veces el daño no se puede deshacer. En esos casos, la reparación puede tomar otras formas: cambiar el patrón de aquí en adelante, contribuir con otras personas de una manera relacionada, escribir una carta que no envías o, simplemente, vivir más de acuerdo con el valor que rompiste. También es importante respetar los límites de los demás. Una disculpa es un ofrecimiento, no una exigencia de respuesta.

### Repararte a ti

Muchas personas también nos debemos alguna reparación: por promesas incumplidas a nuestro cuerpo, por años de diálogo interno severo, por ignorar nuestras necesidades. Puedes aplicar los mismos pasos hacia adentro: nombrar lo que pasó, reconocer su impacto en ti, asumir la responsabilidad con suavidad y elegir un pequeño cambio.

### Práctica: planear una reparación

Elige una situación en la que una pequeña reparación pueda ser posible y adecuada:

- Anota qué pasó y quién se vio afectado.
- Escribe un borrador de disculpa breve con los elementos anteriores.
- Reléelo y quita las excusas o los pedidos de consuelo.
- Decide si vas a ofrecerla, cuándo y cómo. Está bien esperar hasta sentirte con más calma.
- Después, sea cual sea la respuesta, date una frase amable por haberlo intentado.

Reparar requiere valentía. Hacerlo de forma imperfecta sigue siendo hacerlo.`,
        prompt: '¿Hay alguna pequeña reparación, con otra persona o contigo, que te parezca posible y adecuada ahora? ¿Cuál sería el primer paso?'
      },
      'pt-BR': {
        title: 'Reparar e fazer as pazes',
        content: `### Do sentimento à ação

A autocompaixão não termina em se sentir melhor. Quando causamos dano, uma das coisas mais gentis que podemos fazer, por nós e pelos outros, é dar um passo concreto em direção à reparação. Reparar transforma o arrependimento em algo útil. Também ajuda a vergonha a afrouxar, porque não estamos mais apenas pensando no que aconteceu: estamos fazendo algo a respeito.

### O que um pedido de desculpas significativo inclui

Não existe roteiro perfeito, mas pedidos de desculpas sinceros costumam ter alguns elementos em comum:

- **Nomear o que aconteceu** de forma específica, sem minimizar: "Eu interrompi você na reunião."
- **Reconhecer o impacto:** "Imagino que você tenha se sentido desrespeitado, principalmente porque tinha se preparado."
- **Assumir a responsabilidade** sem acumular desculpas: "Foi uma escolha minha, e sinto muito."
- **Oferecer reparação ou mudança:** "Da próxima vez vou esperar você terminar. Tem algo que você gostaria que eu fizesse agora?"
- **Escutar** a resposta, mesmo que seja desconfortável.

Perceba o que não está na lista: longas explicações sobre as suas intenções, pedidos de perdão imediato ou descrições extensas de como você está se sentindo mal. Isso tudo costuma trazer a atenção de volta para você.

### Quando a reparação não é possível

Às vezes a pessoa não faz mais parte da sua vida, ou procurá-la não seria bem-vindo nem seguro. Às vezes o dano não pode ser desfeito. Nesses casos, a reparação pode ter outras formas: mudar o padrão daqui em diante, contribuir com outras pessoas de um jeito relacionado, escrever uma carta que você não envia ou simplesmente viver mais de acordo com o valor que foi rompido. Também é importante respeitar os limites dos outros. Um pedido de desculpas é uma oferta, não uma exigência de resposta.

### Reparando consigo mesmo

Muitos de nós também devemos alguma reparação a nós mesmos: por promessas quebradas ao próprio corpo, por anos de diálogo interno duro, por ignorar as próprias necessidades. Você pode aplicar os mesmos passos para dentro: nomear o que aconteceu, reconhecer o impacto em você, assumir a responsabilidade com delicadeza e escolher uma pequena mudança.

### Prática: planejando uma reparação

Escolha uma situação em que uma pequena reparação possa ser possível e adequada:

- Anote o que aconteceu e quem foi afetado.
- Escreva um rascunho curto de pedido de desculpas usando os elementos acima.
- Releia e retire desculpas ou pedidos de consolo.
- Decida se, quando e como oferecê-lo. Tudo bem esperar até se sentir mais estável.
- Depois, qualquer que seja a resposta, ofereça a si mesmo uma frase gentil por ter tentado.

Reparar exige coragem. Fazer de forma imperfeita ainda é fazer.`,
        prompt: 'Existe uma pequena reparação, com outra pessoa ou consigo mesmo, que pareça possível e adequada agora? Qual seria o primeiro passo?'
      }
    }
  ]
};

const MOD_COMP_4 = {
  id: 'mod_comp_4',
  slug: 'a-sustainable-practice',
  sort: 4,
  en: { title: 'Caring for the Body & a Sustainable Practice', description: 'Bringing kindness into rest, nourishment, and daily routines, and building a practice you can return to.' },
  es: { title: 'Cuidar el cuerpo y una práctica sostenible', description: 'Llevar la amabilidad al descanso, la alimentación y la rutina diaria, y crear una práctica a la que puedas volver.' },
  'pt-BR': { title: 'Cuidar do corpo e uma prática sustentável', description: 'Levar a gentileza para o descanso, a alimentação e a rotina, e construir uma prática à qual você possa voltar.' },
  lessons: [
    {
      id: 'les_comp_10',
      slug: 'caring-for-the-body',
      duration: 20,
      sort: 1,
      en: {
        title: 'Caring for the Body',
        content: `### Compassion lives in the body too

Self-compassion is not only a matter of thoughts and words. It also shows up in how we treat the body that carries us through each day. Support includes rest, nourishment, movement, medication adherence, and comfort: ordinary, practical forms of care that are easy to neglect when we are stressed or busy.

Many people are far harsher with their bodies than with anyone else. We push through exhaustion, skip meals, ignore pain, or criticize our appearance in ways we would never speak to a friend. This lesson invites a gentler, more practical relationship.

### Today, not ideally

A helpful question is: "What does my body need today, not ideally?" The ideal version of self-care, with perfect sleep, an hour of exercise, and home-cooked meals, can become one more standard to fail. The realistic version asks what is possible with the energy, time, and resources you actually have right now.

On some days that might be a walk. On others it might be a glass of water, a snack, taking prescribed medication on time, or lying down for ten minutes. Each is a real act of care.

### Listening to signals

The body communicates constantly: hunger, thirst, tiredness, tension, restlessness, pain. When we are in a hurry, we tend to override these signals. A simple practice is to check in a few times a day and ask, "What am I noticing in my body right now?" You do not have to act on everything. Just noticing is a form of respect.

### A note on medical care

Caring for the body includes keeping up with medical care: taking medications as prescribed, attending appointments, and speaking with a clinician about symptoms that concern you. Self-compassion supports these choices; it never replaces them. If you have been putting off a health concern, gently consider whether scheduling that appointment could be your act of kindness this week.

### Practice: the body check-in

Two or three times today, pause for about one minute:

- Take one slower breath and notice where you feel it.
- Scan briefly from head to feet. Where is there tension, tiredness, or ease?
- Ask, "What do I need today, not ideally?"
- Choose one small, doable response: water, food, stretch, rest, fresh air, or medication.
- Offer yourself a kind sentence as you do it: "I'm taking care of you."

### If your relationship with your body is difficult

For people living with chronic illness, disability, pain, or a history of body-related distress, this area can be tender. You deserve care that fits your real body, not an idealized one. If body image, eating, or health concerns feel overwhelming, reaching out to a qualified clinician is a compassionate step.`,
        prompt: 'What does your body need today, not ideally? Name one small, realistic act of care you could offer it.'
      },
      es: {
        title: 'Cuidar el cuerpo',
        content: `### La compasión también vive en el cuerpo

La autocompasión no es solo una cuestión de pensamientos y palabras. También se nota en cómo tratamos al cuerpo que nos lleva a través de cada día. El cuidado incluye descanso, alimentación, movimiento, tomar la medicación indicada y comodidad: formas cotidianas y prácticas de cuidado que es fácil descuidar cuando hay estrés o mucho trabajo.

Muchas personas son mucho más duras con su cuerpo que con cualquier otra persona. Seguimos a pesar del agotamiento, nos saltamos comidas, ignoramos el dolor o criticamos nuestra apariencia de maneras que jamás usaríamos con una amistad. Esta lección invita a una relación más amable y práctica.

### Hoy, no en el ideal

Una pregunta útil es: "¿Qué necesita mi cuerpo hoy, no en el mundo ideal?". La versión ideal del autocuidado, con sueño perfecto, una hora de ejercicio y comidas caseras, puede convertirse en otra exigencia más en la que fallar. La versión realista pregunta qué es posible con la energía, el tiempo y los recursos que realmente tienes ahora.

Algunos días eso puede ser una caminata. Otros, un vaso de agua, algo para comer, tomar a tiempo la medicación indicada o recostarte diez minutos. Cada uno es un verdadero acto de cuidado.

### Escuchar las señales

El cuerpo se comunica todo el tiempo: hambre, sed, cansancio, tensión, inquietud, dolor. Cuando estamos apurados, solemos pasar por alto estas señales. Una práctica sencilla es hacer una pausa algunas veces al día y preguntarte: "¿Qué noto en mi cuerpo ahora?". No tienes que responder a todo. Solo notarlo ya es una forma de respeto.

### Una nota sobre la atención médica

Cuidar el cuerpo incluye mantener la atención médica: tomar los medicamentos según lo indicado, asistir a las consultas y hablar con un profesional de salud sobre los síntomas que te preocupan. La autocompasión apoya estas decisiones; nunca las reemplaza. Si has estado postergando una preocupación de salud, considera con suavidad si pedir ese turno podría ser tu acto de amabilidad de esta semana.

### Práctica: chequeo corporal

Dos o tres veces hoy, haz una pausa de más o menos un minuto:

- Haz una respiración más lenta y nota dónde la sientes.
- Recorre brevemente tu cuerpo de la cabeza a los pies. ¿Dónde hay tensión, cansancio o alivio?
- Pregúntate: "¿Qué necesito hoy, no en el ideal?".
- Elige una respuesta pequeña y posible: agua, comida, estirarte, descansar, aire fresco o tu medicación.
- Mientras lo haces, dite una frase amable: "Te estoy cuidando".

### Si tu relación con el cuerpo es difícil

Para quienes viven con una enfermedad crónica, una discapacidad, dolor o una historia de malestar relacionado con el cuerpo, este tema puede ser delicado. Mereces un cuidado que se ajuste a tu cuerpo real, no a uno idealizado. Si la imagen corporal, la alimentación o las preocupaciones de salud te resultan abrumadoras, buscar a un profesional calificado es un paso compasivo.`,
        prompt: '¿Qué necesita tu cuerpo hoy, no en el ideal? Nombra un acto de cuidado pequeño y realista que podrías ofrecerle.'
      },
      'pt-BR': {
        title: 'Cuidando do corpo',
        content: `### A compaixão também mora no corpo

A autocompaixão não é apenas uma questão de pensamentos e palavras. Ela também aparece na forma como tratamos o corpo que nos carrega a cada dia. O cuidado inclui descanso, alimentação, movimento, seguir a medicação prescrita e conforto: formas práticas e cotidianas de cuidado que são fáceis de deixar de lado quando estamos estressados ou ocupados.

Muitas pessoas são muito mais duras com o próprio corpo do que com qualquer outra pessoa. Seguimos apesar da exaustão, pulamos refeições, ignoramos a dor ou criticamos a aparência de um jeito que jamais usaríamos com um amigo. Esta lição convida a uma relação mais gentil e prática.

### Hoje, não no ideal

Uma pergunta útil é: "Do que o meu corpo precisa hoje, e não no ideal?" A versão ideal do autocuidado, com sono perfeito, uma hora de exercício e comida caseira, pode virar mais um padrão no qual falhar. A versão realista pergunta o que é possível com a energia, o tempo e os recursos que você realmente tem agora.

Em alguns dias, isso pode ser uma caminhada. Em outros, um copo de água, um lanche, tomar a medicação prescrita no horário ou se deitar por dez minutos. Cada um é um ato real de cuidado.

### Escutando os sinais

O corpo se comunica o tempo todo: fome, sede, cansaço, tensão, inquietação, dor. Quando estamos com pressa, tendemos a atropelar esses sinais. Uma prática simples é parar algumas vezes ao dia e perguntar: "O que estou percebendo no meu corpo agora?" Você não precisa agir sobre tudo. Só perceber já é uma forma de respeito.

### Um lembrete sobre cuidados médicos

Cuidar do corpo inclui manter os cuidados médicos em dia: tomar os remédios conforme a prescrição, ir às consultas e conversar com um profissional de saúde sobre sintomas que preocupam você. A autocompaixão apoia essas escolhas; nunca as substitui. Se você vem adiando uma questão de saúde, considere com delicadeza se marcar essa consulta pode ser o seu ato de gentileza desta semana.

### Prática: o check-in corporal

Duas ou três vezes hoje, faça uma pausa de cerca de um minuto:

- Faça uma respiração mais lenta e perceba onde você a sente.
- Percorra rapidamente o corpo, da cabeça aos pés. Onde há tensão, cansaço ou alívio?
- Pergunte: "Do que eu preciso hoje, e não no ideal?"
- Escolha uma resposta pequena e possível: água, comida, alongamento, descanso, ar fresco ou medicação.
- Enquanto faz isso, diga a si mesmo uma frase gentil: "Estou cuidando de você."

### Se a sua relação com o corpo é difícil

Para quem convive com doença crônica, deficiência, dor ou um histórico de sofrimento ligado ao corpo, esse tema pode ser delicado. Você merece um cuidado que caiba no seu corpo real, não num corpo idealizado. Se questões de imagem corporal, alimentação ou saúde parecerem avassaladoras, procurar um profissional qualificado é um passo compassivo.`,
        prompt: 'Do que o seu corpo precisa hoje, e não no ideal? Nomeie um ato de cuidado pequeno e realista que você poderia oferecer a ele.'
      }
    },
    {
      id: 'les_comp_11',
      slug: 'your-minimum-viable-kindness',
      duration: 15,
      sort: 2,
      en: {
        title: 'Your Minimum Viable Kindness',
        content: `### Small practices last longer

Many people finish a course like this feeling inspired, then find that the practice slips away within a few weeks. That is not a personal failure. It is how habits work. Big intentions tend to collapse under ordinary life. Small, specific practices are much more likely to survive.

So in this lesson we design a sustainable practice with three parts: a cue, a two-minute act, and a gentle restart plan. We start with the first two.

### Choosing a cue

A cue is something that already happens in your day and can remind you to practice. Linking a new habit to an existing one makes it easier to remember. Good cues are regular and specific:

- Pouring your first cup of coffee or tea.
- Sitting down in the car or on the bus.
- Washing your hands.
- Closing your laptop at the end of the workday.
- Turning off the light at night.

You might also choose an emotional cue: the moment you notice the inner critic getting loud.

### The two-minute act

Next, choose a practice so small it would be hard to skip. We call this your minimum viable act of kindness: the smallest version that still counts. Examples:

- One round of the three-part pause.
- Three slow breaths with a hand on your chest.
- Asking, "What do I need right now?" and answering honestly.
- Writing one line in a journal: "Today was hard because... and I..."
- Saying one supportive sentence to yourself in the mirror.

The point is not that two minutes is enough to transform your life. The point is that two minutes is doable on your worst day, and doing something small consistently tends to matter more than doing something big occasionally.

### Practice: designing your pairing

Take a few minutes to write:

- **My cue:** "When I..."
- **My two-minute act:** "I will..."
- **Why this matters to me:** one sentence connecting the practice to something you value.
- Put a small reminder where you will see it at the moment of the cue: a note, a phone reminder, or an object.
- Try it for one week, then adjust anything that is not working.

### Keep it kind

If you notice yourself turning this into a new way to judge yourself ("I missed three days, I'm hopeless"), that is a good moment to practice. Name it, remember that everyone forgets new habits, and begin again. In the next lesson we will build a plan for exactly that.`,
        prompt: 'What is your minimum viable act of kindness, and what everyday cue could you link it to?'
      },
      es: {
        title: 'Tu mínima amabilidad posible',
        content: `### Las prácticas pequeñas duran más

Muchas personas terminan un curso como este con inspiración y luego notan que la práctica se diluye en pocas semanas. No es un fracaso personal. Así funcionan los hábitos. Las grandes intenciones suelen derrumbarse ante la vida cotidiana. Las prácticas pequeñas y concretas tienen muchas más probabilidades de sostenerse.

Por eso, en esta lección diseñamos una práctica sostenible con tres partes: una señal, un acto de dos minutos y un plan amable para retomar. Empezamos con las dos primeras.

### Elegir una señal

Una señal es algo que ya ocurre en tu día y que puede recordarte practicar. Vincular un hábito nuevo con uno existente lo hace más fácil de recordar. Las buenas señales son regulares y específicas:

- Servirte el primer café, mate o té.
- Sentarte en el auto o en el autobús.
- Lavarte las manos.
- Cerrar la computadora al final de la jornada.
- Apagar la luz por la noche.

También podrías elegir una señal emocional: el momento en que notas que la voz crítica sube el volumen.

### El acto de dos minutos

Luego elige una práctica tan pequeña que sea difícil saltarla. La llamamos tu mínima amabilidad posible: la versión más pequeña que todavía cuenta. Por ejemplo:

- Una ronda de la pausa en tres pasos.
- Tres respiraciones lentas con una mano sobre el pecho.
- Preguntarte "¿Qué necesito ahora?" y responder con honestidad.
- Escribir una línea en un cuaderno: "Hoy fue difícil porque... y yo...".
- Decirte una frase de apoyo frente al espejo.

La idea no es que dos minutos basten para transformar tu vida. La idea es que dos minutos son posibles incluso en tu peor día, y hacer algo pequeño con constancia suele importar más que hacer algo grande de vez en cuando.

### Práctica: diseñar tu combinación

Tómate unos minutos para escribir:

- **Mi señal:** "Cuando yo...".
- **Mi acto de dos minutos:** "Voy a...".
- **Por qué me importa:** una frase que conecte la práctica con algo que valoras.
- Deja un pequeño recordatorio donde lo veas en el momento de la señal: una nota, una alarma en el teléfono o un objeto.
- Pruébalo durante una semana y luego ajusta lo que no esté funcionando.

### Mantenerlo amable

Si notas que conviertes esto en una nueva forma de juzgarte ("Me salté tres días, no tengo remedio"), ese es un buen momento para practicar. Nómbralo, recuerda que todo el mundo olvida los hábitos nuevos y vuelve a empezar. En la próxima lección armaremos un plan justamente para eso.`,
        prompt: '¿Cuál es tu mínima amabilidad posible y a qué señal cotidiana podrías vincularla?'
      },
      'pt-BR': {
        title: 'A sua gentileza mínima possível',
        content: `### Práticas pequenas duram mais

Muitas pessoas terminam um curso como este inspiradas e depois percebem que a prática se perde em poucas semanas. Isso não é um fracasso pessoal. É assim que os hábitos funcionam. Grandes intenções costumam desmoronar diante da vida comum. Práticas pequenas e específicas têm muito mais chance de se manter.

Por isso, nesta lição, vamos desenhar uma prática sustentável com três partes: um gatilho, um gesto de dois minutos e um plano gentil de recomeço. Começamos pelas duas primeiras.

### Escolhendo um gatilho

Um gatilho é algo que já acontece no seu dia e pode lembrar você de praticar. Ligar um hábito novo a um que já existe facilita a lembrança. Bons gatilhos são regulares e específicos:

- Servir o primeiro café ou chá do dia.
- Sentar no carro ou no ônibus.
- Lavar as mãos.
- Fechar o notebook no fim do expediente.
- Apagar a luz à noite.

Você também pode escolher um gatilho emocional: o momento em que percebe a voz crítica ficando alta.

### O gesto de dois minutos

Depois, escolha uma prática tão pequena que seja difícil pular. Chamamos isso de gentileza mínima possível: a menor versão que ainda conta. Por exemplo:

- Uma rodada da pausa em três passos.
- Três respirações lentas com a mão sobre o peito.
- Perguntar "Do que eu preciso agora?" e responder com honestidade.
- Escrever uma linha num caderno: "Hoje foi difícil porque... e eu..."
- Dizer a si mesmo uma frase de apoio diante do espelho.

A ideia não é que dois minutos bastem para transformar a sua vida. A ideia é que dois minutos são possíveis até no seu pior dia, e fazer algo pequeno com constância costuma importar mais do que fazer algo grande de vez em quando.

### Prática: montando a sua combinação

Reserve alguns minutos para escrever:

- **Meu gatilho:** "Quando eu..."
- **Meu gesto de dois minutos:** "Eu vou..."
- **Por que isso importa para mim:** uma frase que ligue a prática a algo que você valoriza.
- Deixe um pequeno lembrete onde você vai vê-lo no momento do gatilho: um bilhete, um alarme no celular ou um objeto.
- Experimente por uma semana e depois ajuste o que não estiver funcionando.

### Mantenha a gentileza

Se perceber que está transformando isso em mais uma forma de se julgar ("Pulei três dias, não tenho jeito"), esse é um bom momento para praticar. Nomeie, lembre que todo mundo esquece hábitos novos e recomece. Na próxima lição, vamos montar um plano justamente para isso.`,
        prompt: 'Qual é a sua gentileza mínima possível, e a que gatilho do dia a dia você poderia ligá-la?'
      }
    },
    {
      id: 'les_comp_12',
      slug: 'restarting-gently',
      duration: 20,
      sort: 3,
      en: {
        title: 'Restarting Gently and Closing the Course',
        content: `### The restart plan

Every practice lapses. Travel, illness, grief, busy seasons, or simple forgetfulness will interrupt your routine. The question is not whether you will stop, but how you will begin again. A gentle restart plan decides that in advance, while you are calm, so you do not have to negotiate with the inner critic later.

A restart plan can be as simple as three sentences:

- "When I notice I've stopped, I will remind myself that lapses are normal."
- "I will restart with the smallest version of my practice, not a catch-up."
- "I will not try to make up for missed days."

That last point matters. Trying to compensate for lost time turns the practice back into a performance. Beginning again, as many times as needed, is the practice.

### What you have explored

Over these four modules you have:

- Noticed the tone of your inner voice and where it may come from.
- Learned Kristin Neff's three components: mindfulness, common humanity, and self-kindness.
- Practiced the three-part pause and found sentences that sound honest to you.
- Explored how compassion supports accountability, apology, and repair.
- Brought care to the body and designed a small, sustainable practice.

None of this needs to be perfect or complete. Self-compassion is a relationship you will keep building for the rest of your life, with good seasons and hard ones.

### When to seek more support

This course is educational and reflective. It is not a substitute for therapy or medical care. Consider reaching out to a licensed mental health professional if self-criticism, shame, low mood, or anxiety are affecting your sleep, work, relationships, or ability to enjoy life, or if they have lasted for weeks. If you are ever in danger or thinking about harming yourself, please contact your local emergency number or a crisis line such as 988 in the US right away. Asking for help is itself an act of self-compassion.

### Practice: close gently

Take a few quiet minutes and write three short lines:

- **One thing I want to carry forward:** a phrase, a practice, or an insight.
- **One thing I am setting down for now:** an old script, an expectation, or a habit of harshness.
- **One source of support I can contact if needed:** a person, a group, or a professional.

Then write your restart plan in your own words and keep it somewhere you will find it again.

### A final word

Thank you for spending this time with yourself. The fact that you came here, stayed curious, and practiced even a little is already a form of kindness. Whenever you need to, you can return to the beginning. The door stays open.`,
        prompt: 'What is one thing you want to carry forward, one thing you are setting down for now, and one source of support you can contact if needed?'
      },
      es: {
        title: 'Volver a empezar con suavidad y cerrar el curso',
        content: `### El plan para retomar

Toda práctica se interrumpe alguna vez. Los viajes, las enfermedades, el duelo, las temporadas de mucho trabajo o el simple olvido cortan la rutina. La pregunta no es si vas a dejar de practicar, sino cómo vas a volver a empezar. Un plan amable para retomar lo decide de antemano, con calma, para que no tengas que negociar después con la voz crítica.

Un plan para retomar puede ser tan simple como tres frases:

- "Cuando note que dejé de practicar, me recordaré que las pausas son normales".
- "Volveré con la versión más pequeña de mi práctica, no con una recuperación".
- "No intentaré compensar los días perdidos".

Ese último punto importa. Intentar compensar el tiempo perdido vuelve a convertir la práctica en un desempeño. Volver a empezar, tantas veces como haga falta, es la práctica.

### Lo que exploraste

A lo largo de estos cuatro módulos:

- Observaste el tono de tu voz interior y de dónde podría venir.
- Conociste los tres componentes de Kristin Neff: presencia consciente, humanidad compartida y amabilidad.
- Practicaste la pausa en tres pasos y encontraste frases que te suenan honestas.
- Exploraste cómo la compasión sostiene la responsabilidad, la disculpa y la reparación.
- Llevaste cuidado al cuerpo y diseñaste una práctica pequeña y sostenible.

Nada de esto tiene que ser perfecto ni estar terminado. La autocompasión es una relación que seguirás construyendo toda la vida, con temporadas buenas y otras difíciles.

### Cuándo buscar más apoyo

Este curso es educativo y reflexivo. No reemplaza la terapia ni la atención médica. Considera buscar a un profesional de salud mental con licencia si la autocrítica, la vergüenza, el ánimo bajo o la ansiedad están afectando tu sueño, tu trabajo, tus relaciones o tu capacidad de disfrutar la vida, o si se han prolongado durante semanas. Si en algún momento estás en peligro o piensas en hacerte daño, comunícate de inmediato con tu número local de emergencias o con una línea de crisis, como el 988 en Estados Unidos. Pedir ayuda es, en sí mismo, un acto de autocompasión.

### Práctica: cerrar con suavidad

Tómate unos minutos tranquilos y escribe tres líneas breves:

- **Algo que quiero llevar conmigo:** una frase, una práctica o una comprensión.
- **Algo que dejo a un lado por ahora:** un viejo guion, una expectativa o un hábito de dureza.
- **Una fuente de apoyo a la que puedo recurrir si lo necesito:** una persona, un grupo o un profesional.

Luego escribe tu plan para retomar con tus propias palabras y guárdalo en un lugar donde vuelvas a encontrarlo.

### Una última palabra

Gracias por dedicarte este tiempo. El hecho de que llegaste hasta aquí, mantuviste la curiosidad y practicaste aunque sea un poco ya es una forma de amabilidad. Cuando lo necesites, puedes volver al principio. La puerta sigue abierta.`,
        prompt: '¿Qué quieres llevar contigo, qué dejas a un lado por ahora y a qué fuente de apoyo puedes recurrir si lo necesitas?'
      },
      'pt-BR': {
        title: 'Recomeçar com gentileza e encerrar o curso',
        content: `### O plano de recomeço

Toda prática tem interrupções. Viagens, doenças, luto, fases corridas ou o simples esquecimento vão quebrar a rotina. A questão não é se você vai parar, mas como vai recomeçar. Um plano gentil de recomeço decide isso antes, com calma, para que você não precise negociar com a voz crítica depois.

Um plano de recomeço pode ser simples assim, com três frases:

- "Quando eu perceber que parei, vou me lembrar de que pausas são normais."
- "Vou recomeçar com a menor versão da minha prática, sem tentar tirar o atraso."
- "Não vou tentar compensar os dias perdidos."

Esse último ponto importa. Tentar compensar o tempo perdido transforma a prática de novo em desempenho. Recomeçar, quantas vezes for preciso, é a prática.

### O que você explorou

Ao longo destes quatro módulos, você:

- Percebeu o tom da sua voz interna e de onde ele pode vir.
- Conheceu os três componentes de Kristin Neff: atenção plena, humanidade compartilhada e gentileza.
- Praticou a pausa em três passos e encontrou frases que soam honestas para você.
- Explorou como a compaixão apoia a responsabilidade, o pedido de desculpas e a reparação.
- Levou cuidado ao corpo e desenhou uma prática pequena e sustentável.

Nada disso precisa ser perfeito nem estar completo. A autocompaixão é uma relação que você vai continuar construindo pela vida toda, com fases boas e fases difíceis.

### Quando buscar mais apoio

Este curso é educativo e reflexivo. Ele não substitui terapia nem cuidados médicos. Considere procurar um profissional de saúde mental habilitado se a autocrítica, a vergonha, o desânimo ou a ansiedade estiverem afetando o seu sono, o trabalho, os relacionamentos ou a capacidade de aproveitar a vida, ou se isso já dura semanas. Se em algum momento você estiver em perigo ou pensando em se machucar, procure imediatamente o número de emergência local ou uma linha de apoio em crise, como o 988 nos Estados Unidos. Pedir ajuda já é, em si, um ato de autocompaixão.

### Prática: encerrar com delicadeza

Reserve alguns minutos tranquilos e escreva três linhas curtas:

- **Algo que quero levar comigo:** uma frase, uma prática ou uma percepção.
- **Algo que deixo de lado por agora:** um roteiro antigo, uma expectativa ou um hábito de dureza.
- **Uma fonte de apoio que posso procurar se precisar:** uma pessoa, um grupo ou um profissional.

Depois, escreva o seu plano de recomeço com as suas próprias palavras e guarde-o num lugar onde você vá encontrá-lo de novo.

### Uma última palavra

Obrigado por dedicar este tempo a si mesmo. O fato de você ter chegado até aqui, mantido a curiosidade e praticado, mesmo que um pouco, já é uma forma de gentileza. Sempre que precisar, você pode voltar ao começo. A porta continua aberta.`,
        prompt: 'O que você quer levar adiante, o que está deixando de lado por agora e que fonte de apoio pode procurar se precisar?'
      }
    }
  ]
};

const COURSE_COMPASSION = {
  id: 'course_compassion',
  slug: 'self-compassion-and-kindness',
  is_premium: 1,
  level: 'All levels',
  hours: 4.0,
  en: {
    title: 'Self-Compassion & Kindness Practices',
    subtitle: 'Replacing harsh self-judgment with grounded, honest care you can actually use.',
    description: 'A structured 4-module journey into mindful presence, the universal nature of human difficulty, and practical ways to speak kindly to yourself in moments of crisis.',
    outcomes: JSON.stringify(['Master the three-part kindness pause in high-stress moments', 'Dismantle the myth that self-criticism leads to success', 'Cultivate emotional containers that prevent overwhelm', 'Pair kindness with accountability, apology, and repair', 'Build a small, sustainable daily practice with a gentle restart plan'])
  },
  es: {
    title: 'Prácticas de autocompasión y bondad',
    subtitle: 'Sustituir el diálogo interno severo por un cuidado sincero y aplicable a la vida real.',
    description: 'Un recorrido en cuatro módulos para cultivar la presencia plena, comprender la fragilidad humana compartida y tratarse con paciencia durante los momentos difíciles.',
    outcomes: JSON.stringify(['Integrar la pausa de autocompasión en situaciones tensas', 'Comprender por qué la autocrítica constante agota tu energía', 'Crear espacios de descanso emocional en el día a día', 'Unir la amabilidad con la responsabilidad, la disculpa y la reparación', 'Construir una práctica diaria pequeña y sostenible, con un plan amable para retomar'])
  },
  'pt-BR': {
    title: 'Práticas de autocompaixão e gentileza',
    subtitle: 'Transformando a autocrítica dura em um apoio sincero e realizável no cotidiano.',
    description: 'Uma jornada em quatro etapas para desenvolver presença, acolher as dificuldades humanas e falar consigo mesmo com respeito e paciência.',
    outcomes: JSON.stringify(['Aprender a pausa da gentileza para momentos de sobrecarga', 'Perceber que a autocrítica não é a chave para o crescimento', 'Construir hábitos diários de cuidado e respeito pelo seu corpo', 'Unir gentileza e responsabilidade, pedido de desculpas e reparação', 'Criar uma prática diária pequena e sustentável, com um plano gentil de recomeço'])
  },
  modules: [MOD_COMP_1, MOD_COMP_2, MOD_COMP_3, MOD_COMP_4]
};

// ---------------------------------------------------------------------------
// COURSE 2 — Radical Acceptance Foundations
// ---------------------------------------------------------------------------

const MOD_ACC_1 = {
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
        content: `### Where we begin

Acceptance does not mean you approve of what happened. It means you stop exhausting yourself by denying what has already occurred.

Most of us know the feeling of fighting reality. A diagnosis arrives, a relationship ends, a job is lost, a plan falls apart, and part of us keeps insisting, "This can't be happening." We replay conversations, rehearse what should have been, and feel our bodies brace against something that has already taken place. That struggle is deeply human. It is also tiring, and it rarely changes the facts.

### How to use this course

This is an educational course, not therapy. Move slowly. Write only what feels useful and safe. You can skip any prompt, adapt the language, or come back later. Completion is not the same thing as healing, and insight does not need to be forced. If any exercise increases distress, stop, look around the room, and return when you feel steadier. If you are facing something very painful, such as trauma, abuse, or a recent loss, please consider working through this material with the support of a licensed professional.

### Facts without judgment words

A useful first step toward acceptance is learning to describe a situation plainly. Judgment words, such as "unfair," "terrible," "ridiculous," "should," and "never," are not wrong, and your feelings about a situation matter. But when they are woven into every description, it becomes hard to see what is actually in front of you.

Compare:

- "My terrible boss ruined everything by cutting my hours for no reason."
- "My hours were reduced from forty to twenty-five starting next month."

The second version is not colder. It is clearer. Clarity gives you something solid to stand on.

### Practice: three plain facts

Choose a difficult situation, preferably one that is moderate rather than the most painful thing in your life. Then:

- Write three facts about it, using only what a camera could record or a neutral observer could confirm.
- Read them back and remove any judgment words you find. Keep your feelings on a separate line if you like.
- Notice what happens in your body as you read the plain version.
- Finish with this sentence: "If I accepted these facts, it might free me to..."

### What acceptance may free you to do

People often discover that accepting the facts frees them to rest, to grieve, to ask for help, to make a plan, or simply to stop rehearsing an argument with reality. Acceptance is not the end of the story. It is the ground from which the next chapter can begin.`,
        prompt: 'What fact about your current reality have you been resisting or trying to deny?'
      },
      es: {
        title: 'Reconocer la realidad presente',
        content: `### Por dónde empezamos

Aceptar no significa estar de acuerdo con lo sucedido, sino dejar de desgastarte negando lo que ya forma parte de los hechos.

La mayoría conocemos la sensación de pelear contra la realidad. Llega un diagnóstico, termina una relación, se pierde un trabajo, se derrumba un plan, y una parte de nosotros sigue insistiendo: "Esto no puede estar pasando". Repetimos conversaciones, ensayamos lo que debería haber sido y sentimos que el cuerpo se tensa ante algo que ya ocurrió. Esa lucha es profundamente humana. También es agotadora, y rara vez cambia los hechos.

### Cómo recorrer este curso

Este es un curso educativo, no una terapia. Avanza con calma. Escribe solo lo que te resulte útil y seguro. Puedes saltarte cualquier pregunta, adaptar el lenguaje o volver más adelante. Terminar un curso no es lo mismo que sanar, y la comprensión no necesita forzarse. Si algún ejercicio aumenta tu malestar, detente, mira a tu alrededor y vuelve cuando te sientas con más estabilidad. Si estás atravesando algo muy doloroso, como un trauma, un abuso o una pérdida reciente, considera recorrer este material con el acompañamiento de un profesional con licencia.

### Hechos sin palabras de juicio

Un primer paso útil hacia la aceptación es aprender a describir una situación con sencillez. Las palabras de juicio, como "injusto", "terrible", "ridículo", "debería" o "nunca", no están mal, y lo que sientes frente a una situación importa. Pero cuando están mezcladas en cada descripción, se vuelve difícil ver lo que realmente tienes enfrente.

Compara:

- "Mi jefe horrible arruinó todo al recortarme las horas sin ningún motivo".
- "Mis horas se redujeron de cuarenta a veinticinco a partir del mes próximo".

La segunda versión no es más fría. Es más clara. La claridad te da un suelo firme donde pararte.

### Práctica: tres hechos sencillos

Elige una situación difícil, preferiblemente moderada y no la más dolorosa de tu vida. Luego:

- Escribe tres hechos sobre ella, usando solo lo que una cámara podría registrar o lo que un observador neutral podría confirmar.
- Reléelos y quita las palabras de juicio que encuentres. Si quieres, anota tus emociones en una línea aparte.
- Observa qué sucede en tu cuerpo al leer la versión sencilla.
- Termina con esta frase: "Si aceptara estos hechos, quizá podría...".

### Lo que la aceptación podría permitirte

Muchas personas descubren que aceptar los hechos les permite descansar, hacer el duelo, pedir ayuda, armar un plan o simplemente dejar de ensayar una discusión con la realidad. La aceptación no es el final de la historia. Es el suelo desde el cual puede empezar el siguiente capítulo.`,
        prompt: '¿Qué hecho de tu vida presente te ha costado más reconocer?'
      },
      'pt-BR': {
        title: 'Reconhecendo a realidade presente',
        content: `### Por onde começamos

Aceitar não significa aprovar o que aconteceu, mas parar de se esgotar brigando contra o que já se consolidou.

A maioria de nós conhece a sensação de brigar com a realidade. Chega um diagnóstico, um relacionamento termina, um emprego é perdido, um plano desmorona, e uma parte de nós continua insistindo: "Isso não pode estar acontecendo." Repassamos conversas, ensaiamos o que deveria ter sido e sentimos o corpo se contrair diante de algo que já aconteceu. Essa luta é profundamente humana. Também é cansativa, e raramente muda os fatos.

### Como percorrer este curso

Este é um curso educativo, não uma terapia. Vá devagar. Escreva apenas o que parecer útil e seguro. Você pode pular qualquer pergunta, adaptar a linguagem ou voltar depois. Concluir um curso não é o mesmo que se curar, e a compreensão não precisa ser forçada. Se algum exercício aumentar o seu desconforto, pare, olhe ao redor do ambiente e volte quando se sentir mais estável. Se você está passando por algo muito doloroso, como um trauma, uma situação de abuso ou uma perda recente, considere percorrer este material com o acompanhamento de um profissional habilitado.

### Fatos sem palavras de julgamento

Um primeiro passo útil rumo à aceitação é aprender a descrever uma situação de forma simples. Palavras de julgamento, como "injusto", "terrível", "ridículo", "deveria" e "nunca", não são erradas, e o que você sente sobre a situação importa. Mas, quando estão misturadas em cada descrição, fica difícil enxergar o que realmente está diante de você.

Compare:

- "Meu chefe horrível estragou tudo cortando as minhas horas sem motivo nenhum."
- "Minhas horas foram reduzidas de quarenta para vinte e cinco a partir do mês que vem."

A segunda versão não é mais fria. É mais clara. A clareza oferece um chão firme para você se apoiar.

### Prática: três fatos simples

Escolha uma situação difícil, de preferência moderada, e não a mais dolorosa da sua vida. Depois:

- Escreva três fatos sobre ela, usando apenas o que uma câmera poderia registrar ou o que um observador neutro poderia confirmar.
- Releia e retire as palavras de julgamento que encontrar. Se quiser, anote os seus sentimentos numa linha separada.
- Perceba o que acontece no seu corpo ao ler a versão simples.
- Termine com esta frase: "Se eu aceitasse esses fatos, talvez eu pudesse..."

### O que a aceitação pode liberar

Muitas pessoas descobrem que aceitar os fatos as libera para descansar, viver o luto, pedir ajuda, fazer um plano ou simplesmente parar de ensaiar uma discussão com a realidade. A aceitação não é o fim da história. É o chão a partir do qual o próximo capítulo pode começar.`,
        prompt: 'Qual aspecto da sua realidade atual você tem resistido em aceitar?'
      }
    },
    {
      id: 'les_acc_2',
      slug: 'acceptance-is-not-approval',
      duration: 20,
      sort: 2,
      en: {
        title: 'Acceptance Is Not Approval',
        content: `### Clearing up the confusion

The word "acceptance" carries a lot of baggage. For many people it sounds like giving up, letting someone off the hook, or pretending something is fine when it is not. No wonder they resist it. If acceptance meant any of those things, resisting it would be healthy.

Acceptance, as we use the word here, recognizes what is already present. It does not require liking it, excusing harm, reconciling, or giving up on change.

### What acceptance is not

Let's name the most common misunderstandings directly:

- **Not liking it.** You can accept that something happened and still wish with your whole heart that it had not.
- **Not approving or excusing.** Accepting that someone hurt you does not mean what they did was acceptable. Harm remains harm.
- **Not reconciling.** You can accept the reality of a relationship without continuing it or forgiving on anyone else's timeline.
- **Not resignation.** Acceptance does not mean "nothing can change." It means "this is where I am starting from."
- **Not a feeling.** Acceptance is often a choice made again and again, even while sadness, anger, or fear are still present.

### What acceptance is

At its heart, acceptance is an honest acknowledgment: "This is what is happening. This is what has happened." It is a willingness to see reality clearly, including the parts you wish were different, so that you can respond from where you actually are rather than from where you wish you were.

Consider someone whose car has broken down on a busy road. Standing on the shoulder shouting that it should not have happened is understandable, but it does not get them home. Accepting that the car has broken down, without liking it, is what makes it possible to call for help.

### Acceptance and justice

Some people worry that accepting injustice means tolerating it. In fact, many people who work hardest for change are those who have looked most clearly at how things really are. You cannot change a situation you refuse to see. Acceptance can be the starting point for advocacy, boundaries, and action.

### Practice: sorting the misconceptions

Think of a situation you have found hard to accept. Then complete these sentences:

- "Accepting this does not mean I approve of..."
- "Accepting this does not mean I have to..."
- "Accepting this does not mean I stop wanting..."
- "Accepting this might mean I can finally..."

Notice whether any tension eases as you separate acceptance from the things it is not.`,
        prompt: 'Which misunderstanding about acceptance has made it hardest for you to practice, and what does acceptance NOT require of you in your situation?'
      },
      es: {
        title: 'Aceptar no es aprobar',
        content: `### Aclarar la confusión

La palabra "aceptación" carga mucho equipaje. Para muchas personas suena a rendirse, a dejar que alguien se salga con la suya o a fingir que algo está bien cuando no lo está. Con razón se resisten. Si la aceptación significara cualquiera de esas cosas, resistirse sería lo más sano.

La aceptación, tal como la usamos aquí, reconoce lo que ya está presente. No exige que te guste, que justifiques un daño, que te reconcilies ni que renuncies al cambio.

### Lo que la aceptación no es

Nombremos directamente los malentendidos más comunes:

- **No es que te guste.** Puedes aceptar que algo pasó y aun así desear con todo tu corazón que no hubiera pasado.
- **No es aprobar ni justificar.** Aceptar que alguien te lastimó no significa que lo que hizo haya estado bien. El daño sigue siendo daño.
- **No es reconciliarte.** Puedes aceptar la realidad de una relación sin continuarla ni perdonar según los tiempos de otra persona.
- **No es resignación.** Aceptar no significa "nada puede cambiar". Significa "desde aquí empiezo".
- **No es una emoción.** La aceptación muchas veces es una elección que se repite una y otra vez, incluso mientras la tristeza, el enojo o el miedo siguen presentes.

### Lo que la aceptación sí es

En esencia, la aceptación es un reconocimiento honesto: "Esto es lo que está pasando. Esto es lo que pasó". Es la disposición a ver la realidad con claridad, incluidas las partes que desearías que fueran distintas, para poder responder desde donde realmente estás y no desde donde te gustaría estar.

Piensa en alguien a quien se le descompone el auto en una avenida con mucho tránsito. Quedarse en la banquina gritando que no debería haber pasado es comprensible, pero no lo lleva a casa. Aceptar que el auto se descompuso, sin que le guste, es lo que le permite pedir ayuda.

### Aceptación y justicia

Algunas personas temen que aceptar una injusticia signifique tolerarla. En realidad, muchas de las personas que más trabajan por el cambio son las que miraron con más claridad cómo son las cosas. No puedes cambiar una situación que te niegas a ver. La aceptación puede ser el punto de partida para defender derechos, poner límites y actuar.

### Práctica: ordenar los malentendidos

Piensa en una situación que te ha costado aceptar. Luego completa estas frases:

- "Aceptar esto no significa que apruebe...".
- "Aceptar esto no significa que tenga que...".
- "Aceptar esto no significa que deje de desear...".
- "Aceptar esto quizá signifique que por fin pueda...".

Observa si alguna tensión se afloja al separar la aceptación de todo aquello que no es.`,
        prompt: '¿Qué malentendido sobre la aceptación te ha hecho más difícil practicarla y qué NO te exige la aceptación en tu situación?'
      },
      'pt-BR': {
        title: 'Aceitar não é aprovar',
        content: `### Desfazendo a confusão

A palavra "aceitação" carrega muita bagagem. Para muita gente, ela soa como desistir, deixar alguém sair impune ou fingir que algo está bem quando não está. Não é à toa que as pessoas resistem. Se aceitar significasse qualquer uma dessas coisas, resistir seria saudável.

A aceitação, do jeito que usamos a palavra aqui, reconhece o que já está presente. Ela não exige gostar, justificar um dano, fazer as pazes nem desistir da mudança.

### O que a aceitação não é

Vamos nomear diretamente os mal-entendidos mais comuns:

- **Não é gostar.** Você pode aceitar que algo aconteceu e ainda desejar, de todo o coração, que não tivesse acontecido.
- **Não é aprovar nem justificar.** Aceitar que alguém feriu você não significa que o que essa pessoa fez foi aceitável. Dano continua sendo dano.
- **Não é reconciliação.** Você pode aceitar a realidade de uma relação sem continuar nela nem perdoar no tempo de outra pessoa.
- **Não é resignação.** Aceitar não significa "nada pode mudar". Significa "é daqui que eu começo".
- **Não é um sentimento.** A aceitação muitas vezes é uma escolha feita de novo e de novo, mesmo enquanto a tristeza, a raiva ou o medo continuam presentes.

### O que a aceitação é

No fundo, a aceitação é um reconhecimento honesto: "Isto é o que está acontecendo. Isto é o que aconteceu." É a disposição de ver a realidade com clareza, inclusive as partes que você gostaria que fossem diferentes, para poder responder a partir de onde você realmente está, e não de onde gostaria de estar.

Pense em alguém cujo carro quebrou numa avenida movimentada. Ficar no acostamento gritando que isso não deveria ter acontecido é compreensível, mas não leva ninguém para casa. Aceitar que o carro quebrou, sem gostar disso, é o que torna possível pedir ajuda.

### Aceitação e justiça

Algumas pessoas temem que aceitar uma injustiça signifique tolerá-la. Na verdade, muitas das pessoas que mais trabalham por mudança são justamente as que olharam com mais clareza para como as coisas são. Não dá para mudar uma situação que você se recusa a ver. A aceitação pode ser o ponto de partida para a defesa de direitos, para limites e para a ação.

### Prática: separando os mal-entendidos

Pense numa situação que tem sido difícil de aceitar. Depois, complete estas frases:

- "Aceitar isso não significa que eu aprove..."
- "Aceitar isso não significa que eu precise..."
- "Aceitar isso não significa que eu pare de desejar..."
- "Aceitar isso talvez signifique que eu finalmente possa..."

Perceba se alguma tensão se afrouxa quando você separa a aceitação de tudo aquilo que ela não é.`,
        prompt: 'Qual mal-entendido sobre a aceitação tornou mais difícil praticá-la, e o que a aceitação NÃO exige de você na sua situação?'
      }
    },
    {
      id: 'les_acc_3',
      slug: 'radical-means-all-the-way',
      duration: 20,
      sort: 3,
      en: {
        title: 'Radical Means All the Way',
        content: `### Where the term comes from

The phrase "radical acceptance" is closely associated with psychologist Marsha Linehan, who included it among the distress tolerance skills of Dialectical Behavior Therapy (DBT). The idea itself draws on much older contemplative traditions that have long taught the value of meeting reality as it is. This course is not DBT training and is not a substitute for therapy, but the concepts are widely shared and useful in everyday life.

"Radical" here does not mean extreme or dramatic. It comes from the Latin word for "root." Radical acceptance means accepting something all the way down to the root: in your mind, in your heart, and in your body, rather than only saying the words while still bracing against reality.

### Partial acceptance

Many of us practice a kind of partial acceptance. We say, "I know it's over," while still checking our ex's social media every night. We say, "I've accepted my diagnosis," while refusing to adjust our schedule. Partial acceptance is still valuable, and it is often where people start. But it tends to keep a quiet war going inside.

Radical acceptance asks: "Is there any part of me still arguing that this should not be true?" Not to shame that part, but to notice it and gently invite it to rest.

### Turning the mind

Acceptance is rarely a single decision. In DBT this is sometimes described as "turning the mind": choosing acceptance, drifting back into resistance, and choosing acceptance again, over and over. Imagine standing at a fork in the road where one path leads to acceptance and the other to rejecting reality. You may need to turn toward acceptance many times a day, especially with big losses.

This is normal. Each turn counts, even if you have to make it again five minutes later.

### Willingness and willfulness

Another helpful pair of ideas is willingness versus willfulness. Willfulness is refusing to participate in life as it is: sulking, digging in, insisting on doing things your way when your way is no longer possible. Willingness is doing what the situation calls for, even if you would rather not. Willingness is not passive. It is an active, open-handed stance.

### Practice: noticing the fork

For a few days, when you notice yourself thinking "This shouldn't be happening," try this:

- Pause and name it: "I'm at the fork."
- Notice any physical bracing: clenched hands, held breath, tight shoulders.
- Gently open your hands, palms up, resting on your lap or at your sides.
- Say quietly: "This is what is happening right now."
- If resistance returns, that is okay. Turn the mind again.

Open, relaxed hands are a small bodily signal of willingness. Many people find it surprisingly helpful.`,
        prompt: 'Is there any part of you that has accepted something only partway? What might it look like to turn your mind toward acceptance one more time?'
      },
      es: {
        title: 'Radical significa desde la raíz',
        content: `### De dónde viene el término

La expresión "aceptación radical" está muy asociada a la psicóloga Marsha Linehan, quien la incluyó entre las habilidades de tolerancia al malestar de la Terapia Dialéctica Conductual (DBT, por sus siglas en inglés). La idea en sí se nutre de tradiciones contemplativas mucho más antiguas que enseñan desde hace siglos el valor de recibir la realidad tal como es. Este curso no es una formación en DBT ni reemplaza la terapia, pero estos conceptos son ampliamente conocidos y útiles en la vida cotidiana.

Aquí "radical" no significa extremo ni dramático. Viene de la palabra latina que significa "raíz". Aceptar radicalmente es aceptar algo hasta la raíz: con la mente, con el corazón y con el cuerpo, y no solo decir las palabras mientras seguimos en tensión contra la realidad.

### La aceptación a medias

Muchas personas practicamos una especie de aceptación a medias. Decimos "Sé que terminó", mientras seguimos revisando cada noche las redes de nuestra expareja. Decimos "Ya acepté mi diagnóstico", mientras nos negamos a ajustar la agenda. La aceptación parcial igual tiene valor, y muchas veces es por donde empezamos. Pero suele mantener una guerra silenciosa por dentro.

La aceptación radical pregunta: "¿Queda alguna parte de mí que siga discutiendo que esto no debería ser cierto?". No para avergonzar a esa parte, sino para notarla e invitarla con suavidad a descansar.

### Girar la mente

La aceptación rara vez es una decisión única. En DBT a veces se describe como "girar la mente": elegir aceptar, volver a deslizarse hacia la resistencia y elegir aceptar otra vez, una y otra vez. Imagina que estás en una bifurcación del camino: un sendero lleva a la aceptación y el otro al rechazo de la realidad. Quizá necesites girar hacia la aceptación muchas veces al día, sobre todo ante pérdidas grandes.

Es normal. Cada giro cuenta, aunque tengas que volver a hacerlo cinco minutos después.

### Disposición y obstinación

Otro par de ideas útiles es la disposición frente a la obstinación. La obstinación es negarse a participar en la vida tal como es: encerrarse, empecinarse, insistir en hacer las cosas a tu manera cuando esa manera ya no es posible. La disposición es hacer lo que la situación pide, aunque preferirías no hacerlo. La disposición no es pasiva. Es una postura activa y con las manos abiertas.

### Práctica: notar la bifurcación

Durante algunos días, cuando te sorprendas pensando "Esto no debería estar pasando", prueba esto:

- Haz una pausa y nómbralo: "Estoy en la bifurcación".
- Nota cualquier tensión física: manos apretadas, respiración contenida, hombros rígidos.
- Abre las manos con suavidad, con las palmas hacia arriba, apoyadas en el regazo o a los costados.
- Di en voz baja: "Esto es lo que está pasando ahora".
- Si la resistencia vuelve, está bien. Gira la mente otra vez.

Las manos abiertas y relajadas son una pequeña señal corporal de disposición. A muchas personas les resulta sorprendentemente útil.`,
        prompt: '¿Hay alguna parte de ti que haya aceptado algo solo a medias? ¿Cómo sería girar la mente hacia la aceptación una vez más?'
      },
      'pt-BR': {
        title: 'Radical significa desde a raiz',
        content: `### De onde vem o termo

A expressão "aceitação radical" está muito associada à psicóloga Marsha Linehan, que a incluiu entre as habilidades de tolerância ao mal-estar da Terapia Comportamental Dialética (DBT, na sigla em inglês). A ideia em si bebe de tradições contemplativas muito mais antigas, que há séculos ensinam o valor de receber a realidade como ela é. Este curso não é uma formação em DBT nem substitui a terapia, mas esses conceitos são amplamente conhecidos e úteis no dia a dia.

Aqui, "radical" não significa extremo nem dramático. Vem da palavra latina para "raiz". Aceitar radicalmente é aceitar algo até a raiz: na mente, no coração e no corpo, e não apenas dizer as palavras enquanto continuamos contraídos contra a realidade.

### A aceitação pela metade

Muitos de nós praticamos uma espécie de aceitação pela metade. Dizemos "Eu sei que acabou", enquanto continuamos olhando as redes sociais da pessoa toda noite. Dizemos "Já aceitei o meu diagnóstico", enquanto nos recusamos a ajustar a agenda. A aceitação parcial ainda tem valor, e muitas vezes é por onde começamos. Mas ela costuma manter uma guerra silenciosa por dentro.

A aceitação radical pergunta: "Ainda existe alguma parte de mim argumentando que isso não deveria ser verdade?" Não para envergonhar essa parte, mas para percebê-la e convidá-la, com delicadeza, a descansar.

### Virar a mente

A aceitação raramente é uma decisão única. Na DBT, isso às vezes é descrito como "virar a mente": escolher aceitar, escorregar de volta para a resistência e escolher aceitar de novo, repetidas vezes. Imagine que você está numa bifurcação: um caminho leva à aceitação e o outro à rejeição da realidade. Talvez você precise virar em direção à aceitação muitas vezes ao dia, principalmente diante de grandes perdas.

Isso é normal. Cada virada conta, mesmo que você precise fazê-la de novo cinco minutos depois.

### Disposição e teimosia

Outro par de ideias útil é disposição versus teimosia. A teimosia é se recusar a participar da vida como ela é: emburrar, bater o pé, insistir em fazer do seu jeito quando o seu jeito não é mais possível. A disposição é fazer o que a situação pede, mesmo que você preferisse não fazer. Disposição não é passividade. É uma postura ativa, de mãos abertas.

### Prática: percebendo a bifurcação

Durante alguns dias, quando se pegar pensando "Isso não deveria estar acontecendo", experimente:

- Pare e nomeie: "Estou na bifurcação."
- Perceba qualquer contração física: mãos fechadas, respiração presa, ombros tensos.
- Abra as mãos com suavidade, com as palmas para cima, apoiadas no colo ou ao lado do corpo.
- Diga baixinho: "Isto é o que está acontecendo agora."
- Se a resistência voltar, tudo bem. Vire a mente de novo.

Mãos abertas e relaxadas são um pequeno sinal corporal de disposição. Muitas pessoas acham isso surpreendentemente útil.`,
        prompt: 'Existe alguma parte de você que aceitou algo só pela metade? Como seria virar a mente em direção à aceitação mais uma vez?'
      }
    }
  ]
};

const MOD_ACC_2 = {
  id: 'mod_acc_2',
  slug: 'pain-and-added-suffering',
  sort: 2,
  en: { title: 'Pain and Added Suffering', description: 'Understanding how resistance adds weight to pain, and how to notice it in the mind and body.' },
  es: { title: 'El dolor y el sufrimiento añadido', description: 'Comprender cómo la resistencia le suma peso al dolor y cómo notarla en la mente y en el cuerpo.' },
  'pt-BR': { title: 'Dor e sofrimento adicional', description: 'Entendendo como a resistência acrescenta peso à dor e como percebê-la na mente e no corpo.' },
  lessons: [
    {
      id: 'les_acc_4',
      slug: 'pain-and-suffering',
      duration: 20,
      sort: 1,
      en: {
        title: 'Pain Is Not the Same as Suffering',
        content: `### Two layers of hurt

A helpful idea found in many contemplative traditions, and echoed in modern approaches like DBT, is that pain and suffering are not quite the same. Pain may be unavoidable. Loss, illness, disappointment, and injustice are part of every human life. Added suffering often appears when the mind insists that reality must already be different before any response is possible.

Sometimes this is described as a formula: pain plus non-acceptance equals suffering. It is not a scientific equation, just a simple way to see something many people recognize from experience.

### What added suffering looks like

Added suffering is the extra layer we pile on top of the original pain. It can sound like:

- "This shouldn't be happening to me."
- "Why always me?"
- "If only I had done things differently, this wouldn't be real."
- "I can't stand that this is true."

It can also look like replaying events over and over, refusing help, withdrawing from people, numbing out, or staying stuck in anger long after it has stopped being useful.

None of this makes you weak or foolish. Resistance is a natural response to pain. The mind is trying to protect you by rejecting what hurts. But the rejection itself often becomes a second source of exhaustion.

### An important caution

This idea can be misused. It does not mean your suffering is "your fault" or that you are choosing to hurt. People facing grief, trauma, chronic illness, poverty, or oppression are carrying real and heavy pain. The point is not to blame, but to find any small place where you might set down an extra burden you do not need to carry.

### Practice: separating the layers

Choose a difficult situation and draw two columns on a page:

- In the first column, write the **pain**: the actual loss, change, or difficulty.
- In the second column, write the **added suffering**: the "shoulds," the replays, the stories about what this means about you or your life.
- Read the second column slowly. Is there any line you might be able to loosen, even a little?
- Choose one, and write a gentler, more accepting version beside it.

For example, "I should be over this by now" might become "Grief takes as long as it takes."

### What remains

When some of the added suffering eases, the original pain is still there, and it may even feel sharper for a while. That is okay. Pain that is felt and acknowledged tends to move and change over time. Pain buried under resistance tends to stay stuck. Acceptance gives pain room to be what it is, which is often the first step toward it softening.`,
        prompt: 'In a situation you are facing, what is the pain itself, and what might be the added suffering layered on top of it?'
      },
      es: {
        title: 'El dolor no es lo mismo que el sufrimiento',
        content: `### Dos capas de dolor

Una idea útil presente en muchas tradiciones contemplativas, y retomada en enfoques actuales como la DBT, es que el dolor y el sufrimiento no son exactamente lo mismo. El dolor puede ser inevitable. La pérdida, la enfermedad, la decepción y la injusticia forman parte de toda vida humana. El sufrimiento añadido suele aparecer cuando la mente insiste en que la realidad ya tendría que ser distinta antes de poder responder de alguna manera.

A veces se describe como una fórmula: dolor más no aceptación es igual a sufrimiento. No es una ecuación científica, solo una forma sencilla de mirar algo que muchas personas reconocen por experiencia.

### Cómo se ve el sufrimiento añadido

El sufrimiento añadido es la capa extra que apilamos sobre el dolor original. Puede sonar así:

- "Esto no debería estar pasándome".
- "¿Por qué siempre a mí?".
- "Si hubiera hecho las cosas de otra forma, esto no sería real".
- "No soporto que esto sea verdad".

También puede verse como repetir los hechos una y otra vez, rechazar la ayuda, alejarse de las personas, anestesiarse o quedarse atrapado en el enojo mucho después de que dejó de ser útil.

Nada de esto te vuelve débil ni tonto. La resistencia es una respuesta natural al dolor. La mente intenta protegerte rechazando lo que duele. Pero el rechazo en sí mismo muchas veces se convierte en una segunda fuente de agotamiento.

### Una advertencia importante

Esta idea puede malinterpretarse. No significa que tu sufrimiento sea "tu culpa" ni que estés eligiendo sufrir. Las personas que atraviesan un duelo, un trauma, una enfermedad crónica, la pobreza o la opresión cargan con un dolor real y pesado. El objetivo no es culpar, sino encontrar algún pequeño lugar donde puedas dejar una carga extra que no necesitas llevar.

### Práctica: separar las capas

Elige una situación difícil y dibuja dos columnas en una hoja:

- En la primera columna, escribe el **dolor**: la pérdida, el cambio o la dificultad concreta.
- En la segunda, escribe el **sufrimiento añadido**: los "debería", las repeticiones, las historias sobre lo que esto significa acerca de ti o de tu vida.
- Lee la segunda columna despacio. ¿Hay alguna línea que podrías aflojar, aunque sea un poco?
- Elige una y escribe al lado una versión más amable y más aceptante.

Por ejemplo, "Ya debería haberlo superado" podría convertirse en "El duelo lleva el tiempo que lleva".

### Lo que queda

Cuando una parte del sufrimiento añadido se afloja, el dolor original sigue ahí, e incluso puede sentirse más intenso por un tiempo. Está bien. El dolor que se siente y se reconoce tiende a moverse y transformarse con el tiempo. El dolor enterrado bajo la resistencia tiende a quedarse estancado. La aceptación le da al dolor espacio para ser lo que es, y ese suele ser el primer paso para que se suavice.`,
        prompt: 'En una situación que estás enfrentando, ¿cuál es el dolor en sí y cuál podría ser el sufrimiento añadido que se le suma encima?'
      },
      'pt-BR': {
        title: 'Dor não é o mesmo que sofrimento',
        content: `### Duas camadas de dor

Uma ideia útil presente em muitas tradições contemplativas, e retomada em abordagens atuais como a DBT, é que dor e sofrimento não são exatamente a mesma coisa. A dor pode ser inevitável. Perdas, doenças, decepções e injustiças fazem parte de toda vida humana. O sofrimento adicional costuma aparecer quando a mente insiste que a realidade já deveria ser diferente antes que qualquer resposta seja possível.

Às vezes isso é descrito como uma fórmula: dor mais não aceitação é igual a sofrimento. Não é uma equação científica, apenas um jeito simples de enxergar algo que muitas pessoas reconhecem pela experiência.

### Como o sofrimento adicional aparece

O sofrimento adicional é a camada extra que empilhamos em cima da dor original. Ele pode soar assim:

- "Isso não deveria estar acontecendo comigo."
- "Por que sempre comigo?"
- "Se eu tivesse feito diferente, isso não seria real."
- "Não suporto que isso seja verdade."

Também pode aparecer como repassar os acontecimentos sem parar, recusar ajuda, se afastar das pessoas, se anestesiar ou ficar preso na raiva muito depois de ela ter deixado de ser útil.

Nada disso torna você fraco ou tolo. A resistência é uma resposta natural à dor. A mente tenta proteger você rejeitando o que dói. Mas a própria rejeição muitas vezes se torna uma segunda fonte de exaustão.

### Um cuidado importante

Essa ideia pode ser mal usada. Ela não significa que o seu sofrimento é "culpa sua" nem que você está escolhendo sofrer. Pessoas que enfrentam luto, trauma, doença crônica, pobreza ou opressão carregam uma dor real e pesada. O objetivo não é culpar, mas encontrar algum pequeno lugar onde você possa largar um peso extra que não precisa carregar.

### Prática: separando as camadas

Escolha uma situação difícil e desenhe duas colunas numa folha:

- Na primeira coluna, escreva a **dor**: a perda, a mudança ou a dificuldade concreta.
- Na segunda, escreva o **sofrimento adicional**: os "deveria", as repetições, as histórias sobre o que isso significa sobre você ou sobre a sua vida.
- Leia a segunda coluna devagar. Existe alguma linha que você conseguiria afrouxar, mesmo que um pouco?
- Escolha uma e escreva ao lado uma versão mais gentil e mais acolhedora.

Por exemplo, "Eu já deveria ter superado isso" pode virar "O luto leva o tempo que precisa levar."

### O que permanece

Quando parte do sofrimento adicional se afrouxa, a dor original continua ali, e pode até parecer mais aguda por um tempo. Tudo bem. A dor que é sentida e reconhecida tende a se mover e se transformar com o tempo. A dor enterrada sob a resistência tende a ficar parada. A aceitação dá à dor espaço para ser o que ela é, e esse costuma ser o primeiro passo para que ela se suavize.`,
        prompt: 'Numa situação que você está enfrentando, qual é a dor em si, e qual pode ser o sofrimento adicional acumulado por cima dela?'
      }
    },
    {
      id: 'les_acc_5',
      slug: 'this-should-not-be-happening',
      duration: 20,
      sort: 2,
      en: {
        title: '"This Should Not Be Happening, and It Is Happening"',
        content: `### Honoring the protest

When something painful happens, a natural protest rises up: "This should not be happening." Sometimes that protest is entirely reasonable. Children should not get sick. People should not be treated unfairly. Loved ones should not die too soon. Acceptance does not ask you to silence that voice or to pretend it is wrong.

What acceptance adds is a second clause.

### The two-part sentence

A simple and powerful practice from the original KindWell workbook is to complete this sentence:

**"This should not be happening, and it is happening. What is mine to do now?"**

Notice the word "and." Not "but." "But" would cancel the first half, as if your protest did not matter. "And" allows both truths to stand side by side: your values and hopes about how things ought to be, and the reality of how things actually are.

The final question then gently turns your attention from what cannot be changed toward what is still within reach. It does not demand a grand solution. Sometimes what is yours to do is simply to eat something, call a friend, or go to sleep.

### Why "should" keeps us stuck

"Should" statements are often a sign that we are arguing with the past or the present. They are not wrong; they express what we value. But when they become the only thing we can think about, they can trap us in a loop of protest that uses up our energy without moving us forward.

Try noticing how often "should" and "shouldn't" appear in your thoughts during a hard week. You do not have to eliminate them. Just notice them, and see whether adding "and it is happening" changes anything.

### Practice: the both/and sentence

Choose a situation that has been weighing on you:

- Write: "This should not be happening..." and complete it with your honest protest.
- Continue: "...and it is happening." Pause and breathe after writing this line.
- Then write: "What is mine to do now?" and list one to three small possibilities.
- Circle the one that feels most doable today.
- If nothing feels doable, write: "What is mine to do now is rest and be gentle with myself." That counts.

### Holding complexity

Life often asks us to hold two things at once: grief and gratitude, anger and love, disappointment and hope. The both/and sentence is practice for holding complexity without collapsing into one side. Over time, many people find that this makes them steadier, not because life is easier, but because they are no longer spending so much strength resisting half of the truth.`,
        prompt: 'Complete: "This should not be happening, and it is happening." What is yours to do now?'
      },
      es: {
        title: '"Esto no debería estar pasando, y está pasando"',
        content: `### Honrar la protesta

Cuando ocurre algo doloroso, surge una protesta natural: "Esto no debería estar pasando". A veces esa protesta es totalmente razonable. Los niños no deberían enfermarse. Las personas no deberían recibir un trato injusto. Nuestros seres queridos no deberían morir antes de tiempo. La aceptación no te pide que calles esa voz ni que finjas que está equivocada.

Lo que la aceptación agrega es una segunda parte.

### La frase en dos partes

Una práctica sencilla y poderosa del cuaderno original de KindWell es completar esta frase:

**"Esto no debería estar pasando, y está pasando. ¿Qué me corresponde hacer ahora?"**

Observa la palabra "y". No "pero". "Pero" anularía la primera mitad, como si tu protesta no importara. La "y" permite que ambas verdades estén una al lado de la otra: tus valores y esperanzas sobre cómo deberían ser las cosas, y la realidad de cómo son.

La pregunta final, entonces, lleva con suavidad tu atención desde lo que no puede cambiarse hacia lo que todavía está a tu alcance. No exige una gran solución. A veces lo que te corresponde es simplemente comer algo, llamar a una amiga o irte a dormir.

### Por qué el "debería" nos deja atrapados

Las frases con "debería" muchas veces son señal de que estamos discutiendo con el pasado o con el presente. No están mal; expresan lo que valoramos. Pero cuando se vuelven lo único en lo que podemos pensar, pueden encerrarnos en un ciclo de protesta que consume energía sin hacernos avanzar.

Prueba notar cuántas veces aparecen "debería" y "no debería" en tus pensamientos durante una semana difícil. No tienes que eliminarlos. Solo obsérvalos y fíjate si agregar "y está pasando" cambia algo.

### Práctica: la frase de "ambas cosas"

Elige una situación que te ha estado pesando:

- Escribe: "Esto no debería estar pasando..." y complétalo con tu protesta sincera.
- Continúa: "...y está pasando". Haz una pausa y respira después de escribir esta línea.
- Luego escribe: "¿Qué me corresponde hacer ahora?" y anota de una a tres pequeñas posibilidades.
- Encierra en un círculo la que te parezca más posible hoy.
- Si nada te parece posible, escribe: "Lo que me corresponde ahora es descansar y tratarme con suavidad". Eso cuenta.

### Sostener la complejidad

La vida muchas veces nos pide sostener dos cosas a la vez: el duelo y la gratitud, el enojo y el amor, la decepción y la esperanza. La frase de "ambas cosas" es una práctica para sostener la complejidad sin derrumbarse hacia un solo lado. Con el tiempo, muchas personas descubren que esto les da más estabilidad, no porque la vida sea más fácil, sino porque ya no gastan tanta fuerza resistiendo la mitad de la verdad.`,
        prompt: 'Completa: "Esto no debería estar pasando, y está pasando". ¿Qué te corresponde hacer ahora?'
      },
      'pt-BR': {
        title: '"Isso não deveria estar acontecendo, e está acontecendo"',
        content: `### Honrando o protesto

Quando algo doloroso acontece, surge um protesto natural: "Isso não deveria estar acontecendo." Às vezes esse protesto é totalmente razoável. Crianças não deveriam adoecer. Pessoas não deveriam ser tratadas com injustiça. Quem amamos não deveria partir cedo demais. A aceitação não pede que você cale essa voz nem que finja que ela está errada.

O que a aceitação acrescenta é uma segunda parte.

### A frase em duas partes

Uma prática simples e poderosa do caderno original da KindWell é completar esta frase:

**"Isso não deveria estar acontecendo, e está acontecendo. O que cabe a mim fazer agora?"**

Repare na palavra "e". Não "mas". O "mas" anularia a primeira metade, como se o seu protesto não importasse. O "e" permite que as duas verdades fiquem lado a lado: os seus valores e esperanças sobre como as coisas deveriam ser, e a realidade de como as coisas são.

A pergunta final, então, leva a sua atenção com delicadeza daquilo que não pode ser mudado para aquilo que ainda está ao seu alcance. Ela não exige uma grande solução. Às vezes, o que cabe a você é simplesmente comer alguma coisa, ligar para um amigo ou ir dormir.

### Por que o "deveria" nos prende

Frases com "deveria" muitas vezes são sinal de que estamos discutindo com o passado ou com o presente. Elas não são erradas; expressam o que valorizamos. Mas, quando viram a única coisa em que conseguimos pensar, podem nos prender num ciclo de protesto que consome energia sem nos levar adiante.

Experimente perceber quantas vezes "deveria" e "não deveria" aparecem nos seus pensamentos durante uma semana difícil. Você não precisa eliminá-los. Apenas observe e veja se acrescentar "e está acontecendo" muda alguma coisa.

### Prática: a frase do "e"

Escolha uma situação que tem pesado para você:

- Escreva: "Isso não deveria estar acontecendo..." e complete com o seu protesto sincero.
- Continue: "...e está acontecendo." Faça uma pausa e respire depois de escrever essa linha.
- Depois escreva: "O que cabe a mim fazer agora?" e liste de uma a três pequenas possibilidades.
- Circule a que parecer mais possível hoje.
- Se nada parecer possível, escreva: "O que cabe a mim agora é descansar e ser gentil comigo." Isso conta.

### Sustentando a complexidade

A vida muitas vezes nos pede para sustentar duas coisas ao mesmo tempo: luto e gratidão, raiva e amor, decepção e esperança. A frase do "e" é um treino para sustentar a complexidade sem desabar para um lado só. Com o tempo, muitas pessoas percebem que isso as deixa mais estáveis, não porque a vida fica mais fácil, mas porque não gastam mais tanta força resistindo à metade da verdade.`,
        prompt: 'Complete: "Isso não deveria estar acontecendo, e está acontecendo." O que cabe a você fazer agora?'
      }
    },
    {
      id: 'les_acc_6',
      slug: 'resistance-in-the-body',
      duration: 20,
      sort: 3,
      en: {
        title: 'Noticing Resistance in the Body',
        content: `### The body keeps bracing

Resistance to reality is not only a thought. It often lives in the body as a kind of bracing: a clenched jaw, raised shoulders, a held breath, a tight stomach, fists that do not fully open. Many people carry this bracing for days or weeks without noticing it, until a headache, backache, or sleepless night makes it impossible to ignore.

Learning to recognize bodily indicators of bracing and resistance gives you an early signal. It lets you know you have drifted back into fighting reality, often before your thoughts have caught up.

### Common signs of bracing

Everyone is different, but you might notice:

- Shallow or held breathing, especially when thinking about the situation.
- Tension in the jaw, forehead, neck, or shoulders.
- A knot or heaviness in the chest or stomach.
- Restlessness, pacing, or difficulty sitting still.
- Hands clenched, toes curled, or legs ready to move.

None of these are problems to fix instantly. They are messages. Your body is responding as if it needs to fight or brace against a threat. Sometimes there is a real threat, and bracing makes sense. Often the threat is a reality that has already happened, and the bracing has nowhere useful to go.

### Softening, not forcing

The goal is not to force relaxation. Telling yourself to "just relax" rarely works and can add frustration. Instead, the invitation is to gently soften where you can, the way you might loosen a grip on something you have been holding too tightly.

In DBT, some acceptance practices include a relaxed facial expression often called a "half-smile," along with open, upturned hands. The idea is simple: softening the face and hands can send a quiet message of willingness to the rest of the body. You do not need to feel happy. It is a relaxed face, not a forced grin.

### Practice: a body scan for bracing

Find a comfortable position and set aside five minutes:

- Bring to mind the situation you are working on accepting, holding it lightly.
- Slowly move your attention from your forehead down to your feet.
- Wherever you notice bracing, pause and name it: "Tight shoulders," "held breath."
- Invite a small softening: let the shoulders drop a little, loosen the jaw, lengthen the exhale.
- Rest your hands open on your lap and let your face relax.
- End by noticing your feet on the floor and a few things you can see in the room.

### A note on safety

If focusing on the body brings up strong distress, panic, or memories, stop and orient to the present: look around, name five things you can see, and feel something solid under your hands. Body-based practices are not right for everyone at every moment, especially for people with trauma histories. It is always okay to keep your eyes open, shorten the practice, or skip it.`,
        prompt: 'When you think about a situation you have been resisting, where do you notice bracing in your body, and what would a small softening feel like?'
      },
      es: {
        title: 'Notar la resistencia en el cuerpo',
        content: `### El cuerpo sigue en tensión

La resistencia a la realidad no es solo un pensamiento. Muchas veces vive en el cuerpo como una especie de tensión de defensa: la mandíbula apretada, los hombros levantados, la respiración contenida, el estómago duro, los puños que no terminan de abrirse. Muchas personas cargan con esta tensión durante días o semanas sin notarla, hasta que un dolor de cabeza, de espalda o una noche sin dormir la vuelven imposible de ignorar.

Aprender a reconocer las señales corporales de tensión y resistencia te da una alarma temprana. Te avisa que volviste a pelear contra la realidad, muchas veces antes de que tus pensamientos se den cuenta.

### Señales comunes de tensión

Cada persona es distinta, pero quizá notes:

- Respiración superficial o contenida, sobre todo al pensar en la situación.
- Tensión en la mandíbula, la frente, el cuello o los hombros.
- Un nudo o un peso en el pecho o el estómago.
- Inquietud, caminar de un lado a otro o dificultad para quedarte quieto.
- Manos apretadas, dedos de los pies encogidos o piernas listas para moverse.

Nada de esto es un problema que haya que resolver al instante. Son mensajes. Tu cuerpo responde como si tuviera que pelear o protegerse de una amenaza. A veces hay una amenaza real, y la tensión tiene sentido. Muchas otras, la amenaza es una realidad que ya ocurrió, y la tensión no tiene adónde ir.

### Suavizar, no forzar

La meta no es forzar la relajación. Decirte "relájate y ya" rara vez funciona y puede sumar frustración. La invitación es, en cambio, suavizar con delicadeza donde puedas, como quien afloja la mano sobre algo que ha estado sujetando con demasiada fuerza.

En la DBT, algunas prácticas de aceptación incluyen una expresión facial relajada, a menudo llamada "media sonrisa", junto con las manos abiertas y hacia arriba. La idea es sencilla: suavizar el rostro y las manos puede enviar un mensaje silencioso de disposición al resto del cuerpo. No necesitas sentirte feliz. Es un rostro relajado, no una sonrisa forzada.

### Práctica: recorrido corporal para notar la tensión

Busca una posición cómoda y reserva cinco minutos:

- Trae a la mente la situación que estás intentando aceptar, sosteniéndola con liviandad.
- Lleva la atención despacio desde la frente hasta los pies.
- Donde notes tensión, haz una pausa y nómbrala: "Hombros tensos", "respiración contenida".
- Invita un pequeño aflojamiento: deja caer un poco los hombros, suelta la mandíbula, alarga la exhalación.
- Apoya las manos abiertas sobre el regazo y deja que el rostro se relaje.
- Termina notando tus pies en el piso y algunas cosas que puedes ver en el lugar.

### Una nota sobre seguridad

Si concentrarte en el cuerpo despierta un malestar intenso, pánico o recuerdos, detente y ubícate en el presente: mira a tu alrededor, nombra cinco cosas que puedas ver y siente algo firme bajo tus manos. Las prácticas corporales no son adecuadas para todas las personas en todo momento, sobre todo para quienes tienen historias de trauma. Siempre está bien mantener los ojos abiertos, acortar la práctica o saltarla.`,
        prompt: 'Cuando piensas en una situación que has estado resistiendo, ¿dónde notas la tensión en tu cuerpo y cómo se sentiría aflojarla un poco?'
      },
      'pt-BR': {
        title: 'Percebendo a resistência no corpo',
        content: `### O corpo continua se contraindo

A resistência à realidade não é só um pensamento. Muitas vezes ela vive no corpo como uma espécie de contração de defesa: mandíbula travada, ombros erguidos, respiração presa, estômago duro, mãos que não se abrem por completo. Muitas pessoas carregam essa contração por dias ou semanas sem perceber, até que uma dor de cabeça, uma dor nas costas ou uma noite sem dormir a torna impossível de ignorar.

Aprender a reconhecer os sinais corporais de contração e resistência oferece um alerta precoce. Ele avisa que você voltou a brigar com a realidade, muitas vezes antes que os pensamentos percebam.

### Sinais comuns de contração

Cada pessoa é diferente, mas talvez você perceba:

- Respiração curta ou presa, principalmente ao pensar na situação.
- Tensão na mandíbula, na testa, no pescoço ou nos ombros.
- Um nó ou um peso no peito ou no estômago.
- Inquietação, andar de um lado para o outro ou dificuldade de ficar parado.
- Mãos fechadas, dedos dos pés encolhidos ou pernas prontas para se mover.

Nada disso é um problema a ser resolvido na hora. São mensagens. O seu corpo está reagindo como se precisasse lutar ou se proteger de uma ameaça. Às vezes existe uma ameaça real, e a contração faz sentido. Muitas vezes, a ameaça é uma realidade que já aconteceu, e a contração não tem para onde ir.

### Suavizar, não forçar

O objetivo não é forçar o relaxamento. Dizer a si mesmo "relaxa e pronto" raramente funciona e pode aumentar a frustração. O convite, em vez disso, é suavizar com delicadeza onde for possível, como quem afrouxa a mão em torno de algo que vinha segurando com força demais.

Na DBT, algumas práticas de aceitação incluem uma expressão facial relaxada, muitas vezes chamada de "meio sorriso", junto com as mãos abertas e voltadas para cima. A ideia é simples: suavizar o rosto e as mãos pode enviar uma mensagem silenciosa de disposição para o resto do corpo. Você não precisa se sentir feliz. É um rosto relaxado, não um sorriso forçado.

### Prática: escaneamento corporal da contração

Encontre uma posição confortável e reserve cinco minutos:

- Traga à mente a situação que você está trabalhando para aceitar, segurando-a com leveza.
- Leve a atenção devagar da testa até os pés.
- Onde perceber contração, pare e nomeie: "Ombros tensos", "respiração presa".
- Convide uma pequena suavização: deixe os ombros caírem um pouco, solte a mandíbula, alongue a expiração.
- Apoie as mãos abertas no colo e deixe o rosto relaxar.
- Termine percebendo os pés no chão e algumas coisas que você consegue ver no ambiente.

### Um lembrete sobre segurança

Se focar no corpo trouxer um mal-estar intenso, pânico ou lembranças, pare e se oriente no presente: olhe ao redor, nomeie cinco coisas que você consegue ver e sinta algo firme sob as mãos. Práticas corporais não servem para todas as pessoas em todos os momentos, especialmente para quem tem histórico de trauma. Sempre está tudo bem manter os olhos abertos, encurtar a prática ou pulá-la.`,
        prompt: 'Quando você pensa numa situação que tem resistido, onde percebe contração no corpo, e como seria uma pequena suavização?'
      }
    }
  ]
};

const MOD_ACC_3 = {
  id: 'mod_acc_3',
  slug: 'seeing-clearly-feeling-safely',
  sort: 3,
  en: { title: 'Seeing Clearly, Feeling Safely', description: 'Separating facts from stories and predictions, and making room for emotion and grief at a safe pace.' },
  es: { title: 'Ver con claridad, sentir con seguridad', description: 'Separar los hechos de las historias y las predicciones, y dar lugar a las emociones y al duelo a un ritmo seguro.' },
  'pt-BR': { title: 'Ver com clareza, sentir com segurança', description: 'Separando fatos de histórias e previsões, e abrindo espaço para as emoções e o luto num ritmo seguro.' },
  lessons: [
    {
      id: 'les_acc_7',
      slug: 'fact-story-prediction',
      duration: 20,
      sort: 1,
      en: {
        title: 'Fact, Story, Prediction',
        content: `### Three different things

When something difficult happens, our minds rarely stop at the facts. Almost instantly, they add an interpretation (a story about what it means) and often a prediction (a feared future). All three can blend together so quickly that they feel like a single truth.

Learning to separate observable facts from interpretations and feared futures is one of the most practical acceptance skills. Each deserves a different kind of response.

### An example

Imagine you sent a message to a close friend two days ago and have not heard back.

- **Fact:** "I sent a message on Tuesday. I have not received a reply."
- **Story:** "She's upset with me. I must have said something wrong."
- **Prediction:** "This friendship is ending. I'll end up alone."

The fact is what we accept. The story is something we can hold loosely and check. The prediction is something we can notice with compassion, knowing the future has not happened yet.

### Different responses for different layers

- **Facts** call for acceptance and, when possible, practical action: "I haven't heard back. I could send a gentle follow-up."
- **Stories** call for curiosity: "Is there another explanation? What evidence do I actually have?"
- **Predictions** call for grounding and care: "My mind is trying to prepare me for the worst. Right now, in this moment, I am okay."

Sometimes stories are accurate. Sometimes predictions come true. The point is not to assume your mind is always wrong. It is to notice when you are treating an interpretation or a fear as if it were already a fact, because that tends to multiply suffering.

### Practice: sorting the layers

Choose a situation that has been occupying your thoughts:

- Write one **fact**: something observable and verifiable.
- Write one **interpretation**: what your mind says it means.
- Write one **prediction**: what your mind fears will happen next.
- For each, ask: "What kind of response does this need?"
- Circle the fact. Take a breath. Say to yourself: "This is what I know for sure."

Many people find that when they return to the fact alone, the situation becomes more manageable. The fact may still be painful, but it is usually smaller and more workable than the story and prediction together.

### A gentle practice for anxious minds

If you notice that your mind tends to jump quickly into predictions, you are not alone. Anxious minds are often trying to keep us safe by preparing for the worst. You can thank your mind for trying, and then gently bring your attention back to what is actually here today.`,
        prompt: 'Write one fact, one interpretation, and one prediction about the same situation. What kind of response does each one need?'
      },
      es: {
        title: 'Hecho, historia, predicción',
        content: `### Tres cosas distintas

Cuando pasa algo difícil, la mente rara vez se queda en los hechos. Casi de inmediato agrega una interpretación (una historia sobre lo que significa) y muchas veces una predicción (un futuro temido). Las tres se mezclan tan rápido que parecen una sola verdad.

Aprender a separar los hechos observables de las interpretaciones y los futuros temidos es una de las habilidades de aceptación más prácticas. Cada uno pide un tipo distinto de respuesta.

### Un ejemplo

Imagina que le enviaste un mensaje a una amiga cercana hace dos días y todavía no te respondió.

- **Hecho:** "Le envié un mensaje el martes. No he recibido respuesta".
- **Historia:** "Está enojada conmigo. Seguro dije algo que le molestó".
- **Predicción:** "Esta amistad se está terminando. Me voy a quedar en soledad".

El hecho es lo que aceptamos. La historia es algo que podemos sostener con liviandad y verificar. La predicción es algo que podemos notar con compasión, sabiendo que el futuro todavía no ocurrió.

### Respuestas distintas para cada capa

- **Los hechos** piden aceptación y, cuando es posible, acción práctica: "No me respondió. Podría enviarle un mensaje amable para saber cómo está".
- **Las historias** piden curiosidad: "¿Hay otra explicación? ¿Qué evidencia tengo realmente?".
- **Las predicciones** piden enraizamiento y cuidado: "Mi mente intenta prepararme para lo peor. Ahora, en este momento, estoy bien".

A veces las historias son acertadas. A veces las predicciones se cumplen. El punto no es suponer que la mente siempre se equivoca. Es notar cuándo tratas una interpretación o un temor como si ya fuera un hecho, porque eso suele multiplicar el sufrimiento.

### Práctica: ordenar las capas

Elige una situación que ha estado ocupando tus pensamientos:

- Escribe un **hecho**: algo observable y verificable.
- Escribe una **interpretación**: lo que tu mente dice que significa.
- Escribe una **predicción**: lo que tu mente teme que pase después.
- Para cada uno, pregúntate: "¿Qué tipo de respuesta necesita esto?".
- Encierra el hecho en un círculo. Respira. Dite: "Esto es lo que sé con certeza".

Muchas personas descubren que, al volver solo al hecho, la situación se vuelve más manejable. El hecho puede seguir doliendo, pero suele ser más pequeño y más abordable que la historia y la predicción juntas.

### Una práctica amable para mentes ansiosas

Si notas que tu mente suele saltar rápido a las predicciones, no eres la única persona a la que le pasa. Las mentes ansiosas muchas veces intentan protegernos preparándonos para lo peor. Puedes agradecerle a tu mente por intentarlo y luego traer con suavidad tu atención de vuelta a lo que realmente está aquí hoy.`,
        prompt: 'Escribe un hecho, una interpretación y una predicción sobre la misma situación. ¿Qué tipo de respuesta necesita cada uno?'
      },
      'pt-BR': {
        title: 'Fato, história, previsão',
        content: `### Três coisas diferentes

Quando algo difícil acontece, a mente raramente para nos fatos. Quase na mesma hora, ela acrescenta uma interpretação (uma história sobre o que aquilo significa) e muitas vezes uma previsão (um futuro temido). As três se misturam tão rápido que parecem uma única verdade.

Aprender a separar fatos observáveis de interpretações e futuros temidos é uma das habilidades de aceitação mais práticas. Cada um pede um tipo diferente de resposta.

### Um exemplo

Imagine que você mandou uma mensagem para uma amiga próxima há dois dias e ainda não teve resposta.

- **Fato:** "Mandei uma mensagem na terça-feira. Não recebi resposta."
- **História:** "Ela está chateada comigo. Devo ter dito alguma coisa errada."
- **Previsão:** "Essa amizade está acabando. Vou acabar sozinho."

O fato é o que aceitamos. A história é algo que podemos segurar com leveza e verificar. A previsão é algo que podemos perceber com compaixão, sabendo que o futuro ainda não aconteceu.

### Respostas diferentes para cada camada

- **Fatos** pedem aceitação e, quando possível, ação prática: "Ela não respondeu. Posso mandar uma mensagem gentil perguntando como ela está."
- **Histórias** pedem curiosidade: "Existe outra explicação? Que evidência eu realmente tenho?"
- **Previsões** pedem aterramento e cuidado: "Minha mente está tentando me preparar para o pior. Agora, neste momento, eu estou bem."

Às vezes as histórias estão certas. Às vezes as previsões se confirmam. O ponto não é supor que a mente está sempre errada. É perceber quando você está tratando uma interpretação ou um medo como se já fosse um fato, porque isso costuma multiplicar o sofrimento.

### Prática: separando as camadas

Escolha uma situação que tem ocupado os seus pensamentos:

- Escreva um **fato**: algo observável e verificável.
- Escreva uma **interpretação**: o que a sua mente diz que aquilo significa.
- Escreva uma **previsão**: o que a sua mente teme que aconteça depois.
- Para cada um, pergunte: "Que tipo de resposta isso precisa?"
- Circule o fato. Respire. Diga a si mesmo: "Isto é o que eu sei com certeza."

Muitas pessoas percebem que, ao voltar só para o fato, a situação fica mais manejável. O fato pode continuar doendo, mas costuma ser menor e mais trabalhável do que a história e a previsão juntas.

### Uma prática gentil para mentes ansiosas

Se você percebe que a sua mente costuma pular rápido para as previsões, você não está sozinho. Mentes ansiosas muitas vezes tentam nos proteger preparando-nos para o pior. Você pode agradecer à sua mente por tentar e, depois, trazer a atenção com delicadeza de volta para o que realmente está aqui hoje.`,
        prompt: 'Escreva um fato, uma interpretação e uma previsão sobre a mesma situação. Que tipo de resposta cada um precisa?'
      }
    },
    {
      id: 'les_acc_8',
      slug: 'allowing-emotion-safely',
      duration: 20,
      sort: 2,
      en: {
        title: 'Allowing Emotion Safely',
        content: `### Feeling without being swept away

When we stop fighting reality, the feelings we have been holding back often arrive: sadness, anger, fear, disappointment, relief, or a confusing mix of all of them. This can be one of the hardest parts of acceptance, and it is one reason people avoid it.

An important principle is that emotion can be acknowledged without being obeyed. You can feel intense anger without acting on it. You can feel deep sadness without concluding that life is hopeless. Emotions are real and meaningful, and they are also temporary waves that rise, peak, and eventually settle.

### Pacing, orientation, and time limits

Allowing emotion does not mean opening the floodgates all at once. Three tools can make contact with difficult feelings safer:

- **Pacing:** Approach the feeling in small doses. Feel it for a minute, then shift your attention to something neutral, then return if you choose. You are in charge of the speed.
- **Orientation:** Keep one foot in the present. Look around the room, feel your feet on the floor, notice the temperature of the air. This reminds your nervous system that the feeling is happening now, in a safe-enough place.
- **Time limits:** Give the feeling a container. "I'll let myself cry for ten minutes, then I'll make tea." Knowing there is an end point can make it easier to begin.

### Where do you feel it?

Emotions usually have a physical home: a lump in the throat, heat in the face, pressure behind the eyes, a hollow in the stomach. Noticing where you feel an emotion can make it more manageable, because a sensation in a specific place is easier to be with than a vague, all-consuming state.

### Practice: a paced check-in

Set a timer for five minutes and sit somewhere comfortable:

- Name the emotion if you can: "sadness," "anger," "fear." If not, "something heavy" is fine.
- Notice where you feel it in your body. Describe it simply: size, temperature, movement.
- Breathe gently around that area, without trying to change it.
- After a minute or two, shift your attention outward: name three things you can see and two things you can hear.
- If you choose, return to the sensation briefly. Then close by placing a hand somewhere comforting.

### When to seek support

If emotions feel unmanageable, keep escalating instead of settling, or lead to thoughts of harming yourself, please do not work through them alone. Reach out to a licensed mental health professional. If you are in immediate danger, contact your local emergency number or a crisis line such as 988 in the US. Acceptance is never meant to be practiced at the cost of your safety.`,
        prompt: 'Where do you feel this emotion in your body? What would make contact with it safer: pacing, orientation, a time limit, or something else?'
      },
      es: {
        title: 'Permitir las emociones con seguridad',
        content: `### Sentir sin que te arrastre

Cuando dejamos de pelear con la realidad, muchas veces llegan las emociones que estábamos conteniendo: tristeza, enojo, miedo, decepción, alivio o una mezcla confusa de todo eso. Esta puede ser una de las partes más difíciles de la aceptación, y es una de las razones por las que la evitamos.

Un principio importante es que las emociones pueden reconocerse sin obedecerlas. Puedes sentir un enojo intenso sin actuar desde él. Puedes sentir una tristeza profunda sin concluir que la vida no tiene esperanza. Las emociones son reales y significativas, y también son olas temporales que suben, llegan a su punto máximo y, con el tiempo, se calman.

### Ritmo, orientación y límites de tiempo

Permitir una emoción no significa abrir todas las compuertas de golpe. Tres herramientas pueden hacer más seguro el contacto con emociones difíciles:

- **Ritmo:** Acércate a la emoción en pequeñas dosis. Siéntela un minuto, luego lleva la atención a algo neutro y, si quieres, vuelve. Tú decides la velocidad.
- **Orientación:** Mantén un pie en el presente. Mira el lugar donde estás, siente los pies en el piso, nota la temperatura del aire. Esto le recuerda a tu sistema nervioso que la emoción ocurre ahora, en un lugar lo bastante seguro.
- **Límites de tiempo:** Dale un contenedor a la emoción. "Me voy a permitir llorar diez minutos y después me preparo un té". Saber que hay un final puede facilitar el comienzo.

### ¿Dónde la sientes?

Las emociones suelen tener un hogar físico: un nudo en la garganta, calor en la cara, presión detrás de los ojos, un vacío en el estómago. Notar dónde sientes una emoción puede volverla más manejable, porque una sensación en un lugar específico es más fácil de acompañar que un estado vago que lo ocupa todo.

### Práctica: un chequeo a tu ritmo

Pon un temporizador de cinco minutos y siéntate en un lugar cómodo:

- Nombra la emoción si puedes: "tristeza", "enojo", "miedo". Si no, "algo pesado" también sirve.
- Nota dónde la sientes en el cuerpo. Descríbela con sencillez: tamaño, temperatura, movimiento.
- Respira con suavidad alrededor de esa zona, sin intentar cambiarla.
- Después de uno o dos minutos, lleva la atención hacia afuera: nombra tres cosas que puedas ver y dos que puedas oír.
- Si quieres, vuelve brevemente a la sensación. Luego cierra apoyando una mano en algún lugar que te reconforte.

### Cuándo buscar apoyo

Si las emociones se sienten inmanejables, siguen creciendo en lugar de calmarse o te llevan a pensar en hacerte daño, no las atravieses en soledad. Busca a un profesional de salud mental con licencia. Si estás en peligro inmediato, comunícate con tu número local de emergencias o con una línea de crisis, como el 988 en Estados Unidos. La aceptación nunca debería practicarse a costa de tu seguridad.`,
        prompt: '¿Dónde sientes esta emoción en tu cuerpo? ¿Qué haría más seguro el contacto con ella: el ritmo, la orientación, un límite de tiempo u otra cosa?'
      },
      'pt-BR': {
        title: 'Permitindo as emoções com segurança',
        content: `### Sentir sem ser arrastado

Quando paramos de brigar com a realidade, muitas vezes chegam os sentimentos que estávamos segurando: tristeza, raiva, medo, decepção, alívio ou uma mistura confusa de tudo isso. Essa pode ser uma das partes mais difíceis da aceitação, e é um dos motivos pelos quais as pessoas a evitam.

Um princípio importante é que a emoção pode ser reconhecida sem ser obedecida. Você pode sentir uma raiva intensa sem agir a partir dela. Pode sentir uma tristeza profunda sem concluir que a vida não tem esperança. As emoções são reais e significativas, e também são ondas temporárias que sobem, chegam ao pico e, com o tempo, se acalmam.

### Ritmo, orientação e limites de tempo

Permitir uma emoção não significa abrir todas as comportas de uma vez. Três ferramentas podem tornar o contato com sentimentos difíceis mais seguro:

- **Ritmo:** Aproxime-se do sentimento em pequenas doses. Sinta por um minuto, depois leve a atenção para algo neutro e, se quiser, volte. Você decide a velocidade.
- **Orientação:** Mantenha um pé no presente. Olhe o ambiente, sinta os pés no chão, perceba a temperatura do ar. Isso lembra ao seu sistema nervoso que o sentimento está acontecendo agora, num lugar seguro o bastante.
- **Limites de tempo:** Dê ao sentimento um contorno. "Vou me permitir chorar por dez minutos e depois vou fazer um chá." Saber que existe um fim pode facilitar o começo.

### Onde você sente?

As emoções costumam ter uma casa no corpo: um nó na garganta, calor no rosto, pressão atrás dos olhos, um vazio no estômago. Perceber onde você sente uma emoção pode torná-la mais manejável, porque uma sensação num lugar específico é mais fácil de acompanhar do que um estado vago que ocupa tudo.

### Prática: um check-in no seu ritmo

Programe um timer de cinco minutos e sente-se num lugar confortável:

- Nomeie a emoção, se puder: "tristeza", "raiva", "medo". Se não, "algo pesado" também serve.
- Perceba onde você a sente no corpo. Descreva de forma simples: tamanho, temperatura, movimento.
- Respire com suavidade ao redor dessa região, sem tentar mudá-la.
- Depois de um ou dois minutos, leve a atenção para fora: nomeie três coisas que consegue ver e duas que consegue ouvir.
- Se quiser, volte brevemente à sensação. Depois, encerre colocando a mão em algum lugar que traga conforto.

### Quando buscar apoio

Se as emoções parecerem incontroláveis, continuarem crescendo em vez de se acalmar ou levarem a pensamentos de se machucar, por favor, não passe por isso sozinho. Procure um profissional de saúde mental habilitado. Se estiver em perigo imediato, procure o número de emergência local ou uma linha de apoio em crise, como o 988 nos Estados Unidos. A aceitação nunca deve ser praticada à custa da sua segurança.`,
        prompt: 'Onde você sente essa emoção no corpo? O que tornaria o contato com ela mais seguro: ritmo, orientação, um limite de tempo ou outra coisa?'
      }
    },
    {
      id: 'les_acc_9',
      slug: 'grief-as-part-of-acceptance',
      duration: 20,
      sort: 3,
      en: {
        title: 'Grief as Part of Acceptance',
        content: `### Acceptance often includes grief

When we finally stop fighting a reality, we often discover that underneath the resistance was grief. We resisted because accepting meant feeling the loss: of a person, a relationship, a version of our health, a hoped-for future, a sense of fairness, or an image of who we thought we would be.

This is why acceptance and grief so often travel together. Grief is not a sign that acceptance has failed. It is frequently a sign that acceptance is working.

### Many kinds of loss

We tend to think of grief only in connection with death, but people grieve many things:

- A diagnosis or a change in physical ability.
- The end of a marriage, friendship, or community.
- A career path that did not work out.
- A childhood that did not provide what we needed.
- A family member who is alive but unable to show up for us.
- Plans, dreams, or a sense of safety that was lost.

These losses are often invisible to others and may not come with rituals or sympathy cards. That can make them lonelier. Naming them as real losses is itself an act of acceptance.

### Grief is not linear

You may have heard of "stages" of grief. Many people find it more accurate to think of grief as waves that come and go, sometimes predictably and sometimes out of nowhere. You may feel peaceful one day and devastated the next. That does not mean you are going backward. It means you are grieving.

### What needs grief?

In the original workbook, one of the questions for choice after acceptance is: "What needs grief?" Some things can be changed. Some things can be influenced. And some things simply need to be mourned. Recognizing which is which can save enormous energy that would otherwise go into trying to fix what cannot be fixed.

### Practice: honoring a loss

Choose a loss connected to something you are working on accepting. Go gently; this does not need to be your biggest loss.

- Write the loss in one simple sentence: "I lost..." or "I will not have..."
- Write what it meant to you, or what you hoped for.
- Notice any feelings that arise, and where you feel them in your body.
- Choose one small way to honor it: lighting a candle, a short walk, a letter, a song, or telling someone you trust.
- Close with a sentence of kindness: "It makes sense that this hurts. I loved (or hoped for) this."

### You do not have to grieve alone

Grief can be heavy and exhausting. Support groups, faith communities, trusted friends, and grief counselors can all help carry it. If grief is making daily life very hard for a long period, or if you feel hopeless or unsafe, please reach out to a licensed professional, your local emergency number, or a crisis line such as 988 in the US.`,
        prompt: 'Underneath something you have been resisting, is there a loss that needs to be grieved? What would it mean to honor it?'
      },
      es: {
        title: 'El duelo como parte de la aceptación',
        content: `### La aceptación muchas veces incluye duelo

Cuando por fin dejamos de pelear contra una realidad, muchas veces descubrimos que debajo de la resistencia había tristeza y duelo. Resistíamos porque aceptar significaba sentir la pérdida: de una persona, de una relación, de una versión de nuestra salud, de un futuro esperado, de un sentido de justicia o de una imagen de quiénes creíamos que íbamos a ser.

Por eso la aceptación y el duelo suelen viajar juntos. El duelo no es una señal de que la aceptación falló. Muchas veces es una señal de que está funcionando.

### Muchos tipos de pérdida

Solemos asociar el duelo solo con la muerte, pero las personas hacemos duelo por muchas cosas:

- Un diagnóstico o un cambio en la capacidad física.
- El final de un matrimonio, una amistad o una comunidad.
- Un camino profesional que no funcionó.
- Una infancia que no nos dio lo que necesitábamos.
- Un familiar que está vivo pero no puede estar presente para nosotros.
- Planes, sueños o una sensación de seguridad que se perdieron.

Estas pérdidas suelen ser invisibles para los demás y quizá no vengan acompañadas de rituales ni condolencias. Eso puede hacerlas más solitarias. Nombrarlas como pérdidas reales ya es, en sí, un acto de aceptación.

### El duelo no es lineal

Quizá hayas oído hablar de las "etapas" del duelo. A muchas personas les resulta más fiel pensar el duelo como olas que van y vienen, a veces de manera previsible y a veces de la nada. Puedes sentir paz un día y una tristeza devastadora al siguiente. Eso no significa que estés retrocediendo. Significa que estás atravesando un duelo.

### ¿Qué necesita duelo?

En el cuaderno original, una de las preguntas para elegir después de aceptar es: "¿Qué necesita duelo?". Algunas cosas pueden cambiarse. Otras pueden influenciarse. Y otras, simplemente, necesitan ser lloradas. Reconocer cuál es cuál puede ahorrarte muchísima energía que de otro modo gastarías intentando arreglar lo que no tiene arreglo.

### Práctica: honrar una pérdida

Elige una pérdida relacionada con algo que estás intentando aceptar. Ve con suavidad; no tiene que ser tu pérdida más grande.

- Escribe la pérdida en una frase sencilla: "Perdí..." o "No voy a tener...".
- Escribe qué significaba para ti o qué esperabas.
- Observa las emociones que aparecen y dónde las sientes en el cuerpo.
- Elige una pequeña forma de honrarla: encender una vela, una caminata corta, una carta, una canción o contárselo a alguien de confianza.
- Cierra con una frase amable: "Tiene sentido que esto duela. Yo amaba (o esperaba) esto".

### No tienes que atravesar el duelo en soledad

El duelo puede ser pesado y agotador. Los grupos de apoyo, las comunidades de fe, las amistades de confianza y los profesionales especializados en duelo pueden ayudar a sostenerlo. Si el duelo te está haciendo muy difícil la vida diaria durante mucho tiempo, o si sientes desesperanza o que no estás a salvo, busca a un profesional con licencia, tu número local de emergencias o una línea de crisis, como el 988 en Estados Unidos.`,
        prompt: 'Debajo de algo que has estado resistiendo, ¿hay una pérdida que necesita duelo? ¿Qué significaría honrarla?'
      },
      'pt-BR': {
        title: 'O luto como parte da aceitação',
        content: `### A aceitação muitas vezes inclui luto

Quando finalmente paramos de brigar com uma realidade, muitas vezes descobrimos que, por baixo da resistência, havia luto. Resistíamos porque aceitar significava sentir a perda: de uma pessoa, de um relacionamento, de uma versão da nossa saúde, de um futuro esperado, de um senso de justiça ou de uma imagem de quem achávamos que seríamos.

É por isso que aceitação e luto costumam caminhar juntos. O luto não é sinal de que a aceitação falhou. Muitas vezes, é sinal de que ela está funcionando.

### Muitos tipos de perda

Costumamos associar o luto apenas à morte, mas as pessoas vivem o luto por muitas coisas:

- Um diagnóstico ou uma mudança na capacidade física.
- O fim de um casamento, de uma amizade ou de uma comunidade.
- Um caminho profissional que não deu certo.
- Uma infância que não ofereceu o que precisávamos.
- Um familiar que está vivo, mas não consegue estar presente para nós.
- Planos, sonhos ou uma sensação de segurança que se perderam.

Essas perdas muitas vezes são invisíveis para os outros e podem não vir acompanhadas de rituais ou condolências. Isso pode torná-las mais solitárias. Nomeá-las como perdas reais já é, em si, um ato de aceitação.

### O luto não é linear

Talvez você já tenha ouvido falar das "fases" do luto. Muitas pessoas acham mais fiel pensar no luto como ondas que vêm e vão, às vezes de forma previsível e às vezes do nada. Você pode se sentir em paz num dia e devastado no seguinte. Isso não significa que está andando para trás. Significa que você está vivendo um luto.

### O que precisa de luto?

No caderno original, uma das perguntas para escolher depois de aceitar é: "O que precisa de luto?" Algumas coisas podem ser mudadas. Outras podem ser influenciadas. E algumas simplesmente precisam ser choradas. Reconhecer qual é qual pode poupar uma enorme quantidade de energia que, de outra forma, iria para tentar consertar o que não tem conserto.

### Prática: honrando uma perda

Escolha uma perda ligada a algo que você está trabalhando para aceitar. Vá com delicadeza; não precisa ser a sua maior perda.

- Escreva a perda numa frase simples: "Eu perdi..." ou "Eu não vou ter..."
- Escreva o que aquilo significava para você, ou o que você esperava.
- Perceba os sentimentos que surgem e onde você os sente no corpo.
- Escolha um pequeno jeito de honrá-la: acender uma vela, uma caminhada curta, uma carta, uma música ou contar para alguém de confiança.
- Encerre com uma frase gentil: "Faz sentido que isso doa. Eu amava (ou esperava) isso."

### Você não precisa viver o luto sozinho

O luto pode ser pesado e exaustivo. Grupos de apoio, comunidades de fé, amigos de confiança e profissionais especializados em luto podem ajudar a carregá-lo. Se o luto estiver tornando a vida diária muito difícil por muito tempo, ou se você se sentir sem esperança ou em risco, procure um profissional habilitado, o número de emergência local ou uma linha de apoio em crise, como o 988 nos Estados Unidos.`,
        prompt: 'Por baixo de algo que você tem resistido, existe uma perda que precisa de luto? O que significaria honrá-la?'
      }
    }
  ]
};

const MOD_ACC_4 = {
  id: 'mod_acc_4',
  slug: 'choice-after-acceptance',
  sort: 4,
  en: { title: 'Choice After Acceptance', description: 'Finding what is yours to do, making clean requests and boundaries, and building a ritual for when reality hurts.' },
  es: { title: 'Elegir después de aceptar', description: 'Descubrir qué te corresponde, hacer pedidos y poner límites con claridad, y crear un ritual para cuando la realidad duele.' },
  'pt-BR': { title: 'Escolher depois de aceitar', description: 'Descobrindo o que cabe a você, fazendo pedidos e colocando limites com clareza, e criando um ritual para quando a realidade dói.' },
  lessons: [
    {
      id: 'les_acc_10',
      slug: 'what-is-mine-to-do',
      duration: 20,
      sort: 1,
      en: {
        title: 'What Is Mine to Do?',
        content: `### Acceptance opens the door to choice

A common fear about acceptance is that it leads to passivity. In practice, it often does the opposite. When we stop spending energy arguing with what has already happened, we have more energy for what is still possible. Acceptance is not the end of agency. It is where agency becomes clear again.

### Three helpful questions

After acknowledging a difficult reality, the original KindWell workbook invites three questions:

- **What can be influenced?** Not controlled, just influenced. This might include your own actions, your responses, your requests, and sometimes the systems around you.
- **What needs grief?** Some things cannot be changed and need to be mourned rather than solved.
- **What boundary or request is available?** Often there is something you can ask for or a limit you can set that protects your wellbeing.

Sorting a situation through these questions can turn an overwhelming tangle into a few distinct pieces, each with its own kind of response.

### Circles of influence

A simple visual can help. Draw three circles, one inside the other:

- The inner circle is what you **control**: your own choices, words, and actions.
- The middle circle is what you can **influence**: other people's decisions, outcomes at work, community issues.
- The outer circle is what you **cannot change**: the past, other people's feelings, events that have already occurred.

Much of our distress comes from spending energy in the outer circle. Acceptance helps us bring our attention back toward the center, where our efforts actually make a difference.

### Clean next actions

A "clean" next action is one that belongs to you, is specific, and is small enough to do soon. Compare "Fix my relationship with my brother" with "Send my brother a message asking if he'd like to have coffee next week." The first is overwhelming and depends on him. The second is yours to do.

### Practice: finding one clean action

Choose a situation you have been working on accepting:

- Write the plain facts in two or three sentences.
- List what is outside your control. Read it slowly and, if you can, let it rest.
- List what you can influence.
- Note anything that needs grief rather than action.
- Identify one clean next action that belongs to you: specific, small, and doable within the next few days.
- Write down when you will do it.

### When the action is rest

Sometimes the most honest answer to "What is mine to do?" is "Nothing right now except take care of myself." After a major loss or shock, rest, basic care, and leaning on others may be the wisest actions available. That is not failure. It is wisdom about timing.`,
        prompt: 'Identify one clean next action that belongs to you. What is it, and when could you take it?'
      },
      es: {
        title: '¿Qué me corresponde hacer?',
        content: `### La aceptación abre la puerta a elegir

Un temor común sobre la aceptación es que lleve a la pasividad. En la práctica, muchas veces ocurre lo contrario. Cuando dejamos de gastar energía discutiendo con lo que ya pasó, tenemos más energía para lo que todavía es posible. La aceptación no es el fin de nuestra capacidad de actuar. Es el lugar donde esa capacidad vuelve a verse con claridad.

### Tres preguntas útiles

Después de reconocer una realidad difícil, el cuaderno original de KindWell invita a hacerse tres preguntas:

- **¿Qué se puede influenciar?** No controlar, solo influenciar. Esto puede incluir tus acciones, tus respuestas, tus pedidos y, a veces, los sistemas que te rodean.
- **¿Qué necesita duelo?** Algunas cosas no pueden cambiarse y necesitan ser lloradas en lugar de resueltas.
- **¿Qué límite o pedido está disponible?** Muchas veces hay algo que puedes pedir o un límite que puedes poner para proteger tu bienestar.

Pasar una situación por estas preguntas puede convertir una maraña abrumadora en unas pocas piezas distintas, cada una con su propio tipo de respuesta.

### Círculos de influencia

Una imagen sencilla puede ayudar. Dibuja tres círculos, uno dentro del otro:

- El círculo interior es lo que **controlas**: tus decisiones, palabras y acciones.
- El del medio es lo que puedes **influenciar**: las decisiones de otras personas, los resultados en el trabajo, los temas de tu comunidad.
- El exterior es lo que **no puedes cambiar**: el pasado, los sentimientos de otras personas, los hechos que ya ocurrieron.

Gran parte de nuestro malestar viene de gastar energía en el círculo exterior. La aceptación nos ayuda a llevar la atención de vuelta hacia el centro, donde nuestros esfuerzos realmente hacen una diferencia.

### Siguientes pasos claros

Un siguiente paso "claro" es uno que te pertenece, es específico y es lo bastante pequeño como para hacerlo pronto. Compara "Arreglar mi relación con mi hermano" con "Enviarle un mensaje a mi hermano para preguntarle si quiere tomar un café la semana que viene". El primero es abrumador y depende de él. El segundo te corresponde a ti.

### Práctica: encontrar un paso claro

Elige una situación que has estado trabajando para aceptar:

- Escribe los hechos concretos en dos o tres frases.
- Anota lo que está fuera de tu control. Léelo despacio y, si puedes, déjalo descansar.
- Anota lo que puedes influenciar.
- Señala lo que necesita duelo más que acción.
- Identifica un siguiente paso claro que te corresponda: específico, pequeño y posible en los próximos días.
- Anota cuándo lo vas a hacer.

### Cuando el paso es descansar

A veces la respuesta más honesta a "¿Qué me corresponde hacer?" es "Por ahora nada, salvo cuidarme". Después de una gran pérdida o un impacto fuerte, descansar, atender lo básico y apoyarte en otras personas puede ser lo más sabio que tienes a mano. No es un fracaso. Es sabiduría sobre los tiempos.`,
        prompt: 'Identifica un siguiente paso claro que te corresponda. ¿Cuál es y cuándo podrías darlo?'
      },
      'pt-BR': {
        title: 'O que cabe a mim fazer?',
        content: `### A aceitação abre a porta para a escolha

Um medo comum sobre a aceitação é que ela leve à passividade. Na prática, muitas vezes acontece o contrário. Quando paramos de gastar energia discutindo com o que já aconteceu, sobra mais energia para o que ainda é possível. A aceitação não é o fim da nossa capacidade de agir. É onde essa capacidade volta a ficar clara.

### Três perguntas úteis

Depois de reconhecer uma realidade difícil, o caderno original da KindWell convida a três perguntas:

- **O que pode ser influenciado?** Não controlado, apenas influenciado. Isso pode incluir as suas ações, as suas respostas, os seus pedidos e, às vezes, os sistemas ao seu redor.
- **O que precisa de luto?** Algumas coisas não podem ser mudadas e precisam ser choradas, e não resolvidas.
- **Que limite ou pedido está disponível?** Muitas vezes existe algo que você pode pedir ou um limite que pode colocar para proteger o seu bem-estar.

Passar uma situação por essas perguntas pode transformar um emaranhado avassalador em algumas peças distintas, cada uma com o seu tipo de resposta.

### Círculos de influência

Uma imagem simples pode ajudar. Desenhe três círculos, um dentro do outro:

- O círculo de dentro é o que você **controla**: as suas escolhas, palavras e ações.
- O do meio é o que você pode **influenciar**: decisões de outras pessoas, resultados no trabalho, questões da sua comunidade.
- O de fora é o que você **não pode mudar**: o passado, os sentimentos dos outros, acontecimentos que já ocorreram.

Grande parte do nosso sofrimento vem de gastar energia no círculo de fora. A aceitação nos ajuda a trazer a atenção de volta para o centro, onde os nossos esforços realmente fazem diferença.

### Próximos passos claros

Um próximo passo "claro" é aquele que pertence a você, é específico e pequeno o bastante para ser feito logo. Compare "Consertar minha relação com meu irmão" com "Mandar uma mensagem para o meu irmão perguntando se ele quer tomar um café na semana que vem". O primeiro é avassalador e depende dele. O segundo cabe a você.

### Prática: encontrando um passo claro

Escolha uma situação que você está trabalhando para aceitar:

- Escreva os fatos simples em duas ou três frases.
- Liste o que está fora do seu controle. Leia devagar e, se conseguir, deixe descansar.
- Liste o que você pode influenciar.
- Anote o que precisa de luto, e não de ação.
- Identifique um próximo passo claro que pertença a você: específico, pequeno e possível nos próximos dias.
- Anote quando você vai fazê-lo.

### Quando o passo é descansar

Às vezes, a resposta mais honesta para "O que cabe a mim fazer?" é "Nada por agora, além de cuidar de mim". Depois de uma grande perda ou de um choque, descansar, cuidar do básico e se apoiar nos outros podem ser as ações mais sábias disponíveis. Isso não é fracasso. É sabedoria sobre o tempo certo.`,
        prompt: 'Identifique um próximo passo claro que pertença a você. Qual é, e quando você poderia dá-lo?'
      }
    },
    {
      id: 'les_acc_11',
      slug: 'boundaries-and-requests',
      duration: 20,
      sort: 2,
      en: {
        title: 'Boundaries and Requests',
        content: `### Acceptance and protecting yourself

Accepting that someone behaves a certain way does not mean you have to keep exposing yourself to it. In fact, clear acceptance often makes good boundaries possible. As long as we are waiting for someone to become different, we may keep hoping, arguing, or trying to change them. When we accept who they are right now, we can ask a more useful question: "Given this reality, what do I need?"

### Requests: asking for what you need

A request is an invitation for someone else to do something. It leaves room for them to say yes or no. Clear requests tend to be:

- **Specific:** "Could you text me if you'll be more than fifteen minutes late?" rather than "Be more considerate."
- **Doable:** something the other person can actually do.
- **Positive:** what you would like, rather than only what you do not want.
- **Kind and direct:** without long justifications or hidden blame.

Accepting reality includes accepting that the answer might be no. A request that cannot be refused is really a demand.

### Boundaries: what you will do

A boundary is different from a request. It describes what you will do to take care of yourself, and it does not depend on the other person's cooperation. For example:

- "If the conversation turns to criticizing my parenting, I'll end the call."
- "I'm not available for work messages after 7 p.m. I'll respond in the morning."
- "I'm happy to visit, and I'll stay at a hotel."

Boundaries are not punishments or threats. They are honest statements of your limits. They often work best when stated calmly, once, and then followed through with action rather than repeated arguments.

### When a situation is unsafe

If you are dealing with someone who is abusive, threatening, or controlling, setting boundaries can sometimes increase risk. Acceptance in that case may mean accepting that you need outside help. Domestic violence advocates, trusted people, and, in an emergency, your local emergency number can help you plan for your safety.

### Practice: one request, one boundary

Think of a relationship or situation where you have been hoping things would change:

- Write the facts plainly, including what the other person tends to do.
- Accept, as best you can: "This is how things are right now."
- Draft one **request**: specific, doable, and kind.
- Draft one **boundary**: what you will do to protect your wellbeing if things stay the same.
- Notice how each feels in your body. Adjust the words until they feel honest and steady.

You do not have to use them right away. Simply knowing what you would ask for, and what you would do, can bring a surprising sense of steadiness.`,
        prompt: 'In a situation you are accepting, what is one clear request you could make, and one boundary that would protect your wellbeing?'
      },
      es: {
        title: 'Límites y pedidos',
        content: `### Aceptar y protegerte

Aceptar que alguien se comporta de cierta manera no significa que tengas que seguir exponiéndote a eso. De hecho, una aceptación clara muchas veces es lo que hace posibles los buenos límites. Mientras esperamos que alguien cambie, podemos seguir teniendo esperanza, discutiendo o intentando cambiarlo. Cuando aceptamos quién es ahora, podemos hacernos una pregunta más útil: "Dada esta realidad, ¿qué necesito?".

### Pedidos: pedir lo que necesitas

Un pedido es una invitación a que otra persona haga algo. Deja espacio para que diga que sí o que no. Los pedidos claros suelen ser:

- **Específicos:** "¿Podrías avisarme por mensaje si vas a llegar más de quince minutos tarde?" en lugar de "Sé más considerado".
- **Posibles:** algo que la otra persona realmente puede hacer.
- **En positivo:** lo que te gustaría, y no solo lo que no quieres.
- **Amables y directos:** sin largas justificaciones ni reproches ocultos.

Aceptar la realidad incluye aceptar que la respuesta podría ser no. Un pedido que no admite un no, en realidad, es una exigencia.

### Límites: lo que tú harás

Un límite es distinto de un pedido. Describe lo que tú harás para cuidarte y no depende de la cooperación de la otra persona. Por ejemplo:

- "Si la conversación se vuelve una crítica a cómo crío a mis hijos, voy a terminar la llamada".
- "No estoy disponible para mensajes de trabajo después de las 7 p. m. Respondo por la mañana".
- "Me encanta visitarlos, y me voy a quedar en un hotel".

Los límites no son castigos ni amenazas. Son declaraciones honestas de hasta dónde puedes llegar. Suelen funcionar mejor cuando se expresan con calma, una vez, y luego se sostienen con acciones en lugar de discusiones repetidas.

### Cuando una situación no es segura

Si estás lidiando con alguien que ejerce violencia, amenaza o controla, poner límites a veces puede aumentar el riesgo. En ese caso, aceptar puede significar reconocer que necesitas ayuda externa. Las organizaciones de apoyo ante la violencia doméstica, las personas de confianza y, en una emergencia, tu número local de emergencias pueden ayudarte a planificar tu seguridad.

### Práctica: un pedido, un límite

Piensa en una relación o situación en la que has estado esperando que las cosas cambien:

- Escribe los hechos con sencillez, incluido lo que la otra persona suele hacer.
- Acepta, en la medida de lo posible: "Así están las cosas ahora".
- Escribe un **pedido**: específico, posible y amable.
- Escribe un **límite**: lo que harás para proteger tu bienestar si las cosas siguen igual.
- Nota cómo se siente cada uno en tu cuerpo. Ajusta las palabras hasta que suenen honestas y firmes.

No tienes que usarlos de inmediato. Solo saber qué pedirías y qué harías puede darte una sorprendente sensación de estabilidad.`,
        prompt: 'En una situación que estás aceptando, ¿qué pedido claro podrías hacer y qué límite protegería tu bienestar?'
      },
      'pt-BR': {
        title: 'Limites e pedidos',
        content: `### Aceitar e se proteger

Aceitar que alguém se comporta de certo jeito não significa que você precise continuar se expondo a isso. Na verdade, uma aceitação clara muitas vezes é o que torna bons limites possíveis. Enquanto esperamos que alguém mude, podemos continuar esperando, discutindo ou tentando mudar a pessoa. Quando aceitamos quem ela é agora, podemos fazer uma pergunta mais útil: "Diante dessa realidade, do que eu preciso?"

### Pedidos: pedir o que você precisa

Um pedido é um convite para que outra pessoa faça algo. Ele deixa espaço para um sim ou um não. Pedidos claros costumam ser:

- **Específicos:** "Você pode me mandar uma mensagem se for atrasar mais de quinze minutos?" em vez de "Seja mais atencioso."
- **Possíveis:** algo que a outra pessoa realmente consegue fazer.
- **Positivos:** o que você gostaria, e não apenas o que você não quer.
- **Gentis e diretos:** sem longas justificativas nem cobranças escondidas.

Aceitar a realidade inclui aceitar que a resposta pode ser não. Um pedido que não admite recusa, na verdade, é uma exigência.

### Limites: o que você vai fazer

Um limite é diferente de um pedido. Ele descreve o que você vai fazer para cuidar de si e não depende da colaboração da outra pessoa. Por exemplo:

- "Se a conversa virar crítica ao jeito como eu crio meus filhos, vou encerrar a ligação."
- "Não estou disponível para mensagens de trabalho depois das 19h. Respondo pela manhã."
- "Adoro visitar vocês, e vou ficar num hotel."

Limites não são castigos nem ameaças. São declarações honestas de até onde você vai. Costumam funcionar melhor quando ditos com calma, uma vez, e depois sustentados com ações, e não com discussões repetidas.

### Quando a situação não é segura

Se você está lidando com alguém que é violento, ameaçador ou controlador, colocar limites às vezes pode aumentar o risco. Nesse caso, aceitar pode significar reconhecer que você precisa de ajuda externa. Serviços de apoio a pessoas em situação de violência doméstica, pessoas de confiança e, numa emergência, o número de emergência local podem ajudar você a planejar a sua segurança.

### Prática: um pedido, um limite

Pense numa relação ou situação em que você vem esperando que as coisas mudem:

- Escreva os fatos de forma simples, incluindo o que a outra pessoa costuma fazer.
- Aceite, da melhor forma possível: "É assim que as coisas estão agora."
- Escreva um **pedido**: específico, possível e gentil.
- Escreva um **limite**: o que você vai fazer para proteger o seu bem-estar se as coisas continuarem iguais.
- Perceba como cada um soa no seu corpo. Ajuste as palavras até que pareçam honestas e firmes.

Você não precisa usá-los imediatamente. Só de saber o que você pediria e o que faria já pode trazer uma surpreendente sensação de estabilidade.`,
        prompt: 'Numa situação que você está aceitando, que pedido claro você poderia fazer, e que limite protegeria o seu bem-estar?'
      }
    },
    {
      id: 'les_acc_12',
      slug: 'a-ritual-for-when-reality-hurts',
      duration: 20,
      sort: 3,
      en: {
        title: 'A Ritual for When Reality Hurts',
        content: `### Making acceptance portable

Acceptance is a practice you will return to many times, often in moments when you are too upset to remember everything you have learned. That is why the final lesson of this course invites you to create a brief, personal ritual for moments when reality hurts. A ritual is simply a small sequence of steps you have chosen in advance, so you can follow it without having to think too hard.

### Four ingredients

The original KindWell workbook suggests four parts:

- **A phrase:** a few words that turn your mind toward acceptance. For example: "This is what is happening," "It is what it is, and I am here," or "This should not be happening, and it is."
- **A body cue:** a small physical gesture that signals willingness: open palms, a hand on your chest, a slow exhale, feet pressed into the floor.
- **A support contact:** one person or resource you can reach out to when things are hard: a friend, family member, faith leader, support group, or professional.
- **A next-step reminder:** a question that turns you toward action, such as "What is mine to do now?"

### An example ritual

Someone might write theirs like this:

- When I notice "This can't be happening," I open my hands on my lap.
- I take one slow breath and say, "This is what is happening right now."
- I ask, "Is this a moment for action, grief, or rest?"
- If it's too much to hold alone, I text my sister.
- I choose one small thing that is mine to do.

It does not need to be elaborate. The simpler it is, the more likely you are to use it.

### Looking back

Across this course you have explored:

- Acceptance as acknowledging reality, not approving of it.
- Radical acceptance and turning the mind, again and again.
- The difference between pain and added suffering, and how bracing shows up in the body.
- Separating facts, stories, and predictions.
- Allowing emotion and grief at a safe pace.
- Finding clean actions, requests, and boundaries.

### When to seek support

This course is educational, not clinical care. If you are facing trauma, ongoing abuse, severe depression, or thoughts of harming yourself, please reach out to a licensed professional. In an emergency, contact your local emergency number or a crisis line such as 988 in the US. Acceptance includes accepting when we need more help than we can give ourselves.

### Practice: close gently

Write your personal ritual using the four ingredients: phrase, body cue, support contact, and next-step reminder. Keep it on your phone or somewhere you will see it.

Then write three final lines: one thing you want to carry forward, one thing you are setting down for now, and one source of support you can contact if needed.`,
        prompt: 'Choose your phrase, body cue, support contact, and next-step reminder. What does your ritual for when reality hurts look like?'
      },
      es: {
        title: 'Un ritual para cuando la realidad duele',
        content: `### Llevar la aceptación contigo

La aceptación es una práctica a la que volverás muchas veces, a menudo en momentos en los que estarás demasiado alterado para recordar todo lo que aprendiste. Por eso, la última lección de este curso te invita a crear un ritual breve y personal para los momentos en que la realidad duele. Un ritual es simplemente una pequeña secuencia de pasos elegida de antemano, para que puedas seguirla sin tener que pensar demasiado.

### Cuatro ingredientes

El cuaderno original de KindWell sugiere cuatro partes:

- **Una frase:** unas pocas palabras que giren tu mente hacia la aceptación. Por ejemplo: "Esto es lo que está pasando", "Es lo que es, y aquí estoy" o "Esto no debería estar pasando, y está pasando".
- **Una señal corporal:** un pequeño gesto físico que exprese disposición: las palmas abiertas, una mano sobre el pecho, una exhalación lenta, los pies firmes en el piso.
- **Un contacto de apoyo:** una persona o un recurso al que puedas acudir cuando las cosas se ponen difíciles: una amistad, un familiar, un guía espiritual, un grupo de apoyo o un profesional.
- **Un recordatorio del siguiente paso:** una pregunta que te oriente a la acción, como "¿Qué me corresponde hacer ahora?".

### Un ejemplo de ritual

Alguien podría escribir el suyo así:

- Cuando noto "Esto no puede estar pasando", abro las manos sobre el regazo.
- Hago una respiración lenta y digo: "Esto es lo que está pasando ahora".
- Me pregunto: "¿Es un momento para actuar, para hacer duelo o para descansar?".
- Si es demasiado para sostenerlo en soledad, le escribo a mi hermana.
- Elijo una pequeña cosa que me corresponde hacer.

No necesita ser elaborado. Cuanto más simple sea, más probable es que lo uses.

### Mirar hacia atrás

A lo largo de este curso exploraste:

- La aceptación como reconocimiento de la realidad, no como aprobación.
- La aceptación radical y girar la mente, una y otra vez.
- La diferencia entre el dolor y el sufrimiento añadido, y cómo aparece la tensión en el cuerpo.
- Separar hechos, historias y predicciones.
- Permitir las emociones y el duelo a un ritmo seguro.
- Encontrar pasos claros, pedidos y límites.

### Cuándo buscar apoyo

Este curso es educativo, no una atención clínica. Si estás atravesando un trauma, un abuso continuo, una depresión intensa o pensamientos de hacerte daño, busca a un profesional con licencia. En una emergencia, comunícate con tu número local de emergencias o con una línea de crisis, como el 988 en Estados Unidos. La aceptación también incluye aceptar cuando necesitamos más ayuda de la que podemos darnos.

### Práctica: cerrar con suavidad

Escribe tu ritual personal con los cuatro ingredientes: frase, señal corporal, contacto de apoyo y recordatorio del siguiente paso. Guárdalo en tu teléfono o en un lugar donde lo veas.

Luego escribe tres líneas finales: algo que quieres llevar contigo, algo que dejas a un lado por ahora y una fuente de apoyo a la que puedes recurrir si lo necesitas.`,
        prompt: 'Elige tu frase, tu señal corporal, tu contacto de apoyo y tu recordatorio del siguiente paso. ¿Cómo es tu ritual para cuando la realidad duele?'
      },
      'pt-BR': {
        title: 'Um ritual para quando a realidade dói',
        content: `### Levando a aceitação com você

A aceitação é uma prática à qual você vai voltar muitas vezes, muitas delas em momentos em que estará abalado demais para lembrar tudo o que aprendeu. Por isso, a última lição deste curso convida você a criar um ritual breve e pessoal para os momentos em que a realidade dói. Um ritual é simplesmente uma pequena sequência de passos escolhida com antecedência, para que você possa segui-la sem precisar pensar muito.

### Quatro ingredientes

O caderno original da KindWell sugere quatro partes:

- **Uma frase:** poucas palavras que virem a sua mente em direção à aceitação. Por exemplo: "Isto é o que está acontecendo", "É o que é, e eu estou aqui" ou "Isso não deveria estar acontecendo, e está".
- **Um sinal corporal:** um pequeno gesto físico que expresse disposição: palmas abertas, uma mão sobre o peito, uma expiração lenta, os pés firmes no chão.
- **Um contato de apoio:** uma pessoa ou um recurso que você possa procurar quando as coisas estiverem difíceis: um amigo, um familiar, um líder religioso, um grupo de apoio ou um profissional.
- **Um lembrete do próximo passo:** uma pergunta que oriente você para a ação, como "O que cabe a mim fazer agora?"

### Um exemplo de ritual

Alguém poderia escrever o seu assim:

- Quando percebo "Isso não pode estar acontecendo", abro as mãos sobre o colo.
- Faço uma respiração lenta e digo: "Isto é o que está acontecendo agora."
- Pergunto: "Este é um momento para agir, para viver o luto ou para descansar?"
- Se for demais para segurar sozinho, mando uma mensagem para a minha irmã.
- Escolho uma pequena coisa que cabe a mim fazer.

Não precisa ser elaborado. Quanto mais simples, maior a chance de você usá-lo.

### Olhando para trás

Ao longo deste curso, você explorou:

- A aceitação como reconhecimento da realidade, e não como aprovação.
- A aceitação radical e o virar a mente, de novo e de novo.
- A diferença entre dor e sofrimento adicional, e como a contração aparece no corpo.
- A separação entre fatos, histórias e previsões.
- A permissão para sentir emoções e luto num ritmo seguro.
- A busca por passos claros, pedidos e limites.

### Quando buscar apoio

Este curso é educativo, não um cuidado clínico. Se você está enfrentando um trauma, abuso contínuo, depressão intensa ou pensamentos de se machucar, procure um profissional habilitado. Numa emergência, procure o número de emergência local ou uma linha de apoio em crise, como o 988 nos Estados Unidos. A aceitação também inclui aceitar quando precisamos de mais ajuda do que conseguimos oferecer a nós mesmos.

### Prática: encerrar com delicadeza

Escreva o seu ritual pessoal usando os quatro ingredientes: frase, sinal corporal, contato de apoio e lembrete do próximo passo. Guarde-o no celular ou num lugar onde você vá vê-lo.

Depois, escreva três linhas finais: algo que você quer levar adiante, algo que está deixando de lado por agora e uma fonte de apoio que pode procurar se precisar.`,
        prompt: 'Escolha a sua frase, o seu sinal corporal, o seu contato de apoio e o seu lembrete do próximo passo. Como é o seu ritual para quando a realidade dói?'
      }
    }
  ]
};

const COURSE_ACCEPTANCE = {
  id: 'course_acceptance',
  slug: 'radical-acceptance-foundations',
  is_premium: 1,
  level: 'All levels',
  hours: 4.0,
  en: {
    title: 'Radical Acceptance Foundations',
    subtitle: 'Ending the exhaustion of fighting reality as it is right now.',
    description: 'Learn the life-changing practice of acknowledging reality without approval or surrender, opening the door to genuine healing and effective choice.',
    outcomes: JSON.stringify(['Distinguish acceptance from resignation or giving up', 'Recognize bodily indicators of bracing and resistance', 'Reclaim the energy currently spent arguing with what has already happened', 'Separate facts from stories and predictions', 'Create a personal ritual for moments when reality hurts'])
  },
  es: {
    title: 'Fundamentos de la aceptación radical',
    subtitle: 'Terminar con el desgaste de luchar contra lo que ya es una realidad.',
    description: 'Aprende a reconocer el presente con honestidad sin resignarte, abriendo camino a decisiones más conscientes y serenas.',
    outcomes: JSON.stringify(['Diferenciar la aceptación lúcida de la resignación pasiva', 'Detectar la tensión física asociada a la negación', 'Recuperar la energía que se gasta resistiendo lo inevitable', 'Separar los hechos de las historias y las predicciones', 'Crear un ritual personal para los momentos en que la realidad duele'])
  },
  'pt-BR': {
    title: 'Fundamentos da aceitação consciente',
    subtitle: 'Encerrando o cansaço de lutar contra os fatos como eles são agora.',
    description: 'Descubra a prática transformadora de reconhecer a realidade presente para, então, escolher caminhos mais saudáveis e possíveis.',
    outcomes: JSON.stringify(['Diferenciar aceitação genuína de resignação sem esperança', 'Perceber como a resistência consome energia do corpo', 'Direcionar sua força para o que realmente está ao seu alcance', 'Separar fatos de histórias e previsões', 'Criar um ritual pessoal para os momentos em que a realidade dói'])
  },
  modules: [MOD_ACC_1, MOD_ACC_2, MOD_ACC_3, MOD_ACC_4]
};

// ---------------------------------------------------------------------------
// COURSE 3 — Trauma-Informed Presence (new)
// ---------------------------------------------------------------------------

const MOD_TIP_1 = {
  id: 'mod_tip_1',
  slug: 'foundations-of-trauma-informed-presence',
  sort: 1,
  en: { title: 'Foundations of Trauma-Informed Presence', description: 'What trauma-informed means for everyday people, the core principles, and why it starts with you.' },
  es: { title: 'Fundamentos de una presencia informada sobre el trauma', description: 'Qué significa estar informado sobre el trauma en la vida cotidiana, sus principios centrales y por qué empieza por ti.' },
  'pt-BR': { title: 'Fundamentos de uma presença informada sobre trauma', description: 'O que significa estar informado sobre trauma no dia a dia, os princípios centrais e por que tudo começa em você.' },
  lessons: [
    {
      id: 'les_tip_1',
      slug: 'what-trauma-informed-means',
      duration: 20,
      sort: 1,
      en: {
        title: 'What Trauma-Informed Means',
        content: `### A course for everyday people

This course is for anyone who wants to be a steadier, safer presence for themselves and the people around them: friends, partners, parents, neighbors, coworkers, volunteers, and community members. It is not therapist training, and it will not prepare you to treat trauma. Instead, it offers a way of relating that tends to make ordinary interactions kinder and less likely to cause unintended harm.

Please move slowly. Some material may touch on your own history. You can skip any prompt, pause, or return later. If something brings up distress, stop, look around the room, feel your feet on the floor, and reach out to someone you trust or a licensed professional.

### What is trauma?

In everyday language, trauma refers to the lasting effects that overwhelming experiences can have on a person. What makes something traumatic is not only the event itself but how it was experienced: whether the person felt helpless, alone, or unsafe, and whether they had support afterward. Two people can go through similar events and be affected very differently.

Trauma can come from single events, like accidents or assaults, or from ongoing experiences, like neglect, violence at home, discrimination, war, or chronic instability. Its effects can show up in many ways, including strong reactions that seem out of proportion to the present, difficulty trusting, numbness, or being constantly on alert.

### Relating as though histories may be invisible

The heart of a trauma-informed approach is simple: relate to people as though important histories may be invisible, without diagnosing anyone. You usually cannot know what someone has lived through. The person who flinches when you raise your voice, who needs to sit near the door, or who goes quiet when plans change suddenly may be responding to experiences you know nothing about.

Being trauma-informed does not mean assuming everyone is traumatized, asking people about their past, or labeling their behavior. It means shifting the question from "What's wrong with you?" to "What might have happened to you?" and, even more practically, "What might help you feel safer right now?"

### Practice: noticing assumptions

Over the next few days, pay gentle attention to moments when someone's behavior surprises or frustrates you:

- Notice your first interpretation: "They're rude," "They're overreacting," "They're difficult."
- Pause and ask: "What else might be going on for this person that I cannot see?"
- Consider one small thing that might make the interaction feel safer or more predictable for them.
- Notice how this shift affects your own body and tone.

You do not need to guess anyone's history. The practice is simply holding room for the possibility that there is more to the story.`,
        prompt: 'Think of a time someone reacted in a way that surprised you. How might your response change if you assumed there was a history you could not see?'
      },
      es: {
        title: 'Qué significa estar informado sobre el trauma',
        content: `### Un curso para personas comunes

Este curso es para cualquier persona que quiera ser una presencia más estable y segura para sí misma y para quienes la rodean: amistades, parejas, madres y padres, vecinos, compañeros de trabajo, voluntarios y miembros de la comunidad. No es una formación para terapeutas ni te preparará para tratar el trauma. Ofrece, en cambio, una forma de relacionarse que suele volver más amables las interacciones cotidianas y menos propensas a causar daños sin querer.

Avanza con calma. Parte del material podría tocar tu propia historia. Puedes saltarte cualquier pregunta, hacer una pausa o volver más adelante. Si algo te genera malestar, detente, mira a tu alrededor, siente tus pies en el piso y comunícate con alguien de confianza o con un profesional con licencia.

### ¿Qué es el trauma?

En lenguaje cotidiano, el trauma se refiere a los efectos duraderos que pueden dejar en una persona las experiencias abrumadoras. Lo que vuelve traumático algo no es solo el hecho en sí, sino cómo se vivió: si la persona se sintió indefensa, sola o en peligro, y si tuvo apoyo después. Dos personas pueden atravesar situaciones parecidas y verse afectadas de maneras muy distintas.

El trauma puede surgir de hechos puntuales, como accidentes o agresiones, o de experiencias prolongadas, como el abandono, la violencia en el hogar, la discriminación, la guerra o la inestabilidad crónica. Sus efectos pueden manifestarse de muchas formas, por ejemplo, reacciones intensas que parecen desproporcionadas para el presente, dificultad para confiar, entumecimiento emocional o un estado de alerta constante.

### Relacionarse como si hubiera historias invisibles

El corazón de un enfoque informado sobre el trauma es sencillo: relacionarse con las personas como si pudieran existir historias importantes que no vemos, sin diagnosticar a nadie. Por lo general no puedes saber qué ha vivido alguien. La persona que se sobresalta cuando levantas la voz, que necesita sentarse cerca de la puerta o que se queda en silencio cuando los planes cambian de golpe quizá esté respondiendo a experiencias de las que no sabes nada.

Estar informado sobre el trauma no significa suponer que todo el mundo está traumatizado, preguntarle a la gente por su pasado ni ponerle etiquetas a su conducta. Significa cambiar la pregunta "¿Qué te pasa?" por "¿Qué te habrá pasado?" y, de forma todavía más práctica, "¿Qué podría ayudarte a sentirte más seguro ahora?".

### Práctica: notar las suposiciones

Durante los próximos días, presta atención con suavidad a los momentos en que la conducta de alguien te sorprende o te frustra:

- Nota tu primera interpretación: "Es grosero", "Está exagerando", "Es una persona difícil".
- Haz una pausa y pregúntate: "¿Qué más podría estar pasándole a esta persona que yo no veo?".
- Piensa en algo pequeño que podría hacer que la interacción se sienta más segura o previsible para ella.
- Observa cómo este cambio afecta tu propio cuerpo y tu tono.

No necesitas adivinar la historia de nadie. La práctica consiste simplemente en dejar espacio para la posibilidad de que haya más en la historia.`,
        prompt: 'Piensa en una vez en que alguien reaccionó de una forma que te sorprendió. ¿Cómo podría cambiar tu respuesta si supusieras que había una historia que no podías ver?'
      },
      'pt-BR': {
        title: 'O que significa estar informado sobre trauma',
        content: `### Um curso para pessoas comuns

Este curso é para qualquer pessoa que queira ser uma presença mais estável e segura para si mesma e para quem está ao redor: amigos, parceiros, mães e pais, vizinhos, colegas de trabalho, voluntários e membros da comunidade. Não é uma formação para terapeutas e não vai preparar você para tratar traumas. Em vez disso, oferece um jeito de se relacionar que tende a tornar as interações do dia a dia mais gentis e menos propensas a causar danos sem querer.

Vá devagar. Parte do material pode tocar na sua própria história. Você pode pular qualquer pergunta, fazer uma pausa ou voltar depois. Se algo trouxer desconforto, pare, olhe ao redor, sinta os pés no chão e procure alguém de confiança ou um profissional habilitado.

### O que é trauma?

Na linguagem do dia a dia, trauma se refere aos efeitos duradouros que experiências avassaladoras podem deixar numa pessoa. O que torna algo traumático não é só o acontecimento em si, mas como ele foi vivido: se a pessoa se sentiu impotente, sozinha ou em perigo, e se teve apoio depois. Duas pessoas podem passar por situações parecidas e ser afetadas de formas muito diferentes.

O trauma pode vir de acontecimentos pontuais, como acidentes ou agressões, ou de experiências contínuas, como negligência, violência em casa, discriminação, guerra ou instabilidade crônica. Os efeitos podem aparecer de muitas formas, como reações intensas que parecem desproporcionais ao presente, dificuldade de confiar, entorpecimento ou um estado de alerta constante.

### Relacionar-se como se houvesse histórias invisíveis

O coração de uma abordagem informada sobre trauma é simples: relacionar-se com as pessoas como se pudessem existir histórias importantes que não vemos, sem diagnosticar ninguém. Normalmente você não tem como saber o que alguém viveu. A pessoa que se assusta quando você levanta a voz, que precisa sentar perto da porta ou que fica em silêncio quando os planos mudam de repente pode estar respondendo a experiências das quais você não sabe nada.

Estar informado sobre trauma não significa supor que todo mundo é traumatizado, perguntar às pessoas sobre o passado delas ou rotular o comportamento de alguém. Significa trocar a pergunta "O que há de errado com você?" por "O que pode ter acontecido com você?" e, de forma ainda mais prática, "O que poderia ajudar você a se sentir mais seguro agora?"

### Prática: percebendo suposições

Nos próximos dias, preste atenção com delicadeza aos momentos em que o comportamento de alguém surpreende ou frustra você:

- Perceba a sua primeira interpretação: "Ele é grosso", "Ela está exagerando", "É uma pessoa difícil".
- Pare e pergunte: "O que mais pode estar acontecendo com essa pessoa que eu não consigo ver?"
- Pense em uma pequena coisa que poderia tornar a interação mais segura ou previsível para ela.
- Observe como essa mudança afeta o seu próprio corpo e o seu tom.

Você não precisa adivinhar a história de ninguém. A prática é simplesmente deixar espaço para a possibilidade de que exista mais na história.`,
        prompt: 'Pense numa vez em que alguém reagiu de um jeito que surpreendeu você. Como a sua resposta poderia mudar se você supusesse que havia uma história que não podia ver?'
      }
    },
    {
      id: 'les_tip_2',
      slug: 'the-core-principles',
      duration: 20,
      sort: 2,
      en: {
        title: 'The Core Principles',
        content: `### A shared language

Trauma-informed approaches have been developed across health care, schools, social services, and communities. One widely cited framework from the U.S. Substance Abuse and Mental Health Services Administration (SAMHSA) describes six principles: safety; trustworthiness and transparency; peer support; collaboration and mutuality; empowerment, voice, and choice; and attention to cultural, historical, and gender issues.

The original KindWell workbook distills these into five everyday themes: **safety, choice, trust, collaboration, and dignity**. These are not rules to memorize. They are qualities you can bring into ordinary interactions, whether you are comforting a friend, running a meeting, or parenting a teenager.

### Safety

Safety means both physical and emotional safety. People tend to feel safer when things are predictable, when they know what is going to happen, and when they can see a way out if they need one. Emotional safety includes not being mocked, shamed, or pressured.

### Choice

Overwhelming experiences often involve a loss of control. Offering real choices, even small ones, helps restore a sense of agency. "Would you like to talk here or go for a walk?" "Do you want advice, or do you just want me to listen?"

### Trust

Trust is built through transparency and follow-through: explaining what you are doing and why, keeping promises, and being honest when you cannot help. For people whose trust has been broken, consistency matters more than grand gestures.

### Collaboration

Collaboration means doing things with people rather than to them or for them. It honors the other person as the expert on their own life. Instead of deciding what someone needs, you ask and work it out together.

### Dignity

Dignity means treating every person as whole and worthy of respect, regardless of their behavior, circumstances, or history. It shows up in language, tone, privacy, and in not reducing someone to their worst moment. Dignity also includes respecting differences in culture, identity, and background, which shape how people experience safety and harm.

### Practice: a principle check

Think about one setting where you regularly spend time with others: your home, workplace, a volunteer role, or a friend group.

- Read through the five principles slowly.
- For each, ask: "How well does this setting reflect this principle right now?"
- Notice which principle feels strongest and which needs more attention.
- Choose one small, specific thing you could do this week to strengthen the weaker principle.

For example, if choice is missing, you might start asking, "Would you prefer...?" before making decisions that affect others.`,
        prompt: 'Of safety, choice, trust, collaboration, and dignity, which core principle needs more attention in your relationships or community right now?'
      },
      es: {
        title: 'Los principios centrales',
        content: `### Un lenguaje compartido

Los enfoques informados sobre el trauma se han desarrollado en la salud, la educación, los servicios sociales y las comunidades. Un marco muy citado, elaborado por la Administración de Servicios de Salud Mental y Abuso de Sustancias de Estados Unidos (SAMHSA, por sus siglas en inglés), describe seis principios: seguridad; confiabilidad y transparencia; apoyo entre pares; colaboración y reciprocidad; empoderamiento, voz y elección; y atención a las cuestiones culturales, históricas y de género.

El cuaderno original de KindWell los resume en cinco ejes cotidianos: **seguridad, elección, confianza, colaboración y dignidad**. No son reglas para memorizar. Son cualidades que puedes llevar a las interacciones comunes, ya sea al consolar a una amiga, al coordinar una reunión o al criar a un adolescente.

### Seguridad

La seguridad incluye lo físico y lo emocional. Las personas suelen sentirse más seguras cuando las cosas son previsibles, cuando saben qué va a pasar y cuando pueden ver una salida si la necesitan. La seguridad emocional incluye no recibir burlas, humillaciones ni presiones.

### Elección

Las experiencias abrumadoras muchas veces implican una pérdida de control. Ofrecer opciones reales, aunque sean pequeñas, ayuda a recuperar la sensación de poder decidir. "¿Prefieres que hablemos aquí o salimos a caminar?". "¿Quieres un consejo o prefieres que solo te escuche?".

### Confianza

La confianza se construye con transparencia y coherencia: explicar lo que haces y por qué, cumplir lo que prometes y ser honesto cuando no puedes ayudar. Para las personas cuya confianza fue quebrada, la constancia importa más que los grandes gestos.

### Colaboración

Colaborar significa hacer las cosas con las personas, no sobre ellas ni en su lugar. Reconoce a la otra persona como quien más sabe de su propia vida. En lugar de decidir qué necesita alguien, le preguntas y lo resuelven juntos.

### Dignidad

La dignidad significa tratar a cada persona como alguien completo y digno de respeto, más allá de su conducta, sus circunstancias o su historia. Se nota en el lenguaje, el tono, la privacidad y en no reducir a nadie a su peor momento. La dignidad también incluye respetar las diferencias de cultura, identidad y origen, que influyen en cómo las personas viven la seguridad y el daño.

### Práctica: revisar los principios

Piensa en un ámbito donde pasas tiempo con otras personas con regularidad: tu casa, tu trabajo, un voluntariado o un grupo de amistades.

- Lee los cinco principios con calma.
- Para cada uno, pregúntate: "¿Qué tan presente está este principio en este ámbito hoy?".
- Observa cuál se siente más fuerte y cuál necesita más atención.
- Elige algo pequeño y concreto que podrías hacer esta semana para fortalecer el más débil.

Por ejemplo, si falta la elección, podrías empezar a preguntar "¿Qué prefieres...?" antes de tomar decisiones que afectan a otras personas.`,
        prompt: 'Entre seguridad, elección, confianza, colaboración y dignidad, ¿qué principio necesita más atención hoy en tus relaciones o en tu comunidad?'
      },
      'pt-BR': {
        title: 'Os princípios centrais',
        content: `### Uma linguagem compartilhada

Abordagens informadas sobre trauma foram desenvolvidas na saúde, nas escolas, nos serviços sociais e nas comunidades. Um referencial muito citado, da Administração de Serviços de Saúde Mental e Abuso de Substâncias dos Estados Unidos (SAMHSA, na sigla em inglês), descreve seis princípios: segurança; confiabilidade e transparência; apoio entre pares; colaboração e reciprocidade; empoderamento, voz e escolha; e atenção às questões culturais, históricas e de gênero.

O caderno original da KindWell resume esses princípios em cinco eixos do dia a dia: **segurança, escolha, confiança, colaboração e dignidade**. Não são regras para decorar. São qualidades que você pode levar para as interações comuns, seja ao consolar um amigo, conduzir uma reunião ou criar um adolescente.

### Segurança

Segurança inclui o físico e o emocional. As pessoas costumam se sentir mais seguras quando as coisas são previsíveis, quando sabem o que vai acontecer e quando conseguem ver uma saída caso precisem. A segurança emocional inclui não ser ridicularizado, envergonhado ou pressionado.

### Escolha

Experiências avassaladoras muitas vezes envolvem perda de controle. Oferecer escolhas reais, mesmo pequenas, ajuda a devolver a sensação de poder decidir. "Você prefere conversar aqui ou dar uma volta?" "Você quer um conselho ou prefere que eu só escute?"

### Confiança

A confiança é construída com transparência e coerência: explicar o que você está fazendo e por quê, cumprir o que promete e ser honesto quando não puder ajudar. Para pessoas que tiveram a confiança quebrada, a constância importa mais do que grandes gestos.

### Colaboração

Colaborar significa fazer as coisas com as pessoas, e não para elas ou no lugar delas. É reconhecer a outra pessoa como quem mais entende da própria vida. Em vez de decidir do que alguém precisa, você pergunta e resolvem juntos.

### Dignidade

Dignidade significa tratar cada pessoa como alguém inteiro e digno de respeito, independentemente do comportamento, das circunstâncias ou da história dela. Aparece na linguagem, no tom, na privacidade e em não reduzir ninguém ao seu pior momento. A dignidade também inclui respeitar diferenças de cultura, identidade e origem, que influenciam como as pessoas vivem a segurança e o dano.

### Prática: checando os princípios

Pense num ambiente em que você convive com outras pessoas regularmente: a sua casa, o trabalho, um voluntariado ou um grupo de amigos.

- Leia os cinco princípios com calma.
- Para cada um, pergunte: "O quanto esse ambiente reflete este princípio hoje?"
- Perceba qual princípio parece mais forte e qual precisa de mais atenção.
- Escolha algo pequeno e específico que você poderia fazer nesta semana para fortalecer o mais fraco.

Por exemplo, se falta escolha, você pode começar a perguntar "Você prefere...?" antes de tomar decisões que afetam outras pessoas.`,
        prompt: 'Entre segurança, escolha, confiança, colaboração e dignidade, qual princípio precisa de mais atenção nas suas relações ou na sua comunidade agora?'
      }
    },
    {
      id: 'les_tip_3',
      slug: 'starting-with-yourself',
      duration: 20,
      sort: 3,
      en: {
        title: 'Starting With Yourself',
        content: `### Presence begins inside

It can be tempting to approach this course as a set of skills to use on other people. But trauma-informed presence begins with how you relate to yourself. A calm, grounded person tends to help others feel calmer. An overwhelmed, reactive person, however well-meaning, can unintentionally add to someone else's distress.

This is not about being perfectly calm. No one is. It is about knowing yourself well enough to notice when you are becoming unsteady, and having a few ways to come back.

### Your own history matters

Many people who are drawn to supporting others have their own experiences of pain, loss, or trauma. That can be a source of deep empathy. It can also mean that other people's stories stir up your own memories and reactions. When that happens, it is not a failure. It is information.

You might notice that certain topics, tones of voice, or situations affect you more strongly than others. Knowing your own sensitivities helps you take care of yourself and make wise decisions about when you are able to support someone and when you need to step back or refer them elsewhere.

### Signs you are becoming unsteady

Everyone's signals are different, but common ones include:

- A racing heart, shallow breathing, or tight chest.
- An urge to fix, rescue, or talk too much.
- Feeling irritated, defensive, or impatient.
- Going numb, blank, or checked out.
- Thinking about your own experience instead of listening.

### Practice: your steadiness map

Take some quiet time to write about yourself, not anyone else:

- **What helps me feel steady?** Examples: slow breathing, feeling my feet, a warm drink, being outside, a familiar song.
- **What are my early signs of becoming unsteady?** Physical, emotional, and behavioral.
- **What topics or situations tend to affect me strongly?** You do not need to write why.
- **Who supports me?** People, groups, or professionals you can turn to.
- **What is one thing I will do when I notice I'm unsteady?** Keep it simple and specific.

### Taking care of your own history

If this lesson brings up painful memories, please be gentle with yourself. You do not need to work through your history in order to be a kind presence for others. But if old experiences are affecting your daily life, reaching out to a licensed therapist can be a meaningful act of care, both for you and for the people you love. If you ever feel unsafe or overwhelmed, contact your local emergency number or a crisis line such as 988 in the US.`,
        prompt: 'What helps you feel steady, and what are your early signs of becoming unsteady when you are near someone else\'s distress?'
      },
      es: {
        title: 'Empezar por ti',
        content: `### La presencia empieza por dentro

Puede ser tentador tomar este curso como un conjunto de habilidades para usar con otras personas. Pero una presencia informada sobre el trauma empieza por cómo te relacionas contigo. Una persona tranquila y centrada suele ayudar a que los demás se calmen. Una persona desbordada y reactiva, aunque tenga las mejores intenciones, puede sumar sin querer al malestar de otra.

No se trata de estar siempre en calma. Nadie lo está. Se trata de conocerte lo suficiente como para notar cuándo empiezas a perder estabilidad y tener algunas formas de volver.

### Tu propia historia importa

Muchas personas que sienten el llamado a acompañar a otras tienen sus propias experiencias de dolor, pérdida o trauma. Eso puede ser una fuente de empatía profunda. También puede significar que las historias de otras personas despierten tus propios recuerdos y reacciones. Cuando eso pasa, no es un fracaso. Es información.

Quizá notes que ciertos temas, tonos de voz o situaciones te afectan más que otros. Conocer tus propias sensibilidades te ayuda a cuidarte y a tomar decisiones sabias sobre cuándo puedes acompañar a alguien y cuándo necesitas dar un paso atrás o derivarlo a otro lugar.

### Señales de que empiezas a perder estabilidad

Las señales de cada persona son distintas, pero algunas comunes son:

- El corazón acelerado, la respiración superficial o el pecho apretado.
- Las ganas de arreglar, rescatar o hablar de más.
- Sentir irritación, ponerte a la defensiva o perder la paciencia.
- Quedarte en blanco, entumecido o desconectado.
- Pensar en tu propia experiencia en lugar de escuchar.

### Práctica: tu mapa de estabilidad

Tómate un rato tranquilo para escribir sobre ti, no sobre nadie más:

- **¿Qué me ayuda a sentirme estable?** Por ejemplo: respirar lento, sentir los pies, una bebida caliente, estar al aire libre, una canción conocida.
- **¿Cuáles son mis primeras señales de pérdida de estabilidad?** Físicas, emocionales y de conducta.
- **¿Qué temas o situaciones suelen afectarme mucho?** No necesitas escribir por qué.
- **¿Quién me apoya?** Personas, grupos o profesionales a los que puedo recurrir.
- **¿Qué haré cuando note que pierdo estabilidad?** Algo simple y específico.

### Cuidar tu propia historia

Si esta lección despierta recuerdos dolorosos, trátate con suavidad. No necesitas resolver tu historia para ser una presencia amable para otras personas. Pero si experiencias pasadas están afectando tu vida diaria, buscar a un terapeuta con licencia puede ser un gesto de cuidado significativo, para ti y para quienes amas. Si en algún momento te sientes en peligro o desbordado, comunícate con tu número local de emergencias o con una línea de crisis, como el 988 en Estados Unidos.`,
        prompt: '¿Qué te ayuda a sentirte estable y cuáles son tus primeras señales de pérdida de estabilidad cuando estás cerca del malestar de otra persona?'
      },
      'pt-BR': {
        title: 'Começando por você',
        content: `### A presença começa por dentro

Pode ser tentador encarar este curso como um conjunto de habilidades para usar com outras pessoas. Mas uma presença informada sobre trauma começa pela forma como você se relaciona consigo mesmo. Uma pessoa calma e centrada tende a ajudar os outros a se acalmarem. Uma pessoa sobrecarregada e reativa, mesmo com a melhor das intenções, pode sem querer aumentar o sofrimento de alguém.

Não se trata de estar perfeitamente calmo. Ninguém está. Trata-se de se conhecer o suficiente para perceber quando está perdendo a estabilidade e ter alguns jeitos de voltar.

### A sua própria história importa

Muitas pessoas que se sentem chamadas a apoiar os outros têm as próprias experiências de dor, perda ou trauma. Isso pode ser uma fonte de empatia profunda. Também pode significar que as histórias dos outros despertem as suas próprias lembranças e reações. Quando isso acontece, não é um fracasso. É informação.

Talvez você perceba que certos temas, tons de voz ou situações afetam você mais do que outros. Conhecer as suas sensibilidades ajuda a cuidar de si e a tomar decisões sábias sobre quando você consegue apoiar alguém e quando precisa dar um passo atrás ou encaminhar a pessoa para outro lugar.

### Sinais de que você está perdendo a estabilidade

Os sinais de cada um são diferentes, mas alguns comuns são:

- Coração acelerado, respiração curta ou peito apertado.
- Vontade de consertar, resgatar ou falar demais.
- Sentir irritação, ficar na defensiva ou perder a paciência.
- Ficar entorpecido, em branco ou desligado.
- Pensar na sua própria experiência em vez de escutar.

### Prática: o seu mapa de estabilidade

Reserve um tempo tranquilo para escrever sobre você, e não sobre outra pessoa:

- **O que me ajuda a me sentir estável?** Por exemplo: respirar devagar, sentir os pés, uma bebida quente, estar ao ar livre, uma música conhecida.
- **Quais são os meus primeiros sinais de perda de estabilidade?** Físicos, emocionais e de comportamento.
- **Que temas ou situações costumam me afetar muito?** Você não precisa escrever o porquê.
- **Quem me apoia?** Pessoas, grupos ou profissionais que posso procurar.
- **O que vou fazer quando perceber que estou perdendo a estabilidade?** Algo simples e específico.

### Cuidando da sua própria história

Se esta lição trouxer lembranças dolorosas, seja gentil consigo. Você não precisa resolver a sua história para ser uma presença acolhedora para os outros. Mas, se experiências antigas estiverem afetando o seu dia a dia, procurar um psicólogo ou terapeuta habilitado pode ser um gesto significativo de cuidado, com você e com quem você ama. Se em algum momento você se sentir em risco ou sobrecarregado, procure o número de emergência local ou uma linha de apoio em crise, como o 988 nos Estados Unidos.`,
        prompt: 'O que ajuda você a se sentir estável, e quais são os seus primeiros sinais de perda de estabilidade quando está perto do sofrimento de outra pessoa?'
      }
    }
  ]
};

const MOD_TIP_2 = {
  id: 'mod_tip_2',
  slug: 'safety-choice-and-trust',
  sort: 2,
  en: { title: 'Safety, Choice & Trust', description: 'Making things predictable, offering real options, respecting no, and building trust through follow-through.' },
  es: { title: 'Seguridad, elección y confianza', description: 'Hacer las cosas previsibles, ofrecer opciones reales, respetar el no y construir confianza con coherencia.' },
  'pt-BR': { title: 'Segurança, escolha e confiança', description: 'Tornando as coisas previsíveis, oferecendo escolhas reais, respeitando o não e construindo confiança com coerência.' },
  lessons: [
    {
      id: 'les_tip_4',
      slug: 'safety-and-predictability',
      duration: 20,
      sort: 1,
      en: {
        title: 'Safety and Predictability',
        content: `### Why surprise can feel threatening

For many people, especially those who have lived through frightening or chaotic experiences, unexpected changes can feel much bigger than they look from the outside. A sudden knock on the door, a plan changed at the last minute, a raised voice in the next room, or being touched without warning can set off an alarm in the body before the mind has time to think.

This is not overreaction in the ordinary sense. A nervous system that has learned the world can be dangerous tends to scan for threat and respond quickly. Predictability gives that nervous system a chance to settle.

### Explain what will happen

One of the simplest trauma-informed habits is to explain what will happen before it happens. This applies to everyday life as much as to formal settings:

- "I'm going to close the door so we can talk privately. Is that okay, or would you like it open?"
- "We'll talk for about twenty minutes, and then I need to pick up my son."
- "I'm going to reach over and get the blanket behind you."
- "The plan changed. Here's what's happening now and what stays the same."

These small statements reduce unnecessary surprise. They also communicate respect: you are treating the other person as someone who deserves to know what is going on.

### Make exits and choices visible

People tend to feel safer when they know they can leave, pause, or say no. In practice, this might mean:

- Letting someone sit where they can see the door.
- Saying clearly, "You can stop at any time," and meaning it.
- Keeping gatherings flexible so people can step out without explanation.
- Not blocking doorways or standing over someone who is seated.

Visible exits do not mean people will use them. Often, just knowing they are there makes it possible to stay.

### Environment matters

Physical surroundings affect how safe people feel. Harsh lighting, loud noise, crowded rooms, and chaotic spaces can all increase stress. Where you have influence, consider softer light, quieter spaces, and a calm pace.

### Practice: reducing surprise

Over the next week, choose one setting where you interact with others: home, work, or community.

- Notice moments when someone might be caught off guard by what you do or by a change in plans.
- Before acting, try naming what you are about to do in one short sentence.
- Where possible, point out exits, breaks, or ways to opt out.
- Notice how people respond, and how it feels for you to slow down in this way.

It can feel awkward at first to narrate ordinary actions. Over time, it tends to become a natural expression of care.`,
        prompt: 'In your home, work, or community, how could you reduce unnecessary surprise for the people around you?'
      },
      es: {
        title: 'Seguridad y previsibilidad',
        content: `### Por qué la sorpresa puede sentirse como una amenaza

Para muchas personas, sobre todo para quienes vivieron experiencias aterradoras o caóticas, los cambios inesperados pueden sentirse mucho más grandes de lo que parecen desde afuera. Un golpe repentino en la puerta, un plan que cambia a último momento, una voz fuerte en la habitación de al lado o que alguien te toque sin avisar pueden encender una alarma en el cuerpo antes de que la mente tenga tiempo de pensar.

No es exagerar en el sentido habitual. Un sistema nervioso que aprendió que el mundo puede ser peligroso tiende a buscar amenazas y a responder rápido. La previsibilidad le da a ese sistema nervioso la oportunidad de calmarse.

### Explicar lo que va a pasar

Uno de los hábitos más sencillos de una presencia informada sobre el trauma es explicar lo que va a pasar antes de que pase. Esto vale tanto para la vida cotidiana como para los ámbitos formales:

- "Voy a cerrar la puerta para que podamos hablar en privado. ¿Te parece bien o prefieres que quede abierta?".
- "Vamos a hablar unos veinte minutos y después tengo que buscar a mi hijo".
- "Voy a estirarme para agarrar la manta que está detrás de ti".
- "Cambió el plan. Esto es lo que va a pasar ahora y esto es lo que sigue igual".

Estas frases pequeñas reducen las sorpresas innecesarias. También transmiten respeto: tratas a la otra persona como alguien que merece saber qué está pasando.

### Hacer visibles las salidas y las opciones

Las personas suelen sentirse más seguras cuando saben que pueden irse, hacer una pausa o decir que no. En la práctica, esto puede significar:

- Permitir que alguien se siente donde pueda ver la puerta.
- Decir con claridad "Puedes parar cuando quieras", y decirlo en serio.
- Mantener los encuentros flexibles para que las personas puedan salir sin dar explicaciones.
- No bloquear las puertas ni quedarte de pie encima de alguien que está sentado.

Que las salidas sean visibles no significa que las personas vayan a usarlas. Muchas veces, solo saber que existen es lo que hace posible quedarse.

### El entorno importa

El entorno físico influye en cuánta seguridad sienten las personas. La luz muy intensa, el ruido fuerte, los lugares llenos de gente y los espacios caóticos pueden aumentar el estrés. Donde tengas influencia, considera una luz más suave, espacios más silenciosos y un ritmo tranquilo.

### Práctica: reducir las sorpresas

Durante la próxima semana, elige un ámbito donde te relacionas con otras personas: tu casa, tu trabajo o tu comunidad.

- Nota los momentos en que alguien podría quedar desprevenido por lo que haces o por un cambio de planes.
- Antes de actuar, prueba nombrar lo que estás por hacer en una frase breve.
- Cuando sea posible, señala las salidas, las pausas o las formas de no participar.
- Observa cómo responden las personas y cómo te sientes al bajar el ritmo de esta manera.

Al principio puede resultar incómodo narrar acciones comunes. Con el tiempo, suele convertirse en una expresión natural de cuidado.`,
        prompt: 'En tu casa, tu trabajo o tu comunidad, ¿cómo podrías reducir las sorpresas innecesarias para las personas que te rodean?'
      },
      'pt-BR': {
        title: 'Segurança e previsibilidade',
        content: `### Por que a surpresa pode parecer ameaçadora

Para muitas pessoas, especialmente quem viveu experiências assustadoras ou caóticas, mudanças inesperadas podem parecer muito maiores do que parecem de fora. Uma batida repentina na porta, um plano que muda em cima da hora, uma voz alta no cômodo ao lado ou ser tocado sem aviso podem disparar um alarme no corpo antes que a mente tenha tempo de pensar.

Isso não é exagero no sentido comum. Um sistema nervoso que aprendeu que o mundo pode ser perigoso tende a procurar ameaças e a reagir rápido. A previsibilidade dá a esse sistema nervoso a chance de se acalmar.

### Explique o que vai acontecer

Um dos hábitos mais simples de uma presença informada sobre trauma é explicar o que vai acontecer antes que aconteça. Isso vale tanto para a vida cotidiana quanto para ambientes formais:

- "Vou fechar a porta para a gente conversar com privacidade. Tudo bem, ou você prefere que fique aberta?"
- "Vamos conversar por uns vinte minutos, e depois preciso buscar meu filho."
- "Vou me esticar para pegar o cobertor que está atrás de você."
- "O plano mudou. Isto é o que vai acontecer agora, e isto continua igual."

Essas pequenas frases reduzem surpresas desnecessárias. Também comunicam respeito: você está tratando a outra pessoa como alguém que merece saber o que está acontecendo.

### Torne visíveis as saídas e as escolhas

As pessoas costumam se sentir mais seguras quando sabem que podem sair, fazer uma pausa ou dizer não. Na prática, isso pode significar:

- Deixar alguém sentar onde consiga ver a porta.
- Dizer com clareza "Você pode parar quando quiser", e falar sério.
- Manter os encontros flexíveis para que as pessoas possam sair sem precisar se explicar.
- Não bloquear portas nem ficar de pé em cima de alguém que está sentado.

Saídas visíveis não significam que as pessoas vão usá-las. Muitas vezes, só saber que elas existem é o que torna possível ficar.

### O ambiente importa

O ambiente físico influencia o quanto as pessoas se sentem seguras. Luz forte, barulho alto, lugares lotados e espaços caóticos podem aumentar o estresse. Onde você tiver influência, considere uma luz mais suave, espaços mais silenciosos e um ritmo tranquilo.

### Prática: reduzindo surpresas

Na próxima semana, escolha um ambiente em que você convive com outras pessoas: casa, trabalho ou comunidade.

- Perceba os momentos em que alguém poderia ser pego de surpresa pelo que você faz ou por uma mudança de planos.
- Antes de agir, experimente dizer o que vai fazer numa frase curta.
- Quando possível, aponte saídas, pausas ou formas de não participar.
- Observe como as pessoas respondem e como é para você desacelerar desse jeito.

No começo, pode parecer estranho narrar ações comuns. Com o tempo, isso tende a virar uma expressão natural de cuidado.`,
        prompt: 'Na sua casa, no trabalho ou na comunidade, como você poderia reduzir surpresas desnecessárias para as pessoas ao seu redor?'
      }
    },
    {
      id: 'les_tip_5',
      slug: 'choice-and-consent',
      duration: 20,
      sort: 2,
      en: {
        title: 'Choice and Consent',
        content: `### Restoring a sense of control

Many overwhelming experiences share a common thread: the person had little or no control over what happened. That is one reason why having choices, even small ones, can feel so important for people afterward. Offering real options and respecting "no" helps rebuild a sense of agency that may have been taken away.

### Real options, not pretend ones

A genuine choice is one where every option is acceptable to you and where the other person's answer will actually shape what happens. Compare:

- "You're coming to dinner, right?" (a statement disguised as a question)
- "We'd love to have you at dinner. No pressure either way. Would you like to come?"

Or:

- "Let's talk about what happened." (a decision already made)
- "I'm here if you want to talk about what happened. We can also just sit together or do something else."

Pretend choices, where only one answer is really allowed, can feel worse than no choice at all, because they add confusion to pressure.

### Everyday consent

Consent is not only about major decisions. It shows up in countless small moments:

- Asking before hugging or touching someone: "Would a hug help?"
- Asking before giving advice: "Do you want ideas, or would you rather I just listen?"
- Asking before sharing someone's story with others.
- Checking in during a hard conversation: "Is this okay to keep talking about?"

Consent is also ongoing. Someone who said yes a moment ago can change their mind, and that is okay.

### Respecting no

For many people, especially those who have been hurt, saying no is difficult and sometimes risky. When someone does say no, how you respond teaches them whether it is safe to do so again. A trauma-informed response to "no" is simple: accept it without sulking, arguing, guilt-tripping, or asking for a long explanation. "Okay, thanks for letting me know" is often enough.

It is also worth watching for quieter signs of no: hesitation, going silent, looking away, or a flat "I guess." When you notice these, you can gently check in: "It sounds like you might not be sure. It's completely fine to say no."

### Practice: adding a genuine choice

Think of a routine interaction at home, work, or in your community where decisions are usually made for others:

- Identify one decision that could reasonably include the other person's input.
- Write two or three options that would all be genuinely acceptable to you.
- Practice offering the choice in a warm, low-pressure way.
- Notice how the other person responds, and whether anything changes in the interaction.

Small choices add up. Over time, they communicate: "You have a say here."`,
        prompt: 'Where in your daily life could you add a genuine choice for someone, and how would you respond gracefully if they said no?'
      },
      es: {
        title: 'Elección y consentimiento',
        content: `### Recuperar la sensación de control

Muchas experiencias abrumadoras tienen algo en común: la persona tuvo poco o ningún control sobre lo que pasó. Esa es una de las razones por las que tener opciones, aunque sean pequeñas, puede ser tan importante después. Ofrecer opciones reales y respetar el "no" ayuda a reconstruir una capacidad de decidir que quizá fue arrebatada.

### Opciones reales, no aparentes

Una elección genuina es aquella en la que todas las opciones te resultan aceptables y la respuesta de la otra persona realmente define lo que va a pasar. Compara:

- "Vienes a cenar, ¿no?" (una afirmación disfrazada de pregunta)
- "Nos encantaría que vinieras a cenar. Sin ninguna presión. ¿Te gustaría venir?"

O bien:

- "Hablemos de lo que pasó". (una decisión ya tomada)
- "Estoy aquí si quieres hablar de lo que pasó. También podemos simplemente acompañarnos en silencio o hacer otra cosa".

Las opciones aparentes, en las que en realidad solo se permite una respuesta, pueden sentirse peor que no tener opción, porque suman confusión a la presión.

### El consentimiento cotidiano

El consentimiento no se trata solo de grandes decisiones. Aparece en muchísimos momentos pequeños:

- Preguntar antes de abrazar o tocar a alguien: "¿Te ayudaría un abrazo?".
- Preguntar antes de dar un consejo: "¿Quieres ideas o prefieres que solo te escuche?".
- Preguntar antes de contarle a otras personas la historia de alguien.
- Chequear durante una conversación difícil: "¿Está bien seguir hablando de esto?".

El consentimiento también es continuo. Alguien que dijo que sí hace un momento puede cambiar de opinión, y está bien.

### Respetar el no

Para muchas personas, sobre todo quienes fueron lastimadas, decir que no es difícil y a veces riesgoso. Cuando alguien dice que no, la forma en que respondes le enseña si es seguro volver a hacerlo. Una respuesta informada sobre el trauma ante un "no" es sencilla: aceptarlo sin enojarte, discutir, hacer sentir culpa ni pedir una larga explicación. "Está bien, gracias por decírmelo" suele ser suficiente.

También vale la pena prestar atención a formas más silenciosas del no: dudar, quedarse callado, desviar la mirada o un "supongo" sin energía. Cuando lo notes, puedes preguntar con suavidad: "Parece que no estás del todo seguro. Está perfectamente bien decir que no".

### Práctica: sumar una elección genuina

Piensa en una interacción habitual en tu casa, tu trabajo o tu comunidad en la que las decisiones suelen tomarse por otras personas:

- Identifica una decisión que razonablemente podría incluir la opinión de la otra persona.
- Escribe dos o tres opciones que te resulten genuinamente aceptables.
- Practica ofrecer la elección de manera cálida y sin presión.
- Observa cómo responde la otra persona y si algo cambia en la interacción.

Las pequeñas elecciones se van sumando. Con el tiempo, comunican: "Aquí tu voz cuenta".`,
        prompt: '¿En qué parte de tu vida cotidiana podrías sumar una elección genuina para alguien y cómo responderías con serenidad si te dijera que no?'
      },
      'pt-BR': {
        title: 'Escolha e consentimento',
        content: `### Devolvendo a sensação de controle

Muitas experiências avassaladoras têm algo em comum: a pessoa teve pouco ou nenhum controle sobre o que aconteceu. Esse é um dos motivos pelos quais ter escolhas, mesmo pequenas, pode ser tão importante depois. Oferecer opções reais e respeitar o "não" ajuda a reconstruir uma capacidade de decidir que talvez tenha sido tirada.

### Escolhas reais, não de fachada

Uma escolha genuína é aquela em que todas as opções são aceitáveis para você e em que a resposta da outra pessoa realmente define o que vai acontecer. Compare:

- "Você vem jantar, né?" (uma afirmação disfarçada de pergunta)
- "A gente adoraria ter você no jantar. Sem pressão nenhuma. Você gostaria de vir?"

Ou:

- "Vamos conversar sobre o que aconteceu." (uma decisão já tomada)
- "Estou aqui se você quiser conversar sobre o que aconteceu. A gente também pode só ficar junto ou fazer outra coisa."

Escolhas de fachada, em que só uma resposta é realmente permitida, podem ser piores do que nenhuma escolha, porque somam confusão à pressão.

### Consentimento no dia a dia

Consentimento não é só sobre grandes decisões. Ele aparece em inúmeros momentos pequenos:

- Perguntar antes de abraçar ou tocar alguém: "Um abraço ajudaria?"
- Perguntar antes de dar conselho: "Você quer ideias ou prefere que eu só escute?"
- Perguntar antes de contar a história de alguém para outras pessoas.
- Checar durante uma conversa difícil: "Tudo bem continuar falando sobre isso?"

O consentimento também é contínuo. Alguém que disse sim há pouco pode mudar de ideia, e tudo bem.

### Respeitando o não

Para muitas pessoas, especialmente quem já foi ferido, dizer não é difícil e às vezes arriscado. Quando alguém diz não, a forma como você responde ensina se é seguro fazer isso de novo. Uma resposta informada sobre trauma diante de um "não" é simples: aceitar sem emburrar, discutir, fazer chantagem emocional ou pedir uma longa explicação. "Tudo bem, obrigado por me avisar" costuma ser suficiente.

Também vale observar formas mais silenciosas de não: hesitação, silêncio, olhar desviado ou um "acho que sim" sem energia. Quando perceber isso, você pode checar com delicadeza: "Parece que você não tem certeza. Está tudo bem dizer não."

### Prática: acrescentando uma escolha genuína

Pense numa interação rotineira em casa, no trabalho ou na comunidade em que as decisões costumam ser tomadas pelos outros:

- Identifique uma decisão que poderia, razoavelmente, incluir a opinião da outra pessoa.
- Escreva duas ou três opções que sejam genuinamente aceitáveis para você.
- Pratique oferecer a escolha de forma calorosa e sem pressão.
- Observe como a outra pessoa responde e se algo muda na interação.

Pequenas escolhas se somam. Com o tempo, elas comunicam: "Aqui a sua voz conta."`,
        prompt: 'Em que parte do seu dia a dia você poderia acrescentar uma escolha genuína para alguém, e como responderia com tranquilidade se a pessoa dissesse não?'
      }
    },
    {
      id: 'les_tip_6',
      slug: 'trust-through-follow-through',
      duration: 20,
      sort: 3,
      en: {
        title: 'Trust Through Transparency and Follow-Through',
        content: `### Trust is built in small moments

For people whose trust has been broken, especially by those who were supposed to protect them, trust is rarely given all at once. It is built slowly, through many small experiences of someone being honest, consistent, and reliable. Grand promises matter far less than whether you show up when you said you would.

### Transparency

Transparency means being open about what you are doing and why. It includes:

- Explaining your reasons: "I'm asking because I want to make sure you have what you need, not because I'm checking up on you."
- Being honest about your limits: "I can listen tonight, but I'm not able to give advice about the legal side."
- Being clear about what you will and won't keep private. If there are situations where you would need to tell someone else, such as a risk of serious harm, it is kinder to say so upfront than to surprise someone later.
- Admitting when you do not know something.

Secrecy, vague answers, and hidden agendas tend to feel threatening to people who have been hurt, even when the intent is kind.

### Follow-through

Follow-through means doing what you said you would do. If you say you will call on Thursday, call on Thursday. If you cannot, let the person know before, not after. Small broken promises may seem minor to you but can confirm a painful belief for someone else: "People don't really mean it."

It also means being careful about what you promise in the first place. It is better to offer less and follow through than to offer a lot and disappear. "I can check in once this week" is more trustworthy than "I'll always be here for you" if you are not sure you can keep the second.

### Repairing when you slip

Everyone makes mistakes. You will forget things, say the wrong thing, or fall short. What matters is how you repair. A brief, honest acknowledgment, without excessive self-criticism or making the other person comfort you, often strengthens trust rather than damaging it: "I said I'd call yesterday and I didn't. I'm sorry. Is now still a good time?"

### Practice: a trust audit

Reflect on one relationship where you would like to be a more trustworthy presence:

- List any promises, small or large, you have made recently.
- Mark which ones you followed through on and which ones slipped.
- For any that slipped, consider whether a brief repair is needed.
- Think about one thing you could be more transparent about in this relationship.
- Choose one small, reliable commitment you are confident you can keep this week.

Trust is not about being perfect. It is about being honest and consistent enough that people can predict how you will show up.`,
        prompt: 'In one important relationship, how could you build trust through clearer transparency or more reliable follow-through?'
      },
      es: {
        title: 'Confianza a través de la transparencia y la coherencia',
        content: `### La confianza se construye en momentos pequeños

Para las personas cuya confianza fue quebrada, sobre todo por quienes debían protegerlas, la confianza rara vez se entrega de una sola vez. Se construye despacio, a través de muchas pequeñas experiencias en las que alguien se muestra honesto, constante y confiable. Las grandes promesas importan mucho menos que el hecho de que aparezcas cuando dijiste que ibas a aparecer.

### Transparencia

La transparencia significa ser claro sobre lo que haces y por qué. Incluye:

- Explicar tus motivos: "Te pregunto porque quiero asegurarme de que tengas lo que necesitas, no porque te esté controlando".
- Ser honesto sobre tus límites: "Puedo escucharte esta noche, pero no puedo darte consejos sobre la parte legal".
- Ser claro sobre lo que vas a mantener en privado y lo que no. Si hay situaciones en las que tendrías que avisarle a alguien más, como un riesgo de daño grave, es más amable decirlo desde el principio que sorprender a la persona después.
- Reconocer cuando no sabes algo.

El secreto, las respuestas vagas y las intenciones ocultas suelen sentirse amenazantes para las personas que fueron lastimadas, incluso cuando la intención es buena.

### Coherencia

Ser coherente significa hacer lo que dijiste que ibas a hacer. Si dices que vas a llamar el jueves, llama el jueves. Si no puedes, avísale a la persona antes, no después. Las pequeñas promesas incumplidas pueden parecerte menores, pero para otra persona pueden confirmar una creencia dolorosa: "La gente no lo dice en serio".

También significa cuidar lo que prometes desde el principio. Es mejor ofrecer menos y cumplir que ofrecer mucho y desaparecer. "Puedo escribirte una vez esta semana" es más confiable que "Siempre voy a estar para ti" si no estás seguro de poder cumplir lo segundo.

### Reparar cuando fallas

Todas las personas nos equivocamos. Vas a olvidarte de cosas, decir algo desacertado o quedarte corto. Lo que importa es cómo reparas. Un reconocimiento breve y honesto, sin exceso de autocrítica y sin pedirle a la otra persona que te consuele, muchas veces fortalece la confianza en lugar de dañarla: "Dije que te iba a llamar ayer y no lo hice. Lo siento. ¿Ahora es un buen momento?".

### Práctica: revisar la confianza

Reflexiona sobre una relación en la que te gustaría ser una presencia más confiable:

- Anota las promesas, pequeñas o grandes, que hiciste últimamente.
- Marca cuáles cumpliste y cuáles quedaron pendientes.
- Para las que quedaron pendientes, considera si hace falta una breve reparación.
- Piensa en algo sobre lo que podrías ser más transparente en esta relación.
- Elige un compromiso pequeño y confiable que estés seguro de poder cumplir esta semana.

La confianza no se trata de ser perfecto. Se trata de ser lo bastante honesto y constante como para que las personas puedan anticipar cómo vas a estar presente.`,
        prompt: 'En una relación importante, ¿cómo podrías construir confianza con más transparencia o con más coherencia entre lo que dices y lo que haces?'
      },
      'pt-BR': {
        title: 'Confiança por meio da transparência e da coerência',
        content: `### A confiança é construída em momentos pequenos

Para pessoas que tiveram a confiança quebrada, especialmente por quem deveria protegê-las, a confiança raramente é dada de uma vez. Ela é construída devagar, por meio de muitas pequenas experiências em que alguém se mostra honesto, constante e confiável. Grandes promessas importam muito menos do que você aparecer quando disse que apareceria.

### Transparência

Transparência significa ser aberto sobre o que você está fazendo e por quê. Isso inclui:

- Explicar os seus motivos: "Estou perguntando porque quero ter certeza de que você tem o que precisa, e não para controlar você."
- Ser honesto sobre os seus limites: "Posso escutar você hoje à noite, mas não consigo dar conselhos sobre a parte jurídica."
- Ser claro sobre o que vai manter em sigilo e o que não vai. Se houver situações em que você precisaria contar para outra pessoa, como um risco de dano grave, é mais gentil dizer isso desde o início do que surpreender alguém depois.
- Admitir quando não sabe alguma coisa.

Segredos, respostas vagas e intenções escondidas costumam parecer ameaçadores para quem já foi ferido, mesmo quando a intenção é boa.

### Coerência

Ser coerente significa fazer o que você disse que faria. Se disse que vai ligar na quinta-feira, ligue na quinta-feira. Se não puder, avise antes, e não depois. Pequenas promessas quebradas podem parecer pouca coisa para você, mas para outra pessoa podem confirmar uma crença dolorosa: "As pessoas não falam sério."

Também significa ter cuidado com o que você promete, para começo de conversa. É melhor oferecer menos e cumprir do que oferecer muito e sumir. "Consigo mandar uma mensagem uma vez nesta semana" é mais confiável do que "Vou estar sempre aqui para você", se você não tem certeza de que consegue cumprir a segunda frase.

### Reparando quando você escorrega

Todo mundo erra. Você vai esquecer coisas, dizer algo inadequado ou ficar aquém. O que importa é como você repara. Um reconhecimento breve e honesto, sem excesso de autocrítica e sem fazer a outra pessoa consolar você, muitas vezes fortalece a confiança em vez de prejudicá-la: "Eu disse que ia ligar ontem e não liguei. Desculpa. Agora ainda é um bom momento?"

### Prática: revisando a confiança

Reflita sobre uma relação em que você gostaria de ser uma presença mais confiável:

- Liste as promessas, pequenas ou grandes, que você fez recentemente.
- Marque quais você cumpriu e quais ficaram pelo caminho.
- Para as que ficaram pelo caminho, considere se é necessária uma breve reparação.
- Pense em algo sobre o qual você poderia ser mais transparente nessa relação.
- Escolha um compromisso pequeno e confiável que você tenha certeza de que consegue cumprir nesta semana.

Confiança não é ser perfeito. É ser honesto e constante o bastante para que as pessoas consigam prever como você vai estar presente.`,
        prompt: 'Numa relação importante, como você poderia construir confiança com mais transparência ou com mais coerência entre o que diz e o que faz?'
      }
    }
  ]
};

const MOD_TIP_3 = {
  id: 'mod_tip_3',
  slug: 'steadiness-in-the-room',
  sort: 3,
  en: { title: 'Steadiness in the Room', description: 'Understanding the window of tolerance, offering co-regulation, and using language that preserves dignity.' },
  es: { title: 'Estabilidad en el encuentro', description: 'Comprender la ventana de tolerancia, ofrecer corregulación y usar un lenguaje que preserve la dignidad.' },
  'pt-BR': { title: 'Estabilidade no encontro', description: 'Entendendo a janela de tolerância, oferecendo corregulação e usando uma linguagem que preserva a dignidade.' },
  lessons: [
    {
      id: 'les_tip_7',
      slug: 'the-window-of-tolerance',
      duration: 20,
      sort: 1,
      en: {
        title: 'The Window of Tolerance',
        content: `### A helpful map of the nervous system

The "window of tolerance" is a term introduced by psychiatrist Dan Siegel and widely used in trauma-informed education. It describes the zone in which a person can experience stress and emotion while still being able to think, feel, and respond reasonably well. Inside the window, we may be upset, but we can still listen, make choices, and connect with others.

When stress pushes us outside the window, the nervous system tends to shift into one of two broad states.

### Above the window: hyperarousal

When we are pushed above the window, the body gears up for fight or flight. Signs may include:

- Racing heart, fast breathing, or feeling shaky.
- Anxiety, panic, anger, or feeling on edge.
- Racing thoughts or difficulty concentrating.
- Being easily startled or overwhelmed by noise and activity.

### Below the window: hypoarousal

When we are pushed below the window, the body may shut down or collapse. Signs may include:

- Feeling numb, flat, or far away.
- Exhaustion, heaviness, or difficulty moving.
- Going blank, spacing out, or feeling disconnected from the body.
- Difficulty speaking or responding.

Neither state is a choice or a character flaw. They are automatic protective responses. People with trauma histories may have a narrower window, meaning they are pushed outside it more easily, and it may take them longer to return.

### Why this matters for presence

When someone is outside their window, reasoning, advice, or problem-solving usually will not land. Their nervous system is focused on survival, not conversation. The most helpful thing is often to help them come back into the window first, through calm presence, slower pace, and orientation to the present, before trying to talk things through.

The same is true for you. If you are outside your own window, it is very hard to be a steady presence for anyone else.

### Practice: mapping your own window

Take a few minutes to reflect and write:

- **When I'm inside my window, I notice...** (for example: steady breathing, able to think, feel connected).
- **When I'm getting pushed above it, I notice...**
- **When I'm dropping below it, I notice...**
- **Things that widen my window:** sleep, food, movement, connection, time in nature, rest.
- **Things that narrow it:** stress, hunger, poor sleep, conflict, certain reminders.

Over the next week, check in with yourself a few times a day: "Where am I right now, inside, above, or below?" Simply noticing builds the awareness you will draw on when supporting others.`,
        prompt: 'What are your personal signs of being inside, above, or below your window of tolerance, and what helps you return?'
      },
      es: {
        title: 'La ventana de tolerancia',
        content: `### Un mapa útil del sistema nervioso

La "ventana de tolerancia" es un término propuesto por el psiquiatra Dan Siegel y muy utilizado en la educación sobre el trauma. Describe la zona en la que una persona puede experimentar estrés y emociones y, aun así, pensar, sentir y responder de una forma razonablemente adecuada. Dentro de la ventana podemos estar alterados, pero todavía podemos escuchar, tomar decisiones y conectar con los demás.

Cuando el estrés nos empuja fuera de la ventana, el sistema nervioso tiende a pasar a uno de dos estados generales.

### Por encima de la ventana: hiperactivación

Cuando nos empujan por encima de la ventana, el cuerpo se prepara para luchar o huir. Algunas señales pueden ser:

- El corazón acelerado, la respiración rápida o sentir temblores.
- Ansiedad, pánico, enojo o sensación de estar al límite.
- Pensamientos acelerados o dificultad para concentrarse.
- Sobresaltarse con facilidad o sentirse abrumado por el ruido y el movimiento.

### Por debajo de la ventana: hipoactivación

Cuando caemos por debajo de la ventana, el cuerpo puede apagarse o desplomarse. Algunas señales pueden ser:

- Sentirse entumecido, apagado o lejos.
- Agotamiento, pesadez o dificultad para moverse.
- Quedarse en blanco, perderse o sentirse desconectado del cuerpo.
- Dificultad para hablar o responder.

Ninguno de estos estados es una elección ni un defecto de carácter. Son respuestas automáticas de protección. Las personas con historias de trauma pueden tener una ventana más estrecha, es decir, pueden salir de ella con más facilidad y tardar más en volver.

### Por qué esto importa para acompañar

Cuando alguien está fuera de su ventana, los razonamientos, los consejos o la búsqueda de soluciones por lo general no llegan. Su sistema nervioso está enfocado en sobrevivir, no en conversar. Lo más útil suele ser ayudarle primero a volver a la ventana, con una presencia tranquila, un ritmo más lento y orientación al presente, antes de intentar hablar del tema.

Lo mismo vale para ti. Si estás fuera de tu propia ventana, es muy difícil ser una presencia estable para otra persona.

### Práctica: trazar tu propia ventana

Tómate unos minutos para reflexionar y escribir:

- **Cuando estoy dentro de mi ventana, noto...** (por ejemplo: respiración estable, capacidad de pensar, sensación de conexión).
- **Cuando me empujan por encima, noto...**
- **Cuando caigo por debajo, noto...**
- **Lo que amplía mi ventana:** dormir, comer, moverme, la conexión, el tiempo en la naturaleza, el descanso.
- **Lo que la estrecha:** el estrés, el hambre, dormir mal, los conflictos, ciertos recordatorios.

Durante la próxima semana, chequea contigo algunas veces al día: "¿Dónde estoy ahora: dentro, por encima o por debajo?". Solo notarlo construye la conciencia que vas a necesitar al acompañar a otras personas.`,
        prompt: '¿Cuáles son tus señales personales de estar dentro, por encima o por debajo de tu ventana de tolerancia y qué te ayuda a volver?'
      },
      'pt-BR': {
        title: 'A janela de tolerância',
        content: `### Um mapa útil do sistema nervoso

A "janela de tolerância" é um termo proposto pelo psiquiatra Dan Siegel e muito usado na educação sobre trauma. Ele descreve a zona em que uma pessoa consegue passar por estresse e emoções e, ainda assim, pensar, sentir e responder de forma razoavelmente adequada. Dentro da janela, podemos estar abalados, mas ainda conseguimos escutar, fazer escolhas e nos conectar com os outros.

Quando o estresse nos empurra para fora da janela, o sistema nervoso tende a entrar em um de dois estados gerais.

### Acima da janela: hiperexcitação

Quando somos empurrados para cima da janela, o corpo se prepara para lutar ou fugir. Alguns sinais podem ser:

- Coração acelerado, respiração rápida ou sensação de tremor.
- Ansiedade, pânico, raiva ou sensação de estar no limite.
- Pensamentos acelerados ou dificuldade de concentração.
- Levar sustos com facilidade ou se sentir sobrecarregado por barulho e movimento.

### Abaixo da janela: hipoexcitação

Quando caímos abaixo da janela, o corpo pode desligar ou desabar. Alguns sinais podem ser:

- Sentir-se entorpecido, apagado ou distante.
- Exaustão, peso ou dificuldade de se mover.
- Dar branco, se desligar ou se sentir desconectado do corpo.
- Dificuldade para falar ou responder.

Nenhum desses estados é uma escolha nem um defeito de caráter. São respostas automáticas de proteção. Pessoas com histórico de trauma podem ter uma janela mais estreita, ou seja, saem dela com mais facilidade e podem levar mais tempo para voltar.

### Por que isso importa para a presença

Quando alguém está fora da própria janela, argumentos, conselhos ou soluções geralmente não chegam. O sistema nervoso da pessoa está focado em sobreviver, não em conversar. O mais útil costuma ser ajudá-la primeiro a voltar para a janela, com uma presença calma, um ritmo mais lento e orientação para o presente, antes de tentar conversar sobre o assunto.

O mesmo vale para você. Se você estiver fora da sua própria janela, é muito difícil ser uma presença estável para outra pessoa.

### Prática: mapeando a sua janela

Reserve alguns minutos para refletir e escrever:

- **Quando estou dentro da minha janela, percebo...** (por exemplo: respiração estável, consigo pensar, me sinto conectado).
- **Quando estou sendo empurrado para cima, percebo...**
- **Quando estou caindo para baixo, percebo...**
- **O que amplia a minha janela:** sono, alimentação, movimento, conexão, tempo na natureza, descanso.
- **O que estreita a minha janela:** estresse, fome, sono ruim, conflitos, certos lembretes.

Na próxima semana, faça um check-in consigo algumas vezes ao dia: "Onde estou agora: dentro, acima ou abaixo?" Só perceber já constrói a consciência de que você vai precisar ao apoiar outras pessoas.`,
        prompt: 'Quais são os seus sinais pessoais de estar dentro, acima ou abaixo da sua janela de tolerância, e o que ajuda você a voltar?'
      }
    },
    {
      id: 'les_tip_8',
      slug: 'regulation-and-co-regulation',
      duration: 20,
      sort: 2,
      en: {
        title: 'Regulation and Co-Regulation',
        content: `### Nervous systems influence each other

Humans are social creatures, and our nervous systems are constantly picking up cues from the people around us. A calm voice, a relaxed posture, and an unhurried pace can help someone else settle. Tension, rushing, and raised voices can spread distress. This mutual influence is often called co-regulation.

Co-regulation is how infants first learn to calm down: through the steady presence of a caregiver. Adults continue to benefit from it throughout life. You cannot force someone to calm down, but you can offer a steadier presence that makes it easier for their nervous system to follow.

### Three core moves

The original KindWell workbook summarizes co-regulation in three simple actions: **slow the pace, reduce stimulation, and orient to the present.**

- **Slow the pace:** Speak more slowly and softly. Leave pauses. Move calmly. Resist the urge to fill every silence or rush toward solutions.
- **Reduce stimulation:** Where possible, lower noise, dim harsh lights, move to a quieter space, turn off screens, and limit the number of people involved.
- **Orient to the present:** Gently help attention come back to here and now. "We're in the kitchen. It's Tuesday afternoon. You're safe here with me right now." Inviting someone to notice their feet on the floor, the chair beneath them, or a few things they can see can help.

### Regulating yourself first

Co-regulation starts with your own state. Before responding to someone in distress, take a moment to check yourself: breathe out slowly, soften your shoulders, and feel your feet. You do not need to be perfectly calm. Just a little steadier than the moment around you is often enough.

### What tends not to help

When someone is overwhelmed, some common responses can unintentionally make things harder:

- Telling them to "calm down" or "relax."
- Asking a lot of questions quickly.
- Touching them without asking.
- Arguing about whether their reaction makes sense.
- Matching their intensity with your own.

### Practice: a steady presence rehearsal

Think of someone you care about who sometimes becomes overwhelmed. Then rehearse, in your mind or on paper:

- What will I notice in myself first, and how will I steady myself?
- What could I say, slowly and simply, to show I'm here? ("I'm here. We can take this slowly.")
- How could I reduce stimulation in that setting?
- What orienting phrase or invitation might feel comfortable for them?
- How will I know when they are back within their window and ready to talk?

### Safety comes first

Co-regulation is for ordinary distress. If someone is in danger, at risk of harming themselves or others, or experiencing a medical emergency, contact your local emergency number right away. For emotional crisis, a crisis line such as 988 in the US can also help.`,
        prompt: 'What helps you stay steady when you are near someone else\'s distress, and how could you slow the pace, reduce stimulation, or orient them to the present?'
      },
      es: {
        title: 'Regulación y corregulación',
        content: `### Los sistemas nerviosos se influyen entre sí

Los seres humanos somos sociales, y nuestro sistema nervioso capta todo el tiempo señales de las personas que nos rodean. Una voz tranquila, una postura relajada y un ritmo sin apuro pueden ayudar a que otra persona se calme. La tensión, la prisa y los gritos pueden contagiar el malestar. Esta influencia mutua suele llamarse corregulación.

La corregulación es la forma en que los bebés aprenden por primera vez a calmarse: a través de la presencia estable de quien los cuida. Los adultos seguimos beneficiándonos de ella durante toda la vida. No puedes obligar a nadie a calmarse, pero puedes ofrecer una presencia más estable que le facilite a su sistema nervioso seguirte.

### Tres movimientos centrales

El cuaderno original de KindWell resume la corregulación en tres acciones sencillas: **bajar el ritmo, reducir los estímulos y orientar al presente.**

- **Bajar el ritmo:** Habla más despacio y con suavidad. Deja pausas. Muévete con calma. Resiste las ganas de llenar cada silencio o de correr hacia las soluciones.
- **Reducir los estímulos:** Cuando sea posible, baja el ruido, atenúa las luces intensas, pasen a un lugar más tranquilo, apaga las pantallas y limita la cantidad de personas presentes.
- **Orientar al presente:** Ayuda con suavidad a que la atención vuelva al aquí y ahora. "Estamos en la cocina. Es martes por la tarde. Ahora estás a salvo aquí conmigo". Invitar a la persona a notar sus pies en el piso, la silla que la sostiene o algunas cosas que puede ver puede ayudar.

### Regularte primero

La corregulación empieza por tu propio estado. Antes de responder a alguien que está mal, tómate un momento para revisarte: exhala despacio, suelta los hombros y siente tus pies. No necesitas estar en calma perfecta. Muchas veces alcanza con estar un poco más estable que el momento que te rodea.

### Lo que no suele ayudar

Cuando alguien está desbordado, algunas respuestas comunes pueden, sin querer, empeorar las cosas:

- Decirle "cálmate" o "relájate".
- Hacerle muchas preguntas rápido.
- Tocarle sin preguntar.
- Discutir si su reacción tiene sentido o no.
- Igualar su intensidad con la tuya.

### Práctica: ensayar una presencia estable

Piensa en alguien que te importa y que a veces se desborda. Luego ensaya, mentalmente o por escrito:

- ¿Qué voy a notar primero en mí y cómo voy a estabilizarme?
- ¿Qué podría decir, despacio y con sencillez, para mostrar que estoy aquí? ("Estoy aquí. Podemos ir despacio").
- ¿Cómo podría reducir los estímulos en ese lugar?
- ¿Qué frase o invitación para orientarse al presente podría resultarle cómoda?
- ¿Cómo voy a darme cuenta de que volvió a su ventana y está en condiciones de hablar?

### La seguridad primero

La corregulación es para el malestar cotidiano. Si alguien está en peligro, corre el riesgo de hacerse daño o de dañar a otras personas, o atraviesa una emergencia médica, comunícate de inmediato con tu número local de emergencias. Ante una crisis emocional, una línea de crisis, como el 988 en Estados Unidos, también puede ayudar.`,
        prompt: '¿Qué te ayuda a mantener la estabilidad cuando estás cerca del malestar de otra persona y cómo podrías bajar el ritmo, reducir los estímulos u orientarla al presente?'
      },
      'pt-BR': {
        title: 'Regulação e corregulação',
        content: `### Sistemas nervosos se influenciam

Os seres humanos são sociais, e o nosso sistema nervoso capta o tempo todo sinais das pessoas ao redor. Uma voz calma, uma postura relaxada e um ritmo sem pressa podem ajudar outra pessoa a se acalmar. Tensão, pressa e vozes altas podem espalhar o sofrimento. Essa influência mútua costuma ser chamada de corregulação.

A corregulação é a forma como os bebês aprendem a se acalmar pela primeira vez: por meio da presença estável de quem cuida deles. Os adultos continuam se beneficiando disso a vida toda. Você não consegue obrigar ninguém a se acalmar, mas pode oferecer uma presença mais estável que facilite para o sistema nervoso da pessoa acompanhar.

### Três movimentos centrais

O caderno original da KindWell resume a corregulação em três ações simples: **desacelerar o ritmo, reduzir os estímulos e orientar para o presente.**

- **Desacelerar o ritmo:** Fale mais devagar e com suavidade. Deixe pausas. Mova-se com calma. Resista à vontade de preencher todo silêncio ou de correr para as soluções.
- **Reduzir os estímulos:** Quando possível, diminua o barulho, suavize luzes fortes, vá para um lugar mais tranquilo, desligue as telas e limite o número de pessoas presentes.
- **Orientar para o presente:** Ajude com delicadeza a atenção a voltar para o aqui e agora. "Estamos na cozinha. É terça à tarde. Agora você está em segurança aqui comigo." Convidar a pessoa a perceber os pés no chão, a cadeira que a sustenta ou algumas coisas que consegue ver pode ajudar.

### Regule-se primeiro

A corregulação começa pelo seu próprio estado. Antes de responder a alguém que está mal, tire um momento para checar a si mesmo: solte o ar devagar, relaxe os ombros e sinta os pés. Você não precisa estar perfeitamente calmo. Muitas vezes basta estar um pouco mais estável do que o momento ao redor.

### O que costuma não ajudar

Quando alguém está sobrecarregado, algumas respostas comuns podem, sem querer, piorar as coisas:

- Dizer "se acalma" ou "relaxa".
- Fazer muitas perguntas rápido.
- Tocar a pessoa sem perguntar.
- Discutir se a reação dela faz sentido.
- Igualar a intensidade dela com a sua.

### Prática: ensaiando uma presença estável

Pense em alguém de quem você gosta e que às vezes fica sobrecarregado. Depois, ensaie, na mente ou no papel:

- O que vou perceber primeiro em mim, e como vou me estabilizar?
- O que eu poderia dizer, devagar e de forma simples, para mostrar que estou aqui? ("Estou aqui. A gente pode ir devagar.")
- Como eu poderia reduzir os estímulos nesse ambiente?
- Que frase ou convite para se orientar no presente poderia ser confortável para essa pessoa?
- Como vou saber que ela voltou para a janela e está pronta para conversar?

### Segurança em primeiro lugar

A corregulação é para o sofrimento do dia a dia. Se alguém estiver em perigo, correndo risco de se machucar ou de machucar outras pessoas, ou passando por uma emergência médica, procure imediatamente o número de emergência local. Numa crise emocional, uma linha de apoio em crise, como o 988 nos Estados Unidos, também pode ajudar.`,
        prompt: 'O que ajuda você a se manter estável perto do sofrimento de outra pessoa, e como você poderia desacelerar o ritmo, reduzir os estímulos ou orientá-la para o presente?'
      }
    },
    {
      id: 'les_tip_9',
      slug: 'dignifying-language',
      duration: 20,
      sort: 3,
      en: {
        title: 'Dignifying Language',
        content: `### Words shape how people are seen

The words we use about people, both to their faces and behind their backs, shape how they are seen and how they see themselves. Labels like "crazy," "dramatic," "manipulative," "attention-seeking," or "a mess" reduce a whole person to a single behavior or moment. They also tend to make us less curious and less compassionate.

Dignifying language means describing behavior without reducing the person to it.

### Observations instead of judgments

One practical tool comes from Marshall Rosenberg's Nonviolent Communication: separating observation from evaluation. An observation describes what happened in terms a camera could record. A judgment adds a label or interpretation.

- Judgment: "She's so dramatic."
- Observation: "She cried and left the room when the plans changed."
- Judgment: "He's lazy."
- Observation: "He hasn't replied to the last three messages."
- Judgment: "They're being manipulative."
- Observation: "They asked for help several times today in different ways."

The observation does not excuse anything. It simply keeps the door open to understanding and to an appropriate response. It also makes it easier to talk with the person directly, since observations are less likely to provoke defensiveness.

### Person-first and person-respecting language

Many communities prefer language that puts the person first: "a person experiencing homelessness" rather than "a homeless person," or "someone living with an addiction" rather than "an addict." Preferences vary, and some communities prefer identity-first language. When in doubt, notice how people describe themselves, and follow their lead.

### Talking about people who are not present

Dignity includes how we talk about people when they are not in the room. Gossip, jokes at someone's expense, and sharing private details can erode trust and safety in any group. A useful guide is: "Would I be comfortable if this person heard exactly what I just said?"

### Language about yourself

The same principles apply to how you speak about yourself. "I'm such an idiot" is a judgment. "I forgot the appointment" is an observation. Speaking to yourself with dignity makes it easier to extend dignity to others.

### Practice: rewriting judgments

Over the next few days, notice judgments that come up, in your thoughts or speech, about others or yourself:

- Write down one judgment word or phrase you noticed.
- Rewrite it as an observation: what actually happened, specifically?
- Consider what need or feeling might be behind the behavior.
- Notice whether the observation changes how you feel toward the person.

This takes practice. Judgments are fast and automatic. Observations take a moment of slowing down, which is exactly the point.`,
        prompt: 'Rewrite one judgment you have made recently about someone, or yourself, as an observation. What changes when you do?'
      },
      es: {
        title: 'Un lenguaje que dignifica',
        content: `### Las palabras moldean cómo se ve a las personas

Las palabras que usamos sobre las personas, tanto en su presencia como a sus espaldas, moldean cómo se las ve y cómo se ven a sí mismas. Etiquetas como "loco", "exagerada", "manipulador", "busca atención" o "un desastre" reducen a una persona entera a una sola conducta o a un solo momento. Además, suelen volvernos menos curiosos y menos compasivos.

Un lenguaje que dignifica describe la conducta sin reducir a la persona a ella.

### Observaciones en lugar de juicios

Una herramienta práctica viene de la Comunicación No Violenta de Marshall Rosenberg: separar la observación de la evaluación. Una observación describe lo que pasó en términos que una cámara podría registrar. Un juicio agrega una etiqueta o una interpretación.

- Juicio: "Es muy dramática".
- Observación: "Lloró y salió de la habitación cuando cambiaron los planes".
- Juicio: "Es un vago".
- Observación: "No respondió los últimos tres mensajes".
- Juicio: "Está manipulando".
- Observación: "Pidió ayuda varias veces hoy de distintas maneras".

La observación no justifica nada. Simplemente mantiene abierta la puerta a la comprensión y a una respuesta adecuada. También facilita hablar directamente con la persona, porque las observaciones provocan menos actitudes defensivas.

### Un lenguaje que pone primero a la persona

Muchas comunidades prefieren un lenguaje que ponga primero a la persona: "una persona en situación de calle" en lugar de "un indigente", o "alguien que vive con una adicción" en lugar de "un adicto". Las preferencias varían, y algunas comunidades prefieren nombrar primero la identidad. Ante la duda, observa cómo se describen las personas a sí mismas y sigue su ejemplo.

### Hablar de quienes no están presentes

La dignidad incluye cómo hablamos de las personas cuando no están. Los chismes, las bromas a costa de alguien y compartir detalles privados pueden desgastar la confianza y la seguridad de cualquier grupo. Una guía útil es: "¿Me sentiría cómodo si esta persona escuchara exactamente lo que acabo de decir?".

### El lenguaje sobre ti

Los mismos principios valen para cómo hablas de ti. "Soy un tonto" es un juicio. "Me olvidé de la cita" es una observación. Hablarte con dignidad hace más fácil ofrecer dignidad a los demás.

### Práctica: reescribir los juicios

Durante los próximos días, nota los juicios que aparecen, en tus pensamientos o en lo que dices, sobre otras personas o sobre ti:

- Anota una palabra o frase de juicio que hayas notado.
- Reescríbela como una observación: ¿qué pasó concretamente?
- Considera qué necesidad o emoción podría haber detrás de esa conducta.
- Observa si la observación cambia lo que sientes hacia esa persona.

Esto requiere práctica. Los juicios son rápidos y automáticos. Las observaciones piden un momento para bajar el ritmo, y justamente de eso se trata.`,
        prompt: 'Reescribe como una observación un juicio que hayas hecho hace poco sobre alguien, o sobre ti. ¿Qué cambia cuando lo haces?'
      },
      'pt-BR': {
        title: 'Uma linguagem que dignifica',
        content: `### As palavras moldam como as pessoas são vistas

As palavras que usamos sobre as pessoas, na frente delas ou pelas costas, moldam como elas são vistas e como se veem. Rótulos como "louco", "dramática", "manipulador", "quer chamar atenção" ou "um caos" reduzem uma pessoa inteira a um único comportamento ou momento. Também tendem a nos deixar menos curiosos e menos compassivos.

Uma linguagem que dignifica descreve o comportamento sem reduzir a pessoa a ele.

### Observações em vez de julgamentos

Uma ferramenta prática vem da Comunicação Não Violenta, de Marshall Rosenberg: separar observação de avaliação. Uma observação descreve o que aconteceu em termos que uma câmera poderia registrar. Um julgamento acrescenta um rótulo ou uma interpretação.

- Julgamento: "Ela é muito dramática."
- Observação: "Ela chorou e saiu da sala quando os planos mudaram."
- Julgamento: "Ele é preguiçoso."
- Observação: "Ele não respondeu às últimas três mensagens."
- Julgamento: "Estão sendo manipuladores."
- Observação: "Pediram ajuda várias vezes hoje, de jeitos diferentes."

A observação não justifica nada. Ela simplesmente mantém a porta aberta para a compreensão e para uma resposta adequada. Também facilita conversar diretamente com a pessoa, já que observações provocam menos defensividade.

### Uma linguagem que coloca a pessoa em primeiro lugar

Muitas comunidades preferem uma linguagem que coloque a pessoa em primeiro lugar: "uma pessoa em situação de rua" em vez de "um mendigo", ou "alguém que convive com uma dependência" em vez de "um viciado". As preferências variam, e algumas comunidades preferem nomear primeiro a identidade. Na dúvida, observe como as pessoas descrevem a si mesmas e siga o exemplo delas.

### Falando de quem não está presente

A dignidade inclui como falamos das pessoas quando elas não estão na sala. Fofocas, piadas à custa de alguém e o compartilhamento de detalhes pessoais podem corroer a confiança e a segurança de qualquer grupo. Um guia útil é: "Eu ficaria à vontade se essa pessoa ouvisse exatamente o que eu acabei de dizer?"

### A linguagem sobre você

Os mesmos princípios valem para o jeito como você fala de si. "Eu sou um idiota" é um julgamento. "Esqueci a consulta" é uma observação. Falar consigo com dignidade torna mais fácil oferecer dignidade aos outros.

### Prática: reescrevendo julgamentos

Nos próximos dias, perceba os julgamentos que surgem, nos seus pensamentos ou na sua fala, sobre outras pessoas ou sobre você:

- Anote uma palavra ou frase de julgamento que você percebeu.
- Reescreva como observação: o que aconteceu, concretamente?
- Considere que necessidade ou sentimento pode estar por trás do comportamento.
- Perceba se a observação muda o que você sente em relação à pessoa.

Isso exige prática. Julgamentos são rápidos e automáticos. Observações pedem um momento de desaceleração, e é exatamente essa a ideia.`,
        prompt: 'Reescreva como observação um julgamento que você fez recentemente sobre alguém, ou sobre si mesmo. O que muda quando você faz isso?'
      }
    }
  ]
};

const MOD_TIP_4 = {
  id: 'mod_tip_4',
  slug: 'doing-no-harm-and-knowing-your-limits',
  sort: 4,
  en: { title: 'Doing No Harm & Knowing Your Limits', description: 'Avoiding re-traumatization, understanding scope and referral, and sustaining yourself over time.' },
  es: { title: 'No hacer daño y conocer tus límites', description: 'Evitar la retraumatización, comprender el alcance de tu rol y la derivación, y sostenerte a lo largo del tiempo.' },
  'pt-BR': { title: 'Não causar dano e conhecer os seus limites', description: 'Evitando a retraumatização, entendendo o alcance do seu papel e o encaminhamento, e cuidando de si ao longo do tempo.' },
  lessons: [
    {
      id: 'les_tip_10',
      slug: 'avoiding-re-traumatization',
      duration: 20,
      sort: 1,
      en: {
        title: 'Avoiding Re-Traumatization',
        content: `### When helping accidentally hurts

Re-traumatization happens when a present-day experience echoes the dynamics of a past trauma closely enough that a person feels as powerless, unsafe, or unheard as they did then. It rarely comes from cruelty. More often it comes from well-meaning people and systems that unintentionally remove someone's control.

The original KindWell workbook names four patterns to watch for: **coercion, forced disclosure, disbelief, and loss of privacy.**

### Coercion

Coercion is pressure that overrides someone's choice. It can be obvious, like threats, or subtle: guilt-tripping, repeated insistence, "for your own good" decisions made without asking, or making help conditional on doing things your way. Even kind intentions can become coercive if the other person does not feel free to say no.

### Forced disclosure

Asking someone to tell their story before they are ready, or pressing for details, can be deeply distressing. People have the right to decide what they share, when, and with whom. You do not need to know what happened in order to be supportive. A trauma-informed stance is: "You don't have to tell me anything. I'm here either way."

### Disbelief

Being doubted, questioned, or told "that can't be right" can feel like a second injury, especially for people whose experiences were denied or minimized in the past. You do not need to act as a judge or investigator. You can respond to what someone shares with respect: "Thank you for telling me. That sounds really hard."

### Loss of privacy

Sharing someone's story without permission, even with good intentions, can strip away their control over their own narrative. This includes telling mutual friends, posting about it, or mentioning it in a group. Unless there is a safety emergency or a legal duty to report, ask first.

### Other common pitfalls

- Touching someone without asking.
- Sudden changes in plans without explanation.
- Rushing someone through a process.
- Making decisions about someone without including them.

### Practice: a gentle self-review

Think about a role you play in others' lives: parent, friend, manager, volunteer, or neighbor.

- Read through the four patterns: coercion, forced disclosure, disbelief, and loss of privacy.
- Ask honestly: "Is there any practice or habit of mine that might unintentionally remove someone's control?"
- Write down one example, without harsh self-judgment.
- Consider one change that would give more control back to the other person.

Everyone makes these mistakes sometimes. Noticing them is part of the work, and repairing them, when possible, can rebuild trust.`,
        prompt: 'Which of your practices or habits might unintentionally remove someone\'s control, and what small change could give it back?'
      },
      es: {
        title: 'Evitar la retraumatización',
        content: `### Cuando ayudar lastima sin querer

La retraumatización ocurre cuando una experiencia del presente se parece tanto a las dinámicas de un trauma pasado que la persona vuelve a sentirse tan impotente, insegura o no escuchada como entonces. Rara vez nace de la crueldad. Con más frecuencia viene de personas e instituciones bienintencionadas que, sin querer, le quitan el control a alguien.

El cuaderno original de KindWell nombra cuatro patrones a los que conviene prestar atención: **la coerción, la revelación forzada, la incredulidad y la pérdida de privacidad.**

### Coerción

La coerción es una presión que pasa por encima de la elección de alguien. Puede ser evidente, como una amenaza, o sutil: hacer sentir culpa, insistir una y otra vez, tomar decisiones "por tu bien" sin preguntar o condicionar la ayuda a que la persona haga las cosas a tu manera. Incluso las buenas intenciones pueden volverse coercitivas si la otra persona no se siente libre de decir que no.

### Revelación forzada

Pedirle a alguien que cuente su historia antes de estar lista, o presionar para obtener detalles, puede ser profundamente angustiante. Las personas tienen derecho a decidir qué cuentan, cuándo y a quién. No necesitas saber qué pasó para poder acompañar. Una postura informada sobre el trauma es: "No tienes que contarme nada. Estoy aquí de todos modos".

### Incredulidad

Que duden de ti, te cuestionen o te digan "eso no puede ser" puede sentirse como una segunda herida, sobre todo para quienes vivieron experiencias que en el pasado fueron negadas o minimizadas. No necesitas actuar como juez ni como investigador. Puedes responder con respeto a lo que alguien comparte: "Gracias por contármelo. Suena muy difícil".

### Pérdida de privacidad

Contar la historia de alguien sin su permiso, aunque sea con buena intención, puede quitarle el control sobre su propio relato. Esto incluye contárselo a amistades en común, publicarlo o mencionarlo en un grupo. Salvo que haya una emergencia de seguridad o una obligación legal de informar, pregunta primero.

### Otros tropiezos frecuentes

- Tocar a alguien sin preguntar.
- Cambiar los planes de golpe sin explicar.
- Apurar a alguien durante un proceso.
- Tomar decisiones sobre alguien sin incluirlo.

### Práctica: una revisión amable

Piensa en un rol que ocupas en la vida de otras personas: madre o padre, amistad, jefe, voluntario o vecino.

- Lee los cuatro patrones: coerción, revelación forzada, incredulidad y pérdida de privacidad.
- Pregúntate con honestidad: "¿Hay alguna práctica o hábito mío que podría, sin querer, quitarle el control a alguien?".
- Anota un ejemplo, sin juzgarte con dureza.
- Piensa en un cambio que le devolvería más control a la otra persona.

Todas las personas cometemos estos errores a veces. Notarlos es parte del trabajo, y repararlos, cuando es posible, puede reconstruir la confianza.`,
        prompt: '¿Qué prácticas o hábitos tuyos podrían quitarle el control a alguien sin querer y qué pequeño cambio podría devolvérselo?'
      },
      'pt-BR': {
        title: 'Evitando a retraumatização',
        content: `### Quando ajudar machuca sem querer

A retraumatização acontece quando uma experiência do presente se parece tanto com as dinâmicas de um trauma passado que a pessoa volta a se sentir tão impotente, insegura ou não ouvida quanto naquela época. Raramente vem da crueldade. Com mais frequência, vem de pessoas e instituições bem-intencionadas que, sem querer, tiram o controle de alguém.

O caderno original da KindWell nomeia quatro padrões aos quais vale prestar atenção: **coerção, revelação forçada, descrédito e perda de privacidade.**

### Coerção

Coerção é uma pressão que passa por cima da escolha de alguém. Pode ser óbvia, como uma ameaça, ou sutil: chantagem emocional, insistência repetida, decisões "para o seu bem" tomadas sem perguntar ou condicionar a ajuda a que a pessoa faça as coisas do seu jeito. Até boas intenções podem se tornar coercitivas se a outra pessoa não se sentir livre para dizer não.

### Revelação forçada

Pedir que alguém conte a própria história antes de estar pronto, ou pressionar por detalhes, pode ser profundamente angustiante. As pessoas têm o direito de decidir o que compartilham, quando e com quem. Você não precisa saber o que aconteceu para apoiar. Uma postura informada sobre trauma é: "Você não precisa me contar nada. Estou aqui de qualquer jeito."

### Descrédito

Ser posto em dúvida, questionado ou ouvir "isso não pode ser verdade" pode parecer uma segunda ferida, especialmente para quem teve experiências negadas ou minimizadas no passado. Você não precisa agir como juiz ou investigador. Pode responder com respeito ao que alguém compartilha: "Obrigado por me contar. Parece muito difícil."

### Perda de privacidade

Contar a história de alguém sem permissão, mesmo com boa intenção, pode tirar da pessoa o controle sobre a própria narrativa. Isso inclui contar para amigos em comum, postar sobre o assunto ou mencioná-lo num grupo. A menos que haja uma emergência de segurança ou uma obrigação legal de comunicar, pergunte antes.

### Outros tropeços comuns

- Tocar alguém sem perguntar.
- Mudar planos de repente sem explicação.
- Apressar alguém durante um processo.
- Tomar decisões sobre alguém sem incluir a pessoa.

### Prática: uma revisão gentil

Pense num papel que você ocupa na vida de outras pessoas: mãe ou pai, amigo, gestor, voluntário ou vizinho.

- Leia os quatro padrões: coerção, revelação forçada, descrédito e perda de privacidade.
- Pergunte com honestidade: "Existe alguma prática ou hábito meu que possa, sem querer, tirar o controle de alguém?"
- Anote um exemplo, sem se julgar com dureza.
- Pense numa mudança que devolveria mais controle à outra pessoa.

Todo mundo comete esses erros às vezes. Percebê-los faz parte do trabalho, e repará-los, quando possível, pode reconstruir a confiança.`,
        prompt: 'Quais práticas ou hábitos seus poderiam, sem querer, tirar o controle de alguém, e que pequena mudança poderia devolvê-lo?'
      }
    },
    {
      id: 'les_tip_11',
      slug: 'scope-and-referral',
      duration: 20,
      sort: 2,
      en: {
        title: 'Scope and Referral',
        content: `### Knowing the edges of your role

One of the most trauma-informed things you can do is to know the limits of your role. Being a steady, kind presence is valuable. It is not the same as providing therapy, medical care, legal advice, or crisis intervention. Trying to be everything for someone can leave both of you exhausted, and it may delay them from getting help that could make a real difference.

This course does not qualify anyone to diagnose or treat trauma. It is education for everyday relationships.

### When other help is needed

The original workbook points to three situations where a different kind of response applies: **licensed treatment, emergency response, and mandated reporting.**

- **Licensed treatment:** If someone's distress is persistent, getting worse, or significantly affecting their sleep, work, relationships, or daily functioning, a licensed mental health professional can offer support that goes far beyond what a friend or volunteer can provide.
- **Emergency response:** If someone is in immediate danger, at risk of harming themselves or others, or experiencing a medical emergency, contact your local emergency number right away. For emotional crisis, a crisis line such as 988 in the US is available.
- **Mandated reporting:** In many places and roles, such as teachers, health workers, childcare providers, and some volunteers, the law requires reporting suspected abuse or neglect of children and sometimes of older or dependent adults. The rules vary by location and role. If you work or volunteer with others, learn what applies to you, and be honest with people about these limits before they share, when possible.

### How to refer with care

Suggesting professional help can feel like rejection if it is done abruptly. A trauma-informed referral keeps the relationship intact:

- Lead with care: "I care about you, and I want you to have more support than I can give on my own."
- Be specific where you can: offer to help find a counselor, a support group, or a hotline.
- Offer choice: "Would it help if I sat with you while you called?"
- Stay connected: "I'm still here as your friend. This isn't instead of me."

### Practice: mapping your role

Take some time to reflect on one role where others come to you for support:

- **What I can offer:** listening, presence, practical help, company, encouragement.
- **What is beyond my role:** diagnosis, therapy, medical or legal advice, crisis management.
- **My legal or organizational responsibilities**, if any, including reporting duties.
- **Resources I could point to:** local counseling services, support groups, crisis lines, and emergency numbers.
- **One sentence I could use** to gently suggest more support.

Knowing your limits is not a failure of care. It is part of caring well.`,
        prompt: 'What are the limits of your role when supporting others, and what resources could you point someone toward when they need more than you can offer?'
      },
      es: {
        title: 'El alcance de tu rol y la derivación',
        content: `### Conocer los bordes de tu rol

Una de las cosas más informadas sobre el trauma que puedes hacer es conocer los límites de tu rol. Ser una presencia estable y amable es valioso. No es lo mismo que brindar terapia, atención médica, asesoramiento legal o intervención en crisis. Intentar serlo todo para alguien puede dejarlos a ambos agotados y quizá demore que esa persona reciba una ayuda que podría marcar una diferencia real.

Este curso no habilita a nadie para diagnosticar ni tratar el trauma. Es educación para las relaciones cotidianas.

### Cuándo se necesita otra ayuda

El cuaderno original señala tres situaciones en las que corresponde otro tipo de respuesta: **el tratamiento profesional, la respuesta de emergencia y la denuncia obligatoria.**

- **Tratamiento profesional:** Si el malestar de alguien es persistente, empeora o afecta de forma importante su sueño, su trabajo, sus relaciones o su vida diaria, un profesional de salud mental con licencia puede ofrecer un apoyo que va mucho más allá de lo que puede brindar una amistad o un voluntario.
- **Respuesta de emergencia:** Si alguien está en peligro inmediato, corre riesgo de hacerse daño o de dañar a otras personas, o atraviesa una emergencia médica, comunícate de inmediato con tu número local de emergencias. Ante una crisis emocional, existe también una línea de crisis, como el 988 en Estados Unidos.
- **Denuncia obligatoria:** En muchos lugares y roles, como docentes, trabajadores de la salud, cuidadores infantiles y algunos voluntarios, la ley exige informar sobre sospechas de abuso o negligencia hacia niñas, niños y, a veces, hacia personas mayores o dependientes. Las normas varían según el lugar y el rol. Si trabajas o haces voluntariado con otras personas, averigua qué se aplica en tu caso y, cuando sea posible, sé honesto sobre estos límites antes de que alguien te cuente algo.

### Cómo derivar con cuidado

Sugerir ayuda profesional puede sentirse como un rechazo si se hace de forma brusca. Una derivación informada sobre el trauma cuida el vínculo:

- Empieza por el cariño: "Me importas y quiero que tengas más apoyo del que yo puedo darte."
- Sé específico cuando puedas: ofrece ayudar a buscar un profesional, un grupo de apoyo o una línea de ayuda.
- Ofrece opciones: "¿Te ayudaría si me quedo a tu lado mientras llamas?".
- Mantén la conexión: "Sigo aquí como tu amiga. Esto no es en lugar de mí".

### Práctica: trazar tu rol

Tómate un tiempo para reflexionar sobre un rol en el que otras personas acuden a ti en busca de apoyo:

- **Lo que puedo ofrecer:** escucha, presencia, ayuda práctica, compañía, aliento.
- **Lo que está fuera de mi rol:** diagnóstico, terapia, asesoramiento médico o legal, manejo de crisis.
- **Mis responsabilidades legales u organizacionales**, si las hay, incluidas las obligaciones de informar.
- **Recursos a los que podría orientar:** servicios locales de salud mental, grupos de apoyo, líneas de crisis y números de emergencia.
- **Una frase que podría usar** para sugerir con suavidad más apoyo.

Conocer tus límites no es una falla en el cuidado. Es parte de cuidar bien.`,
        prompt: '¿Cuáles son los límites de tu rol al acompañar a otras personas y a qué recursos podrías orientar a alguien cuando necesita más de lo que puedes ofrecer?'
      },
      'pt-BR': {
        title: 'O alcance do seu papel e o encaminhamento',
        content: `### Conhecendo as bordas do seu papel

Uma das atitudes mais informadas sobre trauma que você pode ter é conhecer os limites do seu papel. Ser uma presença estável e gentil é valioso. Não é o mesmo que oferecer terapia, cuidados médicos, orientação jurídica ou intervenção em crise. Tentar ser tudo para alguém pode deixar os dois exaustos e pode atrasar a chegada de uma ajuda que faria diferença de verdade.

Este curso não habilita ninguém a diagnosticar ou tratar traumas. É educação para as relações do dia a dia.

### Quando outra ajuda é necessária

O caderno original aponta três situações em que cabe outro tipo de resposta: **tratamento profissional, atendimento de emergência e notificação obrigatória.**

- **Tratamento profissional:** Se o sofrimento de alguém é persistente, está piorando ou afeta muito o sono, o trabalho, as relações ou o funcionamento diário, um profissional de saúde mental habilitado pode oferecer um apoio muito além do que um amigo ou voluntário consegue dar.
- **Atendimento de emergência:** Se alguém está em perigo imediato, corre risco de se machucar ou de machucar outras pessoas, ou está passando por uma emergência médica, procure imediatamente o número de emergência local. Numa crise emocional, existe também uma linha de apoio em crise, como o 988 nos Estados Unidos.
- **Notificação obrigatória:** Em muitos lugares e funções, como professores, profissionais de saúde, cuidadores de crianças e alguns voluntários, a lei exige comunicar suspeitas de abuso ou negligência contra crianças e, às vezes, contra idosos ou pessoas dependentes. As regras variam conforme o lugar e a função. Se você trabalha ou faz voluntariado com outras pessoas, informe-se sobre o que se aplica a você e, quando possível, seja honesto sobre esses limites antes que alguém compartilhe algo.

### Como encaminhar com cuidado

Sugerir ajuda profissional pode soar como rejeição se for feito de forma brusca. Um encaminhamento informado sobre trauma preserva o vínculo:

- Comece pelo afeto: "Eu me importo com você e quero que você tenha mais apoio do que eu consigo dar sozinho."
- Seja específico quando puder: ofereça ajuda para encontrar um profissional, um grupo de apoio ou uma linha de ajuda.
- Ofereça escolha: "Ajudaria se eu ficasse do seu lado enquanto você liga?"
- Mantenha a conexão: "Continuo aqui como seu amigo. Isso não é no meu lugar."

### Prática: mapeando o seu papel

Reserve um tempo para refletir sobre um papel em que outras pessoas procuram você em busca de apoio:

- **O que eu posso oferecer:** escuta, presença, ajuda prática, companhia, incentivo.
- **O que está além do meu papel:** diagnóstico, terapia, orientação médica ou jurídica, manejo de crises.
- **Minhas responsabilidades legais ou institucionais**, se houver, incluindo deveres de notificação.
- **Recursos para os quais eu poderia encaminhar:** serviços locais de saúde mental, grupos de apoio, linhas de crise e números de emergência.
- **Uma frase que eu poderia usar** para sugerir mais apoio com delicadeza.

Conhecer os seus limites não é uma falha no cuidado. É parte de cuidar bem.`,
        prompt: 'Quais são os limites do seu papel ao apoiar outras pessoas, e para quais recursos você poderia encaminhar alguém que precisa de mais do que você pode oferecer?'
      }
    },
    {
      id: 'les_tip_12',
      slug: 'sustaining-your-presence',
      duration: 20,
      sort: 3,
      en: {
        title: 'Sustaining Your Presence',
        content: `### Caring without burning out

Being close to other people's pain affects us. Listening to difficult stories, supporting someone through a crisis, or living alongside a loved one's struggles can leave you tired, tense, or emotionally heavy. Sometimes people notice they are more irritable, have trouble sleeping, feel numb, or find themselves thinking about someone else's experience long after the conversation ends. These are common responses, sometimes described as secondary or vicarious stress.

They are not signs that you care too much or are doing it wrong. They are signs that you are human and that caring has a cost that needs to be tended.

### Sustainable presence

A steady presence is not endless. It is renewed. Some practices that help many people:

- **Boundaries:** Deciding in advance how much time and energy you can offer, and communicating it kindly.
- **Transitions:** A small ritual after hard conversations, such as washing your hands, stepping outside, or changing clothes, to mark that you are leaving that space.
- **Your own support:** Friends, peers, supervisors, faith communities, or a therapist with whom you can process what you carry, while respecting others' privacy.
- **Restoration:** Sleep, food, movement, time in nature, creativity, and joy are not luxuries. They are what makes continued presence possible.

### Looking back on the course

Over these four modules you have explored:

- Relating as though important histories may be invisible, without diagnosing.
- The principles of safety, choice, trust, collaboration, and dignity.
- Predictability, genuine choice, consent, and follow-through.
- The window of tolerance and the three moves of co-regulation.
- Dignifying language and avoiding re-traumatization.
- The limits of your role and how to refer with care.

None of this requires perfection. Trauma-informed presence is a practice of paying attention, slowing down, and choosing respect again and again.

### When to seek support for yourself

If supporting others is leaving you persistently exhausted, hopeless, numb, or unable to stop thinking about what you have heard, please take it seriously. Talk with someone you trust or a licensed professional. If you are ever in crisis, contact your local emergency number or a crisis line such as 988 in the US.

### Practice: close gently

Take a few quiet minutes and write:

- **One thing I want to carry forward** from this course.
- **One thing I am setting down for now:** an expectation, a habit, or a burden that is not mine.
- **One source of support I can contact if needed.**
- **One small ritual** I will use to transition after hard conversations.

Thank you for your willingness to be a steadier place for others to land, and for remembering that you deserve that steadiness too.`,
        prompt: 'What is one thing you want to carry forward, one thing you are setting down for now, and one source of support you can contact if needed?'
      },
      es: {
        title: 'Sostener tu presencia',
        content: `### Cuidar sin agotarte

Estar cerca del dolor de otras personas nos afecta. Escuchar historias difíciles, acompañar a alguien en una crisis o convivir con las luchas de un ser querido puede dejarte con cansancio, tensión o un peso emocional. A veces las personas notan que están más irritables, duermen mal, se sienten entumecidas o siguen pensando en la experiencia de otra persona mucho después de terminar la conversación. Son respuestas comunes, que a veces se describen como estrés secundario o vicario.

No son señales de que te importe demasiado ni de que lo estés haciendo mal. Son señales de que eres humano y de que cuidar tiene un costo que también necesita atención.

### Una presencia sostenible

Una presencia estable no es infinita. Se renueva. Algunas prácticas que ayudan a muchas personas:

- **Límites:** Decidir de antemano cuánto tiempo y energía puedes ofrecer, y comunicarlo con amabilidad.
- **Transiciones:** Un pequeño ritual después de conversaciones difíciles, como lavarte las manos, salir un momento o cambiarte de ropa, para marcar que dejas ese espacio.
- **Tu propio apoyo:** Amistades, pares, supervisores, comunidades de fe o un terapeuta con quienes procesar lo que cargas, respetando la privacidad de los demás.
- **Recuperación:** El sueño, la alimentación, el movimiento, el tiempo en la naturaleza, la creatividad y la alegría no son lujos. Son lo que hace posible seguir presente.

### Mirar el recorrido

A lo largo de estos cuatro módulos exploraste:

- Relacionarte como si pudieran existir historias importantes invisibles, sin diagnosticar.
- Los principios de seguridad, elección, confianza, colaboración y dignidad.
- La previsibilidad, la elección genuina, el consentimiento y la coherencia.
- La ventana de tolerancia y los tres movimientos de la corregulación.
- El lenguaje que dignifica y cómo evitar la retraumatización.
- Los límites de tu rol y cómo derivar con cuidado.

Nada de esto exige perfección. Una presencia informada sobre el trauma es una práctica de prestar atención, bajar el ritmo y elegir el respeto una y otra vez.

### Cuándo buscar apoyo para ti

Si acompañar a otras personas te deja con un agotamiento persistente, desesperanza, entumecimiento o sin poder dejar de pensar en lo que escuchaste, tómalo en serio. Habla con alguien de confianza o con un profesional con licencia. Si en algún momento atraviesas una crisis, comunícate con tu número local de emergencias o con una línea de crisis, como el 988 en Estados Unidos.

### Práctica: cerrar con suavidad

Tómate unos minutos tranquilos y escribe:

- **Algo que quiero llevar conmigo** de este curso.
- **Algo que dejo a un lado por ahora:** una expectativa, un hábito o una carga que no me corresponde.
- **Una fuente de apoyo a la que puedo recurrir si lo necesito.**
- **Un pequeño ritual** que usaré como transición después de conversaciones difíciles.

Gracias por tu disposición a ser un lugar más estable donde otras personas puedan llegar, y por recordar que tú también mereces esa estabilidad.`,
        prompt: '¿Qué quieres llevar contigo, qué dejas a un lado por ahora y a qué fuente de apoyo puedes recurrir si lo necesitas?'
      },
      'pt-BR': {
        title: 'Sustentando a sua presença',
        content: `### Cuidar sem se esgotar

Estar perto da dor dos outros nos afeta. Ouvir histórias difíceis, apoiar alguém durante uma crise ou conviver com as lutas de uma pessoa querida pode deixar você cansado, tenso ou emocionalmente pesado. Às vezes as pessoas percebem que estão mais irritadas, dormindo mal, se sentindo entorpecidas ou pensando na experiência de outra pessoa muito tempo depois de a conversa acabar. São respostas comuns, às vezes descritas como estresse secundário ou vicário.

Não são sinais de que você se importa demais nem de que está fazendo algo errado. São sinais de que você é humano e de que cuidar tem um custo que também precisa de atenção.

### Uma presença sustentável

Uma presença estável não é infinita. Ela é renovada. Algumas práticas que ajudam muitas pessoas:

- **Limites:** Decidir com antecedência quanto tempo e energia você pode oferecer, e comunicar isso com gentileza.
- **Transições:** Um pequeno ritual depois de conversas difíceis, como lavar as mãos, sair um pouco ou trocar de roupa, para marcar que você está deixando aquele espaço.
- **O seu próprio apoio:** Amigos, colegas, supervisores, comunidades de fé ou um terapeuta com quem você possa processar o que carrega, respeitando a privacidade dos outros.
- **Recuperação:** Sono, alimentação, movimento, tempo na natureza, criatividade e alegria não são luxos. São o que torna possível continuar presente.

### Olhando para o caminho

Ao longo destes quatro módulos, você explorou:

- Relacionar-se como se pudessem existir histórias importantes invisíveis, sem diagnosticar.
- Os princípios de segurança, escolha, confiança, colaboração e dignidade.
- Previsibilidade, escolha genuína, consentimento e coerência.
- A janela de tolerância e os três movimentos da corregulação.
- A linguagem que dignifica e como evitar a retraumatização.
- Os limites do seu papel e como encaminhar com cuidado.

Nada disso exige perfeição. Uma presença informada sobre trauma é uma prática de prestar atenção, desacelerar e escolher o respeito de novo e de novo.

### Quando buscar apoio para você

Se apoiar outras pessoas está deixando você persistentemente exausto, sem esperança, entorpecido ou incapaz de parar de pensar no que ouviu, leve isso a sério. Converse com alguém de confiança ou com um profissional habilitado. Se em algum momento estiver em crise, procure o número de emergência local ou uma linha de apoio em crise, como o 988 nos Estados Unidos.

### Prática: encerrar com delicadeza

Reserve alguns minutos tranquilos e escreva:

- **Algo que quero levar adiante** deste curso.
- **Algo que deixo de lado por agora:** uma expectativa, um hábito ou um peso que não é meu.
- **Uma fonte de apoio que posso procurar se precisar.**
- **Um pequeno ritual** que vou usar como transição depois de conversas difíceis.

Obrigado pela sua disposição de ser um lugar mais estável onde os outros possam pousar, e por lembrar que você também merece essa estabilidade.`,
        prompt: 'O que você quer levar adiante, o que está deixando de lado por agora e que fonte de apoio pode procurar se precisar?'
      }
    }
  ]
};

const COURSE_TRAUMA_PRESENCE = {
  id: 'course_trauma_presence',
  slug: 'trauma-informed-presence',
  is_premium: 1,
  level: 'All levels',
  hours: 4.0,
  en: {
    title: 'Trauma-Informed Presence',
    subtitle: 'Becoming a steadier, safer presence for yourself and the people around you.',
    description: 'A 4-module course for everyday people, not therapist training, on safety, choice, trust, collaboration, and dignity: how to relate as though important histories may be invisible, stay steady near distress, and know the limits of your role.',
    outcomes: JSON.stringify(['Relate to others as though important histories may be invisible, without diagnosing', 'Reduce unnecessary surprise and offer genuine choice and consent', 'Use the window of tolerance and co-regulation to stay steady near distress', 'Replace judgments with dignifying observations and avoid re-traumatization', 'Know the limits of your role and refer to qualified help with care'])
  },
  es: {
    title: 'Presencia informada sobre el trauma',
    subtitle: 'Convertirte en una presencia más estable y segura para ti y para quienes te rodean.',
    description: 'Un curso de cuatro módulos para personas comunes, no una formación para terapeutas, sobre seguridad, elección, confianza, colaboración y dignidad: cómo relacionarte como si pudieran existir historias importantes que no ves, mantener la estabilidad cerca del malestar y conocer los límites de tu rol.',
    outcomes: JSON.stringify(['Relacionarte con otras personas como si hubiera historias importantes invisibles, sin diagnosticar', 'Reducir las sorpresas innecesarias y ofrecer elección y consentimiento genuinos', 'Usar la ventana de tolerancia y la corregulación para mantener la estabilidad cerca del malestar', 'Cambiar los juicios por observaciones que dignifican y evitar la retraumatización', 'Conocer los límites de tu rol y derivar con cuidado a una ayuda calificada'])
  },
  'pt-BR': {
    title: 'Presença informada sobre trauma',
    subtitle: 'Tornando-se uma presença mais estável e segura para você e para quem está ao seu redor.',
    description: 'Um curso em quatro módulos para pessoas comuns, e não uma formação para terapeutas, sobre segurança, escolha, confiança, colaboração e dignidade: como se relacionar como se pudessem existir histórias importantes que você não vê, manter a estabilidade perto do sofrimento e conhecer os limites do seu papel.',
    outcomes: JSON.stringify(['Relacionar-se com os outros como se houvesse histórias importantes invisíveis, sem diagnosticar', 'Reduzir surpresas desnecessárias e oferecer escolha e consentimento genuínos', 'Usar a janela de tolerância e a corregulação para se manter estável perto do sofrimento', 'Trocar julgamentos por observações que dignificam e evitar a retraumatização', 'Conhecer os limites do seu papel e encaminhar com cuidado para ajuda qualificada'])
  },
  modules: [MOD_TIP_1, MOD_TIP_2, MOD_TIP_3, MOD_TIP_4]
};

export const COURSES_A = [COURSE_COMPASSION, COURSE_ACCEPTANCE, COURSE_TRAUMA_PRESENCE];
