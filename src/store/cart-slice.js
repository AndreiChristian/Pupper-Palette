import { createSlice } from "@reduxjs/toolkit";
import dummyData from "./dummy-data";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: dummyData,
        totalQuantity: 0,
        totalPrice: 0,
        isAnyItemLiked: 0,
    },
    reducers: {
        addToCart(state,action){
            const id = action.payload.id;
            const existingItem = state.items.find( item => item.id === id )
            // console.log(existingItem)
            if (existingItem){
                state.totalPrice += existingItem.price;
                existingItem.quantity ++;
            } else {
                state.items.push( action.payload )
                state.totalPrice = action.payload.price;
            }
            state.totalQuantity ++;
        },
        removeItemFromCart(state,action){
            const id = action.payload.id;
            const existingItem = state.items.find( item => item.id === id )
            // console.log(existingItem)
            if(existingItem.quantity === 1){
                state.items = state.items.filter( item => item.id !== id)
            } else {
                existingItem.quantity --;
            }
            state.totalQuantity --;
            state.totalPrice -= existingItem.price;
        }
        ,removeItemComplitely(state, action){
            const id = action.payload.id;
            const existingItem = state.items.find( item => item.id === id )
            state.items = state.items.filter( item => item.id !== id)
            state.totalQuantity -= existingItem.quantity;
            state.totalPrice -= existingItem.price * existingItem.quantity;
            existingItem.quantity = 0;
            console.log('i am being called and the actual number status is', existingItem.totalQuantity)
        },
        addToWishlist(state,action){
            const id = action.payload.id;
            const existingItem = state.items.find( item => item.id === id )
            existingItem.liked = !existingItem.liked;
            if (existingItem.liked === true){
                state.isAnyItemLiked ++;
            } else {
                state.isAnyItemLiked --;
            }
        }
    }
})

export const cartActions = cartSlice.actions;
export default cartSlice;