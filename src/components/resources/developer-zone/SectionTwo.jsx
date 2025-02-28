import React from "react";

const SectionTwo = () => {
  return (
    <section className="flex flex-col items-center text-center py-16 px-6">
      {/* Centered Image */}
      <img
        src="/DeveloperZone/bea.png"
        alt="Centered"
        className="w-48 h-48 object-cover rounded-full shadow-lg"
      />
      <h2 className="text-4xl font-semibold mt-4">Open-source IoT Platform</h2>

      {/* Background Image Section */}
      <div
        className="relative w-full h-[400px] bg-cover bg-center mt-12 flex items-center"
        style={{ backgroundImage: "url('/DeveloperZone/bea-1.jpg')" }}
      >
        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-gray-700 opacity-40"></div> */}

        {/* Content */}
        <div className="relative  max-w-xl text-white p-8">
          <h3 className="text-start text-3xl font-semibold text-[#333333]">Transform Ideas into Practical IoT Solutions</h3>
          <p className="text-start text-[13px] text-[#666666] mt-3">
          Beaver IoT is an open-source platform designed for rapid and intuitive IoT application development. It supports the entire process from device connectivity to data processing, analysis, and visualization. It is an ideal choice for IoT prototyping and scalable solutions. Released under the MIT Open Source license and available free of charge, Beaver IoT fosters innovation and community collaboration in the IoT space.
          </p>
          <button className="mt-4 px-6 py-3 bg-[#0299f4] hover:bg-blue-600 text-white font-semibold rounded-lg">
Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
