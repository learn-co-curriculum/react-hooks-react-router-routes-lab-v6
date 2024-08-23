import { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';
import NavBar from '../components/NavBar';

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/movies')
      .then(response => response.json())
      .then(data => setMovies(data));
  }, []);

  return (
    <div>
      <NavBar />
      <h1>Home Page</h1>
      {movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
    </div>
  );
}

export default Home;


