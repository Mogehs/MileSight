import cars from '/IntelligentTrafficSol/shulter.png';

export default function GlobalShutter() {
    return (
        <div className="w-full sm:w-9/12 mx-auto mt-4 sm:mt-8 bg-white border border-gray-300 p-4 sm:p-6 rounded-md">

            <div className="flex flex-col md:flex-row-reverse gap-6 items-center">
                {/* Left: Image */}
                <div className="w-full md:w-1/2">
                    <img src={cars} alt="Global Shutter" className="w-full h-auto max-h-80 object-cover rounded-lg" />
                </div>

                {/* Right: Text Content */}
                <div className="w-full md:w-1/2 flex flex-col gap-3">
                    <p className="text-sm md:text-base">
                        <span className="font-bold text-[#00667C]">Global Shutter technology</span> enhances surveillance capabilities by ensuring comprehensive coverage with a high capture rate.
                        It maintains high-quality images and enables advanced event analysis while reducing the need for manual intervention, improving operational efficiency.
                    </p>
                </div>
            </div>
        </div>
    );
}
