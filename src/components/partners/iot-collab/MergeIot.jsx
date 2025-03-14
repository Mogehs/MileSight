import { useState } from "react";
import { arrayData, lastDiv, secondDiv, thirdDiv } from "./AllArrays";
import { MdKeyboardArrowDown } from "react-icons/md";
export default function MergeIot() {
    const [selectedIndex, setSelectedIndex] = useState(null);

    const handleClick = (index) => {
        setSelectedIndex(index === selectedIndex ? null : index);
    };


    return (
        <div className="w-full mt-10">
            <div className="w-full sm:w-11/12 mx-auto sm:mt-8 mt-4">
                <div className="flex flex-wrap gap-2">
                    {/* Items List */}
                    <div className="flex flex-col gap-4 w-full sm:w-3/12">
                        {arrayData.map((item, index) => (
                            <div
                                key={index}
                                className=" p-2 border border-[#00657c88] rounded-lg bg-[#00667c] hover:bg-[#b0e9c697] transition cursor-pointer"
                                style={{
                                    backgroundImage: item.img1 ? `url(${item.img1})` : "none",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    color: item.img1 ? "white" : "black",
                                }}
                                onClick={() => handleClick(index)}
                            >
                                <div className=" bg-opacity-50 p-4 rounded-lg">
                                    <h3 className="text-md font-semibold text-[#7cca9a] hover:text-[#00667C] ">{item.title}</h3>

                                </div>

                                {/* Show Description Only When Clicked */}
                                {selectedIndex === index && item.description && (
                                    <div className=" flex justify-center flex-col">
                                        <h4 className="text-md px-2 font-medium text-[#7CCA9A]">{item.subtitle}</h4>
                                        < p className="mt-2 text-sm text-[#00667C]  p-2 rounded-lg ">
                                            {item.description}
                                        </p>
                                    </div>

                                )}
                            </div>
                        ))}
                    </div>

                    <div className="w-full sm:w-8/12 border border-[#00657c88] p-4 rounded-lg ">

                        {/* first div */}
                        <div className=" w-full ">
                            <div className=" w-full sm:w-8/12">
                                <h1 className=" text-xl font-semibold text-[#00667C] sm:text-2xl">Make Sensing Matter</h1>
                            </div>
                            <div className="flex flex-wrap  mt-3 m">
                                <div className="w-full sm:w-7/12">
                                    <div className=" w-full  relative">
                                        <img src="/IotCollaboration/miles.jpg" className=" w-full rounded-md" alt="" />
                                        <h1 className="text-xs absolute p-2 top-0 text-[#c6e9d3]">milesight buildingMilesight—Leading Provider of Innovative loT Product</h1>
                                    </div>
                                    <div className=" flex flex-row flex-wrap mt-2 gap-1 mb-2">
                                        <button className="bg-[#00667C] hover:bg-[#7CCA9A] text-white py-1 px-6 rounded cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-1 text-xs">
                                            <a href="/contact" className=" ">Learn more about milesight</a>
                                        </button>
                                        <button className=" border border-[#00667C] hover:bg-[#00667c] text-[#7cca9a] py-1 px-6 rounded cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-1 text-xs">
                                            <a href="/contact">Learn more about our brand</a>
                                        </button>
                                    </div>
                                </div>
                                <div className=" w-full sm:w-4/12">
                                    <img src="/IotCollaboration/miles2.jpg" className=" h-full w-full rounded-md" alt="" />
                                </div>
                            </div>

                        </div>

                        {/* second div */}
                        <div className=" w-full mt-3">
                            <h1 className="text-xl font-semibold text-[#00667C] sm:text-2xl">Value-Driven Reasons to Join Forces</h1>
                            <div className=" w-full">
                                {
                                    secondDiv.map((item, index) => (
                                        <div key={index} style={{ backgroundImage: `url(${item.secondimg})`, backgroundSize: "100% 100%", backgroundPosition: "center" }} className="w-full h-auto lg:h-52 rounded-md mt-2 flex justify-center items-center">
                                            <div className=" w-full p-2">
                                                <h1 className="text-md  mb-2 font-semibold text-[#00667C]">{item.title}</h1>
                                                <p className="text-sm text-[#00667C] mb-4">{item.description}</p>
                                                <div className=" flex w-full flex-wrap gap-2 mt-2 sm:mt-4">
                                                    {
                                                        item.Chils.map((item, index) => (
                                                            <div key={index} className=" w-full sm:w-fit   p-2 rounded-md">
                                                                <h1 className="text-sm text-[#7CCA9A]">{item.nbr}</h1>
                                                                <p className="text-xs text-[#00667C]">{item.descrip}</p>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                        {/* third div */}
                        <div className="w-full mt-3">
                            <h1 className="text-xl mb-2 font-semibold text-[#00667C] sm:text-2xl">Thorough Teamwork - Efficient Support and Response Capability                            </h1>
                            <p className=" text-[#00667C] text-xs mb-3">Milesight, possesses robust delivery and supply capabilities, has a professional team that offers expert support to clients from business opportunities to project completion, and proactively creates value from market opportunities</p>
                            <div className=" w-full mt-3" >
                                {
                                    thirdDiv.map((item, index) => (
                                        <div key={index} className="w-full p-3 flex flex-wrap bg-[#E9F0FA]">
                                            <div className=" w-full sm:w-6/12" >
                                                <img src={item.img} />
                                            </div>
                                            <div className=" bg-white p-1 flex flex-col gap-2 w-full sm:w-6/12">
                                                {
                                                    item.descrip.map((item, index) => (
                                                        <div key={index} className=" w-full p-2 rounded-md">
                                                            <p className="text-xs text-[#00667C]">{item.descripData}</p>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                        {/* fourth div */}
                        <div className="w-full mt-3">
                            <h1 className="text-xl mb-2 font-semibold text-[#00667C] sm:text-2xl">Far-Sighted Marketing Strategy - Rapid Interests Expansion
                            </h1>
                            <p className=" text-[#00667C] text-xs mb-3">Capable of generate effective strategies and directions based on market insights, swiftly responding to market dynamics to achieve impactful development and implementation, and continuously enhancing market share and influence.</p>

                            <button className="bg-[#00667C] hover:bg-[#7CCA9A] text-white py-1 px-6 rounded cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-1">
                                <span>Deployed Projects</span>
                            </button>
                            <div className=" mt-2 w-full">
                                <img src="/IotCollaboration/pre.png" alt="" />
                            </div>
                        </div>

                        {/* fifth div */}
                        <div className="w-full mt-3">
                            <h1 className="text-xl mb-2 font-semibold text-[#00667C] sm:text-2xl">Thriving Business Ecosystem - Efficient Empowerment
                            </h1>
                            <p className=" text-[#00667C] text-xs mb-3">In a remarkably short span of time, Milesight has fostered close collaborations with ecosystem partners by participating in industry exhibitions, promoting deep compatibility and technical development, and sharing collaborative opportunities.</p>
                            <div className=" flex items-center flex-wrap mt-2">
                                <div className="w-full sm:w-4/12">
                                    <img src="/IotCollaboration/add1.png" alt="" />
                                </div>
                                <div className="w-full sm:w-4/12">
                                    <img src="/IotCollaboration/add2.png" alt="" />
                                </div>
                                <div className="w-full sm:w-4/12">
                                    <img src="/IotCollaboration/add3.png" alt="" />
                                </div>
                            </div>
                        </div>

                        {/* sixth div */}
                        <div className="w-full mt-3">
                            <h1 className="text-xl mb-2 font-semibold text-[#00667C] sm:text-2xl">Mutually Beneficial Collaboration
                            </h1>
                            <h1 className=" text-md font-semibold text-[#00667C] mb-2 sm:text-xl">Win-win Channel Collaboration- Long-Term and Healthier Relationship</h1>
                            <p className=" text-[#00667C] text-xs mb-3">To ensure mutual benefits for both Milesight and its customers, Milesight establishes a more robust and value-enhancing channel management network. Given the current state of the IoT industry, the ASP collaboration model is introduced for vertical industries.</p>
                            <p className="text-[#7CCA9A]">Project Protection </p>
                            <div className="w-full">
                                <img src="/IotCollaboration/mutual.png" alt="" />
                            </div>
                        </div>

                        {/* seventh div*/}
                        <div className="w-full mt-3">
                            <h1 className="text-xl mb-2 font-semibold text-[#00667C] sm:text-2xl">Application Empowerment - Adaptable to Diverse Positioning
                            </h1>
                            <div className=" flex justify-evenly flex-wrap ">
                                <div className="w-full flex justify-center items-center flex-col p-3 border mb-2 border-[#00657c9f] sm:w-5/12 bg-[#ffffffb5] rounded-md hover:bg-[#7cca9a3f] cursor-pointer gap-2">
                                    <span>For System Integrator</span>
                                    <span className=" px-4 py-1 rounded-3xl bg-[#00667C] text-white">
                                        <MdKeyboardArrowDown />
                                    </span>
                                </div>
                                <div className="w-full flex justify-center items-center flex-col p-3 border mb-2 border-[#00667c] sm:w-5/12 bg-[#ffffffb5] rounded-md hover:bg-[#7cca9a3f] cursor-pointer gap-2">
                                    <span>  For Distributor or Solution Provider</span>
                                    <span className=" px-4 py-1 rounded-3xl bg-[#00667C] text-white">
                                        <MdKeyboardArrowDown />
                                    </span>
                                </div>
                            </div>
                            <div className="w-full">
                                <img src="/IotCollaboration/distribution.png" alt="" />
                            </div>
                            <p className=" text-[#7CCA9A] text-xl font-semibold mb-3">More for You  </p>
                            <div className="w-full">
                                <img src="/IotCollaboration/routes.png" alt="" />
                            </div>
                        </div>

                        {/* eight div */}
                        <div className="w-full mt-3">
                            <h1 className="text-xl mb-2 font-semibold text-[#00667C] sm:text-2xl">Make It More Visionary
                            </h1>
                            <h1 className=" text-md font-semibold text-[#00667C] mb-2 sm:text-xl">Product Application Matrix - Comprehensive and professional Offering</h1>
                            <p className=" text-[#00667C] text-xs mb-3">There are few vendors in the market that can simultaneously offer both a rich variety of products and professional expertise. Milesights one-stop service meets diverse needs and empowers various applications.</p>
                            <div className="w-full">
                                <img src="/IotCollaboration/circle.png" alt="" />
                            </div>
                        </div>

                        {/* nine div */}
                        <div className=" w-full mt-3">
                            <h1 className="text-xl font-semibold text-[#00667C] sm:text-2xl">People Sensing Driven Smart Building - Informed Sensing Insights
                            </h1>
                            <div className=" rounded-md mt-2 sm:mt-4 h-40 sm:h-50 flex flex-col items-start justify-center px-4 " style={{ backgroundImage: `url(/IotCollaboration/building.jpg)`, backgroundSize: "100% 100%", backgroundPosition: "center" }}>
                                <h1 className=" text-2xl  font-semibold text-[#00667C] sm:text-3xl">People Sensing Driven <br /> <span className=" text-[#7CCA9A]">Smart Building</span>
                                </h1>
                            </div>
                        </div>

                        {/* tenth div */}
                        <div className="w-full mt-3">
                            <h1 className="text-xl font-semibold text-[#00667C] sm:text-2xl">Start the Collaboration with the iBox Kits</h1>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6 mt-3">
                                {lastDiv.map((item, index) => (
                                    <div
                                        key={index}
                                        className="bg-white shadow-lg rounded-lg overflow-hidden transition hover:shadow-xl p-3"
                                    >
                                        <div className="bg-[#00667C] p-2 rounded-lg ">
                                            <h3 className="text-md font-semibold text-[#7CCA9A]">{item.title}</h3>
                                        </div>
                                        <span className="text-sm text-[#00667C] font-medium block mt-1">
                                            {item.subtitle}
                                        </span>
                                        <img src={item.img} alt={item.title} className="w-full h-40 object-cover" />

                                        {/* Content */}
                                        <div className="p-2">
                                            <ul className="mt-3 flex flex-wrap gap-2 text-sm text-gray-700">
                                                {item.Data.map((device, i) => (
                                                    <li key={i} className="flex items-center flex-wrap gap-2">
                                                        <span className="w-2 h-2 bg-[#00667C] rounded-full"></span> {device}
                                                    </li>
                                                ))}
                                            </ul>
                                            <p className="text-xs text-gray-500 mt-3 italic">{item.descrip}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}
