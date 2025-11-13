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
    <section className="py-20 bg-black text-white text-center">
      <h2 className="text-3xl font-semibold mb-10">Our works across industries</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 px-6">
        {works.map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="overflow-hidden rounded-xl shadow-lg"
          >
            <Image src={src} alt="Project" width={400} height={300} className="w-full h-full object-cover" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
