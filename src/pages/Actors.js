import { useEffect, useState } from "react"
import NavBar from "../components/NavBar"

function Actors() {
  const [actors, setActors] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/actors")
      .then((r) => r.json())
      .then((data) => setActors(data))
      .catch((error) => console.error(error))
  }, [])

  const actorList = actors.map((actor) => {
    return (
      <article key={actor.id}>
        <h1>{actor.name}</h1>
        <ul>
          {actor.movies.map((movie) => (
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
      <main>
        <h1>Actors Page</h1>
        <div>{actorList}</div>
      </main>
    </>
  )
}

export default Actors
