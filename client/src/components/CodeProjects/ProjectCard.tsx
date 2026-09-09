import type { Project } from "../../services/projectsAPI";
interface ProjectCardProps {
  project: Project
}

const ProjectCard = ({project}: ProjectCardProps) => {
  return (
    <div className="relative group w-85 md:h-100 md:w-130 lg:h-150 lg:w-200 shrink-0 border border-pink-200/30 mr-5 flex flex-col p-5 rounded-3xl">
      <div className="group-hover:opacity-100 opacity-0 duration-500 transition-opacity z-0 bg-linear-to-b to-[#120817] from-pink-300 absolute top-0 left-0 rounded-3xl w-full h-full bg-yellow-100"></div>
      <h1 className="z-1 text-black self-end mb-3">1</h1>
      <span className="z-1 text-pink-300 mb-3">
        {project.year}{" "}
        <span className="z-1 text-purple-200">
          Web App &middot; Design System
        </span>
      </span>
      <span className="z-1 group-hover:translate-x-5 transition-transform duration-300 text-white block text-[2.15rem] font-bold mb-2">
        {project.name}
      </span>
      <p className="z-1 text-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {project.description}
      </p>
    </div>
  );
};

export default ProjectCard;
