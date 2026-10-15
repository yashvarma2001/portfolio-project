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
  "Fault Tolerance": <FaMicrochip color="#F87171" />,
  
"EC2": <FaServer color="#F8FAFC" />,
"ASTs": <FaMicrochip color="#F8FAFC" />,
"Agile": <FaServer color="#F8FAFC" />,
"Bundle Optimization": <FaMicrochip color="#F8FAFC" />,
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
    company: "Cornell University",
    duration: "Feb 2026 - Present",
    location: "Ithaca, NY",
    logo: `${import.meta.env.BASE_URL}assets/cornellLogo.png`,
    summary: "Researching city-scale urban mobility using graph neural networks and multi-agent LLM pipelines.",
    achievements: [
     "Built a GATv2/LSTM traffic prediction engine in Python modeling road networks as dynamic spatial graphs across 20 U.S. cities; achieved R² of 0.98 with 16-city incremental training.",
     "Engineered a multi-agent LLM pipeline using AutoGen and LiteLLM to simulate urban mobility patterns, with structured JSON validation to reduce hallucinations.",
     "Built an end-to-end emissions analyzer using React, Node.js, and PostgreSQL on AWS; designed a FastAPI orchestrator and horizontally scaled Docker architecture across EC2 instances, reducing runtime by 94%."
    ],
    tech: ["Python", "AutoGen", "LiteLLM", "GATv2", "LSTM", "FastAPI", "React", "Node.js", "PostgreSQL", "Docker", "AWS", "EC2"]
  },
  { 
    title: "Software Engineer", 
    company: "Cimpress", 
    duration: "Aug 2023 - Jan 2025", 
    location: "Remote",
    logo: `${import.meta.env.BASE_URL}assets/cimpressLogo.png`,
    summary: "Architected high-throughput commerce APIs and optimized checkout flows for 1M+ monthly cart transactions.",
    achievements: [
      "Architected a highly scalable discount-matching REST API in Node.js using Abstract Syntax Trees and GraphQL, processing 1M+ monthly cart transactions.",
      "Re-architected the core cart recalculation service in Node.js and TypeScript for high-throughput traffic, reducing checkout latency by 25% through asynchronous API parallelization and intelligent payload caching.",
      "Resolved 10+ critical API errors, eliminating order blockages to improve checkout reliability for 6,000+ monthly users.",
      "Engineered an interactive discount UX using React, Hooks, and Redux for complex state management, driving a 25% increase in average order value (AOV).",
      "Awarded High Ownership Award for technical excellence, proactive system analysis, and clear documentation."
    ],
    tech: ["Node.js", "TypeScript", "GraphQL", "React", "Redux", "ASTs"]
  },
  { 
    title: "Software Engineer Intern", 
    company: "Cimpress", 
    duration: "Feb 2023 - Aug 2023", 
    location: "Remote",
    logo: `${import.meta.env.BASE_URL}assets/cimpressLogo.png`,
    summary: "Optimized frontend performance and contributed to major rebranding efforts.",
    achievements: [
      "Optimized React performance by serving translation files as chunks via AWS S3, reducing the bundle size by 75%.",
      "Contributed to a major website rebranding by developing a suite of reusable React components, ensuring cross-platform consistency with the updated brand identity and design system."
    ],
    tech: ["React", "AWS S3", "JavaScript", "Bundle Optimization"]
  }
];



const skillGroups = [
  {
    category: "Languages",
    skills: ["Java", "Go", "Rust", "Python", "TypeScript", "JavaScript", "C++", "C#", "SQL", "Shell"]
  },
  {
    category: "Full-Stack & Web",
    skills: ["React", "Redux", "HTML5/CSS3", "Node.js", "GraphQL", "REST", "API Design", "State Management"]
  },
  {
    category: "Distributed Systems",
    skills: ["Microservices", "gRPC", "Kafka", "Consensus (Paxos, Raft)", "Two-Phase Commit (2PC)"]
  },
  {
    category: "AI & Machine Learning",
    skills: ["Generative AI", "PyTorch", "LLM Inference Pipelines", "AI Coding (Cursor, Copilot)"]
  },
  {
    category: "Cloud & Databases",
    skills: ["AWS (EKS, ECR, EC2, S3, Lambda)", "Docker", "Kubernetes", "Terraform", "CI/CD", "PostgreSQL", "MongoDB", "DynamoDB", "Redis"]
  }
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