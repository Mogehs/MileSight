import React from "react";

const SectionFour = () => {
  return (
    <div className="px-4 py-10">
      {/* Main Heading */}
      <h2 className="text-center text-xl sm:text-3xl md:text-4xl font-semibold text-[#333] mb-8">
        Milesight Development Platform
      </h2>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 p-4">
        {/* Left Side */}
        <div
          className="relative bg-cover bg-center rounded-md w-full p-6 text-white flex flex-col justify-center items-start"
          style={{ backgroundImage: "url('/DeveloperZone/bea-6.png')" }}
        >
          <div className="absolute inset-0 bg-gray-500 opacity-10 rounded-md"></div>

          <div className="relative z-10">
            <h2 className="text-xl sm:text-2xl font-medium text-black">
              Simplify IoT Device Management and Integration
            </h2>
            <p className="mt-4 text-[15px] sm:text-[18px] text-black">
              Milesight Development Platform simplifies IoT device deployment,
              management, and integration by providing practical tools like
              RESTful APIs, Webhooks, and pre-configuration templates.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <button className="bg-[#7CCA9A] text-[14px] sm:text-[15px] hover:bg-[#00667C] px-4 py-2 rounded-lg">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col gap-5">
          {/* First Card */}
          <div
            className="relative bg-cover bg-center rounded-md p-6 w-full text-white flex flex-col justify-center items-start"
            style={{ backgroundImage: "url('/DeveloperZone/bea-5.png')" }}
          >
            <div className="absolute inset-0 bg-gray-300 opacity-10 rounded-md"></div>

            <div className="relative z-10">
              <h2 className="text-xl sm:text-2xl font-semibold text-black">
                Key Features at a Glance
              </h2>
              <ul className="mt-4 list-disc pl-5 text-[13px] sm:text-[15px] text-black">
                <li>
                  Plug-and-play: Automatic device provisioning with templates.
                </li>
                <li>Batch Operations: Manage multiple devices at once.</li>
                <li>Over-the-Air Updates: Remote firmware upgrades.</li>
                <li>APIs & Webhooks: Enable seamless integration.</li>
              </ul>
              <div className="mt-6 flex flex-wrap gap-4">
                <button className="bg-[#0299f4] text-white text-[13px] sm:text-[15px] hover:bg-blue-600 px-4 py-2 rounded-lg">
                  Sign Up
                </button>
              </div>
            </div>
          </div>

          {/* Second Card */}
          <div className="relative bg-gray-100 rounded-md p-6 w-full text-black flex flex-col justify-center items-start">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#333333]">
              Who Is It Built for?
            </h2>
            <ul className="mt-4 list-disc pl-5 text-[13px] sm:text-[15px] text-black">
              <li>
                Solution Providers: Build and customize IoT applications
                efficiently to deliver tailored solutions and value-added
                services to clients.
              </li>
              <li>
                System Integrators: Simplify the integration of devices,
                streamline large-scale deployments, and accelerate project
                progress.
              </li>
              <li>And More</li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-4">
              <button className="bg-[#7CCA9A] text-[14px] sm:text-[15px] hover:bg-[#00667C] px-4 py-2 rounded-lg text-white">
                Documentation
              </button>
              <button className="text-[#7CCA9A] border border-[#7CCA9A] hover:text-white hover:bg-[#00667C] px-3 py-1 rounded-lg">
                API Reference
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
