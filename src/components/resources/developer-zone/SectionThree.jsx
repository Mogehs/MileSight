import React from "react";
import { FaUserPlus } from "react-icons/fa"; // Import icon

const SectionThree = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-6 py-10 lg:py-16">
      {/* Left Side */}
      <div
        className="relative bg-cover bg-center rounded-md p-6 sm:p-8 text-white flex flex-col justify-center items-start w-full"
        style={{ backgroundImage: "url('/DeveloperZone/bea-1.jpg')" }}
      >
        <div className="relative z-10 bg-white/80 p-4 sm:p-6 rounded-lg shadow-lg">
          <h2 className="text-lg sm:text-xl font-medium text-[#333333]">
            Key Features at a Glance
          </h2>
          <ul className="mt-4 list-disc pl-4 text-[12px] sm:text-[14px] text-[#666666]">
            <li>Connecting devices and collecting real-time data</li>
            <li>Custom widgets and dashboards for data visualization</li>
            <li>Integrations with third-party platforms and services</li>
            <li>Multiple, scalable deployment options using Docker</li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <button className="bg-[#7CCA9A] text-[12px] hover:bg-[#00667C] px-3 py-1 rounded-lg">
              Explore the Platform
            </button>
            <button className="text-[#7CCA9A] border border-[#7CCA9A] hover:text-white hover:bg-[#00667C] px-3 py-1 rounded-lg">
              Build with Code
            </button>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div
        className="relative bg-cover bg-center rounded-md p-6 sm:p-8 text-white flex flex-col justify-center items-start w-full"
        style={{ backgroundImage: "url('/DeveloperZone/bea-3.png')" }}
      >
        <div className="relative z-10 bg-white/80 p-4 sm:p-6 rounded-lg shadow-lg">
          <h2 className="text-lg sm:text-xl font-semibold text-[#333333]">
            Who Can Benefit from Beaver IoT?
          </h2>
          <ul className="mt-4 list-disc pl-4 text-[12px] sm:text-[14px] text-[#666666]">
            <li>
              <strong>IoT Application Developers:</strong> Build and customize
              IoT applications quickly with diverse widgets and open-source
              code.
            </li>
            <li>
              <strong>Data Engineers/Analysts:</strong> Collect, analyze, and
              visualize IoT data through custom dashboards.
            </li>
            <li>
              <strong>Organizations:</strong> Scalable IoT solutions for data
              processing, visualization, and real-time analytics.
            </li>
            <li>And more...</li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <button className="flex items-center gap-2 bg-[#000] text-nowrap text-white px-3 py-1 rounded-lg">
              <FaUserPlus /> Fork on Github
            </button>
            <button className="text-[#7CCA9A] border border-[#7CCA9A] hover:text-white hover:bg-[#00667C] px-3 py-1 rounded-lg">
              Documentation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
