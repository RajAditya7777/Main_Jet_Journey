import React from 'react';
import TrackButton from '../miniComponents/TrackButton';
import WhyChooseUs from './ WhyChooseUs';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer'; // Fixed casing
import { motion } from 'framer-motion';

export default function HeroSection() {
  const navigate = useNavigate();

  const handleTrackFlight = () => {
    navigate('/flight-search');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 scale-105"
          style={{ backgroundImage: "url('/takeoff.png')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent sm:bg-black/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight drop-shadow-lg">
              Track Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Flight Journey</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-lg sm:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md"
          >
            Real-time updates on flight status, delays, and gate changes – detailed insights all in one place.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center"
          >
            <TrackButton onClick={handleTrackFlight} />
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-white/70"
        >
          <span className="text-xs uppercase tracking-widest">Scroll Down</span>
          <div className="w-0.5 h-12 bg-white/20 rounded-full overflow-hidden">
            <motion.div
              animate={{ y: [0, 50, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-full h-1/2 bg-white/60 blur-sm"
            />
          </div>
        </motion.div>
      </section>

      <WhyChooseUs />
      <Footer />
    </div>
  );
}
