import Me from "../../assets/me.jpg";
import SkillRep from "../Shared/SkillRep";

const About = () => {
  return (
    <div className="relative w-full h-auto flex flex-col py-30 px-5 bg-[#120817] lg:items-center lg:pb-0">
      <h1
        className="absolute top-0 right-0 text-transparent [-webkit-text-stroke:2px_pink] opacity-10  
       uppercase text-[20vw] leading-none"
      >
        about
      </h1>

      <div className="lg:h-auto lg:flex lg:w-[70%] items-center justify-center">
        <div className="lg:w-[70%] lg:mr-20">
          <h1 className="mb-7 text-pink-300 uppercase tracking-[.4em] md:text-[.8rem]">
            // 01 - The Maker
          </h1>
          <span className="text-4xl mb-9 text-pink-200 font-bold md:text-5xl">
            I build interfaces that{" "}
            <span className="text-pink-500 [text-shadow:0px_0px_10px_#f6339a]">
              feel alive.
            </span>
          </span>

          <p className="mt-7 mb-7 text-[1.2rem] text-pink-200">
            I'm Carly — a creative developer and UI/UX designer based in Cherry
            Hill, NJ. For six years I've lived in the space between logic and
            poetry, where clean architecture meets fluid, emotional design.
          </p>
          <p className="text-[1.2rem] mb-7 text-pink-200">
            My work spans from motion-driven marketing sites to complex design
            systems, always chasing that rare moment when a product stops being
            a tool and starts being an experience.
          </p>

          <div className="w-full h-auto mb-20 flex flex-wrap ">
            <SkillRep skill={"React"}></SkillRep>
            <SkillRep skill={"TypeScript"}></SkillRep>
            <SkillRep skill={"Three.js"}></SkillRep>
            <SkillRep skill={"Figma"}></SkillRep>
            <SkillRep skill={"Framer Motion"}></SkillRep>
            <SkillRep skill={"Node"}></SkillRep>
          </div>
        </div>

        <div className="w-full h-100 lg:h-full rounded-5xl md:w-100 self-center mb-50 justify-self-center">
          <img
            src={Me}
            alt="A picture of myself"
            className="lg:w-full lg:h-full object-cover rounded-5xl [box-shadow:0_0_50px_#693f5a]"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
