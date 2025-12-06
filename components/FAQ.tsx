"use client";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const FAQ = () => {
  const faqs = [
    {
      question: "Do I need a reservation?",
      answer:
        "While walk-ins are welcome, we highly recommend making a reservation, especially for dinner service and weekends. This ensures you get your preferred time slot and seating arrangement.",
    },
    {
      question: "What are your payment options?",
      answer:
        "We accept cash, all major credit cards (Visa, Mastercard, American Express), and mobile payment options including bank transfers and popular digital wallets.",
    },
    {
      question: "Do you cater to dietary restrictions?",
      answer:
        "Absolutely! We accommodate various dietary needs including vegetarian, vegan, gluten-free, and allergen-free options. Please inform your server or mention it in your reservation so our chef can prepare accordingly.",
    },
    {
      question: "Is there parking available?",
      answer:
        "Yes, we have complimentary valet parking for all our guests. We also have a secured parking lot adjacent to the restaurant with ample space.",
    },
    {
      question: "Do you host private events?",
      answer:
        "Yes! We have a private dining area that can accommodate up to 50 guests. Perfect for birthdays, anniversaries, corporate events, and special celebrations. Contact us for custom menus and arrangements.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "We understand plans change. Please notify us at least 2 hours in advance if you need to cancel or modify your reservation. For large parties (8+ guests), we require 24 hours notice.",
    },
    {
      question: "Do you offer delivery or takeaway?",
      answer:
        "Yes, we offer both! You can order directly through our website or call us. We also partner with major delivery platforms. Note that some signature dishes are dine-in only to ensure the best quality.",
    },
    {
      question: "Is the restaurant child-friendly?",
      answer:
        "Absolutely! We welcome families and have a special children's menu. High chairs and booster seats are available upon request.",
    },
  ];

  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };
  return (
    <div className="max-w-4xl mx-auto mt-10">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="h-px w-12 bg-[#e05d44]"></span>
          <span className="text-[#e05d44] font-bold uppercase tracking-widest text-sm">
            FAQ
          </span>
          <span className="h-px w-12 bg-[#e05d44]"></span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600">
          Find answers to common questions about dining at Mako
        </p>
      </div>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-[#e05d44]/50 transition-all shadow-sm"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
            >
              <h3 className="text-lg font-bold text-gray-900 pr-4">
                {faq.question}
              </h3>
              <FaChevronDown
                className={`text-[#e05d44] text-xl shrink-0 transition-transform duration-300 ${
                  openFAQ === index ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openFAQ === index ? "max-h-96" : "max-h-0"
              }`}
            >
              <div className="px-6 pb-5 pt-2">
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 bg-linear-to-r from-[#e05d44]/10 to-orange-50 rounded-2xl border border-[#e05d44]/30 p-8 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          Still have questions?
        </h3>
        <p className="text-gray-600 mb-6">
          Can't find the answer you're looking for? Our team is here to help.
        </p>
        <a
          href="tel:+2341234567890"
          className="inline-block bg-[#e05d44] hover:scale-105 duration-300 py-3 px-8 rounded-lg text-white font-bold"
        >
          Call Us Now
        </a>
      </div>
    </div>
  );
};

export default FAQ;
