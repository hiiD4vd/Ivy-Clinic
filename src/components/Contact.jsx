import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Stethoscope, Phone } from 'lucide-react';
import './Contact.css';

const Contact = ({ onBookClick }) => {
  return (
    <section id="contact" className="contact-section section-padding">
      <div className="container">
        
        <motion.div 
          className="services-header text-center mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="subtitle">Visit Us</span>
          <h2 className="section-title">
            Lokasi &<br />
            Jam Operasional
          </h2>
        </motion.div>

        <div className="contact-grid">
          
          {/* Info Card */}
          <motion.div 
            className="contact-info-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="info-item">
              <div className="icon-wrapper">
                <Clock size={24} />
              </div>
              <div className="info-text">
                <h3>Buka Setiap Hari</h3>
                <p>Senin - Minggu: 09.00 - 17.00 WIB</p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon-wrapper">
                <Stethoscope size={24} />
              </div>
              <div className="info-text">
                <h3>Jadwal Praktek Dokter</h3>
                <p>Senin - Sabtu: 10.00 - 16.00 WIB</p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon-wrapper">
                <Phone size={24} />
              </div>
              <div className="info-text">
                <h3>WhatsApp / Telepon</h3>
                <p>+62 811-1451-146</p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon-wrapper">
                <MapPin size={24} />
              </div>
              <div className="info-text">
                <h3>Alamat Lengkap</h3>
                <p>Jl. KH. Fudholi No.6, Karangasih, Kec. Cikarang Utara, Kabupaten Bekasi, Jawa Barat 17530</p>
              </div>
            </div>
            <button onClick={onBookClick} className="btn-dark contact-btn">
              Reservasi Sekarang
            </button>
          </motion.div>

          {/* Maps Card */}
          <motion.div 
            className="maps-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <iframe 
              src="https://maps.google.com/maps?q=Klinik%20Ivy%20Skin%20Treatment%20Cikarang&t=&z=16&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Klinik Ivy Skin Treatment"
            ></iframe>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
