import React, { useState } from "react";

const items = [
  {
    name: "people sensing",
    image: "/home/people-sensing-series.jpg",
  },
  {
    name: "smart security",
    image: "/home/smart-security.png",
  },
  {
    name: "intelligent traffic",
    image: "/home/intelligent-traffic.jpg",
  },
  {
    name: "energy efficient and building",
    image: "/home/energy-efficency-and-building.jpg",
  },
];

const MakeMatter = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="my-20 hidden md:block">
      <h1 className="mt-10 text-center font-bold text-4xl text-[#333333]">
        Make Sensing Matter
      </h1>
      <p className="text-[#333333] text-center w-[95%] md:w-[70%] lg:w-[45%] mx-auto mt-5">
        Leveraging the incredible insights, we help people optimize their
        business and accelerate IoT strategies to energetically drive the world.
      </p>
      <div className="flex mt-10 w-[85%] mx-auto gap-1 cursor-pointer ">
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
            <h1 className="text-white bg-black/70 font-semibold text-xl mt-5 absolute bottom-0 w-full capitalize p-2">
              {item.name}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MakeMatter;
