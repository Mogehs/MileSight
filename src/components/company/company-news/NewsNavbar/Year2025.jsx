import React from "react";
import { IoMdTime } from "react-icons/io";

const Year2025 = ({ filteredCards = [] }) => {
  return (
    <div className="w-full bg-gray-50 py-10">
      {/* Main Container */}
      <div className="w-[90vw] lg:w-[80vw] mx-auto">
        {/* Cards Section */}
        <div className="flex flex-wrap gap-6 justify-center">
          {filteredCards.map((item) => (
            <div
              key={item.id}
              className="w-full md:w-[80vw] lg:w-[90vw] flex flex-col sm:flex-row gap-4 p-4 shadow-md rounded-md bg-white"
            >
              {/* Image Section */}
              <div className="w-full sm:w-[40%]">
                <img
                  src={item.img}
                  className="w-full hover:scale-105 transition duration-200 h-48 object-cover rounded-sm"
                  alt="News"
                />
              </div>

              {/* Content Section */}
              <div className="flex flex-col justify-between w-full sm:w-[60%]">
                <div>
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">
                    {item.description}
                  </p>
                </div>

                {/* Footer Section */}
                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center text-gray-500">
                    <IoMdTime className="text-xl" />
                    <span className="ml-1 text-sm">{item.date}</span>
                  </div>
                  <button className="hidden sm:block bg-blue-500 px-4 py-2 text-white rounded-md hover:bg-blue-600 transition">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Year2025;
