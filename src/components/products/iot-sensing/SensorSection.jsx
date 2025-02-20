import React, { useState } from "react";
import SensorCard1 from "./SensorCard1";
import SensorCard2 from "./SensorCard2";

function SensorSection() {
  const [selectedButton, setSelectedButton] = useState("By Product");

  return (
    <div id="lorawan-sensor" className="mt-4 p-4">
      <div className=" flex flex-col gap-2 items-center justify-center">
        <h2 className="md:text-[3rem] text-[25px]">LoRaWAN® Sensor</h2>
        <div className="toggle-buttons mt-2 bg-[#f5f6f7] rounded-4xl flex justify-between md:w-[40%] lg:w-[30%] sm:w-[50%]">
          <button
            className={`hover:cursor-pointer py-1 px-4 text-nowrap ${
              selectedButton === "By Product"
                ? "bg-[#0299f4] rounded-full text-white cursor-pointer transition-all"
                : "text-black"
            }`}
            onClick={() => setSelectedButton("By Product")}
          >
            By Product
          </button>
          <button
            className={`hover:cursor-pointer py-1 px-4 text-nowrap ${
              selectedButton === "Environmental Sensing"
                ? "bg-[#0299f4] rounded-full text-white cursor-pointer transition-all"
                : "text-black"
            }`}
            onClick={() => setSelectedButton("Environmental Sensing")}
          >
            Environmental Sensing
          </button>
        </div>
      </div>
      <div
        className={`w-full ${
          selectedButton === "By Product" ? "block" : "hidden"
        }`}
      >
        <SensorCard1 />
      </div>
      <div
        className={`w-full ${
          selectedButton === "Environmental Sensing" ? "block" : "hidden"
        }`}
      >
        <SensorCard2 />
      </div>
    </div>
  );
}

export default SensorSection;
