import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {
  const [isDirectors, setIsDirectors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/directors")
      .then((res) => res.json())
      .then((directors) => setIsDirectors(directors))

      .catch((error) => console.error(error));
  }, []);

  const directorsList = isDirectors.map((director) => {
    return (
      <li key={director.id || director.name} className="director-card">
        <h2>{director.name}</h2>

        <h3>Movies:</h3>
        <ul>
          {director.movies?.map((movie, index) => (
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
        <h1>Directors Page</h1>
        <ul className="directors-list">{directorsList}</ul>
      </main>
    </>
  );
}

export default Directors;
