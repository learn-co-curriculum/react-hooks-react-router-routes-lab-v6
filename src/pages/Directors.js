import { useEffect, useState } from "react";
import React from "react";
import NavBar from "../components/NavBar";


function Directors() {
  const [directors, setDirectors] = useState([])
  
  useEffect(() => {
fetch("http://localhost:4000/directors")
.then(resp => resp.json())
.then(data => setDirectors(data))
  },[])

  return (
    <div>
      <NavBar/>
      <h1>Directors Page</h1>
      {directors.map((director, index) => (
        <article key={index}>
          <h2>{director.name}</h2>
          <ul>
            {director.movies.map((movie, index) => (
              <li key={index}>{movie}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

export default Directors;