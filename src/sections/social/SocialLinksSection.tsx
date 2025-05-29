'use client';

import { Instagram, Facebook, Twitter } from '@mui/icons-material';
import { motion } from 'framer-motion';
import './styles.css';

const SocialLinksSection = () => {
  return (
    <section className="social-links-section">
      <motion.div
        className="social-links-section__item"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <Instagram className="social-links-section__icon" />
        <span>Instagram</span>
      </motion.div>

      <motion.div
        className="social-links-section__item"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <Facebook className="social-links-section__icon" />
        <span>Facebook</span>
      </motion.div>

      <motion.div
        className="social-links-section__item"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <Twitter className="social-links-section__icon" />
        <span>Twitter</span>
      </motion.div>
    </section>
  );
};

export default SocialLinksSection;
