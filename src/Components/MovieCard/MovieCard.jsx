import React from 'react';
import './MovieCard.css'

/*
Display:
1. Movie Title
2. Movie's Poster Image
3. The movie's vote average or rating


*/
const MovieCard = () => {
    return (
        <div className="card">
            <h1>The movies title</h1>
            <p>The poster image</p>
            <p>The movies vote average or rating</p>
        </div>
    );
};

export default MovieCard;