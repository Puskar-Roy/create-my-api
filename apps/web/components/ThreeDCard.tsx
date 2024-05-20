"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import TerminalCard from "./TerminalCard";

export function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var">
      <CardBody className=" relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-white"
        >
          <TerminalCard/>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
