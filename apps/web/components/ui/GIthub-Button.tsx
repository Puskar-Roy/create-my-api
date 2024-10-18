"use client";
import React, { useEffect, useState } from "react";

const GithubButton = () => {
  const [stars, setStars] = useState(null);

  useEffect(() => {
    const fetchRepoData = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/repos/puskar-roy/create-my-api"
        );
        const data = await response.json();
        setStars(data.stargazers_count);
      } catch (error) {
        console.log("Failed to fetch repo stars ", error);
      }
    };
    fetchRepoData();
  }, []);

  return (
    <div className="relative flex justify-center overflow-hidden bg-black font-sans rounded-[0.60rem]">
      {/* Actual Github button with input field styles */}
      <div className="mx-auto flex w-full max-w-lg items-center justify-center">
        <div className="relative z-10 flex w-full cursor-pointer items-center overflow-hidden rounded-xl border border-slate-800 p-[1.5px]">
          <div className="animate-rotate absolute inset-0 h-full w-full rounded-full bg-[conic-gradient(#e90e50_20deg,transparent_120deg)]"></div>
          <div className="relative z-20 flex w-full rounded-[0.60rem] bg-black">
            <button className="relative z-50  rounded-lg border border-black bg-black px-4 py-2 text-center text-sm text-white shadow-2xl transition duration-200 hover:bg-gray-900 flex items-center">
              <svg
                className="mr-2 text-white"
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                height="24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
              <span>Star on Github</span>
              <span className="flex items-center ml-4 group-hover:text-yellow-500 transition-colors duration-200 ease-in-out">
                <svg
                  className="text-yellow-500"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                  height="24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                <span className="text-white ml-2">{stars}</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GithubButton;
