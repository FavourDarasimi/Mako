"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Button from "./Button";
import { LuChefHat } from "react-icons/lu";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const navRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <nav
      className="sticky top-0 bg-white z-50 border-b border-gray-200 shadow-sm"
      ref={navRef}
    >
      <div className=" px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-18 lg:h-20">
          {/* Logo */}
          <div>
            <Link href="/" className="flex items-center gap-1.5 sm:gap-2">
              <div>
                <LuChefHat className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-[#e05d44]" />
              </div>
              <h1 className="text-xl sm:text-2xl lg:text-[25px] tracking-widest font-mono font-semibold text-gray-900">
                Mako
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex gap-12 xl:gap-16 items-center">
            <ul className="flex gap-8 xl:gap-10 text-gray-600">
              {[
                { href: "/", label: "Home" },
                { href: "/menu", label: "Menu" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <div key={link.href}>
                  <Link href={link.href} onClick={closeMobileMenu}>
                    <li
                      className={`hover:text-black cursor-pointer font-semibold transition-colors pb-1 ${
                        pathname === link.href
                          ? "border-b-2 border-[#e05d44] text-black"
                          : ""
                      }`}
                    >
                      {link.label}
                    </li>
                  </Link>
                </div>
              ))}
            </ul>
            <div>
              <Button type="primary" openBooking={true}>
                Book a Table
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors touch-manipulation"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <div key="close">
                  <FaTimes className="w-6 h-6 text-gray-700" />
                </div>
              ) : (
                <div key="open">
                  <FaBars className="w-6 h-6 text-gray-700" />
                </div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}

      {isMobileMenuOpen && (
        <div className="lg:hidden fixed w-full bg-white border-t border-gray-100">
          <div className="px-4 sm:px-6 pt-2 pb-6">
            <ul className="space-y-1 mb-6">
              {[
                { href: "/", label: "Home" },
                { href: "/menu", label: "Menu" },
                { href: "/contact", label: "Contact" },
              ].map((link, index) => (
                <div key={link.href}>
                  <Link href={link.href} onClick={closeMobileMenu}>
                    <li
                      className={`px-4 py-3 rounded-lg hover:bg-gray-50 cursor-pointer font-semibold transition-all touch-manipulation ${
                        pathname === link.href
                          ? "bg-[#e05d44]/10 text-[#e05d44] "
                          : "text-gray-600"
                      }`}
                    >
                      {link.label}
                    </li>
                  </Link>
                </div>
              ))}
            </ul>
            <div className="px-4">
              <Button type="primary" openBooking={true} className="w-full">
                Book a Table
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
