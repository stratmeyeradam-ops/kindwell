// src/db/content/homeopathy.js
// Trilingual homeopathy content for /homeopathy. Shared by locale; remedy Latin
// names are language-neutral. Traditional descriptions only: no efficacy,
// dosing, or treatment claims.

export const REMEDY_NAMES = [
  'Arnica montana', 'Chamomilla', 'Nux vomica', 'Ignatia amara', 'Gelsemium',
  'Arsenicum album', 'Pulsatilla', 'Belladonna', 'Rhus toxicodendron', 'Calendula',
  'Hypericum', 'Apis mellifica', 'Aconitum napellus', 'Coffea cruda', 'Bryonia alba',
  'Ledum palustre', 'Euphrasia', 'Allium cepa', 'Cocculus indicus', 'Staphysagria'
];

export const FREE_REMEDY_COUNT = 6;

export const HOMEOPATHY = {
  en: {
    crumb: 'Homeopathy',
    metaTitle: 'Homeopathy, Explained Honestly — KindWell',
    metaDesc: 'What homeopathy is, how to read a remedy label, 20 classic remedies of the tradition, and situational guides, shared honestly from the Black Hills.',
    h1a: 'Homeopathy, explained', h1b: 'plainly and honestly.',
    lead: 'A two-hundred-year-old tradition many families in the Black Hills keep in the kitchen cupboard. Here is what it is, how practitioners think about it, and the classic remedies you will hear about.',
    positionLabel: 'Our honest position:',
    position: 'We share homeopathy as a tradition, not as medicine. Large scientific reviews have not found homeopathic remedies to work better than placebo for any health condition, and the FDA does not evaluate them for effectiveness. Never use a remedy in place of care for anything serious.',
    originH: 'Where it comes from',
    origin: 'Homeopathy was developed by the German physician Samuel Hahnemann in the 1790s. It rests on two ideas practitioners still teach today:',
    principles: [
      '<strong>"Like with like"</strong> (<em>similia similibus</em>): a substance that produces a set of sensations in a healthy person is chosen for someone experiencing a similar set.',
      '<strong>Serial dilution:</strong> the substance is diluted and shaken (<em>succussed</em>) over and over. Practitioners hold that this process strengthens it; most remedies are diluted past the point where any original molecule remains.'
    ],
    labelH: 'Reading a label',
    label: 'The number and letter after a remedy\'s name describe how it was diluted. <strong>X</strong> means 1 part in 10 at each step; <strong>C</strong> means 1 part in 100. So <em>6C</em> means six rounds of 1-in-100. Anything beyond about <em>12C</em> is, chemically, the starting liquid alone. Low "X" potencies of toxic substances can still contain some of the original material, which is why you should buy only from reputable, regulated makers and follow the label.',
    loveH: 'Why people still love it',
    love: 'For many people the value is in the ritual: slowing down, paying close attention to exactly how they feel, and choosing something gentle. That kind of attention is real and worth keeping, and you will find it in our practices and courses too.',
    listH: 'Classic remedies of the tradition',
    listLead: 'How the traditional materia medica describes each one. These are descriptions from the tradition, not recommendations or dosing advice.',
    pictureLabel: 'Remedy picture:', noteLabel: 'Good to know:',
    lockedH: (n) => `${n} more remedies in the full guide`,
    lockedP: 'Belladonna, Rhus tox, Calendula, Hypericum, Apis, Aconite, Ledum, Euphrasia and more, open to every member from the Kind tier ($5/mo).',
    seeMemberships: 'See memberships',
    guidesH: 'Situational guides',
    guidesLead: 'For the moments people most often reach for the cupboard: the first practical steps, what the tradition associates with each, and when to get help instead.',
    guidesLocked: '<strong>Steady members</strong> unlock four situational guides (trail &amp; travel, allergy season, restless nights, emotional upheaval) plus the printable home-kit worksheet.',
    compare: 'Compare tiers →',
    firstSteps: 'First steps', tradition: 'The tradition associates', redFlags: 'Get help instead if',
    worksheetH: 'Building a simple home kit: worksheet',
    worksheet: [
      'List the everyday situations your household actually meets: bumps and bruises, travel nerves, sleepless nights, bug bites on the trail.',
      'Next to each, note the first non-remedy step: ice, rest, water, fresh air, a call to the clinic if it is serious.',
      'Only then note any remedy you personally like to keep on hand, and the maker you trust.',
      'Write the red flags for each situation on the same card, so the "when to get help" step is never forgotten.',
      'Store remedies away from strong smells, heat, and direct sun; check expiry dates every spring.'
    ],
    helpH: 'When to skip the cupboard and get help',
    help: [
      'Trouble breathing, chest pain, sudden weakness, confusion, or a severe allergic reaction: call 911.',
      'Fever in an infant under three months, or any high fever that will not come down.',
      'Anything that is getting worse, lasting longer than expected, or simply worrying you.',
      'If you take prescription medicine, are pregnant, or are caring for a child, talk with your clinician or pharmacist before adding anything.'
    ],
    helpLocal: 'Rapid City, Spearfish, Sturgis, Custer and Hot Springs all have urgent care and hospital services. If you are in emotional crisis, call or text 988.',
    remedies: [
      { source: 'Mountain arnica (plant)', keynote: 'The remedy homeopaths reach for first after bumps, falls, overexertion, and the "beaten-up" feeling of a long hike or hard day of work.', picture: 'Insists they are fine and does not want to be touched.', note: 'Topical arnica gels are a separate herbal product; do not apply to broken skin.' },
      { source: 'German chamomile (plant)', keynote: 'Associated with irritability and low tolerance for discomfort, classically the fussy, teething child who wants to be carried.', picture: 'Nothing pleases; one cheek flushed, the other pale.', note: 'A teething baby with fever, rash, or refusal to feed needs a clinician, not a remedy.' },
      { source: 'Poison nut seed', keynote: 'The classic picture of the overworked, overstimulated person: too much coffee, rich food, late nights, and a short temper.', picture: 'Driven, impatient, chilly, wakes around 3–4 a.m. thinking about work.', note: 'The source plant is toxic; only use properly prepared, commercially made remedies.' },
      { source: 'St. Ignatius bean', keynote: 'Long associated with fresh grief, disappointment, and emotional shock: sighing, a lump in the throat, quickly shifting moods.', picture: 'Holds feelings in, then they spill out unexpectedly.', note: 'Grief deserves company. If loss is overwhelming, please reach out to a counselor or grief group.' },
      { source: 'Yellow jasmine (plant)', keynote: 'The tradition\'s "stage fright" remedy: heavy, droopy, trembling anticipation before an exam, interview, or performance.', picture: 'Wants to be left alone, weak in the knees, not thirsty.', note: 'The raw plant is poisonous; never prepare at home.' },
      { source: 'Prepared arsenic trioxide', keynote: 'Described for restless, anxious, fastidious people who feel chilly and want everything in order.', picture: 'Restless worry, sips of warm water, worse around midnight.', note: 'Low-potency or poorly made products can contain measurable arsenic. Buy only from reputable makers.' },
      { source: 'Pasque flower (plant)', keynote: 'The tradition\'s remedy for gentle, changeable, tearful moods and a strong wish for company and fresh air.', picture: 'Better outdoors and with comfort; thirstless; symptoms that wander.', note: 'Pasque flowers bloom across the Black Hills prairie each spring. Admire them; the fresh plant irritates skin.' },
      { source: 'Deadly nightshade (plant)', keynote: 'Classically linked to sudden, intense, hot states: flushed face, throbbing, sensitivity to light and noise.', picture: 'Comes on fast and hard.', note: 'High fever, stiff neck, or confusion means urgent medical care, full stop.' },
      { source: 'Poison ivy (plant)', keynote: 'The "rusty gate" picture: stiffness worse on first moving that eases with continued gentle motion and warmth.', picture: 'Restless, stiff after rest, worse in cold damp weather.', note: 'Ongoing joint swelling or pain deserves a proper medical evaluation.' },
      { source: 'Pot marigold (plant)', keynote: 'Used across herbal and homeopathic traditions on the skin for minor scrapes once they are cleaned.', picture: 'Most often met as a cream or tincture rather than pellets.', note: 'Deep, dirty, or animal-bite wounds need medical attention.' },
      { source: 'St. John\'s wort (plant)', keynote: 'Associated with knocks to nerve-rich areas: pinched fingers, stubbed toes, a fall on the tailbone.', picture: 'Shooting, sharp sensations along a nerve.', note: 'Herbal St. John\'s wort (not homeopathic) interacts with many medicines, including birth control and antidepressants.' },
      { source: 'Honeybee', keynote: 'The picture of puffy, pink, stinging, warm swelling that feels better with cool compresses.', picture: 'Restless, thirstless, worse from heat.', note: 'Throat tightness, trouble breathing, or spreading hives after a sting is an emergency: call 911 and use an epinephrine pen if prescribed.' },
      { source: 'Monkshood (plant)', keynote: 'Described for sudden fright and the shaky aftermath of a scare, such as a near-miss on an icy road.', picture: 'Comes on suddenly, often after cold dry wind or shock.', note: 'Monkshood is among the most toxic plants in North America. Only commercially prepared remedies.' },
      { source: 'Unroasted coffee bean', keynote: 'The picture of the sleepless, buzzing mind, too full of ideas or excitement to settle.', picture: 'Senses heightened, mind racing with good news or plans.', note: 'Pair with real sleep habits: a steady wake time and screens down an hour before bed.' },
      { source: 'White bryony (plant)', keynote: 'Described for people who want to lie perfectly still, are irritable, and very thirsty for big cold drinks.', picture: '"Leave me alone and don\'t make me move."', note: 'Pain with breathing or a lingering cough needs medical evaluation.' },
      { source: 'Marsh tea (plant)', keynote: 'The tradition\'s remedy for puncture-type injuries and insect bites that feel cold yet are soothed by cool water.', picture: 'Area feels cold to the touch; better from cold.', note: 'Tick bites in the Hills deserve attention: remove the tick carefully and watch for rash or fever.' },
      { source: 'Eyebright (plant)', keynote: 'Associated with watery, burning, irritated eyes, often in pollen season.', picture: 'Streaming eyes, bland nose.', note: 'Eye pain, vision change, or a red eye after an injury needs prompt care.' },
      { source: 'Red onion', keynote: 'Picture drawn straight from chopping an onion: streaming nose, sneezing, watery eyes, typical of hay-fever days.', picture: 'Burning nose, bland eyes; better in fresh air.', note: 'Wheezing or shortness of breath with allergies is a reason to see a clinician.' },
      { source: 'Indian cockle seed', keynote: 'Described for the hollow, dizzy fatigue of lost sleep, long nights caring for someone, or travel sickness on winding roads.', picture: 'Exhausted, queasy, worse from motion and missing sleep.', note: 'Caregivers need rest too. See our Caring for Someone space in the Circle.' },
      { source: 'Stavesacre (plant)', keynote: 'Long associated with swallowed anger and hurt pride: the person who keeps the peace and then cannot let it go.', picture: 'Sensitive, holds back words, replays the moment.', note: 'Unspoken resentment often softens with honest, safe conversation. Our courses on boundaries can help.' }
    ],
    guides: [
      { title: 'Trail & travel kit', intro: 'For hikes, road trips on the Needles Highway, and long days outdoors.', steps: ['Water, sunscreen, a warm layer, and a basic first-aid kit come first.', 'Clean and cover scrapes; cool compresses for bumps and stings.', 'Rest in the shade when tired, and turn back early if weather changes.'], tradition: 'Arnica after bumps and overexertion, Ledum for bites and punctures, Apis for puffy stings, Calendula cream for clean scrapes, Cocculus for winding-road queasiness.', flags: ['Signs of an allergic reaction after a sting', 'A head injury with confusion, vomiting, or drowsiness', 'A tick bite followed by rash or fever'] },
      { title: 'Allergy season', intro: 'Spring pollen and late-summer weeds can make the Hills hard work for sensitive noses.', steps: ['Keep windows closed on windy, high-pollen days.', 'Shower and change clothes after time outdoors.', 'Rinse eyes with clean cool water; ask a pharmacist about over-the-counter options.'], tradition: 'Allium cepa for a streaming, burning nose; Euphrasia for watery, burning eyes; Pulsatilla when symptoms wander and fresh air helps.', flags: ['Wheezing or shortness of breath', 'Symptoms that disrupt sleep for weeks', 'Facial pain and fever lasting more than a few days'] },
      { title: 'Restless nights', intro: 'When the mind races or the body will not settle.', steps: ['Keep the same wake time all week, even after a bad night.', 'Dim lights and screens an hour before bed; cool, dark room.', 'If you cannot sleep after 20 minutes, get up and do something calm in low light.'], tradition: 'Coffea for a buzzing, excited mind; Nux vomica for the overworked 3 a.m. waker; Cocculus for exhaustion from lost sleep.', flags: ['Insomnia most nights for more than a month', 'Loud snoring, gasping, or pauses in breathing', 'Daytime sleepiness that makes driving unsafe'] },
      { title: 'Emotional upheaval', intro: 'Grief, shock, nerves, or anger that will not settle.', steps: ['Breathe out longer than you breathe in for two minutes.', 'Tell one trusted person what happened.', 'Eat something, drink water, and go outside for ten minutes.'], tradition: 'Ignatia for fresh grief, Aconite for sudden fright, Gelsemium for anticipatory nerves, Staphysagria for swallowed anger.', flags: ['Thoughts of harming yourself: call or text 988 now', 'Unable to eat, sleep, or work for more than two weeks', 'Using alcohol or other substances to cope'] }
    ]
  },

  es: {
    crumb: 'Homeopatía',
    metaTitle: 'Homeopatía, explicada con honestidad — KindWell',
    metaDesc: 'Qué es la homeopatía, cómo leer una etiqueta, 20 remedios clásicos de la tradición y guías para situaciones cotidianas, desde las Black Hills.',
    h1a: 'La homeopatía, explicada', h1b: 'con claridad y honestidad.',
    lead: 'Una tradición de más de doscientos años que muchas familias de las Black Hills guardan en la alacena. Aquí te contamos qué es, cómo la entienden quienes la practican y cuáles son los remedios clásicos que vas a escuchar.',
    positionLabel: 'Nuestra postura honesta:',
    position: 'Compartimos la homeopatía como tradición, no como medicina. Las grandes revisiones científicas no han encontrado que los remedios homeopáticos funcionen mejor que un placebo para ninguna condición de salud, y la FDA no evalúa su eficacia. Nunca uses un remedio en lugar de atención médica ante algo serio.',
    originH: 'De dónde viene',
    origin: 'La homeopatía fue desarrollada por el médico alemán Samuel Hahnemann en la década de 1790. Se basa en dos ideas que quienes la practican siguen enseñando:',
    principles: [
      '<strong>"Lo similar con lo similar"</strong> (<em>similia similibus</em>): una sustancia que produce ciertas sensaciones en una persona sana se elige para alguien que vive sensaciones parecidas.',
      '<strong>Dilución sucesiva:</strong> la sustancia se diluye y se agita (<em>sucusión</em>) una y otra vez. Quienes la practican sostienen que esto la fortalece; la mayoría de los remedios se diluyen más allá del punto en que queda alguna molécula original.'
    ],
    labelH: 'Cómo leer una etiqueta',
    label: 'El número y la letra después del nombre indican cómo se diluyó. <strong>X</strong> significa 1 parte en 10 en cada paso; <strong>C</strong>, 1 parte en 100. Así, <em>6C</em> son seis rondas de 1 en 100. Más allá de <em>12C</em>, químicamente solo queda el líquido base. Las potencias "X" bajas de sustancias tóxicas aún pueden contener parte del material original, por eso conviene comprar solo a fabricantes regulados y de confianza, y seguir la etiqueta.',
    loveH: 'Por qué la gente la sigue queriendo',
    love: 'Para muchas personas el valor está en el ritual: bajar el ritmo, prestar atención a cómo se sienten exactamente y elegir algo suave. Esa atención es real y vale la pena conservarla; también la encontrarás en nuestras prácticas y cursos.',
    listH: 'Remedios clásicos de la tradición',
    listLead: 'Cómo los describe la materia médica tradicional. Son descripciones de la tradición, no recomendaciones ni indicaciones de dosis.',
    pictureLabel: 'Cuadro del remedio:', noteLabel: 'Bueno saber:',
    lockedH: (n) => `${n} remedios más en la guía completa`,
    lockedP: 'Belladonna, Rhus tox, Caléndula, Hypericum, Apis, Aconitum, Ledum, Euphrasia y más, disponibles para todos los miembros desde el nivel Kind (5 USD/mes).',
    seeMemberships: 'Ver membresías',
    guidesH: 'Guías para situaciones cotidianas',
    guidesLead: 'Para los momentos en que más se recurre a la alacena: los primeros pasos prácticos, lo que la tradición asocia con cada caso y cuándo buscar ayuda.',
    guidesLocked: '<strong>Los miembros Steady</strong> desbloquean cuatro guías (senderos y viajes, temporada de alergias, noches inquietas, sacudidas emocionales) y la hoja imprimible del botiquín casero.',
    compare: 'Comparar niveles →',
    firstSteps: 'Primeros pasos', tradition: 'La tradición asocia', redFlags: 'Busca ayuda si',
    worksheetH: 'Arma un botiquín sencillo: hoja de trabajo',
    worksheet: [
      'Anota las situaciones cotidianas que vive tu hogar: golpes y moretones, nervios de viaje, noches sin dormir, picaduras en el sendero.',
      'Junto a cada una, escribe el primer paso sin remedio: hielo, descanso, agua, aire fresco, una llamada a la clínica si es serio.',
      'Solo después anota el remedio que te gusta tener a mano y el fabricante en quien confías.',
      'Escribe las señales de alarma de cada situación en la misma tarjeta, para no olvidar nunca cuándo pedir ayuda.',
      'Guarda los remedios lejos de olores fuertes, del calor y del sol; revisa las fechas de vencimiento cada primavera.'
    ],
    helpH: 'Cuándo dejar la alacena y pedir ayuda',
    help: [
      'Dificultad para respirar, dolor en el pecho, debilidad repentina, confusión o una reacción alérgica grave: llama al 911.',
      'Fiebre en un bebé menor de tres meses, o fiebre alta que no baja.',
      'Cualquier cosa que empeore, dure más de lo esperado o simplemente te preocupe.',
      'Si tomas medicamentos recetados, estás embarazada o cuidas a un niño, consulta con tu profesional de salud o farmacéutico antes de añadir algo.'
    ],
    helpLocal: 'Rapid City, Spearfish, Sturgis, Custer y Hot Springs cuentan con atención de urgencias y hospitales. Si estás en una crisis emocional, llama o escribe al 988.',
    remedies: [
      { source: 'Árnica de montaña (planta)', keynote: 'El primer remedio que buscan los homeópatas tras golpes, caídas, sobreesfuerzo y esa sensación de "molido" después de una larga caminata o un día de trabajo duro.', picture: 'Insiste en que está bien y no quiere que lo toquen.', note: 'Los geles de árnica son un producto herbal distinto; no los apliques sobre piel abierta.' },
      { source: 'Manzanilla alemana (planta)', keynote: 'Asociada con la irritabilidad y la poca tolerancia a la molestia; clásicamente, el bebé inquieto por la dentición que quiere estar en brazos.', picture: 'Nada lo calma; una mejilla roja y la otra pálida.', note: 'Un bebé con fiebre, sarpullido o que no quiere comer necesita a un profesional, no un remedio.' },
      { source: 'Semilla de nuez vómica', keynote: 'El cuadro clásico de la persona sobrecargada y sobreestimulada: demasiado café, comida pesada, noches largas y poca paciencia.', picture: 'Exigente, impaciente, friolento; despierta hacia las 3–4 a. m. pensando en el trabajo.', note: 'La planta de origen es tóxica; usa solo remedios preparados comercialmente.' },
      { source: 'Haba de San Ignacio', keynote: 'Asociada desde hace mucho al duelo reciente, la decepción y el impacto emocional: suspiros, nudo en la garganta, ánimo cambiante.', picture: 'Contiene lo que siente y luego se desborda de improviso.', note: 'El duelo merece compañía. Si la pérdida te supera, busca un consejero o un grupo de duelo.' },
      { source: 'Jazmín amarillo (planta)', keynote: 'El remedio del "miedo escénico" en la tradición: anticipación pesada y temblorosa antes de un examen, una entrevista o una presentación.', picture: 'Quiere estar solo, le flaquean las rodillas, sin sed.', note: 'La planta cruda es venenosa; nunca la prepares en casa.' },
      { source: 'Trióxido de arsénico preparado', keynote: 'Descrito para personas inquietas, ansiosas y meticulosas que sienten frío y quieren todo en orden.', picture: 'Preocupación inquieta, sorbos de agua tibia, peor hacia la medianoche.', note: 'Productos de baja potencia o mal elaborados pueden contener arsénico medible. Compra solo a fabricantes confiables.' },
      { source: 'Flor de Pascua (planta)', keynote: 'El remedio de la tradición para estados de ánimo suaves, cambiantes y llorosos, con mucho deseo de compañía y aire fresco.', picture: 'Mejora al aire libre y con consuelo; sin sed; síntomas que cambian de lugar.', note: 'Esta flor cubre las praderas de las Black Hills cada primavera. Admírala; la planta fresca irrita la piel.' },
      { source: 'Belladona (planta)', keynote: 'Vinculada clásicamente a estados repentinos, intensos y calientes: cara enrojecida, pulsaciones, sensibilidad a la luz y al ruido.', picture: 'Llega rápido y fuerte.', note: 'Fiebre alta, cuello rígido o confusión requieren atención médica urgente, sin excepción.' },
      { source: 'Hiedra venenosa (planta)', keynote: 'El cuadro de la "bisagra oxidada": rigidez peor al empezar a moverse que mejora con movimiento suave y calor.', picture: 'Inquieto, rígido tras el reposo, peor con frío húmedo.', note: 'La inflamación o el dolor articular persistente merecen una evaluación médica.' },
      { source: 'Caléndula (planta)', keynote: 'Usada en tradiciones herbales y homeopáticas sobre la piel para raspones leves, una vez limpios.', picture: 'Se encuentra más como crema o tintura que como glóbulos.', note: 'Las heridas profundas, sucias o por mordedura de animal necesitan atención médica.' },
      { source: 'Hierba de San Juan (planta)', keynote: 'Asociada a golpes en zonas con muchos nervios: dedos atrapados, tropezones, una caída sobre el coxis.', picture: 'Sensaciones agudas que recorren un nervio.', note: 'La hierba de San Juan herbal (no homeopática) interactúa con muchos medicamentos, incluidos anticonceptivos y antidepresivos.' },
      { source: 'Abeja melífera', keynote: 'El cuadro de una hinchazón rosada, caliente y punzante que mejora con compresas frías.', picture: 'Inquieto, sin sed, peor con el calor.', note: 'Garganta cerrada, dificultad para respirar o ronchas que se extienden tras una picadura es una emergencia: llama al 911 y usa la epinefrina si te la recetaron.' },
      { source: 'Acónito (planta)', keynote: 'Descrito para el susto repentino y el temblor posterior, como tras casi chocar en una carretera helada.', picture: 'Llega de golpe, a menudo tras viento frío y seco o un sobresalto.', note: 'El acónito es de las plantas más tóxicas de Norteamérica. Solo remedios preparados comercialmente.' },
      { source: 'Grano de café sin tostar', keynote: 'El cuadro de la mente zumbando sin poder dormir, demasiado llena de ideas o emoción.', picture: 'Sentidos agudizados, mente acelerada por buenas noticias o planes.', note: 'Combínalo con buenos hábitos de sueño: misma hora al despertar y pantallas fuera una hora antes de dormir.' },
      { source: 'Brionia blanca (planta)', keynote: 'Descrita para quien quiere quedarse totalmente quieto, está irritable y tiene mucha sed de bebidas frías.', picture: '"Déjenme en paz y no me hagan moverme."', note: 'El dolor al respirar o una tos persistente necesitan evaluación médica.' },
      { source: 'Té de pantano (planta)', keynote: 'El remedio tradicional para heridas punzantes y picaduras que se sienten frías pero se alivian con agua fresca.', picture: 'La zona se siente fría al tacto; mejora con frío.', note: 'Las picaduras de garrapata en las Hills merecen atención: retírala con cuidado y vigila si aparece sarpullido o fiebre.' },
      { source: 'Eufrasia (planta)', keynote: 'Asociada a ojos llorosos, ardientes e irritados, a menudo en temporada de polen.', picture: 'Ojos que lagrimean, nariz sin ardor.', note: 'Dolor ocular, cambios en la visión u ojo rojo tras un golpe requieren atención pronta.' },
      { source: 'Cebolla roja', keynote: 'Un cuadro sacado de picar cebolla: nariz que gotea, estornudos, ojos llorosos, típico de los días de alergia.', picture: 'Nariz que arde, ojos sin ardor; mejora al aire libre.', note: 'Silbidos al respirar o falta de aire con la alergia son motivo para ver a un profesional.' },
      { source: 'Semilla de coca de Levante', keynote: 'Descrita para el cansancio vacío y mareado por falta de sueño, noches cuidando a alguien o mareo en carreteras con curvas.', picture: 'Agotado, con náuseas, peor con el movimiento y sin dormir.', note: 'Quien cuida también necesita descanso. Visita el espacio Cuidar a alguien en el Círculo.' },
      { source: 'Estafisagria (planta)', keynote: 'Asociada desde hace mucho al enojo tragado y al orgullo herido: quien mantiene la paz y luego no puede soltarlo.', picture: 'Sensible, se calla, repasa el momento una y otra vez.', note: 'El resentimiento no dicho suele suavizarse con una conversación honesta y segura. Nuestros cursos sobre límites pueden ayudar.' }
    ],
    guides: [
      { title: 'Botiquín de sendero y viaje', intro: 'Para caminatas, viajes por la Needles Highway y días largos al aire libre.', steps: ['Primero: agua, protector solar, una capa abrigada y un botiquín básico.', 'Limpia y cubre los raspones; compresas frías para golpes y picaduras.', 'Descansa a la sombra cuando estés cansado y regresa temprano si cambia el clima.'], tradition: 'Árnica tras golpes y sobreesfuerzo, Ledum para picaduras y punciones, Apis para picaduras hinchadas, crema de Caléndula para raspones limpios, Cocculus para el mareo en curvas.', flags: ['Señales de reacción alérgica tras una picadura', 'Golpe en la cabeza con confusión, vómitos o somnolencia', 'Picadura de garrapata seguida de sarpullido o fiebre'] },
      { title: 'Temporada de alergias', intro: 'El polen de primavera y las hierbas de fin de verano pueden complicar las Hills a las narices sensibles.', steps: ['Cierra las ventanas los días de viento y mucho polen.', 'Dúchate y cámbiate de ropa después de estar afuera.', 'Enjuaga los ojos con agua limpia y fresca; pregunta en la farmacia por opciones sin receta.'], tradition: 'Allium cepa para nariz que gotea y arde; Euphrasia para ojos llorosos y ardientes; Pulsatilla cuando los síntomas cambian y el aire fresco ayuda.', flags: ['Silbidos o falta de aire', 'Síntomas que interrumpen el sueño durante semanas', 'Dolor facial y fiebre por más de unos días'] },
      { title: 'Noches inquietas', intro: 'Cuando la mente corre o el cuerpo no se aquieta.', steps: ['Despierta a la misma hora toda la semana, incluso tras una mala noche.', 'Baja luces y pantallas una hora antes de dormir; habitación fresca y oscura.', 'Si no duermes en 20 minutos, levántate y haz algo tranquilo con poca luz.'], tradition: 'Coffea para la mente acelerada y emocionada; Nux vomica para quien despierta a las 3 a. m. por exceso de trabajo; Cocculus para el agotamiento por falta de sueño.', flags: ['Insomnio casi todas las noches por más de un mes', 'Ronquidos fuertes, ahogos o pausas al respirar', 'Somnolencia diurna que hace inseguro conducir'] },
      { title: 'Sacudidas emocionales', intro: 'Duelo, susto, nervios o enojo que no se calman.', steps: ['Durante dos minutos, exhala más largo de lo que inhalas.', 'Cuéntale a una persona de confianza lo que pasó.', 'Come algo, toma agua y sal diez minutos al aire libre.'], tradition: 'Ignatia para el duelo reciente, Aconitum para el susto repentino, Gelsemium para los nervios anticipatorios, Staphysagria para el enojo tragado.', flags: ['Pensamientos de hacerte daño: llama o escribe al 988 ahora', 'No poder comer, dormir o trabajar por más de dos semanas', 'Usar alcohol u otras sustancias para sobrellevarlo'] }
    ]
  },

  'pt-BR': {
    crumb: 'Homeopatia',
    metaTitle: 'Homeopatia, explicada com honestidade — KindWell',
    metaDesc: 'O que é homeopatia, como ler um rótulo, 20 remédios clássicos da tradição e guias para situações do dia a dia, direto das Black Hills.',
    h1a: 'Homeopatia, explicada', h1b: 'com clareza e honestidade.',
    lead: 'Uma tradição de mais de duzentos anos que muitas famílias das Black Hills guardam no armário da cozinha. Veja o que ela é, como os praticantes pensam sobre ela e os remédios clássicos de que você vai ouvir falar.',
    positionLabel: 'Nossa posição honesta:',
    position: 'Compartilhamos a homeopatia como tradição, não como medicina. Grandes revisões científicas não encontraram remédios homeopáticos que funcionem melhor que placebo para nenhuma condição de saúde, e a FDA não avalia sua eficácia. Nunca use um remédio no lugar de cuidado médico para algo sério.',
    originH: 'De onde vem',
    origin: 'A homeopatia foi desenvolvida pelo médico alemão Samuel Hahnemann na década de 1790. Ela se apoia em duas ideias que os praticantes ainda ensinam:',
    principles: [
      '<strong>"Semelhante com semelhante"</strong> (<em>similia similibus</em>): uma substância que provoca certas sensações numa pessoa saudável é escolhida para alguém que vive sensações parecidas.',
      '<strong>Diluição sucessiva:</strong> a substância é diluída e agitada (<em>sucussão</em>) repetidas vezes. Os praticantes afirmam que isso a fortalece; a maioria dos remédios é diluída além do ponto em que resta qualquer molécula original.'
    ],
    labelH: 'Como ler um rótulo',
    label: 'O número e a letra depois do nome indicam como ele foi diluído. <strong>X</strong> significa 1 parte em 10 a cada etapa; <strong>C</strong>, 1 parte em 100. Assim, <em>6C</em> são seis rodadas de 1 em 100. Acima de cerca de <em>12C</em>, quimicamente resta só o líquido de base. Potências "X" baixas de substâncias tóxicas ainda podem conter parte do material original, por isso compre apenas de fabricantes regulamentados e confiáveis e siga o rótulo.',
    loveH: 'Por que as pessoas ainda gostam',
    love: 'Para muita gente, o valor está no ritual: desacelerar, prestar atenção exata a como se sente e escolher algo suave. Essa atenção é real e vale a pena manter, e você também a encontra em nossas práticas e cursos.',
    listH: 'Remédios clássicos da tradição',
    listLead: 'Como a matéria médica tradicional descreve cada um. São descrições da tradição, não recomendações nem orientações de dose.',
    pictureLabel: 'Quadro do remédio:', noteLabel: 'Bom saber:',
    lockedH: (n) => `Mais ${n} remédios no guia completo`,
    lockedP: 'Belladonna, Rhus tox, Calêndula, Hypericum, Apis, Aconitum, Ledum, Euphrasia e outros, abertos a todos os membros a partir do nível Kind (US$ 5/mês).',
    seeMemberships: 'Ver planos',
    guidesH: 'Guias para situações do dia a dia',
    guidesLead: 'Para os momentos em que mais se recorre ao armário: os primeiros passos práticos, o que a tradição associa a cada caso e quando procurar ajuda.',
    guidesLocked: '<strong>Membros Steady</strong> desbloqueiam quatro guias (trilha e viagem, temporada de alergias, noites agitadas, abalos emocionais) e a ficha imprimível do kit caseiro.',
    compare: 'Comparar planos →',
    firstSteps: 'Primeiros passos', tradition: 'A tradição associa', redFlags: 'Procure ajuda se',
    worksheetH: 'Montando um kit caseiro simples: ficha de trabalho',
    worksheet: [
      'Liste as situações comuns da sua casa: batidas e hematomas, nervosismo de viagem, noites sem dormir, picadas na trilha.',
      'Ao lado de cada uma, anote o primeiro passo sem remédio: gelo, descanso, água, ar fresco, uma ligação para a clínica se for sério.',
      'Só depois anote o remédio que você gosta de ter à mão e o fabricante em quem confia.',
      'Escreva os sinais de alerta de cada situação no mesmo cartão, para nunca esquecer quando buscar ajuda.',
      'Guarde os remédios longe de cheiros fortes, calor e sol direto; confira a validade a cada primavera.'
    ],
    helpH: 'Quando deixar o armário de lado e buscar ajuda',
    help: [
      'Dificuldade para respirar, dor no peito, fraqueza súbita, confusão ou reação alérgica grave: ligue para o 911.',
      'Febre em bebê com menos de três meses, ou febre alta que não baixa.',
      'Qualquer coisa que esteja piorando, durando mais do que o esperado ou simplesmente preocupando você.',
      'Se você toma remédios com receita, está grávida ou cuida de uma criança, fale com seu médico ou farmacêutico antes de acrescentar qualquer coisa.'
    ],
    helpLocal: 'Rapid City, Spearfish, Sturgis, Custer e Hot Springs têm pronto atendimento e hospitais. Se estiver em crise emocional, ligue ou mande mensagem para o 988.',
    remedies: [
      { source: 'Arnica-da-montanha (planta)', keynote: 'O primeiro remédio que os homeopatas buscam após batidas, quedas, esforço excessivo e aquela sensação de "moído" depois de uma longa trilha ou um dia pesado.', picture: 'Insiste que está bem e não quer ser tocado.', note: 'Géis de arnica são um produto fitoterápico diferente; não aplique em pele ferida.' },
      { source: 'Camomila-alemã (planta)', keynote: 'Associada à irritabilidade e à pouca tolerância ao desconforto; classicamente, o bebê agitado pela dentição que quer colo.', picture: 'Nada agrada; uma bochecha vermelha e a outra pálida.', note: 'Bebê com febre, manchas na pele ou que recusa mamar precisa de um profissional, não de um remédio.' },
      { source: 'Semente de noz-vômica', keynote: 'O quadro clássico da pessoa sobrecarregada e superestimulada: café demais, comida pesada, noites longas e pavio curto.', picture: 'Exigente, impaciente, friorento; acorda por volta das 3–4 h pensando no trabalho.', note: 'A planta de origem é tóxica; use apenas remédios preparados comercialmente.' },
      { source: 'Fava-de-santo-inácio', keynote: 'Associada há muito ao luto recente, à decepção e ao choque emocional: suspiros, nó na garganta, humor que muda rápido.', picture: 'Segura os sentimentos e depois eles transbordam de repente.', note: 'O luto merece companhia. Se a perda estiver pesada demais, procure um conselheiro ou grupo de luto.' },
      { source: 'Jasmim-amarelo (planta)', keynote: 'O remédio do "frio na barriga" da tradição: ansiedade pesada e trêmula antes de uma prova, entrevista ou apresentação.', picture: 'Quer ficar sozinho, pernas bambas, sem sede.', note: 'A planta crua é venenosa; nunca prepare em casa.' },
      { source: 'Trióxido de arsênio preparado', keynote: 'Descrito para pessoas inquietas, ansiosas e meticulosas que sentem frio e querem tudo em ordem.', picture: 'Preocupação inquieta, goles de água morna, pior perto da meia-noite.', note: 'Produtos de baixa potência ou mal feitos podem conter arsênio mensurável. Compre só de fabricantes confiáveis.' },
      { source: 'Flor-da-páscoa (planta)', keynote: 'O remédio da tradição para humores suaves, mutáveis e chorosos, com muita vontade de companhia e ar fresco.', picture: 'Melhora ao ar livre e com consolo; sem sede; sintomas que mudam de lugar.', note: 'Essa flor cobre as pradarias das Black Hills toda primavera. Admire; a planta fresca irrita a pele.' },
      { source: 'Beladona (planta)', keynote: 'Ligada classicamente a estados súbitos, intensos e quentes: rosto vermelho, latejamento, sensibilidade à luz e ao barulho.', picture: 'Chega rápido e forte.', note: 'Febre alta, rigidez na nuca ou confusão exigem atendimento médico urgente, sem exceção.' },
      { source: 'Hera-venenosa (planta)', keynote: 'O quadro da "dobradiça enferrujada": rigidez pior ao começar a se mexer que melhora com movimento suave e calor.', picture: 'Inquieto, rígido após o repouso, pior no frio úmido.', note: 'Inchaço ou dor articular persistente merecem avaliação médica.' },
      { source: 'Calêndula (planta)', keynote: 'Usada em tradições fitoterápicas e homeopáticas na pele, para arranhões leves já limpos.', picture: 'Mais comum como pomada ou tintura do que como glóbulos.', note: 'Feridas profundas, sujas ou por mordida de animal precisam de atendimento médico.' },
      { source: 'Erva-de-são-joão (planta)', keynote: 'Associada a pancadas em áreas cheias de nervos: dedo prensado, topada, queda sobre o cóccix.', picture: 'Sensações agudas que correm ao longo de um nervo.', note: 'A erva-de-são-joão fitoterápica (não homeopática) interage com muitos remédios, incluindo anticoncepcionais e antidepressivos.' },
      { source: 'Abelha', keynote: 'O quadro de inchaço rosado, quente e ardido que melhora com compressas frias.', picture: 'Inquieto, sem sede, pior com calor.', note: 'Garganta fechando, dificuldade para respirar ou urticária se espalhando após uma picada é emergência: ligue para o 911 e use a epinefrina se tiver prescrição.' },
      { source: 'Acônito (planta)', keynote: 'Descrito para o susto repentino e o tremor que vem depois, como após quase bater o carro numa estrada congelada.', picture: 'Chega de repente, muitas vezes após vento frio e seco ou um choque.', note: 'O acônito é uma das plantas mais tóxicas da América do Norte. Só remédios preparados comercialmente.' },
      { source: 'Grão de café cru', keynote: 'O quadro da mente agitada que não dorme, cheia demais de ideias ou empolgação.', picture: 'Sentidos aguçados, mente acelerada com boas notícias ou planos.', note: 'Combine com bons hábitos de sono: mesmo horário para acordar e telas desligadas uma hora antes de deitar.' },
      { source: 'Briônia-branca (planta)', keynote: 'Descrita para quem quer ficar totalmente parado, está irritado e com muita sede de bebidas geladas.', picture: '"Me deixa em paz e não me faz mexer."', note: 'Dor ao respirar ou tosse persistente precisam de avaliação médica.' },
      { source: 'Chá-do-pântano (planta)', keynote: 'O remédio tradicional para ferimentos perfurantes e picadas que parecem frios mas aliviam com água fresca.', picture: 'Área fria ao toque; melhora com frio.', note: 'Picadas de carrapato nas Hills merecem atenção: retire com cuidado e observe se surgem manchas ou febre.' },
      { source: 'Eufrásia (planta)', keynote: 'Associada a olhos lacrimejantes, ardidos e irritados, muitas vezes na temporada de pólen.', picture: 'Olhos escorrendo, nariz sem ardor.', note: 'Dor nos olhos, mudança na visão ou olho vermelho após uma batida precisam de atendimento rápido.' },
      { source: 'Cebola-roxa', keynote: 'Um quadro tirado direto de cortar cebola: nariz escorrendo, espirros, olhos lacrimejando, típico dos dias de alergia.', picture: 'Nariz ardendo, olhos sem ardor; melhora ao ar livre.', note: 'Chiado ou falta de ar junto com alergia é motivo para procurar um profissional.' },
      { source: 'Semente de coca-do-levante', keynote: 'Descrita para o cansaço vazio e tonto de noites sem dormir, de cuidar de alguém ou do enjoo em estradas cheias de curvas.', picture: 'Exausto, enjoado, pior com movimento e sem sono.', note: 'Quem cuida também precisa descansar. Veja o espaço Cuidando de alguém no Círculo.' },
      { source: 'Estafisagria (planta)', keynote: 'Associada há muito à raiva engolida e ao orgulho ferido: quem mantém a paz e depois não consegue deixar pra lá.', picture: 'Sensível, guarda as palavras, repassa o momento na cabeça.', note: 'O ressentimento não dito costuma suavizar com uma conversa honesta e segura. Nossos cursos sobre limites podem ajudar.' }
    ],
    guides: [
      { title: 'Kit de trilha e viagem', intro: 'Para caminhadas, viagens pela Needles Highway e longos dias ao ar livre.', steps: ['Primeiro: água, protetor solar, um agasalho e um kit básico de primeiros socorros.', 'Limpe e cubra arranhões; compressas frias para batidas e picadas.', 'Descanse na sombra quando cansar e volte cedo se o tempo mudar.'], tradition: 'Arnica após batidas e esforço, Ledum para picadas e perfurações, Apis para picadas inchadas, pomada de Calêndula para arranhões limpos, Cocculus para enjoo nas curvas.', flags: ['Sinais de reação alérgica após uma picada', 'Batida na cabeça com confusão, vômito ou sonolência', 'Picada de carrapato seguida de manchas ou febre'] },
      { title: 'Temporada de alergias', intro: 'O pólen da primavera e as ervas do fim do verão podem pesar para narizes sensíveis.', steps: ['Feche as janelas em dias de vento e muito pólen.', 'Tome banho e troque de roupa depois de ficar ao ar livre.', 'Lave os olhos com água limpa e fresca; pergunte ao farmacêutico sobre opções sem receita.'], tradition: 'Allium cepa para nariz escorrendo e ardendo; Euphrasia para olhos lacrimejantes e ardidos; Pulsatilla quando os sintomas mudam e o ar fresco ajuda.', flags: ['Chiado ou falta de ar', 'Sintomas que atrapalham o sono por semanas', 'Dor no rosto e febre por mais de alguns dias'] },
      { title: 'Noites agitadas', intro: 'Quando a mente dispara ou o corpo não sossega.', steps: ['Acorde no mesmo horário a semana toda, mesmo depois de uma noite ruim.', 'Diminua luzes e telas uma hora antes de deitar; quarto fresco e escuro.', 'Se não dormir em 20 minutos, levante e faça algo calmo com pouca luz.'], tradition: 'Coffea para a mente empolgada e acelerada; Nux vomica para quem acorda às 3 h por excesso de trabalho; Cocculus para a exaustão por falta de sono.', flags: ['Insônia quase todas as noites por mais de um mês', 'Ronco alto, engasgos ou pausas na respiração', 'Sonolência diurna que torna perigoso dirigir'] },
      { title: 'Abalos emocionais', intro: 'Luto, susto, nervosismo ou raiva que não passam.', steps: ['Por dois minutos, solte o ar por mais tempo do que inspira.', 'Conte a uma pessoa de confiança o que aconteceu.', 'Coma algo, beba água e saia ao ar livre por dez minutos.'], tradition: 'Ignatia para o luto recente, Aconitum para o susto súbito, Gelsemium para o nervosismo antecipado, Staphysagria para a raiva engolida.', flags: ['Pensamentos de se machucar: ligue ou mande mensagem para o 988 agora', 'Não conseguir comer, dormir ou trabalhar por mais de duas semanas', 'Usar álcool ou outras substâncias para aguentar'] }
    ]
  }
};
