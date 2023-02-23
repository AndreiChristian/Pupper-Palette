import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import NoItem from "./NoItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  if (totalQuantity === 0) {
    return (
      <NoItem />
    )
  }
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <div>Some art ready to come home with you</div>
      </div>
      <div className={classes.cart}>
        {cartItems.map((cartItem) => {
          if (cartItem.quantity > 0) {
            return <CartItem key={cartItem.id} cartItem={cartItem} />;
          }
        })}
      </div>
      <div className={classes.footer}>
        {/* <div></div> */}
        <div  >{totalQuantity} Products</div>
        <div className={classes.middle_child} >{totalPrice} Pupper Coins </div>
        <Link className={classes.link} to={'/forms'}>TAKE'EM HOME</Link>
      </div>
    </div>
  );
};

export default Cart;
