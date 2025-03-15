import React from "react";

function MakeMark() {
  return (
    <div className="flex flex-col gap-6 justify-center items-center p-4">
      <h2 className="lg:text-[2.5rem] md:text-[1.5rem] text-[15px] text-[#333] flex gap-4 md:justify-center md:items-start font-bold">
        <span>Make Your Mark:</span>
        <img src="/company/impact-award/1st.png" alt="not found" />
        <span>Milesight Impact Awards!</span>
      </h2>
      <p className="text-[#666] md:w-[70%] md:text-center">
        The Milesight Impact Awards recognize impactful customer stories and
        celebrate the remarkable achievements of Milesight's partners dedicated
        to various verticals. These outstanding cases drive sensing
        intelligence, embody a cooperative spirit, and unlock significant
        potential. It's an opportunity for Milesight partners to showcase their
        expertise and commitment to making a lasting impact for a more
        connected, efficient, and sustainable world.
      </p>
      <p className="text-[#666]">
        Winners will be announced at the virtual Milesight Impact Awards
        ceremony in <sapn>October 2024.</sapn> Stay tuned!
      </p>
    </div>
  );
}

export default MakeMark;
