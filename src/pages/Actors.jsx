import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {
  const [actors, setActors] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/actors")
      .then((r) => r.json())
      .then((data) => setActors(data));
  });
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Actors Page</h1>
        {actors.length === 0 ? (
          <p>Loading actors...</p>
        ) : (
          actors.map((actor) => {
            return (
              <article key={actor.name}>
                <h2>{actor.name}</h2>
                <ul>
                  {actor.movies.map((movie) => (
                    <li key={movie}>{movie}</li>
                  ))}
                </ul>
              </article>
            );
          })
        )}
      </main>
    </>
  );
}

export default Actors;
