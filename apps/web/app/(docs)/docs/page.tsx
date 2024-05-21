import React from "react";
import Image from "next/image";
import logo from "../../../public/create-api.png";

import GIthubButton from "../../../components/ui/GIthub-Button";
import Link from "next/link";

const page = () => {
  return (
    <div className="flex justify-center flex-col gap-3 items-center text-3xl text-orange-300 bg-slate-800 h-screen w-screen">
      <div className="min-h-[100vh] w-full bg-slate-900   dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="flex justify-center items-center gap-5 flex-col">
          <Image
            className="animate-float"
            src={logo}
            height={400}
            width={400}
            alt="Logo"
          />{" "}
          <div className="font-bold text-center text-slate-300">
            <div>
              <span className={`text-orange-300 font-extrabold `}>Create</span>{" "}
              <span className={`text-orange-500 font-extrabold `}>My</span>{" "}
              <span className={`text-red-500 font-extrabold `}>API</span>
            </div>
            Docs Page coming soon 👻{" "}
          </div>
          <div className="flex justify-center items-center">
            <Link href="https://github.com/Puskar-Roy/create-my-api">
              <GIthubButton />
            </Link>
          </div>
          <Link
            href="/"
            className="bg-gradient-to-r from-gray-800 to-black px-4 py-2 rounded-full text-sm text-slate-300 z-10 border border-gray-600 hover:scale-105 duration-200 hover:border-gray-800 hover:from-black hover:to-gray-900 hover:text-white"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
