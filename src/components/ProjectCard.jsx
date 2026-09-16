function ProjectCard({ project, index }) {
  const { name, tagline, type, description, technologies, contribution, features, githubUrl, liveUrl } =
    project;

  return (
    <article className="project-card">
      <div className="project-card__media" aria-hidden="true">
        <span className="project-card__media-index">0{index + 1}</span>
        <div className="project-card__media-pattern"></div>
      </div>

      <div className="project-card__body">
        <div className="project-card__heading">
          <div>
            <h3 className="project-card__name">{name}</h3>
            <p className="project-card__tagline">{tagline}</p>
          </div>
          <span className="project-card__type">{type}</span>
        </div>

        <p className="project-card__description">{description}</p>

        <div className="project-card__tech">
          {technologies.map((tech) => (
            <span key={tech} className="project-card__tech-tag">
              {tech}
            </span>
          ))}
        </div>

        <div className="project-card__columns">
          <div>
            <p className="project-card__column-title">My contribution</p>
            <ul className="project-card__list">
              {contribution.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="project-card__column-title">Key features</p>
            <ul className="project-card__list">
              {features.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="project-card__actions">
          <a
            href={githubUrl}
            className="btn btn--outline btn--small"
            target={githubUrl !== "#" ? "_blank" : undefined}
            rel={githubUrl !== "#" ? "noreferrer" : undefined}
          >
            GitHub
          </a>
          <a
            href={liveUrl}
            className="btn btn--outline btn--small"
            target={liveUrl !== "#" ? "_blank" : undefined}
            rel={liveUrl !== "#" ? "noreferrer" : undefined}
          >
            Live Demo
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
