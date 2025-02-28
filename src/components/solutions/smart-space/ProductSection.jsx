import React from "react";

const data = [
  {
    id: "1",
    bgImg: "/5g-cellular/5g-bg-img.png",
    img: "/5g-cellular/5g-img-1.png",
    title1: "5G Dongle UF31",
    title2: "Plug & Play Networking",
  },
  {
    id: "2",
    bgImg: "/5g-cellular/5g-bg-img.png",
    img: "/5g-cellular/5g-img-2.png",
    title1: "5G Dongle UF31",
    title2: "Plug & Play Networking",
  },
  {
    id: "3",
    bgImg: "/5g-cellular/5g-bg-img.png",
    img: "/5g-cellular/5g-img-3.png",
    title1: "5G Dongle UF31",
    title2: "Plug & Play Networking",
  },
  {
    id: "4",
    bgImg: "/5g-cellular/5g-bg-img.png",
    img: "/5g-cellular/5g-img-4.png",
    title1: "5G Dongle UF31",
    title2: "Plug & Play Networking",
  },
  {
    id: "5",
    bgImg: "/5g-cellular/5g-bg-img.png",
    img: "/5g-cellular/5g-img-5.png",
    title1: "5G Dongle UF31",
    title2: "Plug & Play Networking",
  },
  {
    id: "6",
    bgImg: "/5g-cellular/5g-bg-img.png",
    img: "/5g-cellular/5g-img-6.png",
    title1: "5G Dongle UF31",
    title2: "Plug & Play Networking",
  },
];

function ProductSection() {
  return (
    <div className="my-8 relative">
      <div
        id="smart-products"
        className=" md:h-[70vh] bg-cover bg-center text-white p-4 flex md:flex-row flex-col justify-between items-center gap-6"
        style={{
          backgroundImage: "url('/Solution/smart-space/products-bg-img.png')",
        }}
      >
        <div className="flex flex-col gap-6">
          <h2 className="md:text-[1.5rem] xl:text-[2rem] text-[25px]">
            CoWork Smart Space Solution <br />
            Product List
          </h2>
          <p>Based on LoRaWAN® & AI Technology</p>
        </div>
        <img
          className="md:w-[30rem] xl:w-[35rem]"
          src="/Solution/smart-space/product-img1.png"
          alt="not found"
        />
      </div>
      <div className="bg-[#f5f5f5] p-4">
        <div className="bg-white rounded-2xl my-8 mx-4 p-4 md:absolute md:top-120 lg:top-75 xl:top-85 left-0">
          <h2 className="md:text-[2rem] text-[25px] text-[#333] text-center">
            Benefits of Deploying IoT Sensors in Smart Offices
          </h2>
          <div className="flex md:flex-row flex-col justify-center items-center gap-6 mt-6">
            <div>
              <img
                src="/Solution/smart-space/product-img2.png"
                alt="not found"
              />
              <h2 className="md:text-[1.5rem] text-[20px]">
                Better Use of Workplace
              </h2>
              <p className="text-[#333]">
                Optimizes the use of the workplace by efficiently managing
                workplaces, enabling employees to find available meeting rooms,
                and other resources easily.
              </p>
            </div>
            <div className="md:border-l md:border-l-[#dadada] md:pl-6">
              <img
                src="/Solution/smart-space/product-img3.png"
                alt="not found"
              />
              <h2 className="md:text-[1.5rem] text-[20px]">Reduce Cost</h2>
              <p className="text-[#333]">
                Helps organizations reduce costs by simplifying processes,
                reducing energy consumption, and minimizing wastage.
              </p>
            </div>
            <div className="md:border-l md:border-l-[#dadada] md:pl-6">
              <img
                src="/Solution/smart-space/product-img4.png"
                alt="not found"
              />
              <h2 className="md:text-[1.5rem] text-[20px]">
                Boost Productivity
              </h2>
              <p className="text-[#333]">
                Improves employee productivity by providing them with a more
                comfortable and efficient work environment.
              </p>
            </div>
            <div className="md:border-l md:border-l-[#dadada] md:pl-6">
              <img
                src="/Solution/smart-space/product-img5.png"
                alt="not found"
              />
              <h2 className="md:text-[1.5rem] text-[20px]">
                Energy efficiency
              </h2>
              <p className="text-[#333]">
                Streamlines routine tasks, allowing the automated scheduling of
                meetings, adjustment of environmental controls, and efficient
                workflow management.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 max-w-6xl mx-auto md:mt-150 lg:mt-90 xl:mt-80 ">
          {data.map((item) => (
            <div
              key={item.id}
              className="relative p-6 flex flex-col items-center"
              style={{
                backgroundImage: `url(${item.bgImg})`,
                backgroundSize: "auto",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              {/* Product Image */}
              <img
                src={item.img}
                alt="Product"
                className="w-32 h-32 object-contain mb-4 transition delay-150 duration-300 ease-in-out hover:-translate-y-4 hover:cursor-pointer"
              />

              {/* Product Titles */}
              <h2 className="text-xl font-semibold text-gray-900 transition delay-75 duration-300 ease-in-out hover:text-[#469bff] hover:cursor-pointer">
                {item.title1}
              </h2>
              <p className="text-gray-600 transition delay-150 duration-300 ease-in-out hover:text-[#469bff] hover:cursor-pointer">
                {item.title2}
              </p>
            </div>
          ))}
        </div>
        <div className="flex md:flex-row flex-col justify-center items-center gap-6 mt-6">
          <div className="bg-white border border-white hover:border-[#007aff] hover:cursor-pointer rounded-xl flex flex-col justify-center items-center gap-4">
            <img src="/Solution/smart-space/product-img6.png" alt="not found" />
            <h3 className="text-[#333] md:text-[1.5rem] text-[20px]">
              CoWork Kit A
            </h3>
          </div>
          <div className="bg-white border border-white hover:border-[#007aff] hover:cursor-pointer rounded-xl flex flex-col justify-center items-center gap-4">
            <img src="/Solution/smart-space/product-img7.png" alt="not found" />
            <h3 className="text-[#333] md:text-[1.5rem] text-[20px]">
              CoWork Kit B
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductSection;
