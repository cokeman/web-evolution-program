import Reveal from './Reveal';
import useTranslations from '../i18n';

export default function CtaFinal() {
  const t = useTranslations();

  return (
    <section className="cta-final" id="contacto">
      <div className="cta-orb cta-orb-1"></div>
      <div className="cta-orb cta-orb-2"></div>
      <div className="container" style={{ position: 'relative' }}>
        <Reveal>
          <span className="section-label" style={{ background: 'rgba(255,255,255,0.1)', color: '#93C5FD' }}>{t.ctaFinal.label}</span>
          <h2 className="section-title">{t.ctaFinal.title}<br />{t.ctaFinal.titleLine2}</h2>
          <p>{t.ctaFinal.desc}</p>
          <div className="cta-final-buttons">
            <a href="/contacto" className="btn btn-glass-dark">{t.ctaFinal.cta}</a>
          </div>
          <div className="cta-trust">
            {t.ctaFinal.trust.map((item, i) => (
              <span key={i}>✓ {item}</span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
