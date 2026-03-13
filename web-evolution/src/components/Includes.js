import Reveal from './Reveal';

const items = [
  { 
    icon: <svg className="icon-animated" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>, 
    title: 'Consultoría estratégica', desc: 'Reuniones mensuales para alinear las mejoras web con los objetivos de negocio.' 
  },
  { 
    icon: <svg className="icon-animated" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>, 
    title: 'Auditoría técnica y UX', desc: 'Revisión continua de rendimiento, accesibilidad, SEO y experiencia de usuario.' 
  },
  { 
    icon: <svg className="icon-animated-bounce" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>, 
    title: 'Plan de mejoras priorizado', desc: 'Backlog vivo de mejoras ordenadas por impacto y esfuerzo.' 
  },
  { 
    icon: <svg className="icon-animated-spin" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>, 
    title: 'Bolsa de horas de desarrollo', desc: 'Horas dedicadas a implementar las mejoras aprobadas cada mes.' 
  },
  { 
    icon: <svg className="icon-animated" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>, 
    title: 'Analítica y tracking', desc: 'Configuración y seguimiento de eventos, conversiones y embudos.' 
  },
  { 
    icon: <svg className="icon-animated-bounce" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>, 
    title: 'Reporting mensual', desc: 'Informe con métricas, mejoras realizadas, resultados y próximos pasos.' 
  },
  { 
    icon: <svg className="icon-animated" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 2v7.31"></path><path d="M14 9.3V1.99"></path><path d="M8.5 2h7"></path><path d="M14 9.3a6.5 6.5 0 1 1-4 0"></path><line x1="5.52" y1="16" x2="18.48" y2="16"></line></svg>, 
    title: 'Tests A/B', desc: 'Experimentación controlada para validar cambios antes de implementarlos definitivamente.' 
  },
  { 
    icon: <svg className="icon-animated" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>, 
    title: 'Seguridad y actualizaciones', desc: 'Parches de seguridad, actualizaciones de CMS y monitorización de uptime.' 
  },
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
