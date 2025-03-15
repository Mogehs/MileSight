import React from "react";

function ContentSection({ data }) {
  return (
    <div>
      {data.map((item) => (
        <div key={item.id} className="p-4">
          <h2 className="lg:text-[2rem] md:text-[1.5rem] text-[25px] text-[#333] border-b border-[#dedede] mb-4 pb-4">
            {item.title}
          </h2>
          <div className="flex md:flex-row flex-col gap-4">
            {item.images.map((image, index) => (
              <div className="flex flex-col gap-6" key={index}>
                <img src={image} alt={`about-${index}`} className="md:w-40" />
                <p
                  className="text-[#666] md:text-[12px] text-wrap"
                  dangerouslySetInnerHTML={{ __html: item.para[index] }}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ContentSection;
