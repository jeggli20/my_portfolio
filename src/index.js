import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { LightContextProvider } from "./store/light-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <LightContextProvider>
      <App />
    </LightContextProvider>
  </StrictMode>
);
