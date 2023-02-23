import React from "react";
import classes from "./NewArtCategory.module.css";
import newDummyDataCubist from "../../store/cubist-dummy-data";
import newDummyDataNeon from "../../store/neon-dummy-data";

const NewArtCategory = ({ style }) => {

    let data;
    if( style === "neon" ){
        data = newDummyDataNeon;
    } else {
        data = newDummyDataCubist;
    }

  return (
    <div className={classes.container}>
        <div className={classes.title} > {style.toUpperCase()} </div>
        <div className={ classes.layout } >
      {data.map((item) => {
        return (
          <div key={item.id} className={classes.content} >
            <img
              className={classes.img}
              src={`/assets/images/${style}/${item.dogId}.png`}
              alt=""
            />
              <div className={classes.soon}>SOON</div>
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default NewArtCategory;
