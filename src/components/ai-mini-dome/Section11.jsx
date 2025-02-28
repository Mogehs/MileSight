import React from "react";

function Section11() {
  return (
    <div className="my-8 p-4 flex flex-col gap-8 items-center">
      <h1 className="md:text-[2rem] text-[20px]">Success Story</h1>
      <div className="w-[100%] relative flex justify-center">
        <img
          className="md:w-[50%] rounded-xl"
          src="/mini-dome/section11-img.jpg"
          alt="not found"
        />
        <p className="absolute bottom-2 sm:bottom-4 text-[6px] sm:text-[0.62rem] md:bottom-2 md:text-[0.56rem] lg:text-[0.8rem] lg:bottom-4 xl:text-[1.01rem] text-white">
          Protecting Employees and Residents Security under the Eye of Milesight
          Cameras
        </p>
      </div>
    </div>
  );
}

export default Section11;
