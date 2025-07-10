import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value:
    localStorage.getItem("count") && JSON.parse(localStorage.getItem("count")),
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
      localStorage.setItem("count", JSON.stringify(state.value));
    },
    decrement: (state) => {
      state.value -= 1;
      localStorage.setItem("count", JSON.stringify(state.value));
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
