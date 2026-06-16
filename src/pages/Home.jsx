import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import NavBar from "../components/NavBar";

function Home() {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		fetch("http://localhost:4000/movies")
			.then((response) => response.json())
			.then((data) => setMovies([ ...data]))
			.catch((error) => console.log(error));
	}, []);

	const movieList = movies.map((movie) => {
		return <MovieCard key={movie.id} movie={movie} />;
	});

	return (
		<>
			<header>
				<NavBar />
			</header>
			<main>
				<h1>Home Page</h1>
				{movieList}
			</main>
		</>
	);
}

export default Home;
