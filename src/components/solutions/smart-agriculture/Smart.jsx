import React from "react";

function Smart() {
  return (
    <div
      id="agri-smart"
      className="md:h-[80vh] bg-cover bg-no-repeat bg-center flex flex-col justify-center items-end md:px-16 p-4 gap-4"
      style={{ backgroundImage: "url('/Solution/smart-agri/smartbg.jpg')" }}
    >
      <h2 className="text-white lg:text-[2rem] md:text-[1.5rem] text-[25px] w-full md:w-[50%] lg:w-[40%]">
        What Is Milesight Smart <br />
        Agriculture Solution?
      </h2>
      <p className="text-white w-full md:w-[50%] lg:w-[40%]">
        Milesight Smart Agriculture Solution brings innovative sensing
        technology to farming from data collection, analysis and insight to
        enhance decision-making, strategy implementation, farming operation,
        etc. It makes agriculture more productive and more consistent, and
        enables farmers to use time and resources more efficiently.
      </p>
    </div>
  );
}

export default Smart;
