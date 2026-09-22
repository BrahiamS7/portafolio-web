import { useEffect, useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";

const SECTIONS = ["about", "stack", "work", "experience", "contact"];

export default function Navbar() {
  const { t, lang, toggleLang } = useLanguage();
  const [open, setOpen] = useState(false);
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

        <nav className={`navbar__links ${open ? "navbar__links--open" : ""}`}>
          {SECTIONS.map((key) => (
            <a key={key} href={`#${key}`} onClick={() => setOpen(false)}>
              {t.nav[key]}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <button
            className="lang-toggle"
            onClick={toggleLang}
            aria-label="Switch language"
            title={lang === "es" ? "Switch to English" : "Cambiar a Español"}
          >
            {t.langToggle}
          </button>
          <button
            className="navbar__burger"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
