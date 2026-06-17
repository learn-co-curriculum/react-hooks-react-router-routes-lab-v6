import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Actors from "./pages/Actors";
import Directors from "./pages/Directors";
import Movie from "./pages/Movie";
import ErrorPage from "./pages/ErrorPage";

function App() {
  const [movies, setMovies] = useState([]);
  const [actors, setActors] = useState([]);
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/movies")
      .then((r) => r.json())
      .then(setMovies);

    fetch("http://localhost:4000/actors")
      .then((r) => r.json())
      .then(setActors);

    fetch("http://localhost:4000/directors")
      .then((r) => r.json())
      .then(setDirectors);
  }, []);

  return (
    <>
      <NavBar />
      <Outlet context={{ movies, actors, directors }} />
    </>
  );
}

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "actors",
        element: <Actors />
      },
      {
        path: "directors",
        element: <Directors />
      },
      {
        path: "movie/:id",
        element: <Movie />
      }
    ]
  }
];

export default routes;
