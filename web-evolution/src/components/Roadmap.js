import Reveal from './Reveal';

const quarters = [
  { phase: 'Trimestre 1 — Cimientos', title: 'Fundamentos y quick wins', desc: 'Establecemos las bases técnicas y capturamos las mejoras de impacto inmediato.', items: ['Auditoría inicial completa', 'Optimización de velocidad', 'Corrección de errores SEO', 'Mejora de CTAs principales'] },
  { phase: 'Trimestre 2 — Crecimiento', title: 'Conversión y contenido', desc: 'Enfocamos las mejoras en generar más leads y mejorar el posicionamiento orgánico.', items: ['Optimización de formularios', 'Landing pages de servicio', 'Implementación de tracking', 'Primeros tests A/B'] },
  { phase: 'Trimestre 3 — Optimización', title: 'Datos y experimentación', desc: 'Usamos los datos acumulados para tomar decisiones de mejora basadas en evidencia.', items: ['Tests A/B avanzados', 'Personalización de contenido', 'Optimización de embudos', 'Estrategia de contenidos'] },
  { phase: 'Trimestre 4 — Escalado', title: 'Automatización y escala', desc: 'Automatizamos procesos y escalamos las mejoras que han demostrado resultados.', items: ['Automatizaciones de marketing', 'Dashboard de resultados', 'Integraciones avanzadas', 'Plan estratégico año 2'] },
];

export default function Roadmap() {
  return (
    <section className="roadmap" id="roadmap">
      <div className="container">
        <Reveal>
          <div className="section-header">
            <span className="section-label">Roadmap</span>
            <h2 className="section-title">La evolución de tu web, trimestre a trimestre</h2>
            <p className="section-subtitle">Una visión clara de cómo tu web crece de forma progresiva.</p>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <div className="roadmap-grid">
            {quarters.map((q, i) => (
              <div className="roadmap-card" key={i}>
                <div className="roadmap-phase">{q.phase}</div>
                <h4>{q.title}</h4>
                <p>{q.desc}</p>
                <ul>
                  {q.items.map((item, j) => <li key={j}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
