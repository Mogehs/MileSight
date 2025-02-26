import React from "react";

function SmartSpaceSection() {
  return (
    <div className="mt-8">
      <h1 className="text-[2.5rem] text-center">
        Transform Your Space with Smart Office Senors and Solutions
      </h1>
      <div className="flex justify-center w-full gap-8 mt-8">
        <div className="border border-[#c2c2c2] w-[50%] px-4 py-12 rounded-xl">
          Unlock the full potential of your workplace with Milesight's advanced
          smart office solutions. From occupancy detection and environmental
          monitoring to automation controls, discover how to use Milesight smart
          office sensors to optimize space, reduce energy consumption, and
          ensure a secure, comfortable work environment.
        </div>
        <div className="w-[50%]">
          <img
            className="w-120 rounded-2xl"
            src="/Solution/smart-space/smart-video-img.jpg"
            alt="not found"
          />
        </div>
      </div>
    </div>
  );
}

export default SmartSpaceSection;
