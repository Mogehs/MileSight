import { useState } from "react";
import { X, Youtube } from "lucide-react";
import succes from "/PeopleCounting/succes.jpg";

export default function SuccessStories() {
    const [activeVideo, setActiveVideo] = useState(null);

    const data = [
        {
            img: succes,
            title: "1000+ People Counting Sensors Improve Business in 700+ Retail Stores in Europe",
            description:
                "The Milesight AI ToF People Counting Sensor VS133 is used in over 700 retail stores across Europe, with over 1,000 units installed. This solution serves various industries, including clothing, retail, jewelry, cosmetics, and more. Top retail brands like JOTT, Herno, and Hawkers use this technology to streamline operations and boost performance.",
            btn: "See How it Works in Retail",
            url: "https://www.youtube.com/embed/PmTwIdJMIi0?enablejsapi=1",
        },
    ];

    return (
        <div className="relative w-full mx-auto mt-10">
            <h1 className="text-center text-2xl sm:text-4xl font-semibold mb-6 text-[#00667C]">
                Success Stories
            </h1>

            {/* Content Section */}
            <div className="w-full sm:w-[90%] mx-auto flex flex-col lg:flex-row items-center gap-6">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="w-full flex flex-col lg:flex-row items-center lg:items-start gap-6  rounded-lg p-6"
                    >
                        {/* Image Section */}
                        <div className="w-full lg:w-1/2">
                            <div className="relative">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full h-52 sm:h-64 rounded-lg object-cover"
                                    onClick={() => setActiveVideo(item.url)}
                                />
                                {/* Play Button */}
                                <div
                                    onClick={() => setActiveVideo(item.url)}
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#00667C] p-3 rounded-full shadow-lg cursor-pointer transition hover:bg-[#7CCA9A]"
                                >
                                    <Youtube size={32} className="text-white hover:text-[#00667C]" />
                                </div>
                            </div>
                        </div>

                        {/* Text Content */}
                        <div className="w-full lg:w-1/2 text-center lg:text-left">
                            <h2 className="text-xs sm:text-xl font-semibold">{item.title}</h2>
                            <p className="mt-2 text-gray-600">{item.description}</p>
                            <button
                                onClick={() => setActiveVideo(item.url)}
                                className="text-xs lg:text-lg rounded-2xl bg-[#00667C] text-white hover:bg-[#7CCA9A] hover:text-[#00667C] px-4 py-2 mt-2 scale-[0.9] transform transition-all ease-in delay-100 hover:scale-[1] cursor-pointer"
                            >
                                {item.btn}
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Video Modal */}
            {activeVideo && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-80 z-50">
                    <div className="relative w-[90%] sm:w-[70%] lg:w-[50%]">
                        <button
                            className="absolute top-[-50px] right-[-15px] md:right-[-50px] bg-[#00667C] text-[#7CCA9A] p-2 rounded-full shadow-lg hover:bg-[#00667C]"
                            onClick={() => setActiveVideo(null)}
                        >
                            <X size={24} />
                        </button>

                        <iframe
                            width="100%"
                            height="315"
                            src={activeVideo}
                            title="YouTube Video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="rounded-lg"
                        ></iframe>
                    </div>
                </div>
            )}
        </div>
    );
}
