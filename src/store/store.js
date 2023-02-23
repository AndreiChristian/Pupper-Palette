import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import lightSlice from "./light-slice";

const store = configureStore({
    reducer:{
        cart: cartSlice.reducer,
        light: lightSlice.reducer
    }
})

export default store;