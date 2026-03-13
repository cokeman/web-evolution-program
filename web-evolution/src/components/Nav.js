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
        <a href="/" className="nav-logo">
          <img alt="Cocosolution" class="h-12 lazyloaded" src="https://cocosolution.com/cms/uploads/logo_4.png" class="nav-logo-img"></img>
        </a>
        <a href="/contacto" className="nav-cta">Solicitar reunión</a>
      </div>
    </nav>
  );
}
