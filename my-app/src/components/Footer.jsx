import {FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const footer = () => {
  return (
    <footer className="bg-[#0047AB] text-white mb-0 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        
        <div>
          <div className="flex items-center gap-2 mb-4">
            
            <img src="/plane-logo.svg" alt="JetJourney Logo" className="w-8 h-8" />
            <span className="text-white font-bold text-xl">JetJourney</span>
          </div>
          <p className="text-sm text-[#BAE2FF]">
            Track your flights in real-time with JetJourney's premium flight status tracking service.
          </p>
          <div className="flex gap-3 mt-6">
        
          </div>
        </div>

        
        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-[#BAE2FF] text-sm">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/flight-search" className="hover:text-white">Flight Search</Link></li>
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        
        <div>
          <h3 className="font-semibold text-lg mb-4">Featured Airlines</h3>
          <ul className="space-y-2 text-[#BAE2FF] text-sm">
            <li>Delta Air Lines</li>
            <li>American Airlines</li>
            <li>United Airlines</li>
            <li>Southwest Airlines</li>
            <li>British Airways</li>
            <li>Air France</li>
            <li>Lufthansa</li>
          </ul>
        </div>

        
        <div>
          <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
          <ul className="space-y-4 text-[#BAE2FF] text-sm">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-blue-300 mt-1" />
              Sky Tower, 123 Flight Street<br />
              New York, NY 10001
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-blue-300" /> (555) 123-4567
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-blue-300" /> info@jetjourney.com
            </li>
          </ul>
        </div>
      </div>

      
      <div className="border-t border-blue-500 mt-12 pt-6 text-center text-[#BAE2FF] text-sm">
        © 2025 JetJourney. All rights reserved.
      </div>
    </footer>
  );
};

export default footer;
