import "./Button.css";

const Button = (props) => {
  return (
    <button id={props.id} className={"btn"} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
