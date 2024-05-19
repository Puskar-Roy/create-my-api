'use client'
import React, { useState } from "react";
import Link from "next/link";
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHamburger = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative z-20 border-b bg-white dark:bg-slate-900">
      <div className="px-6 md:px-12 lg:container lg:mx-auto lg:px-6 lg:py-4">
        <div className="flex items-center justify-between">
          <div className="relative z-20">
            <a href="#">
              <img
                src="https://tailus.io/sources/blocks/navigation-layout/preview/images/logo.svg"
                alt="logo-tailus"
                className="w-32"
              />
            </a>
          </div>

          <div className="flex items-center justify-end border-l lg:border-l-0">
            <input
              type="checkbox"
              name="hamburger"
              id="hamburger"
              className="peer"
              hidden
              checked={isOpen}
              onChange={toggleHamburger}
            />
            <label
              htmlFor="hamburger"
              className="peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden"
            >
              <div
                aria-hidden="true"
                className="m-auto h-0.5 w-6 rounded bg-sky-900 transition duration-300"
              ></div>
              <div
                aria-hidden="true"
                className="m-auto mt-2 h-0.5 w-6 rounded bg-sky-900 transition duration-300"
              ></div>
            </label>

            <div
              className={`peer-checked:translate-x-0 fixed inset-0 w-[calc(100%-4.5rem)] translate-x-[-100%] bg-white dark:bg-slate-900 border-r shadow-xl transition duration-300 lg:border-r-0 lg:w-auto lg:static lg:shadow-none lg:translate-x-0 ${
                isOpen ? "translate-x-0" : ""
              }`}
            >
              <div className="flex flex-col h-full justify-between lg:items-center lg:flex-row">
                <ul className="px-6 pt-32 text-gray-700 space-y-8 md:px-12 lg:space-y-0 lg:flex lg:space-x-12 lg:pt-0">
                  
                  <li>
                    <Link
                      href="#"
                      className="group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 before:origin-right before:scale-x-0 before:bg-cyan-100 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100"
                    >
                      <span className="relative group-hover:text-cyan-800">
                        Contact
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 before:origin-right before:scale-x-0 before:bg-cyan-100 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100"
                    >
                      <span className="relative group-hover:text-cyan-800">
                        About us
                      </span>
                    </Link>
                  </li>
                </ul>

                <div className="border-t py-8 px-6 md:px-12 md:py-16 lg:border-t-0 lg:border-l lg:py-0 lg:pr-0 lg:pl-6">
                  <a
                    href="#"
                    className="block px-6 py-3 rounded-full bg-gradient-to-r from-sky-600 to-cyan-400 text-center text-white"
                  >
                    Get started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


