import { Fragment } from "react";

import About from "../components/home/About";
import WorkExperience from "../components/home/WorkExperience";
import Projects from "../components/home/Projects";
import Contact from "../components/home/Contact";

const HomePage = () => {
  return (
    <Fragment>
      <About />
      <WorkExperience />
      <Projects />
      <Contact />
    </Fragment>
  );
};

export default HomePage;
