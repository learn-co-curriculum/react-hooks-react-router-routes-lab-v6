import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';

const Movie = () => {
    const { id } = useParams(); // Fetch the movie ID from the route
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const fetchMovie = async () => {
            const response = await fetch(`/movies/${id}`); // Make sure this URL matches the mock
            const data = await response.json();
            setMovie(data);
        };

        fetchMovie();
    }, [id]);

    if (!movie) {
        return <div>Loading...</div>; // Loading state for when movie data hasn't loaded
    }

    return (
        <div>
            <NavBar />
            <h1>{movie.title}</h1>
            <p>{movie.time} minutes</p>
            <div>
                {movie.genres.map((genre, index) => (
                    <span key={index}>{genre}</span>
                ))}
            </div>
        </div>
    );
};

export default Movie;


