import Reveal from './Reveal';

const problems = [
  { icon: '📉', title: 'La web se lanza y se olvida', desc: 'Se publica con ilusión, pero a los 3 meses ya nadie revisa si está cumpliendo objetivos o si hay oportunidades de mejora.' },
  { icon: '🔧', title: 'El mantenimiento no es mejora', desc: 'Actualizar plugins o renovar el hosting no es optimizar. Tu competencia mejora mientras tu web se mantiene igual.' },
  { icon: '🎯', title: 'Sin estrategia digital continua', desc: 'El equipo interno no tiene tiempo o conocimiento para analizar datos, detectar mejoras y ejecutarlas de forma recurrente.' },
];

export default function Problem() {
  return (
    <section className="problem" id="problema">
      <div className="container">
        <Reveal>
          <div className="section-header">
            <span className="section-label">El problema</span>
            <h2 className="section-title">El 83% de las webs corporativas se estancan tras su lanzamiento</h2>
            <p className="section-subtitle">Se invierten miles de euros en crear una web y luego... nada. Sin evolución, sin optimización, sin resultados crecientes.</p>
          </div>
        </Reveal>
        <div className="problem-grid">
          {problems.map((p, i) => (
            <Reveal key={i} delay={i * 150}>
              <div className="problem-card glass-card-dark">
                <div className="problem-icon">{p.icon}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
