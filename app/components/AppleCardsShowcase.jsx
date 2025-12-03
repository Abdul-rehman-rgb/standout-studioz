import Image from "next/image";
import logo from "../../public/images/logo.png";
import stars from "../../public/images/stars.png";
import React from "react";

const AppleCardsShowcase = () => {
  return (
    <div className="max-w-[1390px] mx-auto space-y-4 pt-[120px] bg-white py-20 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        
        {/* CARD 1 */}
        <div className="bg-[#d8d6d2]/10 rounded-sm p-[24px] flex flex-col justify-between h-full">
          <div>
            <Image
              src={logo}
              alt="Standou-studioz Logo"
              width={205}
              height={60}
              className="object-contain w-32 sm:w-40 md:w-[205px] h-auto"
            />

            <h2 className="text-[#282c2d] text-[32px] sm:text-[38px] md:text-[44px] font-medium mt-4">
              Success Stories
            </h2>
          </div>

          <p className="text-sm sm:text-base md:text-[16px] text-[#5D5D5D] leading-[22px] font-normal text-right mt-6">
            We've delivered 50+ projects that help companies generate real
            results.
          </p>
        </div>

        {/* CARD 2 */}
        <div
          className="rounded-sm p-[24px] flex flex-col justify-end min-h-[380px]"
          style={{
            backgroundImage: "url(/images/man.jpg)",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="bg-gradient-to-t from-white to-transparent rounded-sm p-4">
            <p className="text-[#1a1a1a] text-[18px] sm:text-[20px] font-medium">
              Kenzo’s Webflow development skills are unmatched! They built a fast,
              interactive, and visually stunning website
            </p>

            <div className="mt-6 sm:mt-10">
              <span className="text-[#1a1a1a] text-[20px] font-medium">
                Liam Carter
              </span>
              <p className="text-[#1a1a1a] text-[16px] font-normal">
                Head of Product at FlowTech
              </p>
            </div>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="bg-[#d8d6d2]/10 rounded-sm p-[24px] flex flex-col justify-between h-full">
          <div>
            <Image
              src={stars}
              alt="stars"
              width={108}
              height={16}
              className="object-contain"
            />

            <p className="text-[#454545] text-[18px] sm:text-[20px] font-medium mt-4">
              Working with Kenzo Agency on our Webflow site was a game-changer.
              They delivered a sleek, high-performing, and engaging website that
              exceeded our expectations.
            </p>
          </div>

          <div className="flex flex-row justify-between mt-8">
            <div>
              <h3 className="text-3xl sm:text-4xl md:text-[44px] text-[#171717] font-medium">
                50+
              </h3>
              <p className="text-[#5D5D5D] text-[14px] sm:text-[16px] leading-[22px] font-normal">
                Presence in countries.
              </p>
            </div>

            <div>
              <h3 className="text-3xl sm:text-4xl md:text-[44px] text-[#171717] font-medium">
                50+
              </h3>
              <p className="text-[#5D5D5D] text-[14px] sm:text-[16px] leading-[22px] font-normal">
                Presence in countries.
              </p>
            </div>
          </div>

          <div className="flex flex-row gap-5 mt-8">
            <img
              src={"/images/ent.jpg"}
              className="h-[59px] w-[59px] object-cover rounded-full"
            />
            <div>
              <span className="text-[#1a1a1a] text-[20px] font-medium">
                Liam Carter
              </span>
              <p className="text-[#1a1a1a] text-[16px] font-normal">
                Head of Product at FlowTech
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppleCardsShowcase;
