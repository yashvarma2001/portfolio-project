import React, { useRef, useState } from 'react';
import './Magnetic.css';

const Magnetic = ({ children, onClick }) => { // Added onClick prop
  const mouseRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = mouseRef.current.getBoundingClientRect();
    
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    const deltaX = clientX - centerX;
    const deltaY = clientY - centerY;

    setPosition({ x: deltaX * 0.3, y: deltaY * 0.3 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div
      ref={mouseRef}
      className="magnetic-wrapper"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick} /* CRITICAL: Pass the click through */
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        display: 'inline-block', /* Ensure it doesn't take 100% width */
        cursor: 'none' /* Maintain your custom cursor */
      }}
    >
      {children}
    </div>
  );
};

export default Magnetic;