import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div className="flex flex-col md:flex-row  bg-white">
      {/* Left Sidebar */}
      <div className="w-full md:w-1/4 bg-gray-100 shadow-lg p-6">
        <ul className="space-y-4">
          <li className="text-gray-700 hover:text-blue-500 cursor-pointer text-[18px] font-base">
            <Link to="/products/iot-sensing"> Iot Sensing</Link>
          </li>
          <li className="text-gray-700 hover:text-blue-500 cursor-pointer text-[18px] font-base">
            Video Surveillance
          </li>
          <li className="text-gray-700 hover:text-blue-500 cursor-pointer text-[18px] font-base">
            Intelliget Traffic
          </li>
          <li className="text-gray-700 hover:text-blue-500 cursor-pointer text-[18px] font-base">
            Iot LoRaWAN® Series
          </li>
          <li className="text-gray-700 hover:text-blue-500 cursor-pointer text-[18px] font-base">
            5G & Cellular Products
          </li>
          <li className="text-gray-700 hover:text-blue-500 cursor-pointer text-[18px] font-base">
            Software & Platform
          </li>
          <li className="text-gray-700 hover:text-blue-500 cursor-pointer text-[18px] font-base">
            Co-Created Program
          </li>
        </ul>
      </div>

      {/* Right Content Area */}
      <div className="w-full md:w-3/4 p-6">
        <h1 className="text-2xl font-bold mb-4">Content Area</h1>
        <p className="text-gray-600">
          This is the content area. When you click on a heading, you can display
          related content here.
        </p>
      </div>
    </div>
  );
};

export default Products;
