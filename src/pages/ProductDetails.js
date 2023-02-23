import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import classes from "./ProductDetails.module.css";
import { cartActions } from "../store/cart-slice";
import NewArt from "./NewArt/NewArt";

const ProductDetails = () => {
  const cartActionHandler = cartActions;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const items = useSelector((state) => state.cart.items);
  const displayItem = items.find((item) => item.id === params.id);
  const liked = displayItem.liked;
  // console.log(liked);

  let sameStyleItems = items.filter((item) => item.style === displayItem.style);
  sameStyleItems = sameStyleItems.filter((item) => item.id !== params.id);

  let sameDogItems = items.filter((item) => item.dogId === displayItem.dogId);
  sameDogItems = sameDogItems.filter((item) => item.id !== params.id);

  const addToWishlistHandler = () => {
    dispatch(cartActionHandler.addToWishlist(displayItem));
    // console.log(item.liked);
  };

  const addToCartHandler = () => {
    dispatch(cartActionHandler.addToCart(displayItem))
  }

  {
    console.log(displayItem);
  }
  return (
    <div className={classes.container}>
      <div className={classes.title}>
        {" "}
        {displayItem.style} {displayItem.title}{" "}
      </div>

      <div className={classes.item}>
        <img
          src={`/assets/images/${displayItem.style}/${displayItem.dogId}.png`}
          alt=""
        />
        <div className={classes.info}>
          <div>"{displayItem.description}"</div>
          <div> {displayItem.price} Pup Coins </div>
          <div className={classes.actions}>
            {/* love svg */}
            <svg
              onClick={addToWishlistHandler}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`w-6 h-6 ${liked === true && classes.liked_item}`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>

            {/* bag svg */}
            <svg
              onClick={ addToCartHandler }
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
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>

          </div>
        </div>
      </div>
      {/* displaying the other items in the same syle */}
      <div className={classes.dogs}>
        <div className={classes.extra}>
          OTHER {displayItem.style.toUpperCase()} ART
        </div>
        <div className={classes.dogs_img}>
          {sameStyleItems.map((item) => {
            return (
              <img
                className={classes.dogs}
                key={item.id}
                src={`/assets/images/${item.style}/${item.dogId}.png`}
                alt=""
                onClick={() => navigate(`/art/${item.id}`)}
              />
            );
          })}
        </div>
      </div>
      {/* displaying the other styles of the same dog */}
      <div className={classes.dogs}>
        <div className={classes.extra}>
          OTHER {displayItem.dogId.toUpperCase()} ART
        </div>
        <div className={classes.dogs_img}>
          {sameDogItems.map((item) => {
            console.log(item.dogId);
            return (
              <img
                key={item.id}
                className={classes.dogs_img}
                src={`/assets/images/${item.style}/${item.dogId}.png`}
                alt=""
                onClick={() => navigate(`/art/${item.id}`)}
              />
            );
          })}
        </div>
      </div>
      <div className={classes.new}>
        <NewArt />
      </div>
    </div>
  );
};

export default ProductDetails;
