import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import MovieCard from "./components/MovieCard";
import Home from "./pages/Home";
import Favourites from "./pages/Favourites";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./style/App.css";
import { MovieProvider } from "./context/MovieContext";

function App() {
  return (
    <>
      <MovieProvider>
        <NavBar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favourites" element={<Favourites />} />
          </Routes>
        </main>
      </MovieProvider>
    </>
  );
}

export default App;
