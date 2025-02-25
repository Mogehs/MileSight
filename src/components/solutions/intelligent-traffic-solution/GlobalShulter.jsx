import cars from '/IntelligentTrafficSol/shulter.png'

export default function GlibalShulter() {
    return (
        <div className="w-full sm:w-9/12 mx-auto mt-4 sm:mt-8 bg-white border border-[#615e5e62] p-3 rounded-md" style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 29% 98%, 27% 74%, 0% 75%);' }}>

            <div className="flex gap-4">
                <div className="w-full px-2 md:w-2/4 flex flex-col gap-2">
                    <p className="font-stretch-ultra-expanded">
                        <span className="font-bold">Global Shutter technology</span> enhances surveillance capabilities by ensuring comprehensive coverage with a high capture rate. It maintains high-quality images and enables advanced event analysis while reducing the need for manual intervention, improving operational efficiency.
                    </p>
                </div>
                <div className="w-full sm:w-2/4">
                    <img src={cars} alt="cars" className="w-full h-full object-cover rounded-lg" />
                </div>
            </div>

        </div>
    )
}
