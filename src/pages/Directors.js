import React from "react";
import NavBar from "./NavBar"; // Import your NavBar component

const directors = [
  {
    name: "Scott Derrickson",
    movies: ["Doctor Strange", "Sinister", "The Exorcism of Emily Rose"],
  },
  {
    name: "Mike Mitchell",
    movies: ["Trolls", "Alvin and the Chipmunks: Chipwrecked", "Sky High"],
  },
  {
    name: "Edward Zwick",
    movies: ["Jack Reacher: Never Go Back", "Blood Diamond", "The Siege"],
  },
];

const routes = [
  {
    path: "/directors",
    element: (
      <>
        <NavBar /> {/* Include NavBar component */}
        <div>
          <h1>Directors Page</h1>
          <ul>
            {directors.map((director) => (
              <li key={director.name}>
                <strong>{director.name}</strong>
                <ul>
                  {director.movies.map((movie) => (
                    <li key={movie}>{movie}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </>
    ),
  },
  // Add more routes as needed
];

export default routes;