import { useParams, useOutletContext } from "react-router-dom";

function Movie() {
  const { id } = useParams();
  const { movies } = useOutletContext();
  
 const movie = movies?.find(
  (m) => String(m.id) === String(id)
  );
  
  if (!movie) return <h1>Loading...</h1>;

  return (
    <main>
      <h1>{movie.title}</h1>
      <p>{movie.time}</p>
      <div>
        {movie.genres?.map((genre, index) => (
          <span key={index}>{genre} </span>
        ))}
      </div>
    </main>
  );
}

export default Movie;

