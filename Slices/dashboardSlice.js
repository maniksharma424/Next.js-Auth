import { createSlice } from "@reduxjs/toolkit";

const dashboardSlice = createSlice({
  name: "dashboardSlice",
  initialState: {
    opacity: false,

  },
  reducers: {
    changeOpacity: (state) => {
      state.opacity = true
    },
    defaultOpacity:(state)=>{
        state.opacity =false
    }
    
  },
});
export default dashboardSlice.reducer;
export const { changeOpacity ,defaultOpacity} = dashboardSlice.actions;