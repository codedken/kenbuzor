"use client";

import React, { useEffect, useState } from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import Link from "next/link";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { myRoles } from "@/data";

const Hero = () => {
  const [currentText, setCurrentText] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev === myRoles.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-left-10 -top-40 h-screen md:-left-32 md:-top-20"
          fill="white"
        />
        <Spotlight
          className="left-full top-10 h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="left-72 top-14 h-[80vh] w-[50vw]" fill="pink" />
        <Spotlight
          className="left-[35rem] top-20 h-[80vh] w-[50vw]"
          fill="blue"
        />
        <Spotlight
          className="left-[50rem] top-28 h-[80vh] w-[50vw]"
          fill="yellow"
        />
      </div>
      <div className="absolute left-0 top-0 flex h-screen w-full items-center justify-center bg-white bg-grid-black/[0.2] dark:bg-black-100 dark:bg-grid-white/[0.04]">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100" />
      </div>
      <div className="relative z-10 my-20 flex justify-center">
        <div className="flex max-w-[89vw] flex-col items-center justify-center md:max-w-2xl lg:max-w-[60vw]">
          <h2 className="max-w-80 text-center text-xs uppercase tracking-widest text-blue-100">
            Kennedy&apos;s Portfolio
          </h2>

          <TextGenerateEffect
            className="text-center text-4xl md:text-5xl lg:text-6xl"
            words="Converting Ideas into Intuitive User Experiences"
          />

          <p className="mb-4 text-center text-sm md:text-lg md:tracking-wider lg:text-2xl">
            Hi, I&apos;m Kennedy, a{" "}
            <span className="rounded-sm bg-white px-1 font-bold text-black-100 transition-all">
              {myRoles[currentText]}
            </span>{" "}
          </p>
          <Link href="https://github.com/codedken" target="_blank">
            <MagicButton
              title="My Github Profile"
              icon={<FaLocationArrow />}
              position="right"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
