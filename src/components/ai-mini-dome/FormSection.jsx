import React, { useState } from "react";

function FormSection() {
  const [formData, setFormData] = useState({
    email: "",
    company: "",
    product: "",
    country: "",
    website: "",
    message: "",
    phone: "",
    business: "",
    code: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      email: "",
      company: "",
      product: "",
      country: "",
      website: "",
      message: "",
      phone: "",
      business: "",
      code: "",
    });
  };

  return (
    <div className="p-4">
      <div className="bg-[#f5f5f5] border border-[#d0d0d0] rounded p-4 md:px-[10rem] md:py-[2.5rem]">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-10">
            <div className="flex flex-col gap-2">
              <p className="text-[#333]">*Your Email</p>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="bg-white md:max-w-70"
                id="email"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[#333]">*Company</p>
              <input
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="bg-white md:max-w-70"
                id="email"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[#333]">
                *What Product are You Interested in?
              </p>
              <input
                name="product"
                value={formData.product}
                onChange={handleChange}
                className="bg-white md:max-w-70"
                id="email"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[#333]">*Country</p>
              <input
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="bg-white md:max-w-70"
                id="email"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[#333]">*Your Website</p>
              <input
                name="website"
                value={formData.website}
                onChange={handleChange}
                className="bg-white md:max-w-70"
                id="email"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[#333]">*Message</p>
              <input
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="bg-white md:max-w-70"
                id="email"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[#333]">*Your Phone</p>
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="bg-white md:max-w-70"
                id="email"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[#333]">*Business Type</p>
              <input
                name="business"
                value={formData.business}
                onChange={handleChange}
                className="bg-white md:max-w-70"
                id="email"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[#333]">*Verification Code</p>
              <input
                name="code"
                value={formData.code}
                onChange={handleChange}
                className="bg-white md:max-w-70"
                id="email"
                type="text"
              />
            </div>
          </div>
          <div className="flex justify-center mt-12">
            <button className="bg-[#00667C] text-white py-1 px-6 rounded cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-1">
              Let's Talk
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormSection;
