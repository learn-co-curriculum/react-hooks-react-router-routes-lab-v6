import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import NavBar from "../components/NavBar"

function Movie() {
  const [movie, setMovie] = useState({})
  const params = useParams()
  const movieId = params.id
  console.log(movie)

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${movieId}`)
      .then((response) => response.json())
      .then((movieData) => setMovie(movieData))
      .catch((error) => console.error(error))
  }, [movieId])

  if (!movie.title) {
    return <h1>Loading...</h1>
  }
  const listOfGenres = movie.genres.map((genre) => (
    <span key={genre}>{genre}</span>
  ))

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>{movie.time} minutes</p>
        {listOfGenres}
      </main>
    </>
  )
}

export default Movie
