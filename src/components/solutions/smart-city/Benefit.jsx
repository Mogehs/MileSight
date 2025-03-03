import React, { useState } from "react";

const items = [
  {
    name: "More Effective, Data-Driven Decision-Making",
    description:
      "In smart cities, Milesight sensors can help analyze vast data streams and enable quick identification of patterns and trends. This leads to meaningful, actionable insights for urban planning, resource allocation, and overall city management, ensuring a more efficient and responsive urban environment.",
    image: "/home/people-sensing-series.jpg",
  },
  {
    name: "Efficient Public Utilities and Infrastructure",
    image: "/SmartCity/slide2.png",
  },
  {
    name: "Enhanced Citizen Engagement and Experience",
    image: "/SmartCity/slide3.png",
  },
];

const Benefit = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="my-20 hidden md:block" id="smartCity-benefit">
      <h1 className="mt-10 text-center font-bold text-3xl text-[#333333]">
        What Benefits Will You Get?
      </h1>
      <div className="flex mt-10 w-[85%] mx-auto gap-1 cursor-pointer">
        {items.map((item, index) => (
          <div
            key={index}
            className={`h-60 mx-auto relative overflow-hidden transition-all duration-500 ${
              index === 0 && hoveredIndex === null ? "w-[150%]" : "w-[90%]"
            } ${hoveredIndex === index ? "w-[150%]" : "w-[90%]"} ${
              index === 0 ? "rounded-l-lg" : ""
            } ${index === items.length - 1 ? "rounded-r-lg" : ""}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              src={item.image}
              alt={item.name}
              className="object-cover h-full w-full bg-left-top"
            />
            <div className="absolute bottom-0 w-full bg-black/70 p-2 text-white">
              <h1 className="font-medium text-lg capitalize">{item.name}</h1>
              {item.description && (
                <p className="text-[10px] mt-1">{item.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefit;
