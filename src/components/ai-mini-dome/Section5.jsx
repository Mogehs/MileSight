import React from "react";

function Section5() {
  return (
    <div className="my-8 p-4 flex flex-col md:gap-8 gap-4 md:items-center">
      <h1 className="md:text-[2rem] text-[20px] text-[#333]">P-Iris Control</h1>
      <p className="text-[#666] md:w-[65%]">
        Adopting P-Iris control technology, the camera is able to optimize the
        iris opening under all lighting conditions, offering images with better
        contrast, clarity, resolution and depth of field.
      </p>
      <img
        className="md:w-[70%]"
        src="/mini-dome/section5-img.png"
        alt="not found"
      />
    </div>
  );
}

export default Section5;
