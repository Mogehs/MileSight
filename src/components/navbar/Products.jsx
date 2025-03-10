import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMenu } from "../menueContext";
import { FaGithub } from "react-icons/fa";

// Import all series components
import ProSeries from "./network-camera/ProSeries";
import Traffic from "./traffic-management/Traffic";
import NetworkCamera from "./network-camera/NetworkCamera";
import PeopleSensing from "./smart-building/PeopleSensing";
import { MdNavigateNext } from "react-icons/md";
import TrashBin from "./smart-building/TrashBin";
import RoadTraffic from "./traffic-management/RoadTraffic";

// Map series names to components
const seriesComponents = {
  "Mini Series": NetworkCamera,
  "Pro Series": ProSeries,
  "Open Vision Series": NetworkCamera,
  Accessories: ProSeries,
};
const videoSeriesComponents = {
  NVR: NetworkCamera,
  "PoE NVR": ProSeries,
  "Enterprise NVR": NetworkCamera,
};

const trafficComponents = {
  "Traffic X Series": Traffic,
  "Road Traffic Management": RoadTraffic,
  "Parking Management": Traffic,
};
const iotSensingComponents = {
  "Smart Building": PeopleSensing,
  "Smart City": TrashBin,
};

const seriesList = [
  "Mini Series",
  "Pro Series",
  "Open Vision Series",
  "Accessories",
];

const videoSeriesList = ["NVR", "PoE NVR", "Enterprise NVR"];
const iotList = ["Smart Building", "Smart City"];
const intellList = [
  "Traffic X Series",
  "Road Traffic Management",
  "Parking Management",
];

const Products = () => {
  const { closeMenu } = useMenu();
  const [showVideoOptions, setShowVideoOptions] = useState(false);
  const [showIoT, setShowIoT] = useState(true);
  const [showIntelligent, setShowIntelligent] = useState(false);
  const [activeOption, setActiveOption] = useState("Network Camera");
  const [showSeries, setShowSeries] = useState(false);
  const [showVideoSeries, setShowVideoSeries] = useState(false);
  const [selectedSeries, setSelectedSeries] = useState(null);
  const [selectedVideoSeries, setSelectedVideoSeries] = useState(null);
  const [selectedTrafficSeries, setSelectedTrafficSeries] = useState(null);
  const [selectedIotSensing, setSelectedIotSensing] = useState(null);

  const [hoveredIndex, setHoveredIndex] = useState(0);

  // Get the selected component (series or video series)
  const SelectedComponent = selectedSeries
    ? seriesComponents[selectedSeries]
    : selectedVideoSeries
    ? videoSeriesComponents[selectedVideoSeries]
    : selectedTrafficSeries
    ? trafficComponents[selectedTrafficSeries]
    : selectedIotSensing
    ? iotSensingComponents[selectedIotSensing]
    : null;

  return (
    <div className="flex flex-col md:flex-row bg-gray-700  h-fit z-50 sm:max-w-[60rem] mx-auto mt-2 rounded-2xl">
      {/* Sidebar */}
      <div className="w-full md:w-[14rem] bg-[#00667C] rounded-xl sm:rounded-l-2xl  shadow-lg px-1 py-6">
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
              className="text-white hover:text-[#7CCA9A] text-nowrap transition-colors duration-300 relative hover:shadow-md hover:shadow-[#7CCA9A] cursor-pointer rounded-lg px-1  w-fit"
              onMouseEnter={() => {
                setShowVideoOptions(item.name === "Video Surveillance");
                setShowIoT(item.name === "IoT Sensing");
                setShowIntelligent(item.name === "Intelligent Traffic");
                setHoveredIndex(index);
              }}
              onClick={closeMenu}
            >
              <div className="flex justify-center items-center">
                <MdNavigateNext
                  className={`transition-transform duration-300 text-[2rem] text-[#7CCA9A] ${
                    hoveredIndex === index
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-2"
                  }`}
                />
                <a href={item.link} className="block py-1">
                  {item.name}
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Video Surveillance Options */}
      {showVideoOptions && (
        <div className="pt-5 flex flex-col gap-4 px-2">
          <a href="/products/video-surveillance">
            <p
              className={`cursor-pointer buttonAnim2 w-fit ${
                activeOption === "Network Camera"
                  ? "text-[#7CCA9A] font-semibold"
                  : "text-white"
              }`}
              onMouseEnter={() => {
                setActiveOption("Network Camera");
                setShowSeries(true);
                setShowVideoSeries(false);
                setSelectedVideoSeries(null);
                setSelectedTrafficSeries(null);
                setSelectedIotSensing(null);
              }}
            >
              Network Camera
            </p>
          </a>
          <a href="/products/video-surveillance">
            <p
              className={`cursor-pointer buttonAnim2 w-fit ${
                activeOption === "Network Video Recorder"
                  ? "text-[#7CCA9A] font-semibold"
                  : "text-white"
              }`}
              onMouseEnter={() => {
                setActiveOption("Network Video Recorder");
                setShowSeries(false);
                setShowVideoSeries(true);
                setSelectedSeries(null);
                setSelectedIotSensing(null);
                setSelectedTrafficSeries(null);
              }}
            >
              Network Video Recorder
            </p>
          </a>
          <a href="/products/NDAA-Compilant">
            <p
              className="cursor-pointer border border-[#7CCA9A]rounded-md p-2 text-[#7CCA9A] hover:shadow-md hover:shadow-[#7CCA9A]"
              onMouseEnter={() => {
                setActiveOption("NDAA Compliant Products");
                setShowSeries(false);
                setShowVideoSeries(false);
                setSelectedSeries(null);
                setSelectedVideoSeries(null);
                setSelectedTrafficSeries(null);
                setSelectedIotSensing(null);
              }}
            >
              NDAA Compliant Products
            </p>
          </a>
        </div>
      )}

      {/* IoT Sensing Options */}
      {showIoT && (
        <div className="pt-5 flex flex-col gap-3 px-2">
          {iotList.map((iot, index) => (
            <a
              key={index}
              href={`/solutions/${iot.toLowerCase().replace(" ", "-")}`}
            >
              <p
                className="cursor-pointer text-white hover:text-[#7CCA9A] buttonAnim2 w-fit"
                onMouseEnter={() => {
                  setShowSeries(false);
                  setShowVideoSeries(false);
                  setActiveOption(iot);
                  setSelectedIotSensing(iot);
                  setSelectedVideoSeries(null);
                  setSelectedTrafficSeries(null);
                  setSelectedSeries(null);
                }}
              >
                {iot}
              </p>
            </a>
          ))}
        </div>
      )}
      {showIntelligent && (
        <div className="pt-4 flex flex-col gap-4 px-2">
          {intellList.map((intell, index) => (
            <a key={index} href={`/solutions/intelligent-traffic-solution`}>
              <p
                className="cursor-pointer text-white hover:text-[#7CCA9A] buttonAnim2 w-fit"
                onMouseEnter={() => {
                  setShowSeries(false);
                  setShowVideoSeries(false);
                  setActiveOption(intell);
                  setSelectedTrafficSeries(intell);
                  setSelectedVideoSeries(null);
                  setSelectedSeries(null);
                  setSelectedIotSensing(null);
                }}
              >
                {intell}
              </p>
            </a>
          ))}
        </div>
      )}

      {/* Series Section */}
      <div className="w-full md:flex-1 p-2">
        {showSeries && (
          <div className="flex gap-2 cursor-pointer flex-wrap">
            {seriesList.map((series, idx) => (
              <div
                key={idx}
                className="bg-gray-200 w-fit h-fit p-2 rounded-md transition hover:shadow-md hover:shadow-[#7CCA9A] "
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
                className="bg-gray-200 w-fit h-fit p-2 rounded-md transition hover:shadow-md hover:shadow-[#7CCA9A]"
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
        {(selectedSeries ||
          selectedVideoSeries ||
          selectedTrafficSeries ||
          selectedIotSensing) && (
          <div className="text-white font-light pt-3" onClick={closeMenu}>
            <strong>
              {selectedSeries || selectedVideoSeries || selectedTrafficSeries}
            </strong>
            {SelectedComponent && <SelectedComponent />}
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
