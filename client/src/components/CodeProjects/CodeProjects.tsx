import ProjectCard from "./ProjectCard";

const CodeProjects = () => {
  return (
    <section className="w-full h-auto bg-[#120817] py-40 lg:py-20">
      <div className="ml-5 mb-10">
        <h1 className="mb-5 text-pink-300 uppercase tracking-[.4em] md:text-[.8rem]">
          // 02 - Selected Work
        </h1>
        <span className="text-4xl font-bold text-white md:text-6xl">
          The Project Matrix
        </span>
      </div>
      <div className="mt-5 flex gap-5 overflow-x-auto pl-5">
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
      </div>
    </section>
  );
};

export default CodeProjects;
