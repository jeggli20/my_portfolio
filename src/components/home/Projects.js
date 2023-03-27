import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import "./Projects.css";

const Projects = () => {
  return (
    <section id="projects-container" className={"project-section"}>
      <h3 className={"section-title"}>Projects</h3>
      <div className="projects">
        <div className={"project"}>
          <h5>Featured Project</h5>
          <h4>Wingspan API</h4>
          <hr />
          <p>A data API for the board game Wingspan</p>
          <a
            href="https://github.com/jeggli20/wingspan_api"
            target="_blank"
            rel="noreferrer"
            className={"project-icon"}
          >
            <FontAwesomeIcon icon={faGithubSquare} />
          </a>
        </div>
        <div className={"project"}>
          <h5>Featured Project</h5>
          <h4>Employee Directory</h4>
          <hr />
          <p>
            A PHP-driven project that interacts with an SQL database to produce
            an employee directory
          </p>
          <a
            href="https://github.com/jeggli20/employee_directory_application"
            target="_blank"
            rel="noreferrer"
            className={"project-icon"}
          >
            <FontAwesomeIcon icon={faGithubSquare} />
          </a>
        </div>
        <div className={"project"}>
          <h5>Featured Project</h5>
          <h4>Perry Morris Insurance</h4>
          <hr />
          <p>Website for Perry Morris Insurance</p>
          <a
            href="https://github.com/jeggli20/perry-morris-insurance"
            target="_blank"
            rel="noreferrer"
            className={"project-icon"}
          >
            <FontAwesomeIcon icon={faGithubSquare} />
          </a>
          <a
            href="https://perrymorrisinsurance.com"
            target="_blank"
            rel="noreferrer"
            className={"project-icon"}
          >
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </div>
      </div>
      <Link to={`/projects`}>
        See full archive&nbsp;
        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
      </Link>
    </section>
  );
};

export default Projects;
