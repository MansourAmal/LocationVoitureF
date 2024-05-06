import React, { Fragment } from "react";

import Header from "./header";
import Footer from "./footer";
import Routers from "./routers";

const Layout = () => {
  return (
    <Fragment>
      <Header />
      <div>
        <Routers />
      </div>
      <Footer />
    </Fragment>
  );
};

export default Layout;