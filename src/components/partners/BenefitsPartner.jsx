import { FaArrowsAlt, FaRegCalendarCheck } from "react-icons/fa";
import { FaHandHoldingHand } from "react-icons/fa6";
import { TbTargetArrow, TbWavesElectricity } from "react-icons/tb";

export default function BenefitsPartner() {
    const images = [
        {
            title: "Optimized Business Model",
            description: "Milesight maintains a channel-friendly environment with the aim of accelerating together, helping businesses expand and bringing partners to market faster with greater opportunity to drive business growth.",
            icon: [
                { icon: <FaArrowsAlt />, title: "Extended Business Potential" },
                { icon: <TbTargetArrow />, title: "Targeted Project Management" },
                { icon: <FaRegCalendarCheck />, title: "Incentivizing New Product Program" },
                { icon: <TbWavesElectricity />, title: "Agile Market Strategy" },
                { icon: <FaHandHoldingHand />, title: "Feasible Partnership Development" },
            ],
            img: "/ChannelPartner/growth.png"
        },
        {
            title: "All-around Enablement",
            description: "Milesight offers long-term and sustained support that encompasses sales, marketing, technical and training, enabling partners to yield more tangible opportunities in pre-sale and after-sale stages.",
            icon: [
                { icon: <FaArrowsAlt />, title: "Digital Backbone from Marketing Collateral" },
                { icon: <TbTargetArrow />, title: "Preeminent Marketing Connection" },
                { icon: <FaRegCalendarCheck />, title: "Sturdy Foundation of Technical Support" },
                { icon: <TbWavesElectricity />, title: "Product Academy" },
            ],
            img: "/ChannelPartner/caller.png"
        }
    ];

    return (
        <div className="w-full sm:mt-10">
            {/* Background Image Section */}
            <div
                className="relative p-7 min-h-[30vh] lg:min-h-[40vh] flex items-center bg-cover bg-center"
                style={{ backgroundImage: "url(/ChannelPartner/benefit.png)" }}
            >
                <h1 className="font-semibold text-xl text-white md:text-4xl">
                    Benefits of Partnering <br /> with Milesight
                </h1>
            </div>

            {/* Benefits Section */}
            <div className="w-full md:w-11/12 mx-auto bg-white rounded-md p-10 shadow-lg">
                {/* First Static Section */}
                <div className="flex flex-wrap gap-6 justify-between items-center border-b border-gray-300 py-5">
                    <div className="w-full md:w-5/12">
                        <h1 className="text-lg font-semibold">Extensive Product Portfolio</h1>
                        <p className="text-gray-600">
                            Milesight’s breadth of products, including hardware and software across industries of IoT and Video Security, ensures our partners remain competitive in the ever-changing market.
                        </p>
                    </div>
                    <div className="w-full md:w-5/12 flex justify-center">
                        <img src="/ChannelPartner/routers.png" alt="missing" className="max-w-full h-auto" />
                    </div>
                </div>

                {/* Second Static Section */}
                <div className="w-full mx-auto md:w-11/12 py-3">
                    <h1 className="text-lg font-semibold">Incremental Technology Innovations</h1>
                    <p className="text-gray-600">
                        Milesight's strong R&D strength further helps partners to develop their competitive edge through the ability to introduce innovative products and address both hardware and software needs, deliver unmatched global reach, and maximize business potential.
                    </p>
                </div>

                {images.map((item, index) => (
                    <div key={index} className={`flex flex-wrap items-center gap-6 py-8 md:w-11/12 mx-auto ${index % 2 === 0 ? "flex-row" : ""}`}>
                        {/* Left Content Section */}
                        <div className="w-full md:w-6/12">
                            <h1 className="text-xl font-bold">{item.title}</h1>
                            <p className="text-gray-600 mt-2">{item.description}</p>

                            {/* Icons List */}
                            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
                                {item.icon.map((i, idx) => (
                                    <div key={idx} className="flex flex-row lg:flex-col lg:border-r-1 border-gray-500  gap-2">
                                        <span className="text-gray-600 text-lg">{i.icon}</span>
                                        <p className="text-gray-700 text-xs">{i.title}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Image Section */}
                        <div className="w-full md:w-5/12 flex justify-center">
                            <img src={item.img} alt="benefit-img" className="max-w-full h-auto rounded-lg shadow-md" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
