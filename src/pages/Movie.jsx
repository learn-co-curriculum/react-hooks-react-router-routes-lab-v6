import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
	const { id } = useParams();
	const [movie, setMovie] = useState(null);

	useEffect(() => {
		fetch(`http://localhost:4000/movies/${id}`)
			.then((r) => r.json())
			.then((data) => setMovie(data))
			.catch((error) => console.log(error));
	}, [id]);

	if (!movie) return null;

	return (
		<>
			<header>
				<NavBar />
			</header>
			<main>
				<h1>{movie.title}</h1>
				<p>{movie.time}</p>
				{movie.genres.map((genre) => (
					<span key={genre}>{genre}</span>
				))}
			</main>
		</>
	);
}

export default Movie;
