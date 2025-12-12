"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import user from "../../public/images/user.jpeg";
import { Plane } from "lucide-react";
import logo1 from "../../public/images/logos/1.png";
import logo2 from "../../public/images/logos/2.png";
import logo3 from "../../public/images/logos/3.png";
import AnimatedButton from "./ui/AnimatedButton";
import Section from "./ui/Section";
import StatCard from "./ui/StatCard";
import { TextReveal } from "@/components/ui/text-reveal";

export default function About() {
  return (
    <Section bg="bg-[#fafafa]" text="text-center">
      <div className="flex flex-col sm:flex-row justify-between items-start gap-4 sm:gap-6 mb-8 sm:mb-12 md:mb-16">

        {/* Small Column */}
        <div className="shrink-0 w-full sm:w-[200px] md:w-[250px] lg:w-[400px] flex flex-col gap-4 sm:gap-6">
          <AnimatedButton
            text="About Us"
            Icon={Plane}
            href="#about"
            iconClassName="text-white"
          />
        </div>

        {/* Large Column */}
        <div className="flex-1">
          <TextReveal>
            Magic UI will change the way you design.
          </TextReveal>
        </div>

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-6 sm:gap-8 md:gap-10 mt-8 sm:mt-12 md:mt-16">

        {/* Image Section */}
        <div className="bg-white rounded-[24px] overflow-hidden w-full lg:w-[432px] h-[400px] sm:h-[500px] lg:h-[550px] mx-auto lg:mx-0">
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full h-full overflow-hidden"
          >
            <Image
              src={user}
              alt="user image"
              width={432}
              height={550}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Right Content */}
        <div className="flex flex-col space-y-4">

          <p className="text-left text-[#B0B0B0] text-base lg:text-[20px] max-w-[450px] font-medium">
            <strong className="text-[#171717]">Lorem ipsum</strong> dolor sit amet
            consectetur adipiscing elit. Tempor quis nec sodales scelerisque.
          </p>

          <div className="grid grid-cols-2 gap-3 mt-8">
            <StatCard number="50+" label="01" />
            <StatCard number="95%" label="02" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">

            {/* Card 1 */}
            <div className="bg-white rounded-[12px] p-6 space-y-8">
              <h4 className="text-[20px] text-[#171717] leading-[26px] font-medium text-right">
                Success project
                <br /> completed
              </h4>
              <p className="text-[16px] text-[#5D5D5D] leading-[22px]">
                We've delivered 50+ projects that help companies generate real results.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-[12px] p-6 space-y-8 overflow-hidden">
              <h4 className="text-[20px] text-[#171717] leading-[26px] font-medium text-right">
                Customer <br /> satisfaction rate
              </h4>

              <div className="overflow-hidden w-full">
                <div className="slider flex items-center gap-6 animate-scroll">
                  <Image src={logo1} alt="logo1" width={105} height={16} />
                  <Image src={logo2} alt="logo2" width={105} height={16} />
                  <Image src={logo3} alt="logo3" width={105} height={16} />

                  {/* Duplicates */}
                  <Image src={logo1} alt="logo1" width={105} height={16} />
                  <Image src={logo2} alt="logo2" width={105} height={16} />
                  <Image src={logo3} alt="logo3" width={105} height={16} />
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </Section>
  );
}
