import { useOutletContext } from "react-router-dom";

function Directors() {
  const { directors } = useOutletContext();

  return (
    <main>
      <h1>Directors Page</h1>
      <ul>
        {directors?.map((director) => (
          <li key={director.id}>
            {director.name}
            <ul>
              {director.movies.map((movie, index) => (
                <li key={index}>{movie}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Directors;



