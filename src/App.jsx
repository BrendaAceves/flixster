/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import './App.css'
import MovieList from '../src/Components/MovieList/MovieList'

const App = () => {
  
  return (
    <header>
      <h1>Flixster</h1>
      <MovieList/>
      
    </header>
  );
};

export default App
