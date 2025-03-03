import React from "react";
import cam1 from "/TrafficIntelecence/solar.png";
import cam2 from "/TrafficIntelecence/ai.png";
import airoad from "/TrafficIntelecence/airoad.png";
import aiplus from "/TrafficIntelecence/aiplus.png";
import ptz from "/TrafficIntelecence/ptz.png";
import ptz2 from "/TrafficIntelecence/ptz2.png";
import ptz3 from "/TrafficIntelecence/ptz3.png";
import { FaArrowRight } from "react-icons/fa6";

const Traffic = () => {
  const data = [
    {
      img: cam1,
    },
    {
      img: cam2,
    },

    {
      img: ptz2,
    },
    {
      img: ptz3,
    },
    {
      img: airoad,
    },
  ];
  return (
    <div>
      <div className="w-[15rem] grid grid-cols-2">
        {data.map((item, index) => (
          <>
            <img src={item.img} alt="missing" className="w-full" />
          </>
        ))}
      </div>
    </div>
  );
};

export default Traffic;
