import { Link } from "react-router-dom"

function MovieCard({ movie }) {
  console.log("movieCard", movie)
  const { id, title } = movie
  console.log(id)
  console.log(title)

  return (
    <article>
      <h2>{title}</h2>
      <Link to={`/movies/${id}`}>View Movie</Link>
    </article>
  )
}

export default MovieCard
