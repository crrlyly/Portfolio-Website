import type { Skill } from "../../services/skillsAPI";
interface SkillProp{
  skill: Skill
}

const SkillRep = ({ skill }: SkillProp) => {
  return (
    <h2 className="hover:border-pink-300 hover:text-pink-300 hover:-translate-y-1 duration-300 border border-pink-200/20 w-fit px-4 py-1 text-center text-pink-200/80 rounded-full font-light mb-3 ml-3">
      {skill.name}
    </h2>
  );
};

export default SkillRep;
