import { useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";

function DeploymentCard({ project, t }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <article className="deploy-card">
      <div className="deploy-card__frame">
        <div className="deploy-card__bar">
          <span className="deploy-card__url">{project.domain}</span>
        </div>
        <div className="deploy-card__viewport">
          {!loaded && <div className="deploy-card__skeleton" aria-hidden="true" />}
          <iframe
            src={project.url}
            title={project.name}
            loading="lazy"
            onLoad={() => setLoaded(true)}
            tabIndex={-1}
          />
          <a
            className="deploy-card__overlay"
            href={project.url}
            target="_blank"
            rel="noreferrer"
            aria-label={`${t.work.openLive}: ${project.name}`}
          />
        </div>
      </div>

      <div className="deploy-card__meta">
        <div className="deploy-card__meta-head">
          <h3>{project.name}</h3>
          <p className="deploy-card__tagline">{project.tagline}</p>
        </div>
        <p className="deploy-card__description">{project.description}</p>
        <p className="deploy-card__stack">{project.stack.join(" / ")}</p>
        <div className="deploy-card__links">
          <a href={project.url} target="_blank" rel="noreferrer" className="btn btn--primary btn--sm">
            {t.work.openLive}
          </a>
          <a href={project.repoUrl} target="_blank" rel="noreferrer" className="btn btn--ghost btn--sm">
            {t.work.repo}
          </a>
        </div>
      </div>
    </article>
  );
}

function MoreRow({ project, t }) {
  return (
    <li className="more-row">
      <div className="more-row__text">
        <h4>{project.name}</h4>
        <p>{project.description}</p>
      </div>
      <div className="more-row__links">
        {project.demoUrl && (
          <a href={project.demoUrl} target="_blank" rel="noreferrer">
            demo
          </a>
        )}
        <a href={project.repoUrl} target="_blank" rel="noreferrer">
          {t.work.repo}
        </a>
      </div>
    </li>
  );
}

export default function Work() {
  const { t } = useLanguage();
  const { work } = t;

  return (
    <section id="work" className="section">
      <div className="section__head">
        <h2>{work.title}</h2>
        <span className="section__route">{work.route}</span>
      </div>

      <div className="work__deploys-head">
        <h3>{work.deploysTitle}</h3>
        <p>{work.deploysSubtitle}</p>
      </div>
      <div className="deploy-grid">
        {work.deployments.map((p) => (
          <DeploymentCard project={p} t={t} key={p.key} />
        ))}
      </div>

      <h3 className="work__more-title">{work.moreTitle}</h3>
      <ul className="more-list">
        {work.more.map((p) => (
          <MoreRow project={p} t={t} key={p.name} />
        ))}
      </ul>
    </section>
  );
}
