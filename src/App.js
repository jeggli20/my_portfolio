import { useContext } from "react";
import LightContext from "./store/light-context";

import Layout from "./components/layout/Layout";
import About from "./components/sections/About";
import WorkExperience from "./components/sections/WorkExperience";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";

import "./global.css";

const App = () => {
  const lightCtx = useContext(LightContext);

  return (
    <div className={`${lightCtx.isDark ? "dark-mode" : "light-mode"}`}>
      <Layout>
        <About />
        <WorkExperience />
        <Projects />
        <Contact />
      </Layout>
    </div>
  );
};

export default App;
