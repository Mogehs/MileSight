import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMenu } from "../menueContext";

// Import all series components
import MiniSeries from "../products/video-servillance/MiniSeries";
import ProSeries from "../products/video-servillance/ProSeries";

// Map series names to components
const seriesComponents = {
  "Mini Series": MiniSeries,
  "Pro Series": ProSeries,
  "Open Vision Series": MiniSeries,
  Accessories: ProSeries,
};
const videoSeriesComponents = {
  NVR: MiniSeries,
  "PoE NVR": ProSeries,
  "Enterprise NVR": MiniSeries,
};

const seriesList = [
  "Mini Series",
  "Pro Series",
  "Open Vision Series",
  "Accessories",
];

const videoSeriesList = ["NVR", "PoE NVR", "Enterprise NVR"];
const iotList = ["Smart Building", "Smart City"];

const Products = () => {
  const { closeMenu } = useMenu();
  const [showVideoOptions, setShowVideoOptions] = useState(false);
  const [showIoT, setShowIoT] = useState(true);
  const [activeOption, setActiveOption] = useState("Network Camera");
  const [showSeries, setShowSeries] = useState(false);
  const [showVideoSeries, setShowVideoSeries] = useState(false);
  const [selectedSeries, setSelectedSeries] = useState(null);
  const [selectedVideoSeries, setSelectedVideoSeries] = useState(null);

  // Get the selected component (series or video series)
  const SelectedComponent = selectedSeries
    ? seriesComponents[selectedSeries]
    : selectedVideoSeries
    ? videoSeriesComponents[selectedVideoSeries]
    : null;

  return (
    <div className="flex flex-col md:flex-row bg-white h-fit z-50 w-full">
      {/* Sidebar */}
      <div className="w-full md:w-[13rem] bg-gray-50 shadow-lg p-6">
        <ul className="space-y-2">
          {[
            { name: "IoT Sensing", link: "/products/iot-sensing" },
            {
              name: "Video Surveillance",
              link: "/products/video-surveillance",
            },
            {
              name: "Intelligent Traffic",
              link: "/products/intelligent-traffic",
            },
            { name: "IoT LoRaWAN® Series", link: "/products/5g-cellular" },
            { name: "5G & Cellular Products", link: "/products/5g-cellular" },
            {
              name: "Software & Platform",
              link: "/products/software-platform",
            },
            { name: "Co-Created Program", link: "/products/co-created" },
          ].map((item, index) => (
            <li
              key={index}
              className="text-gray-700 hover:text-[#7CCA9A] text-nowrap transition-colors duration-300 relative"
              onMouseEnter={() => {
                setShowVideoOptions(item.name === "Video Surveillance");
                setShowIoT(item.name === "IoT Sensing");
              }}
              onClick={closeMenu}
            >
              <a href={item.link} className="block py-1">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Video Surveillance Options */}
      {showVideoOptions && (
        <div className="pt-5 flex flex-col gap-4 px-2">
          <a href="/products/video-surveillance">
            <p
              className={`cursor-pointer ${
                activeOption === "Network Camera"
                  ? "text-[#7CCA9A] font-semibold"
                  : "text-gray-700"
              }`}
              onMouseEnter={() => {
                setActiveOption("Network Camera");
                setShowSeries(true);
                setShowVideoSeries(false);
                setSelectedVideoSeries(null);
              }}
            >
              Network Camera
            </p>
          </a>
          <a href="/products/video-surveillance">
            <p
              className={`cursor-pointer ${
                activeOption === "Network Video Recorder"
                  ? "text-[#7CCA9A] font-semibold"
                  : "text-gray-700"
              }`}
              onMouseEnter={() => {
                setActiveOption("Network Video Recorder");
                setShowSeries(false);
                setShowVideoSeries(true);
                setSelectedSeries(null);
              }}
            >
              Network Video Recorder
            </p>
          </a>
          <a href="/products/NDAA-Compilant">
            <p
              className="cursor-pointer border border-[#7CCA9A]rounded-md p-2 text-[#7CCA9A]"
              onMouseEnter={() => {
                setActiveOption("NDAA Compliant Products");
                setShowSeries(false);
                setShowVideoSeries(false);
                setSelectedSeries(null);
                setSelectedVideoSeries(null);
              }}
            >
              NDAA Compliant Products
            </p>
          </a>
        </div>
      )}

      {/* IoT Sensing Options */}
      {showIoT && (
        <div className="pt-5 flex flex-col gap-4 px-2">
          {iotList.map((iot, index) => (
            <a
              key={index}
              href={`/solutions/${iot.toLowerCase().replace(" ", "-")}`}
            >
              <p
                className="cursor-pointer text-gray-700 hover:text-[#7CCA9A]"
                onMouseEnter={() => {
                  setActiveOption(iot);
                  setSelectedVideoSeries(null);
                  setSelectedSeries(null);
                }}
              >
                {iot}
              </p>
            </a>
          ))}
        </div>
      )}

      {/* Series Section */}
      <div className="w-full md:flex-1 p-6">
        {showSeries && (
          <div className="flex gap-2 cursor-pointer">
            {seriesList.map((series, idx) => (
              <div
                key={idx}
                className="bg-gray-200 w-fit h-fit p-2 rounded-md hover:text-[#7CCA9A] transition"
                onMouseEnter={() => {
                  setSelectedSeries(series);
                  setSelectedVideoSeries(null);
                }}
              >
                {series}
              </div>
            ))}
          </div>
        )}

        {/* Video Series Section */}
        {showVideoSeries && (
          <div className="flex gap-2 cursor-pointer">
            {videoSeriesList.map((series, idx) => (
              <div
                key={idx}
                className="bg-gray-200 w-fit h-fit p-2 rounded-md hover:text-[#7CCA9A] transition"
                onMouseEnter={() => {
                  setSelectedVideoSeries(series);
                  setSelectedSeries(null);
                }}
              >
                {series}
              </div>
            ))}
          </div>
        )}

        {/* Display Selected Series Component */}
        {(selectedSeries || selectedVideoSeries) && (
          <div className="mt-4" onClick={closeMenu}>
            <strong>{selectedSeries || selectedVideoSeries}</strong>
            {SelectedComponent && <SelectedComponent />}
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
