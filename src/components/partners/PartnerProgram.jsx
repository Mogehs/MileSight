import DiscoverFea from "../solutions/PeoplCounting/DiscoverFea";


export default function PartnerProgram() {
    return (
        <div className=" w-full">
            <DiscoverFea bgimage={'/ChannelPartner/combine.png'} title={'Milesight Partner Program'} description={'Partner with Milesight, Be Better and Bigger Than Ever'} btn={'Become a partner'} />

            <div className=" flex p-2 flex-wrap relative w-full md:w-11/12 mx-auto items-center mt-4">
                <div className="w-full md:w-[50%] ">
                    <img src="/ChannelPartner/miles.png" alt="" className=" h-40 md:h-70 mx-auto rounded-lg" />
                </div>
                <div className=" bg-white p-2 md:p-7 rounded-md  md:absolute md:right-19 w-full md:w-[50%] shadow-md">
                    <p>Milesight Partner Program is designed to provide a flexible and valuable platformthat supports the profitable growth of our partners and distributors as well asprovides committed support that encompasses sales, marketing, and technical support.With the insights and expertise in industries of Internet of Things (IoT) and VideoSurveillance, our partners can access to a broad range of our products and servicesdesigned to help partners address challenges and outperform in the stiff competition</p>
                </div>
            </div>

            
        </div>
    )
}
