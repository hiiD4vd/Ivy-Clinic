import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
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

        <div className="about-content-wrapper centered-milestones">
          <motion.div 
            className="about-text-side text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <span className="subtitle">Tentang Ivy Clinic</span>
            <h2 className="section-title">
              Klinik Kecantikan Muslimah<br/>
              Pertama di Cikarang
            </h2>
            <p className="about-desc mx-auto" style={{ maxWidth: '700px' }}>
              Sebagai bagian dari Mahveen Skincare, Ivy Clinic berkomitmen menghadirkan pelayanan kecantikan, kosmetik, dan perawatan diri (Beauty, cosmetic & personal care) terbaik yang mengedepankan nilai-nilai Islami. 
            </p>

            <motion.ul 
              className="check-list centered-list"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', textAlign: 'left', maxWidth: '800px', margin: '2rem auto' }}
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
        </div>

      </div>
    </section>
  );
};

export default About;
