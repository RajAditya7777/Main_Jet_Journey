import React from "react";
import { motion } from "framer-motion";
import { Plane } from "lucide-react";

const TrackButton = ({ onClick }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="group relative inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-blue-600 text-white text-lg font-semibold rounded-full overflow-hidden transition-all duration-300 hover:bg-blue-700 hover:shadow-[0_0_20px_rgba(37,99,235,0.5)]"
    >
      <span className="relative z-10">Track Flight</span>
      <motion.div
        className="relative z-10"
        animate={{ x: [0, 5, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Plane className="w-5 h-5 fill-current" />
      </motion.div>

      {/* Glow effect */}
      <div className="absolute inset-0 rounded-full ring-2 ring-white/20 group-hover:ring-white/40 transition-all duration-300" />

      {/* Shine effect */}
      <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:animate-shine" />
    </motion.button>
  );
};

export default TrackButton;