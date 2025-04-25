// src/components/MovieCard.jsx
function MovieCard({ movie }) {
  return (
    <article>
      <h2>{movie.title}</h2>
      <Link to={`/movie/${movie.id}`}>View Info</Link>
    </article>
  );
}

// ⭐️ Add this line ⭐️
export default MovieCard;