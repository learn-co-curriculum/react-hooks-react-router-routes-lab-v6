import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => (
  <div>
    <h2>{movie.title}</h2>
    <a href={`/movie/${movie.id}`}>View Info</a>
  </div>
);
export default MovieCard;