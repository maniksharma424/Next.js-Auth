import { configureStore } from "@reduxjs/toolkit";
import dashboardSlice from "./slices/dashboardSlice.js";

const store = configureStore({
    reducer:{
        dashboardSlice:dashboardSlice,
    }
})
export default store