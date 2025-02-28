import React from "react";

function TypesSection() {
  return (
    <div className="my-8 p-4">
      <h2 className="md:text-[2rem] text-[20px] text-center">
        Types of Smart Office Sensors and Their Applications
      </h2>
      <div className="bg-[#f5f5f5] rounded-xl mt-6 p-4">
        <p className="text-[#666] text-[15px] mt-6">
          Smart control sensors automate lighting, HVAC, curtains, and other
          office systems, leading to significant energy savings and improved
          comfort.
        </p>
        <div className="p-4 flex md:flex-row flex-col justify-center items-center gap-8 mt-6">
          <div className="md:w-[45%]">
            <ul className="list-disc marker:text-[#0299f4] flex flex-col gap-4">
              <li>
                <p className="text-[20px]">Lighting Control Sensors:</p>
                <p className="text-[#666]">
                  Automatically adjust lighting based on ambient light levels
                  and occupancy.
                </p>
              </li>
              <li>
                <p className="text-[20px]">Smart Thermostats:</p>
                <p className="text-[#666]">
                  Integrated with temperature and occupancy sensors to optimize
                  HVAC control, ensuring comfort while minimizing energy
                  consumption.
                </p>
              </li>
              <li>
                <p className="text-[20px]">Smart Switches/Buttons:</p>
                <p className="text-[#666]">
                  Allow for the seamless control and automation of various
                  office appliances and systems.
                </p>
              </li>
            </ul>
            <div className="mt-4">
              <p className="text-[#30c58e]">
                Energy Efficiency & Cost Reduction:
              </p>
              <p className="text-[#666]">
                By using smart office sensors to collect real-time data,
                businesses can automate temperature and lighting adjustments,
                significantly reducing operational costs for lighting and HVAC
                systems.
              </p>
            </div>
          </div>
          <div className="md:w-[45%] flex flex-col gap-4 justify-center items-center">
            <img src="/Solution/smart-space/types-img1.jpg" alt="not found" />
            <img src="/Solution/smart-space/types-img2.jpg" alt="not found" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TypesSection;
