"use client"; // Ensures the component runs on the client side

import { useState, useEffect } from "react";

/**
 * ScrollProgressBar Component
 * 
 * Displays a progress bar at the top of the screen indicating the user's
 * scrolling progress as a percentage of the total page height.
 */
const ScrollProgressBar = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0); // Tracks the percentage of page scrolled

  /**
   * Updates the scroll percentage based on the user's scroll position.
   */
  const handleScroll = () => {
    const scrollTop = window.scrollY; // Pixels scrolled from the top
    const docHeight = document.body.scrollHeight - window.innerHeight; // Total scrollable height
    const scrolled = (scrollTop / docHeight) * 100; // Calculate percentage scrolled
    setScrollPercentage(scrolled); // Update state with the new percentage
  };

  // Attach the scroll event listener on mount and clean it up on unmount
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        position: "fixed", // Keeps the progress bar fixed at the top
        top: 0,
        left: 0,
        width: `${scrollPercentage}%`, // Sets the width according to scroll progress
        height: "5px", // Height of the progress bar
        background: "linear-gradient(90deg, #ff4500, #a52a2a, #ffa500)", // Gradient from red to brown to orange
        zIndex: 100, // Ensures the bar stays on top of other elements
        transition: "width 0.25s ease-out", // Smooth width transition
      }}
    />
  );
};

export default ScrollProgressBar;
