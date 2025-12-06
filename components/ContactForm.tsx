"use client";

import React, { useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaInstagram,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";
import { toast } from "sonner";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "2",
    date: "",
    time: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        guests: "2",
        date: "",
        time: "",
        message: "",
      });

      toast.success("Thank you! We'll get back to you soon.");
    }, 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -30 } as const,
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    } as const,
  };

  const formVariants = {
    hidden: { opacity: 0, x: 30 } as const,
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    } as const,
  };

  const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-14 lg:mb-16">
      {/* Contact Info Cards - Left Column */}
      <motion.div
        className="lg:col-span-1 space-y-4 sm:space-y-6 lg:space-y-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Location Card */}
        <motion.div
          className="bg-white p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl border border-gray-200 hover:border-[#e05d44]/50 transition-all duration-300 shadow-sm hover:shadow-md active:scale-[0.98] sm:hover:scale-105"
          variants={cardVariants}
          whileHover={{ y: -5 }}
        >
          <div className="flex items-start gap-3 sm:gap-4">
            <motion.div
              className="p-2.5 sm:p-3 bg-[#e05d44]/10 rounded-lg shrink-0"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <FaMapMarkerAlt className="text-[#e05d44] text-lg sm:text-xl" />
            </motion.div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2">
                Location
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                123 Victoria Island
                <br />
                Lagos, Nigeria
              </p>
            </div>
          </div>
        </motion.div>

        {/* Phone Card */}
        <motion.div
          className="bg-white p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl border border-gray-200 hover:border-[#e05d44]/50 transition-all duration-300 shadow-sm hover:shadow-md active:scale-[0.98] sm:hover:scale-105"
          variants={cardVariants}
          whileHover={{ y: -5 }}
        >
          <div className="flex items-start gap-3 sm:gap-4">
            <motion.div
              className="p-2.5 sm:p-3 bg-[#e05d44]/10 rounded-lg shrink-0"
              whileHover={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ duration: 0.5 }}
            >
              <FaPhone className="text-[#e05d44] text-lg sm:text-xl" />
            </motion.div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2">
                Phone
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                +234 123 456 7890
              </p>
              <p className="text-sm sm:text-base text-gray-600">
                +234 098 765 4321
              </p>
            </div>
          </div>
        </motion.div>

        {/* Email Card */}
        <motion.div
          className="bg-white p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl border border-gray-200 hover:border-[#e05d44]/50 transition-all duration-300 shadow-sm hover:shadow-md active:scale-[0.98] sm:hover:scale-105"
          variants={cardVariants}
          whileHover={{ y: -5 }}
        >
          <div className="flex items-start gap-3 sm:gap-4">
            <motion.div
              className="p-2.5 sm:p-3 bg-[#e05d44]/10 rounded-lg shrink-0"
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3 }}
            >
              <FaEnvelope className="text-[#e05d44] text-lg sm:text-xl" />
            </motion.div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2">
                Email
              </h3>
              <p className="text-sm sm:text-base text-gray-600 break-all">
                info@mako.restaurant
              </p>
              <p className="text-sm sm:text-base text-gray-600 break-all">
                reservations@mako.restaurant
              </p>
            </div>
          </div>
        </motion.div>

        {/* Hours Card */}
        <motion.div
          className="bg-white p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl border border-gray-200 hover:border-[#e05d44]/50 transition-all duration-300 shadow-sm hover:shadow-md active:scale-[0.98] sm:hover:scale-105"
          variants={cardVariants}
          whileHover={{ y: -5 }}
        >
          <div className="flex items-start gap-3 sm:gap-4">
            <motion.div
              className="p-2.5 sm:p-3 bg-[#e05d44]/10 rounded-lg shrink-0"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <FaClock className="text-[#e05d44] text-lg sm:text-xl" />
            </motion.div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2">
                Opening Hours
              </h3>
              <div className="space-y-0.5 sm:space-y-1 text-gray-600 text-sm sm:text-base">
                <p>Monday - Thursday: 11am - 10pm</p>
                <p>Friday - Saturday: 11am - 11pm</p>
                <p>Sunday: 12pm - 9pm</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Social Media Card */}
        <motion.div
          className="bg-white p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl border border-gray-200 shadow-sm"
          variants={cardVariants}
        >
          <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4">
            Follow Us
          </h3>
          <div className="flex gap-3 sm:gap-4">
            <motion.a
              href="#"
              aria-label="Instagram"
              className="p-2.5 sm:p-3 bg-gray-100 rounded-lg hover:bg-[#e05d44] transition-all duration-300 group touch-manipulation"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaInstagram className="text-gray-700 group-hover:text-white text-lg sm:text-xl transition-colors" />
            </motion.a>
            <motion.a
              href="#"
              aria-label="Facebook"
              className="p-2.5 sm:p-3 bg-gray-100 rounded-lg hover:bg-[#e05d44] transition-all duration-300 group touch-manipulation"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaFacebook className="text-gray-700 group-hover:text-white text-lg sm:text-xl transition-colors" />
            </motion.a>
            <motion.a
              href="#"
              aria-label="Twitter"
              className="p-2.5 sm:p-3 bg-gray-100 rounded-lg hover:bg-[#e05d44] transition-all duration-300 group touch-manipulation"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaTwitter className="text-gray-700 group-hover:text-white text-lg sm:text-xl transition-colors" />
            </motion.a>
          </div>
        </motion.div>
      </motion.div>

      {/* Contact Form - Right Column */}
      <motion.div
        className="lg:col-span-2"
        variants={formVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="bg-white p-5 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl border border-gray-200 shadow-sm">
          <motion.h2
            className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Send us a Message
          </motion.h2>

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            {/* Name and Email Row */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
            >
              <motion.div variants={inputVariants}>
                <label className="block text-gray-700 font-medium mb-1.5 sm:mb-2 text-sm sm:text-base">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-white border border-gray-300 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-gray-900 text-sm sm:text-base focus:outline-none focus:border-[#e05d44] focus:ring-2 focus:ring-[#e05d44]/20 transition-all"
                  placeholder="John Doe"
                />
              </motion.div>
              <motion.div variants={inputVariants}>
                <label className="block text-gray-700 font-medium mb-1.5 sm:mb-2 text-sm sm:text-base">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white border border-gray-300 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-gray-900 text-sm sm:text-base focus:outline-none focus:border-[#e05d44] focus:ring-2 focus:ring-[#e05d44]/20 transition-all"
                  placeholder="john@example.com"
                />
              </motion.div>
            </motion.div>

            {/* Phone Field */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div>
                <label className="block text-gray-700 font-medium mb-1.5 sm:mb-2 text-sm sm:text-base">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-white border border-gray-300 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-gray-900 text-sm sm:text-base focus:outline-none focus:border-[#e05d44] focus:ring-2 focus:ring-[#e05d44]/20 transition-all"
                  placeholder="+234 123 456 7890"
                />
              </div>
            </motion.div>

            {/* Message Field */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label className="block text-gray-700 font-medium mb-1.5 sm:mb-2 text-sm sm:text-base">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full bg-white border border-gray-300 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-gray-900 text-sm sm:text-base focus:outline-none focus:border-[#e05d44] focus:ring-2 focus:ring-[#e05d44]/20 transition-all resize-none"
                placeholder="Tell us about your reservation or inquiry..."
              ></textarea>
            </motion.div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#e05d44] hover:bg-[#c94d34] active:scale-[0.98] sm:hover:scale-105 duration-300 py-3 sm:py-4 rounded-lg text-white font-bold text-base sm:text-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-lg hover:shadow-xl transition-all touch-manipulation"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactForm;
