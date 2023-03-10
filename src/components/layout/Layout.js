import { Fragment } from "react";

import Header from "./Header";
import Footer from "./Footer";
import Hamburger from "../UI/Hamburger";

const Layout = (props) => {
  return (
    <Fragment>
      <Header />
      {props.children}
      <Hamburger />
      <Footer />
    </Fragment>
  );
};

export default Layout;
