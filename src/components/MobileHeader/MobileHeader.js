import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./MobileHeader.module.css";

const MobileHeader = () => {
  const navigate = useNavigate();
  return (
    <div className={classes.container} onClick={() => navigate("")}>
      <div className={classes.title}>
        <div className={classes.pupper}>
          <div className={classes.one}>P</div>
          <div className={classes.two}>U</div>
          <div className={classes.three}>P</div>
          <div className={classes.four}>P</div>
          <div className={classes.five}>E</div>
          <div className={classes.six}>R</div>
        </div>
        <div className={classes.palette}>Palette</div>
      </div>
    </div>
  );
};

export default MobileHeader;
