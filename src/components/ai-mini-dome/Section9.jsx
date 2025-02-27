import React from "react";

function Section9({ modelData }) {
  return (
    <div className="flex md:flex-row flex-col items-center gap-4 justify-around p-4 my-8">
      <img
        className="md:w-[40%]"
        src={`${modelData.modelImg4}`}
        alt="not found"
      />
      <div className="md:w-[50%]">
        <h2 className="md:text-[2rem] text-[25px] text-[#333]">
          Two Colors Available
        </h2>
        <p className="text-[#666] text-[15px]">
          Available in White and Black, the camera provides more choices for
          your preference.
        </p>
      </div>
    </div>
  );
}

export default Section9;
