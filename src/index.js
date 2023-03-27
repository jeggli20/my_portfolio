import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LightContextProvider } from "./store/light-context";

import App from "./App";
import ErrorPage from "./pages/ErrorPage";
import ProjectPage from "./pages/ProjectPage";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "projects",
        element: <ProjectPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <LightContextProvider>
      <RouterProvider router={router} />
    </LightContextProvider>
  </StrictMode>
);
