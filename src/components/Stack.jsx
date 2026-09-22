import { useLanguage } from "../i18n/LanguageContext";

export default function Stack() {
  const { t } = useLanguage();
  const { stack } = t;

  return (
    <section id="stack" className="section">
      <div className="section__head">
        <h2>{stack.title}</h2>
        <span className="section__route">{stack.route}</span>
      </div>
      <div className="stack-table">
        {stack.groups.map((group) => (
          <div className="stack-table__row" key={group.label}>
            <span className="stack-table__label">{group.label}</span>
            <p className="stack-table__items">{group.items.join(", ")}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
