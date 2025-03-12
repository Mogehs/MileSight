import { div } from "framer-motion/client";
import React from "react";

const data = [
  {
    id: 1,
    img: "/resources/online-demo/cloudbg2.png",
    title: "Indoor Air Quality",
  },
  {
    id: 2,
    img: "/resources/online-demo/cloudbg3.png",
    title: "Waste Management",
  },
  {
    id: 3,
    img: "/resources/online-demo/cloudbg4.png",
    title: "Smart City",
  },
  {
    id: 4,
    img: "/resources/online-demo/cloudbg5.png",
    title: "Smart Agriculture",
  },
  {
    id: 5,
    img: "/resources/online-demo/cloudbg6.png",
    title: "Smart Building",
  },
  {
    id: 6,
    img: "/resources/online-demo/cloudbg7.png",
    title: "Smart Space & People Counting",
  },
];

function CloudSection() {
  return (
    <div className="p-4">
      <div className="bg-[#f5f5f5] p-8 flex flex-col justify-center items-center">
        {/* Header Section */}
        <div className="my-8 gap-4 flex flex-col justify-center md:items-center">
          <h2 className="lg:text-[2.5rem] md:text-[2rem] text-[20px] text-[#333] font-bold">
            Enhance Your On-Cloud Decision Making
          </h2>
          <p className="text-[#666] text-center">
            Milesight IoT Cloud, an application-enabled platform, integrates
            unified device management and data-driven analysis. It powers up{" "}
            <br />
            your applications in the fields of Smart City, Smart Agriculture,
            Smart Buidlings, and beyond to provide users with maximum <br />
            flexibility with unparalleled levels of vertical integration with
            Milesight LoRaWAN® gateways, sensors and controllers.
          </p>
        </div>
        {/* Img Section */}
        <div className="flex md:flex-row flex-col gap-5 items-center">
          <img src="/resources/online-demo/cloudimg.png" alt="not found" />
          <div className="flex flex-col gap-4">
            <p className="text-sm text-[#666]">Milesight IoT Cloud</p>
            <button className="bg-[#f5f5f5] text-[#666] py-1 px-4 rounded-lg hover:bg-[#00677A] hover:text-[#fff] hover:border-[#00677A] border border-[#999999] transition cursor-pointer text-sm w-[fit-content]">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 my-8">
        <div
          className="md:col-span-1 bg-no-repeat bg-cover bg-center h-[50vh] md:h-[70vh] text-white flex flex-col p-4 rounded-xl"
          style={{
            backgroundImage: "url(/resources/online-demo/cloudbg1.png)",
          }}
        >
          <h2>Milesight IoT Cloud</h2>
          <p>
            Username: iot.demo@milesight.com <br /> Password: MilesightIoT2021
          </p>
        </div>
        <div className="md:col-span-2 grid md:grid-cols-3 gap-4">
          {data.map((item) => (
            <div
              key={item.id}
              className="bg-no-repeat bg-cover bg-center rounded-xl flex justify-center items-center text-white text-[20px] p-4 h-[50vh] md:h-auto"
              style={{ backgroundImage: `url(${item.img})` }}
            >
              {item.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CloudSection;
