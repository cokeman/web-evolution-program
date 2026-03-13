import React, { useState, useRef, useEffect } from 'react';
import Reveal from './Reveal';

const weeks = [
  { 
    icon: <svg className="icon-animated" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-teal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>, 
    week: 'Semana 1', title: 'Análisis y auditoría', desc: 'Revisamos métricas, analítica, heatmaps y comportamiento de usuarios del mes anterior.' 
  },
  { 
    icon: <svg className="icon-animated" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-yellow)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>, 
    week: 'Semana 2', title: 'Plan de acción', desc: 'Presentamos el plan de mejoras priorizado y alineamos contigo las acciones del mes.' 
  },
  { 
    icon: <svg className="icon-animated-spin" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-pink)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>, 
    week: 'Semana 3', title: 'Implementación', desc: 'Ejecutamos las mejoras aprobadas: diseño, desarrollo, contenido, SEO.' 
  },
  { 
    icon: <svg className="icon-animated-bounce" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>, 
    week: 'Semana 4', title: 'Medición y reporte', desc: 'Medimos el impacto, documentamos resultados y planificamos el siguiente ciclo.' 
  },
];

export default function MonthlyProcess() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, children } = scrollRef.current;
    if (children.length > 0) {
      // Calculate active card based on scroll position
      const cardWidth = children[0].offsetWidth;
      // add gap (16px) to width for calculation
      const index = Math.round(scrollLeft / (cardWidth + 16));
      setActiveIndex(index);
    }
  };

  const scrollTo = (index) => {
    if (!scrollRef.current || scrollRef.current.children.length === 0) return;
    const cardWidth = scrollRef.current.children[0].offsetWidth;
    scrollRef.current.scrollTo({
      left: index * (cardWidth + 16),
      behavior: 'smooth'
    });
    setActiveIndex(index);
  };

  return (
    <section className="monthly-section" id="proceso-mensual">
      <div className="container">
        <Reveal>
          <div className="section-header">
            <span className="section-label">Ciclo mensual</span>
            <h2 className="section-title">Tu web mejora cada semana</h2>
            <p className="section-subtitle">Así es un mes tipo dentro del programa.</p>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <div className="monthly-slider-wrapper">
            <div className="monthly-grid" ref={scrollRef} onScroll={handleScroll}>
              {weeks.map((w, i) => (
                <div className="monthly-card" key={i}>
                  <div className="monthly-icon">{w.icon}</div>
                  <div className="monthly-week">{w.week}</div>
                  <h4>{w.title}</h4>
                  <p>{w.desc}</p>
                </div>
              ))}
            </div>
            <div className="monthly-dots">
              {weeks.map((_, i) => (
                <button
                  key={i}
                  className={`monthly-dot ${i === activeIndex ? 'active' : ''}`}
                  onClick={() => scrollTo(i)}
                  aria-label={`Ver semana ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
