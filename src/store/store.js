import { configureStore } from "@reduxjs/toolkit";
import movieoReducer from "./movieSlice";

export const store = configureStore({
  reducer: {
    movieoData: movieoReducer,
  },
});
