import React, { useState, useEffect } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleHover = () => setHovered(true);
    const handleUnhover = () => setHovered(false);

    window.addEventListener('mousemove', moveCursor);

    const targets = document.querySelectorAll('a, button, .clickable');
    targets.forEach((target) => {
      target.addEventListener('mouseenter', handleHover);
      target.addEventListener('mouseleave', handleUnhover);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      targets.forEach((target) => {
        target.removeEventListener('mouseenter', handleHover);
        target.removeEventListener('mouseleave', handleUnhover);
      });
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${hovered ? 'cursor-hover' : ''}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
};

export default CustomCursor;