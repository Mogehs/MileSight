import camera from '/VideoSurivilence/camera.png'
import cam from '/VideoSurivilence/cam.png'
import vandal from '/VideoSurivilence/vandal.png'
import statics from '/VideoSurivilence/static.png'

export default function MiniSeries({ filter }) {
    const camerAray = [
        { name: "AI Motorized Dome Camera", img: camera, category: "Mini" },
        { name: "AI Motorized Bullet Camera", img: cam, category: "Mini" },
        { name: "AI Vandal-proof Mini Dome Camera", img: vandal, category: "Mini" },
        { name: "AI Vandal-proof Mini Bullet Camera", img: statics, category: "Mini" },
        { name: "AI Weather proof Mini Dome Camera", img: camera, category: "Mini" },
        { name: "AI Weather proof Mini Bullet Camera", img: cam, category: "Mini" },
        { name: "AI IR Mini Dome Camera", img: vandal, category: "Mini" },
        { name: "AI Color+ Vandal-proof Mini Bullet Camera", img: statics, category: "Mini" }
    ];

    const filteredCameras = filter
        ? camerAray.filter(item => item.category === filter)
        : camerAray;
    return (
        <div className="w-full sm:mt-5">
            <div className="sm:w-[90%] mx-auto w-full">
                <span className="text-gray-500 mb-3 mt-3">Entry-level · Compact · Stylish</span>

                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-3">
                    {filteredCameras.length > 0 ? (
                        filteredCameras.map((item, index) => (
                            <div
                                className="p-2 transition-all ease-in delay-100 hover:shadow hover:shadow-blue-200 cursor-pointer h-[150px] sm:flex sm:flex-col sm:justify-start flex flex-row-reverse justify-center sm:border-0 items-center sm:w-full sm:m-0 w-[30rem] mx-auto border mb-3"
                                key={index}
                            >
                                <span className="text-xs mb-2">{item.name}</span>
                                <img
                                    src={item.img}
                                    alt=""
                                    className="transition-all ease-in-out delay-400 h-[100px] w-[150px] sm:h-[100px] hover:translate-x-20 sm:w-[200px]"
                                />
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-400 col-span-full text-center">
                            No products found for {filter}
                        </p>
                    )}

                </div>
                    <p className=' underline text-center mt-4 cursor-pointer' >View All Products</p>
            </div>
        </div>
    )
}
