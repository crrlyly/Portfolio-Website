import type { Project } from "../../services/projectsAPI";
interface ProjectCardProps {
  project: Project;
  count: number;
}

const ProjectCard = ({ project, count }: ProjectCardProps) => {
  return (
    <div className="h-70 relative group w-85 md:h-100 md:w-130 lg:h-150 lg:w-200 shrink-0 border border-pink-200/30 mr-5 flex flex-col px-10 py-10 rounded-3xl">
      <div className="group-hover:opacity-100 opacity-0 duration-500 transition-opacity z-0 bg-linear-to-b to-[#120817] from-pink-300 absolute top-0 left-0 rounded-3xl w-full h-full bg-yellow-100"></div>
      <h1 className="saira-condensed-light z-1 text-gray-200/60 self-end mb-3">
        {count < 10 ? "0" : ""}
        {count}
      </h1>
      <div className="md:h-full h-auto z-10 flex flex-col md:justify-end ">
        <span className=" text-pink-300 mb-3">
          {project.year}{" "}
          <span className=" text-purple-200">
            Web App &middot; Design System
          </span>
        </span>
        <span className="group-hover:translate-x-5 transition-transform duration-300 text-white block text-[1.7rem] md:text-[2.5rem] font-bold mb-2">
          {project.name}
        </span>
        <p className=" text-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project.description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
