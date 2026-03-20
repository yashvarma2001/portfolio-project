import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content-wrapper">
        
        {/* Left Column: Huge Title */}
        <div className="about-title-col">
          <h2 className="massive-title">About</h2>
        </div>

        {/* Right Column: Narrative Bio */}
        <div className="about-bio-col">
          <p className="main-bio">
            <span className="name-highlight">Hi!</span> I am a software engineer with an eye for 
            high-performance systems, crafting robust backend architectures that come to life 
            <span className="white-highlight"> on the internet</span>. 
            <span className="muted-text"> 
              I earned my Master of Engineering in Computer Science from 
              Cornell University and have been refining my expertise in 
              distributed systems ever since, 
            </span>
            elevating scalability and shaping journeys for users engaged in 
            <span className="white-highlight"> complex cloud infrastructure</span> 
            at leading research labs. 
            <span className="muted-text">
              I was recently focused on high-throughput data processing and 
              distributed consensus during my time at Gao Labs.
            </span>
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;