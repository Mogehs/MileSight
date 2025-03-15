import React from "react";

function Section7({ modelData }) {
  return (
    <div className="my-8 p-4 flex flex-col md:gap-8 gap-4 md:items-center h-[27rem]">
      <h1 className="md:text-[3rem] text-[20px] text-[#333]">
        Versatile Interfaces (Optional)
      </h1>
      <p className="text-[#666] md:w-[65%]">
        Several interfaces such as PoE, DC, Audio I/O and Alarm I/O are
        available in the Multi-interface Version, offering more choices for easy
        management and various needs.
      </p>
      <div className="flex flex-wrap gap-4 md:gap-8 justify-center">
        <img
          className="md:w-[20%]"
          src={`${modelData.modelImg}`}
          alt="not found"
        />
        <img
          className="md:w-[20%]"
          src={`${modelData.modelImg2}`}
          alt="not found"
        />
        <img
          className="md:w-[20%]"
          src={`${modelData.modelImg3}`}
          alt="not found"
        />
      </div>
    </div>
  );
}

export default Section7;
