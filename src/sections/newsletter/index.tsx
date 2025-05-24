'use client';

import './styles.css'

const NewsletterSection = () => {
  return (
    <section className="newsletter-section">
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
    </section>
  );
};

export default NewsletterSection;

