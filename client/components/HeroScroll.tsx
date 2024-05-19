"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import test from "@/public/create-my-api-npm.png";
import { Montserrat } from "next/font/google";

const alata = Montserrat({
  weight: "800",
  subsets: ["latin"],
  display: "swap",
});

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden z-5">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Unleash the power of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
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
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={test}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
