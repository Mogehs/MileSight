import img1 from "/navbar-video/4k-mini-nvr-1000-series.png";
import img2 from "/navbar-video/4k-pro-nvr-5000-series.png";
import img3 from "/navbar-video/4k-pro-nvr-7000-series.png";
import img4 from "/navbar-video/4k-pro-nvr-8000-series.png";

export default function NVR() {
  const cameraArray = [
    {
      name: "4K Mini NVR 1000 Series",
      img: img1,
    },
    { name: "4K Pro NVR 1000 Series", img: img2 },
    { name: "4K Pro NVR 5000 Series", img: img3 },
    { name: "4K Pro NVR 7000 Series", img: img4 },
  ];

  return (
    <div className="w-full sm:mt-5">
      <div className="sm:w-[90%]">
        <div className="grid grid-cols-3 gap-y-2 text-black font-bold">
          {cameraArray.map((item, index) => (
            <div
              className="p-1 transition-all ease-in-out delay-100 hover:shadow-md hover:shadow-blue-200 cursor-pointer h-auto flex flex-col items-center justify-center border sm:border-0 rounded-lg shadow-sm w-30"
              key={index}
            >
              <img
                src={item.img}
                alt={item.name}
                className="transition-transform ease-in-out delay-400 h-[70px] w-[120px] sm:h-[70px] sm:w-[110px] hover:scale-110 object-contain"
              />
              <span className="text-xs sm:text-sm text-center mt-2">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
