import React from "react";

function Section1() {
  return (
    <div className="my-8 p-4 flex flex-col gap-8 items-center">
      <h1 className="md:text-[2rem] text-[20px]">
        Compact Size, Stylish Design and Easy Installation
      </h1>
      <img
        className="md:w-[50%] border-4 border-[#666] rounded-xl"
        src="/mini-dome/feature-img.jpg"
        alt="not found"
      />
    </div>
  );
}

export default Section1;
