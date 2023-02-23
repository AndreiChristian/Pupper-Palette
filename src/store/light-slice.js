import { createSlice } from "@reduxjs/toolkit";

const lightSlice = createSlice({
    name: 'light',
    initialState: {light: "night"},
    reducers: {
        toggleToNight(state){
            state.light = "night"
        },
        toggleToDay(state){
            state.light = "day"
        }

    }
})

export const lightTogglers = lightSlice.actions;
export default lightSlice;