import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      
      {/* CTA Section from Mockup */}
      <div className="cta-section">
        <div className="cta-content">
          <motion.div 
            className="cta-image-wrapper"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img src="https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&fit=crop&q=80&w=600" alt="Consultation" />
            <div className="measurement-lines"></div>
          </motion.div>
          
          <motion.div 
            className="cta-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2>Punya Pertanyaan?<br/>Konsultasi Gratis Sekarang</h2>
            <motion.a 
              href="https://wa.me/628111451146" 
              target="_blank" 
              rel="noreferrer" 
              className="btn-light wa-cta-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Hubungi via WhatsApp
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Featured In / Certifications */}
      <div className="featured-in">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Klinik Kecantikan Muslimah Terpercaya
        </motion.h3>
        <motion.div 
          className="featured-logos"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
        >
          <motion.span whileHover={{ scale: 1.1, color: "var(--color-primary)" }}>MEMBER OF MAHVEEN</motion.span>
          <motion.span whileHover={{ scale: 1.1, color: "var(--color-primary)" }}>100% HALAL</motion.span>
          <motion.span whileHover={{ scale: 1.1, color: "var(--color-primary)" }}>DOKTER SPESIALIS</motion.span>
          <motion.span whileHover={{ scale: 1.1, color: "var(--color-primary)" }}>FASILITAS PREMIUM</motion.span>
        </motion.div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom-wrapper">
        <div className="container footer-grid">
          
          <motion.div 
            className="footer-subscribe"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h4>Dapatkan Info Promo & Penawaran Terbaru</h4>
            <div className="subscribe-form">
              <input type="email" placeholder="Email Anda" />
              <button type="submit" aria-label="Subscribe">→</button>
            </div>
          </motion.div>

          <motion.div 
            className="footer-links"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="link-column">
              <h4>Layanan Kami</h4>
              <a href="#about">Tentang Kami</a>
              <a href="#reviews">Testimoni</a>
            </div>
            
            <div className="link-column">
              <a href="#faq">FAQ</a>
              <a href="#treatments">Daftar Harga</a>
              <a href="#gallery">Fasilitas</a>
              <a href="#contact">Lokasi</a>
            </div>
          </motion.div>

        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
