import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {
  const [directors, setDirectors] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/directors")
      .then((r) => r.json())
      .then((data) => setDirectors(data));
  });

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Directors Page</h1>
        {directors.length === 0 ? (
          <p>Loading directors...</p>
        ) : (
          directors.map((director) => {
            return (
              <article key={director.name}>
                <h2>{director.name}</h2>
                <ul>
                  {director.movies.map((movie) => (
                    <li key={movie.name}>{movie}</li>
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

export default Directors;
