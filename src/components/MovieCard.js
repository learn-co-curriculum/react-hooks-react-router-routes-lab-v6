import { Link } from "react-router-dom"

function MovieCard({ movie }) {
  const { id, title } = movie

  return (
    <article>
      <h2>{title}</h2>
      <Link to={`/movie/${id}`}>View Info</Link>
    </article>
  )
}

export default MovieCard
