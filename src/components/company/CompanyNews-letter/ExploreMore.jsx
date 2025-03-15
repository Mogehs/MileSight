export default function ExploreMore() {
    const box = [
        { img: "/company/Newsletter/one.png", title: "About Us" },
        { img: "/company/Newsletter/two.png", title: "News" },
        { img: "/company/Newsletter/three.png", title: "Blog" },
        { img: "/company/Newsletter/four.png", title: "Success Stories" },
    ];

    return (
        <div className="w-full h-fit sm:mt-8 mt-4 flex justify-center flex-col">
            <div className="sm:w-11/12 mx-auto w-full">
                <h1 className="text-2xl sm:text-3xl text-[#00667C] text-center font-semibold">
                    Explore More about Milesight
                </h1>

                {/* Centering the divs */}
                <div className="flex flex-wrap justify-around items-center mt-3 sm:mt-10 w-full sm:w-8/12 mx-auto">
                    {box.map((src, index) => (
                        <div
                            key={index}
                            className="bg-white flex flex-col justify-center items-center p-4 
                          transition-all duration-300 cursor-pointer 
                          shadow-[5px_5px_10px_rgba(0,0,0,0.1)] 
                          hover:shadow-[10px_10px_15px_rgba(0,0,0,0.2)] 
                          hover:-translate-y-1 rounded-xl w-44 h-44"
                        >
                            {/* Image Centered */}
                            <div className="flex justify-center items-center w-32 h-32">
                                <img src={src.img} alt={`Image ${index + 1}`} className="w-24 h-24 object-contain" />
                            </div>

                            <h1 className="font-semibold text-nowrap text-[#7CCA9A] mt-2">{src.title}</h1>
                        </div>
                    ))}
                </div>
            </div>


            {/* Video survilence */}

            <div className="flex p-2 justify-center items-center mt-10 w-full gap-6 flex-wrap">
                {/* First Card */}
                <div
                    className="relative flex justify-center items-center w-full sm:w-5/12 h-34 rounded-xl shadow-lg overflow-hidden cursor-pointer hover:scale-105 hover:shadow-xl transition-all duration-300"
                    style={{
                        backgroundImage: `url(/company/Newsletter/cctv.jpg)`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    {/* Dark Overlay */}
                    <div className="absolute inset-0  bg-opacity-50 rounded-xl"></div>

                    {/* Text */}
                    <h1 className="relative text-white font-bold text-lg z-10">AI Video Surveillance</h1>
                </div>

                {/* Second Card */}
                <div
                    className="relative flex justify-center items-center w-full sm:w-5/12 h-34 rounded-xl shadow-lg overflow-hidden cursor-pointer hover:scale-105 hover:shadow-xl transition-all duration-300"
                    style={{
                        backgroundImage: `url(/company/Newsletter/cct.jpg)`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    {/* Dark Overlay */}
                    <div className="absolute inset-0  bg-opacity-50 rounded-xl"></div>

                    {/* Text */}
                    <h1 className="relative text-white font-bold text-lg z-10">IoT LoRaWAN® Series </h1>
                </div>
            </div>

        </div>
    );
}
