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

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1a1a] text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl md:mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 md:place-items-stretch ">
          {/* About Section */}
          <div className="">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
              Mako
            </h2>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-4 sm:mb-6">
              Experience the finest dining in Lagos. Where modern cuisine meets
              timeless flavors, creating unforgettable moments.
            </p>
            <div className="flex gap-3 sm:gap-4 ">
              <div
                className="p-2.5 sm:p-3 bg-gray-800 rounded-lg hover:bg-[#e05d44] transition-all duration-300 touch-manipulation"
                aria-label="Instagram"
              >
                <FaInstagram className="text-lg sm:text-xl" />
              </div>
              <div
                className="p-2.5 sm:p-3 bg-gray-800 rounded-lg hover:bg-[#e05d44] transition-all duration-300 touch-manipulation"
                aria-label="Facebook"
              >
                <FaFacebook className="text-lg sm:text-xl" />
              </div>
              <div
                className="p-2.5 sm:p-3 bg-gray-800 rounded-lg hover:bg-[#e05d44] transition-all duration-300 touch-manipulation"
                aria-label="Twitter"
              >
                <FaTwitter className="text-lg sm:text-xl" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">
              Quick Links
            </h3>
            <ul className="space-y-2.5 sm:space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/menu", label: "Menu" },
                { href: "/contact", label: "Contact" },
                { href: "/contact", label: "FAQs" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="hover:text-[#e05d44] transition-colors duration-300 flex items-center gap-2 t text-sm sm:text-base touch-manipulation py-1"
                  >
                    <span className="w-1.5 h-1.5 bg-[#e05d44] rounded-full shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">
              Opening Hours
            </h3>
            <ul className="space-y-2.5 sm:space-y-3">
              {[
                { days: "Monday - Thursday", hours: "11am - 10pm" },
                { days: "Friday - Saturday", hours: "11am - 11pm" },
                { days: "Sunday", hours: "12pm - 9pm" },
              ].map((schedule, index) => (
                <li
                  key={index}
                  className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4"
                >
                  <span className="text-gray-400 text-sm sm:text-base">
                    {schedule.days}
                  </span>
                  <span className="text-white font-semibold text-sm sm:text-base">
                    {schedule.hours}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">
              Get in Touch
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-3 t">
                <FaMapMarkerAlt className="text-[#e05d44] text-base sm:text-lg mt-1 shrink-0" />
                <span className="text-gray-400 leading-relaxed text-sm sm:text-base">
                  123 Victoria Island
                  <br />
                  Lagos, Nigeria
                </span>
              </li>
              <li className="flex items-center gap-3 t">
                <FaPhone className="text-[#e05d44] text-base sm:text-lg shrink-0" />
                <a
                  href="tel:+2341234567890"
                  className="text-gray-400 hover:text-[#e05d44] transition-colors text-sm sm:text-base touch-manipulation"
                >
                  +234 123 456 7890
                </a>
              </li>
              <li className="flex items-center gap-3 t">
                <FaEnvelope className="text-[#e05d44] text-base sm:text-lg shrink-0" />
                <a
                  href="mailto:info@mako.restaurant"
                  className="text-gray-400 hover:text-[#e05d44] transition-colors text-sm sm:text-base break-all touch-manipulation"
                >
                  info@mako.restaurant
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-gray-400 text-xs sm:text-sm text-center md:text-left">
              © {currentYear} Mako Restaurant. All rights reserved.
            </p>
            <p className="text-gray-400 text-xs sm:text-sm flex items-center gap-2">
              Made with{" "}
              <span>
                <FaHeart className="text-[#e05d44] text-[10px] sm:text-xs" />
              </span>{" "}
              by Mako Team
            </p>
            <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm">
              <p className="text-gray-400 hover:text-[#e05d44] cursor-pointer transition-colors touch-manipulation py-1">
                Privacy Policy
              </p>
              <p className="text-gray-400 hover:text-[#e05d44] cursor-pointer transition-colors touch-manipulation py-1">
                Terms of Service
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
