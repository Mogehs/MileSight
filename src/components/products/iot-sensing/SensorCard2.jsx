import React, { useState } from "react";
import { card2 } from "./data";
//

function SensorCard2() {
  const [selectedSeries, setSelectedSeries] = useState("Smart Building Sensor");
  const [selectedName, setSelectedName] = useState(
    card2[Object.keys(card2)[0]].names[0]
  );

  // Get data for the selected series
  const selectedSeriesData = card2[selectedSeries];

  // Get data for the selected name (if it exists in the new series)
  const selectedNameData = card2[selectedSeries]?.data?.[selectedName] || null;

  return (
    <div className="">
      {/* Section 2 */}
      <div className="bg-[#7CCA9A] rounded-4xl p-4 mt-4 text-white">
        <div className="flex md:flex-row flex-col items-center justify-between">
          {/* Radio Buttons */}
          <div className="flex flex-col gap-2">
            {Object.keys(card2).map((series) => (
              <div key={series} className="flex flex-col gap-2">
                <div className="p-4 flex items-center">
                  <input
                    type="radio"
                    id={series}
                    name="sensor-series"
                    className="w-4 h-4 text-blue-600 hover:cursor-pointer"
                    checked={selectedSeries === series}
                    onChange={() => {
                      setSelectedSeries(series);
                      setSelectedName(card2[series].names[0]); // Set first name by default
                    }}
                  />
                  <label
                    htmlFor={series}
                    className="ms-2 text-sm hover:cursor-pointer"
                  >
                    {series}
                  </label>
                </div>

                {/* Animated Names Section */}
                <div
                  className={`mt-2 bg-[#00667C] flex flex-col flex-wrap gap-2 overflow-hidden transition-all duration-500 ease-in-out transform md:max-w-1/2 text-white rounded-lg ${
                    selectedSeries === series
                      ? "max-h-96 opacity-100 translate-y-0"
                      : "max-h-0 opacity-0 -translate-y-5"
                  }`}
                >
                  {card2[series].names.map((name, index) => (
                    <span
                      key={index}
                      className={`px-4 py-1 hover:cursor-pointer transition-colors duration-300  ${
                        selectedName === name ? "text-[#7CCA9A]" : "text-white"
                      }`}
                      onClick={() => {
                        setSelectedSeries(series);
                        setSelectedName(name);
                      }}
                    >
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Image Display - Show for selected name */}
          {selectedName && selectedNameData && (
            <div className="pics flex md:flex-row flex-col items-center mt-4">
              {selectedNameData.images.map((image, index) => (
                <div key={index} className="flex flex-col items-center mb-4">
                  <img
                    src={image}
                    alt={`Image ${index}`}
                    className="w-64 h-64"
                  />
                  <p className="text-center text-lg">
                    {selectedNameData.title1[index]}
                  </p>
                  <p className="text-center text-sm">
                    {selectedNameData.title2[index]}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SensorCard2;
