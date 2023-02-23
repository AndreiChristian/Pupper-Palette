import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import classes from "./ErrorElement.module.css";

const ErrorElement = () => {
  const light = useSelector((state) => state.light.light);

  return (
    <div
      className={
        light === "night" ? classes.container_night : classes.container_day
      }
    >
      <img
        className={classes.errorImage}
        src={
          light !== "night"
            ? "/assets/images/majestic/german.png"
            : "/assets/images/majestic/samoyed.png"
        }
        alt="dog"
      />
      <div className={classes.content}>
        <div>Hello ... Is it me you are looking for? </div>
        {/* <div>How about these?</div> */}
        <Link className={classes.link} to={"art"}>
          ART{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ErrorElement;
