import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { APIKey } from "../../common/apis/movieApiKey.js";
import movieApi from "../../common/apis/movieApi.js";
import { useDispatch } from "react-redux";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const movieText = "marvel";
    const response = await movieApi
      .get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
      .catch((err) => console.log(err));
    return response.data;
  }
);

export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async () => {
    const seriesText = "tom and jerry";
    const response = await movieApi
      .get(`?apiKey=${APIKey}&s=${seriesText}&type=series`)
      .catch((err) => console.log(err));
    return response.data;
  }
);

const initialState = {
  movies: {},
  shows: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
  },

  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("DONEE");
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("Rejected");
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log("DONEE");
      return { ...state, shows: payload };
    },
  },
});

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;

export default movieSlice.reducer;
