import projects from "../data/projects.js";
import ProjectCard from "./ProjectCard.jsx";

function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="section-container">
        <p className="section-tag">// projects</p>
        <h2 className="section-heading">Things I&rsquo;ve built.</h2>

        <div className="projects__list">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
