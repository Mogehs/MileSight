import one from '/SpaceOuccpancy/one.png';
import two from '/SpaceOuccpancy/two.png';
import three from '/SpaceOuccpancy/three.png';
import four from '/SpaceOuccpancy/five.png';
import five from '/SpaceOuccpancy/six.png';

export default function SuperiorHighlight() {
    const data = [
        {
            img: one, title: "Flexible LoRaWAN® and PoE Versions", description: "Alternative LoRaWAN® and Ethernet transmission give easy access to different application requirements."
        },
        {
            img: two, title: "Versatile AI/PIR/ToF Technologies", description: "Applying different recognition technologies for different application scenarios."
        },
        {
            img: three, title: "Up to 99.8% Ultra-high Accuracy", description: "Increasing accuracy to 99.8% with AI and ToF technologies."
        },
        {
            img: four, title: "100% Anonymous Detection", description: "Being GDPR-compliant, no PII is involved with the help of privacy-featured technologies and LoRaWAN® transmission."
        },
        {
            img: five, title: "Staff Detection & Adults/Children Differentiation", description: "Giving direct access to recognize specific categories of individuals including staff detection and adults/children differentiation."
        },
    ];

    return (
        <div className="w-full p-5 mb-5">
            <h1 className=' text-xl text-center font-semibold mb-3 md:mb-6 md:text-4xl'>Superior Highlights </h1>
            <div className="mx-auto max-w-6xl">
                {/* Responsive Grid with 5 Columns on Large Screens */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {data.map((item, index) => (
                        <div
                            key={index}
                            className="border border-gray-300 p-4 rounded-lg shadow-md hover:border-blue-400 transition-all ease-in-out delay-75 cursor-pointer flex flex-col items-center text-center"
                        >
                            <img
                                src={item.img}
                                alt={item.title}
                                className="w-[60px] md:w-[80px] h-[60px] object-cover mb-3"
                            />
                            <h1 className="text-md text-start md:text-lg font-bold mb-3">{item.title}</h1>
                            <p className="text-sm text-start text-gray-600">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
