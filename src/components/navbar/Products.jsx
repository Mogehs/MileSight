import React from "react";
import { Link } from "react-router-dom";

const productLinks = [
  { name: "IoT Sensing", path: "/products/iot-sensing" },
  { name: "Video Surveillance", path: "/products/video-surveillance" },
  { name: "Intelligent Traffic", path: "/products/intelligent-traffic" },
  {
    name: "IoT LoRaWAN® Series",
    path: "/products/iot-sensing#lorawan",
    external: true,
  },
  { name: "5G & Cellular Products", path: "/products/5g-cellular" },
  { name: "Software & Platform", path: "/products/software-platform" },
  { name: "Co-Created Program", path: "/products/co-created" },
];

const Products = () => {
  return (
    <div className="flex flex-col md:flex-row bg-white h-fit z-50 w-full">
      <div className="w-full md:w-[18rem] bg-gray-50 shadow-lg p-6">
        <ul className="space-y-3">
          {productLinks.map((item, index) => (
            <li
              key={index}
              className="text-gray-700 hover:text-blue-500 transition-colors duration-300"
            >
              {item.external ? (
                <a href={item.path} className="block py-1">
                  {item.name}
                </a>
              ) : (
                <Link to={item.path} className="block py-1">
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Content Area */}
      <div className="w-full md:flex-1 p-6">
        <h1 className="text-xl md:text-2xl font-semibold mb-4">
          Welcome to Products
        </h1>
        <p className="text-gray-600">
          Explore our product categories by clicking on the menu items.
        </p>
      </div>
    </div>
  );
};

export default Products;
