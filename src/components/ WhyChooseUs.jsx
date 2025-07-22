import React from "react";
import { FaClock, FaPlane, FaMapMarkerAlt, FaMobileAlt, FaShieldAlt, FaHeadphones } from "react-icons/fa";
import Footer from './footer';

const features = [
    {
      icon: <FaClock className="text-blue-600 text-3xl mb-3" />,
      title: "Real-Time Updates",
      desc: "Get live status updates on departures, arrivals, delays, and gate changes as they happen.",
    },
    {
      icon: <FaPlane className="text-blue-600 text-3xl mb-3" />,
      title: "Comprehensive Coverage",
      desc: "Track flights from all major airlines and airports around the world.",
    },
    {
      icon: <FaMapMarkerAlt className="text-blue-600 text-3xl mb-3" />,
      title: "Detailed Flight Information",
      desc: "Access complete flight details including terminal, gate, and baggage claim information.",
    },
    {
      icon: <FaMobileAlt className="text-blue-600 text-3xl mb-3" />,
      title: "Mobile Friendly",
      desc: "Check flight status on-the-go with our responsive design that works on all devices.",
    },
    {
      icon: <FaShieldAlt className="text-blue-600 text-3xl mb-3" />,
      title: "Reliable Data",
      desc: "Accurate flight information sourced directly from airlines and airports.",
    },
    {
      icon: <FaHeadphones className="text-blue-600 text-3xl mb-3" />,
      title: "24/7 Support",
      desc: "Our customer support team is available around the clock to assist you.",
    },
  ];


export default function WhyChooseUs() {
    return(
        <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose JetJourney</h2>
          <p className="text-gray-600 mb-12">
            Stay informed with accurate and timely flight information, making your travel experience smooth and stress-free.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-left  hover:shadow-lg transition duration-300 hover:-translate-y-1">
                {feature.icon}
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>

        </div>
       
        
      </section>
      
    );
    
}