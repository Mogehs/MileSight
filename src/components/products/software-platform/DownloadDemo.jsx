
import mouse from '/TrafficIntelecence/mouse.png'
export default function DownloadDemo({ name, desrip }) {

    return (
        <div className="w-full mt-3 sm:mt-0">
            <div className="sm:w-7/12 mx-auto w-full mt-3 sm:mt-8">
                <div className="  p-3">
                    <div className=" w-full flex gap-2 flex-col items-center justify-center">
                        <h1 className=" font-semibold text-xl text-center sm:text-3xl">{name}</h1>
                        <p className=" text-gray-700">{desrip}</p>
                        <div className="flex flex-wrap justify-center gap-3">
                            <div className="relative group">
                                <button className="p-3 sm:px-10 px-6 bg-white border border-gray-400 text-gray-700 rounded-md cursor-pointer transition-all hover:bg-gray-100">
                                    Download
                                </button>
                                <img
                                    src={mouse}
                                    alt=""
                                    className="absolute bottom-[-30px] right-0 sm:h-[30px] h-[20px] transition-all ease-in-out duration-200 group-hover:bottom-0 opacity-0 group-hover:opacity-100"
                                />
                            </div>
                            <div className="relative group">
                                <button className="p-3 sm:px-10 px-6 bg-white border border-gray-400 text-gray-700 rounded-md cursor-pointer transition-all hover:bg-gray-100">
                                    Online Demo
                                </button>
                                <img
                                    src={mouse}
                                    alt=""
                                    className="absolute bottom-[-30px] right-0 sm:h-[30px] h-[20px] transition-all ease-in-out duration-200 group-hover:bottom-0 opacity-0 group-hover:opacity-100"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
