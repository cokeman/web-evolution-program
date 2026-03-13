import Reveal from './Reveal';
import useTranslations from '../i18n';

const featureIcons = [
  <svg className="icon-animated" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>,
  <svg className="icon-animated" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>,
  <svg className="icon-animated" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>,
  <svg className="icon-animated-bounce" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>,
];

export default function Service() {
  const t = useTranslations();

  return (
    <section className="service" id="servicio">
      <div className="container">
        <div className="service-grid">
          <Reveal direction="left">
            <span className="section-label">{t.service.label}</span>
            <h2 className="section-title">{t.service.title}</h2>
            <p className="section-subtitle" style={{ marginBottom: 32 }}>{t.service.subtitle}</p>
            <a href="/contacto" className="btn btn-primary btn-arrow btn-glow">{t.service.cta}</a>
          </Reveal>
          <Reveal direction="right" delay={200}>
            <div className="service-features">
              {t.service.features.map((f, i) => (
                <div className="service-feature" key={i}>
                  <div className="service-feature-icon">{featureIcons[i]}</div>
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
            <h3 className="process-inline-title">{t.service.processTitle}</h3>
            <div className="process-steps">
              {t.service.steps.map((s, i) => (
                <div className="process-step" key={i}>
                  <div className="process-step-number">{i + 1}</div>
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
