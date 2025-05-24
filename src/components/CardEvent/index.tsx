'use client';

import Image from 'next/image';
import { Event, LocationOn, ShoppingCart } from '@mui/icons-material';
import { motion } from 'framer-motion';
import './styles.css';

const CardEvent = ({
  imageSrc,
  title,
  date,
  location,
}: {
  imageSrc: string;
  title: string;
  date: string;
  location: string;
}) => {
  return (
    <motion.div
      className="card-event"
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="card-event__image-container">
        <Image src={imageSrc} alt={title} fill className="card-event__image" />
      </div>
      <div className="card-event__content">
        <h3 className="card-event__title">{title}</h3>
        <div className="card-event__info">
          <Event fontSize="small" />
          <span>{date}</span>
        </div>
        <div className="card-event__info">
          <LocationOn fontSize="small" />
          <span>{location}</span>
        </div>
        <button className="card-event__button">
          <ShoppingCart fontSize="small" className="card-event__button-icon" />
          Comprar entrada
        </button>
      </div>
    </motion.div>
  );
};

export default CardEvent;
