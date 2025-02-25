import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
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
            const { scrollLeft, clientWidth } = sliderRef.current;
            const scrollAmount = clientWidth / 2; // Scroll half screen width
            sliderRef.current.scrollTo({
                left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="relative w-full mx-auto mt-10">
            <h1 className="text-center text-2xl sm:text-4xl font-semibold mb-6">Future Video Technologies</h1>

            {/* Slider Container */}
            <div className="relative overflow-hidden w-full sm:w-[90%] mx-auto">
                <div
                    ref={sliderRef}
                    className="flex gap-4 w-max overflow-x-scroll scrollbar-hide scroll-smooth"
                >
                    {data.map((item, index) => (
                        <div key={index} className="relative cursor-pointer">
                            <img
                                src={item.img}
                                alt={item.title}
                                className="w-60 h-36 sm:w-72 sm:h-44 rounded-lg object-cover hover:opacity-80 transition"
                                onClick={() => setActiveVideo(item.url)}
                            />
                            <p className="text-center mt-2 text-sm sm:text-base">{item.title}</p>
                        </div>
                    ))}
                </div>

                {/* Navigation Buttons */}
                <button
                    className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-700 p-2 rounded-full text-white shadow-md hover:bg-gray-900"
                    onClick={() => scroll("left")}
                >
                    <ChevronLeft size={24} />
                </button>
                <button
                    className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-700 p-2 rounded-full text-white shadow-md hover:bg-gray-900"
                    onClick={() => scroll("right")}
                >
                    <ChevronRight size={24} />
                </button>
            </div>

            {/* Video Modal */}
            {activeVideo && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-80 z-50">
                    <div className="relative w-[90%] sm:w-[70%] lg:w-[50%]">
                        <button
                            className="absolute -top-4 -right-4 bg-red-600 text-white p-2 rounded-full shadow-lg hover:bg-red-800"
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
