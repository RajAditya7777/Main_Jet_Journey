import React from 'react'
import TrackButton from '../miniComponents/TrackButton';
import WhyChooseUs from './ WhyChooseUs';
import { useNavigate } from 'react-router-dom';

import Footer from './footer';

export default function HeroSection() {

  const navigate = useNavigate();

  const handleTrackFlight = () => {
    navigate('/flight-search');
  }
  return (
    <>
    <section className="relative bg-cover bg-center text-white w-full h-[50vh] sm:h-[60vh]" style={{ backgroundImage: "url('/takeoff.png')"}}>
      <div className='w-full h-full bg-[#0c438bda] flex flex-col justify-center items-center'>
        <div className="max-w-4xl mx-auto text-center flex flex-col justify-center items-center px-4 sm:px-8 md:px-0">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold mb-4">Track Your Flight Journey</h1>
          <p className="text-base sm:text-lg md:text-xl mb-6 font-light">Real-time updates on flight status, delays, and gate changes – all in one place.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 w-full">
            <TrackButton onClick={handleTrackFlight} />
          </div>
        </div>
      </div>
    </section>
      <WhyChooseUs />
      <Footer />
    </>
  );
}
