import projects from "../data/projects.js";
import ProjectCard from "./ProjectCard.jsx";

function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="section-container">
        <h2 className="section-heading">Projects</h2>

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
