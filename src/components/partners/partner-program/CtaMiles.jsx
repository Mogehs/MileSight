export default function CtaMiles() {
    return (
      <div className="w-full">
        <section
          className="container mx-auto flex flex-col items-center justify-center bg-cover bg-center py-16 px-6 text-center"
          style={{
            backgroundImage: "url(/partners/partner-program/cta.jpg)",
          }}
        >
          <p className="text-white w-8/12 text-lg sm:text-2xl font-semibold mb-6 animate-fadeInUp">
            Become Milesight Technology Partner and accelerate influence by innovating, building, and achieving together!
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/partner/find-technology-partner"
              className="bg-white  text-[#00667C] font-semibold px-6 py-3 rounded-lg shadow-md transition duration-300 hover:bg-[#00667C] hover:text-white"
            >
              Find a Technology Partner
            </a>
            <a
              href="/partner/become-technology-partner"
              className="bg-[#00667C] text-white font-semibold px-6 py-3 rounded-lg shadow-md transition duration-300 hover:bg-white hover:text-[#00667C]"
            >
              Become a Technology Partner
            </a>
          </div>
        </section>
      </div>
    );
  }
  