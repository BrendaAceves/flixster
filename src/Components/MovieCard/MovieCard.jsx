import React, { useState } from 'react';
import './MovieCard.css'
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';

const MovieCard = ({ movie }) => {
    // Getting the genre of the movie
    // const options = {
    //     method: 'GET',
    //     headers: {
    //       accept: 'application/json',
    //       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNWIzMzIwYTNlMjdiNWZmOGI2OTUwYTY0M2E2MzczNiIsInN1YiI6IjY2NmM4ZTc1NzY2ZTI5MWQ3OTJkMDgzYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eDu2lcCB2dr9IIy8ft1DIUD0rfNkHayt6wvZdwmWuVM'
    //     }
    //   };
      
    //   fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
    //     .then(response => response.json())
    //     .then(response => console.log(response))
    //     .catch(err => console.error(err));

    
    // console.log(response);
    // Handling Modal Visibility/Invisibility
    const [showModal, setShowModal] = useState(false);
    
    const openModal = () => {
        setShowModal(true);
    };
    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div className="card" onClick={openModal}>
            <div className="title">
                <h2>{movie.title}</h2>
            </div>
            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={`${movie.title}`} />
            <p>{movie.vote_average}</p>
                {/* <p>Popularity: {movie.popularity}</p>
                <p>Rating: {movie.vote_average}</p>
                <p>Vote Count: {movie.vote_count}</p> */}

            {/* Modal Component */}
            <Modal show={showModal} onClose={closeModal}>
                <h2>{movie.title}</h2>
                <img
                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                    alt={`${movie.title}`}
                    style={{ width: "100%" }}
                />
                <p>Release Date: {movie.release_date}</p>
                <p>{movie.overview}</p>
                

            </Modal>
        </div>
    );
};

MovieCard.propTypes = {
    movie: PropTypes.object.isRequired
};

export default MovieCard;
