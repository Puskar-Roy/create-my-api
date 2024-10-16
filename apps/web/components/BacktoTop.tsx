import React, { useEffect, useState } from "react";
const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
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
      }}
    >
      <svg
      className="h-4 w-4 md:h-8 md:w-8"
        xmlns="http://www.w3.org/2000/svg"
        height="40px"
        viewBox="0 -960 960 960"
        width="40px"
        fill="#000000"
      >
        <path d="M480-554 304-378q-9 9-21 8.5t-21-9.5q-9-9-9-21.5t9-21.5l197-197q9-9 21-9t21 9l198 198q9 9 9 21t-9 21q-9 9-21.5 9t-21.5-9L480-554Z" />
      </svg>
    </button>
  );
};

export default BackToTopButton;