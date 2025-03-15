import { useState } from "react";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const data = [
    {
      title: "What are the Milesight Impact Awards?",
      content:
        "This is the first Milesight Impact Awards, marking a significant milestone in our journey to recognize and celebrate the most impactful solutions and services delivered by leveraging Milesight products and technologies.",
    },
    {
      title: "Who can enter?",
      content:
        "The Milesight Impact Awards are open to global Milesight partners who successfully address customer needs by delivering Milesight products as a solution.",
    },
    {
      title: "What are the two awards categories?",
      content:
        "Winners are selected in two separate categories: the IoT Cases Category and the Video Security Cases Category. The IoT Cases Category acknowledges the leading-edge applications of Milesight IoT products/technologies that enhance efficiency, enable remote monitoring, optimize resource usage, and drive new possibilities in various sectors. The Video Security Cases Category acknowledges the effective and innovative integrations of Milesight video surveillance products with various technologies, including advanced video analytics, high-resolution imaging, AI-driven surveillance systems, and more to ensure safety and efficiency.",
    },
    {
      title: "When can I claim my prize?",
      content:
        "Once you receive the Valid Case Confirmation Email, you are eligible to claim your participation prize by contacting your account manager or emailing us at marketing@milesight.com. Participation Prize validity before Dec 31, 2024, 23:59:59 GMT. Once we conclude the awards ceremony in October 2024, we will contact the six Impact Awards winners and the six Honorable Mentions as soon as possible.",
    },
    {
      title: "How do I enter?",
      content:
        "To submit an IoT case, click HERE. For Video Security cases, click HERE. Alternatively, download the Excel file, complete it, and email it to marketing@milesight.com. There is no limit on the number of cases you submit or the number of categories you can enter. For every qualified case submitted, you will receive one participation prize. Winning Tips: Supporting imagery or video files are strongly encouraged. Enter more cases to increase your chances of winning!",
    },
    {
      title: "When will the finalists and winners be announced?",
      content:
        "A shortlist of 12 finalists will be announced on September 30, 2024, through Milesight's social media platforms. Follow us to stay up-to-date on the latest news. Next, three best IoT cases and three best video security cases will be carefully selected from the finalists and revealed at the Milesight Impact Awards Virtual Ceremony in October 2024, where your accomplishments take center stage.",
    },
    {
      title: "When are the key time milestones?",
      content:
        "The submission period is now OPEN and entries should be submitted by Sunday, Sep 15th, 2024. Remember that you can continually refine your entry until the end of the submission period, so take advantage of this opportunity to improve your submission writing.",
    },
    {
      title: "Where can I go if I have questions?",
      content:
        "Should you have any questions about the Milesight Impact Awards or your entry, please do not hesitate to email us at marketing@milesight.com",
    },
  ];

  return (
    <div className="p-4 mt-10 bg-[#f3f4f4]">
      <h1 className="md:text-4xl text-2xl font-semibold text-center mb-6 text-[#00667C]">
        FAQs About the Milesight Impact Awards 2024
      </h1>

      {data.map((item, index) => (
        <div key={index} className="mb-3 border border-gray-300 rounded-md">
          {/* Accordion Button */}
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full p-4 flex justify-between items-center bg-white hover:bg-gray-100 transition-all"
            aria-expanded={openIndex === index}
            role="button"
          >
            <span className="text-sm md:text-lg font-medium text-[#00667C]">
              {item.title}
            </span>
            <span className="text-xl transition-transform duration-200">
              {openIndex === index ? "−" : "+"}
            </span>
          </button>

          {/* Accordion Content */}
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? "max-h-96 p-4" : "max-h-0 p-0"
            } bg-[#00667C] text-[#7CCA9A]`}
          >
            <p className="text-sm">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
