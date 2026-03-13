import Reveal from './Reveal';

const items = [
  { icon: '🎯', title: 'Consultoría estratégica', desc: 'Reuniones mensuales para alinear las mejoras web con los objetivos de negocio.' },
  { icon: '🔍', title: 'Auditoría técnica y UX', desc: 'Revisión continua de rendimiento, accesibilidad, SEO y experiencia de usuario.' },
  { icon: '📋', title: 'Plan de mejoras priorizado', desc: 'Backlog vivo de mejoras ordenadas por impacto y esfuerzo.' },
  { icon: '🛠️', title: 'Bolsa de horas de desarrollo', desc: 'Horas dedicadas a implementar las mejoras aprobadas cada mes.' },
  { icon: '📊', title: 'Analítica y tracking', desc: 'Configuración y seguimiento de eventos, conversiones y embudos.' },
  { icon: '📈', title: 'Reporting mensual', desc: 'Informe con métricas, mejoras realizadas, resultados y próximos pasos.' },
  { icon: '🧪', title: 'Tests A/B', desc: 'Experimentación controlada para validar cambios antes de implementarlos definitivamente.' },
  { icon: '🔒', title: 'Seguridad y actualizaciones', desc: 'Parches de seguridad, actualizaciones de CMS y monitorización de uptime.' },
];

export default function Includes() {
  return (
    <section className="includes" id="que-incluye">
      <div className="includes-decoration"></div>
      <div className="container">
        <Reveal>
          <div className="section-header">
            <span className="section-label">Incluido en el servicio</span>
            <h2 className="section-title">Todo lo que necesitas para que tu web crezca</h2>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <div className="includes-grid">
            {items.map((item, i) => (
              <div className="include-card" key={i}>
                <div className="include-icon">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
