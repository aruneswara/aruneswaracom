import { Link } from "react-router-dom";
import profile from "../data/profile";

const Projects_sec = () => {
  return (
    <section id="projects" className="Projects_sec panel">
      <div className="container">
        <div className="resume_section_header">
          <p>Awards and Projects</p>
          <h2>Projects</h2>
        </div>

        <div className="projects_grid">
          {profile.projects.map((project) => (
            <article className="project_item" key={project.title}>
              <div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              {project.slug && (
                <Link to={`/blog-inner/${project.slug}`}>Learn more →</Link>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects_sec;
