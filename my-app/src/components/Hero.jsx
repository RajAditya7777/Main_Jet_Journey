import React from 'react'
import TrackButton from '../miniComponents/TrackButton';
import WhyChooseUs from './ WhyChooseUs';
import { useNavigate } from 'react-router-dom';

export default function HeroSection() {

  const navigate = useNavigate();

  const handleTrackFlight = () => {
    navigate('/flight-search');
  }
  return (
    <section className="relative bg-cover bg-center text-white w-screen h-[60vh] " style={{ backgroundImage: "url('/takeoff.png')"}}>
      <div className='w-full h-full bg-[#0c438bda] flex flex-col justify-center items-center'>
        <div className="max-w-4xl mx-auto text-center flex flex-col justify-center items-center">
          <h1 className="text-7xl font-extrabold mb-4">Track Your Flight Journey</h1>
          <p className="text-lg md:text-xl mb-6 font-light">Real-time updates on flight status, delays, and gate changes – all in one place.</p>
          <div className="flex justify-center gap-4">
            <TrackButton onClick={handleTrackFlight} />
          </div>
        </div>
      </div>
      <WhyChooseUs />
    </section>
  );
}
