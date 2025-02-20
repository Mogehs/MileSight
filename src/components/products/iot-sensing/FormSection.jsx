import React from "react";

function FormSection() {
  return (
    <div className="p-4">
      <div className="bg-[#f5f5f5] border border-[#d0d0d0] rounded p-4 md:px-[10rem] md:py-[2.5rem]">
        <form action="#">
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10">
            <div className="flex flex-col gap-2">
              <p className="text-[#333]">*Your Email</p>
              <input className="bg-white max-w-70" id="email" type="text" />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[#333]">*Compant</p>
              <input className="bg-white max-w-70" id="email" type="text" />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[#333]">
                *What Product are You Interested in?
              </p>
              <input className="bg-white max-w-70" id="email" type="text" />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[#333]">*Country</p>
              <input className="bg-white max-w-70" id="email" type="text" />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[#333]">*Your Website</p>
              <input className="bg-white max-w-70" id="email" type="text" />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[#333]">*Message</p>
              <input className="bg-white max-w-70" id="email" type="text" />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[#333]">*Your Phone</p>
              <input className="bg-white max-w-70" id="email" type="text" />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[#333]">*Business Type</p>
              <input className="bg-white max-w-70" id="email" type="text" />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[#333]">*Verification Code</p>
              <input className="bg-white max-w-70" id="email" type="text" />
            </div>
          </div>
          <div className="flex justify-center mt-12">
            <button className="bg-[#0299f4] text-white py-1 px-6 rounded cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-1">
              Let's Talk
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormSection;
