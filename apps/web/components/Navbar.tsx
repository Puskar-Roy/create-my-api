"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import logo from "../public/create-api.png";
import GithubButton from "./ui/GIthub-Button";

const montserrat = Montserrat({
  weight: "800",
  subsets: ["latin"],
  display: "swap",
});

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHamburger = () => setIsOpen((prev) => !prev);

  return (
    <div className="w-[90%] sm:w-[80%] mx-auto mb-12 py-6">
      <nav className="relative z-20 bg-transparent">
        <div className="px-6 md:px-12 lg:container lg:mx-auto lg:px-6 lg:py-4">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <Link href="/" className="flex items-center gap-3">
              <Image src={logo} height={50} width={50} alt="logo" />
              <h2 className={`text-2xl font-bold ${montserrat.className}`}>
                <span className="text-orange-300 font-extrabold">Create</span>{" "}
                <span className="text-orange-500 font-extrabold">My</span>{" "}
                <span className="text-red-500 font-extrabold">API</span>
              </h2>
            </Link>

            {/* Hamburger Menu and Navigation Links */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="hamburger"
                className="peer hidden"
                checked={isOpen}
                onChange={toggleHamburger}
              />
              <label
                htmlFor="hamburger"
                className="lg:hidden p-6 cursor-pointer relative z-20 -mr-6"
              >
                <div className="h-0.5 w-6 bg-white m-auto rounded transition-transform duration-300"></div>
                <div className="mt-2 h-0.5 w-6 bg-white m-auto rounded transition-transform duration-300"></div>
              </label>

              <div
                className={`fixed inset-0 w-[calc(100%-4.5rem)] translate-x-[-100%] transition-transform duration-300 lg:translate-x-0 lg:static lg:w-auto lg:shadow-none peer-checked:translate-x-0 ${
                  isOpen ? "-translate-y-20" : ""
                }`}
              >
                <ul className="flex flex-col items-center space-y-8 px-6 pt-32 text-white md:px-12 lg:flex-row lg:space-y-0 lg:space-x-12 lg:pt-0">
                  <li>
                    <Link href="#" className="group relative">
                      <span className="relative hover:text-orange-300">
                        Home
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://github.com/Puskar-Roy/create-my-api"
                      className="group relative flex items-center"
                    >
                      <GithubButton />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
