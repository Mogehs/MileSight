
export default function BenefitTech() {
    const benefits = [
        {
            img: '/partners/partner-program/part1.png', title: "Accelerate deployment and project go-to-market", description: "Build integrations easily with the Milesight integration platform. Tap into its open architecture and extensive capabilities, ensuring smooth interoperability and delivering the combined benefits for end users."
        },
        {
            img: '/partners/partner-program/part2.png', title: "Leverage collective innovation and complementary expertise", description: "Leveraging the collective expertise and specialized knowledge of technology partners to deliver comprehensive and cutting-edge solutions that address specific industry challenges."
        },
        {
            img: '/partners/partner-program/part3.png', title: "Elevate global visibility and customer reach", description: "Amplifying market visibility and expanding reach through joint marketing efforts, increasing brand exposure, and accessing new customers for mutual business growth."
        },
    ]
    return (
        <div className=" w-full mt-4 sm:mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full sm:w-11/12 mx-auto sm:mt-8 mt-4">
                {
                    benefits.map((benefit, index) => (
                        <div key={index} className=" bg-white shadow-lg rounded-lg p-4 m-4">
                            <img src={benefit.img} alt="" className="w-full mx-auto border-2 border-[#00657c76]" />
                            <h1 className="text-md sm:text-xl text-[#00667C] font-bold mt-2  mb-2">{benefit.title}</h1>
                            <p className=" text-[#7CCA9A]">{benefit.description}</p>
                        </div>
                    ))
                }
            </div>


            {/* Partners tech */}

            <div className=" mb-10 sm:h-[30rem]" style={{ background: `url('/partners/partner-program/bg.jpg')`, backgroundSize: 'cover', backgroundPosition: '50%' }}>
                <div className=" flex flex-wrap justify-center items-center w-full h-[100%]">
                    <div className=" sm:w-5/12 flex flex-col justify-center p-5 h-full items-start">
                        <h1 className=" mb-2 text-xl font-semibold text-[#00667C] sm:text-3xl">Technology Partner Types</h1>
                        <p className=" text-[#7CCA9A]">We work with technology partners to increase the compatibility of Milesight products with VMS, network connectivity, software applications, platforms, and more</p>
                    </div>

                    <div className=" relative  w-full sm:w-6/12 flex flex-col justify-center p-5  h-full gap-6 sm:h-[50%] items-start">
                        <div className=" sm:absolute sm:top-0 sm:w-5/12  w-8/12 flex rounded-md justify-between p-2 text-[#7CCA9A] bg-[#00667C]">
                            <span>VMS/Cloud Partners</span>
                            <input type="radio" name="nn" id="" />
                        </div>
                        <div className=" sm:absolute sm:top-20 sm:right-4 w-8/12 sm:w-5/12 flex rounded-md justify-between p-2 text-[#7CCA9A] bg-[#00667C]">
                            <span>Alliance Partners</span>
                            <input type="radio" name="nn" id="" />
                        </div>
                        <div className=" sm:absolute sm:bottom-0 left-3  w-8/12 sm:w-5/12 flex rounded-md justify-between p-2 text-[#7CCA9A] bg-[#00667C]">
                            <span>IoT Platform Partners</span>
                            <input type="radio" name="nn" id="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
