"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import img1 from "../../public/images/1.jpg";
import AnimatedButton from "./ui/AnimatedButton";
import { Plane } from "lucide-react";

const services = [
  {
    title: "Web Design & Development",
    image: img1,
    categories: [
      "Web Design",
      "Web Development",
      "No code",
      "Webflow",
      "Style guide",
    ],
  },
  {
    title: "UX Strategy & Research",
    image: img1,
    categories: [],
  },
  {
    title: "Mobile App Design",
    image: img1,
    categories: [],
  },
  {
    title: "Branding & Identity",
    image: img1,
    categories: [],
  },
];

export default function Services() {
  return (
    <div className="max-w-[1390px] mx-auto space-y-4 pt-[120px]">
      <AnimatedButton
        text="Services"
        Icon={Plane}
        href="#about"
        iconClassName="text-white"
      />

      <h2 className="text-[52px] text-[#171717] font-normal mb-8 sm:mb-12 md:mb-16">
        See our all services
      </h2>
      {services.map((service, i) => (
        <motion.div
          key={i}
          className="border border-gray-200 rounded-lg overflow-hidden cursor-pointer"
          initial={{ height: 60 }}
          whileHover={{ height: 300 }} // enough to show image + categories
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          <div className="flex items-center h-full px-4">
            {/* Left index */}
            <div className="mr-4 text-gray-400 font-mono">
              ({String(i + 1).padStart(2, "0")})
            </div>

            {/* Main content */}
            <div className="flex-1 flex flex-col justify-center">
              <h3 className="font-semibold">{service.title}</h3>

              {/* Extra content revealed on hover */}
              <motion.div
                initial={{ opacity: 0, maxHeight: 0 }}
                whileHover={{ opacity: 1, maxHeight: 500 }} // smooth expand
                transition={{ duration: 0.3 }}
                className="mt-2 overflow-hidden"
              >
                {service.image && (
                  <div className="w-full h-40 relative mb-2">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                )}

                {service.categories.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {service.categories.map((cat, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gray-100 text-gray-800 rounded-md text-sm"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            </div>

            {/* Right icon */}
            <div className="ml-4 text-gray-400">→</div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
