import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { getCSProjects } from "../../services/projectsAPI";
import type { Project } from "../../services/projectsAPI";

const CodeProjects = () => {
  const [csProjects, setCSProjects] = useState<Project[]>([]);

  useEffect(() => {
    async function loadCSProjects() {
      try {
        const data = await getCSProjects();
        setCSProjects(data);
      } catch (error) {
        console.error("Failed to load CS Projects: ", error)
      }
    }
    loadCSProjects();
  }, []);

  return (
    <section className="w-full h-auto bg-[#120817] py-40 lg:py-20">
      <div className="ml-5 mb-10">
        <h1 className="saira-condensed-light mb-7 text-pink-300 text-[.75rem] uppercase tracking-[.3em] md:text-[.8rem]">
          // 02 - Selected Work
        </h1>
        <div className="flex justify-between items-end">
          <span className="text-4xl font-bold text-white md:text-6xl ">
            The Project Matrix
          </span>
          <span className="hidden md:block text-pink-200 mr-5">
            scroll to explore →
          </span>
        </div>
      </div>
      <div className="mt-5 flex gap-5 overflow-x-auto pl-5">
        {csProjects.map((project, index) => (
          <ProjectCard
            key={project.projId}
            count={index + 1}
            project={project}
          ></ProjectCard>
        ))}
      </div>
    </section>
  );
};

export default CodeProjects;
