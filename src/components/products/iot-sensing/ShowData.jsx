import React, { useState } from "react";
//
const slides2 = {
  "Smart Building Sensor": {
    names: [
      "People Sensing Series",
      "Indoor Air Quality",
      "Smart Office",
      "Smart Restroom",
      "Water Leak Management",
      "Smart Heating & Cooling Controls",
      "Parking Management",
    ],
    data: {
      "People Sensing Series": {
        images: [
          "/iot-sensing/pic-1.png",
          "/iot-sensing/pic-2.png",
          "/iot-sensing/pic-3.png",
        ],
        title1: ["AM102/AM102L", "AM103/AM103L", "AM307/AM308/AM319"],
        title2: ["2-in-1 IAQ Sensor", "3-in-1 IAQ Sensor", "9-in-1 IAQ Sensor"],
      },
      "Indoor Air Quality": {
        images: [
          "/iot-sensing/2-pic1.png",
          "/iot-sensing/2-pic2.png",
          "/iot-sensing/2-pic3.png",
        ],
        title1: ["IAQ101", "IAQ102", "IAQ103"],
        title2: [
          "Indoor Air Quality Monitor",
          "Air Purification Controller",
          "Smart Ventilation System",
        ],
      },
      "Smart Office": {
        images: [
          "/iot-sensing/3-pic1.png",
          "/iot-sensing/3-pic2.png",
          "/iot-sensing/3-pic3.png",
        ],
        title1: ["IAQ101", "IAQ102", "IAQ103"],
        title2: [
          "Indoor Air Quality Monitor",
          "Air Purification Controller",
          "Smart Ventilation System",
        ],
      },
      "Smart Restroom": {
        images: ["/iot-sensing/4-pic1.png", "/iot-sensing/4-pic2.png"],
        title1: ["IAQ101", "IAQ102"],
        title2: ["Indoor Air Quality Monitor", "Air Purification Controller"],
      },
      "Water Leak Management": {
        images: [
          "/iot-sensing/5-pic1.png",
          "/iot-sensing/5-pic2.png",
          "/iot-sensing/5-pic3.png",
        ],
        title1: ["IAQ101", "IAQ102", "IAQ103"],
        title2: [
          "Indoor Air Quality Monitor",
          "Air Purification Controller",
          "Smart Ventilation System",
        ],
      },
      "Smart Heating & Cooling Controls": {
        images: ["/iot-sensing/6-pic.png"],
        title1: ["IAQ101"],
        title2: ["Indoor Air Quality Monitor"],
      },
      "Parking Management": {
        images: [
          "/iot-sensing/7-pic1.png",
          "/iot-sensing/7-pic2.png",
          "/iot-sensing/7-pic3.png",
        ],
        title1: ["IAQ101", "IAQ102", "IAQ103"],
        title2: [
          "Indoor Air Quality Monitor",
          "Air Purification Controller",
          "Smart Ventilation System",
        ],
      },
    },
  },
  // Add more series here
  "Smart City Sensor": {
    names: [
      "Trash Bin Management",
      "Temperature & Humidity Monitoring",
      "Distance/Level Monitoring",
      "Smart Metering",
    ],
    data: {
      "Trash Bin Management": {
        images: [
          "/iot-sensing/9-pic1.png",
          "/iot-sensing/9-pic2.png",
          "/iot-sensing/9-pic3.png",
        ],
        title1: ["AM102/AM102L", "AM103/AM103L", "AM307/AM308/AM319"],
        title2: ["2-in-1 IAQ Sensor", "3-in-1 IAQ Sensor", "9-in-1 IAQ Sensor"],
      },
      "Temperature & Humidity Monitoring": {
        images: [
          "/iot-sensing/10-pic1.png",
          "/iot-sensing/10-pic2.png",
          "/iot-sensing/10-pic3.png",
        ],
        title1: ["IAQ101", "IAQ102", "IAQ103"],
        title2: [
          "Indoor Air Quality Monitor",
          "Air Purification Controller",
          "Smart Ventilation System",
        ],
      },
      "Distance/Level Monitoring": {
        images: ["/iot-sensing/11-pic.png", "/iot-sensing/2-pic1.png"],
        title1: ["IAQ101", "IAQ102"],
        title2: ["Indoor Air Quality Monitor", "Air Purification Controller"],
      },
      "Smart Metering": {
        images: ["/iot-sensing/12-pic1.png", "/iot-sensing/12-pic2.png"],
        title1: ["IAQ101", "IAQ102"],
        title2: ["Indoor Air Quality Monitor", "Air Purification Controller"],
      },
    },
  },
  //   Add more data...
  "Smart Agriculture": {
    names: [
      "Weather Monitoring",
      "Irrigation & Greenhouse Automation",
      "Poultry & Husbandry",
    ],
    data: {
      "Weather Monitoring": {
        images: [
          "/iot-sensing/3-pic1.png",
          "/iot-sensing/3-pic2.png",
          "/iot-sensing/3-pic3.png",
        ],
        title1: ["AM102/AM102L", "AM103/AM103L", "AM307/AM308/AM319"],
        title2: ["2-in-1 IAQ Sensor", "3-in-1 IAQ Sensor", "9-in-1 IAQ Sensor"],
      },
      "Irrigation & Greenhouse Automation": {
        images: ["/iot-sensing/4-pic1.png", "/iot-sensing/4-pic2.png"],
        title1: ["IAQ101", "IAQ102"],
        title2: ["Indoor Air Quality Monitor", "Air Purification Controller"],
      },
      "Poultry & Husbandry": {
        images: [
          "/iot-sensing/5-pic1.png",
          "/iot-sensing/5-pic2.png",
          "/iot-sensing/5-pic3.png",
        ],
        title1: ["IAQ101", "IAQ102", "IAQ103"],
        title2: [
          "Indoor Air Quality Monitor",
          "Air Purification Controller",
          "Smart Ventilation System",
        ],
      },
    },
  },
};

function ShowData() {
  const [selectedSeries, setSelectedSeries] = useState("Smart Building Sensor");
  const [selectedName, setSelectedName] = useState(
    slides2[Object.keys(slides2)[0]].names[0]
  );

  // Get data for the selected series
  const selectedSeriesData = slides2[selectedSeries];

  // Get data for the selected name (if it exists in the new series)
  const selectedNameData =
    slides2[selectedSeries]?.data?.[selectedName] || null;

  return (
    <div>
      {/* Section 2 */}
      <div className="bg-[#daecff] rounded-4xl p-4 mt-4">
        <div className="flex items-center justify-between">
          {/* Radio Buttons */}
          <div className="flex flex-col gap-2">
            {Object.keys(slides2).map((series) => (
              <div key={series} className="flex flex-col gap-2">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id={series}
                    name="sensor-series"
                    className="w-4 h-4 text-blue-600 hover:cursor-pointer"
                    checked={selectedSeries === series}
                    onChange={() => {
                      console.log("name is ", name);
                      setSelectedSeries(series);
                      setSelectedName(slides2[series].names[0]); // Set first name by default
                    }}
                  />
                  <label
                    htmlFor={series}
                    className="ms-2 text-sm hover:cursor-pointer"
                  >
                    {series}
                  </label>
                </div>
                {/* Show all names below each series */}
                <div className="mt-2 bg-[#fff] flex flex-col flex-wrap gap-2">
                  {slides2[series].names.map((name, index) => (
                    <span
                      key={index}
                      className={`text-blue-800 px-4 py-1 rounded-full hover:cursor-pointer ${
                        selectedName === name ? "bg-blue-200" : ""
                      }`}
                      onClick={() => {

                        // Find which series this name belongs to
                        const seriesKey = Object.keys(slides2).find((series) =>
                          slides2[series].names.includes(name)
                        );

                        if (seriesKey) {
                          setSelectedSeries(seriesKey); // Ensure series updates
                          setSelectedName(name);
                        }
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
            <div className="pics flex items-center mt-4">
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

export default ShowData;
