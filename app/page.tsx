"use client";

import AboutSection from "@/components/About";
import FeaturedDishes from "@/components/Featured";
import HeroSection from "@/components/HeroSection";
import HooksSection from "@/components/HookSection";
import Testimonials from "@/components/Testimonials";
import { motion } from "framer-motion";

export default function Home() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 } as const,
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      } as const,
    },
  };

  return (
    <section className=" md:space-y-14  space-y-10">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <HeroSection />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <HooksSection />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <FeaturedDishes />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <AboutSection />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <Testimonials />
      </motion.div>
    </section>
  );
}
