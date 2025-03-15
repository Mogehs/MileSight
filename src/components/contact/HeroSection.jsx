import React from "react";

const HeroSection = () => {
  return (
    <div className="relative text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/contact/contact.png"
          alt="Background"
          className="object-cover object-center w-full h-[70vh] md:h-[90vh]"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-start items-start  text-left px-6 md:px-12 lg:px-20 top-[150px] md:top-[120px]">
        <h1 className="text-xl md:text-4xl font-medium mb-4">Contact Us</h1>
        <p className="text-[13px] md:text-[16px] text-white mb-8 w-full md:w-[30rem]">
          Milesight offers long-term and sustained support that encompasses sales, marketing, technical and training, enabling partners yield more tangible opportunities in pre-sale and after-sale stage.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
