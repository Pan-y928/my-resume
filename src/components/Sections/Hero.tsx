import { ChevronDownIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import Image from "next/image";
import { FC, memo } from "react";
import { aboutData, heroData, SectionId } from "../../data/data";
import Section from "../Layout/Section";

const Hero: FC = memo(() => {
  const { imageSrc, name, description, actions } = heroData;
  const { profileImageSrc } = aboutData;

  return (
    <Section noPadding sectionId={SectionId.Hero}>
      <div className="relative flex h-screen w-full items-center justify-center">
        <Image
          alt={`${name}-image`}
          className="absolute z-0 h-full w-full object-cover"
          placeholder="blur"
          priority
          src={imageSrc}
        />
        <div className="z-10 max-w-screen-lg px-4 lg:px-0">
          <div className="flex flex-col gap-8 rounded-xl bg-gray-800/40 p-6 shadow-lg backdrop-blur-sm md:flex-row md:items-center md:gap-10 md:p-10">
            <div className="flex flex-1 flex-col items-center gap-y-6 text-center md:items-start md:text-left">
              <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-7xl">
                {name}
              </h1>
              {description}
              <div className="flex w-full flex-wrap justify-center gap-4 md:justify-start">
                {actions.map(({ href, text, primary, Icon }) => (
                  <a
                    className={classNames(
                      "flex items-center gap-x-2 rounded-full border-2 bg-none px-4 py-2 text-sm font-medium text-white ring-offset-gray-700/80 hover:bg-gray-700/80 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-base",
                      primary
                        ? "border-emerald-600 ring-emerald-600"
                        : "border-white ring-white",
                    )}
                    href={href}
                    key={text}
                  >
                    {text}
                    {Icon && (
                      <Icon className="h-5 w-5 text-white sm:h-6 sm:w-6" />
                    )}
                  </a>
                ))}
              </div>
            </div>
            {!!profileImageSrc && (
              <div
                className="flex w-full justify-center md:w-64 md:justify-end"
                id={SectionId.About}
              >
                <div className="relative aspect-square w-56 overflow-hidden rounded-3xl border-4 border-white/20 shadow-xl sm:w-64 lg:w-72">
                  <Image
                    alt="about-me-image"
                    className="h-full w-full object-cover"
                    priority
                    src={profileImageSrc}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-6 flex justify-center">
          <a
            className="rounded-full bg-white p-1 ring-white ring-offset-2 ring-offset-gray-700/80 focus:outline-none focus:ring-2 sm:p-2"
            href={`/#${SectionId.Resume}`}
          >
            <ChevronDownIcon className="h-5 w-5 bg-transparent sm:h-6 sm:w-6" />
          </a>
        </div>
      </div>
    </Section>
  );
});

Hero.displayName = "Hero";
export default Hero;
