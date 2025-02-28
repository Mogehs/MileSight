import React from "react";

const NdaaSection = ({ title, subtitle, list }) => {
  const listArray = list?.split(",");

  return (
    <div>
      <div
        className="md:h-[60vh] bg-cover bg-center flex md:flex-row flex-col items-center justify-between text-white relative"
        style={{ backgroundImage: "url('/mini-dome/dome-hero-bg.jpg')" }}
      >
        <div className="flex flex-col px-8">
          <h1 className="md:text-[2.5rem] text-[25px]">{title}</h1>
          <p className="md:text-[1.5rem] text-[15px]">{subtitle}</p>
        </div>
        <div>
          <img
            className="w-[70%]"
            src="/mini-dome/hero-img.png"
            alt="not found"
          />
        </div>
      </div>
      <div className="flex md:flex-row flex-col md:items-center mx-8  md:gap-16 my-8">
        <ul className="list-disc marker:text-[#0299f4] text-[#666]">
          {listArray.map((li, id) => (
            <>{id <= 3 && <li>{li}</li>}</>
          ))}
        </ul>
        <ul className="list-disc marker:text-[#0299f4] text-[#666]">
          {listArray.map((li, id) => (
            <>{id > 3 && <li>{li}</li>}</>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NdaaSection;
