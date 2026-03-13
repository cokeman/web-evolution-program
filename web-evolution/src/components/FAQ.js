import { useState } from 'react';
import Reveal from './Reveal';

const faqs = [
  { q: '"Ya tenemos un mantenimiento web contratado"', a: 'Un mantenimiento actualiza plugins y hace backups. Nosotros analizamos, proponemos e implementamos mejoras que generan negocio. Son servicios complementarios, no sustitutivos.' },
  { q: '"4 horas al mes no parece mucho"', a: '4 horas de trabajo estratégico y enfocado pueden transformar una web. No se trata de cantidad sino de priorizar las mejoras con mayor impacto en conversión y negocio.' },
  { q: '"Preferimos hacer un rediseño completo"', a: 'Un rediseño cuesta 5-10x más, tarda meses y resetea tu SEO. Con mejora continua, evolucionas sin riesgo, mides cada cambio y pagas una fracción.' },
  { q: '"Nuestro equipo interno puede hacerlo"', a: '¿Lo está haciendo? La realidad es que el día a día consume al equipo. Nosotros aportamos foco, metodología y ejecución dedicada sin sumar carga a tu equipo.' },
  { q: '¿Cómo sé que funciona?', a: 'Cada mes recibes un informe con las mejoras realizadas y su impacto medible. Si en 3 meses no ves resultados, revisamos la estrategia contigo sin coste adicional.' },
  { q: '¿Qué tecnologías soportáis?', a: 'Trabajamos con Acai Framework, WordPress, Webflow, Shopify, Next.js, Nuxt.js y cualquier CMS o framework moderno. Si tu web está construida con tecnología personalizada, también podemos adaptarnos.' },
  { q: '¿Hay permanencia mínima?', a: 'Recomendamos un compromiso mínimo de 3 meses para poder ver resultados significativos, pero no hay permanencia obligatoria. Puedes cancelar con un preaviso de 30 días.' },
  { q: '¿Las horas no utilizadas se acumulan?', a: 'En el plan Growth las horas se acumulan hasta 1 mes, y en el plan Scale hasta 2 meses. En el plan Start las horas no son acumulables.' },
  { q: '¿Quién decide qué mejoras se implementan?', a: 'Nosotros analizamos y proponemos un plan priorizado. Tú apruebas las acciones antes de que las implementemos. Siempre tienes la última palabra.' },
  { q: '¿Puedo cambiar de plan?', a: 'Sí, puedes escalar o reducir tu plan en cualquier momento. El cambio se aplica en el siguiente ciclo mensual.' },
  { q: '¿Cómo empezamos?', a: 'Agendamos una reunión de 30 minutos para entender tu web y tus objetivos. Si encajamos, hacemos una auditoría inicial y arrancamos el primer mes con un plan de mejoras concreto.' },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <Reveal>
          <div className="section-header">
            <span className="section-label">Preguntas frecuentes</span>
            <h2 className="section-title">Resolvemos tus dudas</h2>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <div className={`faq-item${openIndex === i ? ' open' : ''}`} key={i}>
                <button className="faq-question" onClick={() => toggle(i)}>
                  {faq.q}
                </button>
                <div className="faq-answer" style={{ maxHeight: openIndex === i ? 200 : 0 }}>
                  <div className="faq-answer-inner">{faq.a}</div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
