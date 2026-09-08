const SkillRep = ({ skill }: { skill: string }) => {
  return (
    <h2 className="border border-pink-200/20 w-fit px-4 py-1 text-center text-pink-200/80 rounded-full font-light mb-3 ml-3">
      {skill}
    </h2>
  );
};

export default SkillRep;
