import iot from "/IaqAdvanced/iot.png";
export default function IotCloud() {
  return (
    <div
      className="w-full p-4 h-[40vh] md:h-[80vh]"
      style={{
        backgroundImage: `url(${iot})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full sm:w-11/12 mx-auto sm:mt-8 mt-4">
        <div className=" text-center">
          <h1 className=" text-xl font-semibold md:text-2xl text-[#00667C]">
            Dont Know Where to Start?
          </h1>
          <p className=" text-xs md:text-2xl mt-2 font-semibold  text-[#00667C]">
            Try Milesight iBox IAQ Kit to Kick off Your Journey!
          </p>
          <button className="text-xs lg:text-lg rounded-2xl bg-[#00667C] text-white hover:bg-[#7CCA9A] hover:text-[#00667C] px-4 py-2 mt-2 scale-[0.9] transform transition-all ease-in delay-100 hover:scale-[1] cursor-pointer">
            <span>
              {" "}
              <a href="/products/NDAA-Compilant">Get My LoRaWAN® Demo Kit</a>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
