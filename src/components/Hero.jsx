import { useLanguage } from "../i18n/LanguageContext";

export default function Hero() {
  const { hero } = useLanguage().t;

  return (
    <section id="top" className="hero">
      <h1 className="hero__name">{hero.name}</h1>
      <p className="hero__headline">{hero.headline}</p>
    </section>
  );
}
