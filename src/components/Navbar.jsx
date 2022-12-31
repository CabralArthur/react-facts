import React from 'react';
import imageSource from '../assets/reactjs-icon.svg';

const Navbar = () => (
    <nav className="react-facts__nav">
        <div className="react-facts__nav__left-side">
            <img src={imageSource} alt="React Icon" />
            <h1 className="react-facts__title">ReactFacts</h1>
        </div>
        <h3 className="react-facts__subtitle">
            React Course - Project 1
        </h3>
    </nav>    
);

export default Navbar;