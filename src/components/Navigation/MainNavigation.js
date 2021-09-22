import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import classes from "./MainNavigation.module.css";
import Search from "../Search/Search";
import SideDrawer from "../SideDrawer/SideDrawer";
import { useState } from "react";
import Backdrop from "../UI/Backdrop";
const MainNavigation = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const openDrawer = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawer = () => {
    setDrawerIsOpen(false);
  };
  return (
    <>
      {drawerIsOpen && <Backdrop onClick={closeDrawer}></Backdrop>}
      <SideDrawer show={drawerIsOpen} onClick={closeDrawer}>
        <nav className={classes["drawer-nav"]} role="navigation">
          <NavLinks></NavLinks>
        </nav>
      </SideDrawer>
      <MainHeader>
        <button
          className={classes.menubtn}
          onClick={openDrawer}
          role="navigation"
          aria-label="Main"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className={classes.headerNav}>
          <NavLinks></NavLinks>
        </nav>
        <Search></Search>
      </MainHeader>
    </>
  );
};

export default MainNavigation;
