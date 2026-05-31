import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import doctorHijab from '../assets/team/doctor-hijab.jpg';
import dokterHijabCantik from '../assets/team/dokter-hijab-cantik.jpg';
import dokter from '../assets/team/dokter.jpg';
import team1 from '../assets/team/team-1.jpg';
import team2 from '../assets/team/team-2.jpg';
import team3 from '../assets/team/team-3.jpg';
import './Team.css';

const teamMembers = [
  {
    id: 1,
    name: 'dr. Fatimah',
    role: 'Dokter Estetika',
    img: doctorHijab
  },
  {
    id: 2,
    name: 'dr. Aisyah',
    role: 'Dokter Kulit & Kecantikan',
    img: dokterHijabCantik
  },
  {
    id: 3,
    name: 'dr. Siti Nur',
    role: 'Aesthetic Physician',
    img: dokter
  },
  {
    id: 4,
    name: 'Kak Rania',
    role: 'Senior Therapist',
    img: team1
  },
  {
    id: 5,
    name: 'Kak Zahra',
    role: 'Beauty Therapist',
    img: team2
  },
  {
    id: 6,
    name: 'Kak Nadia',
    role: 'Therapist & Konsultan',
    img: team3
  }
];

const Team = () => {
  const [activeMember, setActiveMember] = useState(teamMembers[0]);

  return (
    <section id="team" className="team-section section-padding">
      <div className="container">
        
        <div className="team-container">
          
          {/* Image Showcase (Moved to Left) */}
          <div className="team-image-side">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeMember.id}
                className="team-image-wrapper"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.4 }}
              >
                <img src={activeMember.img} alt={activeMember.name} />
                <div className="member-info-badge">
                  <h4>{activeMember.name}</h4>
                  <p>{activeMember.role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Names List (Moved to Right) */}
          <div className="team-list-side">
            <span className="subtitle">Tim Ahli</span>
            <h2 className="section-title">Temui Dokter & Terapis Kami</h2>
            
            <div className="team-names-grid">
              {teamMembers.map((member) => (
                <div 
                  key={member.id} 
                  className={`team-name-item ${activeMember.id === member.id ? 'active' : ''}`}
                  onMouseEnter={() => setActiveMember(member)}
                  onClick={() => setActiveMember(member)}
                >
                  {member.name}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Team;
