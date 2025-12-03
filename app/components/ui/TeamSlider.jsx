"use client";
import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import AnimatedButton from "./AnimatedButton";
import Heading from "./Heading";
import { ChevronLeft, ChevronRight, Plane } from "lucide-react";

const teamMembers = [
  {
    name: "Noah Davis",
    role: "Senior Product Analyst",
    img: "https://cdn.pixabay.com/photo/2019/07/13/02/25/man-4333898_1280.jpg",
  },
  {
    name: "Ava Wilson",
    role: "Product Marketing Manager",
    img: "https://cdn.pixabay.com/photo/2019/07/13/02/25/man-4333898_1280.jpg",
  },
  {
    name: "Mason Clark",
    role: "Product Operations Director",
    img: "https://cdn.pixabay.com/photo/2019/07/13/02/25/man-4333898_1280.jpg",
  },
  {
    name: "Isabella Lewis",
    role: "Product Quality Assurance Lead",
    img: "https://cdn.pixabay.com/photo/2019/07/13/02/25/man-4333898_1280.jpg",
  },
];

const TeamSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="flex justify-center py-10 relative">
      <div className="w-full max-w-[1390px] px-5 md:px-10 lg:px-0">
        <div className="flex justify-start">
          <AnimatedButton
            text="Our Team"
            Icon={Plane}
            href="#about"
            className="text-black"
            iconSpanClassName="text-white"
          />
        </div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-[52px] font-semibold text-[#171717] mb-5 tracking-[-1.2px]">
            Meet the experts
            <br />
            behind gence
          </h2>

          <div className="flex space-x-4">
            <div
              ref={prevRef}
              className="border-2 border-[rgba(209,209,209,0.5)] px-4 py-4 cursor-pointer select-none flex items-center justify-center rounded-lg"
            >
              <ChevronLeft
                size={24}
                className="transition-transform duration-300 ease-in-out hover:-translate-x-2"
              />
            </div>
            <div
              ref={nextRef}
              className="border-2 border-[rgba(209,209,209,0.5)] px-4 py-4 cursor-pointer select-none flex items-center justify-center rounded-lg"
            >
              <ChevronRight
                size={24}
                className="transition-transform duration-300 ease-in-out hover:translate-x-2"
              />
            </div>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          spaceBetween={30}
          slidesPerView={1}
          className="flex justify-center"
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center items-center"
            >
              <motion.div
                className="flex flex-col items-start text-left max-w-xs cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-[470px] object-cover rounded-lg mb-4"
                />
              </motion.div>

                <h3 className="font-medium text-[#171717] text-[32px] text-left">
                  {member.name}
                </h3>
                <p className="text-[#6d6d6d] text-[16px] font-normal">
                  {member.role}
                </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TeamSlider;
