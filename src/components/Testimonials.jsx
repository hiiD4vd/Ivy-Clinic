import React from 'react';
import { motion } from 'framer-motion';
import './Testimonials.css';

const Testimonials = () => {
  // Generate many mock testimonials for the marquee
  const generateTestimonials = (startId, count) => {
    const names = ["Siti Aisyah", "Nisa", "Rina Amelia", "Dian S.", "Tari", "Maya Sari", "Putri", "Indah", "Vina", "Lestari", "Desy", "Anita", "Fitri"];
    const reviews = [
      "Treatment di Ivy Clinic beneran nyata hasilnya! Wajah jadi auto glowing.",
      "Pelayanan sangat ramah dan dokternya detail banget ngejelasin.",
      "Facialnya enak banget, ga sakit waktu ekstraksi komedo. Luv!",
      "Tempatnya nyaman, bersih, dan super estetik. Bikin betah lama-lama.",
      "Habis laser flek langsung memudar, recommended banget pokoknya.",
      "Harga sangat affordable dengan hasil yang premium. Puas banget!",
      "Baru pertama kali ke sini dan langsung jatuh cinta sama facial spa-nya.",
      "Bulu mata lentik dan wajah cerah setelah ambil Paket Barbie Glow.",
      "Konsultasi dokter gratis dan sangat solutif buat jerawat aku.",
      "Therapistnya sabar dan telaten. The best clinic in town!"
    ];

    return Array.from({ length: count }).map((_, i) => {
      const id = startId + i;
      return {
        id,
        name: names[id % names.length],
        text: reviews[id % reviews.length],
        avatar: `https://i.pravatar.cc/100?img=${(id % 50) + 1}`
      };
    });
  };

  const row1 = generateTestimonials(0, 8);
  const row2 = generateTestimonials(8, 8);
  const row3 = generateTestimonials(16, 8);

  const MarqueeRow = ({ items, direction = 'left', speed = 'normal' }) => (
    <div className={`marquee-container ${speed}`}>
      <div className={`marquee-content scroll-${direction}`}>
        {/* Original items */}
        {items.map(review => (
          <div key={`orig-${review.id}`} className="review-card">
            <div className="review-header">
              <img src={review.avatar} alt={review.name} className="review-avatar" />
              <div className="review-author-info">
                <h4>{review.name}</h4>
              </div>
            </div>
            <p className="review-text">"{review.text}"</p>
          </div>
        ))}
        {/* Duplicated items for infinite scroll effect */}
        {items.map(review => (
          <div key={`dup-${review.id}`} className="review-card">
            <div className="review-header">
              <img src={review.avatar} alt={review.name} className="review-avatar" />
              <div className="review-author-info">
                <h4>{review.name}</h4>
              </div>
            </div>
            <p className="review-text">"{review.text}"</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="reviews" className="testimonials-section section-padding">
      <div className="container" style={{ padding: 0, maxWidth: '100%', overflow: 'hidden' }}>
        
        <motion.h2 
          className="section-title text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Bukti Nyata<br />
          Before & After
        </motion.h2>
        
        <p className="text-center mb-4" style={{ color: 'rgba(255,255,255,0.8)' }}>
          Apa kata mereka yang sudah merasakan treatment di Klinik Ivy?
        </p>

        <div className="testimonials-marquee-wrapper">
          <MarqueeRow items={row1} direction="left" speed="fast" />
          <MarqueeRow items={row2} direction="right" speed="slow" />
          <MarqueeRow items={row3} direction="left" speed="normal" />
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
