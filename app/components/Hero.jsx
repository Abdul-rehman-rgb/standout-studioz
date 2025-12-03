"use client";
import { motion } from "framer-motion";
import bg from "../../public/images/hero.gif";
import Image from "next/image";
import Section from "./ui/Section";
import UserCard from "./ui/UserCard";

export default function Hero() {
  return (
    <Section px="px-4 sm:px-6 md:px-8 lg:px-8" maxW="max-w-[1440px]" py="mt-20 sm:mt-24 md:mt-30" className="py-0">
      <div
        className="relative min-h-[60vh] sm:h-[70vh] md:h-[70vh] w-full bg-cover bg-center bg-no-repeat overflow-hidden rounded-2xl sm:rounded-3xl md:rounded-4xl"
        style={{ backgroundImage: `url(${bg.src})` }}
      >
        {/* Overlay if needed */}
        {/* <div className="absolute inset-0 bg-black/40"></div> */}

        <div className="relative z-10 h-full flex flex-col justify-between px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-6">
          {/* Top Section: Title */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 sm:gap-6 mb-6 md:mb-0">
            {/* Left Side */}
            <div className="mb-4 sm:mb-6 md:mb-0">
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[100px] font-medium leading-[1.1] text-white">
                Standout
                <br />
                Studioz
              </h1>
            </div>

            {/* Right Side */}
            <div className="flex flex-col justify-between items-start md:items-end gap-2 sm:gap-4 text-left md:text-right">
              <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-[64px] leading-tight font-normal text-white">
                Studio
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-[20px] leading-[24px] md:leading-[28px] font-normal text-gray-200">
                UIX, Development and Branding
              </p>
            </div>
          </div>

          {/* Middle Section: Description and Team */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 sm:gap-8 md:gap-8 mt-4 sm:mt-6 md:mt-0">
            {/* Description */}
            <div className="w-full md:w-[460px] text-[#b0b0b0] text-sm sm:text-base md:text-lg">
              <p>
                <span className="font-semibold text-white text-base sm:text-lg md:text-[20px] leading-[24px] md:leading-[28px]">
                  A creative studio crafting
                </span>{" "}
                bold, user-focused digital experiences. At Kenzo, we blend
                strategy, design, and innovation to help brands stand out and
                grow.
              </p>
            </div>

<div>
            <UserCard title="CEO" subtitle="At Standout Studio" />
    
  </div>          </div>
        </div>
      </div>
    </Section>
  );
}
