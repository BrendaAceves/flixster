import React, { useState, useEffect } from "react";
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <a href="https://www.themoviedb.org/api-terms-of-use?language=en-US#:~:text=TMDB%20owns%20all%20rights%2C%20title,Our%20trademarks%2C%20or%20TMDB%20Content.">Terms of use</a>
            <a href="https://www.themoviedb.org/about/get-in-touch">Contact</a>
            <a href="https://www.themoviedb.org/about?language=en-US#:~:text=The%20Movie%20Database%20(TMDB)%20is,we're%20incredibly%20proud%20of.">About</a>
        </footer>
    );
};

export default Footer