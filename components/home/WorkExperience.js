import { useState } from "react";

import Button from "../UI/Button";
import classes from "./WorkExperience.module.css";

const WorkExperience = () => {
  const [workId, setWorkId] = useState("job1");

  const buttonHandler = (e) => {
    e.preventDefault();
    setWorkId(e.target.id);
  };
  return (
    <section id="work">
      <h3 className={`dm-section-title ${classes["section-title"]}`}>
        Work Experience
      </h3>
      <div className={`dm-work-tabs ${classes["work-tabs"]}`}>
        <Button id="job1" onClick={buttonHandler}>
          Bridgerland Tech
        </Button>
        <Button id="job2" onClick={buttonHandler}>
          GEM Buildings
        </Button>
        <Button id="job3" onClick={buttonHandler}>
          GEM Buildings
        </Button>
      </div>
      <div
        className={`${classes["job-description"]} ${
          workId === "job1" ? classes["work-show"] : classes["work-hidden"]
        }`}
      >
        <h4 className={classes["job-title"]}>
          Student Full Stack Web Developer{" "}
          <span>@&nbsp;Bridgerland&nbsp;Technical&nbsp;College</span>
        </h4>
        <span className={`${classes["job-date"]} ${classes.emphasis}`}>
          Oct 2022 - March 2023
        </span>
        <ul className={classes["job-list"]}>
          <li>
            Developed a responsive website for an insurance agency using Next
            enhancing customer experience
          </li>
          <li>
            Designed an API to automate email notifications for all involved
            parties
          </li>
          <li>
            Collaborated effectively with team members, ensuring clear
            communication and efficient role distribution
          </li>
        </ul>
      </div>
      <div
        className={`${classes["job-description"]} ${
          workId === "job2" ? classes["work-show"] : classes["work-hidden"]
        }`}
      >
        <h4 className={classes["job-title"]}>
          Web Developer Intern <span>@&nbsp;GEM&nbsp;Buildings</span>
        </h4>
        <span className={`${classes["job-date"]} ${classes.emphasis}`}>
          Jan 2023 - Feb 2023
        </span>
        <ul className={classes["job-list"]}>
          <li>
            Developed PHP and MS SQL driven employee directory application
            resulting in an increase of company efficiency
          </li>
          <li>
            Created a relational database to efficiently organize employee data
            in a cohesive and straightforward manner
          </li>
        </ul>
      </div>
      <div
        className={`${classes["job-description"]} ${
          workId === "job3" ? classes["work-show"] : classes["work-hidden"]
        }`}
      >
        <h4 className={classes["job-title"]}>
          Systems Administrator Intern <span>@&nbsp;GEM&nbsp;Buildings</span>
        </h4>
        <span className={`${classes["job-date"]} ${classes.emphasis}`}>
          March 2021 - Aug 2021
        </span>
        <ul className={classes["job-list"]}>
          <li>
            Collaborated with Systems Administrator to troubleshoot issues,
            answer inquiries, and update software helping over 150 employees
            have a streamline work experience
          </li>
          <li>
            Redesigned and improved company intranet using HTML and CSS,
            creating a modern and more functional experience for employees
          </li>
        </ul>
      </div>
    </section>
  );
};

export default WorkExperience;
