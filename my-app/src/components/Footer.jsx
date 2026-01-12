import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10 px-6 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

        {/* Brand Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 p-2 rounded-lg">
              <img src="/plane-logo.svg" alt="JetJourney Logo" className="w-6 h-6 invert brightness-0" />
            </div>
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">JetJourney</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Experience the future of flight tracking. Real-time accuracy, comprehensive data, and a seamless journey from takeoff to landing.
          </p>
          <div className="flex gap-4">
            {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-300">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-6 text-white">Quick Links</h3>
          <ul className="space-y-4">
            {[
              { name: 'Home', path: '/' },
              { name: 'Flight Tracker', path: '/flight-search' },
              { name: 'About Us', path: '/about' },
              { name: 'Contact', path: '/contact' }
            ].map((link) => (
              <li key={link.name}>
                <Link to={link.path} className="text-gray-400 hover:text-blue-400 transition-colors text-sm font-medium flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Airlines */}
        <div>
          <h3 className="font-bold text-lg mb-6 text-white">Popular Airlines</h3>
          <ul className="space-y-4 text-gray-400 text-sm">
            {['Delta Air Lines', 'American Airlines', 'United Airlines', 'British Airways', 'Lufthansa'].map((airline, i) => (
              <li key={i} className="hover:text-blue-300 transition-colors cursor-pointer">{airline}</li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-bold text-lg mb-6 text-white">Contact Us</h3>
          <ul className="space-y-6 text-gray-400 text-sm">
            <li className="flex items-start gap-4">
              <div className="mt-1 w-8 h-8 rounded-full bg-gray-800 flex flex-shrink-0 items-center justify-center text-blue-400">
                <FaMapMarkerAlt size={14} />
              </div>
              <span className="leading-relaxed">Sky Tower, 123 Flight Street<br />New York, NY 10001</span>
            </li>
            <li className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-gray-800 flex flex-shrink-0 items-center justify-center text-blue-400">
                <FaPhoneAlt size={14} />
              </div>
              <span>(555) 123-4567</span>
            </li>
            <li className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-gray-800 flex flex-shrink-0 items-center justify-center text-blue-400">
                <FaEnvelope size={14} />
              </div>
              <span>info@jetjourney.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
        <p>© 2025 JetJourney. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
