import React, { createContext, useContext, useState, useEffect } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [movieList, setMovieList] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  const fetchMovies = (query = "") => {
    const url = query
      ? `https://api.themoviedb.org/3/search/movie?api_key=bf77ef076c3282380ddf14fe21aaffb5&query=${query.toLowerCase()}`
      : "https://api.themoviedb.org/3/discover/movie?api_key=bf77ef076c3282380ddf14fe21aaffb5";

    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setMovieList(json.results);
        setFilteredMovies(json.results); // Initially show all movies
        console.log("Fetched movies as array:", json.results);
      })
      .catch((error) => console.error("Error fetching movies:", error));
  };

  useEffect(() => {
    fetchMovies(); // Fetch movies initially
  }, []);

  const filterMovies = (filter) => {
    if (filter === "old") {
      setFilteredMovies(
        movieList.filter(
          (movie) => new Date(movie.release_date).getFullYear() < 2020
        )
      );
    } else if (filter === "new") {
      setFilteredMovies(
        movieList.filter(
          (movie) => new Date(movie.release_date).getFullYear() >= 2020
        )
      );
    } else {
      setFilteredMovies(movieList); // Reset to all movies
    }
  };

  return (
    <MovieContext.Provider
      value={{ movieList, filteredMovies, fetchMovies, filterMovies }}
    >
      {children}
    </MovieContext.Provider>
  );
};
