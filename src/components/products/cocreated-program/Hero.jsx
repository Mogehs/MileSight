import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full">
      <img
        src="/iot-sensing/iot-img-2.jpg"
        alt="IoT Sensing"
        className="w-full h-[500px] object-cover"
      />

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col items-center md:items-end justify-center md:justify-start text-white px-6 md:px-20 text-center md:text-right">
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold max-w-[90%] md:max-w-[600px] leading-tight">
          Co-created Innovation Program
        </h1>

        {/* Offer Details */}
        <div className="mt-4 text-sm sm:text-base md:text-lg font-medium">
          <p>Up to 50% Discount</p>
          <p>Free Sample (Limited Spots Available)</p>
        </div>

        {/* Join Button */}
        <button className="mt-6 text-sm sm:text-base md:text-lg border border-blue-500 py-2 px-4 rounded-xl hover:bg-blue-500 transition">
          Join Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
