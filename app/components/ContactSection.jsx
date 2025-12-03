"use client";

import React, { useState } from "react";
import user from "../../public/images/user.jpeg";
import Image from "next/image";
import { Plane } from "lucide-react";
import AnimatedButton from "./ui/AnimatedButton";

const faqs = [
  "What services do you offer?",
  "What tools and technologies do you use?",
  "Can I see more of your work?",
  "Do you offer consultations?",
  "What's your design process like?",
];

const ContactSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="mt-40 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] items-center max-w-7xl mx-auto py-10">
        <div>
          <h1 className="font-semibold text-[96px] text-[#171717]">
            Get in touch
          </h1>
        </div>
        <div>
          <p className="text-[#5d5d5d] text-[20px] text-right">
            Let’s Connect — Have a project in mind or just want to say hi? I’d love to hear from you.
          </p>
        </div>
      </div>

      <div className="bg-[#171717]">
        <div className="text-white px-8 py-[80px] grid grid-cols-1 lg:grid-cols-2 max-w-7xl mx-auto">
          <div className="mb-10 md:mb-0 flex flex-col justify-between space-y-4">
            <h2 className="text-[44px] font-medium">
              Thinking about your next project? <span className="text-[#888]">Let’s talk.</span>
            </h2>

            <div className="flex flex-row gap-3 w-full overflow-x-auto">
              <div className="bg-white rounded-[12px] p-1">
                <Image
                  src={user}
                  alt="user image"
                  width={78}
                  height={120}
                  className="w-16 h-auto sm:w-20 md:w-[78px]"
                />
              </div>

              <div className="bg-white rounded-[12px] p-3 sm:p-2 text-[#171717] w-[232px] flex flex-col justify-between gap-2 min-h-[126px]">
                <div>
                  <h4 className="text-[#171717] text-base sm:text-lg md:text-[20px] leading-[22px] md:leading-[26px]">
                    Team Lead
                  </h4>
                  <h5 className="text-[#5D5D5D] text-sm sm:text-base md:text-[16px] leading-[20px] md:leading-[22px] font-normal">
                    At Standout Studio
                  </h5>
                </div>

                <a
                  href="#"
                  className="group relative flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-black border border-black text-white rounded-full text-sm sm:text-base md:text-[18px] overflow-hidden"
                >
                  <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 transform group-hover:-translate-y-full">
                    Lets Talk
                  </span>
                  <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 transform translate-y-full group-hover:translate-y-0">
                    Lets Talk
                  </span>
                </a>
              </div>
            </div>
          </div>

          <form className="space-y-4 p-8 rounded-xl">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 rounded font-medium text-[20px] text-white border-b border-[#4f4f4f66]"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 rounded font-medium text-[20px] text-white border-b border-[#4f4f4f66]"
              />
            </div>

            <input
              type="text"
              placeholder="Message Subject"
              className="w-full p-3 rounded font-medium text-[20px] text-white border-b border-[#4f4f4f66]"
            />

            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full p-3 rounded font-medium text-[20px] text-white border-b border-[#4f4f4f66]"
            />

            <a
              href="/contact"
              className="group w-fit relative flex items-center gap-3 px-4 lg:px-6 py-2 lg:py-3 bg-white border border-white text-black rounded-full text-sm lg:text-[18px] overflow-hidden"
            >
              <span className="relative overflow-hidden h-[20px] lg:h-[26px] flex items-center">
                <span className="transition-transform duration-300 transform group-hover:-translate-y-full block">
                  Contact
                </span>
                <span className="absolute top-full left-0 transition-transform duration-300 transform group-hover:-translate-y-full block">
                  Contact
                </span>
              </span>

              <span className="p-1 rounded-full bg-black flex items-center justify-center">
                <Plane className="w-3 h-3 lg:w-4 lg:h-4 text-white" />
              </span>
            </a>
          </form>
        </div>
      </div>

      <div className="px-8 py-16 bg-white text-black max-w-7xl mx-auto space-y-6">
        <div className="flex flex-col items-center mt-20 text-center">
          <AnimatedButton
            className="text-black bg-[#FAFAFA] border p-2 border-[#EDEDED]"
            text="Contact Us"
            Icon={Plane}
            href="#about"
            iconClassName="text-white"
            iconSpanClassName="bg-black text-white"
          />

          <h1 className="text-[54px]">Have Any Questions?</h1>
          <p>
            Got questions? I'm here for you 24/7, no matter where you are, ready to provide support and answers anytime.
          </p>
        </div>

        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-[#fafafa] border border-[#ebebeb] rounded-[16px] p-[20px] flex flex-col"
          >
            <button
              className="w-full flex justify-between items-center text-[#111418] text-[20px] font-medium"
              onClick={() => toggleFaq(index)}
            >
              {faq}
              <span className="bg-[#111418] h-10 w-10 text-white rounded-full flex items-center justify-center">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            {openIndex === index && (
              <p className="mt-4 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            )}
          </div>
        ))}

        {/* <div className="text-center mt-6">
          <button className="px-6 py-3 bg-black text-white rounded hover:bg-gray-800 transition">
            Contact Us
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default ContactSection;
