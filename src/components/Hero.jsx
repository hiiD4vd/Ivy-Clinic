import React from 'react';
import { Star, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import heroImg from '../assets/images/hero.jpg';
import './Hero.css';

const Hero = ({ onBookClick }) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id="home" className="hero-section">
      <motion.div 
        className="hero-gradient-blob"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      ></motion.div>
      
      <div className="container hero-container">
        
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 className="hero-title" variants={itemVariants}>
            Langkah Awal<br />
            Menuju Kecantikan<br />
            Abadi
          </motion.h1>
          
          <motion.p className="hero-subtitle" variants={itemVariants}>
            Member of Mahveen Skincare. Menyediakan perawatan kecantikan, kosmetik & perawatan diri terbaik untuk Anda. Buka setiap hari 09.00-17.00 WIB.
          </motion.p>

          <motion.div className="hero-buttons" variants={itemVariants}>
            <button 
              onClick={onBookClick}
              className="btn-dark"
            >
              Reservasi Online
            </button>
            <a href="#treatments" className="btn-outline">Lihat Treatment</a>
          </motion.div>

          <motion.div className="reviews-widget" variants={itemVariants}>
            <h4>Ulasan Pelanggan</h4>
            <motion.div 
              className="review-item"
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img src="https://i.pravatar.cc/100?img=1" alt="Reviewer" className="reviewer-img" />
              <div className="review-text">
                <p>Sangat puas dengan hasil facialnya, wajah jadi auto glowing!</p>
              </div>
              <div className="review-score">5.0 <Star size={12} fill="currentColor" /></div>
            </motion.div>
            <motion.div 
              className="review-item"
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img src="https://i.pravatar.cc/100?img=5" alt="Reviewer" className="reviewer-img" />
              <div className="review-text">
                <p>Sangat senang dengan pelayanannya, dokter sangat ramah.</p>
              </div>
              <div className="review-score">5.0 <Star size={12} fill="currentColor" /></div>
            </motion.div>
          </motion.div>
        </motion.div>

        <div className="hero-visuals">
          <motion.div 
            className="oval-image-wrapper"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <img src={heroImg} alt="Klinik Ivy Skin Treatment" className="oval-img" />
            
            <motion.a 
              href="#treatments" 
              className="circle-btn get-started-btn"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 1 }}
              whileHover={{ scale: 1.1, rotate: 15 }}
            >
              Mulai<br/>Sekarang
            </motion.a>
          </motion.div>

          <motion.div 
            className="side-content"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="feature-box" variants={itemVariants}>
              <h3>Aman & Nyaman</h3>
              <p>Nikmati perawatan dengan produk yang aman dan teruji. Kami berdedikasi membantu Anda mencapai kulit sehat bercahaya.</p>
              <p>Rasakan pengalaman terbaik dengan dokter dan terapis ahli kami.</p>
            </motion.div>
            
            <motion.div 
              className="video-box" 
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <img src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=300" alt="Video preview" />
              <button className="play-btn">
                <Play fill="currentColor" size={16} />
              </button>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
