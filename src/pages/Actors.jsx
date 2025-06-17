import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import PersonCard from "../components/PersonCard";

function Actors() {
  const [actorList, setActorList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/actors")
      .then((r) => r.json())
      .then((data) => setActorList(data));
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Actors Page</h1>
        {actorList.map((actor) => (
          <PersonCard key={actor.id} name={actor.name} movies={actor.movies} />
        ))}
      </main>
    </>
  );
}

export default Actors;
