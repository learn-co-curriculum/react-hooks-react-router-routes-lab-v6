// src/pages/Directors.js
import React, { useEffect, useState } from 'react';

function Directors() {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/directors')
      .then(res => res.json())
      .then(setDirectors);
  }, []);

  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((dir) => (
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

export default Directors;
