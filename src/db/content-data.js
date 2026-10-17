// src/db/content-data.js
// Complete structured data for KindWell: 12 Practices, 12 Remedies, 8 Crystals

export const practices = [
  {
    id: 'arrive',
    category: 'Grounding',
    duration: 2,
    slug: 'arrive-in-the-room',
    is_premium: 0,
    en: {
      title: 'Arrive in the room',
      subtitle: '5-4-3-2-1 Somatic Grounding',
      description: 'A 2-minute reset to anchor in physical reality when your mind is racing.',
      steps: JSON.stringify([
        'Name five neutral things you can see around you.',
        'Notice four things you can physically touch or feel against your skin.',
        'Identify three distinct sounds in your environment.',
        'Notice two scents or aromas nearby.',
        'Acknowledge one steady sensation right where you are.'
      ]),
      why_it_helps: 'Interrupts anxious cognitive spinning by redirecting sensory processing to present, safe sensory signals.'
    },
    es: {
      title: 'Llegar al espacio presente',
      subtitle: 'Enraizamiento somático 5-4-3-2-1',
      description: 'Una pausa de 2 minutos para conectar con la realidad tangible cuando la mente se acelera.',
      steps: JSON.stringify([
        'Nombra cinco objetos neutros que puedas ver a tu alrededor.',
        'Siente cuatro texturas o puntos de apoyo en tu cuerpo.',
        'Identifica tres sonidos distintos en el ambiente.',
        'Percibe dos aromas sutiles o sensaciones en el aire.',
        'Reconoce una sensación firme en este preciso momento.'
      ]),
      why_it_helps: 'Interrumpe el ciclo de rumiación ansiosa enviando al sistema nervioso señales de seguridad en el aquí y ahora.'
    },
    'pt-BR': {
      title: 'Chegar ao espaço presente',
      subtitle: 'Aterramento somático 5-4-3-2-1',
      description: 'Uma pausa de 2 minutos para ancorar na realidade quando os pensamentos estiverem acelerados.',
      steps: JSON.stringify([
        'Identifique cinco coisas neutras que você pode ver ao seu redor.',
        'Perceba quatro pontos de contato do corpo com o ambiente.',
        'Reconheça três sons presentes neste momento.',
        'Note dois aromas ou a temperatura do ar.',
        'Sinta uma sensação de firmeza onde você está agora.'
      ]),
      why_it_helps: 'Alivia o turbilhão mental redirecionando a atenção para estímulos sensoriais concretos e seguros.'
    }
  },
  {
    id: 'orient',
    category: 'Grounding',
    duration: 5,
    slug: 'today-not-then',
    is_premium: 0,
    en: {
      title: 'Today, not then',
      subtitle: 'Orientation to the Present',
      description: 'Remind your nervous system of the exact temporal and spatial safety of today.',
      steps: JSON.stringify([
        'State your name aloud or in your mind.',
        'Say today’s date, the current year, and where you are sitting or standing.',
        'Look around and find one physical detail that proves you are not in the difficult past.',
        'Take one unhurried breath as you settle into this certainty.'
      ]),
      why_it_helps: 'Helps counter trauma-related activation by differentiating past distress from current safety.'
    },
    es: {
      title: 'Hoy, no en aquel momento',
      subtitle: 'Orientación hacia el presente',
      description: 'Recuérdale a tu cuerpo en qué día y lugar seguro te encuentras hoy.',
      steps: JSON.stringify([
        'Di tu nombre en voz baja o en silencio.',
        'Reconoce la fecha de hoy, el año actual y el lugar donde te encuentras.',
        'Observa un detalle en la habitación que demuestre que el pasado difícil ya no está ocurriendo.',
        'Respira con calma, reconociendo la estabilidad de este instante.'
      ]),
      why_it_helps: 'Diferencia los recuerdos dolorosos de la realidad actual, ofreciendo serenidad al sistema nervioso.'
    },
    'pt-BR': {
      title: 'Hoje, não naquele tempo',
      subtitle: 'Orientação para o momento presente',
      description: 'Lembre seu corpo do momento exato e da segurança do dia de hoje.',
      steps: JSON.stringify([
        'Diga seu nome em voz baixa ou em pensamento.',
        'Reconheça a data de hoje, o ano e o local onde você está.',
        'Olhe ao redor e encontre um detalhe que comprove que você não está no passado difícil.',
        'Respire sem pressa, permitindo-se sentir a firmeza deste momento.'
      ]),
      why_it_helps: 'Ajuda a desarmar alertas antigos, mostrando que o momento presente é diferente do que já passou.'
    }
  },
  {
    id: 'release',
    category: 'Grounding',
    duration: 2,
    slug: 'unclench-one-thing',
    is_premium: 0,
    en: {
      title: 'Unclench one thing',
      subtitle: 'Somatic Micro-Release',
      description: 'Notice where tension gathers and give permission for just one small area to soften.',
      steps: JSON.stringify([
        'Notice your jaw: allow your teeth to part and your tongue to rest on the floor of your mouth.',
        'Notice your shoulders: let them drop away from your ears by half an inch.',
        'Notice your hands: let your fingers uncurl gently in your lap.',
        'Choose just one area to soften. You do not have to relax everything.'
      ]),
      why_it_helps: 'Breaks the unconscious habit of bracing against imaginary threats.'
    },
    es: {
      title: 'Soltar un solo punto',
      subtitle: 'Liberación somática sutil',
      description: 'Identifica la tensión acumulada y permite que una pequeña zona del cuerpo descanse.',
      steps: JSON.stringify([
        'Observa la mandíbula: separa ligeramente los dientes y deja que la lengua descanse.',
        'Observa los hombros: permíteles descender suavemente unos milímetros.',
        'Observa las manos: abre los dedos con naturalidad sobre el regazo.',
        'Elige un solo punto para aflojar. No hace falta relajar todo a la vez.'
      ]),
      why_it_helps: 'Disminuye la postura defensiva involuntaria y permite que el cuerpo reconozca el descanso.'
    },
    'pt-BR': {
      title: 'Soltar um ponto de tensão',
      subtitle: 'Alívio somático sutil',
      description: 'Perceba onde você está acumulando tensão e dê permissão para suavizar apenas uma área.',
      steps: JSON.stringify([
        'Observe o maxilar: afaste os dentes e deixe a língua repousar suavemente.',
        'Observe os ombros: permita que desçam um pouquinho, longe das orelhas.',
        'Observe as mãos: desfaça a rigidez dos dedos no seu colo.',
        'Escolha apenas uma parte para afrouxar. Não é preciso relaxar tudo de uma vez.'
      ]),
      why_it_helps: 'Desfaz a postura de alerta contínuo, transmitindo alívio imediato ao corpo.'
    }
  },
  {
    id: 'name',
    category: 'Emotions',
    duration: 5,
    slug: 'name-what-is-here',
    is_premium: 1,
    en: {
      title: 'Name what is here',
      subtitle: 'Notice, Feel, Need',
      description: 'Separate facts from fearful predictions by completing three grounding sentences.',
      steps: JSON.stringify([
        'Say to yourself: "I notice..." (name an objective, observable fact).',
        'Say to yourself: "I feel..." (name the emotional or physical sensation without judgment).',
        'Say to yourself: "What I need right now is..." (name a small, immediate, realistic support).'
      ]),
      why_it_helps: 'Cultivates emotional literacy and shifts cognitive appraisal from panic to constructive care.'
    },
    es: {
      title: 'Nombrar lo que está aquí',
      subtitle: 'Observar, sentir y necesitar',
      description: 'Diferencia los hechos objetivos de las suposiciones dolorosas mediante tres frases sencillas.',
      steps: JSON.stringify([
        'Completa en silencio: "Noto..." (menciona un hecho observable y claro).',
        'Completa en silencio: "Siento..." (describe la emoción o sensación sin juzgarla).',
        'Completa en silencio: "Lo que necesito en este instante es..." (identifica un cuidado concreto y posible).'
      ]),
      why_it_helps: 'Promueve la claridad emocional y permite responder con compasión en lugar de reaccionar con pánico.'
    },
    'pt-BR': {
      title: 'Nomear o que está presente',
      subtitle: 'Perceber, sentir e cuidar',
      description: 'Separe os fatos concretos das preocupações futuras com três frases acolhedoras.',
      steps: JSON.stringify([
        'Complete mentalmente: "Eu percebo..." (descreva um fato observável e real).',
        'Complete mentalmente: "Eu sinto..." (nomeie a sensação ou emoção sem autocrítica).',
        'Complete mentalmente: "O que eu preciso agora é..." (um cuidado simples e realizável).'
      ]),
      why_it_helps: 'Organiza o mundo interno e transforma a sobrecarga em clareza sobre o próximo passo.'
    }
  },
  {
    id: 'weather',
    category: 'Emotions',
    duration: 2,
    slug: 'emotional-weather-report',
    is_premium: 1,
    en: {
      title: 'Emotional weather report',
      subtitle: 'Defusion & Non-Attachment',
      description: 'Observe your internal state as a temporary climate rather than your core identity.',
      steps: JSON.stringify([
        'Pause and check your internal horizon: Is it stormy, overcast, foggy, bright, or shifting?',
        'Say: "Right now, the weather inside is [foggy / turbulent / brisk]."',
        'Notice that you are the sky that holds the weather, not the storm itself.',
        'Let the clouds pass across your awareness without pushing them away.'
      ]),
      why_it_helps: 'Teaches mindfulness defusion, reminding you that emotions rise, peak, and change naturally.'
    },
    es: {
      title: 'Informe del clima interior',
      subtitle: 'Desidentificación y calma',
      description: 'Observa tu estado anímico como un clima pasajero y no como una definición permanente de quién eres.',
      steps: JSON.stringify([
        'Haz una pausa e indaga: ¿hay tormenta, niebla, sol suave o viento cambiante?',
        'Reconoce con suavidad: "En este momento, mi clima interior es [pesado / nublado / templado]."',
        'Recuerda que tú eres el cielo que contiene el clima, no la tormenta en sí.',
        'Deja que las nubes se muevan a su ritmo sin forzarlas a desaparecer.'
      ]),
      why_it_helps: 'Ayuda a contemplar las emociones sin apego, sabiendo que toda sensación se transforma con el tiempo.'
    },
    'pt-BR': {
      title: 'Previsão do tempo interior',
      subtitle: 'Descompressão e serenidade',
      description: 'Veja suas emoções como um clima temporário, e não como uma verdade permanente sobre você.',
      steps: JSON.stringify([
        'Faça uma pausa e repare: há chuva, névoa, sol ou ventos inquietos por dentro?',
        'Diga a si mesmo: "Neste momento, meu clima interno está [agitado / nublado / sereno]."',
        'Lembre-se de que você é o céu que acolhe o clima, e não a tempestade.',
        'Deixe que as nuvens sigam seu curso natural sem tentar lutar contra elas.'
      ]),
      why_it_helps: 'Cultiva o distanciamento saudável, lembrando que todo estado de ânimo se transforma com o tempo.'
    }
  },
  {
    id: 'next',
    category: 'Emotions',
    duration: 5,
    slug: 'the-next-workable-thing',
    is_premium: 1,
    en: {
      title: 'The next workable thing',
      subtitle: 'Pragmatic Action Alignment',
      description: 'When everything feels impossible, identify just one small action that belongs to the next ten minutes.',
      steps: JSON.stringify([
        'Acknowledge the overwhelm: "I cannot fix the whole picture right now."',
        'Ask: "What is one workable action that belongs strictly to the next ten minutes?"',
        'Keep it small: drink a glass of water, close three tabs, or reply to one essential note.',
        'Allow that single action to be enough for right now.'
      ]),
      why_it_helps: 'Restores human agency without demanding false enthusiasm or perfection.'
    },
    es: {
      title: 'El próximo paso viable',
      subtitle: 'Claridad en la acción cotidiana',
      description: 'Cuando todo parece abrumador, encuentra una sola cosa posible para los próximos diez minutos.',
      steps: JSON.stringify([
        'Reconoce la situación con honestidad: "No puedo resolverlo todo en este momento."',
        'Pregúntate: "¿Cuál es una acción sencilla y posible para los próximos diez minutos?"',
        'Elige algo breve: beber un vaso de agua, organizar un rincón o responder un mensaje pendiente.',
        'Permite que esa pequeña acción sea suficiente por ahora.'
      ]),
      why_it_helps: 'Devuelve la sensación de capacidad personal sin exigir soluciones heroicas.'
    },
    'pt-BR': {
      title: 'O próximo passo possível',
      subtitle: 'Ação gentil e realista',
      description: 'Quando tudo parecer demais, encontre uma única atitude realizável para os próximos dez minutos.',
      steps: JSON.stringify([
        'Acolha o cansaço com honestidade: "Eu não preciso resolver tudo hoje."',
        'Pergunte-se: "Qual é uma pequena atitude viável para os próximos dez minutos?"',
        'Mantenha a simplicidade: beber um copo de água, fechar abas abertas ou lavar o rosto.',
        'Permita que esse único passo seja o bastante por enquanto.'
      ]),
      why_it_helps: 'Restaura a confiança em sua própria capacidade sem cobranças desmedidas.'
    }
  },
  {
    id: 'kindly',
    category: 'Self-Compassion',
    duration: 5,
    slug: 'the-three-part-kindness-pause',
    is_premium: 1,
    en: {
      title: 'The three-part kindness pause',
      subtitle: 'Self-Compassion Foundation',
      description: 'A gentle structure adapted from Kristin Neff: mindfulness, common humanity, and kind support.',
      steps: JSON.stringify([
        'Mindfulness: Place a hand over your heart or on your arm. Say: "This is a hard moment."',
        'Common Humanity: Remind yourself: "Struggle is part of being human. I am not alone in this feeling."',
        'Self-Kindness: Ask: "What kind, steady word or action would support me right now?"'
      ]),
      why_it_helps: 'Stimulates the mammalian soothing system through warm touch and supportive language.'
    },
    es: {
      title: 'La pausa de la ternura en tres tiempos',
      subtitle: 'Fundamentos de la autocompasión',
      description: 'Un espacio de cuidado inspirado en la autocompasión: presencia, humanidad compartida y amabilidad.',
      steps: JSON.stringify([
        'Presencia: Pon una mano en tu pecho o en tu brazo. Di en silencio: "Este es un momento difícil."',
        'Humanidad compartida: Recuérdate: "Sentir dificultad es parte de la experiencia humana. No estoy a solas en esto."',
        'Amabilidad propia: Pregúntate: "¿Qué palabra honesta y cálida necesito escuchar de mí en este instante?"'
      ]),
      why_it_helps: 'Activa el sistema de calma y consuelo a través del contacto suave y el tono comprensivo.'
    },
    'pt-BR': {
      title: 'A pausa da gentileza em três passos',
      subtitle: 'Autocompaixão no dia a dia',
      description: 'Um refúgio acolhedor com presença, humanidade compartilhada e apoio honesto.',
      steps: JSON.stringify([
        'Presença: Coloque uma das mãos sobre o peito ou no braço. Diga: "Este é um momento doloroso."',
        'Humanidade compartilhada: Lembre-se: "A dificuldade faz parte da vida de todos nós. Não estou só."',
        'Gentileza: Pergunte a si mesmo: "Que cuidado simples ou palavra amiga eu posso me oferecer agora?"'
      ]),
      why_it_helps: 'Ativa circuitos neurais de acolhimento e diminui a autocrítica severa.'
    }
  },
  {
    id: 'friend',
    category: 'Self-Compassion',
    duration: 10,
    slug: 'borrow-a-kinder-voice',
    is_premium: 1,
    en: {
      title: 'Borrow a kinder voice',
      subtitle: 'Perspective Re-centering',
      description: 'Offer yourself the same compassionate wisdom you naturally extend to someone you care about.',
      steps: JSON.stringify([
        'Think of what you are struggling with today.',
        'Imagine a dear friend coming to you with the exact same situation.',
        'Write down what you would say to them: the tone, the reassurance, the patience.',
        'Now, read those exact words back to yourself, using your own name.'
      ]),
      why_it_helps: 'Bypasses internalized harsh self-judgment by activating well-established empathy pathways.'
    },
    es: {
      title: 'Prestar una voz más comprensiva',
      subtitle: 'Cambio de perspectiva afectuosa',
      description: 'Bríndate a ti la misma mirada comprensiva que le entregarías a un ser querido.',
      steps: JSON.stringify([
        'Trae a la mente la dificultad que estás atravesando hoy.',
        'Imagina que un buen amigo llega a contarte exactamente esa misma situación.',
        'Escribe qué le dirías: las palabras de ánimo, la comprensión y el tono de apoyo.',
        'Ahora lee ese mensaje hacia ti, llamándote por tu propio nombre.'
      ]),
      why_it_helps: 'Neutraliza la autocrítica excesiva aprovechando la capacidad natural de empatía que ya posees.'
    },
    'pt-BR': {
      title: 'Adotar uma voz mais compreensiva',
      subtitle: 'Empatia consigo mesmo',
      description: 'Ofereça a si a mesma compaixão e paciência que você ofereceria a alguém querido.',
      steps: JSON.stringify([
        'Pense no desafio que você está enfrentando hoje.',
        'Imagine um amigo querido passando pela exata mesma situação e procurando seu apoio.',
        'Escreva o que você diria a ele: o tom carinhoso, a escuta e a compreensão sincera.',
        'Agora, leia essas palavras para si mesmo, chamando-se pelo seu próprio nome.'
      ]),
      why_it_helps: 'Suaviza o diálogo interno duro e desperta o cuidado genuíno que você costuma reservar aos outros.'
    }
  },
  {
    id: 'boundary',
    category: 'Relationships',
    duration: 5,
    slug: 'a-clean-boundary-sentence',
    is_premium: 1,
    en: {
      title: 'A clean boundary sentence',
      subtitle: 'Grounded Interpersonal Clarity',
      description: 'Communicate what you can and cannot do without defensiveness, over-explaining, or guilt.',
      steps: JSON.stringify([
        'Identify what is being requested of your time or energy.',
        'Formulate the boundary using the clean pattern: "I cannot do X. I can do Y."',
        'Resist adding long justifications, medical reasons, or multiple apologies.',
        'Say it with warm clarity, allowing the other person their natural reaction.'
      ]),
      why_it_helps: 'Reduces anxiety around setting limits by avoiding the exhaustion of over-explaining.'
    },
    es: {
      title: 'Un límite con serenidad',
      subtitle: 'Claridad en las relaciones',
      description: 'Expresa lo que puedes y lo que no puedes hacer con firmeza tranquila, sin rodeos ni culpas.',
      steps: JSON.stringify([
        'Identifica qué compromiso o demanda está agotando tu energía.',
        'Usa una fórmula directa: "En este momento no puedo hacer X. Con gusto puedo aportar Y."',
        'Evita justificaciones interminables o disculpas excesivas que diluyan tu decisión.',
        'Comunícalo con calidez y permite que la otra persona procese su propia respuesta.'
      ]),
      why_it_helps: 'Protege tu bienestar y tus relaciones al sustituir el resentimiento por acuerdos claros.'
    },
    'pt-BR': {
      title: 'Um limite claro e sereno',
      subtitle: 'Relações conscientes',
      description: 'Comunique o que você pode e o que não pode assumir, com tranquilidade e sem culpa.',
      steps: JSON.stringify([
        'Reconheça o que está sendo pedido e o impacto na sua energia.',
        'Use uma estrutura simples: "Eu não consigo fazer X no momento. O que posso oferecer é Y."',
        'Resista à tentação de criar justificativas longas ou pedir desculpas desnecessárias.',
        'Fale com gentileza e deixe espaço para a outra pessoa acolher a resposta.'
      ]),
      why_it_helps: 'Previne a sobrecarga e fortalece a convivência por meio da transparência e do respeito mútuo.'
    }
  },
  {
    id: 'listen',
    category: 'Relationships',
    duration: 2,
    slug: 'ask-before-fixing',
    is_premium: 1,
    en: {
      title: 'Ask before fixing',
      subtitle: 'Supportive Inquiry',
      description: 'Show up for a loved one without falling into the trap of unsolicited advice or quick fixes.',
      steps: JSON.stringify([
        'Notice when someone shares pain: catch the urge to jump to advice or solutions.',
        'Offer the supportive four-way check: "Do you want listening, ideas, practical help, or just company right now?"',
        'Honor their answer completely.',
        'Stay present in the room with whatever they choose.'
      ]),
      why_it_helps: 'Creates true emotional safety by keeping the speaker in charge of their own process.'
    },
    es: {
      title: 'Preguntar antes de resolver',
      subtitle: 'Escucha consciente',
      description: 'Acompaña a quien te importa sin caer en consejos apresurados ni soluciones impuestas.',
      steps: JSON.stringify([
        'Cuando alguien comparta una dificultad, frena el impulso automático de solucionar el problema.',
        'Pregunta con respeto: "¿Prefieres que te escuche, que pensemos ideas, ayuda práctica o solo compañía?"',
        'Acepta con agrado lo que la persona te responda.',
        'Permanece presente con sencillez, sin intentar cambiar lo que siente.'
      ]),
      why_it_helps: 'Genera confianza mutua y respeta el ritmo de quien necesita ser escuchado de verdad.'
    },
    'pt-BR': {
      title: 'Perguntar antes de aconselhar',
      subtitle: 'Escuta atenta e afetuosa',
      description: 'Esteja ao lado de quem você ama sem a ansiedade de tentar consertar tudo de imediato.',
      steps: JSON.stringify([
        'Quando alguém desabafar, perceba o impulso de dar conselhos e respire fundo.',
        'Faça uma pergunta acolhedora: "Você prefere apenas desabafar, trocar ideias, ajuda prática ou só uma companhia?"',
        'Respeite plenamente a resposta da pessoa.',
        'Esteja presente de coração aberto, sem pressa para mudar o que ela está sentindo.'
      ]),
      why_it_helps: 'Cria um ambiente seguro onde o outro se sente compreendido e respeitado em seu próprio tempo.'
    }
  },
  {
    id: 'grief',
    category: 'Grief',
    duration: 10,
    slug: 'make-a-small-place-for-grief',
    is_premium: 1,
    en: {
      title: 'Make a small place for grief',
      subtitle: 'Gentle Container Practice',
      description: 'Give sorrow a dedicated window of tender attention without demanding that it be resolved.',
      steps: JSON.stringify([
        'Choose a simple container: ten minutes, a lighted candle, a specific chair, or a song.',
        'Sit down and say: "For these ten minutes, I don’t have to pretend I am fine."',
        'Allow tears, memories, or silence to unfold without needing to tidy them up.',
        'When the time ends, thank yourself, blow out the candle, and take a sip of water.'
      ]),
      why_it_helps: 'Prevents emotional numbness by offering grief safe, bounded time to be honored.'
    },
    es: {
      title: 'Un rincón para el duelo',
      subtitle: 'Espacio contenido y amable',
      description: 'Dedica unos minutos para estar con tu tristeza sin la exigencia de superarla de inmediato.',
      steps: JSON.stringify([
        'Prepara un espacio sencillo: diez minutos en calma, una vela encendida o una melodía suave.',
        'Toma asiento y dite: "Durante estos minutos, no tengo que aparentar que todo está resuelto."',
        'Permite que surjan lágrimas, recuerdos o silencios sin intentar ordenarlos ni corregirlos.',
        'Al terminar el tiempo, agradece tu valor, apaga la vela y toma un sorbo de agua fresca.'
      ]),
      why_it_helps: 'Evita el embotamiento emocional brindando al dolor un lugar seguro y respetuoso donde expresarse.'
    },
    'pt-BR': {
      title: 'Um espaço para o luto',
      subtitle: 'Acolhimento sereno da dor',
      description: 'Reserve um momento de carinho para a sua saudade sem a cobrança de superá-la agora.',
      steps: JSON.stringify([
        'Escolha um momento simples: dez minutos de silêncio, uma vela acesa ou uma música tranquila.',
        'Acomode-se e diga com carinho: "Por estes minutos, eu não preciso fingir que está tudo bem."',
        'Deixe que as lágrimas, memórias ou quietudes venham sem pressa de encontrar explicações.',
        'Ao final do tempo, respire fundo, agradeça pela pausa e beba um gole de água.'
      ]),
      why_it_helps: 'Ajuda a processar perdas significativas com dignidade, sem reprimir nem se desorganizar.'
    }
  },
  {
    id: 'memory',
    category: 'Grief',
    duration: 10,
    slug: 'continuing-bond',
    is_premium: 1,
    en: {
      title: 'Continuing bond',
      subtitle: 'Meaningful Legacy Reflection',
      description: 'Honor a loss by recognizing the values, stories, and love that continue forward in you.',
      steps: JSON.stringify([
        'Bring to mind the person, place, or season of life you miss.',
        'Complete the sentence: "Because you existed, I now carry..."',
        'Write down one value, kindness, recipe, or perspective they left with you.',
        'Recognize that love changes form, but the bond remains alive in how you live.'
      ]),
      why_it_helps: 'Re-frames grief from an abrupt severed tie into an enduring, meaningful relationship.'
    },
    es: {
      title: 'El lazo que permanece',
      subtitle: 'Memoria y continuidad del amor',
      description: 'Honra una pérdida reconociendo los valores y aprendizajes que siguen vivos en tu caminar.',
      steps: JSON.stringify([
        'Trae a tu memoria a esa persona, lugar o etapa entrañable que extrañas.',
        'Completa esta reflexión: "Gracias a que estuviste en mi vida, hoy conservo..."',
        'Anota una enseñanza, una sonrisa, una costumbre o un valor que haya dejado en ti.',
        'Reconoce que el amor no desaparece, sino que se transforma en la manera en que cuidas tu presente.'
      ]),
      why_it_helps: 'Transforma el vacío de la ausencia en una presencia afectuosa que acompaña y da sentido.'
    },
    'pt-BR': {
      title: 'O vínculo que continua',
      subtitle: 'Memória afetiva e legado',
      description: 'Honre uma ausência reconhecendo o amor e as marcas bonitas que continuam vivas em você.',
      steps: JSON.stringify([
        'Traga ao pensamento a pessoa, o lugar ou a fase da vida da qual você sente saudade.',
        'Escreva ou reflita: "Por você ter feito parte da minha história, hoje eu carrego..."',
        'Lembre-se de um gesto, ensinamento ou carinho que você herdou dessa convivência.',
        'Perceba que o amor não se desfaz: ele se expressa nas escolhas gentis que você faz hoje.'
      ]),
      why_it_helps: 'Alivia o sentimento de ruptura, integrando as lembranças queridas como fonte de força cotidiana.'
    }
  }
];

export const remedies = [
  {
    id: 'anxious-restless',
    category: 'Nervous System',
    slug: 'anxious-wired-restless',
    en: {
      title: 'Anxious, wired, restless',
      summary: 'Gentle botanical support and somatic breathing for an alert nervous system seeking safety.',
      allies: JSON.stringify(['Chamomile (Matricaria chamomilla)', 'Lemon Balm (Melissa officinalis)', 'Oat Straw (Avena sativa)']),
      somatic: JSON.stringify(['Extended exhale: inhale for 4 counts, exhale softly for 6 counts for 90 seconds', 'Somatic sensory check: 5-4-3-2-1 arrival in the room', 'Warm herbal infusion before bedtime']),
      cautions: JSON.stringify(['Avoid high caffeine late in the day', 'Consult a clinician if taking sedative medications']),
      pregnancy: 'Safe in standard culinary tea amounts; discuss higher botanical doses with your midwife or physician.',
      escalation: JSON.stringify(['Panic symptoms lasting over an hour', 'Chest pain or difficulty breathing', 'Persistent severe anxiety affecting basic daily living'])
    },
    es: {
      title: 'Inquietud, nerviosismo y alerta constante',
      summary: 'Plantas tradicionales y respiración consciente para acompañar a un sistema nervioso que busca calma.',
      allies: JSON.stringify(['Manzanilla dulce (Matricaria chamomilla)', 'Toronjil o melisa (Melissa officinalis)', 'Paja de avena (Avena sativa)']),
      somatic: JSON.stringify(['Exhalación prolongada: inhala en 4 tiempos y exhala con calma en 6 tiempos durante minuto y medio', 'Contacto con los sentidos para anclarte en el presente', 'Infusión tibia de hierbas al caer la tarde']),
      cautions: JSON.stringify(['Moderar el café y bebidas energéticas a partir del mediodía', 'Consultar con profesionales si se toman fármacos ansiolíticos']),
      pregnancy: 'Adecuado en infusiones suaves habituales; consulta con tu especialista antes de concentrados o extractos.',
      escalation: JSON.stringify(['Episodios de pánico prolongados', 'Opresión en el pecho o dificultad para respirar', 'Malestar continuo que impida el descanso y las labores diarias'])
    },
    'pt-BR': {
      title: 'Inquietação, agitação e alerta constante',
      summary: 'Apoio botânico gentil e respiração consciente para acalmar um corpo em estado de vigilância.',
      allies: JSON.stringify(['Camomila (Matricaria chamomilla)', 'Erva-cidreira / Melissa (Melissa officinalis)', 'Palha de aveia (Avena sativa)']),
      somatic: JSON.stringify(['Expiração prolongada: inspire contando até 4 e expire suavemente contando até 6 por 90 segundos', 'Pausa somática percebendo o apoio dos pés no chão', 'Chá morno ao entardecer em ambiente acolhedor']),
      cautions: JSON.stringify(['Evitar cafeína e telas brilhantes no fim do dia', 'Conversar com seu médico se usar medicamentos calmantes']),
      pregnancy: 'Tranquilo em chás caseiros leves; consulte sua equipe de saúde antes de usar extratos concentrados.',
      escalation: JSON.stringify(['Crises de pânico frequentes', 'Falta de ar intensa ou dor torácica', 'Ansiedade persistente que prejudique a rotina básica'])
    }
  },
  {
    id: 'trouble-sleeping',
    category: 'Sleep',
    slug: 'trouble-falling-staying-asleep',
    en: {
      title: 'Trouble falling or staying asleep',
      summary: 'Restoring the natural circadian rhythm with evening rituals, nervine teas, and body quietness.',
      allies: JSON.stringify(['Passionflower (Passiflora incarnata)', 'Valerian Root (Valeriana officinalis)', 'Magnesium-rich foods (pumpkin seeds, almonds)']),
      somatic: JSON.stringify(['Consistent wake time seven days a week', 'Dim indoor lighting 60 minutes before bed', 'Warm foot bath or chamomile tea ritual']),
      cautions: JSON.stringify(['Valerian can cause morning grogginess in some individuals; start with small servings', 'Do not combine with prescription sleeping pills']),
      pregnancy: 'Valerian is generally avoided in pregnancy; rely on chamomile and gentle wind-down rhythms instead.',
      escalation: JSON.stringify(['Chronic insomnia lasting more than a month', 'Loud snoring, choking, or gasping during sleep (screening for sleep apnea)', 'Extreme daytime exhaustion causing unsafe driving'])
    },
    es: {
      title: 'Dificultad para conciliar o mantener el sueño',
      summary: 'Armonizar el ritmo natural mediante rituales vespertinos, plantas sedantes suaves y descanso mental.',
      allies: JSON.stringify(['Pasiflora o flor de la pasión (Passiflora incarnata)', 'Valeriana (Valeriana officinalis)', 'Alimentos ricos en magnesio (semillas de calabaza, almendras)']),
      somatic: JSON.stringify(['Mantener la misma hora al despertar todos los días', 'Bajar la intensidad de las luces una hora antes de dormir', 'Baño de pies tibio o infusión reconfortante']),
      cautions: JSON.stringify(['La valeriana puede causar somnolencia matutina en algunas personas; comienza con cantidades moderadas', 'No combinar con somníferos recetados']),
      pregnancy: 'Se recomienda evitar la valeriana durante el embarazo; opta por manzanilla y rutinas de relajación.',
      escalation: JSON.stringify(['Insomnio severo por más de cuatro semanas', 'Ronquidos intensos o pausas respiratorias al dormir', 'Somnolencia diurna peligrosa'])
    },
    'pt-BR': {
      title: 'Dificuldade para adormecer ou manter o sono',
      summary: 'Restauração do ritmo de descanso com rituais noturnos simples, chás aromáticos e desaceleração.',
      allies: JSON.stringify(['Passiflora / Maracujá (Passiflora incarnata)', 'Valeriana (Valeriana officinalis)', 'Alimentos fontes de magnésio (sementes, castanhas)']),
      somatic: JSON.stringify(['Horário regular para acordar pela manhã', 'Redução de luzes e telas 60 minutos antes de se deitar', 'Ritual de chá morno e leitura leve']),
      cautions: JSON.stringify(['A valeriana pode provocar lentidão matinal em organismos sensíveis; use doses pequenas', 'Não misturar com medicamentos para dormir']),
      pregnancy: 'Evite a valeriana na gestação; prefira camomila leve e práticas de respiração.',
      escalation: JSON.stringify(['Insônia frequente há mais de um mês', 'Engasgos ou roncos fortes durante a noite', 'Cansaço excessivo que afete a segurança no trânsito'])
    }
  },
  {
    id: 'tension-headaches',
    category: 'Somatic Aches',
    slug: 'tension-headaches',
    en: {
      title: 'Tension headaches and neck stiffness',
      summary: 'Relieving everyday pressure from prolonged focus, dehydration, and shoulder bracing.',
      allies: JSON.stringify(['Peppermint essential oil (Mentha piperita, diluted topically on temples/neck)', 'Feverfew (Tanacetum parthenium)', 'Hydration with trace minerals']),
      somatic: JSON.stringify(['Drink 250–350 ml water immediately upon noticing early tightness', 'Five-minute neck rolls and shoulder shrugs', 'Ten minutes of outdoor natural light without screens']),
      cautions: JSON.stringify(['Always dilute peppermint oil in a carrier oil before skin application', 'Do not use feverfew if allergic to ragweed']),
      pregnancy: 'Avoid feverfew during pregnancy. Use cold compresses, gentle shoulder stretches, and adequate hydration.',
      escalation: JSON.stringify(['Sudden "thunderclap" headache of unprecedented severity', 'Headache accompanied by high fever, stiff neck, or confusion', 'Neurological signs: vision changes, weakness, or slurred speech'])
    },
    es: {
      title: 'Dolores de cabeza por tensión y rigidez',
      summary: 'Alivio de la sobrecarga muscular por concentración continua, deshidratación y postura fija.',
      allies: JSON.stringify(['Menta piperita (aceite diluido en sienes y nuca)', 'Matricaria o santamaría (Tanacetum parthenium)', 'Agua fresca con electrolitos naturales']),
      somatic: JSON.stringify(['Beber un vaso de agua ante los primeros avisos de tensión', 'Movimientos suaves de hombros y cuello durante cinco minutos', 'Paseo breve a la luz del día sin mirar pantallas']),
      cautions: JSON.stringify(['Diluir siempre el aceite de menta en un aceite vegetal base', 'Evitar la matricaria si hay alergia a plantas compuestas']),
      pregnancy: 'No utilizar matricaria en el embarazo. Emplear compresas frescas, descanso e hidratación adecuada.',
      escalation: JSON.stringify(['Dolor de cabeza repentino y de intensidad extrema nunca antes sentida', 'Fiebre alta con rigidez de nuca', 'Alteraciones visuales, debilidad en extremidades o dificultad para hablar'])
    },
    'pt-BR': {
      title: 'Dores de cabeça por tensão e rigidez no pescoço',
      summary: 'Alívio para a sobrecarga física decorrente de esforço visual, postura e desidratação.',
      allies: JSON.stringify(['Óleo essencial de hortelã-pimenta (diluído na nuca e têmporas)', 'Tanaceto (Tanacetum parthenium)', 'Boa hidratação ao longo do dia']),
      somatic: JSON.stringify(['Beber um copo d’água aos primeiros sinais de incômodo', 'Movimentos circulares com os ombros por alguns minutos', 'Pausa de dez minutos ao ar livre sem telas']),
      cautions: JSON.stringify(['Sempre dilua o óleo essencial em óleo carreador antes de aplicar na pele', 'Atenção a pessoas com alergias botânicas']),
      pregnancy: 'Evitar o tanaceto na gravidez. Priorize compressas mornas ou frias e descanso adequado.',
      escalation: JSON.stringify(['Dor súbita e explosiva de intensidade incomum', 'Febre associada a rigidez na nuca', 'Visão turva, dormência ou fraqueza súbita'])
    }
  },
  {
    id: 'digestive-upset',
    category: 'Digestion',
    slug: 'digestive-upset-bloating',
    en: {
      title: 'Digestive upset, bloating, and nervous stomach',
      summary: 'Gentle warming botanicals and unhurried meal rhythms for gut sensitivity and stress-related tension.',
      allies: JSON.stringify(['Ginger root (Zingiber officinale)', 'Fennel seed (Foeniculum vulgare)', 'Peppermint leaf (Mentha piperita)']),
      somatic: JSON.stringify(['Slow, unhurried eating without screens or distressing news', 'Warm ginger or fennel tea 20 minutes post-meal', 'Gentle 10–15 minute walk after eating to support natural peristalsis']),
      cautions: JSON.stringify(['Peppermint can aggravate gastroesophageal reflux (GERD) in some individuals by relaxing the lower esophageal sphincter']),
      pregnancy: 'Moderate culinary ginger is widely used for nausea; avoid large medicinal doses without obstetrical guidance.',
      escalation: JSON.stringify(['Unintended significant weight loss', 'Persistent severe abdominal pain or vomiting', 'Blood in stool or black tarry stools'])
    },
    es: {
      title: 'Malestar digestivo, pesadez e inflamación',
      summary: 'Plantas tradicionales carminativas y ritmos tranquilos para acompañar la digestión y el estómago sensible.',
      allies: JSON.stringify(['Jengibre (Zingiber officinale)', 'Semillas de hinojo (Foeniculum vulgare)', 'Menta verde o piperita (Mentha piperita)']),
      somatic: JSON.stringify(['Comer despacio, masticando con calma y sin pantallas', 'Infusión tibia de jengibre o hinojo después de los alimentos', 'Paseo suave de diez minutos para favorecer la digestión']),
      cautions: JSON.stringify(['La menta puede aumentar el reflujo en personas con acidez estomacal']),
      pregnancy: 'El jengibre suave es tradicional para náuseas matutinas; consultar con el médico antes de concentrados.',
      escalation: JSON.stringify(['Pérdida de peso involuntaria', 'Dolor abdominal agudo o persistente', 'Presencia de sangre en heces o vómitos recurrentes'])
    },
    'pt-BR': {
      title: 'Desconforto digestivo, estufamento e digestão lenta',
      summary: 'Chás digestivos tradicionais e pausas conscientes para acalmar o estômago sob tensão.',
      allies: JSON.stringify(['Gengibre (Zingiber officinale)', 'Sementes de erva-doce / funcho (Foeniculum vulgare)', 'Hortelã (Mentha piperita)']),
      somatic: JSON.stringify(['Refeições sem pressa, longe de telas e discussões', 'Chá morno de funcho ou gengibre após as refeições', 'Caminhada leve de dez minutos para auxiliar o trânsito intestinal']),
      cautions: JSON.stringify(['A hortelã pode acentuar o refluxo em pessoas propensas a azia']),
      pregnancy: 'O gengibre em doses culinárias é bem aceito para enjoo; evite extratos fortes sem orientação obstétrica.',
      escalation: JSON.stringify(['Perda de peso sem causa aparente', 'Dor abdominal intensa e contínua', 'Sinais de sangramento digestivo'])
    }
  },
  {
    id: 'inflammation-achiness',
    category: 'Somatic Aches',
    slug: 'low-grade-inflammation-achiness',
    en: {
      title: 'Low-grade inflammation & systemic achiness',
      summary: 'Nourishing the body through colorful whole foods, restorative sleep, and gentle circulatory movement.',
      allies: JSON.stringify(['Turmeric root (Curcuma longa) with black pepper', 'Tart cherry juice', 'Omega-3 rich foods (flaxseeds, walnuts)']),
      somatic: JSON.stringify(['Daily joint circles and unhurried stretching', 'Protecting a 7–8 hour sleep sanctuary', 'Alternating warm and cool compresses for joint ease']),
      cautions: JSON.stringify(['Turmeric in high therapeutic doses can thin blood; consult a physician if taking anticoagulants']),
      pregnancy: 'Use turmeric freely as a culinary spice; avoid concentrated curcumin supplements during pregnancy.',
      escalation: JSON.stringify(['Hot, swollen, red joints with fever', 'Morning stiffness lasting longer than an hour daily', 'Unexplained joint pain traveling between limbs'])
    },
    es: {
      title: 'Molestias articulares y sensación de pesadez corporal',
      summary: 'Nutrición rica en antioxidantes, descanso nocturno reparador y movimiento suave para el cuerpo cansado.',
      allies: JSON.stringify(['Cúrcuma (Curcuma longa) con un toque de pimienta negra', 'Cerezas ácidas o frutos rojos', 'Semillas de lino y nueces ricas en omega-3']),
      somatic: JSON.stringify(['Movimientos circulares de articulaciones cada mañana', 'Cuidar una ventana de sueño de 7 a 8 horas', 'Compresas templadas en zonas con rigidez']),
      cautions: JSON.stringify(['Dosis elevadas de cúrcuma pueden interactuar con anticoagulantes; consultar con el médico']),
      pregnancy: 'Consumir cúrcuma como condimento culinario; evitar suplementos concentrados en el embarazo.',
      escalation: JSON.stringify(['Articulaciones inflamadas, calientes y enrojecidas', 'Rigidez matutina intensa que dure más de una hora', 'Dolor acompañado de fiebre'])
    },
    'pt-BR': {
      title: 'Sensação de cansaço corporal e rigidez articular',
      summary: 'Alimentação protetora, sono de qualidade e movimento gentil para desarmar o desconforto diário.',
      allies: JSON.stringify(['Cúrcuma / Açafrão-da-terra (Curcuma longa) com pimenta-do-reino', 'Frutas vermelhas', 'Sementes de linhaça e nozes']),
      somatic: JSON.stringify(['Alongamento suave ao acordar e rotação articular', 'Prioridade para uma noite de sono de 7 a 8 horas', 'Bolsa de água morna nos pontos de tensão']),
      cautions: JSON.stringify(['Extratos concentrados de cúrcuma exigem cautela em quem toma anticoagulantes']),
      pregnancy: 'Seguro como tempero na comida; evitar cápsulas concentradas durante a gravidez.',
      escalation: JSON.stringify(['Articulações visivelmente inchadas com calor e rubor', 'Rigidez matinal severa prolongada', 'Dores articulares associadas a febre'])
    }
  },
  {
    id: 'unexplained-fatigue',
    category: 'Vitality',
    slug: 'fatigue-without-clear-cause',
    en: {
      title: 'Fatigue without a clear cause',
      summary: 'Approaching low energy as a whole-system invitation to rest, assess rhythms, and schedule essential medical screening.',
      allies: JSON.stringify(['Ashwagandha (Withania somnifera) — with clinician review', 'Rhodiola rosea', 'Nourishing broths']),
      somatic: JSON.stringify(['Morning outdoor sunlight exposure within 30 minutes of waking', 'Regular balanced meals avoiding sudden blood sugar spikes', 'Gentle screen-free wind-down ritual at twilight']),
      cautions: JSON.stringify(['Never assume prolonged exhaustion is simply "burnout" without basic clinical bloodwork (iron/ferritin, thyroid panel, vitamin D, and metabolic markers)']),
      pregnancy: 'Adaptogenic herbs like ashwagandha and rhodiola are not recommended in pregnancy. Rely on restorative sleep and nutritious food.',
      escalation: JSON.stringify(['Profound exhaustion that prevents leaving bed', 'Unexplained night sweats, swollen lymph nodes, or fever', 'Extreme daytime sleepiness indicating possible sleep apnea'])
    },
    es: {
      title: 'Cansancio persistente sin causa aparente',
      summary: 'Una mirada integral a la falta de energía: revisar ritmos de vida, nutrición y descartar causas clínicas.',
      allies: JSON.stringify(['Ashwagandha (Withania somnifera) — previa consulta profesional', 'Rodiola (Rhodiola rosea)', 'Caldos caseros de verduras']),
      somatic: JSON.stringify(['Exposición a la luz natural matutina en los primeros 30 minutos', 'Comidas a horarios fijos para estabilizar la energía', 'Pausa relajante al anochecer sin pantallas']),
      cautions: JSON.stringify(['No asumir que todo cansancio es estrés; es fundamental realizar análisis clínicos básicos (hierro, tiroides, vitamina D)']),
      pregnancy: 'Evitar plantas adaptógenas en el embarazo. Priorizar el descanso y la alimentación equilibrada.',
      escalation: JSON.stringify(['Fatiga extrema que impida levantarse de la cama', 'Sudores nocturnos, ganglios inflamados o fiebre inexplicable', 'Pausas en la respiración al dormir'])
    },
    'pt-BR': {
      title: 'Cansaço constante e falta de disposição',
      summary: 'Acolhendo o cansaço como um sinal do corpo para revisar hábitos e realizar exames laboratoriais essenciais.',
      allies: JSON.stringify(['Ashwagandha (Withania somnifera) — com orientação profissional', 'Rhodiola rosea', 'Sopas e caldos nutritivos']),
      somatic: JSON.stringify(['Luz solar pela manhã logo após acordar', 'Alimentação equilibrada para evitar picos de glicemia', 'Desconexão de telas ao anoitecer']),
      cautions: JSON.stringify(['O cansaço crônico requer avaliação médica (ferritina, tireoide, vitamina D e hemograma)']),
      pregnancy: 'Plantas adaptógenas devem ser evitadas na gestação. Valorize o repouso e a boa hidratação.',
      escalation: JSON.stringify(['Exaustão que impeça os cuidados básicos do dia', 'Sudorese noturna ou febre sem motivo evidente', 'Sonolência excessiva durante o dia'])
    }
  },
  {
    id: 'low-mood-grief',
    category: 'Mood',
    slug: 'low-mood-grief-flatness',
    en: {
      title: 'Low mood, grief, and emotional flatness',
      summary: 'Gentle companionship, light exposure, and contemplative care when joy feels distant.',
      allies: JSON.stringify(['St. John’s Wort (Hypericum perforatum) — CAUTION: extensive drug interactions', 'Holy Basil / Tulsi (Ocimum sanctum)', 'Chamomile and lavender infusions']),
      somatic: JSON.stringify(['Twenty minutes of unhurried outdoor walking in natural daylight', 'Gentle loving-kindness reflection for yourself and one supportive person', 'Honoring grief with the continuing bond practice']),
      cautions: JSON.stringify(['St. John’s Wort interacts dangerously with antidepressants (SSRIs/SNRIs), birth control pills, and blood thinners; always speak with a pharmacist first']),
      pregnancy: 'Avoid St. John’s Wort during pregnancy. Prioritize counseling, gentle walks, and community connection.',
      escalation: JSON.stringify(['Thoughts of suicide or self-harm (Call or text 988 immediately)', 'Persistent feelings of total hopelessness lasting over two weeks', 'Inability to care for basic personal hygiene or eat'])
    },
    es: {
      title: 'Desánimo, tristeza profunda y desgana',
      summary: 'Acompañamiento respetuoso, luz natural y prácticas de afecto cuando el ánimo decae.',
      allies: JSON.stringify(['Hierba de San Juan (Hypericum perforatum) — ATENCIÓN: múltiples interacciones farmacológicas', 'Albahaca sagrada o Tulsi (Ocimum sanctum)', 'Infusión reconfortante de manzanilla']),
      somatic: JSON.stringify(['Caminar veinte minutos bajo la luz del sol', 'Práctica de compasión y ternura hacia uno mismo', 'Espacio contenido para dar voz a la tristeza']),
      cautions: JSON.stringify(['La hierba de San Juan interactúa con antidepresivos, anticonceptivos y anticoagulantes; consultar siempre a un profesional']),
      pregnancy: 'No usar hierba de San Juan en el embarazo. Apóyate en personas de confianza y acompañamiento profesional.',
      escalation: JSON.stringify(['Pensamientos de autolesión o suicidio (Comunícate de inmediato con el 988 o servicios de emergencia)', 'Tristeza inmovilizante por más de dos semanas', 'Dificultad severa para alimentarse o levantarse'])
    },
    'pt-BR': {
      title: 'Desânimo, tristeza e sensação de vazio',
      summary: 'Presença acolhedora, contato com a natureza e práticas de carinho quando o coração está pesado.',
      allies: JSON.stringify(['Erva-de-são-joão (Hypericum perforatum) — ATENÇÃO: fortes interações medicamentosas', 'Manjericão-sagrado / Tulsi (Ocimum sanctum)', 'Infusão de camomila e erva-doce']),
      somatic: JSON.stringify(['Caminhada de vinte minutos à luz do dia', 'Prática da gentileza consigo mesmo em três passos', 'Momento de acolhimento para o que você está sentindo']),
      cautions: JSON.stringify(['A erva-de-são-joão altera a eficácia de antidepressivos, anticoncepcionais e outros remédios']),
      pregnancy: 'Evitar erva-de-são-joão na gravidez. Busque apoio em profissionais de saúde mental e pessoas queridas.',
      escalation: JSON.stringify(['Pensamentos de machucar a si mesmo (Ligue ou envie mensagem ao 988 ou serviços de crise)', 'Sensação paralisante de desesperança contínua', 'Incapacidade de realizar cuidados essenciais'])
    }
  },
  {
    id: 'stress-overwhelm',
    category: 'Nervous System',
    slug: 'stress-overwhelm',
    en: {
      title: 'Stress, sensory overload, and burnout',
      summary: 'Creating intentional pauses, setting clean interpersonal limits, and resetting an over-stimulated nervous system.',
      allies: JSON.stringify(['Lemon Balm tea (Melissa officinalis)', 'Milky Oat Tops (Avena sativa)', 'Epsom salt warm baths']),
      somatic: JSON.stringify(['Sigh breathing: two quick inhales through the nose, long audible exhale through the mouth', 'Setting one clear boundary sentence today', '15-minute nature immersion without phone']),
      cautions: JSON.stringify(['Stress manifests somatically; do not ignore new physical symptoms as "just stress" without clinical check']),
      pregnancy: 'Gentle herbal teas like lemon balm and oat straw are safe culinary choices; avoid extreme hot baths.',
      escalation: JSON.stringify(['Severe panic attacks with disorientation', 'Chest pain or irregular heart palpitations', 'Complete emotional detachment or depersonalization'])
    },
    es: {
      title: 'Estrés continuo y sobrecarga sensorial',
      summary: 'Espacios de silencio, límites sanos y respiración calmante para aliviar la sobreestimulación.',
      allies: JSON.stringify(['Toronjil o melisa (Melissa officinalis)', 'Avena verde (Avena sativa)', 'Baños tibios con sales minerales']),
      somatic: JSON.stringify(['Suspiro fisiológico: doble inhalación corta por la nariz y exhalación larga y suave por la boca', 'Decir un "no" sereno a un compromiso no esencial', 'Quince minutos en un parque o jardín sin teléfono']),
      cautions: JSON.stringify(['No descartar síntomas físicos nuevos sin una revisión médica adecuada']),
      pregnancy: 'Infusiones suaves de melisa son bien toleradas; evitar baños de agua excesivamente caliente.',
      escalation: JSON.stringify(['Crisis de angustia con confusión', 'Dolor u opresión en el pecho', 'Desconexión emocional severa'])
    },
    'pt-BR': {
      title: 'Sobrecarga de estímulos e estresse contínuo',
      summary: 'Pausas conscientes, limites claros nas relações e respiração relaxante para acalmar os sentidos.',
      allies: JSON.stringify(['Erva-cidreira (Melissa officinalis)', 'Aveia em infusão suave (Avena sativa)', 'Escalda-pés com água morna e sais']),
      somatic: JSON.stringify(['Suspiro fisiológico: duas inspirações curtas pelo nariz e uma expiração longa e solta pela boca', 'Praticar um limite claro sem se justificar demais', 'Pausa ao ar livre em contato com plantas sem celular']),
      cautions: JSON.stringify(['Sintomas corporais novos merecem avaliação médica preventiva']),
      pregnancy: 'Chá de erva-cidreira em doses leves é seguro; evite banhos de imersão muito quentes.',
      escalation: JSON.stringify(['Crises frequentes de falta de ar e taquicardia', 'Dor torácica persistente', 'Sensação de perda de contato com a realidade'])
    }
  },
  {
    id: 'common-colds',
    category: 'Immunity',
    slug: 'common-colds-seasonal-sniffles',
    en: {
      title: 'Common colds and seasonal sniffles',
      summary: 'Supporting the body’s innate immune response with hydration, botanical warmth, and restful recuperation.',
      allies: JSON.stringify(['Elderberry syrup (Sambucus nigra)', 'Fresh Ginger & Honey infusion', 'Echinacea (Echinacea purpurea)']),
      somatic: JSON.stringify(['Warm saline nasal rinses with distilled water', 'Prioritizing extra sleep: 9–10 hours during acute symptoms', 'Warm steam inhalation with a drop of thyme or eucalyptus oil']),
      cautions: JSON.stringify(['Herbal supports do not replace medical treatment, antiviral therapy, or vaccines', 'Always use distilled or boiled water for nasal irrigation']),
      pregnancy: 'Elderberry syrup in standard culinary amounts is generally well tolerated; consult your prenatal provider regarding echinacea.',
      escalation: JSON.stringify(['Difficulty breathing, wheezing, or chest pain', 'High fever lasting more than 72 hours', 'Symptoms that significantly worsen after initial improvement'])
    },
    es: {
      title: 'Resfriados comunes y molestias de estación',
      summary: 'Apoyar las defensas naturales del cuerpo mediante descanso, hidratación y calor botánico.',
      allies: JSON.stringify(['Jarabe suave de saúco (Sambucus nigra)', 'Infusión de jengibre fresco con limón y miel', 'Equinácea (Echinacea purpurea)']),
      somatic: JSON.stringify(['Lavados nasales con solución salina estéril', 'Aumentar las horas de descanso nocturno', 'Vahos de vapor tibio para despejar las vías respiratorias']),
      cautions: JSON.stringify(['Las plantas no reemplazan vacunas ni tratamientos médicos necesarios', 'Usar siempre agua hervida o destilada para lavados nasales']),
      pregnancy: 'Consumir miel con limón y caldos tibios; consultar sobre el uso de equinácea durante el embarazo.',
      escalation: JSON.stringify(['Dificultad para respirar o silbidos en el pecho', 'Fiebre alta por más de tres días consecutivos', 'Recaída brusca tras una mejoría inicial'])
    },
    'pt-BR': {
      title: 'Resfriados e indisposição de mudança de tempo',
      summary: 'Apoio ao sistema imunológico com repouso, hidratação abundante e chás reconfortantes.',
      allies: JSON.stringify(['Xarope de sabugueiro (Sambucus nigra)', 'Chá de gengibre fresco com limão e mel', 'Equinácea (Echinacea purpurea)']),
      somatic: JSON.stringify(['Lavagem nasal com soro fisiológico estéril', 'Dormir mais cedo para dar tempo ao corpo de se recuperar', 'Inalação de vapor morno para aliviar a congestão']),
      cautions: JSON.stringify(['Cuidados naturais não substituem vacinas nem antibióticos quando necessários', 'Higienizar bem os recipientes de lavagem nasal']),
      pregnancy: 'Hidratação e chás leves são ideais; confirme com seu obstetra o uso de equinácea.',
      escalation: JSON.stringify(['Falta de ar ou dor ao respirar fundo', 'Febre alta persistente por mais de 72 horas', 'Piora repentina dos sintomas'])
    }
  },
  {
    id: 'menstrual-discomfort',
    category: 'Women’s Health',
    slug: 'menstrual-discomfort-cramps',
    en: {
      title: 'Menstrual discomfort and pelvic tension',
      summary: 'Warmth, pelvic easing movements, and antispasmodic herbs for monthly cycle tenderness.',
      allies: JSON.stringify(['Cramp Bark (Viburnum opulus)', 'Ginger root (Zingiber officinale)', 'Raspberry Leaf (Rubus idaeus)']),
      somatic: JSON.stringify(['Warm hot water bottle or heating pad over lower abdomen and lower back', 'Gentle restorative child’s pose or supported pelvic butterfly stretch', 'Cycle journaling to identify patterns in rest and energy']),
      cautions: JSON.stringify(['Raspberry leaf is traditionally avoided in early pregnancy unless guided by a midwife']),
      pregnancy: 'Menstrual remedies do not apply in pregnancy; any acute pelvic pain or bleeding requires immediate obstetrical care.',
      escalation: JSON.stringify(['Sudden, agonizing pelvic pain not relieved by heat or rest', 'Excessively heavy bleeding (soaking more than two pads an hour for consecutive hours)', 'Severe fever accompanying pelvic tenderness'])
    },
    es: {
      title: 'Molestias menstruales y tensión pélvica',
      summary: 'Calor reconfortante, posturas suaves y plantas antiespasmódicas para los días del ciclo.',
      allies: JSON.stringify(['Corteza de viburno o cramp bark (Viburnum opulus)', 'Jengibre (Zingiber officinale)', 'Hojas de frambueso (Rubus idaeus)']),
      somatic: JSON.stringify(['Compresa tibia en el bajo vientre y zona lumbar', 'Postura suave de descanso con cojines bajo las rodillas', 'Llevar un diario del ciclo para sincronizar el ritmo de trabajo']),
      cautions: JSON.stringify(['Evitar infusiones de frambueso en el primer trimestre de embarazo sin indicación']),
      pregnancy: 'Cualquier dolor pélvico agudo o sangrado en el embarazo debe ser revisado de inmediato.',
      escalation: JSON.stringify(['Dolor pélvico repentino e insoportable', 'Sangrado muy abundante que empape compresas en lapsos cortos', 'Fiebre acompañada de dolor pélvico'])
    },
    'pt-BR': {
      title: 'Cólicas menstruais e desconforto pélvico',
      summary: 'Calor local, movimentos suaves de alívio e chás para os dias mais sensíveis do ciclo.',
      allies: JSON.stringify(['Viburno / Cramp bark (Viburnum opulus)', 'Gengibre (Zingiber officinale)', 'Folhas de framboeseira (Rubus idaeus)']),
      somatic: JSON.stringify(['Bolsa de água quente sobre o abdômen e na lombar', 'Postura de descanso com almofadas apoiando o corpo', 'Anotar as fases do ciclo para desacelerar nos dias necessários']),
      cautions: JSON.stringify(['Chá de folha de framboesa deve ser evitado no início da gravidez sem orientação']),
      pregnancy: 'Dores pélvicas ou sangramento na gestação requerem atendimento médico imediato.',
      escalation: JSON.stringify(['Dor intensa e súbita que não cede com calor ou repouso', 'Fluxo excessivamente hemorrágico', 'Febre associada a cólicas agudas'])
    }
  },
  {
    id: 'skin-sensitivity',
    category: 'Skin',
    slug: 'skin-irritation-sensitivity',
    en: {
      title: 'Skin irritation, dryness, and sensitivity',
      summary: 'Simplifying topical routines, honoring skin barrier integrity, and applying soothing botanical compresses.',
      allies: JSON.stringify(['Calendula flower (Calendula officinalis)', 'Colloidal oatmeal baths', 'Pure Aloe Vera inner leaf gel']),
      somatic: JSON.stringify(['Lukewarm short showers instead of steaming hot water', 'Fragrance-free, minimal-ingredient moisturizers applied to damp skin', 'Soft cotton clothing without irritating synthetic tags']),
      cautions: JSON.stringify(['Always patch-test any new botanical oil on the inside of the wrist for 24 hours before broader use']),
      pregnancy: 'Calendula and oatmeal are exceptionally gentle and safe for external use across all life stages.',
      escalation: JSON.stringify(['Spreading redness with warmth and throbbing pain (possible cellulitis)', 'Blistering accompanied by fever', 'Hives spreading rapidly with any facial swelling or throat tightness (call 911)'])
    },
    es: {
      title: 'Sensibilidad en la piel, sequedad e irritación',
      summary: 'Simplificar el cuidado diario, proteger la barrera cutánea y utilizar compresas botánicas suaves.',
      allies: JSON.stringify(['Caléndula (Calendula officinalis)', 'Baños con harina fina de avena coloidal', 'Gel puro de sábila / aloe vera']),
      somatic: JSON.stringify(['Duchas con agua tibia en lugar de caliente', 'Hidratación con cremas neutras y sin perfumes tras el baño', 'Ropa de algodón suave que no cause fricción']),
      cautions: JSON.stringify(['Realizar una prueba en la muñeca antes de aplicar productos botánicos nuevos']),
      pregnancy: 'La caléndula y la avena son sumamente nobles y seguras para uso tópico.',
      escalation: JSON.stringify(['Enrojecimiento que se expande con calor y dolor punzante', 'Ampollas acompañadas de fiebre', 'Urticaria súbita con hinchazón en labios o garganta (urgencia médica)'])
    },
    'pt-BR': {
      title: 'Pele sensível, ressecamento e irritações leves',
      summary: 'Rotina simplificada de cuidados, respeito à barreira cutânea e compressas calmantes.',
      allies: JSON.stringify(['Calêndula (Calendula officinalis)', 'Aveia coloidal para banhos suaves', 'Babosa / Aloe vera pura']),
      somatic: JSON.stringify(['Banhos mornos e rápidos sem sabonetes agressivos', 'Hidratante sem fragrância aplicado com a pele ainda úmida', 'Peças de algodão confortáveis']),
      cautions: JSON.stringify(['Faça um teste de contato no antebraço antes de usar novos extratos na pele']),
      pregnancy: 'Calêndula e aveia são opções tópicas muito seguras e suaves para todas as idades.',
      escalation: JSON.stringify(['Área vermelha que se espalha com calor e dor (suspeita de infecção bacteriana)', 'Bolhas dolorosas com febre', 'Inchaço repentino no rosto ou dificuldade para engolir (emergência)'])
    }
  },
  {
    id: 'desk-aches',
    category: 'Physical Ergonomics',
    slug: 'everyday-aches-desk-phone',
    en: {
      title: 'Everyday aches from screen, desk, and phone',
      summary: 'Micro-movements, eye-rest breaks, and gentle somatic releases to break the habit of static posture.',
      allies: JSON.stringify(['Warm Arnica massage oil (Arnica montana — unbroken skin only)', 'Hydration with electrolytes', 'Topical magnesium lotion']),
      somatic: JSON.stringify(['The 20-20-20 rule: every 20 minutes, look at an object 20 feet away for 20 seconds', 'Hourly 30-second chest-opening stretch and neck roll', 'Setting top of screen at natural eye level to prevent forward head tilt']),
      cautions: JSON.stringify(['Never apply arnica to broken skin or open cuts']),
      pregnancy: 'Topical arnica in modest amounts is safe; maintain ergonomic support with pregnancy pillows.',
      escalation: JSON.stringify(['Radiating numbness, tingling, or electrical pain down an arm or leg', 'Sudden weakness in hands (dropping objects involuntarily)', 'Severe spinal pain following a fall or injury'])
    },
    es: {
      title: 'Sobrecarga física por pantallas y trabajo de escritorio',
      summary: 'Micromovimientos, pausas visuales y estiramientos suaves para compensar la postura sedentaria.',
      allies: JSON.stringify(['Aceite de árnica para masaje (Arnica montana — solo en piel sana)', 'Buena hidratación diaria', 'Loción suave con magnesio']),
      somatic: JSON.stringify(['Regla 20-20-20: cada 20 minutos, mira a lo lejos por 20 segundos para descansar la vista', 'Pausas breves para abrir el pecho y rotar los hombros', 'Ajustar la pantalla a la altura de los ojos para cuidar el cuello']),
      cautions: JSON.stringify(['No aplicar árnica sobre rasguños o heridas abiertas']),
      pregnancy: 'El árnica tópica suave es segura; acompañar con cojines de apoyo para la espalda.',
      escalation: JSON.stringify(['Hormigueo continuo o sensación eléctrica que baja por los brazos o piernas', 'Pérdida de fuerza en las manos', 'Dolor agudo en la columna'])
    },
    'pt-BR': {
      title: 'Tensões cotidianas do computador e do celular',
      summary: 'Micromovimentos, descanso para os olhos e alongamentos para desfazer a rigidez postural.',
      allies: JSON.stringify(['Óleo vegetal com arnica para massagem (Arnica montana — apenas na pele íntegra)', 'Hidratação constante', 'Creme com magnésio para relaxamento']),
      somatic: JSON.stringify(['Pausa 20-20-20: a cada 20 minutos, olhe para longe por 20 segundos para descansar a visão', 'Alongamento rápido de peito e pescoço a cada hora', 'Posicionar a tela na altura dos olhos para evitar sobrecarga cervical']),
      cautions: JSON.stringify(['Nunca passe arnica em ferimentos ou pele machucada']),
      pregnancy: 'O uso tópico leve de arnica é tranquilo; use almofadas para apoiar a postura.',
      escalation: JSON.stringify(['Formigamento constante ou choques descendo pelos braços ou pernas', 'Perda de força ao segurar objetos', 'Dor forte na coluna após impacto'])
    }
  }
];

export const crystals = [
  {
    id: 'amethyst',
    slug: 'amethyst',
    mohs: '7.0',
    en: {
      name: 'Amethyst',
      spiritual: 'Contemplation, quiet clarity, spiritual stillness',
      traditions: 'Used since antiquity across Mediterranean and Asian traditions to encourage clear-minded reflection and restful sleep.',
      appearance: 'Purple to deep violet quartz crystal, often showing natural geometric points and gentle color banding.',
      care: 'Rinse with clean water; keep out of prolonged direct sunlight to prevent natural color fading.',
      reflection: 'Hold the cool stone in your palm when feeling mentally scattered; let its deep purple hue remind you of steady, unhurried presence.',
      safety: 'Non-toxic, safe for everyday handling and water contact. Do not pulverize or inhale crystal dust.'
    },
    es: {
      name: 'Amatista',
      spiritual: 'Serenidad, contemplación y silencio interior',
      traditions: 'Apreciada desde la antigüedad para favorecer el descanso nocturno y la claridad mental durante la oración o la meditación.',
      appearance: 'Cuarzo de color violeta a púrpura profundo, con facetas cristalinas naturales y tonalidades cambiantes.',
      care: 'Se puede limpiar con agua fresca; conviene protegerla de la luz solar directa prolongada para conservar su color.',
      reflection: 'Sostén la piedra en la palma de la mano cuando haya inquietud mental, respirando al compás de su frescura.',
      safety: 'Piedra segura y no tóxica para uso cotidiano. Evita inhalar polvo mineral si se trabaja artesanalmente.'
    },
    'pt-BR': {
      name: 'Ametista',
      spiritual: 'Tranquilidade, serenidade e clareza mental',
      traditions: 'Utilizada historicamente em diversas culturas como símbolo de equilíbrio, sabedoria e apoio a um sono reparador.',
      appearance: 'Variedade de quartzo em tons que vão do lilás suave ao violeta profundo com formações geométricas.',
      care: 'Pode ser lavada em água corrente; evite deixá-la sob sol forte constante para não desbotar.',
      reflection: 'Apoie a pedra nas mãos durante uma pausa de respiração, deixando que sua cor profunda inspire calma.',
      safety: 'Mineral seguro para manuseio diário. Não ingerir e evitar inalação de pó em caso de quebra.'
    }
  },
  {
    id: 'rose-quartz',
    slug: 'rose-quartz',
    mohs: '7.0',
    en: {
      name: 'Rose Quartz',
      spiritual: 'Gentleness, self-compassion, heartfelt kindness',
      traditions: 'Cherished as a symbolic talisman of emotional warmth, reconciliation, and kindness toward oneself and others.',
      appearance: 'Soft translucent pink mineral with cloudy interior veining and a smooth, gentle luster.',
      care: 'Clean with warm water and a soft cloth. Avoid harsh chemical cleaners.',
      reflection: 'Place rose quartz over your heart center while practicing the three-part kindness pause.',
      safety: 'Completely safe for skin contact and water. Not for preparing ingestible elixirs.'
    },
    es: {
      name: 'Cuarzo rosa',
      spiritual: 'Ternura, autocompasión y afecto sincero',
      traditions: 'Símbolo tradicional de reconciliación y amor bondadoso hacia uno mismo y hacia los demás.',
      appearance: 'Mineral de tonalidad rosada suave y traslúcida, con vetas internas acogedoras.',
      care: 'Lavar con agua templada y paño suave. No exponer a productos químicos abrasivos.',
      reflection: 'Coloca el cuarzo rosa sobre el pecho mientras realizas la pausa de amabilidad personal.',
      safety: 'Seguro para el tacto y el agua. No utilizar para preparar aguas o elixires ingeribles.'
    },
    'pt-BR': {
      name: 'Quartzo rosa',
      spiritual: 'Gentileza, acolhimento e autocompaixão',
      traditions: 'Reconhecido como símbolo de afeto verdadeiro, paz nas relações e respeito pelos próprios sentimentos.',
      appearance: 'Cristal de cor rosa suave, translúcido e com aspecto delicado.',
      care: 'Limpar com água e pano macio. Evitar solventes ou produtos corrosivos.',
      reflection: 'Mantenha o cristal próximo ao coração enquanto pratica pensamentos de apreço por si mesmo.',
      safety: 'Mineral seguro para manuseio. Não indicado para infusões ou ingestão direta.'
    }
  },
  {
    id: 'black-tourmaline',
    slug: 'black-tourmaline',
    mohs: '7.0 - 7.5',
    en: {
      name: 'Black Tourmaline (Schorl)',
      spiritual: 'Grounding, firm boundaries, container of safety',
      traditions: 'Known across mineralogical and folklore traditions as a heavy anchor stone for grounding excess mental energy.',
      appearance: 'Opaque deep black with vertical striations, ridged texture, and natural mineral fractures.',
      care: 'Wipe with a damp cloth; dry thoroughly. Avoid soaking in water for extended periods due to natural micro-fissures.',
      reflection: 'Hold when setting clear interpersonal boundaries or stepping out of overwhelming public environments.',
      safety: 'Safe to handle. Brittle along natural cleavage planes; handle with care to avoid chipping.'
    },
    es: {
      name: 'Turmalina negra (Chorlo)',
      spiritual: 'Enraizamiento, límites saludables y firmeza',
      traditions: 'Piedra de referencia en el folclore mineral para anclar la energía y mantener el orden personal ante el ruido externo.',
      appearance: 'Negro opaco y brillante con estrías verticales y textura acanalada característica.',
      care: 'Limpiar con un paño ligeramente húmedo y secar de inmediato. No dejar sumergida por tiempo prolongado.',
      reflection: 'Sostenla al momento de definir un límite saludable en el trabajo o la familia.',
      safety: 'Segura para uso externo. Puede ser quebradiza si recibe golpes fuertes.'
    },
    'pt-BR': {
      name: 'Turmalina negra (Schorl)',
      spiritual: 'Aterramento, firmeza e limites conscientes',
      traditions: 'Tradicionalmente associada à sensação de proteção, estrutura pessoal e pés no chão.',
      appearance: 'Preta brilhante e opaca com estrias longitudinais naturais bem definidas.',
      care: 'Limpar com pano macio umedecido e secar bem. Evitar imersão longa em água.',
      reflection: 'Segure a turmalina ao praticar dizer um "não" consciente e cuidar do seu tempo.',
      safety: 'Segura para manuseio diário. Manusear com cuidado para não quebrar as bordas.'
    }
  },
  {
    id: 'selenite',
    slug: 'selenite',
    mohs: '2.0',
    en: {
      name: 'Selenite (Gypsum)',
      spiritual: 'Quiet stillness, space clearing, mental purification',
      traditions: 'Named after Selene, ancient Greek goddess of the moon; long utilized in contemplative traditions as a visual focus for gentle quietness.',
      appearance: 'Pearly white fibrous mineral with a glowing, satiny, moon-like luminescence.',
      care: 'DO NOT SOAK IN WATER. Selenite is a soft gypsum mineral and will degrade or dissolve in water. Clean with a dry, soft cloth.',
      reflection: 'Keep a selenite wand or bowl on your nightstand to mark the boundary between busy daytime activity and nighttime stillness.',
      safety: 'Very soft (Mohs 2). Avoid scratching, dropping, or moisture exposure. Never ingest.'
    },
    es: {
      name: 'Selenita (Yeso fibroso)',
      spiritual: 'Silencio límpido, claridad mental y recogimiento',
      traditions: 'Su nombre evoca a Selene, la diosa lunar griega; apreciada como recordatorio de la paz y la sencillez en el hogar.',
      appearance: 'Mineral blanco lechoso y fibroso con un brillo sedoso semejante a la luz de la luna.',
      care: 'NO SUMERGIR EN AGUA. La selenita es yeso mineral y se deteriora o disuelve con el agua. Limpiar en seco con paño suave.',
      reflection: 'Coloca una pieza de selenita en tu mesa de noche para señalar el final de la jornada y el inicio del descanso.',
      safety: 'Piedra muy delicada (Mohs 2). Proteger de golpes y humedad. No apta para consumo.'
    },
    'pt-BR': {
      name: 'Selenita (Gipsita)',
      spiritual: 'Serenidade pura, clareza e purificação do ambiente',
      traditions: 'Associada à deusa grega da lua, Selene; muito querida como símbolo de paz interior e desaceleração mental.',
      appearance: 'Mineral branco fibroso com brilho acetinado e suave translucidência.',
      care: 'NÃO MOLHAR. A selenita é um mineral solúvel em água e se desgasta facilmente. Limpar sempre a seco.',
      reflection: 'Deixe uma selenita na cabeceira da cama para marcar o momento de recolhimento da noite.',
      safety: 'Mineral muito macio e sensível (Mohs 2). Evitar quedas e umidade. Não ingerir.'
    }
  },
  {
    id: 'clear-quartz',
    slug: 'clear-quartz',
    mohs: '7.0',
    en: {
      name: 'Clear Quartz',
      spiritual: 'Intention, transparency, focused presence',
      traditions: 'Revered across every continent for millennia as the quintessential "light stone," used for holding focused prayers and intentions.',
      appearance: 'Prismatic, glass-clear to frosty white six-sided crystalline points with natural growth lines.',
      care: 'Extremely durable. Can be safely washed with cool water and mild soap.',
      reflection: 'Hold in morning sunlight while quietly naming your primary intention or virtue for the day.',
      safety: 'Completely non-toxic and physically robust. Handle natural points gently.'
    },
    es: {
      name: 'Cuarzo cristal o cristal de roca',
      spiritual: 'Claridad de intención, presencia y luminosidad',
      traditions: 'Venerado en diversas culturas como símbolo de transparencia y pureza, empleado para enfocar la oración y los buenos propósitos.',
      appearance: 'Cristales prismáticos transparentes con facetas limpias y destellos naturales.',
      care: 'Mineral muy resistente. Puede lavarse con agua templada y jabón suave.',
      reflection: 'Sostenlo a la luz del amanecer mientras nombras en silencio tu intención para el día.',
      safety: 'Completamente seguro y no tóxico para uso cotidiano.'
    },
    'pt-BR': {
      name: 'Quartzo cristal / Cristal de rocha',
      spiritual: 'Transparência, foco e intenção pura',
      traditions: 'Apreciado historicamente como símbolo de luz e clareza, utilizado para apoiar orações e momentos de contemplação.',
      appearance: 'Cristal transparente e brilhante, com facetas geométricas bem definidas.',
      care: 'Muito resistente e durável. Pode ser lavado com água corrente e sabão neutro.',
      reflection: 'Segure o cristal no início do dia e reflita sobre o propósito que você deseja cultivar hoje.',
      safety: 'Mineral seguro e estável para manuseio diário.'
    }
  },
  {
    id: 'lepidolite',
    slug: 'lepidolite',
    mohs: '2.5 - 3.0',
    en: {
      name: 'Lepidolite (Lithium Mica)',
      spiritual: 'Gentle transitions, soothing overactive thoughts, emotional balance',
      traditions: 'A lilac-gray or rose-colored member of the mica family naturally rich in lithium, traditionally associated with easing life transitions.',
      appearance: 'Soft lavender to pinkish-grey tabular plates or sparkling granular masses with pearly luster.',
      care: 'Soft and flaky due to mica structure. Clean with a very gentle dry brush. DO NOT soak in water or use for drinking elixirs.',
      reflection: 'Keep near your journal when processing difficult grief, major relocations, or career changes.',
      safety: 'Contains naturally bound lithium and aluminum. Safe for skin handling. Never ingest, crush, or prepare water infusions.'
    },
    es: {
      name: 'Lepidolita (Mica de litio)',
      spiritual: 'Transiciones suaves, calma mental y sosiego en los cambios',
      traditions: 'Variedad de mica en tonos lilas rica en litio mineral, empleada simbólicamente para amortiguar los momentos de cambio brusco.',
      appearance: 'Mineral en tonos lila a rosáceo con brillo perlado y láminas cristalinas brillantes.',
      care: 'Estructura hojosa y frágil. Limpiar suavemente con un cepillo seco. NO dejar en agua ni preparar elixires.',
      reflection: 'Acompáñate de esta piedra cuando escribas sobre cambios de vida o duelos recientes.',
      safety: 'Contiene litio mineral de forma natural. Segura para sostener en las manos; nunca ingerir ni triturar.'
    },
    'pt-BR': {
      name: 'Lepidolita (Mica com lítio)',
      spiritual: 'Paz nas transições, equilíbrio emocional e alívio de pensamentos agitados',
      traditions: 'Mineral da família das micas com tom lilás característico, conhecido na sabedoria popular por apoiar fases de mudança.',
      appearance: 'Coloração lilás ou rosada com lâminas brilhantes e textura perolada.',
      care: 'Mineral delicado e quebradiço. Limpar com pincel seco macio. NUNCA colocar na água para beber.',
      reflection: 'Mantenha por perto enquanto faz anotações sobre decisões importantes ou mudanças na sua rotina.',
      safety: 'Segura para manuseio externo. Nunca pulverizar nem ingerir.'
    }
  },
  {
    id: 'smoky-quartz',
    slug: 'smoky-quartz',
    mohs: '7.0',
    en: {
      name: 'Smoky Quartz',
      spiritual: 'Rootedness, emotional container, transforming heaviness into stability',
      traditions: 'The national gem of Scotland, traditionally carried in brooch pins and talismans to provide rooted stability in turbulent times.',
      appearance: 'Translucent brownish-gray to deep smoky black quartz with warm golden-amber highlights.',
      care: 'Durable and hard. Wash safely with water and mild soap.',
      reflection: 'Hold in both palms while seated with feet firmly planted on the earth, allowing mental static to drain downward.',
      safety: 'Completely safe, durable, and non-toxic.'
    },
    es: {
      name: 'Cuarzo ahumado',
      spiritual: 'Enraizamiento, contenedor emocional y firmeza',
      traditions: 'Gema tradicional en las tierras altas escocesas, utilizada históricamente como amuleto de estabilidad en épocas de incertidumbre.',
      appearance: 'Cuarzo traslúcido de color café grisáceo a pardo ahumado con reflejos dorados profundos.',
      care: 'Muy resistente. Se limpia fácilmente con agua y jabón neutro.',
      reflection: 'Sostenlo sentado con los pies firmes en el suelo para invitar al cuerpo a soltar la sobrecarga.',
      safety: 'Completamente seguro y duradero para uso continuo.'
    },
    'pt-BR': {
      name: 'Quartzo fumê',
      spiritual: 'Pés no chão, estabilidade e acolhimento das emoções pesadas',
      traditions: 'Tradicionalmente usado como pedra de ancoragem, ajudando a dissipar o excesso de preocupação.',
      appearance: 'Quartzo translúcido em tonalidades que variam do cinza-acastanhado ao castanho escuro.',
      care: 'Mineral firme e resistente. Limpar com água corrente normalmente.',
      reflection: 'Segure o cristal sentado confortavelmente, sentindo o apoio firme da terra sob seus pés.',
      safety: 'Totalmente seguro e resistente para o dia a dia.'
    }
  },
  {
    id: 'fluorite',
    slug: 'fluorite',
    mohs: '4.0',
    en: {
      name: 'Fluorite',
      spiritual: 'Mental clarity, orderly thought, gentle discernment',
      traditions: 'Celebrated for its striking cubic crystal structures and vibrant color zoning, long considered an aid for focused study.',
      appearance: 'Banded translucent stone showing vivid greens, purples, blues, and clear zones in single specimens.',
      care: 'Moderate hardness (Mohs 4). Wipe with a soft damp cloth. Avoid harsh cleaners, acids, or hot water.',
      reflection: 'Place on your study or work table to encourage calm, methodical discernment instead of hurried reactivity.',
      safety: 'Safe to handle. Do not soak in drinking water or expose to acid.'
    },
    es: {
      name: 'Fluorita',
      spiritual: 'Claridad de ideas, orden mental y discernimiento tranquilo',
      traditions: 'Reconocida por sus fascinantes bandas de color y formaciones geométricas, valorada como apoyo para el estudio reflexivo.',
      appearance: 'Mineral traslúcido con franjas naturales en tonos verdes, violetas y azulados.',
      care: 'Dureza moderada (Mohs 4). Limpiar con paño húmedo suave. Evitar productos ácidos o agua muy caliente.',
      reflection: 'Ubícala en tu mesa de lectura para inspirar orden y serenidad al organizar tus ideas.',
      safety: 'Segura para el contacto manual. Evitar inmersiones en agua potable.'
    },
    'pt-BR': {
      name: 'Fluorita',
      spiritual: 'Clareza de pensamento, foco sereno e discernimento',
      traditions: 'Famosa pelas belas faixas de cores e simetria natural, apreciada como companheira de estudos e leituras profundas.',
      appearance: 'Cristal translúcido com faixas naturais em verde, violeta e tons azulados.',
      care: 'Sensível a arranhões (Mohs 4). Limpar com pano macio levemente umedecido. Evitar ácidos.',
      reflection: 'Deixe a fluorita na sua mesa de trabalho para lembrar de organizar uma tarefa por vez com calma.',
      safety: 'Segura para manuseio. Não utilizar para preparar águas aromatizadas.'
    }
  }
];
