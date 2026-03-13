import Reveal from './Reveal';
import useTranslations from '../i18n';

export default function Benefits() {
  const t = useTranslations();

  return (
    <section className="benefits" id="beneficios">
      <div className="benefits-decoration"></div>
      <div className="container">
        <Reveal>
          <div className="section-header">
            <span className="section-label">{t.benefits.label}</span>
            <h2 className="section-title">{t.benefits.title}</h2>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <div className="benefits-grid">
            {t.benefits.items.map((b, i) => (
              <div className="benefit-card" key={i}>
                <div className="benefit-number">{b.num}</div>
                <h4>{b.title}</h4>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
