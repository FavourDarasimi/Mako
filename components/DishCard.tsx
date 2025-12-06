"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type DishCardProps = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  featured: boolean;
  tags: string[];
};

const DishCard = ({
  id,
  name,
  description,
  price,
  image,
  featured,
  tags,
}: DishCardProps) => {
  return (
    <motion.div
      key={id}
      className="group flex-1 bg-white rounded-xl sm:rounded-2xl shadow-md p-3 sm:p-4 hover:shadow-xl transition-shadow duration-300 cursor-pointer"
      whileHover={{ scale: 1.02, y: -5 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Image Container */}
      <motion.div
        className="relative w-full h-40 sm:h-44 md:h-48 rounded-lg sm:rounded-xl overflow-hidden mb-3 sm:mb-4"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Featured Badge */}
        {featured && (
          <motion.div
            className="absolute top-2 left-0 inline-flex items-center gap-1.5 sm:gap-2 bg-[#e05d44] text-white text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 rounded-r-md shadow-lg"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: 0.2,
            }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.span
              className="border-2 border-white p-0.5 sm:p-[3px] rounded-full shrink-0"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <span className="w-1 h-1 bg-white rounded-full flex"></span>
            </motion.span>
            <span className="whitespace-nowrap">Best seller</span>
            <span className="absolute -right-2 top-0 h-full w-0 border-y-12 sm:border-y-14 border-y-transparent border-l-8 sm:border-l-10 border-l-[#e05d44]"></span>
          </motion.div>
        )}
      </motion.div>

      {/* Dish Name */}
      <motion.h3
        className="text-base sm:text-lg font-semibold text-gray-900 leading-tight"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        {name}
      </motion.h3>

      {/* Description */}
      <motion.p
        className="text-gray-500 text-xs sm:text-sm mt-1 sm:mt-1.5 line-clamp-2 leading-relaxed"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        {description}
      </motion.p>

      {/* Price and Availability */}
      <motion.div
        className="flex items-center justify-between mt-3 sm:mt-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <motion.p
          className="text-lg sm:text-xl font-bold text-gray-900"
          whileHover={{ scale: 1.1, color: "#e05d44" }}
          transition={{ duration: 0.2 }}
        >
          ${price}
        </motion.p>
        <motion.span
          className="flex items-center gap-1 text-green-500 text-xs sm:text-sm font-medium"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <motion.span
            className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [1, 0.7, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          ></motion.span>
          Available
        </motion.span>
      </motion.div>

      {/* Tags */}
      <motion.div
        className="flex gap-1.5 sm:gap-2 mt-2.5 sm:mt-3 flex-wrap"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.05,
              delayChildren: 0.4,
            },
          },
        }}
      >
        {tags.map((tag, index) => (
          <motion.span
            key={index}
            className="px-2 sm:px-3 py-0.5 sm:py-1 bg-gray-100 hover:bg-gray-200 text-[10px] sm:text-xs rounded-full text-gray-700 font-medium transition-colors overflow-hidden"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
            whileHover={{
              scale: 1.1,
              backgroundColor: "#e05d44",
              color: "#ffffff",
            }}
            transition={{ duration: 0.2 }}
          >
            {tag}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default DishCard;
