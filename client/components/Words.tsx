import React from "react";
import { FlipWords } from "@/components/ui/flip-words";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/create-api.png";
import { Github } from "@/utils/svg";
import { FaNpm, FaArrowCircleRight } from "react-icons/fa";
import { Copse, Raleway, Montserrat } from "next/font/google";

const alata = Montserrat({
  weight: "800",
  subsets: ["latin"],
  display: "swap",
});
export function FlipWordsDemo() {

 const words = ["friendly", "powerful", "efficient", "reliable"];


  return (
    <div className="flex justify-center sm:justify-between items-center flex-col sm:flex-row">
      <Image
        className="z-10 h-[] w-[300px] sm:h-[500px] sm:w-[500px] animate-float"
        src={logo}
        alt="Logo"
      />

      <div className="h-auto flex justify-center flex-col gap-[4rem] items-center px-4 ">
        <div className="text-4xl md:text-[3rem] text-center sm:text-left  mx-auto font-medium text-neutral-600 dark:text-neutral-400 z-10">
          Build
          <FlipWords className="text-blue-900" words={words} />
          API's with <br />
          <span className={`text-orange-300 font-extrabold ${alata.className}`}>
            Create
          </span>{" "}
          <span className={`text-orange-500 font-extrabold ${alata.className}`}>
            My
          </span>{" "}
          <span className={`text-red-500 font-extrabold ${alata.className}`}>
            API
          </span>
        </div>
        <div className="flex justify-center text-start md:flex-row gap-5 flex-row sm:flex-row">
          <button className="flex gap-3 cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black px-7 py-[0.85rem] rounded-full border border-gray-600 hover:scale-105 duration-200 hover:border-white hover:from-red-700 hover:to-red-600 z-10">
            <Link href="https://github.com/Puskar-Roy">
              <FaArrowCircleRight className="text-2xl" />
            </Link>
          </button>

          <button className="flex gap-3 cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black px-4 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-white hover:border-white hover:from-red-700 hover:to-red-600 z-10">
            <Link href="https://github.com/Puskar-Roy">
              <FaNpm className="text-5xl" />
            </Link>
          </button>

          <button className="flex gap-3 cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black px-7 py-[0.85rem] rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900 z-10">
            <Link href="https://github.com/Puskar-Roy">
              <Github />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

// #780500
// #cb3805;
