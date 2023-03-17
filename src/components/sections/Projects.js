import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import classes from "./Projects.module.css";

const Projects = () => {
  return (
    <section className={classes["project-section"]}>
      <h3>Projects</h3>
      <div>
        <h5>Featured Project</h5>
        <h4>Wingspan API</h4>
        <p>A data API for the board game Wingspan</p>
        <a
          href="https://github.com/jeggli20/wingspan_api"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithubSquare} />
        </a>
      </div>
      <div>
        <h5>Featured Project</h5>
        <h4>Employee Directory</h4>
        <p>
          A PHP-driven project that interacts with an SQL database to produce an
          employee directory
        </p>
        <a
          href="https://github.com/jeggli20/employee_directory_application"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithubSquare} />
        </a>
      </div>
      <div>
        <h5>Featured Project</h5>
        <h4>Perry Morris Insurance</h4>
        <p>Website for Perry Morris Insurance</p>
        <a
          href="https://github.com/jeggli20/perry-morris-insurance"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithubSquare} />
        </a>
        <a
          href="https://perrymorrisinsurance.com"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </div>
    </section>
  );
};

export default Projects;
