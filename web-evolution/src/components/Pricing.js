import Reveal from './Reveal';

const plans = [
  {
    name: 'Start', hours: '4h',
    desc: 'Mantenimiento y pequeñas mejoras para webs que necesitan una evolución básica.',
    featured: false,
    features: ['Auditoría mensual básica', 'Plan de mejoras priorizado', '4 horas de implementación', 'Reporting mensual', 'Soporte por email'],
  },
  {
    name: 'Growth', hours: '10h',
    desc: 'Optimización continua para webs que quieren crecer activamente en conversión y tráfico.',
    featured: true,
    features: ['Auditoría técnica + UX mensual', 'Consultoría estratégica mensual', '10 horas de implementación', 'Tests A/B incluidos', 'Reporting avanzado con KPIs', 'Reunión mensual de seguimiento', 'Soporte prioritario'],
  },
  {
    name: 'Scale', hours: '20h',
    desc: 'Evolución activa y desarrollo continuo para webs con ambición de crecimiento acelerado.',
    featured: false,
    features: ['Auditoría completa continua', 'Consultoría estratégica bisemanal', '20 horas de implementación', 'Tests A/B + personalización', 'Reporting avanzado + dashboard', 'Reunión bisemanal de seguimiento', 'Account manager dedicado', 'Soporte prioritario + emergencias'],
  },
];

export default function Pricing() {
  return (
    <section className="pricing" id="planes">
      <div className="pricing-decoration"></div>
      <div className="container">
        <Reveal>
          <div className="section-header">
            <span className="section-label">Planes</span>
            <h2 className="section-title">Elige el nivel de evolución que necesitas</h2>
            <p className="section-subtitle">Todos los planes incluyen consultoría estratégica + implementación técnica.</p>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <div className="pricing-grid">
            {plans.map((plan, i) => (
              <div className={`pricing-card${plan.featured ? ' featured' : ''}`} key={i}>
                {plan.featured && <div className="pricing-badge">Más popular</div>}
                <div className="pricing-name">{plan.name}</div>
                <div className="pricing-hours">{plan.hours} <span>/ mes</span></div>
                <p className="pricing-desc">{plan.desc}</p>
                <ul className="pricing-features">
                  {plan.features.map((f, j) => <li key={j}>{f}</li>)}
                </ul>
                <a href="#contacto" className={`btn ${plan.featured ? 'btn-primary btn-arrow btn-glow' : 'btn-glass'}`}>
                  {plan.featured ? 'Solicitar reunión' : 'Solicitar información'}
                </a>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
