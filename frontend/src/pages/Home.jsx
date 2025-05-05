import React from "react";
import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import "../style/Home.css";
import { searchMovies, getMovies } from "../services/api";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const Movies = await getMovies();
        setMovies(Movies);
      } catch (error) {
        setError("Failed to fetch movies. Please try again later.");
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
    };
    loadMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;
    if (loading) return;
    setLoading(true);

    try {
      const searchResults = await searchMovies(searchTerm);
      setMovies(searchResults);
      setError(null);
    } catch (error) {
      setError("Failed to fetch movies. Please try again later.");
      console.error("Error fetching movies:", error);
    } finally {
      setLoading(false);
    }

    setSearchTerm("");
  };

  return (
    <div className="home-page">
      <form className="search-form">
        <input
          type="text"
          placeholder="Search for a movie..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          type="submit"
          className="search-button"
          onClick={(e) => handleSearch(e)}
        >
          Search
        </button>
      </form>

      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="movies-list">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
