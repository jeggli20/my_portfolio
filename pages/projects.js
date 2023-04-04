import { Fragment } from "react";

import Head from "next/Head";

const ProjectPage = () => {
  return (
    <Fragment>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Jacob Eggli - Projects</title>
      </Head>
      {/* TODO Replace with data collected from a GitHub REST API */}
      <div style={{ height: "100vh" }}>
        <p style={{ margin: "10rem auto" }}>Under Construction</p>
      </div>
    </Fragment>
  );
};

export default ProjectPage;
