import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './Experience.css';
import cornellLogo from '../../assets/cornellLogo.png';
import cimpressLogo from '../../assets/cimpressLogo.png';

const ExperienceItem = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: false });

  return (
    <div ref={ref} className={`timeline-item ${inView ? 'active' : ''}`}>
      {/* THE DOT: Centered on the 30px line */}
      <div className="timeline-dot" />
      
      <div className="timeline-content">
        <div className="card-header" onClick={() => setIsOpen(!isOpen)}>
          <div className="logo-section">
            <img src={data.logo} alt={data.company} className="company-logo" />
          </div>
          <div className="header-text">
            <h3 className="timeline-role">{data.title}</h3>
            <p className="timeline-company">{data.company}</p>
            <div className="meta-info">
              <span className="timeline-date">{data.duration}</span>
              <span className="timeline-location">{data.location}</span>
            </div>
          </div>
          <button className={`expand-btn ${isOpen ? 'rotated' : ''}`}>
            ▼
          </button>
        </div>

        <p className="timeline-details">{data.summary}</p>

        {isOpen && (
          <div className="expanded-info">
            <h4 className="achievements-title">Key Achievements</h4>
            <ul className="achievements-list">
              {data.achievements.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
            <div className="tag-container">
              {data.tech.map((t, i) => (
                <span key={i} className="tech-tag">{t}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const Experience = () => {
  const experiences = [
    { 
      title: "Research Fellow", 
      company: "Gao Labs, Cornell University", 
      duration: "Feb 2026 - Present", 
      location: "Ithaca, NY",
      logo: cornellLogo,
      summary: "Leading research on distributed systems architecture and high-throughput backend optimization.",
      achievements: [
        "Architecting high-availability systems focusing on fault tolerance and consensus protocols.",
        "Optimizing large-scale system performance through sharding and replication strategies."
      ],
      tech: ["Distributed Systems", "Docker", "Kubernetes", "PostgreSQL", "AWS"]
    },
    { 
      title: "Software Engineer", 
      company: "Cimpress", 
      duration: "Aug 2023 - Jan 2025", 
      location: "Remote",
      logo: cimpressLogo,
      summary: "Architected high-throughput commerce APIs processing 1M+ monthly transactions.",
      achievements: [
        "Designed and implemented a custom discount-matching REST API using ASTs and GraphQL.",
        "Optimized checkout flow performance, achieving a 25% reduction in page load time.",
        "Improved system reliability by resolving 10+ critical error patterns impacting 6,000+ monthly users."
      ],
      tech: ["Node.js", "GraphQL", "React", "Redux", "AWS"]
    },
    { 
      title: "Software Engineer Intern", 
      company: "Cimpress", 
      duration: "Feb 2023 - Aug 2023", 
      location: "Remote",
      logo: cimpressLogo,
      summary: "Optimized React application performance and design consistency.",
      achievements: [
        "Reduced initial bundle size by 75% (15MB to 3.5MB) by serving dynamic chunks via AWS S3.",
        "Developed a suite of reusable React components for a major website rebranding."
      ],
      tech: ["React", "AWS S3", "JavaScript", "Redux", "Lazy Loading"]
    }
  ];

  const skillGroups = [
    { category: "Languages", skills: ["Java", "Go", "Rust", "Python", "TypeScript", "SQL"] },
    { category: "Systems", skills: ["Kafka", "GraphQL", "Distributed Systems", "Paxos", "Raft"] },
    { category: "Infrastructure", skills: ["AWS", "Docker", "Kubernetes", "Terraform"] },
    { category: "Databases", skills: ["PostgreSQL", "DynamoDB", "MongoDB", "React"] }
  ];

  return (
    <section className="experience-section">
      <div className="content-container">
        <h2 className="section-title">Experience</h2>
        <div className="timeline-container">
          <div className="timeline-line" />
          {experiences.map((exp, i) => <ExperienceItem key={i} data={exp} />)}
        </div>

        <h2 className="section-title" style={{ marginTop: '100px' }}>Technical Expertise</h2>
        <div className="skills-container">
          {skillGroups.map((group, idx) => (
            <div key={idx} className="skill-card">
              <div className="skill-category-header">
                <span className="skill-category-title">{group.category}</span>
              </div>
              <div className="skills-grid">
                {group.skills.map((skill, i) => (
                  <span key={i} className="skill-pill">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;