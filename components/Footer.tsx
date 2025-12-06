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
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">Mako</h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Experience the finest dining in Lagos. Where modern cuisine meets
              timeless flavors, creating unforgettable moments.
            </p>
            <div className="flex gap-4">
              <span
                className="p-3 bg-gray-800 rounded-lg hover:bg-[#e05d44] transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <FaInstagram className="text-xl" />
              </span>
              <span
                className="p-3 bg-gray-800 rounded-lg hover:bg-[#e05d44] transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <FaFacebook className="text-xl" />
              </span>
              <span
                className="p-3 bg-gray-800 rounded-lg hover:bg-[#e05d44] transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <FaTwitter className="text-xl" />
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#e05d44] transition-colors duration-300 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-[#e05d44] rounded-full"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/menu"
                  className="hover:text-[#e05d44] transition-colors duration-300 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-[#e05d44] rounded-full"></span>
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#e05d44] transition-colors duration-300 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-[#e05d44] rounded-full"></span>
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#e05d44] transition-colors duration-300 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-[#e05d44] rounded-full"></span>
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Opening Hours</h3>
            <ul className="space-y-3">
              <li className="flex justify-between">
                <span className="text-gray-400">Monday - Thursday</span>
                <span className="text-white font-semibold">11am - 10pm</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-400">Friday - Saturday</span>
                <span className="text-white font-semibold">11am - 11pm</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-400">Sunday</span>
                <span className="text-white font-semibold">12pm - 9pm</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-[#e05d44] text-lg mt-1 flex-shrink-0" />
                <span className="text-gray-400 leading-relaxed">
                  123 Victoria Island
                  <br />
                  Lagos, Nigeria
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-[#e05d44] text-lg flex-shrink-0" />
                <span className="text-gray-400 transition-colors">
                  +234 123 456 7890
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-[#e05d44] text-lg flex-shrink-0" />
                <span className="text-gray-400 transition-colors">
                  info@mako.restaurant
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Mako Restaurant. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-2">
              Made with <FaHeart className="text-[#e05d44] text-xs" /> by Mako
              Team
            </p>
            <div className="flex gap-6 text-sm">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-[#e05d44] transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-[#e05d44] transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
