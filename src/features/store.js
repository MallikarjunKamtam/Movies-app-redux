import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movies/MovieSlice";

const store = configureStore({
  reducer: {
    movies: movieReducer,
  },
});

export default store;
