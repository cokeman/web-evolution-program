import { useState } from 'react';
import Reveal from './Reveal';
import useTranslations from '../i18n';

export default function FAQ() {
  const t = useTranslations();
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <Reveal>
          <div className="section-header">
            <span className="section-label">{t.faq.label}</span>
            <h2 className="section-title">{t.faq.title}</h2>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <div className="faq-list">
            {t.faq.items.map((faq, i) => (
              <div className={`faq-item${openIndex === i ? ' open' : ''}`} key={i}>
                <button className="faq-question" onClick={() => toggle(i)}>
                  {faq.q}
                </button>
                <div className="faq-answer" style={{ maxHeight: openIndex === i ? 200 : 0 }}>
                  <div className="faq-answer-inner">{faq.a}</div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
