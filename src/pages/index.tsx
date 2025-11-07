import dynamic from "next/dynamic";
import { FC, memo } from "react";

import Page from "../components/Layout/Page";
import Contact from "../components/Sections/Contact";
import Hero from "../components/Sections/Hero";
import Education from "../components/Sections/Education";
import Portfolio from "../components/Sections/Portfolio";
import Skills from "../components/Sections/Skills";
import Work from "../components/Sections/Work";
import { homePageMeta } from "../data/data";

// eslint-disable-next-line react-memo/require-memo
const Header = dynamic(() => import("../components/Sections/Header"), {
  ssr: false,
});

const Home: FC = memo(() => {
  const { title, description } = homePageMeta;
  return (
    <Page description={description} title={title}>
      <Header />
      <Hero />
      <Skills />
      <Work />
      <Education />
      <Portfolio />
      <Contact />
    </Page>
  );
});

export default Home;
