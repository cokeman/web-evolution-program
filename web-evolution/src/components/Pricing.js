import { useRef, useEffect } from 'react';
import Reveal from './Reveal';
import useTranslations from '../i18n';

/* ─── Antigravity FLOW — exact replica of codepen.io/plasm/pen/XMeZXV ─── */

function AntigravityCanvas() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let isPaused = false;
    let particles = [];
    let spawnInterval;

    const onBlur = () => { isPaused = true; };
    const onFocus = () => { isPaused = false; };
    window.addEventListener('blur', onBlur);
    window.addEventListener('focus', onFocus);

    // Exact SVGs from the original pen
    const svgs = [
      // point — gray #8491A3
      '<svg viewBox="0 0 12 12" style="display:block;width:30px;height:30px;position:absolute;"><path fill="#8491A3" d="M6,7.5L6,7.5C5.1,7.5,4.5,6.9,4.5,6v0c0-0.9,0.7-1.5,1.5-1.5h0c0.9,0,1.5,0.7,1.5,1.5v0C7.5,6.9,6.9,7.5,6,7.5z"/></svg>',
      // rhombus — green #2DA94F
      '<svg viewBox="0 0 13 14" style="display:block;width:30px;height:30px;position:absolute;"><path fill="#2DA94F" stroke="#2DA94F" d="M5.9,1.2L0.7,6.5C0.5,6.7,0.5,7,0.7,7.2l5.2,5.4c0.2,0.2,0.5,0.2,0.7,0l5.2-5.4C12,7,12,6.7,11.8,6.5L6.6,1.2C6.4,0.9,6.1,0.9,5.9,1.2L5.9,1.2z M3.4,6.5L6,3.9c0.2-0.2,0.5-0.2,0.7,0l2.6,2.6c0.2,0.2,0.2,0.5,0,0.7L6.6,9.9c-0.2,0.2-0.5,0.2-0.7,0L3.4,7.3C3.2,7.1,3.2,6.8,3.4,6.5L3.4,6.5z"/></svg>',
      // pentahedron — blue #3E82F7
      '<svg viewBox="0 0 561.8 559.4" style="display:block;width:30px;height:30px;position:absolute;"><path fill="#3E82F7" d="M383.4,559.4h-204l-2.6-0.2c-51.3-4.4-94-37-108.8-83l-0.2-0.6L6,276.7l-0.2-0.5c-14.5-50,3.1-102.7,43.7-131.4L212.1,23C252.4-7.9,310.7-7.9,351,23l163.5,122.5l0.4,0.3c39,30.3,56,82.6,42.2,130.3l-0.3,1.1l-61.5,198C480.4,525.6,435.5,559.4,383.4,559.4z M185.5,439.4h195.2l61.1-196.8c0-0.5-0.3-1.6-0.7-2.1L281.5,120.9L120.9,241.2c0,0.3,0.1,0.7,0.2,1.2l60.8,195.8C182.5,438.5,183.7,439.1,185.5,439.4z"/></svg>',
      // circle — red #ED412D
      '<svg viewBox="0 0 13 12" style="display:block;width:30px;height:30px;position:absolute;"><path fill="#ED412D" d="M6.5,0.1C3.4,0.1,0.8,2.8,0.8,6s2.6,5.9,5.7,5.9s5.7-2.7,5.7-5.9S9.7,0.1,6.5,0.1L6.5,0.1z M6.5,8.8C5,8.8,3.8,7.6,3.8,6S5,3.2,6.5,3.2S9.2,4.4,9.2,6S8,8.8,6.5,8.8L6.5,8.8z"/></svg>',
      // x — yellow #FDBD00
      '<svg viewBox="0 0 12 12" style="display:block;width:30px;height:30px;position:absolute;"><path fill="#FDBD00" d="M10.3,4.3H7.7V1.7C7.7,0.8,7,0,6,0S4.3,0.8,4.3,1.7v2.5H1.7C0.8,4.3,0,5,0,6s0.8,1.7,1.7,1.7h2.5v2.5C4.3,11.2,5,12,6,12s1.7-0.8,1.7-1.7V7.7h2.5C11.2,7.7,12,7,12,6S11.2,4.3,10.3,4.3z"/></svg>',
    ];

    class Particle {
      constructor(svgStr) {
        const rect = container.getBoundingClientRect();
        this.containerH = rect.height;
        this.containerW = rect.width;
        this.steps = this.containerH / 2;
        this.friction = 1 + Math.random() * 3;
        this.startX = Math.random() * this.containerW;
        this.position = this.containerH;
        this.rotation = Math.random() > 0.5 ? '-' : '+';
        this.scale = 0.5 + Math.random();
        this.siner = 200 * Math.random();

        // Create DOM element
        const wrapper = document.createElement('div');
        wrapper.innerHTML = svgStr;
        this.el = wrapper.firstChild;
        this.el.style.transformOrigin = 'center center';
        container.appendChild(this.el);
      }

      destroy() {
        if (this.el && this.el.parentNode) {
          this.el.parentNode.removeChild(this.el);
        }
      }

      move() {
        this.position -= this.friction;
        const top = this.position;
        const left = this.startX + Math.sin(this.position * Math.PI / this.steps) * this.siner;
        const rot = this.rotation === '-' ? -(this.position + 30) : (this.position + 30);

        this.el.style.transform =
          'translateX(' + left + 'px) translateY(' + top + 'px) scale(' + this.scale + ') rotate(' + rot + 'deg)';

        if (this.position < -30) {
          this.destroy();
          return false;
        }
        return true;
      }
    }

    // Spawn every 200ms like the original
    spawnInterval = setInterval(() => {
      if (!isPaused) {
        const svg = svgs[Math.floor(Math.random() * svgs.length)];
        particles.push(new Particle(svg));
      }
    }, 200);

    let animId;
    function update() {
      particles = particles.filter(p => p.move());
      animId = requestAnimationFrame(update);
    }
    animId = requestAnimationFrame(update);

    return () => {
      clearInterval(spawnInterval);
      cancelAnimationFrame(animId);
      window.removeEventListener('blur', onBlur);
      window.removeEventListener('focus', onFocus);
      particles.forEach(p => p.destroy());
      particles = [];
    };
  }, []);

  return <div ref={containerRef} className="pricing-particles" />;
}

/* ─── Cell helper ─── */

function Cell({ value, isCheck, isCross }) {
  if (isCross) return <td><span className="cross">—</span></td>;
  if (isCheck) return <td><span className="check">{value}</span></td>;
  return <td>{value}</td>;
}

export default function Pricing() {
  const t = useTranslations();

  return (
    <section className="pricing" id="planes">
      <AntigravityCanvas />
      <div className="container">
        <Reveal>
          <div className="section-header">
            <span className="section-label">{t.pricing.label}</span>
            <h2 className="section-title">{t.pricing.title}</h2>
            <p className="section-subtitle">{t.pricing.subtitle}</p>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <div className="pricing-grid">
            {t.pricing.plans.map((plan, i) => {
              const featured = i === 1;
              return (
                <div className={`pricing-card${featured ? ' featured' : ''}`} key={i}>
                  {featured && <div className="pricing-badge">{t.pricing.badge}</div>}
                  <div className="pricing-name">{plan.name}</div>
                  <div className="pricing-hours">{plan.hours} <span>{t.pricing.perMonth}</span></div>
                  <p className="pricing-desc">{plan.desc}</p>
                  <ul className="pricing-features">
                    {plan.features.map((f, j) => <li key={j}>{f}</li>)}
                  </ul>
                  <a href="/contacto" className={`btn ${featured ? 'btn-primary btn-arrow btn-glow' : 'btn-glass'}`}>
                    {featured ? t.pricing.ctaFeatured : t.pricing.ctaDefault}
                  </a>
                </div>
              );
            })}
          </div>
        </Reveal>
        <Reveal delay={250}>
          <div className="comparison-inline">
            <h3 className="comparison-inline-title">{t.pricing.comparisonTitle}</h3>
            <div className="comparison-wrapper">
              <table className="comparison-table glass-table">
                <thead>
                  <tr>
                    {t.pricing.tableHeaders.map((h, i) => <th key={i}>{h}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {t.pricing.rows.map((r, i) => (
                    <tr key={i}>
                      <td>{r.feature}</td>
                      <Cell value={r.start} isCheck={r.startCheck} isCross={r.startCross} />
                      <Cell value={r.growth} isCheck={r.growthCheck} isCross={r.growthCross} />
                      <Cell value={r.scale} isCheck={r.scaleCheck} isCross={r.scaleCross} />
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
