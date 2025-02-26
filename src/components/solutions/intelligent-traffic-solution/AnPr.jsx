import cars from '/IntelligentTrafficSol/cams.png'

export default function ANPR() {
    return (
        <div className=" w-full sm:w-9/12 mx-auto mt-4 sm:mt-8 bg-white border border-[#615e5e62] p-3 rounded-md">

                <div className="flex flex-col md:flex-row justify-between gap-4" >
                    <div className="w-full px-2 md:w-2/4  flex flex-col gap-2">
                        <p>Up to 50m ANPR distance, precise recognition for ANPR processing within the range</p>
                        
                    </div>
                    <div className="w-full lg:w-2/4">
                        <img src={cars} alt="cars" className="w-full h-full object-cover rounded-lg" />
                    </div>
                </div>
        </div>
    )
}
