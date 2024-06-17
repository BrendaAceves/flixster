// eslint-disable-next-line no-unused-vars
import React from 'react';
import './MovieCard.css'
import PropTypes from 'prop-types';

/*
Display:
1. Movie Title
2. Movie's Poster Image
3. The movie's vote average or rating


*/
const MovieCard = ({movie}) => {
    return (
        <div className="card">
        <h2>{movie.title}</h2>
        <img src={`https://image.tmdb.org/t/p/original${movie["poster_path"]}`} alt={`${movie.title}`} />
        <p>{movie.vote_average}</p>
        </div>
    );
};

MovieCard.propTypes = {
    movie: PropTypes.object
}
export default MovieCard;