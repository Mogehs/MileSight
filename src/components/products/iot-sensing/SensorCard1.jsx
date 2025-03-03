import React, { useState } from "react";
import { card1 } from "./data";

function SensorCard1() {
  const [selectedSeries, setSelectedSeries] = useState("AM Series");

  return (
    <div>
      {/* Section 1 */}
      <div className="bg-[#7CCA9A] rounded-4xl p-4 mt-4">
        <div className="flex md:flex-row flex-col md:items-center justify-between">
          {/* Radio Buttons */}
          <div className="flex flex-col gap-3">
            {Object.keys(card1).map((series) => (
              <label
                key={series}
                htmlFor={series}
                className={`flex items-center gap-2 cursor-pointer px-3 py-2 rounded-md transition-all duration-300 
                  ${
                    selectedSeries === series
                      ? "text-[#00667C] font-semibold"
                      : "text-[white] "
                  }`}
                onClick={() => setSelectedSeries(series)} // Ensure clicking applies styles
              >
                <input
                  type="radio"
                  id={series}
                  name="sensor-series"
                  className="hidden" // Hide default radio button
                  checked={selectedSeries === series}
                  onChange={() => setSelectedSeries(series)}
                />
                {/* Custom radio button */}
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-300
                    ${
                      selectedSeries === series
                        ? "bg-blue-600 border-blue-600"
                        : "border-gray-400"
                    }`}
                >
                  {selectedSeries === series && (
                    <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                  )}
                </div>
                {series}
              </label>
            ))}
          </div>

          {/* Image Display - Show All Images */}
          <div className="pics grid md:grid-cols-3 gap-4 items-center justify-center">
            {card1[selectedSeries].images.map((image, index) => (
              <div key={index} className="flex flex-col items-center">
                <img src={image} alt="not found" className="" />
                <p className="hover:cursor-pointer hover:text-[#0299f4] text-center">
                  {card1[selectedSeries].title1[index]}
                  <br />
                  {card1[selectedSeries].title2[index]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SensorCard1;
