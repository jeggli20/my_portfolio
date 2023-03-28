import "./Button.css";

const Button = (props) => {
  return (
    <button
      id={props.id}
      className={`${props.className} btn`}
      onClick={props.onClick}
      type={props.type || "button"}
    >
      {props.children}
    </button>
  );
};

export default Button;
