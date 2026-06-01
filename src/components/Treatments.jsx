import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Local treatment images
import t1 from '../assets/images/treatments/treatment-1.jpg';   // masker wajah pijat
import t2 from '../assets/images/treatments/treatment-2.jpg';   // ice globe
import t3 from '../assets/images/treatments/treatment-3.jpg';   // pijat wajah lembut
import t4 from '../assets/images/treatments/treatment-4.jpg';   // alat laser/microderm
import t5 from '../assets/images/treatments/treatment-5.jpg';   // facial foam/cleansing
import t6 from '../assets/images/treatments/treatment-6.jpg';   // spa suasana ungu
import t8 from '../assets/images/treatments/treatment-8.jpg';   // alat injeksi/needle
import t9 from '../assets/images/treatments/treatment-9.jpg';   // facial mask clay
import t10 from '../assets/images/treatments/treatment-10.jpg'; // laser/ipl wajah
import t11 from '../assets/images/treatments/treatment-11.jpg'; // facial spa relaxing

import './Treatments.css';

const Treatments = ({ onBookClick }) => {
  const [activeTab, setActiveTab] = useState('all');

  const treatmentsData = [
    {
      id: 'f1',
      category: 'facial',
      name: 'Relaxing Ball Facial',
      desc: 'Memperlancar peredaran darah, mengencangkan wajah, mencerahkan dan me-refreshing wajah.',
      originalPrice: 'Rp 500.000',
      price: 'Rp 350.000',
      discount: '30%',
      img: t2
    },
    {
      id: 'f2',
      category: 'facial',
      name: 'Facial Spa (4 in 1)',
      desc: 'Double cleansing, Ekstraksi komedo, Vapozone (uap), & Totok wajah.',
      originalPrice: 'Rp 250.000',
      price: 'Rp 175.000',
      discount: '30%',
      img: t1
    },
    {
      id: 'f3',
      category: 'facial',
      name: 'Facial Oxy Glow',
      desc: 'Memperbaiki sirkulasi darah, meningkatkan kadar oxygen, & menghidrasi kulit.',
      originalPrice: 'Rp 135.000',
      price: 'Rp 94.000',
      discount: '30%',
      img: t11
    },
    {
      id: 'f4',
      category: 'facial',
      name: 'Facial Sensitive Skin',
      desc: 'Menenangkan kulit iritasi, kemerahan, kering. Aman untuk ibu hamil dan menyusui.',
      originalPrice: 'Rp 400.000',
      price: 'Rp 280.000',
      discount: '30%',
      img: t3
    },
    {
      id: 'f5',
      category: 'facial',
      name: 'Facial Acne',
      desc: 'Meredakan kemerahan, mengecilkan pori-pori, dan mengurangi minyak berlebih.',
      originalPrice: 'Rp 120.000',
      price: 'Rp 84.000',
      discount: '30%',
      img: t5
    },
    {
      id: 'f6',
      category: 'facial',
      name: 'Facial Ozon Jet Peel PDT',
      desc: 'Mengangkat sel kulit mati, meningkatkan produksi kolagen & sirkulasi darah, melembabkan.',
      originalPrice: 'Rp 225.000',
      price: 'Rp 157.000',
      discount: '30%',
      img: t9
    },
    {
      id: 'l1',
      category: 'laser',
      name: 'Photo Facial Instan Glow',
      desc: 'Memudarkan flek & redness, kulit lebih cerah & glowing, melembabkan.',
      originalPrice: 'Rp 1.200.000',
      price: 'Rp 600.000',
      discount: '50%',
      img: t10
    },
    {
      id: 'l2',
      category: 'laser',
      name: 'Acne Phototherapy',
      desc: 'Mencegah munculnya jerawat, meredakan kemerahan, mencerahkan kulit.',
      originalPrice: 'Rp 700.000',
      price: 'Rp 350.000',
      discount: '50%',
      img: t4
    },
    {
      id: 'l3',
      category: 'laser',
      name: 'IPL Rejuve',
      desc: 'Menyamarkan noda hitam, garis wajah & kerutan, melembabkan, mencerahkan.',
      originalPrice: 'Rp 700.000',
      price: 'Rp 350.000',
      discount: '50%',
      img: t10
    },
    {
      id: 'm1',
      category: 'medis',
      name: 'Hydra Tox',
      desc: 'Mengontrol keringat berlebih (Hiperhidrosis) di ketiak, telapak tangan, & kaki. Bye BASKET!',
      originalPrice: 'Rp 2.000.000',
      price: 'Rp 1.000.000',
      discount: '50%',
      img: t8
    },
    {
      id: 'm2',
      category: 'medis',
      name: 'Skin Booster Artis - Face',
      desc: 'Mengurangi garis halus, menunda penuaan dini, memperbaiki tekstur, elastisitas, & rona kulit.',
      originalPrice: 'Rp 2.000.000',
      price: 'Rp 1.600.000',
      discount: '20%',
      img: t8
    },
    {
      id: 'p1',
      category: 'paket',
      name: 'Paket Barbie Glow',
      desc: 'Wajah glowing, bulu mata lentik, bibir merah alami (Barbie Photo BB Glow + Lash Lift).',
      originalPrice: 'Rp 1.500.000',
      price: 'Rp 750.000',
      discount: '50%',
      img: t6
    },
    {
      id: 'p2',
      category: 'paket',
      name: 'Peeling Acne Premium',
      desc: 'Mengangkat sel kulit mati, meregenerasi sel kulit, membantu penyembuhan jerawat.',
      originalPrice: 'Rp 450.000',
      price: 'Rp 350.000',
      discount: '30%',
      img: t9
    },
    {
      id: 'p3',
      category: 'paket',
      name: 'Woman Brazilian Hair Removal + Peeling Miss V',
      desc: 'Promo Glow Up Face & Body khusus bulan ini.',
      originalPrice: 'Rp 1.300.000',
      price: 'Rp 1.040.000',
      discount: 'Promo',
      img: t11
    },
    {
      id: 'p4',
      category: 'paket',
      name: 'RF Payudara + Peeling Areola',
      desc: 'Promo Glow Up Face & Body khusus bulan ini.',
      originalPrice: 'Rp 750.000',
      price: 'Rp 675.000',
      discount: 'Promo',
      img: t3
    },
    {
      id: 'p5',
      category: 'paket',
      name: 'Hifu Full Face + Peeling Ketiak Premium',
      desc: 'Promo Glow Up Face & Body khusus bulan ini.',
      originalPrice: 'Rp 2.600.000',
      price: 'Rp 1.300.000',
      discount: '50%',
      img: t4
    },
    {
      id: 'p6',
      category: 'paket',
      name: 'DNA Salmon Platinum + Peeling Ketiak Premium',
      desc: 'Promo Glow Up Face & Body khusus bulan ini.',
      originalPrice: 'Rp 2.200.000',
      price: 'Rp 2.090.000',
      discount: 'Promo',
      img: t8
    }
  ];

  const filtered = activeTab === 'all' ? treatmentsData : treatmentsData.filter(t => t.category === activeTab);

  return (
    <section id="treatments" className="services-section section-padding">
      <div className="container">
        
        <motion.div 
          className="services-header text-center mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="subtitle">Promo Terbatas</span>
          <h2 className="section-title">
            Spesial Menu Treatment<br />
            Klinik Ivy
          </h2>
        </motion.div>

        <motion.div 
          className="services-filter"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <button className={`filter-btn ${activeTab === 'all' ? 'active' : ''}`} onClick={() => setActiveTab('all')}>Semua Promo</button>
          <button className={`filter-btn ${activeTab === 'facial' ? 'active' : ''}`} onClick={() => setActiveTab('facial')}>Facial & Peeling</button>
          <button className={`filter-btn ${activeTab === 'laser' ? 'active' : ''}`} onClick={() => setActiveTab('laser')}>Laser & Light</button>
          <button className={`filter-btn ${activeTab === 'medis' ? 'active' : ''}`} onClick={() => setActiveTab('medis')}>Injeksi & Medis</button>
          <button className={`filter-btn ${activeTab === 'paket' ? 'active' : ''}`} onClick={() => setActiveTab('paket')}>Paket Glow Up</button>
        </motion.div>

        <motion.div 
          className="services-grid"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item, index) => (
              <motion.div 
                key={item.id} 
                className="service-card"
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: (index % 10) * 0.1 }}
              >
                <div className="service-img-wrapper">
                  {item.discount && item.discount !== 'Promo' && <div className="discount-badge">{item.discount} OFF</div>}
                  <img src={item.img} alt={item.name} className="service-img" />
                </div>
                <div className="service-info">
                  <div className="service-number">0{index + 1}.</div>
                  <div className="service-subtitle">{item.category}</div>
                  <h3>{item.name}</h3>
                  <div className="service-divider"></div>
                  <p className="service-desc">{item.desc}</p>
                  
                  <div className="price-row">
                    <div>
                      <span className="original-price">{item.originalPrice}</span>
                      <span className="price">{item.price}</span>
                    </div>
                    <button onClick={onBookClick} className="view-btn">
                      BOOK NOW <span className="arrow">&gt;</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Treatments;
