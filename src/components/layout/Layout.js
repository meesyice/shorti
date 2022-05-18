import { BrowserView, MobileView } from "react-device-detect";
import { useState } from "react";

import Toolbar from "../mobile/Toolbar/Toolbar";
import Backdrop from "../mobile/Backdrop/Backdrop";
import SideDrawer from "../mobile/SideDrawer/SideDrawer";
import MainNavigation from "./MainNavigation";
import Footer from "./Footer";
import classes from "./Layout.module.css";

function MainLayout(props) {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
  const [backdropOpen, setBackdropOpen] = useState(false);

  function drawerToggelClickHandler() {
    setBackdropOpen(!backdropOpen);
    setSideDrawerOpen(!sideDrawerOpen);
  }

  function backdropClickHandler() {
    setBackdropOpen(false);
    setSideDrawerOpen(false);
  }

  return (
    <>
      <BrowserView>
        <div>
          <MainNavigation />
          <main className={classes.main}>
            {props.children}
          </main>
          <Footer />
        </div>
      </BrowserView>
      <MobileView>
        <div style={{ height: "100%" }}>
          <Toolbar drawerClickHandler={drawerToggelClickHandler} />
          <SideDrawer show={sideDrawerOpen} />
          {backdropOpen && <Backdrop click={backdropClickHandler} />}
          <main className={classes.main} style={{ marginTop: "64px" }}>
            {props.children}
          </main>
          <Footer />
        </div>
      </MobileView>
    </>
  );
}

export default MainLayout;
