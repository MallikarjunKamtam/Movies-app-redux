import React, { useEffect } from "react";
import MovieList from "../MoviesList/MoviesList.js";

import { useDispatch } from "react-redux";

import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/MovieSlice.js";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncMovies());
    dispatch(fetchAsyncShows());
  }, [dispatch]);

  return (
    <div>
      <div className="banner"></div>
      <MovieList />
    </div>
  );
};

export default Home;
