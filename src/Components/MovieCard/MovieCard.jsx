import React, { useState } from 'react';
import './MovieCard.css'
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';

const MovieCard = ({ movie }) => {
    console.log(movie);
    const [showModal, setShowModal] = useState(false); // State to manage modal visibility

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div className="card" onClick={openModal}>
            <h2>{movie.title}</h2>
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
                <p>{movie.overview}</p>
                <p>Release Date: {movie.release_date}</p>

            </Modal>
        </div>
    );
};

MovieCard.propTypes = {
    movie: PropTypes.object.isRequired
};

export default MovieCard;
