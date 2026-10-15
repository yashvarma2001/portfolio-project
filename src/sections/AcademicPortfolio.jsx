
import { FaGithub, FaBookOpen, FaServer, FaShieldAlt, FaExternalLinkAlt, FaCloud } from 'react-icons/fa';
import './AcademicPortfolio.css';

const AcademicPortfolio = () => {
  const items = [
    {
      type: "Distributed Systems",
      title: "Fault-Tolerant KV Store",
      org: "Java Implementation",
      desc: "Architected a custom Multi-Paxos sharded key-value store using hash-based sharding. Integrated two-phase commit (2PC) for atomic multi-key transactions and strict fault tolerance.",
      tech: ["Java", "Multi-Paxos", "2PC"],
      icon: <FaServer />,
    },
    {
      type: "Cloud & AI",
      title: "TDM Activity Generation Pipeline",
      org: "AWS Bedrock, Lambda, Fargate",
      desc: "Serverless pipeline using Bedrock batch inference to generate daily schedules for 100k+ synthetic urban personas. Moved memory generation to a 10-shard parallel Fargate architecture for a 10x speedup (63 min to 25 min).",
      tech: ["Python", "Bedrock", "Lambda", "Fargate", "DynamoDB"],
      icon: <FaCloud />,
    },
    {
      type: "System Security",
      title: "Secure Storage System",
      org: "Go & Cryptography",
      desc: "Engineered end-to-end encryption using RSA/AES. Implemented Argon2 hashing and DAC to manage permissions against Dolev-Yao models.",
      tech: ["Go", "RSA/AES", "Argon2"],
      icon: <FaShieldAlt />,
      link: "https://github.com/yashvarma2001/Secure-key-value-store"
    },
    {
      type: "Publication",
      title: "Alzheimer's Detection",
      org: "IEEE Conference (2024)",
      desc: "Research on MR image-based detection using AlexNet and InceptionV3 deep learning models.",
      tech: ["CNN", "AlexNet", "Medical AI"],
      icon: <FaBookOpen />,
      link: "https://ieeexplore.ieee.org/document/10924014"
    },
    {
      type: "Publication",
      title: "Malware Detection",
      org: "Springer Proceedings",
      desc: "Analysis of Windows malware detection efficiency using CNN and AlexNet learning models.",
      tech: ["ML", "Security", "AlexNet"],
      icon: <FaBookOpen />,
      link: "https://link.springer.com/chapter/10.1007/978-3-031-20601-6_25"
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

              {item.link ?<a href={item.link} target="_blank" rel="noopener noreferrer" className="item-link">
                <span>{item.type === "Publication" ? "Read Paper" : "View Source"}</span>
                <FaExternalLinkAlt className="link-icon" />
              </a> : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademicPortfolio;