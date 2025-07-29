// src/pages/Directors.js
import React, { useEffect, useState } from 'react';

function Actors() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/directors')
      .then(res => res.json())
      .then(setActors);
  }, []);

  return (
    <div>
      <h1>Actors Page</h1>
      {Actors.map((dir) => (
        <article key={dir.name}>
          <h2>{dir.name}</h2>
          <ul>
            {dir.movies.map((movie, idx) => <li key={idx}>{movie}</li>)}
          </ul>
        </article>
      ))}
    </div>
  );
}

export default Actors;
