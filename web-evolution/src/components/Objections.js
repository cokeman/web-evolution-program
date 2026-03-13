import Reveal from './Reveal';

const objections = [
  { q: '"Ya tenemos un mantenimiento web contratado"', a: 'Un mantenimiento actualiza plugins y hace backups. Nosotros analizamos, proponemos e implementamos mejoras que generan negocio. Son servicios complementarios, no sustitutivos.' },
  { q: '"4 horas al mes no parece mucho"', a: '4 horas de trabajo estratégico y enfocado pueden transformar una web. No se trata de cantidad sino de priorizar las mejoras con mayor impacto en conversión y negocio.' },
  { q: '"Preferimos hacer un rediseño completo"', a: 'Un rediseño cuesta 5-10x más, tarda meses y resetea tu SEO. Con mejora continua, evolucionas sin riesgo, mides cada cambio y pagas una fracción.' },
  { q: '"Nuestro equipo interno puede hacerlo"', a: '¿Lo está haciendo? La realidad es que el día a día consume al equipo. Nosotros aportamos foco, metodología y ejecución dedicada sin sumar carga a tu equipo.' },
  { q: '"¿Cómo sé que funciona?"', a: 'Cada mes recibes un informe con las mejoras realizadas y su impacto medible. Si en 3 meses no ves resultados, revisamos la estrategia contigo sin coste adicional.' },
  { q: '"¿Y si no hay nada que mejorar?"', a: 'En más de 120 auditorías nunca nos hemos quedado sin mejoras. Siempre hay oportunidades en UX, velocidad, conversión, SEO o contenido. Siempre.' },
];

export default function Objections() {
  return (
    <section className="objections" id="objeciones">
      <div className="container">
        <Reveal>
          <div className="section-header">
            <span className="section-label">Resolvemos tus dudas</span>
            <h2 className="section-title">Objeciones que escuchamos (y nuestras respuestas)</h2>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <div className="objections-grid">
            {objections.map((o, i) => (
              <div className="objection-card" key={i}>
                <div className="objection-q"><span>💬</span> {o.q}</div>
                <p className="objection-a">{o.a}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
