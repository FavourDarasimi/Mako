"use client";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

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

  const headerVariants = {
    hidden: { opacity: 0, y: -20 } as const,
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    } as const,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 } as const,
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    } as const,
  };

  const answerVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      y: -10,
    } as const,
    visible: {
      opacity: 1,
      height: "auto",
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    } as const,
    exit: {
      opacity: 0,
      height: 0,
      y: -10,
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    } as const,
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 sm:mt-10 lg:mt-12 px-4 sm:px-6">
      {/* Header Section */}
      <motion.div
        className="text-center mb-8 sm:mb-10 lg:mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={headerVariants}
      >
        <motion.div
          className="flex items-center justify-center gap-2 mb-3 sm:mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="h-px w-8 sm:w-10 md:w-12 bg-[#e05d44]"></span>
          <span className="text-[#e05d44] font-bold uppercase tracking-widest text-xs sm:text-sm">
            FAQ
          </span>
          <span className="h-px w-8 sm:w-10 md:w-12 bg-[#e05d44]"></span>
        </motion.div>
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.p
          className="text-sm sm:text-base text-gray-600 px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Find answers to common questions about dining at Mako
        </motion.p>
      </motion.div>

      {/* FAQ Items */}
      <motion.div
        className="space-y-3 sm:space-y-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 overflow-hidden hover:border-[#e05d44]/50 transition-colors shadow-sm hover:shadow-md"
            variants={itemVariants}
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.button
              onClick={() => toggleFAQ(index)}
              className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-[#e05d44]/20 touch-manipulation active:bg-gray-50"
              aria-expanded={openFAQ === index}
              aria-controls={`faq-answer-${index}`}
              whileTap={{ scale: 0.99 }}
            >
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 pr-3 sm:pr-4 leading-tight">
                {faq.question}
              </h3>
              <motion.div
                animate={{ rotate: openFAQ === index ? 180 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <FaChevronDown className="text-[#e05d44] text-base sm:text-lg md:text-xl shrink-0" />
              </motion.div>
            </motion.button>

            <AnimatePresence initial={false}>
              {openFAQ === index && (
                <motion.div
                  id={`faq-answer-${index}`}
                  variants={answerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <div className="px-4 sm:px-6 pb-4 sm:pb-5 pt-1 sm:pt-2">
                    <motion.p
                      className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      {faq.answer}
                    </motion.p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>

      {/* Contact CTA */}
      <motion.div
        className="mt-8 sm:mt-10 lg:mt-12 bg-linear-to-r from-[#e05d44]/10 to-orange-50 rounded-xl sm:rounded-2xl border border-[#e05d44]/30 p-5 sm:p-6 lg:p-8 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <motion.h3
          className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Still have questions?
        </motion.h3>
        <motion.p
          className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 px-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Can't find the answer you're looking for? Our team is here to help.
        </motion.p>
        <motion.a
          href="tel:+2341234567890"
          className="inline-block bg-[#e05d44] hover:bg-[#c94d34] duration-300 py-2.5 sm:py-3 px-6 sm:px-8 rounded-lg text-white font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all touch-manipulation"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Call Us Now
        </motion.a>
      </motion.div>
    </div>
  );
};

export default FAQ;
