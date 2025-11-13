"use client";
import { motion } from "framer-motion";
import bg from "../../public/images/hero.gif";
import Image from "next/image";
import user from "../../public/images/user.jpeg";

export default function Hero() {
  return (
    <section
      className="relative h-[80vh] w-full bg-cover bg-center bg-no-repeat overflow-hidden rounded-4xl mt-30"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      {/* Overlay for readability if needed */}
      {/* <div className="absolute inset-0 bg-black/40"></div> */}

      <div className="relative z-10 max-w-[1390px] mx-auto h-full flex flex-col justify-between px-6 md:px-10 py-6">
        {/* Top Section: Title */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 md:mb-0">
          {/* Left Side */}
          <div className="mb-6 md:mb-0">
            <h1 className="text-5xl md:text-[100px] font-medium leading-[1.1] text-white">
              Standout
              <br />
              Studioz
            </h1>
          </div>

          {/* Right Side */}
          <div className="flex flex-col justify-between items-end">
            <h2 className="text-3xl md:text-[64px] leading-tight font-normal text-white">
              Studio
            </h2>
            <p className="text-base md:text-[20px] leading-[28px] font-normal text-gray-200">
              UIX, Development and Branding
            </p>
          </div>
        </div>

        {/* Middle Section: Description and Team */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-8">
          {/* Description */}
          <div className="max-w-[460px] text-[#b0b0b0]">
            <p>
              <span className="font-semibold text-white text-[20px] leading-[28px]">A creative studio crafting</span> bold, user-focused digital experiences.
              At Kenzo, we blend strategy, design, and innovation to help brands
              stand out and grow.
            </p>
          </div>

          {/* Team Card */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="bg-white rounded-[12px] p-1">
              <Image src={user} alt="user image" width={78} height={120} />
            </div>
            <div className="bg-white rounded-[12px] p-2 text-[#171717] w-[232px] flex flex-col justify-between gap-2 h-[126px]">
              <div>
                <h4 className="text-[#171717] text-[20px] leading-[26px]">CEO</h4>
                <h5 className="text-[#5D5D5D] text-[16px] leading-[22px] font-normal">At Standout Studio</h5>
              </div>
              <a
                href="#"
                className="group relative flex items-center gap-2 px-6 py-3 bg-black border border-black text-white rounded-full text-[18px] overflow-hidden"
              >
                {/* Top layer */}
                <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 transform group-hover:-translate-y-full">
                  Lets Talk
                </span>
                {/* Bottom layer */}
                <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 transform translate-y-full group-hover:translate-y-0">
                  Lets Talk
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
