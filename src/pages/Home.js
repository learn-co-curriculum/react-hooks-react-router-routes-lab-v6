import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import NavBar from "../components/NavBar";
function Home() {
  const [movies, setMovies] = useState([])
  
  useEffect(() => {
fetch("http://localhost:4000/movies")
.then(resp => resp.json())
.then(data => setMovies(data))
  },[])

const movieCards = movies.map(movie=>(
  <MovieCard key={movie.id} title={movie.title} id={movie.id}/>
))

  return (
    <>
      <header>
        <h1 >
        Home Page
        </h1>
        <NavBar/>
      </header>
      <main>
        {movieCards}
      </main>
    </>
  );
};

export default Home;
