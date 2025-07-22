import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/clerk-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const baseClass = "hover:text-blue-500 transition duration-150";
  const activeClass = "text-blue-600 font-semibold";

  return (
    <nav className="flex flex-wrap justify-between items-center px-4 sm:px-8 md:px-10 py-5 shadow-md bg-white sticky top-0 z-50">
      <div className="text-2xl font-bold text-black flex items-center gap-2">
        <img src="/plane-logo.svg" alt="JetJourney Logo" className="w-8 h-8" />
        JetJourney
      </div>
      {/* Hamburger for mobile */}
      <button
        className="sm:hidden block text-3xl focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span>{menuOpen ? "✕" : "☰"}</span>
      </button>
      {/* Nav links */}
      <div
        className={`${
          menuOpen ? 'flex' : 'hidden'
        } sm:flex flex-col sm:flex-row w-full sm:w-auto space-y-4 sm:space-y-0 sm:space-x-8 font-medium text-gray-700 mt-4 sm:mt-0`}
      >
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `${baseClass} ${isActive ? activeClass : ""}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/flight-search"
          className={({ isActive }) =>
            `${baseClass} ${isActive ? activeClass : ""}`
          }
        >
          Tracker
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${baseClass} ${isActive ? activeClass : ""}`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `${baseClass} ${isActive ? activeClass : ""}`
          }
        >
          Contact
        </NavLink>
      </div>
      {/* Auth buttons */}
      <div className="flex space-x-2 mt-4 sm:mt-0">
        <SignedOut>
          <SignInButton className="cursor-pointer" />
          <SignUpButton className="cursor-pointer" />
        </SignedOut>
        <SignedIn>
          <UserButton className="cursor-pointer" />
        </SignedIn>
      </div>
    </nav>
  );
}