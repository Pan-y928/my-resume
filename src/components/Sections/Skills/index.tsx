import { FC, memo } from "react";

import { SectionId, skills } from "../../../data/data";
import Section from "../../Layout/Section";
import { SkillGroup } from "../Resume/Skills";

const Skills: FC = memo(() => {
  return (
    <Section
      className="bg-gradient-to-b from-white via-emerald-50/80 to-neutral-100"
      sectionId={SectionId.Skills}
    >
      <div className="flex flex-col gap-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-neutral-900">Key skills</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skillgroup, index) => (
            <SkillGroup
              key={`${skillgroup.name}-${index}`}
              skillGroup={skillgroup}
            />
          ))}
        </div>
      </div>
    </Section>
  );
});

Skills.displayName = "Skills";
export default Skills;
