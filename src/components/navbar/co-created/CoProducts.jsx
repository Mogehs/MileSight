import img1 from "/iot-controller/co-created-program-gs601-vape-detector.png";
import img2 from "/iot-controller/em410-rdl.png";
import img3 from "/iot-controller/vs370.png";
import developement from "/iot-controller/co-created-program-navigation.jpg";
import { useMenu } from "../../menueContext";

export default function CoProducts({ filter }) {
  const { closeMenu } = useMenu();

  const camerAray = [
    {
      name: "GS601 Vape Detector",
      img: img1,

      path: "/products/ai-motorized-mini-dome",
    },
    {
      name: "EM410-RDL Radar Distance Level Sensor",
      img: img2,
    },

    {
      name: "VS370 Radar Human Presence Sensor",
      img: img3,
    },
  ];

  const filteredCameras = filter
    ? camerAray.filter((item) => item.category === filter)
    : camerAray;

  return (
    <div className="w-full sm:mt-5 text-black font-bold flex flex-col gap-0">
      <div className="w-full text-black font-light flex justify-center items-start  gap-4">
        <a href="/products/co-created">
          <div className="h-50 mt-2">
            <img src={developement} alt="" />
          </div>
        </a>
        <div>
          <p>
            <strong> Milesight Co-created Innovation Program</strong>
            <br />
            50% OFF Discount, Even Opportunity to Get A FREE SAMPLE!
            <br />
            The Co-Created Innovation Program is designed to bring together
            creative minds and industry experts to co-enhance next-generation
            smart products.
          </p>
        </div>
      </div>
      <p className="mb-3">Co Created Products</p>
      <div className="sm:w-[70%]">
        <div className="grid grid-cols-3 gap-y-2">
          {filteredCameras.length > 0 ? (
            filteredCameras.map((item, index) => (
              <>
                <a href="/products/ai-motorized-mini-dome" onClick={closeMenu}>
                  <div
                    className="p-1 transition-all ease-in-out delay-100 hover:shadow-md hover:shadow-blue-200 cursor-pointer h-auto flex flex-col items-center justify-center border sm:border-0 rounded-lg shadow-sm w-30"
                    key={index}
                  >
                    <img
                      src={item.img}
                      alt={item.name}
                      className="transition-transform ease-in-out delay-400 h-[70px] w-[120px] sm:h-[70px] sm:w-[110px] hover:scale-110"
                    />
                    <span className="text-xs sm:text-xs text-center mt-2">
                      {item.name}
                    </span>
                  </div>
                </a>
              </>
            ))
          ) : (
            <p className="text-gray-400 col-span-full text-center">
              No products found for {filter}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
