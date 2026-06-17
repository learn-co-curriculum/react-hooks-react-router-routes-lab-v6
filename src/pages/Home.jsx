import { useOutletContext, Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";

function Home() {
  const { movies } = useOutletContext();

  return (
    <main>
      <h1>Home Page</h1>
      <div className="movie-list">
        {movies?.map((movie) => (
          <div key={movie.id}>
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </main>
  );
}

export default Home;



