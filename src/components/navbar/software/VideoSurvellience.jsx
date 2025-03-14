import img1 from "/iot-controller/milesight-vms-enterprise.png";
import img2 from "/iot-controller/cms.png";
import img3 from "/iot-controller/m-sight-pro-app.png";
import img4 from "/iot-controller/cms.png";
import { useMenu } from "../../menueContext";

export default function VideoSurvellience({ filter }) {
  const { closeMenu } = useMenu();

  const camerAray = [
    {
      name: "Milesight VMS Enterprise",
      img: img1,

      path: "/products/ai-motorized-mini-dome",
    },
    {
      name: "CMS",
      img: img2,
    },
    { name: "M-Sight Pro APP", img: img3 },
    {
      name: "Smart Tools",
      img: img4,
    },
  ];

  const filteredCameras = filter
    ? camerAray.filter((item) => item.category === filter)
    : camerAray;

  return (
    <div className="w-full sm:mt-5 text-black font-bold">
      <div className="sm:w-[90%]">
        <div className="grid grid-cols-3 gap-y-2">
          {filteredCameras.length > 0 ? (
            filteredCameras.map((item, index) => (
              <>
                <a href="/products/5g-cellular" onClick={closeMenu}>
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
