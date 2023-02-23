import React from "react";
import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const cartActionHandler = cartActions;

  const addToCartHandler = () => {
    dispatch(cartActionHandler.addToCart(props.cartItem));
  };

  const removeItemFromCartHandler = () => {
    dispatch(cartActionHandler.removeItemFromCart(props.cartItem));
  };

  const removeItemComplitelyHandler = () => {
    dispatch(cartActionHandler.removeItemComplitely(props.cartItem))
  }
  return (
    <div className={classes.item}>
      <img src={`/assets/images/${props.cartItem.style}/${props.cartItem.dogId}.png`} alt="" />
      <div className={classes.title}>{props.cartItem.title}</div>
      <div className={classes.modify}>
        <svg
          // className={classes.chevronDown}
          onClick={removeItemFromCartHandler}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`w-6 h-6 ${classes.chevronDown}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
        <div className={classes.quantity}>{props.cartItem.quantity}</div>
        <svg
          // className={classes.chevronUp}
          xmlns="http://www.w3.org/2000/svg"
          onClick={addToCartHandler}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`w-6 h-6 ${classes.chevronUp}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 15.75l7.5-7.5 7.5 7.5"
          />
        </svg>
      </div>
      <div className={classes.amount}>
        <div className={classes.amount_child}>x</div>
        <div className={classes.amount_child}>{props.cartItem.quantity}</div>
        <div className={classes.amount_child}>=</div>
        <div className={classes.total_price}>{props.cartItem.quantity * props.cartItem.price}</div>
      </div>
      {/* trash icon */}
      <svg
      onClick={removeItemComplitelyHandler}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={`w-6 h-6 ${classes.trash}`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
        />
      </svg>
    </div>
  );
};

export default CartItem;
