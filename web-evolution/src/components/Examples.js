import Reveal from './Reveal';

const examples = [
  { tag: 'CRO', tagClass: 'tag-cro', title: 'Rediseño de formularios de contacto', desc: 'Simplificar campos, mejorar el copy y añadir microcopy para aumentar la tasa de envío.' },
  { tag: 'SEO', tagClass: 'tag-seo', title: 'Optimización de páginas de servicio', desc: 'Mejorar títulos, meta descriptions, estructura de encabezados y enlazado interno.' },
  { tag: 'UX', tagClass: 'tag-ux', title: 'Reestructuración de la navegación', desc: 'Simplificar menús y crear rutas claras hacia las páginas que más convierten.' },
  { tag: 'Rendimiento', tagClass: 'tag-performance', title: 'Optimización de velocidad de carga', desc: 'Compresión de imágenes, lazy loading, caché y optimización de código.' },
  { tag: 'Contenido', tagClass: 'tag-content', title: 'Creación de landing pages específicas', desc: 'Páginas dedicadas a servicios o campañas con copy persuasivo y CTAs optimizados.' },
  { tag: 'CRO', tagClass: 'tag-cro', title: 'Implementación de social proof', desc: 'Testimonios, casos de éxito, logos de clientes y badges de confianza en puntos clave.' },
  { tag: 'UX', tagClass: 'tag-ux', title: 'Mejora de la versión móvil', desc: 'Adaptar la experiencia mobile para los flujos de conversión más importantes.' },
  { tag: 'SEO', tagClass: 'tag-seo', title: 'Implementación de datos estructurados', desc: 'Schema markup para mejorar la visibilidad en resultados de búsqueda con rich snippets.' },
];

export default function Examples() {
  return (
    <section className="examples-section" id="ejemplos">
      <div className="container">
        <Reveal>
          <div className="section-header">
            <span className="section-label">Ejemplos reales</span>
            <h2 className="section-title">Mejoras que realizamos cada mes</h2>
            <p className="section-subtitle">Cada web es diferente, pero estas son algunas de las mejoras más habituales.</p>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <div className="examples-grid">
            {examples.map((e, i) => (
              <div className="example-card" key={i}>
                <span className={`example-tag ${e.tagClass}`}>{e.tag}</span>
                <h4>{e.title}</h4>
                <p>{e.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
