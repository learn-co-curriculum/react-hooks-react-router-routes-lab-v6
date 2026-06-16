import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";

function Movie() {
  const [movie, setMovie] = useState({})
  const params = useParams()
  const movieId = params.id 

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${movieId}`)
    .then(res => res.json())
    .then(data => setMovie({...data}))
  },[])

  if(!movie.title) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>Runtime: {movie.time} min</p>
        {movie.genres.map((genre, index) => {
          if(index < movie.genres.length - 1) {
            return <span key={index}>{genre}, </span>
          } else {
            return <span key={index}>{genre}</span>
          }
        })}
      </main>
    </>
  );
};

export default Movie;
