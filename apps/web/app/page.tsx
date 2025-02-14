"use client";

import { HeroScrollDemo } from "../components/HeroScroll";
import { FlipWordsDemo } from "../components/Words";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Engine } from "tsparticles-engine";
import { useCallback } from "react";
import CardsSection from "../components/CardsSection";
import { InfinitetDemo } from "../components/ScrollSection";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollProgressBar from "../components/ScrollProgress"; // Import the progress bar
import BackToTopButton from "../components/BacktoTop";
import "../components/style.css";
export default function Home() {
  const init = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <main className="">
      {/* Scroll Progress Bar */}
      <ScrollProgressBar />

     
  
        <div className="flex flex-col justify-center items-center z-10">
          <FlipWordsDemo />
          <HeroScrollDemo />
          <CardsSection />
          <InfinitetDemo />
        </div>
        <BackToTopButton />
        <Footer />
     
    </main>
  );
}
