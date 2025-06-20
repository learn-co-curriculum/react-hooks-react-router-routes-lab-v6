function MovieCard({ movie: { title, id } }) {
  return (
    <article>
      <h2>{title}</h2>
      <a href={`/movie/${id}`}>View Info</a>
    </article>
  );
}

export default MovieCard;
