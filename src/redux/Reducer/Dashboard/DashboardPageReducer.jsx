import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeStep: 0,
};

let displayPageSlice = createSlice({
  name: "dashboard",
  initialState: initialState,
  reducers: {
    setActiveStep: function (state, action) {
      state.activeStep = action.payload;
    },
  },
});
export const { setActiveStep } = displayPageSlice.actions;
export default displayPageSlice.reducer;
