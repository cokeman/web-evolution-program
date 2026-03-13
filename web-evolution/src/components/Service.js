import Reveal from './Reveal';

const features = [
  { icon: '🔍', title: 'Auditoría permanente', desc: 'Analizamos métricas, comportamiento de usuarios y rendimiento técnico de forma continua.' },
  { icon: '💡', title: 'Propuestas de mejora priorizadas', desc: 'Cada mes recibes un plan de acción con las mejoras de mayor impacto para tu negocio.' },
  { icon: '⚡', title: 'Implementación incluida', desc: 'No solo recomendamos. Ejecutamos las mejoras con tu bolsa de horas mensual.' },
  { icon: '📈', title: 'Reporting de resultados', desc: 'Informe mensual con lo realizado, los resultados y los próximos pasos.' },
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
            <a href="#contacto" className="btn btn-primary btn-arrow btn-glow">Quiero saber más</a>
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
      </div>
    </section>
  );
}
