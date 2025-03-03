import cars from '/IntelligentTrafficSol/frameparity.png';

export default function FrameParity() {
    return (
        <div className="w-full sm:w-9/12 mx-auto mt-4 sm:mt-8 bg-white border border-gray-300 p-4 sm:p-6 rounded-md">

            <div className="flex flex-col md:flex-row-reverse gap-6 items-center">
                {/* Left: Image */}
                <div className="w-full md:w-1/2">
                    <img src={cars} alt="Frame Parity" className="w-full h-auto max-h-80 object-cover rounded-lg" />
                </div>

                {/* Right: Text Content */}
                <div className="w-full md:w-1/2 flex flex-col gap-3">
                    <p className="text-sm md:text-base">
                        <span className="font-bold text-[#00667C]">Frame Parity Flashing technology</span> means the cameras take several images of the vehicle with different illumination levels, and the system will then automatically
                        <span className="text-[#7CCA9A]"> select the best image for ANPR processing</span>.
                        It ensures clear capture of the vehicle body and license plate (reflective &amp; non-reflective plates).
                        Two different intensities of the built-in illumination may be defined for the even/odd frames.
                    </p>
                </div>
            </div>
        </div>
    );
}
