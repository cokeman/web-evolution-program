import { useState, useEffect } from 'react';
import useTranslations from '../i18n';

export default function Nav() {
  const t = useTranslations();
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
          <img alt="Cocosolution" className="h-12 lazyloaded nav-logo-img" src="https://cocosolution.com/cms/uploads/logo_4.png"></img>
        </a>
        <a href="/contacto" className="nav-cta">{t.nav.cta}</a>
      </div>
    </nav>
  );
}
