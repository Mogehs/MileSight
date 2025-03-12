import React from "react";

const data = [
  {
    img: "/resources/online-demo/img1.png",
    title: "Network Camera",
    desc1: "User: Milesight",
    desc2: "Password: Milesight2024",
    btn: "Play Online",
  },
  {
    img: "/resources/online-demo/img2.png",
    title: "PTZ Camera",
    desc1: "User: Milesight",
    desc2: "Password: Milesight2024",
    btn: "Play Online",
  },
  {
    img: "/resources/online-demo/img3.png",
    title: "Speed Dome",
    desc1: "User: Milesight",
    desc2: "Password: Milesight2024",
    btn: "Play Online",
  },
  {
    img: "/resources/online-demo/img4.png",
    title: "360° Panoramic Fisheye Camera",
    desc1: "User: Milesight",
    desc2: "Password: Milesight2024",
    btn: "Play Online",
  },
  {
    img: "/resources/online-demo/img5.png",
    title: "NVR",
    desc1: "User: Milesight",
    desc2: "Password: Milesight2024",
    btn: "Play Online",
  },
  {
    title:
      "Please get in touch with us through the following contacts for an admin account if you want to change the setup.",
    desc: "Sales Department: sales@milesight.com | Technical Support: support@milesight.com | Skype ID: sales.milesight",
  },
];

function VideoSection() {
  return (
    <div className="bg-[#f5f5f5] p-8 my-8">
      {/* Header Section */}
      <div className="text-center my-8">
        <h2 className="lg:text-[2.5rem] md:text-[2rem] text-[25px] text-[#333] font-bold">
          AI Video Surveillance Solution
        </h2>
        <p className="text-[#666]">
          Easily try our Network Cameras and NVRs with the online demo today!
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
                index === 5 ? "w-[100%] text-sm" : ""
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
              {!item.img && (
                <p className="text-sm text-[#666] mt-4">{item.desc}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VideoSection;
