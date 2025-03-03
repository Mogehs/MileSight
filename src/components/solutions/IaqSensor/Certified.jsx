import certified from "/IaqAdvanced/certified.jpg";
import map from "/IaqAdvanced/map.png";
import workwell from "/IaqAdvanced/workwell.png";
export default function Certified() {
  return (
    <div
      className=" w-full p-4"
      style={{
        backgroundImage: `url(${certified})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full sm:w-11/12 mx-auto sm:mt-8 mt-4">
        <div className=" text-center text-[#00667C]">
          <h1 className=" text-xl font-semibold md:text-2xl">
            Our Certified IAQ Sensors
          </h1>
          <p className=" text-xs md:text-2xl mt-2 font-semibold ">
            Your Helps in WELL and IWBI Community
          </p>
        </div>
        <div className=" flex gap-2 flex-wrap justify-around p-8 rounded-md rounded-r-4xl rounded-br-none relative mt-5 w-full px-2 md:w-9/12 mx-auto bg-[#ffffff93] border border-white">
          <div className="">
            <img
              src={map}
              alt=""
              className="top-0 left-0 lg:2.5  absolute h-30  md:h-30"
            />
          </div>

          <div className=" mt-23 md:mt-0 flex-col flex gap-3 md:w-8/12  justify-start items-start ">
            <p className=" text-xs md:text-lg text-justify text-[#00667C]">
              Milesight AM319 9-in-1 IAQ Sensor has officially earned the
              coveted Works with WELL mark. “The Works with WELL program,
              introduced by IWBI earlier this year in response to the increasing
              demand for healthier building products and solutions, allows
              product manufacturers and service providers to validate and
              demonstrate how their offerings align with requirements in the
              WELL Building Standard (WELL).“ - IWBI
            </p>
            <i className="text-xs text-[#7b777770] text-justify">
              * WORKS WITH WELL is a trademark of International WELL Building
              Institute PBC and used by those product manufacturers granted
              permission by International WELL Building Institute (IWBI)
              following IWBIs license criteria validation process.*
            </i>
            <button
              className="text-xs lg:text-md rounded-2xl bg-[#00667C] text-white hover:bg-[#7CCA9A] hover:text-[#00667C] px-4 py-2 mt-2 scale-[0.9] transform transition-all ease-in delay-100 hover:scale-[1] cursor-pointer"
              onClick={() =>
                window.open(
                  "/instructions-pdf/milesight-network-camera-quick-start-guide.pdf",
                  "_blank"
                )
              }
            >
              <span>
                Check Milesight AM300 in Directory from Works with WELL Program
              </span>
            </button>
          </div>
          <div className="">
            <img
              src={workwell}
              alt=""
              className=" md:h-14 lg:h-20 absolute top-0 right-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
