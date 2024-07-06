import React from 'react';
import '../styles/App.css';
import profileImage from '../assets/h.png'; // Adjust the path to the location of your image

const Header = () => {
  return (
    <header>
     
      <div id="about" className="about-section">
        <img 
          src={profileImage} 
          alt="Profile" 
          className="profile-image" 
        />
        
        <br /><br />
        
      </div>
      <div>
      <h1>My Portfolio</h1>
      <nav >
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      </div>
    </header>
  );
};

export default Header;
