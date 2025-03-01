import React from "react";

const HowSmartSection = () => {
  return (
    <div className="my-2 p-4 flex md:flex-row flex-col gap-6 justify-between items-center">
      <div className="flex flex-col gap-4 md:w-[50%]">
        <h2 className="md:text-[1.5rem] lg:text-[2rem] text-[20px] text-[#333] md:w-[80%]">
          Smart HVAC Also Means Predictive Maintenance and Upkeep
        </h2>
        <p className="text-[#0299f4] md:text-[1rem] text-[15px] ">
          Does the Cooling and Heating Source in the HVAC Work Well?
        </p>
        <p className="text-[#666] text-sm">
          For example, a sudden change in the temperature of a certain link may
          be a problem that requires a person to be scheduled for investigation.
          With Milesight temperature sensors such as TS201, TS30x and
          EM500-PT100, facility managers are able to get this data in real-time.
        </p>
      </div>
      <img
        className="rounded-xl md:w-80 lg:w-120"
        src="/Solution/smart-hvac/smart-img.jpg"
        alt="not found"
      />
    </div>
  );
};

export default HowSmartSection;
