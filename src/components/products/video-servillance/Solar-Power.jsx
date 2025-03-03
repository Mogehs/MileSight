import solarcamera from "/VideoSurivilence/solarcamera.png";
import solar from "/VideoSurivilence/solar.png";
import bag from "/VideoSurivilence/bag.png";

export default function SolarPower() {
  const camerAray = [
    { name: "4G Solar-powered Traffic Sensing Camera", img: solar },
    { name: "4G Solar-powered Security Camera", img: bag },
    { name: "4G Solar-powered ANPR Camera", img: solarcamera },
  ];

  return (
    <div className="w-full px-4 sm:mt-5">
      <div className="sm:w-[90%] mx-auto w-full">
        <span className="text-gray-500 block text-center mb-3 mt-3 text-sm sm:text-base">
          Sustainable · Efficient · Eco-friendly
        </span>

        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-4 mt-3">
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

        <a
          href="/products/NDAA-Compilant"
          className="underline text-center mt-4 cursor-pointer text-sm sm:text-base hover:text-[#7CCA9A]"
        >
          <p> View All Products</p>
        </a>
      </div>
    </div>
  );
}
