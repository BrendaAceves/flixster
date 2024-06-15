import React from 'react';

const MovieList = () => {

    console.log(import.meta.env.VITE_API_KEY); // Should output "a5b3320a3e27b5ff8b6950a643a63736" in development
    const apiKey = import.meta.env.VITE_API_KEY;
    const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;
    console.log(apiKey, apiUrl);

    const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNWIzMzIwYTNlMjdiNWZmOGI2OTUwYTY0M2E2MzczNiIsInN1YiI6IjY2NmM4ZTc1NzY2ZTI5MWQ3OTJkMDgzYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eDu2lcCB2dr9IIy8ft1DIUD0rfNkHayt6wvZdwmWuVM'
    }
    };
    
    fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

    return (
        <div>
        
        </div>
    );
};

export default MovieList;