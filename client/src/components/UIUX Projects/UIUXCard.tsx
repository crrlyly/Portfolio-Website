import type { Project } from "../../services/projectsAPI";

interface ProjectCardProps {
  project: Project;
}

const UIUXCard = ({ project }: ProjectCardProps) => {
  return (
    <a
      href={project.link}
      className={`z-40 group hover:bg-pink-300 hover:justify-center hover:scale-107 duration-300 easy-in h-60 w-90 md:h-80 md:w-120 md:mb-10 border border-pink-200/30 rounded-3xl mr-5 flex flex-col justify-end pl-5 mb-5`}
    >
      <span className="group-hover:hidden text-pink-200 mb-3 uppercase tracking-widest font-light text-[.9rem]">
        mobile &middot; ux
      </span>
      <span className="group-hover:hidden block text-white mb-10 text-3xl font-semibold">
        {project.name}
      </span>
      <p className="hidden group-hover:block text-[#120817] font-semibold mx-5">{project.description}</p>
    </a>
  );
};

export default UIUXCard;
