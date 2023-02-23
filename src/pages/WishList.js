import React from "react";
import ProductItem from "./ProductItem";
import classes from "./WishList.module.css";
import dummyData from "../store/dummy-data";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const WishList = () => {
  const items = useSelector((state) => state.cart.items);
  const isAnyItemLiked = useSelector((state) => state.cart.isAnyItemLiked);

  
  return (
    <>
      {isAnyItemLiked ? (
        <div className={classes.container}>
          <div className={classes.title}> Some art that has your heart </div>
          <div className={classes.items}>
            {items.map((item) => {
              if (item.liked === true) {
                return (
                  <div key={item.id}>
                    {
                      <>
                        <ProductItem item={item} />
                      </>
                    }
                  </div>
                );
              }
            })}
          </div>
        </div>
      ) : (
        <div className={classes.no_item}>
          <img src="/assets/images/majestic/majestic_berna.png" alt="" />
          <div className={classes.content}>
            <div className={classes.text} > Hey, you didn't like any pupper? </div>
            <div className={classes.text}>The puppers won't be happy!</div>
            <div className={classes.text}>Check these out!</div>
            <Link className={classes.link} to={'/art'} > Art </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default WishList;
