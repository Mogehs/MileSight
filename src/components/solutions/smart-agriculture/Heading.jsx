import React from "react";

function Heading() {
  return (
    <div className="my-8 py-4 px-8 flex flex-col justify-center items-center gap-4">
      <h2 className="lg:text-[2rem] md:text-[1.5rem] text-[20px] text-[#333]">
        Enjoy More Productive and Cost-Effective Farming
      </h2>
      <div className="flex md:flex-row flex-col justify-center items-center gap-6">
        <div className="flex flex-col gap-4 items-center">
          <img
            className="rounded-xl md:w-120 hover:cursor-pointer"
            src="/Solution/smart-agri/img1.webp"
            alt="not found"
          />
          <p className="text-[#333]">Smart Agriculture Solution</p>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <img
            className="rounded-xl md:w-120 hover:cursor-pointer"
            src="/Solution/smart-agri/img2.webp"
            alt="not found"
          />
          <p className="text-[#333]">Smart Irrigation Solution</p>
        </div>
      </div>
    </div>
  );
}

export default Heading;
