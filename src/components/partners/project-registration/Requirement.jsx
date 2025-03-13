import React from "react";

function Requirement() {
  return (
    <div className="bg-[#f5f6f8] p-4 flex flex-col gap-4">
      <h2 className="text-[#333] lg:text-[2rem] md:text-[1rem] text-[25px] md:text-center">
        Program Requirements
      </h2>
      <p className="text-[#666] md:text-center">
        There're minimum requirements for Milesight sales volume in a single
        project: Product quantity≥200 pieces OR Sales volume≥30, 000 USD.*{" "}
        <br /> *If the registered project order falls below the minimum
        requirements, the support may not be valid.
      </p>
      <p className="text-[#666] md:text-center">
        Each project requires separate registrations.
      </p>
    </div>
  );
}

export default Requirement;
