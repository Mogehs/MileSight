import { useState, useEffect } from "react";
import "./Hero.css";

const slides = [
  {
    img: "/iot-sensing/iot-img-1.jpg",
    title: "Digital Prism",
    description:
      "Where geometry meets art in a stunning display of light and form.",
    gradient: "from-violet-500/40 to-purple-500/40",
    type: "image", // Indicate the type of media
  },
  {
    img: "/iot-sensing/iot-img-2.jpg",
    title: "Digital Prism",
    description:
      "Where geometry meets art in a stunning display of light and form.",
    gradient: "from-violet-500/40 to-purple-500/40",
    type: "image", // Indicate the type of media
  },
  {
    video: "/iot-sensing/video1.mp4",
    title: "Tech Haven",
    description:
      "Immerse yourself in the cutting edge of technology and innovation.",
    gradient: "from-fuchsia-500/40 to-pink-500/40",
    type: "video",
  },
  {
    img: "/iot-sensing/iot-img-3.jpg",
    title: "Neural Dreams",
    description:
      "AI-generated masterpieces that blur the line between human and machine creativity.",
    gradient: "from-pink-500/40 to-rose-500/40",
    type: "image",
  },
  {
    img: "/iot-sensing/iot-img-4.png",
    title: "Neural Dreams",
    description:
      "AI-generated masterpieces that blur the line between human and machine creativity.",
    gradient: "from-pink-500/40 to-rose-500/40",
    type: "image",
  },
  {
    video: "/iot-sensing/video2.mp4",
    title: "Future Vision",
    description: "Exploring the world of tomorrow with AI-powered creativity.",
    gradient: "from-blue-500/40 to-indigo-500/40",
    type: "video",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden p-4 sm:p-8">
      {/* Carousel container */}
      <div className="relative w-full">
        {/* Navigation buttons */}
        <button
          className="nav-button absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center z-20 text-white bg-white/10 backdrop-blur-lg"
          onClick={prevSlide}
          title="Previous slide"
        >
          ❮
        </button>

        <button
          className="nav-button absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center z-20 text-white bg-white/10 backdrop-blur-lg"
          onClick={nextSlide}
          title="Next slide"
        >
          ❯
        </button>

        {/* Carousel track */}
        <div className="relative h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full transition-transform duration-500 ${
                index === currentSlide
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-90"
              }`}
            >
              <div className="w-full h-full overflow-hidden relative group">
                {slide.type === "image" ? (
                  <img
                    src={slide.img}
                    alt={slide.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <video
                    src={slide.video}
                    autoPlay
                    loop
                    muted
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                )}

                <div
                  className={`absolute inset-0 bg-gradient-to-br ${slide.gradient} mix-blend-overlay`}
                ></div>
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                  <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3">
                    {slide.title}
                  </h3>
                  <p className="text-gray-200 text-sm sm:text-base md:text-lg max-w-2xl">
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Indicators */}
        <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1 sm:gap-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-8 sm:w-12 h-1 sm:h-1.5 rounded-full transition-colors ${
                index === currentSlide
                  ? "bg-white/60"
                  : "bg-white/20 hover:bg-white/60"
              }`}
              title={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}
