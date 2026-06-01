import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Team from './components/Team';
import Treatments from './components/Treatments';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Facilities from './components/Facilities';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProposalScreen from './components/ProposalScreen';
import Shop from './components/Shop';

function App() {
  const [proposalType, setProposalType] = useState(null);

  const handleBookingClick = (e, type = 'booking') => {
    if (e && e.preventDefault) e.preventDefault();
    setProposalType(type);
  };

  const handleGoHome = () => {
    setProposalType(null);
  };

  return (
    <>
      <Navbar onBookClick={handleBookingClick} onGoHome={handleGoHome} />
      
      <Hero onBookClick={handleBookingClick} />
      <About />
      <Team />
      <Treatments onBookClick={handleBookingClick} />
      <Shop onBookClick={(e) => handleBookingClick(e, 'shop')} />
      <Gallery />
      <Testimonials />
      <Facilities />
      <Contact onBookClick={handleBookingClick} />
      <Footer onBookClick={handleBookingClick} />

      {proposalType && (
        <ProposalScreen type={proposalType} onClose={() => setProposalType(null)} />
      )}
    </>
  );
}

export default App;
