/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './MovieList.css';

const MovieList = () => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1); // State to keep track of the current page
    const [searchTerm, setSearchTerm] = useState("");
    const [sortBy, setSortBy] = useState("popularity.desc"); // Default sorting by popularity

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNWIzMzIwYTNlMjdiNWZmOGI2OTUwYTY0M2E2MzczNiIsInN1YiI6IjY2NmM4ZTc1NzY2ZTI5MWQ3OTJkMDgzYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eDu2lcCB2dr9IIy8ft1DIUD0rfNkHayt6wvZdwmWuVM'
        }
    };
    // Fetching Movie List
    const fetchMovies = async (pageNumber, sortBy) => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${pageNumber}&sort_by=${sortBy}`, options);
            if (!response.ok) {
                throw new Error('Network response failure');
            }
            const data = await response.json();
            return data.results;
        } catch (error) {
            console.error('Error fetching data:', error);
            return [];
        }
    };

    const loadMoreMovies = async () => {
        const nextPage = page + 1;
        const newMovies = await fetchMovies(nextPage, sortBy);
        setMovies(prevMovies => [...prevMovies, ...newMovies]);
        setPage(nextPage);
    };

    useEffect(() => {
        fetchMovies(1, sortBy).then(initialMovies => {
            setMovies(initialMovies);
        });
    }, [sortBy]); // Fetch movies whenever sortBy changes

    // Filter movies based on search term
    const filteredMovies = movies.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleNowPlayingClick = () => {
        if (searchTerm !== "") {
            setSearchTerm("");
        }
    };

    const handleSortChange = (e) => {
        setSortBy(e.target.value);
        setPage(1); // Reset page number when changing sort criteria to fetch from the first page
    };

    return (
        <>
            <div className="searchContainer">
                <button onClick={handleNowPlayingClick}>Now Playing</button>
                <input
                    type="text"
                    placeholder="Search Movies..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                />

                <select value={sortBy} onChange={handleSortChange}>
                    <option value="popularity.desc">Popularity Descending</option>
                    <option value="vote_average.desc">Rating Descending</option>
                    <option value="vote_count.desc">Vote Count Descending</option>
                </select>
            </div>
            <div className="movie-list">
                {/* Render your movies here */}
                {filteredMovies.map(movie => (
                    <MovieCard 
                        key={movie.id} 
                        movie={movie} 
                    />
                ))}
            </div>
            <div className="loadMore">
            <button onClick={loadMoreMovies}>Load More</button>
            </div>
        </>
    );
};

export default MovieList;
