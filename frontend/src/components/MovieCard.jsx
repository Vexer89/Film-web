import React from "react";
import "./MovieCard.css";

function MovieCard({ movie }) {
  const onFavouriteMovie = () => {
    alert(`You have favourited ${movie.title}`);
  };
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={movie.url} alt={movie.title} />
        <div className="movie-overlay">
          <button className="movie-favourite" onClick={onFavouriteMovie}>
            ♥
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h2 className="movie-title">{movie.title}</h2>
        <p className="movie-date">{movie.date}</p>
      </div>
    </div>
  );
}

export default MovieCard;
