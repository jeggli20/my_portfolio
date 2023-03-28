import { useState } from "react";

import Button from "../UI/Button";
import "./WorkExperience.css";

const WorkExperience = () => {
  const [workId, setWorkId] = useState("job1");

  const buttonHandler = (e) => {
    e.preventDefault();
    setWorkId(e.target.id);
  };
  return (
    <section id="work">
      <h3 className={"section-title"}>Work Experience</h3>
      <div className={"work-tabs"}>
        <Button id="job1" onClick={buttonHandler}>
          GEM Buildings
        </Button>
        <Button id="job2" onClick={buttonHandler}>
          Bridgerland Tech
        </Button>
        <Button id="job3" onClick={buttonHandler}>
          GEM Buildings
        </Button>
      </div>
      <div
        className={`${"job-description"} ${
          workId === "job1" ? "work-show" : "work-hidden"
        }`}
      >
        <h4 className={"job-title"}>
          Web Developer Intern <span>@&nbsp;GEM&nbsp;Buildings</span>
        </h4>
        <span className={"job-date"}>Jan 2023 - Feb 2023</span>
        <ul className={"job-list"}>
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
        className={`${"job-description"} ${
          workId === "job2" ? "show" : "hidden"
        }`}
      >
        <h4 className={"job-title"}>
          Student Full Stack Web Developer{" "}
          <span>@&nbsp;Bridgerland&nbsp;Technical&nbsp;College</span>
        </h4>
        <span className={"job-date"}>Oct 2022 - Ongoing</span>
        <ul className={"job-list"}>
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
        className={`${"job-description"} ${
          workId === "job3" ? "show" : "hidden"
        }`}
      >
        <h4 className={"job-title"}>
          Systems Administrator Intern <span>@&nbsp;GEM&nbsp;Buildings</span>
        </h4>
        <span className={"job-date"}>March 2021 - Aug 2021</span>
        <ul className={"job-list"}>
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
