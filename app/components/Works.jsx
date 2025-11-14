"use client";
import Image from "next/image";
import logo1 from "../../public/images/logos/1.png";
import logo2 from "../../public/images/logos/2.png";
import logo3 from "../../public/images/logos/3.png";
import AnimatedButton from "./ui/AnimatedButton";
import { Plane } from "lucide-react";

import img1 from "../../public/images/1.jpg";
import img2 from "../../public/images/1.jpg";
import img3 from "../../public/images/1.jpg";
import img4 from "../../public/images/1.jpg";
import img5 from "../../public/images/1.jpg";
import img6 from "../../public/images/1.jpg";
import { motion } from "framer-motion";

const images = [img1, img2, img3 , img4, img5, img6 , img4, img5, img6 ];

const works = [logo1, logo2, logo3, logo1, logo2, logo3];

export default function Works() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-black text-white text-center px-4 sm:px-6 md:px-8 lg:px-10">
      <div className="max-w-[1390px] mx-auto">
        <h2 className="text-[20px] font-semibold text-white mb-6 sm:mb-8 md:mb-10 tracking-[-1px]">
          Worked with
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-60 slider">
          {works.map((src, i) => (
            <Image
              key={i}
              src={src}
              alt={`Logo ${i + 1}`}
              width={116}
              height={24}
              className="object-contain"
            />
          ))}
        </div>
      </div>
      <div>
        <div className="flex flex-col items-center mt-20">
        <AnimatedButton
          className="text-white"
          text="Projects"
          Icon={Plane}
          href="#about"
          iconClassName="text-black"
          iconSpanClassName="bg-white text-white"
        />

        <h1 className="text-[54px]">Our works across industries</h1>
        <p>
          Check out our awesome projects that are sure to grab attention on
          Instagram!
        </p>
        </div>
       
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="max-w-[1390px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
      {images.map((img, i) => (
        <motion.div
          key={i}
          className="overflow-hidden cursor-pointer rounded-none" // initially no radius
          whileHover={{ borderRadius: "1rem" }} // animate to rounded-xl
          transition={{ duration: 0.5 }} // smooth transition
        >
          <div className="relative w-full h-64 sm:h-72 lg:h-80">
            <Image
              src={img}
              alt={`Design ${i + 1}`}
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </motion.div>
      ))}
    </div>
        </section>
      </div>
    </section>
  );
}
