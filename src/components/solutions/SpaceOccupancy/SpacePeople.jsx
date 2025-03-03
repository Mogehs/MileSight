import Comprehensive from "../PeoplCounting/Comprehensive";
import DiscoverFea from "../PeoplCounting/DiscoverFea";
import FormSection from "../smart-restroom/FormSection";
import BeneFits from "./BeneFits";
import SpaceOcupencies from "./SpaceOcupencies";
import SuperiorHighlight from "./SuperiorHighlight";
import TypicalApplication from "./TypicalApplication";

// Scroll to Section Function
const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function SpacePeople() {
    const data = [
        {
            title: "Space Occupancy", id: "space-occupancy",
            child: "Typical Application", childId: "typical-application",
            high: "Highlight", highId: "highlight",
            advan: "Benefit", advanId: "benefit",
            pr: "Products", prId: "products"
        }
    ];

    return (
        <>
            <div className="flex flex-wrap justify-between items-center gap-2 w-full mx-auto lg:w-11/12">
                <div className="flex flex-wrap gap-2 w-full p-2 md:w-8/12">
                    {data.map((item, index) => (
                        <div key={index} className="flex gap-10 items-center flex-wrap justify-around">
                            <h1 className="text-center cursor-pointer text-[#00667C] hover:text-[#7CCA9A]" onClick={() => handleScroll(item.id)}>
                                {item.title}
                            </h1>
                            <p className="text-center cursor-pointer text-[#00667C] hover:text-[#7CCA9A]" onClick={() => handleScroll(item.childId)}>
                                {item.child}
                            </p>
                            <p className="text-center cursor-pointer text-[#00667C] hover:text-[#7CCA9A]" onClick={() => handleScroll(item.highId)}>
                                {item.high}
                            </p>
                            <p className="text-center cursor-pointer text-[#00667C] hover:text-[#7CCA9A]" onClick={() => handleScroll(item.advanId)}>
                                {item.advan}
                            </p>
                            <p className="text-center cursor-pointer text-[#00667C] hover:text-[#7CCA9A]" onClick={() => handleScroll(item.prId)}>
                                {item.pr}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="flex gap-3 flex-wrap">
                    <span className=" text-[#00667C] hover:text-[#7CCA9A] cursor-pointer">Home</span>
                    <span className=" text-[#00667C] hover:text-[#7CCA9A] cursor-pointer">Solution</span>
                    <span className=" text-[#00667C] hover:text-[#7CCA9A] cursor-pointer">Space Occupancy</span>
                </div>
            </div>

            {/* Sections with IDs */}
            <section id="space-occupancy"><SpaceOcupencies /></section>
            <section id="typical-application"><TypicalApplication /></section>
            <section id="highlight"><SuperiorHighlight /></section>
            <section id="benefit"><BeneFits /></section>
            <section id="products"><Comprehensive title={'Related Products'} /></section>

            <DiscoverFea 
                title={'Integrated with Third Party Platforms'} 
                bgimage={'/SpaceOuccpancy/compatible.jpg'} 
                description={'Except Milesight IoT Cloud, the devices can also well collaborate with third-party platforms through open APIs and MQTT/HTTP(s), extending applications to realize different actual demands. It will easily cover the space occupancy rate, space utilization, various linkages, and space management.'} 
            />

            <FormSection />
        </>
    );
}
