import { img } from "framer-motion/client";


const highlights = [
  {
    title: "YOU can capture the most valuable data",
    img: "/company/brand/make-sensing-matter-data-icon.png",
  },
  {
    title: "YOU can create meaningful connections with your surroundings",
    img: "/company/brand/make-sensing-matter-connect-icon.png",
  },
  {
    title: "YOU have the right product and technology for specific needs",
    img: "/company/brand/make-sensing-matter-impact-icon.png",
  },
];

const JoinTheFuture = () => {
  return (
    <div className="w-full my-20">
      {/* Content Section */}
      <div className=" w-[95%] sm:w-[85%] mx-auto flex flex-col lg:flex-row items-center gap-15">
        {/* Left Text Section */}
        <div className="lg:w-[40%] w-full text-center lg:text-left">
          <h1 className="text-3xl font-semibold text-[#262626]">
            What Does "Matter" Mean to Us?
          </h1>
          <p className="text-[0.9rem] text-[#262626] mt-5 max-w-lg mx-auto lg:mx-0">
            In a world where data drives decisions and impacts outcomes, it is
            the unnoticed, "too small," or "too everyday" things that often hold
            the most significant potential. Sensing can be the cornerstone of
            understanding and interacting with our world.
            <br />
            <br />
            What matters is not always the same. New technologies will be born,
            new needs will emerge, and new applications will arise. What remains
            unchanged is that Milesight always{" "}
            <strong> focuses on what delivers the most value, </strong>whether
            it's our products, the data we capture, or the way we work with our
            customers and partners.
          </p>
        </div>

        {/* Right Highlights Section */}
        <div className="lg:w-[60%] w-full rounded-lg bg-gradient-to-r to-sky-200 from-white px-8 py-8">
          <h1 className="text-sm font-light text-center">
            At Milesight, everything we do is about Making Sensing Matter so
            that:
          </h1>

          {/* Dynamically Mapping the Highlights */}
          <div className="grid sm:grid-cols-3 gap-6 mt-6 font-light">
            {highlights.map((item, index) => (
              <div key={index} className="text-[0.9rem]">
                <img
                  src={item.img}
                  alt=""
                  className="h-15 object-cover hover:scale-120 transition-all duration-300"
                />
                <h2 className="font-light">{item.title}</h2>
              </div>
            ))}
          </div>
          <p className="w-full mt-10 text-sm">
            To make sensing truly work across challenges, applications, and
            industries, that's what "matter" means to us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default JoinTheFuture;
