import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies } from "../../features/movies/MovieSlice";
import { getAllShows } from "../../features/movies/MovieSlice";
import MovieCard from "../MovieCard/MovieCard";
const MoviesList = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);

  let renderMovies,
    renderShows = "";

  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
    );
  renderShows =
    shows.Response === "True" ? (
      shows.Search.map((show, index) => <MovieCard key={index} data={show} />)
    ) : (
      <div className="movies-error">
        <h3>{shows.Error}</h3>
      </div>
    );

  return (
    <div className="movie-wrapper">
      <div className="movie-list"></div>
      <div className="movie-container">{renderMovies}</div>
      <div className="movie-list"></div>
      <div className="movie-container">{renderShows}</div>
    </div>
  );
};

export default MoviesList;
