import React from 'react'
import { ThreeDCardDemo } from './ThreeDCard'

import { Ubuntu } from "next/font/google";

const alata = Ubuntu({
  weight: "500",
  subsets: ["latin"],
  display: "swap",
});
const CardsSection = () => {
  return (
    <div className="flex justify-center items-center flex-col sm:flex-row gap-2 sm:gap-5 w-[80%] sm:w-full">
      <div>
        <h1 className="text-5xl text-center sm:text-left sm:text-6xl font-bold text-white">
          Set Up APIs <br /> <span className="text-orange-300">in</span>{" "}
          <span className="text-orange-500">a</span>{" "}
          <span className="text-red-500">Snap</span>
        </h1>
        <p className="sm:max-w-lg text-base md:text-base mt-8 text-neutral-200 text-center sm:text-left">
          <span className={`${alata.className} font-extrabold text-orange-300`}>
            Create
          </span>{" "}
          <span className={`${alata.className} font-extrabold text-orange-500`}>
            My
          </span>{" "}
          <span className={`${alata.className} font-extrabold text-red-500`}>
            API
          </span>{" "}
          CLI simplifies API project setup. It lets you create RESTful APIs
          swiftly, supporting various backend tech and DBs. Ideal for devs at
          any level
        </p>
      </div>
      <ThreeDCardDemo />
    </div>
  );
}

export default CardsSection
