"use client";

import Image from "next/image";
import { useState } from "react";
import dishes from "@/data/menu_data.json";
import { IoSearchOutline } from "react-icons/io5";
import all from "@/public/images/all.webp";
import starters from "@/public/images/starters.webp";
import pasta from "@/public/images/pasta.webp";
import bowls from "@/public/images/bowls.jpg";
import global_mains from "@/public/images/global_mains.jpg";
import sandwiches_and_wraps from "@/public/images/sandwiches_and_wraps.webp";
import desserts from "@/public/images/desserts.webp";
import DishCard from "@/components/DishCard";
import { motion, AnimatePresence } from "framer-motion";

export default function MenuPage() {
  const categories = [
    { name: "All", image: all },
    { name: "Starters", image: starters },
    { name: "Pasta", image: pasta },
    { name: "Bowls", image: bowls },
    { name: "Global Mains", image: global_mains },
    { name: "Sandwiches & Wraps", image: sandwiches_and_wraps },
    { name: "Desserts", image: desserts },
  ];

  const [active, setActive] = useState("All");
  const [search, setSearch] = useState("");

  const filtered =
    active === "All"
      ? dishes
          .flatMap((category) => category.items)
          .filter((item) =>
            item.name.toLowerCase().includes(search.toLowerCase())
          )
      : dishes
          .filter((cat) => cat.menu === active)
          .flatMap((cat) =>
            cat.items.filter((item) =>
              item.name.toLowerCase().includes(search.toLowerCase())
            )
          );

  return (
    <div className=" px-3 lg:px-8 py-5 sm:py-6 lg:py-8 max-w-7xl mx-auto  font-sans">
      {/* Header Section */}
      <motion.div
        className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 md:gap-6 w-full lg:mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            Welcome to Mako Restaurant
          </h1>
          <p className="text-gray-500 mt-2 text-sm sm:text-base">
            Choose the category
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          className="relative w-full md:w-80 lg:w-96"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <IoSearchOutline className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          <input
            placeholder="Search dishes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 sm:py-3 rounded-xl border border-gray-300 focus:border-[#e05d44] focus:outline-none focus:ring-2 focus:ring-[#e05d44] focus:ring-opacity-20 transition-all text-sm sm:text-base"
          />
        </motion.div>
      </motion.div>

      {/* Category Pills - Horizontal Scroll on Mobile */}
      <div className="flex justify-center w-full  md:hidden">
        <motion.div
          animate={{
            y: [0, 10, 0], // Move down 10px then back up
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
          className="flex  items-center gap-2 opacity-80"
        >
          <span className="text-xs font-medium text-gray-500 uppercase tracking-widest">
            Scroll
          </span>
          {/* Simple Chevron SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-600"
          >
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
          </svg>
        </motion.div>
      </div>
      <motion.div
        className="flex gap-3 sm:gap-4 pt-3 overflow-x-auto pb-4 sm:pb-5   sm:mx-0 sm:px-0 lg:justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {categories.map((cat, index) => (
          <motion.div
            key={index}
            className={`shrink-0 px-3 sm:px-4 py-3 sm:py-3.5 shadow-md rounded-full flex flex-col items-center cursor-pointer border border-gray-300 transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 ${
              active === cat.name
                ? "bg-[#e05d44] text-white shadow-lg"
                : "bg-white hover:shadow-lg"
            }`}
            onClick={() => setActive(cat.name)}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              delay: 0.5 + index * 0.1,
              type: "spring",
              stiffness: 100,
            }}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              src={cat.image}
              alt={cat.name}
              className="object-cover w-16 h-16 sm:w-20 sm:h-20 rounded-full"
            />
            <h2 className="mt-2 sm:mt-3 text-center font-semibold text-xs sm:text-[13px] w-[60px] sm:w-[70px] leading-tight">
              {cat.name}
            </h2>
          </motion.div>
        ))}
      </motion.div>

      {/* No Results Message */}
      <AnimatePresence mode="wait">
        {filtered.length === 0 && (
          <motion.div
            className="text-center py-12 sm:py-16"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-700">
              {active === "All"
                ? "No dishes found"
                : `No dishes found in ${active} menu`}
            </h2>
            <p className="text-gray-500 mt-2 text-sm sm:text-base">
              Try adjusting your search or selecting a different category
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Dish Grid */}
      <motion.div
        className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-5 mt-6 sm:mt-8"
        layout
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((dish, index) => (
            <motion.div
              key={dish.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{
                duration: 0.3,
                delay: index * 0.05,
                layout: { duration: 0.3 },
              }}
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
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
