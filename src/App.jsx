/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import './App.css'
// Components
import Header from "./Components/Header/Header";
import MovieList from '../src/Components/MovieList/MovieList'
import Footer from "./Components/Footer/Footer";

const App = () => {
  
  return (
    <div>
    <Header/>
    <MovieList/>
    <Footer/>
    </div>
  );
};

export default App
