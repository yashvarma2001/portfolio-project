import React from 'react';
import { FaBookOpen, FaExternalLinkAlt } from 'react-icons/fa';
import './Publications.css';

const pubData = [
  {
    title: "MR images-based Alzheimer's Detection using AlexNet and InceptionV3",
    publisher: "IEEE Conference",
    year: "2024",
    description: "Deep learning research utilizing convolutional neural networks for early-stage Alzheimer's identification."
  },
  {
    title: "Windows Malware Detection Using CNN and AlexNet Learning Models",
    publisher: "Springer Conference Proceedings",
    year: "2022",
    description: "Analysis of malware detection efficiency using neural network models in Windows environments."
  }
];

const Publications = () => {
  return (
    <section className="pubs-section">
      <div className="pubs-container">
        <h2 className="pubs-title">Selected Publications</h2>
        <div className="pubs-grid">
          {pubData.map((pub, i) => (
            <div key={i} className="pub-card">
              <div className="pub-header">
                <FaBookOpen className="pub-icon" />
                <span className="pub-year">{pub.year}</span>
              </div>
              <h3 className="pub-headline">{pub.title}</h3>
              <p className="pub-publisher">{pub.publisher}</p>
              <p className="pub-summary">{pub.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;