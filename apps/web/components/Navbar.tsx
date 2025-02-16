"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import logo from "../public/create-api.png";
import GIthubButton from "./ui/GIthub-Button";

const alata = Montserrat({
  weight: "800",
  subsets: ["latin"],
  display: "swap",
});

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHamburger = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-[90%] sm:w-[80%] mx-auto mb-[50px] py-6">
      <div className="relative z-20 bg-transparent">
        <div className="px-6 md:px-12 lg:container lg:mx-auto lg:px-6 lg:py-4">
          <div className="flex items-center justify-between">
            <div className="relative z-20">
              <Link href="/" className="flex justify-center items-center gap-3">
                <Image src={logo} height={50} width={50} alt="logo" />
                <h2 className={`text-2xl font-bold ${alata.className}`}>
                  <span
                    className={`text-orange-300 font-extrabold ${alata.className}`}
                  >
                    Create
                  </span>{" "}
                  <span
                    className={`text-orange-500 font-extrabold ${alata.className}`}
                  >
                    My
                  </span>{" "}
                  <span
                    className={`text-red-500 font-extrabold ${alata.className}`}
                  >
                    API
                  </span>
                </h2>
              </Link>
            </div>

            <div className="flex items-center justify-end">
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
                  className="m-auto h-0.5 w-6 rounded bg-white transition duration-300"
                ></div>
                <div
                  aria-hidden="true"
                  className="m-auto mt-2 h-0.5 w-6 rounded bg-white transition duration-300"
                ></div>
              </label>

              <div
                className={`peer-checked:translate-x-0 fixed inset-0 w-[calc(100%-4.5rem)] translate-x-[-100%]  shadow-xl transition duration-300  lg:w-auto lg:static lg:shadow-none lg:translate-x-0 ${
                  isOpen ? "translate-x-0 -translate-y-30 backdrop-blur-xl rounded-3xl" : ""
                }`}
              >
                <div className="flex flex-col h-full justify-between items-center lg:items-center lg:flex-row">
                  <ul className="px-6 pt-32 text-white space-y-8 md:px-12 lg:space-y-0 lg:flex lg:space-x-12 lg:pt-0">
                    <li className="flex justify-center items-center">
                      <Link
                        href="/store"
                        className="group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 before:origin-right before:scale-x-0 "
                      >
                        <span className={`relative  text-orange-300 text-center font-extrabold ${alata.className} `}>
                          API STORE
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://github.com/Puskar-Roy/create-my-api"
                        className="group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 before:origin-right before:scale-x-0 flex justify-center items-center"
                      >
                        <span className="relative hover:text-orange-300 ">
                          <GIthubButton />
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
