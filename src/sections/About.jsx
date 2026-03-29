import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content-wrapper">
        

        <div className="about-title-col">
          <h2 className="massive-title">About</h2>
        </div>


        <div className="about-bio-col">
          <div className="bio-paragraph">
            <span className="name-highlight">Hi! I'm Yashwanth Varma.</span>
            <p className="main-bio">
              I am a graduate of the <span className="white-highlight">M.Eng. in Computer Science</span> program at <span className="white-highlight">Cornell University</span>, where I specialized in <span className="indigo-highlight">Distributed Systems</span>, System Security, and Databases. 
              I possess a comprehensive <span className="white-highlight">full-stack skillset</span>, ranging from engineering high-throughput 
              <span className="indigo-highlight">Node.js and GraphQL</span> backends to optimizing complex <span className="indigo-highlight">React</span> frontends.
            </p>
          </div>

          <div className="bio-paragraph">
            <p className="secondary-bio">
              My technical foundation is anchored by work in large-scale systems, 
              including implementing a transactional <span className="white-highlight">key-value store</span> using <span className="indigo-highlight">Java</span> 
              and a custom <span className="indigo-highlight">Paxos consensus engine</span>. 
              Previously, as a Software Engineer at <span className="white-highlight">Cimpress</span>, I re-architected APIs to improve throughput 
              and built responsive UX components that <span className="indigo-highlight">boosted Average Order Value by 25%</span>.
            </p>
          </div>

          <div className="bio-paragraph">
            <p className="secondary-bio">
              I have a proven track record of delivering high-quality code and detailed technical documentation, 
              which earned me the <span className="white-highlight">High Ownership Award</span>. 
              I am a problem-solver who enjoys tackling complex architectural challenges and optimizing system performance.
              I am eager to embrace the rigor of <span className="white-highlight">fast-paced environments</span> and take 
              full ownership of <span className="indigo-highlight">high-impact projects</span>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;