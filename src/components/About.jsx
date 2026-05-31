import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import aboutImg from '../assets/images/ruangan/unnamed.jpg';
import './About.css';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="about-section section-padding">
      <div className="container">
        
        {/* Stats Row */}
        <motion.div 
          className="stats-row"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div className="stat-item" variants={itemVariants}>
            <h3>8.8K+</h3>
            <p>Pengikut Setia<br/>di Instagram</p>
          </motion.div>
          <motion.div className="stat-item" variants={itemVariants}>
            <h3>1.3K+</h3>
            <p>Postingan Edukasi<br/>Kecantikan</p>
          </motion.div>
          <motion.div className="stat-item" variants={itemVariants}>
            <h3>7</h3>
            <p>Hari Seminggu<br/>Selalu Buka</p>
          </motion.div>
          <motion.div className="stat-item" variants={itemVariants}>
            <h3>100%</h3>
            <p>Ramah Muslimah<br/>Kenyamanan Terjamin</p>
          </motion.div>
        </motion.div>

        <div className="about-content-wrapper">
          <motion.div 
            className="about-text-side"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <span className="subtitle">Tentang Ivy Clinic</span>
            <h2 className="section-title text-desktop-left">
              Klinik Kecantikan Muslimah<br/>
              Pertama di Cikarang
            </h2>
            <p className="about-desc">
              Sebagai bagian dari Mahveen Skincare, Ivy Clinic berkomitmen menghadirkan pelayanan kecantikan, kosmetik, dan perawatan diri (Beauty, cosmetic & personal care) terbaik yang mengedepankan nilai-nilai Islami. 
            </p>

            <motion.ul 
              className="check-list about-check-list"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.li variants={itemVariants}>
                <CheckCircle2 size={18} className="check-icon" />
                Member of Mahveen Skincare
              </motion.li>
              <motion.li variants={itemVariants}>
                <CheckCircle2 size={18} className="check-icon" />
                Buka Setiap Hari 09.00 - 17.00 WIB
              </motion.li>
              <motion.li variants={itemVariants}>
                <CheckCircle2 size={18} className="check-icon" />
                Praktik Dokter Spesialis Senin-Sabtu
              </motion.li>
              <motion.li variants={itemVariants}>
                <CheckCircle2 size={18} className="check-icon" />
                Produk Halal & Berkualitas
              </motion.li>
            </motion.ul>
          </motion.div>

          <motion.div
            className="about-image-side"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <div className="blob-bg"></div>
            <img src={aboutImg} alt="Ivy Clinic Doctor" className="doctor-img" />
            <div className="floating-badge award-badge">
              <div className="star-icon">★</div>
              <div>
                <strong>100%</strong>
                <span>Pelayanan Syar'i</span>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default About;
