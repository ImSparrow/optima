import React from "react";
import classes from "./MainHeader.module.css";
const MainHeader = (props) => {
  return (
    <header className={classes.mainheader} role="navigation">
      {props.children}
    </header>
  );
};

export default MainHeader;
