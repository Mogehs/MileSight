import React from "react";
import { Link } from "react-router-dom";

const innovationData = [
  ["Milesight D2D", "LoRaWAN®", "5G"],
  ["AIoT", "AI VCA", "Image Processing"],
  ["Heat Map", "Structure Design"],
];

const Innovation = () => {
  return (
    <div className="flex justify-center items-center h-fit bg-gray-50 p-6 absolute w-full z-50">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-16">
        {innovationData.map((column, colIndex) => (
          <div key={colIndex}>
            <ul className="space-y-4">
              {column.map((item, index) => (
                <li key={index}>
                  <Link
                    to=""
                    className="text-gray-700 text-[15px] sm:text-[16px] hover:text-[#0299f4] transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Innovation;
