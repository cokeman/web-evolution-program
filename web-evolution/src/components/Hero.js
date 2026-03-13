import Reveal from './Reveal';
import useTranslations from '../i18n';

const metricStyles = [
  { width: 120, color: '#FF6B2C' },
  { width: 140, color: '#00BFA6' },
  { width: 100, color: '#E91E63' },
  { width: 110, color: '#7C4DFF' },
  { width: 90, color: '#2979FF' },
];

export default function Hero() {
  const t = useTranslations();

  return (
    <section className="hero" id="hero">
      <div className="hero-orb hero-orb-1"></div>
      <div className="hero-orb hero-orb-2"></div>
      <div className="hero-orb hero-orb-3"></div>
      <div className="container">
        <div className="hero-grid">
          <Reveal direction="left" className="hero-col-left">
            <a href="/" className="nav-logo">
              <span className="nav-logo-dots">
                <span></span><span></span><span></span>
              </span>
              <span dangerouslySetInnerHTML={{ __html: t.hero.brandName }} />
            </a>
            <br></br>
            <h1 className="mt-10" dangerouslySetInnerHTML={{ __html: t.hero.headline }} />
            <p className="hero-desc">{t.hero.desc}</p>
            <div className="hero-ctas">
              <a href="/contacto" className="btn btn-primary btn-arrow btn-glow">{t.hero.ctaPrimary}</a>
              <a href="#como-funciona" className="btn btn-glass">{t.hero.ctaSecondary}</a>
            </div>
            <div className="hero-proof">
              {t.hero.proof.map((item, i) => (
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
              {t.hero.metrics.map((m, i) => (
                <div className="hero-metric" key={i}>
                  <span className="hero-metric-label">{m.label}</span>
                  <div className="hero-metric-bar">
                    <div
                      className="hero-metric-fill animate-bar"
                      style={{
                        width: metricStyles[i].width,
                        background: metricStyles[i].color,
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
