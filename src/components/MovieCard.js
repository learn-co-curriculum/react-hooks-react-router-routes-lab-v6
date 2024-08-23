import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  return (
    <div>
      <h2>{movie.title}</h2>
      <Link to={`/movie/${movie.id}`}>View Details</Link>
    </div>
  );
}

export default MovieCard;

