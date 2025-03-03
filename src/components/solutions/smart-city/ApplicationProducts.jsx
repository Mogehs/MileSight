import { useEffect, useState } from "react";

const sections = [
  {
    id: 1,
    title: "Modern Architecture",
    description: "Exploring the intersection of form and function in contemporary design.",
    image: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba",
  },
  {
    id: 2,
    title: "Modern Architecture",
    description: "Exploring the intersection of form and function in contemporary design.",
    image: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba",
  },
];

export default function ApplicationProducts() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    const index = Math.round(window.scrollY / window.innerHeight);
    setActiveIndex(index);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (index) => {
    window.scrollTo({
      top: index * window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-neutral-950 text-white overflow-hidden scroll-container h-screen overflow-y-auto">
      {sections.map((section, index) => (
        <section key={section.id} className="scroll-section relative h-screen flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden group shine-effect">
            <img
              src={section.image}
              alt="Architectural detail"
              className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:rotate-1"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/70 to-neutral-950/50 transition-opacity duration-500 group-hover:opacity-0"></div>
          </div>
          <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center p-8 bg-neutral-950">
            <div className="max-w-lg float-animation">
              <span className="text-neutral-400 tracking-wider text-sm font-mono">{section.id} / VISION</span>
              <h2 className="mt-4 text-5xl md:text-7xl font-bold leading-none bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
                {section.title}
              </h2>
              <p className="mt-6 text-neutral-400 text-lg leading-relaxed">{section.description}</p>
              <button className="mt-8 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-full text-sm font-medium transition-all duration-300 hover:tracking-wider">
                Explore More →
              </button>
            </div>
          </div>
        </section>
      ))}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50">
        {sections.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToSection(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeIndex === index ? "bg-white scale-150" : "bg-white/20 hover:bg-white hover:scale-150"
            }`}
            title={`Go to section ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
}
