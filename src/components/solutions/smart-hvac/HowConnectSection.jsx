import React from "react";

function HowConnectSection() {
  return (
    <div className="bg-[#7CCA9A] px-4 py-12">
      <div className="flex flex-col items-center gap-6">
        <h1 className="md:text-[1.5rem] lg:text-[2rem] text-[18px] text-[#333]">
          Connected and Control, Plan A Smart Strategy for Sustainability
        </h1>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="relative">
            <img
              className="rounded-xl w-80"
              src="/Solution/smart-hvac/connect-img1.jpg"
              alt="not found"
            />
            <h2 className="absolute top-1/2 left-33 md:left-28 lg:left-43 transform -translate-x-1/2 -translate-y-1/2 text-white text-sm lg:text-[1rem] text-nowrap">
              Apartments with Centralized <br /> Tenant Management
            </h2>
          </div>
          <div className="relative">
            <img
              className="rounded-xl w-80"
              src="/Solution/smart-hvac/connect-img2.jpg"
              alt="not found"
            />
            <h2 className="absolute top-1/2 left-33 md:left-28  lg:left-43 text-nowrap transform -translate-x-1/2 -translate-y-1/2 text-white text-sm lg:text-[1rem]">
              Commercial Buildings with <br /> Cost-Saving Operations
            </h2>
          </div>
          <div className="relative">
            <img
              className="rounded-xl w-80"
              src="/Solution/smart-hvac/connect-img3.jpg"
              alt="not found"
            />
            <h2 className="absolute top-1/2 left-33 md:left-28 lg:left-43 text-nowrap transform -translate-x-1/2 -translate-y-1/2 text-white text-sm md:text-[12px] lg:text-[1rem]">
              Small- to Medium-Sized Retail <br /> Buildings (SME) with
              Automation
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowConnectSection;
