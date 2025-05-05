import React from "react";

export default function Navbar() {
    return (
      <nav className="flex justify-between items-center px-10 py-5 shadow-md bg-white sticky top-0 z-50">
        <div className="text-2xl font-bold text-blue-600 flex items-center gap-2">
          ✈️ JetJourney
        </div>
        <div className="space-x-8 font-medium text-gray-700">
          <a href="#">Home</a>
          <a href="#">Flight Search</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
      </nav>
    );
  }