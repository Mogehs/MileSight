import cars from '/IntelligentTrafficSol/waves.png';

export default function DualOptimize() {
    return (
        <div className="w-full sm:w-9/12 mx-auto mt-4 sm:mt-8 bg-white border border-gray-300 p-4 sm:p-6 rounded-md">

            <div className="flex flex-col md:flex-row-reverse gap-6 items-center">
                {/* Left: Image */}
                <div className="w-full md:w-1/2">
                    <img src={cars} alt="Dual IR Wavelengths" className="w-full h-auto max-h-80 object-cover rounded-lg" />
                </div>

                {/* Right: Text Content */}
                <div className="w-full md:w-1/2 flex flex-col gap-3">
                    <p className="text-sm md:text-base">
                        <span className="font-bold text-[#00667C]">Optimize license plate identification</span> by utilizing our optional dual IR wavelengths (850nm and 740nm), enabling precise recognition across different contrast levels and lighting conditions.
                    </p>
                    <p className="text-sm md:text-base">
                        <span className="font-bold text-[#00667C]">850nm IR Wavelength:</span> Ideal for high-contrast/non-reflective license plates.
                    </p>
                    <p className="text-sm md:text-base">
                        <span className="font-bold text-[#00667C]">740nm IR Wavelength:</span> Ideal for low-contrast/reflective license plates.
                    </p>
                </div>
            </div>
        </div>
    );
}
