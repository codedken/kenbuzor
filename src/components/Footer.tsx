import Image from "next/image";
import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import Link from "next/link";
import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <footer className="relative mb-[80px] w-full pb-10 md:mb-5" id="contact">
      <div className="absolute bottom-0 left-0 min-h-96 w-full">
        <Image
          src="/footer-grid.svg"
          alt="footer grid"
          width={100}
          height={100}
          className="h-full w-full opacity-50"
        />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Are you ready to advance
          <span className="text-yellow-300"> your online </span>
          presence?
        </h1>
        <p className="my-5 text-center text-white-200 md:mt-10">
          Contact me today, let&apos;s discuss how to bring that dream app to
          fruition.
        </p>
        <Link href="mailto:cbsmoothoj@gmail.com">
          <MagicButton
            title="Get on here, let's talk"
            icon={<FaLocationArrow />}
            position="right"
          />
        </Link>
      </div>

      <div className="mt-16 flex flex-col items-center justify-between gap-8 md:flex-row">
        <p className="order-last text-sm font-light md:order-none md:text-base md:font-normal">
          Copyright © {new Date().getFullYear()} CodedKen
        </p>

        <div className="flex items-center gap-6 md:gap-3">
          {socialMedia.map((profile) => (
            <div
              key={profile.id}
              className="flex size-10 cursor-pointer items-center justify-center rounded-lg border border-black-300 bg-black-200 bg-opacity-75 saturate-150 backdrop-blur-lg backdrop-filter"
            >
              <Link href={profile.link} target="_blank">
                <Image
                  src={profile.img}
                  alt={profile.img}
                  width={20}
                  height={20}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
