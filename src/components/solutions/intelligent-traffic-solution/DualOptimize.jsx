import cars from '/IntelligentTrafficSol/waves.png'

export default function DualOptimize() {
    return (
        <div className=" w-full sm:w-9/12 mx-auto mt-4 sm:mt-8 bg-white border border-[#615e5e62] p-3 rounded-md" style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 29% 98%, 27% 74%, 0% 75%);' }}>

                <div className="flex gap-4" >
                    <div className="w-full px-2 md:w-2/4  flex flex-col gap-2">
                        <p className=" font-stretch-ultra-expanded"><span className="font-bold">Optimize license plate identification</span> by utilizing our optional dual IR wavelengths (850nm and 740nm), enabling precise recognition across different contrast levels and lighting conditions. <br /><br />
                        <span className="">850nm IR Wavelength:</span> Ideal for High-contrast/ Non-reflective License Plate.<br />
                        <span className="">740nm IR Wavelength:</span> Ideal for Low-contrast/ Reflective License Plate.
                        </p>
                    </div>
                    <div className="w-full sm:w-2/4">
                        <img src={cars} alt="cars" className="w-full h-full object-cover rounded-lg" />
                    </div>
                </div>
        </div>
    )
}
