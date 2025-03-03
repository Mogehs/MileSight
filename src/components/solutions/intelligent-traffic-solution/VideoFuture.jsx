import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, X, Youtube } from "lucide-react";
import vid1 from "/FutureVideo/vid1.jpg";
import vid2 from "/FutureVideo/vid2.jpg";
import vid3 from "/FutureVideo/vid3.jpg";
import vid4 from "/FutureVideo/vid4.jpg";
import vid5 from "/FutureVideo/vid5.jpg";
import vid6 from "/FutureVideo/vid6.jpg";
import vid7 from "/FutureVideo/vid7.jpg";

export default function VideoFuture() {
    const [activeVideo, setActiveVideo] = useState(null);
    const sliderRef = useRef(null);

    const data = [
        { img: vid1, title: "No Plates Detection", url: "https://www.youtube.com/embed/u2qIY74vnRk" },
        { img: vid2, title: "Reverse Driving Detection", url: "https://www.youtube.com/embed/c7NQdRw_Gcs" },
        { img: vid3, title: "Outdoor Parking Occupancy Detection", url: "https://www.youtube.com/embed/gwVVTiLG4rY" },
        { img: vid4, title: "Outdoor Parking LPR Detection", url: "https://www.youtube.com/embed/JjO_TbKHd30" },
        { img: vid5, title: "Illegal Parking Detection", url: "https://www.youtube.com/embed/XhtrUR2GO7k" },
        { img: vid6, title: "VMS Enterprise Server Based ANPR", url: "https://www.youtube.com/embed/tAhszaHrceI" },
        { img: vid7, title: "White LED Supplement Light", url: "https://www.youtube.com/embed/wn18oEzY5yk" },
    ];

    const scroll = (direction) => {
        if (sliderRef.current) {
            const scrollAmount = 300;
            console.log(`Scrolling ${direction} by ${scrollAmount}px`);
            sliderRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth"
            });
        } else {
            console.log("Slider ref is not attached");
        }
    };

    return (
        <div className="relative w-full mx-auto mt-10">
            <h1 className="text-center text-2xl md:text-4xl text-[#00667C] font-semibold mb-6">
                Future Video Technologies
            </h1>

            {/* Scroll Buttons (Top-Right) */}
            <div className="absolute  hidden right-4 top-0 md:flex gap-2 z-10">
                <button
                    className="bg-gray-400 p-2 rounded-full text-white shadow-md hover:bg-gray-900"
                    onClick={() => scroll("left")}
                >
                    <ChevronLeft size={20} />
                </button>
                <button
                    className="bg-gray-400 p-2 rounded-full text-white shadow-md hover:bg-gray-900"
                    onClick={() => scroll("right")}
                >
                    <ChevronRight size={20} />
                </button>
            </div>

            {/* Slider Container */}
            <div className="relative overflow-scroll w-full sm:w-[90%] mx-auto">
                <div
                    ref={sliderRef}
                    className="flex gap-4 w-max overflow-x-scroll sm:overflow-x-auto"
                >
                    {data.map((item, index) => (
                        <div key={index} className="relative cursor-pointer group">
                            {/* Thumbnail */}
                            <img
                                src={item.img}
                                alt={item.title}
                                className="w-60 h-36 sm:w-72 sm:h-44 rounded-lg object-cover hover:opacity-80 transition"
                                onClick={() => setActiveVideo(item.url)}
                            />

                            {/* YouTube Icon - Centered */}
                            <div
                                onClick={() => setActiveVideo(item.url)}
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#38313153] p-3 rounded-full shadow-lg cursor-pointer transition group-hover:bg-[#7CCA9A]  group"
                            >
                                <Youtube size={22} className="text-white group-hover:text-[#00667C]" />
                            </div>

                            {/* Title */}
                            <p className="text-center mt-2 text-sm sm:text-base">{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Video Modal */}
            {activeVideo && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-80 z-50">
                    <div className="relative w-[90%] sm:w-[70%] lg:w-[50%]">
                        <button
                            className="absolute top-[-40px] right-[-15px] md:right-[-50px] bg-[#00667C] text-white p-2 rounded-full shadow-lg hover:bg-[#7CCA9A]"
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