import React from "react";
import { GrFormNextLink } from "react-icons/gr";

const data = [
  {
    id: 1,
    title: "Passage People Counter VS350",
    descripton:
      "Detect foot traffic tendency in real-time for data-driven and efficient management",
    img: "/Solution/smart-restroom/p-img-8.png",
  },
  {
    id: 2,
    title: "AI ToF People Counting Sensor VS133",
    descripton:
      "Detect traffic of restrooms in real-time and set up a database for long-term management, running a sustainable and highly efficient restroom.",
    img: "/Solution/smart-restroom/p-img-9.png",
  },
];

function ProductCard4() {
  return (
    <div className="bg-[#5281bc] rounded-4xl p-4">
      <div className="flex items-center gap-4 border-b pb-2 border-b-[#b9b9b9]">
        <img
          className="w-20"
          src="/Solution/smart-restroom/product-img-4.png"
          alt="not found"
        />
        <h1 className="text-[#fff]">
          <span className="bg-[#1d98fb] text-white p-1">Detect</span> with AI,
          ToF, and PIR
        </h1>
      </div>
      <div>
        <div>
          {data.map((item) => (
            <div key={item.id} className="flex items-center gap-4">
              <img
                className="bg-[#ececec] p-1 my-2 rounded-full w-16"
                src={item.img}
                alt="not found"
              />
              <div className="hover:cursor-pointer">
                <h2 className="hover:underline text-[#fff] md:text-[1.3rem] text-[20px]">
                  {item.title}
                </h2>
                <h3 className="text-[#fff] text-[14px]">{item.descripton}</h3>
                <div>
                  <GrFormNextLink className="text-[#fff] text-[1.8rem] ms-auto" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductCard4;
