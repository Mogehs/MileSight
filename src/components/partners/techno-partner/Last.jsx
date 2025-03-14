import React from "react";

function Last() {
  return (
    <div
      className="md:h-[60vh] bg-no-repeat bg-cover bg-center flex justify-center items-center"
      style={{ backgroundImage: "url('/partners/techno-partner/last-bg.png')" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8">
        <div className="rounded-xl bg-white flex flex-col justify-center items-center gap-4 p-4">
          <h2 className="text-[20px] font-bold">Become a Technology Partner</h2>
          <p className="text-[#666]">
            Get started with Milesight and join our growing network of
            technology partners.
          </p>
          <button className="text-white bg-[#469bff] rounded-md py-1 px-2 hover:cursor-pointer">
            Apply Now
          </button>
        </div>
        <div className="rounded-xl bg-[#d8e6fa] flex flex-col justify-center items-center gap-4 p-4">
          <h2 className="text-[20px] font-bold">Milesight Partner Ecosystem</h2>
          <p className="text-[#666]">
            Grow your business and develop joint offerings with us.
          </p>
          <button className="text-white bg-[#469bff] rounded-md py-1 px-2 hover:cursor-pointer">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Last;
