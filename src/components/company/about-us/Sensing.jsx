import React from "react";
import sensimg from "/aboutimg/sensimg.avif";

const Sensing = () => {
  return (
    <div
      className="w-full h-auto  lg:h-[80vh] text-white text-sm p-2  flex  flex-col justify-evenly  bg-cover bg-center   "
      style={{ backgroundImage: `url(${sensimg})` }}
    >
      <div className="content sm:flex sm:flex-col p-3 ">
        <h1 className=" font-semibold text-3xl">Make Sensing Matter</h1>
        <p className="">
          From sensing to connecting, from data to the power that transforms the
          world, what we do matters.
        </p>
        <button className="w-fit mt-2 px-8 py-2 cursor-pointer text-white hover:-translate-y-2 bg-[#00667C] rounded-md hover:bg-[#7CCA9A] transition">
          <a href="/resources/academy/product-training">Learn More</a>
        </button>
      </div>
      <div className="flexcontent sm:flex  gap-3  ">
        <div className="sm:w-[30%] sm:flex p-3 flex-col gap-2 border-b-2 sm:border-b-0 sm:border-r-2">
          <h2 className=" font-semibold">Capturing Meaningful Data Matters</h2>
          <p>
            We provide multi-potential sensing products, focusing on the data
            that adds value, reflects patterns, and assists decision-making.
          </p>
        </div>
        <div className="sm:w-[30%] sm:flex p-3 flex-col gap-2 border-b-2 sm:border-b-0 sm:border-r-2">
          <h2 className=" font-semibold">
            Responding to Customer Demands Matters
          </h2>
          <p>
            We evolve with customer demands, creating products that are relevant
            and make a real difference to them, across different applications,
            projects, and industries.
          </p>
        </div>
        <div className="sm:w-[30%] sm:flex p-3 flex-col gap-2 border-b-2 sm:border-b-0 sm:border-r-2">
          <h2 className=" font-semibold">Growing with Partners Matters</h2>
          <p>
            We are greater together with a growing partner ecosystem, creating
            complete solutions, delivering value offerings, and accelerating
            results for customers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sensing;
