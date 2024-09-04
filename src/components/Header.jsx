import React from 'react';
import '../styles/header-style.css';

function Header() {
    return (
        <div id="header-container">
            <h1 id="header-title">Portfolio v.0</h1>
            <div id="menu-container">
                <a href="#about-container" className='menu-items'>About</a>
                <a href="#skills-container" className='menu-items'>Skills</a>
                <a href="#projects-container" className='menu-items'>Projects</a>
                <button id="resume">Resume</button>
            </div>
        </div>
    )
}

export default Header
