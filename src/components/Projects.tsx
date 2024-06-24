import ProjectItem from "./ProjectItem";
import { projects } from "../data/projects";
import { motion } from "framer-motion";

const Projects = () => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <section>
      <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Proyectos
      </h2>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 p-4"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {projects?.map((project, i) => (
          <ProjectItem
            title={project.title}
            description={project.description}
            image={project.image}
            key={i}
            variants={item}
            link={project.link}
            github={project.github}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
