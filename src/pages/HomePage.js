import { FormContextProvider } from "../store/form-context";

import About from "../components/home/About";
import WorkExperience from "../components/home/WorkExperience";
import Projects from "../components/home/Projects";
import Contact from "../components/home/Contact";

const HomePage = () => {
  return (
    <FormContextProvider>
      <About />
      <WorkExperience />
      <Projects />
      <Contact />
    </FormContextProvider>
  );
};

export default HomePage;
