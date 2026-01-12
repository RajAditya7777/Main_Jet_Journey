import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/clerk-react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Tracker", path: "/flight-search" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  // Dynamic colors based on scroll state
  const textColor = scrolled ? "text-gray-900" : "text-white";
  const hoverColor = scrolled ? "hover:text-blue-600" : "hover:text-blue-200";
  const activeColor = scrolled ? "text-blue-600" : "text-blue-300";
  const buttonTextColor = scrolled ? "text-gray-700 hover:text-blue-600" : "text-white hover:text-blue-200";

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-white/90 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2 group">
          <motion.div
            whileHover={{ rotate: 15 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img src="/plane-logo.svg" alt="JetJourney Logo" className={`w-8 h-8 ${!scrolled && 'brightness-0 invert'}`} />
          </motion.div>
          <span className={`text-2xl font-bold transition-colors duration-300 ${scrolled ? 'bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500' : 'text-white'}`}>
            JetJourney
          </span>
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors relative ${hoverColor} ${isActive ? activeColor : textColor
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {(isActive) && (
                    <motion.div
                      layoutId="navbar-underline"
                      className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full ${scrolled ? 'bg-blue-600' : 'bg-blue-300'}`}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <SignedOut>
            <SignInButton mode="modal">
              <button className={`text-sm font-medium transition-colors ${buttonTextColor}`}>
                Sign In
              </button>
            </SignInButton>
            <SignUpButton mode="modal">
              <button className="px-5 py-2 text-sm font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                Get Started
              </button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/"
              appearance={{
                elements: {
                  avatarBox: "w-9 h-9 border-2 border-white shadow-sm"
                }
              }}
            />
          </SignedIn>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden p-2 transition-colors ${textColor} ${hoverColor}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 overflow-hidden shadow-xl"
          >
            <div className="px-4 pt-4 pb-8 space-y-2 flex flex-col items-center">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-3 text-base font-medium rounded-lg w-full text-center transition-colors ${isActive
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-700 hover:bg-gray-50"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <div className="pt-6 flex flex-col gap-3 w-full items-center border-t border-gray-100 mt-4 px-4">
                <SignedOut>
                  <SignInButton mode="modal">
                    <button className="w-full py-3 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                      Sign In
                    </button>
                  </SignInButton>
                  <SignUpButton mode="modal">
                    <button className="w-full py-3 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 shadow-md transition-all">
                      Get Started
                    </button>
                  </SignUpButton>
                </SignedOut>
                <SignedIn>
                  <div className="py-2 flex items-center gap-2">
                    <span className="text-gray-600 text-sm">Signed in as</span>
                    <UserButton afterSignOutUrl="/" showName />
                  </div>
                </SignedIn>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}