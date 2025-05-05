import { createContext, useState, useContext, useEffect } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [favouriteMovies, setFavoriteMovies] = useState([]);

  useEffect(() => {
    const storedMovies = localStorage.getItem("favouriteMovies");
    if (storedMovies) {
      setFavoriteMovies(JSON.parse(storedMovies));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favouriteMovies", JSON.stringify(favouriteMovies));
  }, [favouriteMovies]);

  const addMovieToFavorites = (movie) => {
    setFavoriteMovies((prevMovies) => [...prevMovies, movie]);
  };

  const removeMovieFromFavorites = (movieId) => {
    setFavoriteMovies((prevMovies) =>
      prevMovies.filter((movie) => movie.id !== movieId)
    );
  };

  const isMovieInFavorites = (movieId) => {
    return favouriteMovies.some((movie) => movie.id === movieId);
  };

  const value = {
    favouriteMovies,
    addMovieToFavorites,
    removeMovieFromFavorites,
    isMovieInFavorites,
  };

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};
