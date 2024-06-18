import { Link } from "react-router-dom"

function MovieCard({ movie }) {
  console.log("movieCard", movie)
  const { id, title } = movie

  return (
    <article>
      <h2>{title}</h2>
      {/* What should go here? */}
    </article>
  )
}

export default MovieCard
