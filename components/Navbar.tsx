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

  const navbarVariants = {
    hidden: { y: -100, opacity: 0 } as const,
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    } as const,
  };

  const logoVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    } as const,
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeOut",
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    } as const,
  };

  const mobileItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
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
    <motion.nav
      className="sticky top-0 bg-white z-50 border-b border-gray-200 shadow-sm"
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
      ref={navRef}
    >
      <div className=" px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-18 lg:h-20">
          {/* Logo */}
          <motion.div variants={logoVariants}>
            <Link href="/" className="flex items-center gap-1.5 sm:gap-2">
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <LuChefHat className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-[#e05d44]" />
              </motion.div>
              <h1 className="text-xl sm:text-2xl lg:text-[25px] tracking-widest font-mono font-semibold text-gray-900">
                Mako
              </h1>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex gap-12 xl:gap-16 items-center">
            <motion.ul
              className="flex gap-8 xl:gap-10 text-gray-600"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
            >
              {[
                { href: "/", label: "Home" },
                { href: "/menu", label: "Menu" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <motion.div
                  key={link.href}
                  variants={navItemVariants}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
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
                </motion.div>
              ))}
            </motion.ul>
            <motion.div
              variants={navItemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button type="primary" openBooking={true}>
                Book a Table
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors touch-manipulation"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaTimes className="w-6 h-6 text-gray-700" />
                </motion.div>
              ) : (
                <motion.div
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaBars className="w-6 h-6 text-gray-700" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden fixed w-full bg-white border-t border-gray-100"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className="px-4 sm:px-6 pt-2 pb-6">
              <motion.ul className="space-y-1 mb-6">
                {[
                  { href: "/", label: "Home" },
                  { href: "/menu", label: "Menu" },
                  { href: "/contact", label: "Contact" },
                ].map((link, index) => (
                  <motion.div
                    key={link.href}
                    variants={mobileItemVariants}
                    whileTap={{ scale: 0.97 }}
                  >
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
                  </motion.div>
                ))}
              </motion.ul>
              <motion.div
                className="px-4"
                variants={mobileItemVariants}
                whileTap={{ scale: 0.97 }}
              >
                <Button type="primary" openBooking={true} className="w-full">
                  Book a Table
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
