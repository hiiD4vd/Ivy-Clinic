import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, CalendarCheck, Sparkles, CheckCircle2, ArrowLeft } from 'lucide-react';
import './ProposalScreen.css';

const ProposalScreen = ({ type = 'booking', onClose }) => {
  useEffect(() => {
    // Disable background scrolling when modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const isShop = type === 'shop';

  return (
    <motion.div 
      className="proposal-screen"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container proposal-container">
        <motion.div 
          className="proposal-card"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="proposal-icon-wrapper">
            {isShop ? (
              <ShoppingBag size={48} className="proposal-icon" />
            ) : (
              <CalendarCheck size={48} className="proposal-icon" />
            )}
            <Sparkles size={24} className="sparkle-icon" />
          </div>
          
          <h1 className="proposal-title">
            {isShop ? "Fitur E-Commerce" : "Fitur Reservasi Online"}<br/>
            <span className="text-highlight">Siap Diaktifkan!</span>
          </h1>
          
          <p className="proposal-desc">
            Halo <strong>Klinik Ivy Skin Treatment</strong>! Tombol ini kami rancang khusus untuk memberikan bayangan betapa mudahnya pelanggan melakukan {isShop ? "pembelian produk skincare" : "booking treatment"} secara otomatis melalui website.
          </p>

          <div className="proposal-benefits">
            <h3>Apa yang Anda dapatkan jika fitur ini aktif?</h3>
            <ul>
              {isShop ? (
                <>
                  <li><CheckCircle2 size={20} className="check" /> Pasien bisa memesan dan membayar produk secara online.</li>
                  <li><CheckCircle2 size={20} className="check" /> Mengurangi antrean chat admin WhatsApp untuk pembelian.</li>
                  <li><CheckCircle2 size={20} className="check" /> Manajemen stok dan pesanan yang lebih rapi.</li>
                  <li><CheckCircle2 size={20} className="check" /> Meningkatkan omset penjualan produk klinik.</li>
                </>
              ) : (
                <>
                  <li><CheckCircle2 size={20} className="check" /> Pasien bisa melihat jadwal dokter secara real-time.</li>
                  <li><CheckCircle2 size={20} className="check" /> Mengurangi antrean chat admin WhatsApp.</li>
                  <li><CheckCircle2 size={20} className="check" /> Manajemen data pasien yang lebih rapi dan profesional.</li>
                  <li><CheckCircle2 size={20} className="check" /> Meningkatkan kredibilitas klinik di mata pelanggan.</li>
                </>
              )}
            </ul>
          </div>

          <p className="proposal-action-text">
            Jika desain & konsep website ini sesuai dengan visi Klinik Ivy, kami dengan senang hati akan membantu mewujudkan website ini hingga beroperasi penuh.
          </p>

          <div className="proposal-buttons">
            <button onClick={onClose} className="btn-outline back-btn">
              <ArrowLeft size={18} /> Kembali ke Beranda
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProposalScreen;
