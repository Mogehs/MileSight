import React from "react";
import { GrFormNextLink } from "react-icons/gr";

const data = [
  {
    id: 1,
    title: "Smart Button WS101",
    descripton:
      "Touch it when there is an emergency. The instant alert is going to rescue you.",
    img: "/Solution/smart-restroom/p-img-6.png",
  },
  {
    id: 2,
    title: "Mini Leak Detection Sensor WS303",
    descripton:
      "DTouch to detect water leakage, getting Instant alarming and fast help.",
    img: "/Solution/smart-restroom/p-img-7.png",
  },
];

function ProductCard3() {
  return (
    <div className="bg-[#091933] rounded-4xl p-4">
      <div className="flex items-center gap-4 border-b pb-2 border-b-[#b9b9b9]">
        <img
          className="w-20"
          src="/Solution/smart-restroom/product-img-3.png"
          alt="not found"
        />
        <h1 className="text-[#fff]">
          <span className="bg-[#1d98fb] text-white p-1">Touch</span> for Help
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

export default ProductCard3;
