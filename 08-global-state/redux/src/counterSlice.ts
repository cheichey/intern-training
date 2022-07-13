import {createSlice} from "@reduxjs/toolkit";

export const counterSlice = createSlice(
  {
    name: 'counter',
    initialState: {
      count: 0,
    },
    reducers: {
      add: (state) => {
        state.count += 1;
      },
      sub: (state) => {
        state.count -= 1;
      }
    }
  }
)

export const {add, sub} = counterSlice.actions;
export default counterSlice.reducer;