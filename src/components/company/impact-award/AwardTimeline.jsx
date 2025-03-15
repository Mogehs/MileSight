import React from "react";

const timelineData = [
  {
    date: "May 15",
    description: "Case Submissions Open",
    icon: "/company/impact-award/icon1.png",
  },
  {
    date: "September 15",
    description: "Case Submissions Close",
    icon: "/company/impact-award/icon2.png",
  },
  {
    date: "September 16-29",
    description: "Review & Judge Begins",
    icon: "/company/impact-award/icon3.png",
  },
  {
    date: "September 30",
    description: "Finalists Showcased",
    icon: "/company/impact-award/icon4.png",
  },
  {
    date: "October",
    description: "Winner Announced & <br /> Award Ceremony",
    icon: "/company/impact-award/icon5.png",
  },
];

function AwardTimeline() {
  return (
    <div className="p-4">
      <h2 className="text-[#333] lg:text-[2.5rem] md:text-[1.5rem] text-[25px] text-center mb-6">
        Awards Timeline
      </h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {timelineData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center relative gap-6"
          >
            {/* Icon */}
            <img src={item.icon} alt="not found" className="" />

            {/* Circle with Connecting Line */}


            {/* Date & Description */}
            <div className="flex flex-col gap-2 justify-center items-center mt-2 text-center">
              <h2 className="text-[#333] font-semibold">{item.date}</h2>
              <p
                className="text-[#666]"
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AwardTimeline;
