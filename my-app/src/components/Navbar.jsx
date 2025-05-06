import React from "react";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/clerk-react"; 

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-5 shadow-md bg-white sticky top-0 z-50 rounded- ">
      <div className="text-2xl font-bold text-blue-600 flex items-center gap-2">
        ✈️ JetJourney
      </div>
      <div className="space-x-8 font-medium text-gray-700 ">
        <Link to="/">Home</Link>
        <Link to="/flight-search">Tracker</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div className="flex space-x-2">
        <SignedOut>
          <SignInButton className="cursor-pointer"/>
          <SignUpButton className="cursor-pointer"/>
        </SignedOut>
        <SignedIn className="wx-10">
          <UserButton className="cursor-pointer"/>
        </SignedIn>
      </div>
    </nav>
  );
}