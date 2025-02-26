import React from "react";
import { GrFormNextLink } from "react-icons/gr";

const data = [
  {
    id: 1,
    title: "Capacitive Level Sensor EM300-CL",
    descripton:
      "Tell the remaining level of hand wash to ensure on-time refills",
    img: "/Solution/smart-restroom/p-img-1.png",
  },
  {
    id: 2,
    title: "Bathroom Occupancy Sensor VS330",
    descripton:
      "Tell the remaining level of hand wash to ensure on-time refills",
    img: "/Solution/smart-restroom/p-img-2.png",
  },
  {
    id: 3,
    title: "Smart Fill Level Monitoring Sensor WS201",
    descripton:
      "Tell the remaining level of hand wash to ensure on-time refills",
    img: "/Solution/smart-restroom/p-img-3.png",
  },
  {
    id: 4,
    title: "Magnetic Contact Switch WS301",
    descripton:
      "Tell the remaining level of hand wash to ensure on-time refills",
    img: "/Solution/smart-restroom/p-img-4.png",
  },
];

function ProductCard1() {
  return (
    <div className="bg-[#f5f5f5] rounded-4xl p-4">
      <div className="flex items-center gap-4 border-b pb-2 border-b-[#b9b9b9]">
        <img
          className="w-20"
          src="/Solution/smart-restroom/product-img-1.png"
          alt="not found"
        />
        <h1 className="text-[#02b0f4]">
          <span className="bg-[#1d98fb] text-white p-1">Tell</span> Status
          Accurately
        </h1>
      </div>
      <div>
        <div>
          {data.map((item) => (
            <div key={item.id} className="flex items-center gap-4">
              <img
                className="bg-[#ebebeb] p-1 my-2 rounded-full w-16"
                src={item.img}
                alt="not found"
              />
              <div className="hover:cursor-pointer">
                <h2 className="hover:text-[#02b0f4] md:text-[1.5rem]">
                  {item.title}
                </h2>
                <h3 className="text-[#02b0f4] text-[15px]">
                  {item.descripton}
                </h3>
                <div>
                  <GrFormNextLink className="text-[#02b0f4] text-[1.8rem] ms-auto" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductCard1;
