import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import {
  FC,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

import { portfolioItems, SectionId } from "../../data/data";
import Section from "../Layout/Section";

const Projects: FC = memo(() => {
  return (
    <Section
      className="bg-neutral-900 text-white"
      sectionId={SectionId.Projects}
    >
      <div className="flex flex-col gap-y-8">
        <div className="text-center">
          <h2 className="mt-3 text-3xl font-bold">Projects</h2>
          <p className="mt-2 text-neutral-300">
            A few real-world applications showcasing my skills and experience.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item, index) => (
            <ProjectCard item={item} key={`${item.title}-${index}`} />
          ))}
        </div>
      </div>
    </Section>
  );
});

const ProjectCard: FC<{ item: (typeof portfolioItems)[number] }> = memo(
  ({ item }) => {
    const { title, description, image, url } = item;
    const [showNotice, setShowNotice] = useState(false);
    const isConfidential = useMemo(() => !url, [url]);

    const handleConfidentialClick = useCallback(() => {
      if (!isConfidential) {
        return;
      }
      setShowNotice(true);
    }, [isConfidential]);

    useEffect(() => {
      if (!showNotice) {
        return;
      }
      const timeout = window.setTimeout(() => setShowNotice(false), 2600);
      return () => window.clearTimeout(timeout);
    }, [showNotice]);

    const cardContent = (
      <>
        <div className="relative h-48 w-full overflow-hidden bg-black">
          <Image
            alt={title}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            placeholder="blur"
            src={image}
          />
        </div>
        <div className="flex flex-1 flex-col gap-3 p-6 text-left">
          <div>
            <h3 className="text-xl font-semibold text-white">{title}</h3>
            <p className="mt-2 text-sm text-neutral-300">{description}</p>
          </div>
          <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-emerald-300">
            View
            <ArrowTopRightOnSquareIcon className="h-4 w-4" />
          </span>
          {isConfidential && (
            <p
              className={`text-xs font-semibold text-amber-300 transition-opacity duration-300 ${
                showNotice ? "opacity-100" : "opacity-0"
              }`}
            >
              Demo unavailable due to NDA
            </p>
          )}
        </div>
      </>
    );

    const baseClass =
      "group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl shadow-black/30 transition hover:-translate-y-1";

    if (isConfidential) {
      return (
        <button
          className={`${baseClass} cursor-not-allowed hover:border-amber-300/60 hover:bg-white/10`}
          onClick={handleConfidentialClick}
          type="button"
        >
          {cardContent}
        </button>
      );
    }

    return (
      <a
        className={`${baseClass} hover:border-emerald-400/60 hover:bg-white/10`}
        href={url}
        rel="noopener noreferrer"
        target="_blank"
      >
        {cardContent}
      </a>
    );
  },
);

ProjectCard.displayName = "ProjectCard";
Projects.displayName = "Projects";
export default Projects;
