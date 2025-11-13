"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import user from "../../public/images/user.png";
import { Plane } from "lucide-react";
import logo1 from "../../public/images/logos/1.png";
import logo2 from "../../public/images/logos/2.png";
import logo3 from "../../public/images/logos/3.png";
import AnimatedButton from '../components/ui/AnimatedButton'

export default function About() {
  return (
    <section className="py-20 bg-[#fafafa] text-center px-20">
      <div className="flex flex-row justify-evenly items-center">
      <div>
      <AnimatedButton text="About Us" Icon={Plane} href="#about" />

</div>


        <div className="flex justify-center">
          <h2 className="text-3xl md:text-[44px] font-semibold mb-10 text-[#171717] text-left">
            Results for every project,
            <br />
            with a focus on design and functionality
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-[40%_60%] gap-10 mt-25">
        <div className="bg-white rounded-[24px] overflow-hidden w-[432px] h-[550px]">
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full overflow-hidden"
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

        <div className="flex flex-col space-y-1">
          <p className="text-left text-[#B0B0B0] text-[20px] leading-[20px] max-w-[450px] font-medium">
            <strong className="text-[#171717]">Lorem ipsum</strong> dolor sit
            amet consectetur adiciting Tempor quis nec sodales scelerisque.
            Viverra aliquam consequat morbi lobortis. Aenean sed convallis{" "}
          </p>
          <div className="grid grid-cols-2 justify-evenly items-center gap-2 mt-15">
            <div className="relative flex flex-row justify-between items-center bg-white h-[100px] rounded-[12px] p-4">
              <div>
                <h3 className="text-[44px] text-[#171717] leading-[44px] font-medium">
                  50+
                </h3>
              </div>

              <div className="absolute top-4 right-5">
                <p className="text-[14px] leading-[20px] text-[#6D6D6D] font-medium">
                  01
                </p>
              </div>
            </div>

            <div className="relative flex flex-row justify-between items-center bg-white h-[100px] rounded-[12px] p-4">
              <div>
                <h3 className="text-[44px] text-[#171717] leading-[44px] font-medium">
                  95%
                </h3>
              </div>

              <div className="absolute top-4 right-5">
                <p className="text-[14px] leading-[20px] text-[#6D6D6D] font-medium">
                  02
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-white rounded-[12px] p-6 space-y-40">
              <h4 className="text-[20px] text-[#171717] leading-[26px] font-medium text-right">
                Success project
                <br /> completed
              </h4>
              <p className="text-[16px] text-[#5D5D5D] leading-[22px] font-normal text-left">
                We’ve delivered 50+ projects that help companies generate real
                results.
              </p>
            </div>
            <div className="bg-white rounded-[12px] p-6 space-y-40 overflow-hidden">
              <h4 className="text-[20px] text-[#171717] leading-[26px] font-medium text-right">
                Customer <br /> satisfaction rate
              </h4>

              <div className="overflow-hidden w-full">
                <div className="slider flex items-center gap-6">
                  <Image src={logo1} alt="logo1" width={105} height={16} />
                  <Image src={logo2} alt="logo2" width={105} height={16} />
                  <Image src={logo3} alt="logo3" width={105} height={16} />

                  {/* Duplicate Logos For Smooth Endless Loop */}
                  <Image src={logo1} alt="logo1" width={105} height={16} />
                  <Image src={logo2} alt="logo2" width={105} height={16} />
                  <Image src={logo3} alt="logo3" width={105} height={16} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
