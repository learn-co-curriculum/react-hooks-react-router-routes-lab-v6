import { Link } from 'react-router-dom'

function MovieCard({ title, movieId }) {
	return (
		<article>
			<h2>{title}</h2>
			<Link to={`/movie/${movieId}`}>View Info</Link>
		</article>
	)
}

export default MovieCard
