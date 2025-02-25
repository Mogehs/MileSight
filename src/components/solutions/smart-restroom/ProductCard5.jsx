import React from "react";
import { GrFormNextLink } from "react-icons/gr";

const data = [
  {
    id: 1,
    title: "IoT Controller UC300",
    descripton:
      "Connect devices such as HVAC system to realize smart collaboration via rich interfaces.",
    img: "/Solution/smart-restroom/p-img-10.png",
  },
  {
    id: 2,
    title: "IoT Controller UC502",
    descripton:
      "Connect wired meters to the LoRaWAN® network for collecting power and water consumption remotely, improving management efficiency and saving energy.",
    img: "/Solution/smart-restroom/p-img-11.png",
  },
];

function ProductCard5() {
  return (
    <div className="bg-[#f5f5f5] rounded-4xl p-4">
      <div className="flex items-center gap-4 border-b pb-2 border-b-[#b9b9b9]">
        <img
          className="w-20"
          src="/Solution/smart-restroom/product-img-5.png"
          alt="not found"
        />
        <h1 className="text-[#000]">
          <span className="bg-[#1d98fb] text-white p-1">Connect</span> for
          Device Linkage
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
                <h2 className="hover:underline hover:text-[#0299f4] text-[#000] md:text-[1.3rem] text-[20px]">
                  {item.title}
                </h2>
                <h3 className="text-[#000] text-[14px]">{item.descripton}</h3>
                <div>
                  <GrFormNextLink className="text-[#0299f4] text-[1.8rem] ms-auto" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductCard5;
