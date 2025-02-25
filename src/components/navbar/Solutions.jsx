import React from "react";
import { Link } from "react-router-dom";

const solutionsData = [
  ["Video Surveillance", "Smart Restroom", "Smart Space", "Smart Agriculture"],
  [
    "Intelligent Traffic Solution",
    "Indoor Air Quality",
    "People Counting",
    "Space Occupancy",
  ],
  ["Smart Building", "Energy Efficiency", "Smart City", "Waste Management"],
];

const Solutions = () => {
  return (
    <div className="flex justify-center items-center h-fit bg-gray-50 p-6 absolute w-full z-50">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-16">
        {solutionsData.map((column, colIndex) => (
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

export default Solutions;
