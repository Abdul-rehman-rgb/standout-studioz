import React from "react";

const Section = ({
  children,
  bg = "bg-white",
  text = "text-[#111418]",
  className = "",
  py = "py-12 sm:py-16 md:py-20",
  px = "px-4 sm:px-6 md:px-8 lg:px-10",
  maxW = "max-w-[1390px]",
}) => {
  return (
    <section className={`${py} ${bg} ${text} ${px} ${className}`}>
      <div className={`${maxW} mx-auto`}>
        {children}
      </div>
    </section>
  );
};

export default Section;