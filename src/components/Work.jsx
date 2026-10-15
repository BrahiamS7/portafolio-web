import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";

// Tamaño de celular con el que se renderiza el iframe; se escala para caber en la tarjeta (aspect-ratio 3/4 en CSS).
const PREVIEW_W = 420;
const PREVIEW_H = 560;

function DeploymentCard({ project, t }) {
  const [loaded, setLoaded] = useState(false);
  const viewport = useRef(null);

  useEffect(() => {
    const el = viewport.current;
    const ro = new ResizeObserver(([e]) => el.style.setProperty("--scale", e.contentRect.width / PREVIEW_W));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <article className="deploy-card">
      <div className="deploy-card__frame">
        <div className="deploy-card__bar">
          <span className="deploy-card__url">{project.domain}</span>
        </div>
        <div className="deploy-card__viewport" ref={viewport}>
          {project.preview === false ? (
            <p className="deploy-card__nopreview">{t.work.previewUnavailable}</p>
          ) : (
            <>
              {!loaded && <div className="deploy-card__skeleton" aria-hidden="true" />}
              <iframe
                src={project.url}
                title={project.name}
                loading="lazy"
                onLoad={() => setLoaded(true)}
                tabIndex={-1}
                scrolling="no"
                style={{ width: PREVIEW_W, height: PREVIEW_H }}
              />
            </>
          )}
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
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noreferrer" className="btn btn--ghost btn--sm">
              {t.work.repo}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Work() {
  const { t } = useLanguage();
  const { work } = t;

  return (
    <section id="work" className="section">
      <div className="work__deploys-head">
        <h2>{work.deploysTitle}</h2>
        <p>{work.deploysSubtitle}</p>
      </div>
      <div className="deploy-grid">
        {work.deployments.map((p) => (
          <DeploymentCard project={p} t={t} key={p.key} />
        ))}
      </div>
    </section>
  );
}
