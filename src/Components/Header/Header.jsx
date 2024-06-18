/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import BackgroundImage from '../../assets/header_background.jpg'
import './Header.css'

const Header = () => {
    return (
        <>
        <header>
        <h1>FLIXSTER</h1>
        <img src={BackgroundImage} alt="huh"/>
        </header>
        </>
    );
};

export default Header