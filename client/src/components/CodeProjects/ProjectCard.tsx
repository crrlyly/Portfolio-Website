const ProjectCard = () => {
  return (
    <div className="h-70 w-85 md:h-100 md:w-130 lg:h-150 lg:w-200 shrink-0 border border-pink-200/30 mr-5 flex flex-col p-5 rounded-3xl">
      <h1 className="text-gray-400 self-end mb-3">1</h1>
      <span className="text-pink-300 mb-3">
        2025{" "}
        <span className="text-purple-200">Web App &middot; Design System</span>
      </span>
      <span className="text-white block text-[2.15rem] font-bold mb-3">
        Lumen Analytics
      </span>
      <p className="text-white/50">
        A real-time analytics platform with a living, breathing data
        visualization layer.
      </p>
    </div>
  );
};

export default ProjectCard;
