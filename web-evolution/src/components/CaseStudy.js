import Reveal from './Reveal';

const timeline = [
  { month: 'Mes 1', title: 'Auditoría completa + Quick wins', desc: 'Optimización de velocidad, corrección de errores SEO críticos y mejora de CTAs principales.' },
  { month: 'Mes 2', title: 'Optimización de conversión', desc: 'Rediseño de formularios, implementación de social proof y mejora de páginas de servicio.' },
  { month: 'Mes 3', title: 'Estrategia de contenido SEO', desc: 'Creación de landing pages para servicios clave y optimización de metadatos.' },
  { month: 'Mes 4', title: 'Tests A/B en páginas clave', desc: 'Experimentación en homepage y páginas de servicio. Validación de hipótesis con datos reales.' },
  { month: 'Mes 5', title: 'Personalización y nurturing', desc: 'Implementación de contenido dinámico y flujos de email para leads capturados.' },
  { month: 'Mes 6', title: 'Escalado y automatización', desc: 'Dashboard de resultados, automatizaciones de seguimiento y planificación del siguiente trimestre.' },
];

const results = [
  { value: '+156%', label: 'Tráfico orgánico' },
  { value: '+312%', label: 'Leads mensuales' },
  { value: '-47%', label: 'Tasa de rebote' },
  { value: '1.9s', label: 'Tiempo de carga' },
];

export default function CaseStudy() {
  return (
    <section className="case-study" id="caso-de-uso">
      <div className="container">
        <Reveal>
          <div className="section-header">
            <span className="section-label">Caso real</span>
            <h2 className="section-title">Cómo evoluciona una web en 6 meses</h2>
            <p className="section-subtitle">Ejemplo de evolución con el plan Growth (10h/mes).</p>
          </div>
        </Reveal>
        <div className="case-grid">
          <Reveal direction="left">
            <div className="case-context">
              <h3>Contexto del proyecto</h3>
              <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-secondary)', marginBottom: 16 }}>Empresa B2B de servicios tecnológicos. Web corporativa en WordPress con 3 años de antigüedad. Recibía 2.000 visitas/mes y generaba 8 leads mensuales.</p>
              <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-secondary)' }}><strong style={{ color: 'var(--color-text)' }}>Objetivo:</strong> Aumentar la generación de leads sin rediseñar la web desde cero.</p>
            </div>
            <div className="case-results">
              {results.map((r, i) => (
                <div className="case-result" key={i}>
                  <div className="case-result-value">{r.value}</div>
                  <div className="case-result-label">{r.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal direction="right" delay={200}>
            <div className="case-timeline">
              {timeline.map((t, i) => (
                <div className="timeline-item" key={i}>
                  <div className="timeline-month">{t.month}</div>
                  <h4>{t.title}</h4>
                  <p>{t.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
