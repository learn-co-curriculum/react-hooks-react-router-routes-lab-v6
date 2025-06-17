import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import PersonCard from "../components/PersonCard";

function Directors() {
  const [directorList, setDirectorList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/directors")
      .then((r) => r.json())
      .then((data) => setDirectorList(data));
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Directors Page</h1>
        {directorList.map((director) => (
          <PersonCard
            key={director.id}
            name={director.name}
            movies={director.movies}
          />
        ))}
      </main>
    </>
  );
}

export default Directors;
