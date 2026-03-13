import { useState } from 'react';
import Reveal from './Reveal';

const faqs = [
  { q: '¿Qué tecnologías soportáis?', a: 'Trabajamos con Acai Framework, WordPress, Webflow, Shopify, Next.js, Nuxt.js y cualquier CMS o framework moderno. Si tu web está construida con tecnología personalizada, también podemos adaptarnos.' },
  { q: '¿Hay permanencia mínima?', a: 'Recomendamos un compromiso mínimo de 3 meses para poder ver resultados significativos, pero no hay permanencia obligatoria. Puedes cancelar con un preaviso de 30 días.' },
  { q: '¿Las horas no utilizadas se acumulan?', a: 'En el plan Growth las horas se acumulan hasta 1 mes, y en el plan Scale hasta 2 meses. En el plan Start las horas no son acumulables.' },
  { q: '¿Quién decide qué mejoras se implementan?', a: 'Nosotros analizamos y proponemos un plan priorizado. Tú apruebas las acciones antes de que las implementemos. Siempre tienes la última palabra.' },
  { q: '¿Necesito dar accesos a mi web?', a: 'Sí, necesitaremos acceso al panel de administración del CMS, a Google Analytics / Search Console y al hosting. Firmamos un NDA y trabajamos con permisos de usuario específicos.' },
  { q: '¿Puedo cambiar de plan?', a: 'Sí, puedes escalar o reducir tu plan en cualquier momento. El cambio se aplica en el siguiente ciclo mensual.' },
  { q: '¿Qué pasa si necesito más horas un mes puntual?', a: 'Puedes contratar horas adicionales bajo demanda. Te informamos del coste antes de ejecutar cualquier hora extra para que siempre tengas el control.' },
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
            <span className="section-label">FAQ</span>
            <h2 className="section-title">Preguntas frecuentes</h2>
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
