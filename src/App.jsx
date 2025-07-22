import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import HeroSection from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import SearchFlight from './components/SearchFlight';

function App() {
  const [tab, setTab] = useState('home');

  return (
    <BrowserRouter>
      <Navbar currentTab={tab} />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/flight-search" element={<SearchFlight setTab={setTab} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
