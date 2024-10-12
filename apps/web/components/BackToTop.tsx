// components/BackToTopButton.tsx

import React, { useEffect, useState } from "react";
const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  // Show button when scrolled down 300px
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll to top
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={` fixed bottom-4 right-4 p-4  text-white rounded-full shadow-md transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`}
      style={{
        display: isVisible ? "flex" : "none",
        zIndex: 1,
        backgroundColor: "#EF4444",
      }} // Show button only when scrolled down
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="48px"
        viewBox="0 -960 960 960"
        width="48px"
        fill="#000000"
      >
        <path d="M480-554 304-378q-9 9-21 8.5t-21-9.5q-9-9-9-21.5t9-21.5l197-197q9-9 21-9t21 9l198 198q9 9 9 21t-9 21q-9 9-21.5 9t-21.5-9L480-554Z" />
      </svg>
    </button>
  );
};

export default BackToTopButton;
