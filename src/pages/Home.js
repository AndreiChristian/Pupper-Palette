import React from "react";
import { Link } from "react-router-dom";
import classes from "./Home.module.css";
import { useSelector } from "react-redux";

const Home = () => {
  const light = useSelector((state) => state.light.light);
  return (
    <div
      className={
        light === "night" ? classes.container_night : classes.container_day
      }
    >
      {/* {console.log(`container_night vs container_${light}`)} */}
      <img
        className={classes.img}
        src={light === "night" ? "/images/no.png" : "/images/DAY.png"}
        alt="a beagle"
      />
      <div className={classes.content}>
        <div className={classes.title}>Pupper Palette</div>
        <div> In frames that'll make your eyes pop, </div>
        <div> We've got art of dogs that'll make you hop! </div>
        <div> From bulldogs to labradors, big and small, </div>
        <div> We've got them all! </div>
        {console.log(window.innerHeight, window.innerWidth)}
        <Link className={classes.link} to={"art"}>
          View our art
        </Link>
      </div>
    </div>
  );
};

export default Home;
