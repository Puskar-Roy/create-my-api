
import React from "react";
import { FlipWords } from "@/components/ui/flip-words";
import Link from "next/link";
import Image from "next/image";
import logo from '@/public/create-api.png'

export function FlipWordsDemo() {
  const words = ["better", "cute", "beautiful", "modern"];

  return (
    <div className="flex justify-center sm:justify-between items-center flex-col sm:flex-row">
      <Image className="z-10 h-[] w-[300px] sm:h-[500px] sm:w-[500px]" src={logo} alt="Logo" />

      <div className="h-auto flex justify-center flex-col gap-[4rem] items-center px-4 ">
        <div className="text-4xl md:text-[3rem] text-center sm:text-left  mx-auto font-bold text-neutral-600 dark:text-neutral-400">
          Build
          <FlipWords className="text-blue-900" words={words} /> <br />
          websites with Aceternity UI
        </div>
        {/* <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
          <button className="w-40 h-10 rounded-xl cursor-pointer bg-black border dark:border-white border-transparent text-white text-sm z-10">
            <Link href="https://github.com/Puskar-Roy">Join now</Link>
          </button>
          <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm z-50">
            Signup
          </button>
        </div> */}
      </div>
    </div>
  );
}
