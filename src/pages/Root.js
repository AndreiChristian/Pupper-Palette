import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/Navigation/NavBar";
import classes from "./Root.module.css";
import MobileNavigation from "../components/MobileNavigation/mobileNavigation";
import MobileHeader from "../components/MobileHeader/MobileHeader";

const Root = () => {
  const light = useSelector((state) => state.light.light);
  return (
    <div className={light === "night" ? classes.root_night : classes.root_day}>
      {/* { window.innerWidth <500 && <MobileHeader /> } */}
      {window.innerWidth < 500 && <MobileNavigation />}
      {window.innerWidth > 500 && <NavBar />}
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
