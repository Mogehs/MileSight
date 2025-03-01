import React from "react";
import { FaArrowRight } from "react-icons/fa"; // Import arrow icon

const SectionFive = () => {
  return (
    <div className="px-12 py-10 flex flex-col items-center">
      {/* Main Card - Centered Heading & Description */}
      <div className="bg-gray-100 rounded-md p-6 w-full md:w-[600px] text-center shadow-lg">
        <h2 className="text-3xl font-semibold text-[#333]">Milesight Development Platform</h2>
        <p className="mt-4 text-[16px] text-[#666]">
          A complete solution for managing IoT devices efficiently and securely.
        </p>
      </div>

      {/* Grid Section with 5 Cards */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        {/* First Row - 3 Cards */}
        {["Feature One", "Feature Two", "Feature Three"].map((title, index) => (
          <div key={index} className="bg-gray-100 rounded-md p-6 shadow-md">
            <h2 className="text-xl font-semibold text-[#333]">{title}</h2>
            <p className="mt-2 text-[14px] text-[#666]">
              This feature enhances IoT management capabilities efficiently.
            </p>
            <button className="mt-4 flex items-center text-[#0299f4] hover:text-blue-600">
              Go <FaArrowRight className="ml-2" />
            </button>
          </div>
        ))}
      </div>

      {/* Second Row - 2 Cards */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {["Feature Four", "Feature Five"].map((title, index) => (
          <div key={index} className="bg-gray-100 rounded-md p-6 shadow-md">
            <h2 className="text-xl font-semibold text-[#333]">{title}</h2>
            <p className="mt-2 text-[14px] text-[#666]">
              This feature streamlines operations for IoT users.
            </p>
            <button className="mt-4 flex items-center text-[#0299f4] hover:text-blue-600">
              Go <FaArrowRight className="ml-2" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionFive;
