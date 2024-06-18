import { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'

function Directors() {
	const [directors, setDirectors] = useState(null)
	useEffect(() => {
		fetch('http://localhost:4000/directors')
			.then((res) => res.json())
			.then((data) => setDirectors(data))
	}, [])

	if (!directors) {
		return (
			<>
				<NavBar />
				<h1>Directors Page</h1>
			</>
		)
	}

	return (
		<>
			<header>
				<NavBar />
			</header>
			<main>
				<h1>Directors Page</h1>
				{directors.map((director) => {
					return (
						<article key={director.name}>
							<h2>{director.name}</h2>
							<ul>
								{director.movies.map((movie) => {
									return <li key={movie}>{movie}</li>
								})}
							</ul>
						</article>
					)
				})}
			</main>
		</>
	)
}

export default Directors
