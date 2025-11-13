"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const works = [
  "/images/work1.png",
  "/images/work2.png",
  "/images/work3.png",
  "/images/work4.png",
  "/images/work5.png",
  "/images/work6.png",
];

export default function Works() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-black text-white text-center px-4 sm:px-6 md:px-8 lg:px-10">
      <div className="max-w-[1390px] mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 sm:mb-8 md:mb-10">
          Our works across industries
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
        {works.map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="overflow-hidden rounded-xl shadow-lg aspect-[4/3]"
          >
            <Image 
              src={src} 
              alt="Project" 
              width={400} 
              height={300} 
              className="w-full h-full object-cover" 
            />
          </motion.div>
        ))}
        </div>
      </div>
    </section>
  );
}
