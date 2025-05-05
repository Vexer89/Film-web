import React from "react";
import "../style/MovieCard.css";
import { useMovieContext } from "../context/MovieContext";

function MovieCard({ movie }) {
  const { addMovieToFavorites, removeMovieFromFavorites, isMovieInFavorites } =
    useMovieContext();
  const isFavourite = isMovieInFavorites(movie.id);

  const onFavouriteMovie = (e) => {
    e.preventDefault();
    if (isFavourite) {
      removeMovieFromFavorites(movie.id);
    } else {
      addMovieToFavorites(movie);
    }
  };

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-overlay">
          <button
            className={`movie-favourite-btn ${isFavourite ? "active" : ""}`}
            onClick={onFavouriteMovie}
          >
            ♥
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h2 className="movie-title">{movie.title}</h2>
        <p className="movie-date">{movie.release_date?.split("-")[0]}</p>
      </div>
    </div>
  );
}

export default MovieCard;
