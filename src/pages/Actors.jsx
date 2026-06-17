import { useOutletContext } from "react-router-dom";

function Actors() {
  const { actors } = useOutletContext();

  return (
    <main>
      <h1>Actors Page</h1>
      <ul>
        {actors?.map((actor) => (
          <li key={actor.id}>
            {actor.name}
            <ul>
              {actor.movies.map((movie, index) => (
                <li key={index}>{movie}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Actors;

