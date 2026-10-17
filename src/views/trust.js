// src/views/trust.js
// Trust, ethical boundaries, legal policies, and contact views in Generation 2 styling

import { renderLayout } from './layout.js';
import { ui } from '../locales/ui-strings.js';

export function renderTrustPage({ pageKey, locale = 'en', user = null }) {
  const t = ui[locale] || ui.en;
  const prefix = locale === 'en' ? '' : (locale === 'es' ? '/es' : '/pt-br');

  const pages = {
    about: {
      path: '/about',
      title: {
        en: 'About KindWell — Practical Kindness for Complicated Humans',
        es: 'Sobre KindWell — Ternura práctica para vidas reales',
        'pt-BR': 'Sobre o KindWell — Cuidado real para pessoas reais'
      },
      content: {
        en: `
          <h1>Practical kindness for complicated humans.</h1>
          <p class="lead">KindWell was born out of a simple observation: modern wellness often demands either heroic perfection or hollow positivity. We wanted to build something steadier.</p>
          <h2>Who we are</h2>
          <p>We are a holistic educational publication and quiet peer sanctuary. We bring together somatic grounding, everyday emotional literacy, responsible botanical remedies, and contemplative Christian spirituality. We believe you can honor deep faith, scientific curiosity, and the fragility of the human nervous system in the exact same breath.</p>
          <h2>Where we are rooted</h2>
          <p>KindWell is run by a small group of friends in the Black Hills of South Dakota: ponderosa pine, granite spires, quiet creeks, and long prairie skies. This landscape has been a place of rest, reflection, and renewal for people for a very long time, and it shapes how we work: unhurried, respectful of nature, and honest about what we know and what we don't.</p>
          <p>Alongside somatic practice and emotional literacy, we share the folk traditions many families here keep, including herbal care and <a href="/homeopathy">homeopathy</a>, explained plainly and without medical claims.</p>
          <h2>What KindWell is</h2>
          <ul>
            <li><strong>A companion for unhurried days:</strong> Short practices, thoughtful reflections, and honest education you can try without pressure.</li>
            <li><strong>A respectful peer circle:</strong> Spaces where sorrow, quiet wins, and real questions are welcomed without unsolicited advice.</li>
            <li><strong>A bridge to care:</strong> Clear signposts toward licensed therapists, sliding-scale clinics, and crisis lifelines whenever self-practice is not enough.</li>
          </ul>
          <h2>What KindWell is not</h2>
          <ul>
            <li>We are not an emergency psychiatric hospital, crisis response team, or medical clinic.</li>
            <li>We do not diagnose illness, prescribe medication, or promise miracle cures.</li>
            <li>We do not sell quick fixes or treat complex emotional distress as a failure of willpower.</li>
          </ul>
        `,
        es: `
          <h1>Ternura práctica para vidas reales.</h1>
          <p class="lead">KindWell nació de una convicción sencilla: el bienestar contemporáneo suele exigir un optimismo forzado o soluciones mágicas. Nosotros buscábamos crear un lugar más sereno y verdadero.</p>
          <h2>Quiénes somos</h2>
          <p>Somos un espacio de formación y compañía. Unimos el descanso corporal, la claridad emocional, la herbolaria tradicional y la espiritualidad contemplativa. Creemos que es posible integrar la fe profunda, el respeto por la ciencia y la sensibilidad del cuerpo sin contradicciones.</p>
          <h2>Dónde tenemos raíces</h2>
          <p>KindWell lo lleva un pequeño grupo de amigos en las Black Hills de Dakota del Sur: pinos ponderosa, agujas de granito, arroyos tranquilos y cielos de pradera inmensos. Esta tierra ha sido lugar de descanso, reflexión y renovación desde hace mucho tiempo, y marca nuestra forma de trabajar: sin prisa, con respeto por la naturaleza y con honestidad sobre lo que sabemos y lo que no.</p>
          <p>Junto a la práctica somática y la educación emocional, compartimos tradiciones populares que muchas familias de aquí conservan, como la herbolaria y la <a href="/es/homeopathy">homeopatía</a>, explicadas con claridad y sin afirmaciones médicas.</p>
          <h2>Lo que somos</h2>
          <ul>
            <li><strong>Acompañamiento sin prisas:</strong> Ejercicios breves de calma y reflexiones honestas para el día a día.</li>
            <li><strong>Comunidad de respeto:</strong> Un entorno donde compartir dudas y silencios sin recibir consejos impuestos.</li>
            <li><strong>Puente hacia la ayuda profesional:</strong> Enlaces claros a profesionales de la salud mental y líneas de apoyo en crisis.</li>
          </ul>
        `,
        'pt-BR': `
          <h1>Cuidado real para pessoas reais.</h1>
          <p class="lead">O KindWell nasceu de uma percepção simples: o bem-estar moderno muitas vezes exige perfeição inatingível ou frases vazias de positividade. Quisemos construir um pouso mais seguro e honesto.</p>
          <h2>Quem somos</h2>
          <p>Somos uma comunidade e publicação educativa de bem-estar. Reunimos práticas de respiração, inteligência emocional, saberes botânicos tradicionais e espiritualidade contemplativa. Acreditamos que a fé, a ciência e o cuidado com o corpo caminham de mãos dadas.</p>
          <h2>Onde temos raízes</h2>
          <p>O KindWell é tocado por um pequeno grupo de amigos nas Black Hills, Dakota do Sul: pinheiros ponderosa, agulhas de granito, riachos tranquilos e céus de pradaria imensos. Esta terra é lugar de descanso, reflexão e renovação há muito tempo, e molda nosso jeito de trabalhar: sem pressa, com respeito pela natureza e com honestidade sobre o que sabemos e o que não sabemos.</p>
          <p>Ao lado das práticas corporais e da educação emocional, compartilhamos tradições populares que muitas famílias daqui guardam, como as ervas e a <a href="/pt-br/homeopathy">homeopatia</a>, explicadas com clareza e sem promessas médicas.</p>
          <h2>Nossa essência</h2>
          <ul>
            <li><strong>Pausas sem cobrança:</strong> Exercícios somáticos simples e reflexões para dias cansativos.</li>
            <li><strong>Comunidade afetuosa:</strong> Espaço seguro para compartilhar sentimentos sinceros sem julgamentos.</li>
            <li><strong>Apoio responsável:</strong> Pontes diretas para atendimento clínico especializado sempre que necessário.</li>
          </ul>
        `
      }
    },
    editorial: {
      path: '/editorial',
      title: {
        en: 'Editorial Approach & Evidence Standards — KindWell',
        es: 'Criterios editoriales y rigor informativo — KindWell',
        'pt-BR': 'Critérios editoriais e compromisso ético — KindWell'
      },
      content: {
        en: `
          <h1>Our editorial approach.</h1>
          <p class="lead">How we research, write, and review wellness education across herbal traditions, somatic practices, and contemplative spiritual care.</p>
          <h2>Evidence-informed and boundary-aware</h2>
          <p>Every guide published on KindWell is written with deep respect for both historical herbal traditions and modern pharmacological science. We clearly distinguish traditional folklore uses from laboratory-verified clinical effects.</p>
          <h2>We do not make disease-cure claims</h2>
          <p>You will never see claims on KindWell that herbs, teas, crystals, or Reiki "cure cancer", "heal major depression", "eliminate trauma", or "balance cortisol". We explicitly reject non-clinical diagnoses like "adrenal fatigue". When discussing symptoms that mimic serious illness, we list red-flag symptoms that require urgent medical evaluation.</p>
          <h2>Human-authored and carefully reviewed</h2>
          <p>Our articles, affirmations, and courses are written by thoughtful humans. We do not use automated synthetic content generators to mass-produce wellness copy.</p>
        `,
        es: `
          <h1>Nuestra línea editorial.</h1>
          <p class="lead">Cómo investigamos y redactamos nuestros contenidos sobre herbolaria, bienestar corporal y acompañamiento espiritual.</p>
          <h2>Rigor, tradición y límites claros</h2>
          <p>Cada publicación en KindWell se elabora con respeto tanto por la tradición popular como por el conocimiento médico contemporáneo. Diferenciamos siempre el simbolismo cultural de la evidencia científica contrastada.</p>
          <h2>Rechazo tajante a promesas milagrosas</h2>
          <p>En KindWell nunca encontrarás afirmaciones que atribuyan a las plantas o a los cristales la cura de enfermedades graves o trastornos psiquiátricos. Rechazamos diagnósticos no reconocidos como la supuesta "fatiga adrenal" y señalamos siempre cuándo acudir a urgencias médicas.</p>
        `,
        'pt-BR': `
          <h1>Nossos critérios editoriais.</h1>
          <p class="lead">Como pesquisamos e estruturamos nossos artigos de bem-estar, sabedoria botânica e espiritualidade.</p>
          <h2>Respeito à ciência e às tradições</h2>
          <p>Todos os conteúdos do KindWell equilibram o apreço pela sabedoria popular das plantas com o respeito à medicina moderna. Deixamos clara a distinção entre costumes tradicionais e comprovação científica.</p>
          <h2>Sem promessas de cura</h2>
          <p>Não publicamos promessas de cura milagrosa para depressão, ansiedade ou doenças físicas. Rejeitamos rótulos como "fadiga adrenal" e orientamos a busca imediata por atendimento médico diante de sinais graves.</p>
        `
      }
    },
    boundaries: {
      path: '/boundaries',
      title: {
        en: 'Wellness & Medical Boundaries — KindWell',
        es: 'Límites de salud y límites médicos — KindWell',
        'pt-BR': 'Limites de saúde e cuidado médico — KindWell'
      },
      content: {
        en: `
          <h1>Wellness and medical boundaries.</h1>
          <p class="lead">Understanding the clear distinction between personal self-practice, contemplative companionship, and licensed medical care.</p>
          <h2>We are not your doctor or therapist</h2>
          <p>The information, exercises, course materials, and community interactions on KindWell.org are for educational and self-reflection purposes only. They do not constitute the practice of medicine, nursing, clinical psychology, psychotherapy, psychiatry, or any other licensed healthcare profession.</p>
          <h2>When to seek immediate professional care</h2>
          <p>If you are experiencing thoughts of harming yourself or others, profound disorientation, severe chest pain, sudden thunderclap headaches, or inability to perform basic daily self-care, please seek emergency medical attention immediately or dial <strong>988</strong> (in the US and Canada).</p>
        `,
        es: `
          <h1>Límites de salud y cuidado médico.</h1>
          <p class="lead">Comprender la diferencia esencial entre la práctica personal, el acompañamiento contemplativo y la medicina profesional.</p>
          <h2>No sustituimos a tu equipo médico</h2>
          <p>Los textos, ejercicios y cursos de KindWell tienen una finalidad exclusivamente formativa y de desarrollo personal. En ningún caso constituyen un acto médico, psicológico ni psiquiátrico.</p>
          <h2>Atención inmediata en emergencias</h2>
          <p>Si experimentas pensamientos de autolesión, dolor agudo en el pecho o malestar insoportable, contacta de inmediato con los servicios de urgencias de tu localidad o llama al <strong>988</strong>.</p>
        `,
        'pt-BR': `
          <h1>Limites de saúde e atendimento médico.</h1>
          <p class="lead">A distinção fundamental entre o autocuidado cotidiano e a atenção médica especializada.</p>
          <h2>Não realizamos consultas médicas</h2>
          <p>Os materiais e cursos do KindWell são educativos e contemplativos. Não substituem o diagnóstico, a prescrição nem o acompanhamento de médicos e psicólogos.</p>
          <h2>Casos de urgência</h2>
          <p>Se você estiver enfrentando ideação de autoagressão, dores torácicas súbitas ou sofrimento insuportável, procure atendimento médico emergencial ou ligue para o <strong>988</strong>.</p>
        `
      }
    },
    standards: {
      path: '/standards',
      title: {
        en: 'Practitioner Network Standards — KindWell',
        es: 'Código de ética para acompañantes — KindWell',
        'pt-BR': 'Padrões éticos para cuidadores — KindWell'
      },
      content: {
        en: `
          <h1>Practitioner network standards.</h1>
          <p class="lead">Our ethical expectations for contemplative companions, Reiki practitioners, and grief listeners.</p>
          <h2>Our ethical pledge</h2>
          <ul>
            <li><strong>Informed consent & boundaries:</strong> Prioritize physical and emotional agency. Never touch without affirmative consent.</li>
            <li><strong>No diagnosis:</strong> Never claim to diagnose disease or mental health disorders.</li>
            <li><strong>Referral obligations:</strong> Actively guide clients to licensed medical or psychiatric professionals whenever indicated.</li>
            <li><strong>Financial transparency:</strong> Honest pricing with no high-pressure renewal tactics.</li>
          </ul>
        `,
        es: `
          <h1>Código de ética para acompañantes.</h1>
          <p class="lead">Principios éticos para acompañantes espirituales, practicantes de Reiki y facilitadores de duelo.</p>
          <h2>Compromiso de cuidado</h2>
          <ul>
            <li><strong>Consentimiento y respeto:</strong> Jamás realizar contacto físico sin permiso explícito y voluntario.</li>
            <li><strong>Sin diagnósticos:</strong> No emitir diagnósticos clínicos ni sugerir cambios en fármacos recetados.</li>
            <li><strong>Deber de derivación:</strong> Derivar siempre a profesionales sanitarios colegiados ante cualquier sospecha de patología.</li>
          </ul>
        `,
        'pt-BR': `
          <h1>Padrões éticos para cuidadores.</h1>
          <p class="lead">Diretrizes de respeito e responsabilidade para praticantes e facilitadores da rede KindWell.</p>
          <h2>Nossos compromissos</h2>
          <ul>
            <li><strong>Consentimento e acolhimento:</strong> Respeito absoluto aos limites do outro, sem toque invasivo.</li>
            <li><strong>Sem diagnósticos clínicos:</strong> Respeito à competência médica e psicológica legal.</li>
            <li><strong>Encaminhamento responsável:</strong> Orientar a busca por profissionais de saúde sempre que indicado.</li>
          </ul>
        `
      }
    },
    contact: {
      path: '/contact',
      title: {
        en: 'Contact & Editorial Corrections — KindWell',
        es: 'Contacto y sugerencias — KindWell',
        'pt-BR': 'Contato e correções — KindWell'
      },
      content: {
        en: `
          <h1>Contact KindWell.</h1>
          <p class="lead">We welcome thoughtful inquiries, editorial corrections, member support questions, and practitioner introductions.</p>
          <div style="background:var(--paper);border-radius:var(--radius);padding:32px;border:1px solid var(--line);margin:32px 0;">
            <h3 style="font-family:var(--serif);font-size:22px;margin:0 0 8px;color:var(--ink);">General & Member Inquiries</h3>
            <p style="margin:0 0 16px;color:var(--muted);">For questions about courses, downloads, account access, or editorial corrections:</p>
            <a href="mailto:care@kindwell.org" style="font-size:18px;font-weight:600;color:var(--deep);text-decoration:underline;">care@kindwell.org</a>
          </div>
          <div style="background:var(--cream);border-radius:18px;padding:24px;border:1px solid var(--line);">
            <strong style="color:var(--danger);display:block;margin-bottom:6px;">Not a crisis service:</strong>
            <p style="margin:0;font-size:14px;color:var(--muted);line-height:1.5;">This email inbox is monitored during standard business hours and cannot respond to urgent emergencies. If you are in distress, please call or text <strong>988</strong>.</p>
          </div>
        `,
        es: `
          <h1>Contacto con KindWell.</h1>
          <p class="lead">Agradecemos tus consultas, correcciones editoriales y preguntas sobre el acceso a tus materiales.</p>
          <div style="background:var(--paper);border-radius:var(--radius);padding:32px;border:1px solid var(--line);margin:32px 0;">
            <h3 style="font-family:var(--serif);font-size:22px;margin:0 0 8px;color:var(--ink);">Atención general y a miembros</h3>
            <p style="margin:0 0 16px;color:var(--muted);">Escríbenos directamente para cualquier consulta sobre tu cuenta o sugerencias:</p>
            <a href="mailto:care@kindwell.org" style="font-size:18px;font-weight:600;color:var(--deep);text-decoration:underline;">care@kindwell.org</a>
          </div>
        `,
        'pt-BR': `
          <h1>Fale com o KindWell.</h1>
          <p class="lead">Estamos à disposição para dúvidas sobre cursos, assinaturas e correções editoriais.</p>
          <div style="background:var(--paper);border-radius:var(--radius);padding:32px;border:1px solid var(--line);margin:32px 0;">
            <h3 style="font-family:var(--serif);font-size:22px;margin:0 0 8px;color:var(--ink);">Atendimento a membros</h3>
            <p style="margin:0 0 16px;color:var(--muted);">Fale conosco diretamente pelo nosso endereço de suporte:</p>
            <a href="mailto:care@kindwell.org" style="font-size:18px;font-weight:600;color:var(--deep);text-decoration:underline;">care@kindwell.org</a>
          </div>
        `
      }
    },
    privacy: {
      path: '/privacy',
      title: {
        en: 'Privacy Policy — KindWell',
        es: 'Política de privacidad — KindWell',
        'pt-BR': 'Política de privacidade — KindWell'
      },
      content: {
        en: `
          <h1>Privacy policy.</h1>
          <p class="lead">What we keep, why, and who else sees it. Plain and short.</p>
          <h2>We never sell your information</h2>
          <p>KindWell does not sell, rent, or trade your personal information to anyone.</p>
          <h2>What we keep</h2>
          <ul>
            <li><strong>Your account:</strong> name, email, a securely hashed password, language, and membership level.</li>
            <li><strong>Your activity:</strong> course progress, saved favorites, and any reflection notes you choose to write. Notes are private to you.</li>
            <li><strong>Quiz results:</strong> only the result, so you can see it again. Results are for reflection, not diagnosis.</li>
            <li><strong>Orders:</strong> what you bought and, for merch, your shipping address.</li>
            <li><strong>Circle posts:</strong> what you post is visible to members who can read that space.</li>
          </ul>
          <h2>Who else sees it</h2>
          <ul>
            <li><strong>Stripe</strong> handles all payments. We never see or store your card number.</li>
            <li><strong>Printify</strong> receives your name and shipping address to print and ship merch.</li>
            <li><strong>Google Analytics</strong> counts visits using cookies. If we show Google ads, Google may use cookies to choose them; you can opt out in Google Ad Settings.</li>
          </ul>
          <h2>Your choices</h2>
          <p>Email <a href="mailto:care@kindwell.org">care@kindwell.org</a> to see, correct, or delete your data. Deleting your account removes your notes and quiz results; we keep order records only as long as tax law requires.</p>
        `,
        es: `
          <h1>Política de privacidad.</h1>
          <p class="lead">Qué guardamos, por qué y quién más lo ve. Claro y breve.</p>
          <h2>Nunca vendemos tu información</h2>
          <p>KindWell no vende, alquila ni intercambia tus datos personales con nadie.</p>
          <h2>Qué guardamos</h2>
          <ul>
            <li><strong>Tu cuenta:</strong> nombre, correo, una contraseña cifrada de forma segura, idioma y nivel de membresía.</li>
            <li><strong>Tu actividad:</strong> avance en los cursos, favoritos y las notas de reflexión que decidas escribir. Tus notas son privadas.</li>
            <li><strong>Resultados de cuestionarios:</strong> solo el resultado, para que puedas volver a verlo. Son para reflexionar, no un diagnóstico.</li>
            <li><strong>Pedidos:</strong> lo que compraste y, en productos físicos, tu dirección de envío.</li>
            <li><strong>Publicaciones en el Círculo:</strong> las ven los miembros que pueden leer ese espacio.</li>
          </ul>
          <h2>Quién más lo ve</h2>
          <ul>
            <li><strong>Stripe</strong> procesa todos los pagos. Nunca vemos ni guardamos tu tarjeta.</li>
            <li><strong>Printify</strong> recibe tu nombre y dirección para imprimir y enviar productos.</li>
            <li><strong>Google Analytics</strong> cuenta visitas con cookies. Si mostramos anuncios de Google, Google puede usar cookies para elegirlos; puedes desactivarlo en la configuración de anuncios de Google.</li>
          </ul>
          <h2>Tus opciones</h2>
          <p>Escribe a <a href="mailto:care@kindwell.org">care@kindwell.org</a> para ver, corregir o borrar tus datos. Al borrar tu cuenta se eliminan tus notas y resultados; los pedidos se conservan solo el tiempo que exige la ley fiscal.</p>
        `,
        'pt-BR': `
          <h1>Política de privacidade.</h1>
          <p class="lead">O que guardamos, por quê e quem mais vê. Simples e curto.</p>
          <h2>Nunca vendemos suas informações</h2>
          <p>O KindWell não vende, aluga nem troca seus dados pessoais com ninguém.</p>
          <h2>O que guardamos</h2>
          <ul>
            <li><strong>Sua conta:</strong> nome, e-mail, uma senha protegida com criptografia, idioma e plano.</li>
            <li><strong>Sua atividade:</strong> progresso nos cursos, favoritos e as anotações de reflexão que você escolher escrever. Suas anotações são privadas.</li>
            <li><strong>Resultados de questionários:</strong> só o resultado, para você rever depois. Servem para reflexão, não são diagnóstico.</li>
            <li><strong>Pedidos:</strong> o que você comprou e, para produtos físicos, seu endereço de entrega.</li>
            <li><strong>Posts no Círculo:</strong> ficam visíveis aos membros que podem ler aquele espaço.</li>
          </ul>
          <h2>Quem mais vê</h2>
          <ul>
            <li><strong>Stripe</strong> processa todos os pagamentos. Nunca vemos nem guardamos o número do seu cartão.</li>
            <li><strong>Printify</strong> recebe seu nome e endereço para imprimir e enviar produtos.</li>
            <li><strong>Google Analytics</strong> conta visitas com cookies. Se exibirmos anúncios do Google, o Google pode usar cookies para escolhê-los; você pode desativar nas configurações de anúncios do Google.</li>
          </ul>
          <h2>Suas escolhas</h2>
          <p>Escreva para <a href="mailto:care@kindwell.org">care@kindwell.org</a> para ver, corrigir ou apagar seus dados. Ao apagar a conta, removemos suas anotações e resultados; registros de pedidos ficam só pelo tempo exigido pela lei fiscal.</p>
        `
      }
    },
    refund: {
      path: '/refund',
      title: {
        en: 'Refund Policy — KindWell',
        es: 'Política de reembolsos — KindWell',
        'pt-BR': 'Política de reembolso — KindWell'
      },
      content: {
        en: `
          <h1>Refund policy.</h1>
          <p class="lead">If something isn't right, we'll make it right.</p>
          <h2>Memberships</h2>
          <p>Cancel any time from your account; you keep access until the end of the month you paid for. If you are charged for a membership and change your mind within 7 days of your first payment, email us and we'll refund it in full. We don't refund partial months after that.</p>
          <h2>Digital downloads</h2>
          <p>Because files are delivered instantly, downloads are not refundable once accessed. If a file won't open or is missing pages, email us within 30 days and we'll fix it or refund you.</p>
          <h2>Merch</h2>
          <p>Every item is printed just for you, so we can't take returns for a change of mind or the wrong size. If your order arrives damaged, misprinted, or doesn't arrive, email us within 30 days of delivery (or the expected delivery date) with a photo, and we'll send a replacement or a full refund.</p>
          <h2>How refunds are paid</h2>
          <p>Refunds go back to your original payment method through Stripe and usually appear within 5–10 business days.</p>
          <h2>Contact</h2>
          <p><a href="mailto:care@kindwell.org">care@kindwell.org</a>, with your order email and what went wrong.</p>
        `,
        es: `
          <h1>Política de reembolsos.</h1>
          <p class="lead">Si algo no está bien, lo solucionamos.</p>
          <h2>Membresías</h2>
          <p>Cancela cuando quieras desde tu cuenta; mantienes el acceso hasta el final del mes pagado. Si cambias de opinión dentro de los 7 días posteriores a tu primer pago, escríbenos y te devolvemos el importe completo. Después no reembolsamos meses parciales.</p>
          <h2>Descargas digitales</h2>
          <p>Como los archivos se entregan al instante, no son reembolsables una vez abiertos. Si un archivo no abre o le faltan páginas, escríbenos dentro de 30 días y lo arreglamos o te reembolsamos.</p>
          <h2>Productos físicos</h2>
          <p>Cada artículo se imprime solo para ti, así que no aceptamos devoluciones por cambio de opinión o talla equivocada. Si tu pedido llega dañado, mal impreso o no llega, escríbenos dentro de 30 días desde la entrega (o la fecha prevista) con una foto, y te enviamos un reemplazo o un reembolso completo.</p>
          <h2>Cómo se paga el reembolso</h2>
          <p>Los reembolsos vuelven a tu método de pago original a través de Stripe y suelen verse en 5 a 10 días hábiles.</p>
          <h2>Contacto</h2>
          <p><a href="mailto:care@kindwell.org">care@kindwell.org</a>, con el correo del pedido y qué salió mal.</p>
        `,
        'pt-BR': `
          <h1>Política de reembolso.</h1>
          <p class="lead">Se algo não estiver certo, a gente resolve.</p>
          <h2>Planos</h2>
          <p>Cancele quando quiser pela sua conta; o acesso continua até o fim do mês pago. Se mudar de ideia em até 7 dias após o primeiro pagamento, escreva para nós e devolvemos o valor integral. Depois disso, não reembolsamos meses parciais.</p>
          <h2>Downloads digitais</h2>
          <p>Como os arquivos são entregues na hora, não há reembolso depois de acessados. Se um arquivo não abrir ou faltar páginas, escreva em até 30 dias e corrigimos ou reembolsamos.</p>
          <h2>Produtos físicos</h2>
          <p>Cada item é impresso só para você, então não aceitamos devoluções por arrependimento ou tamanho errado. Se o pedido chegar danificado, com defeito de impressão ou não chegar, escreva em até 30 dias da entrega (ou da data prevista) com uma foto, e enviamos outro ou devolvemos o valor integral.</p>
          <h2>Como o reembolso é feito</h2>
          <p>O reembolso volta para a forma de pagamento original pela Stripe e costuma aparecer em 5 a 10 dias úteis.</p>
          <h2>Contato</h2>
          <p><a href="mailto:care@kindwell.org">care@kindwell.org</a>, com o e-mail do pedido e o que deu errado.</p>
        `
      }
    },
    terms: {
      path: '/terms',
      title: {
        en: 'Terms of Use — KindWell',
        es: 'Términos de uso — KindWell',
        'pt-BR': 'Termos de uso — KindWell'
      },
      content: {
        en: `
          <h1>Terms of use.</h1>
          <p class="lead">The short version of how KindWell works.</p>
          <h2>Education, not medical care</h2>
          <p>Everything on KindWell, including remedies, homeopathy, Reiki, quizzes, and courses, is educational and reflective. It is not medical advice, diagnosis, or therapy. For health concerns, see a licensed professional. In a crisis, call or text 988, or call 911.</p>
          <h2>Memberships</h2>
          <p>Kind ($5/month), Steady ($10/month), and Supported ($20/month) renew monthly until you cancel. Cancel any time from your account; you keep access until the end of the period you paid for.</p>
          <h2>The Circle</h2>
          <p>Treat members with respect. No harassment, no sharing others' private details, and no medical advice or diagnoses. We may remove posts or accounts that break these rules.</p>
          <h2>Purchases</h2>
          <p>Digital downloads are for your personal use; please don't share or resell them. Merch is printed to order. See our <a href="/refund">refund policy</a>.</p>
          <h2>Our content</h2>
          <p>Courses, writing, and images belong to KindWell. Quote briefly with a link; don't copy whole pages.</p>
        `,
        es: `
          <h1>Términos de uso.</h1>
          <p class="lead">La versión breve de cómo funciona KindWell.</p>
          <h2>Educación, no atención médica</h2>
          <p>Todo en KindWell, incluidos remedios, homeopatía, Reiki, cuestionarios y cursos, es educativo y de reflexión. No es consejo médico, diagnóstico ni terapia. Ante problemas de salud, consulta a un profesional. En una crisis, llama o escribe al 988, o llama al 911.</p>
          <h2>Membresías</h2>
          <p>Kind (5 USD/mes), Steady (10 USD/mes) y Supported (20 USD/mes) se renuevan cada mes hasta que canceles. Puedes cancelar cuando quieras desde tu cuenta y mantienes el acceso hasta el final del periodo pagado.</p>
          <h2>El Círculo</h2>
          <p>Trata a los demás con respeto. Sin acoso, sin compartir datos privados ajenos y sin consejos médicos ni diagnósticos. Podemos retirar publicaciones o cuentas que incumplan estas normas.</p>
          <h2>Compras</h2>
          <p>Las descargas digitales son para uso personal; no las compartas ni revendas. Los productos físicos se imprimen por pedido. Consulta nuestra <a href="/es/refund">política de reembolsos</a>.</p>
          <h2>Nuestro contenido</h2>
          <p>Los cursos, textos e imágenes pertenecen a KindWell. Cita brevemente con un enlace; no copies páginas completas.</p>
        `,
        'pt-BR': `
          <h1>Termos de uso.</h1>
          <p class="lead">A versão curta de como o KindWell funciona.</p>
          <h2>Educação, não atendimento médico</h2>
          <p>Tudo no KindWell, incluindo remédios, homeopatia, Reiki, questionários e cursos, é educativo e reflexivo. Não é conselho médico, diagnóstico nem terapia. Para questões de saúde, procure um profissional. Em uma crise, ligue ou mande mensagem para o 988, ou ligue para o 911.</p>
          <h2>Planos</h2>
          <p>Kind (US$ 5/mês), Steady (US$ 10/mês) e Supported (US$ 20/mês) renovam todo mês até você cancelar. Cancele quando quiser pela sua conta; o acesso continua até o fim do período pago.</p>
          <h2>O Círculo</h2>
          <p>Trate os membros com respeito. Sem assédio, sem expor dados privados de outras pessoas e sem conselhos médicos ou diagnósticos. Podemos remover posts ou contas que quebrem essas regras.</p>
          <h2>Compras</h2>
          <p>Downloads digitais são para uso pessoal; não compartilhe nem revenda. Produtos físicos são impressos sob encomenda. Veja nossa <a href="/pt-br/refund">política de reembolso</a>.</p>
          <h2>Nosso conteúdo</h2>
          <p>Cursos, textos e imagens pertencem ao KindWell. Cite brevemente com um link; não copie páginas inteiras.</p>
        `
      }
    }
  };

  const page = pages[pageKey] || pages.about;
  const pageTitle = (page.title && page.title[locale]) || page.title.en;
  const pageHtml = (page.content && page.content[locale]) || page.content.en;

  const bodyContent = `
  <section class="section" style="padding:60px 0 100px;">
    <div class="container" style="max-width:800px;">
      <p class="breadcrumb" style="font-size:13px;color:var(--muted);margin-bottom:20px;">
        <a href="${prefix || '/'}" style="text-decoration:underline;">${t.nav.home}</a> / ${pageTitle.split('—')[0].trim()}
      </p>
      <article class="card" style="background:var(--paper);border-radius:var(--radius);padding:48px;box-shadow:var(--shadow);border:1px solid var(--line);font-size:16px;line-height:1.75;color:var(--ink);">
        ${pageHtml}
      </article>
    </div>
  </section>
  `;

  return renderLayout({
    title: pageTitle,
    description: `KindWell — ${pageTitle.split('—')[0].trim()}`,
    path: page.path,
    locale,
    user,
    bodyContent
  });
}
