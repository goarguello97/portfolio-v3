import Skill from "./Skill";
import { skills } from "../data/skills";

const Skills = () => {
  return (
    <section>
      <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Skills
      </h2>
      <div className="flex gap-3 p-3 flex-wrap pr-4">
        {skills?.map(({ skill }, i) => (
          <Skill skill={skill} key={i} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
