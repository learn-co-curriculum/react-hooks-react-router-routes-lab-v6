import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/movies")
      .then((res) => res.json())
      .then(setMovies);
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home Page</h1>
        <div>
          {movies.map((movie) => (
            <div key={movie.id}>
              <MovieCard movie={movie} />
              <a href={`/movie/${movie.id}`}>View Info</a>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default Home;