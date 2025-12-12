"use client";
import Image from "next/image";
import logo1 from "../../public/images/logos/1.png";
import logo2 from "../../public/images/logos/2.png";
import logo3 from "../../public/images/logos/3.png";
import AnimatedButton from "./ui/AnimatedButton";
import { Plane } from "lucide-react";
import LogoLoop from "../../components/LogoLoop";

import img1 from "../../public/images/1.jpg";
import img2 from "../../public/images/1.jpg";
import img3 from "../../public/images/1.jpg";
import img4 from "../../public/images/1.jpg";
import img5 from "../../public/images/1.jpg";
import img6 from "../../public/images/1.jpg";
import { motion } from "framer-motion";

const images = [img1, img2, img3, img4, img5, img6, img4, img5, img6];

const works = [logo1, logo2, logo3, logo1, logo2, logo3];

const logos = works.map((img, i) => ({ src: img.src, alt: `Logo ${i + 1}` }));

export default function Works() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-black text-white text-center px-4 sm:px-6 md:px-8 lg:px-10">
      <div className="max-w-[1390px] mx-auto">
        <h2 className="text-[20px] font-semibold text-white mb-6 sm:mb-8 md:mb-10 tracking-[-1px]">
          Worked with
        </h2>

        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-60 slider">
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
        </div> */}
        <div className="max-w-[1280px] mx-auto">
        <LogoLoop logos={logos} />
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20">
          <div className="grid gap-4">
            <motion.div
              className="overflow-hidden cursor-pointer rounded-none" // initially no radius
              //whileHover={{ borderRadius: "1rem" }} // animate to rounded-xl
              transition={{ duration: 0.5 }} // smooth transition
            >
              <img
                className="h-auto max-w-full rounded-base object-cover grayscale hover:grayscale-0 transition-all duration-500"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
                alt=""
              />
            </motion.div>
            <motion.div
              className="overflow-hidden cursor-pointer rounded-none"
              transition={{ duration: 0.5 }} // smooth transition
            >
              <img
                className="h-auto max-w-full rounded-base object-cover grayscale hover:grayscale-0 transition-all duration-500"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
                alt=""
              />
            </motion.div>
            <motion.div
              className="overflow-hidden cursor-pointer rounded-none"
              transition={{ duration: 0.5 }} // smooth transition
            >
              <img
                className="h-auto max-w-full rounded-base object-cover grayscale hover:grayscale-0 transition-all duration-500"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
                alt=""
              />
            </motion.div>
            

            
          </div>
          <div class="grid gap-4">
            <motion.div
              className="overflow-hidden cursor-pointer rounded-none"
              transition={{ duration: 0.5 }} // smooth transition
            >
              <img
                className="h-auto max-w-full rounded-base object-cover grayscale hover:grayscale-0 transition-all duration-500"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
                alt=""
              />
            </motion.div>
           <motion.div
              className="overflow-hidden cursor-pointer rounded-none"
              transition={{ duration: 0.5 }} // smooth transition
            >
              <img
                className="h-auto max-w-full rounded-base object-cover grayscale hover:grayscale-0 transition-all duration-500"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
                alt=""
              />
            </motion.div>
            <motion.div
              className="overflow-hidden cursor-pointer rounded-none"
              transition={{ duration: 0.5 }} // smooth transition
            >
              <img
                className="h-auto max-w-full rounded-base object-cover grayscale hover:grayscale-0 transition-all duration-500"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
                alt=""
              />
            </motion.div>
          </div>
          <div class="grid gap-4">
            <motion.div
              className="overflow-hidden cursor-pointer rounded-none"
              transition={{ duration: 0.5 }} // smooth transition
            >
              <img
                className="h-auto max-w-full rounded-base object-cover grayscale hover:grayscale-0 transition-all duration-500"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
                alt=""
              />
            </motion.div>
            <motion.div
              className="overflow-hidden cursor-pointer rounded-none"
              transition={{ duration: 0.5 }} // smooth transition
            >
              <img
                className="h-auto max-w-full rounded-base object-cover grayscale hover:grayscale-0 transition-all duration-500"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
                alt=""
              />
            </motion.div>
           <motion.div
              className="overflow-hidden cursor-pointer rounded-none"
              transition={{ duration: 0.5 }} // smooth transition
            >
              <img
                className="h-auto max-w-full rounded-base object-cover grayscale hover:grayscale-0 transition-all duration-500"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
                alt=""
              />
            </motion.div>
          </div>
          <div class="grid gap-4">
            <motion.div
              className="overflow-hidden cursor-pointer rounded-none"
              transition={{ duration: 0.5 }} // smooth transition
            >
              <img
                className="h-auto max-w-full rounded-base object-cover grayscale hover:grayscale-0 transition-all duration-500"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
                alt=""
              />
            </motion.div>
          <motion.div
              className="overflow-hidden cursor-pointer rounded-none"
              transition={{ duration: 0.5 }} // smooth transition
            >
              <img
                className="h-auto max-w-full rounded-base object-cover grayscale hover:grayscale-0 transition-all duration-500"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
                alt=""
              />
            </motion.div>
          <motion.div
              className="overflow-hidden cursor-pointer rounded-none"
              transition={{ duration: 0.5 }} // smooth transition
            >
              <img
                className="h-auto max-w-full rounded-base object-cover grayscale hover:grayscale-0 transition-all duration-500"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
                alt=""
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
