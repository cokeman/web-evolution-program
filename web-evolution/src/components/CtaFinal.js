import Reveal from './Reveal';

const trustItems = ['Sin compromiso', 'Reunión de 30 min', 'Análisis personalizado', 'Plan de acción incluido'];

export default function CtaFinal() {
  return (
    <section className="cta-final" id="contacto">
      <div className="cta-orb cta-orb-1"></div>
      <div className="cta-orb cta-orb-2"></div>
      <div className="container" style={{ position: 'relative' }}>
        <Reveal>
          <span className="section-label" style={{ background: 'rgba(255,255,255,0.1)', color: '#93C5FD' }}>Da el primer paso</span>
          <h2 className="section-title">Tu web tiene potencial sin explotar.<br />Descúbrelo en una reunión de 30 minutos.</h2>
          <p>Sin compromiso. Analizamos tu situación actual y te decimos exactamente qué mejoraríamos y qué resultados puedes esperar.</p>
          <div className="cta-final-buttons">
            <a href="#contacto" className="btn btn-white btn-arrow btn-glow-white">Agendar reunión estratégica gratuita</a>
            <a href="#contacto" className="btn btn-glass-dark">Descargar caso de estudio</a>
          </div>
          <div className="cta-trust">
            {trustItems.map((item, i) => (
              <span key={i}>✓ {item}</span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
