import React from "react";
import Button from "./Button";

function VideoSection() {
  return (
    <div className="flex flex-col justify-center gap-6 p-4 md:px-20">
      <div className="flex flex-col gap-2">
        <h2 className="text-[#0299f4] text-[20px]">Program Overview</h2>
        <p className="text-sm text-[#666]">
          Milesight Project Registration Program is to be used by our customers
          with active agreement to register opportunities or projects which may
          qualify for additional support.
          <br />
          To register the project, please download and fill out the form below
          in its entirety and submit via email to sales@milesight.com or to your
          account representative. Milesight will check the accuracy of the
          information and will confirm that the project is not already
          registered.
          <br />
          You will receive an email confirmation within 48 hours that the
          project has been registered under your name (or that it was already
          registered) along with the special terms being offered for this
          specific project.
          <br />
          Approved registrations are valid for 60 days; should you need to
          extend it, please contact us and refer to the project name.
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="text-[#0299f4] text-[20px]">
          Get Project Support in Three Easy Steps
        </h2>
        <ul className="text-sm list-decimal marker:text-[#0299f4] pl-5 text-[#666]">
          <li>Find an opportunity to meet a certain amount.</li>
          <li>Complete and submit a Project Registration Form.</li>
          <li>
            Milesight will verify that all information is complete and will
            confirm that you have met the program criteria.
          </li>
        </ul>
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="text-[#0299f4] text-[20px]">Program Requirements</h2>
        <ul className="text-sm list-disc marker:text-[#0299f4] pl-5 text-[#666]">
          <li>
            Only ONE Dealer can be registered for a project at any one time.
          </li>
          <li>
            Milesight products sales must meet Milesight`s criteria. If the
            registered project order falls below the minimum requirements, the
            support may not be valid.
          </li>
          <li>
            Registrations need to be received at least 40 days from submission
            of P.O.
          </li>
          <li>Each project requires separate registrations.</li>
        </ul>

        <Button text="Download the Project Registration Form" />
      </div>
    </div>
  );
}

export default VideoSection;
