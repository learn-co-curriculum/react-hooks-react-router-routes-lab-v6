// src/components/MovieCard.js
import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  return (
    <div>
      <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
    </div>
  );
}

export default MovieCard;
