import { useLanguage } from "../i18n/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  const { contact } = t;

  return (
    <section id="contact" className="section">
      <div className="section__head">
        <h2>{contact.title}</h2>
        <span className="section__route">{contact.route}</span>
      </div>
      <p className="contact__subtitle">{contact.subtitle}</p>

      <dl className="status-card status-card--contact">
        {contact.fields.map((field) => (
          <div className="status-card__row" key={field.label}>
            <dt>{field.label}</dt>
            <dd>
              <a href={field.href} target={field.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                {field.value}
              </a>
            </dd>
          </div>
        ))}
      </dl>

      <a className="btn btn--ghost btn--cv" href="/Brahiam_Soto_CV.docx" download>
        {contact.cvLabel}
      </a>
    </section>
  );
}
