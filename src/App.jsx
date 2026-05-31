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
  const [showProposal, setShowProposal] = useState(false);

  const handleBookingClick = (e) => {
    e.preventDefault();
    setShowProposal(true);
  };

  const handleGoHome = () => {
    setShowProposal(false);
  };

  return (
    <>
      <Navbar onBookClick={handleBookingClick} onGoHome={handleGoHome} />
      {showProposal ? (
        <ProposalScreen onClose={() => setShowProposal(false)} />
      ) : (
        <>
          <Hero onBookClick={handleBookingClick} />
          <About />
          <Team />
          <Treatments />
          <Shop />
          <Gallery />
          <Testimonials />
          <Facilities />
          <Contact onBookClick={handleBookingClick} />
        </>
      )}
      <Footer onBookClick={handleBookingClick} />
    </>
  );
}

export default App;
