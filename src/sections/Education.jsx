import React from 'react';
import { useInView } from 'react-intersection-observer';
import './Education.css';

const EducationCard = ({ edu }) => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: false });

  return (
    <div ref={ref} className={`edu-item ${inView ? 'active' : ''}`}>
      <div className="edu-content">
        <span className="edu-duration">{edu.duration}</span>
        <h3 className="edu-degree">{edu.degree}</h3>
        <p className="edu-school">{edu.school}</p>
        <div className="edu-stats">
            <span className="edu-location">{edu.location}</span>
        </div>
        <p className="edu-coursework"><strong>Relevant Coursework:</strong> {edu.coursework}</p>
      </div>
    </div>
  );
};

const Education = () => {
  const educationData = [
    {
      school: "Cornell University",
      location: "Ithaca, NY",
      duration: "Jan 2025 – Dec 2025",
      degree: "Master of Engineering in Computer Science",
      coursework: "Distributed Computing Principles, Database Management Systems, System Security, Machine Learning, Computer Networks, System Modelling with Generative AI."
    },
    {
      school: "Manipal University Jaipur",
      location: "Jaipur, India",
      duration: "July 2019 – May 2023",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      coursework: "Data Structures, Algorithms, Operating Systems, Computer Architecture, Software Engineering."
    }
  ];

  return (
    <section id="education" className="education-section">
      <div className="content-container">
        <h1 className="edu-section-title">Education</h1>
        <div className="edu-container">
          <div className="timeline-line" />
          {educationData.map((edu, index) => (
            <EducationCard key={index} edu={edu} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;