import { createSlice } from "@reduxjs/toolkit";

const citySlice = createSlice({
  name: "city",
  initialState: "Cairo",
  reducers: {
    setCity: (state, action) => {
      return action.payload;
    },
  },
});
export const { setCity } = citySlice.actions;
export default citySlice.reducer;
