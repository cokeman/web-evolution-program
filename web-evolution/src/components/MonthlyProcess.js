import Reveal from './Reveal';

const weeks = [
  { icon: '🔍', week: 'Semana 1', title: 'Análisis y auditoría', desc: 'Revisamos métricas, analítica, heatmaps y comportamiento de usuarios del mes anterior.' },
  { icon: '📋', week: 'Semana 2', title: 'Plan de acción', desc: 'Presentamos el plan de mejoras priorizado y alineamos contigo las acciones del mes.' },
  { icon: '⚡', week: 'Semana 3', title: 'Implementación', desc: 'Ejecutamos las mejoras aprobadas: diseño, desarrollo, contenido, SEO.' },
  { icon: '📊', week: 'Semana 4', title: 'Medición y reporte', desc: 'Medimos el impacto, documentamos resultados y planificamos el siguiente ciclo.' },
];

export default function MonthlyProcess() {
  return (
    <section className="monthly-section" id="proceso-mensual">
      <div className="container">
        <Reveal>
          <div className="section-header">
            <span className="section-label">Ciclo mensual</span>
            <h2 className="section-title">Tu web mejora cada semana</h2>
            <p className="section-subtitle">Así es un mes tipo dentro del programa.</p>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <div className="monthly-grid">
            {weeks.map((w, i) => (
              <div className="monthly-card" key={i}>
                <div className="monthly-icon">{w.icon}</div>
                <div className="monthly-week">{w.week}</div>
                <h4>{w.title}</h4>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
