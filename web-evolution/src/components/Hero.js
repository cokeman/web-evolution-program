import Reveal from './Reveal';

const metrics = [
  { label: 'Tasa de conversión', width: 120, color: null, value: '+42%' },
  { label: 'Velocidad de carga', width: 140, color: '#059669', value: '1.8s' },
  { label: 'Tráfico orgánico', width: 100, color: null, value: '+67%' },
  { label: 'Leads mensuales', width: 110, color: '#8B5CF6', value: '+89%' },
  { label: 'Páginas / sesión', width: 90, color: '#059669', value: '3.4' },
];

const proofItems = [
  { number: '+120', label: 'webs optimizadas' },
  { number: '+38%', label: 'conversión media' },
  { number: '96%', label: 'renovaciones' },
];

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-orb hero-orb-1"></div>
      <div className="hero-orb hero-orb-2"></div>
      <div className="hero-orb hero-orb-3"></div>
      <div className="container">
        <div className="hero-grid">
          <Reveal direction="left" className="hero-col-left">
            <div className="hero-badge">Servicio de mejora continua</div>
            <h1>Tu web no debería quedarse quieta mientras <span>tu mercado avanza</span></h1>
            <p className="hero-desc">Consultoría + implementación continua para mejorar el rendimiento de tu web. Analizamos, proponemos y ejecutamos mejoras cada mes para que tu web genere más negocio.</p>
            <div className="hero-ctas">
              <a href="#contacto" className="btn btn-primary btn-arrow btn-glow">Agendar reunión estratégica</a>
              <a href="#como-funciona" className="btn btn-glass">Ver cómo funciona</a>
            </div>
            <div className="hero-proof">
              {proofItems.map((item, i) => (
                <div className="hero-proof-item" key={i}>
                  <div className="hero-proof-number">{item.number}</div>
                  <div className="hero-proof-label">{item.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal direction="right" delay={200} className="hero-col-right">
            <div className="hero-visual glass-card">
              <div className="hero-visual-header">
                <div className="hero-visual-dot"></div>
                <div className="hero-visual-dot"></div>
                <div className="hero-visual-dot"></div>
              </div>
              {metrics.map((m, i) => (
                <div className="hero-metric" key={i}>
                  <span className="hero-metric-label">{m.label}</span>
                  <div className="hero-metric-bar">
                    <div
                      className="hero-metric-fill animate-bar"
                      style={{
                        width: m.width,
                        ...(m.color && { background: m.color }),
                        animationDelay: `${i * 150 + 600}ms`,
                      }}
                    ></div>
                    <span className="hero-metric-value metric-up">{m.value}</span>
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
