'use client';

import CardEvent from "@/components/CardEvent";
import { motion } from 'framer-motion';
import './styles.css'

const eventos = [
  {
    imageSrc: 'https://www.todopass.com.ar/585-home_default/abril-sosa.jpg',
    title: 'Un evento',
    date: 'Sabado 5 de julio',
    location: 'Córdoba Capital',
    isNew: true
  },
  {
    imageSrc: 'https://www.todopass.com.ar/584-home_default/gran-gala-de-ballet-en-trelew.jpg',
    title: 'Un evento',
    date: 'Sabado 5 de julio',
    location: 'Villa Carlos Paz',
    isNew: true
  },
  {
    imageSrc: 'https://www.todopass.com.ar/582-home_default/gran-gala-de-ballet.jpg',
    title: 'Un evento',
    date: 'Sabado 5 de julio',
    location: 'Alta Gracia',
  },
  {
    imageSrc: 'https://www.todopass.com.ar/576-home_default/fabian-vena-presenta-quien-soy-yo.jpg',
    title: 'Un evento',
    date: 'Sabado 5 de julio',
    location: 'Alta Gracia',
    isNew: true
  },
  {
    imageSrc: 'https://www.todopass.com.ar/575-home_default/caligula-un-musical-de-pepe-cibrian-.jpg',
    title: 'Un evento',
    date: 'Sabado 5 de julio',
    location: 'Alta Gracia',
    isNew: true
  },
  {
    imageSrc: 'https://www.todopass.com.ar/573-home_default/tandilia-trail.jpg',
    title: 'Un evento',
    date: 'Sabado 5 de julio',
    location: 'Alta Gracia',
    isNew: true
  },
  {
    imageSrc: 'https://www.todopass.com.ar/572-home_default/adrian-barilari-canciones-doradas-ii.jpg',
    title: 'Un evento',
    date: 'Sabado 5 de julio',
    location: 'Alta Gracia',
  },
  {
    imageSrc: 'https://www.todopass.com.ar/568-home_default/vieja-minga-.jpg',
    title: 'Un evento',
    date: 'Sabado 5 de julio',
    location: 'Alta Gracia',
  },
  {
    imageSrc: 'https://www.todopass.com.ar/580-home_default/tandil-ab-20.jpg',
    title: 'Un evento',
    date: 'Sabado 5 de julio',
    location: 'Alta Gracia',
    isNew: true
  },
  {
    imageSrc: 'https://www.todopass.com.ar/567-home_default/piti-fernandez.jpg',
    title: 'Un evento',
    date: 'Sabado 5 de julio',
    location: 'Alta Gracia',
    isNew: true
  },
  {
    imageSrc: 'https://www.todopass.com.ar/563-home_default/lisandro-aristimuno.jpg',
    title: 'Un evento',
    date: 'Sabado 5 de julio',
    location: 'Alta Gracia',
    isNew: true
  },
  {
    imageSrc: 'https://www.todopass.com.ar/519-home_default/la-beriso.jpg',
    title: 'Un evento',
    date: 'Sabado 5 de julio',
    location: 'Alta Gracia',
    isNew: true
  },
];

const EventSection = () => {
  return (

    <section>
      <motion.div
        className="event-section"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        {eventos.map((evento, index) => (
          <CardEvent key={index} {...evento} />
        ))}
      </motion.div>
    </section>
  );
};

export default EventSection;
