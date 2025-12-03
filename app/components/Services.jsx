"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Plane, Plus, Minus } from "lucide-react";
import AnimatedButton from "./ui/AnimatedButton";
import Heading from "./ui/Heading";

const services = [
  {
    title: "Web Design & Development",
    image: "/images/1.jpg",
    categories: ["Web Design", "Web development", "No code", "Webflow", "Style guide"],
  },
  {
    title: "UX Strategy & Research",
    image: "/images/1.jpg",
    categories: ["Web Design", "Web development", "No code", "Webflow", "Style guide"],
  },
  {
    title: "Mobile App Design",
    image: "/images/1.jpg",
    categories: ["Web Design", "Web development", "No code", "Webflow", "Style guide"],
  },
  {
    title: "Branding & Identity",
    image: "/images/1.jpg",
    categories: ["Web Design", "Web development", "No code", "Webflow", "Style guide"],
  },
];

export default function Services() {
  return (
    <div className="max-w-[1390px] mx-auto space-y-4 pt-[120px] text-white">
      <AnimatedButton text="Services" Icon={Plane} href="#about" className="text-black" iconSpanClassName="text-white" />

      <Heading text="See our all services" />

      {services.map((service, i) => (
        <motion.div
          key={i}
          className="group rounded-2xl overflow-hidden cursor-pointer border-b"
          initial={{ height: 90 }}
          whileHover={{ height: 260 }}
          transition={{ type: "spring", stiffness: 200, damping: 22 }}
        >
          <div className="flex items-start px-6 py-6 h-full gap-6 relative">
            <div className="text-gray-500 text-[18px] font-mono min-w-[70px]">
              ({String(i + 1).padStart(2, "0")})
            </div>

            <div className="flex-1 text-[20px] group-hover:text-[32px] leading-tight font-medium transition-all duration-300 tracking-[-1px] text-black">
              {service.title}
            </div>

            <div className="flex gap-6 opacity-0 pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 group-hover:translate-x-0 translate-x-6 transition-all duration-500">
              {service.image && (
                <div className="w-[200px] h-[150px] relative rounded-xl overflow-hidden bg-[#ffffff]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={300}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                </div>
              )}

              {service.categories.length > 0 && (
                <div className="flex flex-col">
                  <p className="text-[18px] mb-[8px] text-[#171717] font-medium tracking-[-1px] opacity-70">
                    Categories
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {service.categories.map((cat, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-[15px] bg-gray-200 text-[#171717] font-medium rounded-[8px]"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="ml-auto flex items-center relative w-[22px]">
              <Plus size={22} className="text-black opacity-50 group-hover:opacity-0 transition-all duration-300" />
              <Minus size={22} className="absolute text-black opacity-0 group-hover:opacity-100 transition-all duration-300" />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
