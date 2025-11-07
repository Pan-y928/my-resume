import {
  BuildingOffice2Icon,
  CalendarIcon,
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  MapIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

import LinkedInIcon from "../components/Icon/LinkedInIcon";
import heroImage from "../images/header-background.webp";
import porfolioImage1 from "../images/portfolio/portfolio-1.jpg";
import porfolioImage2 from "../images/portfolio/portfolio-2.jpg";
import porfolioImage3 from "../images/portfolio/portfolio-3.jpg";
import profilepic from "../images/profilepic.jpg";
import testimonialImage from "../images/testimonial.webp";
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from "./dataDef";

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: "Peter Pan | Full-Stack Developer",
  description:
    "Portfolio and resume for Peter Pan, a full-stack developer skilled in modern web technologies, cloud platforms, and collaborative delivery.",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: "hero",
  About: "about",
  Contact: "contact",
  Portfolio: "portfolio",
  Resume: "resume",
  Skills: "skills",
  Stats: "stats",
  Testimonials: "testimonials",
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Peter Pan`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Enthusiastic{" "}
        <strong className="text-stone-100">Full-Stack Developer</strong> with 2
        years of coding experience and hands-on practice delivering modern web
        applications.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Highly skilled both frontend and backend technologies, proven experience
        CI/CD workflows, containerization and relational/NoSQL databases. A fast
        learner who thrives in collaborative teams and continuously seeks to
        translate real-world needs into high-quality software solutions.
      </p>
    </>
  ),
  actions: [
    {
      href: `#${SectionId.Contact}`,
      text: "Contact",
      primary: true,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Hi, I'm Peter—an energetic full-stack developer who loves shipping features end-to-end. I pair strong frontend experience with React and Tailwind CSS with solid backend foundations in ASP.NET Core and Spring Boot, and I enjoy designing resilient data flows that keep teams moving quickly.`,
  aboutItems: [
    { label: "Location", text: "Sydney, Australia", Icon: MapIcon },
    { label: "Phone", text: "0426 656 284", Icon: DevicePhoneMobileIcon },
    {
      label: "Email",
      text: "peter.pan.yesman.7@gmail.com",
      Icon: EnvelopeIcon,
    },
    {
      label: "Experience",
      text: "2 years full-stack development",
      Icon: CalendarIcon,
    },
    {
      label: "Current Focus",
      text: "Cloud-native delivery & CI/CD automation",
      Icon: SparklesIcon,
    },
    {
      label: "Employment",
      text: "Open to full-time opportunities",
      Icon: BuildingOffice2Icon,
    },
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: "Languages",
    skills: [
      {
        name: "C#",
        level: 9,
      },
      {
        name: "JavaScript / TypeScript",
        level: 9,
      },
      {
        name: "Python",
        level: 6,
      },
    ],
  },
  {
    name: "Frontend",
    skills: [
      {
        name: "React",
        level: 9,
      },
      {
        name: "Tailwind CSS",
        level: 8,
      },
      {
        name: "Redux Toolkit",
        level: 7,
      },
    ],
  },
  {
    name: "Backend",
    skills: [
      {
        name: "ASP.NET Core",
        level: 8,
      },
      {
        name: "RESTful API Design",
        level: 8,
      },
      {
        name: "Spring Boot",
        level: 6,
      },
    ],
  },
  {
    name: "Databases",
    skills: [
      {
        name: "SQL Server",
        level: 8,
      },
      {
        name: "MySQL / PostgreSQL",
        level: 7,
      },
      {
        name: "MongoDB",
        level: 6,
      },
    ],
  },
  {
    name: "DevOps & Cloud",
    skills: [
      {
        name: "Docker",
        level: 8,
      },
      {
        name: "Git & GitHub Actions",
        level: 8,
      },
      {
        name: "Azure / AWS / Vercel",
        level: 6,
      },
    ],
  },
  {
    name: "Workflow & Tooling",
    skills: [
      {
        name: "Agile / Scrum",
        level: 9,
      },
      {
        name: "Jira & Confluence",
        level: 8,
      },
      {
        name: "Figma & Miro",
        level: 6,
      },
    ],
  },
];

/**
 * Portfolio section
 * (Placeholder imagery retained; replace with project visuals as desired.)
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: "Electronic Invoicing System",
    description:
      "Cloud-hosted invoicing platform with secure login, invoice lifecycle management, and PDF automation.",
    url: "https://example.com/electronic-invoicing-system",
    image: porfolioImage1,
  },
  {
    title: "DistinctionCoding Service Platform",
    description:
      "React-based portal enabling NDIS clients to apply for and manage support services.",
    url: "https://example.com/distinctioncoding",
    image: porfolioImage2,
  },
  {
    title: "Robotic Vacuum Firmware Enhancements",
    description:
      "Embedded firmware work for TP-Link robotic vacuum cleaners with adaptive cleaning logic.",
    url: "https://example.com/tplink-vacuum",
    image: porfolioImage3,
  },
];

/**
 * Resume section
 */
export const education: TimelineItem[] = [
  {
    date: "Sep 2023 - Sep 2025",
    location: "Sydney, Australia",
    title: "Master of Information Technology",
    content: (
      <p>
        University of New South Wales (UNSW). Weighted Average Mark (WAM):
        83/100.
      </p>
    ),
  },
  {
    date: "Sep 2018 - Jul 2022",
    location: "Xi’an, China",
    title: "Bachelor of Software Engineering",
    content: (
      <p>
        Xidian University. GPA: 3.4/4.0 with strong foundations in software
        engineering principles and backend systems.
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: "Mar 2025 - Jun 2025",
    location: "Sydney, Australia",
    title: "Full-Stack Developer · Electronic Invoicing System",
    content: (
      <ul className="list-disc space-y-2 pl-4">
        <li>
          Built layered ASP.NET Core REST APIs secured with JWT and Identity,
          backed by Entity Framework and SQL Server.
        </li>
        <li>
          Delivered a responsive React front end using TypeScript, React Hook
          Form, React Query, and Tailwind CSS with GitHub Actions CI/CD.
        </li>
        <li>
          Containerised services with Docker, deployed to AWS, generated Swagger
          docs, and implemented xUnit/Moq/FluentAssertions tests.
        </li>
        <li>
          Integrated Reckon APIs via OAuth 2.0 and Gemini 2.0 for PDF parsing,
          while facilitating agile ceremonies as Scrum Master.
        </li>
      </ul>
    ),
  },
  {
    date: "Feb 2025 - May 2025",
    location: "Sydney, Australia",
    title: "Full-Stack Developer · DistinctionCoding (Intern)",
    content: (
      <ul className="list-disc space-y-2 pl-4">
        <li>
          Implemented C# ASP.NET Core APIs with JWT-based role management across
          Admin, Client, and Provider portals.
        </li>
        <li>
          Designed resilient SQL Server and MongoDB data models to meet NDIS
          service requirements.
        </li>
        <li>
          Developed a TypeScript React SPA powered by Redux Toolkit, React
          Query, and Tailwind CSS with WCAG 2.1 AA accessibility.
        </li>
        <li>
          Participated in agile sprints, code reviews, and performance tuning
          initiatives to improve platform responsiveness.
        </li>
      </ul>
    ),
  },
  {
    date: "Jul 2022 - Dec 2022",
    location: "Hangzhou, China",
    title: "Software Engineer · TP-Link",
    content: (
      <ul className="list-disc space-y-2 pl-4">
        <li>
          Developed embedded C firmware for robotic vacuum cleaners using Keil5
          and Linux environments.
        </li>
        <li>
          Integrated carpet sensor logic to detect floor types and trigger
          adaptive cleaning behaviour.
        </li>
        <li>
          Collaborated with hardware and QA teams to resolve voice playback and
          messaging defects, improving system stability.
        </li>
        <li>
          Maintained Jenkins-based build and release workflows and managed
          issues through Bugzilla.
        </li>
      </ul>
    ),
  },
  {
    date: "Jun 2021 - Sep 2021",
    location: "Xi’an, China",
    title: "Backend Developer · On-campus Internship, Xidian University",
    content: (
      <ul className="list-disc space-y-2 pl-4">
        <li>
          Delivered Spring Boot microservices with MyBatis and MySQL for party
          membership fee tracking and communications.
        </li>
        <li>
          Implemented authentication and role-based access control for multiple
          member tiers.
        </li>
        <li>
          Authored unit tests and co-ordinated API contracts with frontend
          engineers to streamline integration.
        </li>
      </ul>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: "John Doe",
      text: "Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.",
      image:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg",
    },
    {
      name: "Jane Doe",
      text: "Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).",
      image:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg",
    },
    {
      name: "Someone else",
      text: "Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.",
      image:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg",
    },
  ],
};

/**
 * Contact section
 */
export const contact: ContactSection = {
  headerText: "Get in touch",
  description:
    "Available for full-time roles or collaborations anywhere across Australia. Drop me a line and I'll respond quickly.",
  items: [
    {
      type: ContactType.Email,
      text: "peter.pan.yesman.7@gmail.com",
      href: "mailto:peter.pan.yesman.7@gmail.com",
    },
    {
      type: ContactType.Location,
      text: "Sydney, Australia",
      href: "https://www.google.com/maps/place/Sydney+NSW",
    },
    {
      type: ContactType.LinkedIn,
      text: "linkedin.com/in/peter-pan-yesman",
      href: "https://www.linkedin.com/in/peter-pan-yesman",
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {
    label: "LinkedIn",
    Icon: LinkedInIcon,
    href: "https://www.linkedin.com/in/peter-pan-yesman",
  },
];
