import cars from '/IntelligentTrafficSol/frameparity.png'

export default function FrameParity() {
    return (
        <div className=" w-full sm:w-9/12 mx-auto mt-4 sm:mt-8 bg-white border border-[#615e5e62] p-3 rounded-md" style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 29% 98%, 27% 74%, 0% 75%);' }}>

                <div className="flex gap-4" >
                    <div className="w-full px-2 md:w-2/4  flex flex-col gap-2">
                        <p className=" font-stretch-ultra-expanded"><span className="font-bold">Frame Parity Flashing technology</span> means the cameras take several images of the vehicle with different illumination levels, and the system will then automatically <span className="text-blue-400">select the best image for ANPR processing</span>. lt ensures clear capture of the vehicle body and license plate (reflective &amp; non-reflective plates). Two different intensities of the built-in illumination may be defined for the even/odd frames.</p>
                    </div>
                    <div className="w-full sm:w-2/4">
                        <img src={cars} alt="cars" className="w-full h-full object-cover rounded-lg" />
                    </div>
                </div>
        </div>
    )
}
