import React from 'react';
import NavBar from '../components/NavBar';

const actors = [
    { name: 'Benedict Cumberbatch', movies: ['Doctor Strange', 'The Imitation Game'] },
    { name: 'Tom Hiddleston', movies: ['Thor', 'Loki'] },
];

const Actors = () => {
    return (
        <div>
            <NavBar />
            <h1>Actors Page</h1>
            {actors.map((actor, index) => (
                <article key={index}>
                    <h2>{actor.name}</h2>
                    <ul>
                        {actor.movies.map((movie, i) => (
                            <li key={i}>{movie}</li>
                        ))}
                    </ul>
                </article>
            ))}
        </div>
    );
};

export default Actors;

