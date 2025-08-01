import { Link } from "react-router-dom";

function MovieCard({ title, id }) { // Add id to props
  return (
    <article>
      <h2>{title}</h2>
      {/* Link to the movie page using the movie ID */}
      <Link to={`/movie/${id}`}>View Details</Link>
    </article>
  );
}

export default MovieCard;