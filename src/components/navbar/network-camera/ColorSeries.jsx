export default function ColorSeries() {
  const cameraArray = [
    {
      name: "AI Color+ Vandal-proof Mini Bullet Network Camera-70",
      img: "/client-pic/Color Series/AI Color+ Vandal-proof Mini Bullet Network Camera-70.png",
    },
    {
      name: "AI Color+ Vandal-proof Mini Bullet Network Camera-71",
      img: "/client-pic/Color Series/AI Color+ Vandal-proof Mini Bullet Network Camera-71.png",
    },
    {
      name: "AI Color+ Vandal-proof Mini Bullet Network Camera-72",
      img: "/client-pic/Color Series/AI Color+ Vandal-proof Mini Bullet Network Camera-72.png",
    },
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
