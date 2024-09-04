import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects'
import './styles/portfolio-style.css';

function Portfolio() {
  return (
      <div id="container">
        <Header />
        <div id="main-content">
            <h1>Benjamin Perez</h1>
        </div>

        <div id="main">
        
          <div id="hidden-div">
          </div>
          <div id="side-content">
            <About />
            <Skills />
            <Projects />
          </div>
      
        </div>


      </div>
  );
}

export default Portfolio;
