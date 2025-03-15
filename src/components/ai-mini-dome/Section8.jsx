import React from "react";

function Section8({ modelData }) {
  return (
    <div
      className="h-[80vh] bg-no-repeat bg-cover bg-center flex flex-col justify-center md:px-8 px-2 gap-6 mb-8"
      style={{
        backgroundImage: `url(${modelData.modelImg3 || modelData.modelImg})`,
      }}
    >
      <h2 className="md:text-[2.5rem] text-[20px] text-[#333]">
        Integrated Junction Box
      </h2>
      <p className="md:w-[40%] w-[60%]  text-[#666]">
        The creative clamshell design minimizes the installation troubles and
        enlarges the space to make cable connection a piece of cake.
      </p>
    </div>
  );
}

export default Section8;
