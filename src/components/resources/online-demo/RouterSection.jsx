import React from "react";

const data = [
  {
    img: "/resources/online-demo/router1.png",
    title: "UR32L Industrial Cellular Router",
    desc1: "Username: iot_demo",
    desc2: "Password: MilesightIoT2021",
    btn: "Learn More",
  },
  {
    img: "/resources/online-demo/router2.png",
    title: "UR35 Industrial Cellular Router",
    desc1: "User: iot_demo",
    desc2: "Password: MilesightIoT2021",
    btn: "Learn More",
  },
  {
    img: "/resources/online-demo/router3.png",
    title: "UR75 Industrial 5G Cellular Router",
    desc1: "User: iot_demo",
    desc2: "Password: MilesightIoT2021",
    btn: "Learn More",
  },
  {
    img: "/resources/online-demo/router4.png",
    title: "UF51 5G CPE",
    desc1: "User: iot_demo",
    desc2: "Password: MilesightIoT2021",
    btn: "Learn More",
  },
];

function RouterSection() {
  return (
    <div className="bg-[#f5f5f5] p-8 my-8">
      {/* Header Section */}
      <div className="flex flex-col gap-2 items-center md:text-center my-8">
        <h2 className="lg:text-[2.5rem] md:text-[2rem] text-[20px] text-[#333] font-bold">
          Scalable and Centralized Management
        </h2>
        <p className="text-[#666]">
          Milesight Industrial 5G/4G Router & 5G CPE Online Demo is
          well-positioned to leverage the value of device-management <br />
          intelligence. It will enhance engagement and maintain control over
          these dynamic and scalable online computing environments.
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
                <button className="bg-[#f5f5f5] text-[#666] py-1 px-4 rounded-lg hover:bg-[#00677A] hover:text-[#fff] hover:border-[#00677A] border border-[#999999] transition cursor-pointer text-sm w-[fit-content]">
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

export default RouterSection;
