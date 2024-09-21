import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/PinContainer";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa";
import Link from "next/link";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-x-24 gap-y-8 p-4">
        {projects.map(({ id, title, des, img, iconLists, link, liveLink }) => (
          <div
            key={id}
            className="flex h-[32rem] w-[80vw] items-center justify-center sm:h-[41rem] sm:w-[570px] lg:min-h-[32.5rem]"
          >
            <PinContainer link={link}>
              <Link href={link || "/"} target="_blank">
                <div className="relative mb-10 flex h-[30vh] w-[80vw] items-center justify-center overflow-hidden sm:h-[40vh] sm:w-[570px]">
                  <div className="relative h-full w-full overflow-hidden bg-[#13162D] lg:rounded-3xl">
                    <Image
                      src="/bg.png"
                      width={500}
                      height={500}
                      alt="bg-img"
                    />
                  </div>
                  <Image
                    src={img}
                    alt={title}
                    width={500}
                    height={500}
                    className="absolute bottom-0 z-10"
                  />
                </div>
                <h1 className="line-clamp-1 text-base font-bold md:text-xl lg:text-2xl">
                  {title}
                </h1>

                <p className="line-clamp-2 text-sm font-light lg:text-xl lg:font-normal">
                  {des}
                </p>
              </Link>

              <div className="mb-3 mt-7 flex items-center justify-between">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      className="flex size-8 items-center justify-center rounded-full border border-white/[0.2] bg-black lg:size-10"
                      style={{
                        transform: `translateX(-${5 * index * 2}px)`,
                      }}
                    >
                      <Image
                        src={icon}
                        alt={icon}
                        width={200}
                        height={200}
                        className="p-2"
                      />
                    </div>
                  ))}
                </div>

                <Link
                  href={liveLink}
                  target="_blank"
                  className="flex items-center justify-center rounded-sm p-1 text-purple hover:bg-white hover:text-black-100"
                >
                  <span className="flex text-sm md:text-xs lg:text-xl">
                    Check Live Site
                  </span>
                  <FaLocationArrow className="ms-3" />
                </Link>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
