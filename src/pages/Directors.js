import { useEffect, useState } from "react"
import NavBar from "../components/NavBar"

function Directors() {
  const [directors, setDirectors] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/directors")
      .then((response) => response.json())
      .then((directorData) => setDirectors(directorData))
  })

  const directorList = directors.map((director) => {
    return (
      <article key={director.id}>
        <h2>{director.name}</h2>
        <ul>
          {director.movies.map((movie) => (
            <li key={movie}>{movie}</li>
          ))}
        </ul>
      </article>
    )
  })

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>{directorList}</main>
    </>
  )
}

export default Directors
