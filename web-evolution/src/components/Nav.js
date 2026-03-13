import { useState, useEffect } from 'react';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <div className="container">
        <a href="#hero" className="nav-logo">
          <span className="nav-logo-dots">
            <span></span><span></span><span></span>
          </span>
          Web <em>Evolution</em> Program
        </a>
        <a href="#contacto" className="nav-cta">Solicitar reunión</a>
      </div>
    </nav>
  );
}
