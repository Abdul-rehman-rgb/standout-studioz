"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import logo from "../../public/images/logo.png";
import { Plane, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full bg-white backdrop-blur-md z-50 px-4 sm:px-6 md:px-10 py-4 md:py-6"
    >
      <div className="max-w-[1390px] mx-auto flex items-center justify-between">
        {/* Left - Logo */}
        <div className="flex items-center">
          <Image
            src={logo}
            alt="Standou-studioz Logo"
            width={205}
            height={60}
            className="object-contain w-32 sm:w-40 md:w-[205px] h-auto"
          />
        </div>

        {/* Center - Nav Items (Desktop) */}
        <div className="hidden lg:flex justify-evenly space-x-8 xl:space-x-20 text-[16px] text-[#171717] font-medium">
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

        {/* Right - Buttons (Desktop) */}
        <div className="hidden md:flex justify-end items-center space-x-3">
          <a
            href="#"
            className="flex items-center gap-2 hover:text-gray-600 transition text-sm lg:text-base"
          >
            Cart
            <span className="bg-black rounded-full text-white h-[18px] w-[18px] flex items-center justify-center text-[12px]">
              0
            </span>
          </a>
          <a
            href="#"
            className="group relative flex items-center gap-2 px-4 lg:px-6 py-2 lg:py-3 bg-black border border-black text-white rounded-full text-sm lg:text-[18px] overflow-hidden"
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
              <Plane className="w-3 h-3 lg:w-4 lg:h-4 text-black group-hover:text-white transition-colors duration-300" />
            </span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-[#171717]"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden mt-4 pb-4 border-t border-gray-200"
        >
          <div className="flex flex-col space-y-4 pt-4">
            <a href="#" className="text-[#171717] font-medium hover:text-gray-600 transition">
              Home
            </a>
            <a href="#" className="text-[#171717] font-medium hover:text-gray-600 transition">
              About
            </a>
            <a href="#" className="text-[#171717] font-medium hover:text-gray-600 transition">
              Projects
            </a>
            <a href="#" className="text-[#171717] font-medium hover:text-gray-600 transition">
              Blog
            </a>
            <div className="flex items-center gap-4 pt-2">
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
                className="group relative flex items-center gap-2 px-4 py-2 bg-black border border-black text-white rounded-full text-sm overflow-hidden"
              >
                <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 transform group-hover:-translate-y-full">
                  Contact
                </span>
                <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 transform translate-y-full group-hover:translate-y-0">
                  Contact
                </span>
                <span className="p-1 rounded-full bg-white group-hover:bg-black transition-colors duration-300 ml-2">
                  <Plane className="w-3 h-3 text-black group-hover:text-white transition-colors duration-300" />
                </span>
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
