import './styles.css';
import Image from 'next/image';
import { Phone, Email } from '@mui/icons-material';


const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer__side-image-left">
        <Image src="/credits-cards.png" alt="credit-cards" width={153} height={40} />
      </div>

      <div className="footer__bottom-content">

        <nav className="footer__nav">
          <ul className="footer__nav-list">
            <li><a href="#" className="footer__nav-link">Recitales</a></li>
            <li><a href="#" className="footer__nav-link">Teatro</a></li>
            <li><a href="#" className="footer__nav-link">Eventos sociales</a></li>
            <li><a href="#" className="footer__nav-link">Varios</a></li>
            <li><a href="#" className="footer__nav-link">¿Qué es Todopass?</a></li>
            <li><a href="#" className="footer__nav-link">Preguntas Frecuentes</a></li>
            <li><a href="#" className="footer__nav-link">Contacto</a></li>
            <li><a href="#" className="footer__nav-link">Términos y Condiciones</a></li>
            <li><a href="#" className="footer__nav-link">Mi cuenta</a></li>
          </ul>
        </nav>

        <div className="footer__contact">
          <div className="footer__contact-item">
            <Phone fontSize="small" />
            <a href="tel:+542494622627" className="footer__contact-link">2494622627</a>
          </div>
          <div className="footer__contact-item">
            <Email fontSize="small" />
            <a href="mailto:hola@todopass.com.ar" className="footer__contact-link">hola@todopass.com.ar</a>
          </div>
        </div>
      </div>

      <div className="footer__side-image-right">
        <Image
          src="https://www.afip.gob.ar/images/f960/DATAWEB.jpg"
          alt="afip"
          width={50}
          height={70}
        />
      </div>

    </footer>
  );
};

export default Footer;
