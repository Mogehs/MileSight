import React from "react";
import mainimg from "/energyefficiency/main1.png"; // Ensure this path is correct
import icon from "/energyefficiency/ico1.png"; // Ensure this path is correct
import Section4p1 from "./Section4p1";

const Section4 = () => {
  return (
    <div className="flex flex-col items-center relative bg-blue-950 px-4 py-10">
      {/* Header Section */}
      <div className="text-center z-10 w-full">
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-4xl text-white font-semibold">
          Ecosystem for Energy Saving Operation
        </h1>
        <h2 className="text-sm sm:text-md md:text-lg lg:text-xl text-sky-600 font-semibold">
          Reducing Costs and CO2 Emissions
        </h2>
      </div>
      {/* Content Section */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-6">
        {/* Left Section */}
        <div className="text-white flex flex-col items-start">
          <h1 className="text-lg sm:text-xl font-semibold">
            Going Green in Transport
          </h1>
          <h2 className="text-sm sm:text-md">
            EV Charging Station Management Solution
          </h2>
          <h3 className="text-sm sm:text-md text-blue-600">
            Make electric vehicle (EV) charging management easy and practical.
          </h3>
          <button className="bg-sky-500 mt-3 px-6 py-2 rounded-md text-sm sm:w-[220px]">
            Hit the Road with Confidence
          </button>
        </div>

        {/* Right Section */}
        <div className="text-white flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <div className="w-full">
            <h1 className="text-lg sm:text-xl font-semibold">
              Transforming into Modern Utilities
            </h1>
            <h2 className="text-sm sm:text-md">Smart Metering Solution</h2>
            <h3 className="text-sm sm:text-md text-blue-600">
              Make data-driven decisions based on water/gas/electricity usage
              monitoring.
            </h3>
          </div>

          <div className="w-28 flex flex-col items-center gap-3">
            <img src={icon} alt="Icon" className="w-12 sm:w-16" />
            <div className="bg-sky-500 w-full rounded-sm text-center py-2">
              <ul className="text-[12px] space-y-1">
                <li>Pulse Counter</li>
                <li>IoT Controller</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Section4p1 />
    </div>
  );
};

export default Section4;
