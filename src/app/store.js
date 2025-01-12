import { configureStore } from "@reduxjs/toolkit";
import MoveItemSliceReducer from "../features/counter/CounterSlice";


export const store = configureStore({
  reducer: {
    counter: MoveItemSliceReducer,
  },
});
