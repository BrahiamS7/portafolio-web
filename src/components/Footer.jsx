import { useLanguage } from "../i18n/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>
        © {year} Brahiam Soto. {t.footer.rights}
      </p>
      <p className="footer__built">{t.footer.builtWith}</p>
    </footer>
  );
}
