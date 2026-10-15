import { useEffect, useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";

export default function Navbar() {
  const { t, lang, toggleLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner">
        <a href="#top" className="navbar__brand">
          {t.meta.domain}
        </a>
        <button
          className="lang-toggle"
          onClick={toggleLang}
          aria-label="Switch language"
          title={lang === "es" ? "Switch to English" : "Cambiar a Español"}
        >
          {t.langToggle}
        </button>
      </div>
    </header>
  );
}
