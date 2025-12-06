"use client";

import { FaStar, FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah J.",
      text: "Mako has quickly become my favorite spot in the city. The flavors are incredible, the presentation is beautiful, and the staff makes you feel genuinely welcome. Every dish tastes like it was made with care.",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=32",
    },
    {
      id: 2,
      name: "Michael O.",
      text: "Amazing food, elegant atmosphere, and top-tier service. I've dined here twice already, and each time the experience has been unforgettable. Highly recommend!",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=59",
    },
    {
      id: 3,
      name: "Amara E.",
      text: "From the moment we walked in, everything felt perfect—the ambiance, the aroma, and the attention to detail. The dishes were vibrant and full of flavor, and the chef's creativity really shows. Mako is truly a must-visit dining destination.",
      rating: 4,
      image: "https://i.pravatar.cc/150?img=32",
    },
  ];

  const headerVariants = {
    hidden: { opacity: 0, y: -30 } as const,
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    } as const,
  };

  const underlineVariants = {
    hidden: { width: 0, opacity: 0 } as const,
    visible: {
      width: "20%",
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: "easeOut",
      },
    } as const,
  };

  const containerVariants = {
    hidden: { opacity: 0 } as const,
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.4,
      },
    } as const,
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    } as const,
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    } as const,
  };

  const quoteVariants = {
    hidden: { opacity: 0, scale: 0, rotate: -180 } as const,
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    } as const,
  };

  const starVariants = {
    hidden: { opacity: 0, scale: 0 } as const,
    visible: (i: number) =>
      ({
        opacity: 1,
        scale: 1,
        transition: {
          delay: i * 0.1,
          type: "spring",
          stiffness: 300,
          damping: 20,
        },
      } as const),
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-8 sm:mb-10 lg:mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headerVariants}
        >
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-3"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Customer Love
          </motion.h2>
          <motion.p
            className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 max-w-2xl mx-auto px-4"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Don't just take our word for it. Here is what they are saying.
          </motion.p>
          <motion.div
            className="w-16 sm:w-20 h-1 bg-[#e05d44] mx-auto rounded-full"
            variants={underlineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              className="p-5 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col h-full bg-white"
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                y: -10,
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Quote Icon */}
              <motion.div
                className="mb-3 sm:mb-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={quoteVariants}
              >
                <FaQuoteLeft className="text-2xl sm:text-3xl text-[#e05d44]" />
              </motion.div>

              {/* Review Text */}
              <motion.p
                className="text-gray-600 text-sm sm:text-base lg:text-lg italic mb-4 sm:mb-5 lg:mb-6 line-clamp-4 leading-relaxed grow"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                "{review.text}"
              </motion.p>

              {/* Footer Section */}
              <motion.div
                className="border-t border-gray-200 pt-4 sm:pt-5 lg:pt-6 mt-auto"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="flex items-center justify-between gap-3">
                  {/* User Info */}
                  <motion.div
                    className="flex items-center gap-2 sm:gap-3 min-w-0"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <motion.div
                      className="relative overflow-hidden h-10 w-10 sm:h-12 sm:w-12 shrink-0"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src={review.image}
                        fill
                        alt={`${review.name} avatar`}
                        className="object-cover rounded-full"
                        sizes="(max-width: 640px) 40px, 48px"
                      />
                    </motion.div>
                    <div className="min-w-0">
                      <h4 className="font-bold text-gray-900 text-sm sm:text-base truncate">
                        {review.name}
                      </h4>
                      <p className="text-xs text-gray-500 hidden sm:block">
                        Verified Customer
                      </p>
                    </div>
                  </motion.div>

                  {/* Star Rating */}
                  <div className="flex gap-0.5 shrink-0">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        custom={i}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={starVariants}
                        whileHover={{
                          scale: 1.2,
                          rotate: 360,
                          transition: { duration: 0.4 },
                        }}
                      >
                        <FaStar
                          strokeWidth={40}
                          fill={i < review.rating ? "#e05d44" : "#ffffff"}
                          className="stroke-[#e05d44] w-4 h-4 sm:w-5 sm:h-5"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
