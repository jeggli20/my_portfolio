import { LightContextProvider } from "./store/light-context";

import Layout from "./components/layout/Layout";
import About from "./components/sections/About";
import WorkExperience from "./components/sections/WorkExperience";
import Projects from "./components/sections/Projects";

const App = () => {
  return (
    <LightContextProvider>
      <Layout>
        <About />
        <WorkExperience />
        <Projects />
      </Layout>
    </LightContextProvider>
  );
};

export default App;
