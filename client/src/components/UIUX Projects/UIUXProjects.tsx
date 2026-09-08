import UIUXCard from "./UIUXCard";

const UIUXProjects = () => {
  return (
    <section className="w-full bg-[#120817] py-40 relative">
      <div className="absolute top-10 left-0 text-transparent [-webkit-text-stroke:2px_pink] opacity-10 text-[20vw] uppercase">
        UI/UX
      </div>
      <div className="ml-5 mb-15">
        <h1
          className="mb-5 text-pink-300 uppercase tracking-[.4em] 
        md:text-[.8rem]"
        >
          // 03 - The Designer
        </h1>
        <span
          className="text-4xl font-bold text-white \
        md:text-6xl"
        >
          Crafted Interfaces
        </span>
      </div>
      <div
        className="mt-3 flex flex-col items-center justify-center gap-5 pl-5"
      >
        <UIUXCard></UIUXCard>
        <UIUXCard></UIUXCard>
        <UIUXCard></UIUXCard>
      </div>
    </section>
  );
};

export default UIUXProjects;
