"use client";

import Image from "next/image";
import featuredItems from "@/data/featured.json";
import Menu from "@/data/menu_data.json";
import DishCard from "@/components/DishCard";
import { motion } from "framer-motion";

const FeaturedDishes = () => {
  const featuredDishes = Menu.flatMap((category) => category.items).filter(
    (item) => item.featured
  );

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

  const gridVariants = {
    hidden: { opacity: 0 } as const,
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.4,
      },
    } as const,
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 } as const,
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    } as const,
  };

  const emptyStateVariants = {
    hidden: { opacity: 0, scale: 0.9 } as const,
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
      },
    } as const,
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="mb-8 sm:mb-10 lg:mb-12 flex flex-col items-center text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headerVariants}
        >
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-3"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Mako Favorites
          </motion.h2>
          <motion.p
            className="text-sm sm:text-base md:text-lg text-slate-500 max-w-2xl px-4"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Top picks from our kitchen this week.
          </motion.p>
          <motion.div
            className="w-16 sm:w-20 h-1 bg-[#e05d44] mt-3 sm:mt-4 rounded-full"
            variants={underlineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Dishes Grid */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 pb-6 sm:pb-8"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {featuredDishes.map((dish, index) => (
            <motion.div
              key={dish.id}
              variants={itemVariants}
              custom={index}
              className="flex flex-col h-full"
            >
              <DishCard
                id={dish.id}
                name={dish.name}
                description={dish.description}
                price={dish.price}
                image={dish.image}
                featured={dish.featured}
                tags={dish.tags}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Optional: Empty State if no featured dishes */}
        {featuredDishes.length === 0 && (
          <motion.div
            className="text-center py-12 sm:py-16"
            variants={emptyStateVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="text-gray-500 text-base sm:text-lg">
              No featured dishes available at the moment. Check back soon!
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default FeaturedDishes;
