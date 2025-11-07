import { FC, memo } from "react";

import { education, SectionId } from "../../../data/data";
import { TimelineItem as TimelineItemType } from "../../../data/dataDef";
import Section from "../../Layout/Section";

const Education: FC = memo(() => {
  return (
    <Section
      className="bg-gradient-to-b from-white via-emerald-50/80 to-neutral-100"
      sectionId={SectionId.Education}
    >
      <div className="flex flex-col gap-8">
        <div className="text-center text-neutral-800">
          <h2 className="mt-3 text-3xl font-bold">Academic Journey</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {education.map((item, index) => (
            <EducationCard item={item} key={`${item.title}-${index}`} />
          ))}
        </div>
      </div>
    </Section>
  );
});

const EducationCard: FC<{ item: TimelineItemType }> = memo(({ item }) => {
  const { title, date, location, content } = item;
  return (
    <div className="flex h-full flex-col rounded-2xl border border-neutral-200/70 bg-white/80 p-6 shadow-sm shadow-emerald-50">
      <div className="text-sm font-semibold uppercase tracking-wide text-emerald-500">
        {date}
      </div>
      <h3 className="mt-2 text-2xl font-semibold text-neutral-900">{title}</h3>
      <p className="text-sm text-neutral-500">{location}</p>
      <div className="mt-4 flex-1 text-neutral-600 [&>p]:text-sm [&>p]:leading-relaxed">
        {content}
      </div>
    </div>
  );
});

EducationCard.displayName = "EducationCard";
Education.displayName = "Education";
export default Education;
