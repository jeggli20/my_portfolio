import { useState } from "react";

import classes from "./WorkExperience.module.css";

const WorkExperience = () => {
  const [workId, setWorkId] = useState("job1");

  const buttonHandler = (e) => {
    e.preventDefault();
    setWorkId(e.target.id);
  };
  return (
    <section>
      <h3 className={classes["section-title"]}>Work Experience</h3>
      <div className={classes["work-tabs"]}>
        <button id="job1" onClick={buttonHandler}>
          GEM Buildings
        </button>
        <button id="job2" onClick={buttonHandler}>
          Bridgerland Tech
        </button>
        <button id="job3" onClick={buttonHandler}>
          GEM Buildings
        </button>
        <button id="job3" onClick={buttonHandler}>
          Placeholder
        </button>
        <button id="job3" onClick={buttonHandler}>
          Placeholder
        </button>
        <button id="job3" onClick={buttonHandler}>
          Placeholder
        </button>
        <button id="job3" onClick={buttonHandler}>
          Placeholder
        </button>
        <button id="job3" onClick={buttonHandler}>
          Placeholder
        </button>
      </div>
      <div
        className={`${classes["job-description"]} ${
          workId === "job1" ? classes.show : classes.hidden
        }`}
      >
        <h4 className={classes["job-title"]}>
          Web Developer Intern @&nbsp;<span>GEM&nbsp;Buildings</span>
        </h4>
        <span className={classes["job-date"]}>Jan 2023 - Feb 2023</span>
        <ul className={classes["job-list"]}>
          <li>
            Developed a PHP and SQL driven employee directory application to
            help improve the efficiency of the company
          </li>
          <li>
            In development and implementation, set up a relational database to
            efficiently organize data in a cohesive and straightforward manner
          </li>
        </ul>
      </div>
      <div
        className={`${classes["job-description"]} ${
          workId === "job2" ? classes.show : classes.hidden
        }`}
      >
        <h4 className={classes["job-title"]}>
          Student Full Stack Web Developer @&nbsp;
          <span>Bridgerland&nbsp;Technical&nbsp;College</span>
        </h4>
        <span className={classes["job-date"]}>Oct 2022 - Ongoing</span>
        <ul className={classes["job-list"]}>
          <li>
            Developed website for insurance agency, Perry Morris Insurance,
            using NextJS to provide customers a reactive experience. Led
            specifically in form submission development resulting in emails sent
            to all parties
          </li>
          <li>
            Collaborated in a team setting where roles were distributed out and
            communication maintained through entire development process creating
            a cohesive and precise team experience
          </li>
        </ul>
      </div>
      <div
        className={`${classes["job-description"]} ${
          workId === "job3" ? classes.show : classes.hidden
        }`}
      >
        <h4 className={classes["job-title"]}>
          Systems Administrator Intern @&nbsp;
          <span>GEM&nbsp;Buildings</span>
        </h4>
        <span className={classes["job-date"]}>March 2021 - Aug 2021</span>
        <ul className={classes["job-list"]}>
          <li>
            Worked with Systems Administrator to troubleshoot issues, answer
            inquiries, and update software helping over 150 employees work
            efficiently
          </li>
          <li>
            Redesigned and developed company intranet using HTML and CSS,
            modernizing and increasing company functionality
          </li>
        </ul>
      </div>
    </section>
  );
};

export default WorkExperience;
