export default function Support() {
    const box = [
      { img: "/Supprt/support-1.png", title: "Download Center" },
      { img: "/Supprt/support-2.png", title: "Help Center" },
      { img: "/Supprt/support-3.png", title: "Submit a Ticket" },
      { img: "/Supprt/support-4.png", title: "Online Demo" },
      { img: "/Supprt/support-5.png", title: "White Paper" },
      { img: "/Supprt/support-6.png", title: "Marketing Collateral" },
    ];
  
    return (
      <div className="w-full h-fit sm:mt-8 mt-4">
        <div className="sm:w-11/12 mx-auto w-full p-2">
          <h1 className="text-2xl sm:text-4xl text-center font-semibold">Support</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 mt-8">
            {box.map((src, index) => (
              <div
                key={index}
                className="bg-white flex justify-center items-center flex-col p-4 
                          transition-all duration-300 cursor-pointer 
                          shadow-[5px_5px_10px_rgba(0,0,0,0.1)] 
                          hover:shadow-[10px_10px_15px_rgba(0,0,0,0.2)] 
                          hover:-translate-y-1 rounded-xl"
              >
                <img src={src.img} alt={`Image ${index + 1}`} className="w-32 h-32 object-contain" />
                <h1 className="font-semibold text-nowrap">{src.title}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  