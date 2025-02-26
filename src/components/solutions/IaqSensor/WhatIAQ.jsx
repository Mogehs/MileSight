export default function WhatIAQ() {
    const data = [
        {
            title: "What is IAQ?",
            app: "Applications & Success Stories",
            prod: "Products",
            well: "Works with WELL",
            download: "Download",
            home: "Home",
            solution: "Solution",
            iaq: "IAQ"
        }
    ];

    return (
        <div className="w-full">
            <div className="w-full sm:w-11/12 mx-auto">
                <div className="flex justify-between items-center gap-2">
                    {
                        data.map((item,ind)=>(
                            <div key={ind} className=" w-full flex justify-between ">
                                <div className="flex justify-around gap-4 md:w-[70%]">
                                    <h1 className=" text-xs md:text-xl  text-gray-700">{item.title}</h1>
                                    <h1 className=" text-xs md:text-xl  text-gray-700">{item.app}</h1>
                                    <h1 className=" text-xs md:text-xl  text-gray-700">{item.prod}</h1>
                                    <h1 className=" text-xs md:text-xl  text-gray-700">{item.well}</h1>
                                    <h1 className=" text-xs md:text-xl  text-gray-700">{item.download}</h1>
                                </div>
                                <div className=" flex flex-wrap w-full gap-2 md:w-[20%]">
                                    <h1 className=" text-xs md:text-xl text-gray-700">{item.home}</h1>
                                    <h1 className=" text-xs md:text-xl text-gray-700">{item.solution}</h1>
                                    <h1 className=" text-xs md:text-xl text-gray-700">{item.iaq}</h1>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}
