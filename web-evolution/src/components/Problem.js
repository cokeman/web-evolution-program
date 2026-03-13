import Reveal from './Reveal';

const problems = [
  {
    icon: <svg className="icon-animated" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-pink)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>,
    title: 'La web se lanza y se olvida', desc: 'Se publica con ilusión, pero a los 3 meses ya nadie revisa si está cumpliendo objetivos o si hay oportunidades de mejora.'
  },
  {
    icon: <svg className="icon-animated" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-yellow)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>,
    title: 'El mantenimiento no es mejora', desc: 'Actualizar plugins o renovar el hosting no es optimizar. Tu competencia mejora mientras tu web se mantiene igual.'
  },
  {
    icon: <svg className="icon-animated" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-teal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>,
    title: 'Sin estrategia digital continua', desc: 'El equipo interno no tiene tiempo o conocimiento para analizar datos, detectar mejoras y ejecutarlas de forma recurrente.'
  },
];

const consequences = [
  { icon: '📉', text: 'Pierdes posiciones en Google mientras tu competencia escala contenido' },
  { icon: '💸', text: 'Tu coste de adquisición sube al no convertir desde la web' },
  { icon: '🚪', text: 'Los visitantes se van sin contactar: CTAs poco claros, páginas lentas' },
  { icon: '⏳', text: 'Acumulas deuda técnica que encarece el rediseño que terminarás necesitando' },
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
        <Reveal delay={300}>
          <div className="consequences-inline">
            <h3>Lo que esto le cuesta a tu negocio:</h3>
            <div className="consequences-list">
              {consequences.map((c, i) => (
                <div className="consequence-inline-item" key={i}>
                  <span className="consequence-inline-icon">{c.icon}</span>
                  <span>{c.text}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
