import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { 
  SiReact, SiNodedotjs, SiGraphql, SiDocker, 
  SiKubernetes, SiPostgresql, SiRedux, SiJavascript, SiTypescript,
  SiGo, SiRust, SiPython, SiApachekafka, SiTerraform,
  SiMongodb, SiGreensock
} from 'react-icons/si';
import { FaJava, FaServer, FaDatabase, FaMicrochip, FaNetworkWired, FaAws } from 'react-icons/fa6';
import './Experience.css';
import cornellLogo from '../../assets/cornellLogo.png';
import cimpressLogo from '../../assets/cimpressLogo.png';

const ICON_MAP = {
  "React": <SiReact color="#F8FAFC" />,
  "Node.js": <SiNodedotjs color="#F8FAFC" />,
  "GraphQL": <SiGraphql color="#F8FAFC" />,
  "AWS": <FaAws color="#F8FAFC" />,
  "AWS S3": <FaAws color="#F8FAFC" />,
  "Docker": <SiDocker color="#F8FAFC" />,
  "Kubernetes": <SiKubernetes color="#F8FAFC" />,
  "PostgreSQL": <SiPostgresql color="#F8FAFC" />,
  "Redux": <SiRedux color="#F8FAFC" />,
  "JavaScript": <SiJavascript color="#F8FAFC" />,
  "TypeScript": <SiTypescript color="#F8FAFC" />,
  "Java": <FaJava color="#F8FAFC" />,
  "Go": <SiGo color="#F8FAFC" />,
  "Rust": <SiRust color="#F8FAFC" />,
  "Python": <SiPython color="#F8FAFC" />,
  "Kafka": <SiApachekafka color="#F8FAFC" />,
  "Terraform": <SiTerraform color="#F8FAFC" />,
  "MongoDB": <SiMongodb color="#F8FAFC" />,
  "DynamoDB": <FaDatabase color="#F8FAFC" />,
  "Distributed Systems": <FaNetworkWired color="#818CF8" />,
  "Paxos": <FaServer color="#818CF8" />,
  "Raft": <FaServer color="#818CF8" />,
  "Hash-based Sharding": <FaDatabase color="#818CF8" />,
  "Fault Tolerance": <FaMicrochip color="#F87171" />
};

const ExperienceItem = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: false });

  return (
    <div ref={ref} className={`timeline-item ${inView ? 'active' : ''}`}>
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
          <button className={`expand-btn ${isOpen ? 'rotated' : ''}`}>▼</button>
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
                <span key={i} className="tech-tag">
                  {ICON_MAP[t] || <FaMicrochip />} {t}
                </span>
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
        "Architecting high-availability systems focusing on Paxos and Raft consensus protocols for fault tolerance.",
        "Optimizing large-scale performance through hash-based sharding and master-slave replication strategies."
      ],
      tech: ["Distributed Systems", "Docker", "Kubernetes", "PostgreSQL", "AWS", "Paxos", "Raft"]
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
      tech: ["Node.js", "GraphQL", "React", "Redux", "AWS", "TypeScript"]
    },
    { 
      title: "Software Engineer Intern", 
      company: "Cimpress", 
      duration: "Feb 2023 - Aug 2023", 
      location: "Remote",
      logo: cimpressLogo,
      summary: "Optimized React application performance and bundle size.",
      achievements: [
        "Reduced initial bundle size by 75% (15MB to 3.5MB) using dynamic chunks via AWS S3.",
        "Engineered reusable UI components to ensure design consistency across rebranded platforms."
      ],
      tech: ["React", "AWS S3", "JavaScript", "Redux"]
    }
  ];

  const skillGroups = [
    { category: "Languages", skills: ["Java", "Go", "Rust", "Python", "TypeScript", "SQL"] },
    { category: "Distributed Systems", skills: ["Kafka", "Paxos", "Raft", "Hash-based Sharding", "Fault Tolerance"] },
    { category: "Cloud & DevOps", skills: ["AWS", "Docker", "Kubernetes", "Terraform", "GraphQL"] },
    { category: "Data Stores", skills: ["PostgreSQL", "DynamoDB", "MongoDB", "Redux"] }
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
                  <span key={i} className="skill-pill">
                    {ICON_MAP[skill] || <FaMicrochip />} {skill}
                  </span>
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