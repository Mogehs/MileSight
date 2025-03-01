import React, { useState } from "react";

const faqs = [
  {
    question: "Will the thermostat work properly if it is offline?",
    answer:
      "The WT201 thermostat has integrated local temperature control logic, allowing the thermostat to maintain local operation for extended periods of time while completely offline, regardless of network and communication dependencies.",
  },
  {
    question: "Is there any data loss when the thermostat is powered off?",
    answer:
      "WT201 supports RTC and super capacitor, the core module of WT201 will continue to work and keep time after the HVAC power is cut off, and the device will resume working after being repowered.",
  },
  {
    question: "Is a C-wire adapter (PEK) provided?",
    answer:
      "The WT201 is supplied with a matching PEK for adaptation to conventional buildings.",
  },
  {
    question: "Does Milesight's line of thermostats support UL certification?",
    answer:
      "All line voltage powered WT series thermostats have or will soon support UL or ULc certification.",
  },
  {
    question:
      "What if the D2D communication between WT201 and the area temperature sensor is disconnected?",
    answer:
      "If the D2D communication between WT201 and the zone temperature sensor is disconnected, WT201 can choose to be configured to temporarily switch to the built-in temperature module to participate in temperature control, and then use the D2D communication after the D2D communication is restored.",
  },
  {
    question: "Which kind of thermostat should I choose?",
    answer:
      "It depends on what kind of system you are using locally. You can take 2 mins in our Thermostat Checker for compatibility.",
  },
  {
    question: "Can I customize the thermostat relay operating logic?",
    answer:
      "In addition to using the built-in thermostat control logic, WT201 can support remote downstream independent control relay mode, so as to remotely realize some complex control logic or control complex system by customizing relay switching state. WT201 does not support advanced programmable for the time being, i.e. it does not support scripting local writing of control logic.",
  },
];

function QASection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="hvac-q&a" className="bg-[#f5f5f5] p-6 my-10">
      <h2 className="text-3xl font-bold text-center text-[#333] mb-6">FAQ</h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-[#dadada] rounded-lg overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left p-4 bg-gray-100 dark:bg-gray-800 flex justify-between items-center"
            >
              <span className="font-semibold text-[#333]">
                Q.{faq.question}
              </span>
              <span className="text-xl text-[#0299f4] hover:cursor-pointer">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            {openIndex === index && (
              <div className="p-4 bg-[#f5f5f5] text-[#666]">
                A. {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default QASection;
