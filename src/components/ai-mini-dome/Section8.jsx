import React from "react";

function Section8({ modelData }) {
  return (
    <div className="h-[22rem] bg-no-repeat bg-cover bg-center flex flex-col justify-center md:px-8 px-2 gap-6 sm:gap-0 mb-8 md:flex-row items-center relative mt-">
      <div className="absolute">
        <h2 className="md:text-[2.5rem] pl-2 text-[20px] text-[#333]">
          Integrated Junction Box
        </h2>
        <p className="md:w-[40%] w-full pl-2  text-[#666]">
          The creative clamshell design minimizes the installation troubles and
          enlarges the space to make cable connection a piece of cake.
        </p>
      </div>
      <img
        src="/integrated-junction-box.jpg"
        alt=""
        className="w-full object-cover h-screen sm:h-[20rem] object-center"
      />
    </div>
  );
}

export default Section8;
