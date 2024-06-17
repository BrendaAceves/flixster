import React, { useState, useEffect } from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './MovieList.css';

const MovieList = () => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1); // State to keep track of the current page
    const [searchTerm, setSearchTerm] = useState("");

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNWIzMzIwYTNlMjdiNWZmOGI2OTUwYTY0M2E2MzczNiIsInN1YiI6IjY2NmM4ZTc1NzY2ZTI5MWQ3OTJkMDgzYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eDu2lcCB2dr9IIy8ft1DIUD0rfNkHayt6wvZdwmWuVM'
        }
    };

    const fetchMovies = async (pageNumber) => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${pageNumber}&sort_by=popularity.desc`, options);
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
        const newMovies = await fetchMovies(nextPage);
        setMovies(prevMovies => [...prevMovies, ...newMovies]);
        setPage(nextPage)
    };

    useEffect(() => {
        fetchMovies(1).then(initialMovies => {
            setMovies(initialMovies);
        });
    }, []);

    // Filter movies based on search term
    const filteredMovies = movies.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log("Search Term:", searchTerm)


    const handleNowPlayingClick = () => {
        if (searchTerm !== "") {
            setSearchTerm("");
        }
    };

    return (
        <>
            <div className="search-container">
                <button className="default" onClick={handleNowPlayingClick}>Now Playing</button>
                <input
                    type="text"
                    placeholder="Search Movies..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                />
                <button onClick={(e) => setSearchTerm(e.target.value)}>Search</button>
            </div>
            <div className="movie-list">
                {/* Render your movies here */}
                {filteredMovies.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
            <button onClick={loadMoreMovies}>Load More</button>
        </>
    );
};

export default MovieList;
