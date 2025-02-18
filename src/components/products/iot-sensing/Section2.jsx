import React, { useState } from "react";
import { IoIosRadioButtonOff } from "react-icons/io";
import slides from "./data";
import ShowData from "./ShowData";

function Section2() {
  const [selectedButton, setSelectedButton] = useState("By Product");
  const [selected, setSelected] = useState(false);
  const [selectedSeries, setSelectedSeries] = useState("AM Series");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <div className="mt-4">
      <section className="">
        <div className=" flex flex-col gap-2 items-center justify-center">
          <h2 className="text-[3rem]">LoRaWAN® Sensor</h2>
          <div className="toggle-buttons mt-2 bg-[#f5f6f7] rounded-4xl flex justify-between w-[25%]">
            <button
              className={`hover:cursor-pointer py-1 px-4 ${
                selectedButton === "By Product"
                  ? "bg-[#0299f4] rounded-full text-white cursor-pointer transition-all"
                  : "text-black"
              }`}
              onClick={() => setSelectedButton("By Product")}
            >
              By Product
            </button>
            <button
              className={`hover:cursor-pointer py-1 px-4 ${
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

        {/* Section 1 */}
        <div className="bg-[#daecff] rounded-4xl p-4 mt-4">
          <div className="flex items-center justify-between">
            {/* Radio Buttons */}
            <div className="flex flex-col gap-2">
              {Object.keys(slides).map((series) => (
                <div key={series} className="flex items-center">
                  <input
                    type="radio"
                    id={series}
                    name="sensor-series"
                    className="w-4 h-4 text-blue-600 hover:cursor-pointer"
                    checked={selectedSeries === series}
                    onChange={() => {
                      setSelectedSeries(series);
                      setCurrentImageIndex(0); // Reset image index when changing series
                    }}
                  />
                  <label
                    htmlFor={series}
                    className="ms-2 text-sm hover:cursor-pointer"
                  >
                    {series}
                  </label>
                </div>
              ))}
            </div>

            {/* Image Display - Show All Images */}
            <div className="pics grid grid-cols-3 gap-4 items-center justify-center">
              {slides[selectedSeries].images.map((image, index) => (
                <div key={index} className="flex flex-col items-center">
                  <img src={image} alt="not found" className="" />
                  <p className="hover:cursor-pointer hover:text-[#0299f4] text-center">
                    {slides[selectedSeries].title1[index]}
                    <br />
                    {slides[selectedSeries].title2[index]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <ShowData />
      </section>
    </div>
  );
}

export default Section2;
