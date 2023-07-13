import { configureStore } from "@reduxjs/toolkit";
import dashboardSlice from "./Slices/dashboardSlice.js";

const store = configureStore({
    reducer:{
        dashboardSlice:dashboardSlice,
    }
})
export default store