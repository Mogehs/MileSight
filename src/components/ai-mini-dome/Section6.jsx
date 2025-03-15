import React from "react";

function Section6({ modelData }) {
  return (
    <div className="h-[24rem] bg-no-repeat bg-cover bg-center flex flex-col justify-start md:pt-8 pt-2 md:items-center md:gap-6 gap-2 mb-8 md:px-0 px-4 text-blac">
      <h2 className="md:text-[2.5rem] text-[20px] md:block hidden">
        IP67 & IK10
      </h2>
      <p className="md:w-[65%] md:text-center md:block hidden">
        Equipped with industry-leading IP67-rated weather-proofing and
        IK10-rated vandal-proofing, the camera is well protected against adverse
        impacts to ensure the robust performance.
      </p>
      <img src={modelData.modelImg} alt="" className="w-80" />
    </div>
  );
}

export default Section6;
