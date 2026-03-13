import Reveal from './Reveal';

const benefits = [
  { num: '01', title: 'Más leads cualificados', desc: 'Cada mejora está orientada a generar más contactos comerciales desde la web. Más formularios, más llamadas, más oportunidades.' },
  { num: '02', title: 'Mejor posicionamiento SEO', desc: 'Mejoras continuas en contenido, velocidad y estructura que hacen que Google te posicione mejor cada mes.' },
  { num: '03', title: 'Mayor retorno de tu inversión web', desc: 'En lugar de rehacerla cada 3 años, la evolucionas constantemente por una fracción del coste. Mientras tu competencia se queda quieta, tú avanzas.' },
];

export default function Benefits() {
  return (
    <section className="benefits" id="beneficios">
      <div className="benefits-decoration"></div>
      <div className="container">
        <Reveal>
          <div className="section-header">
            <span className="section-label">Beneficios</span>
            <h2 className="section-title">Lo que gana tu negocio</h2>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <div className="benefits-grid">
            {benefits.map((b, i) => (
              <div className="benefit-card" key={i}>
                <div className="benefit-number">{b.num}</div>
                <h4>{b.title}</h4>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
