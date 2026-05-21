import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import './Shop.css';

const Shop = () => {
  const products = [
    {
      id: 1,
      name: "Mahveen Brightening Serum",
      desc: "Serum pencerah dengan Niacinamide dan Alpha Arbutin.",
      price: "Rp 150.000",
      img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=400"
    },
    {
      id: 2,
      name: "Mahveen Sunscreen Gel SPF 50",
      desc: "Proteksi maksimal UVA/UVB tanpa whitecast.",
      price: "Rp 120.000",
      img: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=400"
    },
    {
      id: 3,
      name: "Mahveen Acne Spot Care",
      desc: "Obat jerawat totol ampuh meredakan inflamasi semalaman.",
      price: "Rp 85.000",
      img: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&q=80&w=400"
    },
    {
      id: 4,
      name: "Mahveen Gentle Cleanser",
      desc: "Pembersih wajah pH balance yang lembut untuk semua jenis kulit.",
      price: "Rp 95.000",
      img: "https://images.unsplash.com/photo-1556228720-192a6af4e865?auto=format&fit=crop&q=80&w=400"
    }
  ];

  return (
    <section id="shop" className="shop-section">
      <div className="container">
        
        <div className="shop-header">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="shop-title-wrapper"
          >
            <h2 className="section-title">Mahveen <span className="text-gradient">Skincare</span></h2>
            <p className="section-subtitle" style={{ margin: 0, textAlign: 'left' }}>
              Rangkaian produk perawatan kulit eksklusif dari IVY Clinic untuk hasil maksimal di rumah.
            </p>
          </motion.div>
          
          <motion.a 
            href="https://wa.me/628111451146" 
            target="_blank" 
            rel="noreferrer"
            className="btn-secondary flex-btn"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            Pesan via WhatsApp <ShoppingBag size={18} />
          </motion.a>
        </div>

        <div className="products-grid">
          {products.map((product, index) => (
            <motion.div 
              key={product.id}
              className="product-card glass"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="product-img-wrapper">
                <img src={product.img} alt={product.name} className="product-img" />
                <button className="add-to-cart-btn">
                  Beli Sekarang
                </button>
              </div>
              <div className="product-info">
                <h4>{product.name}</h4>
                <p>{product.desc}</p>
                <div className="product-price">{product.price}</div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Shop;
