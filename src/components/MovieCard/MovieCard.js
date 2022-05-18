import React from "react";
import "./MovieCard.scss";
import { Link } from "react-router-dom";

const MovieCard = ({ data }) => {
  const { Title, Poster } = data;
  return (
    <div>
      <Link to={`/movie/${data.imdbID}`}>
        <div className="movies-container">
          <img className="poster-img" src={Poster} alt="Poster" />
          <h4 className="title">{Title}</h4>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
