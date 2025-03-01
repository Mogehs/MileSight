import React from "react";
import Growth1 from "/aboutimg/growth1.jpg";
import Gicon1 from "/aboutimg/Gicon1.png";
import Gicon2 from "/aboutimg/Gicon11.png";
import Gicon3 from "/aboutimg/Gicon111.png";

const Growth = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 p-5 md:p-10">
      {/* Left Content Section */}
      <div className="flex flex-col gap-6 w-full md:max-w-[50vw] text-center md:text-left">
        {/* Title and Description */}
        <div className="shadow-lg p-3 bg-white rounded-lg">
          <h1 className="text-2xl  sm:text-3xl md:text-md font-semibold text-black mb-3">
            Sustainable Growth
          </h1>
          <p className="text-gray-600 text-sm sm:text-base md:text-sm leading-relaxed">
            Guaranteeing both Milesight and its customers' benefit, Milesight
            forms a healthier and value-added channel management network. Now
            our channel partners cover Asia, America, Europe, Middle East,
            Oceania, Africa, etc. The precise market positioning of Milesight
            guides the right direction and the efforts on brand awareness,
            enjoying a stable and persistent CAGR over 50% and a remarkable
            market share.
          </p>
        </div>

        {/* Icon Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-lg">
            <img src={Gicon1} className="w-10 sm:w-12 md:w-14" alt="Icon 1" />
            <span className="text-xl sm:text-2xl font-semibold mt-2">50%</span>
          </div>
          <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-lg">
            <img src={Gicon2} className="w-10 sm:w-12 md:w-14" alt="Icon 2" />
            <span className="text-xl sm:text-2xl font-semibold mt-2">50%</span>
          </div>
          <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-lg">
            <img src={Gicon3} className="w-10 sm:w-12 md:w-14" alt="Icon 3" />
            <span className="text-xl sm:text-2xl font-semibold mt-2">50%</span>
          </div>
        </div>
      </div>

      {/* Right Image Section with Overlay */}
      <div className="w-full md:w-[45%] relative">
        <img
          className="w-full  sm:max-w-[100vw] sm:h-[50vh] md:max-w-lg lg:max-w-xl h-full object-cover rounded-2xl shadow-lg"
          src={Growth1}
          alt="Growth"
        />

        {/* Overlay with Stats */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/80 p-4 rounded-lg shadow-md flex flex-col items-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-black">50%</h1>
          <p className="text-xs sm:text-sm text-gray-700 text-center">
            Compound Annual Growth Rate
          </p>
        </div>
      </div>
    </div>
  );
};

export default Growth;
