import { useState, useEffect } from "react";
import UIUXCard from "./UIUXCard";
import type { Project } from "../../services/projectsAPI";
import { getUIUXProjects } from "../../services/projectsAPI";

const UIUXProjects = () => {
  const [UIUXProjects, setUIUXProjects] = useState<Project[]>([]);

  useEffect(() => {
    async function loadUIUXProjects() {
      try {
        const data = await getUIUXProjects();
        setUIUXProjects(data);
      } catch (error) {
        console.error("Failed to load UIUX Projects: ", error);
      }
    }
    loadUIUXProjects();
  }, []);

  return (
    <section className="w-full bg-[#120817] py-40 relative">
      <div className="absolute top-10 left-0 text-transparent [-webkit-text-stroke:2px_pink] opacity-10 text-[20vw] uppercase">
        UI/UX
      </div>
      <div className="ml-5 mb-15">
        <h1 className="saira-condensed-light mb-7 text-pink-300 text-[.75rem] uppercase tracking-[.3em] md:text-[.8rem]">
          // 03 - The Designer
        </h1>
        <span
          className="text-4xl font-bold text-white \
        md:text-6xl"
        >
          Crafted Interfaces
        </span>
      </div>
      <div className="mt-3 flex flex-col items-center justify-center gap-5 pl-5">
        {UIUXProjects.map((project) => (
          <UIUXCard key={project.projId} project={project}></UIUXCard>
        ))}
      </div>
    </section>
  );
};

export default UIUXProjects;
