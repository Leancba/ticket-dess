import { Instagram, Facebook } from '@mui/icons-material';
import { motion } from 'framer-motion';
import './styles.css';

const SocialLinksSection = () => {
  return (
    <section className="social-links-section">
      <motion.div
        className="social-links-section__item"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <Instagram className="social-links-section__icon" />
        <span>Instagram</span>
      </motion.div>

      <motion.div
        className="social-links-section__item"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <Facebook className="social-links-section__icon" />
        <span>Facebook</span>
      </motion.div>
    </section>
  );
};

export default SocialLinksSection;
