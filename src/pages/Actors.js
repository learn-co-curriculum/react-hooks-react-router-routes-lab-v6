import { useEffect, useState } from "react";
import React from "react";
import NavBar from "../components/NavBar";

function Actors() {
  const [actors, setActors] = useState([])
  
  useEffect(() => {
fetch("http://localhost:4000/actors")
.then(resp => resp.json())
.then(data => setActors(data))
  },[])

  return (
    <div>
      <NavBar/>
      <h1>Actors Page</h1>
      {actors.map((actor, index) => (
        <article key={index}>
          <h2>{actor.name}</h2>
          <ul>
            {actor.movies.map((movie, index) => (
              <li key={index}>{movie}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

export default Actors;