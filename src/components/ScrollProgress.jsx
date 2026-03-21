import React, { useState, useEffect } from 'react';
import './ScrollProgress.css';

const ScrollProgress = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const sections = ['hero', 'about', 'education', 'experience', 'contact'];

  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.5, // Trigger when 50% of the section is visible
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="scroll-spy">
      {sections.map((id) => (
        <a
          key={id}
          href={`#${id}`}
          className={`spy-dot ${activeSection === id ? 'active' : ''}`}
        >
          <span className="dot-label">{id.charAt(0).toUpperCase() + id.slice(1)}</span>
        </a>
      ))}
    </div>
  );
};

export default ScrollProgress;