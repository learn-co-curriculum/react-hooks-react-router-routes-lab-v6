import React, { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import NavBar from '../components/NavBar';

const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        // Fetching data from your API or mock data
        setMovies([
            { id: 1, title: 'Doctor Strange' },
            { id: 2, title: 'Sinister' },
            { id: 3, title: 'The Exorcism of Emily Rose' },
        ]);
    }, []);

    return (
        <div>
            <NavBar />
            <h1>Home Page</h1>
            <div>
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
};

export default Home;

