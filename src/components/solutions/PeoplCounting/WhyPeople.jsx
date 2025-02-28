import ss from '/PeopleCounting/ss.png';

export default function WhyPeople() {
    const why = [
        {
            title: "Why People Counter Matters",
            description: [
                "People counting is greatly important in all walks of life. By accurately counting the number of people in a space, businesses and venues can optimize their capacities, allocate resources efficiently, and deliver exceptional experiences.",
                "Milesight people counting sensors and cameras empower customers to optimize space usage, save energy, and make informed business decisions. Our devices can be strategically placed in entrances, exits, corridors, and specific zones to monitor high traffic flow.",
                "Milesight people counters provide comprehensive data on people passing and visitor behaviors, delivering insights through advanced features that cater to diverse customer needs in multiple scenarios."
            ],
            img1: ss
        }
    ];

    return (
        <div className="w-full mx-auto lg:w-11/12 p-4 mt-4">
            {why.map((item, index) => (
                <div key={index} className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                    <div className="w-full md:w-6/12 text-center md:text-left">
                        <h1 className="text-xl md:text-3xl font-semibold mb-4">{item.title}</h1>
                        {item.description.map((desc, index) => (
                            <p key={index} className="mb-3 text-gray-500">{desc}</p>
                        ))}
                    </div>
                    <div className="w-full md:w-6/12 flex justify-center">
                        <img src={item.img1} alt="People Counting" className="w-full max-w-md md:max-w-full rounded-lg shadow-md" />
                    </div>
                </div>
            ))}
        </div>
    );
}
