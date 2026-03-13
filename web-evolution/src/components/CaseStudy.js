import Reveal from './Reveal';
import useTranslations from '../i18n';

const tagClasses = ['tag-cro', 'tag-seo', 'tag-ux', 'tag-performance', 'tag-content', 'tag-cro'];

export default function CaseStudy() {
  const t = useTranslations();

  return (
    <section className="case-study" id="resultados">
      <div className="container">
        <Reveal>
          <div className="section-header">
            <span className="section-label">{t.caseStudy.label}</span>
            <h2 className="section-title">{t.caseStudy.title}</h2>
            <p className="section-subtitle">{t.caseStudy.subtitle}</p>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <div className="case-results-row">
            {t.caseStudy.results.map((r, i) => (
              <div className="case-result" key={i}>
                <div className="case-result-value">{r.value}</div>
                <div className="case-result-label">{r.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={250}>
          <div className="examples-inline">
            <h3 className="examples-inline-title">{t.caseStudy.examplesTitle}</h3>
            <div className="examples-grid">
              {t.caseStudy.examples.map((e, i) => (
                <div className="example-card" key={i}>
                  <span className={`example-tag ${tagClasses[i]}`}>{e.tag}</span>
                  <h4>{e.title}</h4>
                  <p>{e.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
