import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      id={props.id}
      className={`${props.className} ${classes.btn}`}
      onClick={props.onClick}
      type={props.type || "button"}
    >
      {props.children}
    </button>
  );
};

export default Button;
