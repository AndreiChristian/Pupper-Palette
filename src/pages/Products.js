import React, { useState } from "react";
import dummyData from "../store/dummy-data";
import NewArt from "./NewArt/NewArt";
import ProductCategory from "./ProductCategory";
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = () => {
  let styles = ["medieval", "modern", "stars", "cyberpunk"];
  const [selectedStyle, setSelectedStyle] = useState("");

  if (selectedStyle) {
    styles = [selectedStyle];
  }

  return (
    <div className={classes.container}>
      <div className={classes.title}>
        A FINE SELECTION OF EXQUISITE PUPPER ART
      </div>
      <div className={classes.categories}>
        <div className={ selectedStyle === "" ? classes.selected : classes.category} onClick={() => {
          setSelectedStyle("")
          }}>
          ALL
        </div>
        <div
          className={selectedStyle === "medieval" ? classes.selected : classes.category}
          onClick={() => setSelectedStyle("medieval")}
        >
          MEDIEVAL
        </div>
        <div
          className={selectedStyle === "modern" ? classes.selected : classes.category}
          onClick={() => setSelectedStyle("modern")}
        >
          MODERN
        </div>
        <div
          className={selectedStyle === "stars" ? classes.selected : classes.category}
          onClick={() => setSelectedStyle("stars")}
        >
          STARS
        </div>
        <div
          className={selectedStyle === "cyberpunk" ? classes.selected : classes.category}
          onClick={() => setSelectedStyle("cyberpunk")}
        >
          CYBERPUNK
        </div>
      </div>

      <div className={classes.products}>
        {styles.map((style) => {
          return <ProductCategory key={style} style={style} />;
        })}
      </div>
      <NewArt />
    </div>
  );
};

export default Products;
