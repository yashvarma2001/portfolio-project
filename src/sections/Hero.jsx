import { FaFileArrowDown } from 'react-icons/fa6'; 
import './Hero.css';
import Magnetic from '../components/Magnetic';

const Hero = () => {
  const handleDownload = async (e) => {
    e.preventDefault();
    const resumeUrl = `${import.meta.env.BASE_URL}Resume.pdf`;
    
    try {
      const response = await fetch(resumeUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Yashwanth_Varma_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (err) {
      window.open(resumeUrl, '_blank');
    }
  };

  return (
    <div className="hero-container">
      <nav className="hero-nav">
        <div className="nav-logo">Yashwanth Varma</div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#experience">Work</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
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

       <div className="hero-actions">
          <Magnetic onClick={handleDownload}>
            <div className="hero-download-link">
              <FaFileArrowDown /> Download Resume
            </div>
          </Magnetic>
        </div>
      </div>
    </div>
  );
};

export default Hero;