import React from "react";

function SpecialBenefit() {
  return (
    <div className="p-4 my-4">
      <h2 className="md:text-center lg:text-[2rem] md:text-[1rem] text-[20px] font-bold">
        Special Benefits for Registration & Implementation*
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 my-4">
        <div className="bg-[#f5f6f8] p-4 flex flex-col gap-4 shadow-lg">
          <h2 className="md:text-[1.5rem] text-[20px] text-[#02a5f5]">
            Special Benefits for Registration
          </h2>
          <p className="text-[#666]">
            For Official Partners*
            <br /> Earn channel points + special bonus per project
          </p>
          <p className="text-[#666]">
            For System Integrators/Solution Providers
            <br />
            Get discount on sample products for the project
          </p>
        </div>

        <div className="bg-[#fff] p-4 flex flex-col gap-4 shadow-lg">
          <h2 className="md:text-[1.5rem] text-[20px] text-[#02a5f5]">
            Special Benefits for Implementation
          </h2>
          <p className="text-[#666]">
            For Official Partners*:
            <br /> Earn channel points + special bonus per project, and get
            rebate based on project amount.
          </p>
          <p className="text-[#666]">
            For System Integrators/Solution Providers
            <br />
            Get rebate based on project amount.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SpecialBenefit;
