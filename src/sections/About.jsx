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
              A graduate of the <span className="white-highlight">M.Eng. in Computer Science</span> program at <span className="white-highlight">Cornell University</span>. 
              My expertise lies at the intersection of <span className="indigo-highlight">Distributed Systems</span>, System Security, and Database Internals.
            </p>
          </div>

          <div className="bio-paragraph">
            <p className="secondary-bio">
              During my time at Cornell, I architected a <span className="white-highlight">Distributed Key-Value Store</span> from scratch, 
              leveraging a custom <span className="indigo-highlight">Multi-Paxos</span> consensus engine and Two-Phase Commit (2PC) to ensure 
              strict consistency across sharded server groups.
            </p>
          </div>

          <div className="bio-paragraph">
            <p className="secondary-bio">
              Previously, as a <span className="white-highlight">Software Engineer at Cimpress</span>, I optimized checkout flows for 1M+ monthly transactions 
              and engineered custom APIs using <span className="indigo-highlight">ASTs and GraphQL</span>. My commitment to technical excellence 
              earned me the <span className="white-highlight">High Ownership Award</span> for proactive system analysis and reliability.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;