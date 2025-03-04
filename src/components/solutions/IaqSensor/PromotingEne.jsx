import { CiLocationOn } from "react-icons/ci";
import hex from "/IaqAdvanced/hex.jpg";
export default function PromotingEne() {
  const eng = [
    {
      title: "Enhancing Indoor Air Quality and Sustainability in Retail",
      descrip:
        "NEX Shopping Mall in Singapore has integrated Milesight's 9-in-1 IAQ sensor (AM319) with the Honeywell platform and its HVAC system. This solution enhances air quality for shoppers, tenants, and staff while optimizing energy savings.",
      icon: <CiLocationOn />,
      city: "Singapore",
      btn: "Learn More",
      img: hex,
    },
  ];
  return (
    <div className=" w-full ">
      <div className=" w-full sm:w-11/12 mx-auto sm:mt-8 mt-4 px-2">
        <div className=" text-center ">
          <h1 className=" text-xl font-semibold md:text-2xl text-[#00667C]">
            Promoting Energy Efficiency in Buildings Everywhere
          </h1>
          <p className=" text-xs md:text-lg mt-2  text-[#00667C]">
            IAQ Solution Success Stories
          </p>
        </div>

        <div className=" flex gap-4 mt-8 ">
          {eng.map((item, index) => {
            return (
              <div
                key={index}
                className=" flex flex-col md:flex-row justify-between items-center bg-white shadow-lg rounded-lg "
              >
                <div className=" flex flex-col justify-start items-start px-4 py-2 w-full md:w-[40%]">
                  <h1 className=" text-lg font-semibold text-[#00667C] ">
                    {item.title}
                  </h1>
                  <p className=" text-xs text-gray-500 mt-2 ">{item.descrip}</p>

                  <div className=" flex items-center gap-2 mt-2">
                    <span className=" text-[#00667C]">{item.icon}</span>
                    <span className=" text-[#00667C]">{item.city}</span>
                  </div>

                  <button className=" bg-[#00667C] text-white hover:bg-[#7CCA9A] hover:text-[#00667C] mt-2 px-4 py-1 rounded-lg flex items-center scale-[0.9] transform transition-all ease-in delay-100 hover:scale-[1] cursor-pointer">
                    <a href="/">{item.btn}</a>
                  </button>
                </div>
                <div className="  w-full md:w-[50%] p-5">
                  <img
                    src={item.img}
                    alt=""
                    className=" w-full h-60 object-cover rounded-t-lg "
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
