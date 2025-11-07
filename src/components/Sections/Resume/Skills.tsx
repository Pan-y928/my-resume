import { FC, memo, PropsWithChildren, useMemo } from "react";

import {
  Skill as SkillType,
  SkillGroup as SkillGroupType,
} from "../../../data/dataDef";

export const SkillGroup: FC<PropsWithChildren<{ skillGroup: SkillGroupType }>> =
  memo(({ skillGroup }) => {
    const { name, skills } = skillGroup;
    return (
      <div className="flex flex-col rounded-2xl border border-neutral-200/70 bg-white/80 p-6 text-neutral-900 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg">
        <span className="text-center text-xl font-semibold tracking-wide">
          {name}
        </span>
        <div className="mt-4 flex flex-col gap-y-4">
          {skills.map((skill, index) => (
            <Skill key={`${skill.name}-${index}`} skill={skill} />
          ))}
        </div>
      </div>
    );
  });

SkillGroup.displayName = "SkillGroup";

export const Skill: FC<{ skill: SkillType }> = memo(({ skill }) => {
  const { name, level, max = 10 } = skill;
  const percentage = useMemo(
    () => Math.round((level / max) * 100),
    [level, max],
  );

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between text-sm font-medium uppercase tracking-wide text-neutral-500">
        <span>{name}</span>
        <span className="rounded-full bg-neutral-900/5 px-2 py-0.5 text-xs text-neutral-700">
          {level}/{max}
        </span>
      </div>
      <div className="relative mt-2 h-3 w-full overflow-hidden rounded-full bg-neutral-200/80">
        <div
          className="absolute inset-y-0 left-0 h-full rounded-full bg-gradient-to-r from-emerald-400 via-cyan-500 to-blue-500 shadow-[0_0_12px_rgba(16,185,129,0.45)] transition-[width] duration-700 ease-out"
          style={{ width: `${percentage}%` }}
        />
        <div className="absolute inset-0 opacity-30 mix-blend-screen">
          <div className="h-full w-full animate-pulse bg-gradient-to-r from-white/0 via-white/60 to-white/0" />
        </div>
      </div>
    </div>
  );
});

Skill.displayName = "Skill";
