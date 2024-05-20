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

export default function Home() {
  const init = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <main className="">
      <div className="min-h-[120rem] w-full bg-slate-900   dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <Particles
          className="-z-3"
          init={init}
          options={{
            background: {
              color: {
                value: "#232741",
              },
              opacity: 0,
            },
            fpsLimit: 120,
            fullScreen: {
              enable: true,
              zIndex: 1,
            },
            interactivity: {
              detectsOn: "canvas",
              events: {
                onClick: {
                  enable: true,
                  mode: "bubble",
                },
                onHover: {
                  enable: false,
                  mode: "bubble",
                  parallax: {
                    enable: false,
                    force: 60,
                    smooth: 10,
                  },
                },
                resize: {
                  enable: true,
                  delay: 0.5,
                },
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
                bubble: {
                  distance: 100,
                  duration: 10,
                  opacity: 0.8,
                  size: 15,
                },
                trail: {
                  delay: 1,
                  quantity: 1,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: false,
                opacity: 0.5,
                width: 0,
              },
              collisions: {
                enable: false,
              },
              move: {
                angle: {
                  offset: 0,
                  value: 25,
                },
                direction: "top",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 1.5,
                straight: true,
              },
              number: {
                density: {
                  enable: true,
                  area: 1000,
                },
                value: 100,
              },
              opacity: {
                random: {
                  enable: true,
                  minimumValue: 0.1,
                },
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
              twinkle: {
                particles: {
                  enable: true,
                  frequency: 0.5,
                  opacity: 1,
                },
              },
              wobble: {
                distance: 3,
                enable: true,
                speed: {
                  angle: 50,
                  move: 10,
                },
              },
            },
            detectRetina: true,
          }}
        />
        <div className="w-screen">
          <Navbar />
          <div className="flex flex-col justify-center items-center z-10">
            <FlipWordsDemo />
            <HeroScrollDemo />
            <CardsSection />
            <InfinitetDemo />
          </div>
        </div>
      </div>
    </main>
  );
}
