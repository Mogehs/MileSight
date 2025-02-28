import React from "react";

function HowScaleSection() {
  return (
    <div className="my-8">
      <div className="p-4 flex flex-col items-center gap-4">
        <h2 className="md:text-[1.5rem] lg:text-[2rem] text-[20px] text-[#333]">
          Large-scale Deployments with Ease
        </h2>
        <div className="flex md:flex-row flex-col justify-between items-center gap-6 my-4">
          <div className="flex flex-col gap-1 md:w-[40%]">
            <h3 className="text-[#0299f4] lg:w-[80%]">
              With support for LoRaWAN® Gateway with BACnet, real-time data can
              be seamlessly integrated into existing Building Management System
              (BMS).
            </h3>
            <ul className="list-disc text-[#666] flex flex-col gap-1 my-4 border-b border-[#e2e3e3] pb-2 ms-5">
              <li>BACnet over LoRaWAN®</li>
              <li>LoRaWAN® as a Complementary Network</li>
            </ul>
            <h3 className="text-[#333]">
              Bulk Deployment and Central Management Effortlessly
            </h3>
          </div>
          <img
            className="rounded-xl md:w-100 lg:w-140 bg-[#f0f1f4]"
            src="/Solution/smart-hvac/scale-img.png"
            alt="not found"
          />
        </div>
      </div>
    </div>
  );
}

export default HowScaleSection;
