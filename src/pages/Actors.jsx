import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {
  const [isActors, setIsActors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/actors")
      .then((res) => res.json())
      .then((actors) => setIsActors(actors))
      .catch((error) => console.error(error));
  }, []);

  const actorsList = isActors.map((actor) => {
    return (
      <li key={actor.id || actor.name} className="actor-card">
        <h2>{actor.name}</h2>

        <h3>Movies:</h3>
        <ul>
          {actor.movies?.map((movie, index) => (
            <li key={index}>{movie}</li>
          ))}
        </ul>
      </li>
    );
  });

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Actors Page</h1>
        <ul className="actors-list">{actorsList}</ul>
      </main>
    </>
  );
}

export default Actors;
