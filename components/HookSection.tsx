"use client";

import { FaLeaf, FaCouch } from "react-icons/fa";
import { GiChefToque } from "react-icons/gi";
import { motion } from "framer-motion";

const features = [
  {
    icon: (
      <FaLeaf className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#e05d44]" />
    ),
    title: "Fresh Ingredients",
    description:
      "Farm-to-table freshness in every bite. We source locally to ensure the highest quality.",
  },
  {
    icon: (
      <GiChefToque className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#e05d44]" />
    ),
    title: "Expert Chefs",
    description:
      "Curated by Chef Jake with 10 years of culinary excellence in modern fusion cuisine.",
  },
  {
    icon: (
      <FaCouch className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#e05d44]" />
    ),
    title: "Cozy Ambiance",
    description:
      "The perfect spot for romantic dates, family dinners, and quiet coffee breaks.",
  },
];

const HooksSection = () => {
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
        delay: 0.2,
        ease: "easeOut",
      },
    } as const,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
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

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    } as const,
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-10 sm:mb-12 lg:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headerVariants}
        >
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Why Choose Mako?
          </motion.h2>
          <motion.div
            className="w-16 sm:w-20 h-1 bg-[#e05d44] mx-auto rounded-full"
            variants={underlineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden p-6 sm:p-7 lg:p-8 rounded-xl sm:rounded-2xl text-center border border-gray-300 transition-all duration-700 cursor-pointer shadow-sm hover:shadow-xl hover:bg-[#e05d44]"
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                rotate: 3,
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Background Overlay Effect */}
              <motion.div
                className="absolute inset-0 bg-linear-to-br from-[#e05d44] to-[#c94d34]"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                style={{ originX: 0 }}
              />

              {/* Icon Container */}
              <div className="relative z-10 flex justify-center mb-4 sm:mb-5 lg:mb-6">
                <motion.div
                  className="p-3 sm:p-3.5 lg:p-4 bg-[#fffbf0] rounded-full shadow-lg transition-all duration-500 group-hover:bg-white"
                  whileHover="hover"
                  variants={iconVariants}
                >
                  {feature.icon}
                </motion.div>
              </div>

              {/* Title */}
              <motion.h3
                className="relative z-10 text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900 transition-colors duration-500 group-hover:text-white"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                {feature.title}
              </motion.h3>

              {/* Description */}
              <motion.p
                className="relative z-10 text-sm sm:text-base text-gray-600 leading-relaxed transition-colors duration-500 group-hover:text-white/90"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                {feature.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HooksSection;
