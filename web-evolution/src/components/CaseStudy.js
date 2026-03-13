import Reveal from './Reveal';

const results = [
  { value: '+156%', label: 'Tráfico orgánico' },
  { value: '+312%', label: 'Leads mensuales' },
  { value: '-47%', label: 'Tasa de rebote' },
  { value: '1.9s', label: 'Tiempo de carga' },
];

const examples = [
  { tag: 'CRO', tagClass: 'tag-cro', title: 'Rediseño de formularios de contacto', desc: 'Simplificar campos, mejorar el copy y añadir microcopy para aumentar la tasa de envío.' },
  { tag: 'SEO', tagClass: 'tag-seo', title: 'Optimización de páginas de servicio', desc: 'Mejorar títulos, meta descriptions, estructura de encabezados y enlazado interno.' },
  { tag: 'UX', tagClass: 'tag-ux', title: 'Reestructuración de la navegación', desc: 'Simplificar menús y crear rutas claras hacia las páginas que más convierten.' },
  { tag: 'Rendimiento', tagClass: 'tag-performance', title: 'Optimización de velocidad de carga', desc: 'Compresión de imágenes, lazy loading, caché y optimización de código.' },
  { tag: 'Contenido', tagClass: 'tag-content', title: 'Creación de landing pages específicas', desc: 'Páginas dedicadas a servicios o campañas con copy persuasivo y CTAs optimizados.' },
  { tag: 'CRO', tagClass: 'tag-cro', title: 'Implementación de social proof', desc: 'Testimonios, casos de éxito, logos de clientes y badges de confianza en puntos clave.' },
];

export default function CaseStudy() {
  return (
    <section className="case-study" id="resultados">
      <div className="container">
        <Reveal>
          <div className="section-header">
            <span className="section-label">Resultados reales</span>
            <h2 className="section-title">Cómo evoluciona una web en 6 meses</h2>
            <p className="section-subtitle">Ejemplo real con el plan Growth (10h/mes): empresa B2B de servicios tecnológicos con web WordPress de 3 años.</p>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <div className="case-results-row">
            {results.map((r, i) => (
              <div className="case-result" key={i}>
                <div className="case-result-value">{r.value}</div>
                <div className="case-result-label">{r.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={250}>
          <div className="examples-inline">
            <h3 className="examples-inline-title">Ejemplos de mejoras que realizamos cada mes</h3>
            <div className="examples-grid">
              {examples.map((e, i) => (
                <div className="example-card" key={i}>
                  <span className={`example-tag ${e.tagClass}`}>{e.tag}</span>
                  <h4>{e.title}</h4>
                  <p>{e.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
