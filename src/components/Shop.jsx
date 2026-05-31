import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import phImg from '../assets/images/download (8).jpg';
import './Shop.css'; // Force HMR

// Images
import img1 from '../assets/images/Cleansing-Water-scaled.png';
import img2 from '../assets/images/Normal-To-Dry-2.png';
import img3 from '../assets/images/Facial-Foam-Normal-To-Oily.png';
import img4 from '../assets/images/Centella-Glow-Essence-scaled.png';
import img5 from '../assets/images/Rose-Glow-Essence-scaled.png';
import img6 from '../assets/images/Mineral-White-Sunscreen-1.png';
import img7 from '../assets/images/Acne-Sunscreen.png';
import img8 from '../assets/images/Lightening-Night-Cream.png';
import img9 from '../assets/images/Acne-Night-Cream.png';
import img10 from '../assets/images/Lightening-Skin-Booster.png';
import img11 from '../assets/images/Aloe-Moisturizing-Cream-1.png';
import img12 from '../assets/images/Olive-Moisturizer.png';
import img13 from '../assets/images/Revitalizing-Glow-Serum.png';
import img14 from '../assets/images/Soothing-Serum.png';

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const categories = ['ALL', 'CLEANSER', 'ESSENCE', 'SUNSCREEN', 'NIGHT CREAM', 'MOISTURIZER', 'SERUM'];

  const products = [
    { id: 1, name: "Deep Cleansing Water", desc: "Mahveen Deep Cleansing Water menggunakan senyawa saccharide yang lembut dan aman untuk kulit sensitif, dengan kandungan Aloe Vera dan Olive Oil yang dapat membantu menjaga kelembaban alami kulit dan menjadikan pori-pori wajah tampak lebih halus dan lembut.", category: "CLEANSER", img: img1 },
    { id: 2, name: "Facial Foam Normal to Dry Skin", desc: "Mahveen Facial Foam Normal to Dry Skin, sabun pembersih wajah yang lembut dengan PH normal kisaran 5.5 menggunakan bahan surfaktan utama dari Asam Amino yang dapat bekerja mengangkat kotoran di wajah tanpa menyebabkan kulit kehilangan kelembapan alaminya sehingga bisa digunakan untuk kulit sensitif.", category: "CLEANSER", img: img2 },
    { id: 3, name: "Facial Foam Normal to Oily Skin", desc: "Mahveen Facial Wash Normal to Oily Skin, Sabun pembersih wajah lembut berbahan dasar surfaktan dari Asam Amino yang dapat bekerja mengangkat kotoran di wajah tanpa menyebabkan kulit kehilangan kelembapan alaminya.", category: "CLEANSER", img: img3 },
    { id: 4, name: "Centella Glow Essence", desc: "Essence (spray) yang diformulasikan khusus untuk perawatan pori dan kondisi kulit berminyak atau berjerawat. Mencerahkan dari dalam, menjaga kelembaban dan minyak alami kulit sehingga membantu mengontrol produksi sebum", category: "ESSENCE", img: img4 },
    { id: 5, name: "Rose Glow Essence", desc: "Essence (spray) dari bahan terbaik. Niacinamide untuk mencerahkan, minyak alami mawar dan ekstrak white peony sebagai anti-aging, antioksidan, anti-polutan. Aloe vera melembapkan, cocok rawat kondisi kulit yang kering.", category: "ESSENCE", img: img5 },
    { id: 6, name: "Mineral White Sunscreen", desc: "Mahveen Mineral White Sunscreen adalah Sunscreen / Sunblock dengan kekuatan perlindungan setara dg SPF 50 / PA +++ yang melindungi kulit dari efek buruk UVA / UVB. Mahveen Mineral White Sunscreen menggunakan mineral sunscreen sehingga olesannya terasa ringan dan lembut, dan juga aman untuk untuk kulit sensitif (low allergenic).", category: "SUNSCREEN", img: img6 },
    { id: 7, name: "Acne Sunscreen", desc: "Lindungi kulit berminyak dan berjerawat dengan tabir surya khusus ini. Mengandung Niacinamide 4% yang ampuh mencerahkan wajah serta menyamarkan noda hitam bekas jerawat. Formulanya efektif mengontrol minyak berlebih, mempercepat pemulihan kulit, dan menghambat mikroba penyebab jerawat. Solusi praktis untuk wajah bersih, cerah, dan sehat.", category: "SUNSCREEN", img: img7 },
    { id: 8, name: "Lightening Night Cream", desc: "Krim malam intensif yang efektif mencerahkan wajah. Bekerja aktif dalam tiga tahap pembentukan melanin: mencegah sebelum muncul, mengatasi saat terjadi, dan memulihkan sesudahnya. Solusi tepat untuk kulit tampak lebih cerah dan noda hitam tersamarkan.", category: "NIGHT CREAM", img: img8 },
    { id: 9, name: "Acne Night Cream", desc: "Krim malam jerawat 3 tahap: Membuka pori & regenerasi kulit (Salicylic Acid), redakan radang (Aloe Vera), serta kontrol bakteri penyebab jerawat. Diperkaya Niacinamide untuk samarkan noda hitam. Wajah jadi lebih cerah, sehat, dan bebas jerawat.", category: "NIGHT CREAM", img: img9 },
    { id: 10, name: "Lightening Skin Booster", desc: "Krim malam gel dengan konsep Skin Microbium. Kandungan Orobanche Rapum Extract sebagai prebiotik menjaga keseimbangan mikrobiota kulit guna mencegah berbagai masalah kulit. Solusi inovatif untuk kulit yang lebih sehat, seimbang, dan tetap terlindungi.", category: "NIGHT CREAM", img: img10 },
    { id: 11, name: "Aloe Moisturizing Cream", desc: "Perawatan hydrating intensif dengan Hyaluronic Acid yang membantu mencerahkan, mengunci dan menjaga kelembapan alami kulit. Formulasinya menenangkan dan melindungi kulit dari iritasi. Wajah terlihat lebih segar, terhindar dari kerutan dan tanda-tanda penuaan dini.", category: "MOISTURIZER", img: img11 },
    { id: 12, name: "Olive Moisturizer", desc: "Merupakan Moisturizer Multifungsi [Humectant, Emolient dan Occlusive] dengan konsep Emulgel yang memberikan kelembaban Ekstra. Dan juga kemampuannya mengontrol minyak [Sebum Regulator] sehingga bisa digunakan untuk tipe kulit berminyak.", category: "MOISTURIZER", img: img12 },
    { id: 13, name: "Revitalizing Glow Serum", desc: "Serum yang diformulasikan untuk membantu regenerasi kulit dan mengangkat sel kulit mati dengan kandungan bahan alami yang efektif bekerja hingga lapisan terdalam kulit.", category: "SERUM", img: img13 },
    { id: 14, name: "Soothing Serum", desc: "Serum khusus untuk meredakan reaksi inflamasi yang bekerja dengan cara menghambat pembentukan mediator pro inflamasi, meningkatkan hidrasi kulit, memperbaiki skin barrier & sebagai global cell protection dalam mempercepat pemulihan kulit akibat iritasi dan kemerahan.", category: "SERUM", img: img14 }
  ];

  const filteredProducts = activeCategory === 'ALL' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <section id="shop" className="skincare-section">
      
      {/* PHILOSOPHY BLOCK */}
      <div className="skincare-philosophy">
        <div className="container ph-container">
          <motion.div 
            className="ph-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="ph-title">Filosofi baru perawatan kulit: Cantik & Sehat</h2>
            <p className="ph-desc">
              Mahveen Skincare mengedepankan kesederhanaan — formula efektif, bahan berkualitas, dan tekstur lembut yang dirancang untuk kehidupan nyata Anda sehari-hari.
            </p>
            <p className="ph-desc">
              Kami percaya perawatan kulit harus mendukung kesehatan kulit Anda, bukan membebaninya. Kombinasi ilmu pengetahuan modern dengan pendekatan minimalis, bersertifikasi, dan menenangkan.
            </p>
            <a href="https://wa.me/628111451146" className="ph-btn" target="_blank" rel="noreferrer">
              Konsultasi Kulit Sekarang
            </a>
          </motion.div>
          <motion.div 
            className="ph-image"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img src={phImg} alt="Philosophy" />
          </motion.div>
        </div>
      </div>

      {/* CATALOG BLOCK */}
      <div className="skincare-catalog">
        <div className="container">
          <motion.h2 
            className="catalog-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Katalog Produk
          </motion.h2>
          
          <motion.div 
            className="catalog-filters"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {categories.map(cat => (
              <button 
                key={cat}
                className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat === 'ALL' ? 'TAMPILKAN SEMUA' : cat}
              </button>
            ))}
          </motion.div>

          <motion.div layout className="catalog-grid">
            <AnimatePresence>
              {filteredProducts.map(product => (
                <motion.div 
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={product.id} 
                  className="catalog-item"
                >
                  <div className="item-tag-placeholder">
                    {product.tag && <span className="item-tag">{product.tag}</span>}
                  </div>
                  <div className="item-img-box">
                    <img src={product.img} alt={product.name} />
                  </div>
                  <div className="item-details">
                    <div className="item-header">
                      <h4 className="item-name">{product.name}</h4>
                    </div>
                    <p className="item-desc">{product.desc}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Shop;
