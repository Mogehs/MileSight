import React from "react";
import { FaUsers } from "react-icons/fa"; // Import icons

const Start = () => {
  return (
    <div
      className="relative h-[25rem] sm:h-[30rem] flex items-center justify-start bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: "url('/DeveloperZone/start.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-800 opacity-30"></div>

      {/* Hero Content */}
      <div className="relative text-white px-8 flex flex-col justify-center gap-6 md:items-start items-center max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-semibold">Developer Zone</h1>
        <p className="text-lg md:text-xl font-light text-white w-full md:w-[500px] text-center md:text-left">
          Explore platforms, resources, and tools to build, integrate, and
          innovate with Milesight.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4">
          <button className="flex items-center gap-3 bg-[#5865F2] text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition">
            <FaUsers size={20} />
            Join Our Community
          </button>
          <button className="flex items-center gap-3 bg-[#0299f4] text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-300 transition">
            Resource Hub
          </button>
        </div>
      </div>
    </div>
  );
};

export default Start;
