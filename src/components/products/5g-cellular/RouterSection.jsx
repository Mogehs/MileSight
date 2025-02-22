import React from "react";

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
];

function RouterSection() {
  return (
    <div
      id="cellular-router"
      className="relative bg-cover bg-center p-4 mx-4"
      style={{ backgroundImage: "url('/5g-cellular/router-bg-img.jpg')" }}
    >
      <div className="py-10 px-4">
        {/* Heading */}
        <div className="text-center mb-6">
          <h1 className="md:text-4xl text-[25px] font-bold">Industrial Cellular Router</h1>
          <p className="text-[#666] text-[15px] mt-2">
            Seamless Connectivity for Industrial Applications
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 max-w-6xl mx-auto  ">
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
    </div>
  );
}

export default RouterSection;
