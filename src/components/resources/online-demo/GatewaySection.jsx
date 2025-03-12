import React from "react";

const data = [
  {
    img: "/resources/online-demo/gatewayimg1.png",
    title: "SG50/UG63 LoRaWAN® Gateway (Same Web GUI layout)",
    desc1: "Username: admin",
    desc2: "Password: MilesightIoT2021",
    btn: "Learn More",
  },
  {
    img: "/resources/online-demo/gatewayimg2.png",
    title: "UG65 Indoor LoRaWAN® Gateway",
    desc1: "User: iot_demo",
    desc2: "Password: MilesightIoT2021",
    btn: "Learn More",
  },
  {
    img: "/resources/online-demo/gatewayimg3.png",
    title: "UG67 Outdoor LoRaWAN® Gateway",
    desc1: "User: iot_demo",
    desc2: "Password: MilesightIoT2021",
    btn: "Learn More",
  },
];

function GatewaySection() {
  return (
    <div className="bg-[#f5f5f5] p-8 my-8">
      {/* Header Section */}
      <div className="flex flex-col gap-2 items-center md:text-center my-8">
        <h2 className="lg:text-[2.5rem] md:text-[2rem] text-[20px] text-[#333] font-bold">
          Extend Your Network Reach of End Devices
        </h2>
        <p className="text-[#666]">
          Milesight LoRaWAN® Gateway Online Demo offers more visibility into IoT
          data practices and increases transparency around your <br /> gateway
          governance and management.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md flex lg:flex-row flex-col items-center"
          >
            {item.img && (
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
            )}
            <div
              className={`flex flex-col lg:w-1/2 gap-2 ${
                index === 5 ? "w-[80%]" : ""
              }`}
            >
              <h3 className={`font-semibold text-[#333]`}>{item.title}</h3>
              {item.desc1 && (
                <p className="text-sm text-[#666]">
                  {item.desc1} <br />
                  {item.desc2}
                </p>
              )}
              {item.btn && (
                <button className="bg-[#f5f5f5] text-[#666] py-1 px-4 rounded-lg hover:bg-[#0299f4] hover:text-[#fff] hover:border-[#0299f4] border border-[#999999] transition cursor-pointer text-sm w-[fit-content]">
                  {item.btn}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GatewaySection;
