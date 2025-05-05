import React from 'react';

export default function HeroSection() {
    return (
      <section className="relative bg-cover bg-center text-blue-600 py-28 px-4" style={{ backgroundImage: `url('/your-path/plane-bg.jpg')` }}>
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Track Your Flight Journey</h1>
          <p className="text-lg md:text-xl mb-6">Real-time updates on flight status, delays, and gate changes – all in one place.</p>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-blue-600 font-semibold px-6 py-2 rounded-lg hover:bg-blue-100">Search Flights</button>
            <button className="border border-white font-semibold px-6 py-2 rounded-lg hover:bg-white hover:text-blue-600">Learn More</button>
          </div>
        </div>
      </section>
    );
  }