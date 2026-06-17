import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";

function Home() {
  const [isMovies, setIsMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/movies")
      .then((res) => res.json())
      .then((movies) => setIsMovies(movies))
      .catch((error) => console.error(error));
  }, []);

  const moviesList = isMovies.map((movie) => {
    return <MovieCard key={movie.id} movie={movie} />;
  });

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home Page</h1>
        <ul className="movies-list">{moviesList}</ul>
      </main>
    </>
  );
}

export default Home;
