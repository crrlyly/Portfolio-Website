import SkillRep from "../Shared/SkillRep";
import CircleGlow from "../Shared/CircleGlow";
import { useEffect, useState, useRef } from "react";
import type { Skill } from "../../services/skillsAPI";
import {
  getLanguages,
  getDesigns,
  getFrameworks,
  getTools,
} from "../../services/skillsAPI";
import styles from "./skills.module.css";

const Skills = () => {
  const [languages, setLanguages] = useState<Skill[]>([]);
  const [frameworks, setFrameworks] = useState<Skill[]>([]);
  const [designs, setDesigns] = useState<Skill[]>([]);
  const [tools, setTools] = useState<Skill[]>([]);

  const [visible, setVisible] = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function loadLanguages() {
      try {
        const data = await getLanguages();
        setLanguages(data);
      } catch (error) {
        console.error("Failed to load languages: ", error);
      }
    }
    async function loadFrameworks() {
      try {
        const data = await getFrameworks();
        setFrameworks(data);
      } catch (error) {
        console.error("Failed to load frameworks: ", error);
      }
    }
    async function loadDesigns() {
      try {
        const data = await getDesigns();
        setDesigns(data);
      } catch (error) {
        console.error("Failed to load designs: ", error);
      }
    }
    async function loadTools() {
      try {
        const data = await getTools();
        setTools(data);
      } catch (error) {
        console.error("Failed to load tools: ", error);
      }
    }
    loadLanguages();
    loadFrameworks();
    loadDesigns();
    loadTools();

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      {
        threshold: 0.3,
      },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="skills" className="w-full h-auto bg-[#120817] py-40">
      <div className="ml-5 mb-20 w-full h-auto">
        <h1 className="saira-condensed-light mb-7 text-pink-300 text-[.75rem] uppercase tracking-[.3em] md:text-[.8rem]">
          // 04 - Toolkit
        </h1>
        <span className="text-5xl font-bold text-white">
          Languages & Applications
        </span>
        <p className="text-pink-200 mt-8 text-2xl">
          The tools I reach for to bring ideas to life --- from logic to layout.
        </p>
      </div>
      <div
        ref={sectionRef}
        className="md:flex-row md:flex-wrap mt-3 flex flex-col items-center justify-center gap-10 pl-5"
      >
        <div
          className={`${styles.animateTarget}
    ${visible ? styles.underParralax1 : ""} h-auto w-90 border border-pink-200/30 mr-3 rounded-4xl`}
        >
          <div className="flex items-center m-10">
            <CircleGlow></CircleGlow>
            <span className="ml-2 text-3xl text-white ">Languages</span>
          </div>
          <div className="m-10 flex flex-wrap">
            \
            {languages.map((language) => (
              <SkillRep key={language.skillsId} skill={language}></SkillRep>
            ))}
          </div>
        </div>
        <div
          className={`${styles.animateTarget}
    ${visible ? styles.underParralax2 : ""} h-auto w-90 border border-pink-200/30 mr-3 rounded-4xl`}
        >
          <div className="flex items-center m-10">
            <CircleGlow></CircleGlow>
            <span className="ml-2 text-3xl text-white ">Frameworks</span>
          </div>
          <div className="m-10 flex flex-wrap">
            \
            {frameworks.map((framework) => (
              <SkillRep key={framework.skillsId} skill={framework}></SkillRep>
            ))}
          </div>
        </div>
        <div
          className={`${styles.animateTarget}
    ${visible ? styles.underParralax3 : ""} h-auto w-90 border border-pink-200/30 mr-3 rounded-4xl`}
        >
          <div className="flex items-center m-10">
            <CircleGlow></CircleGlow>
            <span className="ml-2 text-3xl text-white ">Designs</span>
          </div>
          <div className="m-10 flex flex-wrap">
            \
            {designs.map((design) => (
              <SkillRep key={design.skillsId} skill={design}></SkillRep>
            ))}
          </div>
        </div>
        <div
          className={`${styles.animateTarget}
    ${visible ? styles.underParralax4 : ""} h-auto w-90 border border-pink-200/30 mr-3 rounded-4xl`}
        >
          <div className="flex items-center m-10">
            <CircleGlow></CircleGlow>
            <span className="ml-2 text-3xl text-white ">Tools</span>
          </div>
          <div className="m-10 flex flex-wrap">
            \
            {tools.map((tool) => (
              <SkillRep key={tool.skillsId} skill={tool}></SkillRep>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
