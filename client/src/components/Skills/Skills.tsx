import SkillRep from "../Shared/SkillRep";
import CircleGlow from "../Shared/CircleGlow";

const Skills = () => {
  return (
    <section className="w-full h-auto bg-[#120817] py-40">
      <div className="ml-5 mb-20 w-full h-auto">
        <h1 className="mb-5 text-pink-300 uppercase tracking-[.4em]">
          // 04 - Toolkit
        </h1>
        <span className="text-5xl font-bold text-white">
          Languages & Applications
        </span>
        <p className="text-pink-200 mt-8 text-2xl">
          The tools I reach for to bring ideas to life --- from logic to layout.
        </p>
      </div>
      <div className="mt-3 flex flex-col items-center justify-center gap-10 pl-5">
        <div className="h-auto w-90 border border-pink-200/30 mr-5 rounded-4xl">
          <div className="flex items-center m-10">
            <CircleGlow></CircleGlow>
            <span className="ml-2 text-3xl text-white ">Languages</span>
          </div>
          <div className="m-10">
            <SkillRep skill={"React"}></SkillRep>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
