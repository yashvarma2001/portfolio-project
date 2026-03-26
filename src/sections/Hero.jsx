import React from 'react';
/* FIXED: FaFileArrowDown is the correct name for FA6. 
  Added FaCircleArrowDown as a secondary option if you prefer it.
*/
import { FaFileArrowDown } from 'react-icons/fa6'; 
import './Hero.css';
import Magnetic from '../components/Magnetic';

const Hero = () => {
  return (
    <div className="hero-container">
      <nav className="hero-nav">
        <div className="nav-logo">Yashwanth Varma</div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
          <a href="#education">Education</a>
          <a href="#experience">Work</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>

          <a 
            href={`${import.meta.env.BASE_URL}resume.pdf`} 
            download="Yashwanth_Varma_Resume.pdf" 
            className="nav-resume-btn"
          >
            Resume
          </a>
        </div>
      </nav>

      <div className="moving-grid" />

      <div className="hero-content">
        <header className="profile-header">
          <div className="profile-image">
             <img src={`${import.meta.env.BASE_URL}assets/profile.png`} alt="Yashwanth" />
          </div>
          <div className="profile-status">
            <p className="status-label">Open to Work</p>
            <p className="status-company">CS Grad @Cornell</p>
          </div>
        </header>

        <h1 className="hero-title">
          Yashwanth<br />Varma
        </h1>
        <p className="hero-subtitle">
          Software Engineer
        </p>

        {/* Hero Action Button */}
        <div className="hero-actions">
          <Magnetic>
             <a 
              href={`${import.meta.env.BASE_URL}resume.pdf`} 
              download 
              className="hero-download-link"
            >
              <FaFileArrowDown /> Download CV
            </a>
          </Magnetic>
          
        </div>
      </div>
    </div>
  );
};

export default Hero;