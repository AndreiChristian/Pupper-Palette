import React from "react";
import classes from "./NewArt.module.css";
import NewArtCategory from "./NewArtCategory";

const newArt = ["cubist", "neon"];

const NewArt = () => {
  return (
    <div className={classes.container}>
      <div className={classes.header}>NEXT IN LINE</div>
      
      {newArt.map((item) => {
        return <NewArtCategory key={item} style={item} />;
      })}
      <div className={classes.title}>
        <div className={classes.text}>
          {" "}
          YEA, WE KNOW IT'S BLURRY, THAT'S BECAUSE IT IS NOT FINISHED YET.
        </div>
        <div className={classes.text}>
          {" "}
          BUT ... YOU CAN STILL HOVER OR CLICK TO GET A SNEEK PEAK.
        </div>
      </div>
    </div>
  );
};

export default NewArt;
