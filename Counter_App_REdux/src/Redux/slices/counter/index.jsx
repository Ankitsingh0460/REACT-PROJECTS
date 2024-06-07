import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  initialState: 1,
  name: "counter",
  reducers: {
    increment: (store) => store + 1,
    decrement: (store) => store - 1,
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
