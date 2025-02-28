import { div } from "framer-motion/client";
import React from "react";

const data = [
  {
    id: 1,
    img: "/mini-dome/section12-img1.png",
    title: "AI Motorized Bullet Camera",
  },
  {
    id: 2,
    img: "/mini-dome/section12-img2.png",
    title: "AI Vandal-proof Mini Bullet Camera",
  },
  {
    id: 3,
    img: "/mini-dome/section12-img3.png",
    title: "AI Weather-proof Mini Dome Camera",
  },
];

function Section12() {
  return (
    <div className="mb-8 flex flex-col items-center bg-[#1c365c] md:bg-transparent p-4">
      <h2 className="md:text-[3rem] text-[25px] md:text-black text-white">Related Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8 mt-4">
        {data.map((item) => (
          <div
            key={item.id}
            className="hover:border-[#d3d3d3] border border-white hover:cursor-pointer rounded-2xl p-4 flex flex-col items-center bg-white"
          >
            <img className="md:w-[40%]" src={item.img} alt="not found" />
            <h2>{item.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Section12;
