import React from "react";

function TraditionalSection() {
  return (
    <div className="bg-[#7CCA9A] md:px-8 p-8  grid md:grid-cols-3 grid-cols-1 gap-4 md:gap-0 items-center mt-8">
      <div>
        <h1 className="md:text-[3rem] text-[25px] text-[#333] text-nowrap">
          NO! Turn Traditional <br /> Restrooms Down{" "}
        </h1>
        <p className="text-[#666]">
          The conventional restrooms rely on manpower to manage. The limited
          manpower resource leaves various problems, leading to bad user
          experience and management. Have you ever been troubled by those
          problems?
        </p>
      </div>
      <div className="col-span-2">
        <img
          src="/Solution/smart-restroom/traditional-img.png"
          alt="not found"
        />
      </div>
    </div>
  );
}

export default TraditionalSection;
