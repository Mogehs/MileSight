import { useState, useEffect } from "react";
import quality from "/IaqAdvanced/quality.png";
import bg from "/IaqAdvanced/iaqbg.jpg";

export default function Bouncing() {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => setIsSmallScreen(window.innerWidth < 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const bounce = [
        {
            img: quality,
            title2: "Harford Community College(HCC) in United States",
            blue: "IAQ Monitoring in 20 Educative Buildings",
            since: "Since 1957, Harford Community College (HCC) has been providing essential university-level core curriculum studies along with vocational trade instruction for area residents. The main campus occupies 352 acres near Bel Air, Maryland, and has 24 buildings totaling approximately 372,525 square feet. With indoor air quality monitoring, HCC could obtain the verifiable data to demonstrate for all its stakeholders that the IAQ in all HCC facilities was being maintained at safe levels.",
            watch: "Watch Interview Video",
        },
    ];

    return (
        <div className="h-full w-full bg-cover md:px-0 py-10 mt-10 px-10" style={{ background: `url(${bg})` }}>
            <div className="w-full sm:w-11/12 mx-auto">
                <div className="text-center text-white flex flex-col gap-3">
                    <h1 className="text-xl md:text-2xl font-semibold">
                        Bouncing Back to Secured Study through CO<sub>2</sub> Detection
                    </h1>
                    <p className="text-xs">School IAQ Solution Success Stories Worldwide</p>
                    <p className="text-xs">
                        Educational stages. Check how we can help you to smash stale or polluted air adversely.
                    </p>
                </div>
                <div className="mt-2 md:mt-8">
                    {bounce.map((item, ind) => (
                        <div key={ind} className="w-full  mx-auto md:w-[70%] flex justify-center relative">
                            <img
                                src={item.img}
                                alt=""
                                className="w-full h-full object-cover rounded-md shadow shadow-gray-400"
                            />
                            <div className="md:w-[80%] lg:w-[50%] mx-6 absolute top-0 left-0">
                                <h1 className="text-xs md:text-md lg:text-lg font-semibold mt-2 text-black">
                                    {item.title2}
                                </h1>
                                <p className="lg:text-lg text-xs text-blue-500">{item.blue}</p>
                                <p className="text-xs md:text-md text-gray-500 mt-2">
                                    {isSmallScreen ? item.since.slice(0, 100) + "..." : item.since}
                                </p>
                                <button className="text-xs lg:text-lg rounded-2xl bg-blue-500 text-white px-4 py-2 mt-2 scale-[0.9] transform transition-all ease-in delay-100 hover:scale-[1] cursor-pointer">
                                    {item.watch}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
