import { FaTemperatureLow, FaWater } from "react-icons/fa";
import { IoIosMore } from "react-icons/io";
import { LuUserRound } from "react-icons/lu"
import { MdAir, MdDirectionsRun, MdSocialDistance } from "react-icons/md"
import { MdOutlineQrCodeScanner } from "react-icons/md";



export default function SenseRecongnize() {
    const data=[
        {
            icon:<MdAir/>,title:"Indoor Air Quality Monitoring"
        },
        {
            icon:<LuUserRound/>,title:"Occupancy and People Counting"
        },
        {
            icon:<MdOutlineQrCodeScanner />
            ,title:"License Plate Recognition"
        },
        {
            icon:<MdDirectionsRun/>,title:"Motion Detection"
        },
        {
            icon:<FaWater/>,title:"Water Leak Detection"
        },
        {
            icon:<MdSocialDistance />
            ,title:"Distance Detection"
        },
        {
            icon:<FaTemperatureLow/>,title:"Temperature and Humidity Monitoring"
        },
        {
            icon:<IoIosMore/>,title:"And more"
        },
    ]
    return (
        <div className=" w-full md:w-9/12 mx-auto mb-10">
            <div className=" text-center ">
                <p className=" text-blue-500 font-thin">Multi-potential Sensing Products</p>
                <h1 className=" md:text-3xl font-semibold text-xl">We Sense What Matters</h1>
                <p className=" mt-2 text-gray-500">
                    Recognizing the value of data in today's digitized world, Milesight has evolved beyond our initial roots. Now, we cater to the increasing demand for reliable data with our multi-potential sensing products. We believe in the power of relevant, purposeful sensing, focusing on the data that adds value, reflects patterns, and assists decision-making.
                </p>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center gap-4 mt-10">
                        {
                            data.map((item,index)=>(
                                <div key={index} className="bg-white flex justify-center flex-col items-center border md:border-0 md:w-full md:mx-0 w-[200px] mx-auto p-4  md:border-r-1 md:border-gray-400 md:border-b-1 ">
                                    <div className="text-xl md:text-2xl">
                                        {item.icon}
                                    </div>

                                    <h1 className="text-xl md:text-xl font-semibold mt-2">{item.title}</h1>
                                    <hr className=" bg-cy"/>
                                </div>
                            ))
                        }
                        
                    </div>

            </div>
        </div>
    )
}
