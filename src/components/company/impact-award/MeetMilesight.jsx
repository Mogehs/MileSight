import React from "react";

function MeetMilesight() {
  return (
    <div className="flex flex-col gap-6 justify-center items-center p-4 md:px-8">
      <h2 className="lg:text-[2.5rem] md:text-[1.5rem] text-[15px] text-[#333] flex gap-4 md:justify-center md:items-start font-bold">
        Meet the Milesight 2024 Impact Awards Winners!
      </h2>
      <p className="text-[#666] md:text-center">
        Join us in congratulating our 2024 winning partners who have
        demonstrated innovation, commitment to customers, and consistent
        delivery of reliable, and sustainable solutions around the globe. Be
        part of our celebration as we hear from these visionaries, honoring the
        inspiring power of our partnerships.
      </p>

      <div className="flex md:flex-row flex-col justify-center items-center gap-6">
        <div className="flex flex-col gap-4 items-center">
          <img
            className="rounded-xl md:w-120 hover:cursor-pointer"
            src="/company/impact-award/img1.jpg"
            alt="not found"
          />
          <p className="text-[#333]">IoT Case Category</p>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <img
            className="rounded-xl md:w-120 hover:cursor-pointer"
            src="/company/impact-award/img1.jpg"
            alt="not found"
          />
          <p className="text-[#333]">Video Security Case Category</p>
        </div>
      </div>
    </div>
  );
}

export default MeetMilesight;
