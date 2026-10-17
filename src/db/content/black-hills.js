// src/db/content/black-hills.js
// Trilingual content for /black-hills: seasons, places to practice, a forest
// practice, safety, and local support lines.

const SEASON_ICONS = ['🌱', '☀️', '🍂', '❄️'];
export const PLACE_NAMES = [
  'Sylvan Lake', 'Spearfish Canyon', 'George S. Mickelson Trail', 'Wind Cave National Park',
  'Black Elk Peak', 'Bear Butte', 'Pactola Reservoir', 'Hot Springs'
];
export const FREE_PLACE_COUNT = 2;
export { SEASON_ICONS };

export const BLACK_HILLS = {
  en: {
    crumb: 'Black Hills',
    metaTitle: 'Black Hills Well-Being — KindWell',
    metaDesc: 'Seasonal living, places to slow down, and a forest practice from KindWell in the Black Hills of South Dakota.',
    h1a: 'Well-being, rooted', h1b: 'in the Black Hills.',
    lead: 'Ponderosa pine, granite, prairie, and very big skies. Here is how we live well with this land through the seasons, where we go to slow down, and how to stay safe and supported while you do.',
    guestH: 'A guest on old land',
    guest: 'The Black Hills are the homeland of the Lakota, who call them <em>He Sápa</em>, and are sacred to the Cheyenne, Arapaho, Kiowa, and other nations. Many people still pray and hold ceremony here. We try to move through these places as respectful guests: staying on trails, leaving offerings untouched, and learning the history from Native voices and museums rather than retelling it ourselves.',
    forestH: 'A ten-minute forest practice',
    forest: [
      '<strong>Arrive.</strong> Stop at a trailhead or any stand of pines. Put your phone away and feel your feet on the ground.',
      '<strong>Smell.</strong> Ponderosa bark warmed by the sun can smell like vanilla or butterscotch. Lean in and find out.',
      '<strong>Listen.</strong> Count five sounds: wind, birds, water, your breath, your steps.',
      '<strong>Touch.</strong> Rest a hand on bark, stone, or cool grass for three slow breaths.',
      '<strong>Leave a thank-you.</strong> Pick up one piece of litter on your way out.'
    ],
    seasonsH: 'Living with the seasons',
    tryLabel: 'Try:', careLabel: 'Care note:', practiceLabel: 'Practice:',
    placesH: 'Places to slow down',
    placesLead: 'Each comes with a small practice to try there. Check road and park conditions before you go; some areas need a park pass.',
    lockedH: (n) => `${n} more places, each with its own practice`,
    lockedP: 'The Mickelson Trail, Wind Cave, Black Elk Peak, Bear Butte, Pactola, and Hot Springs, plus full seasonal rhythms. Open to members from $5/mo.',
    seeMemberships: 'See memberships',
    safetyH: 'Staying safe out there',
    safety: [
      'Give bison at least 25 yards, more with calves. They are faster than they look.',
      'Weather changes fast, especially in spring and fall. Carry a layer and water, and tell someone your route.',
      'Cell service is patchy in the canyons and backcountry. Download maps before you leave.',
      'Get off ridges and peaks when you hear thunder.'
    ],
    supportH: 'Support close to home',
    support: [
      '<strong>988:</strong> call or text the Suicide &amp; Crisis Lifeline, any time.',
      '<strong>211:</strong> the Helpline Center connects South Dakotans with local services, from housing to counseling.',
      '<strong>911:</strong> for any emergency.'
    ],
    circleCta: 'Want company on the trail or a place to talk about life up here? Join the <a href="{circle}" style="text-decoration:underline;">Black Hills Neighbors</a> space in the Circle.',
    seasons: [
      { name: 'Spring', months: 'March – May', feel: 'Pasque flowers on the prairie edges, snowmelt in the creeks, and weather that swings from 70° to a blizzard in a day.', practices: ['Morning light walk: ten minutes outside before screens, even on grey days, to steady your sleep-wake rhythm.', 'Creek listening: sit by moving water for five minutes and name three separate sounds.', 'Clear one small corner of your home, not the whole house. Let it be enough.'], care: 'Spring pollen is real here. Keep windows closed on windy days if allergies flare, and rinse off after time outdoors.' },
      { name: 'Summer', months: 'June – August', feel: 'Long evenings, afternoon thunderstorms, crowded byways in rally and tourist season, and pine-scented heat.', practices: ['Go early: walk popular trails at sunrise, when they are quiet and cool.', 'Storm pause: when afternoon thunder rolls in, take it as a cue for ten minutes of rest indoors.', 'Protect your peace in busy season: take back roads, shop off-hours, and plan around crowds.'], care: 'At 5,000–7,000 feet the sun is stronger and the air drier. Drink more water than you think, and get off ridges when lightning starts.' },
      { name: 'Autumn', months: 'September – November', feel: 'Aspen and birch gold in Spearfish Canyon, the bison roundup, clear cool air, and the first hard frost.', practices: ['Gratitude gathering: on a walk, pick up or photograph one thing for each thing you are thankful for.', 'Harvest rhythm: cook one slow meal a week from local food and eat it without screens.', 'Before the cold comes, list three things that help you in winter and put them where you will see them.'], care: 'Shorter days can pull energy down. Notice it early; it is easier to keep a rhythm than to rebuild one.' },
      { name: 'Winter', months: 'December – February', feel: 'Quiet snow in the pines, sub-zero mornings, Chinook winds that melt everything overnight, and long dark evenings.', practices: ['Window light: sit near your brightest window for 20 minutes each morning with your coffee or tea.', 'Warm hands, steady breath: hold a warm mug, breathe out longer than in, and let your shoulders drop.', 'Weekly connection: one call, visit, or shared meal every week, on the calendar.'], care: 'If low mood lasts most days for two weeks or more each winter, talk to a clinician. Seasonal depression is common and very treatable.' }
    ],
    places: [
      { area: 'Custer State Park', why: 'A small granite-ringed lake with a level shoreline loop of about a mile. Good for a slow, mindful walk or sitting on the rocks.', practice: 'Walk the loop once at your normal pace, then once at half that pace, noticing each footfall.' },
      { area: 'Northern Hills', why: 'Limestone walls, waterfalls, and spruce. Roughlock and Spearfish Falls are short walks that reward attention.', practice: 'At a waterfall, try five minutes of open listening: let the sound fill your attention without naming it.' },
      { area: 'Deadwood to Edgemont', why: 'A gentle, crushed-gravel former rail line running over 100 miles, with trailheads in many towns. Ideal for an easy, steady walk.', practice: 'Pick a two-mile out-and-back. Leave earbuds out on the way out; on the way back, notice what you missed.' },
      { area: 'Southern Hills', why: 'Mixed-grass prairie above one of the world\'s longest caves. Open sky, bison, and prairie dogs.', practice: 'Lie on a blanket, well away from wildlife, and watch clouds for ten minutes. Breathe at their pace.' },
      { area: 'Black Elk Wilderness', why: 'The highest point in South Dakota. The climb is steady and the view is wide, a good place to reflect on perspective.', practice: 'At the top, name one worry, then look to the horizon in all four directions and ask how big it really is.' },
      { area: 'Near Sturgis', why: 'A sacred mountain for the Lakota, Cheyenne, and other nations, still used for prayer and ceremony. Visit quietly, as a guest.', practice: 'Walk in silence. Leave prayer cloths and offerings untouched and unphotographed. Respect is the practice here.' },
      { area: 'Central Hills', why: 'The largest reservoir in the Hills, with pullouts and shoreline for quiet sitting.', practice: 'Watch the water for a few minutes. When thoughts come, imagine setting each one on the surface.' },
      { area: 'Southern Hills', why: 'A historic town built around warm mineral springs, with a slower pace and sandstone buildings.', practice: 'Plan a "nothing day": no errands, a warm soak, a slow meal, and an early night.' }
    ]
  },

  es: {
    crumb: 'Black Hills',
    metaTitle: 'Bienestar en las Black Hills — KindWell',
    metaDesc: 'Vivir con las estaciones, lugares para bajar el ritmo y una práctica en el bosque, desde las Black Hills de Dakota del Sur.',
    h1a: 'Bienestar con raíces', h1b: 'en las Black Hills.',
    lead: 'Pinos ponderosa, granito, pradera y cielos inmensos. Así vivimos bien con esta tierra a lo largo del año, estos son los lugares adonde vamos a bajar el ritmo, y así puedes cuidarte y sentirte acompañado mientras lo haces.',
    guestH: 'Huéspedes en una tierra antigua',
    guest: 'Las Black Hills son la tierra natal del pueblo lakota, que las llama <em>He Sápa</em>, y son sagradas para los cheyenne, arapaho, kiowa y otras naciones. Mucha gente todavía reza y celebra ceremonias aquí. Intentamos recorrer estos lugares como huéspedes respetuosos: sin salir de los senderos, sin tocar las ofrendas y aprendiendo la historia de voces indígenas y museos en lugar de contarla nosotros.',
    forestH: 'Una práctica de diez minutos en el bosque',
    forest: [
      '<strong>Llega.</strong> Detente al inicio de un sendero o junto a unos pinos. Guarda el teléfono y siente los pies en el suelo.',
      '<strong>Huele.</strong> La corteza del pino ponderosa calentada por el sol puede oler a vainilla o caramelo. Acércate y descúbrelo.',
      '<strong>Escucha.</strong> Cuenta cinco sonidos: viento, pájaros, agua, tu respiración, tus pasos.',
      '<strong>Toca.</strong> Apoya la mano en la corteza, una piedra o el pasto fresco durante tres respiraciones lentas.',
      '<strong>Deja un gracias.</strong> Recoge un pedazo de basura al salir.'
    ],
    seasonsH: 'Vivir con las estaciones',
    tryLabel: 'Prueba:', careLabel: 'Para cuidarte:', practiceLabel: 'Práctica:',
    placesH: 'Lugares para bajar el ritmo',
    placesLead: 'Cada uno incluye una pequeña práctica para hacer allí. Revisa el estado de caminos y parques antes de ir; algunas zonas requieren pase.',
    lockedH: (n) => `${n} lugares más, cada uno con su práctica`,
    lockedP: 'El sendero Mickelson, Wind Cave, Black Elk Peak, Bear Butte, Pactola y Hot Springs, además de los ritmos completos de cada estación. Para miembros desde 5 USD/mes.',
    seeMemberships: 'Ver membresías',
    safetyH: 'Para estar seguro afuera',
    safety: [
      'Mantente al menos a 25 yardas (unos 23 m) de los bisontes, más si hay crías. Son más rápidos de lo que parecen.',
      'El clima cambia rápido, sobre todo en primavera y otoño. Lleva una capa y agua, y avisa a alguien tu ruta.',
      'La señal de celular es irregular en cañones y zonas remotas. Descarga los mapas antes de salir.',
      'Baja de crestas y cumbres cuando oigas truenos.'
    ],
    supportH: 'Apoyo cerca de casa',
    support: [
      '<strong>988:</strong> llama o escribe a la Línea de Prevención del Suicidio y Crisis, a cualquier hora (con opción en español).',
      '<strong>211:</strong> el Helpline Center conecta a la gente de Dakota del Sur con servicios locales, desde vivienda hasta consejería.',
      '<strong>911:</strong> para cualquier emergencia.'
    ],
    circleCta: '¿Quieres compañía en el sendero o un lugar para hablar de la vida por aquí? Únete al espacio <a href="{circle}" style="text-decoration:underline;">Vecinos de las Black Hills</a> en el Círculo.',
    seasons: [
      { name: 'Primavera', months: 'marzo – mayo', feel: 'Flores de Pascua en los bordes de la pradera, deshielo en los arroyos y un clima que pasa de 21 °C a una tormenta de nieve en un día.', practices: ['Caminata de luz matinal: diez minutos afuera antes de las pantallas, aunque esté gris, para ordenar tu ritmo de sueño.', 'Escuchar el arroyo: siéntate junto al agua cinco minutos y nombra tres sonidos distintos.', 'Ordena un rincón pequeño de tu casa, no toda la casa. Que eso baste.'], care: 'El polen de primavera es fuerte aquí. Cierra las ventanas los días de viento si te dan alergias y enjuágate al volver.' },
      { name: 'Verano', months: 'junio – agosto', feel: 'Tardes largas, tormentas de tarde, carreteras llenas en temporada de turistas y del rally, y calor con aroma a pino.', practices: ['Sal temprano: recorre los senderos populares al amanecer, cuando están frescos y tranquilos.', 'Pausa de tormenta: cuando lleguen los truenos de la tarde, tómalo como señal para descansar diez minutos adentro.', 'Cuida tu paz en temporada alta: usa caminos secundarios, compra en horas tranquilas y planifica frente a las multitudes.'], care: 'A 1.500–2.100 metros el sol es más fuerte y el aire más seco. Bebe más agua de la que crees y baja de las crestas si hay rayos.' },
      { name: 'Otoño', months: 'septiembre – noviembre', feel: 'Álamos y abedules dorados en Spearfish Canyon, el rodeo de bisontes, aire fresco y claro, y la primera helada fuerte.', practices: ['Recolecta gratitud: en una caminata, recoge o fotografía una cosa por cada cosa que agradeces.', 'Ritmo de cosecha: cocina una comida lenta por semana con alimentos locales y cómela sin pantallas.', 'Antes del frío, anota tres cosas que te ayudan en invierno y déjalas a la vista.'], care: 'Los días más cortos pueden bajar la energía. Nótalo temprano: es más fácil mantener un ritmo que reconstruirlo.' },
      { name: 'Invierno', months: 'diciembre – febrero', feel: 'Nieve silenciosa entre los pinos, mañanas bajo cero, vientos chinook que derriten todo en una noche y tardes largas y oscuras.', practices: ['Luz de ventana: siéntate junto a tu ventana más luminosa 20 minutos cada mañana con tu café o té.', 'Manos tibias, respiración tranquila: sostén una taza caliente, exhala más largo de lo que inhalas y suelta los hombros.', 'Conexión semanal: una llamada, visita o comida compartida cada semana, anotada en el calendario.'], care: 'Si el ánimo bajo dura casi todos los días por dos semanas o más cada invierno, habla con un profesional. La depresión estacional es común y tiene tratamiento.' }
    ],
    places: [
      { area: 'Custer State Park', why: 'Un pequeño lago rodeado de granito con un sendero plano de una milla (1,6 km). Ideal para caminar con atención o sentarse en las rocas.', practice: 'Da una vuelta a tu ritmo normal y otra a la mitad de velocidad, notando cada pisada.' },
      { area: 'Norte de las Hills', why: 'Paredes de piedra caliza, cascadas y abetos. Roughlock y Spearfish Falls son caminatas cortas que premian la atención.', practice: 'Frente a una cascada, haz cinco minutos de escucha abierta: deja que el sonido llene tu atención sin ponerle nombre.' },
      { area: 'De Deadwood a Edgemont', why: 'Una antigua vía de tren de grava fina de más de 160 km, con accesos en muchos pueblos. Perfecta para caminar tranquilo y constante.', practice: 'Elige un tramo de ida y vuelta de 3 km. A la ida, sin audífonos; a la vuelta, nota lo que te perdiste.' },
      { area: 'Sur de las Hills', why: 'Pradera sobre una de las cuevas más largas del mundo. Cielo abierto, bisontes y perritos de la pradera.', practice: 'Acuéstate sobre una manta, lejos de los animales, y mira las nubes diez minutos. Respira a su ritmo.' },
      { area: 'Black Elk Wilderness', why: 'El punto más alto de Dakota del Sur. La subida es constante y la vista amplia: buen lugar para reflexionar sobre la perspectiva.', practice: 'En la cima, nombra una preocupación, mira el horizonte en las cuatro direcciones y pregúntate qué tan grande es en realidad.' },
      { area: 'Cerca de Sturgis', why: 'Una montaña sagrada para los lakota, cheyenne y otras naciones, que aún se usa para oración y ceremonia. Visítala en silencio, como huésped.', practice: 'Camina en silencio. No toques ni fotografíes las telas de oración ni las ofrendas. Aquí la práctica es el respeto.' },
      { area: 'Centro de las Hills', why: 'El embalse más grande de las Hills, con miradores y orillas para sentarse en calma.', practice: 'Mira el agua unos minutos. Cuando lleguen pensamientos, imagina que dejas cada uno sobre la superficie.' },
      { area: 'Sur de las Hills', why: 'Un pueblo histórico construido alrededor de manantiales minerales tibios, con un ritmo más lento y edificios de arenisca.', practice: 'Planea un "día de nada": sin pendientes, un baño tibio, una comida lenta y acostarte temprano.' }
    ]
  },

  'pt-BR': {
    crumb: 'Black Hills',
    metaTitle: 'Bem-estar nas Black Hills — KindWell',
    metaDesc: 'Viver com as estações, lugares para desacelerar e uma prática na floresta, direto das Black Hills, Dakota do Sul.',
    h1a: 'Bem-estar com raízes', h1b: 'nas Black Hills.',
    lead: 'Pinheiros ponderosa, granito, pradaria e céus enormes. Veja como vivemos bem com esta terra ao longo das estações, para onde vamos quando queremos desacelerar e como se manter seguro e amparado no caminho.',
    guestH: 'Visitantes numa terra antiga',
    guest: 'As Black Hills são a terra natal do povo lakota, que as chama de <em>He Sápa</em>, e são sagradas para os cheyenne, arapaho, kiowa e outras nações. Muita gente ainda reza e faz cerimônias aqui. Procuramos andar por esses lugares como visitantes respeitosos: ficando nas trilhas, sem mexer nas oferendas e aprendendo a história com vozes indígenas e museus, em vez de contá-la nós mesmos.',
    forestH: 'Uma prática de dez minutos na floresta',
    forest: [
      '<strong>Chegue.</strong> Pare no início de uma trilha ou perto de alguns pinheiros. Guarde o celular e sinta os pés no chão.',
      '<strong>Sinta o cheiro.</strong> A casca do pinheiro ponderosa aquecida pelo sol pode ter cheiro de baunilha ou caramelo. Chegue perto e descubra.',
      '<strong>Escute.</strong> Conte cinco sons: vento, pássaros, água, sua respiração, seus passos.',
      '<strong>Toque.</strong> Apoie a mão na casca, numa pedra ou na grama fresca por três respirações lentas.',
      '<strong>Deixe um obrigado.</strong> Recolha um pedaço de lixo na saída.'
    ],
    seasonsH: 'Vivendo com as estações',
    tryLabel: 'Experimente:', careLabel: 'Cuidado:', practiceLabel: 'Prática:',
    placesH: 'Lugares para desacelerar',
    placesLead: 'Cada um vem com uma pequena prática para fazer lá. Confira as condições das estradas e dos parques antes de ir; algumas áreas exigem passe.',
    lockedH: (n) => `Mais ${n} lugares, cada um com sua prática`,
    lockedP: 'A trilha Mickelson, Wind Cave, Black Elk Peak, Bear Butte, Pactola e Hot Springs, além dos ritmos completos de cada estação. Para membros a partir de US$ 5/mês.',
    seeMemberships: 'Ver planos',
    safetyH: 'Segurança ao ar livre',
    safety: [
      'Fique a pelo menos 25 jardas (cerca de 23 m) dos bisões, mais se houver filhotes. Eles são mais rápidos do que parecem.',
      'O tempo muda rápido, principalmente na primavera e no outono. Leve um agasalho e água, e avise alguém sobre o seu trajeto.',
      'O sinal de celular é falho nos cânions e áreas remotas. Baixe os mapas antes de sair.',
      'Desça de cristas e picos quando ouvir trovões.'
    ],
    supportH: 'Apoio perto de casa',
    support: [
      '<strong>988:</strong> ligue ou mande mensagem para a linha de prevenção ao suicídio e crises, a qualquer hora.',
      '<strong>211:</strong> o Helpline Center conecta moradores da Dakota do Sul a serviços locais, de moradia a aconselhamento.',
      '<strong>911:</strong> para qualquer emergência.'
    ],
    circleCta: 'Quer companhia na trilha ou um lugar para conversar sobre a vida por aqui? Entre no espaço <a href="{circle}" style="text-decoration:underline;">Vizinhos das Black Hills</a> no Círculo.',
    seasons: [
      { name: 'Primavera', months: 'março – maio', feel: 'Flores-da-páscoa na beira da pradaria, degelo nos riachos e um tempo que vai de 21 °C a uma nevasca no mesmo dia.', practices: ['Caminhada de luz da manhã: dez minutos lá fora antes das telas, mesmo em dias nublados, para firmar seu ritmo de sono.', 'Ouvir o riacho: sente-se junto à água por cinco minutos e nomeie três sons diferentes.', 'Arrume um cantinho da casa, não a casa toda. Deixe que isso baste.'], care: 'O pólen da primavera aqui é forte. Feche as janelas em dias de vento se a alergia atacar e se lave ao voltar.' },
      { name: 'Verão', months: 'junho – agosto', feel: 'Fins de tarde longos, temporais à tarde, estradas cheias na temporada de turistas e do rally, e calor com cheiro de pinho.', practices: ['Saia cedo: faça as trilhas mais procuradas ao nascer do sol, quando estão frescas e tranquilas.', 'Pausa da tempestade: quando chegarem os trovões da tarde, use como sinal para dez minutos de descanso dentro de casa.', 'Proteja sua paz na alta temporada: pegue estradas secundárias, faça compras em horários calmos e planeje-se para as multidões.'], care: 'A 1.500–2.100 metros o sol é mais forte e o ar mais seco. Beba mais água do que imagina e desça das cristas quando começarem os raios.' },
      { name: 'Outono', months: 'setembro – novembro', feel: 'Álamos e bétulas dourados no Spearfish Canyon, o rodeio dos bisões, ar fresco e limpo e a primeira geada forte.', practices: ['Colheita de gratidão: numa caminhada, recolha ou fotografe uma coisa para cada coisa pela qual você é grato.', 'Ritmo de colheita: prepare uma refeição sem pressa por semana com alimentos locais e coma sem telas.', 'Antes do frio, anote três coisas que ajudam você no inverno e deixe-as à vista.'], care: 'Dias mais curtos podem baixar a energia. Perceba cedo: é mais fácil manter um ritmo do que reconstruí-lo.' },
      { name: 'Inverno', months: 'dezembro – fevereiro', feel: 'Neve silenciosa entre os pinheiros, manhãs abaixo de zero, ventos chinook que derretem tudo numa noite e noites longas e escuras.', practices: ['Luz da janela: sente-se perto da janela mais clara por 20 minutos toda manhã com seu café ou chá.', 'Mãos quentes, respiração calma: segure uma caneca quente, solte o ar por mais tempo do que inspira e relaxe os ombros.', 'Conexão semanal: uma ligação, visita ou refeição compartilhada por semana, marcada no calendário.'], care: 'Se o desânimo durar quase todos os dias por duas semanas ou mais a cada inverno, procure um profissional. A depressão sazonal é comum e tem tratamento.' }
    ],
    places: [
      { area: 'Custer State Park', why: 'Um pequeno lago cercado de granito com uma trilha plana de cerca de 1,6 km. Ótimo para caminhar com atenção ou sentar nas pedras.', practice: 'Dê uma volta no seu ritmo normal e outra na metade da velocidade, percebendo cada passo.' },
      { area: 'Norte das Hills', why: 'Paredões de calcário, cachoeiras e abetos. Roughlock e Spearfish Falls são caminhadas curtas que recompensam a atenção.', practice: 'Diante de uma cachoeira, faça cinco minutos de escuta aberta: deixe o som ocupar sua atenção sem dar nome a ele.' },
      { area: 'De Deadwood a Edgemont', why: 'Uma antiga linha de trem de cascalho fino com mais de 160 km e acessos em várias cidades. Perfeita para uma caminhada leve e constante.', practice: 'Escolha um trecho de ida e volta de 3 km. Na ida, sem fones; na volta, perceba o que deixou passar.' },
      { area: 'Sul das Hills', why: 'Pradaria sobre uma das cavernas mais longas do mundo. Céu aberto, bisões e cães-da-pradaria.', practice: 'Deite numa manta, longe dos animais, e observe as nuvens por dez minutos. Respire no ritmo delas.' },
      { area: 'Black Elk Wilderness', why: 'O ponto mais alto da Dakota do Sul. A subida é constante e a vista ampla: bom lugar para refletir sobre perspectiva.', practice: 'No topo, nomeie uma preocupação, olhe o horizonte nas quatro direções e pergunte quão grande ela realmente é.' },
      { area: 'Perto de Sturgis', why: 'Uma montanha sagrada para os lakota, cheyenne e outras nações, ainda usada para oração e cerimônia. Visite em silêncio, como convidado.', practice: 'Caminhe em silêncio. Não toque nem fotografe os panos de oração e as oferendas. Aqui, a prática é o respeito.' },
      { area: 'Centro das Hills', why: 'O maior reservatório das Hills, com mirantes e margens para sentar com calma.', practice: 'Observe a água por alguns minutos. Quando vierem pensamentos, imagine pousar cada um na superfície.' },
      { area: 'Sul das Hills', why: 'Uma cidade histórica construída em volta de fontes minerais mornas, com ritmo mais lento e prédios de arenito.', practice: 'Planeje um "dia de nada": sem tarefas, um banho morno, uma refeição sem pressa e cama cedo.' }
    ]
  }
};
