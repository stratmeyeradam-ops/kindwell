// src/db/content/circle-local.js
// Two more Circle spaces (Black Hills Neighbors, Homeopathy & Herbal Tradition)
// with pinned starter threads from the KindWell team, in all three locales.
// Same shapes as EXTRA_CIRCLE_SPACES / CIRCLE_STARTERS in ./circle.js.

export const LOCAL_CIRCLE_SPACES = [
  {
    id: 'black-hills-neighbors',
    slug: 'black-hills-neighbors',
    sort: 9,
    icon: '🌲',
    en: { name: 'Black Hills Neighbors', description: 'For members in and around the Hills: walking buddies, seasonal check-ins, favorite quiet spots, and life up here.' },
    es: { name: 'Vecinos de las Black Hills', description: 'Para quienes viven en las Hills o cerca: compañía para caminar, cómo va cada estación, rincones tranquilos favoritos y la vida por aquí.' },
    'pt-BR': { name: 'Vizinhos das Black Hills', description: 'Para quem vive nas Hills ou perto delas: companhia para caminhar, como vai cada estação, cantinhos tranquilos favoritos e a vida por aqui.' }
  },
  {
    id: 'homeopathy-herbal',
    slug: 'homeopathy-herbal',
    sort: 10,
    icon: '🌼',
    en: { name: 'Homeopathy & Herbal Tradition', description: 'Share family traditions, teas, and kitchen-cupboard wisdom, honestly and safely. Stories and questions welcome; medical advice is not given here.' },
    es: { name: 'Homeopatía y tradición herbal', description: 'Comparte tradiciones familiares, infusiones y la sabiduría de la alacena, con honestidad y cuidado. Historias y preguntas, sí; consejos médicos, no.' },
    'pt-BR': { name: 'Homeopatia e tradição herbal', description: 'Compartilhe tradições de família, chás e a sabedoria do armário da cozinha, com honestidade e cuidado. Histórias e perguntas, sim; conselhos médicos, não.' }
  }
];

export const LOCAL_CIRCLE_STARTERS = [
  // ── Black Hills Neighbors ─────────────────────────────────────
  {
    id: 'starter_black-hills-neighbors_welcome',
    space_id: 'black-hills-neighbors',
    sort: 1,
    en: { title: 'Welcome, neighbors (start here)', body: `Welcome to the Black Hills Neighbors space. Whether you are in Rapid City, Spearfish, Custer, Hot Springs, a ranch road with no name, or you just love these hills from far away, you belong here.

Say hello below: roughly where you are (no need to be specific), how long you have been here, and one place in the Hills that helps you breathe easier.

**For your safety:** please do not share your home address or exact daily routines. If you arrange to meet someone for a walk, pick a busy public trailhead and tell a friend where you will be.` },
    es: { title: 'Bienvenidos, vecinos (empieza aquí)', body: `Bienvenidos al espacio Vecinos de las Black Hills. Ya sea que estés en Rapid City, Spearfish, Custer, Hot Springs, en un camino rural sin nombre o que quieras estas colinas desde lejos, aquí perteneces.

Saluda abajo: más o menos dónde estás (sin detalles), cuánto tiempo llevas aquí y un lugar de las Hills que te ayude a respirar mejor.

**Por tu seguridad:** no compartas tu dirección ni tus rutinas exactas. Si quedas con alguien para caminar, elige un inicio de sendero público y concurrido y avisa a alguien dónde estarás.` },
    'pt-BR': { title: 'Boas-vindas, vizinhos (comece aqui)', body: `Boas-vindas ao espaço Vizinhos das Black Hills. Seja em Rapid City, Spearfish, Custer, Hot Springs, numa estrada rural sem nome, ou se você ama estas colinas de longe, aqui é o seu lugar.

Diga oi aqui embaixo: mais ou menos onde você está (sem detalhes), há quanto tempo está por aqui e um lugar nas Hills que ajuda você a respirar melhor.

**Para sua segurança:** não compartilhe seu endereço nem sua rotina exata. Se combinar uma caminhada com alguém, escolha o início de uma trilha pública e movimentada e avise um amigo onde vai estar.` }
  },
  {
    id: 'starter_black-hills-neighbors_season',
    space_id: 'black-hills-neighbors',
    sort: 2,
    en: { title: 'Seasonal check-in: what is the land doing where you are?', body: `The weather up here changes by the hour and by the valley. Tell us what you are noticing this week: first snow, the creek running high, aspens turning, a bison jam on the Wildlife Loop.

Then share one small thing you are doing to live *with* the season instead of fighting it. A warm drink by the window counts.` },
    es: { title: 'Pausa de estación: ¿qué está haciendo la tierra donde estás?', body: `Aquí el clima cambia por hora y por valle. Cuéntanos qué notas esta semana: primera nevada, el arroyo crecido, los álamos cambiando de color, un embotellamiento de bisontes en el Wildlife Loop.

Luego comparte algo pequeño que haces para vivir *con* la estación en lugar de pelear contra ella. Una bebida caliente junto a la ventana cuenta.` },
    'pt-BR': { title: 'Check-in da estação: o que a terra está fazendo aí?', body: `Por aqui o tempo muda a cada hora e a cada vale. Conte o que você está percebendo esta semana: primeira neve, o riacho cheio, os álamos mudando de cor, um engarrafamento de bisões no Wildlife Loop.

Depois compartilhe uma coisa pequena que você faz para viver *com* a estação em vez de brigar com ela. Uma bebida quente perto da janela conta.` }
  },
  {
    id: 'starter_black-hills-neighbors_quiet-spots',
    space_id: 'black-hills-neighbors',
    sort: 3,
    en: { title: 'Quiet spots and gentle walks', body: `Where do you go when you need ten quiet minutes? A bench in a city park, a pullout on a forest road, a stretch of the Mickelson Trail?

Share a place and what makes it calming. Please keep sacred sites like Bear Butte out of "hidden gem" lists, and remember that some favorite spots stay special because they are not crowded.` },
    es: { title: 'Rincones tranquilos y caminatas suaves', body: `¿Adónde vas cuando necesitas diez minutos de calma? ¿Un banco en un parque, un mirador en un camino forestal, un tramo del sendero Mickelson?

Comparte un lugar y qué lo hace tranquilo. Por favor, deja los sitios sagrados como Bear Butte fuera de las listas de "joyas escondidas", y recuerda que algunos lugares siguen siendo especiales porque no están llenos de gente.` },
    'pt-BR': { title: 'Cantinhos tranquilos e caminhadas leves', body: `Para onde você vai quando precisa de dez minutos de silêncio? Um banco numa praça, um recuo numa estrada da floresta, um trecho da trilha Mickelson?

Compartilhe um lugar e o que o torna tranquilo. Por favor, deixe locais sagrados como Bear Butte fora das listas de "joias escondidas", e lembre que alguns lugares continuam especiais justamente por não estarem lotados.` }
  },
  // ── Homeopathy & Herbal Tradition ─────────────────────────────
  {
    id: 'starter_homeopathy-herbal_welcome',
    space_id: 'homeopathy-herbal',
    sort: 1,
    en: { title: 'Welcome: how we talk about remedies here', body: `This space is for the traditions many of us grew up with: Grandma's chamomile, the little blue tubes of pellets in the cupboard, the garden calendula.

**A few ground rules that keep everyone safe:**

- Share stories and traditions, not prescriptions. "In my family we always…" is perfect. "You should take…" is not.
- No claims that anything cures, treats, or prevents illness.
- If someone describes something serious (high fever, trouble breathing, chest pain, thoughts of self-harm), the kindest reply is "please get care now." Moderators will step in.
- Herbs can interact with medicines. Encourage each other to check with a pharmacist.

Read our honest overview on the Homeopathy page, then say hello below.` },
    es: { title: 'Bienvenida: cómo hablamos de remedios aquí', body: `Este espacio es para las tradiciones con las que muchos crecimos: la manzanilla de la abuela, los tubitos de glóbulos en la alacena, la caléndula del jardín.

**Algunas reglas que nos cuidan a todos:**

- Comparte historias y tradiciones, no recetas. "En mi familia siempre…" es perfecto. "Deberías tomar…" no.
- Nada de afirmar que algo cura, trata o previene enfermedades.
- Si alguien describe algo serio (fiebre alta, dificultad para respirar, dolor en el pecho, pensamientos de hacerse daño), la respuesta más amable es "por favor, busca atención ahora". Moderación intervendrá.
- Las hierbas pueden interactuar con medicamentos. Animémonos a consultar con un farmacéutico.

Lee nuestra visión honesta en la página de Homeopatía y luego saluda abajo.` },
    'pt-BR': { title: 'Boas-vindas: como falamos de remédios aqui', body: `Este espaço é para as tradições com que muitos de nós crescemos: a camomila da vó, os tubinhos de glóbulos no armário, a calêndula do quintal.

**Algumas regras que mantêm todo mundo seguro:**

- Compartilhe histórias e tradições, não receitas. "Na minha família a gente sempre…" é perfeito. "Você deveria tomar…" não.
- Nada de afirmar que algo cura, trata ou previne doenças.
- Se alguém descrever algo sério (febre alta, falta de ar, dor no peito, pensamentos de se machucar), a resposta mais gentil é "por favor, procure atendimento agora". A moderação vai agir.
- Ervas podem interagir com remédios. Vamos incentivar uns aos outros a falar com um farmacêutico.

Leia nossa visão honesta na página de Homeopatia e depois diga oi aqui embaixo.` }
  },
  {
    id: 'starter_homeopathy-herbal_family',
    space_id: 'homeopathy-herbal',
    sort: 2,
    en: { title: 'Family traditions: what was in your cupboard growing up?', body: `Every family has its rituals: a certain tea for upset stomachs, a salve for scraped knees, honey and lemon for a sore throat, a remedy kit that came out every camping trip.

Share one tradition you grew up with, who taught it to you, and whether you still keep it. Memories of the people behind the remedies are especially welcome.` },
    es: { title: 'Tradiciones familiares: ¿qué había en tu alacena de niño?', body: `Cada familia tiene sus rituales: un té para el malestar de estómago, una pomada para las rodillas raspadas, miel con limón para la garganta, un botiquín que salía en cada campamento.

Comparte una tradición con la que creciste, quién te la enseñó y si todavía la conservas. Los recuerdos de las personas detrás de los remedios son especialmente bienvenidos.` },
    'pt-BR': { title: 'Tradições de família: o que tinha no armário da sua infância?', body: `Toda família tem seus rituais: um chá para dor de barriga, uma pomada para joelho ralado, mel com limão para a garganta, um kit que aparecia em todo acampamento.

Compartilhe uma tradição com que você cresceu, quem a ensinou e se você ainda a mantém. Lembranças das pessoas por trás dos remédios são especialmente bem-vindas.` }
  },
  {
    id: 'starter_homeopathy-herbal_tea',
    space_id: 'homeopathy-herbal',
    sort: 3,
    en: { title: 'Tea ritual swap', body: `Sometimes the most helpful part of a remedy is the ritual around it: boiling the kettle, warming your hands on the mug, sitting still for five minutes.

Describe a tea ritual you love: the blend, the mug, the time of day, where you sit. Bonus points for anything grown or gathered locally (with the usual care around identifying plants and harvesting respectfully).` },
    es: { title: 'Intercambio de rituales de té', body: `A veces lo que más ayuda de un remedio es el ritual: hervir el agua, calentarte las manos con la taza, quedarte quieto cinco minutos.

Describe un ritual de té que te encante: la mezcla, la taza, la hora del día, dónde te sientas. Puntos extra si algo es cultivado o recolectado localmente (con el cuidado habitual al identificar plantas y recolectar con respeto).` },
    'pt-BR': { title: 'Troca de rituais de chá', body: `Às vezes o que mais ajuda num remédio é o ritual em volta dele: ferver a água, aquecer as mãos na caneca, ficar parado cinco minutos.

Descreva um ritual de chá que você ama: a mistura, a caneca, o horário, onde você se senta. Pontos extras se algo for plantado ou colhido localmente (com o cuidado de sempre ao identificar plantas e colher com respeito).` }
  }
];
