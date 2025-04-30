import React from "react";
import MovieCard from "../components/MovieCard";
import { useState } from "react";

function Home() {
  const movies = [
    { id: 1, title: "Movie 1", description: "Description 1" },
    { id: 2, title: "Movie 2", description: "Description 2" },
    { id: 3, title: "Movie 3", description: "Description 3" },
    { id: 4, title: "Movie 4", description: "Description 4" },
    { id: 5, title: "Movie 5", description: "Description 5" },
  ];
  return (
    <div className="home-page">
      <form className="search-form">
        <input
          type="text"
          placeholder="Search for a movie..."
          classNam="search-form"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="movies-list">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Home;
