import React from "react";

function SuccessSection() {
  return (
    <div className="my-8 p-4">
      <h2 className="md:text-[2rem] text-[25px] text-center">
        Success Stories in Smart Office Space
      </h2>
      <div className="flex md:flex-row flex-col items-center justify-center gap-8 p-4 border border-[#cdd2d6] rounded-xl mt-4">
        <div>
          <img src="/Solution/smart-space/success-img1.jpg" alt="not found" />
        </div>
        <div className="p-4">
          <h3 className="md:text-[1rem] lg:text-[1.5rem] text-[20px]">
            Explore Milesight's Smart Green Building: Saving $45,000 per Year
          </h3>
          <ul className="list-disc marker:text-[#0299f4] text-[#666] flex flex-col gap-2">
            <li>Up to 45% On Energy Savings Per Year</li>
            <li>Employee Satisfaction Increased By 83%</li>
            <li>Increased Meeting Room Occupancy Rates By 62% Daily</li>
          </ul>
          <button className="text-[#0299f4] hover:cursor-pointer underline">
            Learn More
          </button>
        </div>
      </div>
      <div className="flex md:flex-row flex-col items-center justify-center gap-8 p-4 border border-[#cdd2d6] rounded-xl mt-4">
        <div>
          <img src="/Solution/smart-space/success-img2.jpg" alt="not found" />
        </div>
        <div className="p-4">
          <h3 className="md:text-[1rem] lg:text-[1.5rem] text-[20px] ">
            Create a Smart Space with IoT-based Energy ManagementSystem (EMS) in
            Malaysia
          </h3>
          <ul className="list-disc marker:text-[#0299f4] text-[#666] flex flex-col gap-2">
            <li>Enhanced Occupant Comfort</li>
            <li>Improved Indoor Air Quality</li>
            <li>Energy Efficiency</li>
            <li>Data-Driven Decision Making</li>
          </ul>
          <button className="text-[#0299f4] hover:cursor-pointer underline">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default SuccessSection;
