// Video - https://youtu.be/b9eMGE7QtTk?t=3844
// API key - 9caba31
// API source - http://www.omdbapi.com/
import React, { useEffect, useState } from "react";
import { MagnifyingGlass } from "@phosphor-icons/react";
import "./App.css";
import MovieCard from "./MovieCard";
const API_URL = "http://www.omdbapi.com/?apikey=9caba31&";
const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const searchMovies = async (title) => {
    const responce = await fetch(`${API_URL}&s=${title}`);
    const data = await responce.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Thor");
  }, []);
  return (
    <div className="app">
      <h1>MovieWorld</h1>
      <div className="search">
        <input
          placeholder="Search here"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <MagnifyingGlass
          size={28}
          color="white"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>Nothing Found☹️</h2>
        </div>
      )}
    </div>
  );
};

export default App;
