import { FaGlobe } from "react-icons/fa";
import { PiHairDryer } from "react-icons/pi";
import YourNeeds from "./YourNeeds";
import MakeSensing from "./MakeSensing";


export default function IOTs() {
    return (
        <div className="w-full">
            <div className=" w-full md:w-11/12 mx-auto ">
                <div className=" flex gap-4 md:w-3/12 border-b-1 border-gray-500">
                        <div className="hover:text-blue-500 cursor-pointer text-xl flex justify-start items-center gap-1">
                            <FaGlobe/>
                            <span className=" font-semibold ">IoT </span>
                        </div>
                        <div className=" group hover:text-blue-500 cursor-pointer text-xl flex justify-start items-center gap-2">
                            <PiHairDryer className=" skew-8 group-hover:skew-2"/>
                            <span className=" font-semibold ">Video Survilence </span>
                        </div>
                </div>


                <YourNeeds/>
                <MakeSensing/>
            </div>
        </div>
    )
}
