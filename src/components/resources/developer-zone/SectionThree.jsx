import React from "react";
import { FaUserPlus } from "react-icons/fa"; // Import icon

const SectionThree = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 py-16">
      {/* Left Side */}
      <div
  className="relative bg-none md:bg-cover md:bg-center rounded-md w-[600px] p-4 text-white flex flex-col justify-center items-start"
  style={{ backgroundImage: "url('/DeveloperZone/bea-1.jpg')" }}
>

  <div className="relative z-10">
    <h2 className="text-xl font-medium text-[#333333]">Key Features at a Glance</h2>
    <ul className="mt-4 list-disc pl-2 text-[13px] text-[#666666]">
      <li>Connecting devices and collecting real-time data</li>
      <li>Custom widgets and dashboards for data visualization</li>
      <li>Integrations with third-party platforms and services</li>
      <li>Multiple, scalable deployment options using docker</li>
    </ul>
    <div className="mt-6 flex gap-4">
      <button className="bg-[#0299f4] text-[12px] hover:bg-blue-600 px-3 py-1 rounded-lg">
        Explore the Platform
      </button>
      <button className="text-[#0299f4] border border-[#2999f4] hover:text-white hover:bg-[#2999f4] px-3 py-1 rounded-lg">
        Build with Code
      </button>
    </div>
  </div>
</div>


      {/* Right Side */}
      <div
        className="relative bg-cover bg-center rounded-md p-8 w-[400] text-white flex flex-col justify-center items-start"
        style={{ backgroundImage: "url('/DeveloperZone/bea-3.png')" }}
      >
        {/* Overlay (Optional) */}
        {/* <div className="absolute inset-0 bg-black opacity-40"></div> */}
        
        <div className="relative z-10">
          <h2 className="text-2xl font-semibold text-[#333333]">Who Can Benefit from Beaver IoT?</h2>
          <ul className="mt-4 list-disc pl-5 text-[15px] text-[#666666]">
            <li>IoT Application Developers: Build and customize IoT applications quickly with access to diverse widgets and open-source code.</li>
            <li>Data Engineers/Analysts in IoT: Collect, analyze, and visualize IoT data through custom dashboards and analytics.</li>
            <li>Organizations that require scalable IoT solutions for data processing, visualization, and real-time analytics.</li>
            <li>And more</li>
          </ul>
          <div className="mt-6 flex gap-4">
            <button className="flex items-center gap-2 bg-[#000] text-nowrap text-white px-3 py-1 rounded-lg">
              <FaUserPlus />  Fork on Github 
            </button>
            <button className="text-[#0299f4] border border-[#2999f4] hover:text-white hover:bg-[#0299f4] px-5 py-2 rounded-lg px-3 py-1 rounded-lg">
            Documentation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
