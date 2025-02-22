import React from "react";

const highlights = [
  {
    title: "Exclusive Access",
    content:
      "Early access to our latest technology, including our new LoRaWAN® product.",
  },
  {
    title: "Influence Product Innovation",
    content:
      "Provide feedback and suggestions that will drive product innovation.",
  },
  {
    title: "Time-limited Offers",
    content:
      "Attendees will receive up to 50% OFF on products and a chance to get a FREE SAMPLE!",
  },
];

const JoinTheFuture = () => {
  return (
    <div className="w-full">
      {/* Header Section */}
      <div className="text-center w-[85%] mx-auto my-20 bg-gradient-to-b to-sky-100 from-white rounded-b-2xl pb-20 border-b border-b-sky-400">
        <h1 className="text-4xl font-semibold text-[#262626]">
          Join the Future of IoT
        </h1>
        <h1 className="text-4xl font-semibold text-[#262626]">
          Milesight Co-Created Innovation Program
        </h1>
        <p className="mt-4 text-[0.9rem] max-w-lg mx-auto">
          Unlock the potential of IoT by collaborating with Milesight! Our
          Co-Created Innovation Program invites you to partner with us in
          bringing more valuable and market-oriented IoT products.
        </p>
      </div>

      {/* Content Section */}
      <div className="w-[85%] mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Left Text Section */}
        <div className="lg:w-[50%] w-full text-center lg:text-left">
          <h1 className="text-3xl font-semibold text-[#262626]">
            What Is the Co-Created Innovation Program?
          </h1>
          <p className="text-[0.9rem] text-[#262626] mt-5 max-w-lg mx-auto lg:mx-0">
            The Co-Created Innovation Program is designed to bring together
            creative minds and industry experts to co-enhance next-generation
            smart solutions. By participating, you'll gain access to advanced
            products, collaborate closely with our team, and help shape the
            future of IoT.
          </p>
        </div>

        {/* Right Highlights Section */}
        <div className="lg:w-[50%] w-full rounded-lg bg-gradient-to-r to-sky-200 from-white px-8 py-8">
          <h1 className="text-xl font-semibold text-center lg:text-left">
            Program Highlights:
          </h1>

          {/* Dynamically Mapping the Highlights */}
          <div className="grid sm:grid-cols-3 gap-6 mt-6">
            {highlights.map((item, index) => (
              <div key={index} className="text-[0.9rem]">
                <h2 className="font-semibold">{item.title}</h2>
                <p className="mt-2 text-gray-700">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinTheFuture;
