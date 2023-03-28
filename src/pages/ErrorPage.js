import { useRouteError } from "react-router-dom";

import logo from "../img/logo.png";

import "./ErrorPage.css";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      className={`error ${
        localStorage.getItem("isDark") === null ? "light-mode" : "dark-mode"
      }`}
    >
      <img src={logo} alt="Logo" />
      <h6>Oops!</h6>
      <p>An unexpected error has occurred</p>
      <i>{error.statusText || error.message}</i>
    </div>
  );
};

export default ErrorPage;
