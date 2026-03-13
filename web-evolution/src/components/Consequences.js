import Reveal from './Reveal';

const consequences = [
  { 
    icon: <svg className="icon-animated" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>, 
    title: 'Pierdes posiciones en Google', desc: 'Tu competencia publica, optimiza y escala contenido. Tú te quedas donde estabas — o peor, bajas.' 
  },
  { 
    icon: <svg className="icon-animated" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>, 
    title: 'Tu coste de adquisición sube', desc: 'Una web que no convierte te obliga a invertir más en publicidad para conseguir los mismos resultados.' 
  },
  { 
    icon: <svg className="icon-animated" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>, 
    title: 'Los visitantes se van sin contactar', desc: 'CTAs poco claros, formularios escondidos o páginas lentas hacen que los usuarios abandonen antes de convertir.' 
  },
  { 
    icon: <svg className="icon-animated" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>, 
    title: 'Acumulas deuda técnica', desc: 'Cuanto más tiempo sin mejoras, más costoso será el rediseño completo que terminarás necesitando.' 
  },
  { 
    icon: <svg className="icon-animated" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 6h.01"></path><path d="M16 6h.01"></path><path d="M12 6h.01"></path><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path></svg>, 
    title: 'Tu imagen de marca se degrada', desc: 'Una web desactualizada transmite que tu empresa no innova. La primera impresión digital importa.' 
  },
];

const bars = [
  { height: 180, color: 'var(--color-accent)', label: 'Lanzamiento' },
  { height: 150, color: '#60A5FA', label: 'Mes 3' },
  { height: 110, color: '#93C5FD', label: 'Mes 6' },
  { height: 80, color: '#BFDBFE', label: 'Mes 9' },
  { height: 50, color: '#DBEAFE', label: 'Mes 12' },
];

export default function Consequences() {
  return (
    <section className="consequences" id="consecuencias">
      <div className="container">
        <Reveal>
          <div className="section-header">
            <span className="section-label">Consecuencias</span>
            <h2 className="section-title">Lo que cuesta no optimizar tu web</h2>
            <p className="section-subtitle">Cada mes sin mejoras es un mes de oportunidades perdidas.</p>
          </div>
        </Reveal>
        <div className="consequences-grid">
          <Reveal direction="left">
            <div className="consequence-list">
              {consequences.map((c, i) => (
                <div className="consequence-item" key={i}>
                  <div className="consequence-marker">{c.icon}</div>
                  <div>
                    <h4>{c.title}</h4>
                    <p>{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal direction="right" delay={200}>
            <div className="consequence-visual">
              <h3 style={{ marginBottom: 24, fontSize: '1rem', color: 'var(--color-primary)' }}>Rendimiento web sin optimización continua</h3>
              <div className="consequence-chart">
                {bars.map((b, i) => (
                  <div key={i} className="consequence-bar" style={{ height: b.height, background: b.color }}>
                    <span className="consequence-bar-label">{b.label}</span>
                  </div>
                ))}
              </div>
              <p style={{ marginTop: 32, fontSize: '0.8125rem', color: 'var(--color-text-secondary)' }}>El rendimiento cae progresivamente sin mejoras activas</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
