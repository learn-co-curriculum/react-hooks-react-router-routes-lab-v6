import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Import useParams
import NavBar from "../components/NavBar";

function Movie() {
  const { id } = useParams(); // Get the movie ID from the URL
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${id}`)
      .then((r) => {
        if (!r.ok) {
          throw new Error(`HTTP error! status: ${r.status}`);
        }
        return r.json();
      })
      .then((data) => {
        setMovie(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
        console.error("Error fetching movie:", err);
      });
  }, [id]); // Re-fetch when ID changes

  if (loading) return <div>Loading movie details...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!movie) return <div>Movie not found.</div>; // Handle case where movie data is null

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>Time: {movie.time}</p>
        <div>
          {movie.genres && movie.genres.map((genre, index) => (
            <span key={index} style={{ marginRight: '10px' }}>{genre}</span>
          ))}
        </div>
      </main>
    </>
  );
}

export default Movie;
