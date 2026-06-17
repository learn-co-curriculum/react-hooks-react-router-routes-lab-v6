import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${id}`)
      .then((res) => res.json())
      .then((data) => setMovie(data))
      .catch((error) => console.error(error));
  }, [id]);

  if (!movie) {
    return <h2>Loading movie details...</h2>;
  }

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>{movie.time}</p>
        {movie.genres?.map((genre, index) => (
          <span key={index}>{genre}</span>
        ))}
      </main>
    </>
  );
}

export default Movie;
