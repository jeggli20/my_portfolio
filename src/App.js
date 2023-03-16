import { LightContextProvider } from "./store/light-context";

import Layout from "./components/layout/Layout";
import About from "./components/sections/About";
import WorkExperience from "./components/sections/WorkExperience";

const App = () => {
  return (
    <LightContextProvider>
      <Layout>
        <About />
        <WorkExperience />
      </Layout>
    </LightContextProvider>
  );
};

export default App;
