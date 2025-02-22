import React from "react";
import FloatingIcons from "./FloatingIcons";

const data = [
  {
    id: "1",
    bgImg: "/5g-cellular/5g-bg-img.png",
    img: "/5g-cellular/5g-img-1.png",
    title1: "5G Dongle UF31",
    title2: "Plug & Play Networking",
  },
  {
    id: "2",
    bgImg: "/5g-cellular/5g-bg-img.png",
    img: "/5g-cellular/5g-img-2.png",
    title1: "5G Dongle UF31",
    title2: "Plug & Play Networking",
  },
  {
    id: "3",
    bgImg: "/5g-cellular/5g-bg-img.png",
    img: "/5g-cellular/5g-img-3.png",
    title1: "5G Dongle UF31",
    title2: "Plug & Play Networking",
  },
  {
    id: "4",
    bgImg: "/5g-cellular/5g-bg-img.png",
    img: "/5g-cellular/5g-img-4.png",
    title1: "5G Dongle UF31",
    title2: "Plug & Play Networking",
  },
  {
    id: "5",
    bgImg: "/5g-cellular/5g-bg-img.png",
    img: "/5g-cellular/5g-img-5.png",
    title1: "5G Dongle UF31",
    title2: "Plug & Play Networking",
  },
  {
    id: "6",
    bgImg: "/5g-cellular/5g-bg-img.png",
    img: "/5g-cellular/5g-img-6.png",
    title1: "5G Dongle UF31",
    title2: "Plug & Play Networking",
  },
];

function FivegSection() {
  return (
    <div id="cellular-5g" className="py-10 px-4">
      <FloatingIcons />
      {/* Heading */}
      <div className="text-center mb-6">
        <h1 className="md:text-4xl text-[25px] font-bold">5G Series</h1>
        <p className="text-[#666] text-[15px] mt-2">
          Unmatched 5G Speed, Like No One Before
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 max-w-6xl mx-auto ">
        {data.map((item) => (
          <div
            key={item.id}
            className="relative p-6 flex flex-col items-center"
            style={{
              backgroundImage: `url(${item.bgImg})`,
              backgroundSize: "auto",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            {/* Product Image */}
            <img
              src={item.img}
              alt="Product"
              className="w-32 h-32 object-contain mb-4 transition delay-150 duration-300 ease-in-out hover:-translate-y-4 hover:cursor-pointer"
            />

            {/* Product Titles */}
            <h2 className="text-xl font-semibold text-gray-900 transition delay-75 duration-300 ease-in-out hover:text-[#469bff] hover:cursor-pointer">
              {item.title1}
            </h2>
            <p className="text-gray-600 transition delay-150 duration-300 ease-in-out hover:text-[#469bff] hover:cursor-pointer">
              {item.title2}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FivegSection;
