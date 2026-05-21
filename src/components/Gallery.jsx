import React from 'react';
import { motion } from 'framer-motion';
import './Gallery.css';

// Import new combined before-after images
import ba1 from '../assets/images/before after/1.png';
import ba2 from '../assets/images/before after/2.png';
import ba3 from '../assets/images/before after/3.png';

const Gallery = () => {
  const galleryData = [
    {
      id: 1,
      treatment: 'Peeling Acne Premium',
      desc: '1x pemakaian + pemakaian paket krim acne',
      image: ba1,
    },
    {
      id: 2,
      treatment: 'Botox Treatment',
      desc: 'Menghilangkan kerutan dan garis halus',
      image: ba2,
    },
    {
      id: 3,
      treatment: 'Tarik Benang Korea + Filler',
      desc: 'Filler dagu 1 cc untuk tampilan v-shape',
      image: ba3,
    }
  ];

  return (
    <section id="gallery" className="gallery-section section-padding">
      <div className="container">
        
        <motion.div 
          className="services-header text-center mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="subtitle">Real Results</span>
          <h2 className="section-title">
            Bukti Nyata<br />
            Before & After
          </h2>
        </motion.div>

        <div className="gallery-grid">
          {galleryData.map((item, index) => (
            <motion.div 
              key={item.id} 
              className="gallery-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="gallery-card-header">
                <h3>{item.treatment}</h3>
                <p>{item.desc}</p>
              </div>
              
              <div className="single-image-container">
                <div className="image-wrapper">
                  <img src={item.image} alt={item.treatment} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;
