import classes from "./About.module.css";

const About = () => {
  return (
    <section>
      <div>
        <img src="" alt="Me!" />
      </div>
      <div className={classes["about-text"]}>
        <h1>Jacob Eggli</h1>
        <h2>Web Developer</h2>
        <p>Some Description</p>
      </div>
    </section>
  );
};

export default About;
