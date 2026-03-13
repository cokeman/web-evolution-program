import Reveal from './Reveal';
import useTranslations from '../i18n';

export default function Differentiators() {
  const t = useTranslations();

  return (
    <section className="diff" id="diferencia">
      <div className="container">
        <Reveal>
          <div className="section-header">
            <span className="section-label">{t.diff.label}</span>
            <h2 className="section-title">{t.diff.title}</h2>
            <p className="section-subtitle">{t.diff.subtitle}</p>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <div className="diff-grid">
            <div className="diff-card traditional">
              <h3><span style={{ fontSize: '1.5rem' }}>🔧</span> {t.diff.traditionalTitle}</h3>
              <ul className="diff-list">
                {t.diff.traditional.map((item, i) => (
                  <li key={i}><span>✕</span> {item}</li>
                ))}
              </ul>
            </div>
            <div className="diff-card evolution">
              <h3><span style={{ fontSize: '1.5rem' }}>🚀</span> {t.diff.evolutionTitle}</h3>
              <ul className="diff-list">
                {t.diff.evolution.map((item, i) => (
                  <li key={i}><span>✓</span> {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
