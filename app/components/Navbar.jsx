"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import logo from "../../public/images/logo.png";
import { Plane } from "lucide-react";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full bg-white backdrop-blur-md z-50 px-10 py-6"
    >
      <div className="max-w-[1390px] mx-auto grid grid-cols-[0.5fr_3fr_1fr] items-center">
        {/* Left - Logo */}
        <div className="flex items-center">
          <Image
            src={logo}
            alt="Standou-studioz Logo"
            width={205}
            height={60}
            className="object-contain"
          />
        </div>

        {/* Center - Nav Items */}
        <div className="flex justify-evenly space-x-20 text-[16px] text-[#171717] font-medium">
          <a href="#" className="hover:text-gray-600 transition">
            Home
          </a>
          <a href="#" className="hover:text-gray-600 transition">
            About
          </a>
          <a href="#" className="hover:text-gray-600 transition">
            Projects
          </a>
          <a href="#" className="hover:text-gray-600 transition">
            Blog
          </a>
        </div>

        {/* Right - Buttons */}
        <div className="flex justify-end items-center space-x-3">
          <a
            href="#"
            className="flex items-center gap-2 hover:text-gray-600 transition"
          >
            Cart
            <span className="bg-black rounded-full text-white h-[18px] w-[18px] flex items-center justify-center text-[12px]">
              0
            </span>
          </a>
         <a
  href="#"
  className="group relative flex items-center gap-2 px-6 py-3 bg-black border border-black text-white rounded-full text-[18px] overflow-hidden"
>
  {/* Top layer (visible initially) */}
  <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 transform group-hover:-translate-y-full">
    Contact
  </span>

  {/* Bottom layer (hidden below initially) */}
  <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 transform translate-y-full group-hover:translate-y-0">
    Contact
  </span>

  {/* Icon */}
  <span className="p-1 rounded-full bg-white group-hover:bg-black transition-colors duration-300 ml-2">
    <Plane className="w-4 h-4 text-black group-hover:text-white transition-colors duration-300" />
  </span>
</a>

        </div>
      </div>
    </motion.nav>
  );
}
