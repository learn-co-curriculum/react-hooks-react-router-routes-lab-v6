
import { Link } from 'react-router-dom';

function MovieCard({ id, title, description }) {
  return (
    <article>
      <h2>{title}</h2>
      <p>{description}</p>
      <Link to={`/movie/${id}`}>View Details</Link>
    </article>
  );
};

export default MovieCard;
