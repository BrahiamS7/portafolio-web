import { useLanguage } from "../i18n/LanguageContext";

export default function Experience() {
  const { t } = useLanguage();
  const { experience } = t;

  return (
    <section id="experience" className="section">
      <div className="section__head">
        <h2>{experience.title}</h2>
        <span className="section__route">{experience.route}</span>
      </div>

      <div className="now-card">
        <span className="now-card__label">{experience.currentLabel}</span>
        <h3>{experience.currentTitle}</h3>
        <p>{experience.currentDescription}</p>
      </div>

      <h3 className="work__more-title">{experience.educationLabel}</h3>
      <ul className="timeline">
        {experience.education.map((item) => (
          <li className="timeline__item" key={item.title}>
            <div className="timeline__marker" />
            <div>
              <h4>{item.title}</h4>
              {item.period && <p className="timeline__period">{item.period}</p>}
              <p className="timeline__description">{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
