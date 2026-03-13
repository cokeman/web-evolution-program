import useTranslations from '../i18n';

export default function Footer() {
  const t = useTranslations();

  return (
    <footer className="footer">
      <div className="container">
        <a href="/" className="nav-logo footer-brand">
          <img alt="Cocosolution" className="h-12 lazyloaded nav-logo-img" src="https://cocosolution.com/cms/uploads/logo_4.png"></img>
        </a>
        <p>{t.footer.desc}</p>
      </div>
    </footer>
  );
}
