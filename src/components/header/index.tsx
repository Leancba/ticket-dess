'use client';
import React, { useState } from 'react';
import './styles.css';
import SearchInput from '../input';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Image from 'next/image';
import banner from '../../assets/banner.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <div className="mobile-menu-button">
          <button onClick={() => setMenuOpen(!menuOpen)} className="menu-toggle">
            <MenuIcon fontSize="medium" />
          </button>
          <button onClick={() => setShowSearch(!showSearch)} className="menu-toggle">
            <SearchIcon fontSize="medium" />
          </button>
        </div>
        <div className="header-left">
          <a href="/">
            <Image src={banner} alt="TodoPass" className="logo" priority />
          </a>
        </div>

        <div className={`search-wrapper ${showSearch ? 'mobile' : ''}`}>
          <SearchInput />
        </div>

        <div className="header-right">
          <a href="/mi-cuenta" className="header-link">
            <AccountCircleIcon style={{ height: 30, width: 30 }} />
          </a>
          <a href="/carrito" className="header-link">
            <ShoppingCartIcon fontSize="medium" />
          </a>
        </div>
      </div>

      <nav className={`main-nav ${menuOpen ? 'show' : ''}`}>
        <ul className="nav-list">
          <li><a href="#">Recitales</a></li>
          <li><a href="#">Teatro</a></li>
          <li><a href="#">Eventos Sociales</a></li>
          <li><a href="#">Varios</a></li>
          <li><a href="#">¿Que es TicketDess?</a></li>
          <li><a href="#">Preguntas frecuentes</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
