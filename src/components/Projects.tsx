import ProjectItem from "./ProjectItem";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section>
      <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Proyectos
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
        {projects?.map((project, i) => (
          <ProjectItem
            title={project.title}
            description={project.description}
            image={project.image}
            key={i}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
