import React from 'react';
import { FaGithub, FaBookOpen, FaServer, FaShieldAlt, FaExternalLinkAlt } from 'react-icons/fa';
import './AcademicPortfolio.css';

const AcademicPortfolio = () => {
  const items = [
    {
      type: "Distributed Systems",
      title: "Fault-Tolerant KV Store",
      org: "Java Implementation",
      desc: "Built a sharded store with hash-based sharding and a custom Multi-Paxos consensus engine. Integrated 2PC for atomic multi-key transactions.",
      tech: ["Java", "Multi-Paxos", "2PC"],
      icon: <FaServer />,
      link: "https://github.com/yashvarma2001"
    },
    {
      type: "Security Research",
      title: "Secure Storage System",
      org: "Go & Cryptography",
      desc: "Engineered end-to-end encryption using RSA/AES. Implemented Argon2 hashing and DAC to manage permissions against Dolev-Yao models.",
      tech: ["Go", "RSA/AES", "Argon2"],
      icon: <FaShieldAlt />,
      link: "https://github.com/yashvarma2001"
    },
    {
      type: "Publication",
      title: "Alzheimer's Detection",
      org: "IEEE Conference (2024)",
      desc: "Research on MR image-based detection using AlexNet and InceptionV3 deep learning models.",
      tech: ["CNN", "AlexNet", "Medical AI"],
      icon: <FaBookOpen />,
      link: "#"
    },
    {
      type: "Publication",
      title: "Malware Detection",
      org: "Springer Proceedings",
      desc: "Analysis of Windows malware detection efficiency using CNN and AlexNet learning models.",
      tech: ["ML", "Security", "AlexNet"],
      icon: <FaBookOpen />,
      link: "#"
    }
  ];

  return (
    <section id="portfolio" className="portfolio-grid-section">
      <div className="portfolio-container">
        <div className="portfolio-header">
          <h2 className="portfolio-title">Projects & Research</h2>
          <p className="portfolio-subtitle">Core systems and academic publications</p>
        </div>

        <div className="portfolio-grid">
          {items.map((item, i) => (
            <div key={i} className="portfolio-card">
              <div className="card-top">
                <span className="item-type">{item.type}</span>
                <span className="item-icon">{item.icon}</span>
              </div>
              
              <h3 className="item-title">{item.title}</h3>
              <p className="item-org">{item.org}</p>
              <p className="item-desc">{item.desc}</p>
              
              <div className="item-tech-stack">
                {item.tech.map((t, idx) => (
                  <span key={idx} className="item-badge">{t}</span>
                ))}
              </div>

              <a href={item.link} target="_blank" rel="noopener noreferrer" className="item-link">
                <span>{item.type === "Publication" ? "Read Paper" : "View Source"}</span>
                <FaExternalLinkAlt className="link-icon" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademicPortfolio;