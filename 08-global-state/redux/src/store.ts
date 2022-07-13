import { configureStore } from "@reduxjs/toolkit";
import {counterSlice} from "./counterSlice";
import {TypedUseSelectorHook, useSelector as rawUseSelector} from "react-redux";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer
  },
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>
export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector;