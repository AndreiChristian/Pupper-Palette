import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { lightTogglers } from "../../store/light-slice";
import classes from "./NavBar.module.css";

const NavBar = () => {
  const [showNav, setShowNav] = useState(false);
  const showNavToggler = () => {
    setShowNav((prev) => !prev);
  };

  const dispatch = useDispatch();
  const lightActions = lightTogglers;
  const light = useSelector((state) => state.light.light);

  const toggleToDayHandler = () => {
    dispatch(lightActions.toggleToDay());
  };

  const toggleToNightHandler = () => {
    dispatch(lightActions.toggleToNight());
  };

  console.log(light);

  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  // const totalPrice = useSelector((state) => state.cart.totalPrice);
  return (
    <div className={classes.navigation}>



      <div className={classes.title}>
        <div className={classes.pupper}>
          <div className={classes.one}>P</div>
          <div className={classes.two}>U</div>
          <div className={classes.three}>P</div>
          <div className={classes.four}>P</div>
          <div className={classes.five}>E</div>
          <div className={classes.six}>R</div>
        </div>
        <div className={classes.palette}>
          Palette
        </div>
      </div>



      

      {/* the container that takes all links and the svgs for this */}
      <div className={classes.stateContainer}>
        {showNav && (
          <div className={classes.container}>
            {/* day mode and night mode */}
            <div className={classes.lightSwitcher}>
              {light === "day" ? (
                <svg
                  id="day_svg"
                  onClick={toggleToNightHandler}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`w-6 h-6 ${classes.day_svg}`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  />
                </svg>
              ) : (
                <svg
                  id="night_svg"
                  onClick={toggleToDayHandler}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`w-6 h-6 ${classes.night_svg}`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                  />
                </svg>
              )}
            </div>

            {/* the link to home */}

            <NavLink
              className={({ isActive }) =>
                isActive ? classes.active : classes.link
              }
              to={""}
            >
              Home
            </NavLink>

            {/* the link to art */}

            <NavLink
              className={({ isActive }) =>
                isActive ? classes.active : classes.link
              }
              to={"art"}
            >
              Art
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? classes.active : classes.link
              }
              to={"404"}
            >
              About Us
            </NavLink>

            {/* heart svg, a link to the wishlist  */}
            <div className={classes.wishlist}>
              <NavLink
                id="heart"
                className={({ isActive }) =>
                  isActive ? classes.active_heart : classes.heart
                }
                to="wishlist"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`w-6 h-6 ${classes.heart_svg}`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </NavLink>
            </div>

            {/* cart item */}

            <NavLink
              className={({ isActive }) =>
                isActive ? classes.active : classes.link
              }
              to={"cart"}
            >
              <div className={classes.cartButton}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
                {"  "}
                {totalQuantity > 0 && totalQuantity}
              </div>
            </NavLink>
          </div>
        )}

        {/* arrow svg for toggling the display of the show nav */}
        <div className={ showNav? classes.arrow : classes.arrow_reverse }>
          <svg
            onClick={showNavToggler}
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
              d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
