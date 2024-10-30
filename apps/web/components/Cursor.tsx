import React, { useEffect, useRef, useState } from 'react';

const CursorTrail: React.FC = () => {
  const trailRef = useRef<HTMLDivElement>(null);
  const [positions, setPositions] = useState<{ x: number; y: number }[]>([]);
  const numCircles = 20; // Increased number of circles for the trail
  const [resetTimeout, setResetTimeout] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      setPositions((prev) => [
        { x: clientX, y: clientY },
        ...prev.slice(0, numCircles - 1),
      ]);

      // Clear the previous timeout if the mouse is moving
      if (resetTimeout) {
        clearTimeout(resetTimeout);
      }

      // Set a new timeout to reset circles after 100ms of inactivity
      setResetTimeout(setTimeout(() => {
        resetCircles();
      }, 100));
    };

    const resetCircles = () => {
      // Reset all positions to concentric circles
      setPositions((prev) => {
        const lastPosition = prev[0]; // Get the last known position
        return Array.from({ length: numCircles }, (_, index) => ({
          x: lastPosition.x,
          y: lastPosition.y,
        }));
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (resetTimeout) {
        clearTimeout(resetTimeout);
      }
    };
  }, [resetTimeout]);

  return (
    <div ref={trailRef} className="cursor-trail">
      {positions.map((pos, index) => (
        <div
          key={index}
          className="circle"
          style={{
            left: pos.x,
            top: pos.y,
            width: `${30 - (index * 1.5)}px`, // Slightly decreasing size per circle
            height: `${30 - (index * 1.5)}px`,
            opacity: 0.9 - index * 0.04, // Gradually fading out
            transform: `translate(-50%, -50%) scale(${1 - index * 0.03})`,
          }}
        />
      ))}
    </div>
  );
};

export default CursorTrail;
