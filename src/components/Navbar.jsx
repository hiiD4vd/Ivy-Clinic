import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar = ({ onBookClick, onGoHome }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#home' },
    { name: 'Layanan', href: '#treatments' },
    { name: 'Fasilitas', href: '#gallery' },
    { name: 'Testimoni', href: '#reviews' },
    { name: 'Kontak', href: '#contact' },
  ];

  return (
    <motion.nav 
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container nav-container">
        <motion.a 
          href="#home" 
          className="logo"
          onClick={onGoHome}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img src="/logo.jpg" alt="Ivy Clinic Logo" className="nav-logo-img" />
        </motion.a>

        <div className="nav-links desktop-only">
          {navLinks.map((link, index) => (
            <motion.a 
              key={index} 
              href={link.href} 
              className="nav-link"
              onClick={onGoHome}
              whileHover={{ y: -2, color: 'var(--color-primary)' }}
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        <div className="nav-right desktop-only">
          <motion.button 
            onClick={onBookClick}
            className="btn-dark"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Reservasi Online
          </motion.button>
        </div>

        <button 
          className="mobile-menu-btn mobile-only"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link, index) => (
              <motion.a 
                key={index} 
                href={link.href} 
                className="mobile-nav-link"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  if (onGoHome) onGoHome();
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.button 
              onClick={(e) => {
                setIsMobileMenuOpen(false);
                onBookClick(e);
              }}
              className="btn-dark mobile-btn"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Reservasi Online
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
