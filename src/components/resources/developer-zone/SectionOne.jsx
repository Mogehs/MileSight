import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { FiAirplay } from "react-icons/fi";
import { WiCloud } from "react-icons/wi";

const SectionOne = () => {
  return (
    <section className="flex flex-col items-center text-center py-16 px-6">
      {/* Section Heading */}
      <h2 className="text-xl sm:text-3xl font-semibold mb-4 text-[#333333]">
        Calling IoT Developers: Innovate with Milesight
      </h2>
      <p className="text-[14px] text-[#666666] max-w-6xl">
        Whether you're building custom IoT applications, managing large-scale
        IoT projects, or working on advanced visual sensing, Milesight is ready
        to help.
      </p>

      {/* Cards Section */}
      <div className="flex flex-col justify-center md:flex-row items-center gap-8 mt-10 w-full ">
        {/* Left Card */}
        <div className="flex flex-col items-start p-6 sm:w-[32rem] text-start">
          <FiAirplay className="text-[#0299f4] text-4xl sm:text-3xl mb-3" />
          <h3 className="text-xl sm:text-3xl font-semibold text-[#333333]">
            Looking to easily custom-develop IoT applications?
          </h3>
          <p className="text-[#666666] mt-2">
            Explore Beaver IoT for intuitive application development with
            customizable dashboards, open-source capabilities, and flexible
            integration options.
          </p>
          <button className="mt-4 flex items-center px-4 py-2 text-[#666] hover:bg-[#00667C] hover:text-white border border-[#666]">
            <FaArrowRight />
          </button>
        </div>

        {/* Vertical Line */}
        <div className="hidden md:block w-1 h-64 bg-gray-200"></div>

        {/* Right Card */}
        <div className="flex flex-col items-start p-6 sm:w-[32rem] text-start">
          <WiCloud className="text-[#0299f4] text-5xl sm:text-3xl mb-3" />
          <h3 className="text-xl sm:text-3xl font-semibold text-[#333333]">
            Looking to integrate and manage IoT deployments?
          </h3>
          <p className="text-[#666666] mt-2">
            Use Milesight Development Platform for streamlined device
            management, powerful APIs, and scalable IoT integrations.
          </p>
          <button className="mt-4 flex items-center px-4 py-2 hover:bg-[#00667C] hover:text-white text-[#666] border border-[#666]">
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
