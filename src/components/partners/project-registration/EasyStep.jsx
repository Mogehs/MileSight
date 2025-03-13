import React from "react";

function EasyStep() {
  return (
    <div className="p-4 my-8">
      <h2 className="lg:text-[2rem] md:text-[1.5rem] text-[25px] font-bold md:text-center mb-4">
        3 Easy Steps to Get Project Support
      </h2>
      <div className="md:h-[80vh] h-auto bg-no-repeat md:bg-[url('/partners/project-registration/easy-step.png')] mt-8 relative w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 sm:relative md:absolute top-2 lg:top-10 left-10">
          <div className="md:col-span-2 flex flex-col gap-4">
            <div className="bg-[#e5f5fe] p-4">
              <h2 className="font-bold text-[1rem]">Submit</h2>
              <p>
                Find an opportunity meeting a certain amount, Complete and
                submit Project Registration Form.
                <br />
                (Estimated complete time is within 5mins)
              </p>
            </div>

            <div className="bg-[#e5f5fe] p-4">
              <h2 className="font-bold text-[1rem]">Verify</h2>
              <p>
                Milesight will verify the information to assess whether your
                project meets the program criteria and determine
                <br />
                its level. (Our team will reach out to you within 48 working
                hours.)
              </p>
            </div>
          </div>

          <div className="bg-[#e5f5fe] p-4 md:col-span-1 w-full">
            <h2 className="font-bold text-[1rem]">Get Immediate Support</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EasyStep;
