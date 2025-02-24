import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div className="flex flex-col md:flex-row bg-white min-h-screen md:min-h-0">
      {/* Left Sidebar */}
      <div className="w-full md:w-[20rem] bg-gray-100 shadow-lg p-6">
        <ul className="space-y-4">
          <li className="text-gray-700 hover:text-blue-500 cursor-pointer text-[18px] font-base text-nowrap" >
            <Link to="/products/iot-sensing"> Iot Sensing</Link>
          </li>
          <li className="text-gray-700 hover:text-blue-500 cursor-pointer text-[18px] font-base text-nowrap">
            <Link to="/products/video-surveillance">Video Surveillance</Link>
          </li>
          <li className="text-gray-700 hover:text-blue-500 cursor-pointer text-[18px] font-base text-nowrap">
            <Link to="/products/intelligent-traffic">Intelliget Traffic</Link>
          </li>
          <li className="text-gray-700 hover:text-blue-500 cursor-pointer text-[18px] font-base text-nowrap">
            <a href="/products/iot-sensing#lorawan">Iot LoRaWAN® Series</a>
          </li>
          <li className="text-gray-700 hover:text-blue-500 cursor-pointer text-[18px] font-base text-nowrap">
            <Link to="/products/5g-cellular">5G & Cellular Products</Link>
          </li>
          <li className="text-gray-700 hover:text-blue-500 cursor-pointer text-[18px] font-base text-nowrap">
            <Link to="/products/software-platform">Software & Platform</Link>
          </li>
          <li className="text-gray-700 hover:text-blue-500 cursor-pointer text-[18px] font-base text-nowrap">
            <Link to="/products/co-created">Co-Created Program</Link>
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


