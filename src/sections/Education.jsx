import React from 'react';
import { useInView } from 'react-intersection-observer';
import './Education.css';

const EducationCard = ({ edu }) => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: false });

  return (
    <div ref={ref} className={`edu-item ${inView ? 'active' : ''}`}>
      {/* THE ALIGNED DOT */}
      <div className="edu-dot" /> 
      
      <div className="edu-content">
        <span className="edu-duration">{edu.duration}</span>
        <h2 className="edu-school">{edu.school}</h2>
        <h3 className="edu-degree">{edu.degree}</h3>
        <div className="edu-stats">
            {edu.stats.map((stat, i) => (
              <span key={i} className="stat-tag">{stat}</span>
            ))}
        </div>
        <p className="edu-coursework">
          <strong>Relevant Coursework:</strong> {edu.coursework}
        </p>
      </div>
    </div>
  );
};

const Education = () => {
  const educationData = [
    {
      school: "Cornell University",
      degree: "Master of Engineering in Computer Science",
      duration: "Jan 2025 - Dec 2025",
      stats: ["Ithaca, NY"],
      coursework: "Distributed Computing Principles, Database Management Systems, System Security, Machine Learning, Computer Networks, System Modelling with Generative AI."
    },
    {
      school: "Manipal University Jaipur",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      duration: "July 2019 - May 2023",
      stats: ["Jaipur, India"],
      coursework: "Data Structures, Algorithms, Object-Oriented Programming, Operating Systems."
    }
  ];

  return (
    <section id="education" className="education-section">
      <div className="content-container">
        <h1 className="edu-section-title">Education</h1>
        <div className="edu-container">
          {/* THE VERTICAL TRACK */}
          <div className="edu-timeline-line" />
          
          {educationData.map((edu, index) => (
            <EducationCard key={index} edu={edu} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;