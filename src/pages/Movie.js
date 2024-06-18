import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import NavBar from '../components/NavBar'

function Movie() {
	const params = useParams()
	const movieId = params.id
	const [movieInfo, setMovieInfo] = useState(null)

	useEffect(() => {
		fetch(`http://localhost:4000/movies/${movieId}`)
			.then((res) => res.json())
			.then((data) => setMovieInfo(data))
	}, [])

	if (!movieInfo) return <h1>Loading...</h1>

	return (
		<>
			<header>
				<NavBar />
			</header>
			<main>
				<h1>{movieInfo.title}</h1>
				<p>{movieInfo.time}</p>
				{movieInfo.genres.map((genre) => {
					return <span key={genre}>{genre}</span>
				})}
			</main>
		</>
	)
}

export default Movie
