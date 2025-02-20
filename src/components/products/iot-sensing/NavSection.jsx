import React from "react";
import { FaGreaterThan } from "react-icons/fa6";

function NavSection() {
  return (
    <div className=" md:sticky top-0 bg-white z-10">
      <div className="btns text-[#666] flex justify-between items-center shadow-2xs py-8">
        <div className="flex md:flex-row flex-col items-center gap-8">
          <button className="hover:text-[#0299f4] cursor-pointer">
            LoRaWAN® Sensor
          </button>
          <p className="">|</p>
          <button className="hover:text-[#0299f4] cursor-pointer">
            LoRaWAN® Gateway
          </button>
          <p>|</p>

          <button className="hover:text-[#0299f4] cursor-pointer">
            LoRaWAN® Controller
          </button>
          <p>|</p>

          <button className="hover:text-[#0299f4] cursor-pointer">
            IoT Display
          </button>
          <p>|</p>

          <button className="hover:text-[#0299f4] cursor-pointer">
            LoRaWAN® Demo Kit
          </button>
        </div>
        <div className="flex items-center gap-2">
          <button className="hover:text-[#0299f4] cursor-pointer">Home</button>
          <p className="text-[10px]">
            <FaGreaterThan />
          </p>
          <p>IoT LoRaWAN® Series</p>
        </div>
      </div>
    </div>
  );
}

export default NavSection;
