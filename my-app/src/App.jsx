import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/Hero';

import FlightSearch from './components/FlightSearch';
import About from './components/About';
import Contact from './components/Contact';




function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/flight-search" element={<FlightSearch />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
