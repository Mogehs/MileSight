import AdvetiseComp from "./AdvetiseComp";


export default function Integration() {
    return (
        <div className=" w-full h-fit mt-4 sm:mt-10">
            <div className=" flex justify-center flex-col items-center gap-3 w-full sm:w-11/12 mx-auto">
                <h1 className=" font-semibold text-2xl sm:text-4xl">Integration</h1>
                <p className="">Milesight cameras seamlessly integrate with third-party VMS via ONVIF, meeting ONVIF Profiles G, M, S, and T standards for broad interoperability.</p>
            </div>

            <div className=" sm:mt-7 mt-4">
                <AdvetiseComp />
            </div>

            <p className=" underline cursor-pointer text-center text-xs sm:text-xl">View All Partners</p>

        </div>
    )
}
