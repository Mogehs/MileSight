import { FaLightbulb, FaRocket } from "react-icons/fa";
import { FiTrendingUp } from "react-icons/fi";

export default function YourNeeds() {
    const data = [
        {
            title: "A new method for people counting",
            description: "You have challenges and demands. We have the technology, the expertise, and the commitment to create a product that just works for it.",
            icon: <FaLightbulb className="text-white text-2xl" />,
            img: "/Ourbrand/blue.png"
        },
        {
            title: "Faster in responding and acting",
            description: "We brought every update to the market in the fastest possible way, basically one update a month. That's as frequent as a SaaS product.",
            icon: <FaRocket className="text-white text-2xl" />,
            img: "/Ourbrand/black.png"
        },
        {
            title: "Faster in responding and acting",
            description: "We brought every update to the market in the fastest possible way, basically one update a month. That's as frequent as a SaaS product.",
            icon: <FiTrendingUp className="text-white text-2xl" />,
            img: "/Ourbrand/green.png"
        },
    ];

    return (
        <div className="w-full p-4">
            <div className="md:w-12/12 mx-auto mt-4">
                <h1 className="text-lg md:text-2xl font-semibold">Your needs are our blueprint</h1>
                <p className="text-gray-500">Milesight Occupancy and People Counting Sensor Series</p>
            </div>


            <div className="flex flex-wrap justify-around gap-6 mt-6">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="relative w-full sm:w-82 h-64 bg-cover bg-center rounded-xl shadow-lg overflow-hidden p-6"
                        style={{ backgroundImage: `url(${item.img})` }}
                    >
                        <h2 className="text-white text-2xl font-semibold">{item.title}</h2>
                        <p className="text-white text-md mt-2">{item.description}</p>
                        <div className="absolute bottom-4 right-4">
                            {item.icon}
                        </div>
                    </div>
                ))}
            </div>


            <div className=" w-full mt-2">
                <div className=" flex justify-start items-center ">
                    <img src="/Ourbrand/bumb.png" alt="" />
                    <h1 className=" text-md md:text-xl mb-10">After the launch of VS133, it has experienced several updates quite frequently. Why this approach? And how?</h1>
                </div>
                <div className="flex flex-col-reverse mt-10 md:flex-row flex-wrap justify-between items-center gap-6">

                    <div className="md:w-[50%] text-gray-800 leading-relaxed p-4">
                        <p>
                            <b>Customer success is our success</b>. We aim to tailor our product to suit different projects and their specific needs. Apart from high accuracy, the retail industry had many nuanced demands like staff detection and distinguishing adults from children. Balancing these requests while staying nimble was challenging.
                        </p>
                        <p>
                            <b>Our answer is to prioritize what matters the most</b>. We evaluated various features and researched their applications in the context of the customers' goals. The most practical and useful ones became our top priorities. Then, we started to release updates.
                        </p>
                        <p>
                            So far, we've established ourselves as <b>the leading provider of people counting sensors in the retail sector</b>. When our products improve and meet their needs, our customers trust and invest more in us, which fuels further innovation. This is what we call <b>“value-oriented”</b>.
                        </p>
                    </div>

                    <div
                        className="relative w-full md:w-[40%] h-48 md:h-64 p-3 flex items-center justify-center bg-cover bg-center"
                        style={{ backgroundImage: "url(/Ourbrand/arrow.png)" }}
                    >
                        <img
                            src="/Ourbrand/industry.png"
                            alt="Industry"
                            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full md:w-80 max-h-60 md:max-h-80"
                        />
                    </div>
                </div>

            </div>
        </div>
    );
}
