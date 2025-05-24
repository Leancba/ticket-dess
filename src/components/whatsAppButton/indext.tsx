'use client';
import React, { useEffect, useState } from 'react';
import './styles.css';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const WhatsappButton = () => {
  const [shake, setShake] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <a
      href="https://wa.me/5491123456789"
      target="_blank"
      rel="noopener noreferrer"
      className={`whatsapp-btn ${shake ? 'shake' : ''}`}
    >
      <WhatsAppIcon style={{ fontSize: 36, color: 'white' }} />
    </a>
  );
};

export default WhatsappButton;
