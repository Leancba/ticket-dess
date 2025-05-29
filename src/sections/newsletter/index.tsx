'use client';
import './styles.css';
import { motion } from 'framer-motion';

const NewsletterSection = () => {
  return (
    <motion.section
      className="newsletter-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }} 
    >
      <video
        src="/video.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="newsletter-section__video"
      />
      <div className="newsletter-section__overlay" />
      
      <div className="newsletter-section__content">
        <h2 className="newsletter-section__title">Suscribite a nuestro Newsletter</h2>
        <p className="newsletter-section__subtitle">
          y enterate de todos los eventos en tu ciudad
        </p>
        <form className="newsletter-section__form" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Ingresá tu email"
            className="newsletter-section__input"
            required
          />
          <button type="submit" className="newsletter-section__button">
            Suscribirse
          </button>
        </form>
      </div>
    </motion.section>
  );
};

export default NewsletterSection;