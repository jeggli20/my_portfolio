import { Fragment } from "react";
import { FormContextProvider } from "../context/form-context";

import Head from "next/head";
import About from "../components/home/About";
import WorkExperience from "../components/home/WorkExperience";
import Projects from "../components/home/Projects";
import Contact from "../components/home/Contact";

const HomePage = () => {
  return (
    <Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Jacob Eggli" />
        <meta
          name="description"
          content="Hey! My name is Jacob Eggli and I'm a web developer. Come check out my website to see what I do."
        />
        <meta
          name="keywords"
          content="Jacob, Eggli, Jacob Eggli, Web Developer, Front End, Back End, Full Stack, Freelance"
        />
        <title>Jacob Eggli - Web Developer</title>
        <link rel="shortcut icon" href="/favicon.ico/" />
      </Head>
      <FormContextProvider>
        <About />
        <WorkExperience />
        <Projects />
        <Contact />
      </FormContextProvider>
    </Fragment>
  );
};

export default HomePage;
