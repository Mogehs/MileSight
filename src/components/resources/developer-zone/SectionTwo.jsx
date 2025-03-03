import React from "react";

const SectionTwo = () => {
  return (
    <div className="flex flex-col items-center py-12 px-6">
      {/* Centered Image */}
      <img
        src="/DeveloperZone/bea.png"
        alt="Centered"
        className="w-24 h-10 object-contain"
      />
      <h2 className="text-2xl sm:text-4xl font-semibold mb-10 text-center">
        Open-source IoT Platform
      </h2>

      {/* Background Image Section (Hidden for small screens) */}
      <div className="relative w-full h-[400px] bg-cover rounded-md bg-center sm:mt-12 flex items-center md:bg-[url('/DeveloperZone/bea-1.jpg')]">
        {/* Content */}
        <div className="relative max-w-lg text-white p-8">
          <h3 className="text-2xl sm:text-3xl font-semibold text-[#333333] text-start">
            Transform Ideas into Practical IoT Solutions
          </h3>
          <p className="text-[14px] sm:text-[16px] text-[#666666] mt-3 text-start">
            Beaver IoT is an open-source platform designed for rapid and
            intuitive IoT application development. It supports the entire
            process from device connectivity to data processing, analysis, and
            visualization. It is an ideal choice for IoT prototyping and
            scalable solutions. Released under the MIT Open Source license and
            available free of charge, Beaver IoT fosters innovation and
            community collaboration in the IoT space.
          </p>
          <button className="mt-4 px-4 py-2 bg-[#7CCA9A] hover:text-[#00667C] text-white font-semibold rounded-lg">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
