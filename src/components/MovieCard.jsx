import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
    return (
        <div>
            <h2>{movie.title}</h2>
            <Link to={`/movie/${movie.id}`}>View Info</Link>
        </div>
    );
};

export default MovieCard;

