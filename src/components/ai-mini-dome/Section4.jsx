import React from "react";

function Section4() {
  return (
    <div
      className="h-[80vh] bg-no-repeat bg-cover bg-center flex flex-col justify-center px-8 gap-6 mb-8"
      style={{ backgroundImage: "url('/mini-dome/section4-bg-img.jpg')" }}
    >
      <h2 className="md:text-[2.5rem] text-[20px] text-[#333] md:block hidden">
        Motorized Zoom Lens
      </h2>
      <p className="md:w-[40%] text-[#666] md:block hidden">
        Equipped with motorized zoom & focus lens, the camera allows remote
        control of focal length, iris and focus through a lens controller, which
        is perfect for long distance surveillance.
      </p>
    </div>
  );
}

export default Section4;
