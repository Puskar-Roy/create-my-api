"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const BubbleCursor: React.FC = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [bubbles, setBubbles] = useState<{ x: number; y: number }[]>([]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
      setBubbles((prev) => [
        ...prev,
        { x: event.clientX, y: event.clientY },
      ]);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setBubbles((prev) => prev.slice(1));
    }, 100); // Adjust the interval for bubble flow speed
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {bubbles.map((bubble, index) => (
        <motion.div
          key={index}
          style={{
            position: "fixed",
            left: bubble.x,
            top: bubble.y,
            height: `${Math.random() * 15 + 5}px`, // Bubble size between 5px and 20px
            width: `${Math.random() * 15 + 5}px`,
            borderRadius: "50%",
            backgroundColor: `rgba(255, 255, 255, ${Math.random()})`, // Random opacity for bubbles
            pointerEvents: "none",
            transform: "translate(-50%, -50%)",
          }}
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      ))}
      <motion.div
        style={{
          position: "fixed",
          left: cursorPosition.x,
          top: cursorPosition.y,
          height: "20px",
          width: "20px",
          borderRadius: "50%",
          backgroundColor: "rgba(255, 0, 0, 0.8)", // Main cursor color
          pointerEvents: "none",
          transform: "translate(-50%, -50%)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      />
    </>
  );
};

export default BubbleCursor;
