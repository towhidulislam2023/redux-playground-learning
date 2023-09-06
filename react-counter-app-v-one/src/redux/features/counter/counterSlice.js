import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },
    decrement: (state) => {
      state.count = state.count - 1;
    },
    incrementByvalue:(state,actions) =>{
    state.count = state.count + actions.payload;
    },
    decrementByvalue:(state,actions) =>{
    state.count = state.count - actions.payload;
    },
  },
});
export const { increment, decrement,incrementByvalue,decrementByvalue } = counterSlice.actions;

export default counterSlice.reducer;
