import profile from "../../img/profile.jpg";
import "./About.css";

const About = () => {
  return (
    <section id="about" className={"about-section"}>
      <div className="profile-title">
        <div className={"profile-border"}>
          <img className={"profile"} src={profile} alt="Me!" />
        </div>
        <div className={"about-title"}>
          <h1>Jacob Eggli</h1>
          <h2>Web Developer</h2>
        </div>
      </div>
      <p className="about-text">
        I am an aspiring Front-End Developer with prior interning experience and
        in-depth customer service skills. Currently I am a student at
        Bridgerland Technical College studying Web and Mobile Development. My
        initial interest in web development stemmed from learning and
        experimenting with HTML and CSS. Now my love and understanding for web
        development have grown and I strive to continue to increase my skills
        through daily work and practice.
      </p>
    </section>
  );
};

export default About;
