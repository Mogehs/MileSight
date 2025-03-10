import { useState } from "react";
import MiniSeries from "../../../components/products/video-servillance/MiniSeries";
import ProSeries from "./ProSeries";
import PtzSeries from "./PtzSeries";
import Panoramic from "./Panormic";
import IntelligentTraffic from "./Intelligent Traffic";
import SolarPower from "./Solar-Power";

export default function AiVideo() {
  const array = [
    "Product",
    "What's Hot",
    "Innovation",
    "Solution",
    "Case",
    "Integration",
    "Support",
    "Contact",
  ];

  const product = [
    "Mini Series",
    "Pro Series",
    "PTZ Series",
    "Panoramic Series",
    "Intelligent Traffic",
    "Solar-powered Series",
  ];

  const [selectedProduct, setSelectedProduct] = useState("Mini Series");

  return (
    <div className="w-full">
      <div className="w-full sm:w-[90%] mx-auto ">
        {/* AI Video Surveillance */}
        <div className="mb-5 sm:mb-10">
          <h1 className="text-xl sm:text-2xl font-semibold hidden sm:inline">
            AI Video Surveillance
          </h1>
          <div className="w-full flex justify-between sm:mt-3">
            <div className="sm:flex flex-wrap gap-10 hidden">
              {array.map((item, index) => (
                <p
                  key={index}
                  className="text-nowrap text-gray-400 hover:text-[#00667C] cursor-pointer"
                >
                  {item}
                </p>
              ))}
            </div>
            <a href="/products/iot-sensing">
              <div className="flex gap-2">
                <p className="text-gray-400 hover:text-[#7CCA9A] cursor-pointer">
                  Home-
                </p>
                <p className="text-gray-400 hover:text-[#7CCA9A] cursor-pointer">
                  Security
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="flex gap-2 flex-wrap justify-start md:justify-evenly items-center mb-4 px-2">
        <h1 className="text-xl sm:text-4xl font-semibold">Product</h1>

        {/* Product Selection */}
        <div className="flex flex-wrap gap-3">
          {product.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedProduct(item)}
              className={`border px-4 py-2 transform transition-all ease-in-out delay-100 hover:bg-[#00667C] hover:text-white hover:shadow-lg  hover:shadow-[#7CCA9A] cursor-pointer rounded-3xl border-[#00667C] ${
                selectedProduct === item ? "bg-[#7CCA9A] text-black" : ""
              }`}
            >
              <span className="text-nowrap">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Dynamic Rendering Based on Selected Product */}
      <div className="w-full">
        {selectedProduct === "Mini Series" && <MiniSeries filter="Mini" />}
        {selectedProduct === "Pro Series" && <ProSeries />}
        {selectedProduct === "PTZ Series" && <PtzSeries />}
        {selectedProduct === "Panoramic Series" && <Panoramic />}
        {selectedProduct === "Intelligent Traffic" && <IntelligentTraffic />}
        {selectedProduct === "Solar-powered Series" && <SolarPower />}
      </div>
    </div>
  );
}
