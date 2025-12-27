import React from 'react'
import { useState } from 'react';
import img from './assets/profile.jpg';
import './App.css';


const App = () => {
  // const [theme, setTheme] = useState("light");
  return (
    <div>

      {/* Navbar */}
      <nav className="navbar">

        <div className="logo">
          <span className='icon'>💻 </span>
          <h2>Supriya</h2>
        </div>

        <div className="nav-links">
          <ul>
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact </li>
          </ul>
        </div>

        <div className="call">
          <h3>Book a call</h3>
        </div>
      </nav>

      {/*Hero/Home section */}

      <section className="hero">

  <div className="hero-image-container">
    <img src={img} alt="Profile" />

    {/* Overlay Content */}
    <div className="hero-overlay">

      {/* Stats */}
      <div className="hero-stats">
        <div>
          <h2>200+</h2>
          <p>Problems Solved</p>
        </div>
        <div>
          <h2>30+</h2>
          <p>Projects</p>
        </div>
      </div>

      {/* Text */}
      <div className="hero-text">
        <h1>Personal Portfolio</h1>
        <p>
          I design and develop modern, responsive websites using
          React, JavaScript, and clean UI principles.
        </p>
      </div>

    </div>
  </div>

</section>
    </div>
  )
}

export default App;