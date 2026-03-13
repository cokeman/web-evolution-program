import Reveal from './Reveal';

const steps = [
  { num: 1, title: 'Auditoría inicial', desc: 'Analizamos tu web actual: rendimiento, UX, SEO, conversión y competencia.' },
  { num: 2, title: 'Plan de mejoras', desc: 'Priorizamos las mejoras por impacto en negocio y te presentamos el plan mensual.' },
  { num: 3, title: 'Implementación', desc: 'Ejecutamos las mejoras aprobadas con tu bolsa de horas. Tú solo validas.' },
  { num: 4, title: 'Medición y reporte', desc: 'Medimos el impacto, documentamos los resultados y planificamos el siguiente ciclo.' },
];

export default function Process() {
  return (
    <section className="process-section" id="como-funciona">
      <div className="process-decoration"></div>
      <div className="container">
        <Reveal>
          <div className="section-header">
            <span className="section-label">Proceso</span>
            <h2 className="section-title">Cómo funciona el servicio</h2>
            <p className="section-subtitle">Un ciclo continuo de análisis, planificación, ejecución y medición.</p>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <div className="process-steps">
            {steps.map((s) => (
              <div className="process-step" key={s.num}>
                <div className="process-step-number">{s.num}</div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
