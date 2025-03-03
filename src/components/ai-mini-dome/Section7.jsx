import React from "react";

function Section7({ modelData }) {
  return (
    <div className="my-8 p-4 flex flex-col md:gap-8 gap-4 md:items-center">
      <h1 className="md:text-[3rem] text-[20px] text-[#333]">
        Versatile Interfaces (Optional)
      </h1>
      <p className="text-[#666] md:w-[65%]">
        Several interfaces such as PoE, DC, Audio I/O and Alarm I/O are
        available in the Multi-interface Version, offering more choices for easy
        management and various needs.
      </p>
      <img
        className="md:w-[70%]"
        src={`${modelData.modelImg2}`}
        alt="not found"
      />
    </div>
  );
}

export default Section7;
