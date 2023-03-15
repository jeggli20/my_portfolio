import classes from "./WorkExperience.module.css";

const WorkExperience = () => {
  return (
    <section>
      <h3>Work Experience</h3>
      <div className={classes["work-tabs"]}>
        <button>GEM Buildings</button>
        <button>Bridgerland Tech</button>
        <button>GEM Buildings</button>
      </div>
    </section>
  );
};

export default WorkExperience;
