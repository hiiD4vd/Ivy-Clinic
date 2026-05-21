import React from 'react';
import { motion } from 'framer-motion';
import './Facilities.css';

// Import room images
import r1 from '../assets/images/ruangan/unnamed.jpg';
import r2 from '../assets/images/ruangan/unnamed (1).jpg';
import r3 from '../assets/images/ruangan/unnamed (2).jpg';
import r4 from '../assets/images/ruangan/unnamed (3).jpg';
import r5 from '../assets/images/ruangan/unnamed (4).jpg';
import r6 from '../assets/images/ruangan/unnamed (5).jpg';
import r7 from '../assets/images/ruangan/unnamed (6).jpg';
import r8 from '../assets/images/ruangan/2024-10-26.jpg';

const Facilities = () => {
  const images = [
    { src: r1, alt: "Ruang Tunggu Ivy Clinic", span: "wide" },
    { src: r2, alt: "Suasana Klinik Depan", span: "normal" },
    { src: r3, alt: "Resepsionis", span: "normal" },
    { src: r4, alt: "Ruang Perawatan", span: "normal" },
    { src: r5, alt: "Peralatan Modern", span: "normal" },
    { src: r6, alt: "Kenyamanan Pasien", span: "normal" },
    { src: r7, alt: "Alat Treatment Lanjutan", span: "normal" },
    { src: r8, alt: "Fasilitas Perawatan", span: "wide" }
  ];

  return (
    <section id="facilities" className="facilities-section section-padding">
      <div className="container">
        
        <motion.div 
          className="facilities-header text-center mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="subtitle" style={{ color: 'var(--color-secondary)', fontSize: '1rem', fontWeight: '600', letterSpacing: '2px', textTransform: 'uppercase' }}>Fasilitas Kami</span>
          <h2 className="section-title">
            Kenyamanan Anda<br />
            Prioritas Kami
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', marginTop: '1rem', fontSize: '1.1rem' }}>
            Lihat fasilitas lengkap dan suasana nyaman di Klinik Ivy Skin Treatment.
          </p>
        </motion.div>

        <div className="facilities-grid">
          {images.map((img, index) => (
            <motion.div 
              key={index} 
              className={`facilities-item ${img.span}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 4) * 0.15 }}
            >
              <div className="facilities-img-wrapper">
                <img src={img.src} alt="Fasilitas Ivy Clinic" className="facilities-img" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
