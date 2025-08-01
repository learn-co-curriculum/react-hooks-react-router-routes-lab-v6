import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/actors") // Assuming your json-server has an /actors endpoint
      .then((r) => r.json())
      .then((data) => setActors(data))
      .catch((error) => console.error("Error fetching actors:", error));
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Actors Page</h1>
        <section>
          {actors.map((actor) => (
            <article key={actor.id}>
              <h2>{actor.name}</h2>
              <ul>
                {actor.movies && actor.movies.map((movie, index) => (
                  <li key={index}>{movie}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>
      </main>
    </>
  );
}

export default Actors;