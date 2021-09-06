import { configureStore } from "@reduxjs/toolkit";
import movieReucer from "../fetures/movieSlice";

export const store = configureStore({
  reducer: {
    movie: movieReucer,
  },
});
