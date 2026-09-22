import { useLanguage } from "../i18n/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  const { hero } = t;

  return (
    <section id="top" className="hero">
      <div className="hero__text">
        <h1 className="hero__name">{hero.name}</h1>
        <p className="hero__headline">{hero.headline}</p>
        <p className="hero__sub">{hero.sub}</p>
        <div className="hero__cta">
          <a href="#work" className="btn btn--primary">
            {hero.ctaPrimary}
          </a>
          <a href="#contact" className="btn btn--ghost">
            {hero.ctaSecondary}
          </a>
        </div>
      </div>

      <dl className="status-card" aria-label="status">
        {hero.status.map((row, i) => (
          <div className="status-card__row" style={{ "--i": i }} key={row.label}>
            <dt>{row.label}</dt>
            <dd>{row.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
