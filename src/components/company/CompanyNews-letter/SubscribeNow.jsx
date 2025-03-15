export default function SubscribeNow() {
    return (
      <div className="w-full mt-4 sm:mt-10">
        {/* Heading Section */}
        <div className="w-full sm:w-11/12 mx-auto sm:mt-8 mt-4">
          <h1 className="text-2xl font-semibold text-[#00667C] sm:text-3xl text-center">
            Subscribe Now and Stay Informed
          </h1>
        </div>
  
        {/* Form Container */}
        <div className="flex w-full justify-center items-center mt-2 sm:mt-10 bg-gray-100">
          <form className="bg-white p-6 rounded-lg w-full sm:w-8/12">
            {/* First Row */}
            <div className="flex flex-col sm:flex-row justify-between w-full gap-3">
              <input
                type="text"
                placeholder="*Email"
                className="w-full sm:w-5/12 p-2 border border-[#00667c] rounded-md text-[#7CCA9A] focus:outline-none focus:ring-2 focus:ring-[#00667C]"
              />
              <input
                type="text"
                placeholder="*Country"
                className="w-full sm:w-5/12 p-2 border border-[#00667c] rounded-md text-[#7CCA9A] focus:outline-none focus:ring-2 focus:ring-[#00667C]"
              />
            </div>
  
            {/* Second Row */}
            <div className="mt-4 flex flex-col sm:flex-row items-center gap-3">
              <input
                type="text"
                placeholder="*Verify Code"
                className="w-full sm:w-5/12 p-2 border border-[#00657ca8] rounded-md text-[#7CCA9A] focus:outline-none focus:ring-2 focus:ring-[#00667C]"
              />
              <img
                src="/company/Newsletter/code.png"
                alt="Verification Code"
                className="w-28 h-auto sm:w-32"
              />
            </div>
  
            {/* Button Centered */}
            <div className="mt-6 w-full sm:w-6/12 mx-auto flex justify-center">
              <button className="px-6 py-2 w-full  bg-[#00667C] cursor-pointer text-white rounded-lg hover:bg-[#7CCA9A] hover:text-[#00667C] transition">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
  