import React, { useState } from "react";
import { card1 } from "./data";

function SensorCard1() {
  const [selectedSeries, setSelectedSeries] = useState("AM Series");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  return (
    <div>
      {/* Section 1 */}
      <div className="bg-[#daecff] rounded-4xl p-4 mt-4">
        <div className="flex md:flex-row flex-col md:items-center justify-between">
          {/* Radio Buttons */}
          <div className="flex flex-col gap-2">
            {Object.keys(card1).map((series) => (
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
