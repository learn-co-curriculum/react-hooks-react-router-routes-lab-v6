import { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import MovieCard from '../components/MovieCard'

function Home() {
	const [movies, setMovies] = useState(null)

	useEffect(() => {
		fetch('http://localhost:4000/movies')
			.then((res) => res.json())
			.then((movies) => setMovies(movies))
	}, [])

	if (!movies) {
		return (
			<>
				<NavBar />
				<h1>Home Page</h1>
			</>
		)
	}

	return (
		<>
			<header>
				<NavBar />
			</header>
			<main>
				<h1>Home Page</h1>
				{movies.map((movie) => {
					return <MovieCard key={movie.title} title={movie.title} movieId={movie.id} />
				})}
			</main>
		</>
	)
}

export default Home
