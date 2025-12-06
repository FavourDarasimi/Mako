"use client";

import Link from "next/link";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaHeart,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const columnVariants = {
    hidden: { opacity: 0, y: 30 } as const,
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    } as const,
  };

  const socialVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  const bottomBarVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.5,
      },
    },
  };

  return (
    <footer className="bg-[#1a1a1a] text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mx-auto place-items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* About Section */}
          <motion.div
            className="text-center sm:text-left"
            variants={columnVariants}
          >
            <motion.h2
              className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Mako
            </motion.h2>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-4 sm:mb-6">
              Experience the finest dining in Lagos. Where modern cuisine meets
              timeless flavors, creating unforgettable moments.
            </p>
            <motion.div
              className="flex gap-3 sm:gap-4 justify-center sm:justify-start"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.3,
                  },
                },
              }}
            >
              <motion.div
                className="p-2.5 sm:p-3 bg-gray-800 rounded-lg hover:bg-[#e05d44] transition-all duration-300 touch-manipulation"
                aria-label="Instagram"
                variants={socialVariants}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaInstagram className="text-lg sm:text-xl" />
              </motion.div>
              <motion.div
                className="p-2.5 sm:p-3 bg-gray-800 rounded-lg hover:bg-[#e05d44] transition-all duration-300 touch-manipulation"
                aria-label="Facebook"
                variants={socialVariants}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaFacebook className="text-lg sm:text-xl" />
              </motion.div>
              <motion.div
                className="p-2.5 sm:p-3 bg-gray-800 rounded-lg hover:bg-[#e05d44] transition-all duration-300 touch-manipulation"
                aria-label="Twitter"
                variants={socialVariants}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaTwitter className="text-lg sm:text-xl" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="text-center sm:text-left"
            variants={columnVariants}
          >
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">
              Quick Links
            </h3>
            <motion.ul
              className="space-y-2.5 sm:space-y-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.08,
                    delayChildren: 0.2,
                  },
                },
              }}
            >
              {[
                { href: "/", label: "Home" },
                { href: "/menu", label: "Menu" },
                { href: "/contact", label: "Contact" },
                { href: "/contact", label: "FAQs" },
              ].map((link, index) => (
                <motion.li key={index} variants={linkVariants}>
                  <Link
                    href={link.href}
                    className="hover:text-[#e05d44] transition-colors duration-300 flex items-center gap-2 justify-center sm:justify-start text-sm sm:text-base touch-manipulation py-1"
                  >
                    <motion.span
                      className="w-1.5 h-1.5 bg-[#e05d44] rounded-full shrink-0"
                      whileHover={{ scale: 1.5 }}
                    />
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Opening Hours */}
          <motion.div
            className="text-center sm:text-left"
            variants={columnVariants}
          >
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">
              Opening Hours
            </h3>
            <motion.ul
              className="space-y-2.5 sm:space-y-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.2,
                  },
                },
              }}
            >
              {[
                { days: "Monday - Thursday", hours: "11am - 10pm" },
                { days: "Friday - Saturday", hours: "11am - 11pm" },
                { days: "Sunday", hours: "12pm - 9pm" },
              ].map((schedule, index) => (
                <motion.li
                  key={index}
                  className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4"
                  variants={linkVariants}
                >
                  <span className="text-gray-400 text-sm sm:text-base">
                    {schedule.days}
                  </span>
                  <span className="text-white font-semibold text-sm sm:text-base">
                    {schedule.hours}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="text-center sm:text-left"
            variants={columnVariants}
          >
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">
              Get in Touch
            </h3>
            <motion.ul
              className="space-y-3 sm:space-y-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.2,
                  },
                },
              }}
            >
              <motion.li
                className="flex items-start gap-3 justify-center sm:justify-start"
                variants={linkVariants}
              >
                <FaMapMarkerAlt className="text-[#e05d44] text-base sm:text-lg mt-1 shrink-0" />
                <span className="text-gray-400 leading-relaxed text-sm sm:text-base">
                  123 Victoria Island
                  <br />
                  Lagos, Nigeria
                </span>
              </motion.li>
              <motion.li
                className="flex items-center gap-3 justify-center sm:justify-start"
                variants={linkVariants}
              >
                <FaPhone className="text-[#e05d44] text-base sm:text-lg shrink-0" />
                <motion.a
                  href="tel:+2341234567890"
                  className="text-gray-400 hover:text-[#e05d44] transition-colors text-sm sm:text-base touch-manipulation"
                  whileHover={{ x: 3 }}
                >
                  +234 123 456 7890
                </motion.a>
              </motion.li>
              <motion.li
                className="flex items-center gap-3 justify-center sm:justify-start"
                variants={linkVariants}
              >
                <FaEnvelope className="text-[#e05d44] text-base sm:text-lg shrink-0" />
                <motion.a
                  href="mailto:info@mako.restaurant"
                  className="text-gray-400 hover:text-[#e05d44] transition-colors text-sm sm:text-base break-all touch-manipulation"
                  whileHover={{ x: 3 }}
                >
                  info@mako.restaurant
                </motion.a>
              </motion.li>
            </motion.ul>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6"
          variants={bottomBarVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
            <motion.p
              className="text-gray-400 text-xs sm:text-sm text-center md:text-left"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              © {currentYear} Mako Restaurant. All rights reserved.
            </motion.p>
            <motion.p
              className="text-gray-400 text-xs sm:text-sm flex items-center gap-2"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              Made with{" "}
              <motion.span
                animate={{
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <FaHeart className="text-[#e05d44] text-[10px] sm:text-xs" />
              </motion.span>{" "}
              by Mako Team
            </motion.p>
            <motion.div
              className="flex gap-4 sm:gap-6 text-xs sm:text-sm"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <p className="text-gray-400 hover:text-[#e05d44] cursor-pointer transition-colors touch-manipulation py-1">
                Privacy Policy
              </p>
              <p className="text-gray-400 hover:text-[#e05d44] cursor-pointer transition-colors touch-manipulation py-1">
                Terms of Service
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
