import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { cartActions } from "../store/cart-slice";
import classes from "./ProductItem.module.css";
import StarsSvg from "./Stars/StarsSvg";

const ProductItem = ({ item }) => {
  const [isLiked, setIsLiked] = useState(false);
  // const cart = useSelector((state) => state.cart.items);
  // const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  // const totalPrice= useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();
  const cartActionHandler = cartActions;
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.items);
  const displayedItem = cartItems.find((cartItem) => cartItem.id === item.id);
  let liked = false;
  if (displayedItem) {
    liked = displayedItem.liked;
  }

  // console.log(liked);

  const addToCartHandler = () => {
    dispatch(cartActionHandler.addToCart(item));
  };

  const removeItemFromCartHandler = () => {
    dispatch(cartActionHandler.removeItemFromCart(item));
  };

  const addToWishlistHandler = () => {
    dispatch(cartActionHandler.addToWishlist(item));
    // console.log(item.liked);
  };

  return (
    <div className={classes.stars_container}>
      {/* <StarsSvg /> */}
      <div className={classes.container}>
        <Link to={`${item.id}`} preventScrollReset={true} >
          <img
            src={`/assets/images/${item.style}/${item.dogId}.png`}
            alt=""
            onClick={() => navigate(item.id)}
          />
        </Link>
        <div onClick={() => navigate(item.id)}>{item.title.toUpperCase()}</div>
        <div onClick={() => navigate(item.id)}> {item.description} </div>
        <div onClick={() => navigate(item.id)}>{item.price} Pup Coins</div>

        <div className={classes.actions}>
          {/* heart jsx*/}
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
            onClick={addToCartHandler}
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
  );
};

export default ProductItem;
