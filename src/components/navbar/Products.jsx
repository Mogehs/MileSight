import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMenu } from "../menueContext";

// Import all series components
import MiniSeries from "../products/video-servillance//MiniSeries";
import ProSeries from "../products/video-servillance/ProSeries";

// Map series names to components
const seriesComponents = {
  "Mini Series": MiniSeries,
  "Pro Series": ProSeries,
  "Open Vision Series": MiniSeries,
  Accessories: ProSeries,
};

const seriesList = [
  "Mini Series",
  "Pro Series",
  "Open Vision Series",
  "Accessories",
];

const Products = () => {
  const { closeMenu } = useMenu();
  const [showVideoOptions, setShowVideoOptions] = useState(false);
  const [activeOption, setActiveOption] = useState("Network Camera");
  const [showSeries, setShowSeries] = useState(false);
  const [selectedSeries, setSelectedSeries] = useState(null);

  // Get the selected component
  const SelectedComponent = selectedSeries
    ? seriesComponents[selectedSeries]
    : null;

  return (
    <div className="flex flex-col md:flex-row bg-white h-fit z-50 w-full">
      {/* Sidebar */}
      <div className="w-full md:w-[13rem] bg-gray-50 shadow-lg p-6">
        <ul className="space-y-2">
          {[
            { name: "IoT Sensing" },
            { name: "Video Surveillance" },
            { name: "Intelligent Traffic" },
            { name: "IoT LoRaWAN® Series" },
            { name: "5G & Cellular Products" },
            { name: "Software & Platform" },
            { name: "Co-Created Program" },
          ].map((item, index) => (
            <li
              key={index}
              className="text-gray-700 hover:text-blue-500 transition-colors duration-300 relative"
              onMouseEnter={() =>
                setShowVideoOptions(item.name === "Video Surveillance")
              }
              onClick={closeMenu}
            >
              <Link
                to={`/products/${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                className="block py-1"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Video Surveillance Options */}
      {showVideoOptions && (
        <div className="pt-5 flex flex-col gap-4">
          <p
            className={`cursor-pointer ${
              activeOption === "Network Camera"
                ? "text-blue-500 font-semibold"
                : "text-gray-700"
            }`}
            onMouseEnter={() => {
              setActiveOption("Network Camera");
              setShowSeries(true);
            }}
          >
            Network Camera
          </p>
          <p
            className={`cursor-pointer ${
              activeOption === "Network Video Recorder"
                ? "text-blue-500 font-semibold"
                : "text-gray-700"
            }`}
            onMouseEnter={() => {
              setActiveOption("Network Video Recorder");
              setShowSeries(false);
              setSelectedSeries(null);
            }}
          >
            Network Video Recorder
          </p>
        </div>
      )}

      {/* Series Section */}
      <div className="w-full md:flex-1 p-6">
        {showSeries && (
          <div className="flex gap-2 cursor-pointer">
            {seriesList.map((series, idx) => (
              <div
                key={idx}
                className="bg-gray-200 w-fit h-fit p-2 rounded-md hover:bg-blue-300 transition"
                onMouseEnter={() => setSelectedSeries(series)}
                onMouseLeave={() => setSelectedSeries(null)}
              >
                {series}
              </div>
            ))}
          </div>
        )}

        {/* Display Selected Series Component */}
        {selectedSeries && (
          <div className="mt-4" onClick={closeMenu}>
            <strong>{selectedSeries}</strong>
            {SelectedComponent && <SelectedComponent />}
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
