import { FC, memo } from "react";

import { experience, SectionId } from "../../../data/data";
import { TimelineItem as TimelineItemType } from "../../../data/dataDef";
import Section from "../../Layout/Section";

const Work: FC = memo(() => {
  return (
    <Section
      className="bg-gradient-to-b from-stone-950 via-neutral-700 to-black text-neutral-100"
      sectionId={SectionId.Work}
    >
      <div className="flex flex-col gap-8">
        <div className="text-center">
          <h2 className="mt-3 text-3xl font-bold text-white">
            Work Experience
          </h2>
        </div>
        <div className="relative">
          <div className="pointer-events-none absolute left-2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-400 via-emerald-500/30 to-transparent sm:left-5" />
          <div className="flex flex-col gap-10">
            {experience.map((item, index) => (
              <WorkTimelineItem
                index={index}
                item={item}
                key={`${item.title}-${index}`}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
});

const WorkTimelineItem: FC<{ item: TimelineItemType; index: number }> = memo(
  ({ item, index }) => {
    const { title, date, location, content } = item;
    const isLatest = index === 0;
    const [role, company] = title.split("·").map((part) => part.trim());
    return (
      <div className="relative pl-10 sm:pl-16">
        <span className="absolute left-2 top-8 -translate-x-1/2 sm:left-5">
          <span
            className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 shadow-[0_0_18px_rgba(16,185,129,0.65)] ring-4 ring-emerald-500/40"
            style={{
              boxShadow: isLatest
                ? "0 0 25px rgba(52, 211, 153, 0.9)"
                : "0 0 15px rgba(16, 185, 129, 0.6)",
            }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
          </span>
        </span>
        <div className="relative flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/30 backdrop-blur">
          <div className="flex flex-col gap-2 text-left">
            <div className="flex flex-wrap items-center gap-2 text-sm text-neutral-300">
              <span className="rounded-full bg-white/10 px-3 py-1 font-semibold tracking-wide text-emerald-200">
                {date}
              </span>
              <span className="text-neutral-400">/</span>
              <span className="text-neutral-300">{location}</span>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white">{role}</h3>
              {company && (
                <p className="text-sm font-medium uppercase tracking-wide text-emerald-200/80">
                  {company}
                </p>
              )}
            </div>
          </div>
          <div className="text-neutral-200 [&>ul]:space-y-2 [&>ul]:pl-5 [&>ul]:text-sm [&>ul>li]:list-disc">
            {content}
          </div>
        </div>
      </div>
    );
  },
);

WorkTimelineItem.displayName = "WorkTimelineItem";
Work.displayName = "Work";
export default Work;
