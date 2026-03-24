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
    title: "Software Engineer Intern", 
    company: "Gao Labs, Cornell University", 
    duration: "Jun 2025 - Aug 2025", 
    location: "Ithaca, NY",
    logo: cornellLogo,
    summary: "Engineered an end-to-end emissions analyzer web app using React, Node.js, and PostgreSQL on AWS[cite: 18, 20].",
    achievements: [
      "Implemented horizontally scaled Docker architecture across EC2 instances, reducing simulation runtime by 94% (2 days to 3 hours)[cite: 21].",
      "Managed full-stack development and AWS deployment for high-performance environmental data analysis[cite: 20, 21]."
    ],
    tech: ["React", "Node.js", "PostgreSQL", "AWS", "Docker", "EC2"]
  },
  { 
    title: "Software Engineer", 
    company: "Cimpress", 
    duration: "Aug 2023 - Jan 2025", 
    location: "Remote",
    logo: cimpressLogo,
    summary: "Architected high-throughput commerce APIs and optimized checkout flows for 1M+ monthly transactions[cite: 22, 28].",
    achievements: [
      "Developed a custom discount-matching REST API using ASTs and GraphQL to process 1M+ monthly cart transactions[cite: 28].",
      "Achieved a 25% reduction in page load time by re-architecting the cart recalculation API for better scalability[cite: 29].",
      "Engineered responsive UI using React, Hooks, and Redux, boosting Average Order Value (AOV) by 25%[cite: 31].",
      "Awarded High Ownership Award for technical excellence and proactive system analysis[cite: 33]."
    ],
    tech: ["Node.js", "GraphQL", "React", "Redux", "ASTs", "Agile"]
  },
  { 
    title: "Software Engineer Intern", 
    company: "Cimpress", 
    duration: "Feb 2023 - Aug 2023", 
    location: "Remote",
    logo: cimpressLogo,
    summary: "Optimized frontend performance and contributed to major rebranding efforts[cite: 34, 36, 37].",
    achievements: [
      "Reduced initial bundle size by 75% (15MB to 3.5MB) by offloading translation files to AWS S3 as dynamic chunks[cite: 36].",
      "Developed a suite of reusable React components to ensure design consistency during a major website rebranding[cite: 37]."
    ],
    tech: ["React", "AWS S3", "JavaScript", "Bundle Optimization"]
  }
];



const skillGroups = [
  { category: "Languages", skills: ["Java", "Go", "Rust", "C++", "TypeScript", "Python", "SQL"] },
  { category: "Systems & Architecture", skills: ["Paxos", "Raft", "Fault Tolerance", "Sharding", "Kafka", "gRPC"] },
  { category: "Cloud & DevOps", skills: ["AWS (EC2, S3, Lambda)", "Docker", "Kubernetes", "Terraform", "CI/CD"] },
  { category: "Databases", skills: ["PostgreSQL", "DynamoDB", "MongoDB", "Query Optimization"] }
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