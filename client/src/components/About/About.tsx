import { useEffect, useState } from "react";
import Me from "../../assets/me.jpg";
import SkillRep from "../Shared/SkillRep";
import type { Skill } from "../../services/skillsAPI";
import { getLanguages } from "../../services/skillsAPI";

const About = () => {
  const [languages, setLanguages] = useState<Skill[]>([]);

  useEffect(() => {
    async function loadLanguages() {
      try {
        const data = await getLanguages();
        setLanguages(data);
      } catch (error) {
        console.error("Failed to load languages:", error);
      }
    }
    loadLanguages();
  }, []);

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
          <h1 className="saira-condensed-light mb-7 text-pink-300 text-[.75rem] uppercase tracking-[.3em] md:text-[.8rem]">
            // 01 - The Maker
          </h1>
          <span className="text-4xl mb-9 text-pink-200 font-bold md:text-5xl">
            I build interfaces that{" "}
            <span className="text-pink-500 [text-shadow:0px_0px_10px_#f6339a]">
              feel alive.
            </span>
          </span>

          <p className="mt-7 mb-7 text-[1.2rem] text-pink-200">
            I'm Carly — a frontend developer and UI/UX designer based in Cherry
            Hill, NJ, and a recent Rutgers–New Brunswick graduate with a double
            major in Computer Science and Information Technology.
          </p>
          <p className="text-[1.2rem] mb-7 text-pink-200">
            What draws me to frontend development is the combination of
            creativity and problem-solving. I love taking an idea or design and
            turning it into an interactive, polished experience that feels just
            as good to use as it looks. I especially enjoy experimenting with
            layouts, motion, typography, and responsive design to give each
            project its own personality.
          </p>
          <p className="text-[1.2rem] mb-7 text-pink-200">
            I build primarily with React, TypeScript, Tailwind CSS, and
            JavaScript, with experience using Node.js, Express, MySQL, and APIs
            to bring the frontend and backend together. I'm looking to grow as a
            frontend developer where I can combine my technical background with
            my eye for design to build thoughtful, engaging web experiences.
          </p>

          <div className="w-full h-auto mb-20 flex flex-wrap ">
            {languages.map((language) => (
              <SkillRep key={language.skillsId} skill={language}></SkillRep>
            ))}
          </div>
        </div>

        <div className="relative w-full max-w-90 h-100 rounded-5xl md:max-w-120 lg:max-w-150 self-center mb-50 justify-self-center">
          <div className="backdrop-blur-[3px] border border-b-pink-200/20 border-r-pink-200/20 rounded-3xl z-20 absolute text-pink-300 w-35 h-20 -top-10 -left-7.5 bg-[#120817]/70 flex flex-col justify-center pl-4 text-2xl font-bold">
            4+{" "}
            <span className="block text-[.7rem] uppercase font-light">
              years crafting
            </span>
          </div>
          <div className="backdrop-blur-[3px] border border-b-pink-200/20 border-l-pink-200/20 rounded-3xl z-20 absolute text-pink-300 w-35 h-20 -top-10 -right-7.5  bg-[#120817]/70 flex flex-col justify-center pl-4 text-2xl font-bold">
            10{" "}
            <span className="block text-[.7rem] uppercase font-light">
              design rewards
            </span>
          </div>
          <div className="backdrop-blur-[3px] border border-t-pink-200/20 border-l-pink-200/20 rounded-3xl z-20 absolute text-pink-300 w-35 h-20 -bottom-10 -right-7.5  bg-[#120817]/70 flex flex-col justify-center pl-4 text-2xl font-bold">
            10{" "}
            <span className="block text-[.7rem] uppercase font-light">
              cups of coffee
            </span>
          </div>
          <div className="backdrop-blur-[3px] border border-t-pink-200/20 border-r-pink-200/20 rounded-3xl z-20 absolute text-pink-300 w-35 h-20 -bottom-10 -left-7.5  bg-[#120817]/70 flex flex-col justify-center pl-4 text-2xl font-bold">
            10{" "}
            <span className="block text-[.7rem] uppercase font-light">
              {" "}
              projects
            </span>
          </div>
          <img
            src={Me}
            alt="A picture of myself"
            className="z-10 w-full h-full object-cover rounded-5xl [box-shadow:0_0_50px_#693f5a]"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
