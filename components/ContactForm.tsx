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
  const [submitMessage, setSubmitMessage] = useState("");

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
      setSubmitMessage("Thank you! We'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        guests: "2",
        date: "",
        time: "",
        message: "",
      });

      setTimeout(() => {
        setSubmitMessage("");
      }, 5000);
    }, 1500);
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
      <div className="lg:col-span-1 space-y-8">
        <div className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-[#e05d44]/50 transition-all duration-300 shadow-sm hover:scale-105">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-[#e05d44]/10 rounded-lg">
              <FaMapMarkerAlt className="text-[#e05d44] text-xl" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Location</h3>
              <p className="text-gray-600 leading-relaxed">
                123 Victoria Island
                <br />
                Lagos, Nigeria
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-[#e05d44]/50 transition-all duration-300 shadow-sm hover:scale-105">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-[#e05d44]/10 rounded-lg">
              <FaPhone className="text-[#e05d44] text-xl" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600">+234 123 456 7890</p>
              <p className="text-gray-600">+234 098 765 4321</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-[#e05d44]/50 transition-all duration-300 shadow-sm hover:scale-105">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-[#e05d44]/10 rounded-lg">
              <FaEnvelope className="text-[#e05d44] text-xl" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">info@mako.restaurant</p>
              <p className="text-gray-600">reservations@mako.restaurant</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-[#e05d44]/50 transition-all duration-300 shadow-sm hover:scale-105">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-[#e05d44]/10 rounded-lg">
              <FaClock className="text-[#e05d44] text-xl" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Opening Hours
              </h3>
              <div className="space-y-1 text-gray-600">
                <p>Monday - Thursday: 11am - 10pm</p>
                <p>Friday - Saturday: 11am - 11pm</p>
                <p>Sunday: 12pm - 9pm</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a
              href="#"
              className="p-3 bg-gray-100 rounded-lg hover:bg-[#e05d44] hover:text-white transition-colors"
            >
              <FaInstagram className="text-gray-700 hover:text-white text-xl" />
            </a>
            <a
              href="#"
              className="p-3 bg-gray-100 rounded-lg hover:bg-[#e05d44] hover:text-white transition-colors"
            >
              <FaFacebook className="text-gray-700 hover:text-white text-xl" />
            </a>
            <a
              href="#"
              className="p-3 bg-gray-100 rounded-lg hover:bg-[#e05d44] hover:text-white transition-colors"
            >
              <FaTwitter className="text-gray-700 hover:text-white text-xl" />
            </a>
          </div>
        </div>
      </div>

      <div className="lg:col-span-2">
        <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Send us a Message
          </h2>

          {submitMessage && (
            <div className="mb-6 p-4 bg-[#e05d44]/10 border border-[#e05d44] rounded-lg">
              <p className="text-[#e05d44] font-medium">{submitMessage}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-[#e05d44] transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-[#e05d44] transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-[#e05d44] transition-all"
                  placeholder="+234 123 456 7890"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-[#e05d44] transition-all resize-none"
                placeholder="Tell us about your reservation or inquiry..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#e05d44] hover:scale-105 duration-300 py-4 rounded-lg text-white font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
