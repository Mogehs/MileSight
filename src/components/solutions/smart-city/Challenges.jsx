const Challenges = () => {
    return (
        <div id="smartCity-challenges">
      <section
        className="flex flex-col  md:flex-row items-center p-6 md:p-12 justify-end "
        style={{ backgroundImage: "url('/SmartCity/challenge-1.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
      >

        <div className="md:w-1/2 w-full">
          <h1 className="text-2xl md:text-4xl font-semibold ">
            What are the Challenges of Building a Smart City?
          </h1>
          <p className="text-black sm:text-gray-600 text-sm md:text-base mt-2">
            Smart city is a place where digital solutions are leveraged to enhance the use of traditional networks and services, with the aim to benefit businesses and improve the quality of life for the residents under the fast-growing population trend.
          </p>
          
          <h2 className="text-1xl sm:text-sm md:text-base font-bold teext-black sm:text-gray-700 mt-2">
            But there are still many challenges including but not limited to:
          </h2>
          
          <ul className="list-disc list-inside mt-4 text-black sm:text-gray-600 text-lg sm:text-sm md:text-base">
            <li>Lack of new tools, practices, or insights to make the city smart</li>
            <li>Create an intelligent, efficient, interconnected network for transporting data</li>
            <li>Scaling existing infrastructure is cost-prohibitive, unmanageable, and unsupportable</li>
          </ul>
        </div>
      </section>

{/* 2 SECTION CARD */}
<section className="relative bg-[#eff4f8]">
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
        {/* Component */}
        <div className="grid grid-cols-1 items-center gap-8 sm:gap-20 lg:grid-cols-2">
          {/* Heading Content */}
          <div className="max-w-[720px]">
            <h1 className="mb-3 pb-4 text-4xl font-base text-gray-700 md:text-4xl">Introducing Milesight Smart City Solution</h1>
            <p className="mb-6 max-w-[528px] text-[15px]  text-gray-600 md:mb-10">
            Milesight's Smart City Solution optimizes utilities and infrastructures at scale, making them smarter, safer, and more efficient. Through IoT sensing technology, it creates a seamlessly connected urban environment, where data collection and analysis drive informed decision-making, ultimately leading to a more sustainable and livable city environment for all residents.
            </p>
          </div>
          {/* Image Div */}
          <div>
            <img
              src={"/SmartCity/challenge-2.jpg"}
              alt=""
              className="mx-auto inline-block h-full w-full max-w-[640px] rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>




</div>
    );
  };
  
  export default Challenges;
  