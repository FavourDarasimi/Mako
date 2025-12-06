"use client";

import { FaCheckCircle } from "react-icons/fa";
import interior from "@/public/images/interior.webp";
import img2 from "@/public/images/img2.webp";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 } as const,
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    } as const,
  };

  const floatingImageVariants = {
    hidden: { opacity: 0, x: 50, y: 50 } as const,
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: "easeOut",
      },
    } as const,
  };

  const contentVariants = {
    hidden: { opacity: 0, x: -30 } as const,
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    } as const,
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <section className="relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Images Section */}
          <div className="relative order-2 lg:order-1">
            {/* Main Image */}
            <motion.div
              className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-slate-700"
              variants={imageVariants}
            >
              <Image
                src={interior}
                alt="Mako Interior"
                className="w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>

            {/* Floating Secondary Image */}
            <motion.div
              className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-6 md:-bottom-10 md:-right-10 z-20 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-2xl overflow-hidden shadow-2xl border-2 border-white"
              variants={floatingImageVariants}
            >
              <Image
                src={img2}
                alt="Chef Plating"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Decorative Border Element */}
            <motion.div
              className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 border-2 border-[#e05d44]/30 rounded-lg z-0"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            ></motion.div>
          </div>

          {/* Content Section */}
          <motion.div className="order-1 lg:order-2" variants={contentVariants}>
            {/* Section Label */}
            <motion.div
              className="flex items-center gap-2 mb-3 sm:mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="h-px w-8 sm:w-10 md:w-12 bg-[#e05d44]"></span>
              <span className="text-[#e05d44] font-bold uppercase tracking-widest text-xs sm:text-sm">
                Our Story
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Where Modern Taste <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#e05d44]/70 to-[#e05d44]">
                Meets Tradition
              </span>
            </motion.h2>

            {/* Description Paragraphs */}
            <motion.p
              className="text-slate-600 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Established in 2024, Mako was born from a simple desire: to
              redefine the dining experience in Lagos. We don't just serve food;
              we curate moments.
            </motion.p>

            <motion.p
              className="text-slate-600 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Under the guidance of <strong>Executive Chef Jake</strong>, our
              kitchen blends locally sourced ingredients with international
              techniques. Whether it's our signature smoky Jollof or the Wagyu
              Burger, every dish tells a story of passion and precision.
            </motion.p>

            {/* Features Grid */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.4,
                  },
                },
              }}
            >
              {[
                "Fresh, Organic Ingredients",
                "Master Chefs from Top Hotels",
                "Private Dining Available",
                "Award-Winning Wine List",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2 sm:gap-3"
                  variants={featureVariants}
                  transition={{ duration: 0.4 }}
                >
                  <FaCheckCircle className="text-[#e05d44] shrink-0 text-sm sm:text-base" />
                  <span className="text-slate-600 text-xs sm:text-sm font-medium">
                    {item}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Quote Box */}
            <motion.div
              className="border-l-4 border-[#e05d44] pl-4 sm:pl-6 py-2 sm:py-3 bg-slate-50/50 rounded-r-lg"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <p className="text-base sm:text-lg md:text-xl font-serif italic text-slate-600 mb-1 sm:mb-2 leading-relaxed">
                "Food is not just fuel, it is a language of love."
              </p>
              <p className="text-[#e05d44] font-bold text-xs sm:text-sm">
                — Jake O., Head Chef
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
