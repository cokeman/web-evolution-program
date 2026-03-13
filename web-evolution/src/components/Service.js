import Reveal from './Reveal';

const features = [
  {
    icon: <svg className="icon-animated" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>,
    title: 'Auditoría permanente', desc: 'Analizamos métricas, comportamiento de usuarios y rendimiento técnico de forma continua.'
  },
  {
    icon: <svg className="icon-animated" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>,
    title: 'Propuestas de mejora priorizadas', desc: 'Cada mes recibes un plan de acción con las mejoras de mayor impacto para tu negocio.'
  },
  {
    icon: <svg className="icon-animated" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>,
    title: 'Implementación incluida', desc: 'No solo recomendamos. Ejecutamos las mejoras con tu bolsa de horas mensual.'
  },
  {
    icon: <svg className="icon-animated-bounce" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>,
    title: 'Reporting de resultados', desc: 'Informe mensual con lo realizado, los resultados y los próximos pasos.'
  },
];

const steps = [
  { num: 1, title: 'Auditoría inicial', desc: 'Analizamos tu web actual: rendimiento, UX, SEO, conversión y competencia.' },
  { num: 2, title: 'Plan de mejoras', desc: 'Priorizamos las mejoras por impacto en negocio y te presentamos el plan mensual.' },
  { num: 3, title: 'Implementación', desc: 'Ejecutamos las mejoras aprobadas con tu bolsa de horas. Tú solo validas.' },
  { num: 4, title: 'Medición y reporte', desc: 'Medimos el impacto, documentamos resultados y planificamos el siguiente ciclo.' },
];

export default function Service() {
  return (
    <section className="service" id="servicio">
      <div className="container">
        <div className="service-grid">
          <Reveal direction="left">
            <span className="section-label">La solución</span>
            <h2 className="section-title">Un equipo que mejora tu web cada mes, de forma estratégica</h2>
            <p className="section-subtitle" style={{ marginBottom: 32 }}>Web Evolution Program no es un mantenimiento. Es un servicio de mejora continua donde combinamos visión estratégica con ejecución técnica para que tu web evolucione mes a mes.</p>
            <a href="/contacto" className="btn btn-primary btn-arrow btn-glow">Quiero saber más</a>
          </Reveal>
          <Reveal direction="right" delay={200}>
            <div className="service-features">
              {features.map((f, i) => (
                <div className="service-feature" key={i}>
                  <div className="service-feature-icon">{f.icon}</div>
                  <div>
                    <h4>{f.title}</h4>
                    <p>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
        <Reveal delay={150}>
          <div className="process-inline" id="como-funciona">
            <h3 className="process-inline-title">Cómo funciona</h3>
            <div className="process-steps">
              {steps.map((s) => (
                <div className="process-step" key={s.num}>
                  <div className="process-step-number">{s.num}</div>
                  <h4>{s.title}</h4>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
