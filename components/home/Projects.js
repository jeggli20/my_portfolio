import { useContext } from "react";
import Link from "next/link";
import NavContext from "../../context/nav-context";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import classes from "./Projects.module.css";

const Projects = () => {
  const navCtx = useContext(NavContext);

  return (
    <section id="projects" className={classes["project-section"]}>
      <h3 className={`dm-section-title ${classes["section-title"]}`}>
        Projects
      </h3>
      <div className={classes.projects}>
        <div className={`dm-project ${classes.project}`}>
          <h5>Featured Project</h5>
          <h4>Employee Directory</h4>
          <hr />
          <p>
            A PHP-driven project that interacts with a SQL database to produce
            an employee directory
          </p>
          <div className={"project-icons"}>
            <a
              href="https://github.com/jeggli20/employee_directory_application"
              target="_blank"
              rel="noreferrer"
              className={`dm-project-icon ${classes["project-icon"]}`}
            >
              <FontAwesomeIcon icon={faGithubSquare} className={classes.icon} />
            </a>
          </div>
        </div>
        <div className={`dm-project ${classes.project}`}>
          <h5>Featured Project</h5>
          <h4>Perry Morris Insurance</h4>
          <hr />
          <p>Website for Perry Morris Insurance using Next</p>
          <div className={classes["project-icons"]}>
            <a
              href="https://github.com/jeggli20/perry-morris-insurance"
              target="_blank"
              rel="noreferrer"
              className={`dm-project-icon ${classes["project-icon"]}`}
            >
              <FontAwesomeIcon icon={faGithubSquare} className={classes.icon} />
            </a>
            <a
              href="https://perrymorrisinsurance.com"
              target="_blank"
              rel="noreferrer"
              className={`dm-project-icon ${classes["project-icon"]}`}
            >
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className={classes.icon}
              />
            </a>
          </div>
        </div>
        <div className={`dm-project ${classes.project}`}>
          <h5>Featured Project</h5>
          <h4>Wingspan API</h4>
          <hr />
          <p>A data API for the board game Wingspan using Laravel</p>
          <div className={"project-icons"}>
            <a
              href="https://github.com/jeggli20/wingspan_api"
              target="_blank"
              rel="noreferrer"
              className={`dm-project-icon ${classes["project-icon"]}`}
            >
              <FontAwesomeIcon icon={faGithubSquare} className={classes.icon} />
            </a>
          </div>
        </div>
      </div>
      <Link href="/projects" onClick={navCtx.onPageChange}>
        See full archive&nbsp;
        <FontAwesomeIcon
          icon={faArrowUpRightFromSquare}
          className={classes["archive-icon"]}
        />
      </Link>
    </section>
  );
};

export default Projects;
