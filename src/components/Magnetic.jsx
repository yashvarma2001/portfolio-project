import React, { useRef, useState } from 'react';
import './Magnetic.css';

const Magnetic = ({ children }) => {
  const mouseRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = mouseRef.current.getBoundingClientRect();
    
    // Calculate the center of the button
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // Calculate distance between cursor and center
    const deltaX = clientX - centerX;
    const deltaY = clientY - centerY;

    // Move the element 30% of the distance to the cursor
    setPosition({ x: deltaX * 0.3, y: deltaY * 0.3 });
  };

  const handleMouseLeave = () => {
    // Snap back to original position
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div
      ref={mouseRef}
      className="magnetic-wrapper"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    >
      {children}
    </div>
  );
};

export default Magnetic;