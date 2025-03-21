import security from "/VideoSurivilence/security.png";
import trafic from "/VideoSurivilence/trafic.png";
import road from "/VideoSurivilence/road.png";

export default function Panoramic() {
  const camerAray = [
    { name: "TrafficX Series", img: trafic },
    { name: "Road Traffic Management", img: road },
    { name: "Parking Management", img: security },
  ];

  return (
    <div className="w-full px-4 sm:mt-5">
      <div className="sm:w-[90%] mx-auto w-full">
        <span className="text-gray-500 block text-center mb-3 mt-3 text-sm sm:text-base">
          Manage Traffic Efficiently
        </span>

        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-3">
          {camerAray.map((item, index) => (
            <div
              className="p-3 transition-all ease-in-out delay-100 hover:shadow-md hover:shadow-blue-200 cursor-pointer flex flex-col items-center justify-center border sm:border-0 rounded-lg shadow-sm bg-white"
              key={index}
            >
              <img
                src={item.img}
                alt={item.name}
                className="transition-transform ease-in-out delay-400 h-[90px] w-[140px] sm:h-[100px] sm:w-[180px] hover:scale-110"
              />
              <span className="text-xs sm:text-sm text-center mt-2">
                {item.name}
              </span>
            </div>
          ))}
        </div>

        <p className="underline text-center mt-4 cursor-pointer text-sm sm:text-base hover:text-blue-500">
          View All Products
        </p>
      </div>
    </div>
  );
}
