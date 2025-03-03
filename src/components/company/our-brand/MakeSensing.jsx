export default function MakeSensing() {
  return (
    <div
      className="w-full min-h-[300px] sm:min-h-[400px] bg-cover bg-center flex items-center"
      style={{ backgroundImage: "url('/Ourbrand/matter.png')" }}
    >
      <div className="w-full sm:w-6/12  p-4 sm:mt-8 mt-4 rounded-lg">
        <p className="text-[#00667C]">Stay Open, Stay Collaborative</p>
        <h1 className="text-xl md:text-3xl font-semibold mb-2">
          Make Sensing Matter, <br /> Together
        </h1>
        <p>
          The complexities that our customers are challenged demand
          collaborative efforts. By uniting resources and expertise in single
          deployments, we are able to accelerate outcomes.
        </p>
        <p>
          We empower our customers to achieve amazing things with an extensive
          ecosystem of partners, including technology partners, distributors,
          resellers, solution providers, system integrators, etc.—each with a
          clear focus, role, and set of capabilities.
        </p>
        <p>
          Together, we complement each other's strengths to make sensing truly
          matter for customers.
        </p>

        <button className="text-xs lg:text-lg rounded-2xl bg-[#00667C] hover:bg-[#7CCA9A] text-white px-4 py-2 mt-2 scale-[0.9] transform transition-all ease-in delay-100 hover:scale-[1] cursor-pointer">
          <a href="/products/NDAA-Compilant">Learn More</a>
        </button>
      </div>
    </div>
  );
}
