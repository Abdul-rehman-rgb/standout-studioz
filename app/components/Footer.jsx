import Image from "next/image";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { RxTwitterLogo } from "react-icons/rx"; // X/Twitter icon
import logo from "../../public/images/logo.png";
import Section from "./ui/Section";

const Footer = () => {
  return (
    <Section
      bg="bg-[#111418]"
      text="text-white"
      py="py-12 sm:py-16 md:py-20 lg:py-24"
    >

        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[5fr_1fr_1fr_1fr] gap-6 sm:gap-8 mb-12 sm:mb-16">

          {/* Column 1: Logo + Newsletter + Social */}
          <div className="flex flex-col">
            {/* Logo */}
            <div className="flex items-center mb-6">
              <Image
                src={logo}
                alt="Kenzo Logo"
                width={205}
                height={60}
                className="object-contain w-32 sm:w-40 md:w-[205px] h-auto"
              />
            </div>

            {/* Newsletter subscription */}
            <form className="flex items-center border-b border-gray-600 mb-6 max-w-xs">
              <input
                type="email"
                placeholder="Subscribe our newsletter"
                className="bg-transparent flex-grow py-2 px-3 text-sm placeholder-gray-400 outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="bg-gray-300 text-black rounded-full p-2 ml-2 hover:bg-gray-400 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </form>

            {/* Social Icons */}
            <div className="flex space-x-6 text-gray-400 text-[20px] mt-10">
              <a href="#" aria-label="Facebook" className="hover:text-white transition">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="X (Twitter)" className="hover:text-white transition">
                <RxTwitterLogo />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-white transition">
                <FaLinkedinIn />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-white transition">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="justify-end items-end">
            <h3 className="font-medium mb-3 sm:mb-4 text-[16px] sm:text-base">Navigation</h3>
            <ul className="space-y-2 sm:space-y-3 text-[16px] sm:text-[16px] text-muted-foreground text-[#888]">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">About us</li>
              <li className="hover:text-white cursor-pointer">Blogs</li>
              <li className="hover:text-white cursor-pointer">Projects</li>
              <li className="hover:text-white cursor-pointer">Services</li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="font-medium mb-3 sm:mb-4 text-[16px] sm:text-base">Company</h3>
            <ul className="space-y-2 sm:space-y-3 text-[16px] sm:text-[16px] text-muted-foreground text-[#888]">
              <li className="hover:text-white cursor-pointer">Team</li>
              <li className="hover:text-white cursor-pointer">Careers</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
              <li className="hover:text-white cursor-pointer">404</li>
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div>
            <h3 className="font-medium mb-3 sm:mb-4 text-[16px] sm:text-base">Resources</h3>
            <ul className="space-y-2 sm:space-y-3 text-[16px] sm:text-[16px] text-muted-foreground text-[#888]">
              <li className="hover:text-white cursor-pointer">Style Guide</li>
              <li className="hover:text-white cursor-pointer">Licenses</li>
              <li className="hover:text-white cursor-pointer">Changelog</li>
              <li className="hover:text-white cursor-pointer">401</li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-10 sm:pt-10 border-t border-[#888] gap-4 sm:gap-6 text-gray-400 text-xs sm:text-sm">
          <p>2025 Standout-Studioz. All rights reserved.</p>
          <p className="text-center md:text-right max-w-md">
            Design by <b className="text-white">Standout-Studioz</b> | <span className="hover:text-white cursor-pointer">License</span> | Power by <span className="hover:text-white cursor-pointer">Standout-Studioz</span>
          </p>
        </div>
    </Section>
  );
};

export default Footer;
