import Reveal from './Reveal';
import useTranslations from '../i18n';

const icons = [
  // Agentes de atención al cliente — chat bubble con bot
  <svg className="icon-animated" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path><circle cx="12" cy="10" r="1"></circle><circle cx="8" cy="10" r="1"></circle><circle cx="16" cy="10" r="1"></circle></svg>,
  // Agentes internos — engranaje con persona
  <svg className="icon-animated" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>,
  // Bases de conocimiento — libro/database
  <svg className="icon-animated" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>,
  // Automatizaciones — workflow/zap
  <svg className="icon-animated" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polyline></svg>,
  // Desarrollo IA — código/brain
  <svg className="icon-animated" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline><line x1="14" y1="4" x2="10" y2="20"></line></svg>,
  // Consultoría — brújula/strategy
  <svg className="icon-animated" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>,
];

const iconColors = [
  'rgba(0, 229, 196, 0.2)',     // teal
  'rgba(124, 77, 255, 0.2)',    // purple
  'rgba(255, 59, 124, 0.2)',    // pink
  'rgba(255, 212, 71, 0.2)',    // yellow
  'rgba(255, 123, 71, 0.2)',    // orange
  'rgba(81, 86, 184, 0.2)',     // blue
];

export default function AIServices() {
  const t = useTranslations();

  return (
    <section className="ai-services" id="ia">
      <div className="container">
        <Reveal>
          <div className="section-header">
            <span className="section-label">{t.ai.label}</span>
            <h2 className="section-title">{t.ai.title}</h2>
            <p className="section-subtitle">{t.ai.subtitle}</p>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <div className="ai-grid">
            {t.ai.items.map((item, i) => (
              <div className="ai-card" key={i}>
                <div className="ai-card-icon" style={{ background: iconColors[i] }}>
                  {icons[i]}
                </div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={300}>
          <div className="ai-cta-wrapper">
            <a href="/contacto" className="btn btn-primary btn-arrow btn-glow">{t.ai.cta}</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
