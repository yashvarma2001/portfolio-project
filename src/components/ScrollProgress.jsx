import React, { useState, useEffect } from 'react';
import './ScrollProgress.css';

const ScrollProgress = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const sections = ['hero', 'about', 'education', 'experience', 'projects', 'contact'];

  useEffect(() => {

    const handleScrollTop = () => {
      if (window.scrollY < 100) {
        setActiveSection('hero');
      }
    };

    // 2. INTERSECTION OBSERVER: For general scrolling
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px', 
      threshold: 0,
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

    window.addEventListener('scroll', handleScrollTop);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScrollTop);
    };
  }, []);

  return (
    <nav className="scroll-spy">
      {sections.map((id) => (
        <a
          key={id}
          href={`#${id}`}
          className={`spy-dot-wrapper ${activeSection === id ? 'active' : ''}`}
          onClick={(e) => {
            e.preventDefault();
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <div className="spy-dot"></div>
          <span className="dot-label">{id.replace('-', ' ')}</span>
        </a>
      ))}
    </nav>
  );
};

export default ScrollProgress;