import React from "react";
import { FaClock, FaPlane, FaMapMarkerAlt, FaMobileAlt, FaShieldAlt, FaHeadphones } from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  {
    icon: <FaClock className="text-3xl mb-4" />,
    title: "Real-Time Updates",
    desc: "Get live status updates on departures, arrivals, delays, and gate changes as they happen.",
    color: "text-blue-500",
    bg: "bg-blue-50"
  },
  {
    icon: <FaPlane className="text-3xl mb-4" />,
    title: "Comprehensive Coverage",
    desc: "Track flights from all major airlines and airports around the world.",
    color: "text-cyan-500",
    bg: "bg-cyan-50"
  },
  {
    icon: <FaMapMarkerAlt className="text-3xl mb-4" />,
    title: "Detailed Flight Information",
    desc: "Access complete flight details including terminal, gate, and baggage claim information.",
    color: "text-emerald-500",
    bg: "bg-emerald-50"
  },
  {
    icon: <FaMobileAlt className="text-3xl mb-4" />,
    title: "Mobile Friendly",
    desc: "Check flight status on-the-go with our responsive design that works on all devices.",
    color: "text-violet-500",
    bg: "bg-violet-50"
  },
  {
    icon: <FaShieldAlt className="text-3xl mb-4" />,
    title: "Reliable Data",
    desc: "Accurate flight information sourced directly from airlines and airports.",
    color: "text-rose-500",
    bg: "bg-rose-50"
  },
  {
    icon: <FaHeadphones className="text-3xl mb-4" />,
    title: "24/7 Support",
    desc: "Our customer support team is available around the clock to assist you.",
    color: "text-amber-500",
    bg: "bg-amber-50"
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">Why Choose JetJourney</h2>
          <p className="text-xl text-gray-500 mb-16 max-w-2xl mx-auto">
            Stay informed with accurate and timely flight information, making your travel experience smooth and stress-free.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-start text-left group"
            >
              <div className={`p-4 rounded-xl ${feature.bg} ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}