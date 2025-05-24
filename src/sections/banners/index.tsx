import Image from 'next/image';
import todopassLogo from '../../assets/banner.png';


import './styles.css';

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer__top-banner">
        <Image
          src={todopassLogo}
          alt="Todopass Logo"
          className="footer__todopass-logo"
          width={240}
          height={100}
          priority
        />
      </div>

      <div className="footer__bottom-content">
        <nav className="footer__nav">
          <ul className="footer__nav-list footer__nav-list--top">
            <li><a href="#" className="footer__nav-link">Recitales</a></li>
            <li><a href="#" className="footer__nav-link">Teatro</a></li>
            <li><a href="#" className="footer__nav-link">Eventos sociales</a></li>
            <li><a href="#" className="footer__nav-link">Varios</a></li>
            <li><a href="#" className="footer__nav-link">¿Qué es Todopass?</a></li>
          </ul>
          <ul className="footer__nav-list footer__nav-list--bottom">
            <li><a href="#" className="footer__nav-link">Preguntas Frecuentes</a></li>
            <li><a href="#" className="footer__nav-link">Contacto</a></li>
            <li><a href="#" className="footer__nav-link">Términos y Condiciones</a></li>
            <li><a href="#" className="footer__nav-link">Mi cuenta</a></li>
          </ul>
        </nav>

        <div className="footer__contact">
          <p><a href="tel:+542494622627" className="footer__contact-link">📞 2494622627</a></p>
          <p><a href="mailto:hola@todopass.com.ar" className="footer__contact-link">✉️ hola@todopass.com.ar</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;