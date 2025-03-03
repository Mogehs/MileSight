export default function BeneFits() {
    return (
        <div className="w-full p-4">
            <div className="w-full sm:w-11/12 mx-auto sm:mt-8 mt-4">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                    {/* Image Section */}
                    <div className="w-full sm:w-1/2">
                        <img 
                            src="/SpaceOuccpancy/meeting.jpg" 
                            className="rounded-md w-full object-cover" 
                            alt="Meeting Room"
                        />
                    </div>

                    {/* Text Section */}
                    <div className="w-full sm:w-1/2">
                        <h1 className="font-semibold text-xl md:text-2xl mb-4 text-[#00667C]">
                            Benefit from the People Counting Solution
                        </h1>

                        <b className="block text-lg mb-2 text-[#00667C]">Master Workplace Occupancy</b>
                        <p className="text-[#00667C] mb-4">
                            The solution helps to grasp workplace occupancy information via people counting. By getting extensive data, it forms a valuable information network in the workplace, which greatly promotes data-oriented management. The entrance, exit, workstation status, meeting room status, etc., and everything related can be turned into information quickly accessed for further strategic decision-making.
                        </p>

                        {/* List of Benefits */}
                        <ul className="list-disc pl-5 space-y-2">
                            <li className=" marker:text-[#7CCA9A] text-[#00667C]">Get Accurate Information Timely</li>
                            <li className=" marker:text-[#7CCA9A] text-[#00667C]">Save Energy</li>
                            <li className=" marker:text-[#7CCA9A] text-[#00667C]">Improve Workplace Layout</li>
                            <li className=" marker:text-[#7CCA9A] text-[#00667C]">Reasonably Allocate Resources</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
