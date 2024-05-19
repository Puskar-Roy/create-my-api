import React from "react";
import { FlipWords } from "@/components/ui/flip-words";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/create-api.png";
import { Github , NPM } from "@/utils/svg";
import npm from '@/public/npm.svg'

export function FlipWordsDemo() {
  const words = ["better", "cute", "beautiful", "modern"];

  return (
    <div className="flex justify-center sm:justify-between items-center flex-col sm:flex-row">
      <Image
        className="z-10 h-[] w-[300px] sm:h-[500px] sm:w-[500px] animate-float"
        src={logo}
        alt="Logo"
      />

      <div className="h-auto flex justify-center flex-col gap-[4rem] items-center px-4 ">
        <div className="text-4xl md:text-[3rem] text-center sm:text-left  mx-auto font-bold text-neutral-600 dark:text-neutral-400">
          Build
          <FlipWords className="text-blue-900" words={words} /> <br />
          websites with Aceternity UI
        </div>
        <div className="flex flex-col md:flex-row gap-5">
          <button className="flex gap-3 cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black px-7 py-3 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900 z-10">
            <Github />
            <Link href="https://github.com/Puskar-Roy">Github</Link>
          </button>

          <button className="flex gap-3 cursor-pointer text-white font-semibold bg-gradient-to-r from-red-600 to-red-400 px-7 py-3 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-white hover:from-red-600 hover:to-red-400 z-10">
            <Image src={npm} alt={"npm"} />
            <Link href="https://github.com/Puskar-Roy">npm</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

// #780500
// #cb3805;
