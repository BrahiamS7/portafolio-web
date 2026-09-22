import { useLanguage } from "../i18n/LanguageContext";

export default function About() {
  const { t } = useLanguage();
  const { about } = t;

  return (
    <section id="about" className="section">
      <div className="section__head">
        <h2>{about.title}</h2>
        <span className="section__route">{about.route}</span>
      </div>
      <div className="about__content">
        {about.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </section>
  );
}
