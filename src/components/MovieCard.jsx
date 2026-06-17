import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <article>
      <div className="movie-card">
        <h2>{movie.title}</h2>
        <p>Run Time: {movie.time} </p>
        <Link to={`/movie/${movie.id}`}>View Info</Link>
      </div>
    </article>
  );
}

export default MovieCard;
