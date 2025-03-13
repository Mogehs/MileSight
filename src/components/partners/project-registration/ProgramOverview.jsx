import React from "react";

function ProgramOverview() {
  return (
    <div className="flex flex-col justify-center md:items-center gap-4 p-4">
      <h2 className="text-[#333] lg:text-[2rem] md:text-[1.5rem] text-[20px] md:text-center">
        Program Overview
      </h2>
      <p className="text-[#666] md:text-center">
        Milesight Project Registration Program is designed for our customers
        with active agreements to register opportunities or projects that may be
        eligible for additional support.
      </p>
      <p className="text-[#666] md:text-center">
        By registering the project, Milesight can assist in pre-evaluation, and
        provide support for project follow-up and implementation, thereby
        increasing the chances of winning the project and exploring more
        cooperation possibilities. Special benefits will also be given
        accordingly.
      </p>
      <p className="text-[#666] md:text-center">
        To register the project, please fill out the online form below and
        submit. Our team will verify the information and reach out. Approved
        registrations are valid for 90 days; should you need to extend it,
        please contact us with the project name.
      </p>
    </div>
  );
}

export default ProgramOverview;
