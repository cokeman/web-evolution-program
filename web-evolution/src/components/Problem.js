import Reveal from './Reveal';
import useTranslations from '../i18n';

const icons = [
  <svg className="icon-animated" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-pink)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>,
  <svg className="icon-animated" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-yellow)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>,
  <svg className="icon-animated" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-teal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>,
];

export default function Problem() {
  const t = useTranslations();

  return (
    <section className="problem" id="problema">
      <div className="container">
        <Reveal>
          <div className="section-header">
            <span className="section-label">{t.problem.label}</span>
            <h2 className="section-title">{t.problem.title}</h2>
            <p className="section-subtitle">{t.problem.subtitle}</p>
          </div>
        </Reveal>
        <div className="problem-grid">
          {t.problem.cards.map((p, i) => (
            <Reveal key={i} delay={i * 150}>
              <div className="problem-card glass-card-dark">
                <div className="problem-icon">{icons[i]}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={300}>
          <div className="consequences-inline">
            <h3>{t.problem.consequencesTitle}</h3>
            <div className="consequences-list">
              {t.problem.consequences.map((c, i) => (
                <div className="consequence-inline-item" key={i}>
                  <span className="consequence-inline-icon">{c.icon}</span>
                  <span>{c.text}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
