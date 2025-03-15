import React from "react";

function Section2() {
  return (
    <div
      className="h-[24rem] bg-no-repeat bg-cover bg-center text-white flex flex-col justify-center px-2 md:px-8 gap-6"
      style={{ backgroundImage: "url('/mini-dome/section2-bg.jpg')" }}
    >
      <h2 className="md:text-[2.5rem] text-[20px]">AI Video Analytics</h2>
      <p className="md:w-[40%]">
        Milesight AI Camera can intelligently filter objects to focus on human
        and vehicle detection in multiple events such as Region Entrance, Region
        Exiting, Loitering, Advanced Motion Detection, etc.
      </p>
    </div>
  );
}

export default Section2;
