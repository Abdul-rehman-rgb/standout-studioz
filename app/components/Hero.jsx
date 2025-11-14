"use client";
import { motion } from "framer-motion";
import bg from "../../public/images/hero.gif";
import Image from "next/image";
import user from "../../public/images/user.jpeg";

export default function Hero() {
  return (
    <section className="px-4 sm:px-6 md:px-8 lg:px-10 max-w-[1390px] mx-auto mt-20 sm:mt-24 md:mt-30">
      <div
        className="relative min-h-[60vh] sm:h-[70vh] md:h-[80vh] w-full bg-cover bg-center bg-no-repeat overflow-hidden rounded-2xl sm:rounded-3xl md:rounded-4xl"
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

            <div className="flex flex-row gap-3 w-full overflow-x-auto">
              {/* User Image */}
              <div className="bg-white rounded-[12px] p-1">
                <Image
                  src={user}
                  alt="user image"
                  width={78}
                  height={120}
                  className="w-16 h-auto sm:w-20 md:w-[78px]"
                />
              </div>

              {/* Info Card */}
              <div className="bg-white rounded-[12px] p-3 sm:p-2 text-[#171717] w-[232px] flex flex-col justify-between gap-2 min-h-[126px]">
                <div>
                  <h4 className="text-[#171717] text-base sm:text-lg md:text-[20px] leading-[22px] md:leading-[26px]">
                    CEO
                  </h4>
                  <h5 className="text-[#5D5D5D] text-sm sm:text-base md:text-[16px] leading-[20px] md:leading-[22px] font-normal">
                    At Standout Studio
                  </h5>
                </div>

                <a
                  href="#"
                  className="group relative flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-black border border-black text-white rounded-full text-sm sm:text-base md:text-[18px] overflow-hidden w-full"
                >
                  <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 transform group-hover:-translate-y-full">
                    Lets Talk
                  </span>
                  <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 transform translate-y-full group-hover:translate-y-0">
                    Lets Talk
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
