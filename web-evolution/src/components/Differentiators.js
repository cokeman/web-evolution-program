import Reveal from './Reveal';

const traditional = [
  'Se limita a actualizar plugins y CMS',
  'Sin análisis de rendimiento ni conversión',
  'Reactivo: solo actúa cuando algo se rompe',
  'Sin estrategia ni visión de negocio',
  'Sin reporting ni medición de resultados',
  'La web se queda igual mes tras mes',
  'El valor decrece con el tiempo',
];

const evolution = [
  'Auditoría continua de UX, SEO y conversión',
  'Mejoras priorizadas por impacto en negocio',
  'Proactivo: detecta oportunidades cada mes',
  'Consultoría estratégica incluida',
  'Reporting con KPIs y métricas de negocio',
  'La web mejora visiblemente cada mes',
  'El valor se acumula con el tiempo',
];

export default function Differentiators() {
  return (
    <section className="diff" id="diferencia">
      <div className="container">
        <Reveal>
          <div className="section-header">
            <span className="section-label">La diferencia</span>
            <h2 className="section-title">Esto no es un mantenimiento web</h2>
            <p className="section-subtitle">Comparamos nuestro enfoque con lo que ofrecen la mayoría de agencias.</p>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <div className="diff-grid">
            <div className="diff-card traditional">
              <h3><span style={{ fontSize: '1.5rem' }}>🔧</span> Mantenimiento tradicional</h3>
              <ul className="diff-list">
                {traditional.map((t, i) => (
                  <li key={i}><span>✕</span> {t}</li>
                ))}
              </ul>
            </div>
            <div className="diff-card evolution">
              <h3><span style={{ fontSize: '1.5rem' }}>🚀</span> Web Evolution Program</h3>
              <ul className="diff-list">
                {evolution.map((e, i) => (
                  <li key={i}><span>✓</span> {e}</li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
