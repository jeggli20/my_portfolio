import { useContext } from "react";
import { Outlet } from "react-router-dom";
import LightContext from "./store/light-context";

import { NavContextProvider } from "./store/nav-context";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hamburger from "./components/UI/Hamburger";

import "./App.css";
import "./global.css";

const App = () => {
  const lightCtx = useContext(LightContext);

  return (
    <div className={`${lightCtx.isDark ? "dark-mode" : "light-mode"}`}>
      <NavContextProvider>
        <Header />
        <main>
          <Outlet />
          <Hamburger />
        </main>
        <Footer />
      </NavContextProvider>
    </div>
  );
};

export default App;
