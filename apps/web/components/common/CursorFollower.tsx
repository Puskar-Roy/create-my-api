"use client";
import { useEffect, useRef } from "react";

const CursorFollower = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    document.addEventListener("mousemove", moveCursor);
    return () => document.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed z-[50] top-0 left-0 w-6 h-6 bg-white/70 opacity-75 rounded-full pointer-events-none shadow-[0_0_10px_#fff] transition-transform duration-75 ease-out"
    />
  );
};

export default CursorFollower;